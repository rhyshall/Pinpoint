import './IntelliMap.css';
import React, {Component} from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import {DFLT_LAT, DFLT_LNG, DFLT_BOUNDS} from '../../../shared/Const';
import {DFLT_GAME_ZOOM, DFLT_GAME_MAX_ZOOM, DFLT_GAME_MIN_ZOOM} from '../../../shared/Const';
import {CANADA_MAP, US_MAP} from '../../../shared/Const';
import {CANADA_CITY_FILE, US_CITY_FILE} from '../../../shared/Const';
import {BOT_MODE, LOCAL_MODE, NETWORK_MODE} from '../../../shared/Const';
import {TURN_WAIT_TIME, ROUND_WAIT_TIME, CORRECT_ANSWER_RESPONSES} from '../../../shared/Const';
import {EASY_BOT_WAIT_MAX, MEDIUM_BOT_WAIT_MAX, HARD_BOT_WAIT_MAX} from '../../../shared/Const';
import {EASY_MODE, MEDIUM_MODE, HARD_MODE} from '../../../shared/Const';
import {BOT_CORRECT_PRECISION, BOT_FOCUS_ZOOM, BOT_ZOOM_TIME_RANGE} from '../../../shared/Const';
import {random} from '../../../shared/Common';
import BotOutcomeText from '../../BotOutcome/BotOutcomeText';
import axios from 'axios';

