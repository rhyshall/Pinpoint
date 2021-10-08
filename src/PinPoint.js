import React, {Component} from 'react';
import IntelliBase from './IntelliBase';
import IntelliMap from './IntelliMap';
import WinAlert from './WinAlert';
import Options from './Options';
import axios from 'axios';
import {BOT_CHOICE_RATIO_FILE, BOT_CHOICE_RATIO_CNT} from './Const';
import {BOT_MODE, LOCAL_MODE, NETWORK_MODE} from './Const';
import {CANADA_MAP, US_MAP} from './Const';
import {EASY_MODE, MEDIUM_MODE, HARD_MODE} from './Const';
import {CREATE_GAME, FIND_GAME} from './Const';
import {OPTIONS_SCREEN, MAP_SCREEN} from './Const';
import {PLAYER_ONE_IMG, PLAYER_TWO_IMG} from './Const';
import {genBotName} from './Common';

class PinPoint extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {botChoiceRatios: Array.from({length: BOT_CHOICE_RATIO_CNT}),
                  mode: LOCAL_MODE,
                  mapType: US_MAP,
                  spawnCnt: 20,
                  cityCnt: 1000,
                  maxScore: 7,
                  difficulty: EASY_MODE,
                  hosting: FIND_GAME,
                  playerOne: 'Player 1',
                  playerTwo: 'Player 2',
                  activePlayer: 'Player 1',
                  activePlayerImg: PLAYER_ONE_IMG,
                  runTimer: true,
                  resetTimer: false,
                  disableMap: false,
                  targetCity: null,
                  targetPopulation: 0,
                  playerOneScore: 0,
                  playerTwoScore: 0,
                  endTurn: false,
                  turnText: '',
                  screen: OPTIONS_SCREEN};

    this.stopTimer = this.stopTimer.bind(this);
    this.nextTurn = this.nextTurn.bind(this);
    this.confirmTimerReset = this.confirmTimerReset.bind(this);
    this.disableMap = this.disableMap.bind(this);
    this.updateTargetCity = this.updateTargetCity.bind(this);
    this.raiseScore = this.raiseScore.bind(this);
    this.setEndTurn = this.setEndTurn.bind(this);
    this.setEndRound = this.setEndRound.bind(this);
    this.restart = this.restart.bind(this);
    this.startBotGame = this.startBotGame.bind(this);
    this.startLocalGame = this.startLocalGame.bind(this);
    this.getBotChoiceRatio = this.getBotChoiceRatio.bind(this);
  }

  async loadBotChoiceRatios()
  {
    let botRatioFile = BOT_CHOICE_RATIO_FILE;
    let res = null;
    let i = 0;
    let ratioObj = {}; /* obj: difficulty lvl, spawn cnt, city range, bot-correct ratio */
    let ratioObjList = [];
    let ratioCnt = BOT_CHOICE_RATIO_CNT;
   
    try 
    {
      res = await axios.get(botRatioFile);
    }
    catch(err)
    {
      alert(`We are currently experiencing an issue 😭😭😭 ${'\n\n'}` + 
            'Please try again later');
    }
    
    for(i = 0; i < ratioCnt; i++)
    {
      ratioObj = res.data[i];
      ratioObjList.push(ratioObj);
    }

    this.setState({botChoiceRatios: ratioObjList});
  }

  startBotGame(modeOpt,
               mapTypeOpt,
               playerOneOpt,
               difficultyOpt,
               cityCntOpt,
               spawnCntOpt,
               maxScoreOpt)
  {
    if (!difficultyOpt)
    {
      alert('You must select a difficulty level');
    }
    else 
    {
      let botName = genBotName();
      
      //choose random bot name until not same as player name
      while (playerOneOpt.toLowerCase() === botName.toLowerCase())
      {
        botName = genBotName();
      }
  
      this.setState({screen: MAP_SCREEN,
                     mode: modeOpt,
                     mapType: mapTypeOpt,
                     playerOne: playerOneOpt,
                     playerTwo: botName,
                     difficulty: difficultyOpt,
                     cityCnt: cityCntOpt,
                     spawnCnt: spawnCntOpt,
                     maxScore: Number(maxScoreOpt),
                     activePlayer: playerOneOpt,
                     activeImg: PLAYER_ONE_IMG});
    }
  }

  startLocalGame(modeOpt,
                 mapTypeOpt,
                 playerOneOpt,
                 playerTwoOpt,
                 cityCntOpt,
                 spawnCntOpt,
                 maxScoreOpt)
  {
    if (playerOneOpt.toLowerCase() === playerTwoOpt.toLowerCase())
    {
      alert('Players cannot have the same name');
    }
    else 
    {
      this.setState({screen: MAP_SCREEN,
                     mode: modeOpt,
                     mapType: mapTypeOpt,
                     playerOne: playerOneOpt,
                     playerTwo: playerTwoOpt,
                     cityCnt: cityCntOpt,
                     spawnCnt: spawnCntOpt,
                     maxScore: Number(maxScoreOpt),
                     activePlayer: playerOneOpt,
                     activeImg: PLAYER_ONE_IMG});
    }
  }

  getBotChoiceRatio(currSpawnCnt)
  {
    return this.state.botChoiceRatios.filter(b => b.difficulty === this.state.difficulty 
                                                  && b.spawnCnt === currSpawnCnt
                                                  && b.cityRange === Number(this.state.cityCnt))
                                     .map(b => b.correctRatio);  
  }

  stopTimer()
  {
    this.setState({runTimer: false});
  }

  confirmTimerReset()
  {
    this.setState({resetTimer: false});
  }

  disableMap()
  {
    this.setState({disableMap: true,
                   turnText: `Time's up...`});
  }

  setEndTurn()
  {
    this.setState({endTurn: true,
                   turnText: 'Ending turn...'});
  }

  setEndRound()
  {
    this.setState({endTurn: true,
                   turnText: 'Ending round...'});
  }

  nextTurn()
  {
    let playerOne = this.state.playerOne;
    let playerTwo = this.state.playerTwo;

    if (this.state.activePlayer === playerOne)
    {
      this.setState({activePlayer: playerTwo,
                     activePlayerImg: PLAYER_TWO_IMG,
                     runTimer: true,
                     resetTimer: true,
                     disableMap: false,
                     turnText: '',
                     endTurn: false});
    }
    else 
    {
      this.setState({activePlayer: playerOne,
                     activePlayerImg: PLAYER_ONE_IMG,
                     runTimer: true,
                     resetTimer: true,
                     disableMap: false,
                     turnText: '',
                     endTurn: false});
    }
  }

  updateTargetCity(cityName, 
                   population)
  {
    this.setState({targetCity: cityName,
                   targetPopulation: population});
  }

  calcLeadPlayer()
  {
    let leadPlayer = null;
    let playerOneScore = this.state.playerOneScore;
    let playerTwoScore = this.state.playerTwoScore;

    if (playerOneScore > playerTwoScore)
    {
      leadPlayer = this.state.playerOne;
    }
    else if (playerTwoScore > playerOneScore)
    {
      leadPlayer = this.state.playerTwo;
    }
    else 
    {
      leadPlayer = 'Draw';
    }

    return leadPlayer;
  }

  createScoreText(leadPlayer)
  {
    let score = null;

    score = leadPlayer === this.state.playerOne ? 
            `${this.state.playerOneScore} - ${this.state.playerTwoScore}` : 
            `${this.state.playerTwoScore} - ${this.state.playerOneScore}`;

    return score;
  }

  raiseScore()
  {
    if (this.state.activePlayer === this.state.playerTwo)
    {
      let newScore = this.state.playerOneScore+1;
      this.setState({playerOneScore: newScore});
    }
    else
    {
      let newScore = this.state.playerTwoScore+1;
      this.setState({playerTwoScore: newScore});
    }
  }

  restart()
  {
    this.setState({playerOneScore: 0,
                   playerTwoScore: 0,
                   screen: OPTIONS_SCREEN});
  }

  componentDidMount()
  {
    if (this.state.botChoiceRatios.some(r => !r))
    {
      this.loadBotChoiceRatios();
    }
  }

  render()
  {
    let content = null;

    if (this.state.screen === OPTIONS_SCREEN)
    {
      content = <Options startBotGame={this.startBotGame}
                         startLocalGame={this.startLocalGame}/>;
    }

    else 
    {
      let leadPlayer = this.calcLeadPlayer();
      let score = this.createScoreText(leadPlayer);
    
      if (this.state.screen === MAP_SCREEN)
      {
        let gameOver = (this.state.playerOneScore === this.state.maxScore)
                        || (this.state.playerTwoScore === this.state.maxScore);

        if (gameOver)
        {
          content = <WinAlert winner = {leadPlayer} 
                              score = {score}
                              restart = {this.restart} />
        }
        else 
        {
          content = <div>
                      <IntelliBase activePlayer = {this.state.activePlayer}
                                   activePlayerImg = {this.state.activePlayerImg}
                                   leadPlayer = {leadPlayer}
                                   score = {score}
                                   runTimer = {this.state.runTimer}
                                   resetTimer = {this.state.resetTimer} 
                                   confirmTimerReset= {this.confirmTimerReset} 
                                   stopTimer = {this.stopTimer} 
                                   nextTurn = {this.nextTurn} 
                                   disableMap = {this.disableMap} 
                                   targetCity = {this.state.targetCity}
                                   targetPopulation = {this.state.targetPopulation} 
                                   turnText = {this.state.turnText} />
                      <IntelliMap mode = {this.state.mode}
                                  mapType = {this.state.mapType}
                                  spawnCnt = {this.state.spawnCnt}
                                  cityCnt = {this.state.cityCnt}
                                  maxScore = {this.state.maxScore} 
                                  difficulty = {this.state.difficulty}
                                  stopTimer = {this.stopTimer} 
                                  nextTurn = {this.nextTurn} 
                                  disableMap = {this.state.disableMap}
                                  endTurn = {this.state.endTurn}
                                  updateTargetCity = {this.updateTargetCity} 
                                  raiseScore = {this.raiseScore} 
                                  setEndTurn = {this.setEndTurn} 
                                  setEndRound = {this.setEndRound} 
                                  activePlayer = {this.state.activePlayer}
                                  playerOne = {this.state.playerOne} 
                                  playerTwo = {this.state.playerTwo} 
                                  getBotChoiceRatio = {this.getBotChoiceRatio}/> 
                    </div>;
        }
      }
    }
           
    return(<div>
             {content}
           </div>);
  }
}

export default PinPoint;