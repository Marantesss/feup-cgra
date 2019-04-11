/**
 * MyFire
 * @constructor
 * @param scene - Reference to MyScene Object
 *
 */
class MyFire extends CGFobject {
    constructor (scene, coordx, coordz) {
        super(scene);
        this.coordx = coordx;
        this.coordz = coordz;
        this.cylinder = new MyCylinder(this.scene, 10, 10);
        this.cone = new MyCone(this.scene, 10 , 10);     
        this.cylinder.initBuffers();
        this.cone.initBuffers();

        this.fireMaterial = new CGFappearance(this.scene);
        this.fireMaterial.setAmbient(1.0, 1, 1, 1);
        this.fireMaterial.setDiffuse(1.0, 0.5, 0, 1);
        this.fireMaterial.setSpecular(1.0, 0.5, 0, 0);
        this.fireMaterial.setShininess(10.0);
        this.fireMaterial.loadTexture('images/Tiles/lava.png');

        this.woodMaterial = new CGFappearance(this.scene);
        this.woodMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.woodMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.woodMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.woodMaterial.setShininess(10.0);
        this.woodMaterial.loadTexture('images/wood.jpg');
    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(this.coordx, 0, this.coordz);
        this.scene.scale(0.3, 0.3, 0.3);

        // ---- displaying wood
        this.woodMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
       	this.scene.rotate(Math.PI/180*90, 1, 0, 0);
        this.scene.scale(0.5, 2.5, 0.5);
        this.cylinder.display();
        this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(1, 0.5, 0);
       	this.scene.rotate(-Math.PI/180*90, 1, 0, 0);
        this.scene.scale(0.5, 2.5, 0.5);
        this.cylinder.display();
        this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(1, 0.5, -1);
		this.scene.rotate(Math.PI/180*40, 0, 1, 0);
       	this.scene.rotate(Math.PI/180*90, 1, 0, 0);
        this.scene.scale(0.5, 2.5, 0.5);
        this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
		this.scene.translate(-2, 0.5, -1);
       	this.scene.rotate(Math.PI/180*90, 1, 0, 0);
        this.scene.scale(0.5, 2.5, 0.5);
        this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
		this.scene.translate(0, 0.5, 0-1);
       	this.scene.rotate(Math.PI/180*50, 1, 0, 0);
        this.scene.scale(0.5, 2.5, 0.5);
        this.cylinder.display();
        this.scene.popMatrix();
        
        // ---- displaying fire
        this.fireMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

		this.scene.pushMatrix();
		this.scene.translate(0, 1.5, 0);
        this.scene.scale(1.5, 2.5, 1.5);
        this.cone.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
		this.scene.translate(0, 1.5, 1);
		this.scene.rotate(Math.PI/180*50, 1, 0, 0);
        this.scene.scale(1.5, 2.5, 1.5);
        this.cone.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
		this.scene.translate(0, 1.5, -1);
		this.scene.rotate(-Math.PI/180*50, 1, 0, 0);
        this.scene.scale(1.5, 2.5, 1.5);
        this.cone.display();
        this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-1, 1.5, 0);
		this.scene.rotate(Math.PI/180*50, 0, 0, 1);
        this.scene.scale(1.5, 2.5, 1.5);
        this.cone.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
		this.scene.translate(1, 1.5, 0);
		this.scene.rotate(-Math.PI/180*50, 0, 0, 1);
        this.scene.scale(1.5, 2.5, 1.5);
        this.cone.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
		this.scene.translate(1, 2.5, 0);
		this.scene.rotate(-Math.PI/180*30, 0, 0, 1);
        this.scene.scale(0.5, 2.5, 0.5);
        this.cone.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
        // ----
    }

    initBuffers() {
        this.cylinder.initBuffers();
        this.cone.initBuffers();
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
    }
    
    updateBuffers(complexity) {
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}


