import React, { Component } from 'react';

class Button extends Component {
  render() {    
    const button={
      padding: '0 40px',
      height: '40px',
      color: '#fff',
      background: '#45f',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '4px',
      fontWeight: 'bold'
    }
  
    return (
      <div style={button}>
        {this.props.name}
      </div>
    );
  }
}

export default Button;
