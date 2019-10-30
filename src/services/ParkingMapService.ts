import { BehaviorSubject } from 'rxjs';
import { ParkingPlace } from './ParkingPlace';
import { ParkingPlaceType } from './ParkingPlaceType';

export class ParkingMapService {
    private static places = [[ParkingPlace.createOccupiedParkingPlace(0), ParkingPlace.createEntry(),
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

    private static subject: BehaviorSubject<ParkingPlace[][]> = new BehaviorSubject<ParkingPlace[][]>(ParkingMapService.places);

    public static getParkingPlacesSubject(): BehaviorSubject<ParkingPlace[][]> {
        return ParkingMapService.subject;
    }

    public static reservePlace(parkingPlace: ParkingPlace): void {
        for (const parkingPlaces of this.places) {
            for (const place of parkingPlaces) {
                if (place.number === parkingPlace.number) {
                    place.type = ParkingPlaceType.OCCUPIED;
                    this.subject.next(this.places);
                    return;
                }
            }
        }
    }

    public static free(parkingPlace: ParkingPlace): void {
        for (const parkingPlaces of this.places) {
            for (const place of parkingPlaces) {
                if (place.number === parkingPlace.number) {
                    place.type = ParkingPlaceType.EMPTY;
                    this.subject.next(this.places);
                    return;
                }
            }
        }
    }
}
