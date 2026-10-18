// Exercises 1, 2, 3, & 4 Implementation
window.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const squares = board.querySelectorAll('div');
    const statusDiv = document.getElementById('status');

    let currentPlayer = 'X';
    let gameState = Array(9).fill('');
    let gameActive = true;

    // All possible 3-in-a-row combinations
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    squares.forEach((square, index) => {
        // Exercise 1: Add initial square class
        square.classList.add('square');

        // Exercise 3: Add hover style on mouseover, remove on mouseleave
        square.addEventListener('mouseover', () => {
            if (gameActive && gameState[index] === '') {
                square.classList.add('hover');
            }
        });

        square.addEventListener('mouseleave', () => {
            square.classList.remove('hover');
        });

        // Exercise 2 & 4: Handle clicks and win checking
        square.addEventListener('click', () => {
            if (!gameActive || gameState[index] !== '') {
                return;
            }

            gameState[index] = currentPlayer;
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);
            square.classList.remove('hover');

            // Exercise 4: Check if current move won the game
            if (checkWin()) {
                statusDiv.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                statusDiv.classList.add('you-won');
                gameActive = false;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });

    // Helper function to check winning combinations
    function checkWin() {
        return winningCombinations.some(combination => {
            return combination.every(index => gameState[index] === currentPlayer);
        });
    }
});