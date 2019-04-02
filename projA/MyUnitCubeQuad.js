/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene, coords) {
		super(scene);
		this.quad = new MyQuad(this.scene);
                this.quad.initBuffers();

                this.unitCubeMaterial = new CGFappearance(this.scene);
                this.unitCubeMaterial.setAmbient(0.1, 0.1, 0.1, 1);
                this.unitCubeMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
                this.unitCubeMaterial.setSpecular(0.1, 0.1, 0.1, 1);
                this.unitCubeMaterial.setShininess(10.0);
                this.unitCubeMaterial.setTextureWrap('REPEAT', 'REPEAT');

                this.mineSide = new CGFtexture(this.scene, 'images/mineSide.png');
                this.mineTop = new CGFtexture(this.scene, 'images/mineTop.png');
                this.mineBottom = new CGFtexture(this.scene, 'images/mineBottom.png');
	}
	display() {
                this.unitCubeMaterial.setTexture(this.mineSide);
                this.unitCubeMaterial.apply();
                this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
                // face frente
                this.scene.pushMatrix();
                this.scene.translate(0,0,0.5);
                this.unitCubeMaterial.apply();
                this.quad.display();
                this.scene.popMatrix();

                //face trás
                this.scene.pushMatrix();
                this.scene.rotate(Math.PI/180*180, 0, 1, 0);
                this.scene.translate(0,0,0.5);
                this.quad.display();
                this.scene.popMatrix();

                //face direita
                this.scene.pushMatrix();
                this.scene.rotate(Math.PI/180*90, 0, 1, 0);
                this.scene.translate(0,0,0.5);
                this.quad.display();
                this.scene.popMatrix();
                
                //face esquerda
                this.scene.pushMatrix();
                this.scene.rotate(Math.PI/180*-90, 0, 1, 0);
                this.scene.translate(0,0,0.5);
                this.quad.display();
                this.scene.popMatrix(); 
                
                this.unitCubeMaterial.setTexture(this.mineTop);
                this.unitCubeMaterial.apply();
                this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);       
                //face cima
                this.scene.pushMatrix();
                this.scene.rotate(Math.PI/180*-90, 1, 0, 0);
                this.scene.translate(0,0,0.5);
                this.quad.display();
                this.scene.popMatrix();
                        
                this.unitCubeMaterial.setTexture(this.mineBottom);
                this.unitCubeMaterial.apply();
                this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
                //face baixo
                this.scene.pushMatrix();
                this.scene.rotate(Math.PI/180*90, 1, 0, 0);
                this.scene.translate(0,0,0.5);
                this.quad.display();
                this.scene.popMatrix();
        }
}

