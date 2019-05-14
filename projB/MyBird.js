/**
 * MyBird
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBird extends CGFobject {
	constructor(scene, orientation, Bspeed, positionX, positionY, positionZ ) {
        super(scene);
        this.orientation = orientation;
        this.speed = Bspeed;
        this.X = positionX;
        this.Y = positionY;
        this.Z = positionZ;
        this.unitCubeQuad = new MyUnitCubeQuad(this.scene, UnitCubeEnum.BIRD);
        this.pyramid = new MyPyramid(this.scene, 4, 4);  
        this.prism = new MyPrism(this.scene, 3, 3);  		
        this.wing = new MyWing(this.scene);
        this.paw = new MyPaw(this.scene);
	}
	display() {
 
        // ---- displaying body
		this.scene.pushMatrix();
		this.scene.translate(0,0.5,0);
		this.unitCubeQuad.display();
        this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0.6,1.3,-0.5);
		this.scene.rotate(Math.PI/180*90, 0, 1, 0);
		this.scene.rotate(Math.PI/180*120, 1, 0, 0);
		this.scene.rotate(Math.PI/180*90, 0, 0, 1);	
		this.scene.scale(0.5,1,0.5);
		this.prism.display();
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
		this.wing.display();
        this.scene.popMatrix();

      // ---- displaying first part of the other wing
		this.scene.pushMatrix();
		this.scene.scale(1, 1, -1);
		this.wing.display();
        this.scene.popMatrix();

	

	// --- displaying tail
		this.scene.pushMatrix();
		this.scene.translate(-1,0.5,0);
		this.scene.rotate(Math.PI/180*90, 1, 0, 0);
		this.scene.scale(1,0.5,0.5);
		this.wing.display();
        this.scene.popMatrix();

    //  --- displaying paw
    	this.scene.pushMatrix();
		this.scene.translate(0.5,0,0.2);
		this.scene.rotate(Math.PI/180*90, 1, 0, 0);
		this.scene.rotate(Math.PI/180*-90, 0, 0, 1);
		this.scene.scale(0.3,0.3,0.2);
		this.paw.display();
        this.scene.popMatrix();

    	this.scene.pushMatrix();
		this.scene.translate(0.5,0,-0.2);
		this.scene.rotate(Math.PI/180*90, 1, 0, 0);
		this.scene.rotate(Math.PI/180*-90, 0, 0, 1);
		this.scene.scale(0.3,0.3,0.2);
		this.paw.display();
        this.scene.popMatrix();

	}
}
