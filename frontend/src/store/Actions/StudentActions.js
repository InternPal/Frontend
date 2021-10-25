import axios from "../../axios";
import * as actionTypes from "../actionTypes";

export const RegisterCredValidation = (regCred)=>{
    return (dispatch)=>{
        axios.post("/students/valid", regCred)
        .then((res)=>{
            if(res.data){
                dispatch({
                    type : actionTypes.REGISTER_CRED_VALID,
                });
            }else{
                alert("User already exists");
            }
        })
        .catch((err)=>{
            alert(err);
        });
    }
}

export const IncrementIndex = ()=>{
    return (dispatch)=>{
        dispatch({
            type : actionTypes.INCREMENT_INDEX,
        })
    }
}

export const RegisterStudent = (userProfile)=>{
    return (dispatch)=>{
        axios.post("/students", userProfile)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            alert(err._message);
        });
    }
}