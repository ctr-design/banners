(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FF0000",
	manifest: [
		{src:"images/back.jpg", id:"back"},
		{src:"images/bbb.png", id:"bbb"},
		{src:"images/body.png", id:"body"},
		{src:"images/bubs.png", id:"bubs"},
		{src:"images/glaz.png", id:"glaz"},
		{src:"images/hand1.png", id:"hand1"},
		{src:"images/hand2.png", id:"hand2"},
		{src:"images/pr1.png", id:"pr1"},
		{src:"images/tatu.png", id:"tatu"},
		{src:"images/ubka.png", id:"ubka"},
		{src:"images/w256h2561380453915MouseOptions256x25632.png", id:"w256h2561380453915MouseOptions256x25632"}
	]
};



// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.bbb = function() {
	this.initialize(img.bbb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,91);


(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,353);


(lib.bubs = function() {
	this.initialize(img.bubs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,65);


(lib.glaz = function() {
	this.initialize(img.glaz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,6);


(lib.hand1 = function() {
	this.initialize(img.hand1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,186);


(lib.hand2 = function() {
	this.initialize(img.hand2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,178);


(lib.pr1 = function() {
	this.initialize(img.pr1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,126);


(lib.tatu = function() {
	this.initialize(img.tatu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,144);


(lib.ubka = function() {
	this.initialize(img.ubka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,76);


(lib.w256h2561380453915MouseOptions256x25632 = function() {
	this.initialize(img.w256h2561380453915MouseOptions256x25632);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.Символ41 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.51)").s().p("Eg3SAF8IAAr3MBulAAAIAAL3g");
	this.shape.setTransform(0,-60);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-353.9,-98,708,76);


(lib.Символ40 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.back();
	this.instance.setTransform(-9.4,-165.1,1.116,1.116);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.4,-165.1,714.2,340.4);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.tatu();
	this.instance.setTransform(-31.8,-38,0.573,0.573,-6.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.8,-44,63.7,88.1);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pr1();
	this.instance.setTransform(-8.3,-15.1,0.24,0.24);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.3,-15.1,16.6,30.3);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.498)").s().p("AkkElQh5h6AAirQAAiqB5h6QB6h5CqAAQCrAAB6B5QB5B6AACqQAACrh5B6Qh6B5irAAQiqAAh6h5g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.4,-41.4,82.9,82.9);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.498)").s().p("AlHFIQiIiIAAjAQAAi/CIiIQCIiIC/AAQDAAACICIQCICIAAC/QAADAiICIQiICIjAAAQi/AAiIiIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.4,-46.4,92.9,92.9);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.498)").s().p("At6PXIAA+tIb1AAIAAetg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.498)").s().p("AkcElIgPgIQgHgFAAgDIAAgCIgDgCQADgHAFgFQgBgQABgYQACgngLgTQgPgcg/gWQg1gTAAgeQAJiVAKgqQAEgKAEgiQADggAIgTQAWg3BSgMIABgBIAEgCIAEACIAHgBIADAGIgHABQADAGAKANQAKAOAKAEIAdAQQAUALALgLQB0AZAPAPIAbAfQAMAOAUAGIBAAAQAPgJAPgcQAWgZBNgPIAcgFIAsgHQAIAFAUghQAUghAOABQANACAfAkQAgAlAOAiQAGANAEAaIAGAIQAHAQAAAjQABALgBAIIAAA+IABACQAFAyAAAXQAAAcgvAKIABABIABAFQAAAEgJAJQgIAJgCAUQAAAJgEANQgGAQgGAHQgEAGgGAoQgFAjgHAAQhZAAgIgBIgggNIjvAAQgFACgxABQgCADgEACQgzAAgHAGQgIAHgOAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.2,-29.3,88.5,58.8);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#993399").s().p("AlOBfQgLgCgJgEQgJgEgFgGQgHgHgEgKQgEgJgDgMQgCgMAAgMIABgXQABgMADgLQADgLAEgJQALgYAVgJQALgEANgCQAMgCAMAAIARAAIAXgFIAJA9IgUAAIgJghIgPABIgZAEIABAAQgWAGgGAVQgGASgBATQgBAVAGAUQAEAKAHAGQAHAGAKADQAJADALABIAVAAIAKgjIAUAAIgIA0IgiAGIgXABQgMAAgLgBgAgCBUIACgKIAOgEIAAgjIgYAAIgOA4IgtAAIAAgRIACAAIAMgDIAGgVQADgKAAgOQgGgEgDgFIgFgLQgCgGgBgFIgBgPQABgOAGgMQAFgMAKgJQAKgIANgFQAOgFAOgBIA2gEIAAAWIgPADIAACIIAPADIAAARIg2ABIgLABgAAAgtIgJABQgGACgEAEQgEADgDAFQgDAFAAAJQAAAHADAFQADAEAFABQAFADAGACIAJABIAJAAIADAAIAAg1gAEDBbIAAgRIAQgEIAAiHIgQgDIAAgWIAxAEIABA4IAiABQAIABAIADQAIAEAHAFQAIAIAEAJQAEAMgBANQAAAMgEAMQgFALgHAJQgJAIgLAFQgLAFgMACQgMACgNAAgAE0A3IAPAAIAKgBQAGgCAEgEQAEgDADgGQADgEAAgJQAAgGgDgDQgCgEgFgDIgKgDIgTgEQgEAAgCgCgACABbIAAgQIAPgFIAAiEIgpgEIgKAjIgUAAIAJg7IAAAAIA1AEIBrAAIAIA3IgUAAIgKgkIgqAFIAACEIAPAFIAAAQgAiPBbIAAgRIAQgDIAAhAIg8AAIAABAIAQADIAAARIhCAAIAAgRIAQgDIAAiIIgQgDIAAgWIAyAEIAABHIA8AAIAAhHIAiAAIAACdIAPADIAAARg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.9,-9.6,78,19.3);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#993399").s().p("AlOBfQgLgCgJgEQgJgEgFgGQgHgHgEgKQgEgJgDgMQgCgMAAgMIABgXQABgMADgLQADgLAEgJQALgYAVgJQALgEANgCQAMgCAMAAIARAAIAXgFIAJA9IgUAAIgJghIgPABIgZAEIABAAQgWAGgGAVQgGASgBATQgBAVAGAUQAEAKAHAGQAHAGAKADQAJADALABIAVAAIAKgjIAUAAIgIA0IgiAGIgXABQgMAAgLgBgAgCBUIACgKIAOgEIAAgjIgYAAIgOA4IgtAAIAAgRIACAAIAMgDIAGgVQADgKAAgOQgGgEgDgFIgFgLQgCgGgBgFIgBgPQABgOAGgMQAFgMAKgJQAKgIANgFQAOgFAOgBIA2gEIAAAWIgPADIAACIIAPADIAAARIg2ABIgLABgAAAgtIgJABQgGACgEAEQgEADgDAFQgDAFAAAJQAAAHADAFQADAEAFABQAFADAGACIAJABIAJAAIADAAIAAg1gAEDBbIAAgRIAQgEIAAiHIgQgDIAAgWIAxAEIABA4IAiABQAIABAIADQAIAEAHAFQAIAIAEAJQAEAMgBANQAAAMgEAMQgFALgHAJQgJAIgLAFQgLAFgMACQgMACgNAAgAE0A3IAPAAIAKgBQAGgCAEgEQAEgDADgGQADgEAAgJQAAgGgDgDQgCgEgFgDIgKgDIgTgEQgEAAgCgCgACABbIAAgQIAPgFIAAiEIgpgEIgKAjIgUAAIAJg7IAAAAIA1AEIBrAAIAIA3IgUAAIgKgkIgqAFIAACEIAPAFIAAAQgAiPBbIAAgRIAQgDIAAhAIg8AAIAABAIAQADIAAARIhCAAIAAgRIAQgDIAAiIIgQgDIAAgWIAyAEIAABHIA8AAIAAhHIAiAAIAACdIAPADIAAARg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.9,-9.6,78,19.3);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.51)").s().p("AmcFpQACgBACgEQADgHgQgGQgRgGgNgDQgLgCgJgGQg3AGg6grQgzgmgDgtQgCguAUg2QAUg1AogsQAngqAQgUQAQgUAMghQAJgYAJgKQAKgMAKgZQANgeAGgKIAwhMQADgFAGgjQAEgYAVgGQgIAfA4AiIBoAmIAzAKQACABAFAFQAlgBAVAGQAaAHBFgFQBIgFA1gUQA1gVASgDQASgEAbgMQAWgKAEgEQACgCAIgRQAGgOAJAAQAHAAAGAWQAFAWAqBZQApBZAPAdIAhA/QARAiAfAUQAgAXgFAKQgEAKApA+QA8BBABAVQABAVg2AnQg3AmgrALIhMABIgOAGIlUAAIgJADIhsABQhGAFgUAKQgZANgMACIjIACIgGACg");
	this.shape.setTransform(0.5,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.4,-36.4,127.9,72.9);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ubka();
	this.instance.setTransform(-37,-20.4,0.536,0.536);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37,-20.4,74,40.8);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bubs();
	this.instance.setTransform(-51,-32.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51,-32.5,102,65);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pr1();
	this.instance.setTransform(-16.5,-30.1,0.478,0.478);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.5,-30.1,33,60.3);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.tatu();
	this.instance.setTransform(-25.3,-38,0.528,0.528);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.3,-38,50.7,76);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#993399").s().p("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");
	this.shape.setTransform(-0.8,0.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150.7,-11.1,300,23.4);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bbb();
	this.instance.setTransform(-45.5,-45.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.5,-45.5,91,91);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.glaz();
	this.instance.setTransform(-13,-3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13,-3,26,6);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hand1();
	this.instance.setTransform(-27.5,-93);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-93,55,186);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hand2();
	this.instance.setTransform(-27,-89);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27,-89,54,178);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.body();
	this.instance.setTransform(-83.5,-176.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83.5,-176.5,167,353);


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


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.498)").s().p("AjDBEIAAiHIGHAAIAACHg");
	this.shape.setTransform(-24.3,170.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(20));

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10).to({alpha:0.102},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.9,-44,75.8,221.7);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.498)").s().p("AiUB9IAAj5IEpAAIAAD5g");
	this.shape.setTransform(-1,166.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(12));

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},6).to({alpha:0.102},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-15.1,29.9,194.4);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#993399").s().p("AiQCGIAAkMIEhAAIAAEMg");
	this.shape.setTransform(-515.6,-44.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-530.1,-57.6,574.4,87);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.51)").s().p("AgtBAIAAh/IBbAAIAAB/g");
	this.shape.setTransform(-520.6,-31.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-525.3,-37.8,589.8,74.3);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-10.5},9).to({rotation:0},10).to({rotation:14.7},10).to({rotation:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-20.4,74,40.8);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:9.7},9).to({rotation:0},10).to({rotation:-13.7},10).to({rotation:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-32.5,102,65);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-12.5},9).to({rotation:0},10).to({rotation:17.7},10).to({rotation:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-30.1,33,60.3);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:9.5},9).to({rotation:0},10).to({rotation:-13.2},10).to({rotation:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.3,-38,50.7,76);


(lib.Символ18копия = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ38();
	this.instance.setTransform(-245.6,118.5);

	// Слой 2
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(0.5,0.5);

	// Слой 1
	this.instance_2 = new lib.Символ7();

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-289.5,-45.5,335.1,341.6);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ19();
	this.instance.setTransform(0.5,0.5);

	// Слой 1
	this.instance_1 = new lib.Символ7();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.5,-45.5,91,91);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();

	this.instance_1 = new lib.Символ18копия();
	this.instance_1.setTransform(0,0,1.044,1.044);

	this.instance_2 = new lib.Символ34();
	this.instance_2.setTransform(0.3,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.instance_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,-45.5,91,91);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},9).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.7,-11.1,300,23.4);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(-22.6,-85.5,1,1,0,0,0,-22.6,-85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1.7},29).to({rotation:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-93,55,186);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(16.4,-76.9,1,1,0,0,0,16.4,-76.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3},29).to({rotation:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-89,54,178);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13,-3,26,6);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am0CWIAAkrINpAAIAAErg");
	this.shape.setTransform(-4.9,-221.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},45).wait(24));

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.6,-236.8,87.6,30);


