import React from 'react';
import './Location.css';
import Iframe from 'react-iframe';
import { Container } from 'react-bootstrap';

const Location = () => {
    return (
        <Container id="location" className="location section-padding">
            <h2 className="section-title text-center">Location</h2>
            <Iframe className="iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d80384.08519791244!2d90.25051933049936!3d23.582633269646077!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x41b51065325fd9cd!2sArial%20Beel!5e0!3m2!1sen!2sbd!4v1632996490787!5m2!1sen!2sbd" ></Iframe>
        </Container>
    );
};

export default Location;