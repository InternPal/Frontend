import axios from "../../axios";
import * as actionTypes from "../actionTypes";

export const loginInit = (user)=>{
    return (dispatch)=>{
        axios.post("/login", {
            type : user.role,
            email : user.email,
            password : user.password
        })
        .then((res)=>{
            localStorage.setItem("role", user.role);
            localStorage.setItem("email", user.email);
            localStorage.setItem("id", res.data._id)
            localStorage.setItem("name", res.data.name)
            localStorage.setItem("sid", user.role === "Student" ? res.data.SID : null)
            localStorage.setItem("semester", user.role === "Student" ? res.data.semester : null)
            localStorage.setItem("offer", user.role === "Student" ? res.data.offer : null)

            dispatch({
                type : actionTypes.LOGIN_SUCCESS,
                role : user.role,
                email : user.email,
                id : res.data._id,
                name : res.data.name,
                sid : user.role === "Student" ? res.data.SID : null,
                semester : user.role === "Student" ? res.data.semester : null,
                offer : user.role === "Student" ? res.data.offer : null,
            })
        })
        .catch((err)=>{
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
        localStorage.removeItem("semester")
        localStorage.removeItem("offer")
        
        dispatch({
            type : actionTypes.LOGOUT
        })
    }
}