 export class Phase{
     constructor(scene){//recibe la escena donde lo vamos a usar, guardando una referencia en el constructor
         this.relatedScene = scene;
     }

     configureColisions(){
         this.relatedScene.physics.add.collider(this.cheem, this.groundBottom, null, null, null);
     }

     configureColisionsZombi(){
         this.relatedScene.physics.add.collider(this.cheem, this.zombies, this.relatedScene.zombieImpact, null, this.relatedScene);
     }

     configureColisionsObstacule(){
         this.relatedScene.physics.add.collider(this.cheem, this.plataformas, this.relatedScene.obstaculoImpact, null, this.relatedScene);
     }
 }