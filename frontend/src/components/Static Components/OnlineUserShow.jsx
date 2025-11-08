import React from 'react'

function OnlineUserShow({onlineUsers, showOnline, onChangeHandler, text}) {
  return (
       <div className="mt-3 hidden lg:flex items-center gap-2">
          <label className="cursor-pointer flex items-center gap-2">
           <div className="mt-3 hidden lg:flex items-center gap-2">
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              checked={showOnline}
              onChange={onChangeHandler}
              className="checkbox checkbox-sm"
            />
            <span className="text-sm">{text}</span>
          </label>
          <span className="text-xs text-zinc-500">({onlineUsers.length - 1} online)</span>
        </div>
          </label>
        </div>
  )
}

export default OnlineUserShow;