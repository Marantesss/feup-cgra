/**
 * MyBranch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBranch extends CGFobject {
	constructor(scene) {
        super(scene);
        this.cylinder = new MyCylinder(this.scene, 4, 4);

        this.branchMaterial = new CGFappearance(this.scene);
        this.branchMaterial.setAmbient(0.7, 0.5, 0.5, 1);
        this.branchMaterial.setDiffuse(0.7, 0.5, 0.5, 1);
        this.branchMaterial.setSpecular(0.7, 0.5, 0.5, 1);
        this.branchMaterial.setShininess(10.0);
        this.branchMaterial.loadTexture("images/Tiles/trunk_side.png");
        this.branchMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        this.branchMaterial.apply();
        this.scene.pushMatrix();
        this.scene.scale(1.5, 1.0, 1.5);
        this.cylinder.display();
        this.scene.popMatrix();
    }
    
}