import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Slider from '../Components/Slider';
import Cooperate from '../Components/MainPage/Cooperate';
import Footer from '../Components/MainPage/footer';
import About from '../Components/MainPage/aboutMain';
import MainForm from '../Components/MainPage/MainForm';
import HorSlider from '../Components/MainPage/HorSlider';




const Home = () => {
    return (
        <div>
            <Slider />
            <div className='container'>
                <About />
                <Cooperate />
                <HorSlider />
                <MainForm />
            </div>
            <Footer />
        </div>
    )
}

export default Home;