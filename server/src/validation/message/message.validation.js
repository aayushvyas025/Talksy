import { validateUserId } from "#validation/user/user.validation";

export function validateChatIds({ senderId, receiverId }) {
  const { isValidId: validSenderId } = validateUserId(senderId);
  const { isValidId: validReceiverId } = validateUserId(receiverId);
   
    return {
    isValidChatIds: validSenderId && validReceiverId,
  };
}
