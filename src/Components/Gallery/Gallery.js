import React from 'react'
import './Gallery.css'


const Gallery = (props) => {
    return(
        <div id='gallery' className="photo-gallery">
            <h3 className="title">Gallery</h3>
            
            <div className="gallery-bio">
                <p className="gallery-txt">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                </p>
            </div>
             <hr/>

             <ul className="grid">
                <li className="small"></li>
                <li className="large"></li>
                <li className="small"></li>
                <li className="large"></li>
             </ul>

             <hr/>
        
        </div>
    )
}

export default Gallery;