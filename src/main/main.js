import React from "react";
import "./main.css";
import Empty from "../empty/empty";
import BuildingDetails  from "../buildingDetails/buildingDetails";

const Main = ({ currentBuilding }) => {
    const renderMainContent = () => {
      if (!currentBuilding) {
        return <Empty />;
      } else {
        return <BuildingDetails currentBuilding={currentBuilding} />;
      }
    };

    
    return <main className="Main">{renderMainContent()}</main>;
  };

export default Main;