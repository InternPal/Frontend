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
                <CardImg className="jobcard-img" top width="100%" src={"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"} alt=" Card image cap" />
                <CardTitle className="jobcard-title">{props.name}</CardTitle>
                <Badge pill bg={
                    props.jobType == "Internship" ? "info" : "success"
                    }>{props.jobType}</Badge><br/><br/>
                <CardSubtitle className="jobcard-main-content"><span>Profile: </span> {props.profile}</CardSubtitle>
                <CardSubtitle className="jobcard-main-content"><span>Location: </span> {props.location}</CardSubtitle>
                <div align="center">
                    <Button color="primary" className="btn-round" href={"/admin/job-search/" + props._id}>Know More</Button>
                </div>
            </CardHeader>
        </Card>
);

export default CardHostComponent;