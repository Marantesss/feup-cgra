/**
 * MyTin
 * @constructor
 * @param scene - Reference to MyScene object
 * @param coordx - the coord x of the tin
 * @param coordy - the coord y of the tin
 */
class MyTin extends CGFobject {
	constructor(scene, coordx, coordz) {
        super(scene);
        this.coordx = coordx;
        this.coordz = coordz;
        this.cylinder = new MyCilinder(this.scene,30,30);
        this.cylinder.initBuffers();

        this.metal = new CGFappearance(this.scene);
        this.metal.setAmbient(0.1, 0.1, 0.1, 1);
        this.metal.setDiffuse(0.2, 0.2, 0.2, 1);
        this.metal.setSpecular(1, 1, 1, 1);
        this.metal.setShininess(10.0);
       
        this.roofTexture = new CGFtexture(this.scene, 'images/metal.jpg');
       		
	}
	display() {
 
       
      
	}
}
