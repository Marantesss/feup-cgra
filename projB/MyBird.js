/**
* MyPyramid
* @constructor
* @param scene - Reference to MyScene object
*/
class MyBird extends CGFobject {
	constructor(scene, orientation, Bspeed, positionX, positionY, positionZ) {
		super(scene);
		this.orientation = orientation; //angle
		this.speed = Bspeed;
		this.X = positionX;
		this.Y = positionY;
		this.Z = positionZ;

		this.lastTime = 0;
		this.t = 0;

		this.unitCubeQuad = new MyUnitCubeQuad(this.scene, UnitCubeEnum.BIRD);
		this.pyramid = new MyPyramid(this.scene, 4, 4);
		this.prism = new MyPrism(this.scene, 3, 3);
		this.leftWing = new MyLeftWing(this.scene);
		this.rigthWing = new MyRigthWing(this.scene);
		this.square = new MySquare(this.scene);
		this.paw = new MyPaw(this.scene);
		this.eye = new MyUnitCubeQuad(this.scene, UnitCubeEnum.EYE);
		this.triangle = new MyTriangle(this.scene);
		this.treeBranch;
		
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

		this.state = {
			Flying: 1,
			Down: 2,
			Up: 3,
			DownWithTree: 4,
			FlyingWithTree: 5 ,
			UpWithTree : 6
		};

		this.state = 1; //bird starts in state flying

	}

	reset() {
		this.X = 0;
		this.Y = 3; //Bird is 3 units above the ground
		this.Z = 0;
		this.speed = 0;
		this.orientation = 0;
		this.state = 1;
	}

	goDown(){
		if(this.state == 1 ){
			this.state = 2; //change state to down
		}
		if(this.state == 5){
			this.state = 4; //change state to DownWithTree
		}
	}

	goUP(){
		if(this.state == 2){
			this.state = 3; //change state to up
		}
		if(this.state == 4){
			this.state = 6; //change state to UpWithTree
		}
	}

	pickUP(treeBranch){
		this.treeBranch = treeBranch;	
		this.treeBranch.X = 0;
		this.treeBranch.Z = 0;
		this.state = 4;	
		this.goUP();
	}
	
	putInTheNest(){
		this.treeBranch.visible = false;
		this.state = 3;
		console.log(this.state);
	}

	accelerate(v) {
		if (v && this.speed < 8)
			this.speed= this.speed + 1;
		
		else if( !v && this.speed > -8)
			this.speed = (this.speed - 1);

	}

	turn(v) {
		if (v)
			this.orientation = this.orientation + (10 * Math.PI)/180;
		else
			this.orientation = this.orientation - (10 *Math.PI) /180;
		
		this.orientation = this.orientation * this.scene.speedFactor;
			

	}

	update(t) {
		this.lastTime = this.lastTime || 0;
        this.deltaTime = t - this.lastTime;
        this.lastTime = t;

		this.X = this.X + Math.cos(this.orientation) * (this.speed / 500) * this.deltaTime * this.scene.speedFactor ;
		this.Z = this.Z - Math.sin(this.orientation) * (this.speed / 500) * this.deltaTime * this.scene.speedFactor ;	
				
		if(this.state == 2 || this.state == 4){ //going down
			this.Y = this.Y - this.deltaTime * (3/1000);
		}

		if(this.state == 3 ||  this.state == 6){ //going up
			this.Y = this.Y + this.deltaTime * (3/1000);
		}

		this.t = t;

		
	}

	display() {
		// ---- displaying Texture
		this.birdMaterial.setTexture(this.birdTexture);
		this.birdMaterial.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		
		if(this.Y < 0 ){ //if get to the ground go up
			this.goUP();
		}
			
		if(this.state == 3 && this.Y >= 3){
			this.Y = 3;
			this.state = 1;
		}

		if(this.state == 6  && this.Y >= 3){
			this.Y = 3;
			this.state = 5;
		}

		if((this.state == 4  || this.state == 6 || this.state == 5) && this.treeBranch.visible){
			this.scene.pushMatrix();
				this.scene.translate(this.X,this.Y- 0.1, this.Z);					
				//this.scene.rotate(Math.PI/2 , 0,1,0);	
				this.scene.rotate(this.orientation, 0, 1, 0);	
				this.treeBranch.display();
			this.scene.popMatrix();
		}			
		if(this.state == 5){
			this.scene.pushMatrix();
				this.scene.translate(this.X , this.Y - 0.1, this.Z );
				this.scene.translate(0, Math.sin(this.t/(1000/(2*Math.PI))), 0);		
				//this.scene.rotate(Math.PI/2 , 0,1,0);	
				this.scene.rotate(this.orientation, 0, 1, 0);								
				this.treeBranch.display();
			this.scene.popMatrix();
		}
		this.scene.pushMatrix();
			//mover passaro
			this.scene.translate(this.X, this.Y, this.Z);
			this.scene.rotate(this.orientation, 0, 1, 0);	
			//moviment up and down	
			if(this.state == 1 || this.state == 5)
				this.scene.translate(0, Math.sin(this.t/(1000/(2*Math.PI))), 0);

			
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
				this.scene.rotate(-Math.sin(this.t/(1000/(2*Math.PI)) + Math.PI / 6) * 0.25 * this.scene.speedFactor, 1, 0, 0);
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
				this.scene.rotate(Math.sin(this.t/(1000/(2*Math.PI)) + Math.PI / 6) * 0.25 * this.scene.speedFactor, 1, 0, 0);
				this.rigthWing.display();	
			this.scene.popMatrix();	

			//  --- displaying paw
			this.scene.pushMatrix();
				this.scene.translate(0.5,0,0.2);
				this.scene.rotate(Math.PI/180*90, 1, 0, 0);
				this.scene.rotate(Math.PI/180*-90, 0, 0, 1);
				this.scene.scale(0.4,0.4,0.3);
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


