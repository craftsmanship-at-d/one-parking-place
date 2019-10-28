import { ParkingPlace } from './ParkingPlace';

export class ParkingMapService {

    public static getParkingPlaces(): ParkingPlace[][] {
        const places = [[ParkingPlace.createOccupiedParkingPlace(0), ParkingPlace.createEntry(),
            ParkingPlace.createEmptyParkingPlace(1), ParkingPlace.createRoad(),
            ParkingPlace.createEmptyParkingPlace(2)],
            [ParkingPlace.createOccupiedParkingPlace(3), ParkingPlace.createRoad(), ParkingPlace.createEmptyParkingPlace(4),
                ParkingPlace.createRoad(), ParkingPlace.createEmptyParkingPlace(5)],
            [ParkingPlace.createOccupiedParkingPlace(6), ParkingPlace.createRoad(), ParkingPlace.createEmptyParkingPlace(7),
                ParkingPlace.createRoad(), ParkingPlace.createEmptyParkingPlace(8)],
            [ParkingPlace.createOccupiedParkingPlace(9), ParkingPlace.createRoad(), ParkingPlace.createEmptyParkingPlace(10),
                ParkingPlace.createRoad(), ParkingPlace.createEmptyParkingPlace(11)],
            [ParkingPlace.createOccupiedParkingPlace(12), ParkingPlace.createRoad(), ParkingPlace.createRoad(),
                ParkingPlace.createRoad(), ParkingPlace.createEmptyParkingPlace(13)]];
        return places;
    }
}
