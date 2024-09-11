// class Coin extends MovableObject {
//     IMAGES_WALKING = [
//         'img/8_coin/coin_1.png',
//         'img/8_coin/coin_2.png'
//     ];

//     constructor(statusBar) {
//         super().loadImage(this.IMAGES_WALKING[0]);
//         this.loadImages(this.IMAGES_WALKING);
//         this.x = 400 + Math.random() * 1800;  
//         this.y = 100 + Math.random() * 120;   
//         this.width = 150;
//         this.height = 150;
//         this.statusBar = statusBar; 
//         this.coinsCollected = 0;  
//         this.animate();
//     }

//     animate() {
//         setInterval(() => {
//             this.playAnimation(this.IMAGES_WALKING);  
//         }, 200);
//     }

//     collectCoin() {
//         this.coinsCollected++; 
//         this.statusBar.setPercentageCoinBarAmount(this.coinsCollected);  
//     }
// }
