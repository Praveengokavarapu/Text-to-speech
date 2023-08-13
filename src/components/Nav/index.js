import React from 'react';
import {AiFillGithub} from "react-icons/ai"
import './index.css' 

function Nav() {
  return (
    <nav className='nav'>
      
      <h1>TextTo<span>Speech</span></h1>
      <a href="https://github.com/Praveengokavarapu/Text-to-speech" target="_blank" rel="noreferrer" className='link'>
       <AiFillGithub/> <span>Github</span>
      </a>
    </nav>
  )
}

export default Nav