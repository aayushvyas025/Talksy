import { MainRoutes } from "./routes"
import { useThemeStore } from "./store"


function App() {
const {theme} = useThemeStore(); 

  return (
    <div data-theme={theme}>
       <MainRoutes />
    </div>
  )
}

export default App