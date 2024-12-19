import React from 'react'
import logo from '../assets/pokedex logo.png'

function Footer() {
    return (
        <div className='flex justify-center items-center gap-10 mb-10'>
            <div>
                <h1>Official Account</h1>
            </div>
            <div className='flex gap-5'>
                <a href='https://www.facebook.com/Pokemon.Official.Indonesia/'>
                    <img className='w-16' src='https://id.portal-pokemon.com/assets_c/2017/10/icon_facebook-thumb-132x132-323-thumb-132x132-3950.png' alt='facebookIcon'/>
                </a>
                <a href='https://www.youtube.com/c/PokemonIndonesia'>
                    <img className='w-16' src='https://id.portal-pokemon.com/assets_c/2017/10/icon_youtube-thumb-132x132-319-thumb-132x132-3949.png' alt='youtubeIcon'/>
                </a>
                <a href='https://www.instagram.com/pokemonofficial.id/'>
                    <img className='w-16' src='https://id.portal-pokemon.com/assets_c/2019/10/icon_Instagram_132x132-thumb-132x132-13758.png' alt='instagramIcon'/>
                </a>
                <a href='https://www.tiktok.com/@explorepokemonidn?lang=en'>
                    <img className='w-16' src='https://id.portal-pokemon.com/assets_c/2021/10/logo_tiktok-thumb-132x132-17037.png' alt='tiktokIcon'/>
                </a>
            </div>
            <div>
                <img className='w-40' src={logo} alt='logo'/>
            </div>
        </div>
    )
}

export default Footer