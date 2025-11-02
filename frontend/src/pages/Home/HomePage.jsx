import { Sidebar } from "../../components";
import { HomePageLayout } from "../../layout";
import { useChatStore } from "../../store"

function HomePage() {
  const {selectedUser} = useChatStore(); 
  return (
    <HomePageLayout>
      <Sidebar/>
      {!selectedUser ? "No Chat Component" : "Chat Component"}

    </HomePageLayout>
  )
}

export default HomePage