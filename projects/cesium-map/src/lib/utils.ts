import { Cartesian3 } from 'cesium';
import { LatLng } from 'projects/general-utils/src/public-api';

export const latLngToCartesian3 = ({ latitude, longitude }: LatLng): Cartesian3 => {
    return Cartesian3.fromDegrees(longitude, latitude);
};
