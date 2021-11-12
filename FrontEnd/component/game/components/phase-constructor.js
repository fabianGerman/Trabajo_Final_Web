import { Nivel1 } from './nivel1.js';
import { Nivel2 } from './nivel2.js';

export class PhaseConstructor{
    constructor(scene){
        this.relatedScene = scene;
        this.niveles = {
            Nivel1,
            Nivel2
        };
    }
}