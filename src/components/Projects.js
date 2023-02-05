import React, {useState, useEffect} from 'react'
import ProjectCard from './ProjectCard';

import './Projects.css'

const Projects = () => {

  const [siteList, setSiteList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.netlify.com/api/v1/sites', {
    headers: {
      'Authorization': 'Bearer hKSQkIP_pve6xZKUXd6oZanO0nZZYR_qoFPUl4fdI-M'
    }
    }).then((response) => {
      setLoading(false);
      response.json().then((json) => setSiteList(json.filter(arr => arr.name !== 'trunglam7' && arr.name !== 'puptop')));
    }).catch((error) => {
      console.log(error);
    })
  }, [])
  

  return (
    <div className='project-container'>
      <section className='frontend-container'>
        <h2>Frontend Projects</h2>
        <h3 className={loading ? 'loading-active' : 'loading-inactive'}>Loading...</h3>
        <div className='frontend-grid'>
          {siteList.map(sites => <ProjectCard key={sites.id} name={sites.name} image={sites.screenshot_url} url={sites.ssl_url}/>)}
        </div>
      </section>

      <section className='other-container'>
        <h2>Other Projects</h2>
        <div className='other-grid'>

          <a className='project-section' href='https://trunglam7.github.io/stock-fish-trader/' target='_blank' rel="noreferrer">
            <div className='underline'></div>
            <h2>Stocks Fish Trader</h2>
            <p>Tools: HTML, CSS, Javascript</p>
            <p>A project inspired by an online YouTube video, “I Gave My Goldfish $50000 to Trade Stocks,” 
              this project is a simulation of a goldfish that picks a stock for you to buy. 
              The stocks are pulled from an API and given a time duration inputted by the user, whichever side of the tank, 
              where each side represents a stock, the goldfish spends most of its time on, that stock wins.
            </p>
            <div className='underline'></div>
          </a>

          <a className='project-section' href='https://trunglam7.github.io/pokemon-randomizer/' target='_blank' rel="noreferrer">
            <div className='underline'></div>
            <h2>Pokemon Team Randomizer</h2>
            <p>Tools: HTML, CSS, Javascript, React.js</p>
            <p>Using a REST API from pokeapi.co, this web application randomly selects your Pokemon team for you.
              Users have the option of selecting a region of their desired team or stick to the default selection,
              which is national. After which, this application will display information about your team: their name,
              image, type, abilities, and 4 random moveset of that Pokemon.
            </p>
            <div className='underline'></div>
          </a>

          <a className='project-section' href='https://github.com/trunglam7/FishCryptoTraderV2' target='_blank' rel="noreferrer">
            <div className='underline'></div>
            <h2>Crypto Fish Trader</h2>
            <p>Tools: Python, PyGame</p>
            <p>Using a CoinGecko API to access the names of the cryptocurrencies token, 
              this program displays two random crypto names from the top 50 based on marketcap. 
              Which ever side the fish spends the most amount of time in a given time duration, that cryptocurrency wins.
            </p>
            <div className='underline'></div>
          </a>

        <a className='project-section' href='https://trunglam7.github.io/login_sim_encryption/' target='_blank' rel="noreferrer">
          <div className='underline'></div>
          <h2>Login Simulation with Salted MD5 Encryption</h2>
          <p>Tools: HTML, CSS, Javascript</p>
          <p>A simple login simulation that demonstrates how a salted MD5 encryption works on a password.
            This simulation utilizes a blueimp-md5 node module to encrypt the password, along with a randomly generated
            8 character salt.
          </p>
          <div className='underline'></div>
        </a>

        <a className='project-section' href='https://github.com/trunglam7/AdjustTheCounters' target='_blank' rel="noreferrer">
          <div className='underline'></div>
          <h2>A-Star Search - Adjust the Counters</h2>
          <p>Tools: C++</p>
          <p>Using an A-Star search algorithm with the misplaced tile heuristic, this algorithm will solve the adjust the counter puzzle with the smallest amount of moves.
            The puzzle description is in the Github repository.
          </p>
          <div className='underline'></div>
        </a>

        <a className='project-section' href='https://github.com/trunglam7/UnityProject_KanjiHunt' target='_blank' rel="noreferrer">
          <div className='underline'></div>
          <h2>Unity Project - Kanji Hunt</h2>
          <p>Tools: Unity, C#, Blender</p>
          <p>A game developed using Unity. The objective of the game is given a single english word and 10 random Kanji tokens scattered across the map,
            the player must find the correct token before time expires. Due to the size of this project,
            it is unable to be uploaded to Github. However, more information, including a video demo, is displayed in the Github README of this project's Github repo.
          </p>
          <div className='underline'></div>
        </a>

        </div>
      </section>
    </div>
  )
}

export default Projects