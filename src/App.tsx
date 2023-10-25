
import { useContext, useState } from 'react'
import './App.css'
import { Player } from './components/player'
import { PlayerContext, PlayerProvider } from './context/player'
import { Register } from './components/register'

function App() {

  const {
    name, person, kind, force, defense, agility
  } = useContext(PlayerContext)

  const [playerName, setPlayerName]       = useState(name)
  const [playerPerson, setPlayerPerson]   = useState(person)
  const [playerKind, setPlayerKind]       = useState(kind)
  const [playerForce, setPlayerForce]     = useState<number | any>(force)
  const [playerDefense, setPLayerDefence] = useState<string | number>(defense)
  const [playerAgility, setPLayerAgility] = useState<string | number>(agility)


  const [showPlayer, setShowPlayer] = useState(true)

  const handleShow = ()=>{
    setShowPlayer(!showPlayer)

    setPlayerName('')
    setPlayerKind('')
    setPlayerPerson('')
    setPlayerForce('')
    setPLayerDefence('')
    setPLayerDefence('')
    setPLayerAgility('')

    
  }
 

  return (
    <PlayerProvider>
      {
        showPlayer ?
        (
          
          <>
            <Register/>
          </>

        ):(
          <>
            <Player/>
          </>
        )
      }
      
      <br />
      <br />
      <button onClick={handleShow}>{showPlayer ? "Ver" : "Novo cadastro"}</button>
    </PlayerProvider>
  )
}

export default App
