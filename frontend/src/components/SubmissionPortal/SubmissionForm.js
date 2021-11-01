import React, {useState} from "react";
import { Button, CardBody} from "reactstrap";
import {RiFileAddFill} from "react-icons/ri";

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


    return <CardBody>
        <div className="evaluation-file-upload-outer-div">
        <label class="evaluation-file-upload">
            <input type="file" className="file-input-eval"
            accept = ".pdf"
            onChange = {handleFileInputChange}/>
            <RiFileAddFill size="15px"/> Add Document
        </label>
        <Button
                        className="btn-round submit-button-eval"
                        color="primary"
                        onClick = {()=>{
                          props.submitFunc(doc);
                        }}
                      >
                        {"Submit"}
                      </Button>
        </div>

    </CardBody>
}

export default SubmissionForm;