// Description: This file contains the code to fetch data from the PokeAPI
async function fetchPokemonData(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Error fetching data');
    }
}

document.getElementById("pokemon-form").addEventListener('submit', async (event) => {
    event.preventDefault();

    const pokemonName = document.getElementById("search-pokemon").value;

    try {
        const data = await fetchPokemonData(pokemonName);
        const pokeInfoElement = document.getElementById("pokemon-info");
        pokeInfoElement.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" />
            <h3>${data.abilities[0].ability.name}</h3>
            <p>Height: ${data.height}</p>
            <p>Weight: ${data.weight}</p>
        `;
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
