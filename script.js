
document.addEventListener("DOMContentLoaded", function(){  


function welcome(){
     document.getElementById('welcome').innerText = "Welcome!"
    }    

function welcomeTitle(){
    document.getElementById('welcomeTitle').innerText = "Enter the name of the Pokemon you would like to add to your team!"
}


setTimeout(welcome, 2000)
setTimeout(welcomeTitle, 4000)

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

    list.style.display = "block";

        // add to the team button 

    const btnAdd = document.querySelector('#addMe')
    const teamMember = document.querySelector('#teamMember')

        btnAdd.addEventListener('click', function(){

            const allMembers = document.querySelectorAll('.member')
      if(allMembers.length <= 5){

            const createMember = document.createElement('p')
      createMember.classList.add('member')
      createMember.innerHTML =
      `<img src="${data.sprites.front_default}">
    <br>
    No. ${data.id}
    <br>
    Name: ${data.name}
    <br><br>
    <button id="remove">Remove</button>
    <br>`
    teamMember.appendChild(createMember)

        // remove button

        const btnRemove = document.querySelectorAll('#remove')
      const allMembersList = document.querySelectorAll('.member')
      btnRemove.forEach(function(x, y){
     
      x.addEventListener('click', function(z){
        allMembersList[y].remove()
        })
       })
        } else {
            alert('Maximum number of Pokemon in the team is 6.')
        }
    })
    })

    .catch(error => list.innerText = `${inputGrab} does not exist. Please try another Pokemon!`)
})

})