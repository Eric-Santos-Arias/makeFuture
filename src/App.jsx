import './App.css'
import { Details } from './Components/Details'
import { Perfil } from './Components/Perfil'
import { Performance } from './Components/Performance'




function App() {

  return (
    <div className='main-container'>
      <Perfil/>
      <Performance/>
      <Details/>
    </div>
  )
}

export default App
