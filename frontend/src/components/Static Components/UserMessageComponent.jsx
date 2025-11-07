import React from 'react'
import ImageComponent from './ImageComponent'
import TextComponent from './TextComponent'
import { helperFunctions } from '../../helper'



function UserMessageComponent({message}) {
    const {formatMessageTime} = helperFunctions;
  return (
    <>
    <div className='chat-header mb-1'>
        <time className='text-xs opacity-50 ml-1'>
            {formatMessageTime(message.createdAt)}
        </time>
    </div>
    <div className="chat-bubble flex flex-col">
        {message.image && <ImageComponent image={message.image} />}
        {message.text && <TextComponent text={message.text} />}
    </div>
    </>
  )
}

export default UserMessageComponent