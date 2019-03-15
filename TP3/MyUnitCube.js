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
			-0.5,-0.5,-0.5,   //4
			-0.5, 0.5, -0.5,  //5
			0.5, 0.5, -0.5,   //6
			0.5, -0.5, -0.5,  //7

			-0.5, -0.5, 0.5,  //0
			-0.5, 0.5, 0.5,   //1
			0.5, 0.5, 0.5,	  //2
			0.5, -0.5, 0.5,   //3
			-0.5,-0.5,-0.5,   //4
			-0.5, 0.5, -0.5,  //5
			0.5, 0.5, -0.5,   //6
			0.5, -0.5, -0.5,  //7

			-0.5, -0.5, 0.5,  //0
			-0.5, 0.5, 0.5,   //1
			0.5, 0.5, 0.5,	  //2
			0.5, -0.5, 0.5,   //3
			-0.5,-0.5,-0.5,   //4
			-0.5, 0.5, -0.5,  //5
			0.5, 0.5, -0.5,   //6
			0.5, -0.5, -0.5,  //7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			2, 1, 0,
			3, 2, 0,
			6, 2, 3,
			7, 6, 3,
			5, 1, 2,
			6, 5, 2,
			0, 1, 5,
			0, 5, 4, 
			4, 5, 6,
			4, 6, 7,
			0, 4, 3,
			3, 4, 7,
		];
		
		this.normals = [
			// left and right
			-1, 0, 0,  //0
			-1, 0, 0,   //1
			1, 0, 0,	  //2
			1, 0, 0,   //3
			-1, 0, 0,   //4
			-1, 0, 0,  //5
			1, 0, 0,   //6
			1, 0, 0,  //7
			// up and down
			0, -1, 0,  //0
			0, 1, 0,   //1
			0, 1, 0,	  //2
			0, -1, 0,   //3
			0, -1, 0,   //4
			0, 1, 0,  //5
			0, 1, 0,   //6
			0, -1, 0,  //7
			// front and back
			0, 0, 1,  //0
			0, 0, 1,   //1
			0, 0, 1,	  //2
			0, 0, 1,   //3
			0, 0, -1,   //4
			0, 0, -1,  //5
			0, 0, -1,   //6
			0, 0, -1,  //7
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

