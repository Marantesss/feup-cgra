/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        
        this.selectedMode = 0;
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
        this.quadFloor = new MyQuad(this, [0,1, 20,1, 0,-19, 20,-19]); // 20x20
        
        // ---- trees
        this.tree = new MyTree(this, 2, 0.5, 3, 1, "images/tree_trunk.jpg", "images/leaves.jpg");
        this.treeGroup = new MyTreeGroupPatch(this, 2, 0.5, 3, 1, "images/tree_trunk.jpg", "images/leaves.jpg");
        this.treeRow = new MyTreeRowPatch(this, 2, 0.5, 3, 1, "images/tree_trunk.jpg", "images/leaves.jpg");
        
        // ---- houses
        this.unitCubeQuad = new MyUnitCubeQuad(this);
        this.house = new MyHouse(this, -15, -13);

        // ---- hills
        this.voxelHill = new MyVoxelHill(this, 5, 4, 3);
        this.voxelHill1 = new MyVoxelHill(this, -15, 3, 2);

        // ---- CubeMap
        this.cubeMap = new MyCubeMap(this);
        this.quad = new MyQuad(this);

        // -- fire
        this.fire = new MyFire(this,0,0);

        /* **** MATERIALS **** */
        // ---- Applied Material
        this.cubeMapMaterialDay = new CGFappearance(this);
        this.cubeMapMaterialDay.setAmbient(0.1, 0.1, 0.1, 1);
        this.cubeMapMaterialDay.setDiffuse(0.9, 0.9, 0.9, 1);
        this.cubeMapMaterialDay.setSpecular(0.1, 0.1, 0.1, 1);
        this.cubeMapMaterialDay.setShininess(10.0);

        this.cubeMapMaterialNight = new CGFappearance(this);
        this.cubeMapMaterialNight.setAmbient(0.8, 0.8, 0.8, 1.0);
        this.cubeMapMaterialNight.setDiffuse(0.2, 0.2, 0.2, 1.0);
        this.cubeMapMaterialNight.setSpecular(0, 0, 0, 1.0);
        this.cubeMapMaterialNight.setShininess(10.0);

        this.modes = [this.cubeMapMaterialDay, this.cubeMapMaterialNight];

        // Labels and ID's for object selection on MyInterface
        this.modeIds  = { 'Day': 0, 'Night': 1};

        /* **** TEXTURES **** */
        this.grassFloor = new CGFtexture(this, 'images/Tiles/grass_top.png');
        this.cubeMapTextureDay = new CGFtexture(this, 'images/skybox_day.png')
        this.cubeMapTextureNight = new CGFtexture(this, 'images/skybox_day.png');

        this.texture = new CGFtexture(this, 'images/aas.jpg');
        /* ******* */
        
    }
    initLights() {
        //-- Day Light
        this.lights[0].setPosition(20, 100, 50, 1); //Y elevado
        this.lights[0].setDiffuse(1.0, 0.2, 0.2, 1.0);
        this.lights[0].setLinearAttenuation(0.0001);
        this.lights[0].enable();
        this.lights[0].update();

        //-- Night Light
        this.lights[1].setPosition(20, 100, 50, 1); //Y elevado
        this.lights[1].setDiffuse(0.2, 0.2, 1.0, 1.0);
        this.lights[1].setLinearAttenuation(0.01);
        this.lights[1].update();

        // camp fire
        this.lights[2].setPosition(15, 0, 5, 1); //coords os fire
        this.lights[2].setDiffuse(1.0, 0, 0, 1.0);
        this.lights[2].setLinearAttenuation(1);
 
        this.lights[2].update();

        // flashlight
        this.lights[3].setPosition(1, 2, 5, 1);
        this.lights[3].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[3].setLinearAttenuation(1);
        this.lights[3].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

     //Function that resets selected mode in the cubeMap
     updateAppliedMode() {
        this.displayCubeMap() ;
        
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
        //this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        this.displayCubeMap();
        
        this.displayFloor();
        
        this.displayTrees();

        this.displayHills();

        this.house.display();
        
        //this.fire.display();
        // ---- END Primitive drawing section
    }

    displayFloor() {
        this.modes[this.selectedMode].setTexture(this.grassFloor);
        this.modes[this.selectedMode].apply();

        this.pushMatrix();
        this.scale(50,50,50);
        this.rotate(-Math.PI/2, 1, 0, 0);
        this.quadFloor.display();
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
        // ---- some random trees
        /*
        this.pushMatrix();
        this.translate(3,0,3);
        this.treeGroup.display();
        this.translate(-4,0,-5);
        this.popMatrix();
        */
    }

    displayHills() {
        this.voxelHill.display();
        this.voxelHill1.display();
    }

    displayCubeMap() {
        this.modes[this.selectedMode].setTexture(this.cubeMapTextureDay);
        this.modes[this.selectedMode].apply(); 
        switch(this.selectedMode){
            case 0:  
             this.lights[0].enable();
             this.lights[1].disable();
             this.lights[2].disable();
             this.lights[3].disable();
               break;
            case 1:
              this.lights[0].disable();
              this.lights[1].enable();
              this.lights[2].enable();
              this.lights[3].enable();
              break;
        }
            
        this.cubeMap.display()
    }
    
}