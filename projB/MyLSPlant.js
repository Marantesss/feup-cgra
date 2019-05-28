/**
 * MyLSPlant
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLSPlant extends MyLSystem {
	constructor(scene) {
        super(scene);

        this.axiom;
        this.productions = {
            "F": [ "FF" ],
            "X": [ "F[-X][X]F[-X]+X",
                    "F[-X][x]+X",
                    "F[+X]-X",
                    "F[/X][X]F[\\\\X]+X",
                    "F[\\X][X]/X",
                    "F[/X]\\X",
                    "F[^X][X]F[&X]^X",
                    "F[^X]&X",
                    "F[&X]^X"]
        };
        this.angle;
        this.iterations;
        this.scaleFactor;

    }

    // cria o lexico da gramática
    initGrammar(){
        this.grammar = {
            "F": new MyBranch(this.scene, 0.2, 1),
            "X": new MyLeaf(this.scene, 0.5, 0.5)
        };
    }
}
