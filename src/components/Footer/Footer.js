import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer pb-5" id="footer">
         <svg className="footer-wave"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fffafa" fill-opacity="1" d="M0,160L80,181.3C160,203,320,245,480,256C640,267,800,245,960,250.7C1120,256,1280,288,1360,304L1440,320L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            <Container fluid>
                <Row style={{marginTop: "200px", paddingBottom:"20px"}}>
                    <Col sm="12" md="4">
                        <div className="footer-links">
                            <Link className="footer-logo" to='/'>arial-beel</Link>
                            <div className="footer-text">
                                <p>A boat trip to Arial Beel in the rainy season can be a good time to enjoy the most beautiful scenery.</p>
                                <h5 className="fw-600">Contact Us</h5>
                                <p> Email:  princeahmed2629@gmail.com</p>
                                <p> Phone:  +8801877653239</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm="12" md="4">
                        <div className="footer-links">
                            <h3 className="link-title">Quick Links</h3>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#pictures">Gallery</a></li>
                                <li><a href="#location">Location</a></li>
                                <li><a href="#about">About</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm="12" md="4">
                        <div className="footer-links">
                        <h3 className="link-title">Social Links</h3>
                        <div className="social-links">
                            <FaFacebookSquare className="social-link" />
                            <FaInstagramSquare  className="social-link" />
                            <FaTwitterSquare  className="social-link" />
                            <FaYoutubeSquare  className="social-link" />
                        </div>
                        </div>
                    
                    </Col>
                </Row>
                <hr style={{color:"#fff", height:"2px"}} />
                <Row className="text-center">
                    <p className="text-white">Developed by <a className="text-white" target="blank" href="https://www.facebook.com/profile.php?id=100008591616145">Prince Ahmed</a>❤️</p>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;