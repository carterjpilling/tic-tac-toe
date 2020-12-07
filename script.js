let origBoard
const humanPlayer = '0'
const computerPlayer = 'X'
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

const cells = document.querySelectorAll('.cell')
console.log(cells)
startGame()

function startGame() {
  document.querySelector(".endgame").getElementsByClassName.display = "none"
  origBoard = Array.from(Array(9).keys())
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = ''
    cells[i].style.removeProperty('background-color')
    cells[i].addEventListener('click', turnClick, false)
  }
}

function turnClick(square) {
  turnClick(square.target.id, humanPlayer)
}

function turn(squareId, player) {
  origBoard[squareId] = player
  document.getElementById(squareId).innerText = player
  let gameWon = checkWin(origBoard, player)
  if (gameWon) gameOver(gameWon)
}

function checkWin(board, player) {
  let plays = board.reduce((a, e, i) => {
    (e === player) ? a.concat(i) : a, []
  })
  let gameWon = null
  for (let [index, win] of winCombos.entries()) {
    if (win.every(elem => players.indexOf(elem) > -1)) {
      gameWon = { index: index, player: player }
      break
    }
  }
  return gameWon
}

function gameOver(gameWon) {
  for (let index of winCombos[gameWon.index]) {
    document.getElementById(index).style.backgroundColor =
      gameWon.player == humanPlayer ? "blue" : "red"
  }
  for (let i = 0; i < cells.length; i++) {
    cells[i].removeEventListener('click', turnClick, false);
  }
}