import { Game } from "./scenes/game.js";
/*
const config = {
    title: 'Juego Phaser',
    pixelArt: true, //remarca los pixeles de la imagen'
    type: Phaser.Auto, //WEBGL CANVAS O AUTOMATICO
    width: 800,
    height:500,
    parent: 'game',//id del contener
    //backgroundColor: '#34495E',//fondo del lienzo
    //informacion de la consola
    
    physics:{
        default: "arcade",
        arcade:{
            gravity: {
                y: 0, //gravedad de los objetos
            },
            debug: false,
        },
    },
    //escenas del juego
    scene: [Game]
};

//crea la instancia del juego
var game = new Phaser.Game(config);*/
const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 1000,
    height: 600,
    backgroundColor: "#000",
    physics: {
        default: 'arcade',
    },
    scene: [Game]
}

var game = new Phaser.Game(config);
//new Phaser.Game(config);