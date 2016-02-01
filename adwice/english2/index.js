(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/back.jpg", id:"back"},
		{src:"images/galka.png", id:"galka"},
		{src:"images/w256h2561380453915MouseOptions256x25632.png", id:"w256h2561380453915MouseOptions256x25632"}
	]
};



// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.galka = function() {
	this.initialize(img.galka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,82);


(lib.w256h2561380453915MouseOptions256x25632 = function() {
	this.initialize(img.w256h2561380453915MouseOptions256x25632);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.Символ87 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghBLIgQgEIgNgHQgHgEgFgFQgFgFgEgGQgFgHgDgHIgFgPIgBgPQAAgIACgIIAEgPIAIgNQAEgFAGgFQAFgFAHgFIAOgHIAPgDQAJgCAIAAQALAAAIACQAJACAIAEQAIAEAGAFIAMAMIAIANIAGAMQAEANAAAKQAAAIgCAIQgCAIgDAHIgIANIgLALQgFAFgHADQgHAFgHACQgIADgGABQgIACgIAAQgIAAgIgCgAgggrQgDACgCAEQgFAHAAAIQAAAIADAKQACALAEAKQAFANAGAHIAHAGQAFACAEAAQAEAAACgBQADgCADgFQAEgFAAgKQAAgIgCgLQgDgKgEgKQgDgNgGgGQgEgFgDgCQgFgCgEAAQgFAAgDACgACbA/QAAgEAEgEQAFgCAAgCQAAgGgMgQIgEgCQgCgBgHAKQgHAKAAADQAAABAFAEQAEAEAAAEQAAAGgGAEQgFACgGAAQgIACgKAAIgTgBIgLgDQgGgEAAgGQAAgEADgDQADgEAGAAQAGAAAGgEQAFgEAJgKIAUgZIACgFIgCgDIgfgmQgFgIgLgDIgFgDQgCgCAAgFQAAgRA0AAIATACQAHAAAEACQAEABACADQABACAAAEQAAAFgEADQgDADAAABQAAACADAGQAFAFACAAQADAAAIgNQAAgCgEgCQgEgFAAgDQAAgHAGgDQAEgCAHAAQAIgCALAAQAfAAAAAOQAAAGgFADIgKABQgFABgHAEIgJAKIgPATQgDADAAABIADAFIAoAvQAFAIAKADQAFACABACQACACAAAEQAAAIgHAEQgGACgJABQgNACgSAAIgIAAQggAAAAgNgAjkBLQgHgBgFgCQgEgBgBgDQgCgCAAgEQAAgGAHgCQAHgEADgFQACgGAAgWIAAgcIAAgfQgCgJgIgEIgFgEQgCgCAAgDQAAgFAFgDQAFgDAGgBIA+ADIAygDQADABADADQADACADAGQAFANAAAHQAAAGgDAEQgDAFgGAAQgEAAgEgDIgGgIQgEgFgHgCQgJgEgNAAQgMAAgDAEQgCACgBAHIgBAQQAAAFACABQACACAJAAQAFAAADgDIADgHQABgEABgCQACgDAFgBQANAAAAAhQAAAhgPAAQgFAAgBgEIgCgIQgBgGgCgCQgEgEgHAAQgHAAgBADIgBAVQAAALADAEQACAEAFACQALABAAAIQAAAGgGADQgFACgJABQgMACgSAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.8,-7.7,49.7,15.5);


(lib.Символ85 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiWBIQgHgDgEgHQgFgFgDgJIgEgTQgDgJgDgEQgEgGgHAAQgFAAgBACQgBADAAAJQAAAMABAIQABAFAHADQAFADAAAFQAAAEgCACQgCADgDABQgEACgIABIgUABQgnAAAAgQQAAgFAHgEQADgCACgEQADgGAAgJIAAg5QAAgLgDgGQgCgEgDgCIgGgDQgCgCAAgEQAAgEACgDQADgCAEgBQAGgDAKAAIBCAAQAIAAAJADQAJACAIAEQAIAFAEAHQAEAHAAALQAAAJgEAIQgCAEgEADQgDADgFACQgDACAAADQAAABAGABQAFACAEADIAHAIQADAEABAGIADAPQABAHADADQACACADAAQAHACAAAHQAAACgBADIgGAGIgLADQgGACgJAAQgLAAgJgEgAjEgwQgBACAAAGIAAAUQgDAKAHAAQAFAAAEgBIAGgEQADgFAAgLQAAgJgDgEIgDgFQgEgCgEAAQgFAAgCADgAgcBJIgQgEIgNgHQgGgEgFgFQgFgFgFgGQgEgHgDgHIgEgOQgCgIAAgGQAAgIACgIQACgIACgHIAIgMQAEgGAFgFQAGgFAHgEQAGgEAHgDIAPgEIARgBQAKAAAIACQAJACAIAEQAHAEAGAFIAMALIAHANIAGAMQAFANAAAJQAAAIgDAIQgBAIgDAHIgIAMIgKALQgGAFgHADQgHAFgHACIgQAEIgNABQgIAAgHgBgAgcgqIgFAFQgEAGAAAJQAAAHACALQACAKAFAKQAEAMAHAHIAHAGQAEADAEAAQACAAADgCIAHgGQAEgFAAgKQAAgIgCgKQgDgLgEgJQgFgNgEgGQgEgEgDgCQgEgCgEAAQgGAAgDACgAC8A9QAAgDAFgFQAEgEABgDQAGgngHAAQgFAAgFAKIgIASQgNAigGgBQgDAAgDgDIgMgZIgNgbQgEgJgCAAQgDAAgBAEIgBALIAAATQAAAIACAEQACADADABQAHABAAAHQAAAMgfAAQgagBAAgLQAAgGAGgBQAHgEACgIIABgcQACgRAAgUIgBgPIgCgJIgIgFQgHgEAAgFQAAgEAEgDQADgDAGgBQAIgEAPAAIAOABQAGABACACQADACAGAJIAOAcQAEAJADAFQAFAGADABQACAAADgEIAFgJIANgZIAGgMQADgGADgCQAEgDAGgCIAQgBQAeABAAANQAAAFgFAEQgGAFAAADIgDAoIACAsQAAAGAGAGQAHAEAAAEQAAAOgmAAIgFAAQggAAAAgNg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.3,-7.6,52.7,15.3);


(lib.Символ83 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguBIQgLgCgIgFQgHgEgGgGQgFgFgDgHQgIgQACgSIAAgtQAAgGgGgHQgHgFAAgFQgBgOAqAAQALAAAJACIAMACIAGAFIABAFQAAAFgBACIgGADQgDABgDADQgCAEgBAIIAAAkQAAAJADAJQABAHAEAFQAEAFAFACQAIADAHAAQAIAAAJgDIAJgKQADgGAAgKIAAgwQAAgIgDgFQgCgDgEgCIgFgCQgEgDAAgEQAAgMAhAAQAeAAAAAMQAAAEgCACIgGADIgFAEQgDAEAAAHIAAA2QAAASgIAOIgIAKQgGAFgIADQgIAEgJABQgIADgNAAQgPAAgMgDgAjNBIQgOgDgJgEIgGgHQgDgEgCgGQgEgLAAgKQAAgFACgDQADgEAFAAQAEAAADAGIAJALQAFAIAGADIAKAEQAFACAHAAQAEAAAFgCQAHgEgBgFQAAgFgEgDIgMgFQgXgGgMgKQgIgHgFgIIgFgJQgBgFAAgGQAAgIAFgIQADgIAHgHQAJgIAKgEIANgEIANAAQAOAAASAFIAEgBIAGgBQADAAAEACIAHAHIAGALQADAGAAAHQAAAEgDAGQgEADgGAAQgEAAgFgDIgKgJIgKgIQgHgDgHAAQgFAAgEADQgEACgBAFQAAAGAFAEQAEACAJADIARAFQAKADAIAFIAIAIQAFABACAEQADAEAAAEQABAFAAAHQAAAJgEAJQgEAJgHAHQgNAJgJAEIgOACQgHACgKAAQgKAAgPgDgADMBFIg/g5QgKgIgCAAQgGAAgBAIIgBAJQAAAOACAFQABAHAHAEQAFADAAAFQAAAFgCADQgEADgGACQgHACgLAAQgfgCAAgNQAAgFAGgEIAFgDQACgCABgFQACgMAAgTIAAgVIgCgWQgCgHgDgEQgCgDgDgCQgGgCAAgBQgDgCAAgFQAAgOAmABQAJAAAEACQADABAIAGIAxArQAJAIADAAQAFAAAAgMQAAgNgBgGQgBgDgHgEQgGgDAAgGQAAgNAeAAQAfgBAAAOQAAAEgCACQAAACgDACQgIADgBAEQgCAFgBAJIAABCQABAlgNAAQgFAAgGgFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.4,-7.5,48.9,15);


(lib.Символ82 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAxBIIgMgDIgKgFIgJgGIgHgIQgDgEgCgFIgDgMQgBgFAAgHQAAgGABgFIADgKQACgFADgEIAHgIIAJgGIAKgFIAMgDIAPgBIAOABIAMADIAKAFIAJAGIAHAIIAFAJIADAKIABALIgBAMIgDAMIgFAJIgHAIIgJAGIgKAFIgMADIgOABIgPgBgAA0gJQgFABgDAEQgEAEgCAEQgCAGAAAHQAAAIACAGQACAFAEAFQADADAFACQAFACAHAAQAGAAAFgCQAFgCADgDQAEgFACgFQABgGAAgIQAAgHgBgGQgCgEgEgEQgDgEgFgBQgFgCgGAAQgHAAgFACgAjNBIIgMgDIgLgFIgJgGIgHgIQgDgEgBgFIgDgMQgCgFAAgHQAAgGACgFIADgKQABgFADgEIAHgIIAJgGIALgFIAMgDIAOgBQAJAAAOADQAHACAKAGQAHAFAEAHQADAGAAAHQAAAAAAAAQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgTAAQgDAAgCgCIgEgCQgDgFgEgDIgGgCIgHgBQgGAAgFACQgFABgEAEQgDAEgCAEQgCAGAAAHQAAAIACAGQACAFADAFQAEADAFACQAFACAGAAIAIgBQADAAADgCQAEgEAEgGIADgEQADgCADAAIATAAQAAAAABABQABAAAAAAQABAAAAAAQAAABABAAQAAAAABABQAAAAAAABQAAAAABABQAAABAAAAQAAAIgEAGQgGAJgFADQgKAHgHACQgPADgJAAIgOgBgADiBGQgFAAAAgGIAAg2IgCAAIglA2QgEAGgEAAIgaAAQgFAAAAgGIAAhcQAAgFAFAAIAXAAQAFAAAAAFIAAA1IACAAIAlg1IADgDQADgCACAAIAaAAQAFAAAAAFIAABcQAAAGgFAAgAhyBGQgFAAAAgGIAAhcQAAgFAFAAIA2AAQAIAAAMACQAIADAGADQAFAEADAGQADAFAAAGQAAAOgPAEIAAABQAWAFAAATQAAAGgDAGQgDAGgFAEQgGAEgIADQgNACgIAAgAhWAuIAgAAQAGAAADgCQACgDAAgEQAAgEgCgDQgDgCgGAAIggAAgAhWAEIAaAAQAFAAADgCQACgCAAgBQAAgEgCgCQgDgCgFAAIgaAAgAC4gsQgGgCgEgEQgEgDgCgFQgCgFAAgGQAAgBAAAAQABgBAAAAQAAgBABAAQABAAAAAAIAPAAQAAAAABAAQABAAAAABQABAAAAABQAAAAAAABQABADACADQADADAEgBQAEABADgDQACgDABgDQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAIAPAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAGgCAFQgCAFgEADQgEAEgGACQgGACgHAAQgHAAgGgCg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.4,-7.3,50.8,14.7);


(lib.Символ81 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAxBIIgMgDIgKgFIgJgGIgHgIQgDgEgCgFIgDgMQgBgFAAgHQAAgGABgFIADgKQACgFADgEIAHgIIAJgGIAKgFIAMgDIAPgBIAOABIAMADIAKAFIAJAGIAHAIIAFAJIADAKIABALIgBAMIgDAMIgFAJIgHAIIgJAGIgKAFIgMADIgOABIgPgBgAA0gJQgFABgDAEQgEAEgCAEQgCAGAAAHQAAAIACAGQACAFAEAFQADADAFACQAFACAHAAQAGAAAFgCQAFgCADgDQAEgFACgFQABgGAAgIQAAgHgBgGQgCgEgEgEQgDgEgFgBQgFgCgGAAQgHAAgFACgAjNBIIgMgDIgLgFIgJgGIgHgIQgDgEgBgFIgDgMQgCgFAAgHQAAgGACgFIADgKQABgFADgEIAHgIIAJgGIALgFIAMgDIAOgBQAJAAAOADQAHACAKAGQAHAFAEAHQADAGAAAHQAAAAAAAAQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgTAAQgDAAgCgCIgEgCQgDgFgEgDIgGgCIgHgBQgGAAgFACQgFABgEAEQgDAEgCAEQgCAGAAAHQAAAIACAGQACAFADAFQAEADAFACQAFACAGAAIAIgBQADAAADgCQAEgEAEgGIADgEQADgCADAAIATAAQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAAIgEAGQgGAJgFADQgKAHgHACQgPADgJAAIgOgBgADiBGQgFAAAAgGIAAg2IgCAAIglA2QgEAGgEAAIgaAAQgFAAAAgGIAAhcQAAgFAFAAIAXAAQAFAAAAAFIAAA1IACAAIAlg1IADgDQADgCACAAIAaAAQAFAAAAAFIAABcQAAAGgFAAgAhyBGQgFAAAAgGIAAhcQAAgFAFAAIA2AAQAIAAAMACQAIADAGADQAFAEADAGQADAFAAAGQAAAOgPAEIAAABQAWAFAAATQAAAGgDAGQgDAGgFAEQgGAEgIADQgNACgIAAgAhWAuIAgAAQAGAAADgCQACgDAAgEQAAgEgCgDQgDgCgGAAIggAAgAhWAEIAaAAQAFAAADgCQACgCAAgBQAAgEgCgCQgDgCgFAAIgaAAgAC4gsQgGgCgEgEQgEgDgCgFQgCgFAAgGQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAIAPAAQAAAAABAAQABAAAAABQABAAAAABQAAAAAAABQABADACADQADADAEgBQAEABADgDQACgDABgDQAAgBAAAAQAAgBABAAQAAgBABAAQABAAAAAAIAPAAQAAAAABAAQABAAAAABQAAAAABABQAAAAAAABQAAAGgCAFQgCAFgEADQgEAEgGACQgGACgHAAQgHAAgGgCg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.4,-7.3,50.8,14.7);


(lib.Символ80 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC1BIIgLgDIgLgFIgJgGIgHgIQgDgEgCgFIgDgMQgBgFAAgHQAAgGABgFIADgKQACgFADgEIAHgIIAJgGIALgFIALgDIAPgBQAJAAAOADQAHACAKAGQAGAFAEAHQAEAGAAAHQAAAAgBAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAgBAAIgSAAQgDAAgDgCIgDgCQgDgFgFgDIgFgCIgHgBQgGAAgFACQgGABgDAEQgDAEgCAEQgCAGAAAHQAAAIACAGQACAFADAFQADADAGACQAFACAGAAIAIgBQADAAADgCQAEgEADgGIAEgEQACgCADAAIATAAQABAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAAIgDAGQgHAJgEADQgKAHgIACQgOADgJAAIgPgBgAJiBGQgFAAAAgGIAAg2IgCAAIglA2QgEAGgFAAIgZAAQgFAAAAgGIAAhcQAAgFAFAAIAXAAQAEAAAAAFIAAA1IACAAIAmg1IADgDQADgCACAAIAZAAQAGAAAAAFIAABcQAAAGgGAAgAHdBGQgFAAgBgGIAAg2IgCAAIglA2QgEAGgEAAIgaAAQgEAAAAgGIAAhcQAAgFAEAAIAXAAQAFAAAAAFIAAA1IACAAIAmg1IACgDQADgCADAAIAZAAQAFAAAAAFIAABcQAAAGgFAAgAFgBGQgEAAgCgBQgCgCgBgDIgPgbQgCgEgDgBQgDgDgGAAIgOAAIAAAjQAAAGgEAAIgXAAQgFAAAAgGIAAhcQAAgFAFAAIAXAAQAEAAAAAFIAAAgIAMAAQAGAAADgCQACgBACgCIAPgbQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQADgBAEAAIAWAAQABAAABAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgPAbQgIAMgKAEIAAABQALADAKASIAOAbQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAgABZBGQgFAAgBgGIAAg2IgCAAIglA2QgEAGgEAAIgaAAQgEAAAAgGIAAhcQAAgFAEAAIAXAAQAFAAAAAFIAAA1IACAAIAmg1IACgDQADgCADAAIAZAAQAFAAAAAFIAABcQAAAGgFAAgAgrBGQgFAAAAgGIAAg2IgCAAIgmA2QgDAGgFAAIgZAAQgFAAAAgGIAAhcQAAgFAFAAIAXAAQAEAAAAAFIAAA1IADAAIAlg1IADgDQADgCACAAIAaAAQAEAAAAAFIAABcQAAAGgEAAgAiwBGQgGAAABgGIAAhIIgSAAIgHABIgFADQgEAEgBAEIgQA8QgBAGgFAAIgWAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAPg8QADgHAEgHQAEgHAGgGQAEgDALgEQAFgCAPgBIAuAAQAEAAAAAFIAABcQAAAGgEAAgAlnBGQgFAAAAgGIAAhcQAAgFAFAAIBUAAQAFAAABAFIAAAPQgBAGgFgBIg5AAIAABIQABAGgGAAgAmeBGQgGAAAAgGIAAghIgsAAIAAAhQAAAGgEAAIgXAAQgFAAAAgGIAAhcQAAgFAFAAIAXAAQAEAAAAAFIAAAiIAsAAIAAgiQAAgFAGAAIAWAAQAFAAABAFIAABcQgBAGgFAAgAoZBGQgFAAgCgGIgFgMIgvAAIgGAMQgBAGgGAAIgXAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAqhcQADgFAEAAIAeAAQAFAAACAFIAqBcQAAABAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAgAovAbIgNgcIgBAAIgNAcIAbAAgAI3gsQgFgCgEgEQgEgDgCgFQgCgFAAgGQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAIAOAAQABAAABAAQAAAAABABQAAAAABABQAAAAAAABQAAADADADQADADAEgBQADABADgDQADgDABgDQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAIAPAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQAAAGgCAFQgDAFgEADQgDAEgGACQgGACgHAAQgHAAgHgCgAAugsQgGgCgEgEQgDgDgDgFQgCgFAAgGQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAIAOAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAADADADQACADAFgBQADABADgDQACgDABgDQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAIAPAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQAAAGgCAFQgCAFgEADQgEAEgGACQgFACgHAAQgIAAgGgCg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.8,-7.3,127.6,14.7);


(lib.Символ78 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiHA2IgMgDIgLgFIgJgGIgGgIQgEgEgBgFIgDgMQgBgFAAgGQAAgFABgFIADgMQABgFAEgEIAGgIIAJgGIALgFIAMgDIAOgBIAOABIAMADIALAFIAJAGIAHAIIAFAJIADAMIAAAKIAAALIgDAMIgFAJIgHAIIgJAGIgLAFIgMADIgOABIgOgBgAiEgbQgFABgEAEQgDAFgCAFQgCAGAAAGQAAAHACAGQACAFADAFQAEADAFACQAFACAGAAQAGAAAGgCQAFgCADgDQADgFACgFQACgGAAgHQAAgGgCgGQgCgFgDgFQgDgEgFgBQgGgCgGAAQgGAAgFACgAFMA0QgEAAgBgGIAAhcQABgFAEAAIAXAAQAFAAAAAFIAAAbIAZAAQAIAAAOACQAHACAJAGIAGAFIADAEQADAHAAAIQAAAIgDAHIgDAGIgGAGQgJAFgHACQgOADgIAAgAFoAcIAZAAIAHgBIAFgCQAEgEAAgGQAAgGgEgDIgFgDIgHgBIgZAAgADQA0QgFAAAAgGIAAhcQAAgFAFAAIA1AAQAJAAAOADIAJAEIAGAEIAGAFIAEAHQADAHABAIQgBAJgDAEIgEAHIgGAFIgGAFIgJADQgOAEgJAAIgaAAIAAAWQAAAGgEAAgADrAAIAaAAIAHAAIAFgCIAEgFQABgDAAgDQAAgDgBgCIgEgFIgFgDIgHgBIgaAAgABaA0QgFAAgBgGIAAhcQABgFAFAAIBbAAQAFAAAAAFIAAAPQAAAGgFgBIhAAAIAAAOIAvAAQAGAAAAAFIAAANQAAAGgGgBIgvAAIAAAQIBAAAQAFAAAAAFIAAAOQAAAGgFAAgAgkA0QgFAAAAgGIAAhcQAAgFAFAAIA0AAQAIAAAMACQAIADAGADQAFAEACAGQAEAFAAAGQgBAQgPAEIAAABQAXADAAATQAAAGgDAGQgDAGgGAEQgFAEgIADQgNACgIAAgAgIAcIAeAAQAFAAADgCQADgDAAgEQAAgEgDgDQgDgCgFAAIgeAAgAgIgMIAYAAQAFAAADgCQACgCAAgDQAAgEgCgCQgDgCgFAAIgYAAgAkpA0QgFAAAAgGIAAhcQAAgFAFAAIA1AAQAIAAAOADIAJAEIAHAEIAGAFIAEAHQADAHAAAIQAAAJgDAEIgEAHIgGAFIgHAFIgJADQgOAEgIAAIgZAAIAAAWQAAAGgGAAgAkNAAIAZAAIAHAAIAFgCIADgFQACgDAAgDQAAgDgCgCIgDgFIgFgDIgHgBIgZAAgAlgA0QgGAAAAgGIAAhIIgsAAIAABIQAAAGgEAAIgXAAQgFAAAAgGIAAhcQAAgFAFAAIBjAAQAFAAABAFIAABcQgBAGgFAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.5,-5.5,87.1,11.1);


(lib.Символ73 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACmBDQAAgFAGgEQAEgCAAgDQAAgFgNgRIgEgDQgCAAgHALQgHAKABADQgBABAFAEQAEAEAAAFQAAAGgGADQgFADgGAAQgJACgKAAIgUgBQgHgBgEgDQgFgDAAgEQgFANgmgBQgdAAgIgCQgFgBgDgDQgFgDAAgFQABgFAHgDQAFgCAAgEQAAgEAAgCQgBgCgEgBQgRgCgSAAQgKAAgDABQgFACAAAIQAAAEAIACQAGADAAAGQAAANghAAIgSgBQgHgBgEgCQgFgDAAgGQAAgGAHgDQAJgDACgDQAFgGAIgSIAOgcIAKgaIAFgNIABgNQAAgGABgFQACgFADgDQADgEAFgCQAFgCAIAAQAGAAAHADIAKAIIAIALIAGAMIAuBaQAEAJAIACQAGACACAEQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQADgEAGAAQAHAAAFgEIAPgPIAUgaIADgEQAAgCgDgDIgfgnQgGgHgKgEQgFgBgCgCQgCgCAAgFQABgSA2AAIATABIALADQAFABABADQACACAAAEQAAAGgDADQgFADAAABQAAACAFAGQAEAGACAAQADAAAIgOQAAgCgEgDQgEgEAAgEQAAgHAHgDQAEgCAIgBQAHgBALAAQAhAAAAAOQAAAHgGADIgJABQgHABgGAEIgKAKIgPAUQgDADAAABIADAFIApAyQAGAHAKAEQAEABACADQABACABAEQgBAIgGAEQgGADgKABQgMACgUAAIgIAAQgiAAAAgNgAgkgKIgEAJIgEAMQAAADAIAAIAQAAQAJAAAAgDQAAgEgIgMQgGgMgEAAQgEAAgDAHgAjxBPQgJgBgEgCQgFgBgBgDQgCgCAAgFQABgGAGgDQAJgDABgGQADgGABgXIAAgdIgBggQgCgJgHgFIgGgDQgCgCAAgDQAAgGAFgDQAGgDAFAAIBAACIA0gCQAEAAACADQAEADADAFQAFAOAAAIQAAAGgDAEQgEAFgGAAQgEAAgEgDIgGgIQgEgGgHgDQgJgDgOAAQgMAAgDADQgCADgCAHIgBASQAAAEACACQACACAKAAQAFAAADgDIACgIIADgGQADgEAFAAQANAAAAAhQAAAjgQAAQgEAAgCgEIgCgIQgBgGgCgCQgEgFgIAAQgHAAgBAEQgBACAAATQAAALADAFQACAEAGACQAKABABAIQABAHgIADQgEACgKABQgMACgTAAg");
	this.shape.setTransform(-122.2,63);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-148.5,55,52.6,16);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2.9,1,1).p("AiaiaIE1AAIAAE1Ik1AAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.9,-16.9,33.9,33.9);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2.9,1,1).p("AiaiaIE1AAIAAE1Ik1AAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.9,-16.9,33.9,33.9);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2.9,1,1).p("AiaiaIE1AAIAAE1Ik1AAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.9,-16.9,33.9,33.9);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2.9,1,1).p("AiaiaIE1AAIAAE1Ik1AAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.9,-16.9,33.9,33.9);


