import { Costume, Mood, Nationality, Target } from './models/target';
import { randomArray, randomEnum, randomNumber, randomString, randomTime as randomDate } from './utils';

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

