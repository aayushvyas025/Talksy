import React, { useEffect } from 'react'
import { useChatStore } from '../../store'
import { commonConstant } from '../../helper';
import SidebarSkeleton from '../Sidebar Skeleton/SidebarSkeleton';


function Sidebar() {
 const { getUsersFromDB,setSelectedUser,users, selectedUser, isUserLoading} = useChatStore(); 

 const {sidebar:{onlineUsers}} = commonConstant;  


 useEffect(() => {
  getUsersFromDB()
 }, [getUsersFromDB]) ;

 
 if(isUserLoading) {
  return  <SidebarSkeleton />
 }

  return (
    <div>Sidebar</div>
  )
}

export default Sidebar