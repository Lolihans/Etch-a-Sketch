/*request number of boxes
loop for the number of divs 
1 loop per flexbox line z.B. 16x16
add the number as div to container div

no matter how many squares, always same area occupied

when hovered over a square, add color
that stays even not hovered over it anymore

 */

function requestInput() {
  let squareNumber = prompt(`How many squares do you want? (max 100)`)
  return Number(squareNumber)
}

function checkInput(squareNumber) {
  if (Number.isInteger(squareNumber) && squareNumber < 101 && squareNumber > 0) {
    return true
  }
  else {
    alert(`Please enter a Number between 1 and 100`)
    requestInput
  }
}

function addSquares(squareNumber) {
  let container = document.getElementById("container");
  let rowNumber = squareNumber;
  for (let i = 0; i < rowNumber; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    for (let i = 0; i < squareNumber; i++) {
      let newSquare = document.createElement("div");
      row.appendChild(newSquare);
    }
  }
}

function runtime() {
  squareNumber = requestInput();
  if (checkInput(squareNumber)) {
    addSquares(squareNumber);
  }
}

runtime();