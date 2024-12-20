import React, { useEffect, useState } from 'react'
import favoriteAPI from '../library/favorite'
import pokeBall from '../assets/pokeBall.png'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

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

function FavoritePage() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [favorites, setFavorites] = useState([])

    const setButtonColor = (type) => {
        return colorButton[type]
    }

    const navigate = useNavigate()
    const goToPokemonProfile = (pokemonId) => {
        navigate(`/profilepokemon/${pokemonId}`)
    }

    const fetchFavoritePokemons = async () => {
        setIsLoading(true)
        setError(null)
        try {
            const { data } = await favoriteAPI.get('/favoritePokemon?_sort=-datetime')
            setFavorites(data)
        } catch (err) {
            console.error(err)
            setError(err)
        } finally {
            setTimeout(() => {
                setIsLoading(false)
            }, 1000)
        }
    }

    useEffect(() => {
        fetchFavoritePokemons()
    }, [])

    return (
        <div className="container mx-auto text-white grid gap-y-10">
            <NavBar />
            <div className='grid grid-cols-4 gap-5'>
                {isLoading ? (
                    <div>
                        <span>Loading ...</span>
                    </div>
                ) : error ? (
                    <div>
                        <span>Data Not Found</span>
                    </div>
                ) : favorites.length === 0 ? (
                    <div>
                        <span>No favorites yet.</span>
                    </div>
                ) : (
                    favorites?.map((favorite) => {
                        const formattedId = favorite.id.toString().padStart(4, '0')
                        const formattedName = favorite.name.charAt(0).toUpperCase() + favorite.name.slice(1).toLowerCase()
                        const pokemonImage = favorite.sprites || pokeBall
                        return (
                            <div className='grid border border-[#466E9B] py-4 rounded-3xl bg-[#0A141E] text-white cursor-pointer' key={favorite.id} onClick={() => goToPokemonProfile(favorite.idPokemon)}>
                                <div className='flex justify-center'>
                                    <img className='' src={pokemonImage} alt={favorite.name} />
                                </div>
                                <div className='grid gap-y-10 px-5'>
                                    <div>
                                        <h1 className='text-[#B4EBFF]'>{formattedId}</h1>
                                        <h1 className='text-xl font-semibold'>{formattedName}</h1>
                                    </div>
                                    <div className='grid grid-cols-2 text-center gap-x-5'>
                                        {favorite.types?.map((type) => {
                                            const formattedType = type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1).toLowerCase()
                                            return (
                                                <h1 className={`border rounded-full py-1 ${setButtonColor(type.type.name)}`} key={type.slot}>{formattedType}</h1>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
            <Footer />
        </div>

    )
}

export default FavoritePage