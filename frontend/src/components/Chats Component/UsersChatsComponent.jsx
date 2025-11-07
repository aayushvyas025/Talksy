import MessagesComponent from "../Static Components/MessagesComponent";

function UsersChatsComponent({messages}) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages?.map((message) => (
        <MessagesComponent key={message._id} message={message} />
      ))}
    </div>
  );
}

export default UsersChatsComponent;
