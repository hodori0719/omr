import React from 'react'
import "../styles/Music.css";

function Music() {
  return (
    <div>
      <h1>music</h1>
      <div class="ytEmbed">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/JWz6n8HXnc8?color=white&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div>
        <p>transcriptions</p>
        <iframe width="560" height="750" src="https://musescore.com/user/16070661/scores/6128175/embed" title="romance11" frameborder="0" allowfullscreen="false" allow="autoplay"></iframe>
      </div>
    </div>
  )
}

export default Music