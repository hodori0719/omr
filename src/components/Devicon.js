import React from 'react';
import '../styles/Devicon.css';

function Devicon({ img, tooltip }) {
    return (
        <span class="tooltipimg">
            <i class={img}></i>
            <span class="tooltiptext"> {tooltip} </span>
        </span>
  );
}

export default Devicon;