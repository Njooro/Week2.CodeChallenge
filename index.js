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
        for (const character of characters) {
            const span = document.createElement("span");
            span.innerText = character.name;
            span.style.cursor = "pointer";
            span.addEventListener("click", () => showAnimalDetails(character));
            animalBar.appendChild(span);
        }
    }

    function showAnimalDetails(character) {
        const characterName = document.querySelector("#animal-names-bar");
        characterName.innerText = character.name;
        

        const img = document.createElement("img");
        img.src = character.image;

        const animalImage = document.querySelector("#animal-image");
        animalImage.innerHTML = "";
        animalImage.appendChild(img);

        const currentVotes = document.getElementById("vote-count");
        currentVotes.innerText = character.votes;

        const votesForm = document.getElementById("votes-form");
        const votesInput = document.getElementById("votes-input");
        const addVotesButton = document.getElementById("add-votes");
        const resetButton = document.getElementById("reset");

        resetButton.addEventListener("click", () => {
            currentVotes.innerText = "0";
        });

        votesForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const votes = parseInt(votesInput.value);
            if (!isNaN(votes)) {
                currentVotes.innerText = parseInt(currentVotes.innerText) + votes;
            }
        });
    }
}

// Call the function to fetch and display animal details
getAnimalDetails();



