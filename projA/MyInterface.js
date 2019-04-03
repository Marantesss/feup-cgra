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

        //Dropdown for environment
        this.gui.add(this.scene, 'selectedMode', this.scene.modeIds).name('Selected Mode').onChange(this.scene.updateAppliedMode.bind(this.scene));

        return true;
    }
}