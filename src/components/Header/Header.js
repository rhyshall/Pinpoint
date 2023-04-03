import React, {Component} from 'react';
import './Header.css'
import {HOME_PAGE, ABOUT_PAGE, PLAY_PAGE, EXPLORE_PAGE, CONTACT_PAGE} from '../../shared/Const';

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
    let exploreHTML = document.querySelector(".--head-explore");
    let contactHTML = document.querySelector(".--head-contact");

    aboutHTML.classList.remove('--head-active-item');
    playHTML.classList.remove('--head-active-item');
    exploreHTML.classList.remove('--head-active-item');
    contactHTML.classList.remove('--head-active-item');
  }

  goHome()
  {
    this.deselectMenuOptions();
    this.props.switchPage(HOME_PAGE);
  }

  selectMenuOption(e)
  {
    this.deselectMenuOptions();

    e.target.className = e.target.className + ' --head-active-item';

    if (e.target.className.includes('about'))
    {
      this.props.switchPage(ABOUT_PAGE);
    }
    else if (e.target.className.includes('play'))
    {
      this.props.switchPage(PLAY_PAGE);
    }
    else if (e.target.className.includes('explore'))
    {
      this.props.switchPage(EXPLORE_PAGE);
    }
    else if (e.target.className.includes('contact'))
    {
      this.props.switchPage(CONTACT_PAGE);
    }
    else 
    {
      //don't switch page
    }
  }

  render()
  {
    return(<div className="--head-header-container">
             <div className="--head-logo"
                  onClick={this.goHome}>
               <h2>PinPoint</h2>
               <img src="city_block.png"
                    alt="Cities"></img>
             </div>

             <nav className="--head-menu"
                  onClick={this.selectMenuOption}>
				       <a className="--head-about" href="/">About</a>
				       <a className="--head-play" href="/">Play</a>
				       <a className="--head-explore" href="/">Explore</a>
				       <a className="--head-contact" href="/">Contact</a>
			       </nav>
           </div>);
  }
}

export default Header;