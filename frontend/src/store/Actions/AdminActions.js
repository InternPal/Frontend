import axios from "../../axios";

export const postJobs = (jobCreds)=>{
    return (dispatch)=>{
        axios.post("/jobs", jobCreds)
        .then((res)=>{
            alert("Job Posted Successfully");
            
        })
        .catch((err)=>{
            alert(err);
        });
    }
}