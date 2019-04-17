import React, { Component } from 'react';
import logo from '../img/logo.png';

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
        <img style={{width:'190px', alignSelf: 'center'}} src={logo}/>
      <div>
        <a>Donate</a>
        <a>Login</a>
        <a>Login</a>
      </div>
    </div>
  )  
    
  }
}


export default Navbar;