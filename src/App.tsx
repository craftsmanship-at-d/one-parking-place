import {Box} from '@material-ui/core';
import React from 'react';
import './App.css';
import {NavbarComponent} from './components/nav-bar-component/NavbarComponent';
import {ParkingComponent} from './components/parking-component/ParkingComponent';

const App: React.FC = () => {
    return (
        <Box display="flex" justifyContent="flex-start">
            <Box>
            <NavbarComponent/>
            </Box>
            <Box flexGrow={1} padding={3}>
                <ParkingComponent/> </Box>
        </Box>
    );
};

export default App;
