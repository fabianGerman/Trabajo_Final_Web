import { Game } from "./scenes/game.js";

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
var game = new Phaser.Game(config);