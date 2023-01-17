//wenn auf button geclickt, füge class="button-dark" zu body und button hinzu

const button = document.querySelector("button");

function lightswitch() {
  button.classList.toggle("button-dark");
  document.body.classList.toggle("button-dark");
}

button.addEventListener("click", lightswitch);
