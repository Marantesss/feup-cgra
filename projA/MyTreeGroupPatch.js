/**
 * MyTreeGroupPatch
 * @constructor
 * @param scene - Reference to MyScene Object
 * @param trunkHeight - Height of the trees' trunk, represented by a cylinder
 * @param trunkRadius - Radius of the trees' trunk, ...
 * @param treeTopHeight - Height of the trees' leaves, represented by a cone
 * @param treeTopRadius - Radius of the trees' leaves, ...
 * @param trunkTexture - Tree trunks' texture
 * @param treeTopTexture - Tree tops' texture 
 */
class MyTreeGroupPatch extends CGFobject {
    constructor (scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture, treeTopTexture) {
        super(scene);

        this.random = [[Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5],
                       [Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5],
                       [Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5]];

        this.tree = new MyTree(scene, trunkHeight, trunkRadius,
                               treeTopHeight, treeTopRadius,
                               trunkTexture, treeTopTexture);
    }

    display() {
        // ---- displaying collums
        for (var i = 0; i < 3; i++) {
            // ---- displaying rows
            for (var j = 0; j < 3; j++) {
                this.scene.pushMatrix();
                this.scene.translate(j * (2.5 * this.tree.treeTopRadius + this.random[j][i]), 0, i * (3 * this.tree.treeTopRadius + this.random[j][i]));
                this.tree.display();
                this.scene.popMatrix();
            }
        }
    }

    initBuffers() {
		this.tree.initBuffers();

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
    }
    
    updateBuffers(complexity) {
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}


