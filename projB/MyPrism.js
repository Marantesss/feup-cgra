/**
* MyPrism
* @constructor
*/
class MyPrism extends CGFobject {
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

        for(var i = 0; i < this.slices; i++){
            // All vertices have to be declared for a given face
            // even if they are shared with others, as the normals 
            // in each face will be different

            var sa=Math.sin(ang);
            var saa=Math.sin(ang+alphaAng);
            var ca=Math.cos(ang);
            var caa=Math.cos(ang+alphaAng);

            this.vertices.push(caa, 1, -saa);
            this.vertices.push(ca, 1, -sa);
            this.vertices.push(ca, 0, -sa);
            this.vertices.push(caa, 0, -saa);

            // ---- for repeated textures per slice
            //this.texCoords.push(1, 0, 0, 0, 0, 1, 1, 1);
            // ---- for a single texture
            this.texCoords.push((i+1)/this.slices, 0,
                                i/this.slices, 0,
                                i/this.slices, 1,
                                (i+1)/this.slices, 1);

            // triangle normal computed by cross product of two edges
            var normal= [
                saa-sa,
                0,
                caa-ca
            ];

            // normalization
            var nsize=Math.sqrt(
                normal[0]*normal[0]+
                normal[1]*normal[1]+
                normal[2]*normal[2]
                );
            normal[0]/=nsize;
            normal[1]/=nsize;
            normal[2]/=nsize;

            // push normal once for each vertex of this square
            this.normals.push(...normal);
            this.normals.push(...normal);
            this.normals.push(...normal);
            this.normals.push(...normal);

            this.indices.push(4*i, (4*i+1), (4*i+2), (4*i), (4*i+2), (4*i+3));

            ang+=alphaAng;
        }

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


