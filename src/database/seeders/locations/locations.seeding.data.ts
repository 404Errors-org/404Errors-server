import { GeometryDto } from '../../../locations/dto/geometry.dto';

export class LocationSeedingDto {
    readonly name: string;
    readonly category: string;
    readonly phoneNumber: string;
    readonly tags: Array<string>;
    readonly geometry: GeometryDto;
    readonly locationDefaultId: string;
}

export const LOCATIONS_SEEDING_DATA: Array<LocationSeedingDto> = [
    {
        "name": "New-York-Street Pizza",
        "category": "restaurant",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_100",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8099377,
            "horizontalCoordinate": 24.0015915
        }
    },
    {
        "name": "ANP",
        "category": "fuel",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_101",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.7958968,
            "horizontalCoordinate": 24.0534745
        }
    },
    {
        "name": "ОККО №05",
        "category": "fuel",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_102",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8535367,
            "horizontalCoordinate": 24.0147597
        }
    },
    {
        "name": "Відділення поштового зв’язку №49",
        "category": "postoffice",
        "phoneNumber": "+380 322 22 1895",
        "locationDefaultId": "loc_103",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.7840984,
            "horizontalCoordinate": 24.0604187
        }
    },
    {
        "name": "WineTime",
        "category": "foodmarket",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_104",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8554072,
            "horizontalCoordinate": 24.0217699
        }
    },
    {
        "name": "Ощадбанк",
        "category": "bank",
        "phoneNumber": "+380 3222 35 140",
        "locationDefaultId": "loc_105",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.7840143,
            "horizontalCoordinate": 24.0600211
        }
    },
    {
        "name": "Відділення поштового зв’язку № 40",
        "category": "postoffice",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_106",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.825769,
            "horizontalCoordinate": 23.9505687
        }
    },
    {
        "name": "DS аптека",
        "category": "pharmacy",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_107",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8234521,
            "horizontalCoordinate": 23.9599163
        }
    },
    {
        "name": "Мед-сервіс",
        "category": "pharmacy",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_108",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.7848408,
            "horizontalCoordinate": 24.0601822
        }
    },
    {
        "name": "Кінґ Кросс",
        "category": "entertaiment",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_109",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.7735972,
            "horizontalCoordinate": 24.0139022
        }
    },
    {
        "name": "McDonald's",
        "category": "restaurant",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_110",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8381108,
            "horizontalCoordinate": 24.0313878
        }
    },
    {
        "name": "Відділення поштового зв’язку №8",
        "category": "postoffice",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_111",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8398041,
            "horizontalCoordinate": 24.032881
        }
    },
    {
        "name": "ПриватБанк",
        "category": "bank",
        "phoneNumber": "3700",
        "locationDefaultId": "loc_112",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8084193,
            "horizontalCoordinate": 23.9984436
        }
    },
    {
        "name": "ПриватБанк",
        "category": "bank",
        "phoneNumber": "3700",
        "locationDefaultId": "loc_113",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8085502,
            "horizontalCoordinate": 23.9983212
        }
    },
    {
        "name": "Маґнус",
        "category": "entertaiment",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_114",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.844431,
            "horizontalCoordinate": 24.0243986
        }
    },
    {
        "name": "ТЦ Скриня",
        "category": "entertaiment",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_115",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8350697,
            "horizontalCoordinate": 23.9951095
        }
    },
    {
        "name": "3і",
        "category": "pharmacy",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_116",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8475065,
            "horizontalCoordinate": 24.0022819
        }
    },
    {
        "name": "ОККО",
        "category": "fuel",
        "phoneNumber": "+380 67 676 4906",
        "locationDefaultId": "loc_117",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.7430037,
            "horizontalCoordinate": 24.0138503
        }
    },
    {
        "name": "Челентано",
        "category": "restaurant",
        "phoneNumber": "+380 32 236 7260;+380 67 327 4342",
        "locationDefaultId": "loc_118",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.841166,
            "horizontalCoordinate": 24.031106
        }
    },
    {
        "name": "Відділення поштового зв’язку № 70",
        "category": "postoffice",
        "phoneNumber": "+380 322 22 2295",
        "locationDefaultId": "loc_119",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.7976822,
            "horizontalCoordinate": 24.0543051
        }
    },
    {
        "name": "Пульс",
        "category": "pharmacy",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_120",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.7981861,
            "horizontalCoordinate": 24.0536164
        }
    },
    {
        "name": "3і",
        "category": "pharmacy",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_121",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8293962,
            "horizontalCoordinate": 23.9603064
        }
    },
    {
        "name": "Цепелін",
        "category": "restaurant",
        "phoneNumber": "+380 67 992 2022",
        "locationDefaultId": "loc_122",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8569134,
            "horizontalCoordinate": 24.0198241
        }
    },
    {
        "name": "Соціальна аптека",
        "category": "pharmacy",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_123",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8541054,
            "horizontalCoordinate": 24.0225898
        }
    },
    {
        "name": "D.S.",
        "category": "pharmacy",
        "phoneNumber": "+380 322 45 3884",
        "locationDefaultId": "loc_124",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.7957261,
            "horizontalCoordinate": 24.0634637
        }
    },
    {
        "name": "D.S.",
        "category": "pharmacy",
        "phoneNumber": "+380 322 23 5071",
        "locationDefaultId": "loc_125",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.79616,
            "horizontalCoordinate": 24.0637307
        }
    },
    {
        "name": "Знахар",
        "category": "pharmacy",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_126",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.7946294,
            "horizontalCoordinate": 24.0631717
        }
    },
    {
        "name": "Укрсиббанк",
        "category": "bank",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_127",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8382271,
            "horizontalCoordinate": 24.0083701
        }
    },
    {
        "name": "Auchan",
        "category": "foodmarket",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_128",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.812416,
            "horizontalCoordinate": 23.9864521
        }
    },
    {
        "name": "Аптека Пульс",
        "category": "pharmacy",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_129",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8583273,
            "horizontalCoordinate": 24.0183854
        }
    },
    {
        "name": "Знахар",
        "category": "pharmacy",
        "phoneNumber": "+380 322 97 5589;+380 322 64 5337",
        "locationDefaultId": "loc_130",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8541932,
            "horizontalCoordinate": 24.0233172
        }
    },
    {
        "name": "Планета Кіно",
        "category": "unknown",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_131",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8500455,
            "horizontalCoordinate": 24.0222799
        }
    },
    {
        "name": "Сільпо",
        "category": "foodmarket",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_132",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8493368,
            "horizontalCoordinate": 24.0212312
        }
    },
    {
        "name": "McDonald's",
        "category": "restaurant",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_133",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8498934,
            "horizontalCoordinate": 24.0229861
        }
    },
    {
        "name": "Аптека Доброго Дня",
        "category": "pharmacy",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_134",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8495984,
            "horizontalCoordinate": 24.0208423
        }
    },
    {
        "name": "D.S.",
        "category": "pharmacy",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_135",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8449777,
            "horizontalCoordinate": 24.0272248
        }
    },
    {
        "name": "Трапезна УКУ",
        "category": "restaurant",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_136",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8173028,
            "horizontalCoordinate": 24.023331
        }
    },
    {
        "name": "Близенько",
        "category": "foodmarket",
        "phoneNumber": "+380 68 519 8686;+380 93 288 6709",
        "locationDefaultId": "loc_137",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8453839,
            "horizontalCoordinate": 24.0249171
        }
    },
    {
        "name": "OKKO",
        "category": "fuel",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_138",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.7789098,
            "horizontalCoordinate": 23.9754244
        }
    },
    {
        "name": "Sense bank",
        "category": "bank",
        "phoneNumber": "+380 3222 95 371",
        "locationDefaultId": "loc_139",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8544546,
            "horizontalCoordinate": 24.0222585
        }
    },
    {
        "name": "Челентано",
        "category": "restaurant",
        "phoneNumber": "+380 32 254 6755",
        "locationDefaultId": "loc_140",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8372207,
            "horizontalCoordinate": 24.0347683
        }
    },
    {
        "name": "ПриватБанк",
        "category": "bank",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_141",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8392983,
            "horizontalCoordinate": 24.0289156
        }
    },
    {
        "name": "Пульс",
        "category": "pharmacy",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_142",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8103045,
            "horizontalCoordinate": 23.9969858
        }
    },
    {
        "name": "Нова Пошта №16",
        "category": "postoffice",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_143",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.7880365,
            "horizontalCoordinate": 24.058329
        }
    },
    {
        "name": "Lviv Croissants",
        "category": "restaurant",
        "phoneNumber": "+380 97 585 9194",
        "locationDefaultId": "loc_144",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8403761,
            "horizontalCoordinate": 24.02776
        }
    },
    {
        "name": "Сім23",
        "category": "foodmarket",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_145",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.7846466,
            "horizontalCoordinate": 24.0601934
        }
    },
    {
        "name": "Ощадбанк",
        "category": "bank",
        "phoneNumber": "+380 322 67 4591",
        "locationDefaultId": "loc_146",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8454765,
            "horizontalCoordinate": 23.9660562
        }
    },
    {
        "name": "Нова Пошта",
        "category": "postoffice",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_147",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.7921455,
            "horizontalCoordinate": 24.0559157
        }
    },
    {
        "name": "D.S.",
        "category": "pharmacy",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_148",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.7967951,
            "horizontalCoordinate": 24.0178856
        }
    },
    {
        "name": "Хінкальня",
        "category": "restaurant",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_149",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8498039,
            "horizontalCoordinate": 24.0229923
        }
    },
    {
        "name": "Кримська перепічка",
        "category": "restaurant",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_150",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.7917352,
            "horizontalCoordinate": 24.0560711
        }
    },
    {
        "name": "Наш",
        "category": "foodmarket",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_151",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.7958909,
            "horizontalCoordinate": 24.0628918
        }
    },
    {
        "name": "Express Buffet",
        "category": "restaurant",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_152",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.7950834,
            "horizontalCoordinate": 24.0589004
        }
    },
    {
        "name": "Ощадбанк",
        "category": "bank",
        "phoneNumber": "+380 322 93 8988",
        "locationDefaultId": "loc_153",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8673879,
            "horizontalCoordinate": 24.043225
        }
    },
    {
        "name": "DS",
        "category": "pharmacy",
        "phoneNumber": "+380 322 62 0071",
        "locationDefaultId": "loc_154",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8292403,
            "horizontalCoordinate": 23.9593297
        }
    },
    {
        "name": "Ощадбанк",
        "category": "bank",
        "phoneNumber": "+380 322 63 1544",
        "locationDefaultId": "loc_155",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8099686,
            "horizontalCoordinate": 23.9967951
        }
    },
    {
        "name": "Ощадбанк",
        "category": "bank",
        "phoneNumber": "+380 322 55 6084",
        "locationDefaultId": "loc_156",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8301607,
            "horizontalCoordinate": 23.9673122
        }
    },
    {
        "name": "ПУМБ",
        "category": "bank",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_157",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8052648,
            "horizontalCoordinate": 23.9892907
        }
    },
    {
        "name": "Алло",
        "category": "electricshop",
        "phoneNumber": "+380 66 406 2511",
        "locationDefaultId": "loc_158",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8398986,
            "horizontalCoordinate": 24.0281765
        }
    },
    {
        "name": "Близенько",
        "category": "foodmarket",
        "phoneNumber": "+380 93 288 6785",
        "locationDefaultId": "loc_159",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8261511,
            "horizontalCoordinate": 24.0269695
        }
    },
    {
        "name": "Близенько",
        "category": "foodmarket",
        "phoneNumber": "+380 68 519 8686;+380 93 288 6718",
        "locationDefaultId": "loc_160",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8260964,
            "horizontalCoordinate": 24.0381022
        }
    },
    {
        "name": "Медичний центр Ехокор",
        "category": "hospital",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_161",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8116926,
            "horizontalCoordinate": 24.0424861
        }
    },
    {
        "name": "Сушія",
        "category": "restaurant",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_162",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8497287,
            "horizontalCoordinate": 24.0232382
        }
    },
    {
        "name": "Подорожник",
        "category": "pharmacy",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_163",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.8298363,
            "horizontalCoordinate": 23.968524
        }
    },
    {
        "name": "АТБ-маркет",
        "category": "foodmarket",
        "phoneNumber": "380000000000",
        "locationDefaultId": "loc_164",
        "tags": [
            "entrance",
            "ramp"
        ],
        "geometry": {
            "verticalCoordinate": 49.7824413,
            "horizontalCoordinate": 24.0570955
        }
    }
];