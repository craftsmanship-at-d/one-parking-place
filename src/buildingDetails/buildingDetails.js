import React from "react";

const BuildingDetails = ({ currentBuilding }) => {
    const { name, level, cost } = currentBuilding;

    return <div>
        <p>{name}</p>
        <p>{level}</p>
        {cost.map(c => <p>{c.unit} : {c.amount}</p>)}
    </div>;
};

export default BuildingDetails;