/**
 * MyTree
 * @constructor
 * @param scene - Reference to MyScene Object
 * @param trunkHeight - Height of the tree's trunk, represented by a cylinder
 * @param trunkRadius - Radius of the tree's trunk, ...
 * @param treeTopHeight - Height of the tree's leaves, represented by a cylinder
 * @param treeTopRadius - Radius of the tree's leaves, ...
 * @param trunkTexture - Tree trunk's texture
 * @param treeTopTexture - Tree top's texture
 */
class MyTree extends CGFobject {
    constructor (scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture, treeTopTexture) {
        super(scene);
        this.trunkHeight = trunkHeight;
        this.trunkRadius = trunkRadius;
        this.treeTopHeight = treeTopHeight;
        this.treeTopRadius = treeTopRadius;
        this.trunkTexture = trunkTexture;
        this.treeTopTexture = treeTopTexture;

        // ---- create objects to build a tree
        this.trunkCylinder = new MyCylinder(this.scene, 6, 0);
        this.leavesCone = new MyCone(this.scene, 6, 0);

        // ---- create material for applying textures
        this.treeMaterial = new CGFappearance(this.scene);
        this.treeMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.treeMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.treeMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.treeMaterial.setShininess(10.0);
        this.treeMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.treeLeaves = new CGFtexture(this.scene, this.treeTopTexture);
        this.treeTrunk = new CGFtexture(this.scene, this.trunkTexture);
    }

    display() {
        // ---- displaying the trunk
        this.treeMaterial.setTexture(this.treeTrunk);
        this.treeMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        
        this.scene.pushMatrix();
        this.scene.scale(this.trunkRadius, this.trunkHeight, this.trunkRadius);
        this.trunkCylinder.display();
        this.scene.popMatrix();
        // ----

        // ---- displaying the Leaves
        this.treeMaterial.setTexture(this.treeLeaves);
        this.treeMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        
        this.scene.pushMatrix();
        this.scene.translate(0, this.trunkHeight, 0);
        this.scene.scale(this.treeTopRadius, this.treeTopHeight, this.treeTopRadius);
        this.leavesCone.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, this.trunkHeight * 1.5, 0);
        this.scene.scale(this.treeTopRadius/1.2, this.treeTopHeight/1.2, this.treeTopRadius/1.2);
        this.leavesCone.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0, this.trunkHeight * 2, 0);
        this.scene.scale(this.treeTopRadius/2, this.treeTopHeight/2, this.treeTopRadius/2);
        this.leavesCone.display();
        this.scene.popMatrix();

      
        // ----
    }

    initBuffers() {
        this.trunkCylinder.initBuffers();
        this.leavesCone.initBuffers();

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
    }
    
    updateBuffers(complexity) {
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}


