import React from 'react'

import {BsBoxArrowUpRight} from 'react-icons/bs'

import './ProjectCard.css'

const ProjectCard = ({name, image, url}) => {

  let modifiedName = name.split('-');
  modifiedName.shift();
  modifiedName = modifiedName.map(elements => elements.toUpperCase());
  modifiedName = modifiedName.join(' ');

  return (
    <div className='card-container'>
        <a href={url} target='_blank' rel='noreferrer'><BsBoxArrowUpRight size={30} color={"black"}/></a>
        <img src={image} alt='project screenshot'/>
        <h3>{modifiedName}</h3>
    </div>
  )
}

export default ProjectCard