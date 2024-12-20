import axios from 'axios'

const favoriteAPI = axios.create({
    // baseURL: 'http://localhost:3000'
    baseURL: 'https://meadow-dashing-tarsal.glitch.me/api'
})

export default favoriteAPI