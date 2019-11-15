import axios from "axios";

export default axios.create({baseURL: "https://innovation-dreams-backend.herokuapp.com/api/v1/", responseType: "json"});
