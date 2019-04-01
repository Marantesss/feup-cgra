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
		this.coords = coords;
		this.levels = levels;

		
	}
	display() {
 		
        var coorx , coorz;
        var coory = 0.5 ;

	   for(var i = this.levels; i > 1; i--){
      	coorx = this.coords -(i/2);
      	coorz = this.coords -(i/2);
      	for(var j = 0; j < (i +1); j++){
      	 	for(var w = 0; w < (i +1); w++){   	 	
       			this.scene.pushMatrix();
				this.scene.translate(coorx,coory,coorz);
				this.unitCubeQuad.display();
        		this.scene.popMatrix();       	    	
        		coorx += 1;

      		}
      		coorx = this.coords -(i/2);
      		coorz += 1;
      	}
      	coory += 1;


		}
       this.scene.pushMatrix();
			this.scene.translate(this.coords,coory, this.coords);
			this.unitCubeQuad.display();
        	this.scene.popMatrix();
        	
        		
	}

   initBuffers() {
        this.unitCubeQuad.initBuffers();
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
    }
    
    updateBuffers(complexity) {
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }

}

