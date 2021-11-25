import { PhaseConstructor } from '../components/phase-constructor.js';
export class Game extends Phaser.Scene{
    constructor(){
        super({key: 'game'});
    }

    init(){
        this.phaseConstructor = new PhaseConstructor(this);//intancio el constructor
        this.isFlapMode = false;
    }

    preload(){
        this.load.image('cheem', '../../assets/image.png');
        this.load.image('groundBottom','../../assets/groundBottom.png');
        this.load.image('zombie', '../../assets/zombie.png');
        this.load.image('zombie2', '../../assets/zombie2.png')
        this.load.image('plataform', '../../assets/plataforma.png');
        this.load.image('portalCopt', '../../assets/portalFlap.png');
        this.load.image('nivel1', '../../assets/nivel1.jpeg');
        this.load.image('nivel2', '../../assets/nivel2.jpeg');
        this.load.image('nivel3', '../../assets/nivel3.jpeg');
    } 
    create(){
        //this.cheem = this.physics.add.image(50,320,'cheem');
        /*
        //this.nivel1 = this.physics.add.image(500,465,'nivel1');
        this.nivel1 = this.physics.add.image(500,465,'nivel1');
        this.physics.world.setBoundsCollision(true,true,true,false);
        //this.cheem = this.physics.add.image(50,320,'cheem');
        this.cheem = this.physics.add.image(50,320,'cheem');
        this.cheem.setData('cheem', true);
        this.cheem.setCollideWorldBounds(true);
        this.cheem.setBounce(0.1);
        this.cheem.body.gravity.y = 4000;

        
        this.nivel1.setScale(2,4);
        this.phaseConstructor.create();//llamo a la escena del constructor

        this.cursor = this.input.keyboard.createCursorKeys();
        */
        this.phaseConstructor.create();
    }
    
    update(){
        //this.move();
        this.phaseConstructor.update();
    }

    zombieImpact(cheem, zombie){
        cheem.disableBody(true,true);
         
    }
    portalImpact(cheem,Portal){
        if (this.phaseConstructor.isPhaseFinished()) {
            this.phaseConstructor.nextLevel();
        }     
    }

    obstaculoImpact(cheem, obstaculo){
        this.physics.add.collider(cheem, obstaculo, null, null);
    }
    endGame(completed = false) {
        if(! completed) {
          this.scene.start('gameover');
        } else {
          this.scene.start('congratulations');
        }
      }
      
/*
    move(){
        if(this.cursor.left.isDown){
            this.cheem.setVelocityX(-300);
        }else if(this.cursor.right.isDown){
            this.cheem.setVelocityX(300);
        }else if(this.cursor.space.isDown){
            this.cheem.setVelocityY(-500);
        }else{
            this.cheem.setVelocityX(0);
        }
    }

    zombieImpact(cheem, zombie){
        cheem.disableBody(true,true);
        
    }

    obstaculoImpact(cheem, obstaculo){
        this.physics.add.collider(cheem, obstaculo, null, null);
    }*/
    
}

