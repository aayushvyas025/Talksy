import {Loader} from 'lucide-react';

function LoaderComponent(sizeOf) {
  return (
    <div className='flex items-center justify-center h-screen'> 
     <Loader className={`size-${sizeOf} animate-spin`} /> 
    </div>
  )
}

export default LoaderComponent 

