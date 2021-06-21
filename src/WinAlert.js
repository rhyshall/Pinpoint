import React, {Component} from 'react';
import './WinAlert.css';

class WinAlert extends Component
{
  render()
  {
    return (<div className="modal-overlay">
  		        <div className="modal">
  		        	<h2 className="winner">{this.props.winner} Wins!</h2>
								<img className="trophy"
								     src="trophy.svg"
										 alt="Trophy"></img>
								<h3 className="final-score">{this.props.score}</h3>
  		        	<button className="restart"
								        onClick={this.props.restart}>Play Again?</button>
  		        	<p className="share-text">Share it?</p>
  		        	<div className="social">
  		        		<a className="share-facebook"
									   href="#"><img src="facebook_icon.svg"
										               alt="Facebook Icon"/></a>
									<a className="share-twitter"
									   href="#"><img src="twitter_icon.svg"
										           alt="Facebook Icon"/></a>
								</div>
  		        </div>
  	        </div>);
  }
}

export default WinAlert;