import { Costume, Mood, Nationality, Target } from './models/target';
import { randomString, randomNumber, randomEnum, randomArray, randomDate, randomEnumArray, randomLatLng } from 'projects/general-utils/src/public-api';
import { v4 as uuid } from 'uuid';

const MOOD_TO_COLOR = new Map<Mood, string>([
    [Mood.bad, 'red'],
    [Mood.chill, 'green'],
    [Mood.good, 'teal'],
    [Mood.neutral, 'purple'],
]);

export const emptyTarget = (): Target => {
    return {
        id: undefined,
        name: undefined,
        nickname: undefined,
        latLng: undefined,
        updateTime: undefined,
        mood: undefined,
        nationality: undefined,
        costumes: [],
    };
};

export const randomTarget = (): Target => {
    return {
        id: uuid(),
        name: randomString(randomNumber(5, 10)),
        nickname: randomString(randomNumber(5, 10)),
        latLng: randomLatLng(),
        updateTime: randomDate(),
        mood: randomEnum(Mood),
        nationality: randomEnum(Nationality),
        costumes: randomEnumArray(5, Costume),
    };
};

export const moodToColor = (mood: Mood): string => {
    return MOOD_TO_COLOR.get(mood);
};
