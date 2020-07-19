export interface Target {
    name: string;
    mood: Mood;
    updateTime: number;
    nationality: Nationality;
    costumes: Set<Costume>;
}

export enum Mood {
    good = 'good',
    bad = 'bad',
    neutral = 'neutral',
    chill = 'chill',
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
