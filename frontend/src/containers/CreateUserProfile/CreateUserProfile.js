import React, {useState} from "react";
import "./CreateUserProfile.css"

import {connect} from "react-redux";
import * as StudentActions from "../../store/Actions/StudentActions";

import RegForm from "components/RegForm";
import BasicInfoForm from "../../components/BasicInfoForm";
import AcademicDetailsForm from "../../components/AcademicDetailsForm";
import UploadDocument from "components/UploadDocument";

import ProgressBar from "./ProgressBar";


const CreateUserProfile = (props) => {

    const [index, setIndex] = useState(0);
    const [userProfile, setUserProfile]  =useState({});

    const validation = async (regCred)=>{
        await props.regCredValidation(regCred);
    }

    const RegCredSaveFunc = (regCred)=>{
        validation(regCred).then((_)=>{
            setIndex(prev=>((prev+1)%4))
        })
    }

    const componentList = [
        <RegForm saveFunc = {RegCredSaveFunc}/>,
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

const mapDispatchToProps = (dispatch)=>{
    return {
        regCredValidation : (regCred)=>dispatch(StudentActions.RegisterCredValidation(regCred)),
    };
}

export default connect(null, mapDispatchToProps)(CreateUserProfile);