/**
* MyPyramid
* @constructor
* @param scene - Reference to MyScene object
*/
class MyBird extends CGFobject {
	constructor(scene, orientation, Bspeed, positionX, positionY, positionZ) {
		super(scene);
		this.orientation = orientation;
		this.speed = Bspeed;
		this.X = positionX;
		this.Y = positionY;
		this.Z = positionZ;

		this.lastTime = 0;

		this.unitCubeQuad = new MyUnitCubeQuad(this.scene, UnitCubeEnum.BIRD);
		this.pyramid = new MyPyramid(this.scene, 4, 4);
		this.prism = new MyPrism(this.scene, 3, 3);
		this.leftWing = new MyLeftWing(this.scene);
		this.rigthWing = new MyRigthWing(this.scene);
		this.square = new MySquare(this.scene);
		this.paw = new MyPaw(this.scene);
		this.eye = new MyUnitCubeQuad(this.scene, UnitCubeEnum.EYE);
		this.triangle = new MyTriangle(this.scene);

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

	reset() {
		this.X = 0;
		this.Y = 3;
		this.Z = 0;
		this.speed = 0;
		this.orientation = 0;
	}

	accelerate(v) {
		if (v && this.speed < 5)
			this.speed++;

		else if( !v && this.speed > -3)
			this.speed--;

		this.speed = this.speed*this.scene.speedFactor;
		
	}

	turn(v) {
		if (v)
			this.orientation = this.orientation + Math.PI / 10 * this.scene.speedFactor;

		else
			this.orientation = this.orientation - Math.PI / 10 * this.scene.speedFactor;

	}

	update(t) {
		this.lastTime = this.lastTime || 0;
        this.deltaTime = this.scene.t - this.lastTime;
        this.lastTime = this.scene.t;

		this.X = this.X + Math.cos(this.orientation) * this.speed * this.deltaTime;
		this.Z = this.Z - Math.sin(this.orientation) * this.speed * this.deltaTime;		

		if (this.X > 90)
			this.X = 90;
		else if (this.X < -90)
			this.X = -90;

		if (this.Z > 90)
			this.Z = 90;
		else if (this.Z < -90)
			this.Z = -90;

	}

	display() {

		this.update(this.scene.t);

		// ---- displaying Texture
		this.birdMaterial.setTexture(this.birdTexture);
		this.birdMaterial.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
			 
		this.scene.pushMatrix();
			//mover passaro
			this.scene.translate(this.X, this.Y, this.Z);
			this.scene.rotate(this.orientation, 0, 1, 0);
			this.scene.translate(0, 5 + Math.sin(this.scene.t) * 0.5 * this.scene.speedFactor, 0);
			// ---- displaying body
			this.scene.pushMatrix();
				this.scene.translate(0, 0.5, 0);
				this.unitCubeQuad.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
				this.scene.translate(0.5, 1.6, -0.5);
				this.scene.rotate(Math.PI / 2, 0, 0, 1);
				this.scene.scale(0.6, 0.5, 0.5);
				this.triangle.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
				this.scene.translate(0.5, 1.6, 0.5);
				this.scene.rotate(Math.PI / 2, 0, 0, 1);
				this.scene.scale(0.6, 0.5, 0.5);
				this.triangle.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
				this.scene.translate(0.6, 1.3, -0.5);
				this.scene.rotate(Math.PI / 180 * 90, 0, 1, 0);
				this.scene.rotate(Math.PI / 180 * 120, 1, 0, 0);
				this.scene.rotate(Math.PI / 180 * 90, 0, 0, 1);
				this.scene.scale(0.5, 1, 0.5);
				this.prism.display();
			this.scene.popMatrix();

			// ---- displaying face
			this.scene.pushMatrix();
				this.scene.translate(0.9, 1.5, 0);
				this.scene.scale(1.25,1,1)
				this.unitCubeQuad.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
				this.scene.translate(0.92, 2.3, -0.5);
				this.scene.rotate(Math.PI / 180 * 90, 0, 1, 0);
				this.scene.rotate(Math.PI / 180 * 120, 1, 0, 0);
				this.scene.rotate(Math.PI / 180 * 90, 0, 0, 1);
				this.scene.scale(0.7, 1, 0.5);
				this.prism.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
				this.scene.translate(0.75, 2.1, 0.47);
				this.scene.rotate(Math.PI/180 * 135 , 0, 0, 1);
				this.scene.scale(0.5, 0.5, 0.5);
				this.triangle.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
				this.scene.translate(0.47, 2.15, 0.47);
				this.scene.rotate(Math.PI/4, 0, 0, 1);
				this.scene.rotate(Math.PI/180 *55, 0, 0, 1);
				this.scene.scale(0.5, 0.34, 0.5);
				this.triangle.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
				this.scene.translate(0.75, 2.1, -0.47);
				this.scene.rotate(Math.PI/180 * 135 , 0, 0, 1);
				this.scene.scale(0.5, 0.5, 0.5);
				this.triangle.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
				this.scene.translate(0.47, 2.15, -0.47);
				this.scene.rotate(Math.PI/4, 0, 0, 1);
				this.scene.rotate(Math.PI/180 *55, 0, 0, 1);
				this.scene.scale(0.5, 0.34, 0.5);
				this.triangle.display();
			this.scene.popMatrix();
			//----------------------

			// ---- displaying eye
			this.scene.pushMatrix();
				this.scene.translate(1.3, 1.7, 0.5);
				this.scene.scale(0.2, 0.2, 0.2);
				this.scene.rotate(Math.PI / 180 * 90, 1, 0, 0);
				this.eye.display();
			this.scene.popMatrix();

			// ---- displaying other eye
			this.scene.pushMatrix();
				this.scene.translate(1.3, 1.7, -0.5);
				this.scene.scale(0.2, 0.2, 0.2);
				this.scene.rotate(Math.PI / 180 * 90, 1, 0, 0);
				this.eye.display();
			this.scene.popMatrix();
			
			// ---- displaying Wing
			this.scene.pushMatrix();
				this.birdMaterial.apply();
				this.scene.rotate(-Math.sin(this.scene.t + Math.PI / 6) * 0.25 * this.scene.speedFactor, 1, 0, 0);
				this.leftWing.display();
			this.scene.popMatrix();

			// --- displaying tail
			this.scene.pushMatrix();
				this.scene.translate(-1, 0.5, 0);
				this.scene.rotate(Math.PI / 180 * 90, 1, 0, 0);
				this.scene.scale(1, 0.5, 0.5);
				this.square.display();
			this.scene.popMatrix();

			// ---- displaying wing
			this.scene.pushMatrix();
				this.birdMaterial.apply();
				this.scene.rotate(Math.sin(this.scene.t + Math.PI / 6) * 0.25 * this.scene.speedFactor, 1, 0, 0);
				this.rigthWing.display();	
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

		this.scene.popMatrix();

	}

}


