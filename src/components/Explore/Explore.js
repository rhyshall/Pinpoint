import React, { Component } from "react";
import "./Explore.css";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import { CANADA_CITY_FILE, US_CITY_FILE } from "../../shared/Const";
import { US_MAX_CITY_CNT } from "../../shared/Const";
import { DFLT_EXPLORE_REC_PER_PAGE } from "../../shared/Const";
import {getCoordFormat, USStateAbbrToName, getRowBackground} from "../../shared/Common";
import {DFLT_EXPLORE_MIN_ZOOM, DFLT_EXPLORE_MAX_ZOOM, EXPLORE_DFLT_BOUNDS} from "../../shared/Const";
import { DFLT_EXPLORE_ZOOM, DFLT_LAT, DFLT_LNG } from "../../shared/Const";
import Filter from "../Filter/Filter";

class Explore extends Component 
{
  constructor(props) 
  {
    super(props);
    this.state = 
    {cityObjs: Array.from({ length: US_MAX_CITY_CNT }),
     citySet: Array.from({ length: US_MAX_CITY_CNT }),
     cityDisplay: Array.from({ length: DFLT_EXPLORE_REC_PER_PAGE }),
     markers: Array.from({ length: DFLT_EXPLORE_REC_PER_PAGE }),
     zoom: DFLT_EXPLORE_ZOOM,
     latitude: DFLT_LAT,
     longitude: DFLT_LNG,
     page: 1,
     maxPage: 1,
     activeRow: -1,
     filterOpen: false,
     sortState: { sortField: null, sortOrder: null }};

    this.handleClosePage = this.handleClosePage.bind(this);
    this.loadCityData = this.loadCityData.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
    this.handleTableHeaderClick = this.handleTableHeaderClick.bind(this);
    this.searchResults = this.searchResults.bind(this);
    this.handlePageDropSelect = this.handlePageDropSelect.bind(this);
    this.handleZoom = this.handleZoom.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.filterResults = this.filterResults.bind(this);
    this.closeFilter = this.closeFilter.bind(this);
  }

  statesNotSelected = [];

  setMarkers(cityDisplay) 
  {
    let markerList = [];

    markerList = cityDisplay?.some((c) => c)? cityDisplay.map((c, i) => 
          {
            return (
            <Marker
              id={`${i}_${c.City}_${c.Population}_${c.Latitude}_${c.Longitude}`}
              key={`marker-${c.City}-${c.Population}-${c.Latitude}-${c.Longitude}`}
              className={`--ex-marker-${i}`}
              position={[c.Latitude, c.Longitude]}
              riseOnHover={true}
              riseOffset={250}
              onClick={this.handleMarkerClick}
            >
              <Popup className="--ex-pop-up" closeButton={false}>
                {c.City + ", " + USStateAbbrToName(c.State)}
              </Popup>
            </Marker>);
        }) : null;

    this.setState({ markers: markerList });
  }

  handleClosePage()
  {
    this.props.closeFilter();
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
      alert(`We are currently experiencing an issue 😭😭😭 ${"\n\n"}` +
            "Please try again later");
    }

    for (i = 0; i < US_MAX_CITY_CNT; i++) 
    {
      cityObj = res.data[i];

      cityObjList.push(cityObj);
      citySetList.push(cityObj);

      if (i < DFLT_EXPLORE_REC_PER_PAGE) 
      {
        cityDisplayList.push(cityObj);
      }
    }

