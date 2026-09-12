import React from 'react'
import DeleteAccount from '../DeleteAccount/DeleteAccount'

function UserAccountInfo({user}) {
  return (
    <div className='mt-6 bg-base-300 rounded-xl'>
        <h2 className="text-lg font-medium mb-4">Account Information</h2>
        <div className="space-y-3 text-md">
            <div className="flex items-center justify-between py-2 border-b border-zinc-400">
                <span>Member Since</span> 
                <span>{user.createdAt?.split("T")[0]}</span>
            </div>
            <div className='flex items-center justify-between py-2 border-b border-zinc-400'> 
                <span>Account Active</span> 
                <span className='text-green-500'>Active</span>
            </div>
            <DeleteAccount />
        </div>
    </div>
  )
}

export default UserAccountInfo