import { LatLng } from '@general-utils';
import { Cartesian3 } from 'cesium';

export const latLngToCartesian3 = ({ latitude, longitude }: LatLng): Cartesian3 => {
    return Cartesian3.fromDegrees(longitude, latitude);
};
