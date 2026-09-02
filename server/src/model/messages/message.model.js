import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    senderId: {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    receiverId: {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    images: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
