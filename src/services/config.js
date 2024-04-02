import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://api-order-lessons.onrender.com/api'
})

export default authApi