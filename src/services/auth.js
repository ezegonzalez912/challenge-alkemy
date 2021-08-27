import axios from 'axios';

export const userLogin = ({email, password}) => {

    const api_URL = "http://challenge-react.alkemy.org/"

    return axios.post(api_URL, {
        email,
        password
    })
}