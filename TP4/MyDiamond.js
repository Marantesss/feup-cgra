/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyDiamond extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-1, 0, 0,	//0
			0, -1, 0,	//1
			0, 1, 0,	//2
			1, 0, 0		//3
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			2, 1, 0,
			1, 3 ,2,
			2, 3, 1
		];
		this.normals = [
			0, 0, 1,	//0
			0, 0, 1,	//1
			0, 0, 1,	//2
			0, 0, 1		//3
		]
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
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
			(1/4), (1/4),
			0, 0.5,
			(1/4), (3/4),
			0.5, 0.5
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
}

