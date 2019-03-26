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

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;

        for(var i = 0; i < this.slices; i++){

            this.vertices.push(Math.cos(ang), 0, -Math.sin(ang));
            this.vertices.push(Math.cos(ang), 1, -Math.sin(ang));
            
   
            this.indices.push((2*i+3)%(2*this.slices), (2*i+1)% (2*this.slices),2*i );
            this.indices.push( (2*i+2)%(2*this.slices),(2*i+3)% (2*this.slices) ,2*i);

    
            this.normals.push(Math.cos(ang), 0, -Math.sin(ang));
            this.normals.push(Math.cos(ang),0, -Math.sin(ang));
            ang+=alphaAng;
        }
       

        console.log(this.vertices);
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


