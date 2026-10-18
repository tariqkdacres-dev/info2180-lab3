// Exercise 1 - Layout the board
window.addEventListener('DOMContentLoaded', () => {
    // Select the board container and all inner divs (the squares)
    const board = document.getElementById('board');
    const squares = board.querySelectorAll('div');

    // Add the "square" class to each div in the grid
    squares.forEach(square => {
        square.classList.add('square');
    });
});