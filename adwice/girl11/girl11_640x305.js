(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/cfdc.png", id:"cfdc"},
		{src:"images/csca.png", id:"csca"},
		{src:"images/cscsdsdd.png", id:"cscsdsdd"},
		{src:"images/cscsdww.png", id:"cscsdww"},
		{src:"images/cscsf.png", id:"cscsf"},
		{src:"images/csdfef.png", id:"csdfef"},
		{src:"images/m.png", id:"m"},
		{src:"images/sdwdd.png", id:"sdwdd"},
		{src:"images/vdvbdf.png", id:"vdvbdf"},
		{src:"images/wall.jpg", id:"wall"}
	]
};



// symbols:



(lib.cfdc = function() {
	this.initialize(img.cfdc);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.csca = function() {
	this.initialize(img.csca);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,245);


(lib.cscsdsdd = function() {
	this.initialize(img.cscsdsdd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,66);


(lib.cscsdww = function() {
	this.initialize(img.cscsdww);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,45);


(lib.cscsf = function() {
	this.initialize(img.cscsf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,75);


(lib.csdfef = function() {
	this.initialize(img.csdfef);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,97);


(lib.m = function() {
	this.initialize(img.m);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.sdwdd = function() {
	this.initialize(img.sdwdd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,35);


(lib.vdvbdf = function() {
	this.initialize(img.vdvbdf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,132);


(lib.wall = function() {
	this.initialize(img.wall);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.Символ60 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("EgzcAYiMAAAgxDMBm5AAAMAAAAxDg");
	this.shape.setTransform(329.4,157.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,658.8,314.1);


(lib.Символ55 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF66").s().p("EgzeAZUMAAAgynMBm9AAAMAAAAyng");
	this.shape.setTransform(329.6,162.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,659.2,324.1);


(lib.Символ51 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.m();
	this.instance.setTransform(0,0,0.817,0.817);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,98,98);


(lib.Символ48 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.vdvbdf();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,132,132);


(lib.Символ46 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSB0QgIgHgCgJIAAgIQAIgLAIgHIAAAAIACASIADAJIgBAIQgBAJgEAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBgBAAgAgCAhIgGAFQACgLAFgKQABgKAJgKIAHgHIALgSIAPgbIAFgPQADgKgEgIQgEgHgKgCQgIgDgLABQgTAEgQAJIgLAFQgYATgCAKIADAQIABAAIADAGIgEAIQgDAEABAFIgDgCIgCgGIgKgOQgGgKABgKQABgJAJgJIAbgYQABAAAAAAQABAAAAgBQABAAAAgBQABAAAAgBIAXgLIAZgGQAIgBASAEQASAGAGAGIALANIABAAIAFAHQgEAKACAEIACgBQABADgBADQgBAFgCABIgBgDIgCADIgBAFQgEAKgKAOIgBADIgMAHIAHgKIgBgBIgIAIIgBABIgDAAIgBACIADAAIAAACIAAAAIgDAAIAAAAQgDACgJALIgBACQgJAFgFAIQgGAIgGAog");
	this.shape.setTransform(7.9,11.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15.9,23.7);


(lib.Символ45 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABCBfQgGgKgBgGQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAAAIABgIIAAAAIgBgMIAAgBQAAgGADgMIgCgHIACgFQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAIACACIgBACIAAABQABAGgBAFIABACQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAABIABAEQAEgBAAgIQABgJACAAIAAgOIABgDIABAAIAAAFIAAABIAAAHQAAAFACAAQgCABAAAFIACAHIgBACIAAARIABAAIACgFIADgEIAAgCIAEgFIABgBQABAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAQgEAEgBACIgBAEIgBACIgDABIABAEIABAAQgBABAAAAQgBABAAAAQAAABgBAAQAAABAAAAIACACQgEAAAAAFQAAAHACAAIACgEIACABIABAAIADgCIABABIAAABIgBAFIAAAQIgBACIgBAAIgCgBIAAAEQgHgBAAAEIAAAAIACACIgDABIgIgOgAhSBfIgFgFIAAgBIABAAQAAgBAAgBQAAgBAAAAQgBgBAAAAQgBAAAAAAIACgBIACABIAAABQABAAAFgPIABgBIABgdIABgDIgBgDQgDgTABgnIgBgCQABgMgDgGIgDAFIABgTIgCgKQAAgOAFAAQALAAgBAgIAAAHIABACIAAAMIgBABIAAARIgBADIAAAQIABABIAAASIABACIgBABIAAAJQgDAAAAAFIAAADIABADIgCABIABABIAAAIQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAQAGAAAPgSQACgCACgEIAIgIIADgDIACgDIARgRIAVgSIA2g2IABgCIgCgJIAHgCIAHACQAFAGAAAJIAAABIgBgBIgBAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAABIABAFIgBAFIAAAAIADACIgEAHQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAgBAAQAAgBAAAAQAAAAgBAAQgCAAgJAKIgLAOIgSATIgBAAIgBgBIgDABIAAABIACAAIAAACQgJADgCADIgBACIgEAAQgHAFAAADIADAAQgGADAAAFQgEAAgHAHIgEAGIAAAAQABAAAHgFIAAAAQAAACgEADIgGADIAAgBQgDAAgJAJQgJAKAAACQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIAHgCIAAAAIgGAHQgDAAgCACIgHAJIgGADIAAgBIAAgBIgDAAIABABIgEACIAAABIAEACQgDAAgBACQAAABgBABQAAAAAAABQgBAAAAAAQgBAAAAABIgCgCIAAAAQgCAGgCAAIgCgBQgCACgEAAQgCAAgDgDgAgxA+QgFAGAAACQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAABAAIAFgFQAFgHAAgBQgCAAgFAEgAgtBHQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAAAIAAgBIgBgBIAAAAQgBAAAAAAQAAAAAAABQgBAAAAABQAAAAAAABgAg2BEIgCgFIgBADQAAAAAAABQABAAAAAAQAAAAABAAQAAABABAAgAg6A9IAGgDQAEgEAAgCQgKAAAAAJgAgkAkIgFAHIgCAEIAAAAQADAAAFgGIAIgIIgCgBQgCAAgFAEgAgZAlIABACQAEgCAAgDQgFAAAAADgAgHATIgDAEIAAACQAIgDAAgEIAAgCgAAAAMIACABIAAAAQAAgEAHgDIgBAAQgEAAgEAGgAhYBQIAAgBIABgGIABgBIABAIIAAABIgBgBIgBABIAAACgABVBDQAAgEACgCIAAABIgBAJQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBgABSAcQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAIgCgDIAAgBQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABgBIgBgCIACgCIAAAJQAAAAAAABQAAAAAAABQAAAAABAAQAAAAAAAAIAAAGQAAAAgBAAQAAAAgBABQAAAAgBABQAAAAAAABIgDgGgAA9AHQAEAAABABIgDAFQgCAAAAgGgABRAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIACgGIABgMQAAgEgDgFIAAAAIABAAIAAgFQACAAABAFIAAAGQABAAABAKIACAMQAAACgDAEQAAgEgCgCgABGgcIADgDIAAAAIABADIAAAAIgBABgAggghQAAgGAegkIAUgXQAKgLADAAQAHABAAADQAAAHgKAHIAAADIAEgDIAAAAIgTAbQAAADgJAIIgLALIgBAAQgCAGgFAAIgBgBQgGAGgBAAIgEgCIAAAAIgCACIgDABIAAgDg");
	this.shape.setTransform(9,11);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18,22);


(lib.Символ44 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguBSQgLAAgGgLQgEgJAAgLIABgjIABgCIgCgJIABgDIABgsIABgOIABgBIABgOQABgKAIAAIACAAIABABIABgBIABAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAAABABQABACAFABIAtAAIApAAIABAAIABAAIABAAIAFAAQAIAAACABQACACABAHIABADIgCACIACAFQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAAAIgSAAIgEABIgZgBIgOgBIAAgBIAAAAIgNgBIgDgBIAAABIgCAAIgDgBIgSgDIgCAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAIACAwIADAGQAiAAAlACQABACAGAAIABgCIAEABIACgBIABAAQAHAAADADQADAAgBAHIAAAAIgDACIAAABIABAEQAAAEgKAAQgMABAAACIgLAAQgZgDgOAAIgWABQgCAAAAAEIAAAGQgCABAAAGIABAEIgBABIAAACIgBAAIgBADIABACIAAAKIBFgCIAAABQABAAAAAAQAAABAAAAQABAAAAABQAAABAAAAIAGAAQAGgEAJAAQAHAAAAAEQgDAGAAAEIACACIACACQAAADgKAAIACAAIgDABIgIgEIgFAAIAAABIACABIgGABIAAAAIgLAAIgBACIgJgCIgIACIgDAAQgGAAgHgCIgXAAQgFAAgBAFgAAiBHQABAAABAAQAAAAAAAAQABAAgBgBQAAAAAAAAIgEgFIgDAAQAAAGAFAAg");
	this.shape.setTransform(6.9,8.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,13.8,16.5);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABRB9QgIAAAAgFIAAAAIABgBIAAgEIgBgLIgBgBIgCABIgBgBIAAgLIACgEIgBgBIAAgeQgBgIgFAAQgEAEgEgBIgCACIgIACIgBgBIgCABQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIgUAAIAAACIgLAAIgGgCIgCACIgZgCIAAAAIgJACIgCAAIgMgCIAAgCIgSgBQgFAAgBACQgEgFgCgCIgBgBIgCgGIAAgVIAAgCQAAgGgBgKIAAgCIABgCQAAgHgDAAIACgBIAAgBIgCgBIACgCQgBgCgDgGIAAgMIAAgIIgBgCIAAgOIgBgCIgBgSQgCgZAAgHIgBAAIACgCIgBgCIACgBIAAABQACgBADgDIgCAAIAAgCIAFABQADABABAdIACAhQAIAtAAABQADATgBAOIACABIAAANQgBABAGAAIBdABQAEgCgBgFIgBgGIgCgkIgBgDQgDgHAAgFQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAIgBgJIgBgBIABgCIAAgDIgCgHIgBAAQAAgTgEgeIgDgQIAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIACAAIABAAQACAAADgEQACAAADAGQADAJAAANIAAAVIAEAkIAAANIABAHIADAjIABANQACAGAHgBQACAFACAAIAKgFIAAABQADABAFAEQAEADACAAIAAADIACAAIABgBIACAAIAAALIgBABIgBgCIAAgBQgCAAAAAGIgBAHIgBgBIAAABIABAFIAAAMIACACIgCATIgBADIgDgEIAAACQAAABAAABQAAABABAAQAAABABAAQABAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAABQgBABAAAAIACAHIAAABIgEAEg");
	this.shape.setTransform(9.3,12.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,25.1);


(lib.Символ42 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFBLIgBgBIAEgMIACgsIABggIACgLIAAgEIAAgCIABgDIABgBIgBgIIABgIQABgKgDgEIgDgGIACgEIADgCQABAAAAABQABAAAAAAQAAAAABABQAAAAAAAAQACgHAFAAQADAAgCAFIABASQgDAigBARQABAQADgDIACAEIAAAZIAAAAIAcgeQADgEATgUIAFgFIAPgPQAJgIAEgIIAXgWQAEgDAGAAIgCAnQgDAYABAOQgBACgBAHIAAAAQAAAJgBABQABAYgBAaIgDAIIgCAIIgGgHIABhJIACgqIAAgIQABgEgDAAQgDAAgFADIgPARQgDABgEAGQgEAGgEAAIgYAdIgBABIABABQgCAEgHAGQgIAGgCAEIACAAIgZAgIgHAMQgEAIgIAAg");
	this.shape.setTransform(7.1,8.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.2,16.7);


(lib.Символ41 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqBbQgEAAgDgCQgGgEgBgZIAAgrIgCgIIABgBIAAgCQAAgCgDgCQADgCABgCIAGhRQACgIABgCQACgDAHAAQAEAAAAAFIgDAWIABBFIAEAAIAHAAIAsAAQAFAAALACIACAAIADhXQABgGAJgFIABAAQADAAACAGIAAARQABA5AEAZIAABIIgCABIgGAAIgEABQgFAAgEgMQgDgKAAgGIAAgkIgBgBIgDAAQgFAAgDACIg9AAIgBACIAAABQADAuABAWIAAAEIgBACg");
	this.shape.setTransform(6.1,9.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12.2,19.6);


(lib.Символ40 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqBbQgEAAgDgCQgGgEgBgZIAAgrIgCgIIABgBIAAgCQAAgCgDgCQADgCABgCIAGhRQACgIABgCQACgDAHAAQAEAAAAAFIgDAWIABBFIAEAAIAHAAIAsAAQAFAAALACIACAAIADhXQABgGAJgFIABAAQADAAACAGIAAARQABA5AEAZIAABIIgCABIgGAAIgEABQgFAAgEgMQgDgKAAgGIAAgkIgBgBIgDAAQgFAAgDACIg9AAIgBACIAAABQADAuABAWIAAAEIgBACg");
	this.shape.setTransform(6.1,9.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12.2,19.6);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguBSQgLAAgGgLQgEgJAAgLIABgjIABgCIgCgJIABgDIABgsIABgOIABgBIABgOQABgKAIAAIACAAIABABIABgBIABAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAAABABQABACAFABIAtAAIApAAIABAAIABAAIABAAIAFAAQAIAAACABQACACABAHIABADIgCACIACAFQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAAAIgSAAIgEABIgZgBIgOgBIAAgBIAAAAIgNgBIgDgBIAAABIgCAAIgDgBIgSgDIgCAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAIACAwIADAGQAiAAAlACQABACAGAAIABgCIAEABIACgBIABAAQAHAAADADQADAAgBAHIAAAAIgDACIAAABIABAEQAAAEgKAAQgMABAAACIgLAAQgZgDgOAAIgWABQgCAAAAAEIAAAGQgCABAAAGIABAEIgBABIAAACIgBAAIgBADIABACIAAAKIBFgCIAAABQABAAAAAAQAAABAAAAQABAAAAABQAAABAAAAIAGAAQAGgEAJAAQAHAAAAAEQgDAGAAAEIACACIACACQAAADgKAAIACAAIgDABIgIgEIgFAAIAAABIACABIgGABIAAAAIgLAAIgBACIgJgCIgIACIgDAAQgGAAgHgCIgXAAQgFAAgBAFgAAiBHQABAAABAAQAAAAAAAAQABAAgBgBQAAAAAAAAIgEgFIgDAAQAAAGAFAAg");
	this.shape.setTransform(6.9,8.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,13.8,16.5);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABHBdIgCgDQgPgJgDgKIgtiPIgCACIggBAQgIANAAAJIgCABIABAAIAAABQgMAZgDAJIABAAIAAABIgBACIgDAKQAAAQgHAAIgCgBIgEgCQgFgGAAgGQAAgMAJgVIATglIADgHIAKgWQADgGABABIAEgJIAWglQAEgIAFAAIAGABIABgDQAAAAABABQAAAAAAAAQABABAAAAQAAAAABAAIACADQAEASAJAaIAOAtIAEAJIAGAWIACADIAPAxIABAMQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAg");
	this.shape.setTransform(7.5,9.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,19.1);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA5BnIgHgCQgDgBgCgFIAAgGIAAgBIgBgQIgBgsIABgfIAEgcIAFgyIAAgFIgFgBQgaAAgOAEIgzgCIgQACIAAACQABA8AEAcIACAbIAAAbIACARQAAACgDACIgGABIAAAAQgKgIgDgZIgChzIgEgPIgDgFIAAgBQAAgGAFgDQAEgCAHAAIBHAAQAagBAUgCIAEgCIABAAIACABIAFgCIAHADQABACAGAGQAEAEAAAFQAAAAAAABQAAAAAAAAQgBABAAAAQgBABAAAAQgBABAAAAQgBABAAABQAAAAgBAAQAAABAAAAIgFAeIAAABIgHAlIgBAOIACAqIABADIAAABIgCAXIgBAMIABACIgBADIgCAKIgDACIgCgBg");
	this.shape.setTransform(8.3,10.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.6,20.9);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKBjIgBgCIgJAAQgDgBgEgDIgHgEIgNgHIgQgQQgGgIgEgJQgFgJgCgKQgCgKAAgLIABgTQACgLAFgJQAGgPAMgNQALgMAPgKQAOgJAQgFQAPgFARAAQAbABAAAHIgDAEIAAAEIACAFQAAABAAAAQABABAAAAQABAAAAAAQABAAAAgBIADAJIgCACQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAQAHALAAADIAAACIAAABIAAAFIgEABIgCACIgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIABAAQAAgDgDgCIAAgCIgDgCIgLgMIgGgCQgBAAAAgBQgBAAgBAAQAAgBAAAAQAAAAAAgBIAGAAQgFgFgJAAQgKAAgJACIgQAGQgPAIgPAPIgHAGQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAABABQgQAVAAANQAAAOAIATIAAABQABAHANALQAHAHAWACQASAAAMgFQALgFASgOIADgBIABAAIACgBIABgDIABACIADgEQABABAGgEIAIgCIAEAAQAFgBAAADQABADgHABQgGACAAADIAAABQAAACgFABQgFABAAABQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAIgBABIADAEIABAAIACADIgDAEIACAAIAFgCIAAABIgEAFIAAACIgHAHIgGAIIgHAHIgCABIAAADQgCAEgKAAQgFgCgCABIgGABIgCABQgBADgHAAIACgCIgEAAIgJACIABABQgFACgCAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAgBAAg");
	this.shape.setTransform(8.3,10.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.6,20.2);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2BHQgHgKgFAAIgGACIgBgCQAAgFALgGIAAgBIgBgtQgFgCAAgCIABgCIAAgHIAFgGIADgeIABgdQAEgIAFAAQAFAAAAAKIAAAvQAFAAAKgCIAPgBIAHgBQAQAAAgALQANAFAKANQAKANAAAOQAAAHgDAFQgEALgEACQgEAFgNADIgjAHIgWAAQgPgDgHAAIgHACIAAADIACAIQAAAFgEAAQgFAAgHgLgAgrgDIgBAcIADAUIAGAAIA4gFIAEgBIAPgFIAHgEQAGgDAAgFQAAgGgEgGQgDgGgGgEQgMgIgMgDIgRgBQgjAAgHAJg");
	this.shape.setTransform(7.4,8.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.9,16.6);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKBbQgEAAgEgHIgCgKQgDgSAAgjIgFhZIAAgBIgFgBQgnAAgUgDIgEAAQAAgBAAAAQAAgBAAAAQgBgBgBAAQAAAAgBAAIgGAAQAAgBgBgBQAAAAgBAAQAAgBgBAAQAAAAgBABIgBgHQAAAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAIACABIABAAQAEgDAFAAIAeABIASABIABABIALABIApABQAiAAALABIACABIgBABQAUgCAAAJQAAAEgGABQgGAAABACIgEAAQgHAAAAgCIgBACIg5AAQADAcAAAOIgCALQADAEAAAFIgBAFIABAIIgBABIAFBIQgBAEAAAEIgHADg");
	this.shape.setTransform(9.1,9.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18.3,18.3);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABVBrQgCgCgBgGQAAgGgCgCIgBgBIgDgFQgJgMgGgFIgBAAIgBgGIgCgBIgBgDIAAgEIgEgEIgJgFIgCgFIgBgBIgDAAIgBgEIgJAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIgGgBIgCABIgJAAIABgBIgYgBIgCAAIgKAAIgFgCIgDAAIgFgBIgOAAIgBgCIgCAAIgBACIAAgCIgBAAIgHAGIAAgBIABgCQAAgEgFgBQgDAAgEAFQgDADAAADIABAAIgCADIgBACIABABQgBAAgCAIIABAAIgBACIgBAHIAAACQAHgCABgBIAEgGQABgDAEgBIAAABIgBACIACAAQAAAEgDADIABAAIgDAEIgBACIgCACIgBgBIAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAQAAABAAABQAAAAAAABQAAAAABABQAAAAAAAAQAAAAABAAIAAAAIACgBIAAABQAAAEgEAFIgGAIIgHAAQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIABgDQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIAAgGQgFAAABgFIABgFQABgEgEgDIABgDIgBgHIAAAAIADgDIADgDIAEAAQABAAACgKIAHgMQAAgFgIAAIACgDQABAAADgEIAJAAQADAAAGgKQABgCAGgCIgCgDIAAgBIAGgJIABAAIACADIgDACIgCAFIgCAGIgEABIABADIAAAAIgBACIABACIAAADIADgBIAGgGIAIgNIAGgIQAFgFADABQAAADgIAHQgIAHAAADQACgBAHgFQAHgGADABIAAAAIABABIgBACIgIAIIgBABIAAgBIAGgGIAAgBQgIAAgGAKIgDAAIAAACIABAAIACABIAAABIgEAFQAEAEAPAAIAqAAQAEgCAJAAIACABQAEgDAAgCQAAgGgJgGQgDgHAAgGIAAgCIgEgHIgDgIQgCgEgGAAIAAAAIABgBIgBgEIgCgCQgCgagEgBIAAABIgBABQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIgHAAIAAgDIACgDQACgDAAgBIAAgBIgDgBIAGgOQAAgEgDgGIAAgBIACACIAIgDQADAAAEAKIADALIgBACQAAACADAHQADAGgBAEIAHAOIAAACQAAADgGAAQgEAAgCgGQgBgGgDAAQAAAOAIAEIAAACIAAAAIACgBIAAACIACAAIAAgDIABAEIgBADIADAEIABACIgBACIAAAAQAAADAFAEIAGAGIABAGIAOAZIAGADQAEACABADIAAACIADADIACACIACAGQABAFACACIACACIADACIAEABIAAgDIAEACQADgBAAgDIAFABQAEABACAHIABADIAEAJQAEADAAACIgBACIAAAAIABABIABADIAEACIAAAGIgCAAIACAHIAAACIgBABIABADQgGADACAGIgBgBQgEACAAAGIgBgCIgBAAIAAADIABACIgBADQgHgEgCgEgABfBMQAAADAGAJIABgEIgHgJgABYA1IAAAAIACABIAAgCIgCABgAAcAiQAFAAAAgEIgEgBIgBAAgAARgiIgCgCIAAACIACAAgABFBeIgFgGIgBgBIAAgCIACgBIAGAKgAhEA4IACgEIADgBQAAAFgFAAgAhTAwQAIgMACAAQgEAGAAADQgDABgDADgAAggTIgCgFIgCAAIgDgCIgCgBQABgEgDgGIgDgLIABAAQAAAAAAAAQABAAAAABQAAAAABABQAAAAAAABIAAgDIAJAQIAAAFQAGAHAAAFQgCAAgCgEgAgZgxQAFAAAFgDIAAACIABACQgDADgCAAQgGAAAAgEgAgRg8IgCACIgBgBQAAgFAJgBQAAABAAABQAAAAgBAAQAAABAAAAQAAAAAAAAIgBgBIgBAAIgBABIAAABIABABIAAABIgBACIAAAAIgCgDg");
	this.shape.setTransform(10.6,11.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.2,23.1);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABHBdIgCgDQgPgJgDgKIgtiPIgCACIggBAQgIANAAAJIgCABIABAAIAAABQgMAZgDAJIABAAIAAABIgBACIgDAKQAAAQgHAAIgCgBIgEgCQgFgGAAgGQAAgMAJgVIATglIADgHIAKgWQADgGABABIAEgJIAWglQAEgIAFAAIAGABIABgDQAAAAABABQAAAAAAAAQABABAAAAQAAAAABAAIACADQAEASAJAaIAOAtIAEAJIAGAWIACADIAPAxIABAMQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAg");
	this.shape.setTransform(7.5,9.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,19.1);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguBSQgLAAgGgLQgEgJAAgLIABgjIABgCIgCgJIABgDIABgsIABgOIABgBIABgOQABgKAIAAIACAAIABABIABgBIABAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAAABABQABACAFABIAtAAIApAAIABAAIABAAIABAAIAFAAQAIAAACABQACACABAHIABADIgCACIACAFQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAAAIgSAAIgEABIgZgBIgOgBIAAgBIAAAAIgNgBIgDgBIAAABIgCAAIgDgBIgSgDIgCAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAIACAwIADAGQAiAAAlACQABACAGAAIABgCIAEABIACgBIABAAQAHAAADADQADAAgBAHIAAAAIgDACIAAABIABAEQAAAEgKAAQgMABAAACIgLAAQgZgDgOAAIgWABQgCAAAAAEIAAAGQgCABAAAGIABAEIgBABIAAACIgBAAIgBADIABACIAAAKIBFgCIAAABQABAAAAAAQAAABAAAAQABAAAAABQAAABAAAAIAGAAQAGgEAJAAQAHAAAAAEQgDAGAAAEIACACIACACQAAADgKAAIACAAIgDABIgIgEIgFAAIAAABIACABIgGABIAAAAIgLAAIgBACIgJgCIgIACIgDAAQgGAAgHgCIgXAAQgFAAgBAFgAAiBHQABAAABAAQAAAAAAAAQABAAgBgBQAAAAAAAAIgEgFIgDAAQAAAGAFAAg");
	this.shape.setTransform(6.9,8.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,13.8,16.5);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDBuQgFAAgFgFQgFgEgEgIQgHgLgDgOQgBgPgBgBIgEgBIgCgDQABAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIgBgCIAAgEIAFgDQAHgHAQAAQADAAACgDIAchDIACgEIABgCIAPgoIACgKQABgCAGgBIAAgBIADgDIABgCIAEAAIACgBIABgBIAAgBIADACIAAADIA2B3IADAGIAFAAIAQgBIAFgBIABgBQAVAUgBAFQgDAIAAAFQADABAAgIIAAAFIgDAcIgIAPQgDAAgCgJIgCAAIgEABQgJAAAAgCIgEgWIABgYQgMAAgBADIAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAIgDgBIgCgBIgDABIgUAAIgCAAIg0ADQgaADgLAFQAAgCgFAAIgIAAIAAACQAAAJAOAcIADAHQAAAFgHAFgAgNgrIgbBEIADAAQAVAAApgDQAAgFgGgKIgJgYIgBgEIgMglQgCgFgBABIAAAAQgIANABAGg");
	this.shape.setTransform(10.5,11.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,22.1);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKBjIgBgCIgJAAQgDgBgEgDIgHgEIgNgHIgQgQQgGgIgEgJQgFgJgCgKQgCgKAAgLIABgTQACgLAFgJQAGgPAMgNQALgMAPgKQAOgJAQgFQAPgFARAAQAbABAAAHIgDAEIAAAEIACAFQAAABAAAAQABABAAAAQABAAAAAAQABAAAAgBIADAJIgCACQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAQAHALAAADIAAACIAAABIAAAFIgEABIgCACIgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIABAAQAAgDgDgCIAAgCIgDgCIgLgMIgGgCQgBAAAAgBQgBAAgBAAQAAgBAAAAQAAAAAAgBIAGAAQgFgFgJAAQgKAAgJACIgQAGQgPAIgPAPIgHAGQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAABABQgQAVAAANQAAAOAIATIAAABQABAHANALQAHAHAWACQASAAAMgFQALgFASgOIADgBIABAAIACgBIABgDIABACIADgEQABABAGgEIAIgCIAEAAQAFgBAAADQABADgHABQgGACAAADIAAABQAAACgFABQgFABAAABQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAIgBABIADAEIABAAIACADIgDAEIACAAIAFgCIAAABIgEAFIAAACIgHAHIgGAIIgHAHIgCABIAAADQgCAEgKAAQgFgCgCABIgGABIgCABQgBADgHAAIACgCIgEAAIgJACIABABQgFACgCAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAgBAAg");
	this.shape.setTransform(8.3,10.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.6,20.2);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQBfIgNgGIgDAAQgLgEgKgIQgIgIgGgMQgFgKgDgNQgDgMAAgMQAAgKADgLQACgMAEgKQAFgKAGgJQAHgJAJgIIARgLQAMgHANgFQANgEANAAIAEAAQABACAEABIAGABIAAABIACACIgBACIAAAEIABAHIAAABIgCAFIAAADQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAQgDAAgEgCQgEgDgDAAIAAAAIgFACIgNAAQgMAEgKAGQgKAGgHAJQgHAIgGALQgFALgEANIgBAQQAAATAGAKQAGAMAQAJQAKAGAIAAIANgDQAMgGAFgEQAHgGADgKIACgKIADgMQACgIAAgFQAAgKgKgPIgIgSQgDgKAAgJIAAgIIABgBIAAAHQABAEACAAIABAAIACgNIABAAQADAAABAHQACAHACAAIABAAIACgBIAFACQAEADADAAIACAAIACgBQAFABABAGQABAGABAAIAAgBIABAAQAAABAAABQAAAAAAABQAAABgBAAQAAAAAAAAIAEAFIABAAIACgBIAGAKIAAAIQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAQAAAAABABIABACQgEABgBABIAAAHIABAWQgDANAAAHQADAEAAADQAAACgFABIgHADQgFAGgEAEQgOALgNAGQgRAHgMAAQgGAAgIgCgAAugXQgBAIgCABIACAAIgCABIABAAQAFAAgCgDIAFgGIgFgFQAAAAAAABQAAAAAAABQAAAAAAABQgBABAAAAg");
	this.shape.setTransform(7.9,9.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15.9,19.6);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKBbQgEAAgEgHIgCgKQgDgSAAgjIgFhZIAAgBIgFgBQgqAAgVgDQAAgBAAAAQAAgBAAAAQgBgBgBAAQAAAAgBAAIgGAAQAAgBgBgBQAAAAgBAAQAAgBgBAAQAAAAgBABIgBgHQAAAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAIACABIABAAQAEgDAFAAIAeABIASABIABABIALABIApABQAiAAALABIACABIgBABQAUgCAAAJQAAAEgGABQgGAAABACIgEAAQgHAAAAgCIgBACIg5AAQADAcAAAOIgCALQADAEAAAFIgBAFIABAIIgBABIAFBIQgBAEAAAEIgHADg");
	this.shape.setTransform(9.1,9.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18.3,18.3);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA7BTQgBgDADgDIgBgIIgDgBQgFgDAAgMIACAAIgDgDIAAgEIgCgPQgCgBgBgGQAAgFgBAAQgGAMgCACQgEACgIAAIABgCIgCgBQAAAAgBAAQgBABAAAAQgBAAAAAAQgBABAAAAIACABIAAABIgCACIgCADIgdAKIgBABIgBAAQAAgCADgCIgOgDQgIgBgFgDQgHgDgIgIQgHgJgDgGIAAgDIgCgDQgCgFgEgVIgCgFIgBgbQABgRACgQQADABADgEIAAABIAAAAIABgCIAAAAQAHAAAAARIAAAKIABADIgBAGIABACIgBAWIABALQACgBACAQQAHALAKAJQANAKAOAAQAFAAALgGIAIgIQAEAAADgEIAEgFIACgCIABgCIADACIgBACIADAAQgDABAAADIABAAIAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAABAAABQAAAAAAABQAAABAAAAQAAAAABABQAAAAAAAAQAJAAgBgIQAAgGgDgDIAAgCIABAAIgBgEIAAAAQAAgFACgKQAAgYgCgCIAAgnQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAIAEAAIABABIABAAQACAAACgDIACgBIABADQADAQAAAaIABAAIAAgEIACAAQgCAFAAAEIAAACQACgEAEAAIAAAIIgBgDQAAAFgCABQACAAgBAGIABAYIgBADIACAJQADATACABQgBAFABAJIACAPIABAAIAAAHIABABIAAALIgCAEIgDADIgFADQgFAAABgHgAAKAlIACAAIABgCIgBAAIgCACgAAbAeIABAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBIgBAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgBABAAABgAAAA0IAFgCIAAAAIgFAEQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape.setTransform(7.4,9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.8,18.1);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgyGAD6IAAnzMBkNAAAIAAHzg");
	this.shape.setTransform(320.8,25);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,641.5,50);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah1IoQgEgMgFgYQgLgrgCgWQgKhjgGgfIAAh+QgDgQgBgeIgDgRIgLALIgMARQgMAQgFAAQgDAAgDgCQgFgBgBgGIgBgIQAAgbAXgZQAHgHACgHIAFgNIAAgBIgJgEIgRgIIgYABQgOAAgKgLQgIgKAAgLQAAgjAcAEQgKgMgEAAQgPAAgKAQQgGANgBALQgCAYgFAGQgEAIgPAAQgQAAgGgLQgDgGAAgOQgFgMgFgZIgHguQAXgpAKgCQAWgDAegPQAdgJAkANQAaAPAjAbQAeAWAKAMIACAAIARgXIAhgnIAXgnQAOgWAKgPIAcgmQATgcAIgLIAfgmIAegmQBHhkAtg1IAegnQATgZAMgNQAEgFAIgRQAHgOANADQAJAEgBAGQgBAGABADQAKAPgBAEQABADgsBDIgUAiQgNAUgNAPIg/BEQgmAqgVAcQgQAUghAyQgeAtgSAXIghAjQgSAWgJANQgLAVgLAPIgLAOIAJAPQAHATABAJIABAXIAAATQgDAPgLABIABADQACAHAFAQIAGAYIAVAvQANAeAEARIAmBqQAaBKABAJIgBAJIABAFIgGAHIgDACIgSASQgfAcgIANQgKAQgdAZQgXAUgIAEQgFADgHAAQgXAAgMgbg");
	this.shape.setTransform(34.7,58);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,69.4,116);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AEFDlQgRgYgPgcQgNgZghgbQgLgKgHgHQgVgNgRgEIhbgTQg9gOgogQQg8gYgggPQgOgFgYgQQgYgQgPgHIgtgWQgYgMgQgLQgPgJghgOIgIgFQgJgBgFgJIgDgMQAAgLAjgeIAmghQATghAZgJQAGgCAFAAIACgCQAMgHAUANIAZARQARAMAPAGQAiAOAnALIBKATQAUAGAxATQAsASAjAHIAVAEIAMgBIBKAAQARAGAPAIQAKgEATAMQAHAGATAKIAdAQQAcARAJATQALAbAAAGQAAAGgEAGQgFAIgLAAQgOAAgFgNIgEgNIgBgCQgDAKgKAPQgVAhgDAHQgEAHgDAMIgGATIgKAZIgDAEIAGAGQAPAPAAAKQAAAFgEAHQgGAIgKAAIgEgBIAFAHQAYAlAAARQAAAFgEAHQgGAIgKAAQgKAAgVgfg");
	this.shape.setTransform(39.4,26);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,78.8,52.1);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAGFTIAAgHQAAgFAFgNQgKAGgDAAIgGgBIgHABIgUAAQgFAMgFAAQgRAAguhMQgrhGgUg2QgngJAAgTQAGgWgDgMQgWACgGgLQgCgEAAgMQAAgPAHgMQAIgMAAgGIgGglQgHgkAAgaQAAgqAGgIQAagZApgrQAGgGARgWQAPgUALgKQAHgHAigUQAigWAIgHQATgRAoAGQAaAFBJAUQASAJAPASQAIAKALATQAIAOAnA1QALAPAAAkQAAApgCASQgEAbgOAjQgEAKgLAxQgJAlgRAUQgQARgHAtQgHArgNAOIgYATIABAIQAAAPgJAIQgWARgJAMQgMAOgrAnQgIAAgCgGg");
	this.shape.setTransform(23.9,34.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,47.8,69);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Al8B1QgJgggHg/QgEgfgRhDQgQhBAAAIIAAgCIgGgFQAAgIAHgGQAGgGAMAAQAHAAAUALQAUAKADAAQAfAAAcgMIAdgOIBQAAQAoAJAaAJQAPADA0AAICGgCICJgbQBxgOANAlQARASARAbIAnAtQAgAmABAGQAAAHgGAHIgDACQgIALghAEQhrAPgaAFQgeAIgiAIQhEAOgrAAQgvAAgRgHIgzAAQhIAAg1ARIg0AQQgHAGgOADQgkAJgQASIgUAcQgTAXgQAAQgaAAgQg9g");
	this.shape.setTransform(44,17.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,88,35.7);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACiMAIgDAAQgLAAgdglIglgyQgKgPgRgiIgNgaIgGAHQgNAAABgMQAAgMBEhZQBJhgAIgTQAfhDAzhKIASgYQADgKAGgIQgPgOgSgaQgYgWgvg7IhliFQghgrgwhJQgzhLgcgjIjOkLQiAilgIgUIgDgGQgDgFAAgFQAAgUAUgBQAUgBAAAXIAAAFQALALARAUQBVBvArAyQAfAwA1BCIBeB4QAdAlAxBMQAyBMAkAtIBgB2IAEgmQAAgngRhCQgShBAAgRQAAgfAbAgQApAyAHAFQAEgHAJgXQAKgTAOAAQAJAAABALQABAFgBAFQABAIgUAxQABAEAQAUIATAWQgDgVABgJQAAgQAXAAQAPAAAJAoIAQBEQAMAlAaAnQAWAhAAACIgDAFIAAACQAAAegWAxIgGAMQAVAYAAAWQAAAOgNAXQgSAegcAAQgJAAgGgDQgGARgEAWIgTBSQgJAegZAwIgqBTQgMAagbBKQgXA9gQAAIgDAAg");
	this.shape.setTransform(43.3,76.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,86.5,153.7);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.cscsf();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42,75);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape.setTransform(72.4,1.3,0.127,0.127,-37.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_1.setTransform(72.5,1.8,0.127,0.127,-37.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_2.setTransform(72.8,3.8,0.127,0.127,-37.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_3.setTransform(72.7,2.2,0.127,0.127,-37.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_4.setTransform(72.7,2.2,0.127,0.127,-37.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7E9D2").s().p("Ag2AWQAYggARgMQAXgRAxACQgXAYgaAmQgHANgiAAIgCAAQghAAAMgQg");
	this.shape_5.setTransform(71.2,2.2,0.127,0.127,-37.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EAE1D3").s().p("AhVAzQA2hiAfgSQAQgLAcgFQAZgDAWAEQgXAWgbAnQgbAlgTArQgKAVgsABIgCAAQgpAAARggg");
	this.shape_6.setTransform(71.3,2.7,0.127,0.127,-37.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#595959").s().p("Ag0AAIAGgVQAEAZAqgEQAngCAOgRIgEARQgGARgsAGIgQABQggAAgDgWg");
	this.shape_7.setTransform(71.6,4.7,0.127,0.127,-37.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A58E6D").s().p("Ah8BmQAIgnAphHQAthQAhgYQAZgRAsgCQAugCAGARQglAXgtBMQgpBFgKAxQgHAXgzAHIgQABQgmAAgDgeg");
	this.shape_8.setTransform(71.5,3.2,0.127,0.127,-37.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#777777").s().p("AiCBnIgBgBIABgBQAHgsAthKQAthOAhgXQAWgQAugDQA0gFAKAXIACAGIgFAEQgjAVgtBLQgpBEgJAwQgKAdg4AGIgPABQgrAAgDgkg");
	this.shape_9.setTransform(71.5,3.2,0.127,0.127,-37.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F7E9D2").s().p("Ag7AWQAZgfATgMQAZgSA2ACQgbAagaAkQgIANglAAIgCAAQgkAAANgQg");
	this.shape_10.setTransform(70,3.2,0.127,0.127,-37.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EAE1D3").s().p("AhcAzQA6hiAigSQARgMAfgEQAbgDAYAEQgZAVgeAoQgcAlgVArQgLAUgwACIgEAAQgrAAATggg");
	this.shape_11.setTransform(70.1,3.7,0.127,0.127,-37.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#595959").s().p("Ag4AAIAGgVQAEAZAugEQArgCAOgSIgEASQgGAQgwAHIgSABQgiAAgDgWg");
	this.shape_12.setTransform(70.3,5.7,0.127,0.127,-37.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A58E6D").s().p("AiGBnQAIgnAshHQAwhSAkgXQAbgRAxgCQAxgCAIAQQgoAXgxBNQgtBFgKAxQgHAXg5AHIgRABQgpAAgDgdg");
	this.shape_13.setTransform(70.2,4.1,0.127,0.127,-37.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#777777").s().p("AiOBoIAAgBIAAgBQAJgtAwhJQAxhPAjgXQAYgQAzgEQA4gEAKAWIAEAGIgGAEQgnAWgwBLQgtBEgJAwQgKAdg+AHIgRABQgvAAgDgkg");
	this.shape_14.setTransform(70.2,4.1,0.127,0.127,-37.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F7E9D2").s().p("Ag+AXQAbggATgMQAbgRA4ABQgcAagbAkQgJANgmABIgDAAQgmAAAOgQg");
	this.shape_15.setTransform(68.6,4.2,0.127,0.127,-37.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EAE1D3").s().p("AhgAzQAXgmAXgcQAegoAUgKQASgMAggEQAdgEAYAEQgaAVgfApQgdAlgWAsQgMAUgyACIgEAAQgtAAAUghg");
	this.shape_16.setTransform(68.7,4.8,0.127,0.127,-37.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#595959").s().p("Ag8AAIAHgVQAEAZAxgEQAtgCAQgSIgFASQgHAQgyAHIgTABQgkAAgEgWg");
	this.shape_17.setTransform(68.9,6.8,0.127,0.127,-37.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A58E6D").s().p("AiNBnQAJgmAuhIQAzhRAmgYQAcgRAzgCQA0gDAIARQgrAXgyBNQguBFgMAxQgJAYg6AHIgTABQgrAAgDgeg");
	this.shape_18.setTransform(68.9,5.2,0.127,0.127,-37.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#777777").s().p("AiWBoIAAgBIABgBQAKgsAxhKQA0hPAmgXQAYgQA1gEQA7gFAMAWIADAGIgHAEQgoAWgyBLQguBEgLAxQgKAdhBAHIgSABQgyAAgEgkg");
	this.shape_19.setTransform(68.9,5.2,0.127,0.127,-37.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_20.setTransform(67.3,5.3,0.127,0.127,-37.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_21.setTransform(67.4,5.8,0.127,0.127,-37.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_22.setTransform(67.7,7.8,0.127,0.127,-37.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_23.setTransform(67.5,6.2,0.127,0.127,-37.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_24.setTransform(67.5,6.2,0.127,0.127,-37.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F7E9D2").s().p("Ag2AWQAYggARgMQAXgRAxACQgXAYgaAmQgHANgiAAIgCAAQghAAAMgQg");
	this.shape_25.setTransform(66,6.2,0.127,0.127,-37.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EAE1D3").s().p("AhVAzQA2hiAfgSQAQgLAcgFQAZgDAWAEQgXAWgbAnQgbAlgTArQgKAVgsABIgCAAQgpAAARggg");
	this.shape_26.setTransform(66.2,6.7,0.127,0.127,-37.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#595959").s().p("Ag0AAIAGgVQAEAZAqgEQAngCAOgRIgEARQgGARgsAGIgQABQggAAgDgWg");
	this.shape_27.setTransform(66.5,8.7,0.127,0.127,-37.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A58E6D").s().p("Ah8BmQAIgnAphHQAthQAhgYQAZgRAsgCQAugCAGARQglAXgtBMQgpBFgKAxQgHAXgzAHIgQABQgmAAgDgeg");
	this.shape_28.setTransform(66.3,7.2,0.127,0.127,-37.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#777777").s().p("AiCBnIgBgBIABgBQAHgsAthKQAthOAhgXQAWgQAugDQA0gFAKAXIACAGIgFAEQgjAVgtBLQgpBEgJAwQgKAdg4AGIgPABQgrAAgDgkg");
	this.shape_29.setTransform(66.3,7.2,0.127,0.127,-37.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F7E9D2").s().p("Ag7AWQAZgfATgMQAZgSA2ACQgbAagaAkQgIANglAAIgCAAQgkAAANgQg");
	this.shape_30.setTransform(64.8,7.2,0.127,0.127,-37.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EAE1D3").s().p("AhcAzQA6hiAigSQARgMAfgEQAbgDAYAEQgZAVgeAoQgcAlgVArQgLAUgwACIgEAAQgrAAATggg");
	this.shape_31.setTransform(64.9,7.7,0.127,0.127,-37.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#595959").s().p("Ag4AAIAGgVQAEAZAugEQArgCAOgSIgEASQgGAQgwAHIgSABQgiAAgDgWg");
	this.shape_32.setTransform(65.2,9.7,0.127,0.127,-37.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A58E6D").s().p("AiGBnQAIgnAshHQAwhSAkgXQAbgRAxgCQAxgCAIAQQgoAXgxBNQgtBFgKAxQgHAXg5AHIgRABQgpAAgDgdg");
	this.shape_33.setTransform(65.1,8.1,0.127,0.127,-37.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#777777").s().p("AiOBoIAAgBIAAgBQAJgtAwhJQAxhPAjgXQAYgQAzgEQA4gEAKAWIAEAGIgGAEQgnAWgwBLQgtBEgJAwQgKAdg+AHIgRABQgvAAgDgkg");
	this.shape_34.setTransform(65.1,8.1,0.127,0.127,-37.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F7E9D2").s().p("Ag+AXQAbggATgMQAbgRA4ABQgcAagbAkQgJANgmABIgDAAQgmAAAOgQg");
	this.shape_35.setTransform(63.5,8.2,0.127,0.127,-37.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EAE1D3").s().p("AhgAzQAXgmAXgcQAegoAUgKQASgMAggEQAdgEAYAEQgaAVgfApQgdAlgWAsQgMAUgyACIgEAAQgtAAAUghg");
	this.shape_36.setTransform(63.6,8.8,0.127,0.127,-37.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#595959").s().p("Ag8AAIAHgVQAEAZAxgEQAtgCAQgSIgFASQgHAQgyAHIgTABQgkAAgEgWg");
	this.shape_37.setTransform(63.8,10.8,0.127,0.127,-37.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A58E6D").s().p("AiNBnQAJgmAuhIQAzhRAmgYQAcgRAzgCQA0gDAIARQgrAXgyBNQguBFgMAxQgJAYg6AHIgTABQgrAAgDgeg");
	this.shape_38.setTransform(63.7,9.2,0.127,0.127,-37.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#777777").s().p("AiWBoIAAgBIABgBQAKgsAxhKQA0hPAmgXQAYgQA1gEQA7gFAMAWIADAGIgHAEQgoAWgyBLQguBEgLAxQgKAdhBAHIgSABQgyAAgEgkg");
	this.shape_39.setTransform(63.7,9.2,0.127,0.127,-37.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_40.setTransform(62.1,9.4,0.127,0.127,-37.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_41.setTransform(62.2,9.9,0.127,0.127,-37.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_42.setTransform(62.5,11.8,0.127,0.127,-37.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_43.setTransform(62.3,10.3,0.127,0.127,-37.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_44.setTransform(62.3,10.3,0.127,0.127,-37.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_45.setTransform(9.5,50.7,0.127,0.127,-7.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAYgDAWAEQgXAVgaAoQgaAkgTArQgKAUgrABIgCAAQgoAAARggg");
	this.shape_46.setTransform(9.4,51.2,0.127,0.127,-7.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAmgBAOgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_47.setTransform(8.7,53.1,0.127,0.127,-7.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A58E6D").s().p("Ah5BkQAHgmAphGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_48.setTransform(9.3,51.7,0.127,0.127,-7.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#777777").s().p("AiABlIgBAAIABgCQAIgrAshJQAshOAggWQAWgQAtgDQAzgFAJAXIADAGIgGADQgiAWgrBKQgpBDgJAwQgJAdg4AGIgNABQgtAAgCglg");
	this.shape_49.setTransform(9.3,51.7,0.127,0.127,-7.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_50.setTransform(8.4,50.4,0.127,0.127,-37.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAYgDAWAEQgXAVgaAoQgaAkgTArQgKAUgrABIgCAAQgoAAARggg");
	this.shape_51.setTransform(8.5,50.9,0.127,0.127,-37.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAmgBAOgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_52.setTransform(8.8,52.9,0.127,0.127,-37.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A58E6D").s().p("Ah5BkQAHgmAphGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_53.setTransform(8.7,51.3,0.127,0.127,-37.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#777777").s().p("AiABlIgBAAIABgCQAIgrAshJQAshOAggWQAWgQAtgDQAzgFAJAXIADAGIgGADQgiAWgrBKQgpBDgJAwQgJAdg4AGIgNABQgtAAgCglg");
	this.shape_54.setTransform(8.7,51.3,0.127,0.127,-37.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_55.setTransform(61,10.2,0.127,0.127,-37.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_56.setTransform(61.1,10.7,0.127,0.127,-37.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_57.setTransform(61.4,12.7,0.127,0.127,-37.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_58.setTransform(61.3,11.1,0.127,0.127,-37.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_59.setTransform(61.3,11.1,0.127,0.127,-37.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F7E9D2").s().p("Ag2AWQAYggARgMQAXgRAxACQgXAYgaAmQgHANgiAAIgCAAQghAAAMgQg");
	this.shape_60.setTransform(59.8,11.1,0.127,0.127,-37.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EAE1D3").s().p("AhVAzQA2hiAfgSQAQgLAcgFQAZgDAWAEQgXAWgbAnQgbAlgTArQgKAVgsABIgCAAQgpAAARggg");
	this.shape_61.setTransform(59.9,11.6,0.127,0.127,-37.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#595959").s().p("Ag0AAIAGgVQAEAZAqgEQAngCAOgRIgEARQgGARgsAGIgQABQggAAgDgWg");
	this.shape_62.setTransform(60.2,13.6,0.127,0.127,-37.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#A58E6D").s().p("Ah8BmQAIgnAphHQAthQAhgYQAZgRAsgCQAugCAGARQglAXgtBMQgpBFgKAxQgHAXgzAHIgQABQgmAAgDgeg");
	this.shape_63.setTransform(60.1,12.1,0.127,0.127,-37.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#777777").s().p("AiCBnIgBgBIABgBQAHgsAthKQAthOAhgXQAWgQAugDQA0gFAKAXIACAGIgFAEQgjAVgtBLQgpBEgJAwQgKAdg4AGIgPABQgrAAgDgkg");
	this.shape_64.setTransform(60.1,12.1,0.127,0.127,-37.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F7E9D2").s().p("Ag7AWQAZgfATgMQAZgSA2ACQgbAagaAkQgIANglAAIgCAAQgkAAANgQg");
	this.shape_65.setTransform(58.6,12.1,0.127,0.127,-37.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EAE1D3").s().p("AhcAzQA6hiAigSQARgMAfgEQAbgDAYAEQgZAVgeAoQgcAlgVArQgLAUgwACIgEAAQgrAAATggg");
	this.shape_66.setTransform(58.7,12.6,0.127,0.127,-37.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#595959").s().p("Ag4AAIAGgVQAEAZAugEQArgCAOgSIgEASQgGAQgwAHIgSABQgiAAgDgWg");
	this.shape_67.setTransform(58.9,14.6,0.127,0.127,-37.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#A58E6D").s().p("AiGBnQAIgnAshHQAwhSAkgXQAbgRAxgCQAxgCAIAQQgoAXgxBNQgtBFgKAxQgHAXg5AHIgRABQgpAAgDgdg");
	this.shape_68.setTransform(58.8,13,0.127,0.127,-37.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#777777").s().p("AiOBoIAAgBIAAgBQAJgtAwhJQAxhPAjgXQAYgQAzgEQA4gEAKAWIAEAGIgGAEQgnAWgwBLQgtBEgJAwQgKAdg+AHIgRABQgvAAgDgkg");
	this.shape_69.setTransform(58.8,13,0.127,0.127,-37.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F7E9D2").s().p("Ag+AXQAbggATgMQAbgRA4ABQgcAagbAkQgJANgmABIgDAAQgmAAAOgQg");
	this.shape_70.setTransform(57.2,13.1,0.127,0.127,-37.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EAE1D3").s().p("AhgAzQAXgmAXgcQAegoAUgKQASgMAggEQAdgEAYAEQgaAVgfApQgdAlgWAsQgMAUgyACIgEAAQgtAAAUghg");
	this.shape_71.setTransform(57.3,13.7,0.127,0.127,-37.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#595959").s().p("Ag8AAIAHgVQAEAZAxgEQAtgCAQgSIgFASQgHAQgyAHIgTABQgkAAgEgWg");
	this.shape_72.setTransform(57.5,15.7,0.127,0.127,-37.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#A58E6D").s().p("AiNBnQAJgmAuhIQAzhRAmgYQAcgRAzgCQA0gDAIARQgrAXgyBNQguBFgMAxQgJAYg6AHIgTABQgrAAgDgeg");
	this.shape_73.setTransform(57.5,14.1,0.127,0.127,-37.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#777777").s().p("AiWBoIAAgBIABgBQAKgsAxhKQA0hPAmgXQAYgQA1gEQA7gFAMAWIADAGIgHAEQgoAWgyBLQguBEgLAxQgKAdhBAHIgSABQgyAAgEgkg");
	this.shape_74.setTransform(57.5,14.1,0.127,0.127,-37.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_75.setTransform(55.9,14.2,0.127,0.127,-37.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_76.setTransform(56,14.7,0.127,0.127,-37.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_77.setTransform(56.3,16.7,0.127,0.127,-37.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_78.setTransform(56.1,15.1,0.127,0.127,-37.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_79.setTransform(56.1,15.1,0.127,0.127,-37.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F7E9D2").s().p("Ag2AWQAYggARgMQAXgRAxACQgXAYgaAmQgHANgiAAIgCAAQghAAAMgQg");
	this.shape_80.setTransform(54.6,15.1,0.127,0.127,-37.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EAE1D3").s().p("AhVAzQA2hiAfgSQAQgLAcgFQAZgDAWAEQgXAWgbAnQgbAlgTArQgKAVgsABIgCAAQgpAAARggg");
	this.shape_81.setTransform(54.8,15.6,0.127,0.127,-37.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#595959").s().p("Ag0AAIAGgVQAEAZAqgEQAngCAOgRIgEARQgGARgsAGIgQABQggAAgDgWg");
	this.shape_82.setTransform(55.1,17.6,0.127,0.127,-37.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#A58E6D").s().p("Ah8BmQAIgnAphHQAthQAhgYQAZgRAsgCQAugCAGARQglAXgtBMQgpBFgKAxQgHAXgzAHIgQABQgmAAgDgeg");
	this.shape_83.setTransform(54.9,16.1,0.127,0.127,-37.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#777777").s().p("AiCBnIgBgBIABgBQAHgsAthKQAthOAhgXQAWgQAugDQA0gFAKAXIACAGIgFAEQgjAVgtBLQgpBEgJAwQgKAdg4AGIgPABQgrAAgDgkg");
	this.shape_84.setTransform(54.9,16.1,0.127,0.127,-37.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F7E9D2").s().p("Ag7AWQAZgfATgMQAZgSA2ACQgbAagaAkQgIANglAAIgCAAQgkAAANgQg");
	this.shape_85.setTransform(53.4,16.1,0.127,0.127,-37.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EAE1D3").s().p("AhcAzQA6hiAigSQARgMAfgEQAbgDAYAEQgZAVgeAoQgcAlgVArQgLAUgwACIgEAAQgrAAATggg");
	this.shape_86.setTransform(53.5,16.6,0.127,0.127,-37.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#595959").s().p("Ag4AAIAGgVQAEAZAugEQArgCAOgSIgEASQgGAQgwAHIgSABQgiAAgDgWg");
	this.shape_87.setTransform(53.8,18.6,0.127,0.127,-37.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#A58E6D").s().p("AiGBnQAIgnAshHQAwhSAkgXQAbgRAxgCQAxgCAIAQQgoAXgxBNQgtBFgKAxQgHAXg5AHIgRABQgpAAgDgdg");
	this.shape_88.setTransform(53.7,17,0.127,0.127,-37.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#777777").s().p("AiOBoIAAgBIAAgBQAJgtAwhJQAxhPAjgXQAYgQAzgEQA4gEAKAWIAEAGIgGAEQgnAWgwBLQgtBEgJAwQgKAdg+AHIgRABQgvAAgDgkg");
	this.shape_89.setTransform(53.7,17,0.127,0.127,-37.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F7E9D2").s().p("Ag+AXQAbggATgMQAbgRA4ABQgcAagbAkQgJANgmABIgDAAQgmAAAOgQg");
	this.shape_90.setTransform(52.1,17.1,0.127,0.127,-37.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#EAE1D3").s().p("AhgAzQAXgmAXgcQAegoAUgKQASgMAggEQAdgEAYAEQgaAVgfApQgdAlgWAsQgMAUgyACIgEAAQgtAAAUghg");
	this.shape_91.setTransform(52.2,17.7,0.127,0.127,-37.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#595959").s().p("Ag8AAIAHgVQAEAZAxgEQAtgCAQgSIgFASQgHAQgyAHIgTABQgkAAgEgWg");
	this.shape_92.setTransform(52.4,19.7,0.127,0.127,-37.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#A58E6D").s().p("AiNBnQAJgmAuhIQAzhRAmgYQAcgRAzgCQA0gDAIARQgrAXgyBNQguBFgMAxQgJAYg6AHIgTABQgrAAgDgeg");
	this.shape_93.setTransform(52.3,18.1,0.127,0.127,-37.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#777777").s().p("AiWBoIAAgBIABgBQAKgsAxhKQA0hPAmgXQAYgQA1gEQA7gFAMAWIADAGIgHAEQgoAWgyBLQguBEgLAxQgKAdhBAHIgSABQgyAAgEgkg");
	this.shape_94.setTransform(52.3,18.1,0.127,0.127,-37.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_95.setTransform(50.7,18.3,0.127,0.127,-37.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_96.setTransform(50.8,18.8,0.127,0.127,-37.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_97.setTransform(51.1,20.7,0.127,0.127,-37.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_98.setTransform(50.9,19.2,0.127,0.127,-37.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_99.setTransform(50.9,19.2,0.127,0.127,-37.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F7E9D2").s().p("Ag2AWQAYggARgMQAXgRAxACQgXAYgaAmQgHANgiAAIgCAAQghAAAMgQg");
	this.shape_100.setTransform(49.4,19.2,0.127,0.127,-37.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EAE1D3").s().p("AhVAzQA2hiAfgSQAQgLAcgFQAZgDAWAEQgXAWgbAnQgbAlgTArQgKAVgsABIgCAAQgpAAARggg");
	this.shape_101.setTransform(49.6,19.7,0.127,0.127,-37.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#595959").s().p("Ag0AAIAGgVQAEAZAqgEQAngCAOgRIgEARQgGARgsAGIgQABQggAAgDgWg");
	this.shape_102.setTransform(49.9,21.7,0.127,0.127,-37.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#A58E6D").s().p("Ah8BmQAIgnAphHQAthQAhgYQAZgRAsgCQAugCAGARQglAXgtBMQgpBFgKAxQgHAXgzAHIgQABQgmAAgDgeg");
	this.shape_103.setTransform(49.7,20.1,0.127,0.127,-37.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#777777").s().p("AiCBnIgBgBIABgBQAHgsAthKQAthOAhgXQAWgQAugDQA0gFAKAXIACAGIgFAEQgjAVgtBLQgpBEgJAwQgKAdg4AGIgPABQgrAAgDgkg");
	this.shape_104.setTransform(49.7,20.1,0.127,0.127,-37.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#F7E9D2").s().p("Ag7AWQAZgfATgMQAZgSA2ACQgbAagaAkQgIANglAAIgCAAQgkAAANgQg");
	this.shape_105.setTransform(48.2,20.1,0.127,0.127,-37.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#EAE1D3").s().p("AhcAzQA6hiAigSQARgMAfgEQAbgDAYAEQgZAVgeAoQgcAlgVArQgLAUgwACIgEAAQgrAAATggg");
	this.shape_106.setTransform(48.3,20.7,0.127,0.127,-37.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#595959").s().p("Ag4AAIAGgVQAEAZAugEQArgCAOgSIgEASQgGAQgwAHIgSABQgiAAgDgWg");
	this.shape_107.setTransform(48.5,22.7,0.127,0.127,-37.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#A58E6D").s().p("AiGBnQAIgnAshHQAwhSAkgXQAbgRAxgCQAxgCAIAQQgoAXgxBNQgtBFgKAxQgHAXg5AHIgRABQgpAAgDgdg");
	this.shape_108.setTransform(48.5,21.1,0.127,0.127,-37.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#777777").s().p("AiOBoIAAgBIAAgBQAJgtAwhJQAxhPAjgXQAYgQAzgEQA4gEAKAWIAEAGIgGAEQgnAWgwBLQgtBEgJAwQgKAdg+AHIgRABQgvAAgDgkg");
	this.shape_109.setTransform(48.5,21.1,0.127,0.127,-37.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#F7E9D2").s().p("Ag+AXQAbggATgMQAbgRA4ABQgcAagbAkQgJANgmABIgDAAQgmAAAOgQg");
	this.shape_110.setTransform(46.9,21.2,0.127,0.127,-37.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#EAE1D3").s().p("AhgAzQAXgmAXgcQAegoAUgKQASgMAggEQAdgEAYAEQgaAVgfApQgdAlgWAsQgMAUgyACIgEAAQgtAAAUghg");
	this.shape_111.setTransform(47,21.7,0.127,0.127,-37.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#595959").s().p("Ag8AAIAHgVQAEAZAxgEQAtgCAQgSIgFASQgHAQgyAHIgTABQgkAAgEgWg");
	this.shape_112.setTransform(47.2,23.8,0.127,0.127,-37.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#A58E6D").s().p("AiNBnQAJgmAuhIQAzhRAmgYQAcgRAzgCQA0gDAIARQgrAXgyBNQguBFgMAxQgJAYg6AHIgTABQgrAAgDgeg");
	this.shape_113.setTransform(47.1,22.2,0.127,0.127,-37.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#777777").s().p("AiWBoIAAgBIABgBQAKgsAxhKQA0hPAmgXQAYgQA1gEQA7gFAMAWIADAGIgHAEQgoAWgyBLQguBEgLAxQgKAdhBAHIgSABQgyAAgEgkg");
	this.shape_114.setTransform(47.1,22.2,0.127,0.127,-37.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_115.setTransform(45.5,22.3,0.127,0.127,-37.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_116.setTransform(45.6,22.8,0.127,0.127,-37.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_117.setTransform(45.9,24.7,0.127,0.127,-37.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_118.setTransform(45.8,23.2,0.127,0.127,-37.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_119.setTransform(45.8,23.2,0.127,0.127,-37.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#EAE1D3").s().p("AhVAzQA2hiAfgSQAQgLAcgFQAZgDAWAEQgXAWgbAnQgbAlgTArQgKAVgsABIgCAAQgpAAARggg");
	this.shape_120.setTransform(44.4,23.7,0.127,0.127,-37.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#595959").s().p("Ag0AAIAGgVQAEAZAqgEQAngCAOgRIgEARQgGARgsAGIgQABQggAAgDgWg");
	this.shape_121.setTransform(44.7,25.7,0.127,0.127,-37.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#A58E6D").s().p("Ah8BmQAIgnAphHQAthQAhgYQAZgRAsgCQAugCAGARQglAXgtBMQgpBFgKAxQgHAXgzAHIgQABQgmAAgDgeg");
	this.shape_122.setTransform(44.6,24.1,0.127,0.127,-37.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#777777").s().p("AiCBnIgBgBIABgBQAHgsAthKQAthOAhgXQAWgQAugDQA0gFAKAXIACAGIgFAEQgjAVgtBLQgpBEgJAwQgKAdg4AGIgPABQgrAAgDgkg");
	this.shape_123.setTransform(44.6,24.1,0.127,0.127,-37.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_124.setTransform(43.1,24.2,0.127,0.127,-37.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_125.setTransform(43.2,24.7,0.127,0.127,-37.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_126.setTransform(43.5,26.7,0.127,0.127,-37.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_127.setTransform(43.4,25.1,0.127,0.127,-37.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_128.setTransform(43.4,25.1,0.127,0.127,-37.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#F7E9D2").s().p("Ag2AWQAYggARgMQAXgRAxACQgXAYgaAmQgHANgiAAIgCAAQghAAAMgQg");
	this.shape_129.setTransform(41.9,25.1,0.127,0.127,-37.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#EAE1D3").s().p("AhVAzQA2hiAfgSQAQgLAcgFQAZgDAWAEQgXAWgbAnQgbAlgTArQgKAVgsABIgCAAQgpAAARggg");
	this.shape_130.setTransform(42,25.6,0.127,0.127,-37.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#595959").s().p("Ag0AAIAGgVQAEAZAqgEQAngCAOgRIgEARQgGARgsAGIgQABQggAAgDgWg");
	this.shape_131.setTransform(42.3,27.6,0.127,0.127,-37.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#A58E6D").s().p("Ah8BmQAIgnAphHQAthQAhgYQAZgRAsgCQAugCAGARQglAXgtBMQgpBFgKAxQgHAXgzAHIgQABQgmAAgDgeg");
	this.shape_132.setTransform(42.2,26.1,0.127,0.127,-37.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#777777").s().p("AiCBnIgBgBIABgBQAHgsAthKQAthOAhgXQAWgQAugDQA0gFAKAXIACAGIgFAEQgjAVgtBLQgpBEgJAwQgKAdg4AGIgPABQgrAAgDgkg");
	this.shape_133.setTransform(42.2,26.1,0.127,0.127,-37.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#F7E9D2").s().p("Ag7AWQAZgfATgMQAZgSA2ACQgbAagaAkQgIANglAAIgCAAQgkAAANgQg");
	this.shape_134.setTransform(40.7,26.1,0.127,0.127,-37.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#EAE1D3").s().p("AhcAzQA6hiAigSQARgMAfgEQAbgDAYAEQgZAVgeAoQgcAlgVArQgLAUgwACIgEAAQgrAAATggg");
	this.shape_135.setTransform(40.8,26.6,0.127,0.127,-37.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#595959").s().p("Ag4AAIAGgVQAEAZAugEQArgCAOgSIgEASQgGAQgwAHIgSABQgiAAgDgWg");
	this.shape_136.setTransform(41,28.6,0.127,0.127,-37.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#A58E6D").s().p("AiGBnQAIgnAshHQAwhSAkgXQAbgRAxgCQAxgCAIAQQgoAXgxBNQgtBFgKAxQgHAXg5AHIgRABQgpAAgDgdg");
	this.shape_137.setTransform(40.9,27,0.127,0.127,-37.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#777777").s().p("AiOBoIAAgBIAAgBQAJgtAwhJQAxhPAjgXQAYgQAzgEQA4gEAKAWIAEAGIgGAEQgnAWgwBLQgtBEgJAwQgKAdg+AHIgRABQgvAAgDgkg");
	this.shape_138.setTransform(40.9,27,0.127,0.127,-37.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#F7E9D2").s().p("Ag+AXQAbggATgMQAbgRA4ABQgcAagbAkQgJANgmABIgDAAQgmAAAOgQg");
	this.shape_139.setTransform(39.3,27.1,0.127,0.127,-37.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#EAE1D3").s().p("AhgAzQAXgmAXgcQAegoAUgKQASgMAggEQAdgEAYAEQgaAVgfApQgdAlgWAsQgMAUgyACIgEAAQgtAAAUghg");
	this.shape_140.setTransform(39.4,27.7,0.127,0.127,-37.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#595959").s().p("Ag8AAIAHgVQAEAZAxgEQAtgCAQgSIgFASQgHAQgyAHIgTABQgkAAgEgWg");
	this.shape_141.setTransform(39.6,29.7,0.127,0.127,-37.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#A58E6D").s().p("AiNBnQAJgmAuhIQAzhRAmgYQAcgRAzgCQA0gDAIARQgrAXgyBNQguBFgMAxQgJAYg6AHIgTABQgrAAgDgeg");
	this.shape_142.setTransform(39.6,28.1,0.127,0.127,-37.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#777777").s().p("AiWBoIAAgBIABgBQAKgsAxhKQA0hPAmgXQAYgQA1gEQA7gFAMAWIADAGIgHAEQgoAWgyBLQguBEgLAxQgKAdhBAHIgSABQgyAAgEgkg");
	this.shape_143.setTransform(39.6,28.1,0.127,0.127,-37.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_144.setTransform(38,28.2,0.127,0.127,-37.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_145.setTransform(38.1,28.7,0.127,0.127,-37.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_146.setTransform(38.4,30.7,0.127,0.127,-37.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_147.setTransform(38.2,29.1,0.127,0.127,-37.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_148.setTransform(38.2,29.1,0.127,0.127,-37.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#F7E9D2").s().p("Ag2AWQAYggARgMQAXgRAxACQgXAYgaAmQgHANgiAAIgCAAQghAAAMgQg");
	this.shape_149.setTransform(36.7,29.1,0.127,0.127,-37.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#EAE1D3").s().p("AhVAzQA2hiAfgSQAQgLAcgFQAZgDAWAEQgXAWgbAnQgbAlgTArQgKAVgsABIgCAAQgpAAARggg");
	this.shape_150.setTransform(36.9,29.6,0.127,0.127,-37.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#595959").s().p("Ag0AAIAGgVQAEAZAqgEQAngCAOgRIgEARQgGARgsAGIgQABQggAAgDgWg");
	this.shape_151.setTransform(37.2,31.6,0.127,0.127,-37.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#A58E6D").s().p("Ah8BmQAIgnAphHQAthQAhgYQAZgRAsgCQAugCAGARQglAXgtBMQgpBFgKAxQgHAXgzAHIgQABQgmAAgDgeg");
	this.shape_152.setTransform(37,30.1,0.127,0.127,-37.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#777777").s().p("AiCBnIgBgBIABgBQAHgsAthKQAthOAhgXQAWgQAugDQA0gFAKAXIACAGIgFAEQgjAVgtBLQgpBEgJAwQgKAdg4AGIgPABQgrAAgDgkg");
	this.shape_153.setTransform(37,30.1,0.127,0.127,-37.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#F7E9D2").s().p("Ag7AWQAZgfATgMQAZgSA2ACQgbAagaAkQgIANglAAIgCAAQgkAAANgQg");
	this.shape_154.setTransform(35.5,30.1,0.127,0.127,-37.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#EAE1D3").s().p("AhcAzQA6hiAigSQARgMAfgEQAbgDAYAEQgZAVgeAoQgcAlgVArQgLAUgwACIgEAAQgrAAATggg");
	this.shape_155.setTransform(35.6,30.6,0.127,0.127,-37.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#595959").s().p("Ag4AAIAGgVQAEAZAugEQArgCAOgSIgEASQgGAQgwAHIgSABQgiAAgDgWg");
	this.shape_156.setTransform(35.9,32.6,0.127,0.127,-37.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#A58E6D").s().p("AiGBnQAIgnAshHQAwhSAkgXQAbgRAxgCQAxgCAIAQQgoAXgxBNQgtBFgKAxQgHAXg5AHIgRABQgpAAgDgdg");
	this.shape_157.setTransform(35.8,31,0.127,0.127,-37.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#777777").s().p("AiOBoIAAgBIAAgBQAJgtAwhJQAxhPAjgXQAYgQAzgEQA4gEAKAWIAEAGIgGAEQgnAWgwBLQgtBEgJAwQgKAdg+AHIgRABQgvAAgDgkg");
	this.shape_158.setTransform(35.8,31,0.127,0.127,-37.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#F7E9D2").s().p("Ag+AXQAbggATgMQAbgRA4ABQgcAagbAkQgJANgmABIgDAAQgmAAAOgQg");
	this.shape_159.setTransform(34.2,31.1,0.127,0.127,-37.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#EAE1D3").s().p("AhgAzQAXgmAXgcQAegoAUgKQASgMAggEQAdgEAYAEQgaAVgfApQgdAlgWAsQgMAUgyACIgEAAQgtAAAUghg");
	this.shape_160.setTransform(34.3,31.7,0.127,0.127,-37.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#595959").s().p("Ag8AAIAHgVQAEAZAxgEQAtgCAQgSIgFASQgHAQgyAHIgTABQgkAAgEgWg");
	this.shape_161.setTransform(34.5,33.7,0.127,0.127,-37.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#A58E6D").s().p("AiNBnQAJgmAuhIQAzhRAmgYQAcgRAzgCQA0gDAIARQgrAXgyBNQguBFgMAxQgJAYg6AHIgTABQgrAAgDgeg");
	this.shape_162.setTransform(34.4,32.1,0.127,0.127,-37.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#777777").s().p("AiWBoIAAgBIABgBQAKgsAxhKQA0hPAmgXQAYgQA1gEQA7gFAMAWIADAGIgHAEQgoAWgyBLQguBEgLAxQgKAdhBAHIgSABQgyAAgEgkg");
	this.shape_163.setTransform(34.4,32.1,0.127,0.127,-37.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_164.setTransform(32.8,32.3,0.127,0.127,-37.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_165.setTransform(32.9,32.8,0.127,0.127,-37.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_166.setTransform(33.2,34.7,0.127,0.127,-37.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_167.setTransform(33,33.2,0.127,0.127,-37.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_168.setTransform(33,33.2,0.127,0.127,-37.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#F7E9D2").s().p("Ag2AWQAYggARgMQAXgRAxACQgXAYgaAmQgHANgiAAIgCAAQghAAAMgQg");
	this.shape_169.setTransform(31.5,33.2,0.127,0.127,-37.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#EAE1D3").s().p("AhVAzQA2hiAfgSQAQgLAcgFQAZgDAWAEQgXAWgbAnQgbAlgTArQgKAVgsABIgCAAQgpAAARggg");
	this.shape_170.setTransform(31.7,33.7,0.127,0.127,-37.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#595959").s().p("Ag0AAIAGgVQAEAZAqgEQAngCAOgRIgEARQgGARgsAGIgQABQggAAgDgWg");
	this.shape_171.setTransform(32,35.7,0.127,0.127,-37.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#A58E6D").s().p("Ah8BmQAIgnAphHQAthQAhgYQAZgRAsgCQAugCAGARQglAXgtBMQgpBFgKAxQgHAXgzAHIgQABQgmAAgDgeg");
	this.shape_172.setTransform(31.8,34.1,0.127,0.127,-37.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#777777").s().p("AiCBnIgBgBIABgBQAHgsAthKQAthOAhgXQAWgQAugDQA0gFAKAXIACAGIgFAEQgjAVgtBLQgpBEgJAwQgKAdg4AGIgPABQgrAAgDgkg");
	this.shape_173.setTransform(31.8,34.1,0.127,0.127,-37.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#F7E9D2").s().p("Ag7AWQAZgfATgMQAZgSA2ACQgbAagaAkQgIANglAAIgCAAQgkAAANgQg");
	this.shape_174.setTransform(30.3,34.1,0.127,0.127,-37.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#EAE1D3").s().p("AhcAzQA6hiAigSQARgMAfgEQAbgDAYAEQgZAVgeAoQgcAlgVArQgLAUgwACIgEAAQgrAAATggg");
	this.shape_175.setTransform(30.4,34.7,0.127,0.127,-37.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#595959").s().p("Ag4AAIAGgVQAEAZAugEQArgCAOgSIgEASQgGAQgwAHIgSABQgiAAgDgWg");
	this.shape_176.setTransform(30.6,36.7,0.127,0.127,-37.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#A58E6D").s().p("AiGBnQAIgnAshHQAwhSAkgXQAbgRAxgCQAxgCAIAQQgoAXgxBNQgtBFgKAxQgHAXg5AHIgRABQgpAAgDgdg");
	this.shape_177.setTransform(30.6,35.1,0.127,0.127,-37.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#777777").s().p("AiOBoIAAgBIAAgBQAJgtAwhJQAxhPAjgXQAYgQAzgEQA4gEAKAWIAEAGIgGAEQgnAWgwBLQgtBEgJAwQgKAdg+AHIgRABQgvAAgDgkg");
	this.shape_178.setTransform(30.6,35.1,0.127,0.127,-37.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#F7E9D2").s().p("Ag+AXQAbggATgMQAbgRA4ABQgcAagbAkQgJANgmABIgDAAQgmAAAOgQg");
	this.shape_179.setTransform(29,35.2,0.127,0.127,-37.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#EAE1D3").s().p("AhgAzQAXgmAXgcQAegoAUgKQASgMAggEQAdgEAYAEQgaAVgfApQgdAlgWAsQgMAUgyACIgEAAQgtAAAUghg");
	this.shape_180.setTransform(29.1,35.7,0.127,0.127,-37.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#595959").s().p("Ag8AAIAHgVQAEAZAxgEQAtgCAQgSIgFASQgHAQgyAHIgTABQgkAAgEgWg");
	this.shape_181.setTransform(29.3,37.8,0.127,0.127,-37.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#A58E6D").s().p("AiNBnQAJgmAuhIQAzhRAmgYQAcgRAzgCQA0gDAIARQgrAXgyBNQguBFgMAxQgJAYg6AHIgTABQgrAAgDgeg");
	this.shape_182.setTransform(29.2,36.2,0.127,0.127,-37.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#777777").s().p("AiWBoIAAgBIABgBQAKgsAxhKQA0hPAmgXQAYgQA1gEQA7gFAMAWIADAGIgHAEQgoAWgyBLQguBEgLAxQgKAdhBAHIgSABQgyAAgEgkg");
	this.shape_183.setTransform(29.2,36.2,0.127,0.127,-37.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#595959").s().p("Ag+ABIAGgSQAEAaAzgGQAwgFAQgWIgDASQgJAVg1AIQgNACgKAAQgjAAgCgYg");
	this.shape_184.setTransform(8.1,54,0.127,0.127,-37.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_185.setTransform(0.8,56.8,0.127,0.127,-37.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAYgDAWAEQgXAVgaAoQgaAkgTArQgKAUgrABIgCAAQgoAAARggg");
	this.shape_186.setTransform(0.9,57.3,0.127,0.127,-37.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAmgBAOgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_187.setTransform(1.2,59.3,0.127,0.127,-37.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#A58E6D").s().p("Ah5BkQAHgmAphGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_188.setTransform(1,57.8,0.127,0.127,-37.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#777777").s().p("AiABlIgBAAIABgCQAIgrAshJQAshOAggWQAWgQAtgDQAzgFAJAXIADAGIgGADQgiAWgrBKQgpBDgJAwQgJAdg4AGIgNABQgtAAgCglg");
	this.shape_189.setTransform(1,57.8,0.127,0.127,-37.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#F7E9D2").s().p("AggAlQgjAAAMgQQAZgfARgMQAZgRAvADQgaAbgYAiQgHAMgfAAIgDAAg");
	this.shape_190.setTransform(2.1,55.9,0.127,0.127,-37.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#EAE1D3").s().p("AhVAxQA4hgAegSQARgMAcgDQAZgDAVAFQgXAUgcAoQgbAkgVArQgKAUgsABIgCAAQgpAAATghg");
	this.shape_191.setTransform(2.2,56.4,0.127,0.127,-37.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#595959").s().p("Ag0gBIAHgUQADAZAqgEQAmgBAOgRIgEARQgGAQgsAGIgPABQggAAgDgXg");
	this.shape_192.setTransform(2.4,58.4,0.127,0.127,-37.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#A58E6D").s().p("Ah9BkQAIgnArhGQAuhQAigXQAZgRAsgBQAtgBAGAQQglAXgvBMQgqBFgMAwQgIAXgzAGIgNABQgoAAgBgfg");
	this.shape_193.setTransform(2.3,56.9,0.127,0.127,-37.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#777777").s().p("AiFBlIAAgCQAKgtAuhIQAvhOAggWQAYgQAtgDQAzgDAJAWIADAGIgGAEQgjAVguBKQgrBDgLAwQgJAeg5AFIgMABQguAAgCglg");
	this.shape_194.setTransform(2.3,56.8,0.127,0.127,-37.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#F7E9D2").s().p("Ag8AXQAbggATgLQANgKAZgEIAogFQgGALgSAVQgSAUgJANQgHANgnAAIgDABQglAAANgRg");
	this.shape_195.setTransform(6.3,52.6,0.127,0.127,-37.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#F7E9D2").s().p("Ag+AWQAcgfATgMQAagRA3ABQgZAXgdAoQgJANgmAAQgpAAAOgRg");
	this.shape_196.setTransform(4.9,53.7,0.127,0.127,-37.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#EAE1D3").s().p("AhcA0QA/hiAegSQARgLAigFIAvgEIgxBCQgjAugPAjQgMAUgyACIgEAAQguAAAUghg");
	this.shape_197.setTransform(6.4,53.2,0.127,0.127,-37.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#EAE1D3").s().p("AhgAyQAXglAYgcQAfgnASgKQATgMAggEQAcgEAYAEQgZAVgfApQgdAkgXAsQgLAVgzAAIgBAAQgxAAAVghg");
	this.shape_198.setTransform(5,54.3,0.127,0.127,-37.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#595959").s().p("Ag8AAIAHgVQAEAZAxgEQAugDAPgRIgEARQgHARgzAGIgUACQgkAAgDgWg");
	this.shape_199.setTransform(6.6,55.2,0.127,0.127,-37.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#595959").s().p("Ag8AAIAHgVQAEAZAxgDQAtgBAQgSIgFASQgHAQgzAFIgQABQgnAAgDgWg");
	this.shape_200.setTransform(5.2,56.3,0.127,0.127,-37.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#A58E6D").s().p("AiHBoQAKgmAuhIQA0hRAkgYQAhgPArgFQAtgGAGAMQglAqgrBEQgyBMgHApQgIAYg8AHIgTABQgsAAgDgeg");
	this.shape_201.setTransform(6.5,53.6,0.127,0.127,-37.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#A58E6D").s().p("AiNBlQAJgmAvhGQA0hQAmgYQAcgRAygCQAzgDAIARQgoAXg0BNQgvBFgMAxQgJAYg7AFIgPABQguAAgDgfg");
	this.shape_202.setTransform(5.1,54.7,0.127,0.127,-37.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#777777").s().p("AiPBqIAAgBIABgBQAKgsAzhKQA0hPAigXQAkgPAogHQAzgIAJASIACAFIgEAFQgiAmgrBEQgxBMgJApQgIAdhDAGIgSABQgyAAgEgjg");
	this.shape_203.setTransform(6.5,53.6,0.127,0.127,-37.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#777777").s().p("AiWBmIAAgCQALgsAzhJQA0hNAlgXQAagQA0gEQA6gFAKAWIAEAGIgHAEQgnAWgxBLQgvBFgMAwQgKAehCAFIgOAAQg1AAgEglg");
	this.shape_204.setTransform(5.1,54.7,0.127,0.127,-37.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#F7E9D2").s().p("AgkAlQgoAAAOgQQAcggATgLQAcgRA2ADQgcAagcAjQgIAMgkAAIgDAAg");
	this.shape_205.setTransform(3.5,54.8,0.127,0.127,-37.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#EAE1D3").s().p("AhhAxQA+hgAjgSQATgLAggEQAdgDAYAFQgaAVgfAnQgeAlgXArQgLAUgzAAIgCAAQgwAAAVghg");
	this.shape_206.setTransform(3.5,55.4,0.127,0.127,-37.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#595959").s().p("Ag8AAIAHgVQADAZAygDQAtgBAQgSIgFASQgHAQgzAFIgQABQgnAAgDgWg");
	this.shape_207.setTransform(3.7,57.4,0.127,0.127,-37.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#A58E6D").s().p("AiPBkQAJgmAwhHQA0hQAngXQAcgQAzgBQA0gCAHARQgqAXg0BMQgwBEgMAwQgIAXg7AGIgQAAQguAAgDgeg");
	this.shape_208.setTransform(3.7,55.8,0.127,0.127,-37.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#777777").s().p("AiXBlIAAgBIABgBQAJgsA0hJQA1hOAkgWQAagPA1gDQA7gEALAWIADAGIgGAEQgpAWgyBKQgxBDgKAwQgMAdhBAFIgNABQg2AAgDglg");
	this.shape_209.setTransform(3.7,55.8,0.127,0.127,-37.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#F7E9D2").s().p("AgxAhQAYgnAMgLQAKgLAUgHIAkgLIgRAkIgRAjQgGAOgkAGIgQACQgTAAAJgOg");
	this.shape_210.setTransform(7.5,51.5,0.127,0.127,-37.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#EAE1D3").s().p("AhPBBQAGgIAlg9QAbguALgLQANgMAbgJIAsgOQg4B3gRArQgKAXgzAHIgOABQgjAAASggg");
	this.shape_211.setTransform(7.6,52,0.127,0.127,-37.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#A58E6D").s().p("Ah4B1QAFgfAxhRQAshJAfgnQAWgRAmgNQAogOAMAJQgZArggBQQgiBOgMAwQgLAcg8AKQgNACgLAAQgpAAgCgeg");
	this.shape_212.setTransform(7.7,52.5,0.127,0.127,-37.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#777777").s().p("AiAB2IAAgCQAHgmAzhRQAng+AjgvQAYgSAkgNQAtgRAQANIAEAFIgEAFQgXAoggBPQggBNgNAwQgMAjhEAKQgNACgLAAQgvAAgCgkg");
	this.shape_213.setTransform(7.7,52.5,0.127,0.127,-37.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_214.setTransform(27.6,36.3,0.127,0.127,-37.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_215.setTransform(27.7,36.8,0.127,0.127,-37.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_216.setTransform(28,38.7,0.127,0.127,-37.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_217.setTransform(27.9,37.2,0.127,0.127,-37.5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_218.setTransform(27.9,37.2,0.127,0.127,-37.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#F7E9D2").s().p("Ag2AWQAYggARgMQAXgRAxACQgXAYgaAmQgHANgiAAIgCAAQghAAAMgQg");
	this.shape_219.setTransform(26.4,37.2,0.127,0.127,-37.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#EAE1D3").s().p("AhVAzQA2hiAfgSQAQgLAcgFQAZgDAWAEQgXAWgbAnQgbAlgTArQgKAVgsABIgCAAQgpAAARggg");
	this.shape_220.setTransform(26.5,37.7,0.127,0.127,-37.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#595959").s().p("Ag0AAIAGgVQAEAZAqgEQAngCAOgRIgEARQgGARgsAGIgQABQggAAgDgWg");
	this.shape_221.setTransform(26.8,39.7,0.127,0.127,-37.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#A58E6D").s().p("Ah8BmQAIgnAphHQAthQAhgYQAZgRAsgCQAugCAGARQglAXgtBMQgpBFgKAxQgHAXgzAHIgQABQgmAAgDgeg");
	this.shape_222.setTransform(26.7,38.1,0.127,0.127,-37.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#777777").s().p("AiCBnIgBgBIABgBQAHgsAthKQAthOAhgXQAWgQAugDQA0gFAKAXIACAGIgFAEQgjAVgtBLQgpBEgJAwQgKAdg4AGIgPABQgrAAgDgkg");
	this.shape_223.setTransform(26.7,38.1,0.127,0.127,-37.5);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#F7E9D2").s().p("Ag7AWQAZgfATgMQAZgSA2ACQgbAagaAkQgIANglAAIgCAAQgkAAANgQg");
	this.shape_224.setTransform(25.2,38.1,0.127,0.127,-37.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#EAE1D3").s().p("AhcAzQA6hiAigSQARgMAfgEQAbgDAYAEQgZAVgeAoQgcAlgVArQgLAUgwACIgEAAQgrAAATggg");
	this.shape_225.setTransform(25.3,38.7,0.127,0.127,-37.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#595959").s().p("Ag4AAIAGgVQAEAZAugEQArgCAOgSIgEASQgGAQgwAHIgSABQgiAAgDgWg");
	this.shape_226.setTransform(25.5,40.7,0.127,0.127,-37.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#A58E6D").s().p("AiGBnQAIgnAshHQAwhSAkgXQAbgRAxgCQAxgCAIAQQgoAXgxBNQgtBFgKAxQgHAXg5AHIgRABQgpAAgDgdg");
	this.shape_227.setTransform(25.4,39.1,0.127,0.127,-37.5);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#777777").s().p("AiOBoIAAgBIAAgBQAJgtAwhJQAxhPAjgXQAYgQAzgEQA4gEAKAWIAEAGIgGAEQgnAWgwBLQgtBEgJAwQgKAdg+AHIgRABQgvAAgDgkg");
	this.shape_228.setTransform(25.4,39.1,0.127,0.127,-37.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#F7E9D2").s().p("Ag+AXQAbggATgMQAbgRA4ABQgcAagbAkQgJANgmABIgDAAQgmAAAOgQg");
	this.shape_229.setTransform(23.8,39.2,0.127,0.127,-37.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#EAE1D3").s().p("AhgAzQAXgmAXgcQAegoAUgKQASgMAggEQAdgEAYAEQgaAVgfApQgdAlgWAsQgMAUgyACIgEAAQgtAAAUghg");
	this.shape_230.setTransform(23.9,39.7,0.127,0.127,-37.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#595959").s().p("Ag8AAIAHgVQAEAZAxgEQAtgCAQgSIgFASQgHAQgyAHIgTABQgkAAgEgWg");
	this.shape_231.setTransform(24.1,41.8,0.127,0.127,-37.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#A58E6D").s().p("AiNBnQAJgmAuhIQAzhRAmgYQAcgRAzgCQA0gDAIARQgrAXgyBNQguBFgMAxQgJAYg6AHIgTABQgrAAgDgeg");
	this.shape_232.setTransform(24.1,40.2,0.127,0.127,-37.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#777777").s().p("AiWBoIAAgBIABgBQAKgsAxhKQA0hPAmgXQAYgQA1gEQA7gFAMAWIADAGIgHAEQgoAWgyBLQguBEgLAxQgKAdhBAHIgSABQgyAAgEgkg");
	this.shape_233.setTransform(24.1,40.2,0.127,0.127,-37.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#F7E9D2").s().p("Ag+AWQAageAUgNQAbgRA4ABQgcAagbAkQgJANgmAAIgDAAQgmAAAOgQg");
	this.shape_234.setTransform(22.4,40.3,0.127,0.127,-37.5);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#EAE1D3").s().p("AhgAyQA/hhAhgRQASgMAggEQAdgEAZAEQgbAVgeApQgeAkgWAsQgLAUgzABIgDAAQgvAAAVghg");
	this.shape_235.setTransform(22.5,40.8,0.127,0.127,-37.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#595959").s().p("Ag8gBIAHgUQAEAZAxgEQAugBAPgRIgEARQgHAQgzAGIgRABQgnAAgDgXg");
	this.shape_236.setTransform(22.7,42.9,0.127,0.127,-37.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#A58E6D").s().p("AiOBmQAJgnAwhGQA0hQAkgYQAdgRAzgCQAzgDAJAQQgqAYgzBNQgvBFgLAxQgJAYg8AFIgRABQgtAAgDgeg");
	this.shape_237.setTransform(22.6,41.3,0.127,0.127,-37.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#777777").s().p("AiWBnIAAgCIAAgBQALgsAzhJQA0hNAkgXQAagQA1gEQA7gFAKAWIAEAGIgHADQgoAXgxBLQgvBFgLAwQgLAdhCAGIgPAAQg1AAgDgkg");
	this.shape_238.setTransform(22.6,41.3,0.127,0.127,-37.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#F7E9D2").s().p("AAsBCQgkgNgTgVQgQgRgLgYQgMgcgDgdQAdAkAqAPQAOAFAPAqQANAjgLAAIgFgBg");
	this.shape_239.setTransform(8.6,53,0.127,0.127,-37.5);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#F7E9D2").s().p("AA5A0QgqgFgVgOQgcgSgfhCQAmAVApAJQANAFAZAhQAYAjgRAAIgCAAg");
	this.shape_240.setTransform(10.5,54.1,0.127,0.127,-37.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#F7E9D2").s().p("AACAfQgUgJgWgSQgYgSgMgVQAhAMAzgFQAPABAgAbQAiAcgTACQgXAGgRAAQgQAAgMgFg");
	this.shape_241.setTransform(12.6,54.7,0.127,0.127,-37.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#F7E9D2").s().p("AgjATQgagLgUgQQAygCAggRQAOgHAoASQAnAQgSAJQgeASgiACIgGABQgSAAgXgLg");
	this.shape_242.setTransform(14.7,54.6,0.127,0.127,-37.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#F7E9D2").s().p("AgcAfQgPgDgjgKQAogPAigcQAKgKAqAFQAqAEgPAPQgeAcgaAJQgMAGgQAAIgTgBg");
	this.shape_243.setTransform(16.6,54,0.127,0.127,-37.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#EAE1D3").s().p("ABSBaQgkgBgpgOQgtgPgQgVQgTgSgOgkQgOgmAAgkQAWAkAwAYQAmAVAxAIQAUAGAVAqQAWAqggAAIgDAAg");
	this.shape_244.setTransform(9,52.7,0.127,0.127,-37.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#EAE1D3").s().p("AAWBAQgrgFgZgQQgWgNgVghQgSgegKgfQAiAXAuAMQAuAMAsgFQAWACAdAhQAeAlghAIQgZAHgdAAIgZgBg");
	this.shape_245.setTransform(10.9,53.7,0.127,0.127,-37.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#EAE1D3").s().p("AgfAsQgZgJgdgaQgegZgLgbQAgAQA0gCQAwgBAqgRQAVgHAlAaQAmAZgeARQgfATgqAKQgaAGgRAAQgRAAgMgFg");
	this.shape_246.setTransform(12.9,54.4,0.127,0.127,-37.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#EAE1D3").s().p("AgKA8QgbACgkgSQgggQgWgXQAmAFAwgQQAtgRAjgfQAUgKApAKQArAMgYAbQgaAbgkAYQgmAYgXAAIgGAAg");
	this.shape_247.setTransform(14.8,54.2,0.127,0.127,-37.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#EAE1D3").s().p("Ah1A1QAogMAmgdQAngdAagoQAPgQAsgBQAuAAgSAgQgRAjgfAfQgiAkgaAIQgMAHgUAAQgkAAg2gWg");
	this.shape_248.setTransform(16.6,53.5,0.127,0.127,-37.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#595959").s().p("AAEgDQgTgigUgKIAPgCQASAAAXAmQAaAlgTASIgUAGQATgRgXgkg");
	this.shape_249.setTransform(10.8,52,0.127,0.127,-37.5);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#595959").s().p("AAEgFQgXgYgWgGIAPgHQARgCAcAaQAhAagOAYIgRALQANgVgegbg");
	this.shape_250.setTransform(12.3,52.5,0.127,0.127,-37.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#595959").s().p("AAEgGQgdgQgWAEIANgMQAQgJAhAQQAmARgGAYIgNAQQAGgYgkgQg");
	this.shape_251.setTransform(13.8,52.6,0.127,0.127,-37.5);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#595959").s().p("AADgEQgigGgTAKIAJgOQAMgOAmAEQApAFABAZIgIAUQgBgZgngFg");
	this.shape_252.setTransform(15.3,52.2,0.127,0.127,-37.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#595959").s().p("AABABQggAEgUAPIAGgRQAJgOAmgHQArgIAHAaIgEAVQgGgYgpAEg");
	this.shape_253.setTransform(16.6,51.4,0.127,0.127,-37.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#A58E6D").s().p("AAdByQhYgKglgqQgcgTgShHQgThKASgPQAaBBBVAhQBGAZAygIQAXABAaAoQAcArgWAVQgWAPgsAAQgWAAgagEg");
	this.shape_254.setTransform(9.3,52.3,0.127,0.127,-37.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#A58E6D").s().p("AhRBBQgggTgeg6Qgeg7ANgQQAnAsBXAMQBQALApgZQAWgDAhAeQAjAegRAcQgYAdhSAOQgcAFgYAAQgzAAgggXg");
	this.shape_255.setTransform(11.1,53.4,0.127,0.127,-37.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#A58E6D").s().p("Ag2BOQglgJgsg0QgsgxAKgUQAwAkBYgOQBPgMAggkQAVgLAmARQAqATgIAfQgQAkhKAnQg5AegqAAQgTAAgRgFg");
	this.shape_256.setTransform(13,54,0.127,0.127,-37.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#A58E6D").s().p("AhyBHQg5gkADgWQA5AUBRgnQBIgmAWgtQAPgRAsAFQAuAFAAAhQgHApg8A6QhEBDg2AAIgIAAQgjAAgzggg");
	this.shape_257.setTransform(14.7,53.8,0.127,0.127,-37.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#A58E6D").s().p("AhYBzQg+gQgDgXQA7ACBChBQA7g4ALgzQAMgVAsgHQAwgHAHAiQACAmgtBKQgzBUg0APQgPAIgXAAQgZAAgggJg");
	this.shape_258.setTransform(16.3,53.1,0.127,0.127,-37.5);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#777777").s().p("AAXB9QhXgNgkgoQgZgOgWhNQgYhTAZgVIAFgEIAEAJQAXA9BTAhQBFAbAygJQAbADAdAqQAeAvgbAZIgCABQgYAQgvAAQgXAAgcgDg");
	this.shape_259.setTransform(9.2,52.3,0.127,0.127,-37.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#777777").s().p("AhSBLQgegQgig9QglhDASgWIAEgGIAFAGQAlAqBVANQBOAMApgYQAcgEAjAgQAlAggUAiIAAABIgBAAQgcAihWANQgaAEgWAAQg1AAgfgXg");
	this.shape_260.setTransform(11.1,53.4,0.127,0.127,-37.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#777777").s().p("Ag1BVQghgHgyg2Qg0g3AMgbIADgHIAHAFQAtAiBWgMQBPgMAggiQAZgOApATQAsAUgIAmIAAABIgBABQgTAphOAoQg5AdgpAAQgTAAgQgGg");
	this.shape_261.setTransform(13,54,0.127,0.127,-37.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#777777").s().p("AhxBPQhDgnAFgeIAAgHIAIADQA2ATBPglQBHgkAXgtQATgVAuAGQAyAGABAmIAAACIAAABQgJAvhAA8QhFBBgzgBIgKAAQgfABg3ggg");
	this.shape_262.setTransform(14.7,53.8,0.127,0.127,-37.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#777777").s().p("AhUB8QhIgQgEggIgBgHIAIAAQA4ACBBg+QA7g3ALgyQAPgaAwgHQAzgHAJAnIAAACQACAugxBMQg0BSgyAOQgMAIgaAAQgYAAgigHg");
	this.shape_263.setTransform(16.3,53.1,0.127,0.127,-37.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#F7E9D2").s().p("AhHAqQAdgVAhgrQAJgLAngHQAqgGgLARQgZApgUAKQgTALgbAFQgUAEgTAAIgLAAg");
	this.shape_264.setTransform(18.3,52.8,0.127,0.127,-37.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#F7E9D2").s().p("AgPgRQAFgQAmgRQAngSgHAVQgNAqgTATQgOASgZANQgYALgaAEQAigrAMgig");
	this.shape_265.setTransform(19.6,51.2,0.127,0.127,-37.5);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#F7E9D2").s().p("AgTgNQAEgPAdgdQAfgfgBAXQgBAtgMAZQgIAUgXAUQgOAMgeATQATgrAGgug");
	this.shape_266.setTransform(20.4,49.3,0.127,0.127,-37.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#F7E9D2").s().p("AgbgHQgCgQAZglQAXglADAVQALArgHAdQgHAWgOAZQgOAbgSAPQAIgigIg6g");
	this.shape_267.setTransform(20.8,47.2,0.127,0.127,-37.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#F7E9D2").s().p("AgYgBQgGgOAQgrQAOgqAIAUQASApABAcQACAUgMAeQgGAPgQAhQgDgrgQgtg");
	this.shape_268.setTransform(20.5,45.1,0.127,0.127,-37.5);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#EAE1D3").s().p("AhlBYQAggQAhgsQAfgnARgtQAKgWArgLQAtgLgKAkQgKAmgWAlQgZAvgYANQgXANgiAGQgRADgOAAQgSAAgOgFg");
	this.shape_269.setTransform(18.1,52.3,0.127,0.127,-37.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#EAE1D3").s().p("AgcAnQAWguAFgyQAFgWAlgYQAmgaABAmQAAApgLAtQgNAygVASQgRAWgiAPQghAOgeABQAdgbAWgxg");
	this.shape_270.setTransform(19.3,50.8,0.127,0.127,-37.5);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#EAE1D3").s().p("AgZAsQAKg0gJgwQAAgYAdgiQAggkAIAkQAMAlgBAxQgBAvgNAdQgLAYgfAaQgaAWgdANQAVgnAJgyg");
	this.shape_271.setTransform(20.1,48.9,0.127,0.127,-37.5);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#EAE1D3").s().p("AgVAwQgGgzgRguQgGgXAWgrQAWgsAQAiQASAnALApQANAzgJAaQgGAcgWAhQgUAhgYAPQANgkgFg5g");
	this.shape_272.setTransform(20.4,46.9,0.127,0.127,-37.5);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#EAE1D3").s().p("AgGAvQgQgxgbgnQgJgXANgtQANguAXAbQAXAbATAsQAUAsAAAdQADAagQAnQgNAdgUAdQgBgsgMgwg");
	this.shape_273.setTransform(20,44.9,0.127,0.127,-37.5);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#595959").s().p("AgtAMQAFgRAlgRQAlgRAMAWIABAUQgLgTgkAPQgiALgMAUg");
	this.shape_274.setTransform(17.6,50.3,0.127,0.127,-37.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#595959").s().p("AgrAXQAAgUAggZQAegcARASIAHAVQgQgTgeAbQgdAUgHAXg");
	this.shape_275.setTransform(18.4,48.9,0.127,0.127,-37.5);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#595959").s().p("AglAhQgEgSAXgiQAXgnAWAOIAMASQgVgNgXAkQgVAcgDAYg");
	this.shape_276.setTransform(18.7,47.4,0.127,0.127,-37.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#595959").s().p("AgcAqQgKgRARgpQARgtAWAHIAPAPQgWgGgRApQgRAlAGAXg");
	this.shape_277.setTransform(18.6,45.8,0.127,0.127,-37.5);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#595959").s().p("AgRApQgIgZADgdQAFgnAWACIATAHQgYgCgEAmQgEAaAFAgg");
	this.shape_278.setTransform(18.1,44.2,0.127,0.127,-37.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#A58E6D").s().p("AiAB9QA3gOAyhSQAshIAAgyQAHgYAogSQArgUAOAdQANAngbBVQgdBcgxAfQgfAVg8ACIgLAAQg0AAgHgTg");
	this.shape_279.setTransform(17.7,52,0.127,0.127,-37.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#A58E6D").s().p("AhlCgQAzggAehbQAZhSgLgxQABgYAfgeQAkgfAVAXQAWAhgEBaQgFBigoAqQgXAgg9ATQggAJgTAAQgQAAgGgHg");
	this.shape_280.setTransform(18.9,50.5,0.127,0.127,-37.5);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#A58E6D").s().p("AhNC0QArgrAGhhQAFhYgZgrQgFgYAZgnQAcgqAZARQAbAbASBXQAUBggbA1QgPAlg2AlQgnAbgUAAQgIAAgEgFg");
	this.shape_281.setTransform(19.8,48.7,0.127,0.127,-37.5);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#A58E6D").s().p("AgiC+QAeg2gThgQgRhVgggjQgNgWATgvQATgxAdAJQAfAVAjBQQAoBYgNA5QgFAngsA0QgiAsgUAAIgGgCg");
	this.shape_282.setTransform(20,46.8,0.127,0.127,-37.5);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#A58E6D").s().p("AAPC0QANg9gjhXQgihNgogdQgMgcAEgkQAGgqAcABQAkgCA2BIQA6BLgCA7QAEAmgfA8QgdA5gTAAIgBAAg");
	this.shape_283.setTransform(19.7,45,0.127,0.127,-37.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#777777").s().p("AiGB/IgDgGIAIgDQAzgNAzhPQAshGABgxQAIgeArgTQAvgVARAiIABACQAOAtgeBWQgfBdguAdQgbAVhCAEIgRAAQg4AAgJgYg");
	this.shape_284.setTransform(17.7,52,0.127,0.127,-37.5);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#777777").s().p("AhqCkIgEgGIAHgEQAxgeAdhYQAahQgKgyQACgdAhggQAngiAZAbIABACQAaAngHBeQgGBhgnAoQgTAdhCAYQgjAMgWAAQgVAAgIgLg");
	this.shape_285.setTransform(18.9,50.5,0.127,0.127,-37.5);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#777777").s().p("AhRC6IgGgEIAGgHQApgoAHhfQAGhVgZgsQgHgeAdgpQAegtAeAUIABAAIAAABQAgAeARBdQASBggbAxQgKAjg8AqQgpAfgYAAQgKAAgHgGg");
	this.shape_286.setTransform(19.7,48.7,0.127,0.127,-37.5);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#777777").s().p("AgnDGIgGgCIAEgIQAcgzgRheQgPhUghgkQgOgaAUgzQAVg1AiAKIABABIAAAAQAlAZAjBUQAmBXgMA4QgEAkgtA5QgmAygaAAQgEAAgEgBg");
	this.shape_287.setTransform(20,46.8,0.127,0.127,-37.5);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#777777").s().p("AAMC7IgHAAIACgJQANg5ghhVQghhOgogcQgPghAFgnQAHgsAhAAIABAAIABAAQAsgBA2BMQA4BMgDA5QAGAhggBDQgfBBgaAAIgCAAg");
	this.shape_288.setTransform(19.7,45,0.127,0.127,-37.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#F7E9D2").s().p("Ag+AVQAcggATgLQAbgRA3ADQgbAZgdAkQgIANgnAAQgoAAAOgRg");
	this.shape_289.setTransform(20.9,41.4,0.127,0.127,-37.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#EAE1D3").s().p("AhhAyQBChiAfgRQAUgLAggEQAcgDAYAEQgaAVgfAoQgdAkgXAsQgMAUgzAAIgDAAQgvAAAVggg");
	this.shape_290.setTransform(21,42,0.127,0.127,-37.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#F7E9D2").s().p("AhJBIQg2gIAfgdIA6g5QAjgjAOgHQAPgHAegCQAcgCAZAEQgYATgiApIg4BIQgJANgeAAQgMAAgRgCg");
	this.shape_291.setTransform(19.5,43,0.127,0.127,-37.5);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#595959").s().p("AhAgEIAKgUQAEAdAzgBQAygCAOgRIgFAQQgFAUg3ADIgIABQgzAAgFgdg");
	this.shape_292.setTransform(21.1,44,0.127,0.127,-37.5);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#595959").s().p("AgJAcQhAgKAGggIAOgQQgGAeA5AJQA0AJATgRIgIAQQgGAOggAAQgPAAgRgDg");
	this.shape_293.setTransform(19.3,44.9,0.127,0.127,-37.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#A58E6D").s().p("AiSBdQAZgvApg3QA3hOAjgYQAcgQAygCQA0gCAIARQgpAXg1BMQgvBFgNAwQgEAahCACIgGAAQg9AAgDglg");
	this.shape_294.setTransform(21.1,42.4,0.127,0.127,-37.5);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#F7E9D2").s().p("AhcB0QhIgMAJgoQAXgaA+g6QBEhAAegXQAXgKAwgBQAzgBAHAQQgnAYg4BJQgpA1gdA3QgGALgZAEQgLACgMAAQgPAAgPgDg");
	this.shape_295.setTransform(19.5,43.5,0.127,0.127,-37.5);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#777777").s().p("AicBcIAAgBIABgBQAZgvAvg9QA4hLAhgYQAagPA0gEQA6gEAMAWIACAGIgGAEQgnAWgzBKQgvBDgNAxQgBAOgZAJQgWAKgeAAIgDAAQhHAAgEgtg");
	this.shape_296.setTransform(21.1,42.4,0.127,0.127,-37.5);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#777777").s().p("AhgB7QhPgOALgvIAAgBIABgBQAYgdBEg8QBAg6AggaQAVgKAxgCQA5gCALAVIADAGIgHAEQglAWg2BIQgpA1gdA2QgGAOgdAFQgMACgNAAQgQAAgSgDg");
	this.shape_297.setTransform(19.5,43.5,0.127,0.127,-37.5);

	this.addChild(this.shape_297,this.shape_296,this.shape_295,this.shape_294,this.shape_293,this.shape_292,this.shape_291,this.shape_290,this.shape_289,this.shape_288,this.shape_287,this.shape_286,this.shape_285,this.shape_284,this.shape_283,this.shape_282,this.shape_281,this.shape_280,this.shape_279,this.shape_278,this.shape_277,this.shape_276,this.shape_275,this.shape_274,this.shape_273,this.shape_272,this.shape_271,this.shape_270,this.shape_269,this.shape_268,this.shape_267,this.shape_266,this.shape_265,this.shape_264,this.shape_263,this.shape_262,this.shape_261,this.shape_260,this.shape_259,this.shape_258,this.shape_257,this.shape_256,this.shape_255,this.shape_254,this.shape_253,this.shape_252,this.shape_251,this.shape_250,this.shape_249,this.shape_248,this.shape_247,this.shape_246,this.shape_245,this.shape_244,this.shape_243,this.shape_242,this.shape_241,this.shape_240,this.shape_239,this.shape_238,this.shape_237,this.shape_236,this.shape_235,this.shape_234,this.shape_233,this.shape_232,this.shape_231,this.shape_230,this.shape_229,this.shape_228,this.shape_227,this.shape_226,this.shape_225,this.shape_224,this.shape_223,this.shape_222,this.shape_221,this.shape_220,this.shape_219,this.shape_218,this.shape_217,this.shape_216,this.shape_215,this.shape_214,this.shape_213,this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201,this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,73.5,60);


(lib.Символ8копия = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape.setTransform(110.6,-37.7,0.127,0.127,-37.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_1.setTransform(110.7,-37.2,0.127,0.127,-37.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_2.setTransform(111,-35.3,0.127,0.127,-37.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_3.setTransform(110.8,-36.8,0.127,0.127,-37.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_4.setTransform(110.8,-36.8,0.127,0.127,-37.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7E9D2").s().p("Ag2AWQAYggARgMQAXgRAxACQgXAYgaAmQgHANgiAAIgCAAQghAAAMgQg");
	this.shape_5.setTransform(109.3,-36.8,0.127,0.127,-37.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EAE1D3").s().p("AhVAzQA2hiAfgSQAQgLAcgFQAZgDAWAEQgXAWgbAnQgbAlgTArQgKAVgsABIgCAAQgpAAARggg");
	this.shape_6.setTransform(109.5,-36.3,0.127,0.127,-37.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#595959").s().p("Ag0AAIAGgVQAEAZAqgEQAngCAOgRIgEARQgGARgsAGIgQABQggAAgDgWg");
	this.shape_7.setTransform(109.8,-34.3,0.127,0.127,-37.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A58E6D").s().p("Ah8BmQAIgnAphHQAthQAhgYQAZgRAsgCQAugCAGARQglAXgtBMQgpBFgKAxQgHAXgzAHIgQABQgmAAgDgeg");
	this.shape_8.setTransform(109.6,-35.9,0.127,0.127,-37.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#777777").s().p("AiCBnIgBgBIABgBQAHgsAthKQAthOAhgXQAWgQAugDQA0gFAKAXIACAGIgFAEQgjAVgtBLQgpBEgJAwQgKAdg4AGIgPABQgrAAgDgkg");
	this.shape_9.setTransform(109.6,-35.9,0.127,0.127,-37.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F7E9D2").s().p("Ag7AWQAZgfATgMQAZgSA2ACQgbAagaAkQgIANglAAIgCAAQgkAAANgQg");
	this.shape_10.setTransform(108.1,-35.9,0.127,0.127,-37.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EAE1D3").s().p("AhcAzQA6hiAigSQARgMAfgEQAbgDAYAEQgZAVgeAoQgcAlgVArQgLAUgwACIgEAAQgrAAATggg");
	this.shape_11.setTransform(108.2,-35.3,0.127,0.127,-37.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#595959").s().p("Ag4AAIAGgVQAEAZAugEQArgCAOgSIgEASQgGAQgwAHIgSABQgiAAgDgWg");
	this.shape_12.setTransform(108.5,-33.3,0.127,0.127,-37.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A58E6D").s().p("AiGBnQAIgnAshHQAwhSAkgXQAbgRAxgCQAxgCAIAQQgoAXgxBNQgtBFgKAxQgHAXg5AHIgRABQgpAAgDgdg");
	this.shape_13.setTransform(108.4,-34.9,0.127,0.127,-37.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#777777").s().p("AiOBoIAAgBIAAgBQAJgtAwhJQAxhPAjgXQAYgQAzgEQA4gEAKAWIAEAGIgGAEQgnAWgwBLQgtBEgJAwQgKAdg+AHIgRABQgvAAgDgkg");
	this.shape_14.setTransform(108.4,-34.9,0.127,0.127,-37.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F7E9D2").s().p("Ag+AXQAbggATgMQAbgRA4ABQgcAagbAkQgJANgmABIgDAAQgmAAAOgQg");
	this.shape_15.setTransform(106.8,-34.8,0.127,0.127,-37.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EAE1D3").s().p("AhgAzQAXgmAXgcQAegoAUgKQASgMAggEQAdgEAYAEQgaAVgfApQgdAlgWAsQgMAUgyACIgEAAQgtAAAUghg");
	this.shape_16.setTransform(106.9,-34.3,0.127,0.127,-37.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#595959").s().p("Ag8AAIAHgVQAEAZAxgEQAtgCAQgSIgFASQgHAQgyAHIgTABQgkAAgEgWg");
	this.shape_17.setTransform(107.1,-32.2,0.127,0.127,-37.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A58E6D").s().p("AiNBnQAJgmAuhIQAzhRAmgYQAcgRAzgCQA0gDAIARQgrAXgyBNQguBFgMAxQgJAYg6AHIgTABQgrAAgDgeg");
	this.shape_18.setTransform(107,-33.8,0.127,0.127,-37.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#777777").s().p("AiWBoIAAgBIABgBQAKgsAxhKQA0hPAmgXQAYgQA1gEQA7gFAMAWIADAGIgHAEQgoAWgyBLQguBEgLAxQgKAdhBAHIgSABQgyAAgEgkg");
	this.shape_19.setTransform(107,-33.8,0.127,0.127,-37.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_20.setTransform(105.4,-33.7,0.127,0.127,-37.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_21.setTransform(105.5,-33.2,0.127,0.127,-37.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_22.setTransform(105.8,-31.3,0.127,0.127,-37.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_23.setTransform(105.7,-32.8,0.127,0.127,-37.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_24.setTransform(105.7,-32.8,0.127,0.127,-37.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F7E9D2").s().p("Ag2AWQAYggARgMQAXgRAxACQgXAYgaAmQgHANgiAAIgCAAQghAAAMgQg");
	this.shape_25.setTransform(104.2,-32.8,0.127,0.127,-37.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EAE1D3").s().p("AhVAzQA2hiAfgSQAQgLAcgFQAZgDAWAEQgXAWgbAnQgbAlgTArQgKAVgsABIgCAAQgpAAARggg");
	this.shape_26.setTransform(104.3,-32.3,0.127,0.127,-37.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#595959").s().p("Ag0AAIAGgVQAEAZAqgEQAngCAOgRIgEARQgGARgsAGIgQABQggAAgDgWg");
	this.shape_27.setTransform(104.6,-30.3,0.127,0.127,-37.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A58E6D").s().p("Ah8BmQAIgnAphHQAthQAhgYQAZgRAsgCQAugCAGARQglAXgtBMQgpBFgKAxQgHAXgzAHIgQABQgmAAgDgeg");
	this.shape_28.setTransform(104.5,-31.9,0.127,0.127,-37.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#777777").s().p("AiCBnIgBgBIABgBQAHgsAthKQAthOAhgXQAWgQAugDQA0gFAKAXIACAGIgFAEQgjAVgtBLQgpBEgJAwQgKAdg4AGIgPABQgrAAgDgkg");
	this.shape_29.setTransform(104.5,-31.9,0.127,0.127,-37.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F7E9D2").s().p("Ag7AWQAZgfATgMQAZgSA2ACQgbAagaAkQgIANglAAIgCAAQgkAAANgQg");
	this.shape_30.setTransform(103,-31.9,0.127,0.127,-37.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EAE1D3").s().p("AhcAzQA6hiAigSQARgMAfgEQAbgDAYAEQgZAVgeAoQgcAlgVArQgLAUgwACIgEAAQgrAAATggg");
	this.shape_31.setTransform(103.1,-31.3,0.127,0.127,-37.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#595959").s().p("Ag4AAIAGgVQAEAZAugEQArgCAOgSIgEASQgGAQgwAHIgSABQgiAAgDgWg");
	this.shape_32.setTransform(103.3,-29.3,0.127,0.127,-37.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A58E6D").s().p("AiGBnQAIgnAshHQAwhSAkgXQAbgRAxgCQAxgCAIAQQgoAXgxBNQgtBFgKAxQgHAXg5AHIgRABQgpAAgDgdg");
	this.shape_33.setTransform(103.2,-30.9,0.127,0.127,-37.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#777777").s().p("AiOBoIAAgBIAAgBQAJgtAwhJQAxhPAjgXQAYgQAzgEQA4gEAKAWIAEAGIgGAEQgnAWgwBLQgtBEgJAwQgKAdg+AHIgRABQgvAAgDgkg");
	this.shape_34.setTransform(103.2,-30.9,0.127,0.127,-37.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F7E9D2").s().p("Ag+AXQAbggATgMQAbgRA4ABQgcAagbAkQgJANgmABIgDAAQgmAAAOgQg");
	this.shape_35.setTransform(101.6,-30.8,0.127,0.127,-37.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EAE1D3").s().p("AhgAzQAXgmAXgcQAegoAUgKQASgMAggEQAdgEAYAEQgaAVgfApQgdAlgWAsQgMAUgyACIgEAAQgtAAAUghg");
	this.shape_36.setTransform(101.7,-30.3,0.127,0.127,-37.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#595959").s().p("Ag8AAIAHgVQAEAZAxgEQAtgCAQgSIgFASQgHAQgyAHIgTABQgkAAgEgWg");
	this.shape_37.setTransform(101.9,-28.2,0.127,0.127,-37.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A58E6D").s().p("AiNBnQAJgmAuhIQAzhRAmgYQAcgRAzgCQA0gDAIARQgrAXgyBNQguBFgMAxQgJAYg6AHIgTABQgrAAgDgeg");
	this.shape_38.setTransform(101.9,-29.8,0.127,0.127,-37.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#777777").s().p("AiWBoIAAgBIABgBQAKgsAxhKQA0hPAmgXQAYgQA1gEQA7gFAMAWIADAGIgHAEQgoAWgyBLQguBEgLAxQgKAdhBAHIgSABQgyAAgEgkg");
	this.shape_39.setTransform(101.9,-29.8,0.127,0.127,-37.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_40.setTransform(100.2,-29.7,0.127,0.127,-37.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_41.setTransform(100.3,-29.2,0.127,0.127,-37.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_42.setTransform(100.6,-27.2,0.127,0.127,-37.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_43.setTransform(100.5,-28.8,0.127,0.127,-37.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_44.setTransform(100.5,-28.8,0.127,0.127,-37.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F7E9D2").s().p("Ag2AWQAYggARgMQAXgRAxACQgXAYgaAmQgHANgiAAIgCAAQghAAAMgQg");
	this.shape_45.setTransform(99,-28.8,0.127,0.127,-37.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EAE1D3").s().p("AhVAzQA2hiAfgSQAQgLAcgFQAZgDAWAEQgXAWgbAnQgbAlgTArQgKAVgsABIgCAAQgpAAARggg");
	this.shape_46.setTransform(99.1,-28.3,0.127,0.127,-37.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#595959").s().p("Ag0AAIAGgVQAEAZAqgEQAngCAOgRIgEARQgGARgsAGIgQABQggAAgDgWg");
	this.shape_47.setTransform(99.4,-26.3,0.127,0.127,-37.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A58E6D").s().p("Ah8BmQAIgnAphHQAthQAhgYQAZgRAsgCQAugCAGARQglAXgtBMQgpBFgKAxQgHAXgzAHIgQABQgmAAgDgeg");
	this.shape_48.setTransform(99.3,-27.8,0.127,0.127,-37.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#777777").s().p("AiCBnIgBgBIABgBQAHgsAthKQAthOAhgXQAWgQAugDQA0gFAKAXIACAGIgFAEQgjAVgtBLQgpBEgJAwQgKAdg4AGIgPABQgrAAgDgkg");
	this.shape_49.setTransform(99.3,-27.8,0.127,0.127,-37.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F7E9D2").s().p("Ag7AWQAZgfATgMQAZgSA2ACQgbAagaAkQgIANglAAIgCAAQgkAAANgQg");
	this.shape_50.setTransform(97.8,-27.8,0.127,0.127,-37.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EAE1D3").s().p("AhcAzQA6hiAigSQARgMAfgEQAbgDAYAEQgZAVgeAoQgcAlgVArQgLAUgwACIgEAAQgrAAATggg");
	this.shape_51.setTransform(97.9,-27.3,0.127,0.127,-37.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#595959").s().p("Ag4AAIAGgVQAEAZAugEQArgCAOgSIgEASQgGAQgwAHIgSABQgiAAgDgWg");
	this.shape_52.setTransform(98.1,-25.3,0.127,0.127,-37.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A58E6D").s().p("AiGBnQAIgnAshHQAwhSAkgXQAbgRAxgCQAxgCAIAQQgoAXgxBNQgtBFgKAxQgHAXg5AHIgRABQgpAAgDgdg");
	this.shape_53.setTransform(98,-26.9,0.127,0.127,-37.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#777777").s().p("AiOBoIAAgBIAAgBQAJgtAwhJQAxhPAjgXQAYgQAzgEQA4gEAKAWIAEAGIgGAEQgnAWgwBLQgtBEgJAwQgKAdg+AHIgRABQgvAAgDgkg");
	this.shape_54.setTransform(98,-26.9,0.127,0.127,-37.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F7E9D2").s().p("Ag+AXQAbggATgMQAbgRA4ABQgcAagbAkQgJANgmABIgDAAQgmAAAOgQg");
	this.shape_55.setTransform(96.4,-26.8,0.127,0.127,-37.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EAE1D3").s().p("AhgAzQAXgmAXgcQAegoAUgKQASgMAggEQAdgEAYAEQgaAVgfApQgdAlgWAsQgMAUgyACIgEAAQgtAAAUghg");
	this.shape_56.setTransform(96.5,-26.2,0.127,0.127,-37.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#595959").s().p("Ag8AAIAHgVQAEAZAxgEQAtgCAQgSIgFASQgHAQgyAHIgTABQgkAAgEgWg");
	this.shape_57.setTransform(96.7,-24.2,0.127,0.127,-37.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A58E6D").s().p("AiNBnQAJgmAuhIQAzhRAmgYQAcgRAzgCQA0gDAIARQgrAXgyBNQguBFgMAxQgJAYg6AHIgTABQgrAAgDgeg");
	this.shape_58.setTransform(96.7,-25.8,0.127,0.127,-37.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#777777").s().p("AiWBoIAAgBIABgBQAKgsAxhKQA0hPAmgXQAYgQA1gEQA7gFAMAWIADAGIgHAEQgoAWgyBLQguBEgLAxQgKAdhBAHIgSABQgyAAgEgkg");
	this.shape_59.setTransform(96.7,-25.8,0.127,0.127,-37.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_60.setTransform(95.1,-25.7,0.127,0.127,-37.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_61.setTransform(95.2,-25.2,0.127,0.127,-37.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_62.setTransform(95.5,-23.2,0.127,0.127,-37.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_63.setTransform(95.3,-24.8,0.127,0.127,-37.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_64.setTransform(95.3,-24.8,0.127,0.127,-37.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_65.setTransform(94,-24.6,0.127,0.127,-37.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_66.setTransform(94.1,-24.1,0.127,0.127,-37.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_67.setTransform(94.4,-22.1,0.127,0.127,-37.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_68.setTransform(94.2,-23.7,0.127,0.127,-37.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_69.setTransform(94.2,-23.7,0.127,0.127,-37.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F7E9D2").s().p("Ag2AWQAYggARgMQAXgRAxACQgXAYgaAmQgHANgiAAIgCAAQghAAAMgQg");
	this.shape_70.setTransform(92.7,-23.7,0.127,0.127,-37.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EAE1D3").s().p("AhVAzQA2hiAfgSQAQgLAcgFQAZgDAWAEQgXAWgbAnQgbAlgTArQgKAVgsABIgCAAQgpAAARggg");
	this.shape_71.setTransform(92.9,-23.2,0.127,0.127,-37.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#595959").s().p("Ag0AAIAGgVQAEAZAqgEQAngCAOgRIgEARQgGARgsAGIgQABQggAAgDgWg");
	this.shape_72.setTransform(93.2,-21.2,0.127,0.127,-37.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#A58E6D").s().p("Ah8BmQAIgnAphHQAthQAhgYQAZgRAsgCQAugCAGARQglAXgtBMQgpBFgKAxQgHAXgzAHIgQABQgmAAgDgeg");
	this.shape_73.setTransform(93,-22.7,0.127,0.127,-37.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#777777").s().p("AiCBnIgBgBIABgBQAHgsAthKQAthOAhgXQAWgQAugDQA0gFAKAXIACAGIgFAEQgjAVgtBLQgpBEgJAwQgKAdg4AGIgPABQgrAAgDgkg");
	this.shape_74.setTransform(93,-22.7,0.127,0.127,-37.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F7E9D2").s().p("Ag7AWQAZgfATgMQAZgSA2ACQgbAagaAkQgIANglAAIgCAAQgkAAANgQg");
	this.shape_75.setTransform(91.5,-22.7,0.127,0.127,-37.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EAE1D3").s().p("AhcAzQA6hiAigSQARgMAfgEQAbgDAYAEQgZAVgeAoQgcAlgVArQgLAUgwACIgEAAQgrAAATggg");
	this.shape_76.setTransform(91.6,-22.2,0.127,0.127,-37.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#595959").s().p("Ag4AAIAGgVQAEAZAugEQArgCAOgSIgEASQgGAQgwAHIgSABQgiAAgDgWg");
	this.shape_77.setTransform(91.9,-20.2,0.127,0.127,-37.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#A58E6D").s().p("AiGBnQAIgnAshHQAwhSAkgXQAbgRAxgCQAxgCAIAQQgoAXgxBNQgtBFgKAxQgHAXg5AHIgRABQgpAAgDgdg");
	this.shape_78.setTransform(91.8,-21.8,0.127,0.127,-37.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#777777").s().p("AiOBoIAAgBIAAgBQAJgtAwhJQAxhPAjgXQAYgQAzgEQA4gEAKAWIAEAGIgGAEQgnAWgwBLQgtBEgJAwQgKAdg+AHIgRABQgvAAgDgkg");
	this.shape_79.setTransform(91.8,-21.8,0.127,0.127,-37.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F7E9D2").s().p("Ag+AXQAbggATgMQAbgRA4ABQgcAagbAkQgJANgmABIgDAAQgmAAAOgQg");
	this.shape_80.setTransform(90.2,-21.7,0.127,0.127,-37.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EAE1D3").s().p("AhgAzQAXgmAXgcQAegoAUgKQASgMAggEQAdgEAYAEQgaAVgfApQgdAlgWAsQgMAUgyACIgEAAQgtAAAUghg");
	this.shape_81.setTransform(90.3,-21.1,0.127,0.127,-37.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#595959").s().p("Ag8AAIAHgVQAEAZAxgEQAtgCAQgSIgFASQgHAQgyAHIgTABQgkAAgEgWg");
	this.shape_82.setTransform(90.5,-19.1,0.127,0.127,-37.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#A58E6D").s().p("AiNBnQAJgmAuhIQAzhRAmgYQAcgRAzgCQA0gDAIARQgrAXgyBNQguBFgMAxQgJAYg6AHIgTABQgrAAgDgeg");
	this.shape_83.setTransform(90.4,-20.7,0.127,0.127,-37.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#777777").s().p("AiWBoIAAgBIABgBQAKgsAxhKQA0hPAmgXQAYgQA1gEQA7gFAMAWIADAGIgHAEQgoAWgyBLQguBEgLAxQgKAdhBAHIgSABQgyAAgEgkg");
	this.shape_84.setTransform(90.4,-20.7,0.127,0.127,-37.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_85.setTransform(88.8,-20.6,0.127,0.127,-37.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_86.setTransform(88.9,-20.1,0.127,0.127,-37.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_87.setTransform(89.2,-18.1,0.127,0.127,-37.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_88.setTransform(89.1,-19.7,0.127,0.127,-37.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_89.setTransform(89.1,-19.7,0.127,0.127,-37.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F7E9D2").s().p("Ag2AWQAYggARgMQAXgRAxACQgXAYgaAmQgHANgiAAIgCAAQghAAAMgQg");
	this.shape_90.setTransform(87.6,-19.7,0.127,0.127,-37.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#EAE1D3").s().p("AhVAzQA2hiAfgSQAQgLAcgFQAZgDAWAEQgXAWgbAnQgbAlgTArQgKAVgsABIgCAAQgpAAARggg");
	this.shape_91.setTransform(87.7,-19.2,0.127,0.127,-37.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#595959").s().p("Ag0AAIAGgVQAEAZAqgEQAngCAOgRIgEARQgGARgsAGIgQABQggAAgDgWg");
	this.shape_92.setTransform(88,-17.2,0.127,0.127,-37.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#A58E6D").s().p("Ah8BmQAIgnAphHQAthQAhgYQAZgRAsgCQAugCAGARQglAXgtBMQgpBFgKAxQgHAXgzAHIgQABQgmAAgDgeg");
	this.shape_93.setTransform(87.9,-18.7,0.127,0.127,-37.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#777777").s().p("AiCBnIgBgBIABgBQAHgsAthKQAthOAhgXQAWgQAugDQA0gFAKAXIACAGIgFAEQgjAVgtBLQgpBEgJAwQgKAdg4AGIgPABQgrAAgDgkg");
	this.shape_94.setTransform(87.9,-18.7,0.127,0.127,-37.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F7E9D2").s().p("Ag7AWQAZgfATgMQAZgSA2ACQgbAagaAkQgIANglAAIgCAAQgkAAANgQg");
	this.shape_95.setTransform(86.4,-18.7,0.127,0.127,-37.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EAE1D3").s().p("AhcAzQA6hiAigSQARgMAfgEQAbgDAYAEQgZAVgeAoQgcAlgVArQgLAUgwACIgEAAQgrAAATggg");
	this.shape_96.setTransform(86.5,-18.2,0.127,0.127,-37.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#595959").s().p("Ag4AAIAGgVQAEAZAugEQArgCAOgSIgEASQgGAQgwAHIgSABQgiAAgDgWg");
	this.shape_97.setTransform(86.7,-16.2,0.127,0.127,-37.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#A58E6D").s().p("AiGBnQAIgnAshHQAwhSAkgXQAbgRAxgCQAxgCAIAQQgoAXgxBNQgtBFgKAxQgHAXg5AHIgRABQgpAAgDgdg");
	this.shape_98.setTransform(86.6,-17.8,0.127,0.127,-37.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#777777").s().p("AiOBoIAAgBIAAgBQAJgtAwhJQAxhPAjgXQAYgQAzgEQA4gEAKAWIAEAGIgGAEQgnAWgwBLQgtBEgJAwQgKAdg+AHIgRABQgvAAgDgkg");
	this.shape_99.setTransform(86.6,-17.8,0.127,0.127,-37.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F7E9D2").s().p("Ag+AXQAbggATgMQAbgRA4ABQgcAagbAkQgJANgmABIgDAAQgmAAAOgQg");
	this.shape_100.setTransform(85,-17.7,0.127,0.127,-37.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EAE1D3").s().p("AhgAzQAXgmAXgcQAegoAUgKQASgMAggEQAdgEAYAEQgaAVgfApQgdAlgWAsQgMAUgyACIgEAAQgtAAAUghg");
	this.shape_101.setTransform(85.1,-17.1,0.127,0.127,-37.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#595959").s().p("Ag8AAIAHgVQAEAZAxgEQAtgCAQgSIgFASQgHAQgyAHIgTABQgkAAgEgWg");
	this.shape_102.setTransform(85.3,-15.1,0.127,0.127,-37.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#A58E6D").s().p("AiNBnQAJgmAuhIQAzhRAmgYQAcgRAzgCQA0gDAIARQgrAXgyBNQguBFgMAxQgJAYg6AHIgTABQgrAAgDgeg");
	this.shape_103.setTransform(85.3,-16.7,0.127,0.127,-37.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#777777").s().p("AiWBoIAAgBIABgBQAKgsAxhKQA0hPAmgXQAYgQA1gEQA7gFAMAWIADAGIgHAEQgoAWgyBLQguBEgLAxQgKAdhBAHIgSABQgyAAgEgkg");
	this.shape_104.setTransform(85.3,-16.7,0.127,0.127,-37.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_105.setTransform(83.6,-16.5,0.127,0.127,-37.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_106.setTransform(83.7,-16,0.127,0.127,-37.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_107.setTransform(84,-14.1,0.127,0.127,-37.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_108.setTransform(83.9,-15.6,0.127,0.127,-37.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_109.setTransform(83.9,-15.6,0.127,0.127,-37.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#F7E9D2").s().p("Ag2AWQAYggARgMQAXgRAxACQgXAYgaAmQgHANgiAAIgCAAQghAAAMgQg");
	this.shape_110.setTransform(82.4,-15.6,0.127,0.127,-37.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#EAE1D3").s().p("AhVAzQA2hiAfgSQAQgLAcgFQAZgDAWAEQgXAWgbAnQgbAlgTArQgKAVgsABIgCAAQgpAAARggg");
	this.shape_111.setTransform(82.5,-15.1,0.127,0.127,-37.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#595959").s().p("Ag0AAIAGgVQAEAZAqgEQAngCAOgRIgEARQgGARgsAGIgQABQggAAgDgWg");
	this.shape_112.setTransform(82.8,-13.1,0.127,0.127,-37.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#A58E6D").s().p("Ah8BmQAIgnAphHQAthQAhgYQAZgRAsgCQAugCAGARQglAXgtBMQgpBFgKAxQgHAXgzAHIgQABQgmAAgDgeg");
	this.shape_113.setTransform(82.7,-14.7,0.127,0.127,-37.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#777777").s().p("AiCBnIgBgBIABgBQAHgsAthKQAthOAhgXQAWgQAugDQA0gFAKAXIACAGIgFAEQgjAVgtBLQgpBEgJAwQgKAdg4AGIgPABQgrAAgDgkg");
	this.shape_114.setTransform(82.7,-14.7,0.127,0.127,-37.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#F7E9D2").s().p("Ag7AWQAZgfATgMQAZgSA2ACQgbAagaAkQgIANglAAIgCAAQgkAAANgQg");
	this.shape_115.setTransform(81.2,-14.7,0.127,0.127,-37.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#EAE1D3").s().p("AhcAzQA6hiAigSQARgMAfgEQAbgDAYAEQgZAVgeAoQgcAlgVArQgLAUgwACIgEAAQgrAAATggg");
	this.shape_116.setTransform(81.3,-14.1,0.127,0.127,-37.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#595959").s().p("Ag4AAIAGgVQAEAZAugEQArgCAOgSIgEASQgGAQgwAHIgSABQgiAAgDgWg");
	this.shape_117.setTransform(81.5,-12.1,0.127,0.127,-37.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#A58E6D").s().p("AiGBnQAIgnAshHQAwhSAkgXQAbgRAxgCQAxgCAIAQQgoAXgxBNQgtBFgKAxQgHAXg5AHIgRABQgpAAgDgdg");
	this.shape_118.setTransform(81.4,-13.7,0.127,0.127,-37.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#777777").s().p("AiOBoIAAgBIAAgBQAJgtAwhJQAxhPAjgXQAYgQAzgEQA4gEAKAWIAEAGIgGAEQgnAWgwBLQgtBEgJAwQgKAdg+AHIgRABQgvAAgDgkg");
	this.shape_119.setTransform(81.4,-13.7,0.127,0.127,-37.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#F7E9D2").s().p("Ag+AXQAbggATgMQAbgRA4ABQgcAagbAkQgJANgmABIgDAAQgmAAAOgQg");
	this.shape_120.setTransform(79.8,-13.6,0.127,0.127,-37.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#EAE1D3").s().p("AhgAzQAXgmAXgcQAegoAUgKQASgMAggEQAdgEAYAEQgaAVgfApQgdAlgWAsQgMAUgyACIgEAAQgtAAAUghg");
	this.shape_121.setTransform(79.9,-13.1,0.127,0.127,-37.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#A58E6D").s().p("AiNBnQAJgmAuhIQAzhRAmgYQAcgRAzgCQA0gDAIARQgrAXgyBNQguBFgMAxQgJAYg6AHIgTABQgrAAgDgeg");
	this.shape_122.setTransform(80.1,-12.6,0.127,0.127,-37.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#777777").s().p("AiWBoIAAgBIABgBQAKgsAxhKQA0hPAmgXQAYgQA1gEQA7gFAMAWIADAGIgHAEQgoAWgyBLQguBEgLAxQgKAdhBAHIgSABQgyAAgEgkg");
	this.shape_123.setTransform(80.1,-12.6,0.127,0.127,-37.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_124.setTransform(78.5,-12.5,0.127,0.127,-37.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_125.setTransform(78.6,-12,0.127,0.127,-37.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_126.setTransform(78.9,-10.1,0.127,0.127,-37.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_127.setTransform(78.7,-11.6,0.127,0.127,-37.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_128.setTransform(78.7,-11.6,0.127,0.127,-37.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_129.setTransform(77.6,-11.8,0.127,0.127,-37.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_130.setTransform(77.7,-11.3,0.127,0.127,-37.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_131.setTransform(78,-9.4,0.127,0.127,-37.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_132.setTransform(77.9,-10.9,0.127,0.127,-37.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_133.setTransform(77.9,-10.9,0.127,0.127,-37.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#F7E9D2").s().p("Ag2AWQAYggARgMQAXgRAxACQgXAYgaAmQgHANgiAAIgCAAQghAAAMgQg");
	this.shape_134.setTransform(76.4,-10.9,0.127,0.127,-37.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#EAE1D3").s().p("AhVAzQA2hiAfgSQAQgLAcgFQAZgDAWAEQgXAWgbAnQgbAlgTArQgKAVgsABIgCAAQgpAAARggg");
	this.shape_135.setTransform(76.5,-10.4,0.127,0.127,-37.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#595959").s().p("Ag0AAIAGgVQAEAZAqgEQAngCAOgRIgEARQgGARgsAGIgQABQggAAgDgWg");
	this.shape_136.setTransform(76.8,-8.4,0.127,0.127,-37.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#A58E6D").s().p("Ah8BmQAIgnAphHQAthQAhgYQAZgRAsgCQAugCAGARQglAXgtBMQgpBFgKAxQgHAXgzAHIgQABQgmAAgDgeg");
	this.shape_137.setTransform(76.7,-10,0.127,0.127,-37.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#777777").s().p("AiCBnIgBgBIABgBQAHgsAthKQAthOAhgXQAWgQAugDQA0gFAKAXIACAGIgFAEQgjAVgtBLQgpBEgJAwQgKAdg4AGIgPABQgrAAgDgkg");
	this.shape_138.setTransform(76.7,-10,0.127,0.127,-37.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#F7E9D2").s().p("Ag7AWQAZgfATgMQAZgSA2ACQgbAagaAkQgIANglAAIgCAAQgkAAANgQg");
	this.shape_139.setTransform(75.2,-10,0.127,0.127,-37.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#EAE1D3").s().p("AhcAzQA6hiAigSQARgMAfgEQAbgDAYAEQgZAVgeAoQgcAlgVArQgLAUgwACIgEAAQgrAAATggg");
	this.shape_140.setTransform(75.3,-9.4,0.127,0.127,-37.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#595959").s().p("Ag4AAIAGgVQAEAZAugEQArgCAOgSIgEASQgGAQgwAHIgSABQgiAAgDgWg");
	this.shape_141.setTransform(75.5,-7.4,0.127,0.127,-37.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#A58E6D").s().p("AiGBnQAIgnAshHQAwhSAkgXQAbgRAxgCQAxgCAIAQQgoAXgxBNQgtBFgKAxQgHAXg5AHIgRABQgpAAgDgdg");
	this.shape_142.setTransform(75.4,-9,0.127,0.127,-37.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#777777").s().p("AiOBoIAAgBIAAgBQAJgtAwhJQAxhPAjgXQAYgQAzgEQA4gEAKAWIAEAGIgGAEQgnAWgwBLQgtBEgJAwQgKAdg+AHIgRABQgvAAgDgkg");
	this.shape_143.setTransform(75.4,-9,0.127,0.127,-37.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#F7E9D2").s().p("Ag+AXQAbggATgMQAbgRA4ABQgcAagbAkQgJANgmABIgDAAQgmAAAOgQg");
	this.shape_144.setTransform(73.8,-8.9,0.127,0.127,-37.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#EAE1D3").s().p("AhgAzQAXgmAXgcQAegoAUgKQASgMAggEQAdgEAYAEQgaAVgfApQgdAlgWAsQgMAUgyACIgEAAQgtAAAUghg");
	this.shape_145.setTransform(73.9,-8.4,0.127,0.127,-37.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#595959").s().p("Ag8AAIAHgVQAEAZAxgEQAtgCAQgSIgFASQgHAQgyAHIgTABQgkAAgEgWg");
	this.shape_146.setTransform(74.1,-6.3,0.127,0.127,-37.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#A58E6D").s().p("AiNBnQAJgmAuhIQAzhRAmgYQAcgRAzgCQA0gDAIARQgrAXgyBNQguBFgMAxQgJAYg6AHIgTABQgrAAgDgeg");
	this.shape_147.setTransform(74.1,-7.9,0.127,0.127,-37.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#777777").s().p("AiWBoIAAgBIABgBQAKgsAxhKQA0hPAmgXQAYgQA1gEQA7gFAMAWIADAGIgHAEQgoAWgyBLQguBEgLAxQgKAdhBAHIgSABQgyAAgEgkg");
	this.shape_148.setTransform(74.1,-7.9,0.127,0.127,-37.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_149.setTransform(72.5,-7.8,0.127,0.127,-37.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_150.setTransform(72.6,-7.3,0.127,0.127,-37.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_151.setTransform(72.9,-5.4,0.127,0.127,-37.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_152.setTransform(72.7,-6.9,0.127,0.127,-37.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_153.setTransform(72.7,-6.9,0.127,0.127,-37.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#F7E9D2").s().p("Ag2AWQAYggARgMQAXgRAxACQgXAYgaAmQgHANgiAAIgCAAQghAAAMgQg");
	this.shape_154.setTransform(71.2,-6.9,0.127,0.127,-37.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#EAE1D3").s().p("AhVAzQA2hiAfgSQAQgLAcgFQAZgDAWAEQgXAWgbAnQgbAlgTArQgKAVgsABIgCAAQgpAAARggg");
	this.shape_155.setTransform(71.4,-6.4,0.127,0.127,-37.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#595959").s().p("Ag0AAIAGgVQAEAZAqgEQAngCAOgRIgEARQgGARgsAGIgQABQggAAgDgWg");
	this.shape_156.setTransform(71.7,-4.4,0.127,0.127,-37.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#A58E6D").s().p("Ah8BmQAIgnAphHQAthQAhgYQAZgRAsgCQAugCAGARQglAXgtBMQgpBFgKAxQgHAXgzAHIgQABQgmAAgDgeg");
	this.shape_157.setTransform(71.5,-6,0.127,0.127,-37.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#777777").s().p("AiCBnIgBgBIABgBQAHgsAthKQAthOAhgXQAWgQAugDQA0gFAKAXIACAGIgFAEQgjAVgtBLQgpBEgJAwQgKAdg4AGIgPABQgrAAgDgkg");
	this.shape_158.setTransform(71.5,-6,0.127,0.127,-37.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#F7E9D2").s().p("Ag7AWQAZgfATgMQAZgSA2ACQgbAagaAkQgIANglAAIgCAAQgkAAANgQg");
	this.shape_159.setTransform(70,-6,0.127,0.127,-37.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#EAE1D3").s().p("AhcAzQA6hiAigSQARgMAfgEQAbgDAYAEQgZAVgeAoQgcAlgVArQgLAUgwACIgEAAQgrAAATggg");
	this.shape_160.setTransform(70.1,-5.4,0.127,0.127,-37.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#595959").s().p("Ag4AAIAGgVQAEAZAugEQArgCAOgSIgEASQgGAQgwAHIgSABQgiAAgDgWg");
	this.shape_161.setTransform(70.4,-3.4,0.127,0.127,-37.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#A58E6D").s().p("AiGBnQAIgnAshHQAwhSAkgXQAbgRAxgCQAxgCAIAQQgoAXgxBNQgtBFgKAxQgHAXg5AHIgRABQgpAAgDgdg");
	this.shape_162.setTransform(70.3,-5,0.127,0.127,-37.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#777777").s().p("AiOBoIAAgBIAAgBQAJgtAwhJQAxhPAjgXQAYgQAzgEQA4gEAKAWIAEAGIgGAEQgnAWgwBLQgtBEgJAwQgKAdg+AHIgRABQgvAAgDgkg");
	this.shape_163.setTransform(70.3,-5,0.127,0.127,-37.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#F7E9D2").s().p("Ag+AXQAbggATgMQAbgRA4ABQgcAagbAkQgJANgmABIgDAAQgmAAAOgQg");
	this.shape_164.setTransform(68.7,-4.9,0.127,0.127,-37.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#EAE1D3").s().p("AhgAzQAXgmAXgcQAegoAUgKQASgMAggEQAdgEAYAEQgaAVgfApQgdAlgWAsQgMAUgyACIgEAAQgtAAAUghg");
	this.shape_165.setTransform(68.8,-4.4,0.127,0.127,-37.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#595959").s().p("Ag8AAIAHgVQAEAZAxgEQAtgCAQgSIgFASQgHAQgyAHIgTABQgkAAgEgWg");
	this.shape_166.setTransform(69,-2.3,0.127,0.127,-37.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#A58E6D").s().p("AiNBnQAJgmAuhIQAzhRAmgYQAcgRAzgCQA0gDAIARQgrAXgyBNQguBFgMAxQgJAYg6AHIgTABQgrAAgDgeg");
	this.shape_167.setTransform(68.9,-3.9,0.127,0.127,-37.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#777777").s().p("AiWBoIAAgBIABgBQAKgsAxhKQA0hPAmgXQAYgQA1gEQA7gFAMAWIADAGIgHAEQgoAWgyBLQguBEgLAxQgKAdhBAHIgSABQgyAAgEgkg");
	this.shape_168.setTransform(68.9,-3.9,0.127,0.127,-37.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_169.setTransform(67.3,-3.8,0.127,0.127,-37.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_170.setTransform(67.4,-3.3,0.127,0.127,-37.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_171.setTransform(67.7,-1.3,0.127,0.127,-37.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_172.setTransform(67.5,-2.9,0.127,0.127,-37.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_173.setTransform(67.5,-2.9,0.127,0.127,-37.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#F7E9D2").s().p("Ag2AWQAYggARgMQAXgRAxACQgXAYgaAmQgHANgiAAIgCAAQghAAAMgQg");
	this.shape_174.setTransform(66,-2.9,0.127,0.127,-37.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#EAE1D3").s().p("AhVAzQA2hiAfgSQAQgLAcgFQAZgDAWAEQgXAWgbAnQgbAlgTArQgKAVgsABIgCAAQgpAAARggg");
	this.shape_175.setTransform(66.2,-2.4,0.127,0.127,-37.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#595959").s().p("Ag0AAIAGgVQAEAZAqgEQAngCAOgRIgEARQgGARgsAGIgQABQggAAgDgWg");
	this.shape_176.setTransform(66.5,-0.4,0.127,0.127,-37.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#A58E6D").s().p("Ah8BmQAIgnAphHQAthQAhgYQAZgRAsgCQAugCAGARQglAXgtBMQgpBFgKAxQgHAXgzAHIgQABQgmAAgDgeg");
	this.shape_177.setTransform(66.3,-1.9,0.127,0.127,-37.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#777777").s().p("AiCBnIgBgBIABgBQAHgsAthKQAthOAhgXQAWgQAugDQA0gFAKAXIACAGIgFAEQgjAVgtBLQgpBEgJAwQgKAdg4AGIgPABQgrAAgDgkg");
	this.shape_178.setTransform(66.3,-1.9,0.127,0.127,-37.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#F7E9D2").s().p("Ag7AWQAZgfATgMQAZgSA2ACQgbAagaAkQgIANglAAIgCAAQgkAAANgQg");
	this.shape_179.setTransform(64.8,-1.9,0.127,0.127,-37.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#EAE1D3").s().p("AhcAzQA6hiAigSQARgMAfgEQAbgDAYAEQgZAVgeAoQgcAlgVArQgLAUgwACIgEAAQgrAAATggg");
	this.shape_180.setTransform(64.9,-1.4,0.127,0.127,-37.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#595959").s().p("Ag4AAIAGgVQAEAZAugEQArgCAOgSIgEASQgGAQgwAHIgSABQgiAAgDgWg");
	this.shape_181.setTransform(65.1,0.6,0.127,0.127,-37.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#A58E6D").s().p("AiGBnQAIgnAshHQAwhSAkgXQAbgRAxgCQAxgCAIAQQgoAXgxBNQgtBFgKAxQgHAXg5AHIgRABQgpAAgDgdg");
	this.shape_182.setTransform(65.1,-1,0.127,0.127,-37.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#777777").s().p("AiOBoIAAgBIAAgBQAJgtAwhJQAxhPAjgXQAYgQAzgEQA4gEAKAWIAEAGIgGAEQgnAWgwBLQgtBEgJAwQgKAdg+AHIgRABQgvAAgDgkg");
	this.shape_183.setTransform(65.1,-1,0.127,0.127,-37.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#F7E9D2").s().p("Ag+AXQAbggATgMQAbgRA4ABQgcAagbAkQgJANgmABIgDAAQgmAAAOgQg");
	this.shape_184.setTransform(63.5,-0.9,0.127,0.127,-37.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#EAE1D3").s().p("AhgAzQAXgmAXgcQAegoAUgKQASgMAggEQAdgEAYAEQgaAVgfApQgdAlgWAsQgMAUgyACIgEAAQgtAAAUghg");
	this.shape_185.setTransform(63.6,-0.3,0.127,0.127,-37.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#595959").s().p("Ag8AAIAHgVQAEAZAxgEQAtgCAQgSIgFASQgHAQgyAHIgTABQgkAAgEgWg");
	this.shape_186.setTransform(63.8,1.7,0.127,0.127,-37.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#A58E6D").s().p("AiNBnQAJgmAuhIQAzhRAmgYQAcgRAzgCQA0gDAIARQgrAXgyBNQguBFgMAxQgJAYg6AHIgTABQgrAAgDgeg");
	this.shape_187.setTransform(63.7,0.1,0.127,0.127,-37.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#777777").s().p("AiWBoIAAgBIABgBQAKgsAxhKQA0hPAmgXQAYgQA1gEQA7gFAMAWIADAGIgHAEQgoAWgyBLQguBEgLAxQgKAdhBAHIgSABQgyAAgEgkg");
	this.shape_188.setTransform(63.7,0.1,0.127,0.127,-37.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_189.setTransform(62.1,0.2,0.127,0.127,-37.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_190.setTransform(62.2,0.7,0.127,0.127,-37.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_191.setTransform(62.5,2.7,0.127,0.127,-37.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_192.setTransform(62.4,1.1,0.127,0.127,-37.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_193.setTransform(62.4,1.1,0.127,0.127,-37.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#EAE1D3").s().p("AgfAsQgZgJgdgaQgegZgLgbQAgAQA0gCQAwgBAqgRQAVgHAlAaQAmAZgeARQgfATgqAKQgaAGgRAAQgRAAgMgFg");
	this.shape_194.setTransform(8.8,36.1,0.127,0.127,84);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#A58E6D").s().p("Ag2BOQglgJgsg0QgsgxAKgUQAwAkBYgOQBPgMAggkQAVgLAmARQAqATgIAfQgQAkhKAnQg5AegqAAQgTAAgRgFg");
	this.shape_195.setTransform(9,36.3,0.127,0.127,84);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#777777").s().p("Ag1BVQghgHgyg2Qg0g3AMgbIADgHIAHAFQAtAiBWgMQBPgMAggiQAZgOApATQAsAUgIAmIAAABIgBABQgTAphOAoQg5AdgpAAQgTAAgQgGg");
	this.shape_196.setTransform(9,36.3,0.127,0.127,84);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#F7E9D2").s().p("AA5A0QgqgFgVgOQgcgSgfhCQAmAVApAJQANAFAZAhQAYAjgRAAIgCAAg");
	this.shape_197.setTransform(7.5,36.9,0.127,0.127,61);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#F7E9D2").s().p("AACAfQgUgJgWgSQgYgSgMgVQAhAMAzgFQAPABAgAbQAiAcgTACQgXAGgRAAQgQAAgMgFg");
	this.shape_198.setTransform(6.6,38.9,0.127,0.127,61);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#EAE1D3").s().p("AAWBAQgrgFgZgQQgWgNgVghQgSgegKgfQAiAXAuAMQAuAMAsgFQAWACAdAhQAeAlghAIQgZAHgdAAIgZgBg");
	this.shape_199.setTransform(7.8,37.3,0.127,0.127,61);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#EAE1D3").s().p("AgfAsQgZgJgdgaQgegZgLgbQAgAQA0gCQAwgBAqgRQAVgHAlAaQAmAZgeARQgfATgqAKQgaAGgRAAQgRAAgMgFg");
	this.shape_200.setTransform(6.9,39.2,0.127,0.127,61);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#595959").s().p("AAEgFQgXgYgWgGIAPgHQARgCAcAaQAhAagOAYIgRALQANgVgegbg");
	this.shape_201.setTransform(8.8,38.9,0.127,0.127,61);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#A58E6D").s().p("AhRBBQgggTgeg6Qgeg7ANgQQAnAsBXAMQBQALApgZQAWgDAhAeQAjAegRAcQgYAdhSAOQgcAFgYAAQgzAAgggXg");
	this.shape_202.setTransform(8.1,37.6,0.127,0.127,61);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#A58E6D").s().p("Ag2BOQglgJgsg0QgsgxAKgUQAwAkBYgOQBPgMAggkQAVgLAmARQAqATgIAfQgQAkhKAnQg5AegqAAQgTAAgRgFg");
	this.shape_203.setTransform(7.2,39.4,0.127,0.127,61);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#777777").s().p("AhSBLQgegQgig9QglhDASgWIAEgGIAFAGQAlAqBVANQBOAMApgYQAcgEAjAgQAlAggUAiIAAABIgBAAQgcAihWANQgaAEgWAAQg1AAgfgXg");
	this.shape_204.setTransform(8.1,37.6,0.127,0.127,61);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#777777").s().p("Ag1BVQghgHgyg2Qg0g3AMgbIADgHIAHAFQAtAiBWgMQBPgMAggiQAZgOApATQAsAUgIAmIAAABIgBABQgTAphOAoQg5AdgpAAQgTAAgQgGg");
	this.shape_205.setTransform(7.2,39.4,0.127,0.127,61);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#F7E9D2").s().p("AA5A0QgqgFgVgOQgcgSgfhCQAmAVApAJQANAFAZAhQAYAjgRAAIgCAAg");
	this.shape_206.setTransform(6.5,40.8,0.127,0.127,16);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#F7E9D2").s().p("AACAfQgUgJgWgSQgYgSgMgVQAhAMAzgFQAPABAgAbQAiAcgTACQgXAGgRAAQgQAAgMgFg");
	this.shape_207.setTransform(7.3,42.9,0.127,0.127,16);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#F7E9D2").s().p("AgjATQgagLgUgQQAygCAggRQAOgHAoASQAnAQgSAJQgeASgiACIgGABQgSAAgXgLg");
	this.shape_208.setTransform(8.3,44.2,0.127,0.127,22.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#EAE1D3").s().p("AAWBAQgrgFgZgQQgWgNgVghQgSgegKgfQAiAXAuAMQAuAMAsgFQAWACAdAhQAeAlghAIQgZAHgdAAIgZgBg");
	this.shape_209.setTransform(7,40.9,0.127,0.127,16);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#EAE1D3").s().p("AgfAsQgZgJgdgaQgegZgLgbQAgAQA0gCQAwgBAqgRQAVgHAlAaQAmAZgeARQgfATgqAKQgaAGgRAAQgRAAgMgFg");
	this.shape_210.setTransform(7.7,42.9,0.127,0.127,16);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#EAE1D3").s().p("AgKA8QgbACgkgSQgggQgWgXQAmAFAwgQQAtgRAjgfQAUgKApAKQArAMgYAbQgaAbgkAYQgmAYgXAAIgGAAg");
	this.shape_211.setTransform(9,44.4,0.127,0.127,16);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#595959").s().p("AAEgFQgXgYgWgGIAPgHQARgCAcAaQAhAagOAYIgRALQANgVgegbg");
	this.shape_212.setTransform(8.8,41.4,0.127,0.127,16);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#595959").s().p("AAEgGQgdgQgWAEIANgMQAQgJAhAQQAmARgGAYIgNAQQAGgYgkgQg");
	this.shape_213.setTransform(9.7,42.7,0.127,0.127,16);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#595959").s().p("AADgEQgigGgTAKIAJgOQAMgOAmAEQApAFABAZIgIAUQgBgZgngFg");
	this.shape_214.setTransform(10.9,43.6,0.127,0.127,16);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#A58E6D").s().p("AhRBBQgggTgeg6Qgeg7ANgQQAnAsBXAMQBQALApgZQAWgDAhAeQAjAegRAcQgYAdhSAOQgcAFgYAAQgzAAgggXg");
	this.shape_215.setTransform(7.4,40.9,0.127,0.127,16);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#A58E6D").s().p("Ag2BOQglgJgsg0QgsgxAKgUQAwAkBYgOQBPgMAggkQAVgLAmARQAqATgIAfQgQAkhKAnQg5AegqAAQgTAAgRgFg");
	this.shape_216.setTransform(8.1,42.8,0.127,0.127,16);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#A58E6D").s().p("AhyBHQg5gkADgWQA5AUBRgnQBIgmAWgtQAPgRAsAFQAuAFAAAhQgHApg8A6QhEBDg2AAIgIAAQgjAAgzggg");
	this.shape_217.setTransform(9.2,44.1,0.127,0.127,16);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#777777").s().p("AhSBLQgegQgig9QglhDASgWIAEgGIAFAGQAlAqBVANQBOAMApgYQAcgEAjAgQAlAggUAiIAAABIgBAAQgcAihWANQgaAEgWAAQg1AAgfgXg");
	this.shape_218.setTransform(7.4,40.9,0.127,0.127,16);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#777777").s().p("Ag1BVQghgHgyg2Qg0g3AMgbIADgHIAHAFQAtAiBWgMQBPgMAggiQAZgOApATQAsAUgIAmIAAABIgBABQgTAphOAoQg5AdgpAAQgTAAgQgGg");
	this.shape_219.setTransform(8.1,42.8,0.127,0.127,16);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#777777").s().p("AhxBPQhDgnAFgeIAAgHIAIADQA2ATBPglQBHgkAXgtQATgVAuAGQAyAGABAmIAAACIAAABQgJAvhAA8QhFBBgzgBIgKAAQgfABg3ggg");
	this.shape_220.setTransform(9.2,44.1,0.127,0.127,16);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_221.setTransform(61,1.3,0.127,0.127,-37.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_222.setTransform(61.1,1.8,0.127,0.127,-37.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_223.setTransform(61.4,3.8,0.127,0.127,-37.5);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_224.setTransform(61.3,2.2,0.127,0.127,-37.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_225.setTransform(61.3,2.2,0.127,0.127,-37.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#F7E9D2").s().p("Ag2AWQAYggARgMQAXgRAxACQgXAYgaAmQgHANgiAAIgCAAQghAAAMgQg");
	this.shape_226.setTransform(59.8,2.2,0.127,0.127,-37.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#EAE1D3").s().p("AhVAzQA2hiAfgSQAQgLAcgFQAZgDAWAEQgXAWgbAnQgbAlgTArQgKAVgsABIgCAAQgpAAARggg");
	this.shape_227.setTransform(59.9,2.7,0.127,0.127,-37.5);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#595959").s().p("Ag0AAIAGgVQAEAZAqgEQAngCAOgRIgEARQgGARgsAGIgQABQggAAgDgWg");
	this.shape_228.setTransform(60.2,4.7,0.127,0.127,-37.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#A58E6D").s().p("Ah8BmQAIgnAphHQAthQAhgYQAZgRAsgCQAugCAGARQglAXgtBMQgpBFgKAxQgHAXgzAHIgQABQgmAAgDgeg");
	this.shape_229.setTransform(60.1,3.2,0.127,0.127,-37.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#777777").s().p("AiCBnIgBgBIABgBQAHgsAthKQAthOAhgXQAWgQAugDQA0gFAKAXIACAGIgFAEQgjAVgtBLQgpBEgJAwQgKAdg4AGIgPABQgrAAgDgkg");
	this.shape_230.setTransform(60.1,3.2,0.127,0.127,-37.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#F7E9D2").s().p("Ag7AWQAZgfATgMQAZgSA2ACQgbAagaAkQgIANglAAIgCAAQgkAAANgQg");
	this.shape_231.setTransform(58.6,3.2,0.127,0.127,-37.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#EAE1D3").s().p("AhcAzQA6hiAigSQARgMAfgEQAbgDAYAEQgZAVgeAoQgcAlgVArQgLAUgwACIgEAAQgrAAATggg");
	this.shape_232.setTransform(58.7,3.7,0.127,0.127,-37.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#595959").s().p("Ag4AAIAGgVQAEAZAugEQArgCAOgSIgEASQgGAQgwAHIgSABQgiAAgDgWg");
	this.shape_233.setTransform(58.9,5.7,0.127,0.127,-37.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#A58E6D").s().p("AiGBnQAIgnAshHQAwhSAkgXQAbgRAxgCQAxgCAIAQQgoAXgxBNQgtBFgKAxQgHAXg5AHIgRABQgpAAgDgdg");
	this.shape_234.setTransform(58.8,4.1,0.127,0.127,-37.5);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#777777").s().p("AiOBoIAAgBIAAgBQAJgtAwhJQAxhPAjgXQAYgQAzgEQA4gEAKAWIAEAGIgGAEQgnAWgwBLQgtBEgJAwQgKAdg+AHIgRABQgvAAgDgkg");
	this.shape_235.setTransform(58.8,4.1,0.127,0.127,-37.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#F7E9D2").s().p("Ag+AXQAbggATgMQAbgRA4ABQgcAagbAkQgJANgmABIgDAAQgmAAAOgQg");
	this.shape_236.setTransform(57.2,4.2,0.127,0.127,-37.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#EAE1D3").s().p("AhgAzQAXgmAXgcQAegoAUgKQASgMAggEQAdgEAYAEQgaAVgfApQgdAlgWAsQgMAUgyACIgEAAQgtAAAUghg");
	this.shape_237.setTransform(57.3,4.8,0.127,0.127,-37.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#595959").s().p("Ag8AAIAHgVQAEAZAxgEQAtgCAQgSIgFASQgHAQgyAHIgTABQgkAAgEgWg");
	this.shape_238.setTransform(57.5,6.8,0.127,0.127,-37.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#A58E6D").s().p("AiNBnQAJgmAuhIQAzhRAmgYQAcgRAzgCQA0gDAIARQgrAXgyBNQguBFgMAxQgJAYg6AHIgTABQgrAAgDgeg");
	this.shape_239.setTransform(57.5,5.2,0.127,0.127,-37.5);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#777777").s().p("AiWBoIAAgBIABgBQAKgsAxhKQA0hPAmgXQAYgQA1gEQA7gFAMAWIADAGIgHAEQgoAWgyBLQguBEgLAxQgKAdhBAHIgSABQgyAAgEgkg");
	this.shape_240.setTransform(57.5,5.2,0.127,0.127,-37.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_241.setTransform(55.9,5.3,0.127,0.127,-37.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_242.setTransform(56,5.8,0.127,0.127,-37.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_243.setTransform(56.3,7.8,0.127,0.127,-37.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_244.setTransform(56.1,6.2,0.127,0.127,-37.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_245.setTransform(56.1,6.2,0.127,0.127,-37.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#F7E9D2").s().p("Ag2AWQAYggARgMQAXgRAxACQgXAYgaAmQgHANgiAAIgCAAQghAAAMgQg");
	this.shape_246.setTransform(54.6,6.2,0.127,0.127,-37.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#EAE1D3").s().p("AhVAzQA2hiAfgSQAQgLAcgFQAZgDAWAEQgXAWgbAnQgbAlgTArQgKAVgsABIgCAAQgpAAARggg");
	this.shape_247.setTransform(54.8,6.7,0.127,0.127,-37.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#595959").s().p("Ag0AAIAGgVQAEAZAqgEQAngCAOgRIgEARQgGARgsAGIgQABQggAAgDgWg");
	this.shape_248.setTransform(55.1,8.7,0.127,0.127,-37.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#A58E6D").s().p("Ah8BmQAIgnAphHQAthQAhgYQAZgRAsgCQAugCAGARQglAXgtBMQgpBFgKAxQgHAXgzAHIgQABQgmAAgDgeg");
	this.shape_249.setTransform(54.9,7.2,0.127,0.127,-37.5);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#777777").s().p("AiCBnIgBgBIABgBQAHgsAthKQAthOAhgXQAWgQAugDQA0gFAKAXIACAGIgFAEQgjAVgtBLQgpBEgJAwQgKAdg4AGIgPABQgrAAgDgkg");
	this.shape_250.setTransform(54.9,7.2,0.127,0.127,-37.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#F7E9D2").s().p("Ag7AWQAZgfATgMQAZgSA2ACQgbAagaAkQgIANglAAIgCAAQgkAAANgQg");
	this.shape_251.setTransform(53.4,7.2,0.127,0.127,-37.5);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#EAE1D3").s().p("AhcAzQA6hiAigSQARgMAfgEQAbgDAYAEQgZAVgeAoQgcAlgVArQgLAUgwACIgEAAQgrAAATggg");
	this.shape_252.setTransform(53.5,7.7,0.127,0.127,-37.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#595959").s().p("Ag4AAIAGgVQAEAZAugEQArgCAOgSIgEASQgGAQgwAHIgSABQgiAAgDgWg");
	this.shape_253.setTransform(53.8,9.7,0.127,0.127,-37.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#A58E6D").s().p("AiGBnQAIgnAshHQAwhSAkgXQAbgRAxgCQAxgCAIAQQgoAXgxBNQgtBFgKAxQgHAXg5AHIgRABQgpAAgDgdg");
	this.shape_254.setTransform(53.7,8.1,0.127,0.127,-37.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#777777").s().p("AiOBoIAAgBIAAgBQAJgtAwhJQAxhPAjgXQAYgQAzgEQA4gEAKAWIAEAGIgGAEQgnAWgwBLQgtBEgJAwQgKAdg+AHIgRABQgvAAgDgkg");
	this.shape_255.setTransform(53.7,8.1,0.127,0.127,-37.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#F7E9D2").s().p("Ag+AXQAbggATgMQAbgRA4ABQgcAagbAkQgJANgmABIgDAAQgmAAAOgQg");
	this.shape_256.setTransform(52.1,8.2,0.127,0.127,-37.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#EAE1D3").s().p("AhgAzQAXgmAXgcQAegoAUgKQASgMAggEQAdgEAYAEQgaAVgfApQgdAlgWAsQgMAUgyACIgEAAQgtAAAUghg");
	this.shape_257.setTransform(52.2,8.8,0.127,0.127,-37.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#595959").s().p("Ag8AAIAHgVQAEAZAxgEQAtgCAQgSIgFASQgHAQgyAHIgTABQgkAAgEgWg");
	this.shape_258.setTransform(52.4,10.8,0.127,0.127,-37.5);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#A58E6D").s().p("AiNBnQAJgmAuhIQAzhRAmgYQAcgRAzgCQA0gDAIARQgrAXgyBNQguBFgMAxQgJAYg6AHIgTABQgrAAgDgeg");
	this.shape_259.setTransform(52.3,9.2,0.127,0.127,-37.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#777777").s().p("AiWBoIAAgBIABgBQAKgsAxhKQA0hPAmgXQAYgQA1gEQA7gFAMAWIADAGIgHAEQgoAWgyBLQguBEgLAxQgKAdhBAHIgSABQgyAAgEgkg");
	this.shape_260.setTransform(52.3,9.2,0.127,0.127,-37.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_261.setTransform(50.7,9.4,0.127,0.127,-37.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_262.setTransform(50.8,9.9,0.127,0.127,-37.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_263.setTransform(51.1,11.8,0.127,0.127,-37.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_264.setTransform(50.9,10.3,0.127,0.127,-37.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_265.setTransform(50.9,10.3,0.127,0.127,-37.5);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#F7E9D2").s().p("Ag2AWQAYggARgMQAXgRAxACQgXAYgaAmQgHANgiAAIgCAAQghAAAMgQg");
	this.shape_266.setTransform(49.4,10.3,0.127,0.127,-37.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#EAE1D3").s().p("AhVAzQA2hiAfgSQAQgLAcgFQAZgDAWAEQgXAWgbAnQgbAlgTArQgKAVgsABIgCAAQgpAAARggg");
	this.shape_267.setTransform(49.6,10.8,0.127,0.127,-37.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#595959").s().p("Ag0AAIAGgVQAEAZAqgEQAngCAOgRIgEARQgGARgsAGIgQABQggAAgDgWg");
	this.shape_268.setTransform(49.9,12.8,0.127,0.127,-37.5);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#A58E6D").s().p("Ah8BmQAIgnAphHQAthQAhgYQAZgRAsgCQAugCAGARQglAXgtBMQgpBFgKAxQgHAXgzAHIgQABQgmAAgDgeg");
	this.shape_269.setTransform(49.7,11.2,0.127,0.127,-37.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#777777").s().p("AiCBnIgBgBIABgBQAHgsAthKQAthOAhgXQAWgQAugDQA0gFAKAXIACAGIgFAEQgjAVgtBLQgpBEgJAwQgKAdg4AGIgPABQgrAAgDgkg");
	this.shape_270.setTransform(49.7,11.2,0.127,0.127,-37.5);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#F7E9D2").s().p("Ag7AWQAZgfATgMQAZgSA2ACQgbAagaAkQgIANglAAIgCAAQgkAAANgQg");
	this.shape_271.setTransform(48.2,11.2,0.127,0.127,-37.5);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#EAE1D3").s().p("AhcAzQA6hiAigSQARgMAfgEQAbgDAYAEQgZAVgeAoQgcAlgVArQgLAUgwACIgEAAQgrAAATggg");
	this.shape_272.setTransform(48.3,11.8,0.127,0.127,-37.5);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#595959").s().p("Ag4AAIAGgVQAEAZAugEQArgCAOgSIgEASQgGAQgwAHIgSABQgiAAgDgWg");
	this.shape_273.setTransform(48.5,13.8,0.127,0.127,-37.5);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#A58E6D").s().p("AiGBnQAIgnAshHQAwhSAkgXQAbgRAxgCQAxgCAIAQQgoAXgxBNQgtBFgKAxQgHAXg5AHIgRABQgpAAgDgdg");
	this.shape_274.setTransform(48.5,12.2,0.127,0.127,-37.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#777777").s().p("AiOBoIAAgBIAAgBQAJgtAwhJQAxhPAjgXQAYgQAzgEQA4gEAKAWIAEAGIgGAEQgnAWgwBLQgtBEgJAwQgKAdg+AHIgRABQgvAAgDgkg");
	this.shape_275.setTransform(48.5,12.2,0.127,0.127,-37.5);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#F7E9D2").s().p("Ag+AXQAbggATgMQAbgRA4ABQgcAagbAkQgJANgmABIgDAAQgmAAAOgQg");
	this.shape_276.setTransform(46.9,12.3,0.127,0.127,-37.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#EAE1D3").s().p("AhgAzQAXgmAXgcQAegoAUgKQASgMAggEQAdgEAYAEQgaAVgfApQgdAlgWAsQgMAUgyACIgEAAQgtAAAUghg");
	this.shape_277.setTransform(47,12.8,0.127,0.127,-37.5);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#595959").s().p("Ag8AAIAHgVQAEAZAxgEQAtgCAQgSIgFASQgHAQgyAHIgTABQgkAAgEgWg");
	this.shape_278.setTransform(47.2,14.9,0.127,0.127,-37.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#A58E6D").s().p("AiNBnQAJgmAuhIQAzhRAmgYQAcgRAzgCQA0gDAIARQgrAXgyBNQguBFgMAxQgJAYg6AHIgTABQgrAAgDgeg");
	this.shape_279.setTransform(47.1,13.3,0.127,0.127,-37.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#777777").s().p("AiWBoIAAgBIABgBQAKgsAxhKQA0hPAmgXQAYgQA1gEQA7gFAMAWIADAGIgHAEQgoAWgyBLQguBEgLAxQgKAdhBAHIgSABQgyAAgEgkg");
	this.shape_280.setTransform(47.1,13.3,0.127,0.127,-37.5);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_281.setTransform(45.5,13.4,0.127,0.127,-37.5);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_282.setTransform(45.6,13.9,0.127,0.127,-37.5);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_283.setTransform(45.9,15.8,0.127,0.127,-37.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_284.setTransform(45.8,14.3,0.127,0.127,-37.5);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_285.setTransform(45.8,14.3,0.127,0.127,-37.5);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#EAE1D3").s().p("AhVAzQA2hiAfgSQAQgLAcgFQAZgDAWAEQgXAWgbAnQgbAlgTArQgKAVgsABIgCAAQgpAAARggg");
	this.shape_286.setTransform(44.4,14.8,0.127,0.127,-37.5);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#595959").s().p("Ag0AAIAGgVQAEAZAqgEQAngCAOgRIgEARQgGARgsAGIgQABQggAAgDgWg");
	this.shape_287.setTransform(44.7,16.8,0.127,0.127,-37.5);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#A58E6D").s().p("Ah8BmQAIgnAphHQAthQAhgYQAZgRAsgCQAugCAGARQglAXgtBMQgpBFgKAxQgHAXgzAHIgQABQgmAAgDgeg");
	this.shape_288.setTransform(44.6,15.2,0.127,0.127,-37.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#777777").s().p("AiCBnIgBgBIABgBQAHgsAthKQAthOAhgXQAWgQAugDQA0gFAKAXIACAGIgFAEQgjAVgtBLQgpBEgJAwQgKAdg4AGIgPABQgrAAgDgkg");
	this.shape_289.setTransform(44.6,15.2,0.127,0.127,-37.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_290.setTransform(43.1,15.3,0.127,0.127,-37.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_291.setTransform(43.2,15.8,0.127,0.127,-37.5);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_292.setTransform(43.5,17.8,0.127,0.127,-37.5);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_293.setTransform(43.4,16.2,0.127,0.127,-37.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_294.setTransform(43.4,16.2,0.127,0.127,-37.5);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#F7E9D2").s().p("Ag2AWQAYggARgMQAXgRAxACQgXAYgaAmQgHANgiAAIgCAAQghAAAMgQg");
	this.shape_295.setTransform(41.9,16.2,0.127,0.127,-37.5);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#EAE1D3").s().p("AhVAzQA2hiAfgSQAQgLAcgFQAZgDAWAEQgXAWgbAnQgbAlgTArQgKAVgsABIgCAAQgpAAARggg");
	this.shape_296.setTransform(42,16.7,0.127,0.127,-37.5);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#595959").s().p("Ag0AAIAGgVQAEAZAqgEQAngCAOgRIgEARQgGARgsAGIgQABQggAAgDgWg");
	this.shape_297.setTransform(42.3,18.7,0.127,0.127,-37.5);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#A58E6D").s().p("Ah8BmQAIgnAphHQAthQAhgYQAZgRAsgCQAugCAGARQglAXgtBMQgpBFgKAxQgHAXgzAHIgQABQgmAAgDgeg");
	this.shape_298.setTransform(42.2,17.2,0.127,0.127,-37.5);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#777777").s().p("AiCBnIgBgBIABgBQAHgsAthKQAthOAhgXQAWgQAugDQA0gFAKAXIACAGIgFAEQgjAVgtBLQgpBEgJAwQgKAdg4AGIgPABQgrAAgDgkg");
	this.shape_299.setTransform(42.2,17.2,0.127,0.127,-37.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#F7E9D2").s().p("Ag7AWQAZgfATgMQAZgSA2ACQgbAagaAkQgIANglAAIgCAAQgkAAANgQg");
	this.shape_300.setTransform(40.7,17.2,0.127,0.127,-37.5);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#EAE1D3").s().p("AhcAzQA6hiAigSQARgMAfgEQAbgDAYAEQgZAVgeAoQgcAlgVArQgLAUgwACIgEAAQgrAAATggg");
	this.shape_301.setTransform(40.8,17.7,0.127,0.127,-37.5);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#595959").s().p("Ag4AAIAGgVQAEAZAugEQArgCAOgSIgEASQgGAQgwAHIgSABQgiAAgDgWg");
	this.shape_302.setTransform(41,19.7,0.127,0.127,-37.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#A58E6D").s().p("AiGBnQAIgnAshHQAwhSAkgXQAbgRAxgCQAxgCAIAQQgoAXgxBNQgtBFgKAxQgHAXg5AHIgRABQgpAAgDgdg");
	this.shape_303.setTransform(40.9,18.1,0.127,0.127,-37.5);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#777777").s().p("AiOBoIAAgBIAAgBQAJgtAwhJQAxhPAjgXQAYgQAzgEQA4gEAKAWIAEAGIgGAEQgnAWgwBLQgtBEgJAwQgKAdg+AHIgRABQgvAAgDgkg");
	this.shape_304.setTransform(40.9,18.1,0.127,0.127,-37.5);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#F7E9D2").s().p("Ag+AXQAbggATgMQAbgRA4ABQgcAagbAkQgJANgmABIgDAAQgmAAAOgQg");
	this.shape_305.setTransform(39.3,18.2,0.127,0.127,-37.5);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#EAE1D3").s().p("AhgAzQAXgmAXgcQAegoAUgKQASgMAggEQAdgEAYAEQgaAVgfApQgdAlgWAsQgMAUgyACIgEAAQgtAAAUghg");
	this.shape_306.setTransform(39.4,18.8,0.127,0.127,-37.5);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#595959").s().p("Ag8AAIAHgVQAEAZAxgEQAtgCAQgSIgFASQgHAQgyAHIgTABQgkAAgEgWg");
	this.shape_307.setTransform(39.6,20.8,0.127,0.127,-37.5);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#A58E6D").s().p("AiNBnQAJgmAuhIQAzhRAmgYQAcgRAzgCQA0gDAIARQgrAXgyBNQguBFgMAxQgJAYg6AHIgTABQgrAAgDgeg");
	this.shape_308.setTransform(39.6,19.2,0.127,0.127,-37.5);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#777777").s().p("AiWBoIAAgBIABgBQAKgsAxhKQA0hPAmgXQAYgQA1gEQA7gFAMAWIADAGIgHAEQgoAWgyBLQguBEgLAxQgKAdhBAHIgSABQgyAAgEgkg");
	this.shape_309.setTransform(39.6,19.2,0.127,0.127,-37.5);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_310.setTransform(38,19.3,0.127,0.127,-37.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_311.setTransform(38.1,19.8,0.127,0.127,-37.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_312.setTransform(38.4,21.8,0.127,0.127,-37.5);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_313.setTransform(38.2,20.2,0.127,0.127,-37.5);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_314.setTransform(38.2,20.2,0.127,0.127,-37.5);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#F7E9D2").s().p("Ag2AWQAYggARgMQAXgRAxACQgXAYgaAmQgHANgiAAIgCAAQghAAAMgQg");
	this.shape_315.setTransform(36.7,20.2,0.127,0.127,-37.5);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#EAE1D3").s().p("AhVAzQA2hiAfgSQAQgLAcgFQAZgDAWAEQgXAWgbAnQgbAlgTArQgKAVgsABIgCAAQgpAAARggg");
	this.shape_316.setTransform(36.9,20.7,0.127,0.127,-37.5);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#595959").s().p("Ag0AAIAGgVQAEAZAqgEQAngCAOgRIgEARQgGARgsAGIgQABQggAAgDgWg");
	this.shape_317.setTransform(37.2,22.7,0.127,0.127,-37.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#A58E6D").s().p("Ah8BmQAIgnAphHQAthQAhgYQAZgRAsgCQAugCAGARQglAXgtBMQgpBFgKAxQgHAXgzAHIgQABQgmAAgDgeg");
	this.shape_318.setTransform(37,21.2,0.127,0.127,-37.5);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#777777").s().p("AiCBnIgBgBIABgBQAHgsAthKQAthOAhgXQAWgQAugDQA0gFAKAXIACAGIgFAEQgjAVgtBLQgpBEgJAwQgKAdg4AGIgPABQgrAAgDgkg");
	this.shape_319.setTransform(37,21.2,0.127,0.127,-37.5);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#F7E9D2").s().p("Ag7AWQAZgfATgMQAZgSA2ACQgbAagaAkQgIANglAAIgCAAQgkAAANgQg");
	this.shape_320.setTransform(35.5,21.2,0.127,0.127,-37.5);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#EAE1D3").s().p("AhcAzQA6hiAigSQARgMAfgEQAbgDAYAEQgZAVgeAoQgcAlgVArQgLAUgwACIgEAAQgrAAATggg");
	this.shape_321.setTransform(35.6,21.7,0.127,0.127,-37.5);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#595959").s().p("Ag4AAIAGgVQAEAZAugEQArgCAOgSIgEASQgGAQgwAHIgSABQgiAAgDgWg");
	this.shape_322.setTransform(35.9,23.7,0.127,0.127,-37.5);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#A58E6D").s().p("AiGBnQAIgnAshHQAwhSAkgXQAbgRAxgCQAxgCAIAQQgoAXgxBNQgtBFgKAxQgHAXg5AHIgRABQgpAAgDgdg");
	this.shape_323.setTransform(35.8,22.1,0.127,0.127,-37.5);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#777777").s().p("AiOBoIAAgBIAAgBQAJgtAwhJQAxhPAjgXQAYgQAzgEQA4gEAKAWIAEAGIgGAEQgnAWgwBLQgtBEgJAwQgKAdg+AHIgRABQgvAAgDgkg");
	this.shape_324.setTransform(35.8,22.1,0.127,0.127,-37.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#F7E9D2").s().p("Ag+AXQAbggATgMQAbgRA4ABQgcAagbAkQgJANgmABIgDAAQgmAAAOgQg");
	this.shape_325.setTransform(34.2,22.2,0.127,0.127,-37.5);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#EAE1D3").s().p("AhgAzQAXgmAXgcQAegoAUgKQASgMAggEQAdgEAYAEQgaAVgfApQgdAlgWAsQgMAUgyACIgEAAQgtAAAUghg");
	this.shape_326.setTransform(34.3,22.8,0.127,0.127,-37.5);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#595959").s().p("Ag8AAIAHgVQAEAZAxgEQAtgCAQgSIgFASQgHAQgyAHIgTABQgkAAgEgWg");
	this.shape_327.setTransform(34.5,24.8,0.127,0.127,-37.5);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#A58E6D").s().p("AiNBnQAJgmAuhIQAzhRAmgYQAcgRAzgCQA0gDAIARQgrAXgyBNQguBFgMAxQgJAYg6AHIgTABQgrAAgDgeg");
	this.shape_328.setTransform(34.4,23.2,0.127,0.127,-37.5);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#777777").s().p("AiWBoIAAgBIABgBQAKgsAxhKQA0hPAmgXQAYgQA1gEQA7gFAMAWIADAGIgHAEQgoAWgyBLQguBEgLAxQgKAdhBAHIgSABQgyAAgEgkg");
	this.shape_329.setTransform(34.4,23.2,0.127,0.127,-37.5);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_330.setTransform(32.8,23.4,0.127,0.127,-37.5);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_331.setTransform(32.9,23.9,0.127,0.127,-37.5);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_332.setTransform(33.2,25.8,0.127,0.127,-37.5);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_333.setTransform(33,24.3,0.127,0.127,-37.5);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_334.setTransform(33,24.3,0.127,0.127,-37.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#F7E9D2").s().p("Ag2AWQAYggARgMQAXgRAxACQgXAYgaAmQgHANgiAAIgCAAQghAAAMgQg");
	this.shape_335.setTransform(31.5,24.3,0.127,0.127,-37.5);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#EAE1D3").s().p("AhVAzQA2hiAfgSQAQgLAcgFQAZgDAWAEQgXAWgbAnQgbAlgTArQgKAVgsABIgCAAQgpAAARggg");
	this.shape_336.setTransform(31.7,24.8,0.127,0.127,-37.5);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#595959").s().p("Ag0AAIAGgVQAEAZAqgEQAngCAOgRIgEARQgGARgsAGIgQABQggAAgDgWg");
	this.shape_337.setTransform(32,26.8,0.127,0.127,-37.5);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#A58E6D").s().p("Ah8BmQAIgnAphHQAthQAhgYQAZgRAsgCQAugCAGARQglAXgtBMQgpBFgKAxQgHAXgzAHIgQABQgmAAgDgeg");
	this.shape_338.setTransform(31.8,25.2,0.127,0.127,-37.5);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#777777").s().p("AiCBnIgBgBIABgBQAHgsAthKQAthOAhgXQAWgQAugDQA0gFAKAXIACAGIgFAEQgjAVgtBLQgpBEgJAwQgKAdg4AGIgPABQgrAAgDgkg");
	this.shape_339.setTransform(31.8,25.2,0.127,0.127,-37.5);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#F7E9D2").s().p("Ag7AWQAZgfATgMQAZgSA2ACQgbAagaAkQgIANglAAIgCAAQgkAAANgQg");
	this.shape_340.setTransform(30.3,25.2,0.127,0.127,-37.5);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#EAE1D3").s().p("AhcAzQA6hiAigSQARgMAfgEQAbgDAYAEQgZAVgeAoQgcAlgVArQgLAUgwACIgEAAQgrAAATggg");
	this.shape_341.setTransform(30.4,25.8,0.127,0.127,-37.5);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#595959").s().p("Ag4AAIAGgVQAEAZAugEQArgCAOgSIgEASQgGAQgwAHIgSABQgiAAgDgWg");
	this.shape_342.setTransform(30.6,27.8,0.127,0.127,-37.5);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#A58E6D").s().p("AiGBnQAIgnAshHQAwhSAkgXQAbgRAxgCQAxgCAIAQQgoAXgxBNQgtBFgKAxQgHAXg5AHIgRABQgpAAgDgdg");
	this.shape_343.setTransform(30.6,26.2,0.127,0.127,-37.5);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#777777").s().p("AiOBoIAAgBIAAgBQAJgtAwhJQAxhPAjgXQAYgQAzgEQA4gEAKAWIAEAGIgGAEQgnAWgwBLQgtBEgJAwQgKAdg+AHIgRABQgvAAgDgkg");
	this.shape_344.setTransform(30.6,26.2,0.127,0.127,-37.5);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#F7E9D2").s().p("Ag+AXQAbggATgMQAbgRA4ABQgcAagbAkQgJANgmABIgDAAQgmAAAOgQg");
	this.shape_345.setTransform(29,26.3,0.127,0.127,-37.5);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#EAE1D3").s().p("AhgAzQAXgmAXgcQAegoAUgKQASgMAggEQAdgEAYAEQgaAVgfApQgdAlgWAsQgMAUgyACIgEAAQgtAAAUghg");
	this.shape_346.setTransform(29.1,26.8,0.127,0.127,-37.5);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#595959").s().p("Ag8AAIAHgVQAEAZAxgEQAtgCAQgSIgFASQgHAQgyAHIgTABQgkAAgEgWg");
	this.shape_347.setTransform(29.3,28.9,0.127,0.127,-37.5);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#A58E6D").s().p("AiNBnQAJgmAuhIQAzhRAmgYQAcgRAzgCQA0gDAIARQgrAXgyBNQguBFgMAxQgJAYg6AHIgTABQgrAAgDgeg");
	this.shape_348.setTransform(29.2,27.3,0.127,0.127,-37.5);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#777777").s().p("AiWBoIAAgBIABgBQAKgsAxhKQA0hPAmgXQAYgQA1gEQA7gFAMAWIADAGIgHAEQgoAWgyBLQguBEgLAxQgKAdhBAHIgSABQgyAAgEgkg");
	this.shape_349.setTransform(29.2,27.3,0.127,0.127,-37.5);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#F7E9D2").s().p("Ag1AVQAYggAQgKQAWgRAwACQgXAYgYAlQgIANggAAQgjAAAMgRg");
	this.shape_350.setTransform(27.6,27.4,0.127,0.127,-37.5);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#EAE1D3").s().p("AhTAyQAVgmATgcQAbgnAQgJQAPgMAcgEQAZgDAVAEQgXAVgaAoQgaAlgTAqQgKAUgrABIgCAAQgoAAARggg");
	this.shape_351.setTransform(27.7,27.9,0.127,0.127,-37.5);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#595959").s().p("AgzAAIAGgVQADAZAqgEQAngBANgSIgEASQgGAQgrAGIgPABQggAAgDgWg");
	this.shape_352.setTransform(28,29.8,0.127,0.127,-37.5);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#A58E6D").s().p("Ah5BkQAIgmAohGQAshQAggXQAYgRAsgCQAsgCAHARQgkAXgsBMQgpBEgJAwQgIAYgyAGIgOABQgnAAgCgfg");
	this.shape_353.setTransform(27.9,28.3,0.127,0.127,-37.5);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#777777").s().p("AiABlIAAgCQAIgsAshIQAshOAggWQAWgQAtgDQAygFAKAXIADAGIgGADQgiAWgsBKQgoBDgJAwQgKAdg3AGIgOABQgsAAgCglg");
	this.shape_354.setTransform(27.9,28.3,0.127,0.127,-37.5);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#F7E9D2").s().p("Ag2AWQAYggARgMQAXgRAxACQgXAYgaAmQgHANgiAAIgCAAQghAAAMgQg");
	this.shape_355.setTransform(26.4,28.3,0.127,0.127,-37.5);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#EAE1D3").s().p("AhVAzQA2hiAfgSQAQgLAcgFQAZgDAWAEQgXAWgbAnQgbAlgTArQgKAVgsABIgCAAQgpAAARggg");
	this.shape_356.setTransform(26.5,28.8,0.127,0.127,-37.5);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#595959").s().p("Ag0AAIAGgVQAEAZAqgEQAngCAOgRIgEARQgGARgsAGIgQABQggAAgDgWg");
	this.shape_357.setTransform(26.8,30.8,0.127,0.127,-37.5);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#A58E6D").s().p("Ah8BmQAIgnAphHQAthQAhgYQAZgRAsgCQAugCAGARQglAXgtBMQgpBFgKAxQgHAXgzAHIgQABQgmAAgDgeg");
	this.shape_358.setTransform(26.7,29.2,0.127,0.127,-37.5);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#777777").s().p("AiCBnIgBgBIABgBQAHgsAthKQAthOAhgXQAWgQAugDQA0gFAKAXIACAGIgFAEQgjAVgtBLQgpBEgJAwQgKAdg4AGIgPABQgrAAgDgkg");
	this.shape_359.setTransform(26.7,29.2,0.127,0.127,-37.5);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#F7E9D2").s().p("Ag7AWQAZgfATgMQAZgSA2ACQgbAagaAkQgIANglAAIgCAAQgkAAANgQg");
	this.shape_360.setTransform(25.2,29.2,0.127,0.127,-37.5);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#EAE1D3").s().p("AhcAzQA6hiAigSQARgMAfgEQAbgDAYAEQgZAVgeAoQgcAlgVArQgLAUgwACIgEAAQgrAAATggg");
	this.shape_361.setTransform(25.3,29.8,0.127,0.127,-37.5);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#595959").s().p("Ag4AAIAGgVQAEAZAugEQArgCAOgSIgEASQgGAQgwAHIgSABQgiAAgDgWg");
	this.shape_362.setTransform(25.5,31.8,0.127,0.127,-37.5);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#A58E6D").s().p("AiGBnQAIgnAshHQAwhSAkgXQAbgRAxgCQAxgCAIAQQgoAXgxBNQgtBFgKAxQgHAXg5AHIgRABQgpAAgDgdg");
	this.shape_363.setTransform(25.4,30.2,0.127,0.127,-37.5);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#777777").s().p("AiOBoIAAgBIAAgBQAJgtAwhJQAxhPAjgXQAYgQAzgEQA4gEAKAWIAEAGIgGAEQgnAWgwBLQgtBEgJAwQgKAdg+AHIgRABQgvAAgDgkg");
	this.shape_364.setTransform(25.4,30.2,0.127,0.127,-37.5);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#F7E9D2").s().p("Ag+AXQAbggATgMQAbgRA4ABQgcAagbAkQgJANgmABIgDAAQgmAAAOgQg");
	this.shape_365.setTransform(23.8,30.3,0.127,0.127,-37.5);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#EAE1D3").s().p("AhgAzQAXgmAXgcQAegoAUgKQASgMAggEQAdgEAYAEQgaAVgfApQgdAlgWAsQgMAUgyACIgEAAQgtAAAUghg");
	this.shape_366.setTransform(23.9,30.8,0.127,0.127,-37.5);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#595959").s().p("Ag8AAIAHgVQAEAZAxgEQAtgCAQgSIgFASQgHAQgyAHIgTABQgkAAgEgWg");
	this.shape_367.setTransform(24.1,32.9,0.127,0.127,-37.5);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#A58E6D").s().p("AiNBnQAJgmAuhIQAzhRAmgYQAcgRAzgCQA0gDAIARQgrAXgyBNQguBFgMAxQgJAYg6AHIgTABQgrAAgDgeg");
	this.shape_368.setTransform(24.1,31.3,0.127,0.127,-37.5);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#777777").s().p("AiWBoIAAgBIABgBQAKgsAxhKQA0hPAmgXQAYgQA1gEQA7gFAMAWIADAGIgHAEQgoAWgyBLQguBEgLAxQgKAdhBAHIgSABQgyAAgEgkg");
	this.shape_369.setTransform(24.1,31.3,0.127,0.127,-37.5);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#F7E9D2").s().p("Ag+AWQAageAUgNQAbgRA4ABQgcAagbAkQgJANgmAAIgDAAQgmAAAOgQg");
	this.shape_370.setTransform(22.4,31.4,0.127,0.127,-37.5);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#EAE1D3").s().p("AhgAyQA/hhAhgRQASgMAggEQAdgEAZAEQgbAVgeApQgeAkgWAsQgLAUgzABIgDAAQgvAAAVghg");
	this.shape_371.setTransform(22.5,31.9,0.127,0.127,-37.5);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#595959").s().p("Ag8gBIAHgUQAEAZAxgEQAugBAPgRIgEARQgHAQgzAGIgRABQgnAAgDgXg");
	this.shape_372.setTransform(22.7,34,0.127,0.127,-37.5);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#A58E6D").s().p("AiOBmQAJgnAwhGQA0hQAkgYQAdgRAzgCQAzgDAJAQQgqAYgzBNQgvBFgLAxQgJAYg8AFIgRABQgtAAgDgeg");
	this.shape_373.setTransform(22.6,32.4,0.127,0.127,-37.5);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#777777").s().p("AiWBnIAAgCIAAgBQALgsAzhJQA0hNAkgXQAagQA1gEQA7gFAKAWIAEAGIgHADQgoAXgxBLQgvBFgLAwQgLAdhCAGIgPAAQg1AAgDgkg");
	this.shape_374.setTransform(22.6,32.4,0.127,0.127,-37.5);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#F7E9D2").s().p("AA5A0QgqgFgVgOQgcgSgfhCQAmAVApAJQANAFAZAhQAYAjgRAAIgCAAg");
	this.shape_375.setTransform(10.5,45.2,0.127,0.127,-37.5);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#F7E9D2").s().p("AACAfQgUgJgWgSQgYgSgMgVQAhAMAzgFQAPABAgAbQAiAcgTACQgXAGgRAAQgQAAgMgFg");
	this.shape_376.setTransform(12.6,45.8,0.127,0.127,-37.5);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#F7E9D2").s().p("AgjATQgagLgUgQQAygCAggRQAOgHAoASQAnAQgSAJQgeASgiACIgGABQgSAAgXgLg");
	this.shape_377.setTransform(14.7,45.7,0.127,0.127,-37.5);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#F7E9D2").s().p("AgcAfQgPgDgjgKQAogPAigcQAKgKAqAFQAqAEgPAPQgeAcgaAJQgMAGgQAAIgTgBg");
	this.shape_378.setTransform(16.6,45.1,0.127,0.127,-37.5);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#EAE1D3").s().p("AAWBAQgrgFgZgQQgWgNgVghQgSgegKgfQAiAXAuAMQAuAMAsgFQAWACAdAhQAeAlghAIQgZAHgdAAIgZgBg");
	this.shape_379.setTransform(10.9,44.8,0.127,0.127,-37.5);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#EAE1D3").s().p("AgfAsQgZgJgdgaQgegZgLgbQAgAQA0gCQAwgBAqgRQAVgHAlAaQAmAZgeARQgfATgqAKQgaAGgRAAQgRAAgMgFg");
	this.shape_380.setTransform(12.9,45.5,0.127,0.127,-37.5);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#EAE1D3").s().p("AgKA8QgbACgkgSQgggQgWgXQAmAFAwgQQAtgRAjgfQAUgKApAKQArAMgYAbQgaAbgkAYQgmAYgXAAIgGAAg");
	this.shape_381.setTransform(14.8,45.3,0.127,0.127,-37.5);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#EAE1D3").s().p("Ah1A1QAogMAmgdQAngdAagoQAPgQAsgBQAuAAgSAgQgRAjgfAfQgiAkgaAIQgMAHgUAAQgkAAg2gWg");
	this.shape_382.setTransform(16.6,44.6,0.127,0.127,-37.5);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#595959").s().p("AAEgFQgXgYgWgGIAPgHQARgCAcAaQAhAagOAYIgRALQANgVgegbg");
	this.shape_383.setTransform(12.3,43.6,0.127,0.127,-44);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#595959").s().p("AAEgGQgdgQgWAEIANgMQAQgJAhAQQAmARgGAYIgNAQQAGgYgkgQg");
	this.shape_384.setTransform(13.8,43.7,0.127,0.127,-37.5);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#595959").s().p("AADgEQgigGgTAKIAJgOQAMgOAmAEQApAFABAZIgIAUQgBgZgngFg");
	this.shape_385.setTransform(15.3,43.3,0.127,0.127,-37.5);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#595959").s().p("AABABQggAEgUAPIAGgRQAJgOAmgHQArgIAHAaIgEAVQgGgYgpAEg");
	this.shape_386.setTransform(16.6,42.5,0.127,0.127,-37.5);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#A58E6D").s().p("AhRBBQgggTgeg6Qgeg7ANgQQAnAsBXAMQBQALApgZQAWgDAhAeQAjAegRAcQgYAdhSAOQgcAFgYAAQgzAAgggXg");
	this.shape_387.setTransform(11.2,44.6,0.127,0.127,-44);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#A58E6D").s().p("Ag2BOQglgJgsg0QgsgxAKgUQAwAkBYgOQBPgMAggkQAVgLAmARQAqATgIAfQgQAkhKAnQg5AegqAAQgTAAgRgFg");
	this.shape_388.setTransform(13,45.1,0.127,0.127,-37.5);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#A58E6D").s().p("AhyBHQg5gkADgWQA5AUBRgnQBIgmAWgtQAPgRAsAFQAuAFAAAhQgHApg8A6QhEBDg2AAIgIAAQgjAAgzggg");
	this.shape_389.setTransform(14.7,44.9,0.127,0.127,-37.5);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#A58E6D").s().p("AhYBzQg+gQgDgXQA7ACBChBQA7g4ALgzQAMgVAsgHQAwgHAHAiQACAmgtBKQgzBUg0APQgPAIgXAAQgZAAgggJg");
	this.shape_390.setTransform(16.3,44.2,0.127,0.127,-37.5);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#777777").s().p("AhSBLQgegQgig9QglhDASgWIAEgGIAFAGQAlAqBVANQBOAMApgYQAcgEAjAgQAlAggUAiIAAABIgBAAQgcAihWANQgaAEgWAAQg1AAgfgXg");
	this.shape_391.setTransform(11.2,44.6,0.127,0.127,-44);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#777777").s().p("Ag1BVQghgHgyg2Qg0g3AMgbIADgHIAHAFQAtAiBWgMQBPgMAggiQAZgOApATQAsAUgIAmIAAABIgBABQgTAphOAoQg5AdgpAAQgTAAgQgGg");
	this.shape_392.setTransform(13,45.1,0.127,0.127,-37.5);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#777777").s().p("AhxBPQhDgnAFgeIAAgHIAIADQA2ATBPglQBHgkAXgtQATgVAuAGQAyAGABAmIAAACIAAABQgJAvhAA8QhFBBgzgBIgKAAQgfABg3ggg");
	this.shape_393.setTransform(14.7,44.9,0.127,0.127,-37.5);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#777777").s().p("AhUB8QhIgQgEggIgBgHIAIAAQA4ACBBg+QA7g3ALgyQAPgaAwgHQAzgHAJAnIAAACQACAugxBMQg0BSgyAOQgMAIgaAAQgYAAgigHg");
	this.shape_394.setTransform(16.3,44.2,0.127,0.127,-37.5);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#F7E9D2").s().p("AhHAqQAdgVAhgrQAJgLAngHQAqgGgLARQgZApgUAKQgTALgbAFQgUAEgTAAIgLAAg");
	this.shape_395.setTransform(18.3,43.9,0.127,0.127,-37.5);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#F7E9D2").s().p("AgPgRQAFgQAmgRQAngSgHAVQgNAqgTATQgOASgZANQgYALgaAEQAigrAMgig");
	this.shape_396.setTransform(19.6,42.3,0.127,0.127,-37.5);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#F7E9D2").s().p("AgTgNQAEgPAdgdQAfgfgBAXQgBAtgMAZQgIAUgXAUQgOAMgeATQATgrAGgug");
	this.shape_397.setTransform(20.4,40.4,0.127,0.127,-37.5);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#F7E9D2").s().p("AgbgHQgCgQAZglQAXglADAVQALArgHAdQgHAWgOAZQgOAbgSAPQAIgigIg6g");
	this.shape_398.setTransform(20.8,38.3,0.127,0.127,-37.5);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#F7E9D2").s().p("AgYgBQgGgOAQgrQAOgqAIAUQASApABAcQACAUgMAeQgGAPgQAhQgDgrgQgtg");
	this.shape_399.setTransform(20.5,36.2,0.127,0.127,-37.5);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#EAE1D3").s().p("AhlBYQAggQAhgsQAfgnARgtQAKgWArgLQAtgLgKAkQgKAmgWAlQgZAvgYANQgXANgiAGQgRADgOAAQgSAAgOgFg");
	this.shape_400.setTransform(18.1,43.4,0.127,0.127,-37.5);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#EAE1D3").s().p("AgcAnQAWguAFgyQAFgWAlgYQAmgaABAmQAAApgLAtQgNAygVASQgRAWgiAPQghAOgeABQAdgbAWgxg");
	this.shape_401.setTransform(19.3,41.9,0.127,0.127,-37.5);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#EAE1D3").s().p("AgZAsQAKg0gJgwQAAgYAdgiQAggkAIAkQAMAlgBAxQgBAvgNAdQgLAYgfAaQgaAWgdANQAVgnAJgyg");
	this.shape_402.setTransform(20.1,40,0.127,0.127,-37.5);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#EAE1D3").s().p("AgVAwQgGgzgRguQgGgXAWgrQAWgsAQAiQASAnALApQANAzgJAaQgGAcgWAhQgUAhgYAPQANgkgFg5g");
	this.shape_403.setTransform(20.4,38,0.127,0.127,-37.5);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#EAE1D3").s().p("AgGAvQgQgxgbgnQgJgXANgtQANguAXAbQAXAbATAsQAUAsAAAdQADAagQAnQgNAdgUAdQgBgsgMgwg");
	this.shape_404.setTransform(20,36,0.127,0.127,-37.5);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#595959").s().p("AgtAMQAFgRAlgRQAlgRAMAWIABAUQgLgTgkAPQgiALgMAUg");
	this.shape_405.setTransform(17.6,41.4,0.127,0.127,-37.5);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#595959").s().p("AgrAXQAAgUAggZQAegcARASIAHAVQgQgTgeAbQgdAUgHAXg");
	this.shape_406.setTransform(18.4,40,0.127,0.127,-37.5);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#595959").s().p("AglAhQgEgSAXgiQAXgnAWAOIAMASQgVgNgXAkQgVAcgDAYg");
	this.shape_407.setTransform(18.7,38.5,0.127,0.127,-37.5);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#595959").s().p("AgcAqQgKgRARgpQARgtAWAHIAPAPQgWgGgRApQgRAlAGAXg");
	this.shape_408.setTransform(18.6,36.9,0.127,0.127,-37.5);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#595959").s().p("AgRApQgIgZADgdQAFgnAWACIATAHQgYgCgEAmQgEAaAFAgg");
	this.shape_409.setTransform(18.1,35.3,0.127,0.127,-37.5);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#A58E6D").s().p("AiAB9QA3gOAyhSQAshIAAgyQAHgYAogSQArgUAOAdQANAngbBVQgdBcgxAfQgfAVg8ACIgLAAQg0AAgHgTg");
	this.shape_410.setTransform(17.7,43.1,0.127,0.127,-37.5);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#A58E6D").s().p("AhlCgQAzggAehbQAZhSgLgxQABgYAfgeQAkgfAVAXQAWAhgEBaQgFBigoAqQgXAgg9ATQggAJgTAAQgQAAgGgHg");
	this.shape_411.setTransform(18.9,41.6,0.127,0.127,-37.5);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#A58E6D").s().p("AhNC0QArgrAGhhQAFhYgZgrQgFgYAZgnQAcgqAZARQAbAbASBXQAUBggbA1QgPAlg2AlQgnAbgUAAQgIAAgEgFg");
	this.shape_412.setTransform(19.8,39.8,0.127,0.127,-37.5);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#A58E6D").s().p("AgiC+QAeg2gThgQgRhVgggjQgNgWATgvQATgxAdAJQAfAVAjBQQAoBYgNA5QgFAngsA0QgiAsgUAAIgGgCg");
	this.shape_413.setTransform(20,37.9,0.127,0.127,-37.5);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#A58E6D").s().p("AAPC0QANg9gjhXQgihNgogdQgMgcAEgkQAGgqAcABQAkgCA2BIQA6BLgCA7QAEAmgfA8QgdA5gTAAIgBAAg");
	this.shape_414.setTransform(19.7,36.1,0.127,0.127,-37.5);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#777777").s().p("AiGB/IgDgGIAIgDQAzgNAzhPQAshGABgxQAIgeArgTQAvgVARAiIABACQAOAtgeBWQgfBdguAdQgbAVhCAEIgRAAQg4AAgJgYg");
	this.shape_415.setTransform(17.7,43.1,0.127,0.127,-37.5);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#777777").s().p("AhqCkIgEgGIAHgEQAxgeAdhYQAahQgKgyQACgdAhggQAngiAZAbIABACQAaAngHBeQgGBhgnAoQgTAdhCAYQgjAMgWAAQgVAAgIgLg");
	this.shape_416.setTransform(18.9,41.6,0.127,0.127,-37.5);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#777777").s().p("AhRC6IgGgEIAGgHQApgoAHhfQAGhVgZgsQgHgeAdgpQAegtAeAUIABAAIAAABQAgAeARBdQASBggbAxQgKAjg8AqQgpAfgYAAQgKAAgHgGg");
	this.shape_417.setTransform(19.7,39.8,0.127,0.127,-37.5);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#777777").s().p("AgnDGIgGgCIAEgIQAcgzgRheQgPhUghgkQgOgaAUgzQAVg1AiAKIABABIAAAAQAlAZAjBUQAmBXgMA4QgEAkgtA5QgmAygaAAQgEAAgEgBg");
	this.shape_418.setTransform(20,37.9,0.127,0.127,-37.5);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#777777").s().p("AAMC7IgHAAIACgJQANg5ghhVQghhOgogcQgPghAFgnQAHgsAhAAIABAAIABAAQAsgBA2BMQA4BMgDA5QAGAhggBDQgfBBgaAAIgCAAg");
	this.shape_419.setTransform(19.7,36.1,0.127,0.127,-37.5);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#F7E9D2").s().p("Ag+AVQAcggATgLQAbgRA3ADQgbAZgdAkQgIANgnAAQgoAAAOgRg");
	this.shape_420.setTransform(20.9,32.5,0.127,0.127,-37.5);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#EAE1D3").s().p("AhhAyQBChiAfgRQAUgLAggEQAcgDAYAEQgaAVgfAoQgdAkgXAsQgMAUgzAAIgDAAQgvAAAVggg");
	this.shape_421.setTransform(21,33.1,0.127,0.127,-37.5);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#F7E9D2").s().p("AhJBIQg2gIAfgdIA6g5QAjgjAOgHQAPgHAegCQAcgCAZAEQgYATgiApIg4BIQgJANgeAAQgMAAgRgCg");
	this.shape_422.setTransform(19.5,34.1,0.127,0.127,-37.5);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#595959").s().p("AhAgEIAKgUQAEAdAzgBQAygCAOgRIgFAQQgFAUg3ADIgIABQgzAAgFgdg");
	this.shape_423.setTransform(21.1,35.1,0.127,0.127,-37.5);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#595959").s().p("AgJAcQhAgKAGggIAOgQQgGAeA5AJQA0AJATgRIgIAQQgGAOggAAQgPAAgRgDg");
	this.shape_424.setTransform(19.3,36,0.127,0.127,-37.5);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#A58E6D").s().p("AiSBdQAZgvApg3QA3hOAjgYQAcgQAygCQA0gCAIARQgpAXg1BMQgvBFgNAwQgEAahCACIgGAAQg9AAgDglg");
	this.shape_425.setTransform(21.1,33.5,0.127,0.127,-37.5);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#F7E9D2").s().p("AhcB0QhIgMAJgoQAXgaA+g6QBEhAAegXQAXgKAwgBQAzgBAHAQQgnAYg4BJQgpA1gdA3QgGALgZAEQgLACgMAAQgPAAgPgDg");
	this.shape_426.setTransform(19.5,34.6,0.127,0.127,-37.5);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#777777").s().p("AicBcIAAgBIABgBQAZgvAvg9QA4hLAhgYQAagPA0gEQA6gEAMAWIACAGIgGAEQgnAWgzBKQgvBDgNAxQgBAOgZAJQgWAKgeAAIgDAAQhHAAgEgtg");
	this.shape_427.setTransform(21.1,33.5,0.127,0.127,-37.5);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#777777").s().p("AhgB7QhPgOALgvIAAgBIABgBQAYgdBEg8QBAg6AggaQAVgKAxgCQA5gCALAVIADAGIgHAEQglAWg2BIQgpA1gdA2QgGAOgdAFQgMACgNAAQgQAAgSgDg");
	this.shape_428.setTransform(19.5,34.6,0.127,0.127,-37.5);

	this.addChild(this.shape_428,this.shape_427,this.shape_426,this.shape_425,this.shape_424,this.shape_423,this.shape_422,this.shape_421,this.shape_420,this.shape_419,this.shape_418,this.shape_417,this.shape_416,this.shape_415,this.shape_414,this.shape_413,this.shape_412,this.shape_411,this.shape_410,this.shape_409,this.shape_408,this.shape_407,this.shape_406,this.shape_405,this.shape_404,this.shape_403,this.shape_402,this.shape_401,this.shape_400,this.shape_399,this.shape_398,this.shape_397,this.shape_396,this.shape_395,this.shape_394,this.shape_393,this.shape_392,this.shape_391,this.shape_390,this.shape_389,this.shape_388,this.shape_387,this.shape_386,this.shape_385,this.shape_384,this.shape_383,this.shape_382,this.shape_381,this.shape_380,this.shape_379,this.shape_378,this.shape_377,this.shape_376,this.shape_375,this.shape_374,this.shape_373,this.shape_372,this.shape_371,this.shape_370,this.shape_369,this.shape_368,this.shape_367,this.shape_366,this.shape_365,this.shape_364,this.shape_363,this.shape_362,this.shape_361,this.shape_360,this.shape_359,this.shape_358,this.shape_357,this.shape_356,this.shape_355,this.shape_354,this.shape_353,this.shape_352,this.shape_351,this.shape_350,this.shape_349,this.shape_348,this.shape_347,this.shape_346,this.shape_345,this.shape_344,this.shape_343,this.shape_342,this.shape_341,this.shape_340,this.shape_339,this.shape_338,this.shape_337,this.shape_336,this.shape_335,this.shape_334,this.shape_333,this.shape_332,this.shape_331,this.shape_330,this.shape_329,this.shape_328,this.shape_327,this.shape_326,this.shape_325,this.shape_324,this.shape_323,this.shape_322,this.shape_321,this.shape_320,this.shape_319,this.shape_318,this.shape_317,this.shape_316,this.shape_315,this.shape_314,this.shape_313,this.shape_312,this.shape_311,this.shape_310,this.shape_309,this.shape_308,this.shape_307,this.shape_306,this.shape_305,this.shape_304,this.shape_303,this.shape_302,this.shape_301,this.shape_300,this.shape_299,this.shape_298,this.shape_297,this.shape_296,this.shape_295,this.shape_294,this.shape_293,this.shape_292,this.shape_291,this.shape_290,this.shape_289,this.shape_288,this.shape_287,this.shape_286,this.shape_285,this.shape_284,this.shape_283,this.shape_282,this.shape_281,this.shape_280,this.shape_279,this.shape_278,this.shape_277,this.shape_276,this.shape_275,this.shape_274,this.shape_273,this.shape_272,this.shape_271,this.shape_270,this.shape_269,this.shape_268,this.shape_267,this.shape_266,this.shape_265,this.shape_264,this.shape_263,this.shape_262,this.shape_261,this.shape_260,this.shape_259,this.shape_258,this.shape_257,this.shape_256,this.shape_255,this.shape_254,this.shape_253,this.shape_252,this.shape_251,this.shape_250,this.shape_249,this.shape_248,this.shape_247,this.shape_246,this.shape_245,this.shape_244,this.shape_243,this.shape_242,this.shape_241,this.shape_240,this.shape_239,this.shape_238,this.shape_237,this.shape_236,this.shape_235,this.shape_234,this.shape_233,this.shape_232,this.shape_231,this.shape_230,this.shape_229,this.shape_228,this.shape_227,this.shape_226,this.shape_225,this.shape_224,this.shape_223,this.shape_222,this.shape_221,this.shape_220,this.shape_219,this.shape_218,this.shape_217,this.shape_216,this.shape_215,this.shape_214,this.shape_213,this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201,this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5.6,-39,106.1,85.7);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.csdfef();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,39,97);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.wall();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.Анимация7 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah6S6IAAgBQhXirg0h2QhkjiAAhsIABhTQgIgYgDgjQgCgXgBhVQAAgcAdisIAcinQgBhohMlWQhMlVAAgmQgBgtAHgVQAEgMANgTQAggtAShvIgCgDQABgDAUAAQA0AAARANQAVAYAWAWIBggDQAYgaAdhOQAbhHAGgDQBJAZBTA9IAHgFQAUgJAAA+QADAcA6AiQAhAUAOAKQAKgBAIgLQCUCPAABUQAAAhgpBlQguBvgCANQgFAVgvByQgsBrAAAPQABAnArBNQAbAuBHBvQCODkAACeQgBCPhGD3Ig9DKQgbBXgQA9IAKAhQAFAPAAAOQgBANgSAUQgZAbgkgKIhHAAQgMgCgZgHIgZgGQgEAAgrAMQgqALg6AAQhJAAgBgcgACHxPQgGAAgDgCIAAgFIAJAHg");
	this.shape.setTransform(47.8,15.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.6,-108.4,94.4,247.7);


(lib.Анимация7_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.csca();
	this.instance.setTransform(-95.5,-122.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-95.5,-122.5,191,245);


(lib.Анимация5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.cscsdww();
	this.instance.setTransform(-38,-22.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38,-22.5,76,45);


(lib.Анимация3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.sdwdd();
	this.instance.setTransform(-43,-17.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43,-17.5,86,35);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.cscsdsdd();
	this.instance.setTransform(-38.5,-33);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.5,-33,77,66);


(lib.fddfbf = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.cfdc();
	this.instance.setTransform(0,0,0.73,0.73);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,73,73);


(lib.Символ59 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ60();
	this.instance.setTransform(324.4,156.1,1,1,0,0,0,329.4,157.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},19).to({alpha:1},20).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ59();
	this.instance_1.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-1,658.8,314.1);


(lib.Символ50 = function() {
	this.initialize();

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(65.6,67);

	// Слой 2
	this.instance = new lib.fddfbf();
	this.instance.setTransform(67.5,65.5,1,1,0,0,0,36.5,36.5);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance.cache(-2,-2,77,77);

	// Слой 1
	this.instance_1 = new lib.Символ48();
	this.instance_1.setTransform(66,66,1,1,0,0,0,66,66);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 0, 112))];
	this.instance_1.cache(-2,-2,136,136);

	this.addChild(this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-17.2,136,168.4);


(lib.Символ49 = function() {
	this.initialize();

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(66.8,66.1);

	// Слой 2
	this.instance = new lib.Символ51();
	this.instance.setTransform(66,66,1,1,0,0,0,49,49);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance.cache(-2,-2,102,102);

	// Слой 1
	this.instance_1 = new lib.vdvbdf();

	this.addChild(this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-18.8,132,170);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(9.1,9.1,1,1,0,0,0,9.1,9.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18.3,18.3);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 46
	this.instance = new lib.Символ46();
	this.instance.setTransform(389.8,11.8,1,1,0,0,0,7.9,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({y:8.8},3).to({y:11.8},4).wait(7));

	// Символ 45
	this.instance_1 = new lib.Символ45();
	this.instance_1.setTransform(363.6,14.8,1,1,0,0,0,9,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({y:11.8},3).to({y:14.8},4).wait(8));

	// Символ 44
	this.instance_2 = new lib.Символ44();
	this.instance_2.setTransform(347.1,15.3,1,1,0,0,0,6.9,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({y:12.3},3).to({y:15.3},4).wait(9));

	// Символ 43
	this.instance_3 = new lib.Символ43();
	this.instance_3.setTransform(329.5,18.6,1,1,0,0,0,9.2,12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({y:15.6},3).to({y:18.6},4).wait(10));

	// Символ 42
	this.instance_4 = new lib.Символ42();
	this.instance_4.setTransform(311.7,16.4,1,1,0,0,0,7.1,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({y:13.4},3).to({y:16.4},4).wait(11));

	// Символ 41
	this.instance_5 = new lib.Символ41();
	this.instance_5.setTransform(297.5,15.6,1,1,0,0,0,6.1,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(16).to({y:12.6},3).to({y:15.6},4).wait(12));

	// Символ 40
	this.instance_6 = new lib.Символ40();
	this.instance_6.setTransform(283.9,15.6,1,1,0,0,0,6.1,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({y:12.6},3).to({y:15.6},4).wait(13));

	// Символ 39
	this.instance_7 = new lib.Символ39();
	this.instance_7.setTransform(269.8,15.3,1,1,0,0,0,6.9,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({y:12.3},3).to({y:15.3},4).wait(14));

	// Символ 38
	this.instance_8 = new lib.Символ38();
	this.instance_8.setTransform(255.7,15.8,1,1,0,0,0,7.5,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(13).to({y:12.8},3).to({y:15.8},4).wait(15));

	// Символ 37
	this.instance_9 = new lib.Символ37();
	this.instance_9.setTransform(239.9,15.4,1,1,0,0,0,8.2,10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(12).to({y:12.4},3).to({y:15.4},4).wait(16));

	// Символ 36
	this.instance_10 = new lib.Символ36();
	this.instance_10.setTransform(210.4,15.2,1,1,0,0,0,8.3,10.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(11).to({y:12.2},3).to({y:15.2},4).wait(17));

	// Символ 35
	this.instance_11 = new lib.Символ35();
	this.instance_11.setTransform(182.1,15.4,1,1,0,0,0,7.4,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10).to({y:12.4},3).to({y:15.4},4).wait(18));

	// Символ 34
	this.instance_12 = new lib.Символ34();
	this.instance_12.setTransform(164.5,14.6,1,1,0,0,0,9.1,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(9).to({y:11.6},3).to({y:14.6},4).wait(19));

	// Символ 33
	this.instance_13 = new lib.Символ33();
	this.instance_13.setTransform(143.2,16.3,1,1,0,0,0,10.6,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(8).to({y:13.3},3).to({y:16.3},4).wait(20));

	// Символ 32
	this.instance_14 = new lib.Символ32();
	this.instance_14.setTransform(125.1,15.8,1,1,0,0,0,7.5,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(7).to({y:12.8},3).to({y:15.8},4).wait(21));

	// Символ 31
	this.instance_15 = new lib.Символ31();
	this.instance_15.setTransform(110.8,15.3,1,1,0,0,0,6.9,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(6).to({y:12.3},3).to({y:15.3},4).wait(22));

	// Символ 30
	this.instance_16 = new lib.Символ30();
	this.instance_16.setTransform(92.2,18.6,1,1,0,0,0,10.5,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(5).to({y:15.6},3).to({y:18.6},4).wait(23));

	// Символ 29
	this.instance_17 = new lib.Символ29();
	this.instance_17.setTransform(72.1,15.2,1,1,0,0,0,8.3,10.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(4).to({y:12.2},3).to({y:15.2},4).wait(24));

	// Символ 28
	this.instance_18 = new lib.Символ28();
	this.instance_18.setTransform(43.2,14.2,1,1,0,0,0,7.9,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(3).to({y:11.2},3).to({y:14.2},4).wait(25));

	// Символ 27
	this.instance_19 = new lib.Символ27();
	this.instance_19.setTransform(25.1,14.6,1,1,0,0,0,9.1,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(2).to({y:11.6},3).to({y:14.6},4).wait(26));

	// Символ 25
	this.instance_20 = new lib.Символ25();
	this.instance_20.setTransform(7.4,14.5,1,1,0,0,0,7.4,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({y:11.5},3).to({y:14.5},4).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,397.7,31.1);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.setTransform(324.8,27.8,1,1,0,0,0,198.8,15.5);

	// Слой 1
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(320.8,25,1,1,0,0,0,320.8,25);
	this.instance_1.alpha = 0.699;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,641.5,50);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация7("synched",0);
	this.instance.setTransform(-0.6,108.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,94.4,247.7);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация7_1("synched",0);
	this.instance.setTransform(95.5,122.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,191,245);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(38.5,33);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,77,66);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.setTransform(43,17.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,86,35);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация5("synched",0);
	this.instance.setTransform(38,22.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76,45);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ8копия();
	this.instance.setTransform(17.3,28.8,1,1,0,15,-165,31.1,25.6);

	// Слой 1
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(19.5,48.5,1,1,0,0,0,19.5,48.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.9,-54.5,84,151.6);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ9();
	this.instance.setTransform(41.1,-2.7,1,1,-15,0,0,36.8,30);

	// Слой 1
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(21,37.5,1,1,0,0,0,21,37.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-41.2,70,116.2);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ6();
	this.instance.setTransform(258.5,57.5,1,1,0,0,0,19.5,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:19.6,rotation:3.3,x:255.2,y:60.2},19,cjs.Ease.get(-1)).to({rotation:6.7,x:251.6,y:63},20,cjs.Ease.get(1)).to({regX:19.5,rotation:3.3,x:255,y:60.2},20,cjs.Ease.get(-1)).to({rotation:0,x:258.5,y:57.5},20,cjs.Ease.get(1)).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(27,39.5,1,1,0,0,0,21,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:21.1,rotation:-2,x:32.7,y:43.9},19,cjs.Ease.get(-1)).to({regX:21,rotation:-4.5,x:38.5,y:48.5},20,cjs.Ease.get(1)).to({regY:37.6,rotation:-2.1,x:32.8,y:44.1},20,cjs.Ease.get(-1)).to({regY:37.5,rotation:0,x:27,y:39.5},20,cjs.Ease.get(1)).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ13();
	this.instance_2.setTransform(127.5,53,1,1,0,0,0,38.5,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:127.3,y:63},19,cjs.Ease.get(-1)).to({x:127,y:73.5},20,cjs.Ease.get(1)).to({x:127.3,y:63.3},20,cjs.Ease.get(-1)).to({x:127.5,y:53},20,cjs.Ease.get(1)).wait(1));

	// Слой 6
	this.instance_3 = new lib.Символ12();
	this.instance_3.setTransform(211,105.5,1,1,0,0,0,43,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-7.3,x:208.4,y:110.4},19,cjs.Ease.get(-1)).to({rotation:-15,x:205.6,y:115.5},20,cjs.Ease.get(1)).to({rotation:-7.3,x:208.4,y:110.5},20,cjs.Ease.get(-1)).to({rotation:0,x:211,y:105.5},20,cjs.Ease.get(1)).wait(1));

	// Слой 7
	this.instance_4 = new lib.Символ11();
	this.instance_4.setTransform(69,83.5,1,1,0,0,0,38,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:22.6,rotation:7.3,x:72.2,y:89.9},19,cjs.Ease.get(-1)).to({regX:38.1,rotation:15,x:75.6,y:96.6},20,cjs.Ease.get(1)).to({regY:22.5,rotation:7.3,x:72.3,y:90.1},20,cjs.Ease.get(-1)).to({regX:38,rotation:0,x:69,y:83.5},20,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_5 = new lib.Символ14();
	this.instance_5.setTransform(95.5,177.5,1,1,0,0,0,95.5,122.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:187.3},19,cjs.Ease.get(-1)).to({y:197.5},20,cjs.Ease.get(1)).to({y:187.5},20,cjs.Ease.get(-1)).to({y:177.5},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-45.5,278,345.6);


(lib.Символ14_1 = function() {
	this.initialize();

	// Слой 1
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(143,137.9,1,1,0,0,0,46.9,123.8);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-2,-2,98,252);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(94.1,12.1,102,255);


(lib.Символ13_1 = function() {
	this.initialize();

	// Слой 2
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(52.2,34.3,1,1,0,0,0,23.9,34.5);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-2,-2,52,73);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(26.3,-2.2,56,76);


(lib.Символ12_1 = function() {
	this.initialize();

	// Слой 2
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(40.8,18.5,1,1,0,0,0,44,17.9);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-2,-2,92,40);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.2,-1.4,95,43);


(lib.Символ11_1 = function() {
	this.initialize();

	// Слой 2
	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(40.8,27,1,1,0,0,0,39.4,26);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-2,-2,83,56);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.6,-1,86,60);


(lib.Символ6_1 = function() {
	this.initialize();

	// Слой 3
	this.instance_2 = new lib.Символ16();
	this.instance_2.setTransform(-3.5,21.2,1,1,0,0,0,43.2,76.9);
	this.instance_2.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_2.cache(-2,-2,91,158);

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48.7,-57.7,93,161);


(lib.Символ5_1 = function() {
	this.initialize();

	// Слой 3
	this.instance_2 = new lib.Символ21();
	this.instance_2.setTransform(35.3,16.9,1,1,0,0,0,34.7,58);
	this.instance_2.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_2.cache(-2,-2,73,120);

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.4,-43.1,77,123);


(lib.Символ1копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ6_1();
	this.instance.setTransform(258.5,57.5,1,1,0,0,0,19.5,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:19.6,rotation:3.3,x:255.2,y:60.2},19,cjs.Ease.get(-1)).to({rotation:6.7,x:251.6,y:63},20,cjs.Ease.get(1)).to({regX:19.5,rotation:3.3,x:255,y:60.2},20,cjs.Ease.get(-1)).to({rotation:0,x:258.5,y:57.5},20,cjs.Ease.get(1)).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ5_1();
	this.instance_1.setTransform(27,39.5,1,1,0,0,0,21,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:21.1,rotation:-2,x:32.7,y:43.9},19,cjs.Ease.get(-1)).to({regX:21,rotation:-4.5,x:38.5,y:48.5},20,cjs.Ease.get(1)).to({regY:37.6,rotation:-2.1,x:32.8,y:44.1},20,cjs.Ease.get(-1)).to({regY:37.5,rotation:0,x:27,y:39.5},20,cjs.Ease.get(1)).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ13_1();
	this.instance_2.setTransform(127.5,53,1,1,0,0,0,38.5,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:127.3,y:63},19,cjs.Ease.get(-1)).to({x:127,y:73.5},20,cjs.Ease.get(1)).to({x:127.3,y:63.3},20,cjs.Ease.get(-1)).to({x:127.5,y:53},20,cjs.Ease.get(1)).wait(1));

	// Слой 6
	this.instance_3 = new lib.Символ12_1();
	this.instance_3.setTransform(211,105.5,1,1,0,0,0,43,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-7.3,x:208.4,y:110.4},19,cjs.Ease.get(-1)).to({rotation:-15,x:205.6,y:115.5},20,cjs.Ease.get(1)).to({rotation:-7.3,x:208.4,y:110.5},20,cjs.Ease.get(-1)).to({rotation:0,x:211,y:105.5},20,cjs.Ease.get(1)).wait(1));

	// Слой 7
	this.instance_4 = new lib.Символ11_1();
	this.instance_4.setTransform(69,83.5,1,1,0,0,0,38,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:22.6,rotation:7.3,x:72.2,y:89.9},19,cjs.Ease.get(-1)).to({regX:38.1,rotation:15,x:75.6,y:96.6},20,cjs.Ease.get(1)).to({regY:22.5,rotation:7.3,x:72.3,y:90.1},20,cjs.Ease.get(-1)).to({regX:38,rotation:0,x:69,y:83.5},20,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_5 = new lib.Символ14_1();
	this.instance_5.setTransform(95.5,177.5,1,1,0,0,0,95.5,122.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:187.3},19,cjs.Ease.get(-1)).to({y:197.5},20,cjs.Ease.get(1)).to({y:187.5},20,cjs.Ease.get(-1)).to({y:177.5},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.6,-48.7,279.7,370.8);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.setTransform(0,18.9);

	this.instance_1 = new lib.vdvbdf();
	this.instance_1.setTransform(0,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:18.9}}]}).to({state:[{t:this.instance,p:{regX:66,regY:66.1,scaleX:1.071,scaleY:1.071,x:66,y:85}}]},1).to({state:[{t:this.instance,p:{regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:18.9}}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132,170);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fddfbf();
	this.instance.setTransform(67.5,82.7,1,1,0,0,0,36.5,36.5);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance.cache(-2,-2,77,77);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(65.6,84.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(65.6,84.2);

	this.instance_1 = new lib.Символ50();
	this.instance_1.setTransform(66,83.2,1,1,0,0,0,66,66);

	this.instance_2 = new lib.Символ48();
	this.instance_2.setTransform(66,83.2,1,1,0,0,0,66,66);
	this.instance_2.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 0, 112))];
	this.instance_2.cache(-2,-2,136,136);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.shape_1},{t:this.instance,p:{scaleX:1.158,scaleY:1.158}}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ48();
	this.instance_3.setTransform(66,83.2,0.962,0.962,0,0,0,65.9,66);
	this.instance_3.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 0, 112))];
	this.instance_3.cache(-2,-2,136,136);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:66,scaleX:1.08,scaleY:1.08},0).wait(1).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.5,0,131,168.4);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(22,20,1,1,0,0,0,22,22);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-47.5,278,345.6);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1 - копия
	this.instance = new lib.Символ3();
	this.instance.setTransform(139,196.6,1,1,0,0,0,139,149);

	// Слой 1
	this.instance_1 = new lib.Символ1копия();
	this.instance_1.setTransform(38,81.6,1,1,0,0,0,22,22);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300.3,382.7);


(lib.Символ54 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(320.8,315.5,1,1,0,0,0,320.8,25);

	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(330.4,172.8,1,1,0,0,0,148.8,172.8);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,641.5,382.7);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Слой 4
	this.instance = new lib.Символ57();
	this.instance.setTransform(85.6,159.3,1,1,0,0,0,66,85);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ57(), 3);

	this.instance_1 = new lib.Символ56();
	this.instance_1.setTransform(560.3,160.1,1,1,0,0,0,66,84.2);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ56(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(7));

	// Слой 3
	this.instance_2 = new lib.Символ55();
	this.instance_2.setTransform(321.2,187.7,1,1,0,0,0,329.6,162.1);
	this.instance_2.alpha = 0;
	this.instance_2.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0.172},6).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ54();
	this.instance_3.setTransform(320.8,188.2,1,1,0,0,0,320.8,188.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,0,659.2,382.7);


// stage content:



(lib.girl11_640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		{
			_this.qwe.gotoAndPlay(1);
		}
		
		
		
		
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		function fl_MouseOutHandler_2()
		{
			_this.qwe.gotoAndStop(0);
		}
		
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.qwe.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
				window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.qwe = new lib.Символ52();
	this.qwe.setTransform(320.3,152.7,1,1,0,0,0,320.8,188.2);

	this.timeline.addTween(cjs.Tween.get(this.qwe).wait(1));

	// Слой 2
	this.instance = new lib.Символ53();
	this.instance.setTransform(320.5,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(311,117,663.2,381.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;