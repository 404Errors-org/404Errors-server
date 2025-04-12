import { GeometryDto } from '../../../locations/dto/geometry.dto';

export class LocationSeedingDto {
    readonly name: string;
    readonly type: string;
    readonly phoneNumber: string;
    readonly tags: Array<string>;
    readonly geometry: GeometryDto;
    readonly locationDefaultId: string;
}

export const LOCATIONS_SEEDING_DATA: Array<LocationSeedingDto> = [
    {
        name: "New-York-Street Pizza",
        type: "restaurant",
        phoneNumber: "380478291847",
        locationDefaultId: "loc_001",
        tags: ["toilet", "ramp"],
        geometry: {
            verticalCoordinate: 24.032881,
            horizontalCoordinate: 49.8398041
        }
    },
    {
        name: "ОККО",
        type: "fuel",
        phoneNumber: "380676764906",
        locationDefaultId: "loc_002",
        tags: ["toilet", "movement"],
        geometry: {
            verticalCoordinate: 49.8398041,
            horizontalCoordinate: 24.032881
        }
    },
    {
        name: "Медичний центр Ехокор",
        type: "hospital",
        phoneNumber: "380323361250",
        locationDefaultId: "loc_003",
        tags: ["tactile", "movement"],
        geometry: {
            verticalCoordinate: 49.8116926,
            horizontalCoordinate: 24.0424861
        }
    },
    {
        name: "Укрпошта",
        type: "postoffice",
        phoneNumber: "380322222295",
        locationDefaultId: "loc_004",
        tags: ["toilet", "ramp", "movement"],
        geometry: {
            verticalCoordinate: 49.7976822,
            horizontalCoordinate: 24.0543051
        }
    },
    {
        name: "Цепелін",
        type: "restaurant",
        phoneNumber: "380679922022",
        locationDefaultId: "loc_005",
        tags: ["toilet", "ramp"],
        geometry: {
            verticalCoordinate: 49.8569134,
            horizontalCoordinate: 24.0198241
        }
    },
    {
        name: "D.S.",
        type: "pharmacy",
        phoneNumber: "380322453884",
        locationDefaultId: "loc_006",
        tags: ["entrance", "ramp"],
        geometry: {
            verticalCoordinate: 49.7957261,
            horizontalCoordinate: 24.0634637
        }
    },
    {
        name: "Близенько",
        type: "foodmarket",
        phoneNumber: "380322453884",
        locationDefaultId: "loc_007",
        tags: ["tactile", "ramp"],
        geometry: {
            verticalCoordinate: 49.8453839,
            horizontalCoordinate: 24.0249171
        }
    },
    {
        name: "Ощадбанк",
        type: "bank",
        phoneNumber: "380322674591",
        locationDefaultId: "loc_008",
        tags: ["tactile", "entrance"],
        geometry: {
            verticalCoordinate: 49.8454765,
            horizontalCoordinate: 23.9660562
        }
    },
    {
        name: "BANKHOTEL",
        type: "hotel",
        phoneNumber: "380682975020",
        locationDefaultId: "loc_009",
        tags: ["movement", "toilet"],
        geometry: {
            verticalCoordinate: 49.8409271,
            horizontalCoordinate: 24.020998
        }
    },
    {
        name: "Park. Art of Rest",
        type: "park",
        phoneNumber: "380670082222",
        locationDefaultId: "loc_010",
        tags: ["movement", "entrance"],
        geometry: {
            verticalCoordinate: 49.82937028794578,
            horizontalCoordinate: 24.021057874750767
        }
    }
];