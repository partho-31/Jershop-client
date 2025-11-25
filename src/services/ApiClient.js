import axios from "axios";


const ApiClient = axios.create({
    baseURL: "https://golazo-31.vercel.app",
})

export default ApiClient