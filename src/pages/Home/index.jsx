import { useState } from 'react'

import './style.scss'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
    <h1>Lista de presença</h1>
    <input type="text" placeholder='Digite o nome do estudante'/>
    <button>Incluir</button>
    </div>
  )
}

export default Home
