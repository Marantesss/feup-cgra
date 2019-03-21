/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParallelogram extends CGFobject {
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
			0, 0, 0,	//0
			2, 0, 0,	//1
            3, 1, 0,	//2
            1, 1, 0 	//3
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0, 1, 3,
			1, 2, 3,            
            3, 1, 0,
			3, 2, 1
		];
		
		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1
		];

		this.texCoords = [
			0.25, 0.75,	//0
			0.5, 1,		//1
			1, 1,		//2
			0.75, 0.75,	//3
		];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

