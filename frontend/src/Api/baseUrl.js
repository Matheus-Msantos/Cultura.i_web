import axios from "axios";

export const BaseUrl = axios.create({
    baseURL: "https://sea-turtle-app-om7jd.ondigitalocean.app",
    //baseURL: "http://127.0.0.1:8000",
});


