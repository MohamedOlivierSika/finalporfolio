import React from 'react';
import Skill from './Main sections/skill';
import './Main sections/Main.css'; 
import Project from './Main sections/project';
import Contact from './Main sections/contactPage';
function Main() {
  return (
    <main>
     <Skill/>
    <Project/>
    <Contact/>
    </main>
  );
}

export default Main;
