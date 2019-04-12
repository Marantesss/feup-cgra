/**
 * MyFarm
 * @constructor
 * @param scene - Reference to MyScene object
 * @param coordx - the coord x of the farm
 * @param coordy - the coord y of the farm
 */
class MyFarm extends CGFobject {
	constructor(scene, coordx, coordz) {
                super(scene);
                this.coordx = coordx;
                this.coordz = coordz;

                this.silo = new MySilo(this.scene, 0, 0);
                this.fence = new MyFence(this.scene, 0, 0);
                this.dirt = new MyPlane(this.scene, 4, 0, 4, 0, 4); // 4x4
                
                //this.dirt.initBuffers();
                
                // ---- create material for applying textures
                this.dirtMaterial = new CGFappearance(this.scene);
                this.dirtMaterial.setAmbient(0.1, 0.1, 0.1, 1);
                this.dirtMaterial.setDiffuse(0.9, 0.9, 0.9, 1);         // material altamente difuso
                this.dirtMaterial.setSpecular(0.1, 0.1, 0.1, 1);
                this.dirtMaterial.setShininess(10.0);
                this.dirtMaterial.setTextureWrap('REPEAT', 'REPEAT');
                this.dirtMaterial.loadTexture('images/Tiles/dirt.png');
        }
    
        display() {
                // ---- silo
                this.scene.pushMatrix();
                this.scene.translate(this.coordx + 4.5, 0, this.coordz - 3);
                this.silo.display();
                this.scene.translate(0, 0, 6);
                this.silo.display();
                this.scene.popMatrix();

                // ---- fence
                for (var i = -3; i < 3; i++) {
                        // ---- Positive Blue/Z axis
                        this.scene.pushMatrix();
                        this.scene.translate(this.coordx+i, 0, this.coordz+3);
                        this.fence.display();
                        this.scene.popMatrix();
                        // ---- Negative Blue/Z axis
                        this.scene.pushMatrix();
                        this.scene.translate(this.coordx+i, 0, this.coordz-3);
                        this.fence.display();
                        this.scene.popMatrix();
                        // ---- Positive Red/X axis
                        this.scene.pushMatrix();
                        this.scene.translate(this.coordx+3, 0, this.coordz+i+1);
                        this.scene.rotate(Math.PI/2, 0, 1, 0);
                        this.fence.display();
                        this.scene.popMatrix();
                }
                // ---- two back fences to make a gate
                this.scene.pushMatrix();
                this.scene.translate(this.coordx-3, 0, this.coordz+3);
                this.scene.rotate(Math.PI/2, 0, 1, 0);
                this.fence.display();
                this.scene.translate(5, 0, 0);
                this.fence.display()
                this.scene.popMatrix();

                this.dirtMaterial.apply();
                // ---- quad
                this.scene.pushMatrix();
                this.scene.translate(this.coordx, 0.05, this.coordz);
                this.scene.scale(6, 1, 6);
                this.scene.rotate(-Math.PI/2, 1, 0, 0);
                this.dirt.display();
                this.scene.popMatrix();
	}
}