(lib.Символ7копия6 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ21();
	this.instance.setTransform(0.5,0.4);

	// Слой 1
	this.instance_1 = new lib.bbb();
	this.instance_1.setTransform(-45.5,-45.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.5,-45.5,91,91);


(lib.Символ7копия5 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.setTransform(-1.5,1.5,0.707,0.707);

	// Слой 1
	this.instance_1 = new lib.bbb();
	this.instance_1.setTransform(-45.5,-45.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.5,-45.5,91,91);


(lib.Символ7копия4 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ26();
	this.instance.setTransform(1.5,-2.5);

	// Слой 1
	this.instance_1 = new lib.bbb();
	this.instance_1.setTransform(-45.5,-45.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.5,-45.5,91,91);


(lib.Символ7копия3 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ27();
	this.instance.setTransform(254.3,27.7);

	// Слой 2
	this.instance_1 = new lib.Символ26();
	this.instance_1.setTransform(1.5,-2.5);

	// Слой 1
	this.instance_2 = new lib.bbb();
	this.instance_2.setTransform(-45.5,-45.5);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-271,-45.5,589.8,109.6);


(lib.Символ7копия2 = function() {
	this.initialize();

	// Слой 4
	this.instance = new lib.Символ32();
	this.instance.setTransform(248.1,35.4);

	// Слой 3
	this.instance_1 = new lib.Символ30();
	this.instance_1.setTransform(88.9,-0.7);

	// Слой 2
	this.instance_2 = new lib.Символ24();
	this.instance_2.setTransform(-1.5,1.5,0.707,0.707);

	// Слой 1
	this.instance_3 = new lib.bbb();
	this.instance_3.setTransform(-45.5,-45.5);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-282,-45.5,574.4,110.3);


(lib.Символ7копия = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ36();
	this.instance.setTransform(-233.9,18);

	// Слой 2
	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(0.5,0.4);

	// Слой 1
	this.instance_2 = new lib.bbb();
	this.instance_2.setTransform(-45.5,-45.5);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-249.8,-45.5,295.4,242.8);


(lib.Символ2 = function() {
	this.initialize();

	// glaz.png
	this.instance = new lib.Символ8();
	this.instance.setTransform(-11.9,-108.8);

	// Слой 1
	this.instance_1 = new lib.Символ1();

	// hand2.png
	this.instance_2 = new lib.Символ10();
	this.instance_2.setTransform(-64,14.5);

	// hand1.png
	this.instance_3 = new lib.Символ11();
	this.instance_3.setTransform(41.5,22.5);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-91,-345.7,174.5,522.2);


(lib.sprite110 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape109("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.Symbol16 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Tween22("synched",0);
	this.instance.setTransform(30,30);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7копия5();

	this.instance_1 = new lib.Символ7копия2();
	this.instance_1.setTransform(0,0,1.022,1.022);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,-45.5,91,91);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7копия4();

	this.instance_1 = new lib.Символ29();
	this.instance_1.setTransform(89.7,0.4);

	this.instance_2 = new lib.Символ7копия3();
	this.instance_2.setTransform(0,0,1.022,1.022);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,-45.5,91,91);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7копия6();

	this.instance_1 = new lib.Символ7копия();
	this.instance_1.setTransform(0,0,1.044,1.044);

	this.instance_2 = new lib.Символ35();
	this.instance_2.setTransform(0.9,0.5,1.157,1.157);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.instance_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,-45.5,91,91);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5));

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(3.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.53,scaleY:1.53,x:9.4,y:8},4).to({scaleX:1,scaleY:1,x:3.8,y:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.2,-345.7,174.5,522.2);


(lib.sprite112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.setTransform(1.5,21.8,0.85,0.85,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[1.5,21.7,1.5,21.3,1.5,20.9,1.5,15.3,5.6,11.2,9.7,7.1,15.3,7.1,21.1,7.1,25.2,11.2,29.3,15.3,29.3,20.9,29.3,26.7,25.2,30.8,21.1,34.9,15.3,34.9,9.7,34.9,5.6,30.8,3.3,28.5,2.3,25.7]}},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-3.7,51,51);


(lib.sprite113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.sprite112();
	this.instance.setTransform(11.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Layer 1
	this.instance_1 = new lib.sprite110();
	this.instance_1.setTransform(-8.7,-8.7,1.316,1.316);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 153, 51, 153, 0)];
	this.instance_1.cache(-3,-3,62,62);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,51,153,0.498)").s().p("AkMENQhvhvAAieQAAidBvhvQBvhvCdAAQCeAABvBvQBvBvAACdQAACehvBvQhvBvieAAQidAAhvhvg");
	this.shape.setTransform(27.2,26.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1}]}).to({state:[{t:this.shape},{t:this.instance_1}]},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-11.2,78.2,76.9);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.b1.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
		this.girl.gotoAndPlay(1);
		}
		
		this.b1.addEventListener("mouseout", fl_ClickToGoToAndPlayFromFrame_31.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_31()
		{
		this.girl.gotoAndPlay(5);
		}
		
		this.b2.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
		this.girl.gotoAndPlay(1);
		}
		
		this.b2.addEventListener("mouseout", fl_ClickToGoToAndPlayFromFrame_32.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_32()
		{
		this.girl.gotoAndPlay(5);
		}
		
		
		
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 100;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.b4 = new lib.Символ17();
	this.b4.setTransform(70.1,128.5);
	new cjs.ButtonHelper(this.b4, 0, 1, 1);

	this.b3 = new lib.Символ16();
	this.b3.setTransform(66.9,251.8);
	new cjs.ButtonHelper(this.b3, 0, 1, 1);

	this.b2 = new lib.Символ15();
	this.b2.setTransform(570.6,251.8);
	new cjs.ButtonHelper(this.b2, 0, 1, 2, false, new lib.Символ15(), 3);

	this.b1 = new lib.Символ14();
	this.b1.setTransform(570.6,128.5);
	new cjs.ButtonHelper(this.b1, 0, 1, 2, false, new lib.Символ14(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.51)").s().p("AgTAEQAJgKAJgGIANgEIAIAPQgFAMgPAGQgLgFgIgIg");
	this.shape.setTransform(872.9,54.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.b1},{t:this.b2},{t:this.b3},{t:this.b4}]}).wait(1));

	// Слой 4
	this.cir = new lib.sprite113();
	this.cir.setTransform(606.1,10.5,0.344,0.344);

	this.instance = new lib.Символ12();
	this.instance.setTransform(326.5,18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.cir}]}).wait(1));

	// Символ 41
	this.instance_1 = new lib.Символ41();
	this.instance_1.setTransform(316,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ33();
	this.instance_2.setTransform(320,152.5,3.587,1.55);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Символ33(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 2
	this.girl = new lib.Символ6();
	this.girl.setTransform(334.2,206.4);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Слой 1
	this.fon = new lib.Символ40();
	this.fon.setTransform(-10.1,154.5);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(101.8,13.2,1093.1,597.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;