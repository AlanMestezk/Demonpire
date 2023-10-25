
import {useContext} from 'react'
import { PlayerContext } from '../../context/player'


export const Player = ()=>{

    const {
        name, kind, force, defense, agility, person
    } = useContext(PlayerContext)

    return(
        <>
            <header>
                <h3>Player cadastrado</h3> <br />
                <hr />
                <strong>Nome: {name}</strong> <br />
                <strong>Classe: {kind}</strong> <br />
                <strong>Força: {force}</strong> <br />
                <strong>Defesa: {defense}</strong> <br />
                <strong>Agilidade: {agility}</strong> <br />
                <strong>Personagem: {person}</strong>
            </header>
        </>
    )
}

