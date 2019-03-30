/**
 * MyVoxelHill
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVoxelHill extends CGFobject {
	constructor(scene, coords, levels) {

		super(scene);
		this.unitCubeQuad = new MyUnitCubeQuad(this.scene);
		this.unitCubeQuad.initBuffers();
		this.levels = levels;
		
	}
	display() {
 		
        var coorx, coory;
        var coorz = 0.5 ;

	   for(var i = this.levels; i > 1; i--){
      	coorx = -(i/2);
      	coory = -(i/2);
      	for(var j = 0; j < (i +1); j++){
      	 	for(var w = 0; w < (i +1); w++){   	 	
       			this.scene.pushMatrix();
				this.scene.translate(coorx,coory,coorz);
				this.unitCubeQuad.display();
        		this.scene.popMatrix();       	    	
        		coorx += 1;

      		}
      		coorx = -(i/2);
      		coory += 1;
      	}
      	
		coorz += 1;
		
			this.scene.pushMatrix();
			this.scene.translate(0,0,coorz);
			this.unitCubeQuad.display();
        	this.scene.popMatrix();
        	


		}
       
        		
	}

}

