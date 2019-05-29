/**
 * MyLeaf
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLeaf extends CGFobject {
	constructor(scene) {
        super(scene);
        this.triangle = new MyTriangle(this.scene);

        this.leafMaterial = new CGFappearance(this.scene);
        this.leafMaterial.setAmbient(0.1, 0.8, 0.1, 1);
        this.leafMaterial.setDiffuse(0.1, 0.9, 0.1, 1);
        this.leafMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.leafMaterial.setShininess(10.0);
        this.leafMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        this.leafMaterial.apply(),
        this.scene.pushMatrix();
        this.scene.scale(2, 2, 2);
        this.triangle.display();
        this.scene.popMatrix();
    }
    
}