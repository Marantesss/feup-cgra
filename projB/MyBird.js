/**
 * MyBird
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBird extends CGFobject {
	constructor(scene) {
        super(scene);
        this.unitCubeQuad = new MyUnitCubeQuad(this.scene, UnitCubeEnum.HOUSE);
        this.pyramid = new MyPyramid(this.scene, 4, 4);    		
        this.wing = new MyWing(this.scene);
        this.triangle = new MyTriangle(this.scene);
	}
	display() {
 
        // ---- displaying body
		this.scene.pushMatrix();
		this.scene.translate(0,0.5,0);
		this.unitCubeQuad.display();
        this.scene.popMatrix();

        // ---- displaying face
		this.scene.pushMatrix();
		this.scene.translate(1,1.5,0);
		this.unitCubeQuad.display();
        this.scene.popMatrix();
 		
 		 // ---- displaying eye
		this.scene.pushMatrix();
		this.scene.translate(1.3,1.7,0.5);
		this.scene.scale(0.2,0.2,0.2);
		this.unitCubeQuad.display();
        this.scene.popMatrix();

        // ---- displaying other eye
		this.scene.pushMatrix();
		this.scene.translate(1.3,1.7,-0.5);
		this.scene.scale(0.2,0.2,0.2);
		this.unitCubeQuad.display();
        this.scene.popMatrix();

		// --- displaying nose
		this.scene.pushMatrix();
		this.scene.translate(1.5,1.5,0);
		this.scene.rotate(Math.PI/180*-90, 0, 0, 1);
		this.scene.scale(0.2,0.5,0.2);
		this.pyramid.display();
        this.scene.popMatrix();

      // ---- displaying first part of the wing
		this.scene.pushMatrix();
		this.scene.translate(0,0.5,0.7);
		this.scene.rotate(Math.PI/180*60, 1, 0, 0);
		this.scene.rotate(Math.PI/180*90, 0, 0, 1);
		this.wing.display();
        this.scene.popMatrix();

	// --- displaying second part of the wing
		this.scene.pushMatrix();
		this.scene.translate(0,0.5,1.5);
		this.scene.rotate(Math.PI/180*120, 1, 0, 0);
		this.scene.rotate(Math.PI/180*90, 0, 0, 1);
		this.scene.scale(0.5,0.5,0.5);
		this.triangle.display();
        this.scene.popMatrix();

      // ---- displaying first part of the other wing
		this.scene.pushMatrix();
		this.scene.translate(0, 0.5,-0.7);
		this.scene.rotate(Math.PI/180*-60, 1, 0, 0);
		this.scene.rotate(Math.PI/180*-90, 0, 0, 1);
		this.wing.display();
        this.scene.popMatrix();

	// --- displaying second part of the wing
		this.scene.pushMatrix();
		this.scene.translate(0,0.5,-1.5);
		this.scene.rotate(Math.PI/180*-120, 1, 0, 0);
		this.scene.rotate(Math.PI/180*90, 0, 0, 1);
		this.scene.rotate(Math.PI, 1, 0, 0);
		this.scene.scale(0.5,0.5,0.5);
		this.triangle.display();
        this.scene.popMatrix();

	// --- displaying tail
		this.scene.pushMatrix();
		this.scene.translate(-1,0.5,0);
		this.scene.rotate(Math.PI/180*90, 1, 0, 0);
		this.scene.scale(1,0.5,0.5);
		this.wing.display();
        this.scene.popMatrix();

	}
}
