import { Phase } from "./phase.js";
export class Phase1 extends Phase{
    create(){
        /**nivel */
        this.nivel1 = this.relatedScene.physics.add.image(500,465,'nivel1');
        this.nivel1.setScale(2,4);
        /**cheem */
        this.cheem = this.relatedScene.physics.add.image(50,320,'cheem');
        this.cheem.setData('cheem', true);
        this.cheem.setCollideWorldBounds(true);
        this.cheem.setBounce(0.1);
        this.cheem.body.gravity.y = 4000;
        /**piso */
        this.groundBottom = this.relatedScene.physics.add.image(5,595,'groundBottom').setOrigin(0,1).setImmovable(true);
        /**zombie */
        this.zombies = this.relatedScene.physics.add.group();
        /**plataforma */
        this.plataformas = this.relatedScene.physics.add.group();//obstaculo
        /**movimiento */
        this.cursor = this.relatedScene.input.keyboard.createCursorKeys();
        
        this.configureColisions();
        this.configureColisionsZombi();
        this.configureColisionsObstacule();

        this.ListaZombie1();
        this.ListaPlataforma();
        
    }

    update(){
        this.move();
    }

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

    

























    ListaZombie1() {
        for (let zombie of zombieList) {
            let posicion = 6;
            for (let i = 0; i < zombie.quantity; i++) {
                let zombieAux = this.zombies.create((zombie.seconds * 700) + posicion, zombie.y, 'zombie').setOrigin(0, 1).setImmovable(true);
                posicion += zombieAux.width;
            }
        }
        this.zombies.setVelocityX(-550);
    }

    ListaPlataforma() {
        for (let plataform of plataformaList) {
            let posicionX = 6;
            for (let i = 0; i < plataform.quantity; i++) {
                let plataformAux = this.plataformas.create((plataform.seconds * 700) + posicionX, plataform.y, 'plataform').setOrigin(0, 1).setImmovable(true);
                posicionX += plataformAux.width;
                
            }
        }
        this.plataformas.setVelocityX(-550);
    }
}

const zombieList = [
    {
        seconds: 1.5,
        quantity: 1,
        y: 465,
    },
    {
        seconds: 2,
        quantity: 3,
        y: 380,//la plataforma con los zombies tienen una diferencia de 30
    },
    {
        seconds: 3,
        quantity: 2,
        y: 465,
    },
    {
        seconds: 4,
        quantity: 2,
        y: 435,
    },
    {
        seconds: 8,
        quantity: 3,
        y: 465,
    },
    {
        seconds: 9,
        quantity: 2,
        y: 465,
    },
    {
        seconds: 10, //primeros 10 segundos
        quantity: 1,
        y: 465,
    },
    {
        seconds: 11.9,
        quantity: 40,
        y: 465,
    },
    {
        seconds: 12,
        quantity: 3,
        y: 360,
    },
    {
        seconds: 13,
        quantity: 3,
        y: 350,
    },
    {
        seconds: 14,
        quantity: 2,
        y: 320,
    }, //despues del helicoptero
      {
         seconds: 31.25,
         quantity: 2,
         y: 465,
     }, 
     {
        seconds:31.75,
        quantity:2,
        y:465,
    },
    {
        seconds:32.25,
        quantity:2,
        y:465,
    },
    {
        seconds:33,
        quantity:3,
        y:465,
    },
    {
        seconds:34,
        quantity:3,
        y:465,
    },
    {
        seconds:34.5,
        quantity:3,
        y:360,
    },
    {
        seconds:35,
        quantity:15,
        y:465,
    },
    {
        seconds: 40,
        quantity: 100,
        y: 465,
    },
]

const plataformaList = [

   
    {
        seconds: 0,
        quantity: 20,
        y: 380,
    },
    {
        seconds: 0,
        quantity: 22,
        y: 410,
    },
    {
        seconds: 0,
        quantity: 24,
        y: 440,
    },
    {
        seconds: 6,
        quantity: 4,
        y: 405,
    },
    {
        seconds: 7,
        quantity: 4,
        y: 420,
    },
    {
        seconds: 7.5,
        quantity: 4,
        y: 390,
    },
    {
        seconds: 8,
        quantity: 6,
        y: 390,
    },
    {
        seconds: 8.7,
        quantity: 3,
        y: 465,
    },
    {
        seconds: 9.5,
        quantity: 4,
        y: 405,
    },
    {
        seconds: 10,
        quantity: 4,
        y: 350,
    },
    {
        seconds: 12,
        quantity: 4,
        y: 420,
    },
    {
        seconds: 12.5,
        quantity: 4,
        y: 370,
    },
    {
        seconds: 16,
        quantity: 4,
        y: 370,
    },
    {
        seconds: 17,
        quantity: 4,
        y: 320,
    },
    {
        seconds: 18,
        quantity: 4,
        y: 370,
    },
    {
        seconds: 18.7,
        quantity: 4,
        y: 400,
    },
    {
        seconds: 19,
        quantity: 4,
        y: 300,
    },
    {
        seconds: 19.5,
        quantity: 4,
        y: 300,
    },
    {
        seconds: 20,
        quantity: 4,
        y: 300,
    },
    {
        seconds: 20.5,
        quantity: 4,
        y: 300,
    },
    {
        seconds: 21,
        quantity: 4,
        y: 370,
    },
    {
        seconds: 21.5,
        quantity: 4,
        y: 370,
    },
    {
        seconds: 26,
        quantity: 95,
        y: 465,
    },
    {
        seconds: 30,
        quantity: 95,
        y: 465,
    },
    {
        seconds: 30,
        quantity: 95,
        y: 435,
    },
    {
        seconds: 34,
        quantity: 95,
        y: 465,
    },
    {
        seconds: 34,
        quantity: 95,
        y: 435,
    },
    {
        seconds: 34,
        quantity: 94,
        y: 405,
    },
    {
        seconds: 38,
        quantity: 94,
        y: 315,
    },
    {
        seconds: 38,
        quantity: 94,
        y: 345,
    },
    {
        seconds: 38,
        quantity: 94,
        y: 375,
    },
    {
        seconds: 38,
        quantity: 94,
        y: 405,
    },
    {
        seconds: 38,
        quantity: 94,
        y: 435,
    },
    {
        seconds: 38,
        quantity: 94,
        y: 465,
    },
    {
        seconds: 42,
        quantity: 93,
        y: 465,
    },
    {
        seconds: 42,
        quantity: 95,
        y: 465,
    },
    {
        seconds: 42,
        quantity: 95,
        y: 435,
    },
    {
        seconds: 42,
        quantity: 95,
        y: 405,
    },
    {
        seconds: 42,
        quantity: 95,
        y: 120,
    },
]
