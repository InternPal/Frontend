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

const UploadDocument = () => {
    return (
        <div>
            <Card className="card-user">
                <CardHeader>
                    <CardTitle tag="h5">Add Basic Info</CardTitle>
                </CardHeader>
                <CardBody>
                    <Form>
                        <Row>
                            <Col className="pr-1" md="6">
                                <FormGroup>
                                    <label for="exampleCustomFileBrowser">File Browser</label>
                                    <Input type="file" id="exampleCustomFileBrowser" name="customFile" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <label for="exampleCustomFileBrowser">File Browser</label>
                                    <Input type="file" id="exampleCustomFileBrowser" name="customFile" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <label for="exampleCustomFileBrowser">File Browser</label>
                                    <Input type="file" id="exampleCustomFileBrowser" name="customFile" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <label for="exampleCustomFileBrowser">File Browser</label>
                                    <Input type="file" id="exampleCustomFileBrowser" name="customFile" />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
}

export default UploadDocument;