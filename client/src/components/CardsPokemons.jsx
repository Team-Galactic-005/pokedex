import React from 'react'

function CardsPokemons({pokemons}) {
    return (
        <div className='grid grid-cols-4'>
            {pokemons?.map((pokemon) => (
                <div className='grid justify-center border py-4' key={pokemon.id}>
                    <div className='border rounded-full'>
                        <img className='w-full' src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </div>
                    <div className='grid gap-y-10'>
                        <div className=''>
                            <h1>{pokemon.id}</h1>
                            <h1>{pokemon.name}</h1>
                        </div>
                        <div className='grid grid-cols-2 text-center'>
                            {pokemon.types?.map((type) => (
                                <h1 className='border' key={type.type.name}>{type.type.name}</h1>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CardsPokemons