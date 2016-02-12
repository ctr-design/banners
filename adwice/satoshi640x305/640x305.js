(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/c3c3.png", id:"c3c3"},
		{src:"images/cx22x2.png", id:"cx22x2"},
		{src:"images/d2d2d.png", id:"d2d2d"},
		{src:"images/f3f3.png", id:"f3f3"},
		{src:"images/g4g4.png", id:"g4g4"},
		{src:"images/g5g5.png", id:"g5g5"},
		{src:"images/h13341.png", id:"h13341"},
		{src:"images/h6h6.png", id:"h6h6"},
		{src:"images/j7j7.png", id:"j7j7"},
		{src:"images/z1zz1.png", id:"z1zz1"}
	]
};



// symbols:



(lib.c3c3 = function() {
	this.initialize(img.c3c3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,122);


(lib.cx22x2 = function() {
	this.initialize(img.cx22x2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,79);


(lib.d2d2d = function() {
	this.initialize(img.d2d2d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,117);


(lib.f3f3 = function() {
	this.initialize(img.f3f3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,256);


(lib.g4g4 = function() {
	this.initialize(img.g4g4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,257);


(lib.g5g5 = function() {
	this.initialize(img.g5g5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,256);


(lib.h13341 = function() {
	this.initialize(img.h13341);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,267,103);


(lib.h6h6 = function() {
	this.initialize(img.h6h6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,133);


(lib.j7j7 = function() {
	this.initialize(img.j7j7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,396,106);


(lib.z1zz1 = function() {
	this.initialize(img.z1zz1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,918,306);


(lib.Символ22 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AZbBHIgNgGIgMgIQgGgFgEgGQgFgGgCgHQgEgHgBgJQgCgIAAgJQAAgxBNgaQAKAAATAFIANAGQAGADAGAGQAFAEAFAGIAHANIAFAPQACAJAAAIQAAAzhOAZQgTgBgJgEgAZpgjQgGACgGAFQgFAFgDAHQgEAIAAAIQAAAJAEAIQADAIAFAEQAGAFAGADQAHACAHAAQAIAAAGgCQAHgDAGgFQAFgEADgIQAEgIAAgJQAAgIgEgIQgDgHgFgFQgGgFgHgCQgGgDgIAAQgHAAgHADgANXBHIgNgGIgMgIIgKgLQgEgGgDgHQgEgHgBgJQgCgIAAgJQAAgxBNgaQAKAAATAFIANAGQAHADAFAGQAFAEAFAGIAIANIAFAPQABAJAAAIQAAAzhOAZQgTgBgJgEgANmgjQgHACgGAFQgFAFgDAHQgDAIAAAIQAAAJADAIQADAIAFAEQAGAFAHADQAHACAGAAQAIAAAHgCQAHgDAFgFQAFgEADgIQAEgIAAgJQAAgIgEgIQgDgHgFgFQgFgFgHgCQgHgDgIAAQgGAAgHADgAnSBJQgHAAgHgDIgNgGQgHgEgEgFQgGgEgFgGQgEgGgDgGQgEgIgCgIIgBgRIABgRIAGgPQADgHAEgFQAFgGAGgFQAEgEAHgEIANgGIAOgDIAPgBQAMAAALACQAMAEAKAGQAMALAEAHIAGALIAEAOIgnAAQgBgFgDgEQgEgFgEgCQgEgDgFgBIgLgCQgJABgHADQgHACgFAGQgFAFgCAIQgDAHAAAIQAAAIACAHQADAHAFAFQAFAHAHACQAHAEAJAAIALgBQAGgCAEgDQAFgDADgEIAEgLIAmAAQgBAIgCAHIgGAMIgHAKIgKAIQgJAHgMADQgMADgMAAgA5CBJQgHAAgGgDIgOgGQgGgEgFgFQgGgEgEgGQgFgGgDgGQgDgIgCgIQgCgIAAgJQAAgIACgJIAFgPQADgHAFgFQAEgGAGgFIALgIIAOgGIANgDIAPgBQAMAAAMACQALAEAKAGQAMALAFAHIAGALIADAOIgmAAQgCgFgDgEQgDgFgEgCQgFgDgFgBIgLgCQgIABgIADQgHACgEAGQgFAFgDAIQgDAHAAAIQAAAIADAHQADAHAFAFQAEAHAHACQAIAEAIAAIALgBQAGgCAEgDQAFgDADgEQADgFABgGIAnAAQgBAIgDAHIg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");
	this.shape.setTransform(-32.8,-90.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-332.9,-98.1,600.3,15.3);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AbfBRQgHgCgHgFQgHgEgGgFIgLgMQgFgHgEgIQgDgJgCgJQgCgKAAgKQAAg5BWgdQALAAAVAGIAOAHQAHAEAGAFIALAMQAFAHAEAIQADAJACAJQACAKAAAJQAAA6hWAdQgWgCgKgEgAbwgpQgIADgGAFQgGAGgDAJQgEAJAAAJQAAAKAEAKQADAIAGAGQAGAFAIADQAHADAIAAQAIAAAHgDQAIgDAGgFQAGgGAEgIQADgKAAgKQAAgJgDgJQgEgJgGgGQgGgFgIgDQgHgDgIAAQgIAAgHADgAo/BTQgMgEgIgIQgJgHgFgLIgDgLIgCgNIAAg5QAAgJAFgQQAFgKAJgIQAIgHAMgEQALgEANAAQANAAALAEQAMAEAIAHQAJAIAFAKQAFAQAAAJIAAA5IgBANIgEALQgFALgJAHQgIAIgMAEQgLAEgNAAQgNAAgLgEgAo3gqQgGAFAAAKIAAA3QAAAKAGAFQAGAFAKAAQAKAAAGgFQAGgFAAgKIAAg3QAAgKgGgFQgGgGgKAAQgKAAgGAGgArUBTQgKgEgHgHQgIgHgEgKQgFgLAAgMIAlAAQAAAIAFAEQAFAFAJAAQAJAAAFgFQAFgGAAgKQAAgHgEgFQgEgEgHgCQgGgCgJAAIgqABIAAhcIBoAAIAAAlIhFAAIAAAVQARgBAMABQAOACALAGQAFADAEAEIAIAKQADAEACAHQACAIAAAJQAAALgEAKQgEALgHAIQgIAJgLAEQgQAGgJAAQgMAAgLgEgA5yBRQgHgCgHgFQgHgEgGgFIgLgMQgFgHgEgIQgDgJgCgJQgCgKAAgKQAAg5BWgdQALAAAVAGIAOAHQAHAEAGAFIALAMQAFAHAEAIQADAJACAJQACAKAAAJQAAA6hWAdQgWgCgKgEgA5hgpQgIADgGAFQgGAGgDAJQgEAJAAAJQAAAKAEAKQADAIAGAGQAGAFAIADQAHADAIAAQAIAAAHgDQAIgDAGgFQAGgGAEgIQADgKAAgKQAAgJgDgJQgEgJgGgGQgGgFgIgDQgHgDgIAAQgIAAgHADgALqBUIgPgEIgPgHIgNgJQgGgGgFgHQgFgGgDgIQgEgIgCgKQgCgJAAgKQAAgJACgKQACgJAEgIQADgIAFgHQAFgHAGgFIANgKQAHgEAIgCIAPgEIAQgCQAOAAAMAEQAOAEAKAHQAOAMAFAIQAEAGACAHIAEAQIgqAAQgCgGgEgFQgDgFgFgDQgFgDgFgBQgGgCgHAAQgJAAgIAEQgIADgFAGQgGAHgDAIQgDAJAAAJQAAAIADAJQADAIAGAHQAFAGAIAEQAIAEAJAAQAHAAAGgCQAGgCAFgDQAFgDADgFQAEgGACgGIAqAAQgBAIgDAIQgCAIgEAGIgJAMIgKAJQgLAHgNAEQgNAEgOAAgAC1BUIgPgEIgPgHIgNgJQgGgGgFgHQgFgGgDgIQgEgIgCgKQgCgJAAgKQAAgJACgKQACgJAEgIQADgIAFgHQAFgHAGgFIANgKQAHgEAIgCIAPgEIAQgCQAOAAAMAEQAOAEAKAHQAOAMAFAIQAEAGACAHIAEAQIgqAAQgCgGgEgFQgDgFgFgDQgFgDgFgBQgGgCgHAAQgJAAgIAEQgIADgFAGQgGAHgDAIQgDAJAAAJQAAAIADAJQADAIAGAHQAFAGAIAEQAIAEAJAAQAHAAAGgCQAGgCAFgDQAFgDADgFQAEgGACgGIAqAAQgBAIgDAIQgCAIgEAGIgJAMIgKAJQgLAHgNAEQgNAEgOAAgAZdBTIAAhDIg0AAIAABDIgsAAIAAimIAsAAIAAA9IA0AAIAAg9IAsAAIAACmgAWPBTIAAh/IgpAAIAAgnIB8AAIAAAnIgpAAIAAB/gAU2BTIgJgVIhDAAIgKAVIgqAAIAAgGIBMiiIATAAIBLCiIAAAGgAUfAZIgUgqIgTAqIAnAAgASMBTIgrhgIgrBgIgqAAIAAgGIBMiiIASAAIBMCiIAAAGgAPLBTIAAh+Ig0AAIAAB+IgsAAIAAimICMAAIAACmgAIeBTIAAimIBpAAIAAAnIg+AAIAAAXIA5AAIAAAlIg5AAIAAAdIBAAAIAAAmgAF4BTIAAimIB4AAIAAAnIhNAAIAAAUIAfAAQAKAAAQAFQALAEAIAIQAHAHAEAIQAEAKAAALQAAAKgEAKQgEAKgHAHQgIAIgLAEQgQAFgKAAgAGjAtIAeAAQAJAAAFgFQAEgFAAgHQAAgGgEgFQgFgFgJAAIgeAAgAALBTIAAh/IgnAAIAAgnIB7AAIAAAnIgpAAIAAB/gAiwBTIAAimIBIAAQALAAAJAEQAKAEAHAHQAHAHAEAJQAEAKAAALQAAAIgDAIQgEAIgGAFQAKADAFAJQAFAJAAALQAAALgDAKQgEAKgGAHQgHAHgKAEQgKAEgMAAgAiGAtIAiAAQAGAAAEgEQADgEAAgGQAAgGgDgEQgEgEgGAAIgiAAgAiGgRIAbAAQAGAAADgEQAEgEAAgGQAAgFgEgEQgDgEgGAAIgbAAgAkGBTIAAhLIgkAmIgFAAIgjgmIAABLIgsAAIAAimIAQAAIBCBJIBChJIAQAAIAACmgAuHBTIAAhSIhUBSIgQAAIAAimIAsAAIAABTIBVhTIAQAAIAACmgAxBBTIAAg6IgJAAQgLAAgJgCIgRgEQgHgDgGgEQgGgEgFgGQgFgDgDgHQgEgHgCgIQgDgLgBgcIAAgVIAsAAIAAAVQABAaAEAJQAEAGAHADQAHAEANAAIAIAAIAAhFIAsAAIAACmgA0nBTIAAgEIAag3Ig4hkIAAgHIAwAAIAfA+IACAAIAcg+IAvAAIAAAHIhQCfgA1xBTIgrhgIgrBgIgqAAIAAgGIBMiiIASAAIBMCiIAAAGgA70BTIAAh+Ig0AAIAAB+IgsAAIAAimICMAAIAACmg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-187.7,-8.7,375.6,17.5);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-208.6,-21.7,417.2,43.3);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4ABIi7h8IHmB7InmB8g");
	this.shape.setTransform(-6.2,-10.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.6,-22.8,48.8,24.9);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.h13341();
	this.instance.setTransform(-133.5,-51.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-133.5,-51.5,267,103);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.z1zz1, null, new cjs.Matrix2D(0.85,0,0,0.85,-390,-130)).s().p("EA1UAUTMhnHAAAIrIAAMAAAgomMB53AAAMAAAAomg");
	this.shape.setTransform(-12.1,-125.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.z1zz1, null, new cjs.Matrix2D(-0.719,0,0,-0.719,330,102.4)).s().p("EgzjAQAIAA//MBnHAAAIAAf/g");
	this.shape_1.setTransform(-0.9,107);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-402.1,-255.4,780,464.8);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.cx22x2();
	this.instance.setTransform(-22.5,-22.5,0.57,0.57);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.5,-22.5,45,45);


(lib.Символ11копия6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.d2d2d();
	this.instance.setTransform(-28.6,-39.8,0.681,0.681);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.6,-39.8,57.2,79.7);


(lib.Символ11копия5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.d2d2d();
	this.instance.setTransform(-28.6,-39.8,0.681,0.681);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.6,-39.8,57.2,79.7);


(lib.Символ11копия3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.d2d2d();
	this.instance.setTransform(-28.6,-39.8,0.681,0.681);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.6,-39.8,57.2,79.7);


(lib.Символ11копия = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.d2d2d();
	this.instance.setTransform(-28.6,-39.8,0.681,0.681);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.6,-39.8,57.2,79.7);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.d2d2d();
	this.instance.setTransform(-28.6,-39.8,0.681,0.681);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.6,-39.8,57.2,79.7);


(lib.Символ2копия6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkdGOIAAsbII7AAIAAMbg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ2копия5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkdGOIAAsbII7AAIAAMbg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ2копия3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkdGOIAAsbII7AAIAAMbg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ2копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkdGOIAAsbII7AAIAAMbg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkdGOIAAsbII7AAIAAMbg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance_1 = new lib.f3f3();
	this.instance_1.setTransform(-86.5,-128);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-86.5,-128,173,256);


(lib.Анимация19 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.c3c3();
	this.instance.setTransform(-26.7,-39.7,0.651,0.651);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.7,-39.7,53.4,79.4);


(lib.Анимация17 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.g5g5();
	this.instance.setTransform(-26.8,-39.9,0.312,0.312);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.8,-39.9,53.7,79.9);


(lib.Анимация26 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.h6h6();
	this.instance.setTransform(-26.7,-39.9,0.6,0.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.7,-39.9,53.4,79.8);


(lib.Анимация15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.g4g4();
	this.instance.setTransform(-27,-40.3,0.314,0.314);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27,-40.3,54,80.7);


(lib.Анимация14 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.g4g4();
	this.instance.setTransform(-27,-40.3,0.314,0.314);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27,-40.3,54,80.7);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(0.6,-74.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.11,scaleY:1.11},9,cjs.Ease.get(-1)).to({scaleX:1.23,scaleY:1.23},10,cjs.Ease.get(1)).to({scaleX:1.12,scaleY:1.12},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.2,-83.1,375.5,17.5);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ15();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-187.2,-83.1,375.5,17.5);


(lib.Символ11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ10();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:26},7,cjs.Ease.get(-1)).to({x:52},7,cjs.Ease.get(1)).to({x:24.3},8,cjs.Ease.get(-1)).to({x:0},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,-22.8,48.8,24.9);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ9();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-133.5,-51.5,267,103);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(-0.2,-6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.09,scaleY:1.09},9,cjs.Ease.get(-1)).to({scaleX:1.2,scaleY:1.2},10,cjs.Ease.get(1)).to({scaleX:1.1,scaleY:1.1,x:-0.3},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:-0.2},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208.8,-28.5,417.2,43.4);


(lib.Символ2_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.shadow = new cjs.Shadow("#000000",0,0,5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.5,-25.5,54,54);


(lib.Символ7копия6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ11копия6();
	this.instance.setTransform(0,0.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.6,-39.8,57.2,79.7);


(lib.Символ7копия5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ11копия5();
	this.instance.setTransform(0,0.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.6,-39.8,57.2,79.7);


(lib.Символ7копия3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ11копия3();
	this.instance.setTransform(0,0.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.6,-39.8,57.2,79.7);


(lib.Символ7копия = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ11копия();
	this.instance.setTransform(0,0.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.6,-39.8,57.2,79.7);


(lib.Символ7_1 = function() {
	this.initialize();

	// Слой 1
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(0,0.1);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.6,-39.8,57.2,79.7);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация19("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.7,-39.7,53.4,79.4);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(21));

	// Символ 11
	this.instance = new lib.Символ11_1();
	this.instance.setTransform(267,0,1,1,180,0,0,-6.2,-10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:635},19).to({x:267},20).wait(1));

	// Символ 11
	this.instance_1 = new lib.Символ11_1();
	this.instance_1.setTransform(-260.7,10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-6.2,regY:-10.4,x:-522.9,y:0},19).to({x:-266.9},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-291.3,-12.4,582.7,24.9);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1,y:-1.4},7,cjs.Ease.get(-1)).to({scaleX:1.06,scaleY:1.01,y:-3},7,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1,y:-1.6},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.5,-51.5,267,103);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30).call(this.frame_30).wait(31));

	// Слой 2
	this.instance = new lib.Символ13();
	this.instance.setTransform(-4.2,138.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({y:45.8},8).to({y:66.1},3).wait(1).to({y:45.8},3).to({y:138.1},8).to({_off:true},1).wait(18));

	// Слой 1
	this.instance_1 = new lib.Символ5();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-25.1},2).to({y:160},12).wait(32).to({y:-25.1},11).to({y:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208.8,-28.5,417.2,43.4);


(lib.Символ3_1 = function() {
	this.initialize();

	// Слой 1
	this.instance_1 = new lib.Символ2_1();
	this.instance_1.setTransform(27.4,12.5,1,1,19.7);

	this.instance_2 = new lib.Символ2_1();
	this.instance_2.setTransform(27.5,9.4,1,1,-40.3);

	this.instance_3 = new lib.Символ2_1();
	this.instance_3.setTransform(30.4,7.7,1,1,-10.3);

	this.instance_4 = new lib.Символ2_1();
	this.instance_4.setTransform(33,6.2,1,1,-30);

	this.instance_5 = new lib.Символ2_1();
	this.instance_5.setTransform(-32,-9.5,1,1,49.7);

	this.instance_6 = new lib.Символ2_1();
	this.instance_6.setTransform(-30.3,-12.2,1,1,-10.3);

	this.instance_7 = new lib.Символ2_1();
	this.instance_7.setTransform(-27,-12.2,1,1,19.7);

	this.instance_8 = new lib.Символ2_1();
	this.instance_8.setTransform(-24,-12.2);

	this.addChild(this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-66.7,-44.2,136.9,92);


(lib.Символ8копия6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(18));

	// Символ 7
	this.instance = new lib.Символ7копия6();

	this.instance_1 = new lib.Анимация26("synched",0);
	this.instance_1.setTransform(-8.2,0.3,0.03,1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.03,x:-7.8},9,cjs.Ease.get(-1)).to({_off:true},1).wait(19).to({_off:false},0).to({scaleX:1,x:0},8,cjs.Ease.get(1)).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({scaleX:1,x:-0.2},10,cjs.Ease.get(1)).to({scaleX:0.03,x:-8.2},8,cjs.Ease.get(-1)).to({_off:true},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.6,-39.8,57.2,79.7);


(lib.Символ8копия3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(18));

	// Символ 7
	this.instance = new lib.Символ7копия3();

	this.instance_1 = new lib.Анимация17("synched",0);
	this.instance_1.setTransform(-7.6,0,0.03,1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.03,x:-7.8},9,cjs.Ease.get(-1)).to({_off:true},1).wait(19).to({_off:false},0).to({scaleX:1,x:0},8,cjs.Ease.get(1)).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({scaleX:1,x:-0.4},10,cjs.Ease.get(1)).to({scaleX:0.03,x:-7.8},8,cjs.Ease.get(-1)).to({_off:true},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.6,-39.8,57.2,79.7);


(lib.Символ8копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(19));

	// Символ 7
	this.instance = new lib.Символ7копия();

	this.instance_1 = new lib.Анимация14("synched",0);
	this.instance_1.setTransform(-7.6,0,0.03,1);
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация15("synched",0);
	this.instance_2.setTransform(-0.2,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.03,x:-7.8},9,cjs.Ease.get(-1)).to({_off:true},1).wait(20).to({_off:false},0).to({scaleX:1,x:0},8,cjs.Ease.get(1)).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({scaleX:1,x:-0.2},11,cjs.Ease.get(1)).to({_off:true},1).to({_off:false,scaleX:0.03,x:-7.6},7,cjs.Ease.get(-1)).to({_off:true},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).to({_off:true,scaleX:0.03,x:-7.6},7,cjs.Ease.get(-1)).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.6,-39.8,57.2,79.7);


(lib.Символ8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(18));

	// Символ 7
	this.instance_1 = new lib.Символ7_1();

	this.instance_2 = new lib.Символ1_1();
	this.instance_2.setTransform(-7.9,0.4,0.008,0.314);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.03,x:-7.8},9,cjs.Ease.get(-1)).to({_off:true},1).wait(18).to({_off:false},0).to({scaleX:1,x:0},9,cjs.Ease.get(1)).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({scaleX:0.31,x:-0.4},10,cjs.Ease.get(1)).wait(1).to({scaleX:0.01,x:-7.9},6,cjs.Ease.get(-1)).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.6,-39.8,57.2,79.7);


(lib.Символ4_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.7,-39.7,53.4,79.4);


(lib.Анимация21 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.j7j7();
	this.instance.setTransform(-289.8,-124.9,0.449,0.449);

	this.instance_1 = new lib.Символ3_1();
	this.instance_1.setTransform(175.2,-83.7,0.576,0.576);

	this.instance_2 = new lib.Символ3_1();
	this.instance_2.setTransform(203.7,-101.2,0.576,0.576);

	this.instance_3 = new lib.Символ4();

	this.instance_4 = new lib.Символ22();
	this.instance_4.setTransform(12.7,119.2);
	this.instance_4.alpha = 0;

	this.instance_5 = new lib.Символ20();
	this.instance_5.setTransform(23.7,217.3);

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-402.1,-255.4,780,464.8);


(lib.Символ8копия5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(18));

	// Символ 7
	this.instance = new lib.Символ7копия5();

	this.instance_1 = new lib.Символ4_1();
	this.instance_1.setTransform(-8.4,-0.1,0.03,1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.03,x:-7.8},9,cjs.Ease.get(-1)).to({_off:true},1).wait(19).to({_off:false},0).to({scaleX:1,x:0},8,cjs.Ease.get(1)).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({scaleX:1,x:-0.4},10,cjs.Ease.get(1)).to({scaleX:0.03,x:-8.4},8,cjs.Ease.get(-1)).to({_off:true},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.6,-39.8,57.2,79.7);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(7));

	// Слой 9
	this.arrows = new lib.Символ12();
	this.arrows.setTransform(445.2,29.2);

	this.timeline.addTween(cjs.Tween.get(this.arrows).to({scaleX:1.14,scaleY:1.14,x:443.8,y:32.2},6).to({scaleX:1,scaleY:1,x:445.2,y:29.2},6).wait(1));

	// card11
	this.card5 = new lib.Символ8копия6();
	this.card5.setTransform(587.1,28.5);

	this.timeline.addTween(cjs.Tween.get(this.card5).to({scaleX:1.14,scaleY:1.14,x:605,y:31.4},6).to({scaleX:1,scaleY:1,x:587.1,y:28.5},6).wait(1));

	// card11
	this.card4 = new lib.Символ8копия5();
	this.card4.setTransform(516.6,28.5);

	this.timeline.addTween(cjs.Tween.get(this.card4).to({scaleX:1.14,scaleY:1.14,x:524.9,y:31.4},6).to({scaleX:1,scaleY:1,x:516.6,y:28.5},6).wait(1));

	// card11
	this.card3 = new lib.Символ8копия3();
	this.card3.setTransform(447,28.5);

	this.timeline.addTween(cjs.Tween.get(this.card3).to({scaleX:1.14,scaleY:1.14,x:445.9,y:31.4},6).to({scaleX:1,scaleY:1,x:447,y:28.5},6).wait(1));

	// card211
	this.card2 = new lib.Символ8копия();
	this.card2.setTransform(377,28.5);

	this.timeline.addTween(cjs.Tween.get(this.card2).to({scaleX:1.14,scaleY:1.14,x:366.3,y:31.4},6).to({scaleX:1,scaleY:1,x:377,y:28.5},6).wait(1));

	// card11
	this.card1 = new lib.Символ8_1();
	this.card1.setTransform(307,28.5);

	this.timeline.addTween(cjs.Tween.get(this.card1).to({scaleX:1.14,scaleY:1.14,x:286.8,y:31.4},6).to({scaleX:1,scaleY:1,x:307,y:28.5},6).wait(1));

	// Анимация 20
	this.text = new lib.Символ6();
	this.text.setTransform(448.9,137.3);

	this.timeline.addTween(cjs.Tween.get(this.text).to({scaleX:1.26,scaleY:1.26},6).to({scaleX:1,scaleY:1},6).wait(1));

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(446.4,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.14,scaleY:1.14,x:445.2,y:-103.2},6).to({scaleX:1,scaleY:1,x:446.4,y:-90},6).wait(1));

	// Слой 3
	this.instance_1 = new lib.Анимация21("synched",0);
	this.instance_1.setTransform(455.6,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.1,scaleY:1.1},6).to({scaleX:1,scaleY:1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(53.5,-248.4,780,464.8);


// stage content:



(lib._640x305 = function(mode,startPosition,loop) {
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
		
		
		
		var _this = this;
		
		//carta1/////////////////////////
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn.addEventListener("mouseover", fl_MouseOverHandler_4);
		
		function fl_MouseOverHandler_4()
		{
			_this.main.card1.gotoAndPlay(1);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn.addEventListener("mouseout", fl_MouseOutHandler_5);
		
		function fl_MouseOutHandler_5()
		{
		    _this.main.card1.gotoAndPlay(22);
		}
		
		//carta2/////////////////////////
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn1.addEventListener("mouseover", fl_MouseOverHandler_14);
		
		function fl_MouseOverHandler_14()
		{
			_this.main.card2.gotoAndPlay(1);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn1.addEventListener("mouseout", fl_MouseOutHandler_15);
		
		function fl_MouseOutHandler_15()
		{
		    _this.main.card2.gotoAndPlay(22);
		}
		
		//carta3/////////////////////////
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn2.addEventListener("mouseover", fl_MouseOverHandler_24);
		
		function fl_MouseOverHandler_24()
		{
			_this.main.card3.gotoAndPlay(1);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn2.addEventListener("mouseout", fl_MouseOutHandler_25);
		
		function fl_MouseOutHandler_25()
		{
		    _this.main.card3.gotoAndPlay(22);
		}
		
		//carta4/////////////////////////
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn3.addEventListener("mouseover", fl_MouseOverHandler_34);
		
		function fl_MouseOverHandler_34()
		{
			_this.main.card4.gotoAndPlay(1);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn3.addEventListener("mouseout", fl_MouseOutHandler_35);
		
		function fl_MouseOutHandler_35()
		{
		    _this.main.card4.gotoAndPlay(22);
		}
		
		//carta5/////////////////////////
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn4.addEventListener("mouseover", fl_MouseOverHandler_44);
		
		function fl_MouseOverHandler_44()
		{
			_this.main.card5.gotoAndPlay(1);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn4.addEventListener("mouseout", fl_MouseOutHandler_45);
		
		function fl_MouseOutHandler_45()
		{
		    _this.main.card5.gotoAndPlay(22);
		}
		
		///////////////////////////////////////////////////////////////////////////
		
		stage.canvas.onmouseover = fl_MouseOverHandler_55;
		
		function fl_MouseOverHandler_55()
		{
		    _this.main.text.gotoAndPlay(1);
			 _this.main.arrows.gotoAndPlay(1);
			 _this.main.gotoAndPlay(1);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_52;
		
		 function fl_MouseOutHandler_52()
		{
		    _this.main.text.gotoAndPlay(30);
		   _this.main.arrows.gotoAndPlay(20);
			 _this.main.gotoAndPlay(7);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 12
	this.btn4 = new lib.Символ2копия6();
	this.btn4.setTransform(457.9,162.1,1.147,1.147);
	new cjs.ButtonHelper(this.btn4, 0, 1, 2, false, new lib.Символ2копия6(), 3);

	this.btn3 = new lib.Символ2копия5();
	this.btn3.setTransform(387.4,162.1,1.147,1.147);
	new cjs.ButtonHelper(this.btn3, 0, 1, 2, false, new lib.Символ2копия5(), 3);

	this.btn2 = new lib.Символ2копия3();
	this.btn2.setTransform(317.9,162.1,1.147,1.147);
	new cjs.ButtonHelper(this.btn2, 0, 1, 2, false, new lib.Символ2копия3(), 3);

	this.btn1 = new lib.Символ2копия();
	this.btn1.setTransform(247.9,162.1,1.147,1.147);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.Символ2копия(), 3);

	this.btn = new lib.Символ2();
	this.btn.setTransform(177.8,162.1,1.147,1.147);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.Символ2(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn},{t:this.btn1},{t:this.btn2},{t:this.btn3},{t:this.btn4}]}).wait(1));

	// Слой 11
	this.main = new lib.Символ17();
	this.main.setTransform(-128.9,133.3);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(244.6,37.3,780,464.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;