import React from "react";
import "./CreateUserProfile.css"

import BasicInfoForm from "../../components/BasicInfoForm";
import AcademicDetailsForm from "../../components/AcademicDetailsForm";

const CreateUserProfile = ()=>{
    return( 
    // <div className="user-profile-outer-div ">
    <div className="content">
       <BasicInfoForm/>
       <AcademicDetailsForm/>
    </div>);
}

export default CreateUserProfile;