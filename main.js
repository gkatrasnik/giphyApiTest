const img = document.querySelector("img");
const gifButton = document.getElementById("gifButton");
const inputText = document.getElementById("input");

gifButton.addEventListener("click", () => {
  fetchGif(readInputText());
});

inputText.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    fetchGif(readInputText());
  }
});

fetchGif();

function readInputText() {
  let searchTerm = inputText.value;
  return searchTerm;
}

function fetchGif(search) {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=fcgdm73ShRzbtmRCmWOMD7NJt0EEmNJz&s="${search}"`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
}
