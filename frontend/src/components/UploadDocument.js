import React from "react";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    // CardFooter,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
} from "reactstrap";

const UploadDocument = (props) => {
    return (
        <div>
            <Card className="card-user">
                <CardHeader>
                    <CardTitle tag="h5">Upload Your Documents</CardTitle>
                </CardHeader>
                <CardBody>
                    <Form>
                        <Row>
                            <Col className="pr-1" md="6">
                                <FormGroup>
                                    <label for="exampleCustomFileBrowser">College Resume</label>
                                    <Input type="file" id="exampleCustomFileBrowser" name="customFile" />
                                </FormGroup>
                            </Col>
                            <Col className="pl-1" md="6">
                                <FormGroup>
                                    <label for="exampleCustomFileBrowser">College DMC (Latest)</label>
                                    <Input type="file" id="exampleCustomFileBrowser" name="customFile" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="pr-1" md="6">
                                <FormGroup>
                                    <label for="exampleCustomFileBrowser">Class 12 DMC</label>
                                    <Input type="file" id="exampleCustomFileBrowser" name="customFile" />
                                </FormGroup>
                            </Col>
                            <Col className="pl-1" md="6">
                                <FormGroup>
                                    <label for="exampleCustomFileBrowser">Class 10 DMC</label>
                                    <Input type="file" id="exampleCustomFileBrowser" name="customFile" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                        <div className="update ml-auto mr-auto"><center>
                            <Button
                                className="btn-round"
                                color="primary"
                                onClick = {props.saveFunc}
                            >
                                {"Save & Finish"}
                            </Button></center>
                        </div>
                    </Row>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
}

export default UploadDocument;