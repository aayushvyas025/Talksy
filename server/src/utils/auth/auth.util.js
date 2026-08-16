import bcryptjs from "bcryptjs";

export const hashingPassword = async (password) => {
  try {
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    return { hashedPassword };
  } catch (error) {
    console.error(`Error while hashing password: ${error.message}`);
    return { hashedPassword: null };
  }
};

export const comparePassword = async ({ password, storedPassword }) => {
  try {
    const validPassword = await bcryptjs.compare(password, storedPassword);
    return { validPassword };
  } catch (error) {
    console.error(`Error, while comparing password: ${error.message}`);
    return { validPassword: false };
  }
};
