

// document.addEventListener("DOMContentLoaded", (e) => {
//     const nav = document.getElementById("animal-names-bar");
//     function getAnimalDetails(){
//         return fetch("http://localhost:3000/characters")
//         .then((res) => res.json())
//         .then((characters) => {
//             characters.forEach((character) => {
//                 const characterView = document.createElement("span");
//                 nav.appendChild(characterView);
//                 characterView.id = character.id;
//                 characterView.innerText = character.name;
//                 characterView.style.cursor = "pointer";

//                 characterView.addEventListener("click", (e) => {
//                     const characterName = document.getElementById("name");
//                     characterName.innerText = character.name;
//                     const characterImage = getElementById("image");
//                     characterImage.src =characterImage;
                    
//                     const currentVotes = document.getElementById("vites");
//                     currentVotes.innerText = character.votes;
//                     const form = document.getElementById(votes-form);
//                     form.addEventListener("submit", (e) => {e.preventDefault();
//                     const votes = document.getElementById("votes").value;
//                 if (isNaN(votes)=== false){
//                     currentVotes.innerText = votes;
//                 } else {alert("Enter Votes");
//                 form.requestFullscreen();
//                 }
//             console.log(votes);
//         })
        
//         const resetButton = document.getElementById("reset");
//         resetButton.addEventListener("click", (e) =>{
//             e.preventDefault();
//             currentVotes.innerText = 0;
//         })
//        })
//      })

     

//      })
//     }
// })

// getAnimalDetails();


function getAnimalDetails(){
    fetch("http://localhost:3000/characters", {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    }).then ((res) => res.json())
    .then((response) => {
        showAnimalDetails(response)        
    })
}

function 

























