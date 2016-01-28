(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bablo.jpg", id:"bablo"},
		{src:"images/levelsslide_03.jpg", id:"levelsslide_03"},
		{src:"images/levelsslide_06.jpg", id:"levelsslide_06"},
		{src:"images/levelsslide_09.jpg", id:"levelsslide_09"},
		{src:"images/levelsslide_12.jpg", id:"levelsslide_12"}
	]
};



// symbols:



(lib.bablo = function() {
	this.initialize(img.bablo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,325,223);


(lib.levelsslide_03 = function() {
	this.initialize(img.levelsslide_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,26);


(lib.levelsslide_06 = function() {
	this.initialize(img.levelsslide_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,15);


(lib.levelsslide_09 = function() {
	this.initialize(img.levelsslide_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,16);


(lib.levelsslide_12 = function() {
	this.initialize(img.levelsslide_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,17);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],0,51.1,0,-50.9).s().p("EhNLAH+IAAv7MCaXAAAIAAP7g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-494,-51,988,102);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("Eg+3AKTIAA0lMB9vAAAIAAUlg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("ABUBLIgBhDQABgUgGg5QgBgmALgOIitAAIAADuIgBABIAAAEIClAAQAGADAEAHIgFAKIitAAQgIgDgCgEQgBgDADgEIABgBQgGgbgCgjIAAgFIgBgsIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgHIAAgCIgChKQAAgmAIgMIAAgBQgBgLALgDIC7AAQAGACAEAIIgEAKIgEAAIAEAFIAAD9IgLAFQgHgcgCgng");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.9,-14.2,21.8,28.5);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADHBAQgLgGgHgJQgIgKgCgMQgDgNAAgOQAAgNADgNQACgMAIgKQAHgJALgGQAMgFAQgBQAQABAMAFQAMAGAGAJQAIAKADAMQADANAAANQAAAOgDANQgDAMgIAKQgGAJgMAGQgMAFgQABQgQgBgMgFgADQgyQgIAEgFAGQgFAIgCAJQgDALAAAMQAAANADAKQACAKAFAIQAFAGAIAEQAIADALAAQAMAAAHgDQAJgEAFgGQAEgIADgKQACgKAAgNQAAgMgCgLQgDgJgEgIQgFgGgJgEQgHgDgMAAQgLAAgIADgAG1BEIAAiHIBaAAIAAAQIhKAAIAAApIBCAAIAAAPIhCAAIAAAuIBNAAIAAARgAGLBEIgOgXIgVgYIgNgKQgGgEgIgCIAAgOIAOADIANACQAGAAAGgCQAFgBAEgDQAEgDACgEIACgJIAAgBIgBgJQgBgFgEgDQgDgEgGgDQgGgCgJAAIghABIAAB4IgRAAIAAiHIAwgCQAOAAAJAEQAKADAGAGQAGAFADAIQACAHAAAJIAAABQAAAQgKAJQgKAHgSACQAIAGAHAIIAMAOIAKAQIAHAQgACABEIAAhwIgeAvIgKAYIgPAAIgDgKIgOgaIgWgjIAABwIgRAAIAAiHIATAAIAIAIIAeAxIAFAKIACAGIACgGIAbgwIAIgLIAHgIIAUAAIAACHgAifBEIAAiHIAxgCQAQAAAMAGQAMAFAHAIQAIAJADANQAEAMAAAPQAAAPgEANQgDAOgHAJQgJAIgLAFQgMAFgRAAgAiOg0IAABnIAfAAQAMAAAIgDQAIgDAGgGQAFgGADgKQADgKAAgNQAAgbgLgNQgLgNgWAAgAi+BEIgTg/IgtAAIAAgDIACgCIADgIIAAgCIAiAAIgSgpIgFAAIggBTIgJAkIgSAAIAMgtIAbhGIAKgUIAaAAIAlBaIAMAtgAmRBEIAAiHIBaAAIAAAQIhJAAIAAApIBBAAIAAAPIhBAAIAAAuIBMAAIAAARgAm6BEIgGgLIgSgYIgLgMIgOgKQgGgEgHgCIAAgOIANADIANACQAHAAAFgCQAGgBAEgDQAEgDACgEIABgJIAAgBIAAgJQgCgFgEgDQgDgEgGgDQgGgCgIAAIgiABIAAB4IgRAAIAAiHIAwgCQAOAAAKAEQAJADAHAGQAGAFADAIQACAHAAAJIAAABQAAAQgKAJQgLAHgRACQAIAGAGAIIANAOIAKAQIAHAQg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53,-7,106,14);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().rr(-90,-28.8,180,57.6,9.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-90,-28.8,180,57.6);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bablo();
	this.instance.setTransform(-110,-75.5,0.677,0.677);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-110,-75.5,220.2,151.1);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AkDBOIgCAAIgDAAIgCgBIAAgOIACABIADABIACAAIACAAIAFgBIAGgEIAFgHIAGgKIgehKIgDgLIAOAAIAEAPIAWA2IAIgTIAOgyIAPAAIgRA4IgTAqIgIALQgFAFgFADQgFADgHAAIgCAAgANBAsQgFgCgEgEQgEgDgDgHQgCgFAAgKIAAgqIgMAAIAAgNIAMAAIAAgUIAOgHIAAAbIAUAAIAAANIgUAAIAAAqIABAKIADAFIAFAEIALAAIAEAAIAAAMIgJABIgLgBgAHpAsQgFgCgEgEQgEgDgCgHQgDgFAAgKIAAgqIgMAAIAAgNIAMAAIAAgUIAOgHIAAAbIAUAAIAAANIgUAAIAAAqIABAKIADAFIAFAEIALAAIAEAAIAAAMIgJABIgLgBgAFlArQgHgDgGgFQgFgFgDgJQgDgIAAgMQAAgHACgIQABgGAEgGQADgFAEgEIAIgFIAKgDIAKgBIALABIAIACIAAgjIAOAAIAAB3IgNAAIAAgIQgEAFgGADQgHABgHABQgIgBgGgBgAFtgfQgFACgEAEQgEADgCAHQgCAHAAAIQAAAKABAGQADAGADAEQADAEAFABIAKABIAHAAIAGgEIAEgDIAEgEIAAgwQgDgCgFgCIgLgBIgKABgAEYAtQgLgBgIgCQgIgEgFgFQgFgGgDgIQgCgJAAgKQAAgIACgJQADgJAFgGQAFgGAHgDQAIgDAJAAQAKAAAHADQAIADAEAGQAFAGADAJQACAIAAAJIAAACIg/AAQAAAPAGAIQAHAHAOAAIARAAIAOgFIABAOIgXAEgAEtgIQgBgLgGgHQgGgGgLAAIgJABIgHAFQgEADgBAFQgDAFAAAFIAwAAIAAAAgABwAiQgLgMAAgWQAAgJADgIQACgJAGgGQAFgGAHgDQAIgDAKAAIAWADIAAANIgKgDIgMgBQgGAAgFACQgEACgEAEQgEAEgCAGQgCAGAAAIQAAAJACAHQACAGAEAEQAEADAEACIAMABIAMAAIAJgDIAAANIgJACIgLABQgWAAgKgLgAhLAlQgIgHAAgOIAAg6IAOAAIAAA3IABAIIADAGIAGAFIAJAAIAHAAIAHgDIAEgCIADgEIAAhBIAOAAIAABVIgMAAIAAgIIgGAEIgGAEIgHABIgIABQgOgBgHgHgAieApQgIgDgEgGQgFgHgCgIQgCgIAAgJQAAgIACgIQACgIAFgHQAEgGAIgEQAHgDALAAQALAAAHADQAHAEAFAGQAFAHACAIQACAIAAAIQAAAJgCAIQgCAIgFAHQgFAGgHADQgHADgLABQgLgBgHgDgAiXgdQgFACgDAEQgDAEgBAGQgCAHAAAGQAAAHACAGQABAGADAFQADAEAFACQAFACAGAAQAGAAAFgCQAFgCADgEQADgFABgGQACgGAAgHQAAgGgCgHQgBgGgDgEQgDgEgFgCQgFgDgGAAQgGAAgFADgAl6AqQgIgEgFgFQgFgGgCgIQgDgJAAgKQAAgIADgJQACgJAGgGQAEgGAIgDQAHgDAKAAQAKAAAHADQAHADAFAGQAFAGACAJQADAIAAAJIAAACIhAAAQAAAPAHAIQAGAHAPAAIAQAAIAPgFIAAAOIgOADIgRABQgLgBgJgCgAlRgIQgCgLgFgHQgHgGgKAAIgKABIgHAFQgDADgCAFQgCAFgBAFIAxAAIAAAAgAnWArIgGgCIAAgNIAMADIAQABIAIAAQADgBACgCQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQACgDAAgDQAAgFgCgDQgCgDgEgBIgYgIIgIgCQgDgDgCgEQgCgEAAgGQAAgHADgEQACgFAEgDQAEgDAGgBQAGgCAHAAIANABIAJACIAAANIgWgEIgIABIgFACIgEADIgBAGIAAABQABADABACQADADADABIAYAIIAIACQADAEACAEQACAFAAAHQAAAGgCAEQgDAGgEACQgEAEgGACIgNABgAonApQgIgDgEgGQgFgHgCgIQgCgIAAgJQAAgIACgIQACgIAFgHQAEgGAIgEQAHgDALAAQALAAAHADQAHAEAFAGQAFAHACAIQACAIAAAIQAAAJgCAIQgCAIgFAHQgFAGgHADQgHADgLABQgLgBgHgDgAoggdQgFACgDAEQgDAEgBAGIgBANIABANQABAGADAFQADAEAFACQAFACAGAAQAGAAAFgCQAFgCADgEQADgFABgGQACgGAAgHQAAgGgCgHQgBgGgDgEQgDgEgFgCQgFgDgGAAQgGAAgFADgAqEApQgIgDgEgGQgFgHgCgIQgCgIAAgJQAAgIACgIQACgIAFgHQAEgGAIgEQAHgDALAAQALAAAHADQAIAEAFAGQAEAHACAIQACAIAAAIQAAAJgCAIQgCAIgEAHQgFAGgIADQgHADgLABQgLgBgHgDgAp9gdQgFACgDAEQgDAEgBAGQgBAHAAAGQAAAHABAGQABAGADAFQADAEAFACQAFACAGAAQAHAAAFgCQAEgCADgEQADgFABgGQACgGAAgHQAAgGgCgHQgBgGgDgEIgHgGQgFgDgHAAQgGAAgFADgAs1ApQgLgFgHgIQgHgHgDgMQgDgJAAgQQAAgNADgLQAEgMAHgIQAIgIAMgEQAMgFAQAAIAYABIAAAQIgfgDQgTgBgLAMQgKAMAAAYQAAANADAIQACAJAGAGQAFAFAIADQAHADAKAAIAegEIAAAPIgFABIgZACQgOgBgLgDgAMGArIAAhVIAOAAIAABVgALiArIAAg4IgBgIQgBgDgCgDQgBgCgEgCIgIgBIgHABIgHADIgEACIgCADIAABCIgOAAIgBg/QAAgDgCgDIgFgFIgJgBIgHABIgGACIgEADIgEADIAABCIgOAAIAAhVIANAAIAAAHIAEgDIAGgDIAHgCIAIgBQAIAAAGADQAGADADAFQAFgFAHgDQAHgDAJAAQAHAAAFACQAGADADADQADAEACAGQACAFAAAHIAAA5gAJXArIAAhVIAOAAIAABVgAIzArIAAh3IAOAAIAAB3gAGuArIAAhVIAOAAIAABVgAC0ArIAAhVIANAAIAAAHIAEgDIAGgDIAIgCIAJgBIAEAAIADABIAAAOIgFgCIgGgBIgIABIgGADIgEACIgDADIAABCgAAFArIAAhVIANAAIAAAHIAEgDIAGgDIAHgCIAJgBIAEAAIAEABIAAAOIgFgCIgHgBIgHABIgGADIgFACIgDADIAABCgAq6ArIAAhAQgBgDgCgDQgCgCgEgCIgJgBIgGABIgHACIgEADIgEADIAABCIgOAAIAAh3IAOAAIAAAoIAFgEIAGgCIAGgCIAIAAQAOAAAHAHQAIAIAAANIAAA7gAMGg6IAAgSIAOAAIAAASgAJXg6IAAgSIAOAAIAAASgAGug6IAAgSIAOAAIAAASg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-85.3,-7.8,170.8,15.7);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#336633").s().p("ABvBbIAAgUIASAEIASACQALAAAIgEQAIgEAFgFQAGgGAEgHQADgJACgIIAEgkIgEgjQgCgIgDgIQgEgGgFgFQgFgEgHgDQgHgDgIAAQgIAAgIADQgHADgFAFQgFAGgDAHQgDAJAAAKQAAAJADAGQADAIAEAEQAFAEAHACQAHAEAJAAIAKAAIAKgEIAJgCIAHgHIgBAWQgIAGgKACQgKADgLAAQgMgBgLgEQgLgEgHgIQgIgIgEgIQgEgKAAgOQAAgPAFgMQAFgMAIgIQAJgIALgEQALgFANAAQAIAAAJADQAIACAHADQAIAFAGAHQAGAGAFALQAFAKACANQADAOAAARQAAAZgGAUQgFATgKAMQgKAMgNAGQgNAFgQABgAgrBbIAAgUIASAEIASACQAJAAAIgEQAIgEAFgFQAGgGAEgHQADgJACgIIAEgkIgEgjQgCgIgDgIQgEgGgFgFQgFgEgHgDQgHgDgGAAQgIAAgIADQgHADgFAFQgFAGgDAHQgDAJAAAKQAAAJADAGQADAIAEAEQAFAEAHACQAHAEAJAAIAIAAIAKgEIAJgCIAHgHIgBAWQgIAGgKACQgKADgJAAQgMgBgLgEQgLgEgHgIQgIgIgEgIQgEgKAAgOQAAgPAFgMQAFgMAIgIQAJgIALgEQALgFANAAQAGAAAJADQAIACAHADQAIAFAGAHQAGAGAFALQAFAKACANQADAOAAARQAAAZgGAUQgFATgKAMQgKAMgNAGQgNAFgOABgAjHBbIAAgUIASAEIASACQALAAAIgEQAIgEAFgFQAGgGAEgHQADgJACgIIADgTIAAgjIgDgRQgCgIgDgIQgEgGgFgFQgFgEgHgDQgHgDgIAAQgIAAgIADQgHADgFAFQgFAGgDAHQgDAJAAAKQAAAJADAGQADAIAEAEQAFAEAHACQAHAEAJAAIAKAAIAKgEIAJgCIAHgHIgBAWQgIAGgKACQgKADgLAAQgMgBgLgEQgLgEgHgIQgIgIgEgIQgEgKAAgOQAAgPAFgMQAFgMAIgIQAJgIALgEQALgFANAAQAIAAAJADQAIACAHADQAIAFAGAHQAGAGAFALQAFAKACANQADAOAAARQAAAZgGAUQgFATgKAMQgKAMgNAGQgNAFgQABg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22,-9.6,44.2,19.2);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AANA9QgIgEgFgHQgEgHgCgJQgCgKAAgLQAAgKACgHQACgKAEgHQAFgHAIgEQAJgEAMAAQAMAAAIAEQAJAEAFAHQAFAHADAKQACAHAAAKQAAALgCAKQgDAJgFAHQgFAHgJAEQgIAEgMAAQgMAAgJgEgAAVgTQgFACgDAFQgEAFgBAHQgCAFAAAIQAAAJACAHQABAHAEAFQADAFAFACQAGADAHAAQAHAAAGgDQAFgCADgFQAEgFABgHQACgHAAgJQAAgIgCgFQgBgHgEgFQgDgFgFgCQgGgDgHAAQgHAAgGADgAgrA/QgGgBgFgEQgEgEgDgHQgCgHAAgLIAAgwIgOAAIAAgPIAOAAIAAgWIAQgIIAAAeIAWAAIAAAPIgWAAIAAAwIABALIADAHQADACADABIAMABIAFgBIAAAOIgLABQgHAAgFgCg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.8,-6.5,15.8,13.1);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#336633").s().p("AgWBbQgKgEgHgGQgHgHgFgJQgEgJgDgLIgDgVIAAgsQABgMACgKQADgLAEgJQAFgKAHgHQAHgHAKgEQAKgFAMAAQANAAAKAFQAKAEAHAHQAIAIAEAJQAEAJADALQACALABAMIAAAqQgBALgCALQgDAKgEAJQgEAJgIAHQgHAIgKADQgKAFgNAAQgMAAgKgFgAgOhIQgHAEgEAGQgEAFgDAIIgEAQIgCASIAAAhIACARIAEARQADAGAEAGQAFAGAGADQAHAEAHAAQAJAAAGgEQAHgDAEgGQAFgGACgGIAFgRIACgRIAAghIgCgSIgFgQQgCgIgFgFQgEgGgHgEQgGgEgJAAQgIAAgGAEg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.2,-9.6,12.6,19.2);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgeBBQgJgDgFgIQgFgGgCgKQgDgJABgLQgBgKADgIQACgJAFgHQAFgHAJgEQAJgEAMAAQAKAAAIAEQAJAEAFAHQAFAHACAJQADAIAAAKQAAALgDAJQgCAKgFAGQgFAIgJADQgIAFgKAAQgMAAgJgFgAgWgPQgGADgDAEQgDAFgBAFQgCAIAAAIQAAAJACAHQABAHADAFQADAEAGADQAFADAIgBQAHABADgDQAFgDAEgEQADgFACgHQABgHABgJQgBgIgBgIQgCgFgDgFQgEgEgFgDQgDgCgHAAQgIAAgFACgACqBEIAAhCIgBgHQgBgEgDgCQgBgEgEgBQgDgBgGAAIgJABIgHACIgEAEIgEADIAABLIgQAAIAAhIQgBgEgCgCQgCgEgDgCQgEgBgGAAIgIAAIgGADIgGAEIgDADIAABLIgQAAIAAhhIAOAAIAAAIIAEgEIAHgCIAIgDIAKgBQAIAAAHAEQAGACAEAHQAGgGAHgDQAJgEAJAAQAIAAAHADQAGACAEAEQADAFACAGQADAGAAAGIAABDgAh1BEIAAhhIAOAAIAAAIIAFgEIAGgCIAJgDIAKgBIAEAAIAFABIAAAPIgHgCIgHAAIgIABIgHACIgFAEIgDADIAABLgAiqBEIAAhTIgPAAIAAgOIAPAAIAAgEQgBgLADgHQADgGAEgFQAFgDAFgCQAGgBAHgBIALABIAAAPIgGgBIgLAAQgDABgDACIgDAHIgBALIAAAEIAVAAIAAAOIgVAAIAABTg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.6,-7,37.2,14);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,1],0,-16.7,0,0,-16.7,12.5).s().p("AhaBYQgmhGAAhhQAAgpAGgkID1AAQAHAkgBApQAABhgmBGQgmBFg1AAQg0AAgmhFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13,-15.7,26,31.5);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.levelsslide_12();
	this.instance.setTransform(-7,-8.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7,-8.5,14,17);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.levelsslide_09();
	this.instance.setTransform(-6,-8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6,-8,12,16);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.levelsslide_06();
	this.instance.setTransform(-5,-7.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,-7.5,10,15);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.levelsslide_06();
	this.instance.setTransform(-5,-7.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,-7.5,10,15);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance.cache(-13,-16,26,33);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.9,-16.2,28,36);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.9,-16.2,28,36);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ22();
	this.instance.setTransform(3.9,-1.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Слой 1
	this.instance_1 = new lib.Символ20();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#669933").s().rr(-90,-28.8,180,57.6,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.shape}]},1).wait(1));

	// Слой 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9933").s().rr(-90,-28.8,180,57.6,9.2);
	this.shape_1.setTransform(0,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666633").s().rr(-90,-28.8,180,57.6,9.2);
	this.shape_2.setTransform(0,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-28.8,180,59.2);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ21();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-90,-28.8,180,59.2);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(35.2,0,0.651,0.651);

	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(5.9,-0.3,0.651,0.651);

	this.instance_2 = new lib.Символ10();
	this.instance_2.setTransform(-11.9,0,0.651,0.651);

	this.instance_3 = new lib.Символ9();
	this.instance_3.setTransform(-37.4,-1.1,0.651,0.651);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.5,-6.2,99.1,12.5);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-8.3,x:9,y:-14.6},10,cjs.Ease.get(-1)).to({rotation:-16.7,x:17.9,y:-29.3},10,cjs.Ease.get(1)).to({rotation:-8,x:8.7,y:-14.2},17,cjs.Ease.get(-1)).to({rotation:0,x:0,y:0},16,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-75.5,220.2,151.1);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.609},9).to({alpha:1},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.3,-7.8,170.8,15.7);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.levelsslide_03();
	this.instance.setTransform(-9.3,-22);

	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(0,12,0.825,0.634,0,0,0,0,-0.1);
	this.instance_1.alpha = 0.609;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.7,-22,21.5,44);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(-0.2,9.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.9,-12.5,21.5,44);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({x:142},0).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.9,-16.2,28,36);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 5
	this.instance = new lib.Символ5();
	this.instance.setTransform(71.2,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({x:82},10,cjs.Ease.get(-1)).to({x:92.8},10,cjs.Ease.get(1)).to({x:82},10,cjs.Ease.get(-1)).to({x:71.2},10,cjs.Ease.get(1)).wait(1));

	// Символ 5
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(-70.7,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-89.6},11,cjs.Ease.get(-1)).to({x:-111.9},13,cjs.Ease.get(1)).to({x:-90.5},13,cjs.Ease.get(-1)).to({x:-70.7},12,cjs.Ease.get(1)).wait(41));

	// Символ 6
	this.instance_2 = new lib.Символ6();
	this.instance_2.setTransform(-0.2,-8,9.354,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:10.71,x:-9.7},11,cjs.Ease.get(-1)).to({scaleX:12.32,x:-21.3},13,cjs.Ease.get(1)).to({scaleX:10.78,x:-10.2},13,cjs.Ease.get(-1)).to({scaleX:9.35,x:-0.2},12,cjs.Ease.get(1)).to({scaleX:10.29,x:6.3},10,cjs.Ease.get(-1)).to({scaleX:11.22,x:12.9},10,cjs.Ease.get(1)).to({scaleX:10.29,x:6.5},10,cjs.Ease.get(-1)).to({scaleX:9.35,x:-0.2},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.7,-22,163.5,44);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 3
	this.instance = new lib.Символ26();
	this.instance.setTransform(11.6,0.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(82.3,9.5);

	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(185.5,2,6.333,1);

	this.instance_3 = new lib.Символ4();
	this.instance_3.setTransform(-28,2,6.333,1);

	this.instance_4 = new lib.Символ3();
	this.instance_4.setTransform(-71,1.5);

	this.instance_5 = new lib.Символ2();
	this.instance_5.setTransform(228.5,1.5,1,1,0,0,180);

	this.instance_6 = new lib.Символ5();
	this.instance_6.setTransform(153.5,0);

	this.instance_7 = new lib.Символ5();
	this.instance_7.setTransform(11.5,0);

	this.instance_8 = new lib.Символ6();
	this.instance_8.setTransform(82,1.5,9.354,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{x:228.5}},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_5,p:{x:228.2}},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-12.5,309.5,44);


