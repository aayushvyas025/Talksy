import { ChatContainer, NoChatSelectedComponent, Sidebar } from "../../components";
import { HomePageLayout } from "../../layout";
import { useChatStore } from "../../store"

function HomePage() {
  const {selectedUser} = useChatStore(); 
  return (
    <HomePageLayout>
      <Sidebar/>
      {!selectedUser ? <NoChatSelectedComponent/> : <ChatContainer/>}

    </HomePageLayout>
  )
}

export default HomePage