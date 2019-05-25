/**
 * MyPaw
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyPaw extends CGFobject {
	constructor(scene) {
        super(scene);      
        this.prism = new MyPrism(this.scene, 10, 10);
        this.pyramid = new MyPyramid(this.scene, 10,10);
        this.prism.initBuffers();
      		
	}
	display() {
 
        this.scene.pushMatrix();
                this.scene.translate(0,0,0);
                this.scene.scale(0.2,0.7,0.2);
                this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
                this.scene.translate(0.1,0.4,0);
                this.scene.rotate(Math.PI/180*-50, 0, 0, 1); 
                this.scene.scale(0.1,0.5,0.1);    
                this.pyramid.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
                this.scene.translate(0,0.7,0);
                this.scene.scale(0.2,0.5,0.2);
                this.pyramid.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
                this.scene.translate(-0.1,0.4,0);
                this.scene.rotate(Math.PI/180*50, 0, 0, 1);
                this.scene.scale(0.1,0.5,0.1);
                this.pyramid.display();
        this.scene.popMatrix();

      
	}
}	
