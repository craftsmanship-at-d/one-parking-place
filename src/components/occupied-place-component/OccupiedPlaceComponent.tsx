import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import React from 'react';
import './OccupiedPlaceComponent.css';
import ParkingPlaceDetailsDialog from '../parking-place-detail-component/ParkingPlaceDetailsDialog'
import { ParkingDialogProps } from '../parking-place-component/ParkingDialogProps';

export function OccupiedPlaceComponent(props: ParkingDialogProps): JSX.Element {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = ((): void => {
        setOpen(true);
    });

    return (
        <div className="occupied">
            <span className="smallFont">{props.parkingPlace.number}</span>
            <DirectionsCarIcon className="occupied" onClick={handleClickOpen}/>
            <ParkingPlaceDetailsDialog open={open} parkingPlace={props.parkingPlace} setOpen={setOpen}/>
        </div>
    );

}
