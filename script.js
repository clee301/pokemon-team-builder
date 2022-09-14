const myForm = document.querySelector('#findPokemon')
const inputVal = document.querySelector('#enterPokemon')


myForm.addEventListener('submit', function(e){
    e.preventDefault()
    let inputGrab = inputVal.value
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputGrab}`)
    .then(res => res.json())
    .then(data => console.log(data))
})