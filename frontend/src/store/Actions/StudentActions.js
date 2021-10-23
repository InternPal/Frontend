import axios from "../../axios";
import * as actionTypes from "../actionTypes";

export const RegisterCredValidation = (regCred)=>{
    return (dispatch)=>{
        console.log(regCred);
        axios.post("/students/valid", regCred)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err)
        });
    }
}