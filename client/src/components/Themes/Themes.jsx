import useAppTheme from '@/hooks/useTheme/useAppTheme'
import React from 'react'

function Themes() {
  const {theme, setTheme} = useAppTheme(); 
  return (
    <div>Themes</div>
  )
}

export default Themes