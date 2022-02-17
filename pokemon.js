// Event listener for the static form on the base HTML page set to intercept "submit" events (2)
// A fetch call to the Pokemon API (1)
// Using a Promise chain (.then(() => { ... }) or async/await to parse the body and return the JSON (2)
// Creating the Pokemon card (10)
// An image tag with the src and alt attributes set
// Some text with two pieces of information from the JSON response (i.e. the name and ID)
// Add a form to update the displayed Pokemon
// Add a text input with the name of the Pokemon pre-filled (use the "value" attribute on the element to pre-fill it)
// Add a button allows for updating the displayed Pokemon
// Add an event listener for the form that accepts a "submit" event
// Inserting the Pokemon card into the page (2)
// You may insert this at a specific place or just append it to the body
// Updating an already added Pokemon (4)
// The update event listener method should update the Pokemon image and text (Hint: Create a method that accepts the container element for the Pokemon image and text so you can easily get the children tags and update their attributes accordingly)

let button = document.querySelector("#addPokemon");
let input = document.querySelector("#pokemonName");

// trying to update the pokemon inplace when they have been called

button.addEventListener("click", function () {
    console.log("finding: " + pokemonName.value);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.value}`)
        .then((body) => body.json())
        .then((pokemon) => insertPokemon(pokemon));
});


function insertPokemon(pokemon) {


    let image_url = pokemon.sprites.front_default;
    let name = pokemon.name;
    let id = pokemon.id;




    let header = document.createElement("h1");
    header.textContent = `${name} - ${id}`;

    let image = document.createElement("img");
    image.setAttribute("src", image_url);
    image.setAttribute("alt", `front view of ${name}`);

    // create new input for the call to update the pokemon image
    let input = document.createElement("input");
    input.type = "text";
    input.id = "addPokemon"

    let button2 = document.createElement("button2");
    button2.id = "updatePokemon";
    button2.innerHTML = "Update Pokemon";

    button2.addEventListener("click", function () {
        console.log("finding: " + input.value);
        fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
            .then((body) => body.json())
            .then((pokemon) => updatePokemon(pokemon, header, image, input, button2));
    });

    let div = document.createElement("div");
    div.appendChild(header);
    div.appendChild(image);
    div.appendChild(input);
    div.appendChild(button2);

    document.getElementById('flex-container').appendChild(div);

    // let button2 = document.querySelector("#updatePokemon");


    // document.getElementById('work').appendChild(header);
    // document.getElementById('work').appendChild(image);
    // document.getElementById('work').appendChild(input);
    // document.getElementById('work').appendChild(button2);


}




function updatePokemon(pokemon, header, image) {
    console.log('called function');

    let image_url = pokemon.sprites.front_default;
    image.setAttribute("src", image_url);
    // image.setAttribute("alt", `front view of ${name}`);

    let name = pokemon.name;
    let id = pokemon.id;

    header.textContent = `${name} - ${id}`;

    // document.body.appendChild(image);
    // document.body.appendChild(input);
    // document.body.appendChild(button2);
}
