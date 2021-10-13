import React from "react";

import {Card, CardHeader, CardBody} from "reactstrap";

const JobPage = ()=>{
    return <div className="content">
        <Card>
            <CardHeader>
            <img src="https://images.squarespace-cdn.com/content/v1/54d7d9f3e4b0adb809875cd9/1427991323091-IRTLN4QVP7WDG4N573BQ/01.jpg"/>
            <h4 className="title">{"Software Developer"}</h4>
            <p >{"JP Morgan Chase"} . {"Bangalore"}</p>
            </CardHeader>
            
            
            <CardBody>
            </CardBody>
        </Card>
    </div>
}

export default JobPage;