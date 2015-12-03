(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/body.png", id:"body"},
		{src:"images/fists.png", id:"fists"},
		{src:"images/head.png", id:"head"},
		{src:"images/left.png", id:"left"},
		{src:"images/right1.png", id:"right1"},
		{src:"images/right2.png", id:"right2"}
	]
};



// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,283);


(lib.fists = function() {
	this.initialize(img.fists);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,446,134);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,130);


(lib.left = function() {
	this.initialize(img.left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,191);


(lib.right1 = function() {
	this.initialize(img.right1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,159);


(lib.right2 = function() {
	this.initialize(img.right2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,201);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiIBeIAAi7IERAAIAAC7g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.8,-9.4,27.6,18.9);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9F0303").ss(3,2,0,3).p("AkumcQCDhjCrAAQC0AACHBsAGakyQBmCFAACtQAACshiCEAEuGfQiDBiirgBQitAAiFhmAmTE7QhsiHAAi0QAAipBiiD");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.7,-52.7,105.5,105.5);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,2,0,3).p("AFcAAQAACQhmBmQhmBmiQAAQiPAAhmhmQhmhmAAiQQAAiPBmhmQBmhmCPAAQCQAABmBmQBmBmAACPg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.3,-36.3,72.7,72.7);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDB315").s().p("AhoDcQAegEALgvQAIgpADhMIAHkwIDAAAIAAHvIguAAIAAnEIhlAAIgGD0QgCBAgEAfQgHBAgTAcQgLAPgQAJQgQAJgXACgAHjDpIAAgsQAhAPAbAAQApAAAYgeQAWgbAAgqIAAgCQAAhfhpgDIAAgmQAsgDAdgcQAdgbAAgsIAAgBQAAgigTgWQgTgVgiAAQggAAggASIAAgrQARgIARgFQASgFARAAQAaABAVAHQAUAJAPAPQAeAgAAAzIAAAEQAABVhTAjQBVAZAABgIAAACQAAA8ghAnQgkApg6AAQgiAAgegNgAGXDzIgaiAIhyAAIgaCAIgtAAIBonxIAyAAIBpHxgAF2BHIgxj1IgzD1IBkAAgAkhDzIAAnvICaAAIAAArIhrAAIAAHEgAqhDzIAAnvIBDAAQA9AAAmAfQAVASAKAXQAKAXAAAeIAAACQAAAtgVAdQgWAegrAOQAvAKAWAeQAYAeAAAuIAAACQAABCgvAjQgVAPgcAIQgbAIgiAAgApzDIIAPAAQAYABASgGQAUgFANgLQAQgLAIgSQAIgRAAgYIAAgBQAAgvgcgYQgOgMgTgGQgTgGgXAAIgTAAgApzgaIARAAQAxAAAYgYQAZgXAAgwIAAgBQAAgVgGgQQgGgQgNgMQgNgKgQgHQgRgFgVAAIgXAAg");

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#654607").s().p("AhoDcQAegDALgxQAIgnADhOIAHkvIDAAAIAAHvIguAAIAAnEIhlAAIgGDzQgCBBgEAfQgHA/gTAdQgLAQgQAIQgQAJgXACgAHjDpIAAgsQAhAPAbAAQApAAAYgeQAWgbAAgqIAAgCQAAhfhpgDIAAgmQAsgDAdgcQAdgcAAgrIAAgBQAAgjgTgVQgTgVgiAAQggAAggASIAAgrQARgJARgEQASgFARABQAaAAAVAIQAUAIAPAPQAeAgAAAzIAAAEQAABVhTAjQBVAZAABgIAAACQAAA8ghAnQgkAqg6AAQgiAAgegOgAGXDzIgaiAIhyAAIgaCAIgtAAIBonxIAyAAIBpHxgAF2BHIgxj1IgzD1IBkAAgAkhDzIAAnvICaAAIAAArIhrAAIAAHEgAqhDzIAAnvIBDAAQA9AAAmAgQAVAQAKAXQAKAYAAAeIAAACQAAAtgVAdQgWAegrAOQAvALAWAdQAYAeAAAuIAAADQAABBgvAjQgVAPgcAIQgbAIgiAAgApzDJIAPAAQAYAAASgGQAUgGANgKQAQgLAIgSQAIgRAAgYIAAgCQAAgtgcgZQgOgMgTgGQgTgGgXAAIgTAAgApzgaIARAAQAxAAAYgXQAZgZAAguIAAgCQAAgVgGgQQgGgQgNgMQgNgKgQgHQgRgFgVAAIgXAAg");
	this.shape_1.setTransform(0,2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.5,-25.7,135,53.4);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDB315").s().p("AsSEsIAAhhIjeAAIAAnwIAuAAIAAHFICEAAIAAnFIAuAAIAAHHIArAAIAACKgAiJC0QAegEALgwQAIgoADhNIAHkwIDAAAIAAHwIguAAIAAnFIhlAAIgGD2QgCA+gEAgQgHA/gTAcQgLAQgQAJQgQAIgXACgADpC5QgagYgPgvQgLgggFgmQgFgmAAgqIAAgQQAAgrAFgnQAFglALghQAfhfBGAAQBHAAAeBfQAVBAAABYIAAAQQAABXgVA/QgPAvgZAYQgaAYgjgBQgjABgZgYgAD/jqQgQAVgJArQgMAzAABDIAAAQQAEBSAIAiQASBWAtABQAugBAThWQALgyAAhCIAAgQQAAhEgLgyQgJgrgQgVQgRgWgXAAQgXAAgPAWgAPCDLIgaiBIhzAAIgZCBIguAAIBpnyIAxAAIBpHygAOgAfIgxj2IgyD2IBjAAgAKNDLIAAnFIiEAAIAAHFIguAAIAAnwIDgAAIAAHwgAjQDLIhgjfIgjBIIAACXIguAAIAAnwIAuAAIAAEGIB4kGIA0AAIhrDeIB2ESgAn1DLIAAl8IiNF8IgrAAIAAnwIAtAAIAAF0ICJl0IAuAAIAAHwg");

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#654607").s().p("AsSEsIAAhiIjeAAIAAnvIAuAAIAAHFICEAAIAAnFIAuAAIAAHHIArAAIAACKgAiJC0QAegEALgwQAIgoADhNIAHkwIDAAAIAAHvIguAAIAAnEIhlAAIgGD2QgCA+gEAgQgHA/gTAdQgLAPgQAJIgIAEQgJADgJACIgNABgADpC5QgagYgPgvQgLgggFgmQgFgmAAgqIAAgPQAAgsAFgnQAFglALghQAfhfBGAAQBHAAAeBfQAVA/AABaIAAAPQAABXgVA/QgPAvgZAYQgaAYgjAAQgjAAgZgYgAD/jrQgQAWgJArQgMAyAABFIAAAPQAEBSAIAjQASBVAtAAQAuAAAThVQALgzAAhCIAAgPQAAhGgLgxQgJgrgQgWQgRgVgXAAQgXAAgPAVgAPCDKIgaiAIhzAAIgZCAIguAAIBpnwIAxAAIBpHwgAOgAfIgxj1IgyD1IBjAAgAKNDKIAAnEIiEAAIAAHEIguAAIAAnvIDgAAIAAHvgAjQDKIhgjeIgjBHIAACXIguAAIAAnvIAuAAIAAEGIB4kGIA0AAIhrDeIB2ERgAn1DKIAAl7IiNF7IgrAAIAAnvIAtAAIAAFzICJlzIAuAAIAAHvg");
	this.shape_1.setTransform(0,1.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-100.9,-30,202,61.6);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDB315").s().p("AE8EjIAAl9IiLF9IgtAAIAAnvIAtAAIAAF2ICIl2IAvAAIAAHvgAhhEjIAAnvICtAAIAAArIh+AAIAAC0IByAAIAAArIhyAAIAAC7ICAAAIAAAqgAlnEjIAAnvIC9AAIAAArIiPAAIAACFIAUAAQAjAAAcALQAcAMATAVQATAVAJAdQAJAdAAAkIAAACQAAAjgJAdQgJAdgTAVQgTAWgcALQgcALgjAAgAk5D5IAWAAQAygBAagiQAXgfAAgzIAAgCQAAg0gXgfQgNgRgTgJQgTgIgZgBIgWAAgADGjwQgTgUAAgdIAhgBQAAAnAhAAQAfAAAAgnIAgABQAAAdgSAUQgSAWgcAAQgcAAgSgWg");

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#654607").s().p("AE8EjIAAl+IiLF+IgtAAIAAnvIAtAAIAAF1ICIl1IAvAAIAAHvgAhhEjIAAnvICtAAIAAAqIh+AAIAAC1IByAAIAAAqIhyAAIAAC8ICAAAIAAAqgAlnEjIAAnvIC9AAIAAAqIiPAAIAACGIAUAAQAjAAAcALQAcAMATAUQATAWAJAdQAJAdAAAkIAAACQAAAkgJAcQgJAdgTAVQgTAWgcALQgcALgjAAgAk5D5IAWAAQAyAAAagkQAXgeAAgzIAAgCQAAg0gXgeQgNgSgTgIQgTgJgZAAIgWAAgADGjwQgTgUAAgdIAhgBQAAAmAhAAQAfAAAAgmIAgABQAAAdgSAUQgSAWgcAAQgcAAgSgWg");
	this.shape_1.setTransform(0,2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.1,-29.1,72.2,60.3);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,153,0,0.827)").s().p("AAPBxICmhxIimhwIAAgWIDACDIAAAHIjACDgAhiBxICkhxIikhwIAAgWIC+CDIAAAHIi+CDgAjOBxICnhxIinhwIAAgWIDACDIAAAHIjACDg");
	this.shape.setTransform(-4.5,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.2,-13.6,41.5,27.2);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("Eg6bAdIMAAAg6PMB03AAAMAAAA6Pg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-374,-186.5,748,373);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("AgugQIAegeIA/A/IgeAeg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.8,-4.8,9.6,9.6);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AhAAiQgdgJgCgRQgBgOAbgOQAbgOAogEQAlgEAdAJQAeAJACARQABAOgbAOQgbAOgoAEIgTABQgbAAgVgGg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.6,-4,19.3,8.1);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.fists();
	this.instance.setTransform(-223,-67);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-223,-67,446,134);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah6gkIDtgpIAICIQh8gthxBAg");
	this.shape.setTransform(0,-2.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.4,-9.9,24.8,15.8);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.left();
	this.instance.setTransform(-51,-95.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51,-95.5,102,191);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.right1();
	this.instance.setTransform(-74.5,-79.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74.5,-79.5,149,159);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.right2();
	this.instance.setTransform(-46.5,-100.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.5,-100.5,93,201);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bg();
	this.instance.setTransform(-320,-152.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-152.5,640,305);


(lib.Символ15_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiuBMQgpgmgXgmQAXgjApglQBRhOBdAAQBeAABTBOQAnAkAXAkIAAAEQgXAkgnAkQhTBKheABQhdgBhRhKgAg9g+QgbAbAAAjQAAAmAbAaQAaAbAjgBQAkABAcgbQAbgaAAgmQAAgjgbgbQgcgagkAAQglAAgYAagAgSAVQgKgKAAgLQAAgLAKgHQAHgKALABQAdAAAAAbQAAALgKAKQgHAKgMAAQgLAAgHgKgADShYIACAEIgCADg");
	this.shape.setTransform(2.7,8.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.2,-6.4,47.8,30.2);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ANBBEIgFgDIgCgDIgdhzIggA1IgCAAIgBAAIjlAAIgwBEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgCgBIgFgDIgCgDIgdhzIggA1IgCAAIgBAAIjqAAIgrBEIAAAAIgBAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgCgBIgFgDIgCgDIgdhzIggA1IgCAAIgBAAIjoAAIgrBEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgCgBIgFgDIgCgDIgdhzIggA1IgCAAIgBAAIjqAAIgrBEIAAAAIgBAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgCgBIgFgDIgCgDIgdhzIggA1IgCAAIgBAAIjwAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAIgBgEIABgDIAEgBIDuAAIAhg5IAAgDIABAAIADAAIACABIAAABIADACIADABIAdB0IAkg4IAAgBIABgDIAEgBIDuAAIAhg5IAAgDIABAAIADAAIACABIAAABIADACIADABIAdB0IAkg4IAAgBIABgDIAEgBIDsAAIAhg5IAAgDIABAAIADAAIACABIAAABIADACIADABIAdB0IAkg4IAAgBIABgDIAEgBIDuAAIAhg5IAAgDIABAAIADAAIACABIAAABIADACIADABIAdB0IAkg4IAAgBIABgDIAEgBIDuAAIAhg5IAAgDIABAAIADAAIACABIAAABIADACIADABIAdB0IAkg4IAAgBIABgDIAEgBIATAAIAAAIIgNAAIgrBEIAAAAIgBAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgCgBg");

	// Слой 2
	this.instance = new lib.Символ43();
	this.instance.setTransform(-104.8,0,1,0.809);
	this.instance.shadow = new cjs.Shadow("#FF3300",0,0,4);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 0)];
	this.instance.cache(-16,-11,32,23);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:104.6},23).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.4,-6.9,9.9,13.9);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-152.5,640,305);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.2,-53.3,106.5,106.5);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.81,scaleY:0.81},5,cjs.Ease.get(-1)).to({regY:-0.1,scaleX:0.58,scaleY:0.58},6,cjs.Ease.get(1)).to({regY:0,scaleX:0.77,scaleY:0.77,y:0.1},6,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:0},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.8,-36.8,73.7,73.7);


