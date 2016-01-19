(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/fon.jpg", id:"fon"},
		{src:"images/kamen.png", id:"kamen"},
		{src:"images/leeps.png", id:"leeps"},
		{src:"images/plet.png", id:"plet"},
		{src:"images/podstavka.png", id:"podstavka"},
		{src:"images/podstavkapngкопия.png", id:"podstavkapngкопия"},
		{src:"images/pretty_3d_girl_by_crucho_03.png", id:"pretty_3d_girl_by_crucho_03"},
		{src:"images/pretty_3d_girl_by_crucho_07.png", id:"pretty_3d_girl_by_crucho_07"},
		{src:"images/pretty_3d_girl_by_crucho_10.png", id:"pretty_3d_girl_by_crucho_10"},
		{src:"images/pretty_3d_girl_by_crucho_13.png", id:"pretty_3d_girl_by_crucho_13"},
		{src:"images/pretty_3d_girl_by_crucho_19.png", id:"pretty_3d_girl_by_crucho_19"},
		{src:"images/pretty_3d_girl_by_crucho_21.png", id:"pretty_3d_girl_by_crucho_21"},
		{src:"images/pretty_3d_girl_by_crucho_24.png", id:"pretty_3d_girl_by_crucho_24"},
		{src:"images/pretty_3d_girl_by_crucho_29.png", id:"pretty_3d_girl_by_crucho_29"},
		{src:"images/tsep.png", id:"tsep"}
	]
};



// symbols:



(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,298);


