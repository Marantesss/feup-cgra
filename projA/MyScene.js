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
        this.tree = new MyTree(this, 3, 1, 3, 2, "", "");
        this.treeGroup = new MyTreeGroupPatch(this, 3, 1, 3, 2, "", "");
        this.treeRow = new MyTreeRowPatch(this, 3, 1, 3, 2, "", "");
        this.unitCubeQuad = new MyUnitCubeQuad(this);
        this.quad = new MyQuad(this);
        this.house = new MyHouse(this);
        this.voxelHill = new MyVoxelHill(this,5,  4);
        this.voxelHill1 = new MyVoxelHill(this,-15,  3);
        this.cubeMap = new MyCubeMap(this);

         //------ Applied Material
        this.cubeMapMaterial = new CGFappearance(this);
        this.cubeMapMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.cubeMapMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.cubeMapMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.cubeMapMaterial.setShininess(10.0);
        this.cubeMapMaterial.loadTexture('images/imagem.png');

        // Red Diffuse (no ambient, no specular)
        this.cubeMapMaterial1 = new CGFappearance(this);
        this.cubeMapMaterial1.setAmbient(0.8, 0.8, 0.8, 1.0);
        this.cubeMapMaterial1.setDiffuse(0.2, 0.2, 0.2, 1.0);
        this.cubeMapMaterial1.setSpecular(0, 0, 0, 1.0);
        this.cubeMapMaterial1.setShininess(10.0);
        this.cubeMapMaterial1.loadTexture('images/imagem.png');

        this.selectedMaterial = 0;
        
         this.materials = [this.cubeMapMaterial, this.cubeMapMaterial1];

       // Labels and ID's for object selection on MyInterface
        this.materialIDs  = { 'Day': 0, 'Night': 1};
        
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
        //this.tree.display();
        //this.house.display();
        //this.treeGroup.display();
        //this.treeRow.display();
        //this.voxelHill.display();
        //this.voxelHill1.display();
        this.materials[this.selectedMaterial].apply();       
        this.cubeMap.display()

        // ---- END Primitive drawing section
    }
}