(lib.Символ34 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ37();

	this.instance_1 = new lib.Символ36();

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,2,0,3).p("ABiAAQAAApgdAcQgdAdgoAAQgnAAgdgdQgdgcAAgpQAAgnAdgdQAdgdAnAAQAoAAAdAdQAdAdAAAng");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,0,0,0.498)").s().p("AhEBFQgdgcAAgpQAAgnAdgdQAdgdAnAAQAoAAAdAdQAdAdAAAnQAAApgdAcQgdAdgoAAQgnAAgdgdg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 29
	this.instance = new lib.Символ29();
	this.instance.setTransform(-33.4,82.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({scaleX:1.05,scaleY:1.05,x:-30.1,y:85.6},3,cjs.Ease.get(-1)).to({scaleX:1.12,scaleY:1.12,x:-25.6,y:89.6},4,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07,x:-29,y:86.6},3,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:-33.4,y:82.6},4,cjs.Ease.get(1)).wait(1));

	// Символ 28
	this.instance_1 = new lib.Символ28();
	this.instance_1.setTransform(0,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({scaleX:1.05,scaleY:1.05,x:5,y:7.6},3,cjs.Ease.get(-1)).to({scaleX:1.12,scaleY:1.12,x:11.7,y:6.7},4,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07,x:6.7,y:7.3},3,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:0,y:8.2},4,cjs.Ease.get(1)).wait(15));

	// Символ 27
	this.instance_2 = new lib.Символ27();
	this.instance_2.setTransform(-64.8,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.05,scaleY:1.05,x:-63,y:-84},3,cjs.Ease.get(-1)).to({scaleX:1.12,scaleY:1.12,x:-60.7,y:-90.7},4,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07,x:-62.5,y:-85.7},3,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:-64.8,y:-79},4,cjs.Ease.get(1)).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.9,-108.2,202,218.5);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:5},5,cjs.Ease.get(-1)).to({x:10},5,cjs.Ease.get(1)).to({x:5},5,cjs.Ease.get(-1)).to({x:0},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.2,-13.6,41.5,27.2);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.alpha = 0.738;
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-7,-7,14,14);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.8,-6.8,16,16);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.alpha = 0.48;
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-12,-6,23,12);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.6,-6,26,16);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:10},4).to({y:0},4).wait(1).to({y:10},4).to({y:0},4).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-9.9,24.8,15.8);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 6
	this.instance = new lib.Символ6();
	this.instance.setTransform(32.5,-16.9,1,1,0,0,0,-10,-72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-10.1,rotation:8.6,x:36.7,y:-29.2},8,cjs.Ease.get(-1)).to({regX:-10,rotation:18.5,x:41.6,y:-42.9},9,cjs.Ease.get(1)).wait(1).to({y:-43.4},0).wait(1).to({y:-42.9},0).wait(1).to({y:-43.4},0).wait(1).to({y:-42.9},0).wait(1).to({y:-43.4},0).wait(1).to({y:-42.9},0).wait(1).to({y:-43.4},0).wait(1).to({y:-42.9},0).wait(1).to({y:-43.4},0).wait(1).to({y:-42.9},0).to({rotation:8.6,x:36.8,y:-29.2},9,cjs.Ease.get(-1)).to({rotation:0,x:32.5,y:-16.9},8,cjs.Ease.get(1)).wait(26));

	// Символ 7
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(-46.5,-124.5,1,1,0,0,0,-32,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-48.1,rotation:-4.8},8,cjs.Ease.get(-1)).to({regX:-31.9,regY:-48,rotation:-10.2,x:-46.4},9,cjs.Ease.get(1)).wait(1).to({y:-125},0).wait(1).to({y:-124.5},0).wait(1).to({y:-125},0).wait(1).to({y:-124.5},0).wait(1).to({y:-125},0).wait(1).to({y:-124.5},0).wait(1).to({y:-125},0).wait(1).to({y:-124.5},0).wait(1).to({y:-125},0).wait(1).to({y:-124.5},0).to({regY:-48.1,rotation:-4.8,x:-46.5,y:-124.6},9,cjs.Ease.get(-1)).to({regX:-32,regY:-48,rotation:0,y:-124.5},8,cjs.Ease.get(1)).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-156,178,312.1);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4,x:6.7},9,cjs.Ease.get(-1)).to({rotation:-8.5,x:14},10,cjs.Ease.get(1)).wait(18).to({rotation:-4.1,x:7,y:0.1},9,cjs.Ease.get(-1)).to({rotation:0,x:0,y:0},10,cjs.Ease.get(1)).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-95.5,102,191);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:1.8},9,cjs.Ease.get(-1)).to({y:8},10,cjs.Ease.get(1)).to({y:6},10,cjs.Ease.get(-1)).to({y:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-223,-67,446,134);


(lib.Символ20_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 - копия
	this.instance = new lib.Символ42();
	this.instance.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(150));

	// Слой 2 - копия
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FF00").ss(1,2,0,3).p("At4hFIbxAAIAACLI7xAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(150));

	// Слой 3
	this.instance_1 = new lib.Символ42();
	this.instance_1.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.6,-9.8,210.6,22);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ15_1();
	this.instance.setTransform(0,0,1,1,0,0,0,17.8,8.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39,-14.8,47.8,30.2);


