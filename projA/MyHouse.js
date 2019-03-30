/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyHouse extends CGFobject {
	constructor(scene, coords) {
		super(scene);
        this.unitCubeQuad = new MyUnitCubeQuad(this.scene);
        this.pyramid = new MyPyramid(this.scene, 4, 1);
        this.prism = new MyPrism(this.scene, 5, 5);
        this.prism1 = new MyPrism(this.scene , 10, 5);
        this.unitCubeQuad.initBuffers();
        this.pyramid.initBuffers();
        this.prism.initBuffers();
        this.prism1.initBuffers();
        
        this.roof = new CGFtexture(this.scene, 'images/telhado.jpg');
		
	}
	display() {

		this.scene.pushMatrix();
		this.scene.translate(0,0.5,0);
		this.unitCubeQuad.display();
        this.scene.popMatrix();

		this.scene.pushMatrix();
        this.scene.translate(0, 0.9 ,0);
        this.scene.rotate(Math.PI/180*45, 0, 1, 0);
        this.scene.scale(1.5,1.2,1.5);
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
