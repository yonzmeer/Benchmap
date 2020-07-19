import { Costume, Mood, Nationality, Target } from './models/target';
import { randomArray, randomEnum, randomNumber, randomString, randomTime as randomDate } from './utils';

export const empty = (): Target => {
    return {} as Target;
};

export const randomTarget = (): Target => {
    return {
        name: randomString(randomNumber(5, 10)),
        updateTime: randomDate(),
        mood: randomEnum(Mood),
        nationality: randomEnum(Nationality),
        costumes: new Set(randomArray(5, () => randomEnum(Costume))),
    };
};

