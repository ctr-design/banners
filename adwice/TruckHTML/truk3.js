(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/block.png", id:"block"},
		{src:"images/Buton.png", id:"Buton"},
		{src:"images/grasstile.jpg", id:"grasstile"},
		{src:"images/image215.jpg", id:"image215"},
		{src:"images/image230.png", id:"image230"},
		{src:"images/image232.png", id:"image232"},
		{src:"images/image298.png", id:"image298"},
		{src:"images/image333.png", id:"image333"},
		{src:"images/image398.png", id:"image398"},
		{src:"images/image406.png", id:"image406"},
		{src:"images/roadn.png", id:"roadn"},
		{src:"images/rul8.png", id:"rul8"},
		{src:"images/s2.png", id:"s2"},
		{src:"images/s3.png", id:"s3"},
		{src:"images/s4.png", id:"s4"},
		{src:"images/s5.png", id:"s5"},
		{src:"images/s6.png", id:"s6"},
		{src:"images/w256h2561380453915MouseOptions256x25632.png", id:"w256h2561380453915MouseOptions256x25632"}
	]
};



// symbols:



(lib.block = function() {
	this.initialize(img.block);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,60);


(lib.Buton = function() {
	this.initialize(img.Buton);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,110);


(lib.grasstile = function() {
	this.initialize(img.grasstile);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.image215 = function() {
	this.initialize(img.image215);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,500);


(lib.image230 = function() {
	this.initialize(img.image230);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,241,257);


(lib.image232 = function() {
	this.initialize(img.image232);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,273,344);


(lib.image298 = function() {
	this.initialize(img.image298);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,169,263);


(lib.image333 = function() {
	this.initialize(img.image333);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.image398 = function() {
	this.initialize(img.image398);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,83);


(lib.image406 = function() {
	this.initialize(img.image406);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,97);


(lib.roadn = function() {
	this.initialize(img.roadn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,198);


(lib.rul8 = function() {
	this.initialize(img.rul8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,185);


(lib.s2 = function() {
	this.initialize(img.s2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,182);


(lib.s3 = function() {
	this.initialize(img.s3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,183);


(lib.s4 = function() {
	this.initialize(img.s4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,199,187);


(lib.s5 = function() {
	this.initialize(img.s5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,90);


(lib.s6 = function() {
	this.initialize(img.s6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,76);


(lib.w256h2561380453915MouseOptions256x25632 = function() {
	this.initialize(img.w256h2561380453915MouseOptions256x25632);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("Egx/AX1MAAAgvpMBj+AAAMAAAAvpg");
	this.shape.setTransform(320,152.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsdCHIAEgoQAHABAKAAQALAAAIgGQAIgGADgJQACgEgDgGIhLiYIA5AAIAwB4IABAAIAlh4IA1AAIgqBrQgcBFgQAUQgMAPgOAHQgHAEgIACQgJACgKAAQgPAAgKgEgADKBiQAIgBAHgEQAHgDAEgEQAFgFADgIQAEgIACgKQADgRAAgdIAAhgICXAAIAADeIgzAAIAAi0IgzAAIAAAzQAAAXgBARQgCAUgEAPQgFAQgIALQgIAMgNAIQgJAFgLACQgLADgNAAgAAaCGIAAjaQANgCA1gCQAYAAAOACQAQADAMAHQAMAHAHALQAIALAAAPQAAAIgDAHQgCAHgEAGQgFAEgHAFQgHAFgJAEIAAABQAKACAIAFQAIAFAGAHQAGAHADAJQADAJAAALQAAAOgGANQgGALgLAJQgGAFgIAEIgTAGQghAGgWAAQggAAgXgEgABMBjIAUABIAQgCQAIgCAGgDQAGgEAEgGQADgHAAgIQAAgIgDgHQgEgGgGgDQgGgEgJgCQgIgCgJAAIgSAAgABMgyIAAAyIARAAQAKAAAIAAQAHgCAFgEQAGgDACgFQADgFAAgHQAAgMgJgHQgKgGgRAAIgWABgAMJCHIAAhCQAAgjADg5IAAAAQgZA2gNAXIguBRIg6AAIAAjeIAvAAIAABDQgBBFgCAeIABAAQAMgaAcg1IAwhXIA0AAIAADegAIgCHIAAhYIgMAAQgPAAgJAJQgFAFgEAHIgHAQIgLAgQgEANgEAGIg2AAQAHgKAFgPIAMgmIAIgQQAFgIAGgGQAGgHANgFIAAgBQgKgCgIgEQgJgEgGgHQgHgHgEgHQgEgJAAgMQAAgQAHgMQAGgMALgIQAIgGAYgIQARgDAYAAQAYAAAoAEIAADbgAH8gxQgHACgGAEQgFAEgDAGQgDAGAAAIQAAAIADAGQADAFAGADQAGAEAIACQAHACAJAAIASgBIAAg7QgLgCgKAAQgIAAgHACgAg4CHIgRg5IhAAAIgQA5Ig1AAIBFjeIBCAAIBGDegAhQAoIgahZIAAAAIgYBZIAyAAgAl+CHIAAjbQAQgCA1gCQAXAAARAEQARAEALAKQALAIAGANQAHAOAAAQQAAARgFALQgGAOgKAKQgGAGgIAEIgRAIQgaAFgPAAIgSgBIAABQgAlMgwIAABAQAGABALAAQAKAAAJgCQAHgDAGgEQAGgFADgFQADgHAAgIQAAgIgDgGQgCgGgFgEQgGgFgHgCQgHgCgKAAQgNAAgIACgAncCHIAAi0IhPAAIAAC0IgzAAIAAjeIC1AAIAADegALGhkQgIgCgGgFQgGgFgEgIQgEgIgBgKIAjAAQAAAKADAFQAEAFAIAAQAHAAAEgFQADgFABgKIAiAAQgBALgDAIQgEAHgHAFQgGAFgJADQgJACgLAAQgLAAgJgDg");
	this.shape.setTransform(88,16.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5.7,3,164.8,27.9);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(136.6,22.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7.9,7.9,257.5,28.9);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Buton();
	this.instance.setTransform(0,54.6,0.702,0.702,-45);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,109.2,109.2);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AIjAAQAADiihCgQigChjiAAQjhAAigihQihigAAjiQAAjhChihQCgigDhAAQDiAACgCgQChChAADhgAKSAAQAAERjBDAQjADBkRAAQkQAAjAjBQjBjAAAkRQAAkQDBjBQDAjAEQAAQERAADADAQDBDBAAEQg");
	this.shape.setTransform(66.1,26.9);

	// Слой 1
	this.instance = new lib.rul8();
	this.instance.setTransform(0,-38,0.71,0.71);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AJ/AAQAAEJi7C7Qi7C7kJAAQkHAAi8i7Qi7i7AAkJQAAkIC7i7QC8i7EHAAQEJAAC7C7QC7C7AAEIg");
	this.shape_1.setTransform(65.2,26);

	this.addChild(this.shape_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.8,-40,133.7,133.7);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.498)").s().p("AkwBRQgBgCAAgKQAAgHAFgCQAJgEAHgOIAAgNQgkAEgKgLQgFgFACgHQAAgKAMgNIAWgVIAdACQAOABACACIBXAAQAagHATgOIAsggQAZgPAjALQAxARAYAAQAMAAAEgFQAFgFAEAAQAFAAAWAMQAcAAAPgGIAOgGQATAAAHANQADAGAAAIQA5AHATASQACACATAhQAOAZAUAKQALAGAAAWIAAAKQgBAGgFACIkyABQkwABgDABQgQgCgEgJg");
	this.shape.setTransform(33.5,9.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67.1,18.5);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.498)").s().p("AkRBWQgHgOgDgPQAAgMABgEQAGgNATACIABgFQgegjAAgJQAAgGAEgOQAFgOAAgDIgUgPQgUgNAAgNIABgKQABgDAEgCIJjAAQAPAQACAEQABACAAAPQAAAagIAQQgJAVgEAhQgDAXg9AwIAAACIACADIgCAHIgDAAIgBABQgFAGgJgBIgGgEIABgCIm/AAIACACQAAAEgBACQgCABgFAAQgQAAgOgbg");
	this.shape.setTransform(31.8,11.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63.7,22.7);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.498)").s().p("AAOBqQgLgEhFgmQg6gfgPADQgIgNgYgvQgFgLgMgKQgLgGgMgLQgXgUAAgIIABgGIgBAAQAAgGAHgDIHIAAQAEACABAEIgCAGIgDAAQgCAGgHADIgIADQgHAIgTARQgeAdgDArQgCAbgaAVQgcAWg+AUg");
	this.shape.setTransform(23.5,10.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,47,21.3);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.image298, null, new cjs.Matrix2D(0.538,0,0,0.538,-45.5,-70.8)).s().p("AnGLEIAA2HIOMAAIAAWHg");
	this.shape.setTransform(45.5,70.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,91,141.7);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(246,0,0,0)","#FF0000"],[0,1],0,0,0,0,0,421.7).s().p("Eg7/AbLMAAAg2VMB3/AAAMAAAA2Vg");
	this.shape.setTransform(384.1,174);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,768.1,348);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.block();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,170,60);


(lib.Анимация10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.s6();
	this.instance.setTransform(-19.9,-6.7,0.176,0.176);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.9,-6.7,39.9,13.4);


(lib.Анимация9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.s6();
	this.instance.setTransform(-19.9,-6.7,0.176,0.176);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.9,-6.7,39.9,13.4);


(lib.Анимация8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.s5();
	this.instance.setTransform(-16.4,-7.9,0.176,0.176);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.4,-7.9,32.8,15.9);


(lib.Анимация7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.s5();
	this.instance.setTransform(-16.4,-7.9,0.176,0.176);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.4,-7.9,32.8,15.9);


(lib.Анимация6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.s4();
	this.instance.setTransform(-17.5,-16.5,0.176,0.176);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.5,-16.5,35.1,33);


(lib.Анимация5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.s4();
	this.instance.setTransform(-17.5,-16.5,0.176,0.176);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.5,-16.5,35.1,33);


(lib.Анимация4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.s3();
	this.instance.setTransform(-14.1,-16.1,0.176,0.176);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.1,-16.1,28.3,32.3);


(lib.Анимация3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.s3();
	this.instance.setTransform(-14.1,-16.1,0.176,0.176);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.1,-16.1,28.3,32.3);


(lib.Анимация2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.s2();
	this.instance.setTransform(-17.1,-16,0.176,0.176);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.1,-16,34.3,32.1);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.s2();
	this.instance.setTransform(-17.1,-16,0.176,0.176);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.1,-16,34.3,32.1);


(lib.Tween22 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.w256h2561380453915MouseOptions256x25632();
	this.instance.setTransform(-30,-30,0.234,0.234);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.grasstile();
	this.instance.setTransform(-98.9,-397.9);

	this.instance_1 = new lib.grasstile();
	this.instance_1.setTransform(-100.3,-198.2);

	this.instance_2 = new lib.grasstile();
	this.instance_2.setTransform(-100.4,-1.2);

	this.instance_3 = new lib.grasstile();
	this.instance_3.setTransform(-101,197.9);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101,-397.9,202.1,795.8);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.grasstile();
	this.instance.setTransform(-98.9,-397.9);

	this.instance_1 = new lib.grasstile();
	this.instance_1.setTransform(-100.3,-198.2);

	this.instance_2 = new lib.grasstile();
	this.instance_2.setTransform(-100.4,-1.2);

	this.instance_3 = new lib.grasstile();
	this.instance_3.setTransform(-101,197.9);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101,-397.9,202.1,795.8);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.roadn, null, new cjs.Matrix2D(1.187,0,0,1.202,-325.9,-119)).s().p("Egy6ASlIAA4iQBTgJBSgOQN3iMNhjrQI3iaIjjgQAlgPAkgRIEhAAQBDAgBEAYQEeBkEmBFQKgChKqBqQIOBPIRA9IAAbSg");
	this.shape.setTransform(325.9,119);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,651.9,238);


(lib.shape109 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AETAAQAABxhRBRQhRBRhxAAQhwAAhRhRQhRhRAAhxQAAhwBRhRQBRhRBwAAQBxAABRBRQBRBRAABwg");
	this.shape.setTransform(27.5,27.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.RoadLineSm = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApwAJIAAgSIThAAIAAASg");
	this.shape.setTransform(62.5,1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,125,2);


(lib.shape407 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.image406, null, new cjs.Matrix2D(0.753,0,0,0.753,-39.5,-36.5)).s().p("AmKFtIAArZIMVAAIAALZg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-36.5,79,73);


(lib.shape334 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.image333, null, new cjs.Matrix2D(0.641,0,0,0.641,-41,-41)).s().p("AmZGaIAAszIMzAAIAAMzg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41,-41,82,82);


(lib.shape233копия = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.image232, null, new cjs.Matrix2D(1,0,0,1,-136.5,-172)).s().p("A1Ua4MAAAg1uMAqpAAAMAAAA1ug");
	this.shape.setTransform(49.1,-191.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87.4,-363.9,273,344);


(lib.shape233 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.image232, null, new cjs.Matrix2D(1,0,0,1,-136.5,-172)).s().p("A1Ua4MAAAg1uMAqpAAAMAAAA1ug");
	this.shape.setTransform(49.1,-191.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87.4,-363.9,273,344);


(lib.shape231копия = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.image230, null, new cjs.Matrix2D(-1.039,0,0,1,125.2,-128.5)).s().p("AziUFMAAAgoJMAnFAAAMAAAAoJg");
	this.shape.setTransform(-150.6,-156.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-275.7,-285.1,250.3,257);


(lib.shape231 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.image230, null, new cjs.Matrix2D(1,0,0,1,-120.5,-128.5)).s().p("AyzUFMAAAgoJMAloAAAMAAAAoJg");
	this.shape.setTransform(-150.6,-156.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-271.1,-285.1,241,257);


(lib.shape216 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.image215, null, new cjs.Matrix2D(1,0,0,1,-500,-250)).s().p("EhOHAnDMAAAhOFMCcPAAAMAAABOFg");
	this.shape.setTransform(0,-131);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-500,-381,1000,500);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.setTransform(91.3,22.2,1,1,0,0,0,91.3,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:22.1,scaleX:1.08,scaleY:1.08,y:22.1},4).to({regY:22.2,scaleX:1,scaleY:1,y:22.2},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.7,3,164.8,27.9);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(146.6,22.6,1,1,0,0,0,146.6,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:156.1},9).to({x:148.7},7).to({x:146.6},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.9,7.9,257.5,28.9);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(54.6,54.6,1,1,0,0,0,54.6,54.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:73.6},10).to({x:54.6},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109.2,109.2);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(66.6,27.7,1,1,0,0,0,66.6,27.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:66.5,rotation:-5.2},4).to({regX:66.6,rotation:0},4).to({rotation:7},4).to({rotation:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-40,133.7,133.7);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.shape407("synched",0);
	this.instance.setTransform(39.5,36.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,79,73);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Al+n5IL9AAIAAPzIr9AAg");
	this.shape.setTransform(-371.7,-251.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(246,0,0,0)","#FF0000"],[0,1],0,0,0,0,0,63.6).s().p("Al+H6IAAvzIL9AAIAAPzg");
	this.shape_1.setTransform(-371.7,-251.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},126).wait(29));

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(384.1,174,1,1,0,0,0,384.1,174);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55).to({_off:false},0).to({alpha:0},25).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-411.1,-302.8,78.8,103.3);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(101.4,-119.9);
	this.instance._off = true;

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.setTransform(269.4,-165.9,0.352,0.352);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},55).to({state:[{t:this.instance_1}]},19).to({state:[]},1).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55).to({_off:false},0).to({_off:true,scaleX:0.35,scaleY:0.35,x:269.4,y:-165.9},19,cjs.Ease.get(1)).wait(81));

	// Слой 3
	this.instance_2 = new lib.Анимация3("synched",0);
	this.instance_2.setTransform(105.9,-117.7);
	this.instance_2._off = true;

	this.instance_3 = new lib.Анимация4("synched",0);
	this.instance_3.setTransform(281.2,-62.9,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},55).to({state:[{t:this.instance_3}]},19).to({state:[]},1).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(55).to({_off:false},0).to({_off:true,scaleX:0.38,scaleY:0.38,x:281.2,y:-62.9},19,cjs.Ease.get(0.84)).wait(81));

	// Слой 4
	this.instance_4 = new lib.Анимация5("synched",0);
	this.instance_4.setTransform(77.7,-120.7);
	this.instance_4._off = true;

	this.instance_5 = new lib.Анимация6("synched",0);
	this.instance_5.setTransform(-57,-198.4,0.368,0.368);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},55).to({state:[{t:this.instance_5}]},19).to({state:[]},1).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(55).to({_off:false},0).to({_off:true,scaleX:0.37,scaleY:0.37,x:-57,y:-198.4},19,cjs.Ease.get(1)).wait(81));

	// Слой 5
	this.instance_6 = new lib.Анимация7("synched",0);
	this.instance_6.setTransform(63.8,-118.6);
	this.instance_6._off = true;

	this.instance_7 = new lib.Анимация8("synched",0);
	this.instance_7.setTransform(-129.2,-71.1,0.377,0.377);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},55).to({state:[{t:this.instance_7}]},19).to({state:[]},1).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(55).to({_off:false},0).to({_off:true,scaleX:0.38,scaleY:0.38,x:-129.2,y:-71.1},19,cjs.Ease.get(1)).wait(81));

	// Слой 6
	this.instance_8 = new lib.Анимация9("synched",0);
	this.instance_8.setTransform(72.5,-123.2);
	this.instance_8._off = true;

	this.instance_9 = new lib.Анимация10("synched",0);
	this.instance_9.setTransform(-37,-33.2,0.448,0.448);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},55).to({state:[{t:this.instance_9}]},19).to({state:[]},1).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(55).to({_off:false},0).to({_off:true,scaleX:0.45,scaleY:0.45,x:-37,y:-33.2},19,cjs.Ease.get(1)).wait(81));

	// Слой 1
	this.instance_10 = new lib.Символ12();
	this.instance_10.setTransform(93.8,-257,0.025,0.025,0,0,0,84.7,30.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regY:30.4,scaleX:0.17,scaleY:0.17,x:92.6,y:-220.4},26).to({regX:84.6,regY:30.2,scaleX:0.29,scaleY:0.29,x:91.7,y:-190.7},15).to({regX:85,regY:30,scaleX:0.56,scaleY:0.56,x:89.5,y:-123},13).to({_off:true},1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(91.7,-257.7,4.2,1.5);


(lib.Символ8копия = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.shape233копия("synched",0);
	this.instance.setTransform(134.3,133,0.983,1,0,0,0,49.1,-191.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-39,268.4,344);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.shape233("synched",0);
	this.instance.setTransform(-3718.6,172,1,1,0,0,180,49.1,-191.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3855,0,273,344);


(lib.Символ7копия = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.shape231копия("synched",0);
	this.instance.setTransform(120.5,128.5,0.989,1,0,0,0,-150.6,-156.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.2,0,247.5,257);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.shape231("synched",0);
	this.instance.setTransform(120.5,128.5,0.989,1,0,0,0,-150.6,-156.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.4,0,238.3,257);


(lib.Символ5копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8копия();
	this.instance.setTransform(240.4,-35.6,0.034,0.034,0,0,0,136.4,172.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({regX:136.5,scaleX:0.98,scaleY:0.98,x:-222.9,y:149},97).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(235.8,-42.7,9.1,11.6);


(lib.Символ5копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(236.6,-35.6,0.034,0.034,0,0,0,136.4,172.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:136.5,regY:172,scaleX:1,scaleY:1,x:4475,y:133},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(102.1,-41.4,9.2,11.6);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(45.5,70.8,1,1,0,0,0,45.5,70.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({y:63.1},0).wait(1).to({rotation:-5.7,y:70.8},0).wait(1).to({rotation:0,y:78.6},0).wait(1).to({rotation:4.5,y:70.8},0).wait(1).to({rotation:0},0).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91,141.7);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(100.7,-0.2);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(101.1,398);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},151).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:101.1,y:398},151).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-398.2,202.2,795.8);


(lib.Symbol13 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(323.1,108.6,1,1,0,0,0,325.9,119);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#336D3D").s().p("Egy6AGjIAAq8UAy6gESAy7AESIAAK8g");
	this.shape.setTransform(322.5,30.8);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.4,-11.1,652.5,238.7);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egy0gL2IBbgKIDsgUIEEgUIFegUIEjgPIEngPID2gKQCogHCqgFIQEgDI3yNbI5NOTgAZogfI3ytaILHAAQBaAFBcgCQBuAIBxAAIDcAKQCHAKCNAFIFUAPIFtAUIHXAjIFbAhIAAZig");
	mask.setTransform(322.7,91);

	// grass
	this.instance = new lib.Symbol14();
	this.instance.setTransform(114.3,3.4,1,1,59.4,0,0,100,200);

	this.instance_1 = new lib.Symbol14();
	this.instance_1.setTransform(534,3.5,1,1,-59.3,0,0,100,200.1);

	this.instance.mask = this.instance_1.mask = mask;

	// Layer 1
	this.instance_2 = new lib.Symbol13();
	this.instance_2.setTransform(322,129.1,1,1,0,0,0,322,116.1);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.4,1.9,652.5,238.7);


