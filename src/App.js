import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Backdrop from './Backdrop';
import Home from './Home';
import About from './About';
import Glossary from './Glossary';
import Contact from './Contact';
import PinPoint from './PinPoint';
import {HOME_PAGE, ABOUT_PAGE, PLAY_PAGE, GLOSSARY_PAGE, CONTACT_PAGE} from './Const';

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
    else if (page === GLOSSARY_PAGE)
    {
      content = <Glossary />
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
