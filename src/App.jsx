import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Content from './components/Content/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-themic-primary overflow-x-hidden text-themic-txt-primary pt-6 font-custom-primary'>
      <Navbar />
      <Header />
      <Content />
    </div>
  )
}

export default App
