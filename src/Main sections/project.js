import React from 'react';
import WeatherPic from "../Images/projects screenshot/WeatherApp.png";
import VactationPic from "../Images/projects screenshot/VacationApp.png";
import NyanCatPic from "../Images/projects screenshot/screenshot.png";
import Plane from "../Images/projects screenshot/slingair-mvp.gif";

function Project() {
  return (
   <div id='projects' className='projectContainer container'>
    <div className="infoContainer">
        <h2>All My Projects</h2>
        <ul className="boxInfo projectBox">
          <li>
              <h3>Plane Project</h3>
              <img src={Plane} alt='Plane Project' />
              <p>A web application for managing flight schedules, bookings, and reservations.</p>
          </li>
          <li>
              <h3>Weather App</h3>
              <img src={WeatherPic} alt='Weather App' />
              <p>An application to check weather forecasts, current conditions, and weather alerts for different locations.</p>
          </li>
          
          <li>
              <h3>Vacation App</h3>
              <img src={VactationPic} alt='Vacation App' />
              <p>An app to plan and organize vacations, including itinerary management, accommodation booking, and activity recommendations.</p>
          </li>
          <li>
              <h3>Nyan Cat</h3>
              <img src={NyanCatPic} alt='E-Commerce' />
              <p>An upcoming e-commerce platform for buying and selling products online.</p>
          </li>
        </ul>
      </div>
   </div>
  );
}

export default Project;
