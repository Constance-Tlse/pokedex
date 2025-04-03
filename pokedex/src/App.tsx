import { useState } from "react";
import "./App.css";
import PokemonCard from "./component/PokemonCard.tsx";

const pokemonList = [

    {
        name: "bulbasaur",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
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

        <section>
            <PokemonCard pokemon={pokemon} />
            <button type="button" onClick={() => setPokemonName("bulbasaur")}>bulbisaur</button>
           <button type="button" onClick={() => setPokemonName("mew")}>mew</button>
        </section>

    );

}


export default App;