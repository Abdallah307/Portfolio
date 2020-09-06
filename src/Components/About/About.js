import React from 'react'
import './AboutStyle.css'


const About = (props) => {
    return(
        <div id="about">
            <h3 className="title">About Me</h3>
            <div id="twoCols">
                <div className="about-img">
                    <img src={require('../../img/about.jpg')} alt="thumbs up" />
                </div>
                <div className="about-bio">
                    <p className="about-txt">
                    It is a long established fact that a reader will be distracted by 
                    the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it has a more-or-less normal 
                    distribution of letters, as opposed to using 'Content here, content here', 
                    making it look like readable English. Many desktop publishing packages 
                    </p>
                    
                </div>
                
               </div>
               <hr/>
        </div>
    )
}

export default About;