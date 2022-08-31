import { useState } from 'react'
import {Card} from '../../components/card/index'
import './style.scss'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
    <h1>Lista de presença</h1>
    <input type="text" placeholder='Digite o nome do estudante'/>
    <button>Incluir</button>
    <Card name="Leonardo Klein" time="10:21:40"/>
    <Card />
    <Card />
    </div>
  )
}

export default Home
