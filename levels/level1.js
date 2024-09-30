const level1 = new Level(
  [new Chicken(375), new Chicken(490), new Chicken(590), new Chicken(650), new Endboss()],

  [new Cloud()],

  [
    new BackgroundObject("img/5_background/layers/air.png", -719),
    new BackgroundObject("img/5_background/layers/3_third_layer/2.png", -719),
    new BackgroundObject("img/5_background/layers/2_second_layer/2.png", -719),
    new BackgroundObject("img/5_background/layers/1_first_layer/2.png", -719),

    new BackgroundObject("img/5_background/layers/air.png", 0),
    new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 0),
    new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 0),
    new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 0),
    new BackgroundObject("img/5_background/layers/air.png", 719),
    new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719),
    new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719),
    new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719),

    new BackgroundObject("img/5_background/layers/air.png", 719 * 2),
    new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 719 * 2),
    new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 719 * 2),
    new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 719 * 2),
    new BackgroundObject("img/5_background/layers/air.png", 719 * 3),
    new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719 * 3),
    new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719 * 3),
    new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719 * 3),
  ],

  [
    new Coin("img/8_coin/coin_2.png", 755, 255),
    new Coin("img/8_coin/coin_2.png", 1655, 155),
    new Coin("img/8_coin/coin_2.png", 1255, 155),
    new Coin("img/8_coin/coin_2.png", 1455, 155),
    new Coin("img/8_coin/coin_2.png", 855, 155),
    new Coin("img/8_coin/coin_2.png", 2055, 155),
    new Coin("img/8_coin/coin_2.png", 1955, 155),
    new Coin("img/8_coin/coin_2.png", 555, 155),
    new Coin("img/8_coin/coin_2.png", 955, 155),
    new Coin("img/8_coin/coin_2.png", 1755, 155),
  ],

  [
    new Bottles("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png", 240, 220),
    new Bottles("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png", 340, 240),
    new Bottles("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png", 540, 140),
    new Bottles("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png", 740, 240),
    new Bottles("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png", 940, 140),
    new Bottles("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png", 1140, 230),
    new Bottles("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png", 1340, 140),
    new Bottles("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png", 1640, 250),
    new Bottles("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png", 1840, 300),
    new Bottles("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png", 2040, 280),
  ]
);
