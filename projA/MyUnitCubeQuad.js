var UnitCubeEnum = {
 MINECRAFT: 1,
 HOUSE: 2,
};

/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 * @param cubeType - Can be either a minecraft cube or a house
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene, cubeType) {
		super(scene);
		this.quad = new MyQuad(this.scene);
        this.quad.initBuffers();

                this.cubeType = cubeType;

                this.unitCubeMaterial = new CGFappearance(this.scene);
                this.unitCubeMaterial.setAmbient(0.1, 0.1, 0.1, 1);
                this.unitCubeMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
                this.unitCubeMaterial.setSpecular(0.1, 0.1, 0.1, 1);
                this.unitCubeMaterial.setShininess(10.0);
                this.unitCubeMaterial.setTextureWrap('REPEAT', 'REPEAT');

                this.cubeSide;
                // ---- selecting cube type
                switch(this.cubeType) {
                        case UnitCubeEnum.MINECRAFT:
                                this.cubeSide = new CGFtexture(this.scene, 'images/mineSide.png');
                                this.mineTop = new CGFtexture(this.scene, 'images/mineTop.png');
                                this.mineBottom = new CGFtexture(this.scene, 'images/mineBottom.png');
                                break;
                        case UnitCubeEnum.HOUSE:
                                this.cubeSide = new CGFtexture(this.scene, 'images/stoneHouse.jpg');
                }
	}
	display() {
                this.unitCubeMaterial.setTexture(this.cubeSide);
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

