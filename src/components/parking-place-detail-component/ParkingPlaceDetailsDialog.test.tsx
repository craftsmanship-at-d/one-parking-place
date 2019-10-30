import React, { SetStateAction } from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { Simulate } from 'react-dom/test-utils';
import { ParkingMapService } from '../../services/ParkingMapService';
import { ParkingPlace } from '../../services/ParkingPlace';
import { TranslationUtils } from '../../utils/TranslationUtils';
import ParkingPlaceDetailsDialog from './ParkingPlaceDetailsDialog';

it('should renders without crashing', (): void => {
    const div = document.createElement('div');
    TranslationUtils.initializeTranslation();
    // @ts-ignore
    ReactDOM.render(<ParkingPlaceDetailsDialog open={true} parkingPlace={ParkingPlace.createEmptyParkingPlace(5)} setOpen={null}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('should call closeDialog after clicking close', (): void => {
    TranslationUtils.initializeTranslation();
    let isCloseCalled = false;
    const setOpen = (value: SetStateAction<boolean>): void => {
        isCloseCalled = true;
        expect(value).toBeFalsy();
    };
    const { getByText } =
        render(<ParkingPlaceDetailsDialog open={true} parkingPlace={ParkingPlace.createEmptyParkingPlace(5)} setOpen={setOpen}/>);
    expect(getByText('Parking Place No. 5')).toBeTruthy();
    expect(isCloseCalled).toBeFalsy();
    Simulate.click(getByText('Close'));
    expect(isCloseCalled).toBeTruthy();
});

it('should call closeDialog and reserve place after clicking Reserve', (): void => {
    TranslationUtils.initializeTranslation();
    let isCloseCalled = false;
    const setOpen = (value: SetStateAction<boolean>): void => {
        isCloseCalled = true;
        expect(value).toBeFalsy();
    };
    jest.spyOn(ParkingMapService, 'reservePlace').mockImplementationOnce(() => {return; });
    const parkingPlace = ParkingPlace.createEmptyParkingPlace(8);
    const { getByText } =
        render(<ParkingPlaceDetailsDialog open={true} parkingPlace={parkingPlace} setOpen={setOpen}/>);
    expect(getByText('Parking Place No. 8')).toBeTruthy();
    expect(isCloseCalled).toBeFalsy();
    Simulate.click(getByText('Reserve'));
    expect(isCloseCalled).toBeTruthy();
    expect(ParkingMapService.reservePlace).toHaveBeenCalledWith(parkingPlace);
});

it('should call closeDialog and free place after clicking Free', (): void => {
    TranslationUtils.initializeTranslation();
    let isCloseCalled = false;
    const setOpen = (value: SetStateAction<boolean>): void => {
        isCloseCalled = true;
        expect(value).toBeFalsy();
    };
    jest.spyOn(ParkingMapService, 'free').mockImplementationOnce(() => {return; });
    const parkingPlace = ParkingPlace.createOccupiedParkingPlace(5);
    const { getByText } =
        render(<ParkingPlaceDetailsDialog open={true} parkingPlace={parkingPlace} setOpen={setOpen}/>);
    expect(getByText('Parking Place No. 5')).toBeTruthy();
    expect(isCloseCalled).toBeFalsy();
    Simulate.click(getByText('Free'));
    expect(isCloseCalled).toBeTruthy();
    expect(ParkingMapService.free).toHaveBeenCalledWith(parkingPlace);
});
