import React from "react";
import "./CreateUserProfile.css"

import RegForm from "components/RegForm";
import BasicInfoForm from "../../components/BasicInfoForm";
import AcademicDetailsForm from "../../components/AcademicDetailsForm";
import UploadDocument from "components/UploadDocument";
import EnterJobDetails from "components/EnterJobDetails";
import Cards from "components/Cards";

const CreateUserProfile = () => {
    return (
        // <div className="user-profile-outer-div ">
        <div className="content">
            <RegForm />
            <BasicInfoForm />
            <AcademicDetailsForm />
            <UploadDocument />
            <EnterJobDetails />
            <Cards />
        </div>);
}

export default CreateUserProfile;