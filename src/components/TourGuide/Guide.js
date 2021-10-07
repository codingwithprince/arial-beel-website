import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FcIdea } from 'react-icons/fc';
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
                            <p>If you are in Dhaka then first come to Gulistan and search for Boishakhi ( বৈশাখী ) Bus. They will bring you directly to Alampur Bazar.</p>
                        </div>
                        <div className="step">
                            <h5>Step - 2</h5>
                            <p> There are other buses you can choose like Elish, Bosumoti, Prochesta etc. but you have to 
                                    get down in Hashara School gate.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="step">
                             <h5>Step - 3</h5>
                             <p>Then Take a Auto for Alampur Bazar which will cost 15/20tk per person.</p>
                        </div>
                        <div className="step">
                            <h5>Step - 4</h5>
                            <p>After reaching Alampur Bazar Search for Boat to hire which will cost you around 700-800 Tk per hour.
                                You can also <a href="#footer" style={{textDecoration:"none"}}> contact </a>us for hiring boat. 
                            </p>
                        </div>
                    </Col>
                    <p className="text-center mt-5"><FcIdea fontSize="25px" /> <span>Tips : </span>  Try to arrive before noon. So that, you can have enough time to explore the beautiful beel.</p>
                </Row>
            </Container>
            </Container>
        </div>
    );
};

export default Guide;