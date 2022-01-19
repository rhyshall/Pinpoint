import React, {Component} from 'react';
import './About.css';

class About extends Component
{
  render()
  {
    return(<div className="--about-container">
             <div className="--about-header-content">
               <h2>About PinPoint Cities</h2>
             </div>
             
             <div className="about-features">
               <div className="--about-feature --about-img-left">
                 <img className="--about-img"
                      src="navigate.png"
                      alt="Navigate"></img>
                 <p>PinPoint Cities is all about mixing fun with education in this <b>free</b> turn-based,  
                    two-player game. One "target" city is chosen and placed on the map with other "decoy" cities. The first player to "pinpoint" the target city wins the round.</p>
               </div>
  
               <div className="--about-feature --about-img-right">
                 <p>Customize your experience by choosing your desired country, city range (eg. 100 most  
                    populous), spawn count (number of cities that appear on the map) and max score (score to win).</p>
                    <img className="--about-img"
                         src="choose.png"
                         alt="Choice"></img>
               </div>
  
               <div className="--about-feature --about-img-left">
                 <img className="--about-img"
                      src="player.png"
                      alt="Player"></img>
                 <p>Go head-to-head against friends and family in local PvP mode or face anyone across the
                    world in network PvP mode.</p>
               </div>
  
               <div className="--about-feature --about-img-right">
                 <p>Build your skills by practising against AI bots in easy, medium or hard mode.</p>
                 <img className="--about-robot-img"
                      src="robot.png"
                      alt="Robot"></img>
               </div>
  
               <div className="--about-feature --about-img-left">
                 <img className="--about-img"
                      src="brain.png"
                      alt="Brain"></img>
                 <p>Sharpen your city knowledge each time you play. In addition,  brain games like 
                    PinPoint Cities generally help improve memory capabilities and spatial awareness.</p>
               </div>  
  
               <div className="--about-feature --about-img-right">
                 <p>Take a trip to the "Explore" page now and then to become more familiar with each 
                    city.</p>
                 <img className="--about-img"
                      src="study.png"
                      alt="Study"></img>
               </div>  

               <div className="--about-feature --about-img-left">
                 <img className="--about-img"
                      src="communicate.png"
                      alt="Communicate"></img>
                 <p>We are under the radar. If you enjoy your experience, please share to help PinPoint
                    Cities become more prominent!</p>
               </div> 
             </div>                                   
           </div>);
  }
}

export default About;