import React from "react";


const ProgressBar = ({index})=>{
    const steps = [
        "Register",
        "Basic Info",
        "Academic Details",
        "Documents"
    ];

    return <>
<ol className="steps">
    {steps.map((step, i)=>{
        return <li key={step}className={
            "step"
            + (i<+index ? " is-complete" : "")
            + (i=== +index ? " is-active" : "")
        } data-step={i+1} >
            {step}
        </li>
    })}
</ol>
    </>
}

export default ProgressBar;