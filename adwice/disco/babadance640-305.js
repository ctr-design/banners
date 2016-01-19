(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/arm.png", id:"arm"},
		{src:"images/bra.png", id:"bra"},
		{src:"images/fing.png", id:"fing"},
		{src:"images/fon.jpg", id:"fon"},
		{src:"images/foot.png", id:"foot"},
		{src:"images/hand0.png", id:"hand0"},
		{src:"images/hand2.png", id:"hand2"},
		{src:"images/hand222.png", id:"hand222"},
		{src:"images/head.png", id:"head"},
		{src:"images/leg.png", id:"leg"},
		{src:"images/shold.png", id:"shold"},
		{src:"images/trip.png", id:"trip"}
	]
};



// symbols:



(lib.arm = function() {
	this.initialize(img.arm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,103);


(lib.bra = function() {
	this.initialize(img.bra);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,199);


(lib.fing = function() {
	this.initialize(img.fing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,67);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,600);


(lib.foot = function() {
	this.initialize(img.foot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,197);


(lib.hand0 = function() {
	this.initialize(img.hand0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,113);


(lib.hand2 = function() {
	this.initialize(img.hand2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,47);


(lib.hand222 = function() {
	this.initialize(img.hand222);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,207);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,132);


(lib.leg = function() {
	this.initialize(img.leg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,243);


(lib.shold = function() {
	this.initialize(img.shold);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,42);


(lib.trip = function() {
	this.initialize(img.trip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,52);


(lib.Символ55 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333300").s().p("Ap+C4IA/gEQAFAWAYAAQAPAAAHgGQAGgIAAgMQABgMgJgHQgJgIgPABIgSAAIAAgoIANAAQANABAIgGQAGgHAAgMQABgRgWAAQgWAAgEAUIg8gIQAPg3BIAAQAoAAAXAPQAXAQgBAaQAAAfgbANQAmAKAAAnQAAAfgYAUQgXAVgtAAQhMAAgShAgAIwD0IAAg1IA7AAIAAA1gAHHD0IAAh2IhQB2Ig/AAIAAjWIA/AAIAAB2IBRh2IA+AAIAADWgADXD0Igbg4QgJgTgEgFQgFgFgJABIAABUIhCAAIAAjWIBCAAIAABSQAIgBAFgFQAFgGAKgbQAIgUAIgJQAHgIARgEQASgDAjgBIAAAtIgDAAQgRABgIAGQgJAGgEAPQgGAOgGAHQgGAIgKADQAOAGALALQALALAMAZIAdA6gAAAD0IAAijIgqCjIgxAAIgpijIAACjIg3AAIAAjWIBYAAIAiCCIAgiCIBWAAIAADWgAkUD0IgLgjIhLAAIgLAjIhDAAIBRjWIBIAAIBQDWgAktCiIgXhMIgYBMIAvAAgAI6CxIgMhiIAAgxIA/AAIAAAxIgLBigAlPhJQgPgHgLgRQgLgRABgbQgBgjAUgTQATgTAiAAQAbAAAPALQAQALAIAWIgnAJQgDgGgCgDQgEgFgFgEQgFgCgHAAQgPAAgIAMQgGAJAAATQAAAYAHAJQAHAJAOAAQAMAAAHgIQAGgHADgNIAmALQgDARgIALQgJALgNAGQgMAFgTAAQgXAAgPgHgAnrhJQgPgHgLgRQgKgRAAgbQAAgjATgTQATgTAiAAQAbAAAQALQAQALAHAWIgnAJQgCgGgCgDQgEgFgFgEQgGgCgHAAQgPAAgHAMQgHAJAAATQAAAYAHAJQAIAJANAAQAMAAAHgIQAGgHADgNIAnALQgDARgJALQgJALgMAGQgMAFgTAAQgYAAgPgHgAMNhFIAAhOIg1BOIgrAAIAAiPIArAAIAABPIA2hPIAoAAIAACPgAJyhFIgIgXIgyAAIgHAXIgtAAIA1iPIAxAAIA2CPgAJhh7IgQg0IgQA0IAgAAgAF3hFIAAiPIBTAAQAVABAKAJQAMALAAAPQgBANgHAJQgGAGgKAEQAQADAHAJQAHAJAAAOQAAALgFAJQgFAJgKAFQgFADgLABIgUACgAGkhjIAWAAQAMAAAEgFQAFgEgBgGQABgHgFgEQgEgDgMAAIgWAAgAGkibIATAAQAKAAAEgEQAEgEAAgHQAAgFgEgEQgEgDgKAAIgTAAgAEwhFIAAhOIg2BOIgqAAIAAiPIAqAAIAABPIA2hPIApAAIAACPgABLhFIAAiPIBxAAIAAAjIhFAAIAABsgAhDhFIAAiPIB1AAIAAAfIhJAAIAAAWIBDAAIAAAeIhDAAIAAAcIBLAAIAAAggAiwhFIAAhsIgtAAIAAgjICGAAIAAAjIgtAAIAABsgApGhFIgIgXIgxAAIgIAXIgtAAIA2iPIAwAAIA2CPgApXh7IgPg0IgQA0IAfAAgAs1hFIAAiPIBJAAQAYAAAMAMQAMALAAAVQAAAWgNAMQgNAMgbAAIgYAAIAAA1gAsJiXIALAAQAMAAAGgEQAFgEAAgIQAAgGgEgFQgFgFgMABIgNAAgALbjjQgJgHgCgNIARAAQAEANAOAAQAOAAAEgNIARAAQgCANgJAHQgLAIgNgBQgOABgKgIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82.3,-24.8,164.6,49.7);


(lib.Символ54 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333300").s().p("AgIELQgTgKgNgVQgNgVAAggQAAgsAagZQAYgZAqAAQAuAAAYAZQAZAYAAAsQAAAggLAUQgLAUgUAMQgVALgdAAQgfAAgTgKgAAMCQQgKAMAAAbQAAAcAKAMQALAMARAAQASAAAKgMQAKgLAAgfQgBgagJgLQgLgMgSAAQgQAAgLAMgAmRELQgUgKgMgVQgNgVAAggQAAgsAZgZQAYgZAtAAQAuAAAXAZQAZAYAAAsQABAggMAUQgLAUgTAMQgVALgeAAQgfAAgUgKgAl7CQQgKAMAAAbQAAAcAKAMQAJAMATAAQARAAALgMQAJgLAAgfQAAgagKgLQgKgMgSAAQgSAAgJAMgAItESIAAgtIAxAAIAAAtgAHiESIgKgeIg/AAIgJAeIg5AAIBEi1IA9AAIBEC1gAHNDNIgVhCIgTBCIAoAAgACjESIAAi1IBqAAQAaAAAOAMQAOAOAAATQAAAPgKAMQgHAIgMAFQATAEAKALQAJAMAAASQgBANgGAMQgHALgLAHQgHADgOACIgZADgADdDrIAcAAQAPAAAGgGQAFgFAAgIQAAgIgFgFQgGgFgPAAIgcAAgADdCkIAXAAQAOAAAFgFQAFgEAAgJQAAgIgFgEQgFgFgNAAIgYAAgAi4ESIAAiJIg5AAIAAgsICrAAIAAAsIg5AAIAACJgApgESIAAi1ICQAAIAAAsIhXAAIAACJgAI1DZIgKhTIAAgpIA2AAIAAApIgKBTgAmQgZQgcgOgRgdQgSgeAAguQAAg+AigjQAjgjA/AAQBCAAAhAiQAkAjgBA+QAAAtgPAcQgPAdgdAQQgdAQgqAAQgsAAgdgOgAlxjHQgPARAAAmQAAAoAPARQAOARAaAAQAZAAAOgRQANgQAAgrQAAglgOgQQgOgRgaAAQgYAAgOARgAE6gPIgOgqIhaAAIgMAqIhRAAIBgkBIBXAAIBgEBgAEdhxIgehcIgbBcIA5AAgAAKgPIAAhoIhVAAIAABoIhOAAIAAkBIBOAAIAABaIBVAAIAAhaIBQAAIAAEBg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.9,-27.7,121.8,55.6);


(lib.Символ53 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A6hEGIE0oLMAwPAAAIAAILg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-169.8,-26.2,339.7,52.6);


(lib.Символ52 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-113.7,-9.2,227.5,18.5);


(lib.Символ49 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hand222();
	this.instance.setTransform(-57,-103.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57,-103.5,114,207);


(lib.Символ44 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhD9AqlMAAAhVJMCH7AAAMAAABVJg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-435.1,-272.5,870.2,545.2);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(2,1,1).p("ACRAAQAAA8grAqQgqArg8AAQg7AAgqgrQgrgqAAg8QAAg7ArgqQAqgrA7AAQA8AAAqArQArAqAAA7g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(2,1,1).p("ACRAAQAAA8grAqQgqArg8AAQg7AAgqgrQgrgqAAg8QAAg7ArgqQAqgrA7AAQA8AAAqArQArAqAAA7g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgGAKQgrA0gWASIgHgCQgDgBAAgHQAAgQA9g5Qg9hCAAgHQAAgHADgDIAHgDIBDBHQA1gzATgKQAHADADAHQgkAXgkApIABAAQAuAwAdAkIgEAJIgHACQgagXgzg5g");
	this.shape_2.setTransform(0.2,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#66FF00").ss(1,1,1).p("ACRAAQAAA8grAqQgqArg8AAQg7AAgqgrQgrgqAAg8QAAg7ArgqQAqgrA7AAQA8AAAqArQArAqAAA7g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF00").s().p("AgPBQQgMgxgIgaQgOgtggghIABgJQAPAGAbAuQAXAlALAfQAPgnALgVQAVglAdgQIAIABQACABAAAHQgSAXgUAaQgmAzgBArIgCAEQgCACgFAAQgLAAAAgDg");
	this.shape_4.setTransform(0.7,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFF00").ss(1,1,1).p("Ai/iwIF/AAIAAFhIl/AAg");
	this.shape_5.setTransform(1.1,-0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("Ai+CxIAAlhIF+AAIAAFhg");
	this.shape_6.setTransform(1.1,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31,31);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("Au141IdrAAMAAAAxrI9rAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Au1Y2MAAAgxrIdrAAMAAAAxrg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ36 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgTBkIgyghQAAgCAPgZQAOgYAAgIQAAgRgfgPQgfgOAAgZQAAgGAPgNQARgOATgJQA3gYAgAqQAMAMAcAzQAbAvAAAHQgpBUgDAAQg0AAgagOg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.3,-11.4,20.7,23);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(7.8,1,1).p("ACghPIigCfIifif");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20,-11.9,40,23.9);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,204,0)"],[0,0.875],0,0.1,0,0,0.1,474.3).s().p("EhJMA1ZQ+q1qgP+8QgQ+5eU2KUAeVgWHArIgAVUArGgAWAeqAVpQerVrAPe7QAQe6+VWJUgeUAWIgrIAAVIhSABUgqSAAAgeNgVVg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-666.3,-478.2,1332.6,956.5);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,204,0)"],[0,0.875],0,0,0,0,0,255.9).s().p("EgnsAcfQwdrzAAwsQAAwrQdr0QQdrzXPAAQXQAAQdLzQQdL0AAQrQAAQswdLzQwdL03QAAQ3PAAwdr0g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-359.4,-258,718.9,516);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,204,0)","#FFFFFF","rgba(255,255,255,0)"],[0.094,0.451,0.922],-106.3,0,106.3,0).s().p("EgQlBBGMAAAiCLMAhLAAAMAAACCLg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106.3,-416.6,212.6,833.3);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.head();
	this.instance.setTransform(-64.5,-66);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.5,-66,129,132);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.foot();
	this.instance.setTransform(-59,-98.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59,-98.5,118,197);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.leg();
	this.instance.setTransform(-74.5,-121.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74.5,-121.5,149,243);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bra();
	this.instance.setTransform(-74.5,-99.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74.5,-99.5,149,199);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.fing();
	this.instance.setTransform(-21,-33.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21,-33.5,42,67);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.arm();
	this.instance.setTransform(-21.5,-51.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.5,-51.5,43,103);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hand0();
	this.instance.setTransform(-53,-54.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53,-54.3,106,113);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.trip();
	this.instance.setTransform(-26.5,-26);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.5,-26,53,52);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.shold();
	this.instance.setTransform(-25,-21);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-21,50,42);


(lib.Символ51 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ52();

	// Слой 2
	this.instance_1 = new lib.Символ53();
	this.instance_1.setTransform(20.8,5.4);
	this.instance_1.alpha = 0.52;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-149,-20.9,339.7,52.6);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ49();
	this.instance.setTransform(-103,179,0.813,0.71,0,-10.2,169.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.81,skewX:-10.1,skewY:169.9,x:-102.9,y:177.4},10,cjs.Ease.get(-1)).to({scaleX:0.81,skewX:-10.2,skewY:169.8,x:-103,y:176},9,cjs.Ease.get(1)).to({scaleX:0.81,skewX:-10.1,skewY:169.9,y:177.5},10,cjs.Ease.get(-1)).to({scaleX:0.81,skewX:-10.2,skewY:169.8,y:179},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ49();
	this.instance_1.setTransform(-11,165.1,0.71,0.71,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:12.3,y:167.8},10,cjs.Ease.get(-1)).to({rotation:12.5,y:170.1},9,cjs.Ease.get(1)).to({rotation:12.3,y:167.6},10,cjs.Ease.get(-1)).to({rotation:12.5,y:165.1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.6,84.6,206.1,175.1);


(lib.Символ47 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ap9C4IA+gEQAFAWAZAAQAOAAAGgHQAIgGgBgNQAAgMgIgHQgJgIgQAAIgSAAIAAgmIAPAAQAMgBAIgFQAGgHABgMQAAgRgWAAQgXAAgDATIg8gGQAOg4BKAAQAnAAAXAPQAWAQAAAaQABAggcAMQAmALAAAmQAAAfgYAVQgYAUgsAAQhMAAgRhAgAIwD0IAAg0IA7AAIAAA0gAHHD0IAAh1IhQB1Ig/AAIAAjWIA/AAIAAB2IBRh2IA9AAIAADWgADXD0Igag3QgKgUgEgFQgFgFgJAAIAABVIhDAAIAAjWIBDAAIAABSQAIAAAFgHQAFgEALgbQAHgVAHgJQAIgIARgEQARgEAkABIAAAtIgCAAQgSAAgIAGQgIAGgGAPQgFAOgGAHQgGAHgLAEQAPAFALALQAKAMANAYIAdA7gAAAD0IAAijIgpCjIgyAAIgpijIAACjIg2AAIAAjWIBXAAIAhCCIAiiCIBVAAIAADWgAkUD0IgLgjIhLAAIgLAjIhDAAIBRjWIBIAAIBQDWgAktCjIgYhOIgWBOIAuAAgAI6CwIgMhiIAAgwIBAAAIAAAwIgNBigAlPhJQgPgHgLgQQgLgSAAgaQABgkASgTQAUgTAiAAQAbAAAPALQAQALAIAXIgoAIQgCgGgCgEQgDgEgGgDQgGgDgGAAQgPAAgIAMQgGAJAAAUQAAAXAHAJQAHAJANgBQANAAAGgGQAHgIADgNIAnAMQgEAQgJALQgIALgNAFQgMAGgTAAQgYAAgOgHgAnrhJQgOgHgMgQQgKgSAAgaQAAgkATgTQATgTAiAAQAbAAAQALQAPALAIAXIgnAIQgCgGgDgEQgDgEgGgDQgFgDgHAAQgPAAgHAMQgHAJABAUQgBAXAIAJQAHAJANgBQAMAAAHgGQAGgIADgNIAnAMQgEAQgIALQgJALgMAFQgMAGgUAAQgXAAgPgHgAMNhEIAAhPIg1BPIgqAAIAAiPIAqAAIAABPIA2hPIAoAAIAACPgAJxhEIgHgYIgyAAIgHAYIgtAAIA1iPIAxAAIA1CPgAJhh7IgQg0IgPA0IAfAAgAF2hEIAAiPIBUAAQAUgBALAKQALALAAAPQAAAMgIAKQgFAGgKADQAPAEAIAJQAHAJAAAOQAAALgFAJQgFAJgJAFQgGADgLACIgUACgAGjhkIAXAAQAMAAAEgDQAEgEAAgHQAAgGgEgEQgEgFgMAAIgXAAgAGjicIATAAQALAAAEgDQAEgEAAgGQAAgHgEgDQgEgDgKgBIgUAAgAEvhEIAAhPIg1BPIgqAAIAAiPIAqAAIAABPIA2hPIApAAIAACPgABLhEIAAiPIByAAIAAAjIhFAAIAABsgAhDhEIAAiPIB0AAIAAAeIhIAAIAAAXIBDAAIAAAdIhDAAIAAAcIBLAAIAAAhgAiwhEIAAhsIgtAAIAAgjICHAAIAAAjIgtAAIAABsgApGhEIgIgYIgyAAIgGAYIgtAAIA1iPIAwAAIA2CPgApXh7IgQg0IgPA0IAfAAgAs2hEIAAiPIBKAAQAYAAAMALQAMALAAAWQAAAVgNAMQgNANgbAAIgYAAIAAA1gAsJiWIAKAAQANAAAFgFQAGgFAAgGQAAgHgFgFQgEgEgMgBIgNAAgALcjjQgKgIgCgMIARAAQAEAMAOAAQAOAAAEgMIARAAQgCAMgKAIQgKAHgNAAQgNAAgKgHg");
	this.shape.setTransform(-3.4,15.8);

	// Слой 2
	this.instance = new lib.Символ55();
	this.instance.setTransform(-1.5,18.1);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-85.7,-9,166.6,52);


(lib.Символ45 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgIELQgTgKgMgVQgOgVAAggQAAgsAZgZQAZgZArAAQAtAAAYAZQAZAYAAAsQAAAggLAUQgKAUgVAMQgUALgeAAQgfAAgTgKgAAMCQQgKAMAAAbQAAAcAKAMQAKAMASAAQASAAAKgMQAJgLAAgfQABgagKgLQgLgMgRAAQgRAAgLAMgAmRELQgTgKgOgVQgMgVAAggQAAgsAZgZQAYgZAtAAQAtAAAZAZQAZAYAAAsQAAAggMAUQgKAUgVAMQgUALgeAAQgeAAgVgKgAl8CQQgKAMAAAbQAAAcAKAMQALAMARAAQASAAAKgMQAKgLAAgfQAAgagLgLQgKgMgRAAQgSAAgKAMgAIsESIAAgtIAzAAIAAAtgAHhESIgJgeIg/AAIgJAeIg5AAIBEi1IA9AAIBEC1gAHNDNIgVhCIgTBCIAoAAgACkESIAAi1IBpAAQAbAAAOAMQANAOAAATQABAPgLAMQgHAIgNAFQAUAEAJALQAJAMAAASQABANgHAMQgHALgLAHQgHADgOACIgaADgADcDrIAdAAQAPAAAFgGQAGgFAAgIQAAgIgGgFQgFgFgPAAIgdAAgADcCkIAZAAQANAAAFgFQAFgEAAgJQAAgIgFgEQgFgFgMAAIgaAAgAi3ESIAAiJIg5AAIAAgsICqAAIAAAsIg5AAIAACJgApfESIAAi1ICQAAIAAAsIhYAAIAACJgAI1DZIgLhTIAAgpIA2AAIAAApIgJBTgAmPgZQgcgOgSgdQgSgeAAguQAAg+AjgjQAigjBAAAQBAAAAjAiQAiAjAAA+QAAAtgPAcQgQAdgcAQQgdAQgqAAQgsAAgcgOgAlxjHQgOARAAAmQAAAoAOARQAOARAaAAQAYAAAPgRQAOgQAAgrQAAglgPgQQgOgRgZAAQgYAAgPARgAE6gPIgNgqIhaAAIgMAqIhSAAIBgkBIBYAAIBgEBgAEchxIgdhcIgbBcIA4AAgAALgPIAAhoIhWAAIAABoIhOAAIAAkBIBOAAIAABaIBWAAIAAhaIBQAAIAAEBg");
	this.shape.setTransform(-5.4,3.2);

	// Слой 2
	this.instance = new lib.Символ54();
	this.instance.setTransform(-7.8,5.8);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68.7,-24.6,124.2,58.2);


(lib.Символ40 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ42();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ42(), 3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31,31);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.14,scaleY:1.14},4).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31,31);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ39();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31,31);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ36();
	this.instance.setTransform(2.1,8.8);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

	// Слой 1
	this.instance_1 = new lib.hand2();
	this.instance_1.setTransform(-53,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-23.5,106,47);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-0.2,y:19.1},7).to({x:0,y:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-11.9,40,23.9);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-666.3,-478.2,1332.6,956.5);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(0,0.1,1.854,1.854);
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},16).to({alpha:0},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-666.3,-478.2,1332.6,956.4);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(0,0,1,1,0,-1.7,0);
	this.instance.alpha = 0.52;
	this.instance.compositeOperation = "lighter";

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118.8,-416.6,237.7,833.3);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(0,0,1,1.147,0,29.3,0);
	this.instance.alpha = 0.52;
	this.instance.compositeOperation = "lighter";

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-340.5,-416.6,681.1,833.3);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.03,skewX:13.6,x:-100.4},27).to({scaleY:1,skewX:0,x:0},26).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-340.5,-416.6,681.1,833.3);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.03,skewX:-13.3,x:98.6},30).to({scaleY:1,skewX:0,x:0},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.8,-416.6,237.7,833.3);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(0,0,1,1.113,0,-26,0);
	this.instance.alpha = 0.52;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.35,skewX:-42.2,x:174.9},38).to({scaleY:1.11,skewX:-26,x:0},37).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-309.7,-416.6,619.5,833.3);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ20();
	this.instance.setTransform(-272.8,-44.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).wait(20).to({alpha:0},15).to({_off:true},1).wait(41));

	// Слой 2
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(-557.7,-80.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).to({alpha:1},14).wait(20).to({alpha:0},15).to({_off:true},1).wait(23));

	// Слой 1
	this.instance_2 = new lib.Символ21();
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(41).to({_off:false},0).to({alpha:1},14).wait(20).to({alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-391.7,-461.2,237.7,833.3);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ26();
	this.instance.setTransform(454,-206.5);
	this.instance.compositeOperation = "lighter";

	// Слой 1
	this.instance_1 = new lib.fon();
	this.instance_1.setTransform(-400,-300);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-400,-684.7,1520.3,984.8);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 7
	this.instance = new lib.Символ7();
	this.instance.setTransform(-35.3,90.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:7.1,x:-28.3,y:93.5},14,cjs.Ease.get(-1)).to({rotation:15,x:-20.8,y:94.6},15,cjs.Ease.get(1)).to({rotation:7.5,x:-28,y:93.7},15,cjs.Ease.get(-1)).to({rotation:0,x:-35.3,y:90.5},15,cjs.Ease.get(1)).wait(1));

	// Символ 6
	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(-25.5,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-4.3,x:-18.6,y:29.9},14,cjs.Ease.get(-1)).to({rotation:-9.2,x:-11.2,y:30.3},15,cjs.Ease.get(1)).to({rotation:-4.5,x:-18.4,y:30},15,cjs.Ease.get(-1)).to({rotation:0,x:-25.5,y:27.5},15,cjs.Ease.get(1)).wait(1));

	// Символ 5
	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(2,-68.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-1.8,x:3.9,y:-67},14,cjs.Ease.get(-1)).to({rotation:-3.7,x:5.8,y:-67.5},15,cjs.Ease.get(1)).to({rotation:-1.8,x:3.9,y:-67},15,cjs.Ease.get(-1)).to({rotation:0,x:2,y:-66.5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.3,-122.9,111.3,247);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(10,23);

	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(-11.5,-28);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.5,-49,73,98);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ25();
	this.instance.setTransform(-556.7,-257);
	this.instance.compositeOperation = "lighter";

	// Слой 2
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(183.7,15.1);

	// Слой 1
	this.instance_2 = new lib.Символ16();

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1223,-735.2,2343.3,1122.4);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.3,x:2.7,y:1.1},11,cjs.Ease.get(-1)).to({rotation:7,x:5.3,y:2.1},11,cjs.Ease.get(1)).to({rotation:3.3,x:2.7,y:1.1},10,cjs.Ease.get(-1)).to({rotation:0,x:0,y:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.5,-66,129,132);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.h1.addEventListener("mouseover", fl_h1.bind(this));
		
		function fl_h1()
		{
			this.girl.gotoAndStop(15);
		}
		
		this.h1.addEventListener("mouseout", fl_h11.bind(this));
		
		function fl_h11()
		{
			this.girl.gotoAndStop(15);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.h1 = new lib.Символ35();
	new cjs.ButtonHelper(this.h1, 0, 1, 2, false, new lib.Символ35(), 3);

	this.timeline.addTween(cjs.Tween.get(this.h1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-23.5,106,47);


(lib.Символ50 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.setTransform(58.7,-172);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-103,-87.5,206.1,175.1);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 47
	this.instance = new lib.Символ47();
	this.instance.setTransform(403.3,-26.8,1.283,1.283,6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.24,scaleY:1.24,rotation:6.6},4,cjs.Ease.get(-1)).to({scaleX:1.18,scaleY:1.18,rotation:6.7},5,cjs.Ease.get(1)).to({scaleX:1.23,scaleY:1.23,rotation:6.6},5,cjs.Ease.get(-1)).to({scaleX:1.28,scaleY:1.28,rotation:6.7},5,cjs.Ease.get(1)).wait(1));

	// Символ 45
	this.instance_1 = new lib.Символ45();
	this.instance_1.setTransform(0.1,0,1.237,1.237,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.3,scaleY:1.3,rotation:-5.8},4,cjs.Ease.get(-1)).to({scaleX:1.39,scaleY:1.39,rotation:-6},5,cjs.Ease.get(1)).to({scaleX:1.31,scaleY:1.31,rotation:-5.8},5,cjs.Ease.get(-1)).to({scaleX:1.24,scaleY:1.24,rotation:-6},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.2,-51.2,594.6,101.3);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(24.3,144.2,0.828,0.828);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-988.8,-464.8,1941,929.7);


