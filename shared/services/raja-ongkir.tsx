const axios = require('axios');

const key = 'cee964c7f903e8d5c401e48d5389d19d';

export function getProvince() {
    return axios.get('http://api.rajaongkir.com/starter/province', {
        'headers': { 'key': key }
    });
}

export function getCity() {
    return axios.get('http://api.rajaongkir.com/starter/city', {
        'headers': { 'key': key }
    });
}

export function getCourier() {
    return ["jne", "tiki", "pos"];
}
