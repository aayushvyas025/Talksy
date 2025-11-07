import React, { useEffect } from "react";
import { useChatStore } from "../../store";
import ChatHeader from "./ChatHeader";
import MessageInput from "../Input Component/MessageInput";
import ChatLoader from "../Loader/ChatLoader";

function ChatContainer() {
  const { messages, isMessagesLoading, getUsersMessages, selectedUser } =
    useChatStore();

  useEffect(() => {
    getUsersMessages(selectedUser._id);
  }, [selectedUser._id, getUsersMessages]);

  if(isMessagesLoading) {
    return <ChatLoader/>
  }

  return <div className="flex-1 flex flex-col overflow-col">
    <ChatHeader />
    <p>Messages.... </p>
    <MessageInput />
  </div>;
}

export default ChatContainer;
