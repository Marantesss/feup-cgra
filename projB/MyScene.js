/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
	constructor() {
		super();
	}

	init(application) {
		super.init(application);
		this.initCameras();
		this.initLights();

		var FPS = 20; //numero de frames por segundo

		//Background color
		this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

		this.gl.clearDepth(100.0);
		this.gl.enable(this.gl.DEPTH_TEST);
		this.gl.enable(this.gl.CULL_FACE);
		this.gl.depthFunc(this.gl.LEQUAL);
		this.enableTextures(true);
		this.setUpdatePeriod(1000 / FPS);

		//bird moviment	
		this.count = false;
		this.turnVar = false;
		
		//Initialize scene objects
		this.axis = new CGFaxis(this);

		// ---- CubeMap
		this.cubeMap = new MyCubeMap(this);

		// ---- house
		this.house = new MyHouse(this, 3, 3);

		// --- Bird is 3 units above the ground
		this.bird = new MyBird(this, 0, 0, 0, 3, 0); 
		this.birdInNest = new MyBird(this, 0, 0 ,0,0,0);

		// -- Tree Branch
		this.treeBranch0 = new MyTreeBranch(this, 2, 0.1, "images/tree_trunk.jpg", 8.5, 3.8, 0);
		this.treeBranch1 = new MyTreeBranch(this, 2, 0.2, "images/tree_trunk.jpg", 0, -3, Math.PI/6);
		this.treeBranch2 = new MyTreeBranch(this, 2, 0.2, "images/tree_trunk.jpg", -10, -7, Math.PI/6);
		this.treeBranch3 = new MyTreeBranch(this, 2, 0.2, "images/tree_trunk.jpg", -4 , 7, Math.PI/5);
		this.treeBranch4 = new MyTreeBranch(this, 2, 0.2, "images/tree_trunk.jpg", 6, 15.5, Math.PI /4);
		this.treeBranch = new MyTreeBranch(this, 1, 0.2, "images/tree_trunk.jpg", 0, 0, 0);
		this.treeBranch.visible = false;

		this.treesBranchs = [ this.treeBranch0, this.treeBranch1, this.treeBranch2, this.treeBranch3, this.treeBranch4];
			
		// ---- Lighting
		this.lightning = new MyLightning(this);

		// ---- Nest
		this.nest = new MyNest(this, 3, 0.2, "images/tree_trunk.jpg");

		// ---- Tree
		this.tree = new MyLSPlant(this);

		/* **** MATERIALS **** */
		// ---- Applied Material
		this.dayMaterial = new CGFappearance(this);
		this.dayMaterial.setAmbient(0.1, 0.1, 0.1, 1);
		this.dayMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
		this.dayMaterial.setSpecular(0.1, 0.1, 0.1, 1);
		this.dayMaterial.setShininess(10.0);
		this.dayMaterial.loadTexture('images/skybox_day.png');

		this.NightMaterial = new CGFappearance(this);
		this.NightMaterial.setAmbient(0.8, 0.8, 0.8, 1.0);
		this.NightMaterial.setDiffuse(0.9, 0.9, 0.9, 1.0);
		this.NightMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
		this.NightMaterial.setShininess(10.0);
		this.NightMaterial.loadTexture('images/skybox_night.jpg');

		//Objects connected to MyInterface
		this.selectedMode = 0;
		this.scaleFactor = 1;
		this.speedFactor = 1;

		this.modes = [this.dayMaterial, this.NightMaterial];

		// Labels and ID's for object selection on MyInterface
		this.modeIds = { 'Day': 0, 'Night': 1 };

		this.cil = new MyCylinder(this, 20, 20);

		// -- variables to go to the Nest
		this.NestX = 6.7;
		this.NestY = 3.3;
		this.NestZ = 5.2;

	}

	initLights() {
		this.lights[0].setPosition(15, 2, 5, 1);
		this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[0].enable();
		this.lights[0].update();
	}

	initCameras() {
		this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(45, 45, 45), vec3.fromValues(0, 0, 0));
	}

	setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

	updateAppliedMode() {
		this.modes[this.selectedMode].apply();
		this.updateLights();
	}

	updateLights() {
		if (this.selectedMode == 0) {
			this.lights[0].enable();
			this.lights[1].disable();
			this.lights[2].disable();
			this.lights[3].disable();
		}
		else {
			this.lights[0].disable();
			this.lights[1].enable();
			this.lights[2].enable();
			this.lights[3].enable();
		}
	}


	update(t) {
		this.checkKeys();
		this.bird.update(t);
		this.lightning.update(t);
	}


	// controls animation
	checkKeys() {
		var text = "Keys pressed: ";
		var keysPressed = false;

		// Check for key codes e.g. in ​https://keycode.info/
		if (this.gui.isKeyPressed("KeyW")) {
			text += " W ";
			this.count = true;
			this.bird.accelerate(this.count);
			keysPressed = true;
		}

		if (this.gui.isKeyPressed("KeyS")) {
			text += " S ";
			this.count = false;
			this.bird.accelerate(this.count);
			keysPressed = true;
		}

		if (this.gui.isKeyPressed("KeyA")) {
			text += " A ";
			this.turnVar = true;
			this.bird.turn(this.turnVar);
			keysPressed = true;
		}

		if (this.gui.isKeyPressed("KeyD")) {
			text += " D ";
			this.turnVar = false;
			this.bird.turn(this.turnVar);
			keysPressed = true;
		}

		if (this.gui.isKeyPressed("KeyR")) {
			text += " R ";

			this.bird.reset();
			this.resetTreeBranchs();
			keysPressed = true;
		}

		if (this.gui.isKeyPressed("KeyL")) {
			text += " L ";

			if (!this.lightning.isAnimated())
				this.lightning.startAnimation();
			keysPressed = true;
		}
		if (this.gui.isKeyPressed("KeyP")) {
			text += " P ";
			this.bird.goDown();
			keysPressed = true;
		}
		
		if (keysPressed)
			console.log(text);
	}

	display() {
		// ---- BEGIN Background, camera and axis setup
		// Clear image and depth buffer everytime we update the scene
		this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
		
		// Initialize Model-View matrix as identity (no transformation
		this.updateProjectionMatrix();
		this.loadIdentity();
		
		// Apply transformations corresponding to the camera position relative to the origin
		this.applyViewMatrix();

		// Draw axis
		this.axis.display();

		// Apply default appearance
		this.setDefaultAppearance();

		// ---- BEGIN Primitive drawing section

		// this.terrain.display(); 

		this.displayHouse();

		this.displayCubeMap();

		this.displayBird();

		this.displayNest();

		this.lightning.display();
		
		this.displayTreeBranchs();
		
		this.checkCollision();
		
		this.tree.display();
		
		// ---- END Primitive drawing section
		
	/*	this.translate(0,3,1);
		this.scale(0.2,0.2, 0.2);
		this.cil.display();
		this.popMatrix();

		this.pushMatrix();
		this.translate(0,3,-1);
		this.scale(0.2,0.2, 0.2);
		this.cil.display();
		this.popMatrix();*/

	}

	resetTreeBranchs(){
		for(var i = 0; i < this.treesBranchs.length; i++){
			this.treesBranchs[i].visible = true;
		}
	}

	checkCollision(){
		if(this.bird.state == 2  && this.bird.Y < 0.5){
			for( var i = 0; i < this.treesBranchs.length; i++){
				console.log(this.treeBranch.x);
				console.log(this.treeBranch.xf);
				console.log(this.treeBranch.z);
				console.log(this.treeBranch.zf);
				if(((this.bird.X <= this.treesBranchs[i].xf + 3) && (this.bird.X >= this.treesBranchs[i].x- 3 )) 
					&& (this.bird.Z <= this.treesBranchs[i].zf + 3 && this.bird.Z >= this.treesBranchs[i].z -3 )
					&& this.treesBranchs[i].visible == true){
					this.bird.pickUP(this.treeBranch);
					this.treesBranchs[i].visible = false;
					break;
				}
			}
			
		}
		this.goToTheNest();
	}

	goToTheNest(){
		if(this.bird.state == 5){
			//if arrived to the nest
			if(this.bird.X == this.NestX && this.bird.Z == this.NestZ){
				this.bird.treeBranch.visible = false;
				this.bird.state = 1;
			}
			if(this.bird.X > this.NestX && this.bird.Z > this.NestZ){
				this.bird.orientation = Math.PI/2;
			}
			else if(this.bird.X < this.NestX && this.bird.Z < this.NestZ){
				this.bird.orientation = Math.PI/4;
			}
			else if(this.bird.X > this.NestX){
				this.bird.orientation = Math.PI;
			}
			else if(this.bird.Z > this.NestZ){
				this.bird.orientation = Math.PI/2;
			}
			else if(this.bird.X < this.NestX){
				this.bird.orientation = Math.PI/2;
			}
			else if(this.bird.Z < this.NestZ){
				this.bird.orientation = -Math.PI/2;
			}
		}
		
		
	}

	displayTreeBranchs(){
		for(var i = 0; i < this.treesBranchs.length; i++){
			if(this.treesBranchs[i].visible)
				this.treesBranchs[i].display();
		}

	}

	displayNest(){
		this.pushMatrix();
			this.translate(6.7,3.3,5.2);
			this.rotate(-Math.PI/4,0,0,1);
            this.scale(0.5, 0.5, 0.5);
            this.nest.display();
		this.popMatrix();

		this.pushMatrix();
			this.translate(6.7,3.5,5.2);
			this.rotate(-Math.PI/4,0,0,1);
			this.scale(0.2, 0.2, 0.2);
			this.birdInNest.display();
		this.popMatrix();
		
	}

	displayCubeMap() {
		this.dayMaterial.apply();
		if (this.selectedMode == 0) {
			this.modes[0].apply();
		}
		else {
			this.modes[1].apply();
		}
		this.cubeMap.display();
	}

	displayHouse() {
        this.pushMatrix();
            this.scale(1.8, 1.8, 1.8);
            this.house.display();
        this.popMatrix();
	}
	
	displayBird() {
		this.pushMatrix();			
			this.scale(0.5*this.scaleFactor, 0.5*this.scaleFactor, 0.5*this.scaleFactor);
			this.bird.display();
		this.popMatrix();
	 }
 
}