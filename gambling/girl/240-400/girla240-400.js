(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/arrow.png", id:"arrow"},
		{src:"images/ff2.jpg", id:"ff2"},
		{src:"images/fis.png", id:"fis"},
		{src:"images/hed1.png", id:"hed1"},
		{src:"images/hed2.png", id:"hed2"},
		{src:"images/hed3.png", id:"hed3"},
		{src:"images/kist.png", id:"kist"},
		{src:"images/pal1.png", id:"pal1"},
		{src:"images/pal2.png", id:"pal2"},
		{src:"images/popa.png", id:"popa"},
		{src:"images/ruk.png", id:"ruk"},
		{src:"images/ruk2.png", id:"ruk2"},
		{src:"images/ruki.png", id:"ruki"},
		{src:"images/telo.png", id:"telo"},
		{src:"images/tsitsi.png", id:"tsitsi"}
	]
};



// symbols:



(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,50);


(lib.ff2 = function() {
	this.initialize(img.ff2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,414);


(lib.fis = function() {
	this.initialize(img.fis);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,34);


(lib.hed1 = function() {
	this.initialize(img.hed1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,142);


(lib.hed2 = function() {
	this.initialize(img.hed2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,138);


(lib.hed3 = function() {
	this.initialize(img.hed3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,124);


(lib.kist = function() {
	this.initialize(img.kist);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,52);


(lib.pal1 = function() {
	this.initialize(img.pal1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,23);


(lib.pal2 = function() {
	this.initialize(img.pal2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,28);


(lib.popa = function() {
	this.initialize(img.popa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,129);


(lib.ruk = function() {
	this.initialize(img.ruk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,129);


(lib.ruk2 = function() {
	this.initialize(img.ruk2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,231);


(lib.ruki = function() {
	this.initialize(img.ruki);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,101);


(lib.telo = function() {
	this.initialize(img.telo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,149);


(lib.tsitsi = function() {
	this.initialize(img.tsitsi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,68);


(lib.Символ49 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pal1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20,23);


(lib.Символ48 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pal2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31,28);


(lib.Символ47 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ruki();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,78,101);


(lib.Символ41 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiqCtQhHhHgBhmQABhkBHhIQBHhIBjAAQBkAABHBIQBIBIgBBkQABBmhIBHQhHBHhkAAQhjAAhHhHg");
	this.shape.setTransform(24.3,24.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,48.6,49);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguAuQgSgTgBgbQABgaASgUQAUgSAagBQAbABAUASQATAUAAAaQAAAbgTATQgUATgbABQgagBgUgTg");
	this.shape.setTransform(6.6,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrArQgRgSAAgZQAAgYARgTQATgRAYAAQAZAAASARQASATAAAYQAAAZgSASQgSASgZAAQgYAAgTgSg");
	this.shape_1.setTransform(6.6,6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnAoQgRgRAAgXQAAgWARgRQARgRAWAAQAYAAARARQAQARAAAWQAAAXgQARQgRARgYAAQgWAAgRgRg");
	this.shape_2.setTransform(6.6,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglAlQgPgPAAgWQAAgVAPgQQAQgPAVAAQAWAAAPAPQAQAQAAAVQAAAWgQAPQgPAQgWAAQgVAAgQgQg");
	this.shape_3.setTransform(6.6,6.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiAiQgOgOABgUQgBgTAOgPQAPgOATABQAUgBAOAOQAOAPABATQgBAUgOAOQgOAPgUAAQgTAAgPgPg");
	this.shape_4.setTransform(6.6,6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkAkQgPgPAAgVQAAgUAPgQQAQgPAUAAQAWAAAPAPQAPAQAAAUQAAAVgPAPQgPAQgWAAQgUAAgQgQg");
	this.shape_5.setTransform(6.6,6.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmAnQgQgQgBgXQABgWAQgQQAQgQAWgBQAXABARAQQAQAQAAAWQAAAXgQAQQgRAQgXABQgWgBgQgQg");
	this.shape_6.setTransform(6.6,6.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoApQgSgRABgYQgBgXASgRQARgSAXABQAYgBASASQAQARABAXQgBAYgQARQgSASgYAAQgXAAgRgSg");
	this.shape_7.setTransform(6.6,6.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgrArQgSgRAAgaQAAgZASgSQASgSAZAAQAZAAATASQASASAAAZQAAAagSARQgTATgZAAQgZAAgSgTg");
	this.shape_8.setTransform(6.6,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.2,13.2);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().rr(-503.2,-256.8,1006.4,513.6,4.4);
	this.shape.setTransform(503.2,256.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1006.4,513.6);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ff2();
	this.instance.setTransform(0,835.2);

	this.instance_1 = new lib.ff2();
	this.instance_1.setTransform(129.6,836.8,1.009,1.025,180);

	this.instance_2 = new lib.ff2();
	this.instance_2.setTransform(0,1.6);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.6,1.6,130.2,1247.6);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AMkBWIADgUIASAAQAVAAAVgGQAKgFAIgKQAMgOADgTQADgSgNgKQgLgKgYAAQgdAAgiAMIgGg2QAugRAvAAQAaAAAUAGQAUAFANALQANAMAFAQQAFAQgDAUQgCAPgGANQgGANgIAKQgPAUgZAMIAIACgAKEBWIAGglIgBAAIgXAlIg8AAIBrilIA/AAIgXClgAHWBWIAXilIBHAAIgZClgAFPBWIAAAAQAJgIAFgMQAFgMACgSQADgQgCgMQgBgKgGgIQgEgIgKgEQgIgDgMAAIgWAAIgQBvIhIAAIAXilIBdgDQAiAAAXAIQAXAHAMAQQANAOAEAXQAEAUgEAeQgEAcgKAWgABDBWIAOhoIhaAAIgOBoIhLAAIAXilIDuAAIgXClgAnABWIAXilIC9AAIgIA8IhzAAIgLBPIBXAAIgEAagApVBWIAPhmIhGAAIgTBmIhEAAQALgzAUhyIDPAAIgXClgAvSBWIAXilICrAAIgJBAIhhAAIgOBlg");
	this.shape.setTransform(-158.3,-86.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("Ao/CEIANhSIitAAIgLBPIhAAAIASiEQARgDANgGQALgPAKgcQAJgYAJgmIADgOIBEAAIgIAjQgIAfgIAUQgKAXgLANIBmAAIARh6IBJAAIgRB6IAgAAIgUCNgALqAeIAagxQAjATAjAAQANAAALgDQALgDAIgGQAJgHAGgKQAFgKACgOQACgMgDgIQgCgJgHgGQgMgKgcAAIgnAAIAFghIB4AAQAJADAHAFQAKAHAGAKQAHALACANQADAPgDARQgEAdgMAVQgLASgTAOQgSANgYAGQgXAHgdAAQg5AAgpgcgAJ7AyIAci1IBFAAIgaC1gAHQAyIAZi1IBFAAIgIA3IAjg3IA8AAIh2C1gADIAyIAZi1IBIAAIgCAOIATAAQANAAAJgDQAKgEAIgHIBSAAIgDAGQgMAWgTAPQgSANgXAHQgWAGgaAAIgZgBIgRBxgAA8AyIAai1IBJAAIgaC1gAhoAyIAZi1IBLAAIgaC1gAnHAyIAai1IChAAIgEAeIhXAAIgOBeIBzAAIgHA5gAvZAyIAai1IBKAAIgaC1g");
	this.shape_1.setTransform(-160.2,-64.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-258.8,-94.8,198.5,43.8);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("AB9B6IALhOIijAAIgMBLIg9AAIASh/QAPgCANgGQALgPAKgaQAIgXAJglIAAgEIBAAAIgFAYQgIAegIATQgKAWgKANIBiAAIAPhsIBGAAIgPBsIAfAAIgUCHgAKvAsIAZilIBBAAIgWClgAIKAsIAXilIBCAAIgHArIAcgrIA6AAIhrClgAGZAsIgHg4IheAAIgXA4IhIAAIBGilIBBAAIgXA7IBJAAIgEg7IBEAAIAXClgAiyAsIgIg4IheAAIgXA4IhIAAIBGilIBBAAIgWA7IBIAAIgFg7IBGAAIAVClgAomAsIAXilIBHAAIgYClgAsJAqIAHgyQALAAAGgEQAHgEADgGQAHgMgCgKIgThNIBBAAIACAQIAHgQIA9AAIgqBTQgSAjgOAQQgKANgKAIQgMAJgKABIgngCg");
	this.shape.setTransform(71.9,-109.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ALICHIAGgtIAAAAIgdAtIg5AAIBsioIA9AAIgYCogAIgCHIAYioIBEAAIgaCogAGJCHIgIhpIgmBpIhBAAIBHioIANAAIAAAAIBJAAIAXCogAB3CHIAQhuIhDAAQgMBHgJAnIg/AAQAKgwATh4IDHAAIgXCogAjDCHIgIhpIgmBpIhBAAIBHioIAOAAIAAAAIBIAAIAXCogAoQCHIAYioICkAAIgJA7IhdAAIgPBtgAqsCHIBJioIBKAAIhWCogAr2CHIgqioIBMAAQAYB7AHAtgAKRhDQgNgEgJgJQgJgJgDgLQgDgKABgLIAlgNQgCAJAJAKQALAKAUAAQAUAAAOgLQAMgJABgJIAhALQgBALgHALQgGALgLAJQgLAJgPAFQgQAHgTgBQgSABgPgHg");
	this.shape_1.setTransform(72,-135.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.1,-148.6,160.3,51.6);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(0.1,1,1).p("AAzAAQAAAVgPAPQgPAPgVAAQgUAAgPgPQgPgPAAgVQAAgUAPgPQAPgPAUAAQAVAAAPAPQAPAPAAAUg");
	this.shape.setTransform(13.6,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,153,0,0.929)").ss(0.5,1,1).p("Ag8AAQAAgYATgRQARgTAYAAQAZAAARATQATARAAAYQAAAZgTARQgRATgZAAQgYAAgRgTQgTgRAAgZg");
	this.shape_1.setTransform(13.6,13.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,153,0,0.859)").ss(0.8,1,1).p("AhFAAQAAgcAUgVQAVgUAcAAQAdAAAUAUQAVAVAAAcQAAAdgVAUQgUAVgdAAQgcAAgVgVQgUgUAAgdg");
	this.shape_2.setTransform(13.6,13.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(255,153,0,0.784)").ss(1.2,1,1).p("AhOAAQAAggAXgXQAXgXAgAAQAhAAAXAXQAXAXAAAgQAAAhgXAXQgXAXghAAQggAAgXgXQgXgXAAghg");
	this.shape_3.setTransform(13.6,13.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,153,0,0.714)").ss(1.5,1,1).p("AhXAAQAAgjAZgbQAbgZAjAAQAlAAAZAZQAbAbAAAjQAAAlgbAZQgZAbglAAQgjAAgbgbQgZgZAAglg");
	this.shape_4.setTransform(13.6,13.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(255,153,0,0.643)").ss(1.9,1,1).p("AhhAAQAAgoAcgdQAdgcAoAAQApAAAcAcQAdAdAAAoQAAApgdAcQgcAdgpAAQgoAAgdgdQgcgcAAgpg");
	this.shape_5.setTransform(13.6,13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,153,0,0.573)").ss(2.2,1,1).p("AhrAAQAAgsAfggQAggfAsAAQAtAAAfAfQAfAgAAAsQAAAtgfAfQgfAfgtAAQgsAAgggfQgfgfAAgtg");
	this.shape_6.setTransform(13.6,13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(255,153,0,0.502)").ss(2.6,1,1).p("Ah0AAQAAgwAigiQAigiAwAAQAxAAAhAiQAjAiAAAwQAAAxgjAhQghAjgxAAQgwAAgigjQgighAAgxg");
	this.shape_7.setTransform(13.6,13.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,153,0,0.427)").ss(2.9,1,1).p("Ah9AAQAAgzAlglQAlglAzAAQA0AAAlAlQAlAlAAAzQAAA0glAlQglAlg0AAQgzAAglglQglglAAg0g");
	this.shape_8.setTransform(13.6,13.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(255,153,0,0.357)").ss(3.3,1,1).p("AiHAAQAAg3AogoQAogoA3AAQA4AAAoAoQAoAoAAA3QAAA4goAoQgoAog4AAQg3AAgogoQgogoAAg4g");
	this.shape_9.setTransform(13.6,13.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(255,153,0,0.286)").ss(3.6,1,1).p("AiQAAQAAg7AqgrQArgqA7AAQA8AAAqAqQArArAAA7QAAA8grAqQgqArg8AAQg7AAgrgrQgqgqAAg8g");
	this.shape_10.setTransform(13.6,13.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(255,153,0,0.216)").ss(4,1,1).p("AiaAAQAAg/AtguQAugtA/AAQBAAAAsAtQAvAuAAA/QAABAgvAsQgsAvhAAAQg/AAgugvQgtgsAAhAg");
	this.shape_11.setTransform(13.6,13.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(255,153,0,0.141)").ss(4.3,1,1).p("AijAAQAAhDAwgwQAwgwBDAAQBEAAAwAwQAwAwAABDQAABEgwAwQgwAwhEAAQhDAAgwgwQgwgwAAhEg");
	this.shape_12.setTransform(13.6,13.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(255,153,0,0.071)").ss(4.7,1,1).p("AisAAQAAhHAygzQAzgyBHAAQBIAAAyAyQAzAzAABHQAABIgzAyQgyAzhIAAQhHAAgzgzQgygyAAhIg");
	this.shape_13.setTransform(13.6,13.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(255,153,0,0)").ss(5,1,1).p("AC3AAQAABMg2A1Qg1A2hMAAQhLAAg2g2Qg1g1AAhMQAAhLA1g2QA2g1BLAAQBMAAA1A1QA2A2AABLg");
	this.shape_14.setTransform(13.6,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.5,7.5,12.3,12.3);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.arrow();
	this.instance.setTransform(0,0,0.778,0.778);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,56,38.9);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#71695B").s().p("AEaA3QgFgBgDgDIAGgPIAEADIAHACQAEAAADgCQAEgDACgFIADgGIgshPIATAAIAhA9IAdg9IASAAIgoBUQgIAPgEAEQgEAEgEACQgFACgFAAQgFAAgFgCgAjGA3IgLgCIgJgGIgHgHQgDgDgDgGIgEgJIgCgLIgBgLIAAgKIADgLIAEgKIAGgJIAHgGIAJgGQAFgCAFgBIAMgBQAKAAAIADQAHABAGAGQAGAEAEAGQAEAHACAHIgSAFQgBgFgCgFQgDgEgDgDQgEgDgFgCQgFgBgGgBQgHAAgHAEQgGADgEAFQgEAGgCAHQgCAIAAAIQAAAJACAHQACAIAEAFQAEAGAGADQAHAEAIAAQAFgBAFgCQAEgBAEgDIAGgHQADgEABgGIASAEQgCAIgEAGQgEAHgGAEQgFAFgIADQgIACgJAAQgHAAgFgCgAk3A3IgKgCQgFgCgEgEIgIgHIgFgJIgFgJIgCgLIgBgLIABgKIACgLIAEgKIAGgJIAIgGIAIgGQAFgCAGgBIAMgBQAJAAAIADQAIABAGAGQAGAEAEAGQAEAHACAHIgSAFIgEgKQgCgEgEgDQgEgDgFgCQgEgBgGgBQgIAAgGAEQgGADgEAFQgFAGgCAHQgCAIAAAIQAAAJACAHQACAIAEAFQAFAGAGADQAGAEAIAAQAFgBAFgCQAFgBADgDQAEgDACgEQADgEACgGIASAEQgCAIgEAGQgEAHgGAEQgGAFgIADQgIACgJAAQgGAAgGgCgAHYA3IAAhtIASAAIAAAqIAXAAQAKAAAIADQAIACAFAEQAGADACAGQADAHAAAHIgBAJIgDAHQgDAHgGAEQgGAEgIACQgHABgJABgAHqAmIAWAAIAKgBIAIgCQADgCACgEQACgEAAgFQAAgEgCgEQgBgDgDgCQgDgDgFgBQgEgCgGAAIgXAAgAGTA3IAAhcIgkAAIAAgRIBaAAIAAARIgkAAIAABcgADnA3IAAgwIg0AAIAAAwIgSAAIAAhtIASAAIAAAuIA0AAIAAguIASAAIAABtgABLA3IAAhtIBHAAIAAARIg1AAIAABcgAgYA3IAAhtIBMAAIAAARIg6AAIAAAdIAyAAIAAAPIgyAAIAAAfIA7AAIAAARgAhdA3IAAhcIgkAAIAAgRIBaAAIAAARIgkAAIAABcgAl6A3IgKgZIgvAAIgJAZIgTAAIAshtIARAAIArBtgAmJAPIgSgwIgSAwIAkAAgAoqA3IAAhtIAoAAQAJAAAHACQAIACAGAEQAGAEADAGIADAIIABAJQAAAHgDAHQgDAFgFAEQgFAEgIADQgIACgKAAIgXAAIAAAqgAoYAAIAXAAQAGAAAEgCQAFgBADgDIAEgGIABgHQAAgGgBgDIgFgGIgIgDIgKgBIgWAAg");
	this.shape.setTransform(55.5,5.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,111.1,11.5);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#71695B").ss(5,1,1).p("AFkAAQAACThpBoQhoBpiTAAQiSAAhphpQhohoAAiTQAAiSBohpQBphoCSAAQCTAABoBoQBpBpAACSg");
	this.shape.setTransform(35.6,35.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B2B55A").s().p("Aj6D7QhphoAAiTQAAiSBphoQBohpCSAAQCTAABoBpQBpBogBCSQABCThpBoQhoBpiTgBQiSABhohpg");
	this.shape_1.setTransform(35.6,35.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,76.2,76.2);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#71695B").s().p("Ag4A6QgZgYAAgiQAAghAZgXQAXgZAhAAQAiAAAYAZQAXAXAAAhQAAAigXAYQgYAXgiAAQghAAgXgXg");
	this.shape.setTransform(8.2,8.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.4,16.4);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAfIAAgHQAAgFABgDIgKAAIgHgBIAAASIgDAAQgEAAgBgFIAAgGIABgIIgPgEIgBAHQgCAGgDAAQgEAAgBgCIAAgDIAFgLIgQgHIgBAAIAAAAQgCAQgGAAQgEAAgBgEIADgFIACgHQAAgCABgCIgGgFIgCAFQgEAHgHAAIgDAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAEgEQAEgEACgDIgBgGQgFgHAAgGIAAgFIADgBIATATIAOAGQAMAEAEAEIAYABQAXAAAXgKQAPgGAGgFQARgQAFACQABABABAIIAIADQAOAHAAADIgBAEIgDAAIgNgHIgFgEIgDAKIADACQAMAKAAABIgBADIgCABQgHAAgIgGIgCgDQgDAEgFABQAEAEADAKQAAAFgEAAQgFAAgEgIIgCgGIgNAEIAAACIAFAKQABACAAADIAAADQAAAAAAAAQAAAAgBAAQAAABAAAAQgBAAgBAAQgGAAgDgKIgBgJIgKACQAEAJAAAEQAAAEgDAAQgEAAgCgHIgBgHIAAgDIgPABIAAAWQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQgEAAAAgHg");
	this.shape.setTransform(9.8,3.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19.5,7.8);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.tsitsi();
	this.instance.setTransform(0,0,0.869,0.869);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,95.7,59.1);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hed1();
	this.instance.setTransform(0,0,0.869,0.869);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57.4,123.5);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hed2();
	this.instance.setTransform(0,0,0.869,0.869);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,48.7,120);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.fis();
	this.instance.setTransform(15.7,0,0.869,0.869);

	this.instance_1 = new lib.kist();
	this.instance_1.setTransform(0,12.2,0.869,0.869);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,54.8,57.4);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.telo();
	this.instance.setTransform(0,0,0.869,0.869);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,93.9,129.6);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.popa();
	this.instance.setTransform(0,0,0.869,0.869);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,98.3,112.2);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ruk2();
	this.instance.setTransform(0,0,0.869,0.869);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57.4,200.9);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ruk();
	this.instance.setTransform(0,0,0.869,0.869);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38.3,112.2);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 49
	this.instance = new lib.Символ49();
	this.instance.setTransform(20,30.5,1,1,0,0,0,10,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-15,x:21.8,y:31.2},9).to({rotation:0,x:20,y:30.5},10).wait(1));

	// Символ 48
	this.instance_1 = new lib.Символ48();
	this.instance_1.setTransform(15.5,57,1,1,0,0,0,15.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:15,x:18.8,y:54.4},9).to({rotation:0,x:15.5,y:57},10).wait(1));

	// Символ 47
	this.instance_2 = new lib.Символ47();
	this.instance_2.setTransform(47.2,50.5,1,1,0,0,0,39,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86.2,101);


(lib.Символ40 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(62.6,13.8,0.865,0.865,0,0,0,55.5,5.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqbCjQgrAAAAgrIAAjvQAAgrArAAIU3AAQAsAAAAArIAADvQAAArgsAAg");
	this.shape.setTransform(61.6,14.2,0.865,0.865);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,123.2,28.4);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(25.3,25.3,1,1,0,0,0,6.6,6.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(18.7,18.7,13.2,13.2);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 30
	this.instance = new lib.Символ30();
	this.instance.setTransform(729.9,26.3,1,1,0,0,0,82,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:460.5},9,cjs.Ease.get(1)).wait(27).to({x:56.4},10).to({_off:true},1).wait(4));

	// Символ 29
	this.instance_1 = new lib.Символ29();
	this.instance_1.setTransform(-290.3,22.2,1,1,0,0,0,68.9,22.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({x:68.9},9,cjs.Ease.get(1)).wait(27).to({x:450.6},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(389.1,-86.6,198.5,43.8);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 32
	this.instance = new lib.Символ32();
	this.instance.setTransform(-624.7,213.4,1,1,0,0,0,64.5,207);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:239},9,cjs.Ease.get(-1)).to({y:-200.2},10,cjs.Ease.get(-1)).to({y:-639.4},10,cjs.Ease.get(1)).to({y:-623.4},10,cjs.Ease.get(0.98)).wait(26));

	// Символ 32
	this.instance_1 = new lib.Символ32();
	this.instance_1.setTransform(-497.3,-623.4,1,1,0,0,0,64.5,207);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({y:213.4},0).to({y:239},9,cjs.Ease.get(-1)).to({y:-200.2},10,cjs.Ease.get(-1)).to({y:-639.4},10,cjs.Ease.get(1)).to({y:-623.4},10,cjs.Ease.get(0.98)).wait(22));

	// Символ 32
	this.instance_2 = new lib.Символ32();
	this.instance_2.setTransform(-369.9,-623.4,1,1,0,0,0,64.5,207);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({y:213.4},0).to({y:239},9,cjs.Ease.get(-1)).to({y:-200.2},10,cjs.Ease.get(-1)).to({y:-639.4},10,cjs.Ease.get(1)).to({y:-623.4},10,cjs.Ease.get(0.98)).wait(17));

	// Символ 32
	this.instance_3 = new lib.Символ32();
	this.instance_3.setTransform(-242.5,-623.4,1,1,0,0,0,64.5,207);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({y:213.4},0).to({y:239},9,cjs.Ease.get(-1)).to({y:-200.2},10,cjs.Ease.get(-1)).to({y:-639.4},10,cjs.Ease.get(1)).to({y:-623.4},10,cjs.Ease.get(0.98)).wait(13));

	// Символ 32
	this.instance_4 = new lib.Символ32();
	this.instance_4.setTransform(-115.1,-623.4,1,1,0,0,0,64.5,207);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({y:213.4},0).to({y:239},9,cjs.Ease.get(-1)).to({y:-200.2},10,cjs.Ease.get(-1)).to({y:-639.4},10,cjs.Ease.get(1)).to({y:-623.4},10,cjs.Ease.get(0.98)).wait(9));

	// Символ 32
	this.instance_5 = new lib.Символ32();
	this.instance_5.setTransform(12.3,-623.4,1,1,0,0,0,64.5,207);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21).to({y:213.4},0).to({y:239},9,cjs.Ease.get(-1)).to({y:-200.2},10,cjs.Ease.get(-1)).to({y:-639.4},10,cjs.Ease.get(1)).to({y:-623.4},10,cjs.Ease.get(0.98)).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-689.8,-828.8,767.2,2084.4);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(16.6,26.9,1,1,-30,0,0,28,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:19.5,scaleX:1,scaleY:1,rotation:-16.6,x:26.4,y:27.6},4,cjs.Ease.get(-1)).to({regY:19.4,scaleX:1,scaleY:1,rotation:0,x:38.6,y:28.1},5,cjs.Ease.get(1)).to({regY:19.5,scaleX:1,scaleY:1,rotation:-14.8,x:27.6,y:27.6},5,cjs.Ease.get(-1)).to({regY:19.4,scaleX:1,scaleY:1,rotation:-30,x:16.6,y:26.9},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,-3.9,67.9,61.7);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(13.1,9.5,1,1,0,0,0,28,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({rotation:180,x:191.6,y:151.2},0).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.3,-13.8,68,61.7);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(53.7,36.1,1,1,-40.5,0,0,8.2,8.2);

	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(34.6,52.4,1,1,-40.5,0,0,8.2,8.2);

	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(36.2,16.8,1,1,-40.5,0,0,8.2,8.2);

	this.instance_3 = new lib.Символ17();
	this.instance_3.setTransform(17.9,34,1,1,-40.5,0,0,8.2,8.2);

	this.instance_4 = new lib.Символ18();
	this.instance_4.setTransform(35.6,35.6,1,1,0,0,0,35.6,35.6);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,76.2,76.2);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ16();
	this.instance.setTransform(9,5.3,0.728,0.295,0,0,0,9.8,3.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:10.7,y:16.4,alpha:1},4).to({scaleX:0.73,scaleY:0.3,x:9,y:5.3,alpha:0},5).wait(41));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DA8A81").s().p("ABFAaQgIgPgxgQQgvgSgSAGQgSAGgFAKQgFAIgBgYQgCgbBBAMQA/AMAWAYQAWAbgFAEIgDACQgFAAgGgLg");
	this.shape.setTransform(8.5,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA8A81").s().p("ABFAqQgNgGgwgPQgvgPgRAAQgSgBgFACQgEABgBgdQgBggBBAMQA+AMAWAdQAWAdgCAKQgBAGgFAAQgDAAgGgDg");
	this.shape_1.setTransform(8.6,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DA8A81").s().p("AAFAvQgvgMgRgHQgRgIgEgGQgEgIgBgiQgBgkBBAMQA+ALAWAiQAWAgABAPQABAPgRABIgFAAQgSAAgqgJg");
	this.shape_2.setTransform(8.7,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DA8A81").s().p("AAABEQgugIgQgOQgRgOgEgQQgDgPgBgoQgBgpBBAMQA/AMAVAlQAWAjAEAVQAEAUgVAJQgMAFgTAAQgRAAgWgDg");
	this.shape_3.setTransform(8.9,7.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DA8A81").s().p("AgCBYQgwgFgQgUQgQgVgDgYQgDgXgBguQAAguBBAMQA+AMAWApQAVAmAHAaQAHAZgZASQgVANgiAAIgRAAg");
	this.shape_4.setTransform(9,8.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DA8A81").s().p("AAABIQgugIgRgPQgRgPgDgRQgDgRgBgpQgBgqBBAMQA/ALAVAmQAWAkAFAVQAEAWgWALQgOAHgXAAQgPAAgSgDg");
	this.shape_5.setTransform(8.9,7.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DA8A81").s().p("AADA3QgugKgRgKQgSgKgDgKQgEgLgBgkQgBgmBBAMQA/ALAVAjQAWAhACASQACARgSAEQgGACgKAAQgTAAgggHg");
	this.shape_6.setTransform(8.8,6.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DA8A81").s().p("ABGAzQgPgCgwgMIhAgRQgSgGgEgDQgEgEgBggQgBgiBBAMQA+ALAWAhQAWAeAAANQgBALgMAAIgDAAg");
	this.shape_7.setTransform(8.6,5.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DA8A81").s().p("ABFAnQgMgIgwgPQgvgQgRABQgSAAgFAEQgFADAAgcQgCgfBBAMQA/AMAWAbQAVAdgCAKQgCAEgDAAQgEAAgGgEg");
	this.shape_8.setTransform(8.6,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-0.1,16.8,7.4);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai7BKQgUgRgLgVQgLgUgDgNQgCgHAAgTQAAggAGgPQAPgjAqAQQAvACAKAHQAGAEAJALIASAMQANAJADADIAYAaQANAOAAAKQAAASgZAdQghAngxAAQgbAAgZgVgABpBJQgMgKAAgNIgIguQAAgEANgOQAMgPAAgDIgLgQIAAgDIAEgBQACAAAFAHQAFAHAEAAIADgCQACgBAGAAQAGgTADgFIAEADIAAADIABAAQADgCAEAAQAIAAAFAGIACgBIACgBIAEABIADADIAFAAIgJgSQAAgFAEAAQAEAAAFAEQgCgLAIAGIAOAMIAAgEQABgDADAAQADAAACAHIAEgCIAOASQAEAFAAAGIAAALQAAAHgEANQgFALAAAHIgCAUIgCATQAAAEADAEQAAAOgIAAIgEACQgFADgNgCIgNAIQgIAEgKAAQgpAAgSgOg");
	mask.setTransform(36,67.8);

	// Слой 2
	this.instance = new lib.Символ15();
	this.instance.setTransform(52.9,68.2,0.837,1,0,-8.2,178,8.9,8.8);

	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(22.3,66.8,1,1,0,0,0,9,8.9);

	this.instance.mask = this.instance_1.mask = mask;

	// Слой 1
	this.instance_2 = new lib.hed3();
	this.instance_2.setTransform(0,0,0.869,0.869);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,77.4,107.8);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(29.4,60.7,1,1,3.7,0,0,28.8,61.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1.8,x:29.6,y:61.5},8,cjs.Ease.get(-1)).to({regX:28.7,rotation:0,x:29.7,y:62.2},9,cjs.Ease.get(1)).to({regX:28.8,rotation:1.8,x:29.6,y:61.5},7,cjs.Ease.get(-1)).to({rotation:3.7,x:29.4,y:60.7},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.3,-2.7,65.3,126.9);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(24.4,60,1,1,0,0,0,24.4,60);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.3,x:21.9,y:60.9},8,cjs.Ease.get(-1)).to({rotation:4.5,x:19.7,y:61.7},7,cjs.Ease.get(1)).to({rotation:2.3,x:21.9,y:61},9,cjs.Ease.get(-1)).to({rotation:0,x:24.4,y:60},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.7,120);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(47.8,29.6,1,1,0,0,0,47.8,29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.01,scaleY:1.03,y:30.5},7,cjs.Ease.get(-1)).to({scaleX:1.02,scaleY:1.06,x:47.7,y:31.4},7,cjs.Ease.get(1)).to({regX:47.9,scaleX:1.01,scaleY:1.03,x:47.8,y:30.6},7,cjs.Ease.get(-1)).to({regX:47.8,scaleX:1,scaleY:1,y:29.6},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95.7,59.1);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(27.4,28.7,1,1,0,0,0,27.4,28.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:28.6,scaleX:1,scaleY:1,rotation:-10.3,x:25.2,y:34.3},4,cjs.Ease.get(-1)).to({regY:28.7,scaleX:1,scaleY:1,rotation:-23.2,x:22.4,y:41.4},5,cjs.Ease.get(1)).to({regY:28.6,scaleX:1,scaleY:1,rotation:-11.5,x:24.9,y:35},5,cjs.Ease.get(-1)).to({regY:28.7,scaleX:1,scaleY:1,rotation:0,x:27.4,y:28.7},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.8,57.4);


(lib.Символ30_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ46();
	this.instance.setTransform(156.7,74.5,0.896,0.896,-19.5,0,0,43.5,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:43.6,regY:50.4,x:150.1,y:72.8},4).to({regX:43.5,regY:50.5,x:156.7,y:74.5},6).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ39();
	this.instance_1.setTransform(107.2,106.6,1,1,0,0,0,25.3,25.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(100.6,19.1,107.2,108.7);


(lib.Символ11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ30_1();
	this.instance_2.setTransform(15.8,5,1,1,0,0,0,48,54.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(68.4,-30.5,107.2,108.7);


(lib.Символ45 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(23.4,24.7,0.505,0.64,0,0,0,35.6,35.6);

	this.instance_1 = new lib.Символ41();
	this.instance_1.setTransform(21.1,24.5,0.868,1,0,0,0,24.3,24.5);
	this.instance_1.alpha = 0.719;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42.7,49.1);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.setTransform(21.3,24.5,1,1,0,0,0,21.3,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:24.6,scaleX:0.89,scaleY:0.89,x:17.9,y:24.6},4).to({regY:24.5,scaleX:1,scaleY:1,x:21.3,y:24.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.7,49.1);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(18.8,24.4,0.505,0.64,180,0,0,35.6,35.6);

	this.instance_1 = new lib.Символ41();
	this.instance_1.setTransform(21.1,24.5,0.868,1,180,0,0,24.3,24.5);
	this.instance_1.alpha = 0.719;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.4,0,42.7,49.1);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(20.9,24.4,1,1,0,0,0,20.9,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.92,scaleY:0.92,x:22.9},4).to({scaleX:1,scaleY:1,x:20.9},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,0,42.7,49.1);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ34();
	this.instance.setTransform(403.9,1031.2,1,1,0,0,0,503.2,256.8);
	this.instance.alpha = 0.648;

	// Слой 1
	this.instance_1 = new lib.Символ31();
	this.instance_1.setTransform(754.3,1037.4,1,1,0,0,0,64.5,207);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-99.3,1.6,1006.4,2084.4);


(lib.Символ22 = function() {
	this.initialize();

	// Символ 19
	this.instance = new lib.Символ44();
	this.instance.setTransform(25.5,22.7,1,1,0,0,0,21.3,24.5);

	// Символ 40
	this.instance_1 = new lib.Символ40();
	this.instance_1.setTransform(27.4,67.4,1,1,0,0,0,61.6,14.2);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.2,-1.8,123.2,83.4);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.setTransform(132.1,27,1,1,0,0,0,20.9,24.4);

	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(133,68,0.865,0.865,0,0,0,55.5,5.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqbCjQgrAAAAgrIAAjvQAAgrArAAIU3AAQAsAAAAArIAADvQAAArgsAAg");
	this.shape.setTransform(131.6,68.4,0.865,0.865);

	this.addChild(this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(70,2.6,123.2,80);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(27.4,121.8,1,1,0,0,0,27.4,28.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.8,x:28.4,y:124.7},9,cjs.Ease.get(-1)).to({rotation:-4,x:29.6,y:127.9},10,cjs.Ease.get(1)).to({rotation:-1.8,x:28.5,y:124.8},15,cjs.Ease.get(-1)).to({rotation:0,x:27.4,y:121.8},15,cjs.Ease.get(1)).wait(1));

	// Символ 8
	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(95.2,277,1,1,0,0,0,49.1,56.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-7,x:100.7,y:278.4},9,cjs.Ease.get(-1)).to({regY:56,rotation:-15,x:106.8,y:279.9},10,cjs.Ease.get(1)).to({rotation:-7.3,x:101.1,y:278.4},15,cjs.Ease.get(-1)).to({regY:56.1,rotation:0,x:95.2,y:277},15,cjs.Ease.get(1)).wait(1));

	// Символ 3
	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(113,173.1,1,1,0,0,0,47.8,29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:112.6,y:175},9,cjs.Ease.get(-1)).to({x:112,y:177.1},10,cjs.Ease.get(1)).to({x:112.5,y:175.1},15,cjs.Ease.get(-1)).to({x:113,y:173.1},15,cjs.Ease.get(1)).wait(1));

	// Символ 9
	this.instance_3 = new lib.Символ9();
	this.instance_3.setTransform(114,163.9,1,1,0,0,0,47,64.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:113.5,y:165.8},9,cjs.Ease.get(-1)).to({x:113,y:167.9},10,cjs.Ease.get(1)).to({x:113.5,y:165.9},15,cjs.Ease.get(-1)).to({x:114,y:163.9},15,cjs.Ease.get(1)).wait(1));

	// Символ 6
	this.instance_4 = new lib.Символ6();
	this.instance_4.setTransform(109.1,53.9,1,1,0,0,0,38.7,53.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-3,x:106.8,y:56.8},9,cjs.Ease.get(-1)).to({rotation:-6.5,x:104.1,y:60},10,cjs.Ease.get(1)).to({rotation:-3.1,x:106.6,y:57},15,cjs.Ease.get(-1)).to({rotation:0,x:109.1,y:53.9},15,cjs.Ease.get(1)).wait(1));

	// Символ 2
	this.instance_5 = new lib.Символ2();
	this.instance_5.setTransform(53.9,182.2,1,1,0,0,0,19.1,56.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-1.8,x:56.9,y:184.1},9,cjs.Ease.get(-1)).to({regY:56,rotation:-4,x:60.1,y:186.2},10,cjs.Ease.get(1)).to({rotation:-1.8,x:57.1,y:184.2},15,cjs.Ease.get(-1)).to({regY:56.1,rotation:0,x:53.9,y:182.2},15,cjs.Ease.get(1)).wait(1));

	// Символ 5
	this.instance_6 = new lib.Символ5();
	this.instance_6.setTransform(64.4,65.2,1,1,0,0,0,28.7,61.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:62,y:68.1},9,cjs.Ease.get(-1)).to({x:59.4,y:71.2},10,cjs.Ease.get(1)).to({x:61.9,y:68.2},15,cjs.Ease.get(-1)).to({x:64.4,y:65.2},15,cjs.Ease.get(1)).wait(1));

	// Символ 4
	this.instance_7 = new lib.Символ4();
	this.instance_7.setTransform(155.7,61.8,1,1,0,0,0,24.4,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:152.4,y:64.6},9,cjs.Ease.get(-1)).to({x:148.7,y:67.8},10,cjs.Ease.get(1)).to({x:152.2,y:64.8},15,cjs.Ease.get(-1)).to({x:155.7,y:61.8},15,cjs.Ease.get(1)).wait(1));

	// Символ 7
	this.instance_8 = new lib.Символ7();
	this.instance_8.setTransform(158.3,223,1,1,0,0,0,28.7,100.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:100.5,rotation:1.3,x:155.8,y:223.7},9,cjs.Ease.get(-1)).to({regY:100.4,rotation:3,x:153,y:224.4},10,cjs.Ease.get(1)).to({rotation:1.3,x:155.7,y:223.7},15,cjs.Ease.get(-1)).to({rotation:0,x:158.3,y:223},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,187,333);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(22.6,19,1,1,0,0,0,13.6,13.6);

	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(79.7,22.8,1,1,0,0,0,79.7,22.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FF33").s().p("Ah7B8Qg0gzABhJQgBhIA0gzQA0g0BHAAQBJAAAzA0QA0AzgBBIQABBJg0AzQgzA0hJAAQhHAAg0g0g");
	this.shape.setTransform(14.8,21.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.4,13.8,10.4,10.4);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(135.1,29.8,1,1,0,0,0,13.6,13.6);

	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(82.9,27.9,1,1,0,0,0,82.9,27.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FF33").s().p("Ah1B2QgygxAAhFQAAhEAygxQAxgyBEAAQBFAAAxAyQAxAxABBEQgBBFgxAxQgxAxhFABQhEgBgxgxg");
	this.shape.setTransform(139.1,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(129.9,24.6,10.4,10.4);


(lib.Символ36 = function() {
	this.initialize();

	// Символ 23
	this.instance = new lib.Символ23();
	this.instance.setTransform(175.3,209.1,1,1,-60,0,0,28.1,19.4);

	// Символ 27
	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(360.2,173.1,1,1,0,0,0,79.7,22.8);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ27(), 3);

	// Символ 26
	this.instance_2 = new lib.Символ26();
	this.instance_2.setTransform(182,177.2,1,1,0,0,0,82.9,27.9);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Символ26(), 3);

	// Символ 10
	this.instance_3 = new lib.Символ10();
	this.instance_3.setTransform(248.8,166.5,1,1,0,0,0,93.5,166.5);

	// Символ 35
	this.instance_4 = new lib.Символ35();
	this.instance_4.setTransform(337.4,34.9,0.668,0.668,0,0,0,271.2,22.2);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(140.6,-37.7,407.9,370.8);


// stage content:
(lib.girla240400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		this.cursor = "none";
		this.pric.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.pric.x = stage.mouseX;
			this.pric.y = stage.mouseY;
		}
		
		this.fon.addEventListener("mousedown", fl_button);
		
		function fl_button() {
			window.open(clickTAG, "_blank");
		}
		
		
		this.girl.addEventListener("mousedown", fl_girl);
		
		function fl_girl() {
			window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 15
	this.pric = new lib.Символ11_1();
	this.pric.setTransform(452.6,471.4,0.981,0.981,0,0,0,69.4,61);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

	// Слой 4
	this.girl = new lib.Символ36();
	this.girl.setTransform(134.6,252.5,1,1,0,0,0,271.2,166.5);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Слой 10
	this.fon = new lib.Символ33();
	this.fon.setTransform(187.1,189.4,1.065,1.065,0,0,0,383.6,1043.8);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.3,-720.8,1072.1,2220.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;