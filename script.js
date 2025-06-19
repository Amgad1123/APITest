let search = document.querySelector("#search");
const img = document.querySelector('img');
let isValid;
function loadGif(gifName) {
    if (gifName === undefined) {
        img.setAttribute("style", "display: none;")
    }
    else {
        //const img = document.querySelector('img');
        fetch(`https://api.giphy.com/v1/gifs/translate?api_key=6cOCLZEwxGvJjvqlxwkXzUqvvcZk0IbT&s=${gifName}`, {mode: 'cors'})
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                img.src = response.data.images.original.url
            })
            .catch(function(response) {
                window.alert("No Such memes exist");
            });
    }
}

const submit = document.querySelector(".submit");

submit.addEventListener("click", (event)=> {
    event.preventDefault();
    if (search.value.trim().length < 2) {
        search.setCustomValidity("Must have at least two characters");
        isValid = false;
    }
    else {
        search.setCustomValidity("");
        console.log(search);
        loadGif(search.value);
    }
    if (!isValid) {
        search.reportValidity();
    }
})


const button = document.querySelector('.new');
button.setAttribute("style", "padding: 16px; font-size: 16px;")

button.addEventListener("click", ()=> {
    loadGif(search.value);
})