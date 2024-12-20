import axios from 'axios'

const favoriteAPI = axios.create({
    baseURL: 'http://localhost:3000'
})

export default favoriteAPI