import axios from 'axios';

export const heroesByName = (name) => {

    const accessToken = 379932106978719 //Deberia ser un .env

    const api_URL = `https://superheroapi.com/api.php/${accessToken}`;

    return axios.get(`${api_URL}/search/${name}`)
}