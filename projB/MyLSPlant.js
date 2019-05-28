/**
 * MyLSPlant
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLSPlant extends MyLSystem {
	constructor(scene) {
        super(scene);

        this.axiom = "X";
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
        this.angle = 30.0 * Math.PI / 180.0;
        this.iterations = 6;
        this.scale = Math.pow(0.6, this.iterations-1);

        this.iterate();
    }

    // cria o lexico da gramática
    initGrammar() {
        this.grammar = {
            "F": new MyBranch(this.scene),
            "X": new MyLeaf(this.scene)
        };
    }
}
