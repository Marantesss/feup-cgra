/**
 * MyTriangleSmall
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleSmall extends CGFobject {
	constructor(scene, texCoords) {
		super(scene);
		this.initBuffers();

		//------ Textures and Materials
		this.material = new CGFappearance(this.scene);
        this.material.setAmbient(0.1, 0.1, 0.1, 1);
        this.material.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material.setSpecular(0.1, 0.1, 0.1, 1);
        this.material.setShininess(10.0);
		this.material.loadTexture('images/tangram.png');
		
		this.texCoords = texCoords;
		/*
		[
			1, 1,	//0
			0.5, 0.5,		//1
			1, 0,		//2
			//0.75, 0.75,	//3
		];
		*/
	}
	
	initBuffers() {
		this.vertices = [
			-1, 0, 0,	//0
			1, 0, 0,	//1
			0, 1, 0	    //2
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0, 1, 2,
			2, 1, 0            
		];

		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1
		];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

