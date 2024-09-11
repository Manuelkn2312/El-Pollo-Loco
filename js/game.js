let canvas;
let world;
let keyboard = new Keyboard();

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);

  console.log("My Character is", world.character);
}

window.addEventListener("keydown", (e) => {
  if (e.code === "ArrowRight" || e.keyCode === 68) {
    keyboard.RIGHT = true;
  }
  if (e.code === "ArrowLeft"||  e.keyCode === 65) {
    keyboard.LEFT = true;
  }
  if (e.code === "ArrowUp"||  e.keyCode === 87) {
    keyboard.UP = true;
  }
  if (e.code === "Space") {
    keyboard.SPACE = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.code === "ArrowRight" || e.keyCode === 68) {
    keyboard.RIGHT = false;
  }
  if (e.code === "ArrowLeft"||  e.keyCode === 65) {
    keyboard.LEFT = false; 
  }
  if (e.code === "ArrowUp"||  e.keyCode === 87) {
    keyboard.UP = false;
  }
  if (e.code === "Space") {
    keyboard.SPACE = false;
  }
});
