import React, { useState } from 'react'

function FilterPokemons({ types, regions, abylitys }) {
    const [filterMode, setFilterMode] = useState(false)
    const [range, setRange] = useState({ min: 1, max: 1025 })


    const handleFilterMode = () => {
        setFilterMode(!filterMode)
    }

    const handleRangeChange = (e) => {
        const { name, value } = e.target
        setRange((prevRange) => ({ ...prevRange, [name]: value }))
    }

    return (
        <form className='border rounded-3xl border-[#466E9B] px-[10%]'>
            {filterMode && (
                <>
                    <div className='grid grid-cols-2 gap-x-10 mt-10 mb-5'>
                        <div>
                            <div className='mb-10 border-b-[1px] pb-10'>
                                <label className='text-3xl text-[#B4EBFF]'>Tipe</label>
                            </div>
                            <div className='grid grid-cols-3 text-center gap-x-5'>
                                {types?.map((type) => {
                                    const formattedType = type.name.charAt(0).toUpperCase() + type.name.slice(1).toLowerCase()
                                    return (
                                        <h1 className={`text-lg border py-1 mb-5 rounded-full cursor-pointer
                                                ${type.name === 'normal' ? 'text-[#A0A0A0] border-[#DCDCDC]' :
                                                type.name === 'fighting' ? 'text-[#C85500] border-[#DC6900]' :
                                                    type.name === 'flying' ? 'text-[#79BCD7] border-[#78DCFF]' :
                                                        type.name === 'poison' ? 'text-[#BE78BE] border-[#D28CD2]' :
                                                            type.name === 'ground' ? 'text-[#CCA142] border-[#F9C75A]' :
                                                                type.name === 'rock' ? 'text-[#A07850] border-[#B48C64]' :
                                                                    type.name === 'bug' ? 'text-[#32B432] border-[#46C846]' :
                                                                        type.name === 'ghost' ? 'text-[#8C78F0] border-[#A08CFF]' :
                                                                            type.name === 'steel' ? 'text-[#96B4DC] border-[#AAC8F0]' :
                                                                                type.name === 'fire' ? 'text-[#FF3700] border-[#FF6900]' :
                                                                                    type.name === 'water' ? 'text-[#0094E5] border-[#14B9FF]' :
                                                                                        type.name === 'grass' ? 'text-[#92BF19] border-[#B4F000]' :
                                                                                            type.name === 'electric' ? 'text-[#E4B700] border-[#FFE100]' :
                                                                                                type.name === 'psychic' ? 'text-[#DC78C8] border-[#EF8BDB]' :
                                                                                                    type.name === 'ice' ? 'text-[#00B7EE] border-[#14F5FF]' :
                                                                                                        type.name === 'dragon' ? 'text-[#3C64C8] border-[#5078DC]' :
                                                                                                            type.name === 'dark' ? 'text-[#606060] border-[#787878]' :
                                                                                                                type.name === 'fairy' ? 'text-[#FF7EB8] border-[#FDAEDA]' :
                                                                                                                    type.name === 'stellar' ? 'text-[]' :
                                                                                                                        type.name === 'shadow' ? 'text-[]' :
                                                                                                                            'text-[#A0A0A0]'}
                                            `} key={type.name} value={type.name}>{formattedType}</h1>
                                    )
                                })}
                            </div>
                        </div>
                        <div>
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
                        </div>
                    </div>
                    <div className='mb-10'>
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
                    </div>
                    <div className='grid grid-cols-3 gap-x-10 mb-10 text-xl'>
                        <button className='border rounded-full py-2 border-[#B3EAFE] text-[#B3EAFE]'>Reset</button>
                        <button className='col-span-2 border rounded-full py-2 border-transparent bg-[#B3EAFE] text-black'>Pencarian</button>
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