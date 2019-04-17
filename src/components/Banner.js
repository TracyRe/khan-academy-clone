import React, { Component } from 'react';
import Button from './Button';


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
          <img style={{width:'100%'}}src={this.props.img}/>
          </div>
          <h1 style={{fontSize:'2.5rem'}} >{this.props.headline}</h1>
          <div>{this.props.text}</div>
          <div style={buttonRow}>
          {this.props.buttons.map((button, index)=> {
            return <Button name={button.name} path={button.path} key={index} />
            })
          }
        </div>
      </div>
    )  
  
  }
}


export default Banner;