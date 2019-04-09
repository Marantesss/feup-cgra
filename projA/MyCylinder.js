/**
* MyCylinder
* @constructor
*/
class MyCylinder extends CGFobject {
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
            // 2 vertices per slice (up and down)
            this.vertices.push(Math.cos(ang), 0, -Math.sin(ang));
            this.vertices.push(Math.cos(ang), 1, -Math.sin(ang));

            // 2 triangles make a square
            this.indices.push((2*i+3)%(2*(this.slices+1)), (2*i+1)% (2*(this.slices+1)),2*i );
            this.indices.push( (2*i+2)%(2*(this.slices+1)),(2*i+3)% (2*(this.slices+1)) ,2*i);

            // both normals are the same
            this.normals.push(Math.cos(ang), 0, -Math.sin(ang));
            this.normals.push(Math.cos(ang), 0, -Math.sin(ang));

            // texCoords
            // ---- for when we want to repeat a texture per slice - only works for even slice cylinders
            //this.texCoords.push(i%2, i%2, i%2, Math.abs(i-1)%2);
            this.texCoords.push(i/this.slices, 1, i/this.slices, 0);
            ang+=alphaAng;
        }
        /*
        // ---- only works for even slice cylinders, need to find another way
        for(var i = 0; i < this.slices; i++) {
            this.texCoords.push(0, 0, 0, 1, 1, 1, 1, 0);
        }
        */
       
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


