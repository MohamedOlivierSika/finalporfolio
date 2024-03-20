import React from 'react';
import ux from "../Images/logo/Ux.png"
import html from "../Images/logo/html.png"
import Js from "../Images/logo/icons8-javascript-50.png"
import Mongo from "../Images/logo/icons8-database-50.png"

function Skill() {

  const scrollToPortfolioWork = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id='skill' className="container skillContainer">
      <div className="infoContainer">
        <h2>Skills</h2>
        <ul className="boxInfo skillBox">
          <li>
            <img src={ux} alt="UI/UX Design" />
            <h4>UI/UX Design</h4>
            <p>I specialize in creating intuitive user interfaces and engaging user experiences.</p>
            <p>Tools: Figma, Adobe XD</p>
            <button onClick={scrollToPortfolioWork}>Portfolio Work</button>
          </li>
          <li>
            <img src={html} className='htmlImage' alt="HTML/CSS" />
            <h4>HTML/CSS</h4>
            <p>I am proficient in building responsive and visually appealing web pages.</p>
            <p>Tools: Visual Studio Code, Bootstrap</p>
            <button onClick={scrollToPortfolioWork}>Portfolio Work</button>
          </li>
          <li>
            <img src={Js} alt="JavaScript/React" />
            <h4>JavaScript/React</h4>
            <p>I develop interactive and dynamic web applications using React and JavaScript.</p>
            <p>Tools: React, Node.js</p>
            <button onClick={scrollToPortfolioWork}>Portfolio Work</button>
          </li>
          <li>
            <img src={Mongo} alt="MongoDB" />
            <h4>MongoDB</h4>
            <p>I have experience in database management and integration using MongoDB.</p>
            <p>Tools: MongoDB Atlas, Compass</p>
            <button onClick={scrollToPortfolioWork}>Portfolio Work</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skill;
