import React from 'react';
import ReactDOM from 'react-dom';
import { ParkingPlace } from '../../services/ParkingPlace';
import { TranslationUtils } from '../../utils/TranslationUtils';
import ParkingPlaceDetailsDialog from './ParkingPlaceDetailsDialog';

// tslint:disable-next-line:typedef
it('should renders without crashing', () => {
    const div = document.createElement('div');
    TranslationUtils.initializeTranslation();
    // @ts-ignore
    ReactDOM.render(<ParkingPlaceDetailsDialog open={true} parkingPlace={ParkingPlace.createEmptyParkingPlace(5)} setOpen={null}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
