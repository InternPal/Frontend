import React from "react";

import { Card, CardHeader, Badge, CardBody, Table } from "reactstrap";

const WorkflowResultTable = (props) => {

    return <CardBody>
        <br />
        <Table striped>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Application</td>
                    <td><a href="" onClick={(event)=>{props.showResultsFunc(event, "Applications")}}>{"View Applications"}</a></td>
                </tr>

                <tr>
                    <th scope="row">2</th>
                    <td>Coding Round</td>
                    <td><a href="" onClick={(event)=>{props.showResultsFunc(event, "Coding Round")}}>{"View / Submit Results"}</a></td>
                </tr>

                <tr>
                    <th scope="row">3</th>
                    <td>Technical Interview</td>
                    <td><a href="" onClick={(event)=>{props.showResultsFunc(event, "Technical Interview")}}>{"View / Submit Results"}</a></td>
                </tr>

                <tr>
                    <th scope="row">4</th>
                    <td>HR Interview</td>
                    <td><a href="" onClick={(event)=>{props.showResultsFunc(event, "HR Interview")}}>{"View / Submit Results"}</a></td>
                </tr>

                <tr>
                    <th scope="row">5</th>
                    <td>Offer</td>
                    <td><a href="" onClick={(event)=>{props.showResultsFunc(event, "Offer")}}>{"View Offers"}</a></td>
                </tr>
            </tbody>
        </Table>

    </CardBody>
}

export default WorkflowResultTable;