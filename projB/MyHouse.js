var UnitCubeEnum = {
    MINECRAFT: 1,
    HOUSE: 2,
   };

/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyHouse extends CGFobject {
	constructor(scene, coordx, coordz) {
        super(scene);
        this.coordx = coordx;
        this.coordz = coordz;
        this.unitCubeQuad = new MyUnitCubeQuad(this.scene, UnitCubeEnum.HOUSE);
        this.pyramid = new MyPyramid(this.scene, 4, 1);
        this.prism = new MyPrism(this.scene, 5, 5);
        this.prism1 = new MyPrism(this.scene , 10, 5);
        this.unitCubeQuad.initBuffers();
        this.pyramid.initBuffers();
        this.prism.initBuffers();
        this.prism1.initBuffers();

        this.houseMaterial = new CGFappearance(this.scene);
        this.houseMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.houseMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.houseMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.houseMaterial.setShininess(10.0);
        this.houseMaterial.setTextureWrap('REAPEAT', 'REPEAT');
       
        this.roofTexture = new CGFtexture(this.scene, 'images/wood.jpg');
        this.pillarTexture = new CGFtexture(this.scene, 'images/brick_pillar.jpg');       		
	}
	display() {
 
        // ---- displaying houseMaterial body
		this.scene.pushMatrix();
		this.scene.translate(0 + this.coordx,0.5,0 + this.coordz);
		this.unitCubeQuad.display();
        this.scene.popMatrix();
 		
		// ---- displaying houseMaterial roof
        this.houseMaterial.setTexture(this.roofTexture);
        this.houseMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        
        this.scene.pushMatrix();
        this.scene.translate(0 + this.coordx, 0.9 ,0 + this.coordz);
        this.scene.rotate(Math.PI/180*45, 0, 1, 0);
        this.scene.scale(1.5,1.2,1.5);
		this.pyramid.display();
        this.scene.popMatrix();  
       
        // ---- displaying pillars
        this.houseMaterial.setTexture(this.pillarTexture);
        this.houseMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.scene.pushMatrix();
        this.scene.translate(0.7 + this.coordx,0,0.7 + this.coordz);
        this.scene.scale(0.2,1,0.2);
        this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.7 + this.coordx,0,-0.7 + this.coordz);
        this.scene.scale(0.2,1,0.2);
        this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.7 + this.coordx,0,-0.7 + this.coordz);
        this.scene.scale(0.2,1,0.2);
        this.prism1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.7 + this.coordx,0,0.7 + this.coordz);
        this.scene.scale(0.2,1,0.2);
        this.prism1.display();
        this.scene.popMatrix();

      
	}
}
