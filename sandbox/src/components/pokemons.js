import { useState, useEffect } from 'react'

const FETCH_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=10'

export function PokeList(params) {

    const [pokemons, setPokemons] = useState([]);

    useEffect( () => {
        fetch(FETCH_URL)
        .then( (res) => res.json() )
        .then( (jsonRes) => {
            console.log(jsonRes);
        } )
    } );

    return (
        <div className='poke-list'>
            <h1 className='poke-list-name'>
                PokeList
            </h1>
        </div>
    );
}

export default PokeList;