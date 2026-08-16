export const updateProfile = async(request, response, next) => {
    try {
        
    } catch (error) {
        console.error(`Error, while fetching user profile: ${error.message}`);
        next(error); 
    }
}