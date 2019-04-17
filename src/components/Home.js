import React, { Component } from 'react';
import Banner from './Banner';
import Preview from './Preview';

import pl from '../img/pl.png';
import tc from '../img/tc.png';
import tet from '../img/tet.png';



class Home extends Component {
  render() {    
    
    const buttonArr = [
      { name: 'Learners', path: '/signup' },
      { name: 'Teachers', path: '/signup' },
      { name: 'Districts', path: '/districts' },
      { name: 'Parents', path: '/signup' }
    ];
    
    const previewItemArr = [
      { img: pl, title: 'Personalized learning', text: 'Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.' },
      { img: tc, title: 'Trusted content', text: 'Created by experts, Khan Academy’s library of trusted, standards-aligned practice and lessons covers math K-12 through early college, grammar, science, history, AP®, SAT®, and more. It’s all free for learners and teachers.' },
      { img: tet, title: 'Tools to empower teachers', text:'With Khan Academy, teachers can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student.' },
    ];
    
  
    return (
      <div>
        <Banner
        buttons={buttonArr}/>
        <Preview
        headline='Why Khan Academy works'
        previewArr={previewItemArr}
        />
      </div>
    );
  }
}

export default Home;