(lib.sprite110 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape109("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.sprite408 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ19();
	this.instance.setTransform(-2.1,-23.5,1,1,0,0,0,33.5,9.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(366).to({_off:false},0).to({_off:true},40).wait(58));

	// Слой 3
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(0.9,-3.2,1,1,0,0,0,31.8,11.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(211).to({_off:false},0).to({_off:true},195).wait(58));

	// Слой 2
	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(-0.8,16.4,1,1,0,0,0,23.5,10.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(55).to({_off:false},0).to({_off:true},351).wait(58));

	// Layer 1
	this.instance_3 = new lib.Символ16();
	this.instance_3.setTransform(0,0,1,1,0,0,0,39.5,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(464));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-36.5,79,73);


(lib.life = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape334("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41,-41,82,82);


(lib.sprite64 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.life();
	this.instance.setTransform(-3.5,7.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.5,-33.4,82,82);


(lib.Symbol16 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Tween22("synched",0);
	this.instance.setTransform(30,30);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.Beginning = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mid (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnYT4MAOxgnvMgImAnvg");
	mask.setTransform(-67.5,198.4);

	// Layer 1
	this.instance = new lib.RoadLineSm();
	this.instance.setTransform(-80,75.5,1,1,0,0,0,62.5,1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:1.01},0).wait(1).to({scaleY:1.05,y:75.7},0).wait(1).to({scaleY:1.13,y:76},0).wait(1).to({scaleY:1.26,y:76.4},0).wait(1).to({scaleY:1.43,y:77.1},0).wait(1).to({scaleY:1.67,y:77.9},0).wait(1).to({scaleY:1.98,y:79.1},0).wait(1).to({scaleY:2.36,y:80.5},0).wait(1).to({scaleY:2.83,y:82.2},0).wait(1).to({scaleY:3.39,y:84.3},0).wait(1).to({scaleY:4.07,y:86.7},0).wait(1).to({scaleY:4.87,y:89.7},0).wait(1).to({scaleY:5.8,x:-80.1,y:93.1},0).wait(1).to({scaleY:6.9,y:97.1},0).wait(1).to({scaleY:8.17,y:101.8},0).wait(1).to({scaleY:9.64,skewX:0.1,y:107.2},0).wait(1).to({scaleY:11.36,x:-80.2,y:113.5},0).wait(1).to({scaleY:13.35,y:120.8},0).wait(1).to({scaleY:15.67,x:-80.3,y:129.3},0).wait(1).to({scaleY:18.39,y:139.3},0).wait(1).to({scaleY:21.55,x:-80.4,y:150.9},0).wait(1).to({scaleY:25.11,skewX:0.2,x:-80.5,y:164},0).wait(1).to({scaleY:29.07,x:-80.6,y:178.5},0).wait(1).to({scaleY:33.42,x:-80.7,y:194.5},0).wait(1).to({scaleY:38.19,x:-80.8,y:212},0).wait(1).to({scaleY:43.4,skewX:0.3,x:-80.9,y:231.2},0).wait(1).to({scaleY:49.1,x:-81,y:252.1},0).wait(1).to({scaleY:55.38,skewX:0.4,x:-81.1,y:275.1},0).wait(1).to({scaleY:62.38,x:-81.3,y:300.8},0).wait(1).to({scaleY:70.39,skewX:0.5,x:-81.5,y:330.3},0).wait(1).to({scaleY:80.1,x:-81.7,y:365.9},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.RoadLineSm();
	this.instance_1.setTransform(-80.7,211.7,1,38.174,0,0,0,62.5,1);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleY:43.38,skewX:0.1,x:-80.8,y:230.9},0).wait(1).to({scaleY:49.09,skewX:0.2,x:-81,y:251.9},0).wait(1).to({scaleY:55.37,x:-81.1,y:274.9},0).wait(1).to({scaleY:62.37,skewX:0.3,x:-81.3,y:300.7},0).wait(1).to({scaleY:70.39,skewX:0.4,x:-81.4,y:330.2},0).wait(1).to({scaleY:80.1,skewX:0.5,x:-81.7,y:365.9},0).to({scaleY:1,skewX:0,x:-80,y:75.5},1).wait(1).to({scaleY:1.01},0).wait(1).to({scaleY:1.05,y:75.7},0).wait(1).to({scaleY:1.13,y:76},0).wait(1).to({scaleY:1.26,y:76.4},0).wait(1).to({scaleY:1.43,y:77.1},0).wait(1).to({scaleY:1.67,y:77.9},0).wait(1).to({scaleY:1.98,y:79.1},0).wait(1).to({scaleY:2.36,y:80.5},0).wait(1).to({scaleY:2.83,y:82.2},0).wait(1).to({scaleY:3.39,y:84.3},0).wait(1).to({scaleY:4.07,y:86.7},0).wait(1).to({scaleY:4.87,y:89.7},0).wait(1).to({scaleY:5.8,x:-80.1,y:93.1},0).wait(1).to({scaleY:6.9,y:97.1},0).wait(1).to({scaleY:8.17,y:101.8},0).wait(1).to({scaleY:9.64,y:107.2},0).wait(1).to({scaleY:11.36,x:-80.2,y:113.5},0).wait(1).to({scaleY:13.35,y:120.8},0).wait(1).to({scaleY:15.67,x:-80.3,y:129.3},0).wait(1).to({scaleY:18.39,y:139.3},0).wait(1).to({scaleY:21.55,x:-80.4,y:150.9},0).wait(1).to({scaleY:25.11,y:164},0).wait(1).to({scaleY:29.07,x:-80.5,y:178.5},0).wait(1).to({scaleY:33.42,skewX:0.1,x:-80.7,y:194.5},0).wait(1));

	// Layer 3
	this.instance_2 = new lib.RoadLineSm();
	this.instance_2.setTransform(-80.2,113.4,1,11.352,0,0,0,62.5,1);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleY:13.34,y:120.7},0).wait(1).to({scaleY:15.66,x:-80.3,y:129.2},0).wait(1).to({scaleY:18.39,skewX:0.1,y:139.3},0).wait(1).to({scaleY:21.55,x:-80.4,y:150.8},0).wait(1).to({scaleY:25.11,x:-80.5,y:163.9},0).wait(1).to({scaleY:29.07,x:-80.6,y:178.4},0).wait(1).to({scaleY:33.42,skewX:0.2,x:-80.7,y:194.4},0).wait(1).to({scaleY:38.19,x:-80.8,y:212},0).wait(1).to({scaleY:43.4,x:-80.9,y:231.1},0).wait(1).to({scaleY:49.1,skewX:0.3,x:-81,y:252},0).wait(1).to({scaleY:55.38,x:-81.2,y:275.1},0).wait(1).to({scaleY:62.38,skewX:0.4,x:-81.3,y:300.8},0).wait(1).to({scaleY:70.39,skewX:0.5,x:-81.5,y:330.2},0).wait(1).to({scaleY:80.1,x:-81.7,y:365.9},0).to({scaleY:1,skewX:0,x:-80,y:75.5},1).wait(1).to({scaleY:1.01},0).wait(1).to({scaleY:1.05,y:75.7},0).wait(1).to({scaleY:1.13,y:76},0).wait(1).to({scaleY:1.26,y:76.4},0).wait(1).to({scaleY:1.43,y:77.1},0).wait(1).to({scaleY:1.67,y:77.9},0).wait(1).to({scaleY:1.98,y:79.1},0).wait(1).to({scaleY:2.36,y:80.5},0).wait(1).to({scaleY:2.83,y:82.2},0).wait(1).to({scaleY:3.39,y:84.3},0).wait(1).to({scaleY:4.07,y:86.7},0).wait(1).to({scaleY:4.87,y:89.7},0).wait(1).to({scaleY:5.8,x:-80.1,y:93.1},0).wait(1).to({scaleY:6.89,y:97.1},0).wait(1).to({scaleY:8.16,y:101.8},0).wait(1).to({scaleY:9.64,x:-80.2,y:107.2},0).wait(1));

	// Layer 4
	this.instance_3 = new lib.RoadLineSm();
	this.instance_3.setTransform(-80,82.2,1,2.825,0,0,0,62.5,1);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleY:3.39,y:84.3},0).wait(1).to({scaleY:4.07,y:86.7},0).wait(1).to({scaleY:4.87,y:89.6},0).wait(1).to({scaleY:5.8,x:-80.1,y:93.1},0).wait(1).to({scaleY:6.89,y:97.1},0).wait(1).to({scaleY:8.17,y:101.8},0).wait(1).to({scaleY:9.64,y:107.2},0).wait(1).to({scaleY:11.36,skewX:0.1,x:-80.2,y:113.5},0).wait(1).to({scaleY:13.35,y:120.8},0).wait(1).to({scaleY:15.67,x:-80.3,y:129.3},0).wait(1).to({scaleY:18.39,x:-80.4,y:139.3},0).wait(1).to({scaleY:21.55,y:150.9},0).wait(1).to({scaleY:25.11,skewX:0.2,x:-80.5,y:164},0).wait(1).to({scaleY:29.07,x:-80.6,y:178.5},0).wait(1).to({scaleY:33.42,y:194.5},0).wait(1).to({scaleY:38.19,x:-80.8,y:212},0).wait(1).to({scaleY:43.4,skewX:0.3,x:-80.9,y:231.1},0).wait(1).to({scaleY:49.1,x:-81,y:252.1},0).wait(1).to({scaleY:55.38,skewX:0.4,x:-81.1,y:275.1},0).wait(1).to({scaleY:62.38,x:-81.3,y:300.8},0).wait(1).to({scaleY:70.39,skewX:0.5,x:-81.5,y:330.3},0).wait(1).to({scaleY:80.1,x:-81.7,y:365.9},0).to({scaleY:1,skewX:0,x:-80,y:75.5},1).wait(1).to({scaleY:1.01},0).wait(1).to({scaleY:1.05,y:75.7},0).wait(1).to({scaleY:1.13,y:76},0).wait(1).to({scaleY:1.26,y:76.4},0).wait(1).to({scaleY:1.43,y:77.1},0).wait(1).to({scaleY:1.67,y:78},0).wait(1).to({scaleY:1.98,y:79.1},0).wait(1).to({scaleY:2.36,y:80.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.8,74.5,94.8,175.4);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(54.6,54.6,1,1,0,0,0,54.6,54.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.15,scaleY:1.15},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109.2,109.2);


