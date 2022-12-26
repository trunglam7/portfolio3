import React from 'react'
import {SiFrontendmentor, SiGithub, SiLinkedin} from 'react-icons/si';

import './Sidebar.css'

const Sidebar = () => {
  return (
    <nav className='sidebar-container'>
      <div className='button-container'>
        <a href='https://www.frontendmentor.io/profile/trunglam7' target='_blank' rel='noreferrer'><SiFrontendmentor size={30} color={'black'}/></a>
        <a href='https://github.com/trunglam7' target='_blank' rel='noreferrer'><SiGithub size={30} color={'black'}/></a>
        <a href='https://www.linkedin.com/in/trung-lam-8190a0177/' target='_blank' rel='noreferrer'><SiLinkedin size={30} color={'black'}/></a>
      </div>
    </nav>
  )
}

export default Sidebar