import { LatLng } from '@general-utils';

export const latLngToCoordinate = ({ latitude, longitude }: LatLng): number[] => {
    return [longitude, latitude];
};
