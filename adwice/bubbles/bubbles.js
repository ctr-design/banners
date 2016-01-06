(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/a1.png", id:"a1"},
		{src:"images/a2.png", id:"a2"},
		{src:"images/a3.png", id:"a3"},
		{src:"images/a4.png", id:"a4"},
		{src:"images/a5.png", id:"a5"},
		{src:"images/Растровоеизображение1.png", id:"Растровоеизображение1"},
		{src:"images/Растровоеизображение2.png", id:"Растровоеизображение2"}
	]
};



// symbols:



(lib.a1 = function() {
	this.initialize(img.a1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,37);


(lib.a2 = function() {
	this.initialize(img.a2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,37);


(lib.a3 = function() {
	this.initialize(img.a3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,37);


(lib.a4 = function() {
	this.initialize(img.a4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,37);


(lib.a5 = function() {
	this.initialize(img.a5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,54);


(lib.Растровоеизображение1 = function() {
	this.initialize(img.Растровоеизображение1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,205,39);


(lib.Растровоеизображение2 = function() {
	this.initialize(img.Растровоеизображение2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,590,260);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Растровоеизображение2();
	this.instance.setTransform(-295,-130);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-295,-130,590,260);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Растровоеизображение1();
	this.instance.setTransform(-102.5,-19.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-102.5,-19.5,205,39);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("Egx/AX0MAAAgvnMBj/AAAMAAAAvng");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CCCCCC","#FFFFFF","#CCCCCC"],[0,0.482,1],-320,0,320,0).s().p("Egx/AX0MAAAgvnMBj/AAAMAAAAvng");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-152.5,640,305);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F935B8").ss(7,2,0,3).p("EgxcgXRMBi5AAAMAAAAujMhi5AAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-152.5,640.1,305.2);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.a5();
	this.instance.setTransform(-113.2,-26.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-113.2,-26.8,226,54);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("EghfACkIAAlHMBC/AAAIAAFHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-214.5,-16.5,429,33);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(7,2,0,3).p("EghNATxIsVAAMAAAgnhMBbFAAAMAAAAnhEAtLATxIr+AA");
	this.shape.setTransform(0,-1.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-295,-131.8,590,260.1);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("AefAcMg9AAAAQgOAAgcgGQgcgHgegmUAgeAAXAftgAbQgWAcgdAPQgYAMgWAAIgGAAg");
	this.shape.setTransform(0.2,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.447)").s().p("EggAAAUQAtgmASgCQATgCAOgDMA8/AAAQAPgBAdAJQAdAIAZAkUgfngAYggaAARg");
	this.shape_1.setTransform(0.1,-9.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-205.2,-12.1,410.9,24);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.a4();
	this.instance.setTransform(-18.5,-18.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.5,-18.5,37,37);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.a3();
	this.instance.setTransform(-18.5,-18.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.5,-18.5,37,37);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.a2();
	this.instance.setTransform(-18.5,-18.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.5,-18.5,37,37);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.a1();
	this.instance.setTransform(-18.5,-18.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.5,-18.5,37,37);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(188.2,0);

	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(-62.9,42);

	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(-146.2,-42);

	this.instance_3 = new lib.Символ3();
	this.instance_3.setTransform(-188.1,0);

	this.instance_4 = new lib.Символ2();
	this.instance_4.setTransform(-188.1,84);

	this.instance_5 = new lib.Символ4();
	this.instance_5.setTransform(-146.2,42);

	this.instance_6 = new lib.Символ4();
	this.instance_6.setTransform(-104.4,42);

	this.instance_7 = new lib.Символ2();
	this.instance_7.setTransform(188.2,-84);

	this.instance_8 = new lib.Символ1();
	this.instance_8.setTransform(188.2,-42);

	this.instance_9 = new lib.Символ2();
	this.instance_9.setTransform(188.2,42);

	this.instance_10 = new lib.Символ2();
	this.instance_10.setTransform(188.2,84);

	this.instance_11 = new lib.Символ4();
	this.instance_11.setTransform(-62.9,-84);

	this.instance_12 = new lib.Символ3();
	this.instance_12.setTransform(-104.4,-84);

	this.instance_13 = new lib.Символ2();
	this.instance_13.setTransform(-146.2,-84);

	this.instance_14 = new lib.Символ1();
	this.instance_14.setTransform(-188.1,-84);

	this.instance_15 = new lib.Символ4();
	this.instance_15.setTransform(-62.9,-42);

	this.instance_16 = new lib.Символ3();
	this.instance_16.setTransform(-104.4,-42);

	this.instance_17 = new lib.Символ1();
	this.instance_17.setTransform(-188.1,-42);

	this.instance_18 = new lib.Символ4();
	this.instance_18.setTransform(-62.9,0);

	this.instance_19 = new lib.Символ3();
	this.instance_19.setTransform(-104.4,0);

	this.instance_20 = new lib.Символ2();
	this.instance_20.setTransform(-146.2,0);

	this.instance_21 = new lib.Символ1();
	this.instance_21.setTransform(-188.1,42);

	this.instance_22 = new lib.Символ4();
	this.instance_22.setTransform(-62.9,84);

	this.instance_23 = new lib.Символ3();
	this.instance_23.setTransform(-104.4,84);

	this.instance_24 = new lib.Символ2();
	this.instance_24.setTransform(-146.2,84);

	this.addChild(this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-206.6,-102.5,413.3,205);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(41.8,-84.5);

	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(-0.2,-84.5);

	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(-41.7,-84.5);

	this.instance_3 = new lib.Символ2();
	this.instance_3.setTransform(-41.7,42.5);

	this.instance_4 = new lib.Символ1();
	this.instance_4.setTransform(41.8,42.5);

	this.instance_5 = new lib.Символ1();
	this.instance_5.setTransform(41.8,84.5);

	this.instance_6 = new lib.Символ4();
	this.instance_6.setTransform(-0.2,42.5);

	this.instance_7 = new lib.Символ4();
	this.instance_7.setTransform(-0.2,84.5);

	this.instance_8 = new lib.Символ3();
	this.instance_8.setTransform(-41.7,84.5);

	this.addChild(this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.2,-103,120.5,206);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Символ 3
	this.instance = new lib.Символ3();
	this.instance.setTransform(41.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({scaleX:1.23,scaleY:1.23,alpha:0.538},0).wait(1).to({scaleX:1.33,scaleY:1.33,alpha:0.328},0).wait(1).to({scaleX:1.39,scaleY:1.39,alpha:0.205},0).wait(1).to({scaleX:1.43,scaleY:1.43,alpha:0.122},0).wait(1).to({scaleX:1.46,scaleY:1.46,alpha:0.065},0).wait(1).to({scaleX:1.47,scaleY:1.47,alpha:0.027},0).wait(1).to({scaleX:1.49,scaleY:1.49,alpha:0},0).to({_off:true},1).wait(2));

	// Символ 3
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(-0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({scaleX:1.23,scaleY:1.23,alpha:0.538},0).wait(1).to({scaleX:1.33,scaleY:1.33,alpha:0.328},0).wait(1).to({scaleX:1.39,scaleY:1.39,alpha:0.205},0).wait(1).to({scaleX:1.43,scaleY:1.43,alpha:0.122},0).wait(1).to({scaleX:1.46,scaleY:1.46,alpha:0.065},0).wait(1).to({scaleX:1.47,scaleY:1.47,alpha:0.027},0).wait(1).to({scaleX:1.49,scaleY:1.49,alpha:0},0).to({_off:true},1).wait(4));

	// Символ 3
	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(-41.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({scaleX:1.23,scaleY:1.23,alpha:0.538},0).wait(1).to({scaleX:1.33,scaleY:1.33,alpha:0.328},0).wait(1).to({scaleX:1.39,scaleY:1.39,alpha:0.205},0).wait(1).to({scaleX:1.43,scaleY:1.43,alpha:0.122},0).wait(1).to({scaleX:1.46,scaleY:1.46,alpha:0.065},0).wait(1).to({scaleX:1.47,scaleY:1.47,alpha:0.027},0).wait(1).to({scaleX:1.49,scaleY:1.49,alpha:0},0).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.2,-18.5,120.5,37);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(0.1,-21.5);

	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(41.9,-21.5);

	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(-41.8,-21.5);

	this.instance_3 = new lib.Символ1();
	this.instance_3.setTransform(41.7,21.5);

	this.instance_4 = new lib.Символ4();
	this.instance_4.setTransform(-0.3,21.5);

	this.instance_5 = new lib.Символ3();
	this.instance_5.setTransform(-41.8,21.5);

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.3,-40,120.7,80);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Символ 4
	this.instance = new lib.Символ4();
	this.instance.setTransform(41.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({scaleX:1.24,scaleY:1.24,alpha:0.505},0).wait(1).to({scaleX:1.35,scaleY:1.35,alpha:0.276},0).wait(1).to({scaleX:1.41,scaleY:1.41,alpha:0.153},0).wait(1).to({scaleX:1.45,scaleY:1.45,alpha:0.084},0).wait(1).to({scaleX:1.47,scaleY:1.47,alpha:0.043},0).wait(1).to({scaleX:1.48,scaleY:1.48,alpha:0.017},0).wait(1).to({scaleX:1.49,scaleY:1.49,alpha:0},0).to({_off:true},1).wait(2));

	// Символ 4
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(-0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({scaleX:1.24,scaleY:1.24,alpha:0.505},0).wait(1).to({scaleX:1.35,scaleY:1.35,alpha:0.276},0).wait(1).to({scaleX:1.41,scaleY:1.41,alpha:0.153},0).wait(1).to({scaleX:1.45,scaleY:1.45,alpha:0.084},0).wait(1).to({scaleX:1.47,scaleY:1.47,alpha:0.043},0).wait(1).to({scaleX:1.48,scaleY:1.48,alpha:0.017},0).wait(1).to({scaleX:1.49,scaleY:1.49,alpha:0},0).to({_off:true},1).wait(4));

	// Символ 4
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(-41.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({scaleX:1.24,scaleY:1.24,alpha:0.505},0).wait(1).to({scaleX:1.35,scaleY:1.35,alpha:0.276},0).wait(1).to({scaleX:1.41,scaleY:1.41,alpha:0.153},0).wait(1).to({scaleX:1.45,scaleY:1.45,alpha:0.084},0).wait(1).to({scaleX:1.47,scaleY:1.47,alpha:0.043},0).wait(1).to({scaleX:1.48,scaleY:1.48,alpha:0.017},0).wait(1).to({scaleX:1.49,scaleY:1.49,alpha:0},0).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.2,-18.5,120.5,37);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(83.6,-84);

	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(41.6,-84);

	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(0.1,-84);

	this.instance_3 = new lib.Символ2();
	this.instance_3.setTransform(-41.7,-84);

	this.instance_4 = new lib.Символ1();
	this.instance_4.setTransform(-83.6,-84);

	this.instance_5 = new lib.Символ2();
	this.instance_5.setTransform(83.6,0);

	this.instance_6 = new lib.Символ3();
	this.instance_6.setTransform(41.6,42);

	this.instance_7 = new lib.Символ4();
	this.instance_7.setTransform(0.1,42);

	this.instance_8 = new lib.Символ2();
	this.instance_8.setTransform(41.6,0);

	this.instance_9 = new lib.Символ2();
	this.instance_9.setTransform(0.1,0);

	this.instance_10 = new lib.Символ2();
	this.instance_10.setTransform(-83.6,0);

	this.instance_11 = new lib.Символ2();
	this.instance_11.setTransform(-83.6,84);

	this.instance_12 = new lib.Символ2();
	this.instance_12.setTransform(83.6,42);

	this.instance_13 = new lib.Символ1();
	this.instance_13.setTransform(83.6,-42);

	this.instance_14 = new lib.Символ1();
	this.instance_14.setTransform(83.6,84);

	this.instance_15 = new lib.Символ4();
	this.instance_15.setTransform(41.6,-42);

	this.instance_16 = new lib.Символ3();
	this.instance_16.setTransform(0.1,-42);

	this.instance_17 = new lib.Символ2();
	this.instance_17.setTransform(-41.7,-42);

	this.instance_18 = new lib.Символ1();
	this.instance_18.setTransform(-83.6,-42);

	this.instance_19 = new lib.Символ2();
	this.instance_19.setTransform(-41.7,0);

	this.instance_20 = new lib.Символ2();
	this.instance_20.setTransform(-41.7,42);

	this.instance_21 = new lib.Символ1();
	this.instance_21.setTransform(-83.6,42);

	this.instance_22 = new lib.Символ4();
	this.instance_22.setTransform(41.6,84);

	this.instance_23 = new lib.Символ3();
	this.instance_23.setTransform(0.1,84);

	this.instance_24 = new lib.Символ2();
	this.instance_24.setTransform(-41.7,84);

	this.addChild(this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-102.1,-102.5,204.2,205);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18).wait(1));

	// Символ 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(83.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({scaleX:1.2,scaleY:1.2,alpha:0.625},0).wait(1).to({scaleX:1.32,scaleY:1.32,alpha:0.405},0).wait(1).to({scaleX:1.4,scaleY:1.4,alpha:0.258},0).wait(1).to({scaleX:1.46,scaleY:1.46,alpha:0.148},0).wait(1).to({scaleX:1.5,scaleY:1.5,alpha:0.076},0).wait(1).to({scaleX:1.52,scaleY:1.52,alpha:0.03},0).wait(1).to({scaleX:1.54,scaleY:1.54,alpha:0},0).to({_off:true},1).wait(2));

	// Символ 1
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(41.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({scaleX:1.2,scaleY:1.2,alpha:0.625},0).wait(1).to({scaleX:1.32,scaleY:1.32,alpha:0.405},0).wait(1).to({scaleX:1.4,scaleY:1.4,alpha:0.258},0).wait(1).to({scaleX:1.46,scaleY:1.46,alpha:0.148},0).wait(1).to({scaleX:1.5,scaleY:1.5,alpha:0.076},0).wait(1).to({scaleX:1.52,scaleY:1.52,alpha:0.03},0).wait(1).to({scaleX:1.54,scaleY:1.54,alpha:0},0).to({_off:true},1).wait(4));

	// Символ 1
	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({scaleX:1.2,scaleY:1.2,alpha:0.625},0).wait(1).to({scaleX:1.32,scaleY:1.32,alpha:0.405},0).wait(1).to({scaleX:1.4,scaleY:1.4,alpha:0.258},0).wait(1).to({scaleX:1.46,scaleY:1.46,alpha:0.148},0).wait(1).to({scaleX:1.5,scaleY:1.5,alpha:0.076},0).wait(1).to({scaleX:1.52,scaleY:1.52,alpha:0.03},0).wait(1).to({scaleX:1.54,scaleY:1.54,alpha:0},0).to({_off:true},1).wait(6));

	// Символ 1
	this.instance_3 = new lib.Символ1();
	this.instance_3.setTransform(-41.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({scaleX:1.18,scaleY:1.18,alpha:0.625},0).wait(1).to({scaleX:1.29,scaleY:1.29,alpha:0.405},0).wait(1).to({scaleX:1.36,scaleY:1.36,alpha:0.258},0).wait(1).to({scaleX:1.42,scaleY:1.42,alpha:0.148},0).wait(1).to({scaleX:1.45,scaleY:1.45,alpha:0.076},0).wait(1).to({scaleX:1.47,scaleY:1.47,alpha:0.03},0).wait(1).to({scaleX:1.49,scaleY:1.49,alpha:0},0).to({_off:true},1).wait(8));

	// Символ 1
	this.instance_4 = new lib.Символ1();
	this.instance_4.setTransform(-83.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({scaleX:1.18,scaleY:1.18,alpha:0.625},0).wait(1).to({scaleX:1.29,scaleY:1.29,alpha:0.405},0).wait(1).to({scaleX:1.36,scaleY:1.36,alpha:0.258},0).wait(1).to({scaleX:1.42,scaleY:1.42,alpha:0.148},0).wait(1).to({scaleX:1.45,scaleY:1.45,alpha:0.076},0).wait(1).to({scaleX:1.47,scaleY:1.47,alpha:0.03},0).wait(1).to({scaleX:1.49,scaleY:1.49,alpha:0},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.1,-18.5,204.2,37);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_269 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(269).call(this.frame_269).wait(1));

	// Слой 2
	this.instance = new lib.Символ7();
	this.instance.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(270));

	// Слой 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAkBaQgQgHgGgJQgEgFgDgIQgDgIAAgHQAAgGAFgCIAZgEQAEAAAAAEQAHAXAMAAQAEAAAFgDQAFgEAFgGQAGgIAJgZIAAgBIgBAAIgBAAQgHAHgIAEQgGACgHAAQgIAAgNgGQgOgHgFgJQgFgFgCgWQAAgLADgMQAEgNAGgLQAIgMAKgHQAGgDAHgCQAHgCAHAAQAHAAAIACQAJADAIAEQAJAFAGAGQAIAHADAIQAEAHACAKQACAJAAAKQAAARgFASQgHAbgGANIgLASQgGAIgGAGQgIAHgIADQgIAEgKAAQgLAAgQgHgABGg6QgFAEgDAHQgEAGgBAIIgCAOQAAAIADAGQAEAFAHAAQAGAAAFgDQAEgEAEgGQAEgGACgHQACgHAAgHQAAgKgEgFQgEgHgHAAQgGAAgFAEgAhkBZQgJgEgGgFQgIgFgFgHQgEgIgDgNQgCgKAAgNQAAgQAEgRQADgNAKgbIALgSQAGgJAHgGQAHgHAIgDQAJgEAKAAQALAAARAJQAJAFAGAFQAIAGAEAHQAFAIACAKQAAAJAAALQAAASgDASQgHAcgGANQgFAKgFAIQgGAIgHAGQgIAHgIADQgJAEgKAAQgKAAgQgIgAhFgzQgHAIgGAOQgGAOgEAPQgDAQAAAOQAAAQAEAIQAEAGAHAAQAIAAAHgJQAHgJAGgPQAFgOADgPQAEgRAAgQQAAgNgEgHQgEgFgGAAQgHAAgIAJg");
	this.shape.setTransform(0.5,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAmBcQgLgDgIgIQgKgIgFgJQgEgKAAgKQAAgIABgHIAGgNQAEgHAGgGIAMgIQAAAAABAAQAAgBABAAQAAgBAAAAQAAgBAAAAIgBgCQgGgHgDgGQgDgHAAgJQAAgLAFgLQAEgKAKgIQAIgIAMgEQANgFANAAQAJAAAKAFQAKAFAJAIQAJAIAGAKQAFAKAAAIQABALgIAKQgHAMgOAIIgBABIABADQAIAHAGAJQAFAJAAAIQAAAKgFAKQgFALgKAJQgKAKgMAFQgTAGgMAAQgKAAgLgFgAA7APQgFADgFAEQgFAGgCAGQgCAFgBAGQAAAHAFAEQAEAFAJAAQAGAAAGgDQAGgDAFgFQAIgKABgMQAAgGgEgFQgFgFgIAAQgGAAgHADgABJg8QgFADgDAEQgHAJAAAKQAAAGADADQADAGAJAAQAKAAAIgJQAIgJAAgLQAAgGgEgEQgFgFgHAAQgGAAgEADgAhoBaQgJgEgGgFQgIgGgEgGQgFgJgDgNQgBgKAAgMQAAgRADgRQAEgNAKgbIAKgSQAGgJAHgGQAIgGAHgEQAJgDAKgBQALAAARAJQAJAFAGAFQAJAHADAGQAFAIACALQACAIAAAMQAAARgEASQgIAcgGANQgFAKgFAIQgGAJgHAFQgHAHgJADQgJAEgJAAQgLAAgQgHgAhJgzQgHAIgGAPQgGANgDAPQgEAQAAAOQAAARAEAHQAFAHAGAAQAIAAAIgKQAGgJAGgOQAFgPADgPQAEgRAAgPQAAgOgEgGQgEgGgGAAQgHAAgIAJg");
	this.shape_1.setTransform(0.6,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AhmBZQgIgEgHgFQgIgFgEgHQgFgIgCgNQgCgKAAgNQAAgQADgRQADgNALgbIAKgSQAGgJAHgGQAHgHAJgDQAJgEAJAAQALAAARAJQAJAFAHAFQAHAGAEAHQAFAIACAKQACAJAAALQAAASgEASQgIAcgGANQgFAKgFAIQgGAIgHAGQgIAHgIADQgJAEgJAAQgLAAgQgIgAhHgzQgHAIgGAOQgGAOgDAPQgEAQAAAOQAAAQAFAIQADAGAHAAQAIAAAIgJQAGgJAGgPQAGgOACgPQAEgRAAgQQAAgNgEgHQgEgFgFAAQgIAAgIAJgAAWBXIgNgNIgCgEIACgFQAIgQAZgrQANgTAbgmIAAgCQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBAAgBAAIgwACQgGAAAAgFQgDgLABgNQgBgHAGgBQAOgDBBgCIAUABQAFAAABAFIAHAcQAAAEgEAEQgYAggSAaQgmA7gPAdQgDADgDAAQgCAAgLgJg");
	this.shape_2.setTransform(1.1,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AhkBZQgJgEgHgFQgHgFgFgHQgEgIgDgNQgCgKAAgNQAAgQAEgRQADgNAKgbIALgSQAGgJAGgGQAIgHAIgDQAJgEAKAAQAKAAARAJQAKAFAGAFQAIAGAEAHQAFAIACAKQAAAJAAALQAAASgDASQgHAcgHANQgEAKgGAIQgFAIgHAGQgIAHgIADQgKAEgJAAQgLAAgPgIgAhFgzQgIAIgFAOQgHAOgDAPQgEAQAAAOQAAAQAFAIQAEAGAHAAQAIAAAHgJQAHgJAFgPQAGgOADgPQADgRAAgQQAAgNgEgHQgDgFgGAAQgIAAgHAJgAArBZIgPgIIgKgLQgGgJgDgPQgCgNAAgOQAAgPAEgRQAEgNAKgZIALgSQAGgIAIgGQAGgGAJgDQAJgEAJAAQAJAAAQAIQAJAFAHAFQAHAGADAGQAEAFAAAHQAAAKgHAOQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgagGQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAgBAAAAIABgNQAAgKgIAAQgFAAgGADQgFAEgFAGQgFAGgDAIQgFAIgCAJIAAACIABABIABgBIANgIQAGgDAHAAQAIAAAOAIQANAIAFAIQAHAHAAAQQAAALgEANQgDANgIALQgHANgLAGQgFAEgHACQgHACgHAAQgOAAgOgHgAA+AGQgEADgEAGQgGAMgBAOQAAAJAEAGQAEAHAIAAQAFAAAFgEQAFgDADgHQAHgMAAgPQAAgIgDgGQgEgGgIAAQgFAAgGAEg");
	this.shape_3.setTransform(0.6,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAuBdQgVgIgHgGQgGgFgDgJQgCgGgCgMIAAgEQAAgFAFgCQALgFAOgBQACAAABAEQADAOAEAGQAGAIAJAAQAGAAAFgEQAEgDAEgHQAHgNAAgPQAAgJgEgGQgEgFgHAAQgHAAgJAIQgKAIgBAAIgEgBQgLgFgJgJQgBgBAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAgFAIggQAHghAAgFQAAgLAGgCQALgDA/gCIAOAAQAGABAAAFIABAcQAAAEgGABIgyACQgFAAgBABIgCADIgEAOIgCALQAAAAAAABQAAAAAAABQAAAAABAAQAAAAABAAIAHgEQAGgEAGAAQAJAAAMAIQAOAMADAHQAFAJAAANQAAARgFAPQgFAOgJALQgIAKgKAGQgKAGgKAAQgLAAgOgEgAhgBZQgJgEgGgFQgIgFgFgHQgEgIgDgNQgCgKAAgNQAAgQAEgRQADgNAKgbIALgSQAGgJAHgGQAHgHAIgDQAJgEAKAAQALAAARAJQAJAFAGAFQAIAGAEAHQADAIACAKQACAJAAALQAAASgEASQgGAcgGANQgFAKgFAIQgGAIgHAGQgIAHgIADQgJAEgKAAQgKAAgQgIgAhBgzQgHAIgGAOQgGAOgEAPQgDAQAAAOQAAAQAEAIQAEAGAHAAQAIAAAHgJQAHgJAGgPQAFgOADgPQAEgRAAgQQAAgNgEgHQgEgFgGAAQgHAAgIAJg");
	this.shape_4.setTransform(0.4,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AhlBZQgJgEgGgFQgIgFgFgHQgEgIgDgNQgCgKAAgNQAAgQAEgRQADgNAKgbIALgSQAGgJAHgGQAHgHAIgDQAJgEAKAAQALAAARAJQAJAFAGAFQAIAGAEAHQAFAIACAKQABAJAAALQAAASgEASQgHAcgGANQgFAKgFAIQgGAIgHAGQgIAHgIADQgJAEgKAAQgKAAgQgIgAhGgzQgHAIgGAOQgGAOgEAPQgDAQAAAOQAAAQAEAIQAEAGAHAAQAIAAAHgJQAHgJAGgPQAFgOADgPQAEgRAAgQQAAgNgEgHQgEgFgGAAQgHAAgIAJgABHBZQgFgCAAgFIACgaQAAgBAAgBQgBAAAAgBQgBAAAAgBQgBAAgBAAIgwAEQgFAAgCgEIgGgPIgDgNQAAgFACgCIBQhtQACgDADAAQADAAAHAEQABAAAAAAQAAAAABAAQAAAAAAgBQABAAAAgBQABgDAEAAQAHAAAYAIQADACAAADIAAACQgOAwgHAmIgBACQAAAEAEAAIAFAAQAFAAABAFQACAPAAAMQAAAGgFAAIgOAAQgFAAgBAFIgFAmQAAAEgFAAQgJAAgTgHgABSglIgjAxIgBACQAAAAAAABQAAAAABAAQAAAAAAABQABAAAAAAIAVgCQAFgBABgEIAIguIAAgCIgBACg");
	this.shape_5.setTransform(0.4,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AAmBaQgTgKgGgHQgHgIgEgXQAAgFAFgCQARgHAHAAQAEAAABAEQAEANAEAHQAGAIAJAAQAFAAAFgDQAEgDAEgFQAHgLAAgMQAAgGgDgEQgEgFgIAAIgTAEQgEAAgBgFQgGgNAAgGQAAgEAFgCQAbgJAGgDQAJgEAEgFQAGgFAAgGQAAgFgEgDQgDgDgGAAQgIAAgMAFQgLAEgLAHIgDABQgDAAgCgDQgIgTAAgIQAAgEADgCQAJgGAOgGIARgFQAJgCAJAAQAKAAAKAFQAJAFAHAJQAHAHAEAKQADAJAAAJQAAAKgIAJQgHAKgOAHIgCACIACACQAJAFAEAHQAGAIAAAKQAAAKgEAMQgFAMgHAKQgJALgKAHQgQAHgKAAQgLAAgQgHgAhjBZQgIgEgHgFQgIgFgEgHQgFgIgCgNQgCgKAAgNQAAgQAEgRQADgNAKgbIAKgSQAGgJAHgGQAIgHAIgDQAJgEAKAAQAKAAARAJQAJAFAHAFQAIAGAEAHQAEAIABAKQABAJAAALQAAASgCASQgHAcgHANQgEAKgGAIQgGAIgHAGQgHAHgJADQgJAEgJAAQgLAAgQgIgAhDgzQgIAIgGAOQgGAOgDAPQgEAQAAAOQAAAQAFAIQAEAGAHAAQAHAAAIgJQAHgJAFgPQAGgOADgPQADgRAAgQQAAgNgEgHQgDgFgGAAQgIAAgHAJg");
	this.shape_6.setTransform(0.6,-0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAIBdIgIgbQAAgEADgCQAOgJAYgUQARgPANgQQAMgNAIgOQAGgNABgHQgBgGgEgEQgDgCgGAAQgHAAgLAHQgLAJgIANQgBABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAIgDgCQgMgHgHgIQgCgDAAgDIABgDIAHgNQAFgIAHgGQAHgHAJgFQAKgEAKAAQAKAAALAFQALAEAKAJQAKAIAFAKQAHALAAALQAAALgGANQgGAMgJALQgKANgMALQgMALgNAJIgCACIADAAIAiAAQAFAAABAFIAFAaQAAAFgGABIhfAFQgFAAgCgEgAhlBaQgIgEgGgFQgJgGgEgGQgFgIgCgNQgCgLAAgMQAAgQAEgSQADgNAKgbIAKgSQAGgJAIgGQAHgGAIgEQAJgDAKAAQAKAAASAJQAIAEAHAFQAIAHAEAGQAFAIABALQABAJAAALQAAARgDASQgHAcgGANQgFAKgFAIQgGAJgIAGQgHAGgJAEQgJADgJAAQgKAAgRgHgAhFgzQgHAIgHAPQgFANgEAPQgDAQAAAPQAAAQAEAHQAEAHAHAAQAIAAAHgKQAHgIAGgPQAFgPADgPQADgRAAgPQAAgOgDgGQgEgGgGAAQgIAAgHAJg");
	this.shape_7.setTransform(0.6,-0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AhLBZQgIgEgGgFQgJgFgEgHQgEgIgDgNQgCgKAAgNQAAgQAEgRQADgNAKgbIAKgSQAGgJAIgGQAHgHAIgDQAJgEAKAAQALAAARAJQAIAFAFAFQAIAGAEAHQAEAIADAKQACAJAAALQgBASgEASQgHAcgGANQgFAKgDAIQgHAIgHAGQgHAHgJADQgIAEgKAAQgKAAgRgIgAgrgzQgHAIgHAOQgGAOgDAPQgDAQgBAOQABAQAEAIQAEAGAHAAQAHAAAIgJQAHgJAGgPQAFgOADgPQADgRAAgQQAAgNgDgHQgEgFgGAAQgHAAgIAJgAAtBZQgFgCgBgFQABgQAEgaIAJgyIAAgCQAAgEgEgCIgGgCQgEgCAAgDIABgDQAIgQAYgwQADgDAEAAIAeAHQADABAAAFIAAABQgLAogHAgQgNBDgDAiQgBAEgEAAQgMAAgQgHg");
	this.shape_8.setTransform(0.8,-0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AAoBZQgJgEgGgFQgIgFgFgHQgEgIgDgNQgCgKAAgNQAAgQAEgRQADgNAKgbIALgSQAGgJAHgGQAHgHAIgDQAJgEAKAAQALAAARAJQAJAFAGAFQAIAGAEAHQAFAIACAKQACAJAAALQAAASgFASQgHAcgGANQgFAKgFAIQgGAIgHAGQgIAHgIADQgJAEgKAAQgKAAgQgIgABHgzQgHAIgGAOQgGAOgEAPQgDAQAAAOQAAAQAEAIQAEAGAHAAQAIAAAHgJQAHgJAGgPQAFgOADgPQAEgRAAgQQAAgNgEgHQgEgFgGAAQgHAAgIAJgAhoBZQgJgEgGgFQgIgFgFgHQgEgIgDgNQgCgKAAgNQAAgQAEgRQADgNAKgbIALgSQAGgJAHgGQAHgHAIgDQAJgEAKAAQALAAARAJQAJAFAGAFQAIAGAEAHQAFAIACAKQACAJAAALQAAASgFASQgHAcgGANQgFAKgFAIQgGAIgHAGQgIAHgIADQgJAEgKAAQgKAAgQgIgAhJgzQgHAIgGAOQgGAOgEAPQgDAQAAAOQAAAQAEAIQAEAGAHAAQAIAAAHgJQAHgJAGgPQAFgOADgPQAEgRAAgQQAAgNgEgHQgEgFgGAAQgHAAgIAJg");
	this.shape_9.setTransform(0.4,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},29).to({state:[{t:this.shape_2}]},30).to({state:[{t:this.shape_3}]},30).to({state:[{t:this.shape_4}]},30).to({state:[{t:this.shape_5}]},30).to({state:[{t:this.shape_6}]},30).to({state:[{t:this.shape_7}]},30).to({state:[{t:this.shape_8}]},30).to({state:[{t:this.shape_9}]},30).wait(1));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A+gCFQg3AAgngnQgngnAAg3IAAAAQAAg2AngnQAngnA3AAMA9BAAAQA3AAAnAnQAnAnAAA2IAAAAQAAA3gnAnQgnAng3AAg");

	// Слой 4
	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(-425.4,-0.3);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-5.4},269).wait(1));

	// Слой 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#999999").ss(3,1,1).p("A+giEMA9BAAAQA3AAAnAnQAnAnAAA2IAAAAQAAA3gnAnQgnAng3AAMg9BAAAQg3AAgngnQgngnAAg3IAAAAQAAg2AngnQAngnA3AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(270));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.1,-14.8,420.3,29.7);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ6();
	this.instance.setTransform(205.1,18.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(301).to({_off:true},1).wait(1));

	// Слой 10
	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(203.8,-190.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(274).to({_off:false},0).wait(1).to({regX:-0.2,regY:0.1,x:203.6,y:-142.6,alpha:0.529},0).wait(1).to({y:-121,alpha:0.769},0).wait(1).to({y:-111.1,alpha:0.879},0).wait(1).to({y:-105.6,alpha:0.94},0).wait(1).to({y:-102.4,alpha:0.976},0).wait(1).to({regX:0,regY:0,x:203.8,y:-100.3,alpha:1},0).to({y:-110.3},2).wait(10).to({y:-120.3},3).wait(1).to({regX:-0.2,regY:0.1,x:203.6,y:-118.4,alpha:0.98},0).wait(1).to({y:-115.5,alpha:0.948},0).wait(1).to({y:-110.9,alpha:0.897},0).wait(1).to({y:-103.6,alpha:0.815},0).wait(1).to({y:-92,alpha:0.687},0).wait(1).to({y:-72.6,alpha:0.471},0).wait(1).to({regX:0,regY:0,x:203.8,y:-30.3,alpha:0},0).wait(1));

	// Слой 9
	this.instance_2 = new lib.Символ27();
	this.instance_2.setTransform(203.7,-115.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(70).to({_off:false},0).to({alpha:1},7).to({alpha:0},7).wait(1).to({alpha:1},7).to({alpha:0},7).wait(1).to({alpha:1},7).to({alpha:0},7).wait(1).to({alpha:1},7).to({alpha:0},7).wait(1).to({alpha:1},7).to({alpha:0},7).wait(1).to({alpha:1},7).to({alpha:0},7).wait(1).to({alpha:1},7).to({alpha:0},7).wait(1).to({alpha:1},7).to({alpha:0},7).wait(1).to({alpha:1},7).to({alpha:0},7).wait(1).to({alpha:1},7).to({alpha:0},7).wait(1).to({alpha:1},7).to({alpha:0},7).wait(1).to({alpha:1},7).to({alpha:0},7).wait(1).to({alpha:1},7).to({alpha:0},7).wait(39));

	// Слой 13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgrpAQ7MAAAgh1MBXUAAAMAAAAh1g");
	var mask_graphics_269 = new cjs.Graphics().p("EgrpAQ7MAAAgh1MBXUAAAMAAAAh1g");
	var mask_graphics_274 = new cjs.Graphics().p("EgrpAQ7MAAAgh1MBXUAAAMAAAAh1g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:204.5,y:-110.6}).wait(269).to({graphics:mask_graphics_269,x:204.5,y:-110.6}).wait(5).to({graphics:mask_graphics_274,x:204.5,y:-110.6}).wait(29));

	// Слой 1
	this.instance_3 = new lib.Символ3();
	this.instance_3.setTransform(329.7,-114.5);

	this.instance_4 = new lib.Символ2();
	this.instance_4.setTransform(78.6,-72.5);

	this.instance_5 = new lib.Символ1();
	this.instance_5.setTransform(-4.7,-156.5);

	this.instance_6 = new lib.Символ3();
	this.instance_6.setTransform(-46.6,-114.5);

	this.instance_7 = new lib.Символ2();
	this.instance_7.setTransform(-46.6,-30.5);

	this.instance_8 = new lib.Символ4();
	this.instance_8.setTransform(-4.7,-72.5);

	this.instance_9 = new lib.Символ4();
	this.instance_9.setTransform(37.1,-72.5);

	this.instance_10 = new lib.Символ2();
	this.instance_10.setTransform(329.7,-198.5);

	this.instance_11 = new lib.Символ1();
	this.instance_11.setTransform(329.7,-156.5);

	this.instance_12 = new lib.Символ2();
	this.instance_12.setTransform(329.7,-72.5);

	this.instance_13 = new lib.Символ2();
	this.instance_13.setTransform(329.7,-30.5);

	this.instance_14 = new lib.Символ4();
	this.instance_14.setTransform(78.6,-198.5);

	this.instance_15 = new lib.Символ3();
	this.instance_15.setTransform(37.1,-198.5);

	this.instance_16 = new lib.Символ2();
	this.instance_16.setTransform(-4.7,-198.5);

	this.instance_17 = new lib.Символ1();
	this.instance_17.setTransform(-46.6,-198.5);

	this.instance_18 = new lib.Символ4();
	this.instance_18.setTransform(78.6,-156.5);

	this.instance_19 = new lib.Символ3();
	this.instance_19.setTransform(37.1,-156.5);

	this.instance_20 = new lib.Символ1();
	this.instance_20.setTransform(-46.6,-156.5);

	this.instance_21 = new lib.Символ4();
	this.instance_21.setTransform(78.6,-114.5);

	this.instance_22 = new lib.Символ3();
	this.instance_22.setTransform(37.1,-114.5);

	this.instance_23 = new lib.Символ2();
	this.instance_23.setTransform(-4.7,-114.5);

	this.instance_24 = new lib.Символ1();
	this.instance_24.setTransform(-46.6,-72.5);

	this.instance_25 = new lib.Символ4();
	this.instance_25.setTransform(78.6,-30.5);

	this.instance_26 = new lib.Символ3();
	this.instance_26.setTransform(37.1,-30.5);

	this.instance_27 = new lib.Символ2();
	this.instance_27.setTransform(-4.7,-30.5);

	this.instance_28 = new lib.Символ19();
	this.instance_28.setTransform(141.6,-114.5);
	this.instance_28._off = true;

	this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = this.instance_13.mask = this.instance_14.mask = this.instance_15.mask = this.instance_16.mask = this.instance_17.mask = this.instance_18.mask = this.instance_19.mask = this.instance_20.mask = this.instance_21.mask = this.instance_22.mask = this.instance_23.mask = this.instance_24.mask = this.instance_25.mask = this.instance_26.mask = this.instance_27.mask = this.instance_28.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_28}]},269).to({state:[{t:this.instance_28}]},5).to({state:[]},1).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(269).to({_off:false},0).to({alpha:0},5).to({_off:true},1).wait(28));

	// Слой 8
	this.instance_29 = new lib.Символ14();
	this.instance_29.setTransform(413.3,-157);

	this.instance_29.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(65).to({y:-155.6},0).wait(1).to({y:-153.5},0).wait(1).to({y:-150.2},0).wait(1).to({y:-144.7},0).wait(1).to({y:-135},0).wait(1).to({y:-115},0).wait(199).to({alpha:0},5).to({_off:true},1).wait(28));

	// Слой 7
	this.instance_30 = new lib.Символ3();
	this.instance_30.setTransform(455,-30.5);

	this.instance_31 = new lib.Символ3();
	this.instance_31.setTransform(413,-30.5);

	this.instance_32 = new lib.Символ3();
	this.instance_32.setTransform(371.5,-30.5);

	this.instance_33 = new lib.Символ13();
	this.instance_33.setTransform(413.3,-30.5);

	this.instance_30.mask = this.instance_31.mask = this.instance_32.mask = this.instance_33.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_32},{t:this.instance_31},{t:this.instance_30}]}).to({state:[{t:this.instance_33}]},49).to({state:[]},16).wait(238));

	// Слой 6
	this.instance_34 = new lib.Символ12();
	this.instance_34.setTransform(413.4,-220);

	this.instance_34.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(42).to({y:-219},0).wait(1).to({y:-217.8},0).wait(1).to({y:-216.1},0).wait(1).to({y:-213.5},0).wait(1).to({y:-209.3},0).wait(1).to({y:-203.4},0).wait(1).to({y:-194},0).wait(1).to({y:-177},0).wait(16).to({y:-175.6},0).wait(1).to({y:-173.5},0).wait(1).to({y:-170.2},0).wait(1).to({y:-164.7},0).wait(1).to({y:-155},0).wait(1).to({y:-135},0).wait(199).to({alpha:0},5).to({_off:true},1).wait(28));

	// Слой 5
	this.instance_35 = new lib.Символ4();
	this.instance_35.setTransform(371.5,-156.5);

	this.instance_36 = new lib.Символ4();
	this.instance_36.setTransform(455,-156.5);

	this.instance_37 = new lib.Символ4();
	this.instance_37.setTransform(413,-156.5);

	this.instance_38 = new lib.Символ11();
	this.instance_38.setTransform(413.3,-156.5);

	this.instance_35.mask = this.instance_36.mask = this.instance_37.mask = this.instance_38.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_37},{t:this.instance_36},{t:this.instance_35}]}).to({state:[{t:this.instance_38}]},27).to({state:[]},15).wait(261));

	// Слой 4
	this.instance_39 = new lib.Символ10();
	this.instance_39.setTransform(204.2,-156.5);

	this.instance_39.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(19).to({y:-155.9},0).wait(1).to({y:-155.1},0).wait(1).to({y:-153.9},0).wait(1).to({y:-152.2},0).wait(1).to({y:-149.6},0).wait(1).to({y:-145.8},0).wait(1).to({y:-140.1},0).wait(1).to({y:-130.2},0).wait(1).to({y:-115.5},0).wait(242).to({alpha:0},5).to({_off:true},1).wait(28));

	// Слой 3
	this.instance_40 = new lib.Символ9();
	this.instance_40.setTransform(204.2,-30.5);

	this.instance_40.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).to({_off:true},19).wait(284));

	// Слой 11
	this.instance_41 = new lib.Символ31();
	this.instance_41.setTransform(205,-107.8);
	this.instance_41.alpha = 0;
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(70).to({_off:false},0).to({alpha:1},7).to({alpha:0},7).wait(1).to({alpha:1},7).to({alpha:0},7).wait(1).to({alpha:1},7).to({alpha:0},7).wait(1).to({alpha:1},7).to({alpha:0},7).wait(1).to({alpha:1},7).to({alpha:0},7).wait(1).to({alpha:1},7).to({alpha:0},7).to({alpha:1},7).to({alpha:0},7).wait(1).to({alpha:1},7).to({alpha:0},7).wait(1).to({alpha:1},7).to({alpha:0},7).wait(1).to({alpha:1},7).to({alpha:0},7).wait(1).to({alpha:1},7).to({alpha:0},7).wait(1).to({alpha:1},7).to({alpha:0},7).wait(1).to({alpha:1},7).to({alpha:0},7).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-434.8,-219,908.6,253.8);


// stage content:



(lib.bubbles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		
		this.btn.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 6
	this.btn = new lib.Символ24();
	this.btn.setTransform(320,152.5);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.Символ24(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Слой 4
	this.instance = new lib.Символ21();
	this.instance.setTransform(320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(114.9,259.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ8();
	this.instance_2.setTransform(319.8,153.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ22();
	this.instance_3.setTransform(320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,151.3,961.2,307.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;