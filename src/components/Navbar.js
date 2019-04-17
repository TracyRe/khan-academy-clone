import React, { Component } from 'react';
import logo from '../img/logo.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignUp from './Signup';

class Navbar extends Component {

  render(){
    const styles={
      display:'flex',
      width:'100%',
      justifyContent:'space-around',
      alignItems: 'center'
    }
  return (

      <div style={styles}>
        <div>
          <a>Courses</a>
          <input type="text" placeholder="search"/>
        </div>
          <Link to='/'>
            <img style={{width:'190px', alignSelf: 'center'}} src={logo}/>
          </Link>
        <div>
          <a>Donate</a>
          <a>Login</a>
          <a><Link to='/signup'>Sign up</Link></a>
        </div>
      </div>

  )  
    
  }
}


export default Navbar;