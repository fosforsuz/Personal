import axios from "axios";

const devUrl = "http://localhost/TodoApi/api/";
const prodUrl = "/TodoApi/api/"

let baseURL;

if  (process.env.NODE_ENV === "production") {
    baseURL = prodUrl;
}
else {
    baseURL = devUrl;
}

const api = axios.create({
    baseURL: baseURL,
});

export default api;