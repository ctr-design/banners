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
		{src:"images/girl.png", id:"girl"},
		{src:"images/kur.png", id:"kur"},
		{src:"images/plat.png", id:"plat"},
		{src:"images/vish.png", id:"vish"}
	]
};



// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.girl = function() {
	this.initialize(img.girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,197,281);


(lib.kur = function() {
	this.initialize(img.kur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,138);


(lib.plat = function() {
	this.initialize(img.plat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,296,193);


(lib.vish = function() {
	this.initialize(img.vish);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,57);


(lib.Символ39копия = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.7,1,1).p("AAZAAQAAAKgIAHQgHAHgKAAQgJAAgIgHQgHgHAAgKQAAgJAHgHQAIgHAJAAQAKAAAHAHQAIAHAAAJg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,7,7);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AAZAAQAAAKgIAHQgHAHgKAAQgJAAgIgHQgHgHAAgKQAAgJAHgHQAIgHAJAAQAKAAAHAHQAIAHAAAJg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,7,7);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.vish();
	this.instance.setTransform(-14.1,-22.4,0.786,0.786);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.1,-22.4,28.3,44.8);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("ACMAAQAAA6gpApQgpApg6AAQg5AAgpgpQgpgpAAg6QAAg5ApgpQApgpA5AAQA6AAApApQApApAAA5g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15,-15,30.1,30.1);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AAoAAQAAAQgMAMQgMAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,0,0,0.318)").s().p("AgbAbQgMgLABgQQgBgPAMgMQAMgMAPABQAQgBALAMQAMAMAAAPQAAAQgMALQgLAMgQAAQgPAAgMgMg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,-5,10,10);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egx/AX0MAAAgvnMBj/AAAMAAAAvng");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLA2IgKgCQgMgFgEgCQgHgFgDgGQgDgFAAgGQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAABAAIASAAQAEAAACABQACACABADQACADAEABQAEADAHAAQAFAAAIgDQAEgDAAgEQAAgDgDgDQgEgDgFAAIgNAAQgGAAAAgFIAAgOQAAgEAGgBIALAAQAFAAADgCQADgDAAgDQAAgDgEgCQgEgDgGAAQgFAAgEADIgFAEQgBAEgCABQgCABgEAAIgSAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgGADgFQADgGAGgFQAHgEAJgDIAJgCIAKgBQAIAAANACQAJADAGAFQAGAEADAFQADAGAAAFQAAARgTAFIAAACQAWACAAAVQAAAGgDAGQgDAFgHAFQgJAFgHACQgOADgIAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.2,-5.5,10.4,11.1);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcA0QgDAAgDgCIgDgEIgTgaIAAAAIgSAaQgEAGgFAAIgaAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAkguIghguQAAAAgBgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBABAAQAAAAABAAIAaAAQADAAAGAFIAPAZIAAAAIARgZIADgDQADgCADAAIAZAAQABAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIghAuIAkAuQAAABABAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape.setTransform(0.1,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.9,-5.2,11.9,10.5);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.vish();
	this.instance.setTransform(-14,-22.1,0.778,0.778);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14,-22.1,28,44.3);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqA2IgMgDIgLgFIgJgGIgHgIQgDgEgBgFIgDgMQgCgFAAgGQAAgFACgFIADgMQABgFADgEIAHgIIAJgGIALgFIAMgDIAOgBIAOABIAMADIAJAFIAJAGIAHAIIAFAJIADAMIAAAKIAAALIgDAMIgFAJIgHAIIgJAGIgJAFIgMADIgOABIgOgBgAgngbQgFABgEAEQgDAFgCAFQgCAGAAAGQAAAHACAGQACAFADAFQAEADAFACQAFACAGAAQAGAAAFgCQAFgCAEgDQADgFACgFQACgGAAgHQAAgGgCgGQgCgFgDgFQgEgEgFgBQgFgCgGAAQgGAAgFACgAlZA2IgMgDIgLgFIgJgGIgHgIQgDgEgBgFIgDgMQgCgFAAgGQAAgFACgFIADgMQABgFADgEIAHgIIAJgGIALgFIAMgDIAOgBIAOABIAMADIALAFIAJAGIAHAIIAFAJIADAMIAAAKIAAALIgDAMIgFAJIgHAIIgJAGIgLAFIgMADIgOABIgOgBgAlWgbQgFABgEAEQgDAFgCAFQgCAGAAAGQAAAHACAGQACAFADAFQAEADAFACQAFACAGAAQAGAAAFgCQAFgCAEgDQADgFACgFQACgGAAgHQAAgGgCgGQgCgFgDgFQgEgEgFgBQgFgCgGAAQgGAAgFACgAJbA0QgDAAgCgCQgCgDAAgCIAAgLQAAgDACgCQACgCADAAIAPAAQADAAACACQADACAAADIAAALQAAACgDADQgCACgDAAgAHgA0QgFAAAAgGIAAhcQAAgFAFAAIAXAAQAFAAAAAFIAAAbIAZAAQAIAAAOACQAGACAKAGIAFAFIAEAEQADAHAAAIQAAAIgDAHIgEAGIgFAGQgKAFgGACQgOADgIAAgAH8AcIAZAAIAHgBIAFgCQADgEAAgGQAAgGgDgDIgFgDIgHgBIgZAAgAErA0QgFAAAAgGIAAhcQAAgFAFAAIAWAAQAFAAAAAFIAABJIAfAAIAAhJQAAgFAFAAIAWAAQAFAAAAAFIAABJIAfAAIAAhJQAAgFAFAAIAWAAQAFAAAAAFIAABcQAAAGgFAAgAC0A0QgFAAAAgGIAAhcQAAgFAFAAIBcAAQAFAAAAAFIAAAPQAAAGgFgBIhAAAIAAAOIAvAAQAGAAAAAFIAAANQAAAGgGgBIgvAAIAAAQIBAAAQAFAAAAAFIAAAOQAAAGgFAAgAB9A0QgFAAAAgGIAAgdQgNADgMAAIgMAAIgJgDIgJgDIgGgFIgGgGIgDgEQgCgGgBgLIAAgcQAAgFAFAAIAWAAQAFAAAAAFIAAAcQAAAEACACQABADACACIAGADIAJABQAJAAAMgDIAAgoQAAgFAFAAIAXAAQAFAAAAAFIAABcQAAAGgFAAgAiAA0QgDAAgCgCIgEgEIgTgaIgBAAIgTAaQgEAGgFAAIgaAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAkguIghguQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQABAAAAAAIAaAAQAEAAAFAFIAQAZIABAAIARgZIADgDQADgCADAAIAaAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAIghAuIAkAuQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAgAnSA0QgFAAAAgGIAAhIIggAAQgFABAAgGIAAgPQAAgFAFAAIBgAAQAGAAAAAFIAAAPQAAAGgGgBIgfAAIAABIQAAAGgGAAgAolA0QgFAAAAgGIAAgdQgNADgMAAIgMAAIgJgDIgJgDIgGgFIgGgGIgDgEQgCgGgBgLIAAgcQAAgFAFAAIAWAAQAFAAAAAFIAAAcQAAAEACACQABADACACIAGADIAJABQAJAAAMgDIAAgoQAAgFAFAAIAXAAQAFAAAAAFIAABcQAAAGgFAAgAJaASQgFAAgBgFIgDg7QAAgBABAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAYAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQABABAAAAQAAABAAAAQAAAAAAABIgDA7QAAAFgFAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.8,-5.5,125.7,11.1);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlnA2IgMgDIgKgFIgJgGIgHgIQgDgEgCgFIgDgMQgBgFAAgGQAAgFABgFIADgMQACgFADgEIAHgIIAJgGIAKgFIAMgDIAPgBIAOABIAMADIAKAFIAJAGIAHAIIAFAJIADAMIABAKIgBALIgDAMIgFAJIgHAIIgJAGIgKAFIgMADIgOABIgPgBgAlkgbQgFABgDAEQgEAFgCAFQgCAGAAAGQAAAHACAGQACAFAEAFQADADAFACQAFACAHAAQAGAAAFgCQAFgCADgDQAEgFACgFQABgGAAgHQAAgGgBgGQgCgFgEgFQgDgEgFgBQgFgCgGAAQgHAAgFACgAGwA0QgFAAAAgGIAAhcQAAgFAFAAIAWAAQAFAAAAAFIAAAbIAZAAQAJAAAOACQAGACAJAGIAGAFIADAEQADAHAAAIQAAAIgDAHIgDAGIgGAGQgJAFgGACQgOADgJAAgAHLAcIAZAAIAHgBIAFgCQAEgEAAgGQAAgGgEgDIgFgDIgHgBIgZAAgAD6A0QgFAAAAgGIAAhcQAAgFAFAAIAXAAQAFAAAAAFIAABJIAeAAIAAhJQAAgFAFAAIAXAAQAFAAAAAFIAABJIAeAAIAAhJQAAgFAFAAIAXAAQAFAAAAAFIAABcQAAAGgFAAgADDA0QgFAAAAgGIAAg0IgCAAIgmA0QgEAGgEAAIgZAAQgFAAAAgGIAAhcQAAgFAFAAIAWAAQAFAAAAAFIAAA1IACAAIAmg1IADgDQACgCADAAIAZAAQAFAAAAAFIAABcQAAAGgFAAgAA+A0QgGAAAAgGIAAgdQgNADgMAAIgLAAIgKgDIgIgDIgFgFIgFgGIgEgEQgCgGgBgLIAAgcQAAgFAFAAIAVAAQAFAAAAAFIAAAcQAAAEABACQABADADACIAGADIAIABQAJAAAMgDIAAgoQAAgFAGAAIAWAAQAGAAAAAFIAABcQAAAGgGAAgAhxA0QgGAAAAgGIAAgQQAAgFAGAAIAGAAIALACIABAAQAFgBADgCQADgCABgDIAAgCIgDAAQgJAAgIgCQgHgCgFgFQgFgEgFgEQgEgHgDgIIgNgfQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAABAAIAWAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABAAIADAEIAMAfQACAEADADQADACAEAAIAMAAIAPgoIADgEQABAAAAAAQABAAAAgBQABAAABAAQAAAAABAAIAWAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABIgZBBQgCAIgEAGQgEAGgGAEQgFAEgHADQgHACgKAAgAi4A0QgFAAAAgGIAAhIIgSAAIgHABIgFADQgEAEgBAGIgPA6QgCAGgEAAIgXAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAPg6QACgJAEgHQAEgHAGgGQAEgDALgEQAGgCAOgBIAuAAQAFAAAAAFIAABcQAAAGgFAAgAnEA0QgFAAAAgGIAAhIIgsAAIAABIQAAAGgFAAIgWAAQgFAAAAgGIAAhcQAAgFAFAAIBjAAQAFAAAAAFIAABcQAAAGgFAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.5,-5.5,107,11.1);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEfA0IgJgEIgHgEIgGgHIgFgHQgEgIgCgJIgPAAIAAAhQAAAGgFAAIgWAAQgGAAAAgGIAAhcQAAgFAGAAIAWAAQAFAAAAAFIAAAkIAPAAQABgHAFgLIAFgIIAGgGIAHgFIAJgEIALgCIAMgBIANABIALADQAFACAEADQAFACADAEIAHAHIAFAKIADALIABALIgBAMIgDALQgCAFgDAEQgDAEgEAEQgDAEgFACQgEADgFACIgLADIgNABgAEtgbQgEABgDAEQgEAEgBAGQgBAGgBAGQABAHABAGQABAGAEAEQADADAEACQAEACAFAAQAEAAAEgCQAFgCADgDQADgEACgGQABgGAAgHQAAgGgBgGQgCgGgDgEQgDgEgFgBQgEgCgEAAQgFAAgEACgACcA0QgGAAABgGIAAghIgsAAIAAAhQAAAGgFAAIgWAAQgFAAgBgGIAAhcQABgFAFAAIAWAAQAFAAAAAFIAAAkIAsAAIAAgkQgBgFAGAAIAXAAQAFAAAAAFIAABcQAAAGgFAAgAhkA0QgFAAAAgGIAAhcQAAgFAFAAIAWAAQAGAAAAAFIAABJIAeAAIAAhJQAAgFAFAAIAWAAQAGAAAAAFIAABJIAcAAIAAhJQAAgFAFAAIAWAAQAGAAAAAFIAABcQAAAGgGAAgAibA0QgGAAAAgGIAAg0IgBAAIgmA0QgEAGgEAAIgZAAQgFAAgBgGIAAhcQABgFAFAAIAWAAQAFAAAAAFIAAA1IACAAIAlg1IAEgDQACgCACAAIAaAAQAFAAAAAFIAABcQAAAGgFAAgAlpA0QgFAAAAgGIAAhcQAAgFAFAAIA2AAQAIAAAMACQAIADAFADQAGAEACAGQAEAFAAAGQAAAQgQAEIAAABQAXADgBATQAAAGgCAGQgDAGgGAEQgFAEgIADQgNACgIAAgAlNAcIAgAAQAFAAADgCQADgDAAgEQAAgEgDgDQgDgCgFAAIggAAgAlNgMIAaAAQAFAAADgCQACgCAAgDQAAgEgCgCQgDgCgFAAIgaAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.7,-5.5,73.5,11.1);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AD1A2IgMgDIgKgFIgJgGIgHgIQgDgEgBgFIgEgMQgBgFAAgGQAAgFABgFIAEgMQABgFADgEIAHgIIAJgGIAKgFIAMgDIAPgBQAJAAAOADQAHACAKAGQAGAFAFAHQADAGAAAHQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAgBAAIgSAAQgDAAgCgCIgEgEQgEgFgEgDIgFgCIgHgBQgGAAgFACQgGABgDAEQgEAFgCAFQgBAGAAAGQAAAHABAGQACAFAEAFQADADAGACQAFACAGAAIAIgBQADAAADgCQAEgEADgGIAEgEQACgCADAAIATAAQABAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAAIgDAGQgHAJgEADQgLAHgGACQgPADgJAAIgPgBgABtA2IgMgDIgKgFIgJgGIgHgIQgDgEgCgFIgDgMQgCgFABgGQgBgFACgFIADgMQACgFADgEIAHgIIAJgGIAKgFIAMgDIAPgBIANABIANADIAKAFIAJAGIAHAIIAFAJIADAMIABAKIgBALIgDAMIgFAJIgHAIIgJAGIgKAFIgNADIgNABIgPgBgABwgbQgFABgDAEQgEAFgCAFQgCAGAAAGQAAAHACAGQACAFAEAFQADADAFACQAFACAHAAQAGAAAFgCQAEgCAEgDQADgFADgFQABgGAAgHQAAgGgBgGQgDgFgDgFQgEgEgEgBQgFgCgGAAQgHAAgFACgAmMA2IgWgFIgHgEQgGgFgEgGQgDgGgBgGQAAgBABAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAABAAIATAAQADAAACACQACABACADQACADAEACIAGACIAJABIAKgBIAGgCQAFgDAAgEQgBgDgDgDQgDgDgGAAIgTAAQgFAAAAgFIAAgOQAAgEAFgBIASAAQAFAAADgCQADgDgBgDQAAgDgDgCQgFgDgJAAQgHAAgFADQgEABgCACIgDAFQgCABgEAAIgTAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAgGADgFQADgFAGgFQAFgDAMgEQAGgCAQgBQAJAAAPACQAHACAJAGQAGAEADAFQADAFAAAGQAAARgTAFIAAABQAWADAAAVQAAAGgDAGQgEAFgGAFQgKAGgHACQgPACgKAAgAFRA0QgFAAAAgGIAAhcQAAgFAFAAIAXAAQAEAAABAFIAAAbIAYAAQAJAAAOACQAGACAKAGIAFAFIAEAEQADAHAAAIQAAAIgDAHIgEAGIgFAGQgKAFgGACQgOADgJAAgAFtAcIAYAAIAHgBIAGgCQADgEAAgGQAAgGgDgDIgGgDIgHgBIgYAAgAgzA0QgFAAAAgGIAAhcQAAgFAFAAIAzAAQAJAAAOADIAJAEIAGAEIAGAFIAEAHQADAHABAIQgBAJgDAEIgEAHIgGAFIgGAFIgJADQgOAEgJAAIgYAAIAAAWQAAAGgEAAgAgYAAIAYAAIAHAAIAFgCIAEgFQABgDAAgDQAAgDgBgCIgEgFIgFgDIgHgBIgYAAgAiwA0QgFAAAAgGIAAhcQAAgFAFAAIBaAAQAFAAABAFIAAAPQgBAGgFgBIg/AAIAAAMIAfAAQAIAAAMADQAJACAGAFQAGAEADAFQADAGAAAHQAAAHgDAHQgDAGgGAEQgGAFgJADQgMACgIAAgAiVAcIAfAAQAFAAAEgDQADgDAAgEQAAgEgDgDQgEgDgFAAIgfAAgAjeA0QgFAAgCgGIgFgMIgvAAIgGAMQgBAGgGAAIgXAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAqhcQADgFAEAAIAeAAQAFAAACAFIAqBcQAAABAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAgAj0AIIgNgbIgBAAIgNAbIAbAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44,-5.5,88,11.1);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3CAC5").s().p("ACLAgQgZgBgRgHQgRgIAAgKQAAgIARgHQASgHAYABQAZABARAIQARAGAAAKQAAAKgSAGQgOAGgVAAIgGAAgAiIAQQgagBgRgHQgSgIAAgIQAAgLASgGQASgHAaABQAZABASAHQASAJAAAKQAAAIgSAGQgQAGgVAAIgHAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.8,-3.3,39.7,6.6);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.kur();
	this.instance.setTransform(-73,-93.9,1,1,16.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112.7,-93.9,225.5,188);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AguguIBIAAIAVAAIAABdIgVAAIhIAAg");
	this.shape.setTransform(-3.5,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgHBSIAAglIATAAIAAhcIgTAAIATAAIAABcIgTAAIhKAAIAAhcIBKAAIAAgiIAEgFIBVBWIhVBXg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.2,-8.7,17.5,17.4);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.girl();
	this.instance.setTransform(-98.5,-140.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-98.5,-140.5,197,281);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();

	this.instance_1 = new lib.Символ39копия();
	this.instance_1.setTransform(0,0.3,5.431,5.431);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:5.43,scaleY:5.43,y:0.3},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,7,7);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(11.5,-15.4,1.469,1.469);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.3,scaleY:0.3,x:-38.3,y:56.1},7).to({alpha:0.25},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.3,-48.3,41.6,65.8);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.6,scaleY:0.6},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30.1,30.1);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3},9).to({rotation:0},10).to({rotation:5},10).to({rotation:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-22.1,28,44.3);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(20.4,10.9,2.07,2.07);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({y:-149.1},8,cjs.Ease.get(1)).wait(38).to({y:10.9},7,cjs.Ease.get(-1)).wait(1));

	// вишню
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(18.9,59.9,2.279,2.279);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({y:96.7},1,cjs.Ease.get(1)).to({y:216.9},7).wait(38).to({y:59.9},7,cjs.Ease.get(-1)).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ14();
	this.instance_2.setTransform(-220.3,14.8,1.543,1.96);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(33).to({_off:false},0).to({x:20.7},7).wait(38).to({x:-220.3},6).to({_off:true},1).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ15();
	this.instance_3.setTransform(-218.8,63.2,1.455,1.809);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(33).to({_off:false},0).to({x:21.2},7).wait(38).to({x:-218.8},6).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.7,-0.6,182.1,73.2);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3CAC5").s().p("AAAAcQgjgBgZgJQgagIAAgKQABgMAZgIQAagIAiABQAkABAZAIQAaAJAAAKQgBAMgZAIQgXAHgfAAIgHAAg");
	this.shape.setTransform(5.5,-143);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},30).wait(10));

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,-145.8,17.5,5.7);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(63.4,83.9,1,1,0,0,0,63.4,83.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:10.7},18).to({rotation:-10.7},3,cjs.Ease.get(1)).to({rotation:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.7,-93.9,225.5,188);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(-0.3,0,1,1,0,0,0,-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:4.7},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,-8.7,17,17.4);


