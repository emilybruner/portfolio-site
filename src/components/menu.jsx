import React from 'react';
import Home from './Home';
import {Link} from 'react-router-dom';

export default function Menu() {
    return (
        <div className="menu-container">
        <div className="Menu">
  <ul className="Menu-list" data-offset="10">
    <li className="Menu-list-item" data-offset="20" onclick>
      Home
      <span className="Mask"><span>Home</span></span>
      <span className="Mask"><span>Home</span></span>
    </li>
    
    <li className="Menu-list-item" data-offset="12" onclick>
      Projects
      <span className="Mask"><span>Projects</span></span>
      <span className="Mask"><span>Projects</span></span>
    </li>
    <li className="Menu-list-item" data-offset="16" onclick>
      About
      <span className="Mask"><span>About</span></span>
      <span className="Mask"><span>About</span></span>
    </li>

    <li className="Menu-list-item" data-offset="8" onclick>
      Contact
      <span className="Mask"><span>Contact</span></span>
      <span className="Mask"><span>Contact</span></span>
    </li>
  </ul>
</div>

</div>
    )
}