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
        this.branchMaterial.setAmbient(0.5, 0.2, 0.0, 1);
        this.branchMaterial.setDiffuse(0.5, 0.2, 0.0, 1);
        this.branchMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.branchMaterial.setShininess(10.0);
        this.branchMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        this.branchMaterial.apply();
        this.cylinder.display();
    }
    
}