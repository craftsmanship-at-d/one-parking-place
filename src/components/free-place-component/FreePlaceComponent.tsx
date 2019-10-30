import LocalParkingIcon from '@material-ui/icons/LocalParking';
import React from 'react';
import ParkingPlaceDetailsDialog from '../parking-place-detail-component/ParkingPlaceDetailsDialog';
import { ParkingDialogProps } from '../parking-place-component/ParkingDialogProps';
import './FreePlaceComponent.css';

export function FreePlaceComponent(props: ParkingDialogProps): JSX.Element {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = ((): void => {
        setOpen(true);
    });

    return (
        <div className="free">
            <span className="smallFont">{props.parkingPlace.number}</span>
            <LocalParkingIcon onClick={handleClickOpen}/>
            <ParkingPlaceDetailsDialog open={open} parkingPlace={props.parkingPlace} setOpen={setOpen}/>
        </div>
    );
}
