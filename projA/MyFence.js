/**
 * MyFence
 * @constructor
 * @param scene - Reference to MyScene object
 * @param coordx - the coord x of the tin
 * @param coordy - the coord y of the tin
 */
class MyFence extends CGFobject {
	constructor(scene, coordx, coordz) {
        super(scene);
        this.coordx = coordx;
        this.coordz = coordz;

        this.cylinder = new MyCylinder(this.scene, 10, 10);

        this.cylinder.initBuffers();

        this.woodMaterial = new CGFappearance(this.scene);
        this.woodMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.woodMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.woodMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.woodMaterial.setShininess(10.0);
        this.woodMaterial.loadTexture('images/wood.jpg');
    }
    
	display() {
        this.woodMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        // ---- displaying vertical pieces
        this.scene.pushMatrix();
        this.scene.translate(this.coordx + 0.25, 0,this.coordz);
        this.scene.scale(0.1, 1, 0.1);
		this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.coordx + 0.75, 0,this.coordz);
        this.scene.scale(0.1, 1, 0.1);
		this.cylinder.display();
        this.scene.popMatrix();

        // ---- displaying horizontal pieces
        this.scene.pushMatrix();
        this.scene.translate(this.coordx + 1, 0.25, this.coordz);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.scene.scale(0.1, 1, 0.1);
		this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.coordx + 1, 0.75, this.coordz);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.scene.scale(0.1, 1, 0.1);
        this.cylinder.display();
        this.scene.popMatrix();
    }
    
    initBuffers() {
        this.cylinder.initBuffers();
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
    }
    
    updateBuffers(complexity) {
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}
