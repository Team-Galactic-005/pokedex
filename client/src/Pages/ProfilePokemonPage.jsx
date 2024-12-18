import React from 'react'
import { useParams } from 'react-router-dom'

function ProfilePokemonPage() {
    const params = useParams()
    const pokemonId = params.idPokemon

    return (
        <div className='text-white'>ProfilePokemonPage{pokemonId}</div>
    )
}

export default ProfilePokemonPage