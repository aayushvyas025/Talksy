import {
  validateUserId,
  validateUserInput,
} from "#validation/user/user.validation";

export function messageValidationFlow({ senderId, receiverId, text, image }) {
  const { isValidId: validSenderId } = validateUserId(senderId);
  const { isValidId: validReceiverId } = validateUserId(receiverId);
  const { isValid: validText } = validateUserInput(text);

  const validUsersId = validReceiverId && validSenderId;
  const inValidInputs = !validText && !image;
  const isSelfChat = senderId.toString() === receiverId.toString();

  if (!validUsersId) {
    return { isValid: false, message: "Error, invalid userId" };
  }

  if (inValidInputs) {
    return {
      isValid: false,
      message: `Error, ${!text ? `text required` : `image required`} `,
    };
  }

  if (isSelfChat) {
    return {
      isValid: false,
      message: "Error, You cannot send a message to yourself",
    };
  }

  return { success: true, message: "message validation flow successful" };
}
