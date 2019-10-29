import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import React, { Dispatch, SetStateAction } from 'react';
import { ParkingMapService } from '../../services/ParkingMapService';
import { ParkingPlace } from '../../services/ParkingPlace';
import { ParkingPlaceType } from '../../services/ParkingPlaceType';

export interface ParkingPlaceDetailsProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    parkingPlace: ParkingPlace;
}

export default function ParkingPlaceDetailsDialog(props: ParkingPlaceDetailsProps): JSX.Element {

    const handleClose = ((): void => {
        props.setOpen(false);
    });

    const reserve = ((): void => {
        ParkingMapService.reservePlace(props.parkingPlace);
        handleClose();
    });

    const free = ((): void => {
        ParkingMapService.free(props.parkingPlace);
        handleClose();
    });

    function getSubmitButton(): JSX.Element {
        return props.parkingPlace.type === ParkingPlaceType.EMPTY ? (
            <Button onClick={reserve} color="primary">
                Reserve
            </Button>
        ) : (
            <Button onClick={free} color="primary">
                Free
            </Button>
        );
    }

    return (
        <div>
            <Dialog open={props.open} onClose={handleClose}>
                <DialogTitle>Parking Place</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Parking Place No. {props.parkingPlace.number}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {getSubmitButton()}
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
