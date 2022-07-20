import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
      setExpandNavbar(false);
  }, [location]);

  return (
    <div>
        <div className="navbar" id={expandNavbar ? 'open' : 'close'}>
            <div className="toggleButton">
                <button onClick={() => {setExpandNavbar((prev) => !prev);}}> 
                    <ReorderIcon /> 
                </button>
            </div>
            <div className="links">
                <Link to="/"> home </Link>
                <Link to="/about"> about </Link>
                <Link to="/projects"> projects </Link>
                <Link to="/music"> music </Link>
            </div>
        </div>
    <div className="filler"> 
    </div>
    </div>
  )
}

export default Navbar