import axios from "../../axios";
import * as actionTypes from "../actionTypes";

export const loginInit = (user)=>{
    return (dispatch)=>{
        console.log(user);
        axios.post("/login", {
            type : user.role,
            email : user.email,
            password : user.password
        })
        .then((res)=>{
            console.log(res);
            localStorage.setItem("role", user.role);
            localStorage.setItem("email", user.email);
            localStorage.setItem("id", res.data._id)
            localStorage.setItem("name", res.data.name)
            localStorage.setItem("sid", user.role === "Student" ? res.data.SID : null)
            dispatch({
                type : actionTypes.LOGIN_SUCCESS,
                role : user.role,
                email : user.email,
                id : res.data._id,
                name : res.data.name,
                sid : user.role === "Student" ? res.data.SID : null
            })
        })
        .catch((err)=>{
            console.log(err);
            alert("Invalid Credentials");
        });
    }
}

export const logout = ()=>{
    return (dispatch)=>{
        localStorage.removeItem("role");
        localStorage.removeItem("email");
        localStorage.removeItem("id")
        localStorage.removeItem("name")
        localStorage.removeItem("sid")
        dispatch({
            type : actionTypes.LOGOUT
        })
    }
}