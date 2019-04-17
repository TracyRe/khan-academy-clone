import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import SignUp from './components/Signup';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './img/logo.png';


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
          <Route exact path='/' component={Content}/>
          <Route path='/signup' component={SignUp}/>
        </div>
      </Router>
    );
  }
}

export default App;
