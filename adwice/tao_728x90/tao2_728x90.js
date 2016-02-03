(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.disko = function() {
	this.spriteSheet = ss["tao2_728x90_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.PinkGogo = function() {
	this.spriteSheet = ss["tao2_728x90_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhP2AWCMAAAgsDMCftAAAMAAAAsDg");
	this.shape.setTransform(511.1,141);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1022.3,282.1);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC66").s().p("Eg59AqqMAAAhVTMBz7AAAMAAABVTg");
	this.shape.setTransform(371.1,273.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,742.2,546.2);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.disko();
	this.instance.setTransform(0,0,1.06,1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,742,542);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.PinkGogo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,400);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEnB1QgTgTAAgaIAAiPQAAgaATgTQATgTAaAAQAaAAATATQATATAAAaIAACPQAAAagTATQgTATgaAAQgbAAgSgTgAFChYQgGAGAAAKIAACPQAAAKAGAHQAIAHAJAAQAKAAAGgHQAHgHAAgKIAAiPQAAgKgHgGQgGgHgKAAQgJAAgIAHgAkcB1QgTgTAAgaIAAiPQAAgaATgTQASgTAbAAQAaAAATATQASATABAaIAACPQgBAagSATQgTATgaAAQgbAAgSgTgAkBhYQgGAGgBAKIAACPQABAKAGAHQAHAHAKAAQAJAAAHgHQAGgHAAgKIAAiPQAAgKgGgGQgHgHgJAAQgKAAgHAHgAIuCEIgXiQIgVCQIgnAAIgskHIAqAAIAVCMIAUiMIApAAIAWCMIATiMIAqAAIgpEHgADOCEIg3ioIAACoIgoAAIAAkHIAuAAIA1CwIAAiwIAnAAIAAEHgAgVCEIgYiQIgVCQIgmAAIgskHIApAAIAWCMIATiMIAqAAIAVCMIARiMIArAAIgqEHgAl1CEIg3ioIAACoIgpAAIAAkHIAuAAIA1CwIAAiwIAoAAIAAEHgAofCEIgqhsIgMAYIAABUIgoAAIAAkHIAoAAIAABeIAxheIAqAAIg2BsIBACbg");
	this.shape.setTransform(63.9,13.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,127.7,27.3);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALeB0QgSgSAAgaIAAiOQAAgbATgSQASgSAaAAQAaAAATASQASATAAAaIAAAeIgpAAIAAgfQAAgKgGgGQgIgHgJAAQgKAAgGAHQgHAGABAKIAACOQgBAKAHAGQAGAHAKAAQAJAAAIgHQAGgGAAgKIAAgzIgWAAIAAgnIA/AAIAABbQAAAagSASQgTATgaAAQgaAAgTgTgAg9B0QgTgSAAgaIAAiOQAAgbATgSQASgSAbAAQAXAAATASQASATABAaIAAAeIgqAAIAAgfQAAgKgFgGQgGgHgKAAQgJAAgHAHQgGAGAAAKIAACOQAAAKAGAGQAHAHAJAAQAKAAAGgHQAFgGAAgKIAAgkIAqAAIAAAlQgBAagSASQgTATgXAAQgbAAgSgTgATuB7QgNgKgHgQQgIgQgBgVIAmgDQACAXAKAKQAHAIAJAAQANgBAIgMQAEgGAAgMQAAgQgPgQIgkgiQgTgRgIgPQgJgRAAgUQAAgkAYgTQAPgLAWAAQAWAAAPAKQALAHAHANQAIANABASIgmAHQgBgRgIgJQgFgGgLAAQgKAAgHAKQgEAHAAAMQAAASAPATQAHAHALAKIASAPQAPAOAJAOIAGAMQAFAOAAAMQAAAbgOAUQgKANgRAFQgKADgNAAQgXAAgPgLgAGSB0QgTgSAAgbIAAjKIAoAAIAADKQAAAJAGAHQAHAHAJAAQAKAAAHgHQAGgHABgJIAAjKIApAAIAADKQAAAbgTASQgSASgbAAQgaAAgSgSgAnOB0QgSgTAAgaIAAiOQAAgaATgTQATgSAZAAQAaAAATATQASASAAAaIAACOQAAAbgSASQgTASgaAAQgaAAgTgSgAmyhYQgHAHAAAJIAACPQAAAJAHAHQAHAHAJAAQAKAAAGgHQAHgHAAgJIAAiPQAAgJgHgHQgGgGgKAAQgJAAgHAGgAVvCDIAAgoIAoAAIAAAogARJCDIAAkGIAoAAIAADfIBFAAIAAAngAQDCDIgYhjIgbAAIAABjIgnAAIAAkGIA/AAQAgAAAQATQAOAQAAAcIAAAnQAAAcgWARIAeBzgAPQgGIAZAAQAJAAAHgGQAGgHAAgJIAAgnQAAgXgWAAIgZAAgANlCDIAAkGIAoAAIAAEGgAIYCDIAAkGIA/AAQAdAAARATQARARAAAbIAAAnQAAAagTAQQgRATgbAAIgWAAIAABjgAJBgGIAXAAQAKAAAGgGQAHgHAAgJIAAgnQAAgKgGgHQgGgGgLAAIgXAAgAClCDIgqhrIgMAYIAABTIgoAAIAAkGIAoAAIAABeIAwheIArAAIg3BsIBACagAiTCDIAAkGIAoAAIAAEGgAksCDIAAkGIA/AAQAdAAARATQARARAAAbIAAAnQAAAagTAQQgRATgbAAIgWAAIAABjgAkDgGIAXAAQAKAAAGgGQAHgHAAgJIAAgnQAAgKgGgHQgGgGgLAAIgXAAgApNCDIAAjeIgrAAIAAgoIB9AAIAAAoIgqAAIAADegArYCDIg3inIAACnIgoAAIAAkGIAtAAIA1CwIAAiwIAnAAIAAEGgAt9CDIgYhjIgaAAIAABjIgpAAIAAkGIA/AAQAiAAAPATQAOAQAAAcIAAAnQAAAcgVARIAdBzgAuvgGIAXAAQAKAAAGgGQAHgHAAgJIAAgnQAAgXgXAAIgXAAgAwcCDIgJg8IgpAAIgKA8IgqAAIAtkGIA3AAIAsEGgAwrAgIgPhmIgOBmIAdAAgA0OCDIAAkGIBxAAIAAAoIhKAAIAABIIA2AAIAAAmIg2AAIAABIIBKAAIAAAogA2WCDIAAkGIAoAAIAADfIBFAAIAAAngAVyBCIgDjFIAoAAIgDDFgADuAUIAAgnIB2AAIAAAng");
	this.shape.setTransform(143.2,13.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,286.3,27.1);


(lib.Символ12 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ11();
	this.instance.setTransform(511.1,141,1,1,0,0,0,511.1,141);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},4).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1022.3,282.1);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ10();
	this.instance.setTransform(369.1,271,1,1,0,0,0,371.1,273.1);
	this.instance.alpha = 0.129;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},29).to({alpha:0.129},30).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(371,271,1,1,0,0,0,371,271);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2.1,744,546.2);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(90,23.5,1,1,0,0,0,63.9,13.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().rr(-81.55,-22,163.1,44,15.7);
	this.shape.setTransform(89.5,24.1,1.098,1.098);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC66").s().rr(-81.55,-22,163.1,44,15.7);
	this.shape_1.setTransform(89.5,24.1,1.147,1.147);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.shape_1},{t:this.instance,p:{scaleX:1.045,scaleY:1.045}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,179,48.3);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(143.2,13.5,1,1,0,0,0,143.2,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.84,scaleY:0.84},9,cjs.Ease.get(-1)).to({regY:13.6,scaleX:0.66,scaleY:0.66,y:13.6},10,cjs.Ease.get(1)).to({regY:13.5,scaleX:0.83,scaleY:0.83,y:13.5},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,286.3,27.1);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(100,200,1,1,0,0,0,100,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:193.7},10,cjs.Ease.get(-1)).to({y:188},9,cjs.Ease.get(1)).to({y:194},10,cjs.Ease.get(-1)).to({y:200},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,400);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(89.5,24.1,1,1,0,0,0,89.5,24.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4,-1.1,187,50.5);


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(89.5,24.1,1,1,0,0,0,89.5,24.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33).to({rotation:1.2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-1},0).wait(1).to({rotation:1.2},0).wait(1).to({rotation:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,179,48.3);


// stage content:



(lib.tao2_728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		
		document.addEventListener("mouseover", fl_mouseover.bind(this));
		function fl_mouseover()
		{
		this.blb.gotoAndPlay(1);
		}
		
		document.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout()
		{
		this.blb.gotoAndPlay(5);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.instance = new lib.Symbol();
	this.instance.setTransform(618.7,47,1,1,0,0,0,89.5,24.1);

	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(162.9,46.5,1,1,0,0,0,143.2,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(406,175,1,1,0,0,0,100,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 5
	this.blb = new lib.Символ12();
	this.blb.setTransform(389.1,45,1,1,0,0,0,511.1,141);

	this.timeline.addTween(cjs.Tween.get(this.blb).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ8();
	this.instance_3.setTransform(371,71.1,1,1,0,0,0,371,271);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(242,-157,1022.3,577.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;