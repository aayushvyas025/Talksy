import ChatHeader from '../Chats Component/ChatHeader';
import MessageSkeleton from '../Skeleton Component/MessageSkeleton';
import MessageInput from '../Input Component/MessageInput';

function ChatLoader({text}) {
  return (
    <div className='flex-1 flex flex-col overflow-auto'>
      <ChatHeader />
      <MessageSkeleton/>
      <MessageInput />
    </div>
  )
}

export default ChatLoader;