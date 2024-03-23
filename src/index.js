import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Main from './Main';
import './style.css'; 

import Home from './Main sections/home';
function Portfolio() {
  return (
    <div>
      <Header />
      <Home/>
      <Main />
    </div>
  );
}

export default Portfolio;
ReactDOM.render(<Portfolio />, document.getElementById('root'));