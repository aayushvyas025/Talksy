import { Navbar } from '../../components'

function MainLayout({children}) {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default MainLayout