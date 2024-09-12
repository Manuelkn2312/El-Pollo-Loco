class DrawableObject {
  /**
   * 
   *
   * @constructor
   */
  constructor() {
    this.x = 120;
    this.y = 280;
    this.height = 150;
    this.width = 100;
    this.img = null;
    this.imageCache = {};

    this.currentImage = 0;
  }

  /**
   * 
   *
   * @param {string} path 
   */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * 
   * @param {string[]} arr 
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  /**
   * 
   *
   * @param {CanvasRenderingContext2D} ctx 
   */
  /**
   * 
   *
   * @param {CanvasRenderingContext2D} ctx 
   */
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
