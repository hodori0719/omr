import React from 'react'
import Button from '@mui/material/Button'
import ForwardIcon from '@mui/icons-material/Forward';
import { Link } from "react-router-dom";
import Devicon from '../components/Devicon'
import Headshot from '../assets/headshots.png'
import "../styles/Home.css";

function Home() { 
  return (
    <div className="homeWrapper">
      <div className="home">
        <div className="titles">
          <div className="realContent">
            <h1>hi, i'm <mark>june</mark></h1>
            <h2>a developer with a passion in digitizing human culture</h2>
            <div className="utility">
              <Button component={Link} to="/projects" variant="contained" size="large" endIcon={<ForwardIcon/>}
                sx={{
                  backgroundColor: '#8468a1',
                  // fontFamily: "Roboto Mono",
                  '&:hover':{
                    backgroundColor: '#695087',
                  },
                }}>
                  portfolio
              </Button>
              <span class="skills">
                <Devicon img='devicon-python-plain' tooltip='Python'/>
                <Devicon img='devicon-javascript-plain' tooltip='JavaScript'/>
                <Devicon img='devicon-react-plain' tooltip='React'/>
                {/* <Devicon img='devicon-cplusplus-plain' tooltip='C++'/>
                <Devicon img='devicon-qt-plain' tooltip='Qt'/> */}
                <Devicon img='devicon-c-plain' tooltip='C'/>
                <Devicon img='devicon-html5-plain' tooltip='HTML'/>
                <Devicon img='devicon-css3-plain' tooltip='CSS'/>
              </span>
            </div>
          </div>
          <img className="headshot" src={Headshot} alt="Headshot" draggable="false"></img>
        </div>
      </div>
    </div>
  )
}

export default Home