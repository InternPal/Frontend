import React, { useState } from "react";
import { Button, CardBody, Card, Modal, ModalBody, ModalHeader } from "reactstrap";
import { RiFileAddFill } from "react-icons/ri";
import { AiOutlineFilePdf } from "react-icons/ai";

const SubmissionForm = (props) => {

  const [doc, setDoc] = useState(null);

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
        setDoc(result);
      })
      .catch(err => {
        alert(err);
      });
  };

  const [showModal, toggleModal] = useState(false);


  return <><CardBody>
    <div className="evaluation-file-upload-outer-div">

      {props.report !== null && <><Card style={{
        cursor: "pointer"
      }} 
        onClick = {()=>{
          toggleModal(true);
        }}
      >
        <CardBody>
          <AiOutlineFilePdf size="25px" color="grey"
            style={{
              paddingBottom: "3px"
            }}
          /> View Submission
        </CardBody>
      </Card><br /></>}

      <label className="evaluation-file-upload">
        <input type="file" className="file-input-eval"
          accept=".pdf"
          onChange={handleFileInputChange} />
        <RiFileAddFill size="15px" /> Add Document
      </label>
      <Button
        className="btn-round submit-button-eval"
        color="primary"
        disabled={doc === null}
        onClick={() => {
          props.submitFunc(doc);
        }}
      >
        {props.report === null ? "Submit" : "Change Submission"}
      </Button>
    </div>

    <Modal
                isOpen={showModal}
                toggle={() => { toggleModal(false); }}
                size="lg"
            >
                <ModalHeader toggle={() => { toggleModal(false); }}>
                </ModalHeader>
                <ModalBody>
                    <center> <object style={{
                        width: "80%",
                        height: "600px"
                    }} aria-label = "doc" type="application/pdf" data={props.report}></object> </center>
                </ModalBody>
      </Modal>

  </CardBody></>
}

export default SubmissionForm;