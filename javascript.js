const newGame = (() => {
  // Create an array to store the gamestate
  var gameState = ["x", "x", "x", "o", "o", "o", "x", "o", "x"];
  // Create a function that will create and display the board
  const createBoard = () => {
    var element = document.getElementById("boardContainer");
    // Create 9 cells for the game board inside the boardContainer div
    for (let i = 1; i <= 9; i++) {
      var cell = document.createElement("div");
      // Give each cell the class boardCell and an id from 1-9
      cell.className = "boardCell";
      cell.id = `${i}`;
      element.appendChild(cell);
    }
  };
  const updateState = () => {
    for (let i = 1; i <= 10; i++) {
      var element = document.getElementById(i);
      const tag = document.createElement("p");
      const text = document.createTextNode(gameState[i - 1]);
      tag.appendChild(text);
      element.appendChild(tag);
    }
  };
  return {
    createBoard,
    updateState
  };
})();

newGame.createBoard();
newGame.updateState();
