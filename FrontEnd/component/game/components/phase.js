 export class Phase{
     constructor(scene){//recibe la escena donde lo vamos a usar, guardando una referencia en el constructor
         this.relatedScene = scene;
     }

     configureColisions(){
         this.relatedScene.physics.add.collider(this.relatedScene.cheem, this.plataform, null,null, this.relatedScene);
         //this.relatedScene.physics.add.collider(this.relatedScene.zombies,this.plataform,null,null, this.relatedScene);
     }
 }