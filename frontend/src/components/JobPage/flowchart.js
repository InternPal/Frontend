import React from "react";
import {BsArrowDown} from "react-icons/bs";
import {GrDocumentUser, GrTrophy} from "react-icons/gr";
import {BsCalendar4Event} from "react-icons/bs";
import {BiTime} from "react-icons/bi";

const FlowChart = (props)=>{
    var workflow = props.workflow;
    return <div class="work-flow-outer-div">
        {workflow.map((wf, index)=>{
            return <>
            <div className="work-flow-activity-div">
                <div className="activity-title" >{wf.title}</div>
                <div className="activity-date" ><BsCalendar4Event className="flow-chart-logos" size="14px"/> {wf.date} <BiTime className="flow-chart-logos" size="15px"/> {wf.time} </div>
                <div className="acttivity-description" >{wf["description"]}</div>
                </div>
          { index < workflow.length - 1 &&  <BsArrowDown size="30px" className="flowchart-arrow" /> }
            </>
        })}

    </div>
}

export default FlowChart;