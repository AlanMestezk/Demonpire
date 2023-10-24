
import './App.css'
import { Player } from './components/player'
import { PlayerProvider } from './context/player'

function App() {
 

  return (
    <PlayerProvider>
      <Player/>
    </PlayerProvider>
  )
}

export default App
