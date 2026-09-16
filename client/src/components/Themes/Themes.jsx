import useAppTheme from '@/hooks/useTheme/useAppTheme'
import React from 'react'

function Themes() {
  const {theme, setTheme} = useAppTheme(); 
  return (
    <div className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2'>
      
    </div>
  )
}

export default Themes