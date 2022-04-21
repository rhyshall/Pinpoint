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
    this.state = {page: HOME_PAGE};

    this.switchPage = this.switchPage.bind(this);
  }

  switchPage(newPage)
  {
    this.setState({page: newPage});
  }

  render()
  {
    let content = null;
    let page = this.state.page;

    if (page === ABOUT_PAGE)
    {
      content = <About />;
    }
    else if (page === PLAY_PAGE)
    {
      content = <PinPoint />;
    }
    else if (page === EXPLORE_PAGE)
    {
      content = <Explore />
    }
    else if (page === CONTACT_PAGE)
    {
      content = <Contact />
    }
    else 
    {
      content = <Home />;
    }

    return(<div>
            <Header switchPage={this.switchPage}/>
            <Backdrop />
            {content}
           </div>);
  }
}

export default App;
