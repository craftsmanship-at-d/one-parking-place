import React from "react";
import "./App.css";
import {NavbarComponent} from "./components/nav-bar-component/NavbarComponent";
import {ParkingComponent} from "./components/parking-component/ParkingComponent";

const App: React.FC = () => {
    return (
        <div className="d-flex align-items-start">
            <NavbarComponent></NavbarComponent>
            <ParkingComponent></ParkingComponent>
        </div>
    );
};

export default App;
