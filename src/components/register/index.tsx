import { useContext, useState } from "react"
import { PlayerContext }        from "../../context/player"



export const Register = ()=>{

    const {
        name, person, kind, force, defense, agility, handleChange
    } = useContext(PlayerContext)

    const [playerName, setPlayerName]       = useState(name)
    const [playerPerson, setPlayerPerson]   = useState(person)
    const [playerKind, setPlayerKind]       = useState(kind)
    const [playerForce, setPlayerForce]     = useState<number | any>(force)
    const [playerDefense, setPLayerDefence] = useState<string | number>(defense)
    const [playerAgility, setPLayerAgility] = useState<string | number>(agility)

    const handleRegister = ()=>{
        handleChange(
            playerName, playerPerson, playerKind, playerForce, playerDefense, playerAgility
        )
        
        setPlayerName('')
        setPlayerKind('')
        setPlayerPerson('')
        setPlayerForce('')
        setPLayerDefence('')
        setPLayerDefence('')
        setPLayerAgility('')

        
    }

    return(
        <>
            <section>

                <input 
                    type="text"
                    placeholder="digite seu nome"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}

                /> <br />

                <input 
                    type="text"
                    placeholder="digite sua classe"
                    value={playerKind}
                    onChange={(e)=> setPlayerKind(e.target.value)} 

                /> <br />

                <input 
                    type="number"
                    placeholder="escolha sua força"
                    value={playerForce}
                    onChange={(e)=> setPlayerForce(e.target.value)}

                /> <br />

                <input 
                    type="number"
                    placeholder="escolha sua defesa"
                    value={playerDefense}
                    onChange={(e)=> setPLayerDefence(e.target.value)}

                /> <br />

                <input 
                    type="number"
                    placeholder="escolha sua agilidade"
                    value={playerAgility}
                    onChange={(e)=> setPLayerAgility(e.target.value)}

                /> <br />

                <input 
                    type="text" 
                    placeholder="escolha seu personagem"
                    value={playerPerson}
                    onChange={(e)=>setPlayerPerson(e.target.value)}
                />
                <br />
                <br />

                <button onClick={handleRegister}>register</button>


            </section>

        </>
    )
}