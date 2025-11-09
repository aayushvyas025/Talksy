import { connectToDB } from "../../config/index.js";
import { commonConstants } from "../../helper/index.js";
import { User } from "../../model/index.js";

const {seedUserData} = commonConstants;

const seedDatabase = async() => {
    try {
        await connectToDB();

        await User.insertMany(seedUserData);
        console.log(`Database seeded Successfully`)
        
    } catch (error) {
        console.error(`Error While Seeding Database ${error.message}`); 
    }
} 

seedDatabase();

