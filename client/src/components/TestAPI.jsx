import React, { useEffect, useState } from 'react'
import PokeAPI from '../library/axios'

function TestAPI() {
    const [pokemons, setPokemons] = useState([])

    const fetchPokemon = async () => {
        try {
            const { data } = await PokeAPI.get('/pokemon')
            data.results?.forEach((pokemon) => {
                const pokemonId = pokemon.url.split('/')[6]
                fetchPokemon2(pokemonId)
            })
        } catch (err) {
            console.log(err)
        }
    }

    const fetchPokemon2 = async (pokemonId) => {
        try {
            const { data } = await PokeAPI.get(`/pokemon/${pokemonId}`)
            setPokemons([...pokemons, data])
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchPokemon()
    }, [])
    return (
        <div>
            {pokemons?.map((pokemon) => (
                <div key={pokemon.id}>
                    <span>{pokemon.url}</span>
                    <h1>{pokemon.name}</h1>
                    <img src='' alt=''/>
                </div> 
            ))}
            <div>
                <span></span>
                <h1></h1>
                <img src='' alt=''/>
            </div> 
        </div>
    )
}

export default TestAPI