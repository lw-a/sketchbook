let padSize = 500;

let colourPicker = document.getElementById("colourPicker");
let cellColour = colourPicker.value;
drawing(cellColour);

makeGrid(32);

colourPicker.oninput = function () {
  cellColour = colourPicker.value;
  drawing(cellColour);
};

// In case the user is satisfied with the previous they had chosen after using rainbow or eraser
colourPicker.onclick = function () {
  cellColour = colourPicker.value;
  drawing(cellColour);
};

let slider = document.getElementById("slider");
let output = document.getElementById("sliderValue");
slider.oninput = function () {
  output.innerText = `${this.value} x ${this.value}`;
};
slider.onchange = function () {
  makeGrid(parseInt(output.textContent));
};

function deleteGrid() {
  let pad = document.getElementById("pad");
  let child = pad.lastElementChild;
  while (child) {
    pad.removeChild(child);
    child = pad.lastElementChild;
  }
}

function makeGrid(size) {
  deleteGrid();

  let cellSize = padSize / size;

  for (var i = 0; i < size; i++) {
    const row = document.createElement("div");
    for (var j = 0; j < size; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.cssText = `height: ${cellSize}px; width: ${cellSize}px;`;
      row.appendChild(cell);
    }
    document.getElementById("pad").appendChild(row);
  }

  // Sets pen to previous colour when making a new grid if the user was previously using the eraser/white
  if (cellColour === "white") {
    cellColour = colourPicker.value;
  }
  drawing(cellColour);
}
const rainbowButton = document.getElementById("rainbowButton");
rainbowButton.addEventListener("click", () => {
  cellColour = "rainbow";
  drawing(cellColour);
});

const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", () => {
  makeGrid(parseInt(output.textContent));
});

function randomColour() {
  let maxHex = 0xffffff;
  let randomNumber = Math.floor(Math.random() * maxHex);
  randomNumber = randomNumber.toString(16);
  return "#" + randomNumber.padStart(6, 0);
}

let eraser = document.getElementById("eraserButton");

eraser.onclick = function () {
  cellColour = "white";
  drawing(cellColour);
};

let gridButton = document.getElementById("gridButton");
gridButton.addEventListener("click", () => {
  toggleGrid();

  if (gridButton.innerText === "Grid Off") {
    gridButton.innerText === "Grid On";
  } else {
    gridButton.innerText === "Grid Off";
  }
});

function toggleGrid() {
  let cells = document.querySelectorAll(".cell");

  if (gridButton.innerText === "Grid Off") {
    cells.forEach((cell) => {
      cell.style.border = "none";
    });
    gridButton.innerText = "Grid On";
  } else {
    cells.forEach((cell) => {
      cell.style.border = "solid";
      cell.style.borderWidth = "0.1px";
    });
    gridButton.innerText = "Grid Off";
  }
}

function drawing(cellColour) {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      if (cellColour === "rainbow") {
        cell.style.background = randomColour();
      } else {
        cell.style.background = cellColour;
      }
    });
  });
}
