(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/ballon.png", id:"ballon"},
		{src:"images/buble1.png", id:"buble1"},
		{src:"images/spenceralley2_by_eclesi4stikd6m179f_03.png", id:"spenceralley2_by_eclesi4stikd6m179f_03"},
		{src:"images/spenceralley2_by_eclesi4stikd6m179f_06.png", id:"spenceralley2_by_eclesi4stikd6m179f_06"},
		{src:"images/spenceralley2_by_eclesi4stikd6m179f_09.png", id:"spenceralley2_by_eclesi4stikd6m179f_09"},
		{src:"images/spenceralley2_by_eclesi4stikd6m179f_12.png", id:"spenceralley2_by_eclesi4stikd6m179f_12"},
		{src:"images/spenceralley2_by_eclesi4stikd6m179f_15.png", id:"spenceralley2_by_eclesi4stikd6m179f_15"},
		{src:"images/spenceralley2_by_eclesi4stikd6m179f_17.png", id:"spenceralley2_by_eclesi4stikd6m179f_17"},
		{src:"images/spenceralley2_by_eclesi4stikd6m179f_22.png", id:"spenceralley2_by_eclesi4stikd6m179f_22"},
		{src:"images/spenceralley2_by_eclesi4stikd6m179f_24.png", id:"spenceralley2_by_eclesi4stikd6m179f_24"},
		{src:"images/villajpgкопия.jpg", id:"villajpgкопия"},
		{src:"images/watergun.png", id:"watergun"}
	]
};



// symbols:



(lib.ballon = function() {
	this.initialize(img.ballon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,101);


(lib.buble1 = function() {
	this.initialize(img.buble1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,190);


(lib.spenceralley2_by_eclesi4stikd6m179f_03 = function() {
	this.initialize(img.spenceralley2_by_eclesi4stikd6m179f_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,84);


(lib.spenceralley2_by_eclesi4stikd6m179f_06 = function() {
	this.initialize(img.spenceralley2_by_eclesi4stikd6m179f_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,102);


(lib.spenceralley2_by_eclesi4stikd6m179f_09 = function() {
	this.initialize(img.spenceralley2_by_eclesi4stikd6m179f_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,91);


(lib.spenceralley2_by_eclesi4stikd6m179f_12 = function() {
	this.initialize(img.spenceralley2_by_eclesi4stikd6m179f_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,127);


(lib.spenceralley2_by_eclesi4stikd6m179f_15 = function() {
	this.initialize(img.spenceralley2_by_eclesi4stikd6m179f_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,104);


(lib.spenceralley2_by_eclesi4stikd6m179f_17 = function() {
	this.initialize(img.spenceralley2_by_eclesi4stikd6m179f_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,113);


(lib.spenceralley2_by_eclesi4stikd6m179f_22 = function() {
	this.initialize(img.spenceralley2_by_eclesi4stikd6m179f_22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,175);


(lib.spenceralley2_by_eclesi4stikd6m179f_24 = function() {
	this.initialize(img.spenceralley2_by_eclesi4stikd6m179f_24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,167);


(lib.villajpgкопия = function() {
	this.initialize(img.villajpgкопия);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,410);


(lib.watergun = function() {
	this.initialize(img.watergun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,208,209);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.buble1();
	this.instance.setTransform(0,0,2.805,3.024);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1122.2,574.5);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ABiB8QgSAAgQgGIgLgGQgHgGgGgHQgJgNgBgPQgDgOABglIAAgnIACglIACgNQABgPAJgMQAJgMAPgHIAEgBQAOgFASAAQASABAPAGQAQAGAJANIADAGQAGAKABALQABAPAAAkIgBAnQAAAkgBAPQgCAOgJANQgKAMgPAGQgNAGgTAAIgDAAgABehNQgDAEgBASIgBBtQAAAUACAFQACAFAFAAQAHAAACgFQACgGAAgVIABhrQAAgRgBgEQgCgFgGAAQgFAAgCAEgAHBB8IABhsIghBrIg2AAIADjsIA0ABIgCBrIAkhrIAzABIgCDrgAEUB5IABhbQgHAIgMAFQgMAFgNgBQgWAAgJgMQgLgNABgYIAChxIA+ABIgCBrIABAMIACAFQABAFAHAAQAFAAAEgFQAEgGAAgLIABhrIA+ABIgCDrgAgwB1IACieIgYCeIgmAAIgUibIgCCaIg2AAIADjrIBQABIAOBuIAQhuIBOABIgDDrgAkCBzIgCgrIgWAAIgFAqIg/AAIAijrIBaABIAfDsgAkFAeIgBgHQgEglgDg2QgIA4gEAdIgBANIAVAAIAAAAgAmnBxIABhkIgSAAIgBBkIg+gBIAEjrIA9ABIgBBUIASAAIABhUIA+ABIgDDrg");
	this.shape.setTransform(53.8,12.7);

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ApeC0QgigBABgiIADkxQABgjAiABIS4APQAhAAAAAiIgEEyQgBAigiAAg");
	this.shape_1.setTransform(53.8,13);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.3,-6.6,128.2,39.2);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AHdBpIAAgbIADAAQAKAAADgCQACgCABgDIgEgSIgcibQgGAIAAAWIAAAkQAAAhgkADQAkAEAAAhIAAAiQAAAYAHAKIgyAAQgJgIAAgXIAAgpQAAgIgFgEQgEgFgIAAIAABZIg3AAIAAjRIA3AAIAABZQAQAAAAgRIABgpQABgXAIgIIBhAAIAQCBIAJiBIAwAAIgQCKQgDAhgEANQgEANgMAGQgLAGgbAAgAB0BpIAAjRIA2AAIAACnIAQAAIAAinIA3AAIAACnIAQAAIAAinIA3AAIAADRgAAoBpIAAjRIA3AAIAADRgAhnBpIAAjRIA2AAIAABIIAJAAQAZAAANAEQAMACAGALQAGAKAAAUIAAApQAAAXgGAKQgGAKgLADQgLADgcAAgAgxBEQALAAAEgCQADgDAAgOIAAgeQAAgOgCgCQgDgDgNAAgAi0BpIAAinIgPAAIAAB2QgBAXgGAKQgGAKgMADQgMADgbAAIhAAAIgDgmIgUAAIgDAmIg5AAIAcjQIBPAAIAfDNIAAgiQAKAAAEgCQAEgCAAgPIAAiZIB9AAIAADRgAlIAeQgEgigEg1QgIA7gDAcIATAAIAAAAgAnPBpIAAiMIgTCMIgiAAIgUiJIAACJIgvAAIAAjQIBGAAIAOBiIANhiIBHAAIAADQg");
	this.shape.setTransform(68.1,13);

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Aq3DVQgkAAAAglIABljQAAgkAlgBIVsAFQAmAAgBAkIgBFjQAAAlglAAg");
	this.shape_1.setTransform(67.9,13.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.3,-8.6,146.5,43.4);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("ACWgMQAAACAAADQAAA8grAsQgqArg7ABQgBAAgCAAQg7AAgrgsQgrgsAAg8QAAgDAAgEIAiAAADjgMQAAADAAADQAABchBBCQhABChcAAQhbAAhBhCQhBhCAAhcQAAgEAAgEIBJAAQAAgFABgDQAFg0AlgnQArgsA7AAQACAAABAAQA7ABAqArQAmAnAEA0QABAFAAAFgAB6gMIAcAAAAGjoQBcAABABCQA8A8AFBUQAAAFAAAFIBRAAAAGidIAAA/AAGjoIAABLAAGkxIAABJAkzgOIBcAAQAAgFABgDQAFhUA7g8QBBhCBbAAAAGBWIAAA3IAABNIAABY");
	this.shape.setTransform(30.9,30.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,63.8,63.3);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099CC").s().p("Ag/ZcQg6AAAAg8MAAAgw/QAAg8A6AAIB+AAQA7AAAAA8MAAAAw/QAAA8g7AAg");
	this.shape.setTransform(12.3,162.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.5,325.6);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0092DF","#FFFFFF","#0092DF"],[0.094,0.686,1],-24.6,0,24.6,0).s().p("AjDZfQgyAAAAgyMAAAgxZQAAgyAyAAIGHAAQAyAAAAAyMAAAAxZQAAAygyAAg");
	this.shape.setTransform(24.6,163.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,49.3,326.3);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("x10", "30px 'Impact'", "#E8D202");
	this.text.lineHeight = 32;
	this.text.lineWidth = 100;
	this.text.setTransform(51.7,32.6);

	this.instance = new lib.ballon();
	this.instance.setTransform(0,0,0.841,0.841);

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnUDCIAAmDIN3AAQAyAAAAAyIAAEfQAAAygyAAg");
	this.shape.setTransform(74.2,53.4);

	this.addChild(this.shape,this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,155.7,85);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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QgFAFgJADQgHADgLAAQgVAAgJgJgAgfx9QgIgCgFgGQgEgFgCgHQgCgJAAgPIAAgdQAAgRADgJQAEgKAJgFQAJgGAPAAQAMAAAGAEQAJAEAFAFQAFAGABAGQACAGAAANIAAAdQAAAPgCAIQgBAHgFAHQgGAHgIADQgGACgLAAQgMABgIgDgAgPzeQgBADAAAJIAAA1QAAAJABACQAAABAAAAQABABAAAAQABAAAAAAQABABABAAQABAAAAgBQABAAABAAQAAAAABgBQAAAAAAAAIABgLIAAg2QAAgJgBgDQgBgCgDAAQgBAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAgAgz0lIAAiHIAkAAIAAAKQAEgGAGgDQAFgDAGAAQAIAAAGAEQAGAFACAGQABAGAAAOIAAAxQAAARgBAHQgCAGgGAEQgGAEgJAAQgFAAgFgDQgGgDgEgGIAAAbgAgO2WQgBACAAAKIAAAxQAAALABADQABACADAAQABAAABAAQABAAAAAAQABgBAAAAQABgBAAAAIAAgMIAAgzIAAgNQgBgCgEgBQgDAAgBAEgAgD3wIAAheIgNAAIAABeIgjAAIAAh2IBSAAIAAB2g");
	this.shape.setTransform(5.9,164);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.8,327.9);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.watergun();
	this.instance.setTransform(121.7,-16.8,0.807,0.807,15);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(78.1,-16.8,205.8,206.4);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.spenceralley2_by_eclesi4stikd6m179f_03();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,84,84);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.spenceralley2_by_eclesi4stikd6m179f_06();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41,102);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.spenceralley2_by_eclesi4stikd6m179f_09();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,46,91);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.spenceralley2_by_eclesi4stikd6m179f_12();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,84,127);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.spenceralley2_by_eclesi4stikd6m179f_15();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,46,104);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.spenceralley2_by_eclesi4stikd6m179f_17();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,46,113);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.spenceralley2_by_eclesi4stikd6m179f_22();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,175);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhRMkQgLAAgdgPQgagNgNgKQgJgHgNgQQgOgSAAgHQAAgDACgCQgNgVgJgaQgwiIiWmgQiWmeB6kdQB6keG5BZQG7BYhOF4QhOF2iQFPQiPFOgBAnQAAAQgaAKQgFAHgaADIgBABIAAAAQgUAAgLACIgfAAIgCgBIgiAAIgMACQgHgCgKAAQgKAAgFACIgBAAg");
	mask.setTransform(57.9,81.6);

	// Слой 1
	this.instance = new lib.spenceralley2_by_eclesi4stikd6m179f_24();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(8.2,1.1,98.9,161);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099CC").s().p("Ai8EGQgzAAAAgyIAAmnQAAgyAzAAIF5AAQAzAAAAAyIAAGnQAAAygzAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24,-26.2,48,52.6);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(561.1,-265.4,1,1,0,0,0,561.1,287.2);

	this.instance_1 = new lib.Символ26();
	this.instance_1.setTransform(561.1,287.2,1,1,0,0,0,561.1,287.2);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-552.6,1122.2,1127.1);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(561.1,287.2,1,1,0,0,0,561.1,287.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:839.8},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-552.6,1122.2,1127.1);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 21
	this.instance = new lib.Символ21();
	this.instance.setTransform(3.2,3.2,1.217,1.217,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:1.07,x:3,y:8.1},14).to({scaleX:1.22,scaleY:1.22,x:3.2,y:3.2},15).wait(1));

	// Символ 20
	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(407.1,5.4,1.085,1.085,15,0,0,65.9,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:66.1,regY:12,scaleX:1.43,scaleY:1.43,x:397.6,y:5.8},14).to({regX:65.9,regY:11.8,scaleX:1.09,scaleY:1.09,x:407.1,y:5.4},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-41.7,502.8,92.4);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(24,58.2,1,0.369,0,0,0,0,26.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:26.3,scaleY:0.55,y:58.3},9).to({regY:26.2,scaleY:0.37,y:58.2},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,38.9,48,19.4);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ15();
	this.instance.setTransform(24,298.7,1,1,0,0,0,24,26.2);

	// Слой 1
	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(24.6,163.2,1,1,0,0,0,24.6,163.2);
	this.instance_1.alpha = 0.512;
	this.instance_1.compositeOperation = "lighter";

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,49.3,330.8);


(lib.Символ1копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// spenceralley2_by_eclesi4stik-d6m179f_24.png
	this.instance = new lib.Символ2();
	this.instance.setTransform(52.6,245.6,1,1.001,0,2.7,0,53.5,83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:3.7,x:53.9},19).to({scaleY:1,skewX:2.7,x:52.6},20).wait(1));

	// spenceralley2_by_eclesi4stik-d6m179f_22.png
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(51.3,403.6,1,1.001,0,-2.3,0,32,87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	// spenceralley2_by_eclesi4stik-d6m179f_17.png
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(29.8,171.3,1,1,0,0,0,27.9,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-7.2,x:29.9},19).to({rotation:0,x:29.8},20).wait(1));

	// spenceralley2_by_eclesi4stik-d6m179f_03.png
	this.instance_3 = new lib.Символ9();
	this.instance_3.setTransform(67.1,66.4,1,1,0.7,0,0,52.6,65);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-5.7,x:63.8,y:65.3},19).to({rotation:0.7,x:67.1,y:66.4},20).wait(1));

	// spenceralley2_by_eclesi4stik-d6m179f_12.png
	this.instance_4 = new lib.Символ6();
	this.instance_4.setTransform(60.9,120.9,1,1,0,0,0,42,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:42.1,scaleY:1,skewX:-4,x:60.2},19).to({regX:42,scaleY:1,skewX:0,x:60.9},20).wait(1));

	// spenceralley2_by_eclesi4stik-d6m179f_15.png
	this.instance_5 = new lib.Символ5();
	this.instance_5.setTransform(96.6,167.2,1,1.004,0,-1.2,-6,23,8.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:23.1,scaleY:1,skewX:-4.5,x:99.8,y:166.9},19).to({regX:23,scaleY:1,skewX:-1.2,x:96.6,y:167.2},20).wait(1));

	// spenceralley2_by_eclesi4stik-d6m179f_09.png
	this.instance_6 = new lib.Символ7();
	this.instance_6.setTransform(27.6,98.7,1,1,0,0,0,23,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:23.1,scaleY:1,skewX:-2.8,x:24.2},19).to({regX:23,scaleY:1,skewX:0,x:27.6},20).wait(1));

	// spenceralley2_by_eclesi4stik-d6m179f_06.png
	this.instance_7 = new lib.Символ8();
	this.instance_7.setTransform(97.2,96,1,1,0,0,0,20.5,23.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleY:1,skewX:-3.2,x:95.9},19).to({scaleY:1,skewX:0,x:97.2},20).wait(1));

	// Слой 2
	this.instance_8 = new lib.Символ25();
	this.instance_8.setTransform(85,203.5,1,1,0,0,0,561.1,287.2);
	this.instance_8.alpha = 0.391;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-476.1,-636.3,1122.2,1127.4);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// spenceralley2_by_eclesi4stik-d6m179f_24.png
	this.instance = new lib.Символ2();
	this.instance.setTransform(52.6,245.6,1,1.001,0,2.7,0,53.5,83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:3.7,x:53.9},19).to({scaleY:1,skewX:2.7,x:52.6},20).wait(1));

	// spenceralley2_by_eclesi4stik-d6m179f_22.png
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(51.3,403.6,1,1.001,0,-2.3,0,32,87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	// spenceralley2_by_eclesi4stik-d6m179f_17.png
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(29.8,171.3,1,1,0,0,0,27.9,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-7.2,x:29.9},19).to({rotation:0,x:29.8},20).wait(1));

	// spenceralley2_by_eclesi4stik-d6m179f_03.png
	this.instance_3 = new lib.Символ9();
	this.instance_3.setTransform(67.1,66.4,1,1,0.7,0,0,52.6,65);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-5.7,x:63.8,y:65.3},19).to({rotation:0.7,x:67.1,y:66.4},20).wait(1));

	// spenceralley2_by_eclesi4stik-d6m179f_12.png
	this.instance_4 = new lib.Символ6();
	this.instance_4.setTransform(60.9,120.9,1,1,0,0,0,42,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:42.1,scaleY:1,skewX:-4,x:60.2},19).to({regX:42,scaleY:1,skewX:0,x:60.9},20).wait(1));

	// spenceralley2_by_eclesi4stik-d6m179f_15.png
	this.instance_5 = new lib.Символ5();
	this.instance_5.setTransform(96.6,167.2,1,1.004,0,-1.2,-6,23,8.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:23.1,scaleY:1,skewX:-4.5,x:99.8,y:166.9},19).to({regX:23,scaleY:1,skewX:-1.2,x:96.6,y:167.2},20).wait(1));

	// spenceralley2_by_eclesi4stik-d6m179f_09.png
	this.instance_6 = new lib.Символ7();
	this.instance_6.setTransform(27.6,98.7,1,1,0,0,0,23,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:23.1,scaleY:1,skewX:-2.8,x:24.2},19).to({regX:23,scaleY:1,skewX:0,x:27.6},20).wait(1));

	// spenceralley2_by_eclesi4stik-d6m179f_06.png
	this.instance_7 = new lib.Символ8();
	this.instance_7.setTransform(97.2,96,1,1,0,0,0,20.5,23.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleY:1,skewX:-3.2,x:95.9},19).to({scaleY:1,skewX:0,x:97.2},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,0.7,126.3,490.4);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(47.7,202.6,0.826,0.826,0,0,0,59.6,246.1);

	this.instance_1 = new lib.Символ1копия();
	this.instance_1.setTransform(47.7,202.6,0.826,0.826,0,0,0,59.6,246.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,0,104.2,404.8);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ11();
	this.instance.setTransform(24.8,159.8,0.927,0.86,0,0,0,5.9,164);

	// Слой 3
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(24,158.9,0.927,0.927,0,0,0,12.2,162.8);
	this.instance_1.alpha = 0.512;

	// Слой 1
	this.instance_2 = new lib.Символ13();
	this.instance_2.setTransform(24.6,163.2,1,1,0,0,0,24.6,163.2);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,49.3,330.8);