    this.setState(
      {
        cityObjs: cityObjList,
        citySet: citySetList,
        cityDisplay: cityDisplayList,
        page: 1,
        maxPage: Math.ceil(citySetList.length / DFLT_EXPLORE_REC_PER_PAGE),
      },
      this.setMarkers(cityDisplayList)
    );
  }

  searchResults(e) 
  {
    let searchKey = e.target.value;
    let newCitySet = [];

    newCitySet = this.state.cityObjs.filter((cityObj) =>
      cityObj.City.toLowerCase().includes(searchKey.toLowerCase())
    );

    this.setState({
      citySet: newCitySet,
      page: 1,
      maxPage: Math.ceil(newCitySet.length / DFLT_EXPLORE_REC_PER_PAGE),
      activeRow: -1,
    });

    this.syncCityDisplay(newCitySet, 1);
  }

  syncCityDisplay(citySet, currPage) 
  {
    let newCityDisplay = [];
    let i = 0;
    let cityObj = {};
    let index = 0;

    for (i = 0; i < DFLT_EXPLORE_REC_PER_PAGE; i++) {
      index = (currPage - 1) * DFLT_EXPLORE_REC_PER_PAGE + i;

      if (index < citySet.length) {
        cityObj = citySet[index];
        newCityDisplay.push(cityObj);
      } else {
        break;
      }
    }

    this.setState({ cityDisplay: newCityDisplay });
    this.setMarkers(newCityDisplay);
  }

  updatePageDisplay(newPage) 
  {
    let pageHTML = document.querySelector(".--ex-page-select");

    pageHTML.value = newPage;
  }

  filterResults(e) 
  {
    this.setStatesNotSelected();
    this.setState({ filterOpen: true });
  }

  setStatesNotSelected(statesSelected) 
  {
    if (this.state.cityObjs[0] === undefined) return;

    let listOfStates = this.state.cityObjs
      ? this.state.cityObjs
          .map(c => c.State)
          .filter((item, index, array) => array.indexOf(item) === index)
          .sort()
      : [];

    listOfStates = statesSelected
      ? listOfStates.filter(s => !statesSelected.includes(s))
      : listOfStates;

    console.log('listOfStates: ', listOfStates);
    this.statesNotSelected = listOfStates;
  }

  previousPage(e) 
  {
    let newPage = this.state.page - 1;

    if (this.state.page > 1) {
      //display new page nbr on page dropdown
      this.updatePageDisplay(newPage);

      this.setState(
        { page: newPage },
        this.syncCityDisplay(this.state.citySet, newPage)
      );
    }
  }

  nextPage(e) 
  {
    let newPage = this.state.page + 1;

    if (this.state.page < this.state.maxPage) {
      //display new page nbr on page dropdown
      this.updatePageDisplay(newPage);

      this.setState(
        { page: newPage },
        this.syncCityDisplay(this.state.citySet, newPage)
      );
    }
  }

  getPageList(pageCnt) 
  {
    let pageList = [];

    for (let i = 1; i <= pageCnt; i++) {
      pageList.push(i);
    }

    return pageList;
  }

  handlePageDropSelect(e) 
  {
    let newPage = e.target.options.selectedIndex + 1;

    this.setState(
      { page: newPage },
      this.syncCityDisplay(this.state.citySet, newPage)
    );
  }

  handleMarkerClick(e) 
  {
    let index = e.target.options.id.charAt(0);

    this.setState({
      activeRow: index,
      latitude: e.target._latlng.lat,
      longitude: e.target._latlng.lng,
    });
  }

  handleRowClick(e) 
  {
    const rowID = e.currentTarget.className.charAt(8);
    let targetMarker = this.state.markers[rowID];
    let index = targetMarker.props.id[0];

    this.setState({
      activeRow: index,
      latitude: targetMarker.props.position[0],
      longitude: targetMarker.props.position[1],
    });
  }

  handleTableHeaderClick(e) 
  {
    let newSortOrder = "ASC";

    // Sort city set and and set state to the sorted cities
    switch (e.currentTarget.innerText) {
      case "City":
        // set to sort ascending by default
        let compareFnCity = (a, b) => {
          if (a.City < b.City) {
            return -1;
          }
          if (a.City > b.City) {
            return 1;
          }
          return 0;
        };

        if (this.state.sortState.sortField === "City") {
          // Table is already sorted by city

          if (this.state.sortState.sortOrder === "ASC") {
            // Table is currently sorted ASC, change to DESC

            compareFnCity = (a, b) => {
              if (a.City > b.City) {
                return -1;
              }
              if (a.City < b.City) {
                return 1;
              }
              return 0;
            };
            newSortOrder = "DESC";
          }
        }
        const sortedByCity = [...this.state.citySet].sort(compareFnCity);
        this.setState(
          {
            citySet: sortedByCity,
            sortState: { sortField: "City", sortOrder: newSortOrder },
            page: 1,
          },
          () => {
            this.updatePageDisplay(1);
            this.syncCityDisplay(this.state.citySet, this.state.page);
          }
        );
        break;
      case "Population":
        let compareFnPopulation = (a, b) => {
          const x = parseInt(a.Population.replace(/,/g, ""));
          const y = parseInt(b.Population.replace(/,/g, ""));
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        };

        if (this.state.sortState.sortField === "Population") {
          // Table is already sorted by Population

          if (this.state.sortState.sortOrder === "ASC") {
            // currently sorted ASC, change to DESC

            compareFnPopulation = (a, b) => {
              const x = parseInt(a.Population.replace(/,/g, ""));
              const y = parseInt(b.Population.replace(/,/g, ""));
              if (x > y) {
                return -1;
              }
              if (x < y) {
                return 1;
              }
              return 0;
            };
            newSortOrder = "DESC";
          }
        }
        const sortedByPopulation = [...this.state.citySet].sort(
          compareFnPopulation
        );
        this.setState(
          {
            citySet: sortedByPopulation,
            sortState: { sortField: "Population", sortOrder: newSortOrder },
            page: 1,
          },
          () => {
            this.updatePageDisplay(1);
            this.syncCityDisplay(this.state.citySet, this.state.page);
          }
        );
        break;
      case "State":
        let compareFnState = (a, b) => {
          if (a.State < b.State) {
            return -1;
          }
          if (a.State > b.State) {
            return 1;
          }
          return 0;
        };

        if (this.state.sortState.sortField === "State") {
          // Table is already sorted by state

          if (this.state.sortState.sortOrder === "ASC") {
            // Table is currently sorted ASC, change to DESC

            compareFnState = (a, b) => {
              if (a.State > b.State) {
                return -1;
              }
              if (a.State < b.State) {
                return 1;
              }
              return 0;
            };
            newSortOrder = "DESC";
          }
        }
        const sortedByState = [...this.state.citySet].sort(compareFnState);
        this.setState(
          {
            citySet: sortedByState,
            sortState: { sortField: "State", sortOrder: newSortOrder },
            page: 1,
          },
          () => {
            this.updatePageDisplay(1);
            this.syncCityDisplay(this.state.citySet, this.state.page);
          }
        );
        break;
    }
  }

  closeFilter()
  {
    this.setState({filterOpen: false});
  }

  handleFilterSet = (populationFilter, statesToInclude) => 
  {
    const { cityObjs, citySet } = this.state;
    const { comparisonType, val1 } = populationFilter;

    let populationPredicate = null;
    if (val1) 
    {
      switch (comparisonType) 
      {
        case "less than":
          populationPredicate = (c) =>
          {
            const pop = parseInt(c.Population.replaceAll(",", ""));
            return pop < parseInt(val1);
          };
          break;
        case "greater than":
          populationPredicate = (c) => 
          {
            const pop = parseInt(c.Population.replaceAll(",", ""));
            return pop > parseInt(val1);
          };
          break;
        case "between":
          populationPredicate = (c) => 
          {
            const pop = parseInt(c.Population.replaceAll(",", ""));
            return pop === parseInt(val1);
          };
          break;
        default:
          break;
      }
    }

    const statePredicate = (c) => statesToInclude.includes(c.State);
    let filteredCities;

    if (populationPredicate) 
    {
      const filteredByPopulation = cityObjs.filter(populationPredicate);

      if (statesToInclude?.length > 0) 
      {
        const filteredByPopAndState =
          filteredByPopulation.filter(statePredicate);

          console.log(
            "Filtered by population and state: ",
            filteredByPopAndState
          );
        
        filteredCities = filteredByPopAndState;
      } 
      else 
      {
        filteredCities = filteredByPopulation;
        console.log("Filtered by population: ", filteredByPopulation);
      }
    } 
    else {
      if (statesToInclude?.length > 0) 
      {
        const filteredByState = cityObjs.filter(statePredicate);
        console.log("Filtered by state: ", filteredByState);
        filteredCities = filteredByState;
      } 
      else 
      {
        console.log("No filter: ", [...citySet]);
        filteredCities = [...citySet];
      }
    }

    this.setState(
      {
        ...this.state,
        citySet: filteredCities,
        filterOpen: false,
        sortState: { sortField: null, sortOrder: null },
      },
      () => 
      {
        this.updatePageDisplay(1);
        this.syncCityDisplay(this.state.citySet, this.state.page);
      }
    );
  }

  handleZoom(e) 
  {
    this.setState({ zoom: e.target._zoom });
  }

  componentDidMount() 
  {
    if (this.state.cityObjs.some((c) => !c)) {
      this.loadCityData();
    }
  }

  render() 
  {
    let cityHTML = null;
    let pageOptions = null;

    if (this.state.cityObjs.every((c) => c)) {
      cityHTML = this.state.cityDisplay.map((c, i) => {
        return (
          <tr
            className={`--ex-tr-${i}_${c.City}_${c.Population}_${c.Latitude}_${c.Longitude}`}
            key={`row-${c.City}-${c.Population}-${c.Latitude}-${c.Longitude}`}
            style={
              i !== this.state.activeRow
                ? { backgroundColor: getRowBackground(i) }
                : { backgroundColor: "#ffe60081" }
            }
            onClick={this.handleRowClick}
          >
            <td>
              {(this.state.page - 1) * DFLT_EXPLORE_REC_PER_PAGE + (i + 1)}
            </td>
            <td>{c.City}</td>
            <td>{c.Population}</td>
            <td>{c.State}</td>
            <td>{getCoordFormat(c.Latitude, c.Longitude)}</td>
          </tr>
        );
      });

      let pageList = this.getPageList(this.state.maxPage);

      pageOptions = pageList.map((p, i) => {
        return (
          <option value={i + 1} key={`page-${i + 1}`}>
            {i + 1}
          </option>
        );
      });
    }

    return (
      <div className="--ex-container">
        <div className="--ex-header-content">
          <span className='--ex-empty-space'>x</span>
          <h2 className="--ex-header-text">Explore Cities</h2>
          <span onClick={this.handleClosePage} className='close-page'>x</span>
        </div>

        <div className="--ex-city-content">
          <div className="--ex-custom-options">
            <div className="--ex-search-content">
              <input
                type="search"
                className="explore-search"
                placeholder="Search"
                onChange={this.searchResults}
              />
            </div>

            <div className="--ex-filter-sort">
              <div className="--ex-filter">
                <img
                  src="filter.png"
                  alt="Filter"
                  title="Filter"
                  onClick={this.filterResults}
                ></img>
              </div>
            </div>

            <div className="--ex-page-area">
              <div className="--ex-previous">
                <img
                  src="previous.png"
                  alt="Previous Page"
                  title="Previous Page"
                  onClick={this.previousPage}
                ></img>
              </div>

              <div className="--ex-page-dropdown">
                <select
                  className="--ex-page-select"
                  name="page-dropdown"
                  onChange={this.handlePageDropSelect}
                >
                  {pageOptions}
                </select>
              </div>

              <div className="--ex-next">
                <img
                  src="next.png"
                  alt="Next Page"
                  title="Next Page"
                  onClick={this.nextPage}
                ></img>
              </div>
            </div>
          </div>

          <table id="cityTable">
            <thead>
              <tr>
                <th>
                  <span>Rank</span>
                </th>
                <th>
                  <span class="sortable" onClick={this.handleTableHeaderClick}>
                    City
                  </span>
                </th>
                <th>
                  <span class="sortable" onClick={this.handleTableHeaderClick}>
                    Population
                  </span>
                </th>
                <th>
                  <span class="sortable" onClick={this.handleTableHeaderClick}>
                    State
                  </span>
                </th>
                <th>
                  <span>Coordinates</span>
                </th>
              </tr>
            </thead>

            <tbody>{cityHTML}</tbody>
          </table>

          <Map
            className="--ex-map"
            center={[this.state.latitude, this.state.longitude]}
            zoom={this.state.zoom}
            onZoom={this.handleZoom}
            minZoom={DFLT_EXPLORE_MIN_ZOOM}
            maxZoom={DFLT_EXPLORE_MAX_ZOOM}
            maxBounds={EXPLORE_DFLT_BOUNDS}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap. orgcopyright">OpenStreetMap</ a> contributors'
              url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            />
            {this.state.markers}
          </Map>

          <Filter
            onFilterApplied={this.handleFilterSet}
            closeFilter={this.closeFilter}
            states={this.statesNotSelected}
            visible={this.state.filterOpen}
          />
        </div>
      </div>
    );
  }
}

export default Explore;
