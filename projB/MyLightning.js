/**
 * MyLightning
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLightning extends MyLSystem {
	constructor(scene) {
        super(scene);

        this.axiom = "X";
        this.productions={
            "F": [ "FF" ],
            "X": [ "F[-X][X]F[-X]+FX" ]
        };
        this.angle = 25 * Math.PI / 180.0;
        this.iterations = 3;
        this.scale = Math.pow(0.5, this.iterations-1);

        this.depth;
        this.startTime = 0;
        this.animated = false;

        this.lightningMaterial = new CGFappearance(this.scene);
        this.lightningMaterial.setAmbient(0.3, 0.5, 0.5, 1);
        this.lightningMaterial.setDiffuse(0.3, 0.5, 0.5, 1);
        this.lightningMaterial.setSpecular(0.3, 0.5, 0.5, 1);
        this.lightningMaterial.setShininess(10.0);
        this.lightningMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    // cria o lexico da gramática
    initGrammar(){
        this.grammar = {
            "F": new MyQuad(this.scene),
            "X": new MyQuad(this.scene)
        };
    }

    update(t) {
        this.lastTime = this.lastTime || this.startTime;
        this.deltaTime = t - this.lastTime;
        this.lastTime = t;
            
        this.depth += Math.round(this.deltaTime * (this.axiom.length/1000));

        if (this.depth >= this.axiom.length)
            this.stopAnimation();
    }

    startAnimation(t) {
        this.animated = true;
        this.iterate();
        
        this.startTime = t;
        this.depth = 0;
    }

    isAnimated() {
        return this.animated;
    }

    stopAnimation() {
        this.axiom = "X";
        this.animated = false;
    }

    display() {
        this.scene.pushMatrix();
        this.lightningMaterial.apply();
        this.scene.scale(this.scale, this.scale, this.scale);

        var i;

        // percorre a cadeia de caracteres
        for (i=0; i<this.depth; ++i){

            // verifica se sao caracteres especiais
            switch(this.axiom[i]){
                case "+":
                    // roda a esquerda
                    this.scene.rotate(this.angle, 0, 0, 1);
                    break;

                case "-":
                    // roda a direita
                    this.scene.rotate(-this.angle, 0, 0, 1);
                    break;

                case "[":
                    // push
                    this.scene.pushMatrix();
                    break;

                case "]":
                    // pop
                    this.scene.popMatrix();
                    break;
		        case "\\" :
                    // roda no sentido positivo sobre o eixo dos XX
                    this.scene.rotate(this.angle, 1, 0, 0 );
                    break;
                    
                case "/" :
                    // roda no sentido negativo sobre o eixo dos XX
                    this.scene.rotate(-this.angle, 1, 0, 0 );
                    break;

                case "^" :
                    // roda no sentido positivo sobre o eixo dos YY;
                    this.scene.rotate(this.angle, 0, 1, 0 );
                    break;
                
                case "&" :
                    // roda no sentido negativo sobre o eixo dos YY;
                    this.scene.rotate(-this.angle, 0, 1, 0 );
                    break;

                // processa primitiva definida na gramatica, se existir
                default:
                    var primitive=this.grammar[this.axiom[i]];

                    if ( primitive )
                    {
                        primitive.display();
                        this.scene.translate(0, 1, 0);
                    }
                    break;
            }
        }
        this.scene.popMatrix();
    }
}