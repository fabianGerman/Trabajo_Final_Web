import { PhaseConstructor } from '../components/phase-constructor.js';
export class Game extends Phaser.Scene{
    constructor(){
        super({key: 'game'});
    }

    init(){
        this.phaseConstructor = new PhaseConstructor(this);//intancio el constructor
    }

    preload(){
        this.load.image('cheem', '../../assets/image.png');
        this.load.image('plataform','../../assets/groundBottom.png');
        this.load.image('zombie', '../../assets/zombie.png');

    } 
    create(){
        this.physics.world.setBoundsCollision(true,true,true,false);

        this.cheem = this.physics.add.image(50,320,'cheem');
        this.cheem.setData('cheem', true);
        this.cheem.setCollideWorldBounds(true);
        this.cheem.setBounce(0.1);
        this.cheem.body.gravity.y = 4000;

        this.phaseConstructor.create();//llamo a la escena del constructor
        
    }

    
}

