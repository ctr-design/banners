(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/more_plyazh_gorizont_pesok_tropiki_47980_3840x2160.jpg", id:"more_plyazh_gorizont_pesok_tropiki_47980_3840x2160"},
		{src:"images/photo1.png", id:"photo1"},
		{src:"images/tip1.png", id:"tip1"}
	]
};



// symbols:



(lib.more_plyazh_gorizont_pesok_tropiki_47980_3840x2160 = function() {
	this.initialize(img.more_plyazh_gorizont_pesok_tropiki_47980_3840x2160);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,216);


(lib.photo1 = function() {
	this.initialize(img.photo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,180);


(lib.tip1 = function() {
	this.initialize(img.tip1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,600);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ44 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.tip1();
	this.instance.setTransform(67.2,-155.9,0.564,0.52,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.1,-155.9,134.3,311.8);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAdAoIgHgCIgHgEIgFgFIgEgGIgDgHIgCgIIgBgIIABgHIACgIIADgHIAFgGIAFgFIAHgEIAIgDIAIAAIAJAAIAIADIAGAEIAGAFIAEAGIADAHQADAKAAAFIgBAIIgCAIIgEAIIgEAGIgGAFIgHADIgIACIgIABIgJgBgAAfgYQgEACgDAEQgCAEgBAFQgCAFAAAEQAAAFACAFQABAFADAEQACAEAEACQADACAFAAQAFAAADgDQAEgCACgDQADgEABgFIABgKIgBgJQgBgFgDgEQgCgEgEgCQgEgCgEAAQgFAAgDACgAgdAoIgRgfIgOgbIgBAAIABAhIAAAZIgRAAIAAhPIAWAAIAQAeIAOAZIgCgfIAAgYIARAAIAABPg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.8,-4.2,15.7,8.4);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.photo1();
	this.instance.setTransform(40,40,0.444,0.444,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40,-40,80,80);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("ABZBFQgKgCgHgEIAHgaIAQAGQAKADAJAAQAKAAAHgEQAFgEAAgHQAAgHgFgEQgGgEgMgFQgJgDgHgEQgHgEgGgDQgFgFgCgHQgDgGAAgHQAAgJAEgIQADgIAIgGQAHgFAJgDQAKgEAMAAQALAAAKACIAPAFIgHAaQgPgHgPAAQgJAAgGAEQgFAEAAAGQAAAGAHAEQAEAEAPAGIARAHQAGAEAFADQAEAGADAGQACAGAAAHQgBAJgDAIQgEAIgGAGQgHAGgLADQgLAEgOAAQgMAAgLgDgAgfBGIAAiKIBVAAIAAAaIg2AAIAAAdIAzAAIAAAXIgzAAIAAAiIA4AAIAAAagAh8BGIAAg6IgshQIAkAAIAaA8IAZg8IAkAAIguBPIAAA7g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.9,-7.2,33.8,14.5);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.photo1();
	this.instance.setTransform(-40,-40,0.444,0.444);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40,-40,80,80);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/BIIAAiOQAMgCAggBQAOAAATAEIAOAFIALAHQAGAEAEAFQAGAGACAHIAGAPQABAJAAAJQAAAIgBAKQgCAIgEAHQgDAIgFAGQgDAFgHAFQgFAFgHAEIgQAGQgIACgIABIgUABQgSAAgUgCgAgeguIAABdIALABQAMAAAHgDQAJgDAGgGQAHgHAEgJQADgKAAgLQAAgLgDgJQgDgJgGgFQgHgHgIgCQgGgDgLgBQgJAAgGACg");
	this.shape.setTransform(0.2,-1.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.3,-9.3,12.9,14.9);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPBJQgHgBgHgDQgGgDgGgDIgKgJIgHgLQgEgHgCgHIgDgNIgCgQIACgOQABgHACgHIAGgNIAJgLQAEgFAGgEIAMgIIAOgDQAHgCAGAAQAJAAAHACQAIABAGADQAHADAFAEIAKAJIAIAKQADAHACAHQAFASAAAKIgBAPIgEAPQgDAHgEAHQgDAGgFAEQgFAFgFAEQgGAEgHADIgOADQgHACgGAAQgIAAgHgCgAgNgsQgHAEgEAGQgFAHgCAJQgDAJAAAJQAAAKADAJQACAKAFAGQAEAHAHADQAHAEAGgBQAIABAHgEQAGgEAFgGQAEgHADgKQACgJAAgJQAAgJgCgIQgDgJgEgIQgFgGgGgEQgHgEgIAAQgHAAgGAEg");
	this.shape.setTransform(-0.2,-1.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.2,-9.4,14.1,15.1);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQBJIAAg9IguhTIAlAAIAZA/IAAAAIAag/IAlAAIgwBSIAAA+g");
	this.shape.setTransform(-0.1,-1.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.5,-9.2,12.8,14.6);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPBJQgHgBgHgDQgGgDgGgDIgKgJIgHgLQgEgHgCgHIgDgNIgCgQIACgOQABgHACgHIAGgNIAJgLQAEgFAGgEIAMgIIAOgDQAHgCAGAAQAJAAAHACQAIABAGADQAHADAFAEIAKAJIAIAKQADAHACAHQAFASAAAKIgBAPIgEAPQgDAHgEAHQgDAGgFAEQgFAFgFAEQgGAEgHADIgOADQgHACgGAAQgIAAgHgCgAgNgsQgHAEgEAGQgFAHgCAJQgDAJAAAJQAAAKADAJQACAKAFAGQAEAHAHADQAHAEAGgBQAIABAHgEQAGgEAFgGQAEgHADgKQACgJAAgJQAAgJgCgIQgDgJgEgIQgFgGgGgEQgHgEgIAAQgHAAgGAEg");
	this.shape.setTransform(-0.2,-1.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.2,-9.4,14.1,15.1);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYBGIgKgFIgJgHQgEgFgCgFQgDgFgCgGQgDgJgBgVIAAhQIAhAAIAABSQAAAKACAHQABAHAEAFQADAEAFADQAFACAFAAQAGAAAFgCQAFgCADgFQAEgFACgHQABgHAAgKIAAhSIAhAAIAABQQgBAVgDAJIgFALQgDAFgEAEIgIAHQgFAEgGACQgQAEgIAAQgRgCgHgCg");
	this.shape.setTransform(-0.2,-1.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.1,-9.2,12,14.9);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATBJIgMhAIgHgrIAAAAQgDAdgEAOIgOBAIgkAAIgjiQIAjAAIAUBsIABAAQACgSAHgfIAMg7IAiAAIALA9QAFAVADAaIABAAIAIgxIAMg7IAiAAIgmCQg");
	this.shape.setTransform(-0.1,-1.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.4,-9.2,18.7,14.6);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAfBJIgMgmIgnAAIgLAmIgiAAIAtiQIApAAIAtCQgAAPAKIgPg5IAAAAIgQA5IAfAAg");
	this.shape.setTransform(-0.2,-1.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.9,-9.2,13.4,14.6);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAZBJIgdg5QgJgPgQgjIgBAAIABA+IAAAtIgeAAIAAiQIAnAAIAbA1QASAgAHAQIAAAAQgCgUAAgnIAAgqIAeAAIAACQg");
	this.shape.setTransform(-0.1,-1.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.2,-9.2,12.1,14.6);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQBJIAAh1IgnAAIAAgbIBvAAIAAAbIgpAAIAAB1g");
	this.shape.setTransform(-0.1,-1.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.7,-9.2,11.2,14.6);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQBJIAAh1IgnAAIAAgbIBvAAIAAAbIgpAAIAAB1g");
	this.shape.setTransform(-0.1,-1.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.7,-9.2,11.2,14.6);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPBJQgHgBgHgDQgGgDgGgDIgKgJIgHgLQgEgHgCgHIgDgNIgCgQIACgOQABgHACgHIAGgNIAJgLQAEgFAGgEIAMgIIAOgDQAHgCAGAAQAJAAAHACQAIABAGADQAHADAFAEIAKAJIAIAKQADAHACAHQAFASAAAKIgBAPIgEAPQgDAHgEAHQgDAGgFAEQgFAFgFAEQgGAEgHADIgOADQgHACgGAAQgIAAgHgCgAgNgsQgHAEgEAGQgFAHgCAJQgDAJAAAJQAAAKADAJQACAKAFAGQAEAHAHADQAHAEAGgBQAIABAHgEQAGgEAFgGQAEgHADgKQACgJAAgJQAAgJgCgIQgDgJgEgIQgFgGgGgEQgHgEgIAAQgHAAgGAEg");
	this.shape.setTransform(-0.2,-1.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.2,-9.4,14.1,15.1);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsBJIAAiQIAhAAIAAB0IA4AAIAAAcg");
	this.shape.setTransform(0.3,-1.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.2,-9.2,9.1,14.6);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPBJQgHgBgHgDQgGgDgGgDIgKgJIgHgLQgEgHgCgHIgDgNIgCgQIACgOQABgHACgHIAGgNIAJgLQAEgFAGgEIAMgIIAOgDQAHgCAGAAQAJAAAHACQAIABAGADQAHADAFAEIAKAJIAIAKQADAHACAHQAFASAAAKIgBAPIgEAPQgDAHgEAHQgDAGgFAEQgFAFgFAEQgGAEgHADIgOADQgHACgGAAQgIAAgHgCgAgNgsQgHAEgEAGQgFAHgCAJQgDAJAAAJQAAAKADAJQACAKAFAGQAEAHAHADQAHAEAGgBQAIABAHgEQAGgEAFgGQAEgHADgKQACgJAAgJQAAgJgCgIQgDgJgEgIQgFgGgGgEQgHgEgIAAQgHAAgGAEg");
	this.shape.setTransform(-0.2,-1.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.2,-9.4,14.1,15.1);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPBJQgHgBgHgDQgGgDgGgDIgKgJIgHgLQgEgHgCgHIgDgNIgCgQIACgOQABgHACgHIAGgNIAJgLQAEgFAGgEIAMgIIAOgDQAHgCAGAAQAJAAAHACQAIABAGADQAHADAFAEIAKAJIAIAKQADAHACAHQAFASAAAKIgBAPIgEAPQgDAHgEAHQgDAGgFAEQgFAFgFAEQgGAEgHADIgOADQgHACgGAAQgIAAgHgCgAgNgsQgHAEgEAGQgFAHgCAJQgDAJAAAJQAAAKADAJQACAKAFAGQAEAHAHADQAHAEAGgBQAIABAHgEQAGgEAFgGQAEgHADgKQACgJAAgJQAAgJgCgIQgDgJgEgIQgFgGgGgEQgHgEgIAAQgHAAgGAEg");
	this.shape.setTransform(-0.2,-1.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.2,-9.4,14.1,15.1);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVBJIgihAIgNAQIAAAwIggAAIAAiQIAgAAIAABAIABAAIAphAIApAAIgxA+IAzBSg");
	this.shape.setTransform(0.6,-1.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.3,-9.2,12,14.6);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsBJIAAiQIAhAAIAAB0IA4AAIAAAcg");
	this.shape.setTransform(0.3,-1.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.2,-9.2,9.1,14.6);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPBJIAAiQIAfAAIAACQg");
	this.shape.setTransform(-2.5,-1.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.1,-9.2,3.3,14.6);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVBJIgihAIgNAQIAAAwIggAAIAAiQIAgAAIAABAIABAAIAphAIApAAIgxA+IAzBSg");
	this.shape.setTransform(0.6,-1.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.4,-9.2,12,14.6);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtBJIAAiQIBYAAIAAAbIg3AAIAAAeIA0AAIAAAYIg0AAIAAAkIA6AAIAAAbg");
	this.shape.setTransform(0.1,-1.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.5,-9.2,9.3,14.6);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbBJIAAg+Ig1AAIAAA+IghAAIAAiQIAhAAIAAA3IA1AAIAAg3IAhAAIAACQg");
	this.shape.setTransform(-0.2,-1.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.2,-9.2,12.1,14.6);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPBJIAAiQIAfAAIAACQg");
	this.shape.setTransform(-2.5,-1.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.1,-9.2,3.3,14.6);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAwBJIgCg4IgCg7IAAAAQgLAogGAPIgRA5IgYAAIgQg5QgFgPgIgoIgGBzIgeAAIAJiQIAsAAIAOAwQAKAhACARIAAAAIANgyIAQgwIArAAIAICQg");
	this.shape.setTransform(-0.2,-1.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.2,-9.2,16.2,14.6);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBFQgGgGAAgIQABgJAFgFQAFgFAIAAQAHAAAGAFQAFAFAAAJQAAAIgFAGQgGAGgHAAQgIAAgFgGgAgSAaIAAgHQgBgIADgIQAEgHAGgJIAHgLQAEgGAAgFQAAgGgEgDQgCgDgHgBQgGAAgGACQgGABgEADIgIgXQAHgEAIgCQALgDAKAAQAJAAAIADQAIACAFAFQAFAEADAHQADAGgBAHQAAAGgBAFIgFAKQgDAGgJAJQgGAFgDAHQgDAGABAHIAAAFg");
	this.shape.setTransform(-0.6,-1.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.5,-9.4,7.8,15.1);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.more_plyazh_gorizont_pesok_tropiki_47980_3840x2160();
	this.instance.setTransform(-233,-131,1.214,1.214);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-233,-131,466,262.2);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:2.5},14).to({y:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.1,-155.9,134.3,311.8);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ39();
	this.instance.setTransform(7.5,-12.2,1.577,1.577);

	// Слой 1
	this.instance_1 = new lib.Символ38();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40,-40,80,80);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-40,80,80);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ35();
	this.instance.setTransform(-5.8,12);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	// Слой 1
	this.instance_1 = new lib.Символ29();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40,-40,80,80);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ?
	this.instance = new lib.Символ5();
	this.instance.setTransform(43.7,21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({y:16.8},4).to({y:21.8},5).wait(1));

	// M
	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(29.1,21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(43).to({y:16.8},4).to({y:21.8},5).wait(3));

	// I
	this.instance_2 = new lib.Символ7();
	this.instance_2.setTransform(19.2,21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(41).to({y:16.8},4).to({y:21.8},5).wait(5));

	// H
	this.instance_3 = new lib.Символ8();
	this.instance_3.setTransform(6.3,21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({y:16.8},4).to({y:21.8},5).wait(7));

	// E
	this.instance_4 = new lib.Символ9();
	this.instance_4.setTransform(-11.2,21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(37).to({y:16.8},4).to({y:21.8},5).wait(9));

	// K
	this.instance_5 = new lib.Символ10();
	this.instance_5.setTransform(-23.7,21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35).to({y:16.8},4).to({y:21.8},5).wait(11));

	// I
	this.instance_6 = new lib.Символ11();
	this.instance_6.setTransform(-31,21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(33).to({y:16.8},4).to({y:21.8},5).wait(13));

	// L
	this.instance_7 = new lib.Символ12();
	this.instance_7.setTransform(-42,21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(31).to({y:16.8},4).to({y:21.8},5).wait(15));

	// K
	this.instance_8 = new lib.Символ13();
	this.instance_8.setTransform(37.1,-5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(29).to({y:-10.3},4).to({y:-5.3},5).wait(17));

	// O
	this.instance_9 = new lib.Символ14();
	this.instance_9.setTransform(22.7,-5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(27).to({y:-10.3},4).to({y:-5.3},5).wait(19));

	// O
	this.instance_10 = new lib.Символ15();
	this.instance_10.setTransform(7.2,-5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(25).to({y:-10.3},4).to({y:-5.3},5).wait(21));

	// L
	this.instance_11 = new lib.Символ16();
	this.instance_11.setTransform(-6.1,-5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(23).to({y:-10.3},4).to({y:-5.3},5).wait(23));

	// O
	this.instance_12 = new lib.Символ17();
	this.instance_12.setTransform(-23.7,-5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(21).to({y:-10.3},4).to({y:-5.3},5).wait(25));

	// T
	this.instance_13 = new lib.Символ18();
	this.instance_13.setTransform(-37.4,-5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(19).to({y:-10.3},4).to({y:-5.3},5).wait(27));

	// T
	this.instance_14 = new lib.Символ19();
	this.instance_14.setTransform(65.7,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(17).to({y:-37.5},4).to({y:-32.5},5).wait(29));

	// N
	this.instance_15 = new lib.Символ20();
	this.instance_15.setTransform(52.3,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(15).to({y:-37.5},4).to({y:-32.5},5).wait(31));

	// A
	this.instance_16 = new lib.Символ21();
	this.instance_16.setTransform(37.8,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(13).to({y:-37.5},4).to({y:-32.5},5).wait(33));

	// W
	this.instance_17 = new lib.Символ22();
	this.instance_17.setTransform(21.1,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(11).to({y:-37.5},4).to({y:-32.5},5).wait(35));

	// U
	this.instance_18 = new lib.Символ23();
	this.instance_18.setTransform(-0.3,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(9).to({y:-37.5},4).to({y:-32.5},5).wait(37));

	// O
	this.instance_19 = new lib.Символ24();
	this.instance_19.setTransform(-15.4,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(7).to({y:-37.5},4).to({y:-32.5},5).wait(39));

	// Y
	this.instance_20 = new lib.Символ25();
	this.instance_20.setTransform(-29.7,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(5).to({y:-37.5},4).to({y:-32.5},5).wait(41));

	// O
	this.instance_21 = new lib.Символ26();
	this.instance_21.setTransform(-48.3,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(3).to({y:-37.5},4).to({y:-32.5},5).wait(43));

	// D
	this.instance_22 = new lib.Символ27();
	this.instance_22.setTransform(-63.6,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1).to({y:-37.5},4).to({y:-32.5},5).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.9,-41.9,141.1,69.4);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69.9,-41.9,141.1,69.4);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(156.2,128.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76.8,-2.4,466,262.2);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-40,80,80);


(lib.Символ28 = function(mode,startPosition,loop) {
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.button2 = new lib.Символ36();
	this.button2.setTransform(35.5,2);
	new cjs.ButtonHelper(this.button2, 0, 1, 1);

	this.button1 = new lib.Символ34();
	this.button1.setTransform(-35.5,-2);
	new cjs.ButtonHelper(this.button1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button1},{t:this.button2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.1,-45.6,159.2,92.2);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-5},14).to({y:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-42,151,84);


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
		
		this.fon.x = - stage.mouseX / 50;
		this.fon.y = - stage.mouseY / 50;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.instance = new lib.Символ42();
	this.instance.setTransform(209,181.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 5
	this.button = new lib.Символ45();
	this.button.setTransform(150,125);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.Символ45(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(209,81.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ43();
	this.instance_2.setTransform(73,160);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("AqnR4Qh0AAAAhxMAAAggNQAAhxB0AAIVOAAQB1AAAABxMAAAAgNQAABxh1AAg");
	this.shape.setTransform(208.5,123.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_2}]}).wait(1));

	// Слой 1
	this.fon = new lib.Символ1();
	this.fon.setTransform(23.9,-4.5);
	this.fon.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.fon.cache(-79,-4,470,266);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(95,116.1,474,324.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;