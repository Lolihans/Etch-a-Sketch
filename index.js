/*loop for the number of divs 
1 loop per flexbox line z.B. 16x16
add the number as div to container div

no matter how many squares, always same area occupied

when hovered over a square, add color
that stays even not hovered over it anymore

 */

function requestInput() {
  let squareNumber = prompt(`How many squares do you want? (max 100)`)
  return squareNumber
}

function checkInput(squareNumber) {
  if (Number.isInteger(squareNumber) && squareNumber < 101 && squareNumber > 0) {
    return true
  }
  else {
    alert(`Please enter a Number between 0 and 100`)
    requestInput
  }

}

function(squareNumber) {
  while { squareNumber }
}
