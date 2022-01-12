import axios from "axios";

const api = axios.create({
    baseURL: `https://frozen-crag-31536.herokuapp.com/${process.env.REACT_APP_SERVER_HOST}`,
});

export default api;
