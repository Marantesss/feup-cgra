/**
* MyCone
* @constructor
*/
class MyCone extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;

        // ---- for a single texture
        for(var i = 0; i < this.slices+1; i++) {

            this.vertices.push(Math.cos(ang), 0, -Math.sin(ang));

            this.indices.push(i, (i+1) % (this.slices + 1), this.slices + 1);

            this.normals.push(Math.cos(ang), Math.cos(Math.PI/4.0), -Math.sin(ang));

            this.texCoords.push(i/this.slices, 1);

            ang+=alphaAng;
        }
        
        // ---- for when we want to repeat a texture per slice - only works for even slice cones
        /*
        for(var i = 0; i < this.slices; i++) {

            this.vertices.push(Math.cos(ang), 0, -Math.sin(ang));
            this.vertices.push(Math.cos(ang+alphaAng), 0, -Math.sin(ang+alphaAng));

            this.indices.push(2 * i, (2*i+1) % (2 * this.slices), 2 * this.slices);
            
            this.normals.push(Math.cos(ang), Math.cos(Math.PI/4.0), -Math.sin(ang));
            this.normals.push(Math.cos(ang+alphaAng), Math.cos(Math.PI/4.0), -Math.sin(ang+alphaAng));

            //this.texCoords.push(0, 1, 1, 1);
            this.texCoords.push(i/this.slices, 1, i+1/this.slices, 1);

            ang+=alphaAng;
        }*/
        
        this.vertices.push(0,1,0);
        this.normals.push(0,1,0);

        this.texCoords.push(0.5, 0);

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}


