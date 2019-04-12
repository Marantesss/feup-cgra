/**
 * MySilo
 * @constructor
 * @param scene - Reference to MyScene object
 * @param coordx - the coord x of the tin
 * @param coordy - the coord y of the tin
 */
class MySilo extends CGFobject {
	constructor(scene, coordx, coordz) {
        super(scene);
        this.coordx = coordx;
        this.coordz = coordz;

        this.cylinder = new MyCylinder(this.scene, 10, 10);
        this.cone = new MyCone(this.scene, 10, 10);
        this.prism = new MyPrism(this.scene, 4, 4);

        this.cone.initBuffers();
        this.cylinder.initBuffers();
        this.prism.initBuffers();

        this.siloMaterial = new CGFappearance(this.scene);
        this.siloMaterial.setAmbient(0.7, 0.7, 0.7, 1);
        this.siloMaterial.setDiffuse(0.3, 0.3, 0.3, 1);
        this.siloMaterial.setSpecular(1.0, 1.0, 1.0, 1);    // Material altamente especular
        this.siloMaterial.setShininess(10.0);
        this.siloMaterial.loadTexture('images/metal.jpg');     
    }
    
	display() {
        this.siloMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        
        // ----center cylinder
        this.scene.pushMatrix();
        this.scene.translate(this.coordx, 1.5,this.coordz);
        this.scene.scale(1,3,1);
		this.cylinder.display();
        this.scene.popMatrix();
        // ---- top cone
        this.scene.pushMatrix();
        this.scene.translate(this.coordx, 4.5,this.coordz);
        this.scene.scale(1,1,1);
		this.cone.display();
        this.scene.popMatrix();
        // ---- bottom cone
        this.scene.pushMatrix();
        this.scene.translate(this.coordx, 1.5,this.coordz);     
        this.scene.scale(1,1,1);
        this.scene.rotate(Math.PI, 0, 0, 1);
		this.cone.display();
        this.scene.popMatrix();
        // ---- bottom cylinder
        this.scene.pushMatrix();
        this.scene.translate(this.coordx, 0, this.coordz);
        this.scene.scale(0.15, 1, 0.15);
		this.cylinder.display();
        this.scene.popMatrix();
        // ---- side prisms
        this.scene.pushMatrix();
        this.scene.translate(this.coordx + 0.85, 0, this.coordz);
        this.scene.scale(0.15, 2, 0.15);
        this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.coordx - 0.85, 0, this.coordz);
        this.scene.scale(0.15, 2, 0.15);
        this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.coordx, 0, this.coordz + 0.8);
        this.scene.scale(0.15, 2, 0.15);
        this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.coordx, 0, this.coordz - 0.8);
        this.scene.scale(0.15, 2, 0.15);
        this.prism.display();
        this.scene.popMatrix();
    }
    
    initBuffers() {
        this.cylinder.initBuffers();
        this.cone.initBuffers();
        this.prism.initBuffers();
        
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
    }
    
    updateBuffers(complexity) {
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}
