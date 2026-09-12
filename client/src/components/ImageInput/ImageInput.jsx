import { Camera } from 'lucide-react'
import React from 'react'

function ImageInput({onChange, disabled}) {
  return (
    <label htmlFor='avatar-upload' className=''>
        <Camera className='h-5 w-5 text-base-200'/> 
        <input type='file'  id='avatar-upload' className='hidden' accept='image/*' onChange={onChange} disabled={disabled} />
    </label>
  )
}

export default ImageInput