(lib.Символ10копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7копия();
	this.instance.setTransform(649.3,-146.8,0.037,0.034,0,0,180,121,128.1);

	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(1160.1,57,0.973,0.879,0,0,180,120.5,128.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},77).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:120.5,regY:128.5,scaleX:0.97,scaleY:0.88,x:1160.1,y:57},77).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(644.8,-151.1,9.2,8.6);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(653.8,-151.1,0.037,0.034,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:121,regY:128.1,x:649.3,y:-146.8},20).to({regX:120.5,regY:128.5,scaleX:0.97,scaleY:0.88,x:117.3,y:113},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(644.9,-151.1,8.9,8.6);


(lib.Символ4копия = function() {
	this.initialize();

	// Символ 5
	this.instance = new lib.Символ5копия();
	this.instance.setTransform(206.7,256.1,1,1,0,0,0,136.5,172);

	// Символ 7
	this.instance_1 = new lib.Символ10копия2();
	this.instance_1.setTransform(-325,308.8,1,1,0,0,0,117.3,113);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(172.3,42.7,39.4,11.6);


(lib.Символ4 = function() {
	this.initialize();

	// Символ 5
	this.instance = new lib.Символ5копия2();
	this.instance.setTransform(206.7,256.1,1,1,0,0,0,136.5,172);

	// Символ 7
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(-325,308.8,1,1,0,0,0,117.3,113);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(202.6,41.4,112.4,11.9);


(lib.Анимация16 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(-126.5,0,1,1,180,0,0,54.6,54.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(126.6,0,1,1,0,0,0,54.6,54.6);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-189.5,-62.9,379,125.9);


(lib.Анимация15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(-126.5,0,1,1,180,0,0,54.6,54.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(126.6,0,1,1,0,0,0,54.6,54.6);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-189.5,-62.9,379,125.9);


(lib.Symbol24копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AisAkIAAhHIFYAAIAABH");
	this.shape.setTransform(554,-500.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AirC8IAAl3IFXAAIAAF3g");
	this.shape_1.setTransform(554,-477.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},80).wait(60));

	// Layer 1
	this.instance = new lib.sprite64();
	this.instance.setTransform(-48.8,-47.4,0.022,0.022);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-0.1,scaleX:2.25,scaleY:2.25,x:288.1,y:280.7},79).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.8,-505,622.1,458.6);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Aisi7IFYAAIAAF3IlYAAg");
	this.shape.setTransform(554,-485.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AirC8IAAl3IFXAAIAAF3g");
	this.shape_1.setTransform(-543.5,-459.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},80).wait(4));

	// Layer 1
	this.instance = new lib.sprite64();
	this.instance.setTransform(-77.4,-47.4,0.022,0.022);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({regY:-0.1,scaleX:2.25,scaleY:2.25,x:-404.9,y:247.6},79).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-560.8,-505,1133.1,64.6);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Beginning();
	this.instance.setTransform(398.7,126.9,1.012,1.436,0,-12,-176.7,-67.4,161.4);

	this.instance_1 = new lib.Beginning();
	this.instance_1.setTransform(238.8,119.8,1.009,1.414,0,16.3,0.3,-67.8,161.3);

	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(322,116.1,1,1,0,0,0,322,116.1);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106.9,-389.8,861.6,750);


(lib.sprite112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.setTransform(1.5,21.8,0.85,0.85,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[1.5,21.7,1.5,21.3,1.5,20.9,1.5,15.3,5.6,11.2,9.7,7.1,15.3,7.1,21.1,7.1,25.2,11.2,29.3,15.3,29.3,20.9,29.3,26.7,25.2,30.8,21.1,34.9,15.3,34.9,9.7,34.9,5.6,30.8,3.3,28.5,2.3,25.7]}},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-3.7,51,51);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Symbol24копия();
	this.instance.setTransform(653.8,615,1.1,1.1,0,0,0,49,55);

	this.instance_1 = new lib.Symbol24();
	this.instance_1.setTransform(670.9,615,1.1,1.1,0,0,0,49,55);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.5,1246,504);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(347.1,199.4,0.998,1,0,0,0,322,116.1);

	this.instance_1 = new lib.shape216("synched",0);
	this.instance_1.setTransform(350,5.1,0.688,0.688,0,0,0,0,-130.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-81.1,-306.5,860.3,750);


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


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(12));

	// Слой 2
	this.instance = new lib.Анимация15("synched",0);
	this.instance.setTransform(-391.9,280);

	this.instance_1 = new lib.Анимация16("synched",0);
	this.instance_1.setTransform(-391.9,156.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:156.5},11).to({_off:false,y:280},11).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},11).to({_off:true,y:280},11).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ21();
	this.instance_2.setTransform(65.7,65.7,1,1,0,0,0,65.7,65.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-162.3},11).to({x:65.7},11).wait(1));

	// Слой 7
	this.cir = new lib.sprite113();
	this.cir.setTransform(-118.5,162.1,0.679,0.679,0,0,0,27.6,27.6);

	this.timeline.addTween(cjs.Tween.get(this.cir).to({x:5},11).to({x:-118.5},11).wait(1));

	// Слой 6
	this.instance_3 = new lib.Символ28();
	this.instance_3.setTransform(-387.4,-142.7,1,1,0,0,0,91.3,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-72.4},11).to({y:-142.7},11).wait(1));

	// Слой 5
	this.instance_4 = new lib.Символ26();
	this.instance_4.setTransform(-371.6,-72.5,1,1,0,0,0,146.6,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-148.5},11).to({y:-72.5},11).wait(1));

	// Слой 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("Eg2vAD6IAAnzMBtfAAAIAAHzg");
	this.shape.setTransform(-393.7,-78.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-744.1,-161.9,877,504.8);