(lib.kamen = function() {
	this.initialize(img.kamen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,354,300);


(lib.leeps = function() {
	this.initialize(img.leeps);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,170);


(lib.plet = function() {
	this.initialize(img.plet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,90);


(lib.podstavka = function() {
	this.initialize(img.podstavka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,89);


(lib.podstavkapngкопия = function() {
	this.initialize(img.podstavkapngкопия);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,89);


(lib.pretty_3d_girl_by_crucho_03 = function() {
	this.initialize(img.pretty_3d_girl_by_crucho_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,82);


(lib.pretty_3d_girl_by_crucho_07 = function() {
	this.initialize(img.pretty_3d_girl_by_crucho_07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,134);


(lib.pretty_3d_girl_by_crucho_10 = function() {
	this.initialize(img.pretty_3d_girl_by_crucho_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,85);


(lib.pretty_3d_girl_by_crucho_13 = function() {
	this.initialize(img.pretty_3d_girl_by_crucho_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,84);


(lib.pretty_3d_girl_by_crucho_19 = function() {
	this.initialize(img.pretty_3d_girl_by_crucho_19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,162);


(lib.pretty_3d_girl_by_crucho_21 = function() {
	this.initialize(img.pretty_3d_girl_by_crucho_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,115);


(lib.pretty_3d_girl_by_crucho_24 = function() {
	this.initialize(img.pretty_3d_girl_by_crucho_24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,98);


(lib.pretty_3d_girl_by_crucho_29 = function() {
	this.initialize(img.pretty_3d_girl_by_crucho_29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,185);


(lib.tsep = function() {
	this.initialize(img.tsep);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,67);


(lib.Символ53 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrLLIAAh3IAcAAIAAAsIAegCQAeAAAQAKQAPAKAAATQABAPgQALQgPAMggAAgAgPKQIAAApIAeABQAQAAAJgGQAIgFAAgKQAAgWgiAAIgdABgAgJHFIAAhlIgtAAIAAgSIB0AAIAAASIgtAAIAABlgAgyCwQgWgQAAgcQAAgdAXgQQAWgRAjAAQAMAAAOAEQAPAEAGAEIgOAOQgFgCgKgDQgLgEgKAAQgVAAgNANQgNAMAAAUQAAAVANALQANALAXAAQATAAATgLIALASQgWALgiAAQgegBgUgQgAg1hUQgTgQAAgdQAAgbAUgRQATgRAgAAQAgAAASAQQATARAAAcQAAAdgUAQQgSARgfAAQgiAAgSgRgAgfihQgMAMAAAUQAAAtAqAAQASgBALgLQALgNAAgUQAAgsgoAAQgUAAgKAMgAhMldQAaAAALgfQALgfAAgbIAAgMIBeAAIAAB2IgbAAIAAhlIgpAAQAAAZgGAVQgGAWgKANQgLAOgMAEQgMAEgRAAgAg4pcIAPgRQASANAZAAQANAAAJgFQAIgFAAgIQAAgVghAAIgSAAIAAgQIATAAQAMAAAJgFQAHgDABgIQAAgIgIgFQgHgEgNAAQgSgBgWAKIgJgSQAagJAYAAQAYAAAPAJQAQAKAAAPQgBASgYAHQAdAJAAAUQAAAQgQAKQgRAJgcAAQgdAAgbgNg");
	this.shape.setTransform(7.7,71.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15.4,143);


(lib.Символ52 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AXbDZIAAg2IiYAAIAAk3IBUAAIAAD4IAZAAIAAj4IBTAAIAAD4IASAAIAAB1gAkfCdQgYgNgIgXQgIgXAAguIAAhZQAAgiADgSQACgQAMgPQAMgRAVgJQAVgIAbAAQAlgBAYAOQAYAOAHAVQAJAVAAArIAAAeIhVAAIAAg2QAAgYgCgGQgDgFgJAAQgKgBgDAIQgDAHAAAYIAACPQAAAXADAGQADAIAJAAQAKAAADgIQACgGAAgZIAAgoIBVAAIAAAMQAAAwgIAVQgHAVgYAOQgYAQgkAAQglAAgXgNgA57CiQgVgJgMgQQgNgRgCgTQgDgTAAgxIAAg0QAAguADgUQACgUAMgPQAMgRAUgJQAVgIAbAAQAagBAUAJQAVAIANARQAMAPADAVQACASAAAwIAAA0QAAAwgCATQgCAUgNAQQgMARgUAIQgVAJgbAAQgaAAgUgIgA5WhhQgEAGAAAYIAACQQAAAbACAHQACAGAJAAQAIAAADgIQACgHAAgbIAAiOQAAgXgCgGQgDgFgIAAQgGAAgDAEgAdJCjIAAiOIgsCOIhJAAIAAk3IBGAAIAACNIAviNIBFAAIAAE3gAYrCjIAAk3ICLAAIAAA/Ig4AAIAAA7IA0AAIAAA6Ig0AAIAABEIA9AAIAAA/gATcCjIAAiOIgsCOIhJAAIAAk3IBGAAIAACNIAviNIBGAAIAAE3gAPyCjIAAiDIgZAAIAACDIhUAAIAAk3IBUAAIAABwIAZAAIAAhwIBTAAIAAE3gAMQCjIAAiDIgaAAIAACDIhTAAIAAk3IBTAAIAABwIAaAAIAAhwIBTAAIAAE3gAH6CjIAAk3ICLAAIAAA/Ig4AAIAAA7IA1AAIAAA6Ig1AAIAABEIA9AAIAAA/gAGECjIAAj4IgYAAIAACvQAAAjgKAPQgIAPgTAEQgTAEgqAAIgNAAIAAg2QAPAAAGgDQAGgEAAgWIAAjkIDBAAIAAE3gACXCjIAAj4IgZAAIAAD4IhUAAIAAk3IDAAAIAAE3gAo6CjIAAiOIgrCOIhKAAIAAk3IBGAAIAACNIAviNIBGAAIAAE3gAsSCjIgEg4IgeAAIgGA4IhWAAIAqk3IB6AAIAvE3gAsZAzQgGgzgGhPQgNBZgEApIAdAAIAAAAgAxJCjIAAk3IBUAAQAiAAASAFQASAGAKAJQAJAKAEAPQADAOAAAcIAAAcQAAAegHALQgGAPgRAHQgRAHgbAAIgXAAIAAB+gAv2gPIAGAAQAMAAAFgEQAEgHAAgRIAAgaQAAgQgFgFQgGgEgQAAgAzxCjIAAk3ICRAAIAAA/Ig+AAIAAD4gA1YCjIAAiOIgsCOIhJAAIAAk3IBGAAIAACNIAviNIBGAAIAAE3gA8hCjIAAj4IgZAAIAAD4IhTAAIAAk3IDAAAIAAE3gAcIiuQgOgQgCgbIAiAAQACAbAVAAQAUAAACgbIAiAAQgBAbgPAQQgOAQgaABQgbgBgOgQgAp6iuQgPgQgBgbIAiAAQACAbAUAAQAVAAACgbIAiAAQgCAbgOAQQgPAQgaABQgagBgOgQg");
	this.shape.setTransform(193.5,21.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,387,43.6);


(lib.Символ51 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARPClIAAgqIhvAAIAAjrIA9AAIAAC8IATAAIAAi8IA9AAIAAC8IANAAIAABZgAjTB3QgSgKgFgRQgGgSAAgiIAAhEQAAgZACgNQABgOAJgLQAJgMAPgHQAQgGAUgBQAbAAASALQARALAGAPQAGAQAAAhIAAAWIg+AAIAAgoQAAgTgCgEQgCgFgHABQgHgBgCAGQgDAGAAASIAABrQAAASADAFQACAGAHgBQAHABACgGQACgFAAgTIAAgeIA+AAIAAAJQAAAkgGAQQgFAPgSAMQgRAMgbAAQgbgBgRgJgAzFB6QgQgGgJgMQgJgNgCgOQgCgPAAglIAAgmQAAgkACgPQACgPAJgMQAIgMAPgHQAQgGAUgBQATAAAPAHQAPAGAJAMQAJANACAOQACAPAAAlIAAAmQAAAkgCAPQgBAOgJANQgJANgPAGQgPAHgUAAQgTgBgPgGgAyqhJQgDAEAAATIAABsQAAAUACAGQABAEAGAAQAHABACgGQABgGAAgUIAAhrQAAgSgBgEQgCgFgGABQgFAAgCADgAVdB7IAAhsIggBsIg2AAIAAjrIAzAAIAABsIAjhsIAzAAIAADrgASKB7IAAjqIBnAAIAAAvIgpAAIAAAtIAmAAIAAArIgmAAIAAA0IAtAAIAAAvgAOUB7IAAhsIggBsIg2AAIAAjrIAzAAIAABsIAjhsIAzAAIAADrgALnB7IAAhjIgSAAIAABjIg+AAIAAjqIA+AAIAABUIASAAIAAhUIA+AAIAADqgAJBB7IAAhjIgTAAIAABjIg9AAIAAjqIA9AAIAABUIATAAIAAhUIA9AAIAADqgAF0B7IAAjqIBnAAIAAAvIgpAAIAAAtIAmAAIAAArIgmAAIAAA0IAtAAIAAAvgAEeB7IAAi8IgSAAIAACFQAAAagHAMQgHAMgOADQgOACgeAAIgKAAIAAgoQALAAAFgDQAEgDAAgQIAAitICOAAIAADrgABvB7IAAi8IgTAAIAAC8Ig9AAIAAjrICNAAIAADrgAmjB7IAAhsIggBsIg2AAIAAjrIAzAAIAABsIAjhsIAzAAIAADrgApDB7IgDgqIgWAAIgEAqIg/AAIAfjqIBZAAIAjDqgApHAnQgFgngFg7QgJBDgDAfIAWAAIAAAAgAsoB7IAAjqIA+AAQAZAAAOADQANAFAHAGQAHAIADALQACAKAAAWIAAAVQAAAXgFAIQgEALgNAGQgNAFgUAAIgQAAIAABfgArqgKIAEAAQAJgBADgDQADgFAAgNIAAgUQAAgMgDgDQgEgEgMAAgAujB7IAAjrIBrAAIAAAvIguAAIAAC8gAvvB7IAAhsIggBsIg2AAIAAjrIAzAAIAABsIAjhsIAzAAIAADrgA0/B7IAAi8IgTAAIAAC8Ig9AAIAAjrICNAAIAADrgAUtiDQgKgNgBgUIAZAAQABAUAPAAQAPAAACgUIAZAAQgBAUgLANQgLAMgTAAQgTAAgLgMgAnTiDQgKgNgBgUIAZAAQABAUAPAAQAPAAACgUIAZAAQgBAUgLANQgLAMgTAAQgTAAgLgMg");
	this.shape.setTransform(142.5,16.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,285,33);


(lib.Символ49 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhoBeQgLgEgDgFQgFgIgBgSQAAggANg0QAOg6ANgLQAXAfAAAtQAAAXgHAYIBEgsQA5giA8gJIAGACQACABAAAPQgBAgihA9IBSACQAPAFAEAPIgHATg");
	this.shape.setTransform(12.5,9.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25,19);


(lib.Символ48 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgBBeQgGgCgEgQQgFgTAegjIiFAkQgOgBgJgGQgCgHAEgIQADgLAHgGICqgsQgKgDgKgHQgVgTgRgJIgGgWQAwgUAuAYQAaAOAwAjQgBAfiDBfIgIABQgEAAgBgBg");
	this.shape.setTransform(14.4,9.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,28.9,19.1);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.537)").s().p("EhC2AZtMAAAgzZMCFtAAAMAAAAzZg");
	this.shape.setTransform(428,164.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0.039,0.51,1],-58.5,-15.7,58.6,15.7).s().p("ArbGEIElxCISSE7IklRBg");
	this.shape.setTransform(73.2,70.3);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Слой 1
	this.instance = new lib.plet();
	this.instance.setTransform(203.4,7.6,0.636,0.636,30);

	this.instance_1 = new lib.leeps();
	this.instance_1.setTransform(195,28,0.453,0.453);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ41 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.fon();
	this.instance.setTransform(-110.9,0,1.143,1.025);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-110.9,0,800.4,305.5);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0.039,0.51,1],-34,0,34.1,0).s().p("AlTX5MAAAgvxIKnAAMAAAAvxg");
	this.shape.setTransform(25,171.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9,18.6,68.1,306);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABjBJIAAiPIAaAAIAABeIBLhgIAKAAIAACPIgZAAIAAheIhLBggAnHAxIAFAAQAMAAAIgEQAJgFAGgJIgzhlIAcAAIAlBRQASghAMgwIAaAAQgMAsgSAjQgSAkgRAOQgRAOgcAAgAFxBHIAAiNIAZAAIAAA2IAVgBQAZAAANAMQAOAKAAAWQAAATgOANQgNAMgZAAgAGKACIAAAwIAPAAQAgAAAAgZQAAgLgIgGQgIgHgPAAgAEUBHIAAh3IgtAAIAAgWIB2AAIAAAWIgwAAIAAB3gAhVBHIAAiNIAZAAIAAB4IAqAAIAAh4IAWAAIAAB4IAqAAIAAh4IAYAAIAACNgAjIBHIAAiNIBcAAIAAAWIhCAAIAAAiIAvAAIAAATIgvAAIAAArIBBAAIAAAXgAklBHIAAh3IgtAAIAAgWIB2AAIAAAWIgvAAIAAB3g");
	this.shape.setTransform(46.8,7.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,93.6,14.7);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpA/IALgXQAQALAQAAQANAAAHgFQAHgHAAgKQAAgMgIgHQgJgGgOgBIgOABIAAgTIAPABQALAAAHgFQAHgGAAgJQAAgIgGgFQgGgEgKAAQgMAAgQAJIgJgWQAWgIARgBQAVAAAMAKQANAKAAARQAAALgGAIQgFAJgJADQAMAFAHAGQAGAKAAANQAAAVgOALQgPAMgZABQgYgBgSgKgABOBJIAAiPIAZAAIAABeIBLhgIALAAIAACPIgaAAIAAheIhKBggAirBJIAAiPIAZAAIAABeIBLhgIALAAIAACPIgaAAIAAheIhKBggAmxAxIAEAAQANAAAIgEQAIgFAGgJIgzhlIAcAAIAmBRQARghANgwIAaAAQgMAsgTAjQgSAkgRAOQgRAOgbAAgAFbBHIAAiNIAaAAIAAA2IAUgCIADAAQATABAMAIIAFAEQAOAKAAAWQAAATgOANQgOAMgZAAgAF1ACIAAAwIAPAAQAgABAAgaQAAgLgIgHQgIgGgPAAgAD+BHIAAh3IgtAAIAAgWIB2AAIAAAWIgvAAIAAB3gAjhBHIAAhBIg5AAIAABBIgaAAIAAiNIAaAAIAAA4IA5AAIAAg4IAZAAIAACNg");
	this.shape.setTransform(44.6,-73.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-81.1,89.3,14.8);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjRVpMAAAgrRIGjAAMAAAArRg");
	this.shape.setTransform(21,138.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42,277);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#666666"],[0,1],-20.9,0,21,0).s().p("AjRWGMAAAgsLIGjAAMAAAAsLg");
	this.shape.setTransform(21,141.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42,283);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.tsep();
	this.instance.setTransform(0,221.3,0.811,0.722,-65.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,145,241.4);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.plet();
	this.instance.setTransform(0,0,0.622,0.622);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,93.4,56);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.podstavkapngкопия();
	this.instance.setTransform(0,0,0.78,0.78);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,78,69.4);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.podstavka();
	this.instance.setTransform(23,0,0.79,0.79);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(23,0,79,70.3);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.leeps();
	this.instance.setTransform(0,0,0.371,0.371);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,55.6,63);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pretty_3d_girl_by_crucho_07();
	this.instance.setTransform(0,0,0.551,0.551);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,56.8,73.9);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pretty_3d_girl_by_crucho_10();
	this.instance.setTransform(0,0,0.551,0.551);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.2,46.9);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pretty_3d_girl_by_crucho_13();
	this.instance.setTransform(0.3,0.3,0.551,0.551);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,0.3,23.7,46.3);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pretty_3d_girl_by_crucho_19();
	this.instance.setTransform(0,0,0.551,0.551);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,61.2,89.3);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pretty_3d_girl_by_crucho_21();
	this.instance.setTransform(0.9,-1.3,0.551,0.551);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.9,-1.3,11.6,63.4);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pretty_3d_girl_by_crucho_24();
	this.instance.setTransform(-0.4,-0.1,0.551,0.551);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.1,11.6,54);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pretty_3d_girl_by_crucho_29();
	this.instance.setTransform(0,0,0.551,0.551);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,73.3,102);


(lib.Анимация6 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#44D81E").ss(1,1,1).p("AifgxIE/AAIAABjIk/AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#44DD1A").s().p("AifAxIAAhiIE/AAIAABig");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17,-6,34,12);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pretty_3d_girl_by_crucho_03();
	this.instance.setTransform(-39,-22.8,0.551,0.551);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39,-22.8,80.5,45.2);


(lib.Символ50 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.setTransform(168.8,12.7,1.358,1.321,0,0,0,142.5,16.6);

	// Слой 2
	this.instance_1 = new lib.Символ52();
	this.instance_1.setTransform(171.8,15.6,1,1,0,0,0,193.5,21.8);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.659)").s().p("Egp2AG9IHBt4MBC2AAAIJ2N4g");
	this.shape.setTransform(176,28);

	this.addChild(this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-91.9,-16.5,536,89);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ48();
	this.instance.setTransform(14.4,122.6,1,1,0,0,0,14.4,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:4.4},4).to({x:14.4},5).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ49();
	this.instance_1.setTransform(118.7,9.5,1,1,0,0,0,12.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:126.7,y:1.5},4).to({x:118.7,y:9.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.2,132.1);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.setTransform(178.8,263.1,1,2.042,25,0,0,25,152.9);
	this.instance.alpha = 0.262;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:2.04,rotation:24.8,x:178.9,y:263.2,alpha:0.145},22).to({scaleX:1,scaleY:2.04,rotation:25,x:178.8,y:263.1,alpha:0.109},7).to({alpha:0.262},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,325.6,595.2);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.setTransform(274.1,216.7,1,2.042,45.5,0,0,25.2,152.9);
	this.instance.alpha = 0.262;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.07},19).to({alpha:0.262},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,493.6,486.4);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.setTransform(314.2,176.1,1,2.042,57.6,0,0,25.2,152.9);
	this.instance.alpha = 0.262;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.09},24).to({alpha:0.262},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,563.9,392.7);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.setTransform(343.5,118.5,1,2.042,71.7,0,0,25.1,152.9);
	this.instance.alpha = 0.262;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.078},34).to({alpha:0.262},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,614.7,260.6);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 4
	this.instance = new lib.Символ38();
	this.instance.setTransform(446.9,202.7,1,1,0,0,0,281.9,196.3);

	// Слой 3
	this.instance_1 = new lib.Символ40();
	this.instance_1.setTransform(674,293,1,1,0,0,0,162.8,297.6);

	// Слой 2
	this.instance_2 = new lib.Символ39();
	this.instance_2.setTransform(542.9,260,1,1,0,0,0,246.8,243.2);

	// Слой 1
	this.instance_3 = new lib.Символ37();
	this.instance_3.setTransform(367.7,127.2,1,1,0,0,0,307.4,130.2);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(60.3,-4.6,776.5,595.2);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.setTransform(46.8,-75.2,1,1,0,0,0,46.8,7.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-82.6,93.6,14.7);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация6("synched",0);
	this.instance.setTransform(16,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:2.4,y:-2},9).to({scaleY:1,y:5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,34,12);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUP4QgLgMAAgSQAAgTALgMQALgMAOAAQARAAAKAJQAKAKAAAPIgCAJIg4AAQAAAJADAGQADAHAGADQAEAEAHAAQAMAAAJgHIAFALQgFAFgGABQgHACgKAAQgPAAgKgLgAAbPQQAAgJgGgGQgGgGgKAAQgHAAgHAGQgGAGgBAJIArAAIAAAAgAgaNQIAAhTIAPAAIAAA4IAwg6IADAAIAABTIgPAAIAAg3IgvA5gAgaKbIAAhRIAegBQANAAAIAGQAHAGAAAKQAAAFgDAFQgDAEgGADQAPAFAAAPQAAAKgHAGQgIAHgPAAgAgMKPIAQABQASAAAAgNQAAgHgFgDQgFgDgJAAIgPAAgAgMJVIAAAWIAPAAQAPAAAAgMQABgFgEgDQgDgDgHAAgAgIHnIAAhEIgXAAIAAgMIA6AAIAAAMIgXAAIAABEgAgUErQgLgMAAgSQAAgUAMgLQALgMARAAQAGAAAIADQAHACADADIgHAKQgDgCgFgCIgLgCQgJAAgHAIQgHAJAAAOQAAANAHAIQAHAIAKAAQAKAAAKgIIAFAMQgLAIgRAAQgPAAgKgLgAgaCBIAAhRIAPAAIAAAeIAPgBQAOAAAJAHQAIAGAAANQAAALgIAHQgIAIgQAAgAgLBaIAAAbIAPABQAHAAAFgEQAFgEAAgHQAAgPgSAAIgOACgAgog9QANAAAGgUQAFgVAAgUIAAgHIAwAAIAABRIgPAAIAAhGIgTAAQgBARgDAPQgDAOgGAKQgFAJgGADQgGACgIAAgAgdjtQgJgMAAgTQgBgTALgLQAKgMAQAAQAQAAAJALQAJAMAAATQAAAUgKALQgKALgOAAQgRAAgKgLgAgSkiQgGAIAAAOQABAeAVAAQAIAAAGgIQAFgJAAgNQAAgegTAAQgKAAgGAIgAgimXIAAhQIAggBQALAAAIAFQAHAGABAKQgBAGgCAEQgEAFgFACQAPAFAAAPQAAAKgIAHQgIAGgNAAgAgUmiIASAAQAPAAABgNQgBgGgEgDQgFgEgHAAIgRAAgAgUndIAAAWIARAAQANAAAAgLQAAgGgDgCQgEgDgEAAgAgdpUQgJgLAAgUQgBgTALgLQAKgLAQAAQAQAAAJALQAJALAAATQAAAUgKALQgKALgOAAQgRAAgKgLgAgSqJQgGAJAAANQABAfAVAAQAIAAAGgJQAFgIAAgOQAAgegTAAQgKAAgGAIgAAbrjIAAgaIg3AAIAAAaIgMAAIAAgmIAFAAQAKgLAFgQQAFgPAAgRIAAgKIAuAAIAABFIAJAAIAAAmgAgIsjQgEAQgIAKIAlAAIAAg6IgUAAQAAAQgFAQgAgbueQAKAAAGgEQAHgFAAgGQgBgHgCgGIgchIIAPAAIAVA+IAWg+IAOAAIghBeQgEAIgHAGQgIAFgMAAg");
	this.shape.setTransform(16.9,140.4);

	// Слой 2
	this.instance = new lib.Символ31();
	this.instance.setTransform(0,273);

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#666666"],[0,1],-15.9,0,16,0).s().p("AifWGMAAAgsLIE/AAMAAAAsLg");
	this.shape_1.setTransform(16,141.5);

	this.addChild(this.shape_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,0,33,283.5);


(lib.Символ29 = function(mode,startPosition,loop) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.537)").s().p("EhHYAbCMAAAg2DMCOxAAAMAAAA2Dg");
	this.shape.setTransform(678.5,152.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// Слой 2
	this.instance = new lib.Символ36();
	this.instance.setTransform(440.5,152.9,1,1,0,0,0,261.6,212);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Слой 1
	this.instance_1 = new lib.Символ41();
	this.instance_1.setTransform(693.2,152.8,1,1,0,0,0,321.2,152.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(239.1,-63.7,822.4,595.2);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(21,138.5,1,1,0,0,0,21,138.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:138.6,scaleY:0.88,y:155.6},9).to({regY:138.5,scaleY:1,y:138.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42,277);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 4
	this.instance = new lib.Символ53();
	this.instance.setTransform(21.3,151.8,0.787,0.787,0,0,0,7.7,71.6);

	// Слой 2
	this.instance_1 = new lib.Символ26();
	this.instance_1.setTransform(21,143.5,1,1,0,0,0,21,138.5);

	// Слой 1
	this.instance_2 = new lib.Символ25();
	this.instance_2.setTransform(21,138.5,1,1,0,0,0,21,138.5);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42,283);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 14
	this.instance = new lib.Символ14();
	this.instance.setTransform(42.5,38.6,1,1,0,0,0,27.8,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-15},9).to({rotation:0},10).wait(1));

	// Символ 15
	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(19.5,38.6,1,1,0,0,0,39.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,7.1,79,70.3);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ32();
	this.instance.setTransform(91.4,134,1,1,0,0,0,44.6,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Символ 17
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(91.6,104,1,1,0,0,0,46.6,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:46.7,regY:27.9,rotation:15,x:91.7},9).to({regX:46.6,regY:28,rotation:0,x:91.6},10).wait(1));

	// Символ 16
	this.instance_2 = new lib.Символ16();
	this.instance_2.setTransform(91.7,104,1,1,0,0,0,39,34.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45,45.5,93.4,93.2);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(72.5,120.7,1,1,0,0,0,72.5,120.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,145,241.4);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(72.5,120.7,1,1,0,0,0,72.5,120.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,145,241.4);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgtIJQgNgVgJgjQgKgpgFgSQgKgfgPhSQgEgUgMglQgMgogDgQQgDgLgKgSQgMgSgDgJQgEgOAAgpQAAgrAJgdQADgMACgZQACgZADgLQASg8ASgZQAIgLAAgtQAAhBgVgjQgWgjAAgrQAAgtAIgWQAOgkApgWIBaAAQBXBBAjBkQAUA5AXBzIAABrQADAfAAAcQAAAYgKBpQgJBogcBGQgbBFgbA3QgcA3hAA4g");
	mask.setTransform(20.1,47.1);

	// Символ 4
	this.instance = new lib.Символ4();
	this.instance.setTransform(11.6,71.8,1,1,0,0,0,5.8,27);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:5.9,rotation:4.7,x:16,y:70.3},14).to({rotation:4,x:15.8,y:70.5},2).to({regX:5.8,rotation:0,x:11.6,y:71.8},13).wait(1));

	// Символ 7
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(10.8,22.2,1,1,0,0,0,11.8,23.2);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-7.5,x:14.7,y:22},14).to({rotation:-6.3,x:13.8,y:22.1},2).to({rotation:0,x:10.8,y:22.2},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,-0.7,20,99.4);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAdJNIAAAAIgFAAQgYAAgPgvIgZhAQgNgQgWgvQgQghgEgKQg2hWgThPQgQg9gChRIAAieQAAhkADg0QADgjAOiMQADgcABg4QAHgvApgfQAdgWB/A6IAVAOQAMAKACALQABAGALAkIADADQAFgFAFAAQAEAAABACIADADIgQAMQgCACAAAHQAAAnAZDOQAJAfAnBiQAWA2AAA5QAAAwgyBXQgcAugNAaIACABQgLALgDAOQgHAMAAANIAAACQgDAIABAKIgBAhQgCAMgDAKQAAAjgEAsQgGAsAAAcIAAATIAAABIAAAAIAAAXIADAMIAAADQgNAHgQAAIgEAAgAA0I2IADgDIAAgDIgDAGgABHFqIABgBIAAgHIgBAIg");
	mask.setTransform(10.8,43.3);

	// Символ 5
	this.instance = new lib.Символ5();
	this.instance.setTransform(11.9,76.2,1,1,0,0,0,5.8,31.7);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:5.9,rotation:-11.4,x:14.4,y:71.1},14).to({regX:5.8,rotation:0,x:11.9,y:76.2},13).wait(1));

	// Символ 8
	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(14.7,23.5,1,1,0,0,0,14.6,23.4);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.94,rotation:8,x:13.2,y:21.2},14).to({scaleY:1,rotation:0,x:14.7,y:23.5},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0.1,29.2,102.2);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(40.3,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.5,x:41.3,y:22.1},14).to({rotation:0,x:40.3,y:22.6},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.2,-0.2,80.5,45.2);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pretty_3d_girl_by_crucho_29.png
	this.instance = new lib.Символ3();
	this.instance.setTransform(47.8,232.3,1,1,0,0,0,36.6,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:3.9,x:51.3},19).to({scaleY:1,skewX:0,x:47.8},20).wait(1));

	// pretty_3d_girl_by_crucho_24.png
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(67.4,91.2,1,1,0,0,0,11.8,50.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1,skewX:-3.2,x:70.2},19).to({scaleY:1,skewX:0,x:67.4},20).wait(1));

	// pretty_3d_girl_by_crucho_21.png
	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(14.6,96.3,1,1,0,0,0,14.6,54.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1,skewX:-2.8,x:17.3},19).to({scaleY:1,skewX:0,x:14.6},20).wait(1));

	// pretty_3d_girl_by_crucho_19.png
	this.instance_3 = new lib.Символ6();
	this.instance_3.setTransform(41.8,145.8,1,1,0,0,0,30.6,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:1,skewX:-2.9,x:47.5},19).to({scaleY:1,skewX:0,x:41.8},20).wait(1));

	// pretty_3d_girl_by_crucho_07.png
	this.instance_4 = new lib.Символ9();
	this.instance_4.setTransform(44,73.1,1,1,0,0,0,28.4,36.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:1,skewX:-2.7,x:45.7},19).to({scaleY:1,skewX:0,x:44},20).wait(1));

	// pretty_3d_girl_by_crucho_03.png
	this.instance_5 = new lib.Символ10();
	this.instance_5.setTransform(43,22.6,1,1,0,0,0,40.2,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-0.2,100.8,283.5);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.setTransform(37.2,88,1,1,0,0,0,65.5,66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Символ 3
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(56.7,276.9,1.19,1.19,0,0,0,36.6,51.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:57.7},14).to({x:56.7},15).wait(1));

	// Символ 12
	this.instance_2 = new lib.Символ12();
	this.instance_2.setTransform(80.1,108.9,1.19,1.19,0,0,0,11.8,50.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:78.1},14).to({x:80.1},15).wait(1));

	// Символ 11
	this.instance_3 = new lib.Символ11();
	this.instance_3.setTransform(17.3,115,1.19,1.19,0,0,0,14.6,54.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:19.3},14).to({x:17.3},15).wait(1));

	// Символ 6
	this.instance_4 = new lib.Символ6();
	this.instance_4.setTransform(49.6,173.8,1.19,1.19,0,0,0,30.6,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:50.6},14).to({x:50.4},3).to({x:49.6},12).wait(1));

	// Символ 9
	this.instance_5 = new lib.Символ9();
	this.instance_5.setTransform(52.2,87.3,1.19,1.19,0,0,0,28.4,36.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:88.3},14).to({y:87.3},15).wait(1));

	// Символ 10
	this.instance_6 = new lib.Символ10();
	this.instance_6.setTransform(51.2,27.2,1.19,1.19,0,0,0,40.3,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:50.2,y:29.2},14).to({x:51.2,y:27.2},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.3,0,138.7,337.5);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 3
	this.instance = new lib.Символ3();
	this.instance.setTransform(56.7,275.9,1.19,1.19,0,0,0,36.6,51.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:57.7},0).wait(1));

	// Символ 12
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(80.1,108.9,1.19,1.19,0,0,0,11.8,50.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// Символ 11
	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(17.3,115,1.19,1.19,0,0,0,14.6,54.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:18.3},0).wait(1));

	// Символ 6
	this.instance_3 = new lib.Символ6();
	this.instance_3.setTransform(49.6,172.8,1.19,1.19,0,0,0,30.6,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:50.6},0).wait(1));

	// Символ 9
	this.instance_4 = new lib.Символ9();
	this.instance_4.setTransform(52.2,87.3,1.19,1.19,0,0,0,28.4,36.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:53.2,y:88.3},0).wait(1));

	// Символ 10
	this.instance_5 = new lib.Символ10();
	this.instance_5.setTransform(51.2,27.2,1.19,1.19,0,0,0,40.3,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({x:50.2,y:28.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,0,120,336.5);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ34();
	this.instance.setTransform(418.8,106.7,1,1,15,0,0,46.8,7.4);

	// Слой 1
	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(60.3,80.5,1,1,-15,0,0,91.7,104);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(1,1,1).p("AHzgBQAAACgFgBAnuABQgEAAAAgC");
	this.shape.setTransform(447.5,33);

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AHRESIvlkYQgEgBABgFIBCkCQABgDAEABIPlEXQAEACgBADIhCECIgBADIgCABIgCAAg");
	this.shape_1.setTransform(441.2,27.4);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.8,0,496.8,124.2);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(143,96.2,0.88,1.164,0,103.4,95.7,72.5,120.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,286,192.2);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 13
	this.instance = new lib.Символ13();
	this.instance.setTransform(129.1,111.5,1,1.121,64.2,0,0,72.5,120.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.97,scaleY:1.11,x:126.3,y:112.7},9).to({scaleX:1,scaleY:1.12,x:129.1,y:111.5},10).wait(1));

	// Символ 13
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(72.5,120.7,1,1,0,0,0,72.5,120.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.98,scaleY:0.98},9).to({scaleX:1,scaleY:1},10).wait(1));

	// Символ 18
	this.instance_2 = new lib.Символ18();
	this.instance_2.setTransform(124.5,117.1,1,1,0,0,0,143,96.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.2,-12.7,306.7,254.1);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Символ 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(141,204.7,1,1,15,0,0,72.5,120.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,x:102.2,y:69.4},0).wait(1).to({regX:72.5,regY:120.7,x:141,y:204.7},0).wait(1));

	// Символ 2
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(154.2,226.4,1.19,1.19,0,0,0,42.2,141.6);

	this.instance_2 = new lib.Символ45();
	this.instance_2.setTransform(154.5,226.4,1,1,0,0,0,50.4,168.8);

	this.instance_3 = new lib.Символ46();
	this.instance_3.setTransform(154.5,226.4,1,1,0,0,0,50.4,168.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// kamen.png
	this.instance_4 = new lib.kamen();
	this.instance_4.setTransform(0,0,1,1.193);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,354,395.1);


