import React, {Component} from 'react';
import './Backdrop.css'
import BELLAGIO from './img/bellagio.jpg';
import BIG_TEX from './img/big_tex.jpg';
import BOSTON_SKYLINE from './img/boston_skyline.jpg';
import GOLDEN_GATE_BRIDGE from './img/golden_gate_bridge.jpg';
import GRAND_CANYON from './img/grand_canyon.jpg';
import HOLLYWOOD_HILLS from './img/hollywood_hills.jpg'
import LINCOLN_MEMORIAL from './img/lincoln_memorial.jpg';
import MIAMI_BEACH from './img/miami_beach.jpg';
import MUSIC_ROW from './img/music_row.jpg';
import SPACE_NEEDLE from './img/space_needle.jpg';
import STATUE_OF_LIBERTY from './img/statue_of_liberty.jpg';
import WILLIS_TOWER from './img/willis_tower.jpg';

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
                        alt="Lincoln Memorial (Washington)"/>
                 </figure>
               </li>
         
               <li>
                 <figure className="--back-city-photo">
                   <img src={WILLIS_TOWER}
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
                   <img src={BELLAGIO}
                        alt="Bellagio (Las Vegas)"/>
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