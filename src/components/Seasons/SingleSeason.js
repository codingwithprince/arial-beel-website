import React from 'react';
import { Card,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleSeason = (props) => {
    const {name, img, link} = props.info;
    return (
        <Col as={Link} to={link} sm="6" md="6" lg="4">
            <Card className="text-white single-season">
            <Card.Img src={img} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title style={{whiteSpace: "pre-line"}} className="text-center">{name}</Card.Title><br/>
            </Card.ImgOverlay>
            </Card>
        </Col>
    );
};

export default SingleSeason;