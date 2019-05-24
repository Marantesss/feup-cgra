/**
 * MyTree
 * @constructor
 * @param trunkHeight - Height of the tree's trunk, represented by a cylinder
 * @param trunkRadius - Radius of the tree's trunk, ...
 */
class MyTreeBranch extends CGFobject {
    constructor (scene, trunkHeight, trunkRadius, trunkTexture) {
        super(scene);
        this.trunkHeight = trunkHeight;
        this.trunkRadius = trunkRadius;
        this.trunkTexture = trunkTexture;

        // ---- create objects to build a tree Branch
        this.treeBranch = new MyCylinder(this.scene, 6, 0);

        // ---- create material for applying textures
        this.treeMaterial = new CGFappearance(this.scene);
        this.treeMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.treeMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.treeMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.treeMaterial.setShininess(10.0);
        this.treeMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.treeTrunk = new CGFtexture(this.scene, this.trunkTexture);
    }
    display() {
        // ---- displaying the trunk
        this.treeMaterial.setTexture(this.treeTrunk);
        this.treeMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        
        this.scene.pushMatrix();
        this.scene.scale(this.trunkRadius, this.trunkHeight, this.trunkRadius);
        this.treeBranch.display();
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