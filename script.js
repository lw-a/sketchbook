let padSize = 500;
let cellColour = "black";
makeGrid(32);



let slider = document.getElementById("slider");
let output = document.getElementById("sliderValue");
slider.oninput = function() {
    output.innerText = `${this.value}x${this.value}`;
}
slider.onchange = function() {
  makeGrid(parseInt(output.textContent));
}

function deleteGrid() {
  let pad = document.getElementById("pad");
  let child = pad.lastElementChild;
  while (child) {
    pad.removeChild(child);
    child = pad.lastElementChild;
  }
}

function makeGrid(size) {
  
    deleteGrid()
    
    let cellSize = (padSize / size);

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
  drawing(cellColour);
} 

const rainbowButton = document.getElementById("rainbowButton");
rainbowButton.addEventListener('click', () => {
  cellColour = "rainbow";
  drawing(cellColour);
});

function randomColour () {
  let maxHex = 0xFFFFFF;
  let randomNumber = Math.floor(Math.random() * maxHex);
  randomNumber = randomNumber.toString(16);
  return "#" + randomNumber.padStart(6, 0);
}

let colourPicker = document.getElementById("colourPicker");

// in case user is satisfied with default colour picker value
colourPicker.onclick = function() { 
  cellColour = colourPicker.value;
  drawing(cellColour);
}
colourPicker.oninput = function() {
  cellColour = colourPicker.value;
  drawing(cellColour);
}

let eraser = document.getElementById("eraserButton");

eraser.onclick = function() {
  cellColour = "white";
  drawing(cellColour);
}

let gridButton = document.getElementById("gridButton");
gridButton.addEventListener("click", () => {
  
  toggleGrid();
  
  if (gridButton.innerText === "Grid Off") {
    gridButton.innerText === "Grid On";
  } else {
    gridButton.innerText === "Grid Off";
  }
});

function toggleGrid () {
  alert(gridButton.innerText);
  let cells = document.querySelectorAll(".cell");
  
  if (gridButton.innerText === "Grid On") {
   cells.forEach((cell) => {
     cell.style.border = "none";
   });
    gridButton.innerText = "Grid Off";
      } else {
     cells.forEach((cell) => {
      cell.style.border = "solid";
       cell.style.borderWidth = "0.1px";
   });
    gridButton.innerText = "Grid Off";
      }
}

function drawing (cellColour) {
 const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
       if (cellColour === "rainbow"){
        cell.style.background = randomColour();
      } 
      else {
        cell.style.background = cellColour;
      }
    })
}) 
}


