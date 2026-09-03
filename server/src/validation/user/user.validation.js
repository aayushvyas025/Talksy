import mongoose from "mongoose";

export function validateUserInput(input) {
  return { isValid: typeof input === "string" && input.trim().length > 0 };
}

export function validateUserId(id) {
  const userId = mongoose.Types.ObjectId.isValid(id);
  return { isValidId: userId };
}
