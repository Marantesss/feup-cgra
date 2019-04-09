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
        this.cylinder = new MyCylinder(this.scene,30,30);
        this.cone = new MyCone(this.scene,30,30);
        this.cone.initBuffers();
        this.cylinder.initBuffers();
        this.tinMaterial = new CGFappearance(this.scene);
        this.tinMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.tinMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.tinMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.tinMaterial.setShininess(10.0);       
        this.metal = new CGFtexture(this.scene, 'images/metal.jpg');
       		
	}
	display() {
 		this.tinMaterial.setTexture(this.metal);
        this.tinMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        
        this.scene.pushMatrix();
        this.scene.translate(this.coordx, 2,this.coordz);
        this.scene.scale(1,2,1);
		this.cylinder.display();
        this.scene.popMatrix();
             
       this.scene.pushMatrix();
        this.scene.translate(this.coordx, 4 ,this.coordz);
        this.scene.scale(1,2,1);
		this.cone.display();
        this.scene.popMatrix();
         
        this.scene.pushMatrix();
        this.scene.translate(this.coordx,2 ,this.coordz);     
        this.scene.scale(1,2,1);
        this.scene.rotate(Math.PI, 1, 0, 1);
		this.cone.display();
        this.scene.popMatrix();
	}
}
