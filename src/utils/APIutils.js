import axios from 'axios';

var header = {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*',
    'pragma': 'no-cache',
    'Api-Token': process.env.REACT_APP_API_KEY,
};

export default class APIutil {

    static getDataAPI(url) {  
        return axios(url, {
            method: 'GET',
            mode: 'no-cors',
            headers: header,
        })
            .then(response => {
                return response.data;
            }).catch(error => {
                return error;
            });
    }

}





