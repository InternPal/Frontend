import React from "react";
import { Button, CardBody} from "reactstrap";
import {RiFileAddFill} from "react-icons/ri";

const SubmissionForm = () => {
    return <CardBody>
        <div className="evaluation-file-upload-outer-div">
        <label class="evaluation-file-upload">
            <input type="file" className="file-input-eval"/>
            <RiFileAddFill size="15px"/> Add Document
        </label>
        <Button
                        className="btn-round submit-button-eval"
                        color="primary"
                        type="submit"
                      >
                        {"Submit"}
                      </Button>
        </div>

    </CardBody>
}

export default SubmissionForm;