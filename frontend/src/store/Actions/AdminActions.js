import axios from "../../axios";
import * as actionTypes from "../actionTypes";

export const postJobs = (jobCreds)=>{
    return (dispatch)=>{
        axios.post("/jobs", jobCreds)
        .then((res)=>{
            console.log(res);
            alert("Job Posted Successfully");
            
        })
        .catch((err)=>{
            alert(err);
        });
    }
}