import React, { useEffect, useState } from 'react'
import PokeAPI from '../library/axios'
import CardsPokemons from '../components/CardsPokemons'

function HomePage() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [pokemons, setPokemons] = useState([])

    const fetchPokemon = async () => {
        setIsLoading(true)
        setError(null)
        try {
            const { data } = await PokeAPI.get(`/pokemon?offset=0&limit=20`)
            const pokemonsPromises = data.results.map(async (pokemon) => {
                const pokemonId = pokemon.url.split('/')[6]
                return fetchPokemon2(pokemonId)
            })
            const pokemonsResponses = await Promise.all(pokemonsPromises)
            const pokemonsData = pokemonsResponses.map((response) => response.data)
            setPokemons(pokemonsData)
        } catch (err) {
            console.error(err)
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    const fetchPokemon2 = async (pokemonId) => {
        setIsLoading(true)
        setError(null)
        try {
            return await PokeAPI.get(`/pokemon/${pokemonId}`)
        } catch (err) {
            console.log(err)
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchPokemon()
    }, [])
    return (
        <div className='container mx-auto text-white'>
            <div>HomePage</div>
            <div>Search Form</div>
            <div>Filter</div>
            <CardsPokemons pokemons={pokemons} isLoading={isLoading} error={error}/>
            <div>Footer</div>
        </div>
    )
}

export default HomePage