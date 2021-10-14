import React, {Component} from 'react';
import './IntelliBase.css';
import CircTimer from '../../CircTimer/CircTimer';

class IntelliBase extends Component
{
  render()
  {
    return(<div className="--ib-header-container">
             <div className="--ib-header-section --ib-turn">
               <div className="--ib-header-section-header">
                 <h3>Turn</h3>
               </div>
               <div className="--ib-header-section-content">
                 {this.props.runTimer ? 
                   <span className="--ib-current-player">
                     <img className="--ib-arrow-img"
                          src={this.props.activePlayerImg}
                          alt="Circle indicating player turn"/>
                     <p className="--ib-player-text">{this.props.activePlayer}</p>
                   </span> : 
                   <p className="--ib-player-text">{this.props.turnText}</p>}
                 <span className="--ib-time-left">
                   <CircTimer runTimer={this.props.runTimer}
                              resetTimer={this.props.resetTimer}
                              confirmTimerReset={this.props.confirmTimerReset}
                              stopTimer={this.props.stopTimer}
                              nextTurn={this.props.nextTurn} 
                              disableMap={this.props.disableMap}/>
                 </span>
               </div> 
             </div>

             <div className ="--ib-header-section --ib-task">
               <div className="--ib-header-section-header">
                 <h3>Navigate</h3>
               </div>
               <div className="--ib-header-section-content">
                 <span className="--ib-target-city">
                   <img className="--ib-city-img"
                        src="target.png"
                        alt="Target indicating which city to locate" />
                   <p className="--ib-city-text">{this.props.targetCity}</p>
                 </span>
                 <span className="--ib-target-population">
                   <img className="--ib-population-img"
                        src="population.png"
                        alt="Indicates population of city to locate"/>
                   <p className="--ib-population-text">{this.props.targetPopulation}</p>
                 </span>
               </div>
             </div>

             <div className="--ib-header-section --ib-score">
               <div className="--ib-header-section-header">
                 <h3>Score</h3>
               </div>
               <div className="--ib-header-section-content">
                 <span className="--ib-winning">
                   <img className="--ib-winning-img"
                        src="winning.png"
                        alt="Winning icon indicating which player is winning"/>
                   <p className="--ib-winning-player">{this.props.leadPlayer}</p>
                 </span>
                 <span className="--ib-scoreboard">
                   <img className="--ib-scoreboard-img"
                        src="scoreboard.png"
                        alt="Scoreboard icon indicating what the score is" />
                   <p className="--ib-score-text">{this.props.score}</p>
                 </span>
               </div>
             </div>
           </div>);
  }
}

export default IntelliBase;