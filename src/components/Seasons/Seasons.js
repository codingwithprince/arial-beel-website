import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Seasons.css';
import SingleSeason from './SingleSeason';

const Seasons = () => {

    const seasons = [
        {name: "Summer", img: "https://live.staticflickr.com/5476/10477409815_6522161ef9_b.jpg"},
        {name: "Winter", img: "https://live.staticflickr.com/5476/10477409815_6522161ef9_b.jpg"},
        {name: "Winter", img: "https://live.staticflickr.com/5476/10477409815_6522161ef9_b.jpg"}
    ]

    return (
        <div className="seasons-area section-padding">
            <h2 className="text-center section-title">Seasons</h2>
            <Container>
                <Row>
                    {
                        seasons.map(data => <SingleSeason info={data} />)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Seasons;