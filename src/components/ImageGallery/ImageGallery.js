import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ImageGallary.css';
import { imgData } from './imgData';
import SingleImage from './SingleImage';

const ImageGallery = () => {
    
    const first5img = imgData.slice(0,7);
    const second5img = imgData.slice(6,13);
    const third5img = imgData.slice(11,17);

    return (
        <div className="image-gallery section-padding" id="pictures">
            <h2 className="section-title text-center">Gallery</h2>
            <Container fluid className="p-3">
                <Row>
                    <Col xs="12" sm="4" md="4" lg="4" className="img-gallrey">
                        {
                            first5img.map(data=> <SingleImage data={data} />)
                        }
                    </Col>
                    <Col xs="12" sm="4" md="4" lg="4"  className="img-gallrey">
                        {
                            second5img.map(data=> <SingleImage data={data} />)
                        }
                    </Col>
                    <Col xs="12" sm="4" md="4" lg="4"  className="img-gallrey">
                        {
                            third5img.map(data=> <SingleImage data={data} />)
                        }
                    </Col>
                </Row>
                <button  className="button d-block mt-5 m-auto">See More</button>
            </Container>
        </div>
    );
};

export default ImageGallery;