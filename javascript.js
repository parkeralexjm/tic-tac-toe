const gameAdmin = (() => {
  // Initialise the gamestate
  var gameState = ["", "", "", "", "", "", "", "", ""];
  // Initialise the symbol the player will use
  var playerSymbol = "x";
  // Global selection for element that contains the board
  var element = document.getElementById("boardContainer");
  
  // Function that will clear the board
  const clearBoard = () => {
    element.innerHTML = "";
    gameState = ["", "", "", "", "", "", "", "", ""];
  }
  
  // Function that will display a winning message
  const winningDisplay = (symbol) => {
    var win = document.createElement("span");
    win.className = "boardCongratulations";
    if (symbol == 'x'){
      win.innerHTML = 'Congratulations, X is the winner!';
    } else if (symbol == 'o'){
      win.innerHTML = 'Congratulations, X is the winner!';
    }
    element.appendChild(win);
  }

  // Function that will display a draw message
  const drawDisplay = () => {
    var draw = document.createElement("span");
    draw.className = "boardCongratulations";
    draw.innerHTML = "Too bad, nobody is a winner here!";
    element.appendChild(draw);
  }

  // Function that updates the turn indicator
  // Update the player indicator
  const updateIndicator = () => {
  var player = document.getElementById("currentPlayer")
    if (playerSymbol == "x") {
      player.innerHTML = "It is X's turn";
    } else if (playerSymbol == "o") {
      player.innerHTML = "It is O's turn";
    }
  };

  // Function that will create and display the board
  const createBoard = (playerSelection) => {
    // Set default playerSelection
    playerSelection = (typeof playerSelection !== 'undefined') ? playerSelection : "x";
    // Clear any previous content from the game board and reset
    clearBoard();
    playerSymbol = playerSelection;
    //gameAdmin.updateState();
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
            gameState[i - 1] = "x";
            playerSymbol = "o";
            gameAdmin.updateState();
          } else { 
            gameState[i - 1] = "o";
            playerSymbol = "x";
            gameAdmin.updateState();
          }
        }
      }, {once: true});
      element.appendChild(cell);
      cell.appendChild(pTag);
      updateIndicator();
    }
  };
  const updateState = () => {
    for (let i = 1; i <= 9; i++) {
      // For numbers 1-9 get the element, add a p tag and update it with the character
      // stored in the gameState array that matches the id
      var element = document.getElementById(i).firstChild;
      // Display icons for the array symbols
      if (gameState[i - 1] == "x") {
        element.innerHTML = "X";
      } else if (gameState[i - 1] == "o") {
        element.innerHTML = "O";
      }
    }

    updateIndicator();
    // Check if there is a winning game state by comparing the row, column or diagonal
    // --Could be improved--
       // Row 1 
    if ((gameState[0] == 'x' && gameState[1] == 'x' && gameState[2] == 'x') || 
       // Row 2 
        (gameState[3] == 'x' && gameState[4] == 'x' && gameState[5] == 'x') ||
       // Row 3   
        (gameState[6] == 'x' && gameState[7] == 'x' && gameState[8] == 'x') ||
       // Column 1 
        (gameState[0] == 'x' && gameState[3] == 'x' && gameState[6] == 'x') ||
       // Column 2 
        (gameState[1] == 'x' && gameState[4] == 'x' && gameState[7] == 'x') ||
       // Column 3
        (gameState[2] == 'x' && gameState[5] == 'x' && gameState[8] == 'x') ||
       // Diagonal 1
        (gameState[0] == 'x' && gameState[4] == 'x' && gameState[8] == 'x') ||
       // Diagonal 2
        (gameState[2] == 'x' && gameState[4] == 'x' && gameState[6] == 'x')) {
          // There is a winning row x clear the state and display a winning message
          //clearBoard();
          winningDisplay('x');

        } else if ((gameState[0] == 'o' && gameState[1] == 'o' && gameState[2] == 'o') || 
        // Row 2 
         (gameState[3] == 'o' && gameState[4] == 'o' && gameState[5] == 'o') ||
        // Row 3   
         (gameState[6] == 'o' && gameState[7] == 'o' && gameState[8] == 'o') ||
        // Column 1 
         (gameState[0] == 'o' && gameState[3] == 'o' && gameState[6] == 'o') ||
        // Column 2 
         (gameState[1] == 'o' && gameState[4] == 'o' && gameState[7] == 'o') ||
        // Column 3
         (gameState[2] == 'o' && gameState[5] == 'o' && gameState[8] == 'o') ||
        // Diagonal 1
         (gameState[0] == 'o' && gameState[4] == 'o' && gameState[8] == 'o') ||
        // Diagonal 2
         (gameState[2] == 'o' && gameState[4] == 'o' && gameState[6] == 'o')) {
          // There is a winning row x clear the state and display a winning message
          //clearBoard();
          winningDisplay('o');
         } else if (gameState.includes("") == false) {
          drawDisplay();
         }
  };
  return {
    createBoard,
    updateState,
    clearBoard,
    winningDisplay,
    drawDisplay,
    updateIndicator,
  };
})();

//gameAdmin.createBoard();
//newGame.updateState();
