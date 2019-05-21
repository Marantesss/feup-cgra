/**
 * MyTerrain
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTerrain extends CGFobject {
	constructor(scene, coords) {
		super(scene);
		this.initBuffers();
		if (coords != undefined)
            this.updateTexCoords(coords);
            
        this.plane = new Plane(this.scene, 32);

        this.mountainMaterial = new CGFappearance(this.scene);
        this.mountainMaterial.setAmbient(0.3, 0.3, 0.3, 1);
        this.mountainMaterial.setDiffuse(0.7, 0.7, 0.7, 1);
        this.mountainMaterial.setSpecular(0.0, 0.0, 0.0, 1);
        this.mountainMaterial.setShininess(120);
    
        this.mountainTexture = new CGFtexture(this.scene, "images/terrain.jpg");
        this.mountainMaterial.setTexture(this.mountainTexture);
        this.mountainMaterial.setTextureWrap('REPEAT', 'REPEAT');
    
        this.mountainHeightmap = new CGFtexture(this.scene, "images/heightmap.jpg");
           
        this.mountainShader = new CGFshader(this.scene.gl, "shaders/mountain.vert", "shaders/mountain.frag");
        this.mountainShader.setUniformsValues({ uSampler2: 1 });

    }
    
	display() {
		// ---- activate selected shader
        this.scene.setActiveShader(this.mountainShader);
        this.scene.pushMatrix();

        // ---- bind additional texture to texture unit 1
        this.mountainHeightmap.bind(1);

        // ---- display
        this.scene.pushMatrix();
        this.mountainMaterial.apply();
        this.scene.rotate(-0.5*Math.PI, 1, 0, 0);
        this.scene.scale(30, 30, 1);
        this.plane.display();
        this.scene.popMatrix();
	
	}
}

