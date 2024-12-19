import React from 'react'

function SearchForm({submitForm, setSearch}) {
    return (
        <div className='border rounded-3xl border-[#466E9B] px-[10%] grid grid-cols-3 gap-x-10 text-xl'>
            <div className='col-span-2 w-full mt-5 mb-10 grid gap-y-3'>
                <span className='text-[#B3EAFE]'>Pencarian melalui nama atau id</span>
                <form className='flex' onSubmit={submitForm}>
                    <input className='rounded-s-full w-full text-black py-2 px-5' type='text' onChange={(e) => setSearch(e.target.value)}/>
                    <button className='rounded-e-full bg-[#B4EBFF] px-5 text-[#399efc]' type='submit'>Search</button>
                </form>
            </div>
            <div>

            </div>
        </div>
    )
}

export default SearchForm