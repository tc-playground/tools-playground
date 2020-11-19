import axios from "axios";

var apiKey = "DEFINE ME!"

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID " + apiKey
    }
});