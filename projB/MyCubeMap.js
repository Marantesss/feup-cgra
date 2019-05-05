/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-150, -150, 150,  //0
			-150, 150, 150,   //1
			150, 150, 150,	  //2
			150, -150, 150,   //3

			-150, -150, 150,  //4
			-150, 150, 150,   //5
			-150, 150, -150, //6
			-150, -150, -150,  //7

			-150, 150, -150, //8
			-150, -150, -150, //9
			150, 150, -150, //10
			150, -150, -150, //11
		
			150, 150, -150, //12
			150, -150, -150, //13
			150, 150, 150,	  //14
			150, -150, 150,   //15

			-150, 150, 150,   //16
			-150, 150, -150, //17
			150, 150, -150, //18
			150, 150, 150,	  //19

			-150, -150, 150,  //20
			150, -150, 150,   //21
			150, -150, -150, //22
			-150, -150, -150,  //23
		];

		//Counter-clockwise reference of vertices
		this.indices = [
		//Front SIDE	
		0,1, 2,
		0, 2, 3,	

		//Left SIDE
		6, 5, 4,
		7, 6, 4,

		//BACK SIDE
		8, 9, 10,
		11, 10, 9,

		//Right SIDE
		13, 15, 12,
		15, 14, 12,

		//TOP SIDE
		16,17 , 18,
		16,18, 19,

		//DOWN SIDE
		22, 23, 20,
		21, 22, 20,
		];
		
		this.normals = [
			0, 0, -1,  //0
			0, 0, -1,   //1
			0, 0, -1,	  //2
			0, 0, -1,   //3
			1, 0,0 ,  //4
			1, 0, 0,  //5
			1, 0,0 ,  //6
			1, 0, 0,  //7
			0, 0, 1,  //8
			0, 0, 1,   //9
			0, 0, 1,	  //10
			0, 0, 1,   //11
			-1, 0,0 ,  //12
			-1, 0, 0,  //13
			-1, 0,0 ,  //14
			-1, 0, 0,  //15
			0, -1, 0, //16
			0, -1, 0, //17
			0, -1, 0, //18
			0, -1, 0, //19
			0, 1, 0, //20
			0, 1, 0,  //21
			0, 1, 0,  //22
			0, 1, 0,  //23
		];

		/*
		Texture coords (s,t)
		+----------> s
        |
        |
		|
		v
        t
        */

		this.texCoords = [
			1/4, 2/3, //0
			1/4, 1/3,  //1
			2/4, 1/3,  //2
			2/4, 2/3, //3
			1/4, 2/3,
			1/4, 1/3,//5
			0, 1/3,
			0, 2/3,//7
			1, 1/3,
			1, 2/3,//9
			3/4, 1/3,
			3/4, 2/3,//11
			3/4, 1/3,
			3/4, 2/3,//13
			2/4, 1/3,
			2/4, 2/3,  //15
			1/4, 1/3,  //16
			1/4, 0,
			2/4,0,
			2/4, 1/3, //19
			1/4, 2/3, //20
			2/4, 2/3, //21
			2/4, 1,  //22
			1/4,1,  //23
	
		]
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	/**
	 * @method updateTexCoords
	 * Updates the list of texture coordinates of the quad
	 * @param {Array} coords - Array of texture coordinates
	 */
	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}

	updateBuffers(complexity){
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}

