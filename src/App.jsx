import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-primary h-screen text-text-primary pt-6 font-primary'>
      <Navbar />
    </div>
  )
}

export default App
