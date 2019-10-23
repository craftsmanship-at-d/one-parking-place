import {Box} from "@material-ui/core";
import React from "react";
import "./App.css";
import {NavbarComponent} from "./components/nav-bar-component/NavbarComponent";
import {ParkingComponent} from "./components/parking-component/ParkingComponent";

const App: React.FC = () => {
    return (
        <Box display="flex" justifyContent="flex-start">
            <NavbarComponent></NavbarComponent>
            <ParkingComponent></ParkingComponent>
        </Box>
    );
};

export default App;
