import ImageComponent from "./ImageComponent";
import TextComponent from "./TextComponent";
import { helperFunctions } from "../../helper";
import { useEffect, useRef } from "react";
import { useChatStore } from "../../store";

function UserMessageComponent({ message }) {
  const messageEndRef = useRef(null);
  const { formatMessageTime } = helperFunctions;
  const { messages } = useChatStore();

  useEffect(() => {
    if (messageEndRef && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  return (
    <>
      <div className="chat-header mb-1" ref={messageEndRef}>
        <time className="text-xs opacity-50 ml-1">
          {formatMessageTime(message.createdAt)}
        </time>
      </div>
      <div className="chat-bubble flex flex-col">
        {message.image && <ImageComponent image={message.image} />}
        {message.text && <TextComponent text={message.text} />}
      </div>
    </>
  );
}

export default UserMessageComponent;
