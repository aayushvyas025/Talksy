import React from 'react'

function MessageInputPreview() {
  return (
    <div className='p-4 border-t border-base-300 bg-base-100'>
      <div className="flex gap-2">
        <input type='text' className='input input-bordered flex-1 text-sm h-10' placeholder='Type a message' value={"This is a Preview"} readOnly />
      </div>
    </div>
  )
}

export default MessageInputPreview