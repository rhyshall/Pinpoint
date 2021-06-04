import React, {Component} from 'react';
import './IntelliBase.css';
import CircTimer from './CircTimer';

class IntelliBase extends Component
{
  render()
  {
    return(<div className="header-container">
             <div className="header-section turn">
               <div className="header-section-header">
                 <h3>Turn</h3>
               </div>
               <div className="header-section-content">
                 {this.props.runTimer ? 
                 <span className="current-player"><img className="arrow-img"
                                                       src={this.props.activePlayerImg}
                                                       alt="Circle indicating player turn"/>
                                                  <p className="player-text">
                                                  {this.props.activePlayer}</p></span> : 
                 <p className="player-text">{this.props.turnText}</p>}
                 <span className="time-left"><CircTimer runTimer={this.props.runTimer}
                                                        resetTimer={this.props.resetTimer}
                                                        confirmTimerReset={this.props.confirmTimerReset}
                                                        stopTimer={this.props.stopTimer}
                                                        nextTurn={this.props.nextTurn} 
                                                        disableMap={this.props.disableMap}/>
                 </span>
               </div> 
             </div>

             <div className ="header-section task">
               <div className="header-section-header">
                 <h3>Navigate</h3>
               </div>
               <div className="header-section-content">
                 <span className="target-city"><img className="city-img"
                                                    src="target.png"
                                                    alt="Target indicating which city to locate" />
                                               <p className="city-text">{this.props.targetCity}</p></span>
                 <span className="target-population"><img className="population-img"
                                                          src="population.png"
                                                          alt="Indicates population of city to locate"/>
                                                     <p className="population-text">
                                                     {this.props.targetPopulation}</p></span>
               </div>
             </div>

             <div className="header-section score">
               <div className="header-section-header">
                 <h3>Score</h3>
               </div>
               <div className="header-section-content">
                 <span className="winning"><img className="winning-img"
                                                src="https://cdn4.iconfinder.com/data/icons/business-dual-color-glyph-set-5/128/champion-128.png"
                                                alt="Winning icon indicating which player is winning"/>
                                               <p className="winning-player">
                                                {this.props.leadPlayer}</p></span>
                 <span className="scoreboard"><img className="scoreboard-img"
                                                   src="https://cdn4.iconfinder.com/data/icons/baseball-8/64/Scoreboard-sports-competition-games-128.png"
                                                   alt="Scoreboard icon indicating what the score is" />
                                               <p className="score-text">{this.props.score}</p></span>
               </div>
             </div>
           </div>);
  }
}

export default IntelliBase;