// stage content:



(lib.telkastena640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		this.addEventListener("tick", fl_fon.bind(this));
		
		function fl_fon() {
		
		this.fon.x = - stage.mouseX / 10;
		}
		
		
		
		this.bt1.addEventListener("mouseover", fl_bt1.bind(this));
		
		function fl_bt1()
		{
			this.kursor.gotoAndStop(1);
			this.fon.gotoAndStop(1);
			this.telka.gotoAndStop(1);
		}
		
		this.bt2.addEventListener("mouseover", fl_bt2.bind(this));
		
		function fl_bt2()
		{
			this.kursor.gotoAndStop(2);
			this.fon.gotoAndStop(1);
			this.telka.gotoAndStop(2);
		}
		
		this.bigbt.addEventListener("mouseover", fl_bigbt.bind(this));
		
		function fl_bigbt()
		{
			this.fon.gotoAndStop(1);
		}
		this.bigbt.addEventListener("mouseout", fl_bigbt1.bind(this));
		
		function fl_bigbt1()
		{
			this.fon.gotoAndStop(0);
		}
		
		
		stage.canvas.style.cursor = "none";
		this.kursor.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.kursor.x = stage.mouseX;
			this.kursor.y = stage.mouseY;
		}
		
		
		this.bigbt.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		this.bt1.addEventListener("click", fl_ClickToGoToWebPage1);
		
		function fl_ClickToGoToWebPage1() {
			window.open(clickTAG, "_blank");
		}
		this.bt2.addEventListener("click", fl_ClickToGoToWebPage2);
		
		function fl_ClickToGoToWebPage2() {
			window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 2
	this.kursor = new lib.Символ42();
	this.kursor.setTransform(343,71,1,1,0,0,0,215,43);

	this.timeline.addTween(cjs.Tween.get(this.kursor).wait(1));

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(615,155.5,1,1,0,0,0,16,141.5);

	this.instance_1 = new lib.Символ24();
	this.instance_1.setTransform(22,156.1,0.667,1,0,0,0,21,138.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(1,1,1).p("AgE2FIAJAAMAAAAsLIgJAA");
	this.shape.setTransform(631.5,155.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 3
	this.bt2 = new lib.Символ43();
	this.bt2.setTransform(504.4,142.8,1,1,-22.7,0,0,73.2,70.4);
	new cjs.ButtonHelper(this.bt2, 0, 1, 2, false, new lib.Символ43(), 3);

	this.bt1 = new lib.Символ43();
	this.bt1.setTransform(122,142.8,1,1,-22.7,0,0,73.2,70.4);
	new cjs.ButtonHelper(this.bt1, 0, 1, 2, false, new lib.Символ43(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bt1},{t:this.bt2}]}).wait(1));

	// Слой 5
	this.bigbt = new lib.Символ44();
	this.bigbt.setTransform(387.9,151.5,1,1,0,0,0,427.9,164.5);
	new cjs.ButtonHelper(this.bigbt, 0, 1, 2, false, new lib.Символ44(), 3);

	this.timeline.addTween(cjs.Tween.get(this.bigbt).wait(1));

	// Символ 21
	this.instance_2 = new lib.Символ28();
	this.instance_2.setTransform(320.5,142,1,1,0,0,0,249,63.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// text
	this.instance_3 = new lib.Символ50();
	this.instance_3.setTransform(347.5,297.5,1,1,0,0,0,198.5,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Символ 23
	this.telka = new lib.Символ23();
	this.telka.setTransform(325.2,174.5,1,1,0,0,0,189.2,197.5);

	this.timeline.addTween(cjs.Tween.get(this.telka).wait(1));

	// Символ 22
	this.instance_4 = new lib.Символ22();
	this.instance_4.setTransform(497.5,160,1,1,15,0,0,42.5,42.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AnaD8Ig/jpQgBgFAEgBIPskLQAEgBABAEIA/DqQABAEgEAAIvsEMIgCAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBg");
	this.shape_1.setTransform(118.5,109.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_4}]}).wait(1));

	// fon.jpg
	this.fon = new lib.Символ29();
	this.fon.setTransform(52.7,152.3,1,1,0,0,0,321.2,152.8);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(280,88.3,856,595.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;