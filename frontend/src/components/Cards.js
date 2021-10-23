import React from "react";
import CardHostComponent from "./CardHostComponent";
import './Cards.css'

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardImg,
    CardText,
    CardSubtitle,
    Container,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
    InputGroupAddon,
    InputGroupText,
    InputGroup
} from "reactstrap";

const cards = [
    { image: "https://s.abcnews.com/images/Business/jp-morgan-file-gty-ml-200908_1599583350520_hpMain_16x9_992.jpg", title: "JP Morgan", profile: "Software Developer", location: "Mumbai", jobtype: "Internship" },
    { image: "https://s.abcnews.com/images/Business/jp-morgan-file-gty-ml-200908_1599583350520_hpMain_16x9_992.jpg", title: "JP Morgan", profile: "Software Developer", location: "Mumbai", jobtype: "Internship" },
    { image: "https://s.abcnews.com/images/Business/jp-morgan-file-gty-ml-200908_1599583350520_hpMain_16x9_992.jpg", title: "JP Morgan", profile: "Software Developer", location: "Mumbai", jobtype: "Internship" },
    { image: "https://s.abcnews.com/images/Business/jp-morgan-file-gty-ml-200908_1599583350520_hpMain_16x9_992.jpg", title: "JP Morgan", profile: "Software Developer", location: "Mumbai", jobtype: "Internship" },
    { image: "https://s.abcnews.com/images/Business/jp-morgan-file-gty-ml-200908_1599583350520_hpMain_16x9_992.jpg", title: "JP Morgan", profile: "Software Developer", location: "Mumbai", jobtype: "Internship" },
    { image: "https://s.abcnews.com/images/Business/jp-morgan-file-gty-ml-200908_1599583350520_hpMain_16x9_992.jpg", title: "JP Morgan", profile: "Software Developer", location: "Mumbai", jobtype: "Internship" },
    { image: "https://s.abcnews.com/images/Business/jp-morgan-file-gty-ml-200908_1599583350520_hpMain_16x9_992.jpg", title: "JP Morgan", profile: "Software Developer", location: "Mumbai", jobtype: "Internship" },
];

function Cards() {

    return (
        <Container>
            <h1 class="heading">
                Apply For Jobs
            </h1>
            <Row>
                {
                    cards.map((data, i) => (
                        <Col key={i} className="spacing" lg="4" sm="6" xs="12">
                            <CardHostComponent {...data} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
}

export default Cards;