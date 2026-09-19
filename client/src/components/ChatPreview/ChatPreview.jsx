import React from 'react'
import MessagePreview from '../MessagePreview/MessagePreview'

function ChatPreview() {
  return (
    <>
    <h3 className="text-lg font-semibold mb-3">Preview</h3> 
    <div className="rounded-xl border border-base-300 overflow-hidden bg-base-100 shadow-lg">
      <div className="p-4 bg-base-200">
        <div className="max-w-lg mx-auto">
          <div className="bg-base-100 rounded-xl shadow-sm overflow-hidden">
            <div className="px-4 py-3 border-b border-base-300 bg-base-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content font-medium">
                  J
                </div>
                <div>
                  <h3 className='font-medium text-sm'>John Doe</h3>
                  <p className="text-xs text-base-content/70">Online</p>
                </div>
              </div>
            </div>
            <MessagePreview />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ChatPreview