import cloudinary from "#config/cloudinary/cloudinary.config";
import Message from "#model/messages/message.model";
import { uploadOnCloudinary } from "#utils/media/media.util";
import { messageValidationFlow } from "#utils/message/message.utils";
import { validateChatIds } from "#validation/message/message.validation";

export const getMessage = async (request, response, next) => {
  const { id: receiverId } = request.params;
  const { _id: senderId } = request.user;
  const { isValidChatsId } = validateChatIds({ senderId, receiverId });

  if (!isValidChatsId) {
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

  const { isValid, message } = messageValidationFlow({
    senderId,
    receiverId,
    text,
    image,
  });

  if (!isValid) {
    return response.status(400).json({ success: false, message });
  }

  try {
    const imageUrl = await uploadOnCloudinary(image);

    const newMessage = new Message({
      senderId,
      receiverId,
      text,
      image:imageUrl,
    });

    await newMessage.save();

    // todo: Real time Message functionality with Socket.io 

    return response.status(201).json({
      success: true,
      message: "Message sent successfully",
      newMessage,
    });
  } catch (error) {
    console.error(`Error, while sending message: ${error.message}`);
    next(error);
  }
};
