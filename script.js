let button = document.querySelector("#searchButton")

async function getData(event) {

    event.preventDefault()//won't refresh or come back empty
    let searchInput = document.getElementById("inputBar").value


let url = `https://pokeapi.co/api/v2/pokemon/${searchInput}`
console.log(url)

fetch(url)
.then(res => {
    return res.json()
})

.then(res => { 
    const pokemonHeading = document.querySelector("#pokemonName")
    pokemonHeading.innerText = `Pokemon: ${res.name.toUpperCase()}`
    console.log("success!", res.sprites.front_default)
})
.catch(error=>{
    console.log("error!", error)})

}

button.addEventListener('click' , getData)


// console.log(1);

// fetch(url).then(res => {
//   if (res.ok) {
//     console.log(2);
//   }
// });

// console.log(3);