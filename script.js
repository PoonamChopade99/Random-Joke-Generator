const jokeText = document.querySelector(".joke-text");
const newJokeBtn = document.querySelector(".new-joke-btn");

newJokeBtn.addEventListener("click", getJoke);
getJoke();

function getJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())

    .then((jokeData) => {
      console.log(jokeData);
      const joke = jokeData.joke;
      jokeText.innerText = joke;
    });
}
