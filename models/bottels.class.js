/**
 * Class representing a bottle, which is a type of MovableObject.
 * @extends MovableObject
 */
class Bottles extends MovableObject {
  /**
   * Create a bottle.
   * @param {string} path - The path to the bottle's image.
   * @param {number} x - The x-coordinate of the bottle.
   * @param {number} y - The y-coordinate of the bottle.
   */
  constructor(path, x, y) {
    super().loadImage(path);
    /**
     * The width of the bottle.
     * @type {number}
     */
    this.width = 70;

    /**
     * The height of the bottle.
     * @type {number}
     */
    this.height = 80;

    /**
     * The x-coordinate of the bottle.
     * @type {number}
     */
    this.x = x;

    /**
     * The y-coordinate of the bottle.
     * @type {number}
     */
    this.y = y;
  }
}