(lib.Символ18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ19();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-15.1,regY:0.2,scaleX:1,scaleY:1,x:-15,y:0.2},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({regX:0,regY:0,scaleX:0.8,scaleY:0.8,x:-2.9,y:0},0).wait(1).to({regX:-15.1,regY:0.2,scaleX:0.85,scaleY:0.85,x:-15,y:0.2},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-15.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-15},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-14.8,47.8,30.2);


(lib.Символ17_1 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ20_1();
	this.instance.setTransform(18.5,-5,1,1.267);

	// Слой 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAlQgMgPAAgWIAAAAQAAgKADgJQAEgKAGgHQANgQAUAAQALAAAJAEQAJAEAGAIQAGAHADAJQAEAKAAAKIAAAAQAAAKgEAKQgDAJgGAIQgNAQgWAAQgUAAgOgQgAAFgRQgEAHAAAKIAAAAQAAAKAEAIQAGAKAJAAQAFAAAEgDQADgCADgFQAEgIAAgKIAAAAIgBgJQgBgEgCgEQgDgFgEgDQgDgCgFAAQgJAAgGAKgAh5AlQgMgPAAgWIAAAAQAAgKADgJQADgKAGgHQANgQAXAAQALAAAJAEQAIAEAGAIQAHAHADAJQAEAKAAAKIAAAAQAAAKgEAKQgDAJgHAIQgNAQgWAAQgVAAgOgQgAhkgRQgFAHAAAKIAAAAQAAAKAFAIQAFAKAKAAQAEAAAEgDQAEgCACgFQAEgIAAgKIAAAAIgBgJQAAgEgDgEQgDgFgDgDQgDgCgGAAQgJAAgFAKgACbAsQgHgHAAgMIAAgBQAAgMAHgHQAEgEAFgBQAFgBAFAAQAHAAAEABQAFABAEAEQAHAHAAAMIAAABQAAALgHAIQgEAFgFACQgEACgHAAQgLAAgIgJgACoARQgCADAAAEIAAABQAAAEACAEQACADAEAAQAEAAADgDQACgEAAgEIAAgBQAAgEgCgDQgDgEgEAAQgEAAgCAEgABaAzIBQhlIAUAAIhQBlgAixAzIAAhMIgSAFIgFgXIAfgIIAUAAIAABmgABXgEQgIgIAAgMIAAAAQAAgMAIgIQADgEAFgCQAEgCAHAAQAGAAAEACQAFACAEAEQAIAIAAAMQAAAGgCAFIgGAJQgEAEgFAAQgEACgHAAQgMAAgGgGgABjggQgCADAAAFQAAAEACAEQACAEAFAAQAEAAACgEQACgEABgEIAAAAQgBgEgCgEQgCgEgFAAQgEAAgCAEg");
	this.shape_1.setTransform(83.3,-5.1);

	// Слой 2
	this.instance_1 = new lib.Символ18_1();
	this.instance_1.setTransform(-95.1,-5.6,0.672,0.672);

	this.addChild(this.instance_1,this.shape_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-121.3,-16.9,229.5,26);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-6.8,16,16);


