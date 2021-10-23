import React, {useState} from "react";
import "./CreateUserProfile.css"

import RegForm from "components/RegForm";
import BasicInfoForm from "../../components/BasicInfoForm";
import AcademicDetailsForm from "../../components/AcademicDetailsForm";
import UploadDocument from "components/UploadDocument";

import ProgressBar from "./ProgressBar";


const CreateUserProfile = () => {

    const [index, setIndex] = useState(0);

    const componentList = [
        <RegForm saveFunc = {()=>{setIndex(prev=>((prev+1)%4))}}/>,
        <BasicInfoForm saveFunc = {()=>{setIndex(prev=>((prev+1)%4))}}/>,
        <AcademicDetailsForm saveFunc = {()=>{setIndex(prev=>((prev+1)%4))}}/>,
        <UploadDocument saveFunc = {()=>{setIndex(prev=>((prev+1)%4))}}/>
    ];


    return ( <div className="user-profile-outer-div">
            <ProgressBar index={index}/>
            {componentList[index]}
        </div>
        );
}

export default CreateUserProfile;