import React, {Component} from 'react';
import './Header.css'

class Header extends Component
{
  constructor(props)
  {
    super(props);

    this.selectMenuOption = this.selectMenuOption.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  deselectMenuOptions()
  {
    let aboutHTML = document.querySelector(".--head-about");
    let playHTML = document.querySelector(".--head-play");
    let glossaryHTML = document.querySelector(".--head-glossary");
    let contactHTML = document.querySelector(".--head-contact");

    aboutHTML.classList.remove('--head-active-item');
    playHTML.classList.remove('--head-active-item');
    glossaryHTML.classList.remove('--head-active-item');
    contactHTML.classList.remove('--head-active-item');
  }

  goHome()
  {
    this.deselectMenuOptions();
  }

  selectMenuOption(e)
  {
    this.deselectMenuOptions();

    e.target.className = e.target.className + ' --head-active-item';
  }

  render()
  {
    return(<div className="--head-header-container">
             <div className="--head-logo"
                  onClick={this.goHome}>
               <h2>PinPoint</h2>
               <img src="target.png"
                    alt="Target"></img>
             </div>

             <nav className="--head-menu"
                  onClick={this.selectMenuOption}>
				       <a className="--head-about">About</a>
				       <a className="--head-play">Play</a>
				       <a className="--head-glossary">Glossary</a>
				       <a className="--head-contact">Contact</a>
			       </nav>
           </div>);
  }
}

export default Header;