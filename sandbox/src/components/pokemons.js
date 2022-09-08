import { useState, useEffect } from 'react'

const FETCH_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=10'

export function PokeList(params) {
    return (
        <div className='poke-list'>
            <h1 className='poke-list-name'>
                PokeList
            </h1>
        </div>
    );
}

export default PokeList;