(lib.Символ19_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ18();
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14).to({alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.6,-6,26,16);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAAiQgdgJgCgRQgBgOAbgOQAbgOAogEQAlgEAdAJQAeAJACARQABAOgbAOQgbAOgoAEIgTABQgbAAgVgGg");
	mask.setTransform(-6.6,-15.5);

	// Слой 3
	this.instance = new lib.Символ13();
	this.instance.setTransform(-6.9,-22.6);

	this.instance.mask = mask;

	// Слой 4
	this.instance_1 = new lib.Символ19_1();
	this.instance_1.setTransform(-6.6,-15.4);

	// Слой 1
	this.instance_2 = new lib.head();
	this.instance_2.setTransform(-42,-65);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42,-65,84,130);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3,x:-0.9,y:1},9,cjs.Ease.get(-1)).to({rotation:-6.7,x:-2,y:2},10,cjs.Ease.get(1)).wait(16).to({rotation:0.8,y:2.3},7,cjs.Ease.get(-1)).to({rotation:8.3,y:2.5},7,cjs.Ease.get(1)).wait(5).to({rotation:4,x:-0.9,y:1.3},7,cjs.Ease.get(-1)).to({rotation:0,x:0,y:0},7,cjs.Ease.get(1)).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-65,84,130);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ22();
	this.instance.setTransform(-51.2,-66.3);

	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(-47.4,-70.3);

	this.instance_2 = new lib.Символ22();
	this.instance_2.setTransform(17.7,-93.1);

	this.instance_3 = new lib.Символ22();
	this.instance_3.setTransform(22.5,-97.9);

	this.instance_4 = new lib.Символ22();
	this.instance_4.setTransform(26.9,-101.6);

	this.instance_5 = new lib.Символ22();
	this.instance_5.setTransform(19.5,-113.9);

	this.instance_6 = new lib.Символ22();
	this.instance_6.setTransform(15,-109.1);

	this.instance_7 = new lib.Символ22();
	this.instance_7.setTransform(9.9,-104.3);

	this.instance_8 = new lib.Символ22();
	this.instance_8.setTransform(5.4,-100.9);

	this.instance_9 = new lib.Символ22();
	this.instance_9.setTransform(1.1,-97.4);

	// Слой 1
	this.instance_10 = new lib.body();
	this.instance_10.setTransform(-119,-141.5);

	this.addChild(this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-119,-141.5,238,283);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 4
	this.instance = new lib.Символ9();
	this.instance.setTransform(108.5,45);

	// Слой 2
	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(-37.5,-148);

	// Слой 1
	this.instance_2 = new lib.Символ5();

	// Слой 5
	this.instance_3 = new lib.Символ4();
	this.instance_3.setTransform(-125,44.5);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-176,-213,373.5,414.1);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(-10.7,6.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:16.1},39).to({y:6.1},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.7,-207,373.5,414.1);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(12));

	// Слой 8
	this.hp = new lib.Символ17_1();
	this.hp.setTransform(96.4,-216.6,0.91,0.91);

	this.timeline.addTween(cjs.Tween.get(this.hp).wait(20));

	// Слой 6
	this.instance = new lib.Символ26();
	this.instance.setTransform(-312,-98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Слой 5
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(1,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// Слой 4
	this.instance_2 = new lib.Символ25();
	this.instance_2.setTransform(76.5,-138.7,1,1,180);

	this.instance_3 = new lib.Символ25();
	this.instance_3.setTransform(-108.5,-136.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},8).to({state:[]},1).wait(11));

	// Слой 1
	this.instance_4 = new lib.Символ14();
	this.instance_4.setTransform(0,-30,0.743,0.743);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:7.5,regY:3.6,scaleX:0.83,scaleY:0.83,x:16.5,y:-9.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:23.1,y:0.7},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:27.5,y:7.6},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:30.7,y:12.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:33.2,y:16.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:35.1,y:19.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:36.5,y:22},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:30,y:20},0).wait(1).to({regX:7.5,regY:3.6,scaleX:0.99,scaleY:0.99,x:36.3,y:21.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:34.9,y:19.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:33.4,y:17},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:31.5,y:14.1},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:29.3,y:10.6},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:26.7,y:6.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:23.7,y:1.7},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:20.6,y:-3.3},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:16.9,y:-9.2},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:12,y:-16.9},0).wait(1).to({regX:0,regY:0,scaleX:0.74,scaleY:0.74,x:0,y:-30},0).wait(1));

	// Слой 3
	this.instance_5 = new lib.Символ23();
	this.instance_5.setTransform(-66.7,-84.9);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},8).to({alpha:0},11).wait(1));

	// Слой 7
	this.instance_6 = new lib.Символ39();
	this.instance_6.setTransform(-111,-91.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.18,scaleY:1.18,x:-53,y:-63.9},8).to({scaleX:1,scaleY:1,x:-111,y:-91.5},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-440.7,-271.4,748,395.2);


// stage content:



(lib.ciclop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Пользовательский курсор мыши
		Заменяет курсор мыши по умолчанию на указанный экземпляр символа.
		*/
		stage.canvas.style.cursor = "none";
		this.pricel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.pricel.x = stage.mouseX;
			this.pricel.y = stage.mouseY;
		}
		//Чтобы восстановить курсор мыши по умолчанию, раскомментируйте следующие строки:
		//this.removeEventListener("tick", fl_CustomMouseCursor.bind(this));
		//stage.removeChild(pricel);
		//stage.canvas.style.cursor = "default";
		
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.cicl.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open(clickTAG, "_blank");
		}
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		{
		    _this.cicl.gotoAndPlay(1);
			_this.pricel.gotoAndPlay(1);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		function fl_MouseOutHandler_2()
		{
		    _this.cicl.gotoAndPlay(9);
			_this.pricel.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 11
	this.pricel = new lib.Символ34();
	this.pricel.setTransform(-248,133);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// Слой 3
	this.cicl = new lib.Символ16();
	this.cicl.setTransform(430.8,244.4);

	this.timeline.addTween(cjs.Tween.get(this.cicl).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(310,125.5,748,395.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;