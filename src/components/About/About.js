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
          {/* ===  carousel === */}
          <ControlledCarousel />
          <p className="about-text"><span className="span">A</span>rial Beel is the third largest wetland in Bangladesh. This beel is covering an area of 136 sq. km. It is situated in Sreenagar Upazila of Munshiganj District. The beel is full of many small ponds and canals.
            During the Rainy season,
            The plants become more energetic and the huge with land borders look intriguing. However the beel lessens in winter, it actually stays traversable. The beel has large amounts of fish and during the dry season. The pumpkin of this beel is popular. You can have a visit through the beel by boats. The beel is only 35 km from Dhaka and can be reached in 40 minutes.
            Arial Beel, found south of the capital city, between the Padma and Dhaleshwari streams, is the third-biggest wetland in Bangladesh covering a space of 136 square kilometers.Breeding ground of an enormous number of fish species, Aral Beel transforms into a tremendous ocean during the blustery season. However fishing keeps on being the primary control of the neighborhood local area, in winter some piece of the beel becomes green with the development of different kinds of harvests and vegetables.
            Sagardighi is the greatest while Laldighi is the second greatest ( denga ). Boal, Chitol, Gozar, and Koi are the well known fish types of the space.
            During winter various types of visitors, birds fly into the beel looking for food, particularly snails. An enormous number of birds, including parrots and shalik, can likewise be seen here.
          </p>
          <p className="about-text">
          Whenever you are moving forward along the canal in a boat or trawler, you will see villages on both sides. On the way, you come to the chest of a huge body of water.
          Somewhere out there, the blue sky appears to contact the water of the beel. The skyline is loaded with water like an immense ocean; every one of the ranches vanish in the floodwaters. Somewhere out there, in the beel, you can see some conch shells, kanibak, mashranga, dahuk, duck, and obscure visitor birds. By and large, a boat excursion to Arial Bill in the blustery season can be a fun chance to partake in the most excellent landscape.
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