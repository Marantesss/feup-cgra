#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;		// original textute
uniform sampler2D uSampler2;	// heightmap
uniform sampler2D uSampler3;	// gradient


void main() {
	// ---- original texture
	vec4 color = texture2D(uSampler, vTextureCoord);
	// ---- heightmap
	vec4 heightmap = texture2D(uSampler2, vTextureCoord);
	// ---- altimetry
	vec4 gradient = texture2D(uSampler3, vec2(1.0-heightmap.r, 1.0-heightmap.r));

	color.r = (color.r + gradient.r)/2.0;
	color.g = (color.g + gradient.g)/2.0;
	color.b = (color.b + gradient.b)/2.0;
	
	gl_FragColor = color;
}