class IntelliMap extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {cities: Array.from({length: this.props.cityCnt}),
                  spawnCities: Array.from({length: this.props.spawnCnt}),
                  targetCity: null,
                  spawnCoords: Array.from({length: this.props.spawnCnt}),
                  botMaxWait: 0,
                  zoom: DFLT_GAME_ZOOM,
                  latitude: DFLT_LAT,
                  longitude: DFLT_LNG,
                  markers: Array.from({length: this.props.spawnCnt}),
                  isBotSelect: false,
                  miss: false,
                  popUpVisible: false};
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
  }

  selectCityFile(mapType)
  {
    let cityFile = null;

    switch(mapType)
    {
      case CANADA_MAP: cityFile = CANADA_CITY_FILE;
                       break;
      case US_MAP: cityFile = US_CITY_FILE 
                   break;
      default: cityFile = US_CITY_FILE;
               break;
    }

    return cityFile;
  }

  async loadCities()
  {
    let res = null;
    let i = 0;
    let city = {};
    let cityList = [];
    let cityCnt = this.props.cityCnt;
    let cityFile = null;
    
    cityFile = this.selectCityFile(this.props.mapType);
   
    try 
    {
      res = await axios.get(cityFile);
    }
    catch(err)
    {
      alert(`We are currently experiencing an issue 😭😭😭 ${'\n\n'}` + 
            'Please try again later');
    }

    for(i = 0; i < cityCnt; i++)
    {
      city = res.data[i];
      cityList.push(city);
    }

    this.setState({cities: cityList},() => 
                                     {
                                       this.chooseCities();
                                     });
  }

  chooseCities()
  {
    let upperBound = this.props.spawnCnt;
    let index = 0;
    let randIndex = 0;
    let spawnList = [];
    let chosenCity = {};
    let chosenNbrs = [];

    while(index < upperBound)
    {
      randIndex = random(this.props.cityCnt);

      //keep getting random nbr until not a duplicate
      while (chosenNbrs.includes(randIndex))
      {
        randIndex = random(this.props.cityCnt);
      }

      chosenNbrs.push(randIndex);
      spawnList.push(this.state.cities[randIndex]);
      
      index++;
    }
    
    randIndex = random(this.props.spawnCnt);
    chosenCity = spawnList[randIndex];
   
    this.setState({spawnCities: spawnList,
                   targetCity: chosenCity}, 
                  () => 
                  {
                    this.setMarkers();
                  });
    
    this.props.updateTargetCity(chosenCity.City,
                                chosenCity.Population);
  }

  focusBot(lat,
           lng)
  {
    this.setState({zoom: BOT_FOCUS_ZOOM,
                   latitude: lat,
                   longitude: lng});
  }

  returnFocus()
  {
    this.setState({zoom: DFLT_GAME_ZOOM,
                   latitude: DFLT_LAT,
                   longitude: DFLT_LNG});
  }

  handleGuess(cityChoice,
              populationChoice,
              latitudeChoice,
              longitudeChoice)
  {
    let spawnCityList = Array.from(this.state.spawnCities);
    let markersList = Array.from(this.state.markers);
    let isBotTurn = this.props.mode === BOT_MODE
                    && this.props.activePlayer === this.props.playerTwo;
    let botZoomTime = random(BOT_ZOOM_TIME_RANGE * 1000)+800;
    
    if (isBotTurn) 
    {
      this.focusBot(latitudeChoice,
                    longitudeChoice);
    }
    else 
    {
      //stop turn timer
      this.props.stopTimer();
    }
    
    if (cityChoice === this.state.targetCity.City
        && populationChoice === this.state.targetCity.Population
        && Number(latitudeChoice) === this.state.targetCity.Latitude 
        && Number(longitudeChoice) === this.state.targetCity.Longitude) 
    {
      if (isBotTurn)
      {
        setTimeout(() => 
                   {
                     //stop turn timer
                     this.props.stopTimer();

                     this.clearDecoys();
                     this.setState({popUpVisible: true},
                                   this.endRound());
                   }, 
                   botZoomTime);
      }
      else 
      {
        this.clearDecoys();
        this.endRound();
      }
    }
    else 
    {
      if (isBotTurn)
      {
        setTimeout(() => 
                   {
                     //stop turn timer
                     this.props.stopTimer();

                     spawnCityList.splice(spawnCityList.map(c => c.City).indexOf(cityChoice), 
                                          1);
                     markersList.splice(spawnCityList.map(c => c.City).indexOf(cityChoice), 
                                        1);
                     
                     this.setState({spawnCities: spawnCityList,
                                    markers: markersList,
                                    popUpVisible: true},
                                   this.forceUpdate());    
                     this.endTurn();         
                   },
                   botZoomTime);
      }
      else 
      {
        spawnCityList.splice(spawnCityList.map(c => c.City).indexOf(cityChoice), 
                             1);
        this.setState({spawnCities: spawnCityList},
                      this.endTurn());
      }

      this.setMarkers();
    }
  }

  clickCorrectMarker()
  {
    this.setState({miss: false},
                  this.handleGuess(this.state.targetCity.City,
                                   this.state.targetCity.Population,
                                   this.state.targetCity.Latitude,
                                   this.state.targetCity.Longitude));
    
  }

  clickDecoyMarker()
  {
    let cityChoice = this.state.targetCity.City;
    let populationChoice = this.state.targetCity.Population;
    let longitudeChoice = this.state.targetCity.Latitude;
    let latitudeChoice = this.state.targetCity.Longitude;
    let spawnCityList = Array.from(this.state.spawnCities);
    let cityCnt = spawnCityList.length;
    let rand = 0;
    
    while (cityChoice === this.state.targetCity.City
           && populationChoice === this.state.targetCity.Population
           && longitudeChoice === this.state.targetCity.Latitude
           && latitudeChoice === this.state.targetCity.Longitude)
    {
      rand = random(cityCnt);
    
      cityChoice = spawnCityList[rand].City;
      populationChoice = spawnCityList[rand].Population;
      latitudeChoice = spawnCityList[rand].Latitude;
      longitudeChoice = spawnCityList[rand].Longitude;
    }
    
    this.setState({miss: true},
                  this.handleGuess(cityChoice,
                                   populationChoice,
                                   latitudeChoice,
                                   longitudeChoice));
  }

  calcBotCorrect(correctRatio)
  {
    let botCorrect = false;
    let rand = random(BOT_CORRECT_PRECISION);
    let correctThreshold = correctRatio * BOT_CORRECT_PRECISION;

    if (rand <= correctThreshold)
    {
      botCorrect = true;
    }
    else 
    {
      botCorrect = false;
    }

    return botCorrect;
  }

  botSelect()
  {
    let waitTime = 1;

    while (waitTime <= 1)
    {
      waitTime = random(this.state.botMaxWait * 1000)+500;
    }

    let correctRatio = this.props.getBotChoiceRatio(this.state.spawnCities.length);
    let isCorrect = this.calcBotCorrect(correctRatio);
    
    setTimeout(() => 
    {
      if (isCorrect) 
      {
        this.clickCorrectMarker();
      }
      else 
      {
        this.clickDecoyMarker();
      }
    }, 
    waitTime);
  }

  checkBotTurn()
  {
    if (this.props.mode === BOT_MODE)
    {
      if (this.props.activePlayer === this.props.playerTwo)
      {
        if (!this.state.isBotSelect)
        {
          this.setState({isBotSelect: true},
                        this.botSelect());
        }
      }
      else 
      {
        this.setState({isBotSelect: false});
      }
    }
  }

  setMarkers()
  {
    let enabled = !this.props.endTurn && !this.props.disableMap;
    let markerList = Array.from({length: this.props.spawnCnt});
    
    markerList = this.state.spawnCities.every(c => c) ? 
                 this.state.spawnCities.map((c, i) => 
                 {    
                   return <Marker id={`${c.City}_${c.Population}_${c.Latitude}_${c.Longitude}`}
                           key={`marker-${c.City}-${c.Population}-${c.Latitude}-${c.Longitude}`} 
                           className="--im-marker"
                           position={[c.Latitude, 
                                      c.Longitude]}
                           riseOnHover={true}
                           riseOffset={250}
                           onClick={enabled ? 
                                    this.handleMarkerClick : null}>
                           <Popup className="--im-pop-up"
                                  closeButton={false}>
                             {CORRECT_ANSWER_RESPONSES[random(CORRECT_ANSWER_RESPONSES.length-1)]}
                           </Popup>                          
                   </Marker>;
                 }) : null;
    
    this.setState({markers: markerList},
                  this.checkBotTurn()); 
  }

  setBotConfig()
  {
    if (this.props.difficulty === EASY_MODE)
    {
      this.setState({botMaxWait: EASY_BOT_WAIT_MAX});
    }
    else if (this.props.difficulty === MEDIUM_MODE) 
    {
      this.setState({botMaxWait: MEDIUM_BOT_WAIT_MAX});
    }
    else 
    {
      this.setState({botMaxWait: HARD_BOT_WAIT_MAX});
    }
  }

  clearDecoys()
  {
    let spawnCityList = this.state.spawnCities;
    let targetIndex = this.state.spawnCities.indexOf(this.state.targetCity);

    spawnCityList.splice(targetIndex+1,
                         spawnCityList.length-1);
    spawnCityList.splice(0, 
                         targetIndex);

    this.setState({spawnCities: spawnCityList},
                   () => 
                   {
                    this.setMarkers();
                   });
  }

  endRound()
  {
    this.props.setEndRound();
    setTimeout(() => 
    {
      this.props.nextTurn();
      this.chooseCities();

      this.setState({endTurn: false,
                     popUpVisible: false});
      this.returnFocus();
      this.props.raiseScore();
    },
    ROUND_WAIT_TIME);
  }

  endTurn()
  {
    this.props.setEndTurn();

    setTimeout(() => 
    {
      this.props.nextTurn();
      this.returnFocus();
      this.setState({popUpVisible: false});
      this.setMarkers();
    },
    TURN_WAIT_TIME);
  }

  handleMarkerClick(e)
  {
    let [cityChoice, 
         populationChoice, 
         latitudeChoice, 
         longitudeChoice] = e.target.options.id.split('_');
    
    this.handleGuess(cityChoice,
                     populationChoice,
                     latitudeChoice,
                     longitudeChoice);          
  }

  componentDidMount()
  {
    if (this.state.cities.some(c => !c))
    {
      this.loadCities();

      if (this.props.mode === BOT_MODE) 
      {
        this.setBotConfig();
      }
    }
    else 
    {
      this.setMarkers();     
    }
  }

  render()
  {
    return(<div>
             <Map className="--im-map"
                  center={[this.state.latitude, 
                           this.state.longitude]}
                  zoom={this.state.zoom}
                  minZoom={DFLT_GAME_MIN_ZOOM}
                  maxZoom={DFLT_GAME_MAX_ZOOM}
                  maxBounds={DFLT_BOUNDS}
                  style= {this.state.isBotSelect ? {"cursor": "none"} : {"cursor": "default"}}>
               <TileLayer attribution='&copy; <a href="https://www.openstreetmap. orgcopyright">OpenStreetMap</ a> contributors'  
                        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"/> 
               {this.state.markers}
             </Map>
             <BotOutcomeText miss={this.state.miss}
                             name={this.props.activePlayer}
                             visible={this.state.popUpVisible}></BotOutcomeText>
           </div>);

  }
}

export default IntelliMap;