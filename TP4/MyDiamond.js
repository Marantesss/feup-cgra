/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyDiamond extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();

		//------ Textures and Materials
		this.material = new CGFappearance(this.scene);
        this.material.setAmbient(0.1, 0.1, 0.1, 1);
        this.material.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material.setSpecular(0.1, 0.1, 0.1, 1);
        this.material.setShininess(10.0);
        this.material.loadTexture('images/tangram.png');

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
			1, 3, 2,
			2, 1, 0,
			2, 3, 1
		];

		this.normals = [
			0, 0, 1,	//0
			0, 0, 1,	//1
			0, 0, 1,	//2
			0, 0, 1		//3
		];

		this.texCoords = [
			0, 0.5,		//0
			0.25, 0.75,	//1
			0.25, 0.25,	//2
			0.5, 0.5,	//3
		];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

