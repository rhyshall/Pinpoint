import React, {Component} from 'react';
import './Home.css';

class Home extends Component
{
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
  }

  playSound() {
    console.log('playSound()');
    const path = require('../../sounds/game-over.mp3').default;
    const audio = new Audio(path);
    audio.load();
    audio.play().then(() => console.log('audio playing')).catch(err => console.log(err));
  }

  render()
  {
    return(<div className="--home-container">
            <button onClick={this.playSound}>Play Sound</button>
           </div>);
  }
}

export default Home;