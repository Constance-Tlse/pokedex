import { useState } from "react";
import "./App.css";
import PokemonCard from "./component/PokemonCard.tsx";

const pokemonList = [

    {
        name: "bulbasaur",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },

    {

        name: "charmander",

        imgSrc:

            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",

    },

    {

        name: "squirtle",

        imgSrc:

            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",

    },

    {

        name: "pikachu",

        imgSrc:

            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",

    },
    {
        name: "mew",
        imgSrc: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/151.png"
    },
];

function App() {
    const [pokemonName, setPokemonName] = useState("bulbasaur");
    const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

    return (
    <>
        <nav>
            {pokemonList.map((pokemon) => <button type="button" key={pokemon.name} onClick={() => setPokemonName(pokemon.name) }>{pokemon.name}</button>)}
        </nav>

        <section>
            <PokemonCard pokemon={pokemon} />
        </section>
    </>
    )
}

export default App;