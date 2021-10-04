import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ImageGallary.css';

const ImageGallery = () => {
    return (
        <div className="image-gallery section-padding" id="pictures">
            <h2 className="section-title text-center">Gallery</h2>
            <Container fluid className="p-3">
                <Row>
                    <Col xs="12" sm="4" md="4" lg="4" className="img-gallrey">
                    <img src="https://newshour.media/wp-content/uploads/2017/08/29412812680_77a13c1575_b-1-1.jpg" alt="" />
                        <img src="https://newshour.media/wp-content/uploads/2017/08/29412812680_77a13c1575_b-1-1.jpg" alt="" />
                        <img src="https://img.thedailystar.net/sites/default/files/upload-2014/gallery/image/arts/farmers-working-together.jpg" alt="" />
                    </Col>
                    <Col xs="12" sm="4" md="4" lg="4"  className="img-gallrey">
                    <img src="https://newshour.media/wp-content/uploads/2017/08/29412812680_77a13c1575_b-1-1.jpg" alt="" />
                        <img src="https://img.thedailystar.net/sites/default/files/upload-2014/gallery/image/arts/farmers-working-together.jpg" alt="" />
                        <img src="https://newshour.media/wp-content/uploads/2017/08/29412812680_77a13c1575_b-1-1.jpg" alt="" />
                    </Col>
                    <Col xs="12" sm="4" md="4" lg="4"  className="img-gallrey">
                        <img src="https://newshour.media/wp-content/uploads/2017/08/29412812680_77a13c1575_b-1-1.jpg" alt="" />
                        <img src="https://img.thedailystar.net/sites/default/files/upload-2014/gallery/image/arts/farmers-working-together.jpg" alt="" />
                        <img src="https://newshour.media/wp-content/uploads/2017/08/29412812680_77a13c1575_b-1-1.jpg" alt="" />
                    </Col>
                </Row>
                <button  className="button d-block mt-5 m-auto">See More</button>
            </Container>
        </div>
    );
};

export default ImageGallery;