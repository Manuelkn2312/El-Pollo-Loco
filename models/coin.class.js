/**
 * Represents a coin in the game, which is a movable object.
 * @extends MovableObject
 */
class Coin extends MovableObject {
  /**
   * The width of the coin.
   * @type {number}
   */
  width = 70;

  /**
   * The height of the coin.
   * @type {number}
   */
  height = 80;

  /**
   * Creates a new Coin instance.
   * @param {string} path - The path to the image of the coin.
   * @param {number} x - The x-coordinate of the coin.
   * @param {number} y - The y-coordinate of the coin.
   */
  constructor(path, x, y) {
    super().loadImage(path);
    /**
     * The x-coordinate of the coin.
     * @type {number}
     */
    this.x = x;

    /**
     * The y-coordinate of the coin.
     * @type {number}
     */
    this.y = y;
  }
}
