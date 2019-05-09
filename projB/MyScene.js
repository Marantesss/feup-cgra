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

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);
        this.setUpdatePeriod(50);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.plane = new Plane(this, 32);

         // ---- CubeMap
        this.cubeMap = new MyCubeMap(this);

         // ---- house
        this.house = new MyHouse(this, 4, 4);

        // --- Bird
        this.bird = new MyBird(this);


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

        this.grassMaterial = new CGFappearance(this);
        this.grassMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.grassMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.grassMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.grassMaterial.setShininess(10.0);
        this.grassMaterial.setTextureWrap('REPEAT', 'REPEAT');
        this.grassMaterial.loadTexture('images/Tiles/grass_top.png');

        //Objects connected to MyInterface
         this.selectedMode = 0;
        
        this.modes = [this.dayMaterial, this.NightMaterial];

        // Labels and ID's for object selection on MyInterface
        this.modeIds  = { 'Day': 0, 'Night': 1};  
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
    update(t){

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

        //Apply default appearance
        this.setDefaultAppearance();


        // ---- BEGIN Primitive drawing section
        this.pushMatrix();
        this.rotate(-0.5*Math.PI, 1, 0, 0);
        this.scale(60, 60, 1);
        this.plane.display();
        this.popMatrix();

        this.displayHouse();

        this.displayCubeMap();

        this.bird.display();
   

        // ---- END Primitive drawing section
    }

    displayCubeMap() {
        if (this.selectedMode == 0) {
            this.modes[0].apply();
        }
        else {
            this.modes[1].apply();
        }
        this.cubeMap.display();
    }
    
    displayHouse(){
         this.pushMatrix();
         this.scale(2,2,2);
         this.house.display();
         this.popMatrix();
    }
}