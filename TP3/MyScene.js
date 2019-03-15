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
        this.initMaterials();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.plane = new MyPlane(this, 5);
        this.cone = new MyCone(this, 3, 1);
        this.pyramid = new MyPyramid(this, 3, 1);
        this.tangram = new MyTangram(this);
        this.unitCube = new MyUnitCube(this);
        
        this.objects = [this.plane, this.pyramid, this.cone, this.unitCube, this.tangram];

        // Labels and ID's for object selection on MyInterface
        this.objectIDs = { 'Plane': 0, 'Pyramid': 1, 'Cone': 2, 'UnitCube': 3, 'Tangram': 4};

        //Other variables connected to MyInterface
        this.selectedObject = 0;
        this.selectedMaterial = 0;
        this.displayAxis = true;
        this.displayNormals = false;
        this.objectComplexity = 0.5;
        this.scaleFactor = 2.0;

        this.ambientLight = 0.3;
    }
    initLights() {
        this.setGlobalAmbientLight(0.3, 0.3, 0.3, 1.0);

        this.lights[0].setPosition(2.0, 2.0, -1.0, 1.0);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].setSpecular(1.0, 1.0, 1.0, 1.0);
        this.lights[0].disable();
        this.lights[0].setVisible(true);
        this.lights[0].update();

        this.lights[1].setPosition(0.0, -1.0, 2.0, 1.0);
        this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[1].setSpecular(1.0, 1.0, 0.0, 1.0);
        this.lights[1].disable();
        this.lights[1].setVisible(true);
        this.lights[1].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(10, 10, 10), vec3.fromValues(0, 0, 0));
    }

    hexToRgbA(hex)
    {
        var ret;
        //either we receive a html/css color or a RGB vector
        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
            ret=[
                parseInt(hex.substring(1,3),16).toPrecision()/255.0,
                parseInt(hex.substring(3,5),16).toPrecision()/255.0,
                parseInt(hex.substring(5,7),16).toPrecision()/255.0,
                1.0
            ];
        }
        else
            ret=[
                hex[0].toPrecision()/255.0,
                hex[1].toPrecision()/255.0,
                hex[2].toPrecision()/255.0,
                1.0
            ];
        return ret;
    }

    updateCustomMaterial() {
        var rgba;

        this.customMaterial.setAmbient(...this.hexToRgbA(this.customMaterialValues['Ambient']));
        this.customMaterial.setDiffuse(...this.hexToRgbA(this.customMaterialValues['Diffuse']));
        this.customMaterial.setSpecular(...this.hexToRgbA(this.customMaterialValues['Specular']));

        this.customMaterial.setShininess(this.customMaterialValues['Shininess']);

    };

    updateObjectComplexity(){
        this.objects[this.selectedObject].updateBuffers(this.objectComplexity);
    }

    initMaterials() {
        // Red Ambient (no diffuse, no specular)
        this.material1 = new CGFappearance(this);
        this.material1.setAmbient(1, 0, 0, 1.0);
        this.material1.setDiffuse(0, 0, 0, 1.0);
        this.material1.setSpecular(0, 0, 0, 1.0);
        this.material1.setShininess(10.0);

        // Red Diffuse (no ambient, no specular)
        this.material2 = new CGFappearance(this);
        this.material2.setAmbient(0.0, 0.0, 0.0, 1.0);
        this.material2.setDiffuse(1, 0, 0, 1.0);
        this.material2.setSpecular(0, 0, 0, 1.0);
        this.material2.setShininess(10.0);

        // Red Specular (no ambient, no diffuse)
        this.material3 = new CGFappearance(this);
        this.material3.setAmbient(0, 0, 0, 1.0);
        this.material3.setDiffuse(0, 0, 0, 1.0);
        this.material3.setSpecular(1, 0, 0, 1.0);
        this.material3.setShininess(10.0);

        // Wood Material (no ambient, no specular)
        this.material4 = new CGFappearance(this);
        this.material4.setAmbient(155/255, 78/255, 0/255, 1.0);
        this.material4.setDiffuse(155/255, 78/255, 0/255, 1.0); 
        this.material4.setSpecular(0/255, 0/255, 0/255, 1.0);
        this.material4.setShininess(10.0);

        // diamond green
        this.material5 = new CGFappearance(this);
        this.material5.setAmbient(0/255, 255/255, 79/255, 0.05);
        this.material5.setDiffuse(0/255, 255/255, 79/255, 0.05);
        this.material5.setSpecular(0/255, 255/255, 79/255, 1.0);
        this.material5.setShininess(10.0);

        // triangle pink
        this.material6 = new CGFappearance(this);
        this.material6.setAmbient(255/255, 153/255, 255/255, 0.05);
        this.material6.setDiffuse(255/255, 153/255, 255/255, 0.05);
        this.material6.setSpecular(255/255, 153/255, 255/255, 1.0);
        this.material6.setShininess(10.0);

        // parallelogram yellow
        this.material7 = new CGFappearance(this);
        this.material7.setAmbient(255/255, 255/255, 60/255, 0.05);
        this.material7.setDiffuse(255/255, 255/255, 60/255, 0.05);
        this.material7.setSpecular(255/255, 255/255, 60/255, 1.0);
        this.material7.setShininess(10.0);

        // triangleSmall purple
        this.material8 = new CGFappearance(this);
        this.material8.setAmbient(255/255, 0/255, 0/255, 0.05);
        this.material8.setDiffuse(255/255, 0/255, 0/255, 0.05);
        this.material8.setSpecular(255/255, 0/255, 0/255, 1.0);
        this.material8.setShininess(10.0);

        // triangleBig light blue
        this.material9 = new CGFappearance(this);
        this.material9.setAmbient(28/255, 109/255, 255/255, 0.05);
        this.material9.setDiffuse(28/255, 109/255, 255/255, 0.05);
        this.material9.setSpecular(28/255, 109/255, 255/255, 1.0);
        this.material9.setShininess(10.0);

        // triangleSmall red
        this.material10 = new CGFappearance(this);
        this.material10.setAmbient(134/255, 0/255, 163/255, 0.05);
        this.material10.setDiffuse(134/255, 0/255, 163/255, 0.05);
        this.material10.setSpecular(134/255, 0/255, 163/255, 1.0);
        this.material10.setShininess(10.0);

        // triangleBig orange
        this.material11 = new CGFappearance(this);
        this.material11.setAmbient(255/255, 160/255, 28/255, 0.05);
        this.material11.setDiffuse(255/255, 160/255, 28/255, 0.05);
        this.material11.setSpecular(255/255, 160/255, 28/255, 1.0);
        this.material11.setShininess(10.0);

        // Custom material (can be changed in the interface)
        // initially midrange values on ambient, diffuse and specular, on R, G and B respectively

        this.customMaterialValues = {
            'Ambient': '#0000ff',
            'Diffuse': '#ff0000',
            'Specular': '#000000',
            'Shininess': 10
        }

        this.customMaterial = new CGFappearance(this);

        this.updateCustomMaterial();

        this.materials = [this.material1, this.material2, this.material3, this.material4, this.customMaterial, this.material5, this.material6, this.material7, this.material8, this.material9, this.material10, this.material11];

        // Labels and ID's for object selection on MyInterface
        this.materialIDs = {'Red Ambient': 0, 'Red Diffuse': 1, 'Red Specular': 2, 'Wood': 3 , 'Custom': 4};
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
        
        this.lights[0].update();
        this.lights[1].update();

        // updating light
        this.setGlobalAmbientLight(this.ambientLight, this.ambientLight, this.ambientLight, 1.0);

        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        // ---- BEGIN Primitive drawing section
        this.materials[this.selectedMaterial].apply();

        this.pushMatrix();
        this.scale(this.scaleFactor,this.scaleFactor,this.scaleFactor);
        
        if (this.displayNormals)
            this.objects[this.selectedObject].enableNormalViz();
        else
            this.objects[this.selectedObject].disableNormalViz();
        
        this.objects[this.selectedObject].display();
        this.popMatrix();
        // ---- END Primitive drawing section
    }
}