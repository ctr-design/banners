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
		{src:"images/rty.png", id:"rty"},
		{src:"images/rubchik.png", id:"rubchik"},
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


(lib.rty = function() {
	this.initialize(img.rty);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,85);


(lib.rubchik = function() {
	this.initialize(img.rubchik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,79);


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


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.rubchik();
	this.instance.setTransform(-55.5,-45.6,1.156,1.156);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.5,-45.6,111,91.4);


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


(lib.Символ27 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ25();
	this.instance.setTransform(-0.6,-0.5,0.661,0.661);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.3,-30.6,73.4,60.4);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ27();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.3,-30.6,73.4,60.4);


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


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ22();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.3,-30.6,73.4,60.4);


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


(lib.Символ24копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ23();
	this.instance.setTransform(494,-45.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({guide:{path:[494.6,-45.6,469.3,-160.8,392,-243.2,313.4,-327,217.5,-355.8,121.7,-384.6,13.8,-290.5,-94.2,-196.3,-90.1,-69.1,-89.8,-58.7,-88.7,-48.4]}},17).wait(12));

	// Слой 1
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(47.7,-45.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({guide:{path:[47.8,-45.8,53.1,-148.6,101.7,-223.5,156.4,-307.8,233.4,-307.8,310.7,-307.8,365.3,-223.5,414,-148.4,419.3,-45.4]}},26).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ23();
	this.instance.setTransform(494,-45.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).wait(1).to({x:445.1,y:-172.8},0).wait(1).to({x:393.2,y:-242},0).wait(1).to({x:353.4,y:-280.3},0).wait(1).to({x:325.3,y:-302.4},0).wait(1).to({x:300.2,y:-319},0).wait(1).to({x:277.2,y:-331.9},0).wait(1).to({x:258.8,y:-340.7},0).wait(1).to({x:244.4,y:-346.7},0).wait(1).to({x:233.2,y:-350.9},0).wait(1).to({x:224.6,y:-353.8},0).wait(1).to({x:218,y:-355.8},0).wait(1).to({x:213.1,y:-357.2},0).wait(1).to({x:209.4,y:-358.2},0).wait(1).to({x:206.6,y:-358.9},0).wait(1).to({x:204.3,y:-359.4},0).wait(1).to({x:202.4,y:-359.7},0).wait(1).to({x:197.7,y:-360.6},0).wait(1).to({x:191.9,y:-361.5},0).wait(1).to({x:185.1,y:-362.2},0).wait(1).to({x:177.2,y:-362.7},0).wait(1).to({x:167.8},0).wait(1).to({x:156.7,y:-362},0).wait(1).to({x:143.6,y:-360.3},0).wait(1).to({x:128,y:-356.8},0).wait(1).to({x:109.9,y:-351.1},0).wait(1).to({x:89,y:-342.1},0).wait(1).to({x:65.4,y:-329.2},0).wait(1).to({x:39.7,y:-311.7},0).wait(1).to({x:11.9,y:-289.2},0).wait(1).to({x:-18,y:-259.8},0).wait(1).to({x:-50.1,y:-217.8},0).wait(1).to({x:-81.1,y:-148.4},0).wait(1).to({x:-88.9,y:-48.4},0).wait(10));

	// Слой 1
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(47.7,-45.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:56,y:-111.1},0).wait(1).to({x:68.5,y:-155.9},0).wait(1).to({x:83.2,y:-191},0).wait(1).to({x:98,y:-218},0).wait(1).to({x:111.8,y:-238.3},0).wait(1).to({x:122.3,y:-251.7},0).wait(1).to({x:132.4,y:-262.7},0).wait(1).to({x:142.3,y:-272.1},0).wait(1).to({x:151.5,y:-279.6},0).wait(1).to({x:159.7,y:-285.5},0).wait(1).to({x:166.9,y:-290},0).wait(1).to({x:173.1,y:-293.4},0).wait(1).to({x:178.3,y:-296},0).wait(1).to({x:182.9,y:-298},0).wait(1).to({x:186.8,y:-299.5},0).wait(1).to({x:190.3,y:-300.8},0).wait(1).to({x:193.4,y:-301.8},0).wait(1).to({x:196.2,y:-302.7},0).wait(1).to({x:199.6,y:-303.7},0).wait(1).to({x:203.4,y:-304.6},0).wait(1).to({x:207.6,y:-305.5},0).wait(1).to({x:212.6,y:-306.4},0).wait(1).to({x:218.3,y:-307.2},0).wait(1).to({x:225.2,y:-307.8},0).wait(1).to({x:233.5,y:-308},0).wait(1).to({x:243.5,y:-307.6},0).wait(1).to({x:256.4,y:-306.1},0).wait(1).to({x:273.5,y:-301.9},0).wait(1).to({x:297.2,y:-291.6},0).wait(1).to({x:326.2,y:-270.7},0).wait(1).to({x:360.1,y:-231.5},0).wait(1).to({x:395.6,y:-163.7},0).wait(1).to({x:419.4,y:-45.4},0).to({_off:true},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.3,-76.5,73.4,60.4);


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



(lib.galdiator3 = function(mode,startPosition,loop) {
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

	// Слой 10
	this.kamen = new lib.Символ24копия();
	this.kamen.setTransform(441.8,374.8,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.kamen).wait(1));

	// Слой 1
	this.kamen_1 = new lib.Символ24();
	this.kamen_1.setTransform(70,370);

	this.timeline.addTween(cjs.Tween.get(this.kamen_1).wait(1));

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