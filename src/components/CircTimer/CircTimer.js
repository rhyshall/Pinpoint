import React, {Component} from 'react';
import './CircTimer.css';
import {describeArc, mapNumber, playSound} from '../../shared/Common';
import {START_SECS, START_SECS_LEFT, TURN_WAIT_TIME} from '../../shared/Const';

class CircTimer extends Component 
{
  static defaultProps = {turnWaitTime: TURN_WAIT_TIME};

	state = {secs: START_SECS,
           secsLeft: START_SECS_LEFT};

  componentDidMount()
  {
    this.interval = setInterval(() => 
                                {
                                  let secsLeft = this.state.secsLeft;
                                  let secs = this.state.secs;

                                  if (this.props.resetTimer)
                                  {
                                    this.setState({secs: START_SECS+1,
                                                   secsLeft: START_SECS_LEFT+1});
                                    this.props.confirmTimerReset();
                                  }

                                  if (this.props.runTimer)
                                  {
                                    secs = this.state.secs+1;
                                    secsLeft = this.state.secsLeft-1;

                                    this.setState({secs,
                                                   secsLeft});

                                    if (secsLeft <= 0)
                                    {
                                      playSound('time-expired');
                                      this.props.disableMap();
                                      this.props.stopTimer();  
                                                                          
                                      setTimeout(() => 
                                      {
                                        this.props.nextTurn();
                                      },
                                      this.props.turnWaitTime);
                                    }
                                    else if (secsLeft === 5) {
                                      playSound('time-low');
                                    }
                                  }
                                }, 1000);
  }

  componentWillUnmount() 
  {
    if (this.interval) 
    {
      clearInterval(this.interval);
    }
  }

  render() 
  {
    let secs = this.state.secs;
		let secondsRadius = mapNumber(secs, 31, 0, 0, 360);
    
    return (<div className='--circ-countdown-item'>
						  <SVGCircle radius={secondsRadius} />
							{this.state.secsLeft} 
							<span>sec</span>
						</div>);
  }     
}

let SVGCircle = ({ radius }) => (<svg className='--circ-countdown-svg'>
<path fill="none" 
      stroke="black" 
      strokeWidth="1" 
      d={describeArc(25, 25, 20, 0, radius)}/>
</svg>);

export default CircTimer;
	