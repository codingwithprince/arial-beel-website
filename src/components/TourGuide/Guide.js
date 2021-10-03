import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Guide.css";

const Guide = () => {
    return (
        <div className="guides section-padding">
            <h2 className="section-title text-center">Tour Guide</h2>
            <Container fluid className="guide" style={{padding:"20px"}}>
            <Container className="steps-parents">
                <h4 style={{fontWeight: "600", color: "white"}}>Follow These Steps: </h4>
                <hr />
                <Row style={{backgroundColor: "whitesmoke", paddingBottom: "40px", paddingTop: "20px" ,marginBottom:"50px"}}>
                    <Col sm="12" md="6" lg="6">
                        <div className="step">
                            <h5>Step - 1</h5>
                            <p>Wherever you are in Bangladesh. First Come to  Dhaka, Gulistan.</p>
                        </div>
                        <div className="step">
                            <h5>Step - 2</h5>
                            <p>Then take a bus for mawa highway. There are few bus's name which are Elish, Sadhin or boishakhi.</p>
                        </div>
                        <div className="step">
                            <h5>Step - 3</h5>
                            <p>If you got in to boishakhi then don't worry they will bring you to Alampur bridge or just stop the bus at hashara school gate.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="step">
                            <h5>Step - 4</h5>
                            <p>From Hashara then take a Auto which cost 15-20 tk per person for reaching Alampur Bridge.</p>
                        </div>
                        <div className="step">
                            <h5>Step - 5</h5>
                            <p>If you are in Alampur then search for Boat to hire. They will help you to explore The Arial Beel.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            </Container>
        </div>
    );
};

export default Guide;