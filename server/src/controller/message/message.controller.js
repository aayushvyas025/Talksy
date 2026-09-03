import Message from "#model/messages/message.model";
import { messageValidationFlow } from "#utils/message/message.utils";
import {
  validateUserId,
  validateUserInput,
} from "#validation/user/user.validation";

export const getMessage = async (request, response, next) => {
  const { id: receiverId } = request.params;
  const { _id: senderId } = request.user;
  const { isValidId: validReceiverId } = validateUserId(receiverId);
  const { isValidId: validSenderId } = validateUserId(senderId);

  if (!validReceiverId || !validSenderId) {
    return response
      .status(400)
      .json({ success: false, message: "Error, invalid userId" });
  }

  try {
    const messages = await Message.find({
      $or: [
        { senderId: senderId, receiverId: receiverId },
        { senderId: receiverId, receiverId: senderId },
      ],
    }).sort({ createdAt: 1 });

    return response.status(200).json({
      success: true,
      message: "fetch messages successfully",
      messages,
    });
  } catch (error) {
    console.error(`Error, while fetching message: ${error.message}`);
    next(error);
  }
};

export const sendMessage = async (request, response, next) => {
  const { _id: receiverId } = request.params;
  const { _id: senderId } = request.user;
  const { text, image } = request.body;

  messageValidationFlow({ senderId, receiverId, text, image });

  // if (!validSenderId || !validReceiverId) {
  //   return response
  //     .status(400)
  //     .json({ success: false, message: "Error, invalid userId" });
  // }

  // if (!validText) {
  //   return response
  //     .status(400)
  //     .json({ success: false, message: "Error, invalid message" });
  // }

  //  if (senderId.toString() === receiverId.toString()) {
  //   return response.status(400).json({
  //     success: false,
  //     message: "You cannot send a message to yourself",
  //   });
  // }

  try {
    const newMessage = new Message({
      senderId,
      receiverId,
      text,
      image,
    });

    if (!newMessage) {
      return response
        .status(400)
        .json({ success: false, message: "Error, invalid message" });
    }

    await newMessage.save();

    return response.status(201).json({
      success: true,
      message: "Message send successfully",
      newMessage,
    });
  } catch (error) {
    console.error(`Error, while sending message: ${error.message}`);
    next(error);
  }
};
