// INFO2180 Lab 3 - Tic Tac Toe Logic (Exercises 1 - 5)
window.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const squares = board.querySelectorAll('div');
    const statusDiv = document.getElementById('status');
    const newGameBtn = document.querySelector('.btn');

    let currentPlayer = 'X';
    let gameState = Array(9).fill('');
    let gameActive = true;

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    // Exercise 1: Layout board & event listeners
    squares.forEach((square, index) => {
        square.classList.add('square');

        // Exercise 3: Hover effect
        square.addEventListener('mouseover', () => {
            if (gameActive && gameState[index] === '') {
                square.classList.add('hover');
            }
        });

        square.addEventListener('mouseleave', () => {
            square.classList.remove('hover');
        });

        // Exercise 2 & 4: Square clicks and win logic
        square.addEventListener('click', () => {
            if (!gameActive || gameState[index] !== '') {
                return;
            }

            gameState[index] = currentPlayer;
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);
            square.classList.remove('hover');

            if (checkWin()) {
                statusDiv.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                statusDiv.classList.add('you-won');
                gameActive = false;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });

    // Exercise 4 helper
    function checkWin() {
        return winningCombinations.some(combination => {
            return combination.every(index => gameState[index] === currentPlayer);
        });
    }

    // Exercise 5: Reset board state on New Game button click
    newGameBtn.addEventListener('click', () => {
        gameState = Array(9).fill('');
        currentPlayer = 'X';
        gameActive = true;

        statusDiv.textContent = 'Move your mouse over a square and click to play an X or an O.';
        statusDiv.classList.remove('you-won');

        squares.forEach(square => {
            square.textContent = '';
            square.classList.remove('X', 'O', 'hover');
        });
    });
});