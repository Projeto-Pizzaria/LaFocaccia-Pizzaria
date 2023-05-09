import axios from "axios";

export const api = axios.create({
    baseURL:"https://json-server-pizzaria.onrender.com",
    timeout:15000
})