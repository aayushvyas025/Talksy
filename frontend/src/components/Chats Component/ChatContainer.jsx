import { useEffect } from "react";
import { useChatStore } from "../../store";
import ChatHeader from "./ChatHeader";
import MessageInput from "../Input Component/MessageInput";
import ChatLoader from "../Loader Component/ChatLoader";
import UsersChatsComponent from "./UsersChatsComponent";

function ChatContainer() {
  const {
    messages,
    isMessagesLoading,
    getUsersMessages,
    selectedUser,
    subscribeToMessages,
     unsubscribeFromMessages,
  } = useChatStore();

  useEffect(() => {
    getUsersMessages(selectedUser._id);
    subscribeToMessages();

    return () =>  unsubscribeFromMessages();
  }, [
    selectedUser._id,
    getUsersMessages,
    subscribeToMessages,
     unsubscribeFromMessages,
  ]);

  if (isMessagesLoading) {
    return <ChatLoader />;
  }

  return (
    <div className="flex-1 flex flex-col overflow-col">
      <ChatHeader />
      <UsersChatsComponent messages={messages} />
      <MessageInput />
    </div>
  );
}

export default ChatContainer;
