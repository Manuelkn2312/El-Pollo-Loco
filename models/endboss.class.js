class Endboss extends MovableObject {
  height = 410;
  width = 260;
  y = 50;
  energy = 100;
  isDead = false;

  IMAGES_WALKING = [
    "img/4_enemie_boss_chicken/1_walk/G1.png",
    "img/4_enemie_boss_chicken/1_walk/G2.png",
    "img/4_enemie_boss_chicken/1_walk/G3.png",
    "img/4_enemie_boss_chicken/1_walk/G4.png",
  ];

  IMAGES_DEAD = [
    "img/4_enemie_boss_chicken/5_dead/G24.png",
    "img/4_enemie_boss_chicken/5_dead/G25.png",
    "img/4_enemie_boss_chicken/5_dead/G26.png",
  ];

  IMAGES_HURT = [
    "img/4_enemie_boss_chicken/4_hurt/G21.png",
    "img/4_enemie_boss_chicken/4_hurt/G22.png",
    "img/4_enemie_boss_chicken/4_hurt/G23.png",
  ];

  constructor() {
    super().loadImage(this.IMAGES_WALKING[0]);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 2300;
    this.animate();
  }

  hurt() {
    this.loadImages(this.IMAGES_HURT);
    this.playAnimation(this.IMAGES_HURT, () => {
      this.loadImages(this.IMAGES_WALKING);
      this.animate();
    });
  }

  collide(bottle) {
    if (bottle instanceof ThorableObject) {
      this.energy -= 20;
      if (this.energy <= 0 && !this.isDead) {
        this.isDead = true;
        this.dead();
      } else {
        this.hurt();
      }
    }
  }

  animate() {
    this.enbossMovingId = setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 200);

    this.moveLeftIntervalId = setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);

    this.movingIntervalId = setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
      if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT);
      }
    }, 100);
  }

  dead() {
    this.deadIntervalId = setInterval(() => {
      this.playAnimation(this.IMAGES_DEAD);
    }, 150);

    clearInterval(this.enbossMovingId);
    clearInterval(this.moveLeftIntervalId);
    clearInterval(this.movingIntervalId);
  }
}
