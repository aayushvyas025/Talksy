import axios from "axios";
import envConfig from "@/constant/envConfig";

const { applicationMode, backendBaseUrl } = envConfig;
console.log(applicationMode, backendBaseUrl) // Output: production http://localhost:3001/talksy/api/v1 

const API = axios.create({
  baseURL: applicationMode === "development" ? backendBaseUrl :  "/talksy/api/v1" ,
  withCredentials:true
});

export default API;
