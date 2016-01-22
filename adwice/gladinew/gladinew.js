(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg.png", id:"bg"},
		{src:"images/ert.png", id:"ert"},
		{src:"images/l1.png", id:"l1"},
		{src:"images/l2.png", id:"l2"},
		{src:"images/l3.png", id:"l3"},
		{src:"images/l4.png", id:"l4"},
		{src:"images/l5.png", id:"l5"},
		{src:"images/l6.png", id:"l6"},
		{src:"images/qwe.png", id:"qwe"},
		{src:"images/r10.png", id:"r10"},
		{src:"images/r25.png", id:"r25"},
		{src:"images/r5.png", id:"r5"},
		{src:"images/r50.png", id:"r50"},
		{src:"images/rty.png", id:"rty"},
		{src:"images/wer.png", id:"wer"}
	]
};



// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.ert = function() {
	this.initialize(img.ert);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,71);


(lib.l1 = function() {
	this.initialize(img.l1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,78);


(lib.l2 = function() {
	this.initialize(img.l2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,146);


(lib.l3 = function() {
	this.initialize(img.l3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,63);


(lib.l4 = function() {
	this.initialize(img.l4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,42);


(lib.l5 = function() {
	this.initialize(img.l5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,48);


(lib.l6 = function() {
	this.initialize(img.l6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,62);


(lib.qwe = function() {
	this.initialize(img.qwe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,70);


(lib.r10 = function() {
	this.initialize(img.r10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,79);


(lib.r25 = function() {
	this.initialize(img.r25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,79);


(lib.r5 = function() {
	this.initialize(img.r5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,79);


(lib.r50 = function() {
	this.initialize(img.r50);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,79);


(lib.rty = function() {
	this.initialize(img.rty);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,85);


(lib.wer = function() {
	this.initialize(img.wer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,71);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmjBoIgEgfIhwAAIgEAfIgYAAIAAgfIAAgfIASAAIAGgLQADgKAEgRQAFgQACgaQADgbAAgjIBoAAIAACOIAXAAIAAA+gAnyACQgFAcgFAMIA4AAIAAhvIgmAAQgBAsgHAbgAAvBGQgOgHgKgMIgIgMQgDgIgCgJQgEgQgBgSQAAgXAGgQQAEgRAKgMQATgYAjABQAKgBAIACQAJACAGADIAOAIIAKALIAIAMIAFAQQAFARAAAVQAAATgFARQgFARgJAMQgUAYgkAAQgTgBgNgGgAAzg6QgJAOgBAgQAAAMACAKQADALAEAIQAFAIAIAEQAHAFAJAAQATAAAKgPQAFgHACgLQADgLAAgOQAAgNgCgLQgCgLgEgJQgFgIgIgEQgHgFgLAAQgRAAgLAPgAvfBGQgOgHgJgMIgIgMQgEgIgCgJQgEgQAAgSQAAgXAFgQQAEgRALgMQASgYAkABQAKgBAIACQAIACAHADIANAIIAKALIAIAMIAGAQQAFARgBAVQAAATgEARQgFARgKAMQgTAYgkAAQgTgBgOgGgAvag6QgKAOAAAgQAAAMACAKQADALAEAIQAFAIAHAEQAHAFAKAAQASAAAKgPQAFgHADgLQADgLgBgOQAAgNgCgLQgCgLgEgJQgFgIgHgEQgHgFgLAAQgSAAgKAPgASABGQgFgFAAgIQAAgJAFgGQAGgEAIAAQAKAAAGAEQAFAGAAAJQAAAIgFAFQgGAGgKAAQgIAAgGgGgAIOBHIAAirIBsAAIAAAfIhJAAIAAAkIAWgCQAOAAAMADQAMACAIAHQAJAGAEALQAFAHAAAPQAAAPgFALQgFALgJAIQgJAHgNAEQgMADgQABgAIxgFIAAAzIASABQAHAAAGgCQAFgCAEgDQAFgDACgGQADgEAAgHQAAgKgDgFQgCgFgGgCQgEgCgGgBIgNgBgAP5BKQgFgCgHgEIAJgbIAIACIAIABQAFAAAFgEQAEgFACgJIhBh+IAoAAIAkBNIAFAXIABAAIAEgXIAahNIAjAAIg4CPQgGALgGAHQgFAHgIADQgHAEgKAAgAGTBKQgFgCgGgEIAJgbIAIACIAIABQAFAAAEgEQAFgFACgJIhCh+IApAAIAjBNIAFAXIACAAIADgXIAbhNIAjAAIg5CPQgFALgGAHQgGAHgHADQgHAEgKAAgAOmBJIAAhJIhBAAIAABJIgiAAIAAitIAiAAIAABHIBBAAIAAhHIAiAAIAACtgAMDBJIAAhfIACgXIgBAAIgMAYIhBBeIgaAAIAAitIAiAAIAABgIgCAUIABAAIAMgVIBBhfIAaAAIAACtgADxBJIAAirIAxgEQANAAANABQANADAKAGQALAGAGAMQAEAFACAIQABAIAAAIQAAARgGALQgFAMgKAFQgKAHgMAEQgMADgNAAIgPAAIgFgBIAAA8gAEThIIAAA5IAIABIAVgBQAGgBAGgEQAFgEADgFQADgGAAgKQAAgJgCgEQgEgGgEgDQgGgEgGgBIgNgBgAgzBJIAAiOIg9AAIAACOIgjAAIAAitICDAAIAACtgAkSBJIAAhfIACgXIgBAAIgMAYIhBBeIgaAAIAAitIAiAAIAABgIgCAUIABAAIANgVIBBhfIAZAAIAACtgApXBJIgPgnIg1AAIgNAnIgjAAIA/ivIAaAAIA/CvgAptAGIgNgkIgFgbIgCAAIgEAbIgNAkIAlAAgAr7BJIAAiOIg+AAIAACOIgiAAIAAitICCAAIAACtgAxDBJIAAiOIg9AAIAACOIgiAAIAAitICCAAIAACtgASEAVIgGgnIAAhSIAhAAIAABSIgGAng");
	this.shape.setTransform(27.1,0.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-91.7,-9.6,237.5,21);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgwWAE7IAAp1MBgtAAAIAAJ1g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-309.5,-31.5,619,63);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bg();
	this.instance.setTransform(-483.9,-241.9,1.613,1.613);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-483.9,-241.9,967.9,483.9);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egu2AXcMAAAgu3MBdtAAAMAAAAu3g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-300,-150,600,300);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.rty();
	this.instance.setTransform(-33,-42.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33,-42.5,66,85);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.wer();
	this.instance.setTransform(-89.5,-35.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-89.5,-35.5,179,71);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.qwe();
	this.instance.setTransform(-300,-32.8,0.938,0.938);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-300,-32.8,600,65.7);


(lib.Анимация8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.r5();
	this.instance.setTransform(-48,-39.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48,-39.5,96,79);


(lib.Анимация7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.r5();
	this.instance.setTransform(-48,-39.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48,-39.5,96,79);


(lib.Анимация6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.r10();
	this.instance.setTransform(-48,-39.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48,-39.5,96,79);


(lib.Анимация5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.r10();
	this.instance.setTransform(-48,-39.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48,-39.5,96,79);


(lib.Анимация4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.r25();
	this.instance.setTransform(-48,-39.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48,-39.5,96,79);


(lib.Анимация3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.r25();
	this.instance.setTransform(-48,-39.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48,-39.5,96,79);


(lib.Анимация2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.r50();
	this.instance.setTransform(-48,-39.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48,-39.5,96,79);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.r50();
	this.instance.setTransform(-48,-39.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48,-39.5,96,79);


(lib.Слой6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.l6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,165,62);


(lib.Слой5 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.l1, null, new cjs.Matrix2D(1,0,0,1,-56,-39)).s().p("AIPGGQAMgJAKgRQAHgLADgJIAAAugAHKGGIABgDIACADgAovGGIAAsLIReAAIAAKtQgJgPgXACQgyAJgYAAQgDAAgEgDQgFgDgDAAQgPAAggAmQgdAkAAAHQAAAFAVASg");
	this.shape.setTransform(56,39);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,112,78);


(lib.Слой4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.l5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45,48);


(lib.Слой3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.l4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,61,42);


(lib.Слой2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.l3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38,63);


(lib.Слой1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.l2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,127,146);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.89,scaleY:0.89},6,cjs.Ease.get(-1)).to({scaleX:1.17,scaleY:1.17},6,cjs.Ease.get(1)).to({scaleX:1.09,scaleY:1.09},6,cjs.Ease.get(-1)).to({scaleX:0.8,scaleY:0.8},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.3,-7.7,190,16.8);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация7("synched",0);
	this.instance.setTransform(-5.4,4.1);
	this.instance._off = true;

	this.instance_1 = new lib.Анимация8("synched",0);
	this.instance_1.setTransform(-763,-104.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},14).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(1).to({x:-30.1,y:-129.9},0).wait(1).to({x:-62.8,y:-205.3},0).wait(1).to({x:-94.6,y:-255.7},0).wait(1).to({x:-122.7,y:-291},0).wait(1).to({x:-146.9,y:-316.6},0).wait(1).to({x:-168,y:-336.1},0).wait(1).to({x:-190.3,y:-353.7},0).wait(1).to({x:-211.5,y:-368.2},0).wait(1).to({x:-230.2,y:-379.2},0).wait(1).to({x:-246.9,y:-387.7},0).wait(1).to({x:-261.8,y:-394.3},0).wait(1).to({x:-275,y:-399.4},0).wait(1).to({x:-286.6,y:-403.4},0).wait(1).to({x:-296.7,y:-406.5},0).wait(1).to({x:-305.2,y:-408.8},0).wait(1).to({x:-312.1,y:-410.5},0).wait(1).to({x:-317.3,y:-411.7},0).wait(1).to({x:-320.7,y:-412.4},0).wait(1).to({x:-321.9,y:-412.6},0).wait(1).to({x:-326.8,y:-413.6},0).wait(1).to({x:-335.2,y:-415.1},0).wait(1).to({x:-346.2,y:-416.7},0).wait(1).to({x:-359.4,y:-418.1},0).wait(1).to({x:-374.2,y:-419.1},0).wait(1).to({x:-390.6,y:-419.6},0).wait(1).to({x:-408.2,y:-419.3},0).wait(1).to({x:-426.3,y:-418.1},0).wait(1).to({x:-446,y:-415.7},0).wait(1).to({x:-467.4,y:-411.9},0).wait(1).to({x:-490.5,y:-406},0).wait(1).to({x:-515.6,y:-397.5},0).wait(1).to({x:-542.9,y:-385.6},0).wait(1).to({x:-571.7,y:-369.7},0).wait(1).to({x:-601.8,y:-348.9},0).wait(1).to({x:-633.1,y:-322},0).wait(1).to({x:-665.8,y:-287.6},0).wait(1).to({x:-699.1,y:-244.1},0).wait(1).to({x:-732.8,y:-185.7},0).to({_off:true},1).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация5("synched",0);
	this.instance.setTransform(-17.7,-55.2);
	this.instance._off = true;

	this.instance_1 = new lib.Анимация6("synched",0);
	this.instance_1.setTransform(-488.3,-105.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},28).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).wait(1).to({x:-24.7,y:-139.6},0).wait(1).to({x:-36.3,y:-198.7},0).wait(1).to({x:-50.8,y:-246.5},0).wait(1).to({x:-66.2,y:-284.7},0).wait(1).to({x:-81.8,y:-315.9},0).wait(1).to({x:-97.2,y:-341.7},0).wait(1).to({x:-110,y:-360.3},0).wait(1).to({x:-121.9,y:-375.5},0).wait(1).to({x:-133.1,y:-388},0).wait(1).to({x:-143.7,y:-398.5},0).wait(1).to({x:-153.7,y:-407.3},0).wait(1).to({x:-163.3,y:-414.6},0).wait(1).to({x:-172.3,y:-420.7},0).wait(1).to({x:-180.8,y:-425.7},0).wait(1).to({x:-188.6,y:-429.8},0).wait(1).to({x:-195.9,y:-433},0).wait(1).to({x:-202.5,y:-435.6},0).wait(1).to({x:-208.5,y:-437.7},0).wait(1).to({x:-213.7,y:-439.2},0).wait(1).to({x:-218.1,y:-440.4},0).wait(1).to({x:-224.5,y:-441.8},0).wait(1).to({x:-232.6,y:-443.2},0).wait(1).to({x:-242.4,y:-444.3},0).wait(1).to({x:-253.7,y:-444.7},0).wait(1).to({x:-266.2,y:-444.3},0).wait(1).to({x:-280.6,y:-442.5},0).wait(1).to({x:-296.8,y:-438.8},0).wait(1).to({x:-314.4,y:-432.5},0).wait(1).to({x:-333.2,y:-422.8},0).wait(1).to({x:-352.4,y:-409.6},0).wait(1).to({x:-371.5,y:-392.6},0).wait(1).to({x:-390.1,y:-372},0).wait(1).to({x:-407.9,y:-347.7},0).wait(1).to({x:-424.8,y:-320.2},0).wait(1).to({x:-440.7,y:-289.4},0).wait(1).to({x:-456.1,y:-252.3},0).wait(1).to({x:-469.8,y:-209.6},0).wait(1).to({x:-480.8,y:-160.9},0).to({_off:true},1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.setTransform(0.7,-47.6);
	this.instance._off = true;

	this.instance_1 = new lib.Анимация4("synched",0);
	this.instance_1.setTransform(571.5,-111);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},20).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).wait(1).to({x:6.5,y:-108.5},0).wait(1).to({x:18.8,y:-168.2},0).wait(1).to({x:38.5,y:-226.7},0).wait(1).to({x:62.7,y:-276.8},0).wait(1).to({x:87.4,y:-315.7},0).wait(1).to({x:108.6,y:-343.2},0).wait(1).to({x:124.3,y:-360.5},0).wait(1).to({x:138.7,y:-374.4},0).wait(1).to({x:151.7,y:-385.4},0).wait(1).to({x:163.8,y:-394.5},0).wait(1).to({x:175.2,y:-402},0).wait(1).to({x:185.8,y:-408.1},0).wait(1).to({x:195.7,y:-413.3},0).wait(1).to({x:205.1,y:-417.5},0).wait(1).to({x:213.7,y:-421},0).wait(1).to({x:221.8,y:-423.8},0).wait(1).to({x:229.2,y:-426.1},0).wait(1).to({x:236,y:-427.9},0).wait(1).to({x:242.2,y:-429.4},0).wait(1).to({x:247.1,y:-430.4},0).wait(1).to({x:253.4,y:-431.5},0).wait(1).to({x:260.8,y:-432.6},0).wait(1).to({x:269.2,y:-433.5},0).wait(1).to({x:278.6,y:-434.2},0).wait(1).to({x:288.9,y:-434.4},0).wait(1).to({x:300.2,y:-434.1},0).wait(1).to({x:312.6,y:-433.2},0).wait(1).to({x:326.6,y:-431.3},0).wait(1).to({x:342.3,y:-427.9},0).wait(1).to({x:360.3,y:-422.5},0).wait(1).to({x:381,y:-414},0).wait(1).to({x:404.6,y:-401},0).wait(1).to({x:429.5,y:-383.1},0).wait(1).to({x:454.8,y:-359.8},0).wait(1).to({x:479.9,y:-330.6},0).wait(1).to({x:504.4,y:-295.6},0).wait(1).to({x:528.7,y:-251.7},0).wait(1).to({x:552.2,y:-193.1},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// r50.png
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(-37.9,-68);

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.setTransform(857,-68.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:29,y:-241.7},0).wait(1).to({x:98.1,y:-319.3},0).wait(1).to({x:149.6,y:-359.7},0).wait(1).to({x:191.3,y:-384.8},0).wait(1).to({x:228.3,y:-402.1},0).wait(1).to({x:261.4,y:-414.1},0).wait(1).to({x:288.6,y:-421.8},0).wait(1).to({x:309.7,y:-426.6},0).wait(1).to({x:326.6,y:-429.6},0).wait(1).to({x:340.7,y:-431.7},0).wait(1).to({x:352.4,y:-433.1},0).wait(1).to({x:362.2,y:-434},0).wait(1).to({x:370.4,y:-434.6},0).wait(1).to({x:377.2,y:-435.1},0).wait(1).to({x:382.7,y:-435.4},0).wait(1).to({x:387,y:-435.6},0).wait(1).to({x:390.2,y:-435.7},0).wait(1).to({x:392.2},0).wait(1).to({x:392.9},0).wait(1).to({x:394.2,y:-435.8},0).wait(1).to({x:397.7,y:-435.9},0).wait(1).to({x:403.2},0).wait(1).to({x:410.3},0).wait(1).to({x:418.8,y:-435.8},0).wait(1).to({x:428.3,y:-435.6},0).wait(1).to({x:439.4,y:-435},0).wait(1).to({x:452.1,y:-434.1},0).wait(1).to({x:466.6,y:-432.7},0).wait(1).to({x:483.1,y:-430.6},0).wait(1).to({x:502,y:-427.4},0).wait(1).to({x:523.8,y:-422.7},0).wait(1).to({x:549.5,y:-415.7},0).wait(1).to({x:579.9,y:-405.2},0).wait(1).to({x:613,y:-390.7},0).wait(1).to({x:649,y:-370.9},0).wait(1).to({x:689.1,y:-343.2},0).wait(1).to({x:734.8,y:-303.2},0).wait(1).to({x:787.3,y:-241},0).to({_off:true},1).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.9,-107.5,96,79);


(lib.Символ26 = function() {
	this.initialize();

	// r50.png
	this.kamen = new lib.Символ29();
	this.kamen.setTransform(-429.9,0,0.671,0.671);

	// r25.png
	this.instance = new lib.Символ30();
	this.instance.setTransform(-250,0,0.671,0.671);

	// r10.png
	this.instance_1 = new lib.Символ31();
	this.instance_1.setTransform(-71.3,0,0.671,0.671);

	// r5.png
	this.instance_2 = new lib.Символ32();
	this.instance_2.setTransform(98,0,0.671,0.671);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.kamen);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-487.5,-72.1,64.4,53);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-150,600,300);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.setTransform(-33,42.5,1,1,0,0,0,-33,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-2.5},2,cjs.Ease.get(-1)).to({regY:42.6,rotation:-6.5,y:42.6},3,cjs.Ease.get(1)).to({rotation:-3.8},2,cjs.Ease.get(-1)).to({regY:42.5,rotation:0,y:42.5},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-42.5,66,85);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Слой2();
	this.instance.setTransform(0,0,1,1,0,0,0,19,31.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19,-31.5,38,63);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Слой3();
	this.instance.setTransform(0,0,1,1,0,0,0,30.5,21);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.5,-21,61,42);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Слой6();
	this.instance.setTransform(-19.7,-3.2,1,1,0,0,0,62.8,27.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-7.3},4,cjs.Ease.get(-1)).to({regX:62.7,regY:27.7,rotation:-15,x:-19.8,y:-3.3},5,cjs.Ease.get(1)).wait(5).to({regX:62.8,regY:27.8,rotation:0,x:-19.7,y:-3.2},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-31,165,62);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(28.2,-2.5,1,1,0,0,0,28.2,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:28.3,rotation:2,x:28.3},4,cjs.Ease.get(-1)).to({regX:28.2,rotation:4.9,x:28.2},5,cjs.Ease.get(1)).to({rotation:2.3,y:-2.4},5,cjs.Ease.get(-1)).to({rotation:0,y:-2.5},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,-21,61,42);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(13.8,-30.2,1,1,0,0,0,13.8,-30.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.6},5,cjs.Ease.get(-1)).to({rotation:6.7},4,cjs.Ease.get(1)).to({rotation:3.3},5,cjs.Ease.get(-1)).to({rotation:0},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-31.5,38,63);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Слой1();
	this.instance.setTransform(0,0,1,1,0,0,0,63.5,73);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.5,-73,127,146);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Слой4();
	this.instance.setTransform(0,0,1,1,0,0,0,22.5,24);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.5,-24,45,48);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(-26,63);

	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(31.5,52.5);

	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(0,-11);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.5,-84,127,168);


(lib.Символ11 = function() {
	this.initialize();

	// Символ 6
	this.instance = new lib.Слой5();
	this.instance.setTransform(27,0,1,1,0,0,0,56,39);

	// Символ 7
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(-0.5,5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83,-39,166,78);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(0,-36,1,1,0,0,0,0,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-2.3,y:-34.5},4,cjs.Ease.get(-1)).to({rotation:-4.7,y:-33},4,cjs.Ease.get(1)).to({regX:-0.1,rotation:-2.5,y:-34.4},4,cjs.Ease.get(-1)).to({regX:0,rotation:-0.5,y:-35.6},4,cjs.Ease.get(1)).to({rotation:0,y:-36},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-39,166,78);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.5,-24,45,48);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-0.5,y:0.9},5,cjs.Ease.get(-1)).to({x:-1,y:1.5},4,cjs.Ease.get(1)).to({x:-0.5,y:0.8},5,cjs.Ease.get(-1)).to({x:0,y:0},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-24,45,48);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 6
	this.instance = new lib.Символ10();
	this.instance.setTransform(-0.7,-73,1,1,0,0,0,0.8,-36.5);

	// Символ 2
	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(20,-77.5);

	// Слой 3
	this.instance_2 = new lib.Символ12();
	this.instance_2.setTransform(21,17.5);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.5,-101.5,169,203);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:2.2},4,cjs.Ease.get(-1)).to({y:5},5,cjs.Ease.get(1)).to({y:2.5},5,cjs.Ease.get(-1)).to({y:1.6},1,cjs.Ease.get(1)).to({y:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.5,-101.5,169,203);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:2.2},4,cjs.Ease.get(-1)).to({x:5},5,cjs.Ease.get(1)).to({x:2.5},5,cjs.Ease.get(-1)).to({x:0.4},3,cjs.Ease.get(1)).to({x:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.5,-101.5,169,203);


// stage content:



(lib.gladinew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		var _this = this;
		this.cursor = "none";
		this.kamen.cursor = "none";
		stage.canvas.style.cursor = "none";
		this.prizel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.prizel.x = stage.mouseX;
			this.prizel.y = stage.mouseY;
		}
		
		
		this.addEventListener("tick", fl_CustomMouseCursor2.bind(this));
		
		function fl_CustomMouseCursor2() {
		
		this.fon.x = - stage.mouseX / 10;
		this.fon.y = - stage.mouseY / 10;
		}
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// cursor
	this.prizel = new lib.Символ19();
	this.prizel.setTransform(421.3,125.4,1.068,1,0,0,180,33,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.prizel).wait(1));

	// Слой 4
	this.instance = new lib.ert();
	this.instance.setTransform(421.3,0);

	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(89.5,35.5);

	this.instance_2 = new lib.Символ6();
	this.instance_2.setTransform(300,267.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 5
	this.kamen = new lib.Символ26();
	this.kamen.setTransform(463,352.5);

	this.timeline.addTween(cjs.Tween.get(this.kamen).wait(1));

	// Слой 9
	this.btn = new lib.Символ20();
	this.btn.setTransform(300,150);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.Символ20(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ35();
	this.instance_3.setTransform(268.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 3
	this.instance_4 = new lib.Символ34();
	this.instance_4.setTransform(296.5,11.5);
	this.instance_4.alpha = 0.41;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 6
	this.instance_5 = new lib.Символ16();
	this.instance_5.setTransform(283.5,170.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 8
	this.fon = new lib.Символ28();
	this.fon.setTransform(-140.9,27,1,1,0,0,0,-440.9,-123);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(116.1,58.1,967.9,483.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;