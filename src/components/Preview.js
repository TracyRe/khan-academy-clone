import React, { Component } from 'react';
import PreviewItem from './PreviewItem';





class Preview extends Component {
  render(){
    
    
    
    
    return(
      <div>
        <h1 style={{textAlign:'center'}} >{this.props.headline}</h1>
        <div style={{display:'flex',justifyContent:'space-around'}}>          
          {this.props.previewArr.map((previewItem, index)=> {
            return <PreviewItem img={previewItem.img} title={previewItem.title} text={previewItem.text} key={index} />
            })
          }
        </div>
      </div>
    )
  }
}

export default Preview;