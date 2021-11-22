import { Phase1 } from './phase1.js'
import { Phase2 } from './phase2.js'
import { Phase3 } from './phase3.js'

export class PhaseConstructor{
    constructor(scene){
        this.relatedScene = scene;
        this.phases = [
            Phase1
        ];
    }

    /**creo el nivel */
    create(){
        let CurrentPhaseClass = this.phases.pop();
        this.currentPhase = new CurrentPhaseClass(this.relatedScene);
        return this.currentPhase.create();
    }

    /**cambio de nivel */
    nextLevel(){
        this.currentPhase.deleteFixedZombies();
        if(this.phases.length == 0){
            this.reletedScene.endGame(true);
        }else{
            return this.create();
        }
    }

    /** */
    isPhaseFinished(){
        return this.currentPhase.isPhaseFinished();
    }
}