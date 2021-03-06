/**
 * MyTree
 * @constructor
 * @param trunkHeight - Height of the tree's trunk, represented by a cylinder
 * @param trunkRadius - Radius of the tree's trunk, ...
 */
class MyTreeBranch extends CGFobject {
    constructor (scene, trunkHeight, trunkRadius, trunkTexture, x , z, angle) {
        super(scene);
        this.trunkHeight = trunkHeight;
        this.trunkRadius = trunkRadius;
        this.trunkTexture = trunkTexture;
        this.x = x;
        this.y = 0;
        this.z = z;
        this.angle = angle;
        this.visible = true;
        this.xi = 0;
        this.zi = 0;

        // ---- create objects to build a tree Branch
        this.treeBranch = new MyCylinder(this.scene, 6, 0);

        // ---- create material for applying textures
        this.treeMaterial = new CGFappearance(this.scene);
        this.treeMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.treeMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.treeMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.treeMaterial.setShininess(10.0);
        this.treeMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.treeTrunk = new CGFtexture(this.scene, this.trunkTexture);

        // -- create collision area
        if(this.x >= 0){ // 1 ou 2 quadrante
            this.xi = this.x - 3;
        } else { //3 ou 4 quadrante
            this.xi = this.x + 3;
        }
        if(this.angle == 0 && this.z > 0){ // 1  ou 4 quadrante
            this.y = 0.1;
            this.xf = this.x + 15;   
            this.zi = this.z - 5;   
            this.zf = this.z + 15; 
        } else if(this.angle == 0 && this.z < 0){ // 2 ou 3 quadrante            
            this.xf = this.x - 3;   
            this.zi = this.z - 6;   
            this.zf = this.z + 6; 
        }  else if(this.z > 0 && this.x >= 0){  // 1 quadrante
            this.xf = this.x +  Math.cos(this.angle)*2 + 3;  
            this.zi = this.z - 3;      
            this.zf = this.z + Math.sin(this.angle)*2 - 1;
        }  else if(this.z > 0 && this.x < 0){ // 4 quadrante
            this.xf = this.x + 10;
            this.xi = this.x +  Math.cos(this.angle)*2 -12;  
            this.zf = this.z + 6;      
            this.zi = this.z + Math.sin(this.angle)*2 - 6;
        } else if(this.x >= 0 ) { // 2 quadrante
            this.xi = this.x - 4;
            this.xf = this.x +  Math.cos(this.angle)*2 + 6;  
            this.zi = this.z - 7;      
            this.zf = this.z + Math.sin(this.angle)*2 + 1;
        } else { //3 quadrante
            this.xf = this.x + 8;
            this.xi = this.x +  Math.cos(this.angle)*2 - 14;  
            this.zf = this.z + 4;      
            this.zi = this.z + Math.sin(this.angle)*2 - 12;
        } 
             
    }
    display() {
        // ---- displaying the trunk
        this.treeMaterial.setTexture(this.treeTrunk);
        this.treeMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        
        this.scene.pushMatrix();
            this.scene.translate(this.x, 0, this.z);
            this.scene.rotate(this.angle, 0, 1 ,0);
            this.scene.rotate(Math.PI, 1, 1, 0);
            this.scene.scale(this.trunkRadius, this.trunkHeight, this.trunkRadius);
            this.treeBranch.display();
        this.scene.popMatrix();
        // ----
    }
    initBuffers() {
        this.treeBranch.initBuffers();
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
    }
    
    updateBuffers(complexity) {
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
    
}