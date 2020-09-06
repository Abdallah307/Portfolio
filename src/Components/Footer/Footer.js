import React from 'react'
import './FooterStyle.css';


const Footer = (props) => {
    return(
        <footer>
            <ul>
                <li><a href="#" target="_blank"><i className="fab fa-twitter-square"></i></a></li>
                <li><a href="#" target="_blank"><i className="fab fa-facebook-square"></i></a></li>
                <li><a href="#" target="_blank"><i className="fab fa-youtube-square"></i></a></li>
                <li><a href="#" target="_blank"><i className="fab fa-pinterest-square"></i></a></li>
            </ul>
            <p>&copy; {new Date().getFullYear()} It sure is fun create websites</p>
            <p>&ldquo;Tell me and I forget, Teach me and I may remember, Involve me and I learn&ldquo;
            &mdash;Benjamin Franklin</p>
        </footer>
    )

}


export default Footer;