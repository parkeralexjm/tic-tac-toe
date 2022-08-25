

const gameAdmin = (() => {
  // Create an array to store the gamestate
  var gameState = ["", "", "", "", "", "", "", "", ""];
  var playerSymbol = "x";
  // Create a function that will create and display the board
  const createBoard = (playerSelection) => {
    // Set default playerSelection
    playerSelection = (typeof playerSelection !== 'undefined') ? playerSelection : "x";
    // Clear any previous content from the game board and reset
    var element = document.getElementById("boardContainer");
    element.innerHTML = "";
    gameState = ["", "", "", "", "", "", "", "", ""];
    playerSymbol = playerSelection;
    // Create 9 cells for the game board inside the boardContainer div
    for (let i = 1; i <= 9; i++) {
      var cell = document.createElement("div");
      var pTag = document.createElement("p");
      // Give each cell the class boardCell and an id from 1-9
      cell.className = "boardCell";
      cell.id = `${i}`;
      // Add an event listener to each cell to add the player's symbol on click
      // then remove the listener
      cell.addEventListener('click', function AddSymbol() {
        if (gameState[i - 1] == ""){
          if (playerSymbol == "x") {
            console.log(`cell ${i} is now x`)
            gameState[i - 1] = "x";
            this.removeEventListener('click', AddSymbol);
            playerSymbol = "o";
            gameAdmin.updateState();
          } else { 
            console.log(`cell ${i} is now o`);
            gameState[i - 1] = "o";
            this.removeEventListener('click', AddSymbol);
            playerSymbol = "x";
            gameAdmin.updateState();
          }
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

gameAdmin.createBoard();
//newGame.updateState();
