import { LatLng } from 'projects/general-utils/src/public-api';

export interface Target {
    id: string;
    name: string;
    nickname: string;
    latLng: LatLng;
    mood: Mood;
    updateTime: number;
    nationality: Nationality;
    costumes: Costume[];
}

export enum Mood {
    good,
    bad,
    neutral,
    chill,
}

export enum Nationality {
    Russian,
    English,
    American,
    French,
    Chinese,
    German,
    Japanese,
    Mexican,
    Spanish,
    Turkish,
    Portugese,
    Brazilian,
    Nigerian,
    Lybian,
    Tunisian
}

export enum Costume {
    hat,
    tie,
    shirt,
    pants,
    socks,
    shoes,
}
