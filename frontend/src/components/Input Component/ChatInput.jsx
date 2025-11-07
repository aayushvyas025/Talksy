import React from 'react'

function ChatInput({type="text", inputStyling, value, onChangeHandler}) {
  return (
     <input
            type="text"
            className={inputStyling}
            value={value}
            onChange={onChangeHandler}
          />
  )
}

export default ChatInput