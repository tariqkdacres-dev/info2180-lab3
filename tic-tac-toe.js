// Exercise 1 & Exercise 2 Implementation
window.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const squares = board.querySelectorAll('div');

    // Track current player turn and overall game state
    let currentPlayer = 'X';
    const gameState = Array(9).fill('');

    squares.forEach((square, index) => {
        // Exercise 1: Add initial square class
        square.classList.add('square');

        // Exercise 2: Alternate placing X and O on click
        square.addEventListener('click', () => {
            // Check if space is already taken
            if (gameState[index] === '') {
                // Update internal array state
                gameState[index] = currentPlayer;

                // Render symbol and apply styling class ('X' or 'O')
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                // Alternate turn between X and O
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });
});