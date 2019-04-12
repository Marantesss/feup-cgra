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

        this.enableTextures(true);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        /* **** Initialize scene objects **** */
        this.axis = new CGFaxis(this);

        /* **** Objects connected to MyInterface **** */
        // ---- floor
        this.planeFloor = new MyPlane(this, 20, 0, 20, 0, 20);
        
        // ---- trees
        this.tree = new MyTree(this, 2, 0.5, 3, 1, "images/tree_trunk.jpg", "images/leaves.jpg");
        this.treeGroup = new MyTreeGroupPatch(this, 2, 0.5, 3, 1, "images/tree_trunk.jpg", "images/leaves.jpg");
        this.treeRow = new MyTreeRowPatch(this, 2, 0.5, 3, 1, "images/tree_trunk.jpg", "images/leaves.jpg");
        
        // ---- houses
        this.unitCubeQuad = new MyUnitCubeQuad(this);
        this.house = new MyHouse(this, 0, 0);

        // ---- hills
        this.voxelHill = new MyVoxelHill(this, 8, 10, 4);
        this.voxelHill1 = new MyVoxelHill(this, -15, 3, 2);

        // ---- CubeMap
        this.cubeMap = new MyCubeMap(this);

        // -- fire
        this.fire = new MyFire(this, 0 , -12);

        //-- farm
        this.farm = new MyFarm(this, 6, -10);

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

        this.selectedMode = 0;
        this.displayTex = true;
        
        this.modes = [this.dayMaterial, this.NightMaterial];

        // Labels and ID's for object selection on MyInterface
        this.modeIds  = { 'Day': 0, 'Night': 1};  
    }

    initLights() {
        // ---- Day Light
        this.lights[0].setPosition(20, 100, 50, 1); //Y elevado
        this.lights[0].setDiffuse(1, 1, 0.8, 1.0); //warm color
        this.lights[0].setLinearAttenuation(0.0001); //minimum atenuation
        this.lights[0].enable();
        this.lights[0].setVisible(true); // FOR TESTING
        this.lights[0].update();

        // ---- Night Light
        this.lights[1].setPosition(20, 100, 50, 1); //Y elevado
        this.lights[1].setDiffuse(0.0, 0.8, 1.0, 1.0); //cold color
        this.lights[1].setLinearAttenuation(0.02);// little atenuation
        this.lights[1].setVisible(true); // FOR TESTING
        this.lights[1].update();

        // ---- camp fire somewhere :)
        this.lights[2].setPosition(0, 0.8, -12, 1); //coords os fire
        this.lights[2].setDiffuse(1.0, 0.5, 0, 1); //warm color
        this.lights[2].setLinearAttenuation(0.1); // a lot atenuation
        this.lights[2].setVisible(true); // FOR TESTING
        this.lights[2].update();

        // ---- flashlight near the house
        this.lights[3].setPosition(0, 1.5, 2.5, 1);
        this.lights[3].setDiffuse(1.0, 1.0, 1.0, 1.0); //white
        this.lights[3].setLinearAttenuation(0.1); // a lot atenuation
        this.lights[3].setVisible(true); // FOR TESTING
        this.lights[3].update();
    }
    
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(50, 50, 50), vec3.fromValues(0, 0, 0));
    }

    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
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

    updateAppliedMode() {
        this.modes[this.selectedMode].apply();
        this.updateLights();
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

        // Update lights
        this.lights[0].update();
        this.lights[1].update();
        this.lights[2].update();
        this.lights[3].update();

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        this.enableTextures(this.displayTex);
        
        this.displayCubeMap();
        
        this.displayFloor();
        
        this.displayTrees();

        this.displayHills();

        this.displayHouse();

        this.pushMatrix();
        this.rotate(Math.PI/2, 0, 1, 0);
        this.farm.display();
        this.popMatrix();
        
        this.fire.display();
        
        // ---- END Primitive drawing section
    }

    displayFloor() {
        this.grassMaterial.apply();

        this.pushMatrix();
        this.scale(50,50,50);
        this.rotate(-Math.PI/2, 1, 0, 0);
        //this.quadFloor.display();
        this.planeFloor.display();
        this.popMatrix();
    }

    displayTrees() {
        // ---- borderline trees
        for (var i = 0; i < 4; i++) {
            this.pushMatrix();
            this.translate((i-2)*10, 0, 23);
            this.treeRow.display();
            this.popMatrix();

            this.pushMatrix();
            this.translate((i-2)*10, 0, -23);
            this.treeRow.display();
            this.popMatrix();

            this.pushMatrix();
            this.rotate(Math.PI/2, 0,1,0);
            this.translate((i-2)*10, 0, 23);
            this.treeRow.display();
            this.popMatrix();

            this.pushMatrix();
            this.rotate(Math.PI/2, 0,1,0);
            this.translate((i-2)*10, 0, -23);
            this.treeRow.display();
            this.popMatrix();
        }

        this.pushMatrix();
        this.translate(15, 0, -15);
        this.treeGroup.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-15, 0, 12);
        this.treeGroup.display();
        this.popMatrix();
    }

    displayHouse(){
         this.pushMatrix();
         this.scale(3,2,3);
         this.house.display();
         this.popMatrix();
    }
    
    displayHills() {
        this.voxelHill.display();
        this.voxelHill1.display();
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
}
