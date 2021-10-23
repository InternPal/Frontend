import React, { useState } from "react";
import { Row, Button, Card, Col, CardBody, CardHeader } from "reactstrap";
import { FiFilter } from "react-icons/fi";

import JobFilterBar from "../../components/JobFilterBar/JobFilterBar";


const JobSearch = () => {
    const [showFilterBar, toggleFilterBar] = useState(false);

    return <div className="content">
        <Row>
            <Col lg={showFilterBar ? 8 : 12}>
                <Button className="btn-round" color="primary" onClick={()=>{
                    toggleFilterBar(prev=>!prev)
                }}><FiFilter size="20px" /> Filter Jobs</Button>

                <Card>
                    <CardHeader>
                        <h5>Jobs</h5>
                    </CardHeader>
                    <CardBody>Job Cards Here</CardBody>
                </Card>
            </Col>

           { showFilterBar && <Col lg="4">
                <JobFilterBar />
            </Col>}

        </Row>
    </div>
}

export default JobSearch;