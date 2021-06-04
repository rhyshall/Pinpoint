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
								     src="trophy.svg"></img>
								<h3 className="final-score">7 - 3</h3>
  		        	<button className="restart"
								        onClick={this.props.restart}>Play Again?</button>
  		        	<p className="share-text">Share it?</p>
  		        	<div className="social">
  		        		<a className="share-facebook"
									   href="#"><img src="facebook_icon.svg"/></a>
									<a className="share-twitter"
									   href="#"><img src="twitter_icon.svg"/></a>
								</div>
  		        </div>
  	        </div>);
  }
}

export default WinAlert;