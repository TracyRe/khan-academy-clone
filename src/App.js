import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import District from './components/District';
import SignUp from './components/Signup';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    const styles={
      display:'flex',
      width:'100%',
      justifyContent:'space-around',
      alignItems: 'center'
    }
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path='/' component={Home}/>
          <Route path='/districts' component={District}/>
          <Route path='/signup' component={SignUp}/>
        </div>
      </Router>
    );
  }
}

export default App;
