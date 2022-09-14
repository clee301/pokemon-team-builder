const myForm = document.querySelector('#findPokemon')
const inputVal = document.querySelector('#enterPokemon')
const list = document.querySelector('#stats')

myForm.addEventListener('submit', function(e){
    e.preventDefault()
    let inputGrab = inputVal.value
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputGrab}`)
    .then(res => res.json())
    .then(data => {
        list.innerHTML =
    `<img src="${data.sprites.front_default}">
    <br>
    No. ${data.id}
    <br>
    Name: ${data.name}
    <br>
    Type: ${data.types[0]['type']['name']}
    <br>
    <b>--Base Stats--</b>
    <br>
    HP: ${data.stats[0]['base_stat']}
    <br>
    Attack: ${data.stats[1]['base_stat']}
    <br>
    Defense: ${data.stats[2]['base_stat']}
    <br>
    Special Attack: ${data.stats[3]['base_stat']}
    <br>
    Special Defense: ${data.stats[4]['base_stat']}
    <br>
    Speed: ${data.stats[5]['base_stat']}
    <br><br>
    <center>
    <button id="addMe">
    Add to the team</button>`
    })
})