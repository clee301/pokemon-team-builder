const myForm = document.querySelector('#findPokemon')
const inputVal = document.querySelector('#enterPokemon')


myForm.addEventListener('submit', function(e){
    e.preventDefault()
   console.log("submit!")
})