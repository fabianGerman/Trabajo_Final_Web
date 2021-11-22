import { Phase } from "./phase.js";
import { zombieList } from "./listEnemy.js";
export class Phase1 extends Phase{
    create(){
        this.plataform = this.relatedScene.physics.add.image(5,595,'plataform').setOrigin(0,1).setImmovable(true);
        this.plataform.setCollideWorldBounds(true);
        this.zombies = this.relatedScene.physics.add.group();
        
        this.configureColisions();
        this.ListaZombie1();
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
