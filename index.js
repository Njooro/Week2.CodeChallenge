


function getAnimalDetails() {
    fetch("http://localhost:3000/characters", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(response => {
            showAnimals(response);
        })
        .catch(error => {
            console.error('Error fetching animal details:', error);
        });

    function showAnimals(characters) {
        const animalBar = document.querySelector("#animal-names-bar");
        animalBar.innerHTML = "";
        for (character of characters) {
            
            const span = document.createElement("span");
            span.innerText = character.name;
            span.style.cursor = "pointer";
            span.addEventListener("click", () => showAnimalDetails(character));
            animalBar.appendChild(span);
        };
    }

    function showAnimalDetails(character) {
        const characterName = document.getElementById("animal-names-bar");
        characterName.innerText = character.name;
        
        const img = document.createElement("img"); // Change div to img
        img.src = character.image; // Set the image source
        
        const animalBar = document.querySelector("#animal-names-bar");
        animalBar.appendChild(img);
    
        const currentVotes = document.getElementById("vote-count");
        currentVotes.innerText = character.votes;
    }
}

// Call the function to fetch and display animal details
getAnimalDetails();
