import React, {Component} from 'react';
import './Header.css'
import {HOME_PAGE, ABOUT_PAGE, PLAY_PAGE, GLOSSARY_PAGE, CONTACT_PAGE} from '../../shared/Const';

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
    else if (e.target.className.includes('glossary'))
    {
      this.props.switchPage(GLOSSARY_PAGE);
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