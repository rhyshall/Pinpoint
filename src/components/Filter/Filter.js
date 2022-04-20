import React, {Component} from 'react';
import './Filter.css'

class Filter extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {};

    this.setFilter = this.setFilter.bind(this);
  }

  setFilter()
  {
    
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

             <div className="--fi-content">
               
             </div>
           </div>);
  }
}

export default Filter;