import { MainRoutes } from "./routes"
import { useThemeStore } from "./store"


function App() {
const {theme} = useThemeStore(); 

  return (
    <div data-theme={theme} className="h-screen-full">
       <MainRoutes />
    </div>
  )
}

export default App