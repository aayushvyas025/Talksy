import { Navbar } from '../../components'

function MainLayout({children}) {
  return (
    <div className='min-h-screen'>
        <Navbar/>
        {children}
    </div>
  )
}

export default MainLayout