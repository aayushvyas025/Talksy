import { connectToDB } from "../../config/index.js";
import commonConstants from "../constant/common.js";

const {appConfig} =  commonConstants; 
const {port} = appConfig; 


function databaseConnection(app) {
    connectToDB().then(() => {
        app.listen(port, () => {
            console.log(`Your Server up and running on http://localhost:${port}`); 
        })
    }).catch((error) => {
        console.error(`Error While connection with Database ${error.message}`); 
    }).finally(() => {
        console.log(`Database Connected Successfully with our application`)
    })
}

export default databaseConnection; 