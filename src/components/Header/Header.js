import React from 'react';
import './Header.css'
import { NavLink, useHistory } from 'react-router-dom';

const  Header = () =>
{
  const history = useHistory();
  return(<div className="--head-header-container mr-auto mr-md-0">
            <div className="--head-logo mr-auto"
                onClick={() => history.push('/')}>
              <h2>PinPoint</h2>
              <img src="city_block.png"
                  alt="Cities"></img>
            </div>

            <nav className="--head-menu justify-content-md-center justify-content-end">
              <NavLink to='/about' className="--head-about mx-1 mx-sm-2 mx-md-3 mx-lg-4">About</NavLink>
              <NavLink to='/play' className="--head-play mx-1 mx-sm-2 mx-md-3 mx-lg-4">Play</NavLink>
              <NavLink to='/explore' className="--head-explore mx-1 mx-sm-2 mx-md-3 mx-lg-4">Explore</NavLink>
              <NavLink to='/contact' className="--head-contact mx-1 mx-sm-2 mx-md-3 mx-lg-4">Contact</NavLink>
            </nav>
          </div>);
}

export default Header;