// stage content:



(lib.begunok_72890 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		  bodyStyle.margin = 0;
		  bodyStyle.padding = 0;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		this.bt.addEventListener("mouseover", fl_mouseover.bind(this));
		
		function fl_mouseover()
		{
			this.polz.gotoAndStop(1);
		}
		
		
		this.bt.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout()
		{
			this.polz.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Символ 18
	this.instance = new lib.Символ19();
	this.instance.setTransform(623.6,44.8);

	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(367.6,75.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.bt = new lib.Символ27();
	this.bt.setTransform(346.5,46);
	new cjs.ButtonHelper(this.bt, 0, 1, 2, false, new lib.Символ27(), 3);

	this.timeline.addTween(cjs.Tween.get(this.bt).wait(1));

	// Символ 14
	this.instance_2 = new lib.Символ14();
	this.instance_2.setTransform(371.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 1
	this.polz = new lib.Символ1();
	this.polz.setTransform(286.9,46);

	this.timeline.addTween(cjs.Tween.get(this.polz).wait(1));

	// Слой 5
	this.instance_3 = new lib.Символ29();
	this.instance_3.setTransform(350.1,83.8,1,0.228,180);
	this.instance_3.alpha = 0.199;

	this.instance_4 = new lib.Символ29();
	this.instance_4.setTransform(336.1,6.6,1,0.228);
	this.instance_4.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// Символ 17
	this.instance_5 = new lib.Символ17();
	this.instance_5.setTransform(61.4,47.2,1,1,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(206.1,-27.7,1002,239.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;