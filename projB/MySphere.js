/**
 * MySphere
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MySphere extends CGFobject {
	constructor(scene, coords) {
		super(scene);
		this.initBuffers();
		if (coords != undefined)
			this.updateTexCoords(coords);
	}
	
	initBuffers() {
		for(var direction = 1; direction >= -1; direction -= 2) {
  			for(var beta = 0.17; beta < 1.445; beta += 0.17) {

    			var radius = Math.cos(beta) * this.radius;
     			var fixedY = Math.sin(beta) * this.radius * direction;

     		for(var alpha = 0; alpha < 6.28; alpha += 0.17) {
       			p = 50
       			p.x = Math.cos(alpha) * radius;
       			p.y = fixedY;
       			p.z = Math.sin(alpha) * radius;

      		 this.numberOfVertexes++;
     	}
   }
		}
}
}

