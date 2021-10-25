import React, { useState } from "react";
import { Row, Button, Card, Col, CardBody, CardHeader } from "reactstrap";
import { FiFilter } from "react-icons/fi";

import JobFilterBar from "../../components/JobFilterBar/JobFilterBar";
import CardHostComponent from "../../components/CardHostComponent/CardHostComponent";

const cards = [
    { image: "https://s.abcnews.com/images/Business/jp-morgan-file-gty-ml-200908_1599583350520_hpMain_16x9_992.jpg", title: "JP Morgan", profile: "Software Developer", location: "Mumbai", jobtype: "Internship" },
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png", title: "American Express", profile: "Data Science", location: "Gurgaon", jobtype: "Full Time" },
    { image: "https://s.abcnews.com/images/Business/jp-morgan-file-gty-ml-200908_1599583350520_hpMain_16x9_992.jpg", title: "JP Morgan", profile: "Software Developer", location: "Mumbai", jobtype: "Internship" },
    { image: "https://s.abcnews.com/images/Business/jp-morgan-file-gty-ml-200908_1599583350520_hpMain_16x9_992.jpg", title: "JP Morgan", profile: "Software Developer", location: "Mumbai", jobtype: "Internship" },
    { image: "https://s.abcnews.com/images/Business/jp-morgan-file-gty-ml-200908_1599583350520_hpMain_16x9_992.jpg", title: "JP Morgan", profile: "Software Developer", location: "Mumbai", jobtype: "Internship" },
    { image: "https://s.abcnews.com/images/Business/jp-morgan-file-gty-ml-200908_1599583350520_hpMain_16x9_992.jpg", title: "JP Morgan", profile: "Software Developer", location: "Mumbai", jobtype: "Internship" },
    { image: "https://s.abcnews.com/images/Business/jp-morgan-file-gty-ml-200908_1599583350520_hpMain_16x9_992.jpg", title: "JP Morgan", profile: "Software Developer", location: "Mumbai", jobtype: "Internship" },
];

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
                    <CardBody>
                        <Row>
                      {
                          cards.map(data=>{
                              return <Col lg={showFilterBar ? 6 : 4} md="6">
                              <CardHostComponent {...data}/>
                              </Col>;
                          })
                      }
                      </Row>
                    </CardBody>
                </Card>
            </Col>

           { showFilterBar && <Col lg="4">
                <JobFilterBar />
            </Col>}

        </Row>
    </div>
}

export default JobSearch;