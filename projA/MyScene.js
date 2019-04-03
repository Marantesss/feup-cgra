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

        //Initialize scene objects
        this.axis = new CGFaxis(this);

        //Objects connected to MyInterface
        this.tree = new MyTree(this, 2, 0.5, 3, 1, "images/tree_trunk.jpg", "images/leaves.jpg");
        this.treeGroup = new MyTreeGroupPatch(this, 2, 0.5, 3, 1, "images/tree_trunk.jpg", "images/leaves.jpg");
        this.treeRow = new MyTreeRowPatch(this, 2, 0.5, 3, 1, "images/tree_trunk.jpg", "images/leaves.jpg");
        this.unitCubeQuad = new MyUnitCubeQuad(this);
        this.house = new MyHouse(this);
        this.voxelHill = new MyVoxelHill(this, - 5, 3,  4);
        this.voxelHill1 = new MyVoxelHill(this,5, -15,  3);
        this.cubeMap = new MyCubeMap(this);
        this.quad = new MyQuad(this);

        // ---- Applied Material
        this.cubeMapMaterialDay = new CGFappearance(this);
        this.cubeMapMaterialDay.setAmbient(0.1, 0.1, 0.1, 1);
        this.cubeMapMaterialDay.setDiffuse(0.9, 0.9, 0.9, 1);
        this.cubeMapMaterialDay.setSpecular(0.1, 0.1, 0.1, 1);
        this.cubeMapMaterialDay.setShininess(10.0);
        this.cubeMapMaterialDay.loadTexture('images/imagem.png');

        // Red Diffuse (no ambient, no specular)
        this.cubeMapMaterialNight = new CGFappearance(this);
        this.cubeMapMaterialNight.setAmbient(0.8, 0.8, 0.8, 1.0);
        this.cubeMapMaterialNight.setDiffuse(0.2, 0.2, 0.2, 1.0);
        this.cubeMapMaterialNight.setSpecular(0, 0, 0, 1.0);
        this.cubeMapMaterialNight.setShininess(10.0);
        this.cubeMapMaterialNight.loadTexture('images/imagem.png');
  
        this.selectedMode = 1;
        this.modes = [this.cubeMapMaterialNight, this.cubeMapMaterialDay];   
   
       // Labels and ID's for object selection on
        this.modeIds = { 'Night': 0, 'Day': 1 }; 
        
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
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
        this.cubeMap.setMode(this.modes[this.selectedMode]);
        
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

        this.house.display();
        this.treeGroup.display();
        this.treeRow.display();
        this.tree.display();
        this.voxelHill.display();
        this.voxelHill1.display();  
        this.quad.display();     
        this.modes[this.selectedMode].apply();
        this.cubeMap.display()

        // ---- END Primitive drawing section
    }
}