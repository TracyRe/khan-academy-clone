import React, { Component } from 'react';
import PreviewItem from './PreviewItem';

import pl from '../img/pl.png';
import tc from '../img/tc.png';
import tet from '../img/tet.png';



class Preview extends Component {
  render(){
    
    return(
      <div>
        <h1 style={{textAlign:'center'}} >Why Khan Academy works</h1>
        <div style={{display:'flex',justifyContent:'space-around'}}>
          <PreviewItem img={pl} title="Personalized learning" text="Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning."/>
          <PreviewItem img={tc} title="Trusted content" text="Created by experts, Khan Academy’s library of trusted, standards-aligned practice and lessons covers math K-12 through early college, grammar, science, history, AP®, SAT®, and more. It’s all free for learners and teachers."/>
          <PreviewItem img={tet} title="Tools to empower teachers" text="With Khan Academy, teachers can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student."/>
        </div>
      </div>
    )
  }
}

export default Preview;