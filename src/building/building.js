import React from "react";
import "./building.css";
import store from "../store";
import { setDisplayBuildingDetails } from "../store/actions";

const Building = ({ building }) => {
    const { name, level } = building;

    return (
        <div className="Building" onClick={(e) => handleBuildingClick(building, e)} >
            <div className="Building__details">
                <p className="Building__details-name">{name}</p>
                <p className="Building__details-level">{level}</p>
            </div>
        </div>
    );
};

function handleBuildingClick( building ) {
    console.log(building);
    store.dispatch(setDisplayBuildingDetails(building));
}

export default Building;