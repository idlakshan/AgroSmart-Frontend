import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'

function App() {


  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
