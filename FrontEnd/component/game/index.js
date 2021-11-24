import { Game } from "./scenes/game.js";
const config = {
    type: Phaser.AUTO,//WEBGL CANVAS O AUTOMATICO
    pixelArt: true, //remarca los pixeles de la imagen'
    parent: 'game',//id del conteiner
    width: 800,
    height: 600,
    backgroundColor: "#000",//fondo del lienzo
    physics: {
        default: 'arcade',
    },
    scene: [Game]
}

var game = new Phaser.Game(config);
//new Phaser.Game(config);