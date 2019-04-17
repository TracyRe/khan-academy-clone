import React, { Component } from 'react';

class SignUp extends Component {
  render(){
    var grid={
      display:'grid',
      gridTemplateColumns: '1fr 1fr',
      width:'1100px'
    }
    return (
      <div style={grid}>
        <div>
          <p>A world class education for anyone, anywhere. 100% free.</p>
          <p>Join Khan Academy to get personalized help with what you’re studying or to learn something completely new. We’ll save all of your progress.</p>
          <p>By signing up for Khan Academy, you agree to our Terms of use and Privacy Policy.</p>
        </div>
        <div>
          <p>Join Khan Academy as a</p>
        </div>
      </div>
    )
  }
}


export default SignUp;