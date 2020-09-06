import React from 'react'
import HeaderSection from './HeaderSection/HeaderSection';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Gallery from '../Gallery/Gallery';
import Travel from '../Travel/Travel';
import Quotes from '../Quotes/Quotes';
import Contact from '../Contact/Contact';
const Home = (props) => {
    return(
        <>
        <HeaderSection/>
        <About/>
        <Gallery/>
        <Travel/>
        <Quotes/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Home;