import React from 'react'

import './Home.css'

const Home = () => {
  return (
    <div className='home-container'>
        <section className='summary-container'>
          <h2>About</h2>
          <p> A recent graduate from the University of California - Riverside with an interest in front-end development. 
            I like to code, but at the same time I like to replicate designs through code, and front-end development and engineering fits the description.
            I started this path around the summer of 2022 when I had nothing to do. I have always wanted to try web development but never had the time to learn
            as most of my learning was focused on getting my degree in computer science. I started out with the basic HTML and CSS. My first website was based on that
            and it was horrible lol. Eventually, I branched out to learning javascript and then to javascript frameworks like React, and my website got better and better
            as I continue learning and getting better at web development as I learn other technologies to assist projects such as REST APIs and Firebase.</p>
        </section>

        <div className='experience-container'>
          <section>
            <h2>Education</h2>
            <h3>Computer Science M.S.</h3>
            <p>University of California - Riverside</p>
            <p>January 2022 - December 2022</p>
            <h3>Computer Science B.S.</h3>
            <p>University of California - Riverside</p>
            <p>September 2019 - December 2021</p>
          </section>
          <section>
            <h2>Experience</h2>
            <h3>Game Developer - Volunteer</h3>
            <p>Tribal III Inc. - Remote</p>
            <p>June 2022 - August 2022</p>
            <h4>Description</h4>
            <ul>
              <li>Participated in scrum stand up meetings to discuss project progress and demo assignments</li>
              <li>Implemented Figma prototypes designed by team's UX designers into functional components in the Godot game engine</li>
            </ul>
          </section>
          <section>
            <h2>Certificates</h2>
            <h3>Google Data Analytics Certificate</h3>
            <p>Coursera</p>
            <p>Issued: July 2022</p>
            <a href='https://www.credly.com/badges/9b5ba63f-18ac-47a6-8dbf-0bf952cbfd82/public_url' target="_blank" rel="noreferrer">Click Here for Credentials</a>
          </section>
        </div>

        <div className='tools-container'>
          <section>
            <h2>Languages</h2>
            <ul>
              <li>C++</li>
              <li>Python</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>GDScript</li>
              <li>C#</li>
              <li>C</li>
            </ul>
          </section>
          <section>
            <h2>Tools</h2>
            <ul>
              <li>React</li>
              <li>Godot</li>
              <li>Unity</li>
              <li>Github</li>
              <li>Git</li>
              <li>Firebase</li>
            </ul>
          </section>
        </div>
        


    </div>
  )
}

export default Home