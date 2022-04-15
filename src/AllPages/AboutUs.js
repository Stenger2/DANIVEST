import React from "react";
import { Container } from 'react-bootstrap'
import Footer from '../Components/MainPage/footer';
import AboutPage from '../Components/AboutComp/about';


const AboutUs = () => {
  return (
    <div>
      <Container>
        <AboutPage />
      </Container>
      <Footer />
    </div>
  )
}

export default AboutUs;
