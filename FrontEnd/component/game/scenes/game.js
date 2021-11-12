export class Game extends Phaser.Scene{
    constructor(){
        super('gameScene');
        
    }

    init(){
        this.box = null;
        this.plataformTop = null;
        this.plataformBottom = null;
        this.portal = null;
        this.picksTop = null;
        this.picksBottom = null;
        this.picksSide = null;
        this.contador = 0;//se la utiliza como variable de tiempo
        this.isGravityInverted = false;
        this.isFlapMode = false;
        this.jumpCount = 0;
        this.rotateAnim = null;
        this.musica = null;
    }

    preload(){
        this.load.image('box','../../assets/box.png');
        this.load.image('rocket','../../assets/rocket.png')
        this.load.image('plataform','../../assets/ground.png');
        this.load.image('spikeTop','../../assets/spikeTop.png');
        this.load.image('spikeBottom','../../assets/spikeBottom.png');
        this.load.image('spikeSide','../../assets/spikeSide.png');
        this.load.image('portalGravity','../../assets/portalGravity.png');
        this.load.image('portal', '../../assets/portal.png');
        this.load.image('portalFlap','../../assets/portalFlap.png');
        
        //this.load.audio('musica', './src/sound/Antimatter.mp3');
    }

    create(){
        //musica
       // this.musica = this.sound.add('musica');
       // this.musica.play();

       //caja
        this.box = this.physics.add.image(300,300,'box');
        //this.box.setData('box',true);
        this.box.setCollideWorldBounds(true);//evita que el objeto salga del area del juego
        this.box.setBounce(0.1)// configura la fuerza del rebote
        this.box.setVelocity(100,10);//asigna velocidad para los ejes x, y
        this.box.body.gravity.y = 4000;
        //plataforma
        this.plataformTop = this.physics.add.sprite(0,0,'plataform').setOrigin(0,0).setImmovable(true);//parte de arriba
        this.plataformBottom = this.physics.add.sprite(0,600,'plataform').setOrigin(0,1).setImmovable(true);//parte de abajo
        this.physics.add.collider(this.box, this.plataformTop,this.resetJumpCount,null,this);
        this.physics.add.collider(this.box, this.plataformBottom,this.resetJumpCount,null,this);
        this.plataformTop.setScale(1.5,1);//modifica el alto y ancho de la plataforma de arrbia
        this.plataformBottom.setScale(1.5,1);//modifica el alto y ancho de la plataforma de abajo
        
        //picas
        this.picksTop = this.physics.add.group(); //se crea el grupo de picas que iran en la parte de arriba
        this.picksBottom = this.physics.add.group();//se crea el grupo de picas que iran en la parte de abajo
        //cursor
        this.cursors = this.input.keyboard.createCursorKeys();
        this.velocidad = 3;
        this.velocidadPica = 1.5;

        
        this.input.on('pointerdown', this.onAction, this);
    } 

    update(){
        this.mover();
        this.contador++;
        this.generarPicks();
        this.generatePortal();
        this.picksTop.setVelocityX(-100);
        this.picksBottom.setVelocityX(-108);
        if(this.isFlapMode && this.input.activePointer.isDown){
            this.onAction();
        }
    }

    /**
     * movimiento del box controlado por el jugador
     */
    mover(){
        if(this.cursors.left.isDown){//mueve a la izquierda
            this.box.setVelocityX(-300);
        }else if(this.cursors.right.isDown){//mueve a la derecha
            this.box.setVelocityX(300);
        }else if(this.cursors.space.isDown){//saltar
            this.box.setVelocityY(-300);
            this.rotate(180);
            this.onAction();
            if(this.isGravityInverted){
                this.box.body.velocity.y = 500;
                this.rotate(180);
            }
        }else{
            this.box.setVelocityX(0);//cuando se suelte la tecla presionada el objeto quedo fijo en el lugar
        }
    }

    /**
     * creata los picos de arriba y abajo
     * cuando chocque con los pichos de arriba o abajo el juego se reinicia
     */
    generarPicks(){
        this.physics.add.collider(this.box,this.picksBottom,this.resetGame,null,this);
        this.physics.add.collider(this.box,this.picksTop,this.resetGame,null,this);
        this.generateTop();
        this.generateButtom();
    }

    /**
     * se crean las especificaciones de los picos de abajo
     */
    generateButtom(){
        if(this.contador % 300 == 0){
            this.picksBottom = this.physics.add.group({
                key: ['spikeBottom'],
                frameQuantity: 1,
                gridAlign: {
                    width: 10,
                    heigth: 4,
                    cellWidth: 67,
                    cellHeight: 34,
                    x: 750,
                    y: 450
                }
            });
        }else if(this.contador % 500 == 0){
            this.picksBottom = this.physics.add.group({
                key: ['spikeBottom'],
                frameQuantity: 2,
                gridAlign: {
                    width: 10,
                    heigth: 4,
                    cellWidth: 67,
                    cellHeight: 34,
                    x: 750,
                    y: 450
                }
            });
        }
    }

    /**
     * se crean las especificaciones de los picos de arriba
     */
    generateTop(){//genera los picos de arriba
        if(this.contador % 1000 == 0){
            this.picksTop = this.physics.add.group({
                key: ['spikeTop'],
                frameQuantity: 1,
                gridAlign: {
                    width: 10,
                    heigth: 4,
                    cellWidth: 67,
                    cellHeight: 34,
                    x: 750,
                    y: 150
                }
            });
        }else if(this.contador % 1500 == 0){
            this.picksTop = this.physics.add.group({
                key: ['spikeTop'],
                frameQuantity: 2,
                gridAlign: {
                    width: 10,
                    heigth: 4,
                    cellWidth: 67,
                    cellHeight: 34,
                    x: 750,
                    y: 150
                }
            });
        }
    }

    /**
     * se crea los 3 portales 
     */
    generatePortal(){
        if(this.contador % 1400 == 0){
            this.portal = this.physics.add.sprite(750,460,'portalGravity').setOrigin(0,1);
            this.portal.body.velocity.x = -400;
            this.physics.add.overlap(this.box, this.portal, this.invertirGravedad,null,this);
        }else if(this.contador % 1700 == 0){
            this.portal = this.physics.add.sprite(750,460,'portal').setOrigin(0,1);
            this.portal.body.velocity.x = -400;
            this.physics.add.overlap(this.box, this.portal, this.restaurarGravedad,null,this);
        }else if(this.contador % 2000 == 0){
            this.portal = this.physics.add.sprite(750,460,'portalFlap').setOrigin(0,1);
            this.portal.body.velocity.x = -400;
            this.physics.add.overlap(this.box, this.portal, this.alterarGravedad,null,this);
        }
    }

    /**
     * se restaura la gravedad y hace que el box valla sobre el suelo
     */
    restaurarGravedad(){
        this.box.setTexture('box');
        this.isGravityInverted = false;
        this.box.body.gravity.y = 4000;
        
    }

    /**
     * se inviete la gravedad y hace que el box valla sobre el techo
     */
    invertirGravedad(){
        this.box.setTexture('box');
        this.isGravityInverted = true;
        this.box.body.gravity.y = -4000;
    }

    /**
     * modifica la gravedad 
     */
    alterarGravedad(){
        this.isGravityInverted = false;
        this.isFlapMode = true;
        this.box.setTexture('rocket');//cambia la imagen del box
        this.box.body.gravity.y = 2000;
    }

    /**
     * 
     * permiete que el box rote de izquierda a derecha dependiendo
     * si esta en el suelo o en el techo
     */
    onAction(){
        if(this.isFlapMode){
            this.box.body.velocity.y = -600;
            return;
        }
        if(this.jumpCount >= 2){
            return;
        }
        this.jumpCount++;
        if(this.isGravityInverted){
            this.box.body.velocity.y = 1100;
            this.rotate(-180);
            console.log("entro 1");
            
        }else{
            this.box.body.velocity.y = -1100;
            this.rotate(180);
            console.log("entro 2");
        }
    }

    resetJumpCount(){
        this.jumpCount = 0;
    }

    /**
     * modificaciones  para que el box pueda rotar
     */
    rotate(angleValue) {
        if (this.rotate){
        this.rotateAnim = this.tweens.add({
           targets: this.box, //your image that must spin
           angle: 360, //rotation value must be radian
           duration: 400,
           ease: 'Linear'
          });
        }else{
          this.rotateAnim.play();
          
        }
      }

      /**
       * reinicia el juego 
       */
      resetGame(){
          this.physics.pause();
          //this.musica.pause();
          this.box.visible = false;
          this.time.addEvent({
              delay:1000,
              callback:()=>{
                  this.scene.restart();
              },
              loop:false
          })
      }
}