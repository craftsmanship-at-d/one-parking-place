import LocalParkingIcon from '@material-ui/icons/LocalParking';
import React from 'react';
import './FreePlaceComponent.css';

export class FreePlaceComponent extends React.Component <any, any> {

    public render(): any {
        return (
            <div className="free">
                <span className="smallFont">{this.props.parkingPlace.number}</span>
                <LocalParkingIcon/>
            </div>
        );
    }

}
