function createGrid(size) {
  const elementSize = `calc(${100 / size}% - 2px)`;
  const container = document.getElementById('container');
  for (let row = 0; row < size; row++) {
    for (let column = 0; column < size; column++) {
        let square = document.createElement("div");
        square.style.width = elementSize;
        square.style.height = elementSize;
        container.appendChild(square);

    }
  }
}

document.querySelectorAll("div").forEach(div => {
    div.addEventListener("mouseover", function(event) {
        event.target.classList.add("red");
    });
});

let number = prompt("How many rows do you want?", "16");
let text;
if (number == null || number == "") {
  text = "User cancelled the prompt.";
} else {
  createGrid(Number(number));
}
