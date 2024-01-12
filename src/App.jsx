import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ConstructionPage from './components/ConstructionPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ConstructionPage/>
    </div>

  )
}

export default App
