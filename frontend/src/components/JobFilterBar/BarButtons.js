import React, { useState } from "react";

import { Card, Row, Col, Button, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { IoMdPodium } from "react-icons/io";
import { AiFillProfile } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { FiFilter } from "react-icons/fi";

const BarButtons = (props) => {

    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const toggle1 = () => setDropdownOpen1(prevState => !prevState);

    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const toggle2 = () => setDropdownOpen2(prevState => !prevState);

    const [dropdownOpen3, setDropdownOpen3] = useState(false);
    const toggle3 = () => setDropdownOpen3(prevState => !prevState);

    return <Card>
        <CardBody>
            <Row>
                <Col><div className="update ml-auto mr-auto">
                    <center>
                        <Dropdown isOpen={dropdownOpen1} toggle={toggle1}>
                            <DropdownToggle className="btn-round" color="primary" caret>

                                <IoMdPodium size="20px" style={{ marginBottom: "3px" }} /> {" Tier"}
                            </DropdownToggle>
                            <DropdownMenu>
                                {props.TierList.map(tier => <DropdownItem
                                onClick = {()=>{props.addTier(tier)}}
                                >{tier}</DropdownItem>)}
                            </DropdownMenu>
                        </Dropdown>
                    </center>
                </div></Col>


                <Col><div className="update ml-auto mr-auto">
                    <center>
                        <Dropdown isOpen={dropdownOpen2} toggle={toggle2}>
                            <DropdownToggle className="btn-round" color="primary" caret>

                                <AiFillProfile size="20px"/> {" Profile"}
                            </DropdownToggle>
                            <DropdownMenu>
                                {props.Profiles.map(profile => <DropdownItem
                                onClick = {()=>{props.addProfile(profile)}}
                                >{profile}</DropdownItem>)}
                            </DropdownMenu>
                        </Dropdown>
                    </center>
                </div></Col>


                <Col><div className="update ml-auto mr-auto">
                    <center>
                        <Dropdown isOpen={dropdownOpen3} toggle={toggle3}>
                            <DropdownToggle className="btn-round" color="primary" caret>

                                <HiLocationMarker size="20px" style={{ marginBottom: "3px" }} /> {" Locations"}
                            </DropdownToggle>
                            <DropdownMenu>
                                {props.Locations.map(location => <DropdownItem
                                onClick = {()=>{props.addLocation(location)}}
                                >{location}</DropdownItem>)}
                            </DropdownMenu>
                        </Dropdown>
                    </center>
                </div></Col>


                <Col><div className="update ml-auto mr-auto"><center>
                    <Button
                        className="btn-round"
                        color="success"
                    >
                        <FiFilter size="20px" /> {" Apply Filters"}
                    </Button>
                </center> </div></Col>
            </Row>
        </CardBody>
    </Card>
}

export default BarButtons;