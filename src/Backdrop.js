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
import VIRGINIA_BEACH from './img/virginia_beach.jpg';
import WILLIS_TOWER from './img/willis_tower.jpg';

class Backdrop extends Component
{
  render()
  {
    return(<div class="container">
             <ul class="city-showcase">
               <li>
                 <figure class="city-photo">
                   <img src={STATUE_OF_LIBERTY} 
                        alt=""/>
                 </figure>
               </li>

               <li>
                 <figure class="city-photo">
                   <img src={BOSTON_SKYLINE}
                        alt=""/>
                 </figure>
               </li>
         
               <li>
                 <figure class="city-photo">
                   <img src={LINCOLN_MEMORIAL}
                        alt=""/>
                 </figure>
               </li>
         
               <li>
                 <figure class="city-photo">
                   <img src={WILLIS_TOWER}
                        alt=""/>
                 </figure>
               </li>
             </ul>
            
             <ul class="city-showcase">
               <li>
                 <figure class="city-photo">
                   <img src={MIAMI_BEACH}
                        alt=""/>
                 </figure>
               </li>
       
               <li>
                 <figure class="city-photo">
                   <img src={BELLAGIO}
                        alt=""/>
                 </figure>
               </li>
       
               <li>
                 <figure class="city-photo">
                   <img src={BIG_TEX}
                        alt=""/>
                 </figure>
               </li>
       
               <li>
                 <figure class="city-photo">
                   <img src={MUSIC_ROW}
                        alt=""/>
                 </figure>
               </li>
             </ul>

             <ul class="city-showcase">
               <li>
                 <figure class="city-photo">
                   <img src={HOLLYWOOD_HILLS}
                        alt=""/>
                 </figure>
               </li>
       
               <li>
                 <figure class="city-photo">
                   <img src={GOLDEN_GATE_BRIDGE}
                        alt=""/>
                 </figure>
               </li>
       
               <li>
                 <figure class="city-photo">
                   <img src={GRAND_CANYON}
                        alt=""/>
                 </figure>
               </li>
       
               <li>
                 <figure class="city-photo">
                   <img src={SPACE_NEEDLE}
                        alt=""/>
                 </figure>
               </li>
             </ul>
          </div>);
  }
}

export default Backdrop;