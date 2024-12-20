import React, { useState } from 'react'
import PokeAPI from '../library/axios'

const colorButton = {
    normal: 'text-[#A0A0A0] border-[#DCDCDC]',
    fighting: 'text-[#C85500] border-[#DC6900]',
    flying: `text-[#79BCD7] border-[#78DCFF]`,
    poison: `text-[#BE78BE] border-[#D28CD2]`,
    ground: `text-[#CCA142] border-[#F9C75A]`,
    rock: `text-[#A07850] border-[#B48C64]`,
    bug: `text-[#32B432] border-[#46C846]`,
    ghost: `text-[#8C78F0] border-[#A08CFF]`,
    steel: `text-[#96B4DC] border-[#AAC8F0]`,
    fire: `text-[#FF3700] border-[#FF6900]`,
    water: `text-[#0094E5] border-[#14B9FF]`,
    grass: `text-[#92BF19] border-[#B4F000]`,
    electric: `text-[#E4B700] border-[#FFE100]`,
    psychic: `text-[#DC78C8] border-[#EF8BDB]`,
    ice: `text-[#00B7EE] border-[#14F5FF]`,
    dragon: `text-[#3C64C8] border-[#5078DC]`,
    dark: `text-[#606060] border-[#787878]`,
    fairy: `text-[#FF7EB8] border-[#FDAEDA]`,
    stellar: `text-[#A0A0A0]`,
    shadow: `text-[#A0A0A0]`,
    unknown: `text-[#A0A0A0]`
}

const colorButtonOn = {
    normal: 'text-black border-transparent bg-[#DCDCDC]',
    fighting: 'text-black border-transparent bg-[#DC6900]',
    flying: `text-black border-transparent bg-[#78DCFF]`,
    poison: `text-black border-transparent bg-[#D28CD2]`,
    ground: `text-black border-transparent bg-[#FAC85A]`,
    rock: `text-black border-transparent bg-[#B48C64]`,
    bug: `text-black border-transparent bg-[#46C846]`,
    ghost: `text-black border-transparent bg-[#A08CFF]`,
    steel: `text-black border-transparent bg-[#AAC8F0]`,
    fire: `text-black border-transparent bg-[#FF6900]`,
    water: `text-black border-transparent bg-[#14B9FF]`,
    grass: `text-black border-transparent bg-[#B4F000]`,
    electric: `text-black border-transparent bg-[#FFE100]`,
    psychic: `text-black border-transparent bg-[#F08CDC]`,
    ice: `text-black border-transparent bg-[#14F5FF]`,
    dragon: `text-black border-transparent bg-[#5078DC]`,
    dark: `text-black border-transparent bg-[#787878]`,
    fairy: `text-black border-transparent bg-[#DCDCDC]`,
    stellar: `text-black border-transparent bg-[#DCDCDC]`,
    shadow: `text-black border-transparent bg-[#DCDCDC]`,
    unknown: `text-black border-transparent bg-[#DCDCDC]`
}

function FilterPokemons({ types, regions, abylitys, setFilterPokemons,typeFilter, setTypeFilter, handleSubmit }) {
    const [filterMode, setFilterMode] = useState(false)
    const [range, setRange] = useState({ min: 1, max: 1025 })
    // const [typeFilter, setTypeFilter] = useState([])


    const handleFilterMode = () => {
        setFilterMode(!filterMode)
    }

    const handleRangeChange = (e) => {
        const { name, value } = e.target
        setRange((prevRange) => ({ ...prevRange, [name]: value }))
    }

    const validateType = (type) => {
        setTypeFilter((prev) => {
            const listType = new Set(prev)
            if (listType.has(type)) {
                listType.delete(type)
            } else {
                listType.add(type)
            }
            return [...listType]
        })
    }

    const setButtonColor = (type) => {
        return colorButton[type]
    }

    const setButtonColorOn = (type) => {
        return colorButtonOn[type]
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     const { data } = await PokeAPI.get(`/type/${typeFilter[0]}`)
    //     setFilterPokemons(data.pokemon)
    //     console.log(data)
    // }

    const handleReset = () => {
        setTypeFilter([])  
        setFilterPokemons([])
        setFilterMode(false)
    }

    return (
        <form className='border rounded-3xl border-[#466E9B] px-[10%]' onSubmit={(e) => handleSubmit(e)}>
            {filterMode && (
                <>
                    <div className='grid gap-x-10 mt-10 mb-5'>
                        <div>
                            <div className='mb-10 border-b-[1px] pb-10'>
                                <label className='text-3xl text-[#B4EBFF]'>Tipe</label>
                            </div>
                            <div className='grid grid-cols-6 text-center gap-x-4'>
                                {types?.map((type) => {
                                    const formattedType = type.name.charAt(0).toUpperCase() + type.name.slice(1).toLowerCase()
                                    return (
                                        <h1 className={`text-lg border py-2 mb-5 rounded-full cursor-pointer ${typeFilter.includes(type.name) ? setButtonColorOn(type.name) : setButtonColor(type.name)}`}
                                        key={type.name} value={type.name} onClick={() => validateType(type.name)}>{formattedType}</h1>
                                    )
                                })}
                            </div>
                        </div>
                        {/* <div>
                            <div className='grid border py-5 px-5 rounded-3xl border-[#466E9B] mb-5'>
                                <label className='text-3xl text-[#B4EBFF] mb-5'>Ability</label>
                                <select className='text-black rounded-full py-2 px-2 cursor-pointer'>
                                    <option>All</option>
                                    {abylitys?.map((ability) => {
                                        const formattedAbility = ability.name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
                                        return (
                                            <option key={ability.name} value={ability.name}>{formattedAbility}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className='grid border py-5 px-5 rounded-3xl border-[#466E9B]'>
                                <div className='mb-5 text-3xl flex gap-x-10'>
                                    <label className='text-[#B4EBFF]'>Id</label>
                                    <span>{`${range.min} - ${range.max}`}</span>
                                </div>
                                <div className='w-full'>
                                    <input className='w-full' type="range" min="1" max="1025" value={range.min} name="min" onChange={handleRangeChange}/>
                                    <input className='w-full mt-5' type="range" min="1" max="1025" value={range.max} name="max" onChange={handleRangeChange}/>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    {/* <div className='mb-10'>
                        <div className='mb-5 border-b-[1px] pb-5'>
                            <label className='text-3xl text-[#B4EBFF]'>Region</label>
                        </div>
                        <div className='grid grid-cols-7 text-center gap-x-7 gap-y-5'>
                            {regions?.map((region) => {
                                const formattedRegion = region.name.charAt(0).toUpperCase() + region.name.slice(1).toLowerCase()
                                return (
                                    <h1 className='border rounded-full text-lg' key={region.name} value={region.name}>{formattedRegion} Area</h1>
                                )
                            })}
                        </div>
                    </div> */}
                    <div className='grid grid-cols-2 gap-x-10 mb-10 text-xl'>
                        <button className='border rounded-full py-2 border-[#B3EAFE] text-[#B3EAFE]' onClick={handleReset}>Reset</button>
                        <button className='border rounded-full py-2 border-transparent bg-[#B3EAFE] text-black hover:bg-[#81dbfc]'>Pencarian</button>
                    </div>
                </>
            )}
            <div className='grid justify-center my-2 text-xl text-center cursor-pointer' onClick={handleFilterMode}>
                <h1>{filterMode ? '^' : 'Tunjukan Pencarian lebih lanjut'}</h1>
                <span>{filterMode ? 'Sembunyikan Pencarian lebih lanjut' : 'v'}</span>
            </div>
        </form>
    )
}

export default FilterPokemons