import React, {Component} from 'react';
import './Options.css';
import {BOT_MODE, LOCAL_MODE, NETWORK_MODE} from './Const';
import {EASY_MODE, MEDIUM_MODE, HARD_MODE} from './Const';
import {CREATE_GAME, FIND_GAME} from './Const';
import {CANADA_MAP, US_MAP} from './Const';
import {DFLT_MODE, DFLT_NAME_ONE, DFLT_NAME_TWO} from './Const';
import {DFLT_CITY_RANGE, DFLT_SPAWN_CNT, DFLT_MAX_SCORE} from './Const';

class Options extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {mode: DFLT_MODE,
                  map: US_MAP,
                  botDifficulty: null,
                  hosting: null,
                  playerOneName: DFLT_NAME_ONE,
                  playerTwoName: DFLT_NAME_TWO,
                  cityRange: DFLT_CITY_RANGE,
                  spawnCnt: DFLT_SPAWN_CNT,
                  maxScore: DFLT_MAX_SCORE};

    this.selectImg = this.selectImg.bind(this);
    this.difficultyChange = this.difficultyChange.bind(this);
    this.hostChange = this.hostChange.bind(this);
    this.slideCityRange = this.slideCityRange.bind(this);
    this.slideSpawnCnt = this.slideSpawnCnt.bind(this);
    this.slideMaxScore = this.slideMaxScore.bind(this);
    this.setPlayerName = this.setPlayerName.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  selectImg(e)
  {
    let className = e.target.className;
    
    if (className === 'robot-img')
    {
      this.setState({mode: BOT_MODE,
                     hosting: FIND_GAME,
                     botDifficulty: null});
    }
    else if (className === 'player-img')
    {
      this.setState({mode: LOCAL_MODE,
                     hosting: FIND_GAME,
                     botDifficulty: null});
    }
    else 
    {
      this.setState({mode: NETWORK_MODE,
                     hosting: FIND_GAME,
                     botDifficulty: null});
    }
  }

  difficultyChange(e)
  {
    let className = e.target.className;

    if (className === 'easy-radio')
    {
      this.setState({botDifficulty: EASY_MODE});
    }
    else if (className === 'medium-radio')
    {
      this.setState({botDifficulty: MEDIUM_MODE});
    }
    else 
    {
      this.setState({botDifficulty: HARD_MODE});
    }
  }

  hostChange(e)
  {
    let className = e.target.className;

    if (className === 'create-game-radio')
    {
      this.setState({hosting: CREATE_GAME});
    }
    else 
    {
      this.setState({hosting: FIND_GAME});
    }
  }

  setPlayerName(e)
  {
    let className = e.target.className;

    if (className.includes('player-two'))
    {
      this.setState({playerTwoName: e.target.value});
    }
    else 
    {
      this.setState({playerOneName: e.target.value});
    }
  }

  slideCityRange(e)
  {
    this.setState({cityRange: e.target.value});
  }

  slideSpawnCnt(e)
  {
    this.setState({spawnCnt: e.target.value});
  }

  slideMaxScore(e)
  {
    this.setState({maxScore: e.target.value});
  }

  startGame(e)
  {
    e.preventDefault();

    if (this.state.mode === BOT_MODE)
    {
      this.props.startBotGame(this.state.mode,
                              this.state.map,
                              this.state.playerOneName,
                              this.state.botDifficulty,
                              this.state.cityRange,
                              this.state.spawnCnt,
                              this.state.maxScore);
    }
    else if (this.state.mode === LOCAL_MODE)
    {
      this.props.startLocalGame(this.state.mode,
                                this.state.map,
                                this.state.playerOneName,
                                this.state.playerTwoName,
                                this.state.cityRange,
                                this.state.spawnCnt,
                                this.state.maxScore);
    }
    else 
    {
      alert('Network mode will be available at a later date');
    }
  }

  render()
  {
    let option3 = null;
    let option4 = null;
    let option5 = null;
    let option6 = null;

    if (this.state.mode === BOT_MODE)
    {
      option3 = <div className="content difficulty-content">
                   <h4>Difficulty</h4> 
                   <div className="difficulty-radio-group">
                     <input className="easy-radio"
                            type="radio"
                            value="easy"
                            name="difficulty"
                            onChange={this.difficultyChange}/>
                     <span className="diff-radio-label">Easy</span>
                     <input className="medium-radio"
                            type="radio"
                            value="medium"
                            name="difficulty"
                            onChange={this.difficultyChange}/>
                     <span className="diff-radio-label">Medium</span>
                     <input className="hard-radio"
                            type="radio"
                            value="hard"
                            name="difficulty"
                            onChange={this.difficultyChange}/>
                     <span className="diff-radio-label">Hard</span>
                   </div>
                 </div>;
    }
    else if (this.state.mode === LOCAL_MODE)
    {
      option3 = <div className="content player-two-content">
                   <h4>Player Two</h4>
                   <label className="player-label">
                     <input className="player-textfield player-two"
                            placeholder="Player 2"
                            maxLength="20"
                            onChange={this.setPlayerName}></input>
                   </label>
                 </div>;
    }
    else 
    {
      option3 = <div className="content hosting-content">
                   <h4>Hosting</h4>
                   <div className="hosting-radio-group">
                     <input className="create-game-radio"
                            type="radio"
                            value="create-game"
                            name="hosting"
                            onChange={this.hostChange}/>
                     <span className="host-radio-label">Create Game</span>
                     <input className="find-game-radio"
                            type="radio"
                            value="find-game"
                            name="hosting"
                            onChange={this.hostChange}/>
                     <span className="host-radio-label">Find Game</span>
                   </div>
                 </div>;
    }
    
    if (this.state.mode === NETWORK_MODE 
          && this.state.hosting === FIND_GAME)
    {
      option4 = option5 = option6 = <div className="content empty-content"></div>;
    }
    else 
    {
      option4 = <div className="content city-range-content">
                  <h4>City Range</h4>
                  <label className="slider-content">
                    <input className="slider"
                           type="range" 
                           value={this.state.cityRange} 
                           min="100" 
                           max="1000"
                           step="100"
                           onChange={this.slideCityRange}></input>
                    <span className="slider-value">{this.state.cityRange}</span> 
                  </label>
                </div>;

      option5 = <div className="content spawn-count-content">
                  <h4>Spawn Count</h4>
                  <label className="slider-content">
                    <input className="slider"
                           type="range" 
                           value={this.state.spawnCnt}
                           min="6" 
                           max="30"
                           step="2"
                           onChange={this.slideSpawnCnt}></input>
                    <span className="slider-value">{this.state.spawnCnt}</span> 
                  </label>
                </div>;

      option6 = <div className="content max-score-content">
                  <h4>Max Score</h4>
                  <label className="slider-content">
                    <input className="slider"
                           type="range" 
                           value={this.state.maxScore}
                           min="3"
                           max="20"
                           step="1"
                           onChange={this.slideMaxScore}></input>
                    <span className="slider-value">{this.state.maxScore}</span> 
                  </label>
                </div>;
    }

    return(<div className="options-container">
             <form className="options">
               <div className="header-content">
                 <h2>PinPoint</h2>
                 <img src="target.png"
                      alt="Target"></img>
               </div>
                     
               <div className="content mode-content">
                 <h4>Opponent</h4>
                 <div className="mode-icon-group">
                   <img className={`robot-img${this.state.mode === BOT_MODE ?
                                               ' select-img' : ''}`}
                        src="robot.png"
                        alt="Bot Mode"
                        onClick={this.selectImg}></img>
                   <img className={`player-img${this.state.mode === LOCAL_MODE ?
                                               ' select-img' : ''}`}
                        src="player.png"
                        alt="Local PvP Mode"
                        onClick={this.selectImg}></img>
                   <img className={`world-img${this.state.mode === 
                                               NETWORK_MODE ?
                                               ' select-img' : ''}`}
                        src="world.png"
                        alt="Network PvP Mode"
                        onClick={this.selectImg}></img>
                 </div>
               </div>
             
               <div className="content player-one-content">
                 <h4>Player One</h4>
                 <label className="player-label">
                   <input className="player-textfield player-one"
                          placeholder="Player 1"
                          maxLength="20"
                          onChange={this.setPlayerName}></input>
                 </label>
               </div>
                
               {option3}      
               {option4} 
               {option5}
               {option6}     

               <button className="submit-btn"
                       onClick={this.startGame}>Start</button>
             </form>
           </div>);
  }
}

export default Options;