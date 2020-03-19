import axios from 'axios';

var header = {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*',
    'pragma': 'no-cache',
    'Api-Token': "0f7e5c9167768f6bb0a6e09e335ce464da7cb5e7008b989f0057266c26342424a4d8d3e5",
};

export default class APIutil {

    static getDataAPI(url) {
        return axios(url, {
            method: 'GET',
            mode: 'no-cors',
            headers: header,
        }).then(response => {
            return response.data;
        }).catch(error => {
            return error;
        });
    }

}





