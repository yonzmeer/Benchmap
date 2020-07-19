export interface Target {
    name: string;
    mood: Mood;
    updateTime: number;
    nationality: Nationality;
    costumes: Set<Costume>;
}

export enum Mood {
    good,
    bad,
    neutral,
    chill,
}

export enum Nationality {
    russian,
    english,
    american,
    french,
    chinese,
    german,
}

export enum Costume {
    hat,
    tie,
    shirt,
    pants,
    socks,
    shoes,
}
