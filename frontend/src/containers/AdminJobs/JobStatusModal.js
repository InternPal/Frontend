import React, {useState} from "react";
import {Modal, Button, ModalBody, ModalHeader, ModalFooter, Input, Row, Col} from "reactstrap";

import axios from "../../axios";

const JobStatusModal = ({hideModal, modalInfo})=>{

    const [newStatus, setNewStatus] = useState(null);

    const saveStatus = ()=>{
        console.log(newStatus);
        let confirm = window.confirm("Confirm Application Status Change");
        if(confirm){
            if(newStatus === "Accepted"){
                axios.post("/students/offer", {
                    SID : modalInfo.sid,
                    jobID : modalInfo.jobID
                })
                .then((res)=>{
                    console.log(res);
                    hideModal();
                    modalInfo.refresh();
                })
                .catch((err)=>{
                    alert(err);
                })
            }
            if(newStatus === "Rejected"){
                axios.post("/jobApp/result", {
                    SID : modalInfo.sid,
                    jobID : modalInfo.jobID,
                    status : "Rejected"
                })
                .then((res)=>{
                    console.log(res);
                    hideModal();
                    modalInfo.refresh();
                })
                .catch((err)=>{
                    alert(err);
                })
            }
        }
    }


    return <Modal
      toggle={hideModal}
      isOpen={modalInfo.isOpen}
    >
      <ModalHeader toggle={hideModal}>
        Changing Status
      </ModalHeader>
      <ModalBody>
          Name : {modalInfo.name}
          <br/>
          SID : {modalInfo.sid}
          <br/>
          Current Status : {modalInfo.status}
          <br/><br/>
          <Row><Col md="12"><label>Change Status</label>
          <Input type="select" onChange={(e)=>{
              setNewStatus(e.target.value);
          }}>
              <option>---Select---</option>
              <option>Accepted</option>
              <option>Rejected</option>
          </Input></Col></Row>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={saveStatus}
        >
          Save
        </Button>
        {' '}
        <Button onClick={hideModal}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>;
}

export default JobStatusModal;