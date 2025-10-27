import { Message, User } from "../../model/index.js";

const messagesController = {
  getUserForSidebarController: async (request, response) => {
    try {
      const loggedInUserId = request.user._id;
      const filteredUsers = await User.find({
        _id: { $ne: loggedInUserId },
      }).select("-password");

      response
        .status(200)
        .json({
          success: true,
          message: "Fetch All Login User",
          filteredUsers,
        });
    } catch (error) {
      console.error(`Error While Getting User for Sidebar: ${error.message}`);
      response
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  },
  getMessagesController: async (request, response) => {
    try {
      const { id: userToChatId } = request.params;
      const myId = request.user._id;
      const messages = await Message.find({
        $or: [
          { senderId: myId, receiverId: userToChatId },
          { senderId: userToChatId, receiverId: myId },
        ],
      });

      response.status(200).json({success:true, message:"Message Fetch Successfully", messages})
    } catch (error) {
      console.error(`Error While Fetching Message: ${error.message}`);
      response
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  },
};

export default messagesController;
