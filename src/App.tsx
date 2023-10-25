
import { useContext, useState }          from 'react'
import { Player }                        from './components/player'
import { PlayerContext, PlayerProvider } from './context/player'
import { Register }                      from './components/register'
import './App.css'

function App() {

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
