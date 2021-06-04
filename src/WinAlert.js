import React, {Component} from 'react';
import './WinAlert.css';

class WinAlert extends Component
{
  render()
  {
    return (<div class="modal-overlay">
  		        <div class="modal">
  		        	<h2 class="winner">Player 1 Wins!</h2>
								<img class="trophy"
								     src="trophy.svg"></img>
								<h3 class="final-score">7 - 3</h3>
  		        	<button class="restart">Play Again?</button>
  		        	<p class="share-text">Share it?</p>
  		        	<div class="social">
  		        		<a class="share-facebook"
									   href="#"><img src="facebook_icon.svg"/></a>
									<a class="share-twitter"
									   href="#"><img src="twitter_icon.svg"/></a>
								</div>
  		        </div>
  	        </div>);
  }
}

export default WinAlert;