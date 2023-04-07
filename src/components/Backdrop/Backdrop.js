import React, {Component} from 'react';
import {BACK_DROP_IMAGES} from '../../shared/Const';
import './Backdrop.css';
//do not show willis tower in background...keep commented
//until it's wanted in background image
/*import WILLIS_TOWER from '../..//images/willis_tower.jpg';*/

class Backdrop extends Component
{
  render()
  {
    return(
        <div className='row no-gutters' style={ {height: '91.7vh' }}>
          {
            BACK_DROP_IMAGES.map(img => (
              <div className='col-6 col-sm-4 col-md-3 col-xl-2' style={{height: '33.33%'}}>
                <img src={img.src} alt={img.alt} className='img-fluid' style={{aspectRatio: '1.25/1', height: '100%', width: '100%'}} />
              </div>
            ))
          }
        </div>
    )

    // return(<div className="--back-container">
    //          <ul className="--back-city-showcase">
    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={STATUE_OF_LIBERTY} 
    //                     alt="Statue of Liberty (New York)"/>
    //              </figure>
    //            </li>

    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={BOSTON_SKYLINE}
    //                     alt="Boston Skyline"/>
    //              </figure>
    //            </li>

    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={LINCOLN_MEMORIAL}
    //                     alt="Lincoln Memorial (Washington D.C.)"/>
    //              </figure>
    //            </li>
         
    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={LIBERTY_BELL}
    //                     alt="Liberty Bell (Philadelphia)"/>
    //              </figure>
    //            </li>
         
    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={BELLAGIO}
    //                     alt="Willis Tower (Chicago)"/>
    //              </figure>
    //            </li>
    //          </ul>
            
    //          <ul className="--back-city-showcase">
    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={MIAMI_BEACH}
    //                     alt="Miami Beach"/>
    //              </figure>
    //            </li>
       
    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={GATEWAY_ARCH}
    //                     alt="Gateway Arch (St. Louis)"/>
    //              </figure>
    //            </li>
       
    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={COLORADO_MOUNTAINS}
    //                     alt="Colorado Mountains"/>
    //              </figure>
    //            </li>

    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={BIG_TEX}
    //                     alt="Big Tex (Dallas)"/>
    //              </figure>
    //            </li>
       
    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={MUSIC_ROW}
    //                     alt="Music Row (Nashville)"/>
    //              </figure>
    //            </li>
    //          </ul>

    //          <ul className="--back-city-showcase">
    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={HOLLYWOOD_HILLS}
    //                     alt="Hollywood Hills (Los Angeles)"/>
    //              </figure>
    //            </li>
       
    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={GOLDEN_GATE_BRIDGE}
    //                     alt="Golden Gate Bridge (San Francisco)"/>
    //              </figure>
    //            </li>

    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={VIRGINIA_BEACH}
    //                     alt="Virginia Beach"/>
    //              </figure>
    //            </li>
       
    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={GRAND_CANYON}
    //                     alt="Grand Canyon (Flagstaff)"/>
    //              </figure>
    //            </li>
       
    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={SPACE_NEEDLE}
    //                     alt="Space Needle (Seattle)"/>
    //              </figure>
    //            </li>
    //          </ul>
    //       </div>);
  }
}

export default Backdrop;