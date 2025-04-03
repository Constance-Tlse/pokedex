

function NavBar() {

    interface Pokemon {
        name: string;
        imgSrc?: string;
    }


    interface NavBarProps {
        setPokemonName: (name: string) => void;
        pokemonList: Pokemon[];
    }


    return (
    <>
        <nav>
            {pokemonList.map((pokemon) => <button type="button" key={pokemon.name} onClick={() => setPokemonName(pokemon.name) }>{pokemon.name}</button>)}
        </nav>

    </>
    )
}

export default NavBar;