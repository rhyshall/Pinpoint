import React, {Component} from 'react';
import './Sortdrop.css'

class Sortdrop extends Component
{
  render()
  {
    return(<div className="--so-container"
                style={this.props.visible ? 
                       {"visibility": "visible"} :
                       {"visibility": "hidden"}}>

             <select className="--so-sort-select"
                     name="sort-select"
                     onChange={this.props.setSort}>
                     <option disabled selected value>Select Sort</option>
                     <option value="pop_high_low"
                             key="pop_high_low">Population (High to Low)</option>
                     <option value="pop_low_high"
                             key="pop_low_high">Population (Low to High)</option>
                     <option value="city_az"
                             key="city_az">City (A-Z)</option>
                     <option value="city_za"
                             key="city_za">City (Z-A)</option>
                     <option value="state_az"
                             key="state_az">State (A-Z)</option>
                     <option value="state_za"
                             key="state_za">State (Z-A)</option>
                     <option value="north_south"
                             key="north_south">North to South</option>
                     <option value="west_east"
                             key="west_east">West to East</option>
                     <option value="south_north"
                             key="south_north">South to North</option>
                     <option value="east_west"
                             key="east_west">East to West</option>               
             </select>
           </div>);
  }
}

export default Sortdrop;