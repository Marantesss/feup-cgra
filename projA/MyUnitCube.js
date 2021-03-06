/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-0.5, -0.5, 0.5,  //0
			-0.5, 0.5, 0.5,   //1
			0.5, 0.5, 0.5,	  //2
			0.5, -0.5, 0.5,   //3

			-0.5, -0.5, 0.5,  //4
			-0.5, 0.5, 0.5,   //5
			-0.5, 0.5, -0.5, //6
			-0.5, -0.5, -0.5,  //7

			-0.5, 0.5, -0.5, //8
			-0.5, -0.5, -0.5, //9
			0.5, 0.5, -0.5, //10
			0.5, -0.5, -0.5, //11
		
			0.5, 0.5, -0.5, //12
			0.5, -0.5, -0.5, //13
			0.5, 0.5, 0.5,	  //14
			0.5, -0.5, 0.5,   //15

			-0.5, 0.5, 0.5,   //16
			-0.5, 0.5, -0.5, //17
			0.5, 0.5, -0.5, //18
			0.5, 0.5, 0.5,	  //19

			-0.5, -0.5, 0.5,  //20
			0.5, -0.5, 0.5,   //21
			0.5, -0.5, -0.5, //22
			-0.5, -0.5, -0.5,  //23
		];

		//Counter-clockwise reference of vertices
		this.indices = [
		//Front SIDE		
		2,1, 0,
		3, 2, 0,

		//Left SIDE
		4, 5, 6,
		4, 6,7,

		//BACK SIDE
		10, 9 , 8,
		9, 10, 11,

		//Right SIDE
		12, 15, 13,	
		12, 14, 15,

		//TOP SIDE
		18,17 , 16,
		19,18, 16,

		//DOWN SIDE
		20, 23, 22,
		20, 22, 21,
		];
		
		this.normals = [
			// left and right
			0, 0, 1,  //0
			0, 0, 1,   //1
			0, 0, 1,	  //2
			0, 0, 1,   //3
			-1, 0,0 ,  //4
			-1, 0, 0,  //5
			-1, 0,0 ,  //6
			-1, 0, 0,  //7
			0, 0, -1,  //8
			0, 0, -1,   //9
			0, 0, -1,	  //10
			0, 0, -1,   //11
			1, 0,0 ,  //12
			1, 0, 0,  //13
			1, 0,0 ,  //14
			1, 0, 0,  //15
			0, 1, 0, //16
			0, 1, 0, //17
			0, 1, 0,
			0, 1, 0,
			0,- 1, 0,
			0, -1, 0,
			0, -1, 0,
			0, -1, 0,
		];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	updateBuffers(complexity){
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}

