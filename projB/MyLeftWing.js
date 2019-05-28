/**
 * MyLeftWing
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLeftWing extends CGFobject {
	constructor(scene, coords) {
		super(scene);
		this.initBuffers();
		if (coords != undefined)
			this.updateTexCoords(coords);

		this.square = new MySquare(this.scene);
		this.triangle = new MyTriangle(this.scene);

	}
	display() {
		
		
	 // ---- displaying first part of the wing
		this.scene.pushMatrix();
		this.scene.translate(0,0.6,0.7);
		this.scene.rotate(Math.PI/180*90, 1, 0, 0);
		this.scene.rotate(Math.PI/180*90, 0, 0, 1);
		this.square.display();
        this.scene.popMatrix();

	// --- displaying second part of the wing
		this.scene.pushMatrix();
		this.scene.translate(0,0.35,1.62);
		this.scene.rotate(Math.PI/180*120, 1, 0, 0);
		this.scene.rotate(Math.PI/180*90, 0, 0, 1);
		this.scene.scale(0.5,0.5,0.5);
		this.triangle.display();
        this.scene.popMatrix();
	
	}
}

