import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Preview from './components/Preview';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Banner/>
        <Preview/>
      </div>
    );
  }
}

export default App;
