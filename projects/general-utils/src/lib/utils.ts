import { LatLng } from './models';

export const randomLatLng = (): LatLng => {
    return {
        latitude: parseFloat(randomNumber(29, 35, false).toPrecision(4)),
        longitude: parseFloat(randomNumber(29, 35, false).toPrecision(4)),
    };
};

export const randomEnum = <T>(anEnum: T): T[keyof T] => {
    const enumValues = Object.keys(anEnum)
        .map(n => Number.parseInt(n, 10))
        .filter(n => !Number.isNaN(n)) as unknown as T[keyof T][];
    const randomIndex = Math.floor(Math.random() * enumValues.length);
    const randomEnumValue = enumValues[randomIndex];
    return randomEnumValue;
};

export const randomNumber = (min: number, max: number, integer: boolean = true) => {
    const value = Math.random() * (max - min + 1) + min;
    return integer ? Math.floor(value) : value;
};

export const randomString = (length: number = 10): string => {
    return Math.random().toString(36).substring(2, length + 2);
};

export const randomArray = (length: number, filler: () => any): any[] => {
    return Array.from({ length }, filler);
};

export const randomEnumArray = <T>(length: number, anEnum: T): T[keyof T][] => {
    return [...new Set(randomArray(length, () => randomEnum(anEnum)))];
};

export const randomDate = (): number => {
    return randomNumber(new Date(2020, 1, 1).getTime(), new Date(2020, 12, 1).getTime());
};

export const radiansToDegrees = (radians: number) => {
    return radians * (180 / Math.PI);
};

export const degreesToRadians = (degrees: number) => {
    return degrees * (Math.PI / 180);
};

export const emptyCanvas = (width: number, height: number): HTMLCanvasElement => {
    const canvas = document.createElement('canvas');
    canvas.height = height;
    canvas.width = width;
    return canvas;
};
