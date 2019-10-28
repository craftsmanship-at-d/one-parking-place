import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import React from 'react';
import './OccupiedPlaceComponent.css';

export class OccupiedPlaceComponent extends React.Component <any, any> {

    public render(): any {
        return (
            <div className="occupied">
                <span className="smallFont">{this.props.parkingPlace.number}</span>
                <DirectionsCarIcon className="occupied"/>
            </div>
        );
    }

}
