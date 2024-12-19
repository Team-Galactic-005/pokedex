import React from 'react'

function SearchForm() {
    return (
        <div className='border rounded-3xl border-[#466E9B] px-[10%] grid grid-cols-3 gap-x-10 text-xl'>
            <div className='col-span-2 w-full mt-5 mb-10 grid gap-y-3'>
                <span className='text-[#B3EAFE]'>Pencarian melalui nama atau nomer</span>
                <form className='flex'>
                    <input className='rounded-s-full w-full text-black py-2 px-5' type='text'/>
                    <button className='rounded-e-full bg-[#B4EBFF] px-5 text-[#44BDFF]' type='submit'>Search</button>
                </form>
            </div>
            <div className='w-full mb-10 grid items-end'>
                <form>
                    <button className='rounded-full w-full py-2 bg-[#FFDC00]'>Kejutkan Saya</button>
                </form>
            </div>
        </div>
    )
}

export default SearchForm