var mouseDown = false;

window.addEventListener("mousedown", () => { mouseDown = true });
window.addEventListener("mouseup", () => { mouseDown = false });

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Content Loaded");

    createSquares(16);
});

const clearSquares = () => {
    const container = document.getElementById("container");
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => container.removeChild(square));
}

const createSquares = (r) => {
    const container = document.getElementById("container");

    // Create rxr grid of squares
    for (i = 0; i < r; i++) {
        for (j = 0; j < r; j++) {
            const square = document.createElement("div");
            square.setAttribute("id", `square-${i}-${j}`);
            square.classList.add("square");

            // Set width and height of squares
            square.style.maxWidth = `${1 / r * 100}%`;
            square.style.maxHeight = `${1 / r * 100}%`;

            // Add hover mouse events
            square.addEventListener('mouseover', handleSquareEnter);
            square.addEventListener('mousedown', handleSquareEnter);

            // Add squares container grid
            container.appendChild(square);
        }
    }
}

const setSquares = () => {
    let r = prompt("Please input how many rows and columns for the grid (max: 100):");
    if (r > 100) {
        r = 100;
    }
    clearSquares();
    createSquares(r);
}

const handleSquareEnter = (event) => {
    event.preventDefault();
    if (mouseDown) {
        const square = event.target;
        square.classList.add("over");
    }
    console.log(mouseDown);
}

const handleSquareLeave = (event) => {
    const square = event.target;
    square.classList.remove("over");
} 