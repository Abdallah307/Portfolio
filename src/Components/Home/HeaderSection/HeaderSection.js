import React from 'react'
import './HeaderSectionStyle.css';


const HeaderSection = (props) => {
    return(
        <div id="hero">
            <div className="background-image"></div>
            <h1>Beautiful Alaska Photo Portfolio</h1>
            <h3>Breathtaking Landscapes for Your Viewing Pleasure</h3>
            <a 
            href="https://unsplash.com/" 
            className="btn" 
            target="_blank">More Zenva Courses</a>
        </div>
    )
}

export default HeaderSection;