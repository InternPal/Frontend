import React from "react";
import {BsArrowDown} from "react-icons/bs";
import {GrDocumentUser, GrTrophy} from "react-icons/gr";
import {BsCalendar4Event} from "react-icons/bs";
import {BiTime} from "react-icons/bi";

const FlowChart = (props)=>{
    var workflow = props.workflow;
    return <div class="work-flow-outer-div">
        <div className="work-flow-terminal-div"><GrDocumentUser/> Application</div>
        <BsArrowDown size="30px" className="flowchart-arrow" />
        {workflow.map((wf)=>{
            return <>
            <div className="work-flow-activity-div">
                <div className="activity-title" >{wf.title}</div>
                <div className="activity-date" ><BsCalendar4Event className="flow-chart-logos" size="14px"/> {wf.Date} <BiTime className="flow-chart-logos" size="15px"/> {wf.Time} </div>
                <div className="acttivity-description" >{wf["Description"]}</div>
                </div>
            <BsArrowDown size="30px" className="flowchart-arrow" />
            </>
        })}

        <div className="work-flow-terminal-div"><GrTrophy/> Offer</div>
    </div>
}

export default FlowChart;