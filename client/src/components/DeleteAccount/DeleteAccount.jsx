import React from 'react'
import Button from '../Button/Button'
import { Trash2 } from 'lucide-react'

function DeleteAccount() {
  return (
     <div className='flex items-center justify-between py-2'> 
                <span>Delete Account</span> 
                <Button style={"text-red-400"}>
                    <Trash2 className='w-4 h-4' />
                </Button>
            </div>
  )
}

export default DeleteAccount