import React, { useState } from "react";
import "./JobFIlterBar.css";
import SideFilterBar from "./SideFilterBar";

import { Row, Button , Badge, Form } from "reactstrap";
import { AiOutlineCloseCircle } from "react-icons/ai";




const JobFilterBar = () => {
    const TierList = ["Tier 0", "Tier 1", "Tier 2", "Tier 3"];
    const Profiles = ["Software Developer", "Frontend Developer", "Backend Developer", "Finance", "Operations", "Data Science", "Fintech"];
    const Locations = ["Mumbai", "Pune", "Bengaluru", "Delhi", "Hyderabad", "Kolkata", "Chennai", "Gurugram"];

    const [selectedTiers, setTiers] = useState([]);
    const [selectedProfiles, setProfiles] = useState([]);
    const [selectedLocations, setLocations] = useState([]);

    const addTier = (tier) => {
        setTiers((prev) => {
            return [... (new Set([...prev, tier]))];
        })
    }

    const addProfile = (profile) => {
        setProfiles((prev) => {
            return [... (new Set([...prev, profile]))];
        })
    }

    const addLocation = (location) => {
        setLocations((prev) => {
            return [... (new Set([...prev, location]))];
        })
    }

    const removeTier = (tier) => {
        setTiers(prev => prev.filter((t) =>  t != tier ))
    }

    const removeProfile = (profile) => {
        setProfiles(prev => prev.filter((p) =>  p != profile ))
    }

    const removeLocation = (location) => {
        setLocations(prev => prev.filter((l) =>  l != location ))
    }

    return <>
        <SideFilterBar
            TierList = {TierList}
            Profiles = {Profiles}
            Locations = {Locations}
            addTier = {addTier}
            addProfile = {addProfile}
            addLocation = {addLocation}
        />
        

        <div>
            {selectedTiers.map(tier => {
                return <Badge  color="info" pill className="filter-pill">{"Tier : "}{tier}
                    <AiOutlineCloseCircle
                        onClick={() => { removeTier(tier) }}
                        size="20px"
                        style={{ marginLeft: "8px", paddingBottom: "2px", cursor: "pointer" }}
                    /></Badge>
            })}
            {selectedProfiles.map(profile => {
                return <Badge color="info" pill className="filter-pill">{"Profile : "}{profile}
                    <AiOutlineCloseCircle
                        onClick={() => { removeProfile(profile) }}
                        size="20px"
                        style={{ marginLeft: "8px", paddingBottom: "2px", cursor: "pointer" }} /></Badge>
            })}
            {selectedLocations.map(location => {
                return <Badge color="info" pill className="filter-pill">{"Location : "}{location}
                    <AiOutlineCloseCircle
                        onClick={() => { removeLocation(location)}}
                        size="20px"
                        style={{ marginLeft: "8px", paddingBottom: "2px", cursor: "pointer" }} /></Badge>
            })}
        </div>

        <Row>  <div className="update ml-auto mr-auto">
            <center>
                            <Button
                                className="btn-round"
                                color="success"
                               >
                                {"Apply Filters"}
                            </Button>
                            </center>
                        </div>
                        </Row> 
                        
    </>
}

export default JobFilterBar;