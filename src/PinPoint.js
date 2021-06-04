import React, {Component} from 'react';
import IntelliBase from './IntelliBase';
import IntelliMap from './IntelliMap';
import WinAlert from './WinAlert';
import {BOT_MODE, LOCAL_MODE, NETWORK_MODE} from './Const';
import {CANADA_MAP, US_MAP} from './Const';
import {PLAYER_ONE_IMG, PLAYER_TWO_IMG} from './Const';

class PinPoint extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {mode: LOCAL_MODE,
                  mapType: US_MAP,
                  spawnCnt: 20,
                  cityCnt: 1000,
                  maxScore: 3,
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
                  turnText: ''};

    this.stopTimer = this.stopTimer.bind(this);
    this.nextTurn = this.nextTurn.bind(this);
    this.confirmTimerReset = this.confirmTimerReset.bind(this);
    this.disableMap = this.disableMap.bind(this);
    this.updateTargetCity = this.updateTargetCity.bind(this);
    this.raiseScore = this.raiseScore.bind(this);
    this.setEndTurn = this.setEndTurn.bind(this);
    this.setEndRound = this.setEndRound.bind(this);
    this.restart = this.restart.bind(this);
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
    if (this.state.activePlayer === this.state.playerOne)
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
                   playerTwoScore: 0});
  }

  render()
  {
    let leadPlayer = this.calcLeadPlayer();
    let score = this.createScoreText(leadPlayer);
    let gameOver = (this.state.playerOneScore === this.state.maxScore)
                   || (this.state.playerTwoScore === this.state.maxScore);
                  
    return(<div> 
             {!gameOver ? 
              <div>
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
                            stopTimer = {this.stopTimer} 
                            nextTurn = {this.nextTurn} 
                            disableMap = {this.state.disableMap}
                            endTurn = {this.state.endTurn}
                            updateTargetCity = {this.updateTargetCity} 
                            raiseScore = {this.raiseScore} 
                            setEndTurn = {this.setEndTurn} 
                            setEndRound = {this.setEndRound} /> 
                </div> : 
             <WinAlert winner = {leadPlayer} 
                       restart = {this.restart} />}
           </div>);
  }
}

export default PinPoint;