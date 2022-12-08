import React from 'react'
import {useState, useEffect} from 'react';

const ScrollProgress = () => {

    const [scroll, setScroll] = useState(0);

    useEffect(() => {

        let progressBarHandler = () => {
            
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;

            setScroll(scroll);
        }

        window.addEventListener("scroll", progressBarHandler);

        return () => window.removeEventListener("scroll", progressBarHandler);
    });

  return (
    <div id="progressBarContainer">
      <div id="progressBar" style={{transform: `scale(${scroll}, 1)`, opacity: 1}} />
            </div>
  )
}

export default ScrollProgress