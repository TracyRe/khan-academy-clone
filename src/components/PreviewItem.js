import React, { Component } from 'react';

class PreviewItem extends Component {
  render(){
    return(
      <div style={{width:'20%'}}>
        <img style={{width:'100%'}} src={this.props.img}/>
        <p style={{fontSize:'1.5rem'}}>{this.props.title}</p>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

export default PreviewItem;