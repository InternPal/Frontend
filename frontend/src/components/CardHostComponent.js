import React from "react";
import './CardHostComponent.css';

import {
    Button,
    Card,
    CardBody,
    CardTitle,
    CardImg,
    CardText,
    CardSubtitle,

} from "reactstrap";

const CardHostComponent = (props) => (
    <div className="cardhead">

        <Card className="card">
            <CardBody>
                <CardImg className="img-card" top width="100%" src={props.image} alt=" Card image cap" />
                <CardTitle className="card-title">{props.title}</CardTitle>
                <CardSubtitle className="card-content">{props.profile}</CardSubtitle>
                <CardSubtitle className="card-content">{props.location}</CardSubtitle>
                <CardText>{props.stipend}</CardText>
                <Button color="primary">Apply</Button>
            </CardBody>
        </Card>
    </div>
);

export default CardHostComponent;