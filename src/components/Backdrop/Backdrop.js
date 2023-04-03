import React, {Component} from 'react';
import './Backdrop.css'
import BELLAGIO from '../../images/bellagio.jpg';
import BIG_TEX from '../..//images/big_tex.jpg';
import BOSTON_SKYLINE from '../..//images/boston_skyline.jpg';
import COLORADO_MOUNTAINS from '../..//images/colorado_mountains.jpg';
import GATEWAY_ARCH from '../..//images/gateway_arch.jpg';
import GOLDEN_GATE_BRIDGE from '../..//images/golden_gate_bridge.jpg';
import GRAND_CANYON from '../..//images/grand_canyon.jpg';
import HOLLYWOOD_HILLS from '../..//images/hollywood_hills.jpg';
import LIBERTY_BELL from '../..//images/liberty_bell.jpg'
import LINCOLN_MEMORIAL from '../..//images/lincoln_memorial.jpg';
import MIAMI_BEACH from '../..//images/miami_beach.jpg';
import MUSIC_ROW from '../..//images/music_row.jpg';
import SPACE_NEEDLE from '../..//images/space_needle.jpg';
import STATUE_OF_LIBERTY from '../..//images/statue_of_liberty.jpg';
import VIRGINIA_BEACH from '../..//images/virginia_beach.jpg';
//do not show willis tower in background...keep commented
//until it's wanted in background image
/*import WILLIS_TOWER from '../..//images/willis_tower.jpg';*/

class Backdrop extends Component
{
  render()
  {
    return(<div className="--back-container">
             <ul className="--back-city-showcase">
               <li>
                 <figure className="--back-city-photo">
                   <img src={STATUE_OF_LIBERTY} 
                        alt="Statue of Liberty (New York)"/>
                 </figure>
               </li>

               <li>
                 <figure className="--back-city-photo">
                   <img src={BOSTON_SKYLINE}
                        alt="Boston Skyline"/>
                 </figure>
               </li>

               <li>
                 <figure className="--back-city-photo">
                   <img src={LINCOLN_MEMORIAL}
                        alt="Lincoln Memorial (Washington D.C.)"/>
                 </figure>
               </li>
         
               <li>
                 <figure className="--back-city-photo">
                   <img src={LIBERTY_BELL}
                        alt="Liberty Bell (Philadelphia)"/>
                 </figure>
               </li>
         
               <li>
                 <figure className="--back-city-photo">
                   <img src={BELLAGIO}
                        alt="Willis Tower (Chicago)"/>
                 </figure>
               </li>
             </ul>
            
             <ul className="--back-city-showcase">
               <li>
                 <figure className="--back-city-photo">
                   <img src={MIAMI_BEACH}
                        alt="Miami Beach"/>
                 </figure>
               </li>
       
               <li>
                 <figure className="--back-city-photo">
                   <img src={GATEWAY_ARCH}
                        alt="Gateway Arch (St. Louis)"/>
                 </figure>
               </li>
       
               <li>
                 <figure className="--back-city-photo">
                   <img src={COLORADO_MOUNTAINS}
                        alt="Colorado Mountains"/>
                 </figure>
               </li>

               <li>
                 <figure className="--back-city-photo">
                   <img src={BIG_TEX}
                        alt="Big Tex (Dallas)"/>
                 </figure>
               </li>
       
               <li>
                 <figure className="--back-city-photo">
                   <img src={MUSIC_ROW}
                        alt="Music Row (Nashville)"/>
                 </figure>
               </li>
             </ul>

             <ul className="--back-city-showcase">
               <li>
                 <figure className="--back-city-photo">
                   <img src={HOLLYWOOD_HILLS}
                        alt="Hollywood Hills (Los Angeles)"/>
                 </figure>
               </li>
       
               <li>
                 <figure className="--back-city-photo">
                   <img src={GOLDEN_GATE_BRIDGE}
                        alt="Golden Gate Bridge (San Francisco)"/>
                 </figure>
               </li>

               <li>
                 <figure className="--back-city-photo">
                   <img src={VIRGINIA_BEACH}
                        alt="Virginia Beach"/>
                 </figure>
               </li>
       
               <li>
                 <figure className="--back-city-photo">
                   <img src={GRAND_CANYON}
                        alt="Grand Canyon (Flagstaff)"/>
                 </figure>
               </li>
       
               <li>
                 <figure className="--back-city-photo">
                   <img src={SPACE_NEEDLE}
                        alt="Space Needle (Seattle)"/>
                 </figure>
               </li>
             </ul>
          </div>);
  }
}

export default Backdrop;