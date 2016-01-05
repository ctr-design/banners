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
		{src:"images/blue.png", id:"blue"},
		{src:"images/center.png", id:"center"},
		{src:"images/image16.png", id:"image16"},
		{src:"images/image6.png", id:"image6"},
		{src:"images/menu.png", id:"menu"},
		{src:"images/pole.jpg", id:"pole"},
		{src:"images/purple.png", id:"purple"},
		{src:"images/rama.png", id:"rama"},
		{src:"images/verh.png", id:"verh"},
		{src:"images/vopros.png", id:"vopros"}
	]
};



// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.blue = function() {
	this.initialize(img.blue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,57);


(lib.center = function() {
	this.initialize(img.center);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,170);


(lib.image16 = function() {
	this.initialize(img.image16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,78);


(lib.image6 = function() {
	this.initialize(img.image6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,62);


(lib.menu = function() {
	this.initialize(img.menu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,43);


(lib.pole = function() {
	this.initialize(img.pole);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,342,283);


(lib.purple = function() {
	this.initialize(img.purple);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,48);


(lib.rama = function() {
	this.initialize(img.rama);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,342,284);


(lib.verh = function() {
	this.initialize(img.verh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,269,26);


(lib.vopros = function() {
	this.initialize(img.vopros);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,34);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.back();
	this.instance.setTransform(-343,-163.4,1.072,1.072);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-343,-163.4,686,326.9);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AqOMqIAA5TIUdAAIAAZTg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ai3A+QgGgBgFgCQgGgCgFgEIgIgIIgHgJIgEgLIgDgMIgBgNIABgLIADgMIAFgMIAHgJIAJgIIAKgGQAGgCAGgBQAGgCAHAAQAHAAAHACQAGABAGACIAKAGIAIAIIAHAJQADAFABAGQAEAQAAAIIgBANQgBAHgCAGIgFALIgIAJIgIAIQgFADgGACIgMAEIgNABQgHAAgGgCgAi1glQgGADgEAGQgEAFgCAIQgCAIAAAHQAAAJADAIQACAHAEAGQADAFAGADQAGADAHAAQAHAAAFgDQAGgDAEgGQAEgFACgIQACgIAAgIQAAgHgCgIQgCgHgEgGQgEgGgGgDQgFgDgHAAQgHAAgGADgAmzA+IACgXIAJABQAGAAAFgDQAEgEACgFQABgCgBgDIgqhUIAgAAIAaBCIABAAIAUhCIAeAAIgYA9QgPAkgJALQgGAIgIAEQgEADgFABIgKABQgIAAgGgCgAD0A9IAAh6IAcAAIAAAsIAPgBQAKAAAJACQAJACAHAFQAHAGAEAFQAEALAAAHQAAAJgDAHQgDAGgEAFQgFAFgGADIgNAFIgOACIgPABQgSAAgMgCgAEQACIAAAnIAKABQAGAAAEgBQAFgCADgCQADgDACgEQACgEAAgFQAAgFgCgEQgCgEgDgCIgIgEIgJgBgAhaA9IAAh4IAkgDQAOAAAIACQAIACAHADQAHAEAEAGQAEAHAAAIIgBAIIgEAHIgGAHIgJAEIAAABIAJADIAIAGQAEADABAFQAAAFAAAGQAAAJgBAGQgEAHgGAFIgIAFIgKADQgSADgNAAQgSAAgMgCgAg+AqIALAAIAJgBIAHgDIAGgFQACgEAAgFQAAgEgCgEQgCgDgEgCQgDgCgFgBIgKgBIgJAAgAg+goIAAAdIAJAAQAFAAAFgCQAEgBADgCIAEgEQACgDAAgEQAAgHgFgDQgGgEgJAAIgMABgAGnA+IAAhdIAAAAIgXALIgFgVIAggPIAXAAIAAB2gADAA+IAAg0IgvAAIAAA0IgcAAIAAh7IAcAAIAAAwIAvAAIAAgwIAcAAIAAB7gAATA+IAAh7IBNAAIAAAXIgxAAIAAAaIAuAAIAAAVIguAAIAAAeIAzAAIAAAXgAlJA+IAAh5IAmgDQANAAAJADQAKACAGAFQAGAFAEAIQADAHAAAJQAAAJgDAIQgDAGgFAFIgIAGIgKAEQgOADgJAAIgJgBIAAAtgAktgnIAAAkIAJABQAGAAAEgBQAFgCADgCQADgDACgEQABgDAAgFQAAgEgBgEQgBgDgDgCIgHgEIgKgBIgLABg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.1,-6.4,90.2,12.9);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.verh();
	this.instance.setTransform(-134.5,-13);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-134.5,-13,269,26);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,0,0)","#FFFF00","rgba(255,255,0,0)"],[0,0.502,1],-26.5,0,26.5,0).s().p("AnkIbIG5w2IIQAAIm5Q2g");
	this.shape.setTransform(-8,-6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56.5,-60,97.1,108);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJ3BLQgGgBgFgDQgFgDgEgEIgIgJQgGgKgDgOQgEgNAAgQQAAgNAEgOQACgJAIgOQADgGAFgEQAEgEAFgCQAFgDAGgCQAGgBAHAAQAHAAAHABQAGACAFADIAJAHIAIAJQAGAKADANQADANAAAOQAAAQgDAOQgGARgFAHIgHAJQgFAEgFACIgLAEQgGACgHAAQgHAAgGgCgAJ8gqQgEADgCAGQgDAHgBAJQgCAJAAAKQAAANACAJQABAJADAGQACAGAEADQAEADAFAAQAFAAAEgDQADgDADgGQADgGABgJQABgKAAgMQAAgKgBgJQgBgJgDgGQgCgHgEgDQgEgDgFAAQgFAAgEADgAH9BLQgGgBgFgDQgFgDgFgEIgHgJQgHgKgDgOQgDgNAAgQQAAgNADgOQACgJAIgOQAEgGAEgEQAEgEAGgCQAFgDAGgCQAGgBAHAAQAHAAAGABQAGACAFADIAKAHIAHAJQAGAKADANQADANAAAOQAAAQgDAOQgGARgEAHIgIAJQgEAEgFACIgLAEQgHACgGAAQgHAAgGgCgAICgqQgEADgDAGQgCAHgCAJQgBAJAAAKQAAANABAJQABAJADAGQADAGAEADQAEADAFAAQAEAAAEgDQAEgDADgGQACgGABgJQACgKAAgMQAAgKgCgJQgBgJgCgGQgDgHgEgDQgEgDgFAAQgEAAgEADgAGCBLQgGgBgFgDQgFgDgFgEIgHgJQgHgKgDgOQgDgNAAgQQAAgNADgOQACgJAIgOQAEgGAEgEQAEgEAGgCQAFgDAGgCQAGgBAHAAQAHAAAGABQAGACAFADIAKAHIAHAJQAGAKADANQADANAAAOQAAAQgDAOQgGARgEAHIgIAJQgEAEgFACIgLAEQgHACgGAAQgHAAgGgCgAGHgqQgEADgDAGQgCAHgCAJQgBAJAAAKQAAANABAJQABAJADAGQADAGAEADQAEADAFAAQAEAAAEgDQAEgDADgGQACgGABgJQACgKAAgMQAAgKgCgJQgBgJgCgGQgDgHgEgDQgEgDgFAAQgEAAgEADgAEHBLQgGgBgFgDQgFgDgEgEIgIgJQgGgKgDgOQgEgNAAgQQAAgNAEgOQACgJAIgOQADgGAFgEQAEgEAFgCQAFgDAGgCQAGgBAHAAQAHAAAHABQAGACAFADIAJAHIAIAJQAGAKADANQADANAAAOQAAAQgDAOQgGARgFAHIgHAJQgFAEgFACIgLAEQgGACgHAAQgHAAgGgCgAEMgqQgEADgCAGQgDAHgBAJQgCAJAAAKQAAANACAJQABAJADAGQACAGAEADQAEADAFAAQAFAAAEgDQADgDADgGQADgGABgJQABgKAAgMQAAgKgBgJQgBgJgDgGQgCgHgEgDQgEgDgFAAQgFAAgEADgAAHBHQgFgGAAgIQAAgJAFgGQAGgGAJAAQAIAAAGAGQAFAGAAAJQAAAIgFAGQgGAGgIAAQgJAAgGgGgAj7BKIADgbIALABQAHAAAGgEQAFgEACgGQACgCgCgEIgzhlIAmAAIAhBPIAAAAIAZhPIAjAAIgcBIQgSAsgLAOQgIAKgJAEQgFADgGABQgFACgHAAQgKAAgHgDgAoGBLQgHgBgGgDIgNgHIgJgJQgFgFgDgHIgGgMIgEgPIgBgPIABgPIAEgOIAGgOIAJgLIAKgKIANgHIAOgEIAQgCQAIAAAIACQAHACAHADQAHACAFAFIAKAJQAFAFADAGQAEAGACAHQAFATAAAKQAAAHgCAJIgEAPQgCAHgEAGQgEAHgFAFIgKAJQgGAEgHACIgOAEQgIACgIAAQgIAAgIgCgAoDgtQgHAEgFAHQgFAHgCAJQgCAJAAAJQAAALACAJQADAJAEAHQAFAHAHADQAHAEAIAAQAIAAAHgEQAHgEAEgHQAFgGADgKQACgJAAgKQAAgJgCgJQgDgJgEgHQgFgHgHgEQgHgEgIAAQgJAAgGAEgAhGBLQgJgBgHgDQgIgDgGgEIgLgJQgFgFgDgGIgGgNIgEgOIgBgPQAAgIABgIQACgJADgHQADgHAEgHIAKgLIAMgJQAHgEAHgCIAQgEIAQgCQAMAAALADQAJABAFADIgHAbQgQgGgMAAQgLAAgIADQgJAEgGAGQgHAGgDAJQgEAKAAAKQAAALADAJQADAJAHAGQAGAHAJADQAJAEALAAQAKAAASgFIAFAaQgFADgKABQgLACgMAAIgSgBgAq6BKIAAiTIBkAAIAAAbIhCAAIAAAaIASgBQAMAAALADQALADAIAGQAIAGAFAHQAFANAAAIQAAALgEAIQgEAJgHAGQgFAEgHAEIgPAFQgWAEgLAAQgWAAgPgCgAqYADIAAAvIANABQAGAAAGgCQAGgCAEgEQADgDACgFQACgEAAgGQAAgFgCgEIgGgHQgEgEgGgBQgGgCgGAAgACQBKIAAhwIgbANIgGgZIAmgSIAcAAIAACOgAk9BKIAAg+Ig3AAIAAA+IgiAAIAAiTIAiAAIAAA5IA3AAIAAg5IAiAAIAACTgAAHAAQgFgEAAgJQAAgJAFgGQAGgFAJAAQAJAAAFAFQAFAGAAAJQAAAJgFAEQgGAFgIAAQgJAAgGgFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69.9,-7.7,139.9,15.5);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-111.4,-35.3,223,70.7);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.blue();
	this.instance.setTransform(-27.5,-28.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-28.5,55,57);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.blue();
	this.instance.setTransform(-27.5,-28.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-28.5,55,57);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.purple();
	this.instance.setTransform(-28,-24);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28,-24,56,48);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pole();
	this.instance.setTransform(-171,-141.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-171,-141.5,342,283);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.menu();
	this.instance.setTransform(-48,-21.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48,-21.5,96,43);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.purple();
	this.instance.setTransform(-28,-24);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28,-24,56,48);


(lib.shape17 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.image16, null, new cjs.Matrix2D(1,0,0,1,-52,-39)).s().p("AoHGGIAAsLIQPAAIAAMLg");
	this.shape.setTransform(52,39);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,78);


(lib.shape12 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,31.4).s().p("AjaDbQhbhbAAiAQAAh/BbhbQBbhbB/AAQCAAABbBbQBbBbAAB/QAACAhbBbQhbBbiAAAQh/AAhbhbg");
	this.shape.setTransform(0.6,0.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.4,-30.7,62.1,62.1);


(lib.shape9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-0.2,-5.9,0,-0.2,-5.9,76.6).s().p("AAAq7QAmLFgmKyQgmrFAmqyg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-70,3.9,140.1);


(lib.shape7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.image6, null, new cjs.Matrix2D(1,0,0,1,-31,-31)).s().p("Ak1E2IAAprIJrAAIAAJrg");
	this.shape.setTransform(31,31);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62,62);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.setTransform(341,145.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-17.9,686,326.9);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ27();
	this.instance.setTransform(-2.5,-1.6);

	// Слой 1
	this.instance_1 = new lib.Символ25();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-134.5,-13,269,26);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:334},16).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.5,-60,97.1,108);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(0.5,0.5);

	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.setTransform(-145.8,-1.2);

	this.instance.mask = mask;

	// Слой 1
	this.instance_1 = new lib.Символ19();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-111.4,-35.3,223,71.2);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-30},14).to({x:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.9,-7.7,139.9,15.5);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ22();
	this.instance.setTransform(1.9,-21.2);

	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(15.4,43);

	// Слой 1
	this.instance_2 = new lib.center();
	this.instance_2.setTransform(-136,-85);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-200.5,-85,336.5,170);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#747629").ss(1,1,1).p("AjHipIGPAAIAAFTImPAAg");
	this.shape.setTransform(394.6,-45.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjGCpIAAlRIGNAAIAAFRg");
	this.shape_1.setTransform(394.6,-45.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(15));

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-55,alpha:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-63.8,443.1,92.4);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28,-24,56,48);


