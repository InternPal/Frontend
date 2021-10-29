import React, {useState} from "react";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    FormGroup,
    Input,
    Row,
    Col,
} from "reactstrap"; 


const UploadDocument = (props) => {

    const [userDocs, setUserDocs] = useState({
        userDP : "http://lofrev.net/wp-content/photos/2017/03/user_blue_logo.png",
        resume : null,
        collegeDMC : null,
        class12DMC : null,
        class10DMC : null
    });

    const getBase64 = file => {
        return new Promise(resolve => {
          let baseURL = "";
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            baseURL = reader.result;
            resolve(baseURL);
          };
        });
      };
    
     const handleFileInputChange = e => {
    
       let file = e.target.files[0];   
        getBase64(file)
          .then(result => {
              setUserDocs(prev=>{
                  return {
                      ...prev,
                      [e.target.name] : result,
                  };
              })
          })
          .catch(err => {
            alert(err);
          });
      };

     
    return (
        <div>
            <Card className="card-user">
                <CardHeader>
                    <CardTitle tag="h5">Upload Your Documents</CardTitle>
                </CardHeader>
                <CardBody>
                    <Row>
                        <center>
                            <label>
                                User Display Picture
                                <input type="file"
                                accept="image/png, image/jpeg, image/jpg" 
                                name = "userDP"
                                onChange = {handleFileInputChange}

                                style={{
                                    display : "none"
                                }}/>
                                <br/><br/>
                                <img src={userDocs.userDP}
                                 alt="user-dp"
                                  className="user-dp-input"/>

                            </label>
                        </center>
                    </Row>
                    <br/><br/>

                        <Row>
                            <Col className="pr-1" md="6">
                                <FormGroup>
                                    <label>College Resume</label>
                                    <Input type="file" 
                                    accept= ".pdf" 
                                    name = "resume"
                                    onChange = {handleFileInputChange}
                                     />
                                </FormGroup>
                            </Col>
                            <Col className="pl-1" md="6">
                                <FormGroup>
                                    <label>College DMC (Latest)</label>
                                    <Input type="file" accept= ".pdf" 
                                    name = "collegeDMC"
                                    onChange = {handleFileInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="pr-1" md="6">
                                <FormGroup>
                                    <label>Class 12 DMC</label>
                                    <Input type="file" accept= ".pdf" 
                                    name = "class12DMC"
                                    onChange = {handleFileInputChange}/>
                                </FormGroup>
                            </Col>
                            <Col className="pl-1" md="6">
                                <FormGroup>
                                    <label>Class 10 DMC</label>
                                    <Input type="file" accept= ".pdf" 
                                    name = "class10DMC"
                                    onChange = {handleFileInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <br/><br/>

                        <Row>
                        <div className="update ml-auto mr-auto"><center>
                            <Button
                                className="btn-round"
                                color="primary"
                                onClick = {()=>{
                                    props.saveFunc(userDocs);
                                }}
                            >
                                {"Save & Finish"}
                            </Button></center>
                        </div>
                    </Row>
                </CardBody>
            </Card>
        </div>
    );
}

export default UploadDocument;