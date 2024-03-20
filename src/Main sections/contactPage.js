import React from 'react';
import InstagramLogo from '../Images/logo/instagram.png'; 
import Discord from '../Images/logo/icons8-discord-50.png'; 
import Email from '../Images/logo/icons8-email-50.png'; 
import linkedin from "../Images/logo/icons8-linkedin-50.png"

function Contact() {
  return (
    <div className='container contactContainer' id='contact'>
      <div className="infoContainer">
        <h2>Contact</h2>
        <ul className='boxInfo contactBox'>
        <li> <img src={Email} alt='Email'/><br/> odahsika@gmail.com</li>
         <li> <img src={Discord} alt='Discord'/> <br/>sika2000.</li>
        <a href='https://www.instagram.com/oly_sik_20/'> <li> <img src={InstagramLogo} alt='Instagram'/> <br/>oly_sik_20</li></a>
        <a href='https://www.linkedin.com/in/mohamed-sika-b45077221/'><li> <img src={linkedin} alt='Linkin'/> <br/> Mohamed Sika</li></a>
        </ul>
      
 
      </div>
    </div>
  );
}

export default Contact;
