import { Costume, Mood, Nationality, Target } from './models/target';
import { randomString, randomNumber, randomEnum, randomArray, randomDate } from 'projects/general-utils/src/public-api';

export const emptyTarget = (): Target => {
    return {
        name: undefined,
        updateTime: undefined,
        mood: undefined,
        nationality: undefined,
        costumes: [],
    };
};

export const randomTarget = (): Target => {
    return {
        name: randomString(randomNumber(5, 10)),
        updateTime: randomDate(),
        mood: randomEnum(Mood),
        nationality: randomEnum(Nationality),
        costumes: [...new Set(randomArray(5, () => randomEnum(Costume)))],
    };
};

