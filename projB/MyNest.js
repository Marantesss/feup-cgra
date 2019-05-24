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

        // -- tree brach sorted by z coord

        this.scene.pushMatrix();
        this.scene.translate(-0.3, 0, -0.9);
        this.scene.scale(0.5,1,0.5);
        this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.6, 0, -0.7);
        this.scene.scale(0.8,1,1);
        this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.7, 0, -0.5);
        this.scene.scale(1.1,1,1);
        this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.95, 0, -0.3);
        this.scene.scale(1.3,1,1);
        this.treeBranch.display();
        this.scene.popMatrix();
      
        // -- Central Tree Branch
        this.scene.pushMatrix();
        this.scene.translate(-1, 0, 0);
        this.scene.scale(1.4,1,1);
        this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.95, 0, 0.3);
        this.scene.scale(1.3,1,1);
        this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.7, 0, 0.5);
        this.scene.scale(1.1,1,1);
        this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.6, 0, 0.7);
        this.scene.scale(0.8,1,1);
        this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.3, 0, 0.9);
        this.scene.scale(0.5,1,0.5);
        this.treeBranch.display();
        this.scene.popMatrix();

        this.cylinder.display();
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