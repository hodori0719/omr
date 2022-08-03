import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
      setExpandNavbar(false);
  }, [location]);

  return (
    <div>
        <div className="navbar" id={expandNavbar ? 'open' : 'close'}>
            <div className="navContainer">
                <div className="toggleButton">
                    <button onClick={() => {setExpandNavbar((prev) => !prev); window.scrollTo(0, 0);}}> 
                        <ReorderIcon /> 
                    </button>
                </div>
                <div className="homeButton">
                    <Link to="/"> june yoo</Link>
                </div>
                <div className="links">
                    <NavLink className="homeLink" to="/"> home </NavLink>
                    <NavLink to="/about"> about </NavLink>
                    <NavLink to="/projects"> projects </NavLink>
                    <NavLink to="/music"> music </NavLink>
                    {/*<span className="additional">
                        <NavLink to="/music"> dark mode </NavLink>
  </span>*/}
                </div>
            </div>
        </div>
    <div className="filler"> 
    </div>
    </div>
  )
}

export default Navbar