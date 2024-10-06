class StatusBar extends DrawableObject {
  constructor(path, x, y) {
    super();
    this.IMAGES = path;
    this.loadImages(this.IMAGES);
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 50;
    this.healthPercentage = 100;
    this.coinsAndBottlesPercentage = 0;
    this.coinsPercentage = 0;
    this.bottlesPercentage = 0;
    this.setHealthPercentage(100);
    this.setCoinsAndBottlesPercentage(0);
  }

  setHealthPercentage(percentage) {
    this.healthPercentage = percentage;
    let path = this.IMAGES[this.resolveHealthImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveHealthImageIndex() {
    if (this.healthPercentage === 100) {
      return 5;
    } else if (this.healthPercentage > 80) {
      return 4;
    } else if (this.healthPercentage > 60) {
      return 3;
    } else if (this.healthPercentage > 40) {
      return 2;
    } else if (this.healthPercentage > 20) {
      return 1;
    } else {
      return 0;
    }
  }

  setCoinsAndBottlesPercentage(percentage) {
    this.coinsAndBottlesPercentage = percentage;
    this.img = this.imageCache[this.IMAGES[this.resolveCoinsAndBottlesImageIndex()]];
  }

  resolveCoinsAndBottlesImageIndex() {
    if (this.coinsAndBottlesPercentage === 100) {
      return 0;
    } else if (this.coinsAndBottlesPercentage >= 80) {
      return 1;
    } else if (this.coinsAndBottlesPercentage >= 60) {
      return 2;
    } else if (this.coinsAndBottlesPercentage >= 40) {
      return 3;
    } else if (this.coinsAndBottlesPercentage >= 20) {
      return 4;
    } else {
      return 5;
    }
  }

  addPoints(points) {
    this.coinsPercentage += points;
    if (this.coinsPercentage > 100) {
      this.coinsPercentage = 100;
    }
    this.setCoinsAndBottlesPercentage(this.coinsPercentage);
  }

  addBottlesPoints(points) {
    this.bottlesPercentage += points;
    if (this.bottlesPercentage > 100) {
      this.bottlesPercentage = 100;
    }
    this.setCoinsAndBottlesPercentage(this.bottlesPercentage);
  }
}
