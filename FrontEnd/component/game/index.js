import { Game } from './scenes/game.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 500,
    scene: [Game],
    physics:{
        defatul: 'arcade',
        arcade:{
            debug: false
        }
    }
}
var game = new Phaser.Game(config);