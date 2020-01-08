import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')
    return axios.create({
        baseURL: 'https://airbnbclonedevin.herokuapp.com',
        headers: {
            authorization: token
        }
    })
}