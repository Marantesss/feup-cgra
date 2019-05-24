/**
 * MyNest
 * @constructor
 */
class MyNest extends CGFobject {
    constructor (scene, trunkHeight, trunkRadius, trunkTexture) {
        super(scene);
        this.trunkHeight = trunkHeight;
        this.trunkRadius = trunkRadius;
        this.trunkTexture = trunkTexture;

        // ---- create objects to build a tree Branch
        this.treeBranch = new MyTreeBranch(this.scene, 1.5, 0.2, this.trunkTexture);
        this.cylinder = new MyCylinder(this.scene, 20,20);

    }
    display() {

        // -- ground brach tree
        this.scene.pushMatrix();
        this.scene.translate(0, 0.2, 0.7);
        this.scene.rotate(Math.PI/2, 0,1,0);
        this.scene.scale(1,1,0.5);
        this.treeBranch.display();
        this.scene.popMatrix();

        // -- tree brach sorted by z coord

        this.scene.pushMatrix();
        this.scene.translate(-0.4, 0, -0.8);
        this.scene.scale(0.5,1,0.5);
        this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.6, 0, -0.6);
        this.scene.scale(0.8,1,1);
        this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.8, 0, -0.4);
        this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.9, 0, -0.2);
        this.scene.scale(1.1,1,1);
        this.treeBranch.display();
        this.scene.popMatrix();
      
        // -- Central Tree Branch
        this.scene.pushMatrix();
        this.scene.translate(-1, 0, 0);
        this.scene.scale(1.2,1,1);
        this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.9, 0, 0.2);
        this.scene.scale(1.1,1,1);
        this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.8, 0, 0.4);
        this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.7, 0, 0.6);
        this.scene.scale(0.8,1,1);
        this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0.8);
        this.scene.scale(0.5,1,0.5);
        this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.05, 0, -0.05);
        this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.15, 0,-0.15);
        this.scene.scale(0.9,1,1);
        this.cylinder.display();
        this.scene.popMatrix();
        // ----

        
    }
    initBuffers() {
        this.treeBranch.initBuffers();
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
    }
    
    updateBuffers(complexity) {
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
    
}