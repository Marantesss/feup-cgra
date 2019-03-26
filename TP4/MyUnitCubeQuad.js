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
	}
	display() {
                this.scene.unitCubeMaterial.setTexture(this.scene.mineTexture[1]);
                this.scene.unitCubeMaterial.apply();
                // face frente
                this.scene.pushMatrix();
                this.scene.translate(0,0,0.5);
                this.scene.unitCubeMaterial.apply();
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
                
                this.scene.unitCubeMaterial.setTexture(this.scene.mineTexture[0]);
                this.scene.unitCubeMaterial.apply();        
                //face cima
                this.scene.pushMatrix();
                this.scene.rotate(Math.PI/180*-90, 1, 0, 0);
                this.scene.translate(0,0,0.5);
                this.quad.display();
                this.scene.popMatrix();
                        
                this.scene.unitCubeMaterial.setTexture(this.scene.mineTexture[2]);
                this.scene.unitCubeMaterial.apply();
                //face baixo
                this.scene.pushMatrix();
                this.scene.rotate(Math.PI/180*90, 1, 0, 0);
                this.scene.translate(0,0,0.5);
                this.quad.display();
                this.scene.popMatrix();
        }
}

