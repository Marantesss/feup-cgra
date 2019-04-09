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
        this.cylinder = new MyCylinder(this.scene, 20, 20);
        this.cone = new MyCone(this.scene, 20 , 20);     
        this.cylinder.initBuffers();
        this.cone.initBuffers();
    }

    display() {

        // ---- displaying wood      
        this.scene.pushMatrix();
        this.scene.translate(this.coordx, 0.5, this.coordz);
       	this.scene.rotate(Math.PI/180*90, 1, 0, 0);
        this.scene.scale(0.5, 2.5, 0.5);
        this.cylinder.display();
        this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(this.coordx+1, 0.5, this.coordz);
       	this.scene.rotate(-Math.PI/180*90, 1, 0, 0);
        this.scene.scale(0.5, 2.5, 0.5);
        this.cylinder.display();
        this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(this.coordx+1, 0.5, this.coordz-1);
		this.scene.rotate(Math.PI/180*40, 0, 1, 0);
       	this.scene.rotate(Math.PI/180*90, 1, 0, 0);
        this.scene.scale(0.5, 2.5, 0.5);
        this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
		this.scene.translate(this.coordx-2, 0.5, this.coordz-1);
       	this.scene.rotate(Math.PI/180*90, 1, 0, 0);
        this.scene.scale(0.5, 2.5, 0.5);
        this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
		this.scene.translate(this.coordx, 0.5, this.coordz-1);
       	this.scene.rotate(Math.PI/180*50, 1, 0, 0);
        this.scene.scale(0.5, 2.5, 0.5);
        this.cylinder.display();
        this.scene.popMatrix();
		
		this.scene.pushMatrix();
		this.scene.translate(this.coordx, 1.5, this.coordz);
        this.scene.scale(1.5, 2.5, 1.5);
        this.cone.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
		this.scene.translate(this.coordx, 1.5, this.coordz +1);
		this.scene.rotate(Math.PI/180*50, 1, 0, 0);
        this.scene.scale(1.5, 2.5, 1.5);
        this.cone.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
		this.scene.translate(this.coordx, 1.5, this.coordz-1);
		this.scene.rotate(-Math.PI/180*50, 1, 0, 0);
        this.scene.scale(1.5, 2.5, 1.5);
        this.cone.display();
        this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(this.coordx-1, 1.5, this.coordz);
		this.scene.rotate(Math.PI/180*50, 0, 0, 1);
        this.scene.scale(1.5, 2.5, 1.5);
        this.cone.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
		this.scene.translate(this.coordx+1, 1.5, this.coordz);
		this.scene.rotate(-Math.PI/180*50, 0, 0, 1);
        this.scene.scale(1.5, 2.5, 1.5);
        this.cone.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
		this.scene.translate(this.coordx+1, 2.5, this.coordz);
		this.scene.rotate(-Math.PI/180*30, 0, 0, 1);
        this.scene.scale(0.5, 2.5, 0.5);
        this.cone.display();
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


