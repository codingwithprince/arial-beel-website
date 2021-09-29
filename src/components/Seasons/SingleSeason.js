import React from 'react';
import { Card,Col } from 'react-bootstrap';

const SingleSeason = (props) => {
    const {name, img} = props.info;
    return (
        <Col sm="6" md="6" lg="4">
            <Card className="text-white single-season">
            <Card.Img src={img} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>{name}</Card.Title>
            </Card.ImgOverlay>
            </Card>
        </Col>
    );
};

export default SingleSeason;