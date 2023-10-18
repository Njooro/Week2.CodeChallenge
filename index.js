




getAnimalDetails();



const animalBar = document.querySelector("#animal-names-bar");


function getAnimalDetails(){
    fetch("http://localhost:3000/characters", {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    }).then ((res) => res.json())
    .then( response => {
        chartacters = [...response]
        showAnimals(response)
})
}


function showAnimals(characters){
    for (character of characters){
        const span = document.createElement("span");
        span.innerText = character.name;
        span.style.cursor = "pointer"
        
        span.setAttribute("id", character.id)
    
        span.addEventListener("click", (event)=> {
            showAnimalImage(showAnimalsId(characters, parseInt(event.target.id)))
        });

        animalBar.appendChild(span);
    }
    function showAnimalImage(characters){
        const image = document.querySelector("#image");
        image.src = character.image
        return character.image;
    }
    
    function showAnimalsId(characters, id){
        return characters.find((character) => {
            return character.id === id;
            return character.id
        })
    }
    
}

const form = document.getElementById("votes");
            form.addEventListener("submit", (e) => {
              e.preventDefault();
              const votes = document.getElementById("votes").value;
              if (isNaN(votes) === false) {
                currentVotes.innerText = votes;
                // form.reset();
              } else {
                alert("Votes can only be in numbers");
                form.reset();
              }
              console.log(votes);

              // resets vote count to zero
              const resetButton = document.getElementById("reset-btn");
              resetButton.addEventListener("click", (e) => {
                e.preventDefault();
                currentVotes.innerText = 0;
              });
            });      