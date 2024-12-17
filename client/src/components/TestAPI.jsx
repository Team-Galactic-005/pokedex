import React, { useEffect, useState } from 'react'
import PokeAPI from '../library/axios'

function TestAPI() {
    const [pokemons, setPokemons] = useState([])
    console.log(pokemons)

    const fetchPokemon = async () => {
        try {
            const { data } = await PokeAPI.get('/pokemon');
            const pokemonsPromises = data.results.map(async (pokemon) => {
                const pokemonId = pokemon.url.split('/')[6];
                return fetchPokemon2(pokemonId);
            });
            const pokemonsResponses = await Promise.all(pokemonsPromises);
            const pokemonsData = pokemonsResponses.map((response) => response.data);
            setPokemons(pokemonsData);
        } catch (err) {
            console.log(err);
        }
    }

    const fetchPokemon2 = async (pokemonId) => {
        try {
            return await PokeAPI.get(`/pokemon/${pokemonId}`);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchPokemon()
    }, [])
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-3 text-center'>
                {pokemons?.map((pokemon) => (
                    <div key={pokemon.id} className='border'>
                        <div className=''>
                            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                        </div>
                        <div>
                            <span>{pokemon.id}</span>
                            <h1>{pokemon.name}</h1>
                            <div className='flex justify-around'>
                                {pokemon.types?.map((type) => (
                                    <div key={type.type.name}>
                                        <h1>{type.type.name}</h1>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default TestAPI