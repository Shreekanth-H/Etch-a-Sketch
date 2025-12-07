const container = document.getElementById("container");
const resetBtn = document.getElementById("resetBtn");

function createGrid(size) {
  // Clear existing squares
  container.innerHTML = "";

  // Calculate square size
  const squareSize = 960 / size;

  // Create divs
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Hover color
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }
}

// Default grid
createGrid(16);

// Button click → ask for size
resetBtn.addEventListener("click", () => {
  let size = prompt("Enter grid size (maximum 100):");

  if (size === null) return; // user cancelled

  size = Number(size);

  if (isNaN(size) || size < 1 || size > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }

  createGrid(size);
});
