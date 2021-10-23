import React from "react";

import Accordion from 'react-bootstrap/Accordion'
import ListGroup from 'react-bootstrap/ListGroup'


const SideFilterBar = (props) => {
    return <Accordion>

        <Accordion.Item eventKey="0">
            <Accordion.Header>{"Select Tiers"}</Accordion.Header>
            <Accordion.Body>
                <ListGroup variant="flush">
                    {props.TierList.map(tier => {
                        return <ListGroup.Item className="filterOption" onClick={()=>{
                            props.addTier(tier)
                        }}>{tier}</ListGroup.Item>
                    })}
                </ListGroup>
            </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="1">
            <Accordion.Header>{"Select Profiles"}</Accordion.Header>
            <Accordion.Body>
                <ListGroup variant="flush">
                    {props.Profiles.map(profile => {
                        return <ListGroup.Item className="filterOption" onClick={()=>{
                            props.addProfile(profile)
                        }}>{profile}</ListGroup.Item>
                    })}
                </ListGroup>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
            <Accordion.Header>{"Select Locations"}</Accordion.Header>
            <Accordion.Body>
                <ListGroup variant="flush">
                    {props.Locations.map(location => {
                        return <ListGroup.Item className="filterOption" onClick={()=>{
                            props.addLocation(location)
                        }}>{location}</ListGroup.Item>
                    })}
                </ListGroup>
            </Accordion.Body>
        </Accordion.Item>

    </Accordion>
}

export default SideFilterBar;