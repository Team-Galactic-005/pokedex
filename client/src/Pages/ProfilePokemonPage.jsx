import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PokeAPI from '../library/axios'

function ProfilePokemonPage() {
    const params = useParams()
    const pokemonId = params.idPokemon

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [profilePokemon, setProfilePokemon] = useState([])
    console.log(profilePokemon)

    const fetchProfilePokemon = async () => {
        setIsLoading(true)
        setError(null)
        try {
            const { data } = await PokeAPI.get(`/pokemon/${pokemonId}`)
            setProfilePokemon(data)
        } catch (error) {
            console.error(err)
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchProfilePokemon()
    }, [])

    const formattedId = profilePokemon.id ? String(profilePokemon.id).padStart(4, '0') : ''
    const formattedName = profilePokemon.name ? String(profilePokemon.name).charAt(0).toUpperCase() + profilePokemon.name.slice(1).toLowerCase() : ''
    const formattedHeight = profilePokemon.height ? (profilePokemon.height / 10).toFixed(1) : '0.0'
    const formattedWeight = profilePokemon.weight ? (profilePokemon.weight / 10).toFixed(1) : '0.0'

    return (
        <div className='container mx-auto text-white my-5'>
            <div className='flex justify-center mb-5'>
                <Link to='/'><h1 className='text-3xl'>Pokédex</h1></Link>
            </div>
            <div className='flex justify-between'>
                <div>

                </div>
                <div className='text-center'>
                    <h1 className='text-4xl text-[#B3EAFE]'>{formattedId}</h1>
                    <h1 className='text-5xl text-[#FFFFFF]'>{formattedName}</h1>
                </div>
                <div>

                </div>
            </div>
            <div className='grid grid-cols-3'>
                <div className='grid justify-center'>
                    <div className='text-center'>
                        <h1 className='text-3xl mb-5'>Tipe</h1>
                        {profilePokemon.types?.map((type) => {
                            const formattedType = type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1).toLowerCase()
                            return (
                                <p className={`text-lg border py-1 px-40 mb-5 rounded-full cursor-pointer
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
                                                                                                                        `} key={type.slot}>{formattedType}</p>
                            )
                        })}
                    </div>
                    <div className='text-center'>
                        <h1 className='text-3xl mb-5'>Weakness</h1>
                        <div className='grid grid-rows-2 text-center gap-y-5'>
                            <div className='grid grid-cols-2 gap-x-3'>
                                <p className='border rounded-full py-1'>Fire</p>
                                <p className='border rounded-full py-1'>Ice</p>
                            </div>
                            <div className='grid grid-cols-2 gap-x-3'>
                                <p className='border rounded-full py-1'>Flying</p>
                                <p className='border rounded-full py-1'>Psychic</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative flex justify-center items-center top-16 -z-10'>
                    <img className='absolute animate-spin-custom' src='https://id.portal-pokemon.com/play/resources/pokedex/img/pokemon_bg.png' alt='' />
                    <img className='absolute w-[350px]' src='https://id.portal-pokemon.com/play/resources/pokedex/img/pokemon_circle_bg.png' alt='' />
                    <img className='absolute w-[50%]' src={profilePokemon.sprites?.other['official-artwork']?.front_default} alt={profilePokemon.name} />
                </div>
                <div className='grid text-xl border-y-[1px] border-e-[1px] rounded-e-full mt-24'>
                    <div className='grid grid-cols-2'>
                        <div>
                            <p className='text-[#B0E5F9]'>Height</p>
                            <p>{formattedHeight} m</p>
                        </div>
                        <div>
                            <p className='text-[#B0E5F9]'>Category</p>
                            <p>Pokémon Bibit</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div>
                            <p className='text-[#B0E5F9]'>Weight</p>
                            <p>{formattedWeight} kg</p>
                        </div>
                        <div>
                            <p className='text-[#B0E5F9]'>Gender</p>
                            <p>Male / Female</p>
                        </div>
                    </div>
                    <div className='grid'>
                        <p className='text-[#B0E5F9]'>Kemampuan</p>
                        <p>Hijau Rindang</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePokemonPage