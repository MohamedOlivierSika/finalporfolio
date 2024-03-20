import React from 'react';

function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth' // Add smooth scrolling behavior
      });
    }
  };

  return (
    <nav>
      <ul className='navBarDesign'>
        <li><button onClick={() => scrollToSection('Home')}>Home</button></li>
        <li><button onClick={() => scrollToSection('skill')}>Skill</button></li>
        <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
        <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
      </ul>
    </nav>
  );
}

export default Header;
