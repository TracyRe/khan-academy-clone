import React, { Component } from 'react';
import Banner from './Banner';
import Preview from './Preview';


class Home extends Component {
  render() {    
    
    const buttonArr = [
      { name: 'Learners', path: '/signup' },
      { name: 'Teachers', path: '/signup' },
      { name: 'Districts', path: '/districts' },
      { name: 'Parents', path: '/signup' }
    ];
    
  
    return (
      <div>
        <Banner
        buttons={buttonArr}/>
        <Preview
        headline='Why Khan Academy works'
        
        />
      </div>
    );
  }
}

export default Home;

