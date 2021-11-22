class MainScene extends Phaser.Scene {

    constructor() {
        super('MainScene');
    }

    init() {
        this.player = null;

        this.groundbott = null;
        this.enemigo1 = null;
        this.enemigo2 = null;
        this.zombies = null;
        this.portal = null;
        this.portalCopt = null;
        this.portalCopt1 = null;
        this.portalSub = null;
        this.portalSub1 = null;

        this.isFlapMode = false;
        this.isSubMode = false;
        this.cofre = null;
        this.jumpCount = 0;
    }
    preload() {
        this.load.image('player', '../Assets/image.png');
        this.load.image('chemsCopt', '../Assets/helicoptero.png')
        this.load.image('groundbott', '../Assets/groundBottom.png');
        this.load.image('enemigo1', '../Assets/zombie.png');
        this.load.image('enemigo2', '../Assets/zombie2.png');
        this.load.image('plataforma', '../Assets/plataforma.png');
        this.load.image('portal', '../Assets/portal.png'); //portal del submarino
        this.load.image('portalCopt', '../Assets/portalFlap.png'); //portal del helicoptero
        this.load.image('cofre', '../Assets/cofre.png'); //cofre de modo arma
        this.load.image('submarino', '../Assets/submarino.png');
        this.load.image('mina', '../Assets/MinaAcuatica.png');
    }
    create() {
        this.player = this.physics.add.sprite(1000 * (2 / 8), 300, 'player');
        this.groundbott = this.physics.add.sprite(0, 600, 'groundbott').setOrigin(0, 1).setImmovable(true);

        this.player.body.gravity.y = 4000;
        this.physics.add.collider(this.player, this.groundbott, this.resetJumpCount, null, this);

        this.zombies = this.physics.add.group(); 
        this.ListaZombie1();
        this.ListaZombie2(); 
        this.plataformas = this.physics.add.group();
        this.ListaPlataforma(); 
        this.physics.add.collider(this.player, this.plataformas, this.resetJumpCount, null, this); 
          this.portalCopt = this.physics.add.sprite(21.8 * 700, 460, 'portalCopt')
            .setOrigin(0, 1)
        this.portalCopt.body.velocity.x = -550;   ///posicion deportal helicoptero
         this.physics.add.overlap(this.player, this.portalCopt, this.onChangetoflap, null, this)
        this.portalCopt1 = this.physics.add.sprite(47 * 700, 460, 'portalCopt')
            .setOrigin(0, 1)
        this.portalCopt1.body.velocity.x = -550; //portal de salida del helicoptero
         this.physics.add.overlap(this.player, this.portalCopt1, this.offChangetoflap, null, this)  
        this.cofre = this.physics.add.sprite(48 * 700, 465, 'cofre');
        this.cofre.body.velocity.x = -550;
        this.input.on('pointerdown', this.onAction, this);
        this.mover = this.input.keyboard.createCursorKeys();
    }
    update() {
         if (this.isFlapMode && this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE).isDown) {
            this.onAction();
        }
        if (this.isFlapMode && this.input.activePointer.isDown) {
            this.onAction();
        } 
        if (this.isSubMode &&this.mover.up.isDown) {
            this.player.setVelocityY(-250);
        } else if (this.isSubMode && this.mover.down.isDown){
            this.player.setVelocityY(250);
        }
    }
    resetJumpCount() {
        this.jumpCount = 0;
    }
    ListaZombie1() {
        for (let zombie of zombieList) {
            let posicion = 6;
            for (let i = 0; i < zombie.quantity; i++) {
                let zombieAux = this.zombies.create((zombie.seconds * 700) + posicion, zombie.y, 'enemigo1').setOrigin(0, 1).setImmovable(true);
                posicion += zombieAux.width;
            }
        }
        this.zombies.setVelocityX(-550);
    }
    ListaZombie2() {
        for (let zombie2 of zombie2List) {
            let positionX = 6;
            let zombie2Y = zombie2.y;
            for (let i = 0; i < zombie2.quantity; i++) {
                let zombie2Aux = this.zombies.create((zombie2.seconds * 700) + positionX, zombie2Y, 'enemigo2').setOrigin(0).setImmovable(true);
                zombie2Y -= zombie2Aux.width;
            }
        }
        this.zombies.setVelocityX(-550);
    }
    ListaPlataforma() {
        for (let plataform of plataformaList) {
            let posicionX = 6;
            for (let i = 0; i < plataform.quantity; i++) {
                let plataformAux = this.plataformas.create((plataform.seconds * 700) + posicionX, plataform.y, 'plataforma').setOrigin(0, 1).setImmovable(true);
                posicionX += plataformAux.width;
            }
        }
        this.plataformas.setVelocityX(-550);
    }
    ListaMinas(){
        for(let mina of minaList){
            let positionX = 6;
            let minaY = mina.y;
            for (let i = 0; i < mina.quantity; i++) {
                let minaAux = this.minas.create((mina.seconds * 700) + positionX, minaY, 'mina').setOrigin(0).setImmovable(true);
                minaY -= minaAux.width;
            }
        }
        this.minas.setVelocityX(-550);
    }
    onAction() {
       
        if (this.isSubMode){
            this.player.body.velocity.y = 0;
            return
        }else{
            if (this.isFlapMode) {
                this.player.body.velocity.y = -400;
                return
            }
            if (this.jumpCount >= 2) {
                return;
            }
            this.player.body.velocity.y = -900;
            this.jumpCount++;
        }
       
    }
    
    onChangetoflap() {
        if (this.isFlapMode == false) { //volver modo helicopetero, o quitarlo
            this.isFlapMode = true;
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
        if (this.isFlapMode == true) { //volver modo helicopetero, o quitarlo
            this.isFlapMode = false;
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
    onChangetoSub(){
        if(this.isSubMode == false) {
            this.isSubMode = true;
            this.player.setTexture('submarino');
            this.player.body.gravity.y = 0;
            this.tweens.add({
                targets: this.player,
                angle: 0,
                duration: 10,
                ease: 'Linear',
            }) 
        }
    }
    offChangetoSub(){
        if(this.isSubMode == true) {
            this.isSubMode = false;
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
const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 1000,
    height: 600,
    backgroundColor: "#000",
    physics: {
        default: 'arcade',
    },
    scene: MainScene
}

new Phaser.Game(config);