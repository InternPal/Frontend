import React from "react";
import './CardHostComponent.css';

import {
    Button,
    Badge,
    Card,
    CardBody,
    CardTitle,
    CardImg,
    CardText,
    CardSubtitle,

} from "reactstrap";

const CardHostComponent = (props) => (
    <div className="jobcard-heading">

        <Card className="jobcard-main">
            <CardBody>
                <CardImg className="jobcard-img" top width="100%" src={props.image} alt=" Card image cap" />
                <CardTitle className="jobcard-title">{props.title}</CardTitle>
                <CardSubtitle className="jobcard-main-content"><span>Profile: </span> {props.profile}</CardSubtitle>
                <CardSubtitle className="jobcard-main-content"><span>Location: </span> {props.location}</CardSubtitle>
                <div align="center">
                    <Button color="primary">Apply</Button>
                </div>
            </CardBody>
        </Card>
    </div>
);

export default CardHostComponent;