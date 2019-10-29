import { Box } from '@material-ui/core';
import React from 'react';
import { ParkingPlaceType } from '../../services/ParkingPlaceType';
import { EntryComponent } from '../entry-component/EntryComponent';
import { FreePlaceComponent } from '../free-place-component/FreePlaceComponent';
import { OccupiedPlaceComponent } from '../occupied-place-component/OccupiedPlaceComponent';
import { RoadComponent } from '../road-component/RoadComponent';

export class ParkingPlaceComponent extends React.Component<any, any> {

    public render(): any {
        return (
            <Box>
                {this.getIcon()}
            </Box>
        );
    }

    private getIcon(): any {
        if (this.props.parkingPlace.type === ParkingPlaceType.OCCUPIED) {
            return <OccupiedPlaceComponent parkingPlace={this.props.parkingPlace}/>;
        } else if (this.props.parkingPlace.type === ParkingPlaceType.EMPTY) {
            return <FreePlaceComponent parkingPlace={this.props.parkingPlace}/>;
        } else if (this.props.parkingPlace.type === ParkingPlaceType.ENTRY) {
            return <EntryComponent parkingPlace={this.props.parkingPlace}/>;
        } else {
            return <RoadComponent/>;
        }
    }
}