(lib.Символ4 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.Tween22 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.w256h2561380453915MouseOptions256x25632();
	this.instance.setTransform(-30,-30,0.234,0.234);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.shape220 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#171C22").s().p("AgvA/QgfgNhlhAQgnAAgGAYQgFgVAogJQAogKASASQgNgHgdADIBIArQBlBCADg2IAAAWQAfAEA8g3IBNhGQgZACgTANQAOgXAqgBQApgBABAQQgLgLgdAEIhWBMQg0AwgcAEIgnADg");
	this.shape.setTransform(22.6,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45.2,14.1);


(lib.shape218 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#131929").s().p("AgtARQg1gZAVgJQAVgLAygGQAygGAcAHQAXAFgVAWIg1ApQgEADgGAAQgQAAgogVgAglgZQgpAHATAKIBJgGQA2gJgPgGg");
	this.shape.setTransform(8.4,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFDFF").s().p("AgggFIBagEQAPAGg2AHIhJAGQgTgKApgFg");
	this.shape_1.setTransform(7.9,1.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.9,7.6);


(lib.shape216 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231812").s().p("AjuBFIADAGQhOAHheAgQARgSCYgbgAjdA2IABAGQhPgFiWAWQAsgTC4gEgAmlANQBzAMBsAYIAAAFQhngXh4gSgADvAEQBMgMBjgGQhaAJhSAOgADZgEQBjgoCGgUQh/AYhkAogAC/gFQBThDB7gpQiAA0hJA6g");
	this.shape.setTransform(45,11.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,90,22.9);


(lib.shape214 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#858688").ss(0.3,1,1).p("AFChJIAIAJQitBJimCcQi7h8hkAAQADgEAPgEIgzAGIADgMQAah0BggRQA2gIAcAYQBxgaBPARQAlgpA3gYIgPASQBYgdBXBmgAAzAvQgWAWgdANQASAAATgNQgOAYg0AA");
	this.shape.setTransform(33,16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B9BDC0").s().p("AknAMQACgEAPgFIgzAHIADgKQBjgYB7BRQAAgGgMgKQA+AXAyAwIAqgvQg5ATgKgVQA1AAAOgYQgUAOgSAAQAdgNAVgXQAcABgdAnQBFhDBcgvQgMAPAAAEQAqgpBRgYIAIAKQirBKimCbQi8h9hjABgAh6h3QBxgaBPAQQgEAUgMAJQABADAKgDQgZAfgoAOQhTgPgngxg");
	this.shape_1.setTransform(33,19.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E8ECED").s().p("AhyBTQANAJAAAGQh7hShjAXQAah0BggRQA2gIAcAYQAnAyBSAOQApgOAZgfQgKAEgBgEQALgJAFgTQAkgpA4gYIgPASQBXgdBXBmQhRAXgrAoQABgDALgPQhbAthFBGQAdgngcgBQgVAWgdANQASAAATgNQgOAYg0AAQAKAUA5gTIgqAvQgygvg/gXg");
	this.shape_2.setTransform(32.7,15.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,68,35.2);


(lib.shape211 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3D6B2B").ss(0.3,1,1).p("AgbgcQgNANAAAPQAAAQANAMQAMAMAPAAIAEAAQAOgBALgLQAMgMAAgQQAAgPgMgNQgJgIgMgCIgIgBQgSAAgJALg");
	this.shape.setTransform(4.1,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFBFF").s().p("AgKANQgKgHANgPQALgJAHAHQAIAHgHAOQgIAFgFAAQgFAAgEgCg");
	this.shape_1.setTransform(2,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#09102A").s().p("AAAANQgEAAgEgEQgEgEAAgFQAAgEAEgEQAEgEAEAAIACABQAEAAADADQAEAEAAAEQAAAFgEAEIgIAEg");
	this.shape_2.setTransform(4.3,4.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#98FA43","#387F19"],[0,1],1.8,3.3,0,1.8,3.3,8.6).s().p("AAAAoQgQAAgMgMQgMgMAAgQQAAgPAMgMQAKgMASAAIAHABQAMACAKAJQAMAMgBAPQABAQgMAMQgLAKgOACgAgLABQAAAGAFAEQAEAEADAAIACAAIAIgEQADgEAAgGQAAgDgDgEQgDgDgEAAIgDgBQgDAAgEAEQAGgQgHgHQgIgIgNAKQgNARAKAGQAKAFAPgHQgFAEAAADg");
	this.shape_3.setTransform(4.1,4.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,10.2,10.1);


(lib.shape209 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AA4D0F").ss(0.6,1,1).p("AhJAcQARARA3AIQA1AIATgIQAKgEABgHQgChVg8gMQg5gMgrBNQgBAKAIAIg");
	this.shape.setTransform(8.2,5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D9F0E0").s().p("AAQgnQg2gIgjBNQgIgIABgKQArhNA5AMQA8AMACBVQgBAHgKAEQABhVg4gJg");
	this.shape_1.setTransform(8.2,5.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCFCF4").s().p("AAAAuQg2gJgSgRQAkhNA1AJQA4AJAABVQgKAEgTAAQgSAAgagEg");
	this.shape_2.setTransform(8.1,6.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,18.4,13.6);


(lib.shape207 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AA4D0F").ss(0.6,1,1).p("AhCA6QAUAGAzgPQA2gPAPgSQAHgJgCgIQg0hJg3ATQg6ATAIBUQACAIAKACg");
	this.shape.setTransform(8,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D9F0E0").s().p("AhOAxQgIhUA6gTQA3gTA0BIQACAIgHAJQgshIg0APQg3AQALBUQgKgDgCgHg");
	this.shape_1.setTransform(8,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCFCF4").s().p("AhEAzQgLhUA2gQQA0gPAsBIQgOATg2APQgkAKgVAAQgJAAgFgBg");
	this.shape_2.setTransform(8.3,6.8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,18.1,14.1);


(lib.shape205 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#853907").ss(0.3,1,1).p("AklDAQAcg/AYhDIgQAMQAjgsgFAAQgOgBgVAQIgCABQAOgTArghIg6AJIgGABQAOgLBEgSQAjhHA6g1IgLAZIA6hBQgcAqABALQA+gsA3gLIgrAZIgCABIgcASIAbgCQBDgGA1gaIgPAPIgPAMIgCABQgdAUgnAJIAGABQBPAMArAPQgPgFgdAFIgUADIAEAIIATACIgMAGQAIAKAOAKIASALQAvANASAMIgGAAIgbAAQAUAPAQAIIAQAJQgTAAgUgLQA2BPBBA6AkICkIAdAH");
	this.shape.setTransform(29.5,19.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6B2B07").s().p("AhXgGIAPAQQAIAqgBAeQgCgigUg2gAgjggIB2AFIAFACIgVAEIhBADQgUgKgRgEgABIhRQgdAUgnAIIghAGg");
	this.shape_1.setTransform(30.6,12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8C3C0B").s().p("AiSAyIgPALQAjgsgFAAQgOAAgVAQQAZgaAvgdIgRADIg6ALQAfgPAxgLIAMgaQAZghAigkQgDARADACQAEgKAXgbIAAATQAHgSBKggIgbASIAagCQAmAJBFgaIgPAMIgCACIhnAiIAjgGIAGABQAwANAZAMIh4gFIgggBIgHAAIAHAAQAkACAlAXIBXgEIgNAGIgMAGIgaALIAKAGQgqAEg3gUQAQAMACAGIgVgKQAYAzgIAqQgPhIgZgSIgOgTQATA4ACAjQgJgfgagjQhQAYhcDBIAcAIIg6AUQAcg/AXhCg");
	this.shape_2.setTransform(19.9,20.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FAD585","#B9632A"],[0,1],-2.1,-1.8,0,-2.1,-1.8,29.4).s().p("AjfBwIgdgHQBdjCBSgYQAaAkAJAfQABgfgIgpQAZASAPBKIACANIACAJQASgxgYg3QAaASAOAXQgEgYgZgYQAiAUBBgPQgMABgOgFIgKgFIAZgMQBmBiA/BcIgkAQQiJA5iJAAQhTAAhTgUg");
	this.shape_3.setTransform(28.3,25.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A0531F").s().p("AATBpIAkgQQg9hchlhiIANgGQAIALAOAKIATATIA4AQIgZAAIgXgGIA5AgIAQAIQgTAAgSgMQA0BOBBA7g");
	this.shape_4.setTransform(48,22.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CD844F").s().p("AAQByIgCgOQAIgsgWgzIATAKQgCgGgQgKQA3ASAqgEQAOAFANgBQhCAOgjgUQAaAZAEAYQgOgYgbgRQAZA2gUAygAiqA9IARgDQgvAggZAZIgBABQANgUArgjgAiYAqQAjhEA6g2IgLAaIA6hBQgcApABAMQA8gsA5gMIgsAZIgDABQhIAggHASIAAgTQgZAcgEAKQgDgDADgRQgiAkgZAfIgMAbQgxAKgfAPIgGABQAOgMBEgTgACwAoIAWAGQAVAQAQAKIg7gggADiAuIg6gQIgTgTIASALQAvAMASAMgAgTgjIAeABQARAEAXAKIBEAFIAUABIhXAEQglgXgigCgACIgbIgFgCQgZgMgwgNQBPAMArAQQgPgFgdAEgAgagjIAHAAgAAehPQBFgGA1gbIgPAQQg0ATgiAAQgMAAgJgCg");
	this.shape_5.setTransform(25.8,12.3);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,60.9,40.6);


(lib.shape203 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#856966").ss(0.3,1,1).p("Ah9BuQBFgkApg+QA4hWBVgj");
	this.shape.setTransform(31.1,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#8E4A23").ss(0.3,1,1).p("AiUAUQBgBsATgJAiUAUIgFgHQhThbAYgEQBNAABKgRQCVggBbAUQiWgCi2B+ACzhvIAnALQi6gEi0B8");
	this.shape_1.setTransform(21.9,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEBA7D").s().p("Ai5A8QC4h/CUACIAnAMQi6gFi0B8g");
	this.shape_2.setTransform(25.1,7.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#90636A","#BF928F"],[0.008,0.992],-9.1,-2.5,0,-9.1,-2.5,28.9).s().p("Ai3AKQC3h8C3AFQhUAig7BXQgoA+hEAjIgDABQgXAAhZhkg");
	this.shape_3.setTransform(25.4,13);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#F58D36","#A0501D"],[0.008,1],-3.2,0.7,-3.2,6.1).s().p("AjBgdQBOAABJgRQCVggBcAUQiWgCi3B+QhShbAXgEg");
	this.shape_4.setTransform(19.9,6.7);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,45.8,26.1);


(lib.shape201 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#91666D").ss(0.3,1,1).p("ABTCuQgygqgog7QgthrgeiL");
	this.shape.setTransform(8.4,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#924B2B").ss(0.3,1,1).p("ABTBfIAOgOQA0g2AHhQQgtgjhrgWQhPgIhBgtIgDgBIgMgJQAYA7BtA+QBOAnAbBsQg5BYgOgJIgCgB");
	this.shape_1.setTransform(15.6,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#925842","#B58D98"],[0.012,1],7,2.3,0,7,2.3,27.4).s().p("AAwCuIgBgBQgxgqgqg7QgshrgfiKQAYA7BsA+QBQAnAbBsQg0BPgRAAIgDAAg");
	this.shape_2.setTransform(12,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF9548","#A0501D"],[0.008,1],-12.8,-9,8.1,3.1).s().p("AgXgXQhQgogtg6QBCAsBRAJQBpAWAsAiQgGBQg0A2QgmhuhLgjg");
	this.shape_3.setTransform(16.4,13.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7B871").s().p("AAGgNQhsg+gYg7IAMAJIADACQAtA7BNAnQBNAjAmBvIgNAOQgbhvhQglg");
	this.shape_4.setTransform(12.7,13.5);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,33.3,37);


(lib.shape199 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#858688").ss(0.3,1,1).p("AAAB+QgcgPgXgjQAFASAKAJQgjgLgbgbIAFAVQgagLgRgrQgDATADAFQgKgFABgeIgGAJQgLghAXgpQAOgbgQgkQCAhGByA+QgJAdAiAnQAbAWACAqIgRgNIgEAVQgIAhgSAdQAIgjgFAGQgIASgKAEIAHgbQgdAtgcAQIANgcQgxAvgCAMQABgKgGgJQgHgKgEgT");
	this.shape.setTransform(15.6,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8ECED").s().p("AgKAsQgPAKgGAIIg8g/QgBAUAJAQQgkgPgNgeQgohlChBdQA8hDA/AIQAbAWACAsIgRgMIgEAUQgVAcgIABIAFgQQhDAggbAlQgHgHgFgcg");
	this.shape_1.setTransform(17,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B5BEC3").s().p("AAIB+QgHgKgBgTQABATAHAKQgZgPgYgjQAGASAJAJQgjgLgagbIAFAVQgbgLgRgrQgDATAEAFQgKgFAAgeIgFAJQgLghAWgpQAPgbgRgkQCAhGBzA+QgKAdAiAnQg+gIg/BBQifhbApBiQANAgAkAPQgJgPAAgWIA8BAQAGgIAOgJQAEAbAJAHQAcglBDggIgGARQAJgCAVgdQgIAhgTAdQAJgjgFAGQgIASgKAEIAGgbQgdAtgcAQIANgcQgwAvgDAMQACgKgJgJg");
	this.shape_2.setTransform(14.5,14.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,33.2,31.1);


(lib.shape197 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#281109").ss(0.3,1,1).p("ABRgjQANAhgQAPQgHAJgPAFIgJADIgaAEIgXACIgKAAQgYgCgPgIQgegPgFgl");
	this.shape.setTransform(8.7,6.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6C391C").ss(0.3,1,1).p("AhCANQAVgaAuABQAeAAASALQALAEAHAK");
	this.shape_1.setTransform(10.1,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9A4914").s().p("AgsgLQATgMAPADQAOAQAmABQADANgBALQg5gCgfgeg");
	this.shape_2.setTransform(4.5,4.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#482917").s().p("AAJAOQAYACAYgPQAFAYgPANIgaAEIgXACQANgKgCgUgAgzAiQgegPgFglQAfAeA5ACQgBAWgNAIQgYgCgPgIgAA9gBQAPgPgNgbQALAGAHAKQANAfgQARQgHAJgPAFQAOgUgJgQg");
	this.shape_3.setTransform(8.7,5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#110C10").s().p("AgmAfQAPgHACgWQABgKgDgOQAHAOABAKQACAUgOAJgAAfgKIgIgVIANASQAJAQgPAUIgIACQAPgNgGgWg");
	this.shape_4.setTransform(11.3,6.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A35723").s().p("AABAjQgBgMgGgPQgmgBgQgNQAVgdAuABQAeABASALQANAZgPAOIgNgRIAJAVQgWAOgWAAIgEAAg");
	this.shape_5.setTransform(9.5,3.5);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,19.5,12);


(lib.shape195 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6C391C").ss(0.3,1,1).p("AhCANQAHgKALgEQASgLAeAAQAugBAVAa");
	this.shape.setTransform(7.3,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#281109").ss(0.3,1,1).p("ABXgaQgFAlgeAPQgPAIgYACIgKAAIgXgCIgagEIgJgDQgPgFgHgJQgQgPANgh");
	this.shape_1.setTransform(8.7,6.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#110C10").s().p("AAcAfQgOgJACgUQABgKAHgOQgDAOABAKQACAWAPAHgAgdAXQgPgUAJgQQAEgJAJgJQgGAMgCAJQgGAWAPANg");
	this.shape_2.setTransform(6.2,6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A35723").s().p("AgwAVQADgJAGgMQgJAJgEAIQgPgOANgZQASgLAegBQAugBAVAdQgQANgmABQgHAPAAAMIgEAAQgWAAgWgOg");
	this.shape_3.setTransform(7.9,3.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#482917").s().p("AgBAOQA5gCAfgeQgFAlgeAPQgPAIgYACQgNgIgBgWgAgUAqIgagEQgPgNAFgYQAYAPAYgCQgCAUANAKgAhNAVQgQgRANgfQAHgKALgGQgNAbAPAPQgJAQAOAUQgPgFgHgJg");
	this.shape_4.setTransform(8.7,5.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9A4914").s().p("AgpgDQAmgBAOgQQAPgDATAMQgfAeg5ACQgBgLADgNg");
	this.shape_5.setTransform(12.9,4.9);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,19.5,12);


(lib.shape193 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6C391C").ss(0.3,1,1).p("AgRidIgMgCQghgBgFAmQgPBrAdCBIAGAcQAMAcA6gRIAIgCQAygRgJgcQhGh8ABhrQAAgUgLgIg");
	this.shape.setTransform(7.4,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAEAE8").s().p("AgVhjQAFgmAfABIAMACQgmCIAECHQgdiDAPhpg");
	this.shape_1.setTransform(2.8,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BE7437").s().p("AgiiYQANAJAAATQgBBsBEB8QAJAcgyAQQhPh6Aoi2g");
	this.shape_2.setTransform(10,15.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9A4914").s().p("AgjCNIgHgbQgDiFAoiLIAHAEQgmC2BPB6IgJADQgWAGgNAAQgbAAgHgSg");
	this.shape_3.setTransform(6.2,16.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,16.8,34);


(lib.shape191 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6C391C").ss(0.3,1,1).p("AASidIAMgCQAhgBAFAmQAPBrgdCBIgGAcQgMAcg6gRIgIgCQgygRAJgcQBGh8gBhrQAAgUALgIQAEgDAFgBg");
	this.shape.setTransform(7.4,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9A4914").s().p("AgtBsQBEh8gBhsQAAgTANgJQAoC2hPB6QgygQAJgcg");
	this.shape_1.setTransform(4.8,15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BE7437").s().p("AghCZIgJgDQBPh6gmi2IAHgEQAoCLgDCFIgHAbQgHASgbAAQgNAAgWgGg");
	this.shape_2.setTransform(8.6,16.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAEAE8").s().p("AgaiGIAMgCQAfgBAFAmQAPBpgdCDQAEiHgmiIg");
	this.shape_3.setTransform(12,13.7);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,16.8,34);


(lib.shape189 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#713209").ss(0.3,1,1).p("ABQgrQALgjgVgQQgUgSgnAOQgmANggA8QgYAsAAA9IAAALQAAALAQADIAFAAQANABAGgHIBvh3IAGgHg");
	this.shape.setTransform(8.5,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A17376").s().p("AhBBRQgSgiBYhmQAPgPANgHIAFgDIATAAIAEACQADABACADQAGAKgHATIhuB3QgGAHgLAAIgDAAg");
	this.shape_1.setTransform(8.7,13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#492B20").s().p("AhBBdQgQgCAAgLIAAgLQAch1BSgpQAKALgCAOQgMAHgQAPQhYBmATAigABGg9QAHgLABgJQAGAMgCAOIgGAQIgGAHQAGgTgGgKgAA9hDIgTAAQACgPgIgIQAXgIAPAMQgBAMgIAJg");
	this.shape_2.setTransform(8.3,11.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A86026").s().p("Ag7gNQAgg7AmgOQAngNAUARQAVARgLAiQACgOgGgMQAAgIgEgHIAAAKQgPgMgXAIQgGgEgJgCIAIAHQhSApgcB1QAAg+AYgsg");
	this.shape_3.setTransform(8.5,9.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2D1F1E").s().p("AAPANQAIgJABgKIAAgKQAEAHAAAIQgBAHgHALQgCgDgDgBgAgTgJIgIgHQAJACAGAEQAIAIgCANIgFADQACgOgKgJg");
	this.shape_4.setTransform(13.3,3.7);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,18.9,23.2);


(lib.shape187 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#713209").ss(0.3,1,1).p("ABUBQQAAg9gYgsQggg8gmgNQgngOgUASQgVAQALAjIAGAQIAGAHIBvB3QAGAHANgBIAFAAQAQgDAAgLg");
	this.shape.setTransform(8.4,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A17376").s().p("AAuBKIhuh3QgHgTAGgKIAFgEIAEgCIATAAIAFADQANAHAPAPQBYBmgSAiIgDAAQgLAAgGgHg");
	this.shape_1.setTransform(8.2,13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#492B20").s().p("AgIgqQgQgPgMgHQgCgOAKgLQBSApAcB1IAAALQAAALgQACIgFABQATgihYhmgAhLgnIgGgQQgCgOAGgMQABAJAHALQgGAKAGATgAhJhWQAPgMAXAIQgIAIACAPIgTAAIgEACQgIgJgBgMg");
	this.shape_2.setTransform(8.6,11.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2D1F1E").s().p("AgbgBQAAgIAEgHIAAAKQABAKAIAJIgFAEQgHgLgBgHgAAHALQgCgNAIgIQAGgEAJgCIgIAHQgKAJACAOg");
	this.shape_3.setTransform(3.6,3.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A86026").s().p("AgahBIAIgHQgJACgGAEQgXgIgPAMIAAgKQgEAHAAAIQgGAMACAOQgLgiAVgRQAUgRAnANQAmAOAgA7QAYAsAAA+Qgch1hSgpg");
	this.shape_4.setTransform(8.4,9.3);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,18.9,23.2);


(lib.shape185 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6C391C").ss(0.3,1,1).p("AhEgIIAEgQIAMgXQAcgsAmAaQArAeARAiQAJAVgdAXIgHAEIgYALAhEgIQAlg+AcATQAbATgBBaQh6A4Afh6g");
	this.shape.setTransform(7.6,7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEE0DF").s().p("AgqgdQBLhHAQCJQgmARgWAAQg0AAAVhTg");
	this.shape_1.setTransform(4.9,9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0EBED").s().p("AgtgJQAlg+AaATQAdATgBBaQgRiJhKBHg");
	this.shape_2.setTransform(5.3,7.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AA5618").s().p("AAGgvQgagTglA/IAFgRIALgWQBAhCAjCfIgYAMQAChbgegTg");
	this.shape_3.setTransform(6.5,7.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C7732B").s().p("AhAggQAcgsAmAZQArAeARAgQAJAXgdAXIgHAEQgjifhABCg");
	this.shape_4.setTransform(8.7,6.2);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,17.2,17.3);


(lib.shape183 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6C391C").ss(0.3,1,1).p("ABFgIIgEgQIgMgXQgcgsgmAaQgrAegRAiQgJAVAdAXIAHAEIAYALQgBhaAbgTQAcgTAlA+gAgWA6QB6A4gfh6");
	this.shape.setTransform(7.6,7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0EBED").s().p("AgRg0QAagTAlA+QhKhHgRCJQgBhaAdgTg");
	this.shape_1.setTransform(9.9,7.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DEE0DF").s().p("AgwAlQAQiJBLBHQAVBTg0AAQgWAAgmgRg");
	this.shape_2.setTransform(10.3,9.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C7732B").s().p("AgpA5QgdgXAJgXQARggArgeQAmgZAcAsQhBhCgiCfg");
	this.shape_3.setTransform(6.5,6.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AA5618").s().p("Ag5AzQAjifBABCIALAWIAFARQglg/gbATQgcATABBbg");
	this.shape_4.setTransform(8.8,7.2);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,17.2,17.3);


(lib.shape181 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#413F42").ss(0.3,1,1).p("AhoguQAChKANgBQASgdBLADQBPADARAgQAJgEgFBNIgEAoIgCAWQgKBigMAGQhbAshKgwQgPgKgBhxIAAgCg");
	this.shape.setTransform(10.6,14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#757376").s().p("AhVAwQgPgKgBhvQAdBdBEAFQBCAEAohPQgKBggMAGQgsAWgnAAQgrAAgngag");
	this.shape_1.setTransform(10.3,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BDBEC2").s().p("AhoAAQAChKANAAQASgdBLADQBPACARAhQAJgEgFBKQgwBhg0AAQgzAAg5hmg");
	this.shape_2.setTransform(10.6,10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7E7E80").s().p("AgHBJQhEgFgdhcIAAgFIABgsQBuDKBijDIgEArIgCAWQgmBLg9AAIgHgBg");
	this.shape_3.setTransform(10.5,17.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,23.3,31.8);


(lib.shape179 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#884A25").ss(0.3,1,1).p("AD/jGQgGCUgzBcQg1BghmAsQiDAoimg6QANj8D8he");
	this.shape.setTransform(25.6,42.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#878789").ss(0.3,1,1).p("AB5A0QADhGhHhJQgjgkgigUQglgVgmgFQA8A5gFA3QgBA9g6AxIgaATQAggCAwgdQgYAwgsAyQA5giA3hDIgHA3IgGAbIgHAVQAaghAbhBQAAAqAIAIQAIgkACAIQAAAkgGAiIgKArQAugyABhgQAMAzAQAXQAAgSAIggg");
	this.shape_1.setTransform(38.9,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#E49D5D","#C16C2B"],[0,1],-3.8,-4,0,-3.8,-4,28.2).s().p("ABGibQAfgDAwgcQgXAwgtAxQA6ghA5hEIgJA4IgHAaQhBCNk2CeQANj8D8heg");
	this.shape_2.setTransform(19.7,40);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#C97736","#B56327"],[0,1],-5.5,-10.6,-5.5,3.1).s().p("AjcC7QE1ieBCiMIgGAVQAcggAahBQABApAIAJQAHgkACAIQAAAkgGAiQhOEblFAAIgggBg");
	this.shape_3.setTransform(22.2,40.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#91410E").s().p("Aj+CwQFhAPBSkpIgJArQAugzABhgQAMA0AQAXQAAgSAIggQgGCTgzBcQg0BghnAtQg0AQg7AAQhXAAhjgjg");
	this.shape_4.setTransform(25.6,41.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E8ECED").s().p("AgTA3QgqAdgbAGQA6gxABg9QAFg3g8g5QAnAGAkAUQBeBoAEA/QgBAHgOgHQgNgGANAzQgRgPgQgcQgUAxgTATIAJg4QACgEgCgOQgcAqgoAiQAzhLgNgDg");
	this.shape_5.setTransform(38.2,13.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BCC0C3").s().p("AAwB2QAGgiAAgkQgCgIgIAkQgIgIAAgqQgbBBgaAhIAHgVIAGgbQASgTAUgwQAPAcASAOQgNgyANAGQAOAHABgHQgFhAhdhnQAiAUAjAkQBHBJgDBGQgIAgAAASQgQgXgMgzQgBBgguAygAgpAYQgwAdggACIAagTQAagHArgcQAMACgyBLQAoghAbgqQADAOgDAEQg3BDg5AiQAsgyAYgwg");
	this.shape_6.setTransform(38.9,18.8);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,53.1,64.6);


(lib.shape109 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AETAAQAABxhRBRQhRBRhxAAQhwAAhRhRQhRhRAAhxQAAhwBRhRQBRhRBwAAQBxAABRBRQBRBRAABwg");
	this.shape.setTransform(27.5,27.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.Символ95 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ85();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.3,-7.6,52.7,15.3);


(lib.Символ89 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ73();
	this.instance.setTransform(114,-58.7,0.933,0.933);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.5,-7.4,49.1,15);


(lib.Символ88 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ87();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.8,-7.7,49.7,15.5);


(lib.Символ86копия = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ95();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.3,-7.6,52.7,15.3);


(lib.Символ86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ95();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:5.5},4,cjs.Ease.get(1)).to({x:0},5,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.3,-7.6,52.7,15.3);


(lib.Символ84 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ83();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.4,-7.5,48.9,15);


(lib.Символ79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ82();
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({alpha:1},5).to({alpha:0},5).to({_off:true},1).wait(13));

	// Слой 1
	this.instance_1 = new lib.Символ81();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.4,-7.3,50.8,14.7);


(lib.Символ77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ78();
	this.instance.setTransform(-3,-69.6,1.53,1.53);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-18.6},14,cjs.Ease.get(1)).to({y:-17.6},4,cjs.Ease.get(1)).wait(1).to({y:-18.6},4,cjs.Ease.get(-1)).to({y:-31.4},7,cjs.Ease.get(-1)).to({y:-69.6},7).wait(1));

	// АНГЛИЙСКИЙ
	this.instance_1 = new lib.Символ80();
	this.instance_1.setTransform(-5,53.7,1.53,1.53);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:4.7},14,cjs.Ease.get(1)).to({y:-0.3},4,cjs.Ease.get(1)).wait(1).to({y:4.7},4,cjs.Ease.get(-1)).to({y:17},7,cjs.Ease.get(-1)).to({y:53.7},7).wait(1));

	// СВОЙ 
	this.instance_2 = new lib.Символ79();
	this.instance_2.setTransform(-5,-9.2,1.53,1.53);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({scaleY:0.99},5,cjs.Ease.get(1)).wait(1).to({scaleY:1.53},5,cjs.Ease.get(-1)).to({x:-4.9},6,cjs.Ease.get(-1)).to({x:-5},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.6,-78.1,195.3,143.1);


(lib.Символ76 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ77();
	this.instance.setTransform(13,0,1.173,1.173);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-107.3,-91.6,229,167.8);


(lib.sprite221 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape220("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45.2,14.1);


(lib.sprite219 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape218("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.9,7.6);


(lib.sprite217 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape216("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,90,22.9);


(lib.sprite215 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape214("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,68,35.2);


(lib.sprite213 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape211("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,10.2,10.1);


(lib.sprite212 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape211("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,10.2,10.1);


(lib.sprite210 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape209("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,18.4,13.6);


(lib.sprite208 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape207("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,18.1,14.1);


(lib.sprite206 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape205("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,60.9,40.6);


(lib.sprite204 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape203("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,45.8,26.1);


(lib.sprite202 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape201("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,33.3,37);


(lib.sprite200 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape199("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,33.2,31.1);


(lib.sprite198 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape197("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,19.5,12);


(lib.sprite196 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape195("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,19.5,12);


(lib.sprite194 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape193("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,16.8,34);


(lib.sprite192 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape191("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,16.8,34);


(lib.sprite190 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape189("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,18.9,23.2);


(lib.sprite188 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape187("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,18.9,23.2);


(lib.sprite186 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape185("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,17.2,17.3);


(lib.sprite184 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape183("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,17.2,17.3);


(lib.sprite182 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape181("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,23.3,31.8);


(lib.sprite180 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape179("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,53.1,64.6);


(lib.sprite110 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape109("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.Symbol16 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Tween22("synched",0);
	this.instance.setTransform(30,30);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.Символ97 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ88();
	this.instance.setTransform(0.1,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.8,-7.7,49.7,15.5);


(lib.Символ94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(-32.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({rotation:-6},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-6},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-6},0).wait(1).to({rotation:0},0).wait(30));

	// Символ 86
	this.instance_1 = new lib.Символ86();
	this.instance_1.setTransform(22.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-16.9,98.4,33.9);


(lib.Символ93 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ84();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.4,-7.5,48.9,15);


(lib.Символ92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ93();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:5.5},4,cjs.Ease.get(1)).to({x:0},5,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.4,-7.5,48.9,15);


(lib.Символ91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(-31.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({rotation:11.5},0).wait(1).to({rotation:0},0).wait(1).to({rotation:11.5},0).wait(1).to({rotation:0},0).wait(1).to({rotation:11.5},0).wait(1).to({rotation:0},0).wait(40));

	// Символ 84
	this.instance_1 = new lib.Символ92();
	this.instance_1.setTransform(22.2,0.5);

	this.instance_2 = new lib.Символ84();
	this.instance_2.setTransform(22.2,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},54).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.1,-16.9,94.8,33.9);


(lib.Символ90 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ89();
	this.instance.setTransform(44.7,-25.7,1,1,0,0,0,44.7,-25.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.5,-7.4,49.1,15);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ94();
	this.instance.setTransform(-196.1,60.5,1,1,0,0,0,-0.8,0);

	this.instance_1 = new lib.galka();
	this.instance_1.setTransform(-253.8,30.8,0.66,0.66);

	this.instance_2 = new lib.Символ86копия();
	this.instance_2.setTransform(-173.2,60.5);

	this.instance_3 = new lib.Символ13();
	this.instance_3.setTransform(-228.2,60.5);

	this.instance_4 = new lib.Символ86();
	this.instance_4.setTransform(-173.2,60.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("An1i6IPrAAIAAF1IvrAAg");
	this.shape.setTransform(-195.3,62.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("An1C7IAAl1IPrAAIAAF1g");
	this.shape_1.setTransform(-195.3,62.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_4},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-245.2,43.6,98.4,33.9);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ91();
	this.instance.setTransform(-197.8,60.5,1,1,0,0,0,-0.8,0);

	this.instance_1 = new lib.galka();
	this.instance_1.setTransform(-254.9,31.9,0.66,0.66);

	this.instance_2 = new lib.Символ84();
	this.instance_2.setTransform(-174.8,61);

	this.instance_3 = new lib.Символ11();
	this.instance_3.setTransform(-228.2,60.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AnbizIO4AAIAAFnIu4AAg");
	this.shape.setTransform(-197.8,61.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnbCzIAAlmIO4AAIAAFmg");
	this.shape_1.setTransform(-197.8,61.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-245.2,43.6,94.8,33.9);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 43
	this.instance = new lib.sprite221();
	this.instance.setTransform(30.9,32.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:32.6},1).wait(2).to({y:32.4},3).wait(2).to({y:32.3},2).wait(1).to({y:32.2},0).wait(1).to({y:32.1},3).wait(1).to({y:32},0).wait(1).to({y:31.9},2).to({y:32},1).wait(2).to({y:32.1},2).wait(1).to({y:32.2},0).wait(1).to({y:32.3},2).wait(2).to({y:32.4},2).wait(1).to({y:32.5},0).wait(1).to({y:32.6},2).wait(3).to({y:32.7},0).wait(1).to({scaleX:0.98,skewX:-10.2,x:29.1,y:48.4},9).to({scaleX:0.99,skewX:-9.6,x:29.3,y:48},1).to({scaleX:0.99,skewX:-8,x:29.8,y:46.9},1).to({scaleX:1,skewX:-1.8,x:31.9,y:42.4},2).to({scaleX:1,scaleY:1,skewX:0,skewY:2.8,x:33.7,y:39.1},1).to({scaleY:0.99,skewY:8,x:35.2,y:38.9},1).to({scaleX:1,scaleY:0.96,skewY:15.3,x:37.5,y:38.6},2).to({scaleY:0.96,skewY:17.1,x:38.2,y:38.7},1).to({scaleX:1,scaleY:0.95,skewY:17.8,x:38.3},1).to({scaleX:1,scaleY:0.96,skewY:17.1,x:38.1,y:38.8},1).to({scaleY:0.96,skewY:15.3,x:37.5},1).to({scaleY:0.98,skewY:12.3,x:36.5,y:38.9},1).to({scaleX:1,scaleY:1,skewY:2.8,x:33.7,y:39.1},2).to({scaleX:1,scaleY:1,skewX:-1.8,skewY:0,x:31.9,y:42.4},1).to({scaleX:1,skewX:-5.5,x:30.6,y:44.9},1).to({scaleX:0.99,scaleY:1,skewX:-9.6,x:29.2,y:47.9},2).to({scaleX:0.98,scaleY:1,skewX:-10.2,x:29.1,y:48.4},1).to({scaleX:0.99,skewX:-9,x:29.3,y:46.8},1).to({scaleX:1,skewX:0,x:30.9,y:32.7},9).wait(1));

	// Layer 41
	this.instance_1 = new lib.sprite219();
	this.instance_1.setTransform(43.8,33.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({y:33.6},0).wait(1).to({y:33.5},3).wait(1).to({y:33.4},0).wait(1).to({y:33.3},2).wait(2).to({y:33.1},3).wait(2).to({y:33},2).wait(2).to({y:33.1},0).wait(1).to({y:33.2},2).wait(2).to({y:33.3},2).wait(1).to({y:33.4},0).wait(1).to({y:33.5},2).wait(2).to({y:33.6},2).wait(1).to({y:33.7},0).wait(3).to({scaleX:0.98,skewX:-10.2,x:41.9,y:47.2},9).to({scaleX:0.99,skewX:-9.6,x:42.2,y:46.9},1).to({scaleX:0.99,skewX:-8,x:42.7,y:46.2},1).to({scaleX:1,skewX:-5.5,x:43.6,y:44.8},1).to({scaleX:1,scaleY:1,skewX:0,skewY:2.8,x:46.5,y:40.9},2).to({scaleY:0.99,skewY:8,x:47.7,y:41.9},1).to({scaleX:1,scaleY:0.98,skewY:12.3,x:48.8,y:42.6},1).to({scaleY:0.96,skewY:17.1,x:50,y:43.5},2).to({scaleX:1,scaleY:0.95,skewY:17.8,x:50.3,y:43.7},1).to({scaleX:1,scaleY:0.96,skewY:17.1,x:50.1,y:43.6},1).to({scaleY:0.96,skewY:15.3,x:49.7,y:43.3},1).to({scaleY:0.98,skewY:12.3,x:48.9,y:42.7},1).to({scaleX:1,scaleY:1,skewY:2.8,x:46.5,y:40.9},2).to({scaleX:1,scaleY:1,skewX:-1.8,skewY:0,x:44.9,y:43.1},1).to({scaleX:1,skewX:-5.5,x:43.5,y:45},1).to({scaleX:0.99,skewX:-8,x:42.6,y:46.3},1).to({scaleX:0.98,skewX:-10.2,x:41.9,y:47.2},2).to({scaleX:0.99,skewX:-9,x:42.2,y:45.8},1).to({scaleX:1,skewX:0,x:43.8,y:33.7},9).wait(1));

	// Layer 39
	this.instance_2 = new lib.sprite217();
	this.instance_2.setTransform(8.1,19.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:19},1).wait(2).to({y:18.8},3).wait(2).to({y:18.7},2).wait(1).to({y:18.6},0).wait(1).to({y:18.5},3).wait(1).to({y:18.4},0).wait(1).to({y:18.3},2).to({y:18.4},1).wait(2).to({y:18.5},2).wait(1).to({y:18.6},0).wait(1).to({y:18.7},2).wait(2).to({y:18.8},2).wait(1).to({y:18.9},0).wait(1).to({y:19},2).wait(3).to({y:19.1},0).wait(1).to({scaleX:0.98,skewX:-10.2,x:4.2,y:39.1},9).to({scaleX:0.99,skewX:-9.6,x:4.4,y:38.5},1).to({scaleX:1,skewX:-5.5,x:6.5,y:33.8},2).to({scaleX:1,scaleY:1,skewX:0,skewY:2.8,x:11.6,y:24.5},2).to({scaleY:0.99,skewY:8,x:14.5,y:22.4},1).to({scaleX:1,scaleY:0.98,skewY:12.3,x:17,y:20.8},1).to({scaleY:0.96,skewY:17.1,x:20.4,y:19.2},2).to({scaleX:1,scaleY:0.95,skewY:17.8,x:20.7,y:18.8},1).to({scaleX:1,scaleY:0.96,skewY:17.1,x:20.3,y:19.1},1).to({scaleY:0.96,skewY:15.3,x:19.1,y:19.7},1).to({scaleY:0.98,skewY:12.3,x:17.1,y:20.8},1).to({scaleX:1,scaleY:1,skewY:2.8,x:11.6,y:24.5},2).to({scaleX:1,scaleY:1,skewX:-1.8,skewY:0,x:8.7,y:29.6},1).to({scaleX:0.99,skewX:-8,x:5.3,y:36.7},2).to({scaleX:0.98,skewX:-10.2,x:4.2,y:39.1},2).to({scaleX:0.99,skewX:-9,x:4.5,y:37},1).to({scaleX:1,skewX:0,x:8.1,y:19.1},9).wait(1));

	// Layer 37
	this.instance_3 = new lib.sprite215();
	this.instance_3.setTransform(20.9,27.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:27.7},1).wait(2).to({y:27.5},3).wait(2).to({y:27.4},2).wait(1).to({y:27.3},0).wait(1).to({y:27.2},3).wait(1).to({y:27.1},0).wait(1).to({y:27},2).to({y:27.1},1).wait(2).to({y:27.2},2).wait(1).to({y:27.3},0).wait(1).to({y:27.4},2).wait(2).to({y:27.5},2).wait(1).to({y:27.6},0).wait(1).to({y:27.7},2).wait(3).to({y:27.8},0).wait(1).to({scaleX:0.98,skewX:-10.2,x:18.4,y:45.4},9).to({scaleX:0.99,skewX:-9.6,x:18.6,y:44.8},1).to({scaleX:1,skewX:-5.5,x:20.1,y:41.2},2).to({scaleX:1,scaleY:1,skewX:0,skewY:2.8,x:24,y:33.8},2).to({scaleY:0.99,skewY:8,x:26,y:32.7},1).to({scaleX:1,scaleY:0.98,skewY:12.3,x:27.8,y:31.9},1).to({scaleY:0.96,skewY:15.3,x:29.2,y:31.4},1).to({scaleX:1,scaleY:0.95,skewY:17.8,x:30.3,y:31.1},2).to({scaleX:1,scaleY:0.96,skewY:17.1,x:30,y:31.2},1).to({scaleY:0.96,skewY:15.3,x:29.1,y:31.5},1).to({scaleY:0.98,skewY:12.3,x:27.8,y:32},1).to({scaleX:1,scaleY:1,skewY:2.8,x:24,y:33.8},2).to({scaleX:1,scaleY:1,skewX:-1.8,skewY:0,x:21.8,y:37.9},1).to({scaleX:0.99,skewX:-8,x:19.2,y:43.4},2).to({scaleX:0.99,scaleY:1,skewX:-9.6,x:18.8,y:44.8},1).to({scaleX:0.98,scaleY:1,skewX:-10.2,x:18.4,y:45.4},1).to({scaleX:0.99,skewX:-9,x:18.6,y:43.5},1).to({scaleX:1,skewX:-1,x:20.5,y:29.3},8).to({skewX:0,x:20.9,y:27.8},1).wait(1));

	// Layer 35
	this.cat_04 = new lib.sprite213();
	this.cat_04.setTransform(36.6,26.5);

	this.timeline.addTween(cjs.Tween.get(this.cat_04).to({y:26.4},1).wait(2).to({y:26.2},3).wait(2).to({y:26.1},2).wait(1).to({y:26},0).wait(1).to({y:25.9},3).wait(1).to({y:25.8},0).wait(1).to({y:25.7},2).to({y:25.8},1).wait(2).to({y:25.9},2).wait(1).to({y:26},0).wait(1).to({y:26.1},2).wait(2).to({y:26.2},2).wait(1).to({y:26.3},0).wait(1).to({y:26.4},2).wait(3).to({y:26.5},0).wait(1).to({scaleX:0.98,skewX:-10.2,x:33.6,y:41.3},9).to({scaleX:0.99,skewX:-9.6,x:33.8,y:41},1).to({scaleX:0.99,skewX:-8,x:34.6,y:40},1).to({scaleX:1,skewX:-1.8,x:37.5,y:36.2},2).to({scaleX:1,scaleY:1,skewX:0,skewY:2.8,x:39.7,y:33.2},1).to({scaleY:0.99,skewY:8,x:41.8,y:33.7},1).to({scaleX:1,scaleY:0.98,skewY:12.3,x:43.6,y:34},1).to({scaleY:0.96,skewY:15.3,x:44.6,y:34.3},1).to({scaleX:1,scaleY:0.95,skewY:17.8,x:45.7,y:34.5},2).to({scaleX:1,scaleY:0.96,skewY:17.1,x:45.4,y:34.4},1).to({scaleY:0.96,skewY:15.3,x:44.7,y:34.3},1).to({scaleY:0.98,skewY:12.3,x:43.5,y:34},1).to({scaleX:1,scaleY:1,skewY:2.8,x:39.7,y:33.2},2).to({scaleX:1,scaleY:1,skewX:-1.8,skewY:0,x:37.5,y:36.1},1).to({scaleX:1,skewX:-5.5,x:35.8,y:38.4},1).to({scaleX:0.99,scaleY:1,skewX:-9.6,x:33.8,y:41},2).to({scaleX:0.98,scaleY:1,skewX:-10.2,x:33.6,y:41.3},1).to({scaleX:0.99,skewX:-9,x:34,y:39.8},1).to({scaleX:1,skewX:0,x:36.6,y:26.5},9).wait(1));

	// Layer 33
	this.instance_4 = new lib.sprite212();
	this.instance_4.setTransform(57.2,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:24.3},1).wait(2).to({y:24.1},3).wait(2).to({y:24},2).wait(1).to({y:23.9},0).wait(1).to({y:23.8},3).wait(1).to({y:23.7},0).wait(1).to({y:23.6},2).to({y:23.7},1).wait(2).to({y:23.8},2).wait(1).to({y:23.9},0).wait(1).to({y:24},2).wait(2).to({y:24.1},2).wait(1).to({y:24.2},0).wait(1).to({y:24.3},2).wait(3).to({y:24.4},0).wait(1).to({scaleX:0.98,skewX:-10.2,x:53.5,y:35.6},9).to({scaleX:0.99,skewX:-9.6,x:53.7,y:35.5},1).to({scaleX:0.99,skewX:-8,x:54.6,y:35.1},1).to({scaleX:1,skewX:-5.5,x:56,y:34.4},1).to({scaleX:1,scaleY:1,skewX:0,skewY:2.8,x:60.4,y:32.2},2).to({scaleY:0.99,skewY:8,x:62.3,y:34.5},1).to({scaleX:1,scaleY:0.98,skewY:12.3,x:63.9,y:36.4},1).to({scaleY:0.96,skewY:17.1,x:65.7,y:38.5},2).to({scaleX:1,scaleY:0.95,skewY:17.8,x:65.9,y:38.9},1).to({scaleX:1,scaleY:0.96,skewY:17.1,x:65.6,y:38.6},1).to({scaleY:0.96,skewY:15.3,x:65,y:37.8},1).to({scaleY:0.98,skewY:12.3,x:63.9,y:36.5},1).to({scaleX:1,scaleY:1,skewY:2.8,x:60.4,y:32.2},2).to({scaleX:1,scaleY:1,skewX:-1.8,skewY:0,x:57.9,y:33.4},1).to({scaleX:1,skewX:-5.5,x:55.9,y:34.4},1).to({scaleX:0.99,skewX:-8,x:54.5,y:35.2},1).to({scaleX:0.98,skewX:-10.2,x:53.5,y:35.6},2).to({scaleX:0.99,skewX:-9,x:53.8,y:34.5},1).to({scaleX:1,skewX:0,x:57.2,y:24.4},9).wait(1));

	// Layer 31
	this.instance_5 = new lib.sprite210();
	this.instance_5.setTransform(32.1,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:23.4},1).wait(2).to({y:23.2},3).wait(2).to({y:23.1},2).wait(1).to({y:23},0).wait(1).to({y:22.9},3).wait(1).to({y:22.8},0).wait(1).to({y:22.7},2).to({y:22.8},1).wait(2).to({y:22.9},2).wait(1).to({y:23},0).wait(1).to({y:23.1},2).wait(2).to({y:23.2},2).wait(1).to({y:23.3},0).wait(1).to({y:23.4},2).wait(3).to({y:23.5},0).wait(1).to({scaleX:0.98,skewX:-10.2,x:28.6,y:39.2},9).to({scaleX:0.99,skewX:-9.6,x:28.8,y:38.8},1).to({scaleX:0.99,skewX:-8,x:29.7,y:37.6},1).to({scaleX:1,skewX:-1.8,x:32.9,y:33.3},2).to({scaleX:1,scaleY:1,skewX:0,skewY:2.8,x:35.4,y:30},1).to({scaleY:0.99,skewY:8,x:37.8,y:30.1},1).to({scaleX:1,scaleY:0.98,skewY:12.3,x:39.7,y:30.2},1).to({scaleY:0.96,skewY:17.1,x:42,y:30.4},2).to({scaleX:1,scaleY:0.95,skewY:17.8,x:42.3,y:30.3},1).to({scaleX:1,scaleY:0.96,skewY:17.1,x:41.9},1).to({scaleY:0.96,skewY:15.3,x:41.1,y:30.2},1).to({scaleY:0.98,skewY:12.3,x:39.7,y:30.1},1).to({scaleX:1,scaleY:1,skewY:2.8,x:35.4,y:30},2).to({scaleX:1,scaleY:1,skewX:-1.8,skewY:0,x:32.9,y:33.3},1).to({scaleX:1,skewX:-5.5,x:31,y:35.9},1).to({scaleX:0.99,scaleY:1,skewX:-9.6,x:28.9,y:38.8},2).to({scaleX:0.98,scaleY:1,skewX:-10.2,x:28.6,y:39.2},1).to({scaleX:0.99,skewX:-9,x:29,y:37.5},1).to({scaleX:1,skewX:0,x:32.1,y:23.5},9).wait(1));

	// Layer 29
	this.instance_6 = new lib.sprite208();
	this.instance_6.setTransform(54.9,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({y:21.2},0).wait(1).to({y:21.1},3).wait(1).to({y:21},0).wait(1).to({y:20.9},2).wait(2).to({y:20.7},3).wait(2).to({y:20.6},2).wait(2).to({y:20.7},0).wait(1).to({y:20.8},2).wait(2).to({y:20.9},2).wait(1).to({y:21},0).wait(1).to({y:21.1},2).wait(2).to({y:21.2},2).wait(1).to({y:21.3},0).wait(3).to({scaleX:0.98,skewX:-10.2,x:50.6,y:33},9).to({scaleX:0.99,skewX:-9.6,x:51,y:32.9},1).to({scaleX:0.99,skewX:-8,x:51.8,y:32.4},1).to({scaleX:1,skewX:-5.5,x:53.3,y:31.6},1).to({scaleX:1,scaleY:1,skewX:0,skewY:2.8,x:58.2,y:29},2).to({scaleY:0.99,skewY:8,x:60.4,y:31.2},1).to({scaleX:1,scaleY:0.98,skewY:12.3,x:62.3,y:32.9},1).to({scaleY:0.96,skewY:15.3,x:63.5,y:34.2},1).to({scaleX:1,scaleY:0.95,skewY:17.8,x:64.6,y:35.2},2).to({scaleX:1,scaleY:0.96,skewY:17.1,x:64.3,y:35},1).to({scaleY:0.96,skewY:15.3,x:63.5,y:34.2},1).to({scaleY:0.98,skewY:12.3,x:62.2,y:32.9},1).to({scaleX:1,scaleY:1,skewY:2.8,x:58.2,y:29},2).to({scaleX:1,scaleY:1,skewX:-1.8,skewY:0,x:55.4,y:30.4},1).to({scaleX:1,skewX:-5.5,x:53.2,y:31.5},1).to({scaleX:0.99,scaleY:1,skewX:-9.6,x:50.8,y:32.8},2).to({scaleX:0.98,scaleY:1,skewX:-10.2,x:50.6,y:33},1).to({scaleX:0.99,skewX:-9,x:51,y:31.9},1).to({scaleX:1,skewX:0,x:54.9,y:21.3},9).wait(1));

	// Layer 27
	this.cat_08 = new lib.sprite206();
	this.cat_08.setTransform(24.1,0.8);

	this.timeline.addTween(cjs.Tween.get(this.cat_08).to({y:0.7},1).wait(2).to({y:0.5},3).wait(2).to({y:0.4},2).wait(1).to({y:0.3},0).wait(1).to({y:0.2},3).wait(1).to({y:0.1},0).wait(1).to({y:0},2).to({y:0.1},1).wait(2).to({y:0.2},2).wait(1).to({y:0.3},0).wait(1).to({y:0.4},2).wait(2).to({y:0.5},2).wait(1).to({y:0.6},0).wait(1).to({y:0.7},2).wait(3).to({y:0.8},0).wait(1).to({scaleX:0.98,skewX:-10.2,x:16.7,y:18.2},9).to({scaleX:0.99,skewX:-9.6,x:17.1,y:17.7},1).to({scaleX:1,skewX:-5.5,x:20.6,y:14.1},2).to({scaleX:1,scaleY:1,skewX:0,skewY:2.8,x:28.4,y:7},2).to({scaleY:0.99,skewY:8,x:32.9,y:6.6},1).to({scaleX:1,scaleY:0.98,skewY:12.3,x:36.6,y:6.4},1).to({scaleY:0.96,skewY:17.1,x:40.9,y:6.3},2).to({scaleX:1,scaleY:0.95,skewY:17.8,x:41.5,y:6.2},1).to({scaleX:1,scaleY:0.96,skewY:17.1,x:41,y:6.3},1).to({scaleY:0.96,skewY:15.3,x:39.3},1).to({scaleY:0.98,skewY:12.3,x:36.6},1).to({scaleX:1,scaleY:1,skewY:2.8,x:28.4,y:7},2).to({scaleX:1,scaleY:1,skewX:-1.8,skewY:0,x:24.2,y:10.9},1).to({scaleX:0.99,skewX:-8,x:18.6,y:16.4},2).to({scaleX:0.98,skewX:-10.2,x:16.7,y:18.2},2).to({scaleX:0.99,skewX:-9,x:17.4,y:16.4},1).to({scaleX:1,skewX:0,x:24.1,y:0.8},9).wait(1));

	// Layer 25
	this.instance_7 = new lib.sprite204();
	this.instance_7.setTransform(54,5.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({skewY:0.3,x:54.1,y:5},1).to({skewY:0.5,y:4.9},1).to({skewY:0.8,x:54.2,y:4.7},1).to({skewY:1,x:54.3},1).to({skewY:1.3,x:54.4,y:4.6},1).to({skewY:1.5,x:54.5,y:4.5},1).to({scaleY:1,skewY:1.8,y:4.4},1).to({skewY:2.3,x:54.6,y:4.2},2).to({skewY:2.6,y:4.1},1).to({scaleY:1,skewY:3,x:54.8,y:4},1).to({skewY:3.8,x:55,y:3.7},3).to({scaleY:1,skewY:4,x:55.1,y:3.6},1).to({skewY:4.3},1).to({skewY:4.5,x:55.2,y:3.5},1).to({scaleY:1,skewY:4.8,x:55.3,y:3.4},1).to({skewY:5.2,x:55.4,y:3.3},1).to({skewY:4.8,x:55.3,y:3.4},1).to({scaleY:1,skewY:4.3,x:55.2,y:3.6},2).to({skewY:4,x:55.1,y:3.7},1).to({scaleY:1,skewY:3.8,y:3.8},1).to({skewY:3.5,x:55,y:3.9},1).to({skewY:3.3,x:54.9,y:4},1).to({scaleY:1,skewY:2.5,x:54.7,y:4.2},3).to({skewY:2.3,y:4.4},1).to({skewY:2,x:54.6},1).to({skewY:1.8,y:4.5},1).to({scaleY:1,skewY:1,x:54.4,y:4.8},3).to({skewY:0.8,x:54.3,y:4.9},1).to({skewY:0.5,x:54.2},1).to({skewY:0.3,x:54.1,y:5.1},1).wait(1).to({skewY:0,x:54},0).wait(1).to({scaleX:0.91,skewX:-25.2,x:44.3,y:21.4},9).to({scaleX:0.91,scaleY:1,skewX:-24.8,x:44.6,y:21.2},1).to({scaleX:0.91,skewX:-24.3,x:45.7,y:20.9},1).to({scaleX:0.94,scaleY:1,skewX:-20,x:53.2,y:18.4},3).to({scaleX:0.99,skewX:-6.3,x:58.2,y:18.1},1).to({scaleX:1,scaleY:1,skewX:0,skewY:4,x:62.6,y:18.4},1).to({scaleX:1,scaleY:0.96,skewY:16.1,x:68.1,y:19.4},2).to({scaleX:1,scaleY:0.95,skewY:17.8,x:68.8,y:19.5},1).to({scaleX:1,scaleY:0.96,skewY:16.1,x:68,y:19.4},1).to({scaleX:1,scaleY:1,skewY:4,x:62.5,y:18.4},2).to({scaleX:0.94,scaleY:1,skewX:-20,skewY:0,x:53.2},2).to({scaleX:0.93,scaleY:1,skewX:-21.8,x:50,y:19.5},1).to({scaleX:0.91,skewX:-24.3,x:45.8,y:21},2).to({scaleX:0.91,scaleY:1,skewX:-25.2,x:44.3,y:21.4},2).to({scaleX:0.92,scaleY:1,skewX:-22.6,x:45.1,y:19.7},1).to({scaleX:1,scaleY:1,skewX:0,x:54,y:5.1},9).wait(1));

	// Layer 23
	this.instance_8 = new lib.sprite202();
	this.instance_8.setTransform(12.3,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({skewX:-0.5,x:12.1,y:1.8},2).to({skewX:-0.8,x:12,y:1.9},1).to({skewX:-1,x:11.8},1).to({skewX:-1.3,x:11.7},1).to({skewX:-1.5,x:11.6,y:2},1).to({scaleX:1,skewX:-1.8},1).to({skewX:-2,x:11.5,y:2.1},1).to({skewX:-2.3,x:11.4,y:2.2},1).to({skewX:-2.5,x:11.3,y:2.3},1).to({scaleX:1,skewX:-3.5,x:10.9,y:2.5},4).to({skewX:-3.8,x:10.8},1).to({scaleX:1,skewX:-4,x:10.7,y:2.6},1).to({skewX:-4.3,x:10.6,y:2.7},1).to({skewX:-4.5,x:10.5,y:2.8},1).to({scaleX:1,skewX:-5,x:10.4,y:2.9},1).to({scaleX:1,skewX:-4.6,x:10.5,y:2.8},1).to({skewX:-4.3,x:10.6},1).to({skewX:-4.1,x:10.7,y:2.7},1).to({scaleX:1,skewX:-3.8,x:10.8,y:2.6},1).to({skewX:-3.1,x:11.1,y:2.4},3).to({scaleX:1,skewX:-2.8,x:11.2},1).to({skewX:-2.6,x:11.3,y:2.3},1).to({skewX:-2.3,y:2.2},1).to({skewX:-2.1,x:11.5,y:2.1},1).to({skewX:-1.8,x:11.6},1).to({scaleX:1,skewX:-1.6},1).to({skewX:-0.8,x:12,y:1.9},3).to({skewX:-0.6,x:12.1},1).to({skewX:-0.3,x:12.2,y:1.8},1).to({skewX:-0.1,y:1.7},1).wait(1).to({skewX:0,x:12.3},0).wait(1).to({scaleX:0.85,skewX:-31.7,x:0,y:31.9},9).to({scaleX:0.89,scaleY:1,skewX:-27.1,x:1.8,y:28.1},2).to({scaleX:0.97,skewX:-13.8,x:8.2,y:17.4},2).to({scaleX:1,scaleY:1,skewX:-3.7,x:13.9,y:9.8},1).to({scaleX:1,scaleY:1,skewX:0,skewY:4.8,x:19.7,y:6.7},1).to({scaleX:1,scaleY:0.96,skewY:16.1,x:28.1,y:3.7},2).to({scaleY:0.94,skewY:19,x:30.4,y:3.1},1).to({scaleX:1,scaleY:0.94,skewY:20,x:31.1},1).to({scaleX:1,scaleY:0.96,skewY:16.1,x:28.1,y:4},2).to({scaleY:0.98,skewY:11.3,x:24.6,y:5.1},1).to({scaleX:1,scaleY:1,skewX:-3.7,skewY:0,x:13.9,y:9.8},2).to({scaleX:0.93,scaleY:1,skewX:-21.6,x:4.3,y:23.4},2).to({scaleX:0.86,skewX:-30.6,x:0.5,y:30.9},2).to({scaleX:0.85,scaleY:1,skewX:-31.7,x:0,y:31.9},1).to({scaleX:0.88,scaleY:1,skewX:-28.5,x:0.9,y:28.6},1).to({scaleX:1,scaleY:1,skewX:0,x:12.3,y:1.7},9).wait(1));

	// Layer 21
	this.cat_13 = new lib.sprite200();
	this.cat_13.setTransform(37.4,47.2);

	this.timeline.addTween(cjs.Tween.get(this.cat_13).to({scaleX:1,scaleY:1,x:37.3},1).to({scaleX:1,scaleY:1,y:47.1},1).to({scaleX:1,scaleY:1.01},1).to({scaleX:1.01,scaleY:1.01},1).to({scaleX:1.01,scaleY:1.01,x:37.2,y:47},1).to({scaleX:1.01,scaleY:1.02},1).to({scaleX:1.01,scaleY:1.02},1).to({scaleX:1.01,scaleY:1.02,y:46.9},1).to({scaleX:1.01,scaleY:1.02,x:37.1},1).to({scaleX:1.02,scaleY:1.03,y:46.8},1).to({scaleX:1.02,scaleY:1.03},1).to({scaleX:1.02,scaleY:1.03,y:46.7},1).to({scaleX:1.02,scaleY:1.03,x:37},1).to({scaleX:1.02,scaleY:1.04},1).to({scaleX:1.02,scaleY:1.04,y:46.6},1).to({scaleX:1.03,scaleY:1.04},1).to({scaleX:1.03,scaleY:1.05,x:36.9},1).to({scaleX:1.03,scaleY:1.05,y:46.5},1).to({scaleX:1.03,scaleY:1.05},1).to({scaleX:1.03,scaleY:1.05},1).to({scaleX:1.02,scaleY:1.03,x:37.1,y:46.8},7).to({scaleX:1.02,scaleY:1.03},1).to({scaleX:1.01,scaleY:1.02,x:37.2,y:46.9},3).to({scaleX:1.01,scaleY:1.02,y:47},1).to({scaleX:1.01,scaleY:1.01},1).to({scaleX:1.01,scaleY:1.01,x:37.3},1).to({scaleX:1.01,scaleY:1.01,y:47.1},1).to({scaleX:1,scaleY:1.01},1).to({scaleX:1,scaleY:1,y:47.2},1).to({scaleX:1,scaleY:1,x:37.4},1).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({y:51.5},9).to({y:50.7},5).to({y:51.5},5).to({y:50.7},5).to({y:51.5},5).to({y:47.2},10).wait(1));

	// Layer 19
	this.instance_9 = new lib.sprite198();
	this.instance_9.setTransform(58.8,87.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(80));

	// Layer 17
	this.instance_10 = new lib.sprite196();
	this.instance_10.setTransform(27.8,87.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(80));

	// Layer 15
	this.instance_11 = new lib.sprite194();
	this.instance_11.setTransform(56.6,61.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(6).to({x:56.7},0).wait(8).to({x:56.8},0).wait(12).to({x:56.7},0).wait(8).to({x:56.6},0).wait(46));

	// Layer 13
	this.instance_12 = new lib.sprite192();
	this.instance_12.setTransform(32.8,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(2).to({x:32.7},0).wait(8).to({x:32.6},0).wait(8).to({x:32.5},0).wait(3).to({x:32.6},0).wait(8).to({x:32.7},0).wait(8).to({x:32.8},0).wait(43));

	// Layer 11
	this.instance_13 = new lib.sprite190();
	this.instance_13.setTransform(66,72.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({skewY:0.3,x:66.1},1).to({skewY:0.8,x:66.2,y:72.6},1).to({skewY:1.5,x:66.4},2).to({scaleY:1,skewY:1.8,x:66.5},1).to({skewY:2.3,x:66.6},1).to({skewY:2.8,x:66.7},1).to({scaleY:1,skewY:3.5,x:67},2).to({skewY:3.8,y:72.5},1).to({scaleY:1,skewY:5.8,x:67.6},5).to({scaleY:0.99,skewY:6.3,x:67.7,y:72.4},1).to({scaleY:0.99,skewY:6.6,x:67.8},1).to({scaleY:0.99,skewY:7,x:68,y:72.5},1).to({scaleY:0.99,skewY:7.5},1).to({scaleY:0.99,skewY:6.3,x:67.6},3).to({scaleY:1,skewY:5.8,x:67.5},1).to({scaleY:1,skewY:4.8,x:67.2},3).to({scaleY:1,skewY:4.3,x:67.1},1).to({skewY:4},1).to({scaleY:1,skewY:3.6,x:66.9,y:72.6},1).to({skewY:3.3,x:66.8},1).to({scaleY:1,skewY:2.1,x:66.5},3).to({skewY:1.8,x:66.4,y:72.7},1).to({scaleY:1,skewY:1.3,x:66.2},1).to({skewY:1,x:66.1},1).to({skewY:0.6},1).to({skewY:0.3,x:66},1).wait(1).to({skewY:0},0).wait(1).to({scaleX:1,scaleY:0.99,skewY:9.8,x:69.7,y:72.4},6).to({scaleX:1,scaleY:0.97,skewY:15,x:71.7,y:72.5},3).to({scaleX:1,scaleY:0.97,skewY:14.6,x:71.5},1).to({scaleY:0.97,skewY:13.6,x:71.3},1).to({scaleY:0.98,skewY:12,x:70.8},1).to({scaleX:1,scaleY:0.99,skewY:6.8,x:69.4,y:72.4},2).to({scaleX:1,scaleY:0.98,skewY:12,x:71},2).to({scaleY:0.97,skewY:14.6,x:71.7,y:72.5},2).to({scaleX:1,scaleY:0.97,skewY:15},1).to({scaleX:1,scaleY:0.97,skewY:14.6,x:71.5},1).to({scaleY:0.97,skewY:13.6,x:71.3},1).to({scaleY:0.98,skewY:12,x:70.8},1).to({scaleX:1,scaleY:0.99,skewY:6.8,x:69.4,y:72.4},2).to({scaleX:1,scaleY:0.98,skewY:12,x:70.9},2).to({scaleY:0.97,skewY:14.6,x:71.6,y:72.5},2).to({scaleX:1,scaleY:0.97,skewY:15,x:71.7},1).to({scaleX:1,scaleY:0.97,skewY:13.3,x:71.1},1).to({scaleX:1,scaleY:1,skewY:1.3,x:66.5,y:72.6},8).to({skewY:0,x:66,y:72.7},1).wait(1));

	// Layer 9
	this.instance_14 = new lib.sprite188();
	this.instance_14.setTransform(18.5,72.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({skewX:-0.3,x:18.4,y:73},1).to({skewX:-0.8,x:18.3,y:73.1},1).to({skewX:-1.3,x:18.2,y:73.3},1).to({skewX:-1.5,x:18.1},1).to({scaleX:1,skewX:-2.8,x:17.8,y:73.6},3).to({scaleX:1,skewX:-3.3,x:17.6,y:73.7},1).to({skewX:-3.8,y:73.9},1).to({scaleX:1,skewX:-4,x:17.4},1).to({scaleX:1,skewX:-5,x:17.2,y:74.2},2).to({scaleX:1,skewX:-5.8,x:17,y:74.4},2).to({scaleX:0.99,skewX:-6.3,x:16.9,y:74.5},1).to({scaleX:0.99,skewX:-6.6,x:16.8,y:74.6},1).to({scaleX:0.99,skewX:-7,x:16.7,y:74.7},1).to({scaleX:0.99,skewX:-8,x:16.5,y:75},2).to({scaleX:0.99,skewX:-7.5,x:16.6,y:74.8},1).to({scaleX:0.99,skewX:-6.8,x:16.8,y:74.7},2).to({scaleX:0.99,skewX:-6.3,x:16.9,y:74.6},1).to({scaleX:1,skewX:-5.8,x:17,y:74.4},1).to({scaleX:1,skewX:-5,x:17.2,y:74.3},2).to({skewX:-4.8,x:17.3,y:74.1},1).to({scaleX:1,skewX:-4.3,x:17.5,y:74},1).to({scaleX:1,skewX:-3.8,x:17.6,y:73.9},1).to({skewX:-3.5,y:73.8},1).to({scaleX:1,skewX:-2.8,x:17.8,y:73.6},2).to({skewX:-2.3,x:17.9,y:73.5},1).to({scaleX:1,skewX:-1,x:18.3,y:73.1},3).to({skewX:-0.8,x:18.4},1).to({skewX:-0.3,x:18.5,y:73},1).wait(1).to({skewX:0,y:72.9},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:-9.8,x:15.2,y:75.5},6).to({scaleX:0.98,skewX:-11.5,x:14.7,y:76},1).to({scaleX:0.97,skewX:-13.3,x:14.1,y:76.5},1).to({scaleX:0.97,scaleY:1,skewX:-15,x:13.6,y:77},1).to({scaleX:0.97,scaleY:1,skewX:-14.3,x:13.8,y:76.8},1).to({scaleX:0.98,skewX:-12.5,x:14.2,y:76.3},1).to({scaleX:0.99,skewX:-9.5,x:14.8,y:75.4},1).to({scaleX:1,scaleY:1,skewX:0,x:17.2,y:72.9},2).to({scaleX:1,skewX:-5.3,x:15.8,y:74.2},1).to({scaleX:0.99,scaleY:1,skewX:-9.5,x:14.8,y:75.4},1).to({scaleX:0.98,skewX:-12.5,x:14.2,y:76.3},1).to({scaleX:0.97,scaleY:1,skewX:-15,x:13.6,y:77},2).to({scaleX:0.97,scaleY:1,skewX:-14.3,x:13.8,y:76.8},1).to({scaleX:0.98,skewX:-12.5,x:14.2,y:76.3},1).to({scaleX:0.99,skewX:-9.5,x:14.8,y:75.4},1).to({scaleX:1,scaleY:1,skewX:0,x:17.2,y:72.9},2).to({scaleX:1,skewX:-5.3,x:15.8,y:74.2},1).to({scaleX:0.99,scaleY:1,skewX:-9.5,x:14.9,y:75.4},1).to({scaleX:0.98,skewX:-12.5,x:14.2,y:76.3},1).to({scaleX:0.97,scaleY:1,skewX:-15,x:13.6,y:77},2).to({scaleX:0.97,scaleY:1,skewX:-13.3,x:14.1,y:76.5},1).to({scaleX:0.98,skewX:-11.8,x:14.6,y:76.1},1).to({scaleX:0.99,skewX:-8.8,x:15.5,y:75.2},2).to({scaleX:1,scaleY:1,skewX:-2.8,x:17.4,y:73.5},4).to({scaleX:1,skewX:0,x:18.5,y:72.9},2).wait(1));

	// Layer 7
	this.instance_15 = new lib.sprite186();
	this.instance_15.setTransform(61.7,72.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(40).to({x:63.1},8).wait(1).to({x:63.2},0).wait(20).to({x:61.7},10).wait(1));

	// Layer 5
	this.instance_16 = new lib.sprite184();
	this.instance_16.setTransform(26.1,73.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(40).to({x:25},8).wait(1).to({x:24.9},0).wait(20).to({x:26.1},10).wait(1));

	// Layer 3
	this.instance_17 = new lib.sprite182();
	this.instance_17.setTransform(41.3,62.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({scaleX:1.14,x:39.8},19).to({scaleX:1.01,x:41.2},19).wait(1).to({scaleX:1,x:41.3},0).wait(1).to({scaleX:1.07,scaleY:0.96,x:40.5,y:64.1},4).to({scaleX:1.15,scaleY:0.91,x:39.7,y:65.5},4).wait(1).to({scaleX:1.16,scaleY:0.9,x:39.5,y:65.8},0).wait(20).to({scaleX:1.15,scaleY:0.91,x:39.7,y:65.6},1).to({scaleX:1.13,scaleY:0.92,x:39.9,y:65.2},1).to({scaleX:1.03,scaleY:0.98,x:40.9,y:63.4},6).to({scaleX:1.02,scaleY:0.99,x:41.1,y:63.2},1).to({scaleX:1,scaleY:1,x:41.3,y:62.8},1).wait(1));

	// Layer 1
	this.instance_18 = new lib.sprite180();
	this.instance_18.setTransform(55.6,27.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({skewY:0.1},1).to({skewY:0.3,x:55.8},1).wait(1).to({skewY:0.8,x:56.3},3).to({y:27.7},1).to({skewY:1,x:56.5},1).wait(1).to({skewY:1.3,x:56.7},1).to({skewY:1.5,x:57},2).to({x:56.9},1).to({scaleY:1,skewY:1.8,x:57.1},1).to({x:57.2},1).to({skewY:2,x:57.4},1).wait(1).to({skewY:2.2,x:57.6,y:27.6},1).to({skewY:2,x:57.4},2).to({skewY:1.8,x:57.2,y:27.7},1).to({scaleY:1,skewY:1.5,x:57},2).wait(1).to({skewY:1.3,x:56.8},1).to({x:56.7},1).to({skewY:0.8,x:56.3},5).to({skewY:0.5,x:56.1,y:27.8},1).to({skewY:0.3,x:55.8},2).wait(1).to({skewY:0,x:55.6},2).wait(2).to({scaleY:0.98,skewY:10.2,x:64.9,y:27.5},9).to({scaleX:1,scaleY:0.98,skewY:10.3,y:27.6},1).to({scaleY:0.98,skewY:10.8,x:65.4},1).to({scaleY:0.98,skewY:11.5,x:66.1,y:27.7},1).to({scaleX:1,scaleY:0.97,skewY:13.9,x:68.2,y:27.8},2).to({scaleY:0.99,skewY:8.1,x:62.9,y:27.5},1).to({scaleY:1,skewY:0.6,x:55.9,y:27.7},2).to({scaleX:1,skewX:-1.8,skewY:0,x:53.9,y:28},2).to({scaleX:1,skewX:-1,x:54.7,y:27.9},1).to({scaleY:1,skewX:0,skewY:3.8,x:59,y:27.5},2).to({scaleY:0.97,skewY:13.9,x:68.2,y:27.8},2).to({scaleX:1,scaleY:0.98,skewY:12.5,x:67,y:27.6},1).to({scaleY:0.98,skewY:11.5,x:66},1).to({scaleY:0.98,skewY:10.3,x:64.9,y:27.4},2).to({scaleX:1,scaleY:0.98,skewY:10.2,y:27.5},1).to({scaleX:1,scaleY:0.99,skewY:9,x:63.8},1).to({scaleX:1,scaleY:1,skewY:0,x:55.6,y:27.8},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.1,0.6,98.8,97.4);


(lib.sprite112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.setTransform(1.5,21.8,0.85,0.85,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[1.5,21.7,1.5,21.3,1.5,20.9,1.5,15.3,5.6,11.2,9.7,7.1,15.3,7.1,21.1,7.1,25.2,11.2,29.3,15.3,29.3,20.9,29.3,26.7,25.2,30.8,21.1,34.9,15.3,34.9,9.7,34.9,5.6,30.8,3.3,28.5,2.3,25.7]}},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-3.7,51,51);


(lib.Символ101 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ90();
	this.instance.setTransform(44.8,-25.7,1,1,0,0,0,44.7,-25.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.5,-7.5,49.1,15);


(lib.Символ99 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ97();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.8,-7.7,49.7,15.5);


(lib.Символ98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ99();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:5.5},4,cjs.Ease.get(1)).to({x:0},5,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.8,-7.7,49.7,15.5);


(lib.Символ96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(-32,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({rotation:7.2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:7.2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:7.2},0).wait(1).to({rotation:0},0).wait(20));

	// Символ 98
	this.instance_1 = new lib.Символ98();
	this.instance_1.setTransform(22.6,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.9,-16.9,96.4,33.9);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ96();
	this.instance.setTransform(-197,60.5,1,1,0,0,0,-0.8,0);

	this.instance_1 = new lib.galka();
	this.instance_1.setTransform(-256,31.3,0.66,0.66);

	this.instance_2 = new lib.Символ88();
	this.instance_2.setTransform(-173.6,60.8);

	this.instance_3 = new lib.Символ14();
	this.instance_3.setTransform(-228.2,60.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("Anui2IPdAAIAAFtIvdAAg");
	this.shape.setTransform(-196,61.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnuC3IAAltIPdAAIAAFtg");
	this.shape_1.setTransform(-196,61.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-245.2,43.6,96.4,33.9);


(lib.sprite113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.sprite112();
	this.instance.setTransform(11.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Layer 1
	this.instance_1 = new lib.sprite110();
	this.instance_1.setTransform(-8.7,-8.7,1.316,1.316);
	this.instance_1.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-10.6,78.2,76.3);


(lib.Символ103 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ101();
	this.instance.setTransform(44.8,-25.7,1,1,0,0,0,44.8,-25.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.5,-7.5,49.1,15);


(lib.Символ102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ103();
	this.instance.setTransform(44.8,-25.7,1,1,0,0,0,44.8,-25.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:50.3},4,cjs.Ease.get(1)).to({x:44.8},5,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-7.5,49.1,15);


(lib.Символ100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(-32.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({rotation:-6.7},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-6.7},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-6.7},0).wait(1).to({rotation:0},0).wait(10));

	// Символ 102
	this.instance_1 = new lib.Символ102();
	this.instance_1.setTransform(68,-25.7,1,1,0,0,0,44.8,-25.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.1,-16.9,96.9,33.9);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ100();
	this.instance.setTransform(-152,39.6,1,1,0,0,0,44,-20.9);

	this.instance_1 = new lib.galka();
	this.instance_1.setTransform(-252.7,30.2,0.66,0.66);

	this.instance_2 = new lib.Символ90();
	this.instance_2.setTransform(-128.1,34.7,1,1,0,0,0,44.7,-25.7);

	this.instance_3 = new lib.Символ15();
	this.instance_3.setTransform(-228.2,60.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("An1i2IPrAAIAAFtIvrAAg");
	this.shape.setTransform(-196,61.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("An1C3IAAltIPrAAIAAFtg");
	this.shape_1.setTransform(-196,61.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-245.2,43.6,96.9,33.9);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 5
	this.cir = new lib.sprite113();
	this.cir.setTransform(-58.7,-16.2,0.906,0.906,0,0,0,27.6,27.6);

	this.timeline.addTween(cjs.Tween.get(this.cir).to({x:83.8},9).to({x:-58.7},10).wait(1));

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(284,-138.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ16(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:130},9).to({x:284},10).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(284,-8.3);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ19(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:130},9).to({x:284},10).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ18();
	this.instance_2.setTransform(284,-50.5);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Символ18(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:130},9).to({x:284},10).wait(1));

	// Слой 4
	this.instance_3 = new lib.Символ17();
	this.instance_3.setTransform(284,-94.5);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.Символ17(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:130},9).to({x:284},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-106.7,232.2,182.7);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		  function fl_MouseOverHandler_5()
		{
		    _this.fox.gotoAndPlay(1);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		  function fl_MouseOutHandler_2()
		{
		    _this.fox.gotoAndPlay(10);
		}
		
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Символ 76
	this.instance = new lib.Символ76();
	this.instance.setTransform(118,152.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(347.4,188.2,2.031,2.031,0,0,0,59.6,50.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 8
	this.fox = new lib.Символ57();
	this.fox.setTransform(186.4,135.8,1.363,1.363,0,0,0,-319.2,-29.2);

	this.timeline.addTween(cjs.Tween.get(this.fox).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(337.9,192.2,1.7,1.7,0,0,0,263,92);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.8)","rgba(0,0,0,0)"],[0,1],-244.8,0,134.1,0).s().p("EgmPAc0MAAAg5nMA7MAAAQGDE/D8FBQO0SzvLTHQj3E2lxE3g");
	this.shape.setTransform(107.9,154.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.6)","rgba(0,0,0,0)"],[0,1],239.7,0,-171.2,0).s().p("A6vc0Qmfk7kNk+QPLzFuzy2QEHk4GNk7MBALAAAMAAAA5ng");
	this.shape_1.setTransform(563.3,155.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.instance_3 = new lib.back();
	this.instance_3.setTransform(-52,-24.3,1.163,1.163);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(183.1,122.5,945.2,370.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;