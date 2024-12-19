import React from 'react'
import { useNavigate } from 'react-router-dom'

function HeaderCards({ headerPokemons, isLoading, error }) {
    const navigate = useNavigate()
    const goToPokemonProfile = (pokemonId) => {
        navigate(`/profilepokemon/${pokemonId}`)
    }
    return (
        <div className='grid justify-center text-center'>
            {isLoading ? (
                <div className="flex justify-center items-center">
                    <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                </div>
            ) : (
            <div>
                <div className='mb-14'>
                    
                </div>
                <div className='relative flex justify-center bottom-40 -z-10'>
                    <img className='absolute animate-spin-custom' src='https://id.portal-pokemon.com/play/resources/pokedex/img/pokemon_list_bg.png' alt='' />
                </div>
                <div className='grid grid-cols-10 items-center gap-5 mt-10'>
                    <div>
                        <img className='random cursor-pointer' src={headerPokemons[0]?.sprites?.other['official-artwork']?.front_default} alt={headerPokemons[0]?.name} onClick={() => goToPokemonProfile(headerPokemons[0]?.id)}/>
                    </div>
                    <div className='grid gap-y-5'>
                        <img className='random cursor-pointer' src={headerPokemons[1]?.sprites?.other['official-artwork']?.front_default} alt={headerPokemons[1]?.name} onClick={() => goToPokemonProfile(headerPokemons[1]?.id)}/>
                        <img className='random cursor-pointer' src={headerPokemons[2]?.sprites?.other['official-artwork']?.front_default} alt={headerPokemons[2]?.name} onClick={() => goToPokemonProfile(headerPokemons[2]?.id)}/>
                    </div>
                    <div>
                        <img className='random cursor-pointer' src={headerPokemons[3]?.sprites?.other['official-artwork']?.front_default} alt={headerPokemons[3]?.name} onClick={() => goToPokemonProfile(headerPokemons[3]?.id)}/>
                    </div>
                    <div className='grid gap-y-5'>
                        <img className='random cursor-pointer' src={headerPokemons[4]?.sprites?.other['official-artwork']?.front_default} alt={headerPokemons[4]?.name} onClick={() => goToPokemonProfile(headerPokemons[4]?.id)}/>
                        <img className='random cursor-pointer' src={headerPokemons[5]?.sprites?.other['official-artwork']?.front_default} alt={headerPokemons[5]?.name} onClick={() => goToPokemonProfile(headerPokemons[5]?.id)}/>
                    </div>
                    <div className='col-span-2'>
                        <img className='random cursor-pointer' src={headerPokemons[6]?.sprites?.other['official-artwork']?.front_default} alt={headerPokemons[6]?.name} onClick={() => goToPokemonProfile(headerPokemons[6]?.id)}/>
                    </div>
                    <div className='grid gap-y-5'>
                        <img className='random cursor-pointer' src={headerPokemons[7]?.sprites?.other['official-artwork']?.front_default} alt={headerPokemons[7]?.name} onClick={() => goToPokemonProfile(headerPokemons[7]?.id)}/>
                        <img className='random cursor-pointer' src={headerPokemons[8]?.sprites?.other['official-artwork']?.front_default} alt={headerPokemons[8]?.name} onClick={() => goToPokemonProfile(headerPokemons[8]?.id)}/>
                    </div>
                    <div>
                        <img className='random cursor-pointer' src={headerPokemons[9]?.sprites?.other['official-artwork']?.front_default} alt={headerPokemons[9]?.name} onClick={() => goToPokemonProfile(headerPokemons[9]?.id)}/>
                    </div>
                    <div className='grid gap-y-5'>
                        <img className='random cursor-pointer' src={headerPokemons[10]?.sprites?.other['official-artwork']?.front_default} alt={headerPokemons[10]?.name} onClick={() => goToPokemonProfile(headerPokemons[10]?.id)}/>
                        <img className='random cursor-pointer' src={headerPokemons[11]?.sprites?.other['official-artwork']?.front_default} alt={headerPokemons[11]?.name} onClick={() => goToPokemonProfile(headerPokemons[11]?.id)}/>
                    </div>
                    <div>
                        <img className='random cursor-pointer' src={headerPokemons[12]?.sprites?.other['official-artwork']?.front_default} alt={headerPokemons[12]?.name} onClick={() => goToPokemonProfile(headerPokemons[12]?.id)}/>
                    </div>
                </div>
            </div>
            )}
            {error && <span>Error found</span>}
        </div>
    )
}

export default HeaderCards