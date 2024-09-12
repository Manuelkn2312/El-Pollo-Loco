class Bottles extends MovableObject {
  constructor(path, x, y) {
    super().loadImage(path);
    this.width = 70;
    this.height = 80;
    this.x = x;
    this.y = y;
  }
}
