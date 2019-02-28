/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');
        this.gui.add(this.scene, 'displayTriangle').name('Display MyTriangle');
        this.gui.add(this.scene, 'displayDiamond').name('Display MyDiamond');
        this.gui.add(this.scene, 'displayParallelogram').name('Display MyParallelogram');
        this.gui.add(this.scene, 'displayTriangleBig').name('Display MyTriangleBig');
        this.gui.add(this.scene, 'displayTriangleSmall').name('Display MyTriangleSmall');
        this.gui.add(this.scene, 'displayTriangleBig2').name('Display MyTriangleBig2');
        this.gui.add(this.scene, 'displayTriangleSmall2').name('Display MyTriangleSmall2');

        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        return true;
    }
}