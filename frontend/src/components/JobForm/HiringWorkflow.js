import React, { useState } from "react";
import {
    FormGroup,
    Input,
    Row,
    Col,
    Table,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
} from "reactstrap";

const HiringWorkflow = ({setHiringWorkflowArray , changeHiringWorkflow}) => {

    const [showTable, toggleTable] = useState(false);
    const [numberOfActivities, setNumber] = useState(0);

    return <>
        <Row>
            <Col md="12">
                <FormGroup>
                    <label>Enter Hiring Workflow</label>
                    <InputGroup>
                        <Input
                            placeholder="Enter Number Of Hiring Activities"
                            type="number"
                            step="1"
                            min="1"
                            max="7"
                            onChange={(e)=>{
                                setNumber(e.target.value)
                                setHiringWorkflowArray(+e.target.value)
                            }}
                        />
                        <InputGroupAddon addonType="append">
                            
                            <InputGroupText style={{
                                color :"#51cbce",
                                cursor : "pointer"
                            }}
                            onClick = {()=>{
                                toggleTable(true);
                            }}
                            >
                                Add Details
                            </InputGroupText>
                            
                        </InputGroupAddon>
                    </InputGroup>
                </FormGroup>
            </Col>
        </Row>
       { showTable && <Row>
            <br /><br />
            <Table striped responsive>
                <thead className="text-primary">
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: numberOfActivities }, (_, i) => i).map(a => {
                        return <tr key={a}>
                            <th scope="row">{a + 1}</th>
                            <td>
                                <Input type="text" onChange = {e=>{
                                    changeHiringWorkflow(a, "title", e.target.value)
                                }}/>
                            </td>
                            <td>
                                <Input type="text" onChange = {e=>{
                                    changeHiringWorkflow(a, "description", e.target.value)
                                }}/>
                            </td>
                            <td>
                                <Input type="date" onChange = {e=>{
                                    changeHiringWorkflow(a, "date", e.target.value)
                                }}/>
                            </td>
                            <td>
                                <Input type="time" onChange = {e=>{
                                    changeHiringWorkflow(a, "time", e.target.value)
                                }}/>
                            </td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </Row>}
    </>
}

export default HiringWorkflow;