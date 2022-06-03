import React, { useState } from "react";
import { Link }  from 'react-router-dom';
import '../navbar/Navbar.css';

function Navbar(){
    const [active, setActive] = useState("navbar-sections");
    const [icon, setIcon] = useState("nav-toggler");
    const navToggle = () => {
      if (active === "navbar-sections") {
        setActive("navbar-sections nav__active");
      } else setActive("navbar-sections");

      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    };

    return(
        <nav className='navbar'>
            
                <div className='navbar-name'>
                    <Link to = '/' className='navbar-tittle'>LIZETH RICO</Link>
                </div>
                <ul className={active}>
                    <li><Link to = '/Projects' className = 'item-nav'>projects</Link></li>
                    <li><Link to = '/Skills' className = 'item-nav'>skills</Link></li>
                    <li><Link to = '/Contact' className = 'item-nav'>contact</Link></li>
                </ul>
                <div onClick={navToggle} className={icon}>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
        </nav>
    );
}
export default Navbar;