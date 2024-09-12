class DrawableObject {
  constructor() {
    this.x = 120;
    this.y = 280;
    this.height = 150;
    this.width = 100;
    this.img = null;
    this.imageCache = {};
    this.currentImage = 0;
  }

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
