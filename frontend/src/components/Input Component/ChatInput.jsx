function ChatInput({type="text", inputStyling, value, onChangeHandler, placeholder}) {
  return (
     <input
            type="text"
            className={inputStyling}
            value={value}
            onChange={onChangeHandler}
            placeholder={placeholder}
          />
  )
}

export default ChatInput