import axios from "axios";



const campDb = axios.create({
    baseURL: process.env.NEXT_PUBLIC_CAMPEONATO_API,
    headers: {
        Accept: "application/json"
    }
})

export default campDb;