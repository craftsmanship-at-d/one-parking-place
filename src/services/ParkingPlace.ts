import { ParkingPlaceType } from './ParkingPlaceType';

export class ParkingPlace {
    type: ParkingPlaceType;
    number: number;

    constructor(type: ParkingPlaceType, number: number) {
        this.type = type;
        this.number = number;
    }

    static createEmptyParkingPlace(number: number): ParkingPlace {
        return new ParkingPlace(ParkingPlaceType.EMPTY, number);
    }
    static createOccupiedParkingPlace(number: number): ParkingPlace {
        return new ParkingPlace(ParkingPlaceType.OCCUPIED, number);
    }
    static createRoad(): ParkingPlace {
        return new ParkingPlace(ParkingPlaceType.ROAD, 0);
    }
}
