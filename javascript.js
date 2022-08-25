

const newGame = (() => {
  // Create an array to store the gamestate
  var gameState = ["x", "x", "x", "x", "x", "x", "x", "x", "x"];
  var playerSymbol = "o";
  // Create a function that will create and display the board
  const createBoard = () => {
    var element = document.getElementById("boardContainer");
    // Create 9 cells for the game board inside the boardContainer div
    for (let i = 1; i <= 9; i++) {
      var cell = document.createElement("div");
      var pTag = document.createElement("p");
      // Give each cell the class boardCell and an id from 1-9
      cell.className = "boardCell";
      cell.id = `${i}`;
      cell.addEventListener('click', function() {
        if (playerSymbol == "x") {
          console.log(`cell ${i} is now x`)
          gameState[i - 1] = "x";
          newGame.updateState()
        } else { 
          console.log(`cell ${i} is now o`);
          gameState[i - 1] = "o";
          newGame.updateState()
        }
      });
      element.appendChild(cell);
      cell.appendChild(pTag);
    }
  };
  const updateState = () => {
    for (let i = 1; i <= 9; i++) {
      // For numbers 1-9 get the element, add a p tag and update it with the character
      // stored in the gameState array that matches the id
      var element = document.getElementById(i).firstChild;
      element.innerText = gameState[i - 1];
    }
  };
  return {
    createBoard,
    updateState
  };
})();

newGame.createBoard();
//newGame.updateState();
