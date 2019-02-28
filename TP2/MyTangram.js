/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
        super(scene);
        
        this.diamond = new MyDiamond(this.scene);
		this.diamond.initBuffers();
        this.triangle = new MyTriangle(this.scene);
		this.triangle.initBuffers();
        this.parallelogram = new MyParallelogram(this.scene);
		this.parallelogram.initBuffers();
        this.triangleSmall = new MyTriangleSmall(this.scene);
		this.triangleSmall.initBuffers();
        this.triangleBig = new MyTriangleBig(this.scene);
		this.triangleBig.initBuffers();
    }
    
    display() {

        this.scene.pushMatrix();
        var translate = [1.0, 0.0, 0.0, 0.0,
                        0.0, 1.0, 0.0, 0.0,
                        0.0, 0.0, 1.0, 0.0,
                        -1.0, 0.0, 0.0, 1.0];
        this.scene.multMatrix(translate);
        //this.translate(-1,1,0);
        this.diamond.display();
        this.scene.popMatrix();
        
        
        this.scene.pushMatrix();
        this.scene.translate(-2,0,0);
        this.scene.rotate(-Math.PI/2, 0,0,1)
        this.triangle.display();
        this.scene.popMatrix();
        

        this.scene.pushMatrix();
        this.scene.translate(-3,1,0);
        this.scene.rotate(Math.PI/4, 0,0,1);
        this.scene.scale(1,-1,1)
        this.parallelogram.display();
        this.scene.popMatrix();
        

        this.scene.pushMatrix();
        this.scene.translate(-1,-2,0);
        this.scene.rotate(Math.PI/4,0, 0, 1);
        this.scene.translate(-0,-1,0);
        this.triangleSmall.display();
        this.scene.popMatrix();
        

        this.scene.pushMatrix();
        this.scene.translate(0,-2,0);            
        this.triangleBig.display();
        this.scene.popMatrix();
        

        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(8), 0.7,0);
        this.scene.rotate(-Math.PI/2, 0, 0, 1)      
        this.triangleSmall.display();
        this.scene.popMatrix();
        

        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/4, 0, 0, 1)      
        this.scene.translate(2,0,0);
        this.triangleBig.display();
        this.scene.popMatrix();
    }
}

