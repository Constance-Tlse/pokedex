import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import NavBar from "./component/NavBar.tsx";
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
    useEffect(
        () => {
            alert("hello pokemon trainer :)");
        },
        []
    );
    const [pokemonName, setPokemonName] = useState("bulbasaur");
    const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);


    // quest 9 bug étape 5
    return (
    <>
        <NavBar setPokemonName={setPokemonName} pokemonList={pokemonList} output={pokemonName} />

        <section>
            <PokemonCard pokemon={pokemon} />
        </section>
    </>
    )
}

export default App;