(lib.Символ41 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(7.4,35.3);

	this.instance_1 = new lib.Символ38();
	this.instance_1.setTransform(42.4,-18.7);

	this.instance_2 = new lib.Символ38();
	this.instance_2.setTransform(10.4,-9.7);

	this.instance_3 = new lib.Символ38();
	this.instance_3.setTransform(-42.4,-35.2);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57.9,-50.7,115.9,101.5);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(93,67.3,0.304,0.304,93);

	this.instance_1 = new lib.Символ28();
	this.instance_1.setTransform(50.9,4.4,0.304,0.304,-36.2);

	this.instance_2 = new lib.Символ28();
	this.instance_2.setTransform(88.4,38.2,0.304,0.304,154);

	this.instance_3 = new lib.Символ28();
	this.instance_3.setTransform(4.5,-1.4,0.304,0.304,-79.2);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,-8.1,97.1,81.6);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 10
	this.instance = new lib.Символ10();
	this.instance.setTransform(-135,194);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:2.3,x:-130.8,y:194.1},9,cjs.Ease.get(-1)).to({scaleY:1,skewX:4.8,x:-126.6,y:194},10,cjs.Ease.get(1)).to({scaleY:1,skewX:2.5,x:-130.5},10,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:-135},10,cjs.Ease.get(1)).wait(1));

	// Символ 9
	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(-141.5,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.97,scaleY:1,skewX:-2.8,x:-138.1},9,cjs.Ease.get(-1)).to({regX:0.1,scaleX:0.94,scaleY:1,skewX:-5.8,x:-134.3},10,cjs.Ease.get(1)).to({scaleX:0.97,scaleY:1,skewX:-2.8,x:-137.9},10,cjs.Ease.get(-1)).to({regX:0,scaleX:1,scaleY:1,skewX:0,x:-141.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 3
	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(-78,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:3,x:-79.8,y:-143.3},9,cjs.Ease.get(-1)).to({rotation:6.7,x:-81.8,y:-146.9},10,cjs.Ease.get(1)).to({rotation:3.3,x:-79.9,y:-143.5},10,cjs.Ease.get(-1)).to({rotation:0,x:-78,y:-140},10,cjs.Ease.get(1)).wait(1));

	// Символ 8
	this.instance_3 = new lib.Символ8();
	this.instance_3.setTransform(-118.5,-174.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:1,x:-118.6,y:-173.7},9,cjs.Ease.get(-1)).to({rotation:2.2,y:-172.3},10,cjs.Ease.get(1)).to({rotation:1,y:-173.6},10,cjs.Ease.get(-1)).to({rotation:0,x:-118.5,y:-174.9},10,cjs.Ease.get(1)).wait(1));

	// Символ 7
	this.instance_4 = new lib.Символ14();
	this.instance_4.setTransform(-183,-113.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:1,x:-184.1},9,cjs.Ease.get(-1)).to({rotation:2.2,x:-185.4,y:-113.3},10,cjs.Ease.get(1)).to({rotation:1,x:-184.2},10,cjs.Ease.get(-1)).to({rotation:0,x:-183,y:-113.4},10,cjs.Ease.get(1)).wait(1));

	// Символ 4
	this.instance_5 = new lib.Символ4();
	this.instance_5.setTransform(-145.5,-302.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:1,x:-143.2,y:-301.6},9,cjs.Ease.get(-1)).to({rotation:2.2,x:-140.7,y:-300.7},10,cjs.Ease.get(1)).to({rotation:1,x:-143.1,y:-301.6},10,cjs.Ease.get(-1)).to({rotation:0,x:-145.5,y:-302.4},10,cjs.Ease.get(1)).wait(1));

	// Символ 2
	this.instance_6 = new lib.Символ13();
	this.instance_6.setTransform(-65.5,-183.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleY:0.97,skewY:1,x:-66.7,y:-183.6},9,cjs.Ease.get(-1)).to({scaleY:0.94,skewX:0.4,skewY:2.2,x:-68.1,y:-183.9},10,cjs.Ease.get(1)).to({scaleY:0.97,skewX:0,skewY:1,x:-66.7,y:-183.6},10,cjs.Ease.get(-1)).to({scaleY:1,skewY:0,x:-65.5,y:-183.4},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-239.3,-368.4,214.3,661);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.round.addEventListener("mouseover", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.girl.gotoAndStop(1);
			
		}
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 5
	this.round = new lib.Символ41();
	this.round.setTransform(-7,-7.3,1.161,1.161);
	this.round.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.round).to({scaleX:1,scaleY:1,alpha:1},1,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance = new lib.Символ29();
	this.instance.setTransform(-55.4,-66.8,0.99,0.99);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.16,scaleY:1.16,x:-65.4,y:-59.8,alpha:0},1,cjs.Ease.get(1)).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(-1.6,-15.1,4.864,1.56);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ37(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// Слой 1
	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(3.4,1.9,0.484,0.484,0,0,0,-125.2,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-125.1,scaleX:0.63,scaleY:0.63,x:-2.6,y:40.1},1).wait(1));

	// Слой 7
	this.instance_3 = new lib.Символ44();
	this.instance_3.setTransform(-34,-153.1,1.349,1.642);
	this.instance_3.alpha = 0.719;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-465.5,-264.9,927.8,499.6);


// stage content:



(lib.babadance640305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.style.cursor = "none";
		this.hand.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor1.bind(this));
		
		function fl_CustomMouseCursor1() {
			this.hand.x = stage.mouseX;
		}
		
		
		this.girl.addEventListener("mouseover", fl_girl1.bind(this));
		
		function fl_girl1()
		{
			this.girl.gotoAndStop(1);
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.instance = new lib.Символ51();
	this.instance.setTransform(542.6,290.7,0.78,0.78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 5
	this.hand = new lib.Символ50();
	this.hand.setTransform(302.5,226.4,1.216,1.216,0,0,0,0,-42.2);

	this.timeline.addTween(cjs.Tween.get(this.hand).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ46();
	this.instance_1.setTransform(117,112.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.girl = new lib.Символ31();
	this.girl.setTransform(308.7,155.2);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Слой 2
	this.fon = new lib.Символ43();
	this.fon.setTransform(294.4,-85.6);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-374.5,-398,1941,934.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;