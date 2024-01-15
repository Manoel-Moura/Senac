// utils/axios.js
import axios from 'axios' // Importando de node_modules

export default axios.create({
    baseURL: 'http://localhost:3333'
})