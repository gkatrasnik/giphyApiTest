const img = document.querySelector("img");
const gifButton = document.getElementById("gifButton");
const inputText = document.getElementById("input");
const gifUrl = document.getElementById("gifurl");

const APY_KEY = "fcgdm73ShRzbtmRCmWOMD7NJt0EEmNJz";

gifButton.addEventListener("click", () => {
  fetchGif(readInputText());
});

inputText.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    fetchGif(readInputText());
  }
});

// call tfe function on load
fetchGif(readInputText());

//return search term
function readInputText() {
  let searchTerm = inputText.value;
  return searchTerm;
}

//fetch gif from giphy
async function fetchGif(search) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${APY_KEY}&s="${search}"`,
    { mode: "cors" }
  );
  const gifData = await response.json();
  img.src = gifData.data.images.original.url;
  gifUrl.textContent = "URL: " + gifData.data.bitly_url;
}
