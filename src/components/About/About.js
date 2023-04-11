import React from 'react';
import './About.css';
import AboutFeature from './AboutFeature';
import { useHistory } from 'react-router-dom';

const About = () =>
{
    const history = useHistory();
    return(
     <div className='row'>
    <div className="--about-container mt-5 p-0">
             <div className="--about-header-content">
               <span className='--about-empty-space'>x</span>
               <h2 className="--about-header-text">About PinPoint Cities</h2>
               <span onClick={() => history.push('/') } className='close-page'>x</span>
             </div>
             
             <div className="about-features p-0">
               <AboutFeature imageAlignment={'left'} src={"navigate.png"} alt={"Navigate"}>
                 PinPoint Cities is all about mixing fun with education in this <b>free</b> turn-based,  
                 two-player game. One "target" city is chosen and placed on the map with other "decoy" cities. 
                 The first player to "pinpoint" the target city wins the round.
               </AboutFeature>
               
               <AboutFeature imageAlignment={'right'} src={"choose.png"} alt={"Choice"}>
                 Customize your experience by choosing your desired country, city range (eg. 100 most  
                 populous), spawn count (number of cities that appear on the map) and max score (score to win). 
                 The first player to "pinpoint" the target city wins the round.
               </AboutFeature>

               <AboutFeature imageAlignment={'left'} src={"player.png"} alt={"Player"}>
                 Go head-to-head against friends and family in local PvP mode or face anyone across the
                 world in network PvP mode.
               </AboutFeature>
  
               <AboutFeature imageAlignment={'right'} src={"robot.png"} alt={"Robot"}>
                 Build your skills by practising against AI bots in easy, medium or hard mode.
               </AboutFeature>
  
               <AboutFeature imageAlignment={'left'} src={"brain.png"} alt={"Brain"}>
                 Sharpen your city knowledge each time you play. In addition,  brain games like 
                 PinPoint Cities generally help improve memory capabilities and spatial awareness.
               </AboutFeature>
  
               <AboutFeature imageAlignment={'right'} src={"study.png"} alt={"Study"}>
                 Take a trip to the "Explore" page now and then to become more familiar with each city.
               </AboutFeature> 
  
               <AboutFeature imageAlignment={'left'} src={"communicate.png"} alt={"Communicate"}>
                 We are under the radar. If you enjoy your experience, please share to help PinPoint
                 Cities become more prominent!
               </AboutFeature>
             </div>                                   
           </div>
           </div>);
}

export default About;