// stage content:
(lib.truk3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  
		  function fl_MouseOverHandler_5()
		{
		    _this.rul.gotoAndPlay(1);
		  
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		
		  function fl_MouseOutHandler_2()
		{
		    _this.rul.gotoAndPlay(20);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 8
	this.rul = new lib.Символ20();
	this.rul.setTransform(776.4,164,1,1,0,0,0,65.7,65.7);

	this.timeline.addTween(cjs.Tween.get(this.rul).wait(1));

	// Слой 10
	this.instance = new lib.Символ30();
	this.instance.setTransform(320,152.5,1,1,0,0,0,320,152.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ30(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 7
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(326.7,157.4,1,1,0,0,0,384.1,174);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg7/gbKMB3/AAAMAAAA2VMh3/AAAg");
	this.shape.setTransform(326.7,157.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1}]}).wait(1));

	// Слой 3
	this.instance_2 = new lib.sprite408();
	this.instance_2.setTransform(77.5,258.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 5
	this.instance_3 = new lib.Символ4копия();
	this.instance_3.setTransform(304,191,1,1,0,0,0,136.5,172);

	this.instance_4 = new lib.Символ4();
	this.instance_4.setTransform(136.5,189.2,1,1,0,0,0,136.5,172);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// TO
	this.instance_5 = new lib.Символ3();
	this.instance_5.setTransform(408.5,-126.8,1,1,0,0,0,623,307.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 2
	this.instance_6 = new lib.Символ2();
	this.instance_6.setTransform(320,196.7,1.099,1.099,0,0,0,45.5,70.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// ogr
	this.instance_7 = new lib.Символ11();
	this.instance_7.setTransform(315.3,354.9,1,1,0,0,0,85,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 1
	this.instance_8 = new lib.Символ1();
	this.instance_8.setTransform(325.5,52.3,1,1,0,0,0,349.5,69.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148,-282.1,1499.4,867.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;