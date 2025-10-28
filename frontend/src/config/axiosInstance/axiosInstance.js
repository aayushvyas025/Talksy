import axios from "axios" 
import { commonConstant } from "../../helper";

const {envVariables} = commonConstant; 
const {backendUrl} =  envVariables 

const API = axios.create({
    baseURL:backendUrl,
    withCredentials:true
}); 


export default API; 