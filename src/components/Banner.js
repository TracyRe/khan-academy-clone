import React, { Component } from 'react';
import Button from './Button';
import bannerImg from '../img/bannerImg.png'

class Banner extends Component {

  render(){
    const styles={
      display:'grid',
      gridTemplateColumns: '40% 50%',
      gridTemplateRows: '2fr 1fr 1fr',      
      width: '80%',
      margin: '2rem auto 1rem auto'
    }
    
    const image={
      gridColumn: '1/2',
      gridRow: '1/span 3',
    }
    

    const buttonRow={
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'space-between'
    }
    
    
  return (
    <div style={styles}>
      <div style={image}>
        <img style={{width:'100%'}}src={bannerImg}/>
      </div>
      <h1>For every student,
      every classroom.
      Real results.</h1>
      <div>We’re a nonprofit with the mission to provide a free, world-class education for anyone, anywhere.</div>
      <div style={buttonRow}>
        <Button name='Learners'/>
        <Button name='Teachers'/>
        <Button name='Districts'/>
        <Button name='Parents'/>
      </div>

    </div>
  )  
    
  }
}


export default Banner;