(lib.Символ12копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#747629").ss(1,1,1).p("AhyiGIDlAAIAAEMIjlAAg");
	this.shape.setTransform(-154.4,-59.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhxCGIAAkMIDjAAIAAEMg");
	this.shape_1.setTransform(-154.4,-59.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(15));

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-57,y:-2,alpha:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166.9,-74.3,194.9,98.4);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#747629").ss(1,1,1).p("AhyiGIDlAAIAAEMIjlAAg");
	this.shape.setTransform(-154.4,-59.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhxCGIAAkMIDjAAIAAEMg");
	this.shape_1.setTransform(-154.4,-59.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(15));

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:55,alpha:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166.9,-74.3,194.9,98.4);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:6.5},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-6.7},0).wait(1).to({rotation:0},0).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-28.5,55,57);


(lib.Символ6копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:6.7},0).wait(1).to({rotation:-9.5},0).wait(1).to({rotation:0},0).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-24,56,48);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:6.7},0).wait(1).to({rotation:-9.5},0).wait(1).to({rotation:0},0).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-24,56,48);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.vopros();
	this.instance.setTransform(-106.5,-16.5);

	// Слой 1
	this.instance_1 = new lib.Символ2();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106.5,-21.5,154.5,43);


(lib.sprite10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape9("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-70,3.9,140.1);


(lib.sprite8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape7("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62,62);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ7();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-28.5,55,57);


(lib.sprite11 = function() {
	this.initialize();

	// Layer 7
	this.instance = new lib.sprite10();
	this.instance.setTransform(0,0,0,0);

	// Layer 5
	this.instance_1 = new lib.sprite10();
	this.instance_1.setTransform(0,0,0.289,0.664,0,-45,90);

	// Layer 3
	this.instance_2 = new lib.sprite10();

	// Layer 1
	this.instance_3 = new lib.sprite10();
	this.instance_3.setTransform(0,0,0,0);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.8,-93,65.7,186.1);


(lib.sprite13 = function() {
	this.initialize();

	// Layer 9
	this.instance = new lib.shape12("synched",0);

	// Layer 1
	this.instance_1 = new lib.sprite11();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.8,-93,65.7,186.1);


(lib.stars_flathestar_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite13();
	this.instance.setTransform(0,0,1,0,0,0,90);
	this.instance.shadow = new cjs.Shadow("#FFFFFF",0,0,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.21},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-38.8,20,83);


(lib.sprite18 = function() {
	this.initialize();

	// Layer 26
	this.instance = new lib.stars_flathestar_5();
	this.instance.setTransform(83.8,26.6,0.096,0.096);

	// Layer 24
	this.instance_1 = new lib.stars_flathestar_5();
	this.instance_1.setTransform(97.8,35.1,0.197,0.197);

	// Layer 22
	this.instance_2 = new lib.stars_flathestar_5();
	this.instance_2.setTransform(94.2,49.2,0.197,0.197);

	// Layer 20
	this.instance_3 = new lib.stars_flathestar_5();
	this.instance_3.setTransform(82.6,70.8,0.12,0.12);

	// Layer 18
	this.instance_4 = new lib.stars_flathestar_5();
	this.instance_4.setTransform(15.9,65.9,0.095,0.095);

	// Layer 16
	this.instance_5 = new lib.stars_flathestar_5();
	this.instance_5.setTransform(63.3,69.1,0.197,0.197);

	// Layer 14
	this.instance_6 = new lib.stars_flathestar_5();
	this.instance_6.setTransform(69.6,49.2,0.129,0.129);

	// Layer 12
	this.instance_7 = new lib.stars_flathestar_5();
	this.instance_7.setTransform(6.8,52.2,0.197,0.197);

	// Layer 10
	this.instance_8 = new lib.stars_flathestar_5();
	this.instance_8.setTransform(11.9,40.2,0.126,0.126);

	// Layer 8
	this.instance_9 = new lib.stars_flathestar_5();
	this.instance_9.setTransform(48.5,46.7,0.197,0.197);

	// Layer 6
	this.instance_10 = new lib.stars_flathestar_5();
	this.instance_10.setTransform(28.2,21.6,0.197,0.197);

	// Layer 4
	this.instance_11 = new lib.stars_flathestar_5();
	this.instance_11.setTransform(61.2,19.7,0.197,0.197);

	// Layer 2
	this.instance_12 = new lib.stars_flathestar_5();
	this.instance_12.setTransform(52.5,7.4,0.197,0.197);

	// Layer 1
	this.instance_13 = new lib.shape17("synched",0);

	this.addChild(this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-2,104.8,84.7);


(lib.sprite15 = function() {
	this.initialize();

	// Layer 17
	this.instance = new lib.stars_flathestar_5();
	this.instance.setTransform(50.3,13,0.197,0.197);

	// Layer 15
	this.instance_1 = new lib.stars_flathestar_5();
	this.instance_1.setTransform(38,26.3,0.197,0.197);

	// Layer 13
	this.instance_2 = new lib.stars_flathestar_5();
	this.instance_2.setTransform(61.4,23.6,0.1,0.1);

	// Layer 11
	this.instance_3 = new lib.stars_flathestar_5();
	this.instance_3.setTransform(68.1,40.9,0.197,0.197);

	// Layer 9
	this.instance_4 = new lib.stars_flathestar_5();
	this.instance_4.setTransform(49.2,58.2,0.197,0.197);

	// Layer 7
	this.instance_5 = new lib.stars_flathestar_5();
	this.instance_5.setTransform(15.7,52.7,0.11,0.11);

	// Layer 5
	this.instance_6 = new lib.stars_flathestar_5();
	this.instance_6.setTransform(7.5,34.5,0.197,0.197);

	// Layer 3
	this.instance_7 = new lib.stars_flathestar_5();
	this.instance_7.setTransform(13.7,18.3,0.197,0.197);

	// Layer 1
	this.instance_8 = new lib.stars_flathestar_5();
	this.instance_8.setTransform(29.6,7.9,0.116,0.116);

	this.addChild(this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.5,1.1,70.6,70.6);


(lib.sprite19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 46
	this.instance = new lib.sprite8();
	this.instance.setTransform(-7.7,-7.6,0.29,0.29);
	this.instance.alpha = 0.5;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.82,scaleY:0.82,x:-24.2,y:-24.2,alpha:0.879},2).to({scaleX:0.96,scaleY:0.96,x:-28.3,y:-28.3,alpha:0.969},1).to({scaleX:1,scaleY:1,x:-29.7,y:-29.6,alpha:1},1).to({scaleX:1.47,scaleY:1.47,x:-44.2,y:-44.1,alpha:0},7).to({_off:true},1).wait(10));

	// Layer 28
	this.instance_1 = new lib.sprite15();
	this.instance_1.setTransform(-7.4,-1.9,0.278,0.278);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:0.52,scaleY:0.52,x:-16.9,y:-12.1},1).to({scaleX:0.91,scaleY:0.91,x:-31.8,y:-28.2},2).to({scaleX:1.16,scaleY:1.16,x:-41.1,y:-38.4},2).to({scaleX:1.26,scaleY:1.26,x:-45.2,y:-40,alpha:0.199},8).to({scaleX:1.28,scaleY:1.28,x:-45.8,y:-40.2,alpha:0.102},1).wait(1).to({scaleX:1.29,scaleY:1.29,x:-46.2,y:-40.4,alpha:0,compositeOperation:NaN},0).to({_off:true},1).wait(5));

	// Layer 1
	this.instance_2 = new lib.sprite18();
	this.instance_2.setTransform(-6.8,1,0.128,0.128);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({scaleX:0.34,scaleY:0.34,x:-17.8,y:-10.4},1).to({scaleX:0.68,scaleY:0.68,x:-35.8,y:-29.3},2).to({scaleX:0.82,scaleY:0.82,x:-42.9,y:-36.7},1).to({scaleX:1.01,scaleY:1.01,x:-53.3,y:-47.5},2).to({scaleX:1.14,scaleY:1.14,x:-59.7,y:-50,alpha:0.078},12).wait(1).to({scaleX:1.15,scaleY:1.15,x:-60.3,y:-50.2,alpha:0,compositeOperation:NaN},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-7.6,18,18);


(lib.Символ14копия = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.sprite19();
	this.instance.setTransform(-1.2,-1.3,1.304,1.304);
	this.instance.shadow = new cjs.Shadow("#FFFFFF",0,0,0);

	// Слой 2
	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(0.5,-0.5);

	// Слой 1
	this.instance_2 = new lib.Символ7();

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-63.9,443.1,92.4);


(lib.Символ11копия = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.sprite19();
	this.instance.setTransform(-1.2,-1.3,1.304,1.304);
	this.instance.shadow = new cjs.Shadow("#FFFFFF",0,0,0);

	// Слой 2
	this.instance_1 = new lib.Символ12копия();
	this.instance_1.setTransform(0.5,0.5);

	// Слой 1
	this.instance_2 = new lib.Символ6копия();

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-165.9,-73.4,194.4,97.9);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.sprite19();
	this.instance.setTransform(-1.2,-1.3,1.304,1.304);
	this.instance.shadow = new cjs.Shadow("#FFFFFF",0,0,0);

	// Слой 2
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(0.5,0.5);

	// Слой 1
	this.instance_2 = new lib.Символ6копия();

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-165.9,-73.4,194.4,97.9);


(lib.Символ9копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();

	this.instance_1 = new lib.Символ11копия();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-24,56,48);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();

	this.instance_1 = new lib.Символ11();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-24,56,48);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();

	this.instance_1 = new lib.Символ14копия();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-28.5,55,57);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.button1.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open(clickTAG, "_blank");
		}
		
		this.button2.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open(clickTAG, "_blank");
		}
		
		this.button3.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open(clickTAG, "_blank");
		}
		
		this.button4.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 9
	this.instance = new lib.rama();
	this.instance.setTransform(-171.5,-141.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 7
	this.button2 = new lib.Символ15();
	this.button2.setTransform(142.5,-58,1,1,180);
	new cjs.ButtonHelper(this.button2, 0, 1, 1);

	this.button1 = new lib.Символ15();
	this.button1.setTransform(142.5,56);
	new cjs.ButtonHelper(this.button1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button1},{t:this.button2}]}).wait(1));

	// Символ 6
	this.button3 = new lib.Символ9копия();
	this.button3.setTransform(-85,57.5);
	new cjs.ButtonHelper(this.button3, 0, 1, 1);

	this.button4 = new lib.Символ9();
	this.button4.setTransform(-142,0.5);
	new cjs.ButtonHelper(this.button4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button4},{t:this.button3}]}).wait(1));

	// Символ 4
	this.instance_1 = new lib.Символ4();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-308.4,-141.5,867,284);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.button.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		
		}
		
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 100;
		this.fon.y = - stage.mouseY / 100;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.instance = new lib.Символ3();
	this.instance.setTransform(181.5,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.button = new lib.Символ28();
	this.button.setTransform(320,152.5,4.885,1.883);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.Символ28(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Слой 6
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(529,273.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ26();
	this.instance_2.setTransform(495.5,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 4
	this.instance_3 = new lib.Символ18();
	this.instance_3.setTransform(496.5,140.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 2
	this.fon = new lib.Символ30();
	this.fon.setTransform(-25.5,13.5);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(292.5,148.1,686,326.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;