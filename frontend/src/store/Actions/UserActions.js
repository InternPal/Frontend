import axios from "../../axios";
import * as actionTypes from "../actionTypes";

export const loginInit = (user)=>{
    return (dispatch)=>{
        console.log(user);
        axios.post("/students/login", {
            type : user.role,
            email : user.email,
            password : user.password
        })
        .then((res)=>{
            console.log(res);
            dispatch({
                type : actionTypes.LOGIN_SUCCESS,
                role : user.role,
                email : user.email
            })
        })
        .catch((err)=>{
            console.log(err);
        });
    }
}