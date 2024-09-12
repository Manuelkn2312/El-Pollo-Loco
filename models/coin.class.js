class Coin extends MovableObject {
  width = 70;
  height = 80;

  constructor(path, x, y) {
    super().loadImage(path);
    this.x = x;
    this.y = y;
  }
}
