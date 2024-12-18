import React, { useState } from 'react'

function FilterPokemons() {
    const [filterMode, setFilterMode] = useState(false)


    const handleFilterMode = () => {
        setFilterMode(!filterMode)
    }

    return (
        <div className='border rounded-3xl border-[#466E9B] px-[10%]'>
            {filterMode && (
                <>
                    <div className='grid grid-cols-2 gap-x-10 mt-10 mb-5'>
                        <div>
                            <div className='mb-10 border-b-[1px] pb-10'>
                                <label className='text-3xl text-[#B4EBFF]'>Tipe</label>
                            </div>
                            <div className='grid grid-cols-3 text-center gap-x-5'>
                                <h1 className='text-lg border py-1 mb-5 rounded-full cursor-pointer'>Normal</h1>
                                <h1 className='text-lg border py-1 mb-5 rounded-full cursor-pointer'>Fire</h1>
                                <h1 className='text-lg border py-1 mb-5 rounded-full cursor-pointer'>Water</h1>
                                <h1 className='text-lg border py-1 mb-5 rounded-full cursor-pointer'>Grass</h1>
                                <h1 className='text-lg border py-1 mb-5 rounded-full cursor-pointer'>Electric</h1>
                                <h1 className='text-lg border py-1 mb-5 rounded-full cursor-pointer'>Ice</h1>
                                <h1 className='text-lg border py-1 mb-5 rounded-full cursor-pointer'>Fighting</h1>
                                <h1 className='text-lg border py-1 mb-5 rounded-full cursor-pointer'>Poison</h1>
                                <h1 className='text-lg border py-1 mb-5 rounded-full cursor-pointer'>Ground</h1>
                                <h1 className='text-lg border py-1 mb-5 rounded-full cursor-pointer'>Flying</h1>
                                <h1 className='text-lg border py-1 mb-5 rounded-full cursor-pointer'>Ghost</h1>
                                <h1 className='text-lg border py-1 mb-5 rounded-full cursor-pointer'>Dragon</h1>
                                <h1 className='text-lg border py-1 mb-5 rounded-full cursor-pointer'>Dark</h1>
                                <h1 className='text-lg border py-1 mb-5 rounded-full cursor-pointer'>Steel</h1>
                                <h1 className='text-lg border py-1 mb-5 rounded-full cursor-pointer'>Fairy</h1>
                            </div>
                        </div>
                        <div>
                            <div className='grid border py-5 px-5 rounded-3xl border-[#466E9B] mb-5'>
                                <label className='text-3xl text-[#B4EBFF] mb-5'>Kemampuan</label>
                                <select className='text-black rounded-full py-2 px-2'>
                                    <option>All</option>
                                    <option>Kemampuan Adaptasi</option>
                                    <option>Kulit Langit</option>
                                    <option>Detonasi</option>
                                    <option>Air Lock</option>
                                    <option>Tititk Amarah</option>
                                </select>
                            </div>
                            <div className='grid border py-5 px-5 rounded-3xl border-[#466E9B]'>
                                <div className='mb-5 text-3xl flex gap-x-10'>
                                    <label className='text-[#B4EBFF]'>Nomer</label>
                                    <span>1 - 1025</span>
                                </div>
                                <select className='text-black rounded-full py-2 px-2'>
                                    <option value='' disabled>All</option>
                                    <option>Kemampuan Adaptasi</option>
                                    <option>Kulit Langit</option>
                                    <option>Detonasi</option>
                                    <option>Air Lock</option>
                                    <option>Tititk Amarah</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='mb-10'>
                        <div className='mb-5 border-b-[1px] pb-5'>
                            <label className='text-3xl text-[#B4EBFF]'>Daerah</label>
                        </div>
                        <div className='grid grid-cols-7 text-center gap-x-10 gap-y-5'>
                            <h1 className='border rounded-full'>Daerah Kanto</h1>
                            <h1 className='border rounded-full'>Daerah Kanto</h1>
                            <h1 className='border rounded-full'>Daerah Kanto</h1>
                            <h1 className='border rounded-full'>Daerah Kanto</h1>
                            <h1 className='border rounded-full'>Daerah Kanto</h1>
                            <h1 className='border rounded-full'>Daerah Kanto</h1>
                            <h1 className='border rounded-full'>Daerah Kanto</h1>
                            <h1 className='border rounded-full'>Daerah Kanto</h1>
                            <h1 className='border rounded-full'>Daerah Kanto</h1>
                            <h1 className='border rounded-full'>Daerah Kanto</h1>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-x-10 mb-10'>
                        <button className='border rounded-full py-2 border-[#B3EAFE] text-[#B3EAFE]'>Reset</button>
                        <button className='col-span-2 border rounded-full py-2 border-transparent bg-[#B3EAFE] text-black'>Pencarian</button>
                    </div>
                </>
            )}
            <div className='grid justify-center my-2 text-xl text-center cursor-pointer' onClick={handleFilterMode}>
                <h1>{filterMode ? 'Sembunyikan Pencarian lebih lanjut' : 'Tunjukan Pencarian lebih lanjut'}</h1>
                <span>{filterMode ? '^' : 'v'}</span>
            </div>
        </div>
    )
}

export default FilterPokemons