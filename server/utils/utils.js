import fetch from 'node-fetch';
import HttpError from '../error/httpError.js'

export function checkResponseStatus(res) {
    if (res.ok) return res;

    const message = `The HTTP status of the reponse: ${res.status} (${res.statusText})`;
    throw new HttpError(message, res.status, res.statusText);
}

export function compareCategoriesTitles(cat1, cat2) {
    if (cat1.title > cat2.title) {
        return 1;
    }
    
    if (cat2.title > cat1.title) {
        return -1;
    }
    
    return 0;
}

export function getRandomPage(totalResults, pageSize) {
    const min = 1;
    const max = Math.ceil(totalResults / pageSize);

    return Math.floor(Math.random() * (max - min)) + min;
}

export function fetchPexels(resource, handleData) {
    const apiURL = `https://api.pexels.com/v1/${resource}`;

    const fetchOptions = {
        headers: { 'Authorization': process.env.PEXELS_API_KEY }
    }

    fetch(apiURL, fetchOptions)
    .then(data => checkResponseStatus(data))
    .then(data => data.json())
    .then(json => handleData(json))
    .catch(err => {
        console.error(err.message);
        res.status(err.status).send(err.statusText);
    });
}