
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
  }

  const handleReload = ()=>{
    window.location.reload()
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
      {
        showPlayer ? 
        (
          <button onClick={handleShow}>
            ver
          </button>
          
        )
        :
        (
          <button onClick={handleReload}>
            novo
          </button>
        )
      }

    </PlayerProvider>
  )
}

export default App
