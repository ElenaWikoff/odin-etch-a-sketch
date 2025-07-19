
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Content Loaded");

    const container = document.getElementById("container");

    for (i = 0; i < 16; i++) {
        for (j = 0; j < 16; j++) {
            const square = document.createElement("div");
            square.setAttribute("id", `square-${i}-${j}`);
            square.classList.add("square");

            // Add hover mouse events
            square.addEventListener('mouseenter', handleSquareEnter);
            square.addEventListener('mouseleave', handleSquareLeave);

            // Add squares container grid
            container.appendChild(square);
        }
    }
});

const handleSquareEnter = (event) => {
    const square = event.target;
    square.classList.add("over");
}

const handleSquareLeave = (event) => {
    const square = event.target;
    square.classList.remove("over");
} 