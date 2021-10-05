import React, { useState } from 'react';
import './About.css'
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Iframe from 'react-iframe';

const About = () => {
    return (
        <div id="about">
            <h2 className="section-title text-center">About</h2>
            <Container fluid className="about-section">
                <Container>
                    
                    <ControlledCarousel />
                    <p className="about-text"><span className="span">A</span>rial Beel is the third largest wetland in Bangladesh. This beel is covering an area of 136 sq. km. It is situated in Sreenagar Upazila of Munshiganj District. The beel is full of many small ponds and canals. During the rainy season,
                        the plants become livelier and the vast with land borders look exotic. Though the beel reduces in winter, it still remains navigable. The beel abounds in fish and during the dry season the farmer's corns and vegetables in the dry area. The pumpkin of this beel is famous. You can have a tour of the beel by boats. The beel is just 35 km from Dhaka and can be reached in an hour and a half.
                        Arial Beel, located south of the capital city, between the Padma and Dhaleshwari rivers, is the third-largest wetland in Bangladesh covering an area of 136 square kilometers.Breeding ground of a large number of fish species, Aral Beel turns into a vast sea during the rainy season. Though fishing continues to be the main occupation of the local community, in winter some portion of the beel turns green with the cultivation of various types of crops and vegetables.
                        Sagardighi is the biggest while Laldighi is the second biggest "denga." Boal, Chitol, Gozar, and Koi are the famous fish species of the area. Sources told this visitor that fish worth about Tk 20 crore are sold every month.
                        During winter different species of guests, birds fly into the beel in search of food, especially snails. Local people use the road from Srinagar Bazar of Munshiganj, via Gadighat and Shyamsiddhi village, to go to Arial Beel. The area is famous for Shyamsiddhi Math. According to the Bengali inscription at the southern entrance of the monastery, located in Shyamsundhatha village,
                        on the west side of the Srinagar market, Shambhu Nath Majumder, a wealthy person of Bikrampur, built it in 1836. About 241 feet high, this structure is said to be five feet taller than Delhi's Qutub Minar. A large number of birds, including parrots and shalik, can also be seen here.
                    </p>
                </Container>
            </Container>
        </div>
    );
};


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/img1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/img2.jpg"
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/img3.jpg"
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
    );
  }
  

export default About;