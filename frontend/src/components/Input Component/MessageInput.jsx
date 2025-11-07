import React, { useRef, useState } from 'react'
import { useChatStore } from '../../store';
import { helperFunctions } from '../../helper';
import ImagePreviewComponent from '../Static Components/ImagePreviewComponent';

function MessageInput() {
  const [text, setText] = useState(""); 
  const [imagePreview, setImagePreview] = useState(null); 
  const fileInputRef = useRef(null); 
  const {sendMessage} = useChatStore();
 const{imageHandling} =  helperFunctions;
 const {handleImageChange, removeImageHandler} = imageHandling;



  return (
    <div className='p-4 w-full'>
      {imagePreview && <ImagePreviewComponent imagePreview={imagePreview} removeImageHandler={removeImageHandler} />}
    </div>
  )
}

export default MessageInput