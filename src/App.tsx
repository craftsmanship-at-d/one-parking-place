import {Box} from '@material-ui/core';
import React from 'react';
import './App.css';
import { NavbarDialog } from './components/main-nav-bar-component/NavbarDialog';
import {ParkingComponent} from './components/parking-component/ParkingComponent';

const App: React.FC = () => {
    return (
        <Box display="flex" justifyContent="flex-start">
            <Box>
            <NavbarDialog/>
            </Box>
            <Box flexGrow={1} padding={3}>
                <ParkingComponent/>
            </Box>
        </Box>
    );
};

export default App;
