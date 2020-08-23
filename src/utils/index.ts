import { asNumber } from './type-convert';

export const getIdFromUrl = (url: String): Number => {
    const values = url.split('/');
    const id = values[values.length - 2];
    return asNumber(id);
}