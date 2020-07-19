export interface Target {
    name: string;
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
}

export enum Costume {
    hat,
    tie,
    shirt,
    pants,
    socks,
    shoes,
}
