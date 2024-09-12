/**
 * Represents a level in the game.
 *
 * @class
 * @param {Array} enemies 
 * @param {Array} clouds 
 * @param {Array} backgroundObjects 
 * @param {Array} coin 
 * @param {Array} bottles 
 */
class Level {
  /**
   *
   * @param {Array} enemies 
   * @param {Array} clouds 
   * @param {Array} backgroundObjects 
   * @param {Array} coin
   * @param {Array} bottles 
   */
  constructor(enemies, clouds, backgroundObjects, coin, bottles) {
    /**
     * @type {Array}
     * @description 
     */
    this.enemies = enemies;

    /**
     * @type {Array}
     * @description 
     */
    this.clouds = clouds;

    /**
     * @type {Array}
     * @description
     */
    this.backgroundObjects = backgroundObjects;

    /**
     * @type {Array}
     * @description 
     */
    this.coin = coin;

    /**
     * @type {Array}
     * @description 
     */
    this.bottles = bottles;

    /**
     * @type {number}
     * @description 
     */
    this.level_end_x = 2200;
  }
}
