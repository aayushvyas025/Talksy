export function validateUserInput(input) {
  if (!input.trim() || typeof input !== "string") {
    return { isValid: false };
  }

  return { isValid: true };
}
