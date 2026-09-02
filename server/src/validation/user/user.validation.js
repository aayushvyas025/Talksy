import mongoose from "mongoose";

export function validateUserInput(input) {
  if (typeof input !== "string" || !input.trim()) {
    return { isValid: false };
  }

  return { isValid: true };
}

export function validateUserId(id) {
  const userId = mongoose.Types.ObjectId.isValid(id);
  if (!userId) {
    return { isValidId: false };
  }
  return { isValidId: true };
}
