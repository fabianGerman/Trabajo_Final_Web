import { PhaserConstructor } from '../components/phase-constructor.js'

export class Game extends Phaser.Scene{
    constructor(){
        super({key: 'game'});
    }

    init(){
        this.PhaserConstructor = new PhaserConstructor(this);
        this.score = 0;
    }

    preload(){
        this.load.image('cheems','../../../assets/chemsD.png');
        this.load.image('ground', '../../../assets/ground.png');
    }

    craete(){
        //chemms
        this.cheems = this.physics.add.image(300,300,'cheems');
        this.cheems.setData('cheems', true);
        this.cheems.setCollideWorldBounds(true);//evita que el objeto salga del area del juego
        this.cheems.setBounce(0,1)//configura la fuerza del rebote
        this.cheems.setVelocity(100,10)//asignavelocidad para los ejes x,y
        this.cheems.body.gravity.y= 4000;

        //plataforma
        this.plataformaUp = this.
    }
}