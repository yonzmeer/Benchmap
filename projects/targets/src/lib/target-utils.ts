import { Target, Mood, Nationality, Costume } from './models/target';
import { randomEnum, randomArray, randomNumber, randomString, randomTime as randomDate } from './utils';

export const empty = (): Target => {
    return {} as Target;
};

export const random = (): Target => {
    return {
        name: randomString(randomNumber(5, 10)),
        updateTime: randomDate(),
        mood: randomEnum(Mood),
        nationality: randomEnum(Nationality),
        costumes: new Set(randomArray(5, () => randomEnum(Costume))),
    };
};

