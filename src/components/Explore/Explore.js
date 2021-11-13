import React, {Component} from 'react';
import './Explore.css';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import axios from 'axios';
import {CANADA_CITY_FILE, US_CITY_FILE} from '../../shared/Const';
import {US_MAX_CITY_CNT} from '../../shared/Const';
import {DFLT_EXPLORE_REC_PER_PAGE} from '../../shared/Const';
import {getCoordFormat, USStateAbbrToName, getRowBackground} from '../../shared/Common';
import {DFLT_EXPLORE_MIN_ZOOM, DFLT_EXPLORE_MAX_ZOOM, DFLT_BOUNDS} from '../../shared/Const';
import {DFLT_EXPLORE_ZOOM, DFLT_LAT, DFLT_LNG} from '../../shared/Const';
class Explore extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {cityObjs: Array.from({length: US_MAX_CITY_CNT}), 
                  citySet: Array.from({length: US_MAX_CITY_CNT}),
                  cityDisplay: Array.from({length: DFLT_EXPLORE_REC_PER_PAGE}),
                  markers: Array.from({length: DFLT_EXPLORE_REC_PER_PAGE}),
                  zoom: DFLT_EXPLORE_ZOOM,
                  latitude: DFLT_LAT,
                  longitude: DFLT_LNG,
                  page: 1,
                  maxPage: 1,
                  activeRow: -1};

    this.loadCityData = this.loadCityData.bind(this);  
    this.handleMarkerClick = this.handleMarkerClick.bind(this);     
    this.handleRowClick = this.handleRowClick.bind(this);
    this.searchResults = this.searchResults.bind(this);
    this.handlePageDropSelect = this.handlePageDropSelect.bind(this);
    this.handleZoom = this.handleZoom.bind(this);
  }

  setMarkers(cityDisplay)
  {
    let markerList = [];
    
    markerList = cityDisplay?.some(c => c) ? 
                 cityDisplay.map((c, i) => 
                 {    
                   return <Marker id={`${i}_${c.City}_${c.Population}_${c.Latitude}_${c.Longitude}`}
                                  key={`marker-${c.City}-${c.Population}-${c.Latitude}-${c.Longitude}`} 
                                  className={`--ex-marker-${i}`}
                                  position={[c.Latitude, 
                                             c.Longitude]}
                                  riseOnHover={true}
                                  riseOffset={250}
                                  onClick={this.handleMarkerClick}>
                            <Popup className="--ex-pop-up"
                                   closeButton={false}>
                              {c.City + ', ' + USStateAbbrToName(c.State)}
                            </Popup>                          
                          </Marker>;
                 }) : null;
    
    this.setState({markers: markerList}); 
  }

  async loadCityData()
  {
    let res = null;
    let i = 0;
    let cityObj = {};
    let cityObjList = [];
    let citySetList = [];
    let cityDisplayList = [];
   
    try 
    {
      res = await axios.get(US_CITY_FILE);
    }
    catch(err)
    {
      alert(`We are currently experiencing an issue 😭😭😭 ${'\n\n'}` + 
            'Please try again later');
    }

    for(i = 0; i < US_MAX_CITY_CNT; i++)
    {
      cityObj = res.data[i];

      cityObjList.push(cityObj);
      citySetList.push(cityObj);

      if (i < DFLT_EXPLORE_REC_PER_PAGE)
      {
        cityDisplayList.push(cityObj);
      }
    }
    
    this.setState({cityObjs: cityObjList,
                   citySet: citySetList,
                   cityDisplay: cityDisplayList,
                   page: 1,
                   maxPage: Math.ceil(citySetList.length / DFLT_EXPLORE_REC_PER_PAGE)},
                   this.setMarkers(cityDisplayList));
  }

  searchResults(e)
  {
    let searchKey = e.target.value;
    let newCitySet = [];

    newCitySet = 
    this.state.cityObjs.filter(cityObj => cityObj.City.toLowerCase().includes(searchKey.toLowerCase()));
    
    this.setState({citySet: newCitySet,
                   page: 1,
                   maxPage: Math.ceil(newCitySet.length / DFLT_EXPLORE_REC_PER_PAGE),
                   activeRow: -1});

    this.syncCityDisplay(newCitySet,
                         1);
  }

  syncCityDisplay(citySet,
                  currPage)
  {
    let newCityDisplay = [];
    let i = 0;
    let cityObj = {};
    let index = 0;
    
    for(i = 0; i < DFLT_EXPLORE_REC_PER_PAGE; i++)
    {
      index = ((currPage-1) * DFLT_EXPLORE_REC_PER_PAGE) + i;

      if (index < citySet.length)
      {
        cityObj = citySet[index];    
        newCityDisplay.push(cityObj);
      }
      else 
      {
        break;
      }
    }
    
    this.setState({cityDisplay: newCityDisplay});
    this.setMarkers(newCityDisplay);
  }

  filterResults(e)
  {
    console.log('Filter');
  }

  sortResults(e)
  {
    console.log('Sort');
  }

  previousPage(e)
  {
    if (this.state.page > 1) 
    {
      this.setState({page: this.state.page-11});
    }
  }

  nextPage(e)
  {
    this.setState({page: this.state.page+1});
  }

  xPage(targetPage)
  {
    this.setState({page: targetPage})
  }


  getPageList(pageCnt)
  {
    let pageList = [];

    for (let i = 1; i <= pageCnt; i++)
    {
      pageList.push(i);
    }

    return pageList;
  }

  handlePageDropSelect(e)    
  {
    let newPage = e.target.options.selectedIndex + 1;

    this.setState({page: newPage},
                  this.syncCityDisplay(this.state.citySet,
                                       newPage));
  }

  handleMarkerClick(e) 
  {
    let index = e.target.options.id.charAt(0);
    
    this.setState({activeRow: index,
                   latitude: e.target._latlng.lat,
                   longitude: e.target._latlng.lng});
  }

  handleRowClick(e) 
  {
    const rowID = e.currentTarget.className.charAt(8);   
    let targetMarker = this.state.markers[rowID];
    let index = targetMarker.props.id[0];
    
    this.setState({activeRow: index,
                   latitude: targetMarker.props.position[0],
                   longitude: targetMarker.props.position[1]});
  }

  handleZoom(e)
  {
    this.setState({zoom: e.target._zoom});
  }

  componentDidMount()
  {
    if (this.state.cityObjs.some(c => !c))
    {
      this.loadCityData();
    }
  }

  render()
  {
    let cityHTML = null;
    let pageOptions = null;
   
    if (this.state.cityObjs.every(c => c))
    {                            
      cityHTML = this.state.cityDisplay.map((c, i) =>
              {
                return <tr className={`--ex-tr-${i}_${c.City}_${c.Population}_${c.Latitude}_${c.Longitude}`}
                           key={`row-${c.City}-${c.Population}-${c.Latitude}-${c.Longitude}`}
                           style={i != this.state.activeRow ?
                                 {"backgroundColor": getRowBackground(i)} : 
                                 {"backgroundColor": "#ffe60081"}}
                           onClick={this.handleRowClick}>
                         <td>{c.City}</td>
                         <td>{c.Population}</td>
                         <td>{c.State}</td>
                         <td>{getCoordFormat(c.Latitude,
                                             c.Longitude)}</td>
                       </tr>;
              });

      let pageList = this.getPageList(this.state.maxPage);
      
      pageOptions = 
      pageList.map((p, i) =>
                   {
                     return <option value={i+1}
                                    key={`page-${i+1}`}>
                              {i+1}       
                            </option>;
                   });
    }
  
    return(<div className="--ex-container">
             <div className="--ex-header-content">
               <h2>Explore Cities</h2>
             </div>

             <div className="--ex-city-content">
               <div className="--ex-custom-options">
                 <div className="--ex-search-content">
                   <input type="search"
                          placeholder="Search"
                          onChange={this.searchResults}/>
                 </div>
                
                 <div className="--ex-filter-sort">
                   <div className="--ex-filter">
                     <img src="filter.png"
                          alt="Filter"
                          title="Filter"
                          onClick={this.filterResults}>
                     </img>
                   </div> 
  
                   <div className="--ex-sort">
                     <img src="sort.png"
                          alt="Sort"
                          title="Sort"
                          onClick={this.sortResults}>
                     </img>
                   </div> 
                 </div>

                 <div className="--ex-page-area">
                   <div className="--ex-previous">
                     <img src="previous.png"
                          alt="Previous Page"
                          title="Previous Page"
                          onClick={this.previousPage}>                          
                     </img>
                   </div>
  
                   <div className="--ex-page-dropdown">
                     <select name="page-dropdown"
                             onChange={this.handlePageDropSelect}>
                       {pageOptions}
                     </select>
                   </div>
  
                   <div className="--ex-next">
                     <img src="next.png"
                          alt="Next Page"
                          title="Next Page"
                          onClick={this.NextPage}>                          
                     </img>
                   </div>
                 </div>
               </div>

               <table id="cityTable">
                 <thead>
                   <tr>
                     <th>City</th>
                     <th>Population</th>
                     <th>State</th>
                     <th>Coordinates</th>
                   </tr>
                 </thead>

                 <tbody>
                   {cityHTML}
                 </tbody>
               </table>

               <Map className="--ex-map"
                    center={[this.state.latitude, 
                             this.state.longitude]}
                    zoom={this.state.zoom}
                    onZoom={this.handleZoom}
                    minZoom={DFLT_EXPLORE_MIN_ZOOM}
                    maxZoom={DFLT_EXPLORE_MAX_ZOOM}
                    maxBounds={DFLT_BOUNDS}>
                 <TileLayer attribution='&copy; <a href="https://www.openstreetmap. orgcopyright">OpenStreetMap</ a> contributors'  
                        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"/>
                 {this.state.markers}
               </Map>
             </div>
           </div>)
  }
}

export default Explore;