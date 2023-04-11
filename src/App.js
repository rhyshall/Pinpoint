/*
  Author: Rhys Hall 
*/

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css'; 
import Header from './components/Header/Header';
import Backdrop from './components/Backdrop/Backdrop';
import Home from './components/Home/Home';
import About from './components/About/About';
import Explore from './components/Explore/Explore';
import Contact from './components/Contact/Contact';
import PinPoint from './PinPoint';

class App extends Component
{
  render()
  {
    return(<div>
             <BrowserRouter>
               <Header />
               <Backdrop />
               <Route path="/" exact><Home /></Route>
               <Route path="/about"><About /></Route>
               <Route path="/play" ><PinPoint /></Route>
               <Route path="/explore"><Explore /></Route>
               <Route path="/contact"><Contact /></Route>
             </BrowserRouter>
           </div>);
  }
}

export default App;
