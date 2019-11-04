import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import { ParkingMapService } from '../../services/ParkingMapService';
import { ParkingPlace } from '../../services/ParkingPlace';
import { ParkingPlaceComponent } from '../parking-place-component/ParkingPlaceComponent';
import './ParkingComponent.css';

export class ParkingComponent extends React.Component {

    constructor(props: any) {
        super(props);
        ParkingMapService.getParkingPlacesSubject().subscribe((value: ParkingPlace[][]) => {
            this.parkingPlaces = value;
            this.forceUpdate();
        });
    }

    private parkingPlaces: ParkingPlace[][] = [];

    public render(): JSX.Element {
        return (
            <Grid container={true} className="withBorder greyBackground">
                {this.parkingPlaces.map((parkingRow: ParkingPlace[]) => this.createParkingRow(parkingRow))}
            </Grid>
        );
    }

    private createParkingRow(parkingRow: ParkingPlace[]): any {
        return (
            <Grid item={true}>
                {parkingRow.map((parkingPlace: ParkingPlace) => this.createParkingPlace(parkingPlace))}
            </Grid>
        );
    }

    private createParkingPlace(parkingPlace: ParkingPlace): any {
        return (
            <Box>
                <ParkingPlaceComponent parkingPlace={parkingPlace}/>
            </Box>
            );
    }
}
