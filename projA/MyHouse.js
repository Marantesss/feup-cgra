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
	constructor(scene, coords) {
		super(scene);
        this.unitCubeQuad = new MyUnitCubeQuad(this.scene, UnitCubeEnum.HOUSE);
        this.pyramid = new MyPyramid(this.scene, 4, 1);
        this.prism = new MyPrism(this.scene, 5, 5);
        this.prism1 = new MyPrism(this.scene , 10, 5);
        this.unitCubeQuad.initBuffers();
        this.pyramid.initBuffers();
        this.prism.initBuffers();
        this.prism1.initBuffers();

        this.house = new CGFappearance(this.scene);
        this.house.setAmbient(0.1, 0.1, 0.1, 1);
        this.house.setDiffuse(0.9, 0.9, 0.9, 1);
        this.house.setSpecular(0.1, 0.1, 0.1, 1);
        this.house.setShininess(10.0);
        this.house.loadTexture('images/telhado.jpg');
       
        this.roof = new CGFtexture(this.scene, 'images/telhado.jpg');
       		
	}
	display() {
		
                     
     /*   this.pyramid.setTexture(this.roof);  
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);*/
		
		this.scene.pushMatrix();
		this.scene.translate(0,0.5,0);
		this.unitCubeQuad.display();
        this.scene.popMatrix();
 		
		
        this.house.setTexture(this.roof);
        this.house.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        
		this.scene.pushMatrix();
        this.scene.translate(0, 0.9 ,0);
        this.scene.rotate(Math.PI/180*45, 0, 1, 0);
        this.scene.scale(1.5,1.2,1.5);
       // this.pyramid.apply();
		this.pyramid.display();
        this.scene.popMatrix();  
       
           
        this.scene.pushMatrix();
        this.scene.translate(0.7,0,0.7);
        this.scene.scale(0.2,1,0.2);
        this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.7,0,-0.7);
        this.scene.scale(0.2,1,0.2);
        this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.7,0,-0.7);
        this.scene.scale(0.2,1,0.2);
        this.prism1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
       this.scene.translate(-0.7,0,0.7);
        this.scene.scale(0.2,1,0.2);
        this.prism1.display();
        this.scene.popMatrix();
		       

       
	}

	
}
