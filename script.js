const palette = document.getElementById("palette");

function createSquares() {
  const nbSquaresWidth = 20;
  const nbSquaresHeight = 25;
  const totalSquares = nbSquaresWidth * nbSquaresHeight;

  for (let i = 0; i < totalSquares; i++) {
    const squareEl = document.createElement("div");
    squareEl.classList.add("square");
    palette.style.maxWidth = `${nbSquaresWidth * (15 + 3)}px`;
    palette.appendChild(squareEl);
  }
}

const colors = ["#E67E22", "#8E44AD", "#E74D3C", "#3498DB", "#2ECC71"];

function hoverSquare() {
  const squareEls = document.querySelectorAll(".square");
  squareEls.forEach((sq) => {
    sq.addEventListener("mouseenter", () => {
      const index = Math.floor(Math.random() * colors.length);
      sq.style.transition = "all 0s";
      sq.style.backgroundColor = colors[index];
      sq.style.boxShadow = `${colors[index]} 0px 0px 2px, ${colors[index]} 0px 0px 10px`;
    });
    sq.addEventListener("mouseleave", () => {
      sq.style.transition = "all 2s";
      sq.style.backgroundColor = "#1d1d1d";
      sq.style.boxShadow = "rgb(0 0 0) 0px 0px 2px";
    });
  });
}

createSquares();
hoverSquare();
