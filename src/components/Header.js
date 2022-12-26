import React from 'react'
import {HashRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'

import './Header.css'

const Header = () => {
  return (
    <HashRouter>
        <header>
            <h1>Trung Lam</h1>
            <nav className='header-links'>
                <Link to='/'>Home</Link>
                <Link to='projects'>Projects</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/projects' element={<Projects />}/>
            </Routes>
        </header>
    </HashRouter>
    
  )
}

export default Header