import React, { useEffect, useState } from 'react'
import PokeAPI from '../../library/axios'
import CardsPokemons from '../../components/CardsPokemons'

function HomePage() {
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
            <div>HomePage</div>
            <div>Search Form</div>
            <div>Filter</div>
            <CardsPokemons pokemons={pokemons} />
            <div>Footer</div>
        </div>

    )
}

export default HomePage