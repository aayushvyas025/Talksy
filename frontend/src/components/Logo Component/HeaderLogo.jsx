import React from 'react'
import { Link } from 'react-router-dom'
import IconComponent from '../Icon Component/IconComponent'
import { MessageSquare } from 'lucide-react'

function HeaderLogo({title}) {
  return (
    <div className='flex items-center gap-8'>
        <Link to={"/"} className='flex items-center gap-2.5 hover:opacity-80 transition-all'>
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
        <IconComponent icon={MessageSquare} iconSize={5} iconStyle='text-primary' />
        </div>
        <h1 className="text-lg font-bold">{title}</h1>
        </Link>
    </div>
  )
}

export default HeaderLogo