import axios from "axios";


const ApiClient = axios.create({
    baseURL: "https://jersey-shop-seven.vercel.app",
})

export default ApiClient