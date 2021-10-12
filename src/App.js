import './App.css';
import React from 'react';
import Header from './Header';
import Backdrop from './Backdrop';
import PinPoint from './PinPoint';

function App() 
{
  return (<div className="--app-container">
            <Header />
            <Backdrop />
            <PinPoint />
          </div>);
}

export default App;
