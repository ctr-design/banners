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
		{src:"images/d1.png", id:"d1"},
		{src:"images/d2.png", id:"d2"},
		{src:"images/d3.png", id:"d3"},
		{src:"images/girl.png", id:"girl"},
		{src:"images/glaz.png", id:"glaz"},
		{src:"images/hand.png", id:"hand"},
		{src:"images/molumen_lips_2.png", id:"molumen_lips_2"},
		{src:"images/strelki.png", id:"strelki"},
		{src:"images/w256h2561380453915MouseOptions256x25632.png", id:"w256h2561380453915MouseOptions256x25632"}
	]
};



// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.d1 = function() {
	this.initialize(img.d1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,304);


(lib.d2 = function() {
	this.initialize(img.d2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,300);


(lib.d3 = function() {
	this.initialize(img.d3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,300);


(lib.girl = function() {
	this.initialize(img.girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,341);


(lib.glaz = function() {
	this.initialize(img.glaz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,6);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,150);


(lib.molumen_lips_2 = function() {
	this.initialize(img.molumen_lips_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,37);


(lib.strelki = function() {
	this.initialize(img.strelki);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,93);


(lib.w256h2561380453915MouseOptions256x25632 = function() {
	this.initialize(img.w256h2561380453915MouseOptions256x25632);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.Символ71 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.strelki();
	this.instance.setTransform(-24.5,-46.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.5,-46.5,49,93);


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.6)").s().p("EgxqAX0QgUAAAAgSMAAAgvDQAAgSAUAAMBjVAAAQAUAAAAASMAAAAvDQAAASgUAAg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ68 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.molumen_lips_2();
	this.instance.setTransform(-21,-12.9,0.7,0.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21,-12.9,42,25.9);


(lib.Символ63 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjpAzIgBgVIg6AAIAAhPIATAAIAABAIAcAAIAAhAIATAAIAABBIAIAAIgCAjgAgqAfIgIgDIgGgDIgGgFIgDgGIgEgHIgCgHIAAgIIAAgIIACgIIAEgIIAEgGIAGgFIAHgEIAHgCIAJgBIAJABIAHACIAHAEIAFAFIAEAGIACAHQADAKAAAGIgCAJIgCAHIgBAHIgFAGIgFAFIgHAEIgIACIgJABIgIgBgAgpghQgEACgCADQgDAEgBAFQgBAFAAAGQAAAGABADQABAFAEAEQACADADACQAEACAEAAQAFAAAEgCQADgCADgEQADgDABgGIABgIIgBgLQgBgFgDgDQgDgEgDgCQgEgCgFAAQgEAAgEACgADpAeIAAhPIASAAIAAAcIAKAAQAGAAAGABQAGACAEADQAEAEADAEQADAHAAADQAAAGgCAEQgBAEgEAEQgDADgEACIgIADIgJACIgKAAQgMAAgHgBgAD7gHIAAAYIAHAAIAFAAIAGgDIADgEQABgDAAgDQAAgDgBgBIgDgEIgFgCIgGgBgAARAeIAAhOIAXgBIAOABQAFABAFACQAEADADAEQADAEgBAFIAAAFIgCAFIgFAEIgFADIAAABIAFACIAGAFIADAEQACADAAAEQAAAFgDAEQgCAFgEADIgFADIgHACQgMACgIAAQgMAAgHgBgAAjARIAHABIAFgBIAGgCIADgEIABgFIgBgFIgDgCIgGgCIgGAAIgGAAgAAjgjIAAASIAGAAIAGAAIAFgCIACgDIABgFQABgEgEgDQgEgCgFAAIgIABgAiZARIAFgCIAFgDIACgEIACgHQACgEAAgKIAAgkIA2AAIAABPIgSAAIAAhAIgSAAIAAAUIgCAOIgCALIgEAKQgDAEgEACIgIADIgJABgAC2AeIAAg/IgVAAIAAgQIA+AAIAAAQIgWAAIAAA/gACIAeIgFgUIgXAAIgHAUIgTAAIAahPIAXAAIAZBPgACAgCIgKghIgIAhIASAAgAjQAeIAAhPIAxAAIAAAPIgfAAIAAARIAdAAIAAAPIgdAAIAAARIAhAAIAAAPg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.3,-5.1,58.6,10.3);


(lib.Символ60 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.6)").s().p("Ai+H7QgZg9gIgfQgIgnggg4Qggg0AAgCQABgeAhAkQAxA0AKAFQApAlAMAIQA2AoAmAAQAuAABEgUQAlgLAsgPQAVgGBMgqQANAAgDANQAAAdhSAsQhBAig4ARQgqAMhTAyIhNAwQgFAAgZg8gAAtjYQgkgcAAgSQAAgGBThTQBohlAnguQAFgGARgZQAQgUAOAJQAMAJAaA3QAcA7AEAMQABAFAAAwQAABEgRAeQgqBKiKAAQhEAAgwgkgAk2j2QgVgWgQgeQgDgFgDgoIgEgvQAAgwAdg7QAmhNA4AIIABACQABACAAAFIgQAfQgQAfgBASQABAYAPAhQAUAkAHATQAYA3A4ALIAiAHQAOAFAAAPQAAASggAVQgqAbhDAAQgmAAglgog");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.8,-56.8,71.6,113.6);


(lib.Символ58 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbAzIAAgVIguAAIgBAVIgOAAIgBgjIAIAAIAHgQIADgNIAAgOIAAgWIAzAAIAABBIAIAAIAAAjgAAAgXIgBAOQAAAHgDAEQgBAHgEAGIAZAAIAAgxIgQAAgAhWAeQgHgBgFgDIAEgOQANAFAHAAIAGgBIAFgCIACgDQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAgDgCgCQgBgBgDgBQgEgCgHAAIgIAAIAAgNIAHAAQAHAAAEgDIADgDQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgEgDgDQgDgCgGAAIgJABIgIAEIgFgNQAFgDAFgCQAIgCAHAAQAGAAAGACIAJAEQAEADACAEQABADAAAFQABAEgCADQgBADgCACIgGAEQgCACgEABIAAAAIAHACIAHAEIADAEQACADAAAEIgBAHIgCAFQgDAEgFADIgLAEQgFACgGAAQgHAAgGgCgAC2AeIAAhPIASAAIAAAcIAKAAQAGAAAHABQAGACAEADQAEAEADAEQACAHAAADQAAAGgBAEQgCAEgEAEQgCADgEACIgIADIgJACIgLAAQgLAAgIgBgADIgHIAAAYIAHAAIAGAAIAFgDIAEgEQABgDAAgDQAAgDgBgBIgEgEIgEgCIgHgBgACEAeIAAg/IgWAAIAAgQIA+AAIAAAQIgVAAIAAA/gAA1AeIAAhPIAxAAIAAAPIgfAAIAAARIAdAAIAAAPIgdAAIAAARIAhAAIAAAPgAh8AeIgGgUIgWAAIgHAUIgTAAIAahPIAXAAIAZBPgAiEgCIgKghIgIAhIASAAgAjxAeIAAhOIAZgBQAIAAAGABQAGACAFADQADADACAFQADAFAAAGQAAAGgCAFQgCAFgDADIgGAEIgGABIgOACIgHgBIAAAdgAjfgjIAAAYIAGABIAGgBIAFgDIAEgEIABgGIgBgFIgDgDIgEgDIgGAAIgIAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.2,-5.1,48.5,10.3);


(lib.Символ57 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.d3();
	this.instance.setTransform(150,-37.5,1,1,90);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-37.5,300,75);


(lib.Символ54 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hand();
	this.instance.setTransform(42,-17,0.56,0.56,90);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42,-17,84,34.2);


(lib.Символ52 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ABiAoIABgPIAGABQAEAAADgDIAEgFIAAgEIgbg1IAUAAIASAqIANgqIATAAIgPAnQgKAXgGAHQgEAGgFACIgGACIgGABQgGAAgDgBgAjCAoIgIgCIgGgEIgGgFIgEgGIgDgHIgCgIIgBgIIABgHIACgIIAEgHIAEgGIAGgFIAHgEIAHgDIAJAAIAJAAIAHADIAHAEIAFAFIAFAGIADAHQACAKAAAFIgBAIIgCAIIgDAIIgFAGIgGAFIgGADIgIACIgJABIgIgBgAjBgYQgEACgCAEQgDAEgBAFQgBAFAAAEQAAAFABAFQABAFADAEQADAEADACQAEACAEAAQAFAAAEgDQADgCADgDQACgEACgFIABgKIgBgJQgCgFgCgEQgDgEgDgCQgEgCgFAAQgEAAgEACgADoAnIAAhOIASAAIAAAcIAKgBQAHAAAGACQAGACAEADQAEADADADQACAHAAAFQAAAFgBAFQgCAEgDADQgDADgEACIgIADIgJACIgKABQgMAAgIgCgAD6ABIAAAZIAHABIAGgBIAFgCIAEgFQABgCAAgEQAAgDgBgCIgDgFIgFgCIgHgBgAiOAaIAFgBIAEgDIADgFIACgGQABgHAAgIIAAgjIA3AAIAABPIgTAAIAAhAIgSAAIAAATIgBANIgCAMIgEAKQgDAEgFADIgHADIgJABgAC2AoIAAhAIgVAAIAAgPIA+AAIAAAPIgWAAIAABAgAA+AoIAAgiIgeAAIAAAiIgSAAIAAhPIASAAIAAAfIAeAAIAAgfIASAAIAABPgAgNAoIgDgJIgDgJIgCgGIgDgFIgFgEQgDgBgDAAIgEAAIAAAiIgSAAIAAhPIASAAIAAAhIACAAIAWghIAUAAIgaAkQAEABADACIAFACIAEAGIADAGIACANIAFANgAkOAoIAAhAIgVAAIAAgPIA+AAIAAAPIgWAAIAABAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.2,-4.2,58.6,8.4);


(lib.Символ51 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.d2();
	this.instance.setTransform(150,-38,1,1,90);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-38,300,76);


(lib.Символ46 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.d1();
	this.instance.setTransform(152,-38,1,1,90);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-152,-38,304,76);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAMAyIgBgUIgtAAIgBAUIgOAAIgBgiIAHgBIAIgQIACgMIABgPIAAgVIAzAAIAABAIAIABIgBAigAgPgXIgBANQgBAHgCAEQgCAIgDAGIAYAAIAAgxIgPAAgAB1AeIAAhAIgWAAIAAgPIA+AAIAAAPIgWAAIAABAgAAlAeIAAhPIAyAAIAAAPIgfAAIAAARIAdAAIAAAPIgdAAIAAARIAhAAIAAAPgAhGAeIgDgJIgDgJQgDgIgCgDQgCgBgDgBQgDgBgDAAIgDAAIAAAgIgSAAIAAggIgDAAQgDAAgDABQgCABgCABIgEAFIgCAGIgGASIgSAAQAEgIAFgRIACgFIAEgGIAGgEIAHgDIgcgkIAWAAIAUAhIABAAIAAghIASAAIAAAhIACAAIAUghIAVAAIgcAkQAEAAAEACIAFAEQADAEAEAIIAEAMIAEANg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.8,-5,31.6,10.1);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhZAoIgIgCIgGgEIgGgFIgEgGIgDgHIgCgIIgBgIIABgHIACgIIAEgHIAEgGIAGgFIAHgEIAHgDIAJAAIAJAAIAHADIAHAEIAFAFIAFAGIADAHQACAKAAAFIgBAIIgCAIIgDAIIgFAGIgGAFIgGADIgIACIgJABIgIgBgAhYgYQgEACgCAEQgDAEgBAFQgBAFAAAEQAAAFABAFQABAFADAEQADAEADACQAEACAEAAQAFAAAEgDQADgCADgDQACgEACgFIABgKIgBgJQgCgFgCgEQgDgEgDgCQgEgCgFAAQgEAAgEACgABkAoIgGgVIgXAAIgGAVIgTAAIAZhPIAXAAIAaBPgABbAFIgJgeIgJAeIASAAgAASAoIAAgiIgcAAIAAAiIgTAAIAAhPIATAAIAAAfIAcAAIAAgfIASAAIAABPg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12,-4.1,24.1,8.4);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmBbQgOgEgLgGIAIggQAbALARAAQAIAAAEgCQAHgBAEgDQAEgEADgEQACgEAAgGQAAgHgEgFQgDgFgGgCQgIgFgPAAIgSAAIAAgcIARAAQAPAAAHgHQAEgDADgEQACgEAAgGQAAgIgHgGQgHgFgLgBQgKABgMADQgJADgJAEIgKgdQALgHANgDQAPgEASgBQAMAAAMAEQAMAEAIAGQAJAGAEAJQAEAIAAAKQAAAJgDAGQgCAIgFAFQgFAFgHAFQgGADgIACIAAAAQAIACAIABQAIAEAGAFQAGAGADAHQADAIAAAJQAAAHgBAHQgCAGgEAFQgGAKgLAHQgLAGgOAEQgMACgMAAQgPAAgOgCg");
	this.shape.setTransform(-0.3,-2.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.7,-11.7,13,18.8);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhBbIAAhNIhBAAIAABNIgpAAIAAi0IApAAIAABGIBBAAIAAhGIAqAAIAAC0g");
	this.shape.setTransform(-0.2,-2.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.7,-11.4,15,18.2);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAmBbIgOgvIgyAAIgNAvIgrAAIA4i0IA0AAIA5C0gAASANIgShIIgBAAIgTBIIAmAAg");
	this.shape.setTransform(-0.3,-2.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.6,-11.4,16.7,18.2);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbBbIgIgUIgMgjQgDgHgEgEQgCgFgGgDQgGgDgIAAIgIAAIAABNIgpAAIAAi0IApAAIAABLIADAAIAxhLIAyAAIhABQQAJACAHAEIALAIQAFAFAEAIIAQAtQAFAQAGAMg");
	this.shape.setTransform(0.6,-2.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.6,-11.4,14.5,18.2);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUBbQgIgBgIgDQgJgEgGgFQgHgFgFgHQgGgFgEgIQgFgHgCgJIgFgSIgBgTQAAgIABgJQACgJADgJQADgJAFgIIAKgOQAGgGAHgFQAHgFAIgEQAIgDAKgCQAIgCAJAAQAKAAAJACQAKACAIADQAIAEAHAFQAGAFAGAGQAGAHADAHQAFAIADAIQAFAXAAANQAAAIgCALQgBAJgDAJQgDAKgFAHQgFAIgFAGIgOALQgGAFgJADIgRAFQgJABgIAAQgKAAgKgCgAgRg3QgIAEgGAIQgGAJgDALQgCAMAAALQAAANACAMQADAKAGAJQAGAIAJAEQAIAFAIAAQAKAAAJgFQAHgFAGgIQAGgIACgLQAEgMAAgMQAAgMgEgLQgCgLgGgIQgGgJgHgEQgJgFgKAAQgIAAgJAFg");
	this.shape.setTransform(-0.2,-2.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.9,-11.7,17.5,18.8);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA8BbIgDhGIgBhJIgBAAQgNAxgIAUIgWBHIgeAAIgThHQgGgTgLgyIAAAAIgHCPIgmAAIAMi0IA3AAIARA8QAMAqADAWIAAAAQAJglAIgbIATg8IA2AAIAKC0g");
	this.shape.setTransform(-0.2,-2.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.3,-11.4,20.2,18.2);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AABBcIgSgFQgJgEgHgFQgIgEgGgHQgGgGgEgHQgFgHgDgJQgDgIgBgJIgCgTQAAgJACgLQACgKAEgJQAEgJAFgIQAFgHAHgGIAPgLIARgIQAJgDAIgCQAJgBALAAQAOAAANACQALACAHAEIgJAgQgUgGgOAAQgNAAgKADQgJAEgIAHQgIAIgEALQgFAMAAANQAAAOAEALQAEALAIAHQAIAIAIAEQALAEAOAAQAMAAAWgGIAGAhQgGADgLACQgOACgPAAQgMAAgKgBg");
	this.shape.setTransform(0,-2.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.2,-11.7,14.5,18.8);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeBbIAAhHIgKAAQgMAAgIAHQgCAEgDAGIgOAnQgEAKgDAFIgsAAQAGgIAEgMIAKgfIAGgNQAEgHAFgFQAFgFAKgEIAAgBQgIgBgGgEQgIgBgFgGQgFgFgDgIQgDgIAAgJQAAgNAFgKQAFgJAJgHQAHgFATgGQANgDASAAQAUAAAhADIAACygAAAg6QgDABgFADQgEAEgDAEQgCAGAAAGQAAAHADAEQACAFAFAEIAJAFQAGABAHAAIAPgBIAAgxIgRgCQgHAAgGACg");
	this.shape.setTransform(-1,-2.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.1,-11.6,14.3,18.4);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhBbIAAhNIhBAAIAABNIgpAAIAAi1IApAAIAABGIBBAAIAAhGIAqAAIAAC1g");
	this.shape.setTransform(-0.2,-2.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.7,-11.4,15,18.2);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5BbIAAi1IBvAAIAAAiIhFAAIAAAmIBAAAIAAAfIhAAAIAAAsIBIAAIAAAig");
	this.shape.setTransform(0.2,-2.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.6,-11.4,11.6,18.2);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhABbIAAiyQANgCArgBQARAAAOADQANAEAKAHQAIAHAGALQAFALAAANQAAAOgEALQgFAJgIAIQgFAFgHADQgGAEgIACQgVAFgKAAIgOgBIAABBgAgXg6IAAA2IAOABQAIAAAFgCQAGgCAFgEQAEgDADgGQACgGAAgGQAAgHgCgFQgCgFgEgDQgEgEgGgBQgGgCgGAAQgLAAgGABg");
	this.shape.setTransform(0.3,-2.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.2,-11.5,13.1,18.4);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAmBbIgOgvIgyAAIgNAvIgrAAIA4i1IA0AAIA5C1gAASANIgShIIgBAAIgTBIIAmAAg");
	this.shape.setTransform(-0.3,-2.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.6,-11.4,16.7,18.2);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhCBYIAAizIB3AAIAAAiIhOAAIAAAfIAWgBQAMAAANAEQAOADAKAHQAKAIAFAIQAGARAAAJQAAANgEALQgFAKgIAHQgGAGgJAFQgIADgKACQgZAGgOAAQgaAAgSgEgAgaADIAAA4IAQABQAIAAAFgCQAHgDAFgEQAEgDADgGQACgGAAgGQAAgGgDgGQgCgFgFgDQgFgFgHgCQgFgBgIAAg");
	this.shape.setTransform(0.2,-2.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.5,-11.4,13.6,18.4);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5BbIAAi1IBvAAIAAAiIhFAAIAAAmIBAAAIAAAfIhAAAIAAAsIBIAAIAAAig");
	this.shape.setTransform(0.2,-2.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.6,-11.4,11.6,18.2);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAlBwIAAg2QAAgdADguIgBAAQgUAsgLASIgjBDIgvAAIAAi1IAmAAIAAA2QgBA5gBAYIABAAQAJgWAXgrIAlhGIArAAIAAC1gAgPhPQgHgCgFgEQgFgEgDgHQgDgGgBgIIAcAAQABAIACAEQADAEAFAAQAFAAADgEQADgEABgIIAcAAQgBAIgDAGQgDAHgFAEQgGAEgHACQgHACgIAAQgIAAgHgCg");
	this.shape.setTransform(-0.2,-4.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.7,-15.6,15.1,22.4);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQBVQgHgHAAgKQAAgMAHgGQAHgHAJAAQAKAAAHAHQAGAGABAMQAAAKgHAHQgHAHgKAAQgJAAgHgHgAgOAdIgGh4IApAAIgGB4g");
	this.shape.setTransform(-3.4,-2.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.8,-11.4,4.9,18.5);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.588)").s().p("AqOW8QhkAAAAhjMAAAgqxQAAhjBkAAIUdAAQBkAAAABjMAAAAqxQAABjhkAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.5,-146.8,151.1,293.8);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.glaz();
	this.instance.setTransform(-16,-3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16,-3,32,6);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.girl();
	this.instance.setTransform(-151,-170.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-151,-170.5,302,341);


(lib.Tween22 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.w256h2561380453915MouseOptions256x25632();
	this.instance.setTransform(-30,-30,0.234,0.234);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.shape109 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AETAAQAABxhRBRQhRBRhxAAQhwAAhRhRQhRhRAAhxQAAhwBRhRQBRhRBwAAQBxAABRBRQBRBRAABwg");
	this.shape.setTransform(27.5,27.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.shape17 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("ADrhDIAogCAj+gEQCCgZA0AIQAeAEAqAgIAGgMQALgOAWgMQBAglCEgHQiOAVgsAuQgcAfARAgIhBAHQgIgdgjgXQhBgqh3AUIgQADIgDAB");
	this.shape.setTransform(29.3,8.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag8ARQhBgqh3AUQCBgZA1AIQAeAEAqAgIAGgMQALgOAWgMQA/gkCFgIQiOAWgsAuQgdAfASAfIhCAHQgHgdgjgXg");
	this.shape_1.setTransform(28.3,8.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.8,0.2,57,16.1);


(lib.shape16 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AEGg/IANAAAkBAAIgBAAQCJgaAzAFQAiADAkAcIAJgKQAPgKAYgLQBLgiCLgIQiQAVg3AqQgoAeAPAbIhBAIQgIgbgggXQgegTgygDIhuAHIgQAC");
	this.shape.setTransform(29.3,8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhFAPQgegTgygDIhuAHIAAAAQCIgaAzAEQAiAEAmAcIAHgKQAPgKAYgLQBLgiCLgJQiQAWg3AqQgoAeAPAbIhBAIQgIgbgggXg");
	this.shape_1.setTransform(29.5,8.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.8,1.2,57,15);


(lib.shape15 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AEJg9IANAAAkEAFIgBAAQCPgaAvACQAnAAAhAZIAEgGQAIgLAVgJQBCgfClgKQiRAWg3AnQgoAcAOAaIhCAHQgHgagggXQgdgSg2ABIhvAKIgRAE");
	this.shape.setTransform(29.2,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhEAMQgdgSg1AAIhwAMIAAAAQCOgaAvABQAnABAiAZIADgHQAIgKAVgKQBDgfCkgKQiQAXg4AmQgoAcAOAaIhBAIQgIgbgggXg");
	this.shape_1.setTransform(29.4,9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.4,1.8,57.6,14.4);


(lib.shape14 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AELg3IAMAAAkGANIAAAAQCFglA1AAQAqgBAiAaIAEgFQAJgIAVgIQBEgZClgKQiSAWg4AhQgpAYAOAZIhCAHQgHgagggXQgcgRg3AGIhwARIgQAD");
	this.shape.setTransform(29.4,9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhFAHQgcgSg3AGIhvASIgBAAQCFglA1AAQAqgBAjAaIADgFQAJgIAVgIQBEgZClgKQiSAWg4AhQgpAYAOAYIhCAIQgHgbgggWg");
	this.shape_1.setTransform(29.5,9.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.4,2.7,57.9,13.3);


(lib.shape13 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AESgxIAMAAAkNAaIgMAAQCPgyA9gDQAygDAhAcIAFgJQAJgJAWgIQBEgZCkAEQiUAWg2AbQgoAUANAXIhCAIQgIgbgfgXQgagQhAAOQhJAMguAPIgQAD");
	this.shape.setTransform(28.7,10.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag5ABQgZgQhAAOQhJAMguAPIgMAAQCQgyA8gDQAygDAhAcIAFgJQAJgJAVgIQBFgZCkAEQiUAWg3AbQgoAUANAXIhBAIQgHgbghgXg");
	this.shape_1.setTransform(28.3,10.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,4,59.3,12.3);


(lib.shape12 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AESgoIAMAAAESgoQiWAJg2AbQgnASANAYIhBAIQgIgbgfgVQgbgSg/AOQgdAGglANIg1AWIgMAAIB0gzQA2gYAiAIIAtAIQAZAFANAMIAEgIQAKgJAVgHQBEgVClAMgAkNAjIgQAD");
	this.shape.setTransform(28.6,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag5gCQgZgShAAOQgdAGglANIg1AWIgLAAIB0gzQA1gYAiAIIAuAIQAYAFANAMIAEgIQAKgJAVgHQBDgVCmAMQiVAJg3AbQgnASANAYIhBAIQgHgbghgVg");
	this.shape_1.setTransform(28.2,10.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.1,4.9,59.3,11.3);


(lib.shape11 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AEQgoIANAAAjBgFIAZgPQA5ghAgAIIAuAIQAZAFANAMIAEgGQAJgHAWgFQBDgOClAMQiXAKg1AUQglANAMAXIhBAHQgIgagggWQgagShAAOQgTAEgWAKIguAXIAAAAIgiAVIgLAIAjBgFQgNAFgNAGIgUAM");
	this.shape.setTransform(28.4,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhlgIQgagSg/AOQgUAEgWAIIAagNQA4ghAhAIIAtAIQAZAFAOAMIAFgGQAJgHATgFQBEgOClAMQiXAKg1AUQgkANALAXIhBAHQgIgagggWg");
	this.shape_1.setTransform(32.3,11.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.1,6,59,11.6);


(lib.shape10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AETgmIANAAAi+gDIAagPQA4ggAgAHIAuAJQAZAFANALIAEgGQAJgGAWgFQBDgPClAMQiXAKg0AUQgmANAMAXIhBAIQgIgbgggVQgagSg/AOQgUAEgWAJIgtAXIgBABIgiAVIgRADAi+gDQgNADgNAIIgTAM");
	this.shape.setTransform(28.1,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhlgIQgagSg/AOQgUAEgWAIIAagNQA4ghAhAIIAtAIQAZAFAOAMIAFgGQAJgHATgFQBEgOClAMQiXAKg1AUQgkANALAXIhBAHQgIgagggWg");
	this.shape_1.setTransform(32.3,11.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.7,6.1,59.6,11.1);


(lib.shape9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AESgpIAMAAAkNAjIgMAAIB0gzQA2gZAiAIIAtAJQAZAFANALIAEgIQAKgJAVgHQBEgVClAMQiWAKg2AbQgnASANAYIhBAIQgIgbgfgVQgbgSg/AOQgdAFglAOIg1AWIgQAD");
	this.shape.setTransform(28.1,10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag4gCQgagShAAOQgdAFglAOIg0AWIgNAAIB0gzQA2gZAiAIIAtAJQAaAFAMALIAFgIQAJgJAVgHQBEgVCkAMQiVAKg2AbQgnASAOAYIhCAIQgIgbgfgVg");
	this.shape_1.setTransform(27.7,10.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.6,4.6,59.3,11.3);


(lib.shape8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AESgxIAMAAAkNAaIgMAAIApgOQBvgkA0gDQAxgCAiAbIAFgIQAJgKAVgIQBEgZClAEQiUAWg2AbQgMAGgGAGQgTAPAJARIhBAHQgGgVgVgSIgMgKQgbgQg/AOIhDAMIg0AOIgQAD");
	this.shape.setTransform(28.1,9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgsAMIgMgKQgagQhAAOIhDAMIgzAOIgNAAIAqgOQBvgkAzgDQAxgCAiAbIAFgIQAJgKAVgIQBEgZCkAEQiTAWg2AbQgMAGgGAGQgTAPAKARIhCAHQgGgVgVgSg");
	this.shape_1.setTransform(27.7,9.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.6,3.4,59.3,12.3);


(lib.shape7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AELg3IAMAAAELg3QiTAWg4AhIgLAHQgbAVAMAVIhCAHQgIgagggXQgbgRg3AGIhJALIgnAGIAAAAIAWgGQBzgfAxAAQApgBAjAaIADgFQAJgIAWgIQBEgaClgJgAkGANIgQAD");
	this.shape.setTransform(28.7,9.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhFAHQgcgRg3AGIhIALIgnAGIgBAAIAXgGQBzgfAwAAQAqgBAjAaIADgFQAJgIAVgIQBEgaClgJQiSAWg4AhIgLAHQgcAVAMAVIhCAHQgHgagggXg");
	this.shape_1.setTransform(28.8,9.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.3,2.6,57.9,13.4);


(lib.shape6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AEJg9IANAAAEJg9QiRAXg3AmIgFACQgiAcANAYIhCAIQgHgbgggXQgIgGgLgEQgagIgmABIhZAHIgWAEIgBAAIASgEQCAgWAsABQAkABAfAUIAFAFIAEgHQAIgKAVgKQBCgfClgKgAkEAGIgRAD");
	this.shape.setTransform(28.7,8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhEAMQgIgGgLgEQgZgIgmABIhZAHIgXAEIAAAAIASgEQB/gWAsABQAkABAgAUIAFAFIADgHQAIgKAVgKQBDgfCkgKQiQAXg4AmIgEACQgjAcANAYIhBAIQgIgbgggXg");
	this.shape_1.setTransform(28.9,8.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,1.7,57.6,14.5);


(lib.shape5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AEGhAIANAAAEGhAQiQAWg3AqIgHAFQgfAcANAYIhBAIQgIgbgggXIgRgKQgbgKgkgCIhuAHIgBAAQCJgaAzAFQAfADAjAXIAEAFIAJgKQAPgKAYgLQBLgiCLgJgAkBAAIgQAC");
	this.shape.setTransform(28.8,8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhFAPIgRgKQgbgKgkgCIhuAHIAAAAQCIgaAzAFQAfADAjAXIAGAFIAHgKQAPgKAYgLQBLgiCLgJQiQAWg3AqIgHAFQgfAcANAYIhBAIQgIgbgggXg");
	this.shape_1.setTransform(29,8.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,1.4,57,15.1);


(lib.shape4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("ADrhDIAogCADrhDQiOAVgsAuIgIALQgRAaAOAaIhBAHQgIgdgjgXIgMgHQg/ghhtASQCCgZA0AIQAcAEAoAcIAEAEIAGgMQALgNAWgNQBAglCEgHgAj+gEIgQADIgDAB");
	this.shape.setTransform(29.3,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag8ARIgMgHQg/ghhtASQCBgZA1AIQAcAEAmAcIAGAEIAGgMQALgNAWgNQA/glCFgHQiOAVgsAvIgIAKQgSAaAPAaIhCAHQgHgdgjgXg");
	this.shape_1.setTransform(28.3,8.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.8,0.4,57,16.2);


(lib.shape3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AEUhMQABgBACAAADphHIArgFIAAABQhHALhBAXIgWAJQg5AXgSAaQgRAZAQAcIhCAIQgFgcgjgZIgMgIQgfgRgtgHQgsgHg3AFAEUhLQhgALg/ARIgFACIgIACIgqAPIgEACIgDABIgBABQgtATgGAWIgBAEAADAXIgBgCIgCgEQgignh2ADIgCAAIhhAKIgbAD");
	this.shape.setTransform(29,7.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhNAYIgMgIQgggRgsgGQgsgHg3AFIBggKIADAAQB1gDAjAmIADAFIABACIABgHQAHgVArgUIADgBIAEgCIApgPIAIgCIAGgBQA+gRBggMQhgAMg+ARIgGABIAHgCQBCgRAxgHIAqgFIAAABQhGALhBAXIgWAIQg5AYgSAZQgSAaARAbIhCAJQgFgdgjgZgAEKhNIgEABIAEgBg");
	this.shape_1.setTransform(30.4,7.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,-1,57.9,17.7);


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ71();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-0.6,y:7.3},4).to({x:0,y:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-46.5,49,93);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ68();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.74,scaleY:0.74,x:-5.6},3).to({scaleX:0.29,scaleY:0.29,x:-28},7,cjs.Ease.get(0.99)).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-12.9,42,25.9);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ67();
	this.instance.setTransform(-48.1,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({x:-40.9,y:57.5},0).wait(15).to({x:-58.7,y:117.3},0).wait(15).to({x:-46.4,y:155},0).wait(15).to({x:-32.8,y:3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.1,-9.9,42,25.9);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ63();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1},9).to({x:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.3,-5.1,58.6,10.3);


(lib.Символ62 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ46();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-152,-38,304,76);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ60();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.8,-56.8,71.6,113.6);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ58();
	this.instance.setTransform(0,0.1,2.258,2.258);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-4},9).to({x:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.7,-11.5,109.5,23.2);


(lib.Символ56копия = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ61();
	this.instance.setTransform(403.9,13.6);

	// Слой 2
	this.instance_1 = new lib.Символ59();
	this.instance_1.setTransform(36.1,1.8,1.064,1.064);

	// Слой 1
	this.instance_2 = new lib.Символ57();
	this.instance_2.setTransform(0,0,1.064,1.064);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-159.6,-43.2,599.3,113.6);


(lib.Символ56 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ59();
	this.instance.setTransform(33.9,1.7);

	// Слой 1
	this.instance_1 = new lib.Символ57();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-37.5,300,75);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ54();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:70},11,cjs.Ease.get(1)).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-17,84,34.2);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1},9).to({x:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-4.2,58.6,8.4);


(lib.Символ50копия = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ55();
	this.instance.setTransform(217.1,44);

	// Слой 2
	this.instance_1 = new lib.Символ53();
	this.instance_1.setTransform(32.7,-0.7,2.041,2.041);

	// Слой 1
	this.instance_2 = new lib.Символ51();

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-38,409.1,99.1);


(lib.Символ50 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ53();
	this.instance.setTransform(32.7,-0.7,2.041,2.041);

	// Слой 1
	this.instance_1 = new lib.Символ51();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-38,300,76);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();

	this.instance_1 = new lib.Символ56копия();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-37.5,300,75);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();

	this.instance_1 = new lib.Символ50копия();
	this.instance_1.setTransform(0,0,1.07,1.07);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-38,300,76);


(lib.Символ45копия2 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ66();
	this.instance.setTransform(462,-176.9);

	// Слой 2
	this.instance_1 = new lib.Символ64();
	this.instance_1.setTransform(34.9,0.9,1.958,1.958);

	// Слой 1
	this.instance_2 = new lib.Символ62();

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-152,-186.8,586.9,224.9);


(lib.Символ45 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ64();
	this.instance.setTransform(34.9,0.9,1.958,1.958);

	// Слой 1
	this.instance_1 = new lib.Символ62();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-152,-38,304,76);


(lib.Символ41 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ39();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.8,-5,31.6,10.1);


(lib.Символ40 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ38();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12,-4.1,24.1,8.4);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// !
	this.instance = new lib.Символ13();
	this.instance.setTransform(66.7,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({y:-2.9},5).to({y:3.5},5).wait(1));

	// Й
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(45.2,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({y:-2.9},5).to({y:3.5},5).wait(4));

	// Е
	this.instance_2 = new lib.Символ15();
	this.instance_2.setTransform(28.7,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({y:-2.9},5).to({y:3.5},5).wait(6));

	// Б
	this.instance_3 = new lib.Символ16();
	this.instance_3.setTransform(13.4,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({y:-2.9},5).to({y:3.5},5).wait(8));

	// А
	this.instance_4 = new lib.Символ17();
	this.instance_4.setTransform(-3.6,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({y:-2.9},5).to({y:3.5},5).wait(10));

	// Р
	this.instance_5 = new lib.Символ18();
	this.instance_5.setTransform(-20.3,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(23).to({y:-2.9},5).to({y:3.5},5).wait(12));

	// Е
	this.instance_6 = new lib.Символ19();
	this.instance_6.setTransform(-40.7,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21).to({y:-2.9},5).to({y:3.5},5).wait(14));

	// Н
	this.instance_7 = new lib.Символ20();
	this.instance_7.setTransform(-57.2,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({y:-2.9},5).to({y:3.5},5).wait(16));

	// Я
	this.instance_8 = new lib.Символ29();
	this.instance_8.setTransform(63.1,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(17).to({y:-34.4},5).to({y:-28},5).wait(18));

	// С
	this.instance_9 = new lib.Символ30();
	this.instance_9.setTransform(46.9,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15).to({y:-34.4},5).to({y:-28},5).wait(20));

	// М
	this.instance_10 = new lib.Символ31();
	this.instance_10.setTransform(27.5,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(13).to({y:-34.4},5).to({y:-28},5).wait(22));

	// О
	this.instance_11 = new lib.Символ32();
	this.instance_11.setTransform(6.4,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10).to({y:-34.4},5).to({y:-28},5).wait(25));

	// К
	this.instance_12 = new lib.Символ33();
	this.instance_12.setTransform(-11.5,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(8).to({y:-34.4},5).to({y:-28},5).wait(27));

	// А
	this.instance_13 = new lib.Символ34();
	this.instance_13.setTransform(-28.5,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(6).to({y:-34.4},5).to({y:-28},5).wait(29));

	// Н
	this.instance_14 = new lib.Символ35();
	this.instance_14.setTransform(-46.6,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(3).to({y:-34.4},5).to({y:-28},5).wait(32));

	// З
	this.instance_15 = new lib.Символ36();
	this.instance_15.setTransform(-63.3,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({y:-34.4},5).to({y:-28},5).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-39.8,139.2,50.3);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(0,0,1.399,1.009);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-105.6,-148.1,211.4,296.4);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ8();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-105.6,-148.1,211.4,296.4);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(1).to({_off:true},1).wait(28).to({_off:false},0).wait(1).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ1 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ3();
	this.instance.setTransform(43.5,-128);

	// Слой 1
	this.instance_1 = new lib.Символ2();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-151,-170.5,302,341);


(lib.sprite110 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape109("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.preview_flabird_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape3("synched",0);

	this.instance_1 = new lib.shape4("synched",0);

	this.instance_2 = new lib.shape5("synched",0);

	this.instance_3 = new lib.shape6("synched",0);

	this.instance_4 = new lib.shape7("synched",0);

	this.instance_5 = new lib.shape8("synched",0);

	this.instance_6 = new lib.shape9("synched",0);

	this.instance_7 = new lib.shape10("synched",0);

	this.instance_8 = new lib.shape11("synched",0);

	this.instance_9 = new lib.shape12("synched",0);

	this.instance_10 = new lib.shape13("synched",0);

	this.instance_11 = new lib.shape14("synched",0);

	this.instance_12 = new lib.shape15("synched",0);

	this.instance_13 = new lib.shape16("synched",0);

	this.instance_14 = new lib.shape17("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-1,57.9,17.7);


(lib.Symbol16 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Tween22("synched",0);
	this.instance.setTransform(30,30);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.Символ73 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ72();
	this.instance.setTransform(24.1,12.1,0.684,0.684,118.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.8,-17.9,71.8,60);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();

	this.instance_1 = new lib.Символ45копия2();
	this.instance_1.setTransform(0,0,1.068,1.068);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152,-38,304,76);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.button1.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("http://www.adobe.com", "_blank");
		}
		
		this.button2.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("http://www.adobe.com", "_blank");
		}
		
		this.button3.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("http://www.adobe.com", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 4174086550_38090eab5c_o1_07.png
	this.button1 = new lib.Символ47();
	this.button1.setTransform(-399.4,-111.9);
	new cjs.ButtonHelper(this.button1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button1).wait(1));

	// 4174086550_38090eab5c_o1_05.png
	this.button2 = new lib.Символ48();
	this.button2.setTransform(-399.4,-18);
	new cjs.ButtonHelper(this.button2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button2).wait(1));

	// 4174086550_38090eab5c_o1_03.png
	this.button3 = new lib.Символ49();
	this.button3.setTransform(-401.4,77.8);
	new cjs.ButtonHelper(this.button3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-563.8,-152.6,627,271);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.setTransform(-3.2,-27.8,4.158,4.158);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-11.2},7).to({x:-3.2},8).to({x:4.8},7).to({x:-3.2},7).wait(1));

	// Символ 41
	this.instance_1 = new lib.Символ41();
	this.instance_1.setTransform(0.1,23.7,4.196,4.196);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:8.1},7).to({x:0.1},8).to({x:-7.9},7).to({x:0.1},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.2,-45,132.4,90.2);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ42();
	this.instance.setTransform(3,144.8);

	// Слой 1
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(6.1,14.6,1.116,1.116);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.1,-29.8,155.3,219.7);


(lib.Символ6копия = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-151,-170.5,302,341);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:10},49).to({x:0},51).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-170.5,302,341);


(lib.Символ5копия = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ6копия();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-151,-170.5,302,341);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:10},79).to({y:0},80).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-170.5,302,341);


(lib.sprite112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.setTransform(1.5,21.8,0.85,0.85,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[1.5,21.7,1.5,21.3,1.5,20.9,1.5,15.3,5.6,11.2,9.7,7.1,15.3,7.1,21.1,7.1,25.2,11.2,29.3,15.3,29.3,20.9,29.3,26.7,25.2,30.8,21.1,34.9,15.3,34.9,9.7,34.9,5.6,30.8,3.3,28.5,2.3,25.7]}},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-3.7,51,51);


(lib.sprite19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.preview_flabird_2();
	this.instance.setTransform(-5.8,-5.5,0.236,0.236);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.75,scaleY:0.75,x:-502.7,y:-178.5},124).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-5.5,13.2,3.7);


(lib.Символ69 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ5();

	this.instance_1 = new lib.Символ5копия();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-170.5,302,341);


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


(lib.Символ43 = function() {
	this.initialize();

	// Слой 2
	this.cir = new lib.sprite113();
	this.cir.setTransform(-1.8,-17.9,0.499,0.499,0,0,0,27.6,27.6);

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.setTransform(-5.5,-78.8);

	this.addChild(this.instance,this.cir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-77.6,-108.6,155.3,219.7);


(lib.Символ9 = function(mode,startPosition,loop) {
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

	// Слой 2
	this.instance = new lib.Символ44();
	this.instance.setTransform(121.7,80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:342.7},9).to({x:121.7},10).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ43();
	this.instance_1.setTransform(5.1,64.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-241.9},9).to({x:5.1},10).wait(1));

	// Слой 5
	this.job = new lib.Символ7();
	this.job.setTransform(3.6,64.8);

	this.timeline.addTween(cjs.Tween.get(this.job).to({x:-5.4},9).to({x:3.6},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-431.7,-83.4,541,296.4);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.button.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
		
		stage.canvas.style.cursor = "none";
		this.kurs.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.kurs.x = stage.mouseX;
			this.kurs.y = stage.mouseY;
		}
		
		
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		this.cursor = "none";
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		 function fl_MouseOverHandler_5()
		{
		    _this.job.gotoAndPlay(0);
			_this.girl.gotoAndStop(1);
			
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		function fl_MouseOutHandler_2()
		{
		    _this.job.gotoAndPlay(10);
			_this.girl.gotoAndStop(0);
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 10
	this.kurs = new lib.Символ73();
	this.kurs.setTransform(313.7,172.3);

	this.timeline.addTween(cjs.Tween.get(this.kurs).wait(1));

	// Слой 6
	this.job = new lib.Символ9();
	this.job.setTransform(107,87.7);

	this.timeline.addTween(cjs.Tween.get(this.job).wait(1));

	// Слой 2
	this.girl = new lib.Символ69();
	this.girl.setTransform(416.5,170.5);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Слой 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkVR7QiAgCg+gVQgsgWgQgEIrNgCQgRgEgbgTQgqgcgLgGQhPgthpAIInDACQgVAEg3AGQg0AGgOAAQguAAjOhFQjjhMgcgFQhugMhVgRQikgiAAg5QAAgyA+kLIBCkjIAAo3QAMhGAfh4QArijAHgfQAIgjAgg/QAshUAEgKQAJgUAJgiQALgcAdgOQBIgkEvgBIHDgCQB6gIAcgBIAAgBIc+AAQB8AMGBAaQFkAZAXADQCXAXBhAJQDNATGRAPIDMABIB4AGIGuAAQDLgFAhAVQAMAHgEAPIgIAZIAABIQAAAWAUA8IATA8QABAQgXASIgvAhQhHAwAAAwQAAAgAgASQAgASAAAjQAAAlgaA0QgaAzAAAxIATAiQAUAiAAAcQAAAlg2AtQg3AsAAApQAAASAUAqQATArAAAoQgBAugjA3QgpA9hAAjIgtAAQgHgCgSgZQgOgVghAAQgYAAgSAXQgWAdgFADIidADQgKAGgEAIQgDAJgCAEQgKAOg/AHIh7AAIgRh/QgBgOAAhOQAAhAAFgVQAKgtAqgiQgJgKgCgJQAAgLgCgLIhpAAIgTALQgJAFgLAAIgOgBIgCgCIAAgnIhtAAQgBAEgGAFQgGAFABAJQAAAeAaAoQAcArADA0QACAUAkAOQAmAOACAWQABASAAAeIgBAmIgFBFQgEBAACAjQACA8goAMQg1ARg3AbQgdAOgoAAQgKAAgEgCIgCgBQAAgugFgYQgLgogdgXQAAAWAEAtIADAzIABAYQAAAVgLAPQgeAuhygIQhDA2gXAAQgjgOgpgNQhUgbgyAAQgXAAggA2QghA3gEAuQA9ANAKAFQAIAEAAANQAAAOgVASIgiAaQAvASAfAJQA1AQBNANQAKAKAKATQAAAMgTANIgaAQIjgAAQhxACg8gJQgqgKgRAAQixAAlrA8QlmBAhBAIgAdIAKQAAAHAHAOQAGANAAAJQAABLgVAgQgLAQgjARQghAPgNAbQgVAqAABeQAAAyAOAcQAYAuANAzQASgGANgKIATgOQAagQBTgIQAUgpAGg+QACgXAAhWIAAghQABgYgBgPQgDgSgigQQgjgRgGgPQgGgQgNg4QgKgtgKgRgAaJg8QgJAFgGABQgIAJgIALQgOAXAAAHQAAAgAcA8QAhBIAFAPQAEASgHBMQgFA5AeAgQgBg2ACgeQAEg2AWgXQAHgHAugOQAmgKAMgiQgBgOADgdIACglQAAgLgJgjQgJgkgHgJIgGgHIgBAAQgTgGgfgCQgFgCgFgFIgKgJIgwAAQgNADgOAHg");
	mask.setTransform(320.2,5.7);

	// Слой 1 - копия
	this.instance = new lib.sprite19();
	this.instance.setTransform(497.2,107.9,0.8,0.8,-0.2);

	this.instance_1 = new lib.sprite19();
	this.instance_1.setTransform(508.7,59.7,0.5,0.5,-0.2);

	this.instance_2 = new lib.sprite19();
	this.instance_2.setTransform(492.7,80.8,0.5,0.5,-0.2);

	this.instance_3 = new lib.sprite19();
	this.instance_3.setTransform(495.6,71,1,1,-0.2);

	this.instance_4 = new lib.sprite19();
	this.instance_4.setTransform(518.3,111.8,1,1,-0.2);

	this.instance_5 = new lib.sprite19();
	this.instance_5.setTransform(509.4,133.7,0.95,0.95,-0.2);

	this.instance_6 = new lib.sprite19();
	this.instance_6.setTransform(492.3,120,1,1,-0.2);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 7
	this.button = new lib.Символ70();
	this.button.setTransform(320,152.5);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.Символ70(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Слой 1
	this.instance_7 = new lib.back();
	this.instance_7.setTransform(-4.3,-22,1.143,1.143);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,130.5,1052,363);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;