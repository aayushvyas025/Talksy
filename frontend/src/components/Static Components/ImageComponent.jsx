import React from 'react'

function ImageComponent({image}) {
  return (
    <img src={image} alt="Attachment" className='sm:max-w-[200px] rounded-md mb-2' />
  )
}

export default ImageComponent