(lib.Символ2копия2 = function() {
	this.initialize();

	// Слой 4
	this.instance = new lib.Символ10();
	this.instance.setTransform(22.1,-56.6);

	// Слой 1
	this.instance_1 = new lib.Символ3();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-98.5,-202.5,197,343);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 4
	this.instance = new lib.Символ10();
	this.instance.setTransform(22.1,-56.6);

	// Слой 3
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(61.6,45,0.535,0.535,180,0,0,-0.3,0);

	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(-19.9,45.2,0.535,0.535,0,0,0,-0.3,0);

	// Слой 2
	this.instance_3 = new lib.Символ40();
	this.instance_3.setTransform(21.6,45);

	// Слой 1
	this.instance_4 = new lib.Символ3();

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-98.5,-202.5,197,343);


(lib.Символ33 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ8();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:87.5,y:75},9).to({x:0,y:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.7,-93.9,225.5,188);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ25();
	this.instance.setTransform(0.1,0);

	// Слой 1
	this.instance_1 = new lib.Символ23();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15,-15,30.1,30.1);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(22.2,11.1,1.679,1.679,0,0,0,-0.1,0);

	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(3.2,10.9);

	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(-16.9,0);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.9,-22.1,62,44.3);


(lib.Символ6копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2копия2();
	this.instance.setTransform(10.2,115.2,1,1,0,0,0,10.2,115.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({rotation:-3.7},5,cjs.Ease.get(1)).wait(15).to({rotation:0},5,cjs.Ease.get(1)).wait(15).to({regX:10.3,rotation:3.9,x:10.3},5,cjs.Ease.get(1)).wait(15).to({regX:10.2,rotation:0,x:10.2},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.5,-202.5,197,343);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(10.2,115.2,1,1,0,0,0,10.2,115.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.2},9).to({rotation:0},10).to({rotation:1.2},10).to({rotation:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.5,-202.5,197,343);


(lib.Символ1копия = function() {
	this.initialize();

	// girl.png
	this.instance = new lib.Символ6копия();
	this.instance.setTransform(4.5,-20);

	// Слой 1
	this.instance_1 = new lib.plat();
	this.instance_1.setTransform(-138,-20.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-138,-222.5,296,395);


(lib.Символ1 = function() {
	this.initialize();

	// girl.png
	this.instance = new lib.Символ6();
	this.instance.setTransform(4.5,-20);

	// Слой 1
	this.instance_1 = new lib.plat();
	this.instance_1.setTransform(-138,-20.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-138,-222.5,296,395);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(-40.1,-24.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-39.9,-24.8,-39.6,-24.5,-39.2,-24.2,-37.6,-22.7,-36,-21.3,-34.6,-21.3,-33.1,-21.3,-23.8,-16.5,-12.6,-20.1,1.2,-24.5,-1.2,-39.1,-4.3,-43,-7.4,-46.9,-10.3,-47.1,-12.9,-46.2,-24,-42.3,-33,-33.8,-44.1,-23.2,-60.1,-27,-66.7,-28.6,-72.2,-32.3,-82.5,-39.2,-73.9,-47,-71.5,-49.2,-68.4,-49.6,-53.3,-51.8,-45.6,-38.4,-45.6,-37,-45.6,-35.6]}},43).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.1,-39.8,30.1,30.1);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AAMAAQAAAFgDAEQgEAEgFAAQgEAAgEgEQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEg");
	this.shape.setTransform(0.1,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,0,0,0.318)").s().p("AgIAJQgEgEABgFQgBgEAEgEQAEgEAEAAQAFAAADAEQAEAEABAEQgBAFgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_1.setTransform(0.1,0.3);

	// Слой 2
	this.instance = new lib.Символ29();
	this.instance.setTransform(39.4,-59.3);

	// Слой 1
	this.instance_1 = new lib.Символ28();
	this.instance_1.setTransform(40,25.3);

	this.addChild(this.instance_1,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.1,-107.6,86.8,123.2);


(lib.Символ21 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(-10,25);

	this.instance_1 = new lib.Символ1копия();
	this.instance_1.setTransform(-10,75,1.369,1.369);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:1.37,scaleY:1.37,y:75},9).to({_off:false,scaleX:1,scaleY:1,y:25},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},9).to({_off:true,scaleX:1,scaleY:1,y:25},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148,-197.5,296,395);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.style.cursor = "none";
		this.kur.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.kur.x = stage.mouseX;
			this.kur.y = stage.mouseY;
		}
		
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		this.cursor = "none";
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		  function fl_MouseOverHandler_5()
		{
		    _this.girl.gotoAndPlay(1);
			_this.hand.gotoAndPlay(1);
		 
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		 function fl_MouseOutHandler_2()
		{
		    _this.girl.gotoAndPlay(10);
			_this.hand.gotoAndPlay(10);
		 
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 8
	this.kur = new lib.Символ27();
	this.kur.setTransform(-166.1,168.1);

	this.timeline.addTween(cjs.Tween.get(this.kur).wait(1));

	// Слой 7
	this.button = new lib.Символ22();
	this.button.setTransform(320,152.5);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.Символ22(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Слой 5
	this.instance = new lib.Символ20();
	this.instance.setTransform(588.7,35.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.hand = new lib.Символ33();
	this.hand.setTransform(551.9,249.9);

	this.timeline.addTween(cjs.Tween.get(this.hand).wait(1));

	// Слой 2
	this.girl = new lib.Символ21();
	this.girl.setTransform(362,115.5);

	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(92,116.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.girl}]}).wait(1));

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],158.5,0,-158.5,0).s().p("A4wdTMAAAg6lMAxhAAAMAAAA6lg");
	this.shape.setTransform(548.4,156.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-158.5,0,158.5,0).s().p("A4wdTMAAAg6lMAxhAAAMAAAA6lg");
	this.shape_1.setTransform(125.5,158.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.back();
	this.instance_2.setTransform(-7,-4.4,1.022,1.022);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(138.7,70.5,888.3,428.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;