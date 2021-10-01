import React from 'react';
import { Card,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleSeason = (props) => {
    const {name, img, link,bName} = props.info;
    return (
        <Col as={Link} to={link} sm="6" md="6" lg="4" className="season d-flex justify-content-center align-items-center">
            <Card className="text-white single-season">
            <Card.Img src={img} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title className="text-center">{bName}</Card.Title><br/>
            </Card.ImgOverlay>
            </Card>
            <Link to="/" className="season-link">{name}</Link>
        </Col>
    );
};

export default SingleSeason;