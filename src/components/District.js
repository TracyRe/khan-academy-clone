import React, { Component } from 'react';
import Banner from './Banner';
import Preview from './Preview';


class District extends Component {
  render() {    
   const buttonArr=[{name:'Contact our Districts team', path:'/'}]
    return (
      <div>
        <Banner buttons={buttonArr}/>
        <Preview
        headline='Bring world-class, personalized learning to every student'
        />
      </div>
    );
  }
}

export default District;

