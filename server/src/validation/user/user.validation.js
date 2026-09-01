export function validateUserInput(input) {
  if ( typeof input !== "string" || !input.trim() ) {
    return { isValid: false };
  }

  return { isValid: true };
}
