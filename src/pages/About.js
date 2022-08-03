import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <h1>about</h1>
      <p>
      I'm <b>June</b> (Josh) <b>Yoo</b>, a programmer and Computer Science student at <mark class="yale">Yale University</mark>, where I will receive a B.S. degree in 2025. This site functions as both my professional portfolio and my personal site, though you can also view my resume here.
      </p>
      <br></br>
      <p>I am a strong problem solver and critical thinker. In particular, my abilities in mathematical problem solving have earned me many awards, including two <span class="tooltip">
          USA(J)MO
            <span class="tooltiptext">United States of America Mathematical Olympiad</span>
        </span> qualifications.</p>
      <br></br>
      <p>
      Currently, my primary interests lie in computational musicology and the development of audio technology. I am sometimes active in the open source community for <a href="https://github.com/musescore/MuseScore">MuseScore</a>, a scorewriter software which I have used for over 6 years.
      Of course, I am also capable of working in more general contexts, and you can find some of these projects on <Link to="/projects">this page</Link>.</p>
      </div>
  )
}

export default About