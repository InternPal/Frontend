import React from "react";
import "./AuthPage.css";

import BGImg from "../../assets/img/land-page.jpg";

import Login from "./Login";

import { Card, CardBody, Row, Col } from "reactstrap";
import { Typewriter } from 'react-simple-typewriter'

const AuthPage = () => {
    return <div className="auth-page-div">
        <img
            src={BGImg}
            className="auth-page-bg-img" 
            alt="Background"/>
        <Card className="auth-page-content">
            <CardBody>
                <Row>
                    <Col lg="6" md="12">
                        <div className="auth-page-left-div">
                            InternPal
                            <p>
                                <Typewriter
                                    words={[
                                        "Meet The Right Opportunities",
                                        "Built For PEC",
                                        "दिशा प्रकाश की ओर",
                                         //suggest text
                                    ]}
                                    loop={false}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={100}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                    onType={()=>{}}
                                />
                            </p>
                        </div>
                    </Col>
                    <Col lg="6" md="12">
                        <div className="auth-page-right-div">
                            <Row><Col><h2>Sign In</h2></Col></Row>
                            <Row><Login /></Row>
                            <Row><Col style={{
                                textAlign: "end"
                            }}>Not registered yet? <a href="/student-register">Sign Up!</a></Col></Row>
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    </div>
}

export default AuthPage;