// stage content:
(lib.sexy_pool_orig = function(mode,startPosition,loop) {
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
		
		this.cursor = "none";
		stage.canvas.style.cursor = "none";
		this.movieClip_1.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.movieClip_1.x = stage.mouseX;
			this.movieClip_1.y = stage.mouseY;
		}
		
		
		
		this.movieClip_2.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.movieClip_2.x = stage.mouseX;
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 9
	this.instance = new lib.Символ19();
	this.instance.setTransform(297,90.2,1,1,0,0,0,234.5,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 7
	this.movieClip_2 = new lib.Символ10();
	this.movieClip_2.setTransform(436,299.7,1,1,0,0,0,84,84.4);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_2).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(52,264.8,0.75,0.75,0,0,0,77.8,42.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 5
	this.movieClip_1 = new lib.Символ18();
	this.movieClip_1.setTransform(287,156.5,1,1,0,0,0,30.9,30.7);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ24();
	this.instance_2.setTransform(312.2,199.9,1,1,0,0,0,46.6,202.4);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ14();
	this.instance_3.setTransform(602.8,153,0.86,0.846,0,0,0,24.6,163.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 4
	this.instance_4 = new lib.villajpgкопия();
	this.instance_4.setTransform(-15.6,0,0.937,0.937);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(191,-376,926.5,933.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;