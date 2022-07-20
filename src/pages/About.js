import React from 'react'
import "../styles/About.css";

function About() {
  return (
    <div>
      <h1>-= about =-</h1>
      <p>
      I am <b>June</b> (Josh) <b>Yoo</b>, a programmer and Computer Science student at Yale University, where I will receive a B.S. degree in 2025. This site functions as both my personal site and my portfolio, though you can also view my resume here.
      </p>
      <br></br>
      <p>I am a strong problem solver and critical thinker. In particular, my abilities in mathematical problem solving have earned me many national awards, including two <span class="tooltip">
          USA(J)MO
            <span class="tooltiptext">United States of America Mathematical Olympiad</span>
        </span> qualifications.</p>
      <br></br>
      <p>
      Currently, my primary interests lie in computational musicology and the development of audio technology. I have contributed to open-source projects in this field including MIT's <u>music21</u> and my personal favorite, <u>MuseScore</u>.
      Of course, I have also done much programming for more general purposes, and you can find some of these projects on this page. </p>
      </div>
  )
}

export default About