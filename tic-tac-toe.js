// Exercises 1, 2, & 3 Implementation
window.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const squares = board.querySelectorAll('div');

    let currentPlayer = 'X';
    const gameState = Array(9).fill('');

    squares.forEach((square, index) => {
        // Exercise 1: Add initial square class
        square.classList.add('square');

        // Exercise 3: Add hover style on mouseover, remove on mouseleave
        square.addEventListener('mouseover', () => {
            if (gameState[index] === '') {
                square.classList.add('hover');
            }
        });

        square.addEventListener('mouseleave', () => {
            square.classList.remove('hover');
        });

        // Exercise 2: Alternate placing X and O on click
        square.addEventListener('click', () => {
            if (gameState[index] === '') {
                gameState[index] = currentPlayer;
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                
                // Remove hover class immediately when square is selected
                square.classList.remove('hover');

                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });
});