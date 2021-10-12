import React from "react";
import "./CreateUserProfile.css"

import RegForm from "components/RegForm";
import BasicInfoForm from "../../components/BasicInfoForm";
import AcademicDetailsForm from "../../components/AcademicDetailsForm";
import UploadDocument from "components/UploadDocument";

const CreateUserProfile = () => {
    return <div className="user-profile-outer-div">
        <RegForm />
        <BasicInfoForm />
        <AcademicDetailsForm />
        <UploadDocument />
    </div>
}

export default CreateUserProfile;