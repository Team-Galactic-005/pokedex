import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PokeAPI from '../library/axios'
import bg from '../assets/main_bg_v15_1.jpg'
import favoriteAPI from '../library/favorite'

const colorButton = {
    normal: 'bg-[#A0A0A0] border-[#DCDCDC]',
    fighting: 'bg-[#C85500] border-[#DC6900]',
    flying: 'bg-[#79BCD7] border-[#78DCFF]',
    poison: 'bg-[#BE78BE] border-[#D28CD2]',
    ground: 'bg-[#CCA142] border-[#F9C75A]',
    rock: 'bg-[#A07850] border-[#B48C64]',
    bug: 'bg-[#32B432] border-[#46C846]',
    ghost: 'bg-[#8C78F0] border-[#A08CFF]',
    steel: 'bg-[#96B4DC] border-[#AAC8F0]',
    fire: 'bg-[#FF3700] border-[#FF6900]',
    water: 'bg-[#0094E5] border-[#14B9FF]',
    grass: 'bg-[#92BF19] border-[#B4F000]',
    electric: 'bg-[#E4B700] border-[#FFE100]',
    psychic: 'bg-[#DC78C8] border-[#EF8BDB]',
    ice: 'bg-[#00B7EE] border-[#14F5FF]',
    dragon: 'bg-[#3C64C8] border-[#5078DC]',
    dark: 'bg-[#606060] border-[#787878]',
    fairy: 'bg-[#FF7EB8] border-[#FDAEDA]',
    stellar: 'bg-[#A0A0A0]',
    shadow: 'bg-[#A0A0A0]',
    unknown: 'bg-[#A0A0A0]'
}

function ProfilePokemonPage() {
    const params = useParams()
    const pokemonId = params.idPokemon

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [profilePokemon, setProfilePokemon] = useState([])

    const setButtonColor = (type) => {
        return colorButton[type]
    }

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

    const addFavorite = async () => {
        setIsLoading(true)
        setError(null)
        try {
            await favoriteAPI.post('/favoritePokemon', {
                id: profilePokemon.id,
                datetime: new Date(),
                name: profilePokemon.name,
                types: profilePokemon.types,
                sprites: profilePokemon.sprites?.other['official-artwork']?.front_default
            })
        } catch (err) {
            console.error(err)
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    const deleteFavorite = async (id) => {
        setIsLoading(true)
        setError(null)
        try {
            await favoriteAPI.delete('/favoritePokemon/' + id)
        } catch (err) {
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
        <>
            <div className='container mx-auto text-white my-5 grid gap-y-32'>
                <div>
                    <div className='flex justify-center relative'>
                        <img className='absolute -z-20' src={bg} alt='' />
                    </div>
                    <div className='flex justify-center mb-5 mt-11'>
                        <Link to='/'><h1 className='text-3xl text-black'>Pokédex</h1></Link>
                    </div>
                    <div className='flex justify-between mt-14'>
                        <div>

                        </div>
                        <div className='text-center'>
                            <h1 className='text-4xl text-[#B3EAFE]'>{formattedId}</h1>
                            <h1 className='text-5xl text-[#FFFFFF]'>{formattedName}</h1>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className='grid grid-cols-3 mt-14'>
                        <div className='grid justify-center gap-y-10'>
                            <div className='text-center'>
                                <h1 className='text-3xl mb-5'>Type</h1>
                                {profilePokemon.types?.map((type) => {
                                    const formattedType = type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1).toLowerCase()
                                    return (
                                        <p className={`text-lg border py-1 px-32 mb-5 rounded-full ${setButtonColor(type.type.name)}`} key={type.slot}>{formattedType}</p>
                                    )
                                })}
                                {profilePokemon.types?.length === 1 && (
                                    <div className="py-[19px] px-40 mb-5">
                                    </div>
                                )}
                            </div>
                            <div className='grid gap-3'>
                                <form className='text-center' onSubmit={(e) => addFavorite(e)}>
                                    <button className='w-full text-lg border py-1 mb-2 rounded-full' value={profilePokemon} type='submit'>add to Favorite</button>
                                </form>
                                <form className='text-center' onClick={() => deleteFavorite(() => deleteFavorite(profilePokemon.id))}>
                                    <button className='w-full text-lg border py-1 mb-2 rounded-full' value={profilePokemon} type='submit'>delete from Favorite</button>
                                </form>
                            </div>

                        </div>
                        <div className='relative flex justify-center items-center top-16 -z-10'>
                            <img className='absolute animate-spin-custom' src='https://id.portal-pokemon.com/play/resources/pokedex/img/pokemon_bg.png' alt='' />
                            <img className='absolute w-[350px]' src='https://id.portal-pokemon.com/play/resources/pokedex/img/pokemon_circle_bg.png' alt='' />
                            <img className='absolute w-[50%]' src={profilePokemon.sprites?.other['official-artwork']?.front_default} alt={profilePokemon.name} />
                        </div>
                        <div className='grid text-xl px-10 mt-20 me-20'>
                            <div className='grid grid-cols-2'>
                                <div>
                                    <p className='text-[#B0E5F9]'>Height</p>
                                    <p>{formattedHeight} m</p>
                                </div>
                                <div>
                                    <p className='text-[#B0E5F9]'>Base Experience</p>
                                    <p>{profilePokemon.base_experience}</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-2'>
                                <div>
                                    <p className='text-[#B0E5F9]'>Weight</p>
                                    <p>{formattedWeight} kg</p>
                                </div>
                                <div>
                                    <p className='text-[#B0E5F9]'>Abilities</p>
                                    {profilePokemon.abilities?.map((ability) => {
                                        const formattedAbility = ability.ability.name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
                                        return (
                                            <p key={ability.ability.name}>{formattedAbility}</p>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-3'>
                    <div className='ps-20 grid'>
                        <h1 className='text-3xl text-[#B0E5F9]'>Body</h1>
                        <div>
                            <div className='flex justify-around gap-x-3'>
                                <img src={profilePokemon.sprites?.other?.showdown.front_default} alt='' />
                                <img src={profilePokemon.sprites?.other?.showdown.back_default} alt='' />
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                    <div>
                        <h1 className='text-3xl text-[#B0E5F9] mt-[2px]'>Statistics</h1>
                        <div className='mt-5'>
                            {profilePokemon.stats?.map((stat) => {
                                const formattedStats = stat.stat.name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
                                return (
                                    <div className='flex gap-3 text-xl' key={stat.stat.name}>
                                        <h1>{formattedStats}</h1>
                                        <p>{stat.base_stat}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='text-center border border-[#466E9B] rounded-full w-[50%] text-lg text-[#b3eafe] hover:bg-[#B4EBFF] hover:text-black hover:border-transparent'>
                        <Link to='/'><button className='w-full p-2'>Back to Home Page</button></Link>
                    </div>
                </div>

            </div>
        </>

    )
}

export default ProfilePokemonPage