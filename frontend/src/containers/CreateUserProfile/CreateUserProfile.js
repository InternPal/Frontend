import React, { useState } from "react";
import "./CreateUserProfile.css"

import { connect } from "react-redux";
import * as StudentActions from "../../store/Actions/StudentActions";

import RegForm from "components/RegForm";
import BasicInfoForm from "../../components/BasicInfoForm";
import AcademicDetailsForm from "../../components/AcademicDetailsForm";
import UploadDocument from "components/UploadDocument";

import ProgressBar from "./ProgressBar";


const CreateUserProfile = (props) => {

    const index = props.index;
    const [userProfile, setUserProfile] = useState({
        SID: null,
        email: null,
        name: null,
        password: null,
        gender: null,
        dob: null,
        phone: null,
        branch: null,
        linkedin: null,
        github: null,
        class10: null,
        class12: null,
        cgpa : null,
        cgList : null,
        backlogs : null,
        backlogList : null,
        semester : null
    });


    const RegCredSaveFunc = (regCred) => {
        props.regCredValidation(regCred);
        setUserProfile(prev => {
            return {
                ...prev,
                SID: +regCred.SID,
                email: regCred.email,
                password: regCred.password
            }
        })
    }

    const BasicInfoSaveFunc = (basicCred) =>{
        setUserProfile(prev=>{
            return {
                ...prev,
                name : basicCred.fName + " " + basicCred.lName,
                gender : basicCred.gender,
                dob : basicCred.dob,
                phone : +basicCred.phone,
                github : basicCred.github,
                linkedin : basicCred.linkedin
            };
        });
        props.incrementIndex();
    }

    const AcademicDetailsSaveFunc = (academicCred) =>{
        let cgpa = academicCred.cgList[academicCred.cgList.length-1].cgpa;
        let totalBacklogs = 0;
        if(academicCred.backlogList!=null)academicCred.backlogList.forEach(element => {
            totalBacklogs = totalBacklogs + +element.ongoing
        });
        setUserProfile(prev=>{
            return {
                ...prev,
                branch : academicCred.branch,
                semester : +academicCred.semester,
                cgList : academicCred.cgList,
                cgpa : +cgpa,
                backlogList : academicCred.backlogList,
                backlogs : +totalBacklogs,
                class10 : +academicCred.class10,
                class12 : +academicCred.class12
            };
        })
        props.incrementIndex();
    }

    const componentList = [
        <RegForm saveFunc={RegCredSaveFunc} />,
        <BasicInfoForm saveFunc={BasicInfoSaveFunc} SID = {userProfile.SID} email = {userProfile.email} />,
        <AcademicDetailsForm saveFunc={AcademicDetailsSaveFunc}/>,
        <UploadDocument saveFunc={() => {
            console.log(userProfile);
            props.registerStudent(userProfile)
            window.location.replace("http://localhost:3001/auth");
        }} />
    ];


    return (<div className="user-profile-outer-div">
        <ProgressBar index={index} />
        {componentList[index]}
    </div>
    );
}

const mapStateToProps = (state) => {
    return {
        regCredValid: state.student.regCredValid,
        index: state.student.index
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        regCredValidation: (regCred) => dispatch(StudentActions.RegisterCredValidation(regCred)),
        incrementIndex: ()=>dispatch(StudentActions.IncrementIndex()),
        registerStudent: (userProfile)=>dispatch(StudentActions.RegisterStudent(userProfile)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserProfile);