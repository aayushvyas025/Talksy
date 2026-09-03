import { validateChatIds } from "#validation/message/message.validation";
import {
  validateUserInput,
} from "#validation/user/user.validation";

export function messageValidationFlow({ senderId, receiverId, text, image }) {
  const { isValidChatsId } = validateChatIds({ senderId, receiverId });
  const { isValid: validText } = validateUserInput(text);
  const inValidInputs = !validText && !image;
  const isSelfChat = senderId.toString() === receiverId.toString();

  if (!isValidChatsId) {
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
