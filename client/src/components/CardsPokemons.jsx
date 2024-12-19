import React from 'react'
import { useNavigate } from 'react-router-dom'

function CardsPokemons({ pokemons, isLoading, error, loadMorePokemons }) {
    const navigate = useNavigate()
    const goToPokemonProfile = (pokemonId) => {
        navigate(`/profilepokemon/${pokemonId}`)
    }
    return (
        <>
            <div className='grid grid-cols-4 gap-5'>
                {isLoading ? (
                    <div>
                        <span>Loading ...</span>
                    </div>
                ) : error ? (
                    <div>
                        <span>Error</span>
                    </div>
                ) : (
                    pokemons?.map((pokemon) => {
                        const formattedId = pokemon.id.toString().padStart(4, '0')
                        const formattedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase()
                        return (
                            <div className='grid border border-[#466E9B] py-4 rounded-3xl bg-[#0A141E] text-white cursor-pointer' key={pokemon.id} onClick={() => goToPokemonProfile(pokemon.id)}>
                                <div className='flex justify-center'>
                                    <img className='' src={pokemon.sprites?.other['official-artwork']?.front_default} alt={pokemon.name} />
                                </div>
                                <div className='grid gap-y-10 px-5'>
                                    <div>
                                        <h1 className='text-[#B4EBFF]'>{formattedId}</h1>
                                        <h1 className='text-xl font-semibold'>{formattedName}</h1>
                                    </div>
                                    <div className='grid grid-cols-2 text-center gap-x-5'>
                                        {pokemon.types?.map((type) => {
                                            const formattedType = type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1).toLowerCase()
                                            return (
                                                <h1 className={`border rounded-full py-1
                                            ${type.type.name === 'normal' ? 'bg-[#A0A0A0] border-[#DCDCDC]' :
                                                        type.type.name === 'fighting' ? 'bg-[#C85500] border-[#DC6900]' :
                                                            type.type.name === 'flying' ? 'bg-[#79BCD7] border-[#78DCFF]' :
                                                                type.type.name === 'poison' ? 'bg-[#BE78BE] border-[#D28CD2]' :
                                                                    type.type.name === 'ground' ? 'bg-[#CCA142] border-[#F9C75A]' :
                                                                        type.type.name === 'rock' ? 'bg-[#A07850] border-[#B48C64]' :
                                                                            type.type.name === 'bug' ? 'bg-[#32B432] border-[#46C846]' :
                                                                                type.type.name === 'ghost' ? 'bg-[#8C78F0] border-[#A08CFF]' :
                                                                                    type.type.name === 'steel' ? 'bg-[#96B4DC] border-[#AAC8F0]' :
                                                                                        type.type.name === 'fire' ? 'bg-[#FF3700] border-[#FF6900]' :
                                                                                            type.type.name === 'water' ? 'bg-[#0094E5] border-[#14B9FF]' :
                                                                                                type.type.name === 'grass' ? 'bg-[#92BF19] border-[#B4F000]' :
                                                                                                    type.type.name === 'electric' ? 'bg-[#E4B700] border-[#FFE100]' :
                                                                                                        type.type.name === 'psychic' ? 'bg-[#DC78C8] border-[#EF8BDB]' :
                                                                                                            type.type.name === 'ice' ? 'bg-[#00B7EE] border-[#14F5FF]' :
                                                                                                                type.type.name === 'dragon' ? 'bg-[#3C64C8] border-[#5078DC]' :
                                                                                                                    type.type.name === 'dark' ? 'bg-[#606060] border-[#787878]' :
                                                                                                                        type.type.name === 'fairy' ? 'bg-[#FF7EB8] border-[#FDAEDA]' :
                                                                                                                            type.type.name === 'stellar' ? 'bg-[]' :
                                                                                                                                type.type.name === 'shadow' ? 'bg-[]' :
                                                                                                                                    'bg-[#A0A0A0]'} 
                                    `} key={type.slot}>{formattedType}</h1>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
            <div className='flex justify-center'>
                <button onClick={loadMorePokemons} className='border border-[#466E9B] rounded-full p-2 w-[50%] text-lg text-[#b3eafe] hover:bg-[#B4EBFF] hover:text-black hover:border-transparent'>Load More</button>
            </div>
        </>
    )
}

export default CardsPokemons