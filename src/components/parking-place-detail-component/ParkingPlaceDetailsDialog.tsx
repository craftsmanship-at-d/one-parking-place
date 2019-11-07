import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import React, { Dispatch, SetStateAction } from 'react';
import { Trans } from 'react-i18next';
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
            <Button onClick={reserve} data-cy-reserve-button color="primary">
                <Trans i18nKey="details.reserve"/>
            </Button>
        ) : (
            <Button onClick={free} data-cy-free-button color="primary">
                <Trans i18nKey="details.free"/>
            </Button>
        );
    }

    return (
        <div>
            <Dialog open={props.open} onClose={handleClose}>
                <DialogTitle><Trans i18nKey="details.title"/></DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Trans i18nKey="details.parkingPlaceNumber"/>{props.parkingPlace.number}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {getSubmitButton()}
                    <Button onClick={handleClose} color="primary">
                        <Trans i18nKey="details.close"/>
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
