import { Phase } from './phase.js'
import { zombieList1 } from './objetosn2/Enemigos2.js';
import { zombie2List1 } from './objetosn2/Enemigos2.js';
import { plataformaList1 } from './objetosn2/plataformas2.js';
export class Phase2 extends Phase{
    
    create() {
        api.fetchObstacles(2).then(response => {
            console.log(response);/* 
            let plataformQuan = [];
            let plataformSe = [];
            let plataformY = [];
            response.forEach(element => {

              /*   plataformQuan.push(element.quantity);
                plataformY.push(element.y);
                plataformSe.push(element.seconds);
                 console.log('quantity: ' + plataformQuan[0]);  */
               
               /*  console.log('seconds: ' + plataformSe[0]); */
            //}); 
           /*  for(let i = 0; i <= 38 && i == plataformSe[5] ; i++) {
                console.log('y: ' + plataformY[i]);
                this.ListaPlat = this.relatedScene.physics.add.group({
                    key: 'plataform',
                    frameQuantity: plataformQuan[i],
                    gridAlign: {
                        width: 0,
                        heigth: 0,
                        cellWidth: 30,
                        cellHeigth: 30,
                        x: 100,
                        y: plataformY[i],
                    }
                });
            } */
             /*  this.ListaPlat.setVelocityX(-300);   */ 
        })
            .catch(err => {
                console.log("Error a la hora de traer datos")
            })
        /**nivel */
        this.nivel2 = this.relatedScene.physics.add.image(500, 465, 'nivel2'); 
        this.nivel2.setScale(2, 4); 
        /**cheem */
        this.cheem = this.relatedScene.physics.add.image(50, 320, 'cheem');
        this.cheem.setData('cheem', true);
        this.cheem.setCollideWorldBounds(true);
        this.cheem.setBounce(0.1);
        this.cheem.body.gravity.y = 4000;
        /**piso */
        this.groundBottom = this.relatedScene.physics.add.image(5, 595, 'groundBottom').setOrigin(0, 1).setImmovable(true);
        /**zombie */
        this.zombies = this.relatedScene.physics.add.group();
        /**plataforma */
        this.plataformas = this.relatedScene.physics.add.group();//obstaculo
        /**movimiento */
        this.cursor = this.relatedScene.input.keyboard.createCursorKeys();
        this.portalCopt = this.relatedScene.physics.add.sprite(21.8 * 700, 460, 'portalCopt')
        .setOrigin(0, 1);
         this.portalCopt.body.velocity.x = -550; 
         this.relatedScene.physics.add.overlap(this.cheem, this.portalCopt, this.onChangetoflap, null, this); 
        this.portalCopt1 = this.relatedScene.physics.add.sprite(47 * 700, 460, 'portalCopt')
            .setOrigin(0, 1);
         this.portalCopt1.body.velocity.x = -550; 
        this.relatedScene.physics.add.overlap(this.cheem, this.portalCopt1, this.offChangetoflap, null, this); 

        this.configureColisions();
        this.configureColisionsZombi();
        this.configureColisionsObstacule();
        
         this.ListaZombie1();
         this.ListaZombie2();
         this.ListaPlataforma(); 
    }

    update() {
        this.move();
    }

    move() {
        if (this.cursor.left.isDown) {
            this.cheem.setVelocityX(-300);
        } else if (this.cursor.right.isDown) {
            this.cheem.setVelocityX(300);
        } else if (this.cursor.space.isDown) {
            this.cheem.setVelocityY(-500);
        } else {
            this.cheem.setVelocityX(0);
        }
    }
    ListaZombie2() {
        for (let zombie2 of zombie2List1) {
            let positionX = 6;
            let zombie2Y = zombie2.y;
            for (let i = 0; i < zombie2.quantity; i++) {
                let zombie2Aux = this.zombies.create((zombie2.seconds * 700) + positionX, zombie2Y, 'zombie2').setOrigin(0).setImmovable(true);
                zombie2Y -= zombie2Aux.width;
            }
        }
        this.zombies.setVelocityX(-550);
    }

     ListaZombie1() {
        for (let zombie of zombieList1) {
            let posicion = 6;
            for (let i = 0; i < zombie.quantity; i++) {
                let zombieAux = this.zombies.create((zombie.seconds * 700) + posicion, zombie.y, 'zombie').setOrigin(0, 1).setImmovable(true);
                posicion += zombieAux.width;
            }
        }
        this.zombies.setVelocityX(-550);
    }

    ListaPlataforma() {
        for (let plataform of plataformaList1) {
            let posicionX = 6;
            for (let i = 0; i < plataform.quantity; i++) {
                let plataformAux = this.plataformas.create((plataform.seconds * 700) + posicionX, plataform.y, 'plataform').setOrigin(0, 1).setImmovable(true);
                posicionX += plataformAux.width;

            }
        }
        this.plataformas.setVelocityX(-550);
    } 
    onChangetoflap() {
        if (this.relatedScene.isFlapMode == false) { //volver modo helicopetero, o quitarlo
            this.relatedScene.isFlapMode = true;
            this.player.setTexture('chemsCopt');
            this.player.body.gravity.y = 2000;
             this.tweens.add({
                targets: this.player,
                angle: 0,
                duration: 10,
                ease: 'Linear',
            }) 
        } 
    }
    offChangetoflap() {
        if (this.relatedScene.isFlapMode == true) { //volver modo helicopetero, o quitarlo
            this.relatedScene.isFlapMode = false;
            this.player.setTexture('player');
            this.player.body.gravity.y = 4000;
             this.tweens.add({
                targets: this.player,
                angle: 0,
                duration: 10,
                ease: 'Linear',
            }) 
        } 
    }


}