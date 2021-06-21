import './IntelliMap.css';
import React, {Component} from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import {DFLT_LAT, DFLT_LNG, DFLT_BOUNDS} from './Const';
import {DFLT_ZOOM, DFLT_MAX_ZOOM, DFLT_MIN_ZOOM} from './Const';
import {CANADA_MAP, US_MAP} from './Const';
import {CANADA_CITY_FILE, US_CITY_FILE} from './Const';
import {TURN_WAIT_TIME, ROUND_WAIT_TIME, CORRECT_ANSWER_RESPONSES} from './Const';
import {random} from './Common';
import axios from 'axios';

class IntelliMap extends Component
{
  static defaultProps = {lat: DFLT_LAT,
                         lng: DFLT_LNG,
                         zoom: DFLT_ZOOM,
                         minZoom: DFLT_MIN_ZOOM,
                         maxZoom: DFLT_MAX_ZOOM,
                         maxBounds: DFLT_BOUNDS,
                         correctResponses: CORRECT_ANSWER_RESPONSES,
                         turnWaitTime: TURN_WAIT_TIME,
                         roundWaitTime: ROUND_WAIT_TIME};

  constructor(props)
  {
    super(props);
    this.state = {cities: Array.from({length: this.props.cityCnt}),
                  spawnCities: Array.from({length: this.props.spawnCnt}),
                  targetCity: null,
                  spawnCoords: Array.from({length: this.props.spawnCnt}),
                  mounted: false};
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.hidePopUp = this.hidePopUp.bind(this);
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
                   targetCity: chosenCity});

    this.props.updateTargetCity(chosenCity.City,
                                chosenCity.Population);
  }

  componentDidMount()
  {
    if (this.state.cities.some(c => !c))
    {
      this.loadCities();
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

    this.setState({spawnCities: spawnCityList});
  }

  endTurn()
  {
    this.props.setEndTurn();
    
    setTimeout(() => 
    {
      this.props.nextTurn();
    },
    this.props.turnWaitTime);
  }

  endRound()
  {
    this.props.setEndRound();
    setTimeout(() => 
    {
      this.props.nextTurn();
      this.chooseCities();
      this.setState({endTurn: false});
      this.props.raiseScore();
    },
    this.props.roundWaitTime);
  }

  handleMarkerClick(e)
  {
    let [cityChoice, 
         populationChoice, 
         latitudeChoice, 
         longitudeChoice] = e.target.options.id.split('_');
    let spawnCityList = Array.from(this.state.spawnCities);

    //stop turn timer
    this.props.stopTimer();
     
    if (cityChoice === this.state.targetCity.City
      && populationChoice === this.state.targetCity.Population
      && Number(latitudeChoice) === this.state.targetCity.Latitude 
      && Number(longitudeChoice) === this.state.targetCity.Longitude) 
    {
      this.clearDecoys();
      this.endRound();
    }
    else 
    {
      spawnCityList.splice(spawnCityList.map(c => c.City).indexOf(cityChoice), 
                           1);
      this.setState({spawnCities: spawnCityList},
                     this.endTurn());
    }
  }

  hidePopUp(e)
  {
    let popUp = null;
    
    if (this.props.endTurn || this.props.disableMap)
    {
      popUp = document.querySelector('.pop-up');
      popUp.remove();
    }
  }

  render()
  {
    let enabled = !this.props.endTurn && !this.props.disableMap;

    return(<Map className="map"
                center={[this.props.lat, 
                         this.props.lng]}
                zoom={this.props.zoom}
                minZoom={this.props.minZoom}
                maxZoom={this.props.maxZoom}
                maxBounds={this.props.maxBounds}
                onPopUpOpen={this.hidePopUp}>
              <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'  
                         url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"/> 
              {this.state.spawnCities.every(c => c) ? 
               this.state.spawnCities.map((c, i) => 
                {    
                  return (<Marker id={`${c.City}_${c.Population}_${c.Latitude}_${c.Longitude}`}
                                 key={`marker-${c.City}-${c.Population}-${c.Latitude}-${c.Longitude}`} 
                                 className="marker"
                                 position={[c.Latitude, 
                                            c.Longitude]}
                                 riseOnHover={true}
                                 riseOffset={250}
                                 onClick={enabled ? 
                                          this.handleMarkerClick : null}>
                            <Popup className="pop-up"
                                   closeButton={false}>
                            {this.props.correctResponses[random(this.props.correctResponses.length-1)]}
                            </Popup>                          
                         </Marker>);
                }) : null}
           </Map>);
  }
}

export default IntelliMap;