(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/a1.png", id:"a1"},
		{src:"images/a2.png", id:"a2"},
		{src:"images/a3.png", id:"a3"},
		{src:"images/a4.png", id:"a4"},
		{src:"images/a5.png", id:"a5"},
		{src:"images/a6.png", id:"a6"},
		{src:"images/a7.png", id:"a7"},
		{src:"images/Layer1copy.png", id:"Layer1copy"},
		{src:"images/Layer2.png", id:"Layer2"},
		{src:"images/Layer3.png", id:"Layer3"}
	]
};



// symbols:



(lib.a1 = function() {
	this.initialize(img.a1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,37);


(lib.a2 = function() {
	this.initialize(img.a2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,90);


(lib.a3 = function() {
	this.initialize(img.a3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,28);


(lib.a4 = function() {
	this.initialize(img.a4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,28);


(lib.a5 = function() {
	this.initialize(img.a5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,28);


(lib.a6 = function() {
	this.initialize(img.a6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,28);


(lib.a7 = function() {
	this.initialize(img.a7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,28);


(lib.Layer1copy = function() {
	this.initialize(img.Layer1copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,206);


(lib.Layer2 = function() {
	this.initialize(img.Layer2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,189);


(lib.Layer3 = function() {
	this.initialize(img.Layer3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,79);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.949)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B6B5B5","#FFFFFF"],[0,1],-142.2,-182.9,142.3,183).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.a1();
	this.instance.setTransform(-15.2,-18.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.2,-18.4,30,37);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.949)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.a2();
	this.instance.setTransform(-59.3,-44.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.3,-44.9,119,90);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.a3();
	this.instance.setTransform(-57.3,-13.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57.3,-13.9,115,28);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.a4();
	this.instance.setTransform(-22.5,-13.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.5,-13.8,45,28);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.a5();
	this.instance.setTransform(-39.4,-13.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.4,-13.9,79,28);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.a6();
	this.instance.setTransform(-59.6,-14);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.6,-14,119,28);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.a7();
	this.instance.setTransform(-56.3,-14);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56.3,-14,113,28);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Layer2();
	this.instance.setTransform(-42.5,-94.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.5,-94.5,85,189);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Layer1copy();
	this.instance.setTransform(-95.5,-103);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-95.5,-103,191,206);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Layer3();
	this.instance.setTransform(-28.5,-39.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.5,-39.5,57,79);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:6.7},4,cjs.Ease.get(-1)).to({x:15},5,cjs.Ease.get(1)).to({x:7.5},5,cjs.Ease.get(-1)).to({x:0},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.2,-18.4,30,37);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Слой 5
	this.instance = new lib.Символ23();
	this.instance.setTransform(219.3,5.3,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:7.3,regY:0.1,x:177.7,y:5.2},0).wait(1).to({x:155.5},0).wait(1).to({x:141.2},0).wait(1).to({x:130.9},0).wait(1).to({x:122.7},0).wait(1).to({x:116.2},0).wait(1).to({x:110.9},0).wait(1).to({x:106.6},0).wait(1).to({x:102.9},0).wait(1).to({x:99.9},0).wait(1).to({x:97.4},0).wait(1).to({x:95.2},0).wait(1).to({x:93.5},0).wait(1).to({regX:0,regY:0,x:99.3,y:5.3},0).to({alpha:0},11).to({_off:true},1).wait(4));

	// Слой 4
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(-211.1,5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:7.3,regY:0.1,x:-172.4,y:5.4},0).wait(1).to({x:-152},0).wait(1).to({x:-138.9},0).wait(1).to({x:-129.5},0).wait(1).to({x:-122},0).wait(1).to({x:-116},0).wait(1).to({x:-111.2},0).wait(1).to({x:-107.2},0).wait(1).to({x:-103.8},0).wait(1).to({x:-101},0).wait(1).to({x:-98.7},0).wait(1).to({x:-96.8},0).wait(1).to({x:-95.1},0).wait(1).to({regX:0,regY:0,x:-101.1,y:5.3},0).to({alpha:0},11).to({_off:true},1).wait(4));

	// Слой 2
	this.instance_2 = new lib.Символ19();
	this.instance_2.setTransform(0,0,0.273,0.273,-15);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.51,scaleY:0.51,rotation:-10.2,x:0.1,y:0.1},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-7.3},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-5.4},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-4.1},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-3},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-2.1},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-1.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-1.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-0.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-0.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-0.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-0.1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:0,y:0},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.99,scaleY:0.99,rotation:-0.2,x:0.1,y:0.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-0.5},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-0.9},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-1.4},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-2.2},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-3.2},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:-4.6},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:-6.2},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:-8.5},0).wait(1).to({scaleX:0.44,scaleY:0.44,rotation:-11.5},0).wait(1).to({regX:0,regY:0,scaleX:0.27,scaleY:0.27,rotation:-15,x:0,y:0},0).to({_off:true},1).wait(4));

	// Слой 1
	this.instance_3 = new lib.Символ21();
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},14).wait(1).to({alpha:0.991},0).wait(1).to({alpha:0.979},0).wait(1).to({alpha:0.964},0).wait(1).to({alpha:0.945},0).wait(1).to({alpha:0.92},0).wait(1).to({alpha:0.888},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.794},0).wait(1).to({alpha:0.732},0).wait(1).to({alpha:0.661},0).wait(1).to({alpha:0.575},0).wait(1).to({alpha:0.468},0).wait(1).to({alpha:0.334},0).wait(1).to({alpha:0.175},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226.3,-125,460.9,250);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 11
	this.instance = new lib.Символ11();
	this.instance.setTransform(137.4,82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.1,x:137.5},0).wait(17).to({regX:0,x:137.4},0).wait(1).to({regX:0.1,x:110.6},0).wait(1).to({x:90.6},0).wait(1).to({x:75.6},0).wait(1).to({x:64},0).wait(1).to({x:54.6},0).wait(1).to({x:46.7},0).wait(1).to({x:39.8},0).wait(1).to({x:33.7},0).wait(1).to({x:28.5},0).wait(1).to({x:24},0).wait(1).to({x:20.1},0).wait(1).to({x:16.8},0).wait(1).to({x:13.9},0).wait(1).to({x:11.4},0).wait(1).to({x:9.3},0).wait(1).to({x:7.3},0).wait(1).to({x:5.5},0).wait(1).to({x:3.9},0).wait(1).to({regX:0,x:2.4},0).to({x:-10.6},59).wait(1).to({regX:0.1,x:-8.8},0).wait(1).to({x:-7},0).wait(1).to({x:-5},0).wait(1).to({x:-2.8},0).wait(1).to({x:-0.4},0).wait(1).to({x:2.4},0).wait(1).to({x:5.7},0).wait(1).to({x:9.5},0).wait(1).to({x:14.1},0).wait(1).to({x:19.6},0).wait(1).to({x:26.3},0).wait(1).to({x:34.2},0).wait(1).to({x:43.3},0).wait(1).to({x:53.2},0).wait(1).to({x:64.9},0).wait(1).to({x:79.3},0).wait(1).to({x:98.6},0).wait(1).to({x:124.8},0).wait(1).to({regX:0,x:159.4},0).wait(15));

	// Символ 10
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(172.3,41.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:0.2,y:41.4},0).wait(13).to({regY:0,y:41.2},0).wait(1).to({regY:0.2,x:145.4,y:41.4},0).wait(1).to({x:125.4},0).wait(1).to({x:110.4},0).wait(1).to({x:98.8},0).wait(1).to({x:89.4},0).wait(1).to({x:81.5},0).wait(1).to({x:74.6},0).wait(1).to({x:68.5},0).wait(1).to({x:63.3},0).wait(1).to({x:58.8},0).wait(1).to({x:54.9},0).wait(1).to({x:51.6},0).wait(1).to({x:48.7},0).wait(1).to({x:46.2},0).wait(1).to({x:44.1},0).wait(1).to({x:42.1},0).wait(1).to({x:40.3},0).wait(1).to({x:38.7},0).wait(1).to({regY:0,x:37.3,y:41.2},0).to({x:24.3},59).wait(1).to({regY:0.2,x:25.9,y:41.4},0).wait(1).to({x:27.8},0).wait(1).to({x:29.7},0).wait(1).to({x:31.9},0).wait(1).to({x:34.4},0).wait(1).to({x:37.2},0).wait(1).to({x:40.5},0).wait(1).to({x:44.3},0).wait(1).to({x:48.9},0).wait(1).to({x:54.4},0).wait(1).to({x:61.1},0).wait(1).to({x:69},0).wait(1).to({x:78.1},0).wait(1).to({x:88},0).wait(1).to({x:99.7},0).wait(1).to({x:114.1},0).wait(1).to({x:133.4},0).wait(1).to({x:159.6},0).wait(1).to({regY:0,x:194.3,y:41.2},0).wait(19));

	// Символ 9
	this.instance_2 = new lib.Символ9();
	this.instance_2.setTransform(155.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({x:128.5},0).wait(1).to({x:108.5},0).wait(1).to({x:93.5},0).wait(1).to({x:81.9},0).wait(1).to({x:72.5},0).wait(1).to({x:64.6},0).wait(1).to({x:57.7},0).wait(1).to({x:51.6},0).wait(1).to({x:46.4},0).wait(1).to({x:41.9},0).wait(1).to({x:38},0).wait(1).to({x:34.7},0).wait(1).to({x:31.8},0).wait(1).to({x:29.3},0).wait(1).to({x:27.2},0).wait(1).to({x:25.2},0).wait(1).to({x:23.4},0).wait(1).to({x:21.8},0).wait(1).to({x:20.4},0).to({x:7.4},60).wait(1).to({x:9},0).wait(1).to({x:10.9},0).wait(1).to({x:12.8},0).wait(1).to({x:15},0).wait(1).to({x:17.5},0).wait(1).to({x:20.3},0).wait(1).to({x:23.6},0).wait(1).to({x:27.4},0).wait(1).to({x:32},0).wait(1).to({x:37.5},0).wait(1).to({x:44.2},0).wait(1).to({x:52.1},0).wait(1).to({x:61.2},0).wait(1).to({x:71.1},0).wait(1).to({x:82.8},0).wait(1).to({x:97.2},0).wait(1).to({x:116.5},0).wait(1).to({x:142.7},0).wait(1).to({x:177.4},0).wait(23));

	// Символ 8
	this.instance_3 = new lib.Символ8();
	this.instance_3.setTransform(134.8,-40.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:-0.1,regY:-0.1,x:134.7,y:-40.8},0).wait(4).to({regX:0,regY:0,x:134.8,y:-40.7},0).wait(1).to({regX:-0.1,regY:-0.1,x:107.8,y:-40.8},0).wait(1).to({x:87.8},0).wait(1).to({x:72.8},0).wait(1).to({x:61.2},0).wait(1).to({x:51.8},0).wait(1).to({x:43.9},0).wait(1).to({x:37},0).wait(1).to({x:30.9},0).wait(1).to({x:25.7},0).wait(1).to({x:21.2},0).wait(1).to({x:17.3},0).wait(1).to({x:14},0).wait(1).to({x:11.1},0).wait(1).to({x:8.6},0).wait(1).to({x:6.5},0).wait(1).to({x:4.5},0).wait(1).to({x:2.7},0).wait(1).to({x:1.1},0).wait(1).to({regX:0,regY:0,x:-0.2,y:-40.7},0).to({x:-13.2},60).wait(1).to({regX:-0.1,regY:-0.1,x:-11.6,y:-40.8},0).wait(1).to({x:-9.8},0).wait(1).to({x:-7.8},0).wait(1).to({x:-5.6},0).wait(1).to({x:-3.2},0).wait(1).to({x:-0.3},0).wait(1).to({x:2.9},0).wait(1).to({x:6.7},0).wait(1).to({x:11.3},0).wait(1).to({x:16.8},0).wait(1).to({x:23.5},0).wait(1).to({x:31.4},0).wait(1).to({x:40.5},0).wait(1).to({x:50.4},0).wait(1).to({x:62.1},0).wait(1).to({x:76.5},0).wait(1).to({x:95.8},0).wait(1).to({x:122},0).wait(1).to({regX:0,regY:0,x:156.8,y:-40.7},0).wait(27));

	// Символ 7
	this.instance_4 = new lib.Символ7();
	this.instance_4.setTransform(138.5,-82);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({regX:0.2,x:111.8},0).wait(1).to({x:91.8},0).wait(1).to({x:76.8},0).wait(1).to({x:65.2},0).wait(1).to({x:55.8},0).wait(1).to({x:47.9},0).wait(1).to({x:41},0).wait(1).to({x:34.9},0).wait(1).to({x:29.7},0).wait(1).to({x:25.2},0).wait(1).to({x:21.3},0).wait(1).to({x:18},0).wait(1).to({x:15.1},0).wait(1).to({x:12.6},0).wait(1).to({x:10.5},0).wait(1).to({x:8.5},0).wait(1).to({x:6.7},0).wait(1).to({x:5.1},0).wait(1).to({regX:0,x:3.5},0).to({x:-9.5},60).wait(1).to({regX:0.2,x:-7.6},0).wait(1).to({x:-5.8},0).wait(1).to({x:-3.8},0).wait(1).to({x:-1.6},0).wait(1).to({x:0.8},0).wait(1).to({x:3.6},0).wait(1).to({x:6.9},0).wait(1).to({x:10.7},0).wait(1).to({x:15.3},0).wait(1).to({x:20.8},0).wait(1).to({x:27.5},0).wait(1).to({x:35.4},0).wait(1).to({x:44.5},0).wait(1).to({x:54.4},0).wait(1).to({x:66.1},0).wait(1).to({x:80.5},0).wait(1).to({x:99.8},0).wait(1).to({x:126},0).wait(1).to({regX:0,x:160.5},0).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(75.2,-96,120,192.1);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 2
	this.instance = new lib.Символ2();
	this.instance.setTransform(23.5,-82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1.5,x:23.7,y:-81.8},6,cjs.Ease.get(-1)).to({rotation:3.7,x:24,y:-81},8,cjs.Ease.get(1)).to({rotation:1.8,x:23.8,y:-81.7},7,cjs.Ease.get(-1)).to({rotation:0,x:23.5,y:-82.5},8,cjs.Ease.get(1)).wait(1));

	// Символ 4
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(81,26.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.96,rotation:1,x:79.7,y:26.3},6,cjs.Ease.get(-1)).to({scaleX:0.91,rotation:2.7,x:78,y:25.8},8,cjs.Ease.get(1)).to({scaleX:0.95,rotation:1.3,x:79.5,y:26.3},7,cjs.Ease.get(-1)).to({scaleX:1,rotation:0,x:81,y:26.8},8,cjs.Ease.get(1)).wait(1));

	// Символ 3
	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(-28.5,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.99,x:-28},6,cjs.Ease.get(-1)).to({scaleX:0.99,x:-27.2},8,cjs.Ease.get(1)).to({scaleX:0.99,x:-27.8},7,cjs.Ease.get(-1)).to({scaleX:1,x:-28.5},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124,-122,247.5,244);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ6();
	this.instance.setTransform(176.1,-6.4);

	// Слой 1
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(-9.7,0);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-133.7,-122,505,244);


// stage content:
(lib.man3_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		var _this = this;
		
		//stage
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		{
		    _this.black.gotoAndPlay(1);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		function fl_MouseOutHandler_2()
		{
		    _this.black.gotoAndPlay(15);
		}
		
		//clickTAG
		
		this.btn.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 8
	this.btn = new lib.Символ25();
	this.btn.setTransform(150,125);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.Символ25(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Слой 6
	this.black = new lib.Символ18();
	this.black.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.black).wait(1));

	// Layer 2
	this.main = new lib.Символ5();
	this.main.setTransform(50.3,130.5);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Слой 5
	this.bg = new lib.Символ24();
	this.bg.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(66.5,125,505,252.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;