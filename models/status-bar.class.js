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
    this.coinsPercentage = 0;
    this.bottlesPercentage = 0;
    this.setHealthPercentage(100);
    this.setCoinsPercentage(0);
    this.setBottlesPercentage(0);
  }

  setHealthPercentage(percentage) {
    this.healthPercentage = percentage;
    let path = this.IMAGES[this.resolveHealthImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveHealthImageIndex() {
    if (this.healthPercentage == 100) {
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

  setCoinsPercentage(percentage) {
    this.coinsPercentage = percentage;
    let path = this.IMAGES[this.resolveCoinsImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveCoinsImageIndex() {
    if (this.coinsPercentage == 100) {
      return 0;
    } else if (this.coinsPercentage > 80) {
      return 1;
    } else if (this.coinsPercentage > 60) {
      return 2;
    } else if (this.coinsPercentage > 40) {
      return 3;
    } else if (this.coinsPercentage > 20) {
      return 4;
    } else {
      return 5;
    }
  }

  setBottlesPercentage(percentage) {
    this.bottlesPercentage = percentage;
    let path = this.IMAGES[this.resolveBottlesImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveBottlesImageIndex() {
    if (this.bottlesPercentage == 100) {
      return 0;
    } else if (this.bottlesPercentage > 80) {
      return 1;
    } else if (this.bottlesPercentage > 60) {
      return 2;
    } else if (this.bottlesPercentage > 40) {
      return 3;
    } else if (this.bottlesPercentage > 20) {
      return 4;
    } else {
      return 5;
    }
  }

  setHealthEndbossPercentage(percentage) {
    this.healthEndbossPercentage = percentage;
    let path = this.IMAGES[this.resolveEndbossHealthImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveEndbossHealthImageIndex() {
    if (this.healthPercentage == 100) {
      return 5;
    } else if (this.healthEndbossPercentage > 80) {
      return 4;
    } else if (this.healthEndbossPercentage > 60) {
      return 3;
    } else if (this.healthEndbossPercentage > 40) {
      return 2;
    } else if (this.healthEndbossPercentage > 20) {
      return 1;
    } else {
      return 0;
    }
  }

  addPoints(points) {
    this.coinsPercentage += points;
    if (this.coinsPercentage > 100) {
      this.coinsPercentage = 100;
    }
    this.setCoinsPercentage(this.coinsPercentage);
  }

  addBottlesPoints(points) {
    this.bottlesPercentage += points;
    if (this.bottlesPercentage > 100) {
      this.bottlesPercentage = 100;
    }
    this.setBottlesPercentage(this.bottlesPercentage);
  }
}
