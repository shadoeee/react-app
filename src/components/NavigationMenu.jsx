import React from 'react';
import { Link } from 'react-router-dom';
import '../components/App.css';

const NavigationMenu = () => {

    const padding = {
    padding:20,
    }
    
  return (
    <div className="navigation-menu">
      <Link to="/all" style={ padding}>All</Link>
      <Link to="/full-stack-development" style={ padding}>Full Stack Development</Link>
      <Link to="/data-science" style={ padding}>Data Science</Link>
      <Link to="/cyber-security" style={ padding}>Cyber Security</Link>
      <Link to="/career" style={ padding}>Career</Link>
    </div>
  );
}

export default NavigationMenu;
