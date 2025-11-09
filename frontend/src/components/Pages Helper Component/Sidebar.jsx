import { useEffect, useState } from "react";
import imagePlaceHolder from "/avatar.png";
import { useAuthStore, useChatStore } from "../../store";
import SidebarSkeleton from "../Skeleton Component/SidebarSkeleton";
import IconComponent from "../Icon Component/IconComponent";
import { Users } from "lucide-react";
import Button from "../Pages Helper Component/Button";
import OnlineUserShow from "../Static Components/OnlineUserShow";

function Sidebar() {
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);
  const {
    getUsersFromDB,
    setSelectedUser,
    users,
    selectedUser,
    isUserLoading,
  } = useChatStore();

  const { onlineUsers } = useAuthStore();
  const filteredUser = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  useEffect(() => {
    getUsersFromDB();
  }, [getUsersFromDB]);

  if (isUserLoading) {
    return <SidebarSkeleton />;
  }

  return (
    <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">
      <div className="border-b border-base-300 w-full p-5">
        <div className="flex items-center gap-2">
          <IconComponent icon={Users} iconSize={6} />
          <span className="font-medium hidden lg:block">Contacts</span>
        </div>
        <OnlineUserShow
          onlineUsers={onlineUsers}
          showOnline={showOnlineOnly}
          onChangeHandler={(event) => setShowOnlineOnly(event.target.checked)}
          text={"Show online only"}
        />
      </div>
      <div className="overflow-y-auto w-full py-3 ">
        {filteredUser.map((user) => (
          <Button
            key={user._id}
            onClickHandler={() => setSelectedUser(user)}
            btnStyle={`w-full p-3 flex items-center gap-3 hover:bg-base-300 transitions-color ${
              selectedUser?._id === user._id
                ? `bg-base-300 ring-1 ring-base-300`
                : ""
            }`}
          >
            <div className="relative mx-auto lg:mx-0">
              <img
                src={user?.profilePic || imagePlaceHolder}
                alt={user?.fullName}
                className="size-12 object-cover rounded-full"
              />
              {onlineUsers.includes(user._id) && (
                <span className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full ring-2 ring-zinc-900" />
              )}
            </div>
            <div className="hidden lg:block text-left min-w-0">
              <div className="font-medium truncate">{user.fullName}</div>
              <div className="text-sm text-zinc-400">
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </div>
            </div>
          </Button>
        ))}
        {filteredUser.length === 0 && (
          <div className="text-center text-zinc-500 py-4">No Online Users</div>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
