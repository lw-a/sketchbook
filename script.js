let padSize = 500;

function makeGrid(size) {
    
    let cellSize = padSize / size;

    for (var i = 0; i < size; i++) {
        const row = document.createElement("div");
        for (var j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.cssText = `height: ${cellSize}px; width: ${cellSize}px; background: red;`;
            row.appendChild(cell);
        }
        document.getElementById("pad").appendChild(row);

    }
}

makeGrid(16);

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
        cell.style.background = "black";
    })
})
