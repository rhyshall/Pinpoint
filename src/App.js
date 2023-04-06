/*
  Author: Rhys Hall 
*/

import React, {Component} from 'react';
import './App.css'; 
import Header from './components/Header/Header';
import Backdrop from './components/Backdrop/Backdrop';
import Home from './components/Home/Home';
import About from './components/About/About';
import Explore from './components/Explore/Explore';
import Contact from './components/Contact/Contact';
import PinPoint from './PinPoint';
import {HOME_PAGE, ABOUT_PAGE, PLAY_PAGE, EXPLORE_PAGE, CONTACT_PAGE} from './shared/Const';

class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {page: HOME_PAGE,
                  deselectMenu: false};

    this.switchPage = this.switchPage.bind(this);
    this.closeFilter = this.closeFilter.bind(this);
  }

  switchPage(newPage)
  {
    this.setState({page: newPage,
                   deselectMenu: false});
  }

  closeFilter()
  {
    this.setState({page: HOME_PAGE,
                   deselectMenu: true});
  }

  render()
  {
    let content = null;
    let page = this.state.page;

    if (page === ABOUT_PAGE)
    {
      content = <About closeFilter={this.closeFilter}/>;
    }
    else if (page === PLAY_PAGE)
    {
      content = <PinPoint closeFilter={this.closeFilter}/>;
    }
    else if (page === EXPLORE_PAGE)
    {
      content = <Explore closeFilter={this.closeFilter}/>
    }
    else if (page === CONTACT_PAGE)
    {
      content = <Contact closeFilter={this.closeFilter}/>
    }
    else 
    {
      content = <Home />;
    }

    return(<div>
             <Header switchPage={this.switchPage}
                     deselectMenu={this.state.deselectMenu}/>
             <Backdrop />
             {content}
           </div>);
  }
}

export default App;
