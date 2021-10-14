import React, {Component} from 'react';
import './WinAlert.css';

class WinAlert extends Component
{
  render()
  {
    return (<div className="--win-modal-overlay">
  		        <div className="--win-modal">
  		        	<h2 className="--win-winner">{this.props.winner} Wins!</h2>
								<img className="--win-trophy"
								     src="trophy.svg"
										 alt="Trophy"></img>
								<h3 className="--win-final-score">{this.props.score}</h3>
  		        	<button className="--win-restart"
								        onClick={this.props.restart}>Play Again?</button>
  		        	<p className="--win-share-text">Share it?</p>
  		        	<div className="--win-social">
  		        		<a className="--win-share-facebook"
									   href="#"><img src="facebook_icon.svg"
										               alt="Facebook Icon"/></a>
									<a className="--win-share-twitter"
									   href="#"><img src="twitter_icon.svg"
										               alt="Twitter Icon"/></a>
								</div>
  		        </div>
  	        </div>);
  }
}

export default WinAlert;