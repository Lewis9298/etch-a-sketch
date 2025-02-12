const container = document.querySelector("#container");
const changeGrid = document.querySelector(".changeGrid");
const box = document.querySelector(".box");

function creategrid16() {
  for (let row = 0; row < 16; row++) {
    for (let column = 0; column < 16; column++) {
      const box = document.createElement("div");
      box.classList.add("box");
      container.append(box);
    }
  }
}

creategrid16();

function paint() {
  let colors = ["red", "blue", "yellow"];
  const boxes = document.querySelectorAll(".box");
  console.log(boxes);
  for (let box of boxes) {
    box.addEventListener("mouseover", function () {
      box.style.backgroundColor =
        "#" +
        Math.floor(Math.random() * 16777216)
          .toString(16)
          .padStart(6, 0);
    });
  }
}

function alterGrid() {
  changeGrid.addEventListener("click", function () {
    let newGrid = 0;
    while (newGrid > 100 || newGrid < 1) {
      newGrid = prompt("how many boxes do you want?");
    }
    container.innerHTML = "";
    let newSize = 688 / newGrid - 2 + "px";
    for (let row = 0; row < newGrid; row++) {
      for (let column = 0; column < newGrid; column++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = newSize;
        box.style.height = newSize;
        container.append(box);
      }
    }
    paint();
  });
}

alterGrid();
paint();
