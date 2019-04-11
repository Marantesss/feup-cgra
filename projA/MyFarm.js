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
        this.dirt = new MyQuad(this.scene, [0,1, 20,1, 0,-19, 20,-19]); // 5x5

        this.dirt.initBuffers();

        // ---- create material for applying textures
        this.dirtMaterial = new CGFappearance(this.scene);
        this.dirtMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.dirtMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.dirtMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.dirtMaterial.setShininess(10.0);
        this.dirtMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.dirtTexture = new CGFtexture(this.scene, 'images/Tiles/dirt.png'); 
    }
    
	display() {
        // ---- silo
        this.scene.pushMatrix();
        //this.silo.display();
        this.scene.popMatrix();

        // ---- fence
        this.scene.pushMatrix();
        //this.fence.display();
        this.scene.popMatrix();

        this.dirtMaterial.setTexture(this.dirtTexture);
        this.dirtMaterial.apply();
        // ---- prism
        this.scene.pushMatrix();
        this.scene.scale(6, 0.1, 6);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        //this.scene.translate(1, 0, 0);
        this.dirt.display();
        this.scene.popMatrix();
	}
}
