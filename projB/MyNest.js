/**
 * MyNest
 * @constructor
 */
class MyNest extends CGFobject {
    constructor (scene, trunkHeight, trunkRadius, trunkTexture) {
        super(scene);
        this.trunkHeight = trunkHeight;
        this.trunkRadius = trunkRadius;
        this.trunkTexture = trunkTexture;

        // ---- create objects to build a tree Branch
        this.treeBranch = new MyTreeBranch(this.scene, 1.5, 0.2, this.trunkTexture,0,0,0);
        this.cylinder = new MyCylinder(this.scene, 20,20);

    }
    display() {

        // -- ground brach tree
        this.scene.pushMatrix();
        this.scene.translate(0, 0.2, 0.7);
        this.scene.rotate(Math.PI/2, 0,1,0);
        this.scene.scale(1,1,0.5);
        this.treeBranch.display();
        this.scene.popMatrix();

        // -- tree brach sorted by z coord
        this.scene.pushMatrix();
        this.scene.translate(-0.4, 0, -0.8);
        this.scene.scale(0.5,1,0.5);
        this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.6, 0, -0.6);
        this.scene.scale(0.8,1,1);
        this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.8, 0, -0.4);
        this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.9, 0, -0.2);
        this.scene.scale(1.1,1,1);
        this.treeBranch.display();
        this.scene.popMatrix();
      
        // -- Central Tree Branch
        this.scene.pushMatrix();
        this.scene.translate(-1, 0, 0);
        this.scene.scale(1.2,1,1);
        this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.9, 0, 0.2);
        this.scene.scale(1.1,1,1);
        this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.8, 0, 0.4);
        this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.7, 0, 0.6);
        this.scene.scale(0.8,1,1);
        this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.5, 0, 0.8);
            this.scene.scale(0.5,1,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        // ----

        // -- Upper part 
        this.scene.pushMatrix();
            this.scene.translate(0, 1, 1.4);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        // -- first for all quadrants
        this.scene.pushMatrix();
            this.scene.translate(0.1, 1, 1.36);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.1, 0, -0.9);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.35, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.1, 0, -0.9);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(0.1, 1, -1.5);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.95, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.1, -0.2, 0.95);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.95, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        // --  2 
        this.scene.pushMatrix();
            this.scene.translate(0.1, 1, 1.33);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(0.1, 1, 1.3);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.1, 0, -0.95);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(0.1, 1, -1.36);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.95, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.1, 0, 0.95);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.95, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        //------------- 3

        this.scene.pushMatrix();
            this.scene.translate(0.2, 1, 1.35);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.2, 0, -0.95);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(0.2, 1, -1.35);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.85, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.2, 0, 0.95);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.85, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();      

         // ---------------- 4
        this.scene.pushMatrix();
            this.scene.translate(0.3, 1, 1.3);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.3, 0, -0.9);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.8, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(0.3, 1, -1.3);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.8, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.3, 0, 0.9);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.8, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        //    ---------------- 5

        this.scene.pushMatrix();
            this.scene.translate(0.4, 1, 1.27);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.75, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.4, 0, -0.85);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.75, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(0.4, 1, -1.27);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.75, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.4, 0, 0.85);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.75, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        // ------------- 6
        this.scene.pushMatrix();
            this.scene.translate(0.5, 1, 1.25);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.7, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.5, 0, -0.8);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.7, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(0.5, 1, -1.25);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.7, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.5, 0, 0.8);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.7, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        // -------------- 7
        this.scene.pushMatrix();
            this.scene.translate(0.6, 1, 1.2);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.6, 0, -0.75);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(0.6, 1, -1.2);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.65, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.65, 0, 0.8);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.65, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.7, 0, 0.95);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.65, 0,1,0);
            this.scene.scale(0.9,0.1,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        // -------------- 8 
        this.scene.pushMatrix();
            this.scene.translate(0.7, 1, 1.15);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.7, 0, -0.7);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.58, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(0.7, 1, -1.15);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.58, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.7, 0, 0.7);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        // ----- 9
        this.scene.pushMatrix();
            this.scene.translate(0.85, 1, 1.07);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.5, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.85, 0, -0.75);
            this.scene.rotate(Math.PI/3, 1,0,0);
           this.scene.rotate(Math.PI/2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(0.95, 1, -1.07);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.5, 0,1,0);
           this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.85, 0, 0.75);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.5, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.9, 0, 0.77);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.5, 0,1,0);
            this.scene.scale(0.9,0.3,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        // ------ 10
        this.scene.pushMatrix();
            this.scene.translate(0.95, 1, 1);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.4, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.8, 0, -0.65);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.4, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(0.9, 1, -1);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.4, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.8, 0, 0.8);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.4, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.6, 0, 0.6);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.4, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        // -- 11
        this.scene.pushMatrix();
            this.scene.translate(1.05, 1, 0.95);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.35, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.95, 0, -0.5);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.45, 0,1,0);
           this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-1, 0, -0.55);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.45, 0,1,0);
           this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.1, 0, -0.55);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.45, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(1.05, 1, -0.95);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.45, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-1, 0, 0.4);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.45, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-1, 0, 0.45);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.45, 0,1,0);
            this.scene.scale(0.9,0.4,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        //  --- 12

        this.scene.pushMatrix();
            this.scene.translate(1.4, 1, 0.95);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.3, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(1.6, 1, 0.95);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.3, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.95, 0, -0.4);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.3, 0,1,0);
           this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-1, 0, -0.45);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.3, 0,1,0);
           this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-1, 0, -0.45);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.3, 0,1,0);
           this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(1.35, 1, -1.05);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.3, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(1.45, 1, -1.15);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.3, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-1.1, 0, 0.45);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.3, 0,1,0);
           this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-1, 0, 0.35);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.3, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.9, 0, 0.3);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.3, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        // -- 13

        this.scene.pushMatrix();
            this.scene.translate(1.7, 0.9, 0.75);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.25, 0,1,0);
            this.scene.scale(0.9,0.4,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(1.8, 0.9, 0.8);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.25, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(1.5, 0.5, -0.7);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(1.4, 0.6, -0.65);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-1.25, 0.2, 0.4);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

       this.scene.pushMatrix();
            this.scene.translate(1.9, 0.5, 0.4);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.15, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(1.9, 0.7, 0.44);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.15, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(1.9, 0.5, 0.44);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.15, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(1.35, 0.5, 0.5);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.1, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(1.5, 0.5, 0.4);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.15, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(1.45, 0.5, 0.35);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(1.4, 0.5, 0.3);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(1.4, 0.5, 0.2);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(1.4, 0.5, -0.3);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(1.4, 0.5, -0.2);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(1.4, 0.5, -0.1);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(1.45, 0.6, -0.15);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(1.4, 0.5, 0.1);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(1.4, 1, 0.1);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.4, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(1.4, 1, 0.1);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.6, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-1.1, 0, -0.1);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-1, 0, 0);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/1.2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-1, 0, 0.1);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-1, 0, 0.2);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-1, 0, 0.3);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.5, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-1, 0, -0.4);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.5, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-1, 0, -0.2);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.3, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-1, 0, -0.2);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/1.3, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-1, 0, -0.2);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-1, 0, 0.2);
            this.scene.rotate(-Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/2, 0,1,0);
            this.scene.scale(0.9,0.5,0.5);
            this.treeBranch.display();
        this.scene.popMatrix();
    
        
       
        
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