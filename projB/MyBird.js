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
        this.leftWing = new MyLeftWing(this.scene);
        this.rigthWing = new MyRigthWing(this.scene);
        this.square = new MySquare(this.scene);
        this.paw = new MyPaw(this.scene);
        this.eye = new MyUnitCubeQuad(this.scene, UnitCubeEnum.EYE);

      	this.birdMaterial = new CGFappearance(this.scene);
        this.birdMaterial.setAmbient(0.5, 0.5, 0.5, 1);
        this.birdMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.birdMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.birdMaterial.setShininess(10.0);

        this.birdMaterial1 = new CGFappearance(this.scene);
        this.birdMaterial1.setAmbient(0.5, 0.5, 0.5, 1);
        this.birdMaterial1.setDiffuse(0.9, 0.9, 0.9, 1);
        this.birdMaterial1.setSpecular(0.1, 0.1, 0.1, 1);
        this.birdMaterial1.setShininess(10.0);
       
        this.birdTexture = new CGFtexture(this.scene, 'images/bird.jpg');
        this.bicoTexture = new CGFtexture(this.scene, 'images/bico.png');
	}

	update(t){
		this.X = this.X + 1;
	}

	turn(v){

	}

	accelerate(v){

	}

	display() {
 		// ---- displaying Texture
        this.birdMaterial.setTexture(this.birdTexture);
        this.birdMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        
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
		this.scene.rotate(Math.PI/180*90, 1,0, 0);
		this.eye.display();
        this.scene.popMatrix();

        // ---- displaying other eye
		this.scene.pushMatrix();
		this.scene.translate(1.3,1.7,-0.5);
		this.scene.scale(0.2,0.2,0.2);
		this.scene.rotate(Math.PI/180*90, 1,0, 0);
		this.eye.display();
        this.scene.popMatrix();

		
      // ---- displaying Wing
		this.scene.pushMatrix();
		this.birdMaterial.apply();
		this.leftWing.display();
        this.scene.popMatrix();

      // ---- displaying wing
		this.scene.pushMatrix();
		this.birdMaterial.apply();
		this.rigthWing.display();	
        this.scene.popMatrix();	

	// --- displaying tail
		this.scene.pushMatrix();
		this.scene.translate(-1,0.5,0);
		this.scene.rotate(Math.PI/180*90, 1, 0, 0);
		this.scene.scale(1,0.5,0.5);
		this.square.display();
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
		
		this.birdMaterial1.setTexture(this.bicoTexture);
        this.birdMaterial1.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        
		// --- displaying nose
		this.scene.pushMatrix();
		this.scene.translate(1.5,1.5,0);
		this.scene.rotate(Math.PI/180*-90, 0, 0, 1);
		this.scene.scale(0.2,0.5,0.2);
		this.birdMaterial1.apply();
		this.pyramid.display();
        this.scene.popMatrix();

	}
}
