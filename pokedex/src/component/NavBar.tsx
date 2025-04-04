interface Pokemon {
    name: string;
    imgSrc?: string;
}


interface NavBarProps {
    setPokemonName: (name: string) => void;
    pokemonList: Pokemon[];
    output: string;
}



function NavBar({setPokemonName, pokemonList, output}: NavBarProps) {
        if (output === "pikachu") {alert("pika pikachu !!!");}


    return (
    <>
        <nav>
            {pokemonList.map((pokemon) => <button type="button" key={pokemon.name} onClick={() => setPokemonName(pokemon.name) }>{pokemon.name}</button>)}
        </nav>

    </>
    )
        }


export default NavBar;