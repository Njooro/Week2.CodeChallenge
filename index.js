// function to fetch the details from a JSON file
function getAnimalDetails() {
    fetch("https://my-json-server.typicode.com/Njooro/Week2.CodeChallenge/characters", {
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
}

// function to display the characters
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

// function to show animal details
function showAnimalDetails(character) {
    const characterName = document.querySelector(".logo h1");
    characterName.innerText = character.name;

    const img = document.createElement("img");
    img.src = character.image;
    img.classList.add("character-image");

    const animalImage = document.querySelector("#animal-image");
    animalImage.innerHTML = "";
    animalImage.appendChild(img);

    const currentVotes = document.getElementById("vote-count");
    currentVotes.innerText = character.votes;

    const votesForm = document.getElementById("votes-form");
    const votesInput = document.getElementById("votes-input");
    const addVotesButton = document.getElementById("add-votes");

    // the reset button resets the votes once clicked
    const resetButton = document.getElementById("reset");
    // the event listener function listens to the click and resets the votes to 0
    resetButton.addEventListener("click", () => {
        currentVotes.innerText = "0";
    });

    // function to add votes
    votesForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const votes = parseInt(votesInput.value);
        if (!isNaN(votes)) {
            currentVotes.innerText = parseInt(currentVotes.innerText) + votes;
        }
    });
}

// this function shows the animals, their details, and has an option to add the votes
getAnimalDetails();