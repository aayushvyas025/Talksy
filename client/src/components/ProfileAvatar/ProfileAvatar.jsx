import React from 'react'
import UserImage from '../Image/UserImage'


function ProfileAvatar() {
  return (
    <div className='flex flex-col items-center gap-4'>
        <div className="relative">
            <UserImage />
        </div>
    </div>
  )
}

export default ProfileAvatar