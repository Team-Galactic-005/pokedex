import React, { useEffect, useState } from "react";
import PokeAPI from "../library/axios";
import CardsPokemons from "../components/CardsPokemons";
import NavBar from "../components/NavBar";
import FilterPokemons from "../components/FilterPokemons";
import SearchForm from "../components/SearchForm";
import HeaderCards from "../components/HeaderCards";
import SearchResults from "../components/SearchResults";

function HomePage() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [pokemons, setPokemons] = useState([])
    const [headerPokemons, setHeaderPokemons] = useState([])
    const [types, setTypes] = useState([])
    const [regions, setRegions] = useState([])
    const [abylitys, setAbylitys] = useState([])
    const [filterPokemons, setFilterPokemons] = useState([])
    const [offset, setOffset] = useState(0)
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])
    console.log(searchResults)

    const searchPokemon = async (search) => {
        setIsLoading(true)
        setError(null)
        try {
            const { data } = await PokeAPI.get(`pokemon/${search}`)
            setSearchResults(data)
        } catch (err) {
            console.log(err)
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    const submitForm = (e) => {
        e.preventDefault()
        searchPokemon(search)
    }

    const fetchPokemon = async (offsetValue = 0) => {
        setIsLoading(true)
        setError(null)
        try {
            const { data } = await PokeAPI.get(`/pokemon?offset=${offsetValue}&limit=20`)
            const pokemonsPromises = data.results.map(async (pokemon) => {
                const pokemonId = pokemon.url.split('/')[6]
                return fetchPokemon2(pokemonId)
            })
            const pokemonsResponses = await Promise.all(pokemonsPromises)
            const pokemonsData = pokemonsResponses.map((response) => response.data)
            setPokemons((prevPokemons) => {
                const newPokemons = pokemonsData.filter(pokemon =>
                    !prevPokemons.some(existingPokemon => existingPokemon.id === pokemon.id)
                )
                return [...prevPokemons, ...newPokemons]
            })
        } catch (err) {
            console.log(err);
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    const loadMorePokemons = () => {
        setOffset((prevOffset) => {
            const newOffset = prevOffset + 20
            fetchPokemon(newOffset)
            return newOffset
        })
    }

    const fetchPokemon2 = async (pokemonId) => {
        setIsLoading(true)
        setError(null)
        try {
            return await PokeAPI.get(`/pokemon/${pokemonId}`);
        } catch (err) {
            console.log(err);
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    const fetchHeaderCards = async () => {
        setIsLoading(true)
        setError(null)
        try {
            const randomOffset = Math.floor(Math.random() * 1025) + 1
            const { data } = await PokeAPI.get(`/pokemon?offset=${randomOffset}&limit=13`)
            const pokemonsPromises = data.results.map(async (pokemon) => {
                const pokemonId = pokemon.url.split('/')[6]
                return fetchHeaderCards2(pokemonId)
            });
            const pokemonsResponses = await Promise.all(pokemonsPromises);
            const pokemonsData = pokemonsResponses.map((response) => response.data)
            setHeaderPokemons(pokemonsData)
        } catch (err) {
            console.log(err);
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    const fetchHeaderCards2 = async (pokemonId) => {
        setIsLoading(true)
        setError(null)
        try {
            return await PokeAPI.get(`/pokemon/${pokemonId}`);
        } catch (err) {
            console.log(err);
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    const fetchTypePokemons = async () => {
        setIsLoading(true)
        setError(null)
        try {
            const response = await PokeAPI.get(`type?offset=0&limit=21`)
            const { results } = response.data
            setTypes(results)
        } catch (err) {
            console.log(err);
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    // const fetchRegionPokemons = async () => {
    //     setIsLoading(true)
    //     setError(null)
    //     try {
    //         const response = await PokeAPI.get(`region`)
    //         const { results } = response.data
    //         setRegions(results)
    //     } catch (err) {
    //         console.log(err);
    //         setError(err)
    //     } finally {
    //         setIsLoading(false)
    //     }
    // }

    // const fetchAbilitysPokemons = async () => {
    //     setIsLoading(true)
    //     setError(null)
    //     try {
    //         const response = await PokeAPI.get(`ability?offset=0&limit=367`)
    //         const { results } = response.data
    //         setAbylitys(results)
    //     } catch (err) {
    //         console.log(err)
    //         setError(err)
    //     } finally {
    //         setIsLoading(false)
    //     }
    // }

    useEffect(() => {
        fetchPokemon()
        fetchHeaderCards()
        setFilterPokemons(pokemons)
        fetchTypePokemons()
        // fetchAbilitysPokemons()
        // fetchRegionPokemons()
    }, [])

    return (
        <div className="container mx-auto text-white grid gap-y-10">
            <NavBar />
            <HeaderCards headerPokemons={headerPokemons}/>
            <SearchForm submitForm={submitForm} setSearch={setSearch}/>
            <FilterPokemons types={types} regions={regions} abylitys={abylitys} setFilterPokemons={setFilterPokemons}/>
            {searchResults && searchResults.name ? (
                <SearchResults searchResults={searchResults}/>
            ) : (
                <CardsPokemons pokemons={pokemons} filterPokemons={filterPokemons} isLoading={isLoading} error={error} loadMorePokemons={loadMorePokemons} />
            )}
            <div>Footer</div>
        </div>
    );
}

export default HomePage;