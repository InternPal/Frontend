import React from "react";
import './CardHostComponent.css';
import Badge from 'react-bootstrap/Badge'

import {
    Button,
    Card,
    CardTitle,
    CardImg,
    CardSubtitle,
    CardHeader,

} from "reactstrap";

const CardHostComponent = (props) => (
            <Card className="jobcard-main">
            <CardHeader>
                <CardImg className="jobcard-img" top width="100%" src={props.image} alt=" Card image cap" />
                <CardTitle className="jobcard-title">{props.title}</CardTitle>
                <Badge pill bg={
                    props.jobtype == "Internship" ? "info" : "success"
                    }>{props.jobtype}</Badge><br/><br/>
                <CardSubtitle className="jobcard-main-content"><span>Profile: </span> {props.profile}</CardSubtitle>
                <CardSubtitle className="jobcard-main-content"><span>Location: </span> {props.location}</CardSubtitle>
                <div align="center">
                    <Button color="primary" className="btn-round">Apply</Button>
                </div>
            </CardHeader>
        </Card>
);

export default CardHostComponent;