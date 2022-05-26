import React, { Component, Fragment, createRef } from 'react';
import MultiSelect from '../MultiSelect/MultiSelect.js';
import './Filter.css'

class Filter extends Component
{
  constructor(props)
  {
    super(props);
    this.popRef = React.createRef();
    this.popBetweenRef = React.createRef();
    this.statesRef = React.createRef();

    this.state = {
      populationFilter: 'less than'
    };

    this.setFilter = this.setFilter.bind(this);
    this.handlePopulationFilterChange = this.handlePopulationFilterChange.bind(this);
  }

  setFilter = () =>
  {
    const populationFilter = {
      comparisonType: this.state.populationFilter,
      val1: this.popRef.current.value,
      val2: this.popBetweenRef.current?.value
    }

    const itemsChosen = [...this.statesRef.current.state.itemsChosen];
    const statesFilter = [...itemsChosen];

    this.props.onFilterApplied(populationFilter, statesFilter);
  }

  handlePopulationFilterChange = (e) =>
  {
    this.setState({ populationFilter: e.target.value });
  }

  renderBetweenFilter() {
    if (this.state.populationFilter !== 'between') {
      return null;
    }
    return (
      <Fragment>
        &nbsp;<span>and</span>&nbsp;
        <input ref={this.popBetweenRef} className='population-input' />
      </Fragment>
    );
  }

  render()
  {
    return(<div className="--fi-container"
                style={this.props.visible ? 
                       {"visibility": "visible"} :
                       {"visibility": "hidden"}}>
             <div className="--fi-header">
               <h2>Filter</h2>
             </div>

             <div className="--fi-content d-flex flex-column px-4">
               <div className='filter-population-container'>
                 <h3 className='mb-1'>I want the population to be: </h3>
                 <select onChange={this.handlePopulationFilterChange} className='me-2'>
                   <option>less than</option>
                   <option>greater than</option>
                   <option>between</option>
                 </select>
                 <input ref={this.popRef} className='population-input' />
                 { this.renderBetweenFilter() }
               </div>
               <div className='filter-state-container'>
                  <h3 className='mb-1 mt-3'>I would like the cities to be in the following states:</h3>
                  <MultiSelect ref={this.statesRef} items={this.props.states} />
               </div>
               <button className='set-filter align-self-center' onClick={this.setFilter}>Apply</button>
             </div>
           </div>);
  }
}

export default Filter;