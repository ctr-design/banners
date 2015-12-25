(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/baba.png", id:"baba"},
		{src:"images/fon.jpg", id:"fon"},
		{src:"images/golen.png", id:"golen"},
		{src:"images/hvost.png", id:"hvost"},
		{src:"images/icecream.png", id:"icecream"},
		{src:"images/kachela.png", id:"kachela"},
		{src:"images/ruki.png", id:"ruki"},
		{src:"images/stopa.png", id:"stopa"}
	]
};



// symbols:



(lib.baba = function() {
	this.initialize(img.baba);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,254);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.golen = function() {
	this.initialize(img.golen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,83);


(lib.hvost = function() {
	this.initialize(img.hvost);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,83);


(lib.icecream = function() {
	this.initialize(img.icecream);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,198);


(lib.kachela = function() {
	this.initialize(img.kachela);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,282);


(lib.ruki = function() {
	this.initialize(img.ruki);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,70);


(lib.stopa = function() {
	this.initialize(img.stopa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,60);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egx/AX0MAAAgvnMBj/AAAMAAAAvng");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ37 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egz8AFoIAArPMBn5AAAIAALPg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-332.5,-36,665.2,72);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhkA7QgRgRAAgcIAAgbQAAgbAQgSQARgRAaAAQAcAAAPAOQAPAOAAAZIAAAAIgdAAQAAgOgHgIQgHgIgPAAQgOAAgHALQgIALAAARIAAAbQAAARAIALQAIALAOAAQAOAAAHgHQAHgIAAgPIAdAAIAAABQAAAYgPAOQgPAOgbAAQgbAAgQgRgAjzA6QgRgRAAgcIAAgZQAAgbARgSQARgSAcAAQAbAAASASQARASAAAbIAAAZQAAAcgRARQgRASgcAAQgcAAgRgSgAjegpQgIALAAASIAAAZQAAASAIALQAJALAPAAQAPAAAJgLQAIgLAAgSIAAgZQAAgRgIgMQgJgLgPAAQgQAAgIALgAnsBMIAAgXIAEAAIAEAAQAJAAAEgDQAEgEACgHIADgGIg1hqIAgAAIAfBCIACAHIABAAIAchJIAgAAIgzB3QgHAPgJAIQgIAHgRAAgAGVBKIAAiTIAeAAIAAA3IAZAAQAaAAAPANQAPALAAAVQAAAVgPANQgPANgaAAgAGzAzIAZAAQANAAAHgHQAHgHAAgLQAAgKgHgGQgHgHgNAAIgZAAgAE9BKIAAh8IgqAAIAAgXIByAAIAAAXIgqAAIAAB8gADkBKIAAhhIAAAAIg8BhIgeAAIAAiTIAeAAIAABhIAAABIA8hiIAeAAIAACTgAAyBKIAAh8IgqAAIAAgXIByAAIAAAXIgqAAIAAB8gAl0BKIAAiTIBhAAIAAAXIhDAAIAAB8g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.6,-7.6,103.4,15.4);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AloA6QgRgRAAgcIAAgZQAAgbARgSQASgSAbAAQAbAAASASQASASAAAbIAAAZQAAAcgSARQgRASgcAAQgbAAgSgSgAlTgpQgIALAAASIAAAZQAAASAIALQAJALAPAAQAPAAAJgLQAJgLgBgSIAAgZQABgRgJgMQgJgLgPAAQgQAAgIALgAGbBKIAAiTIAdAAIAAA3IAaAAQAaAAAPANQAPALAAAVQAAAVgPANQgPANgaAAgAG4AzIAaAAQAMAAAHgHQAIgHAAgLQAAgKgIgGQgGgHgNAAIgaAAgAFDBKIAAh8IgrAAIAAgXIBzAAIAAAXIgrAAIAAB8gAD4BKIgLggIg0AAIgKAgIgfAAIA0iTIAfAAIAzCTgADmATIgSg5IgBAAIgTA5IAmAAgABFBKIAAh8IgqAAIAAgXIByAAIAAAXIgqAAIAAB8gAgEBKIgKggIg1AAIgKAgIhCAAIgog+IgQAAIAAA+IgfAAIAAiTIAfAAIAAA9IAMAAIAog9IAlAAIgzBFIA2BOIA0iTIAeAAIAyCTgAgWATIgSg5IgBAAIgSA5IAlAAgAmuBKIAAh8Ig9AAIAAB8IgeAAIAAiTIB4AAIAACTg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.2,-7.6,104.5,15.4);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.icecream();
	this.instance.setTransform(-29.1,-64,0.646,0.646);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.1,-64,58.2,128);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("Ai2AxICZgxIiZgyIAAhEIFtB2IltB3g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.4,-11.9,36.8,23.9);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ap1HVIAAupITrAAIAAOpg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hvost();
	this.instance.setTransform(-13,-41.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13,-41.5,26,83);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AgcDEIAAmHIA5AAIAAGHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3,-19.6,6,39.3);


(lib.Анимация11 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("ПОРАДУЙ ДЕВУШКУ!", "bold 26px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 298;
	this.text.setTransform(-2,-19.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-151,-19.1,302.1,38.3);


(lib.Анимация4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.stopa();
	this.instance.setTransform(-26,-30);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26,-30,52,60);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.golen();
	this.instance.setTransform(-34,-41.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34,-41.5,68,83);


(lib.Слой4копия2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.kachela();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,167,282);


(lib.fon_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.fon();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.baba_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.baba();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,216,254);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация11("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:1.05},5,cjs.Ease.get(-1)).to({scaleX:1.11,scaleY:1.11},6,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-19.1,302.1,38.3);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ36();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.6,-7.6,103.4,15.4);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ruki();
	this.instance.setTransform(-49.5,-34);

	this.instance_1 = new lib.Символ25();
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ25(), 3);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63,-47,126,94);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:8.3},4,cjs.Ease.get(-1)).to({x:16.5},4,cjs.Ease.get(1)).to({x:9.2},4,cjs.Ease.get(-1)).to({x:0},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.4,-11.9,36.8,23.9);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:9.1,y:9.1},5,cjs.Ease.get(-1)).to({x:20,y:20},6,cjs.Ease.get(1)).to({x:10,y:10},6,cjs.Ease.get(-1)).to({x:0,y:0},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.1,-64,58.2,128);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(2,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:7.2},5,cjs.Ease.get(-1)).to({y:-1},6,cjs.Ease.get(1)).to({y:6.5},6,cjs.Ease.get(-1)).to({y:14},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.5,-20,95,70);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(0,133.9,28.25,0.425,0,180,0);

	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(-70.7,-50.8,1,4.589,0,0,0,0,-0.1);

	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(-70.7,103.8,1,1.108);

	this.instance_3 = new lib.Символ17();
	this.instance_3.setTransform(71.5,100.4,1,1.28);

	this.instance_4 = new lib.Символ17();
	this.instance_4.setTransform(71.5,-44.9,1,1.987,0,0,0,0,-0.1);

	this.instance_5 = new lib.Символ17();
	this.instance_5.setTransform(71.5,-122.6);

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.7,-142.2,169.5,284.5);


(lib.Слой3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(13,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.86,y:35.7},13,cjs.Ease.get(-0.2)).to({scaleY:0.68,y:28.3},12,cjs.Ease.get(0.2)).wait(12).to({scaleY:1,y:41.5},13,cjs.Ease.get(0.2)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,83);


(lib.Слой2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(34,41.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68,83);


(lib.stopa_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация4("synched",0);
	this.instance.setTransform(46.2,13.5,1,1,0,0,0,20.2,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:20.3,rotation:8.8,x:46.3},8,cjs.Ease.get(-1)).to({regX:20.2,regY:-16.4,rotation:32,x:46.2},9,cjs.Ease.get(1)).to({regY:-16.5,scaleX:1,scaleY:1,rotation:22.3},9).to({scaleX:1,scaleY:1,rotation:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,60);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(125.4,0,1,1,180);

	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(-125.3,0);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-143.7,-11.9,287.6,23.9);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Слой2();
	this.instance.setTransform(16.5,-24,1,1,0,0,0,34,41.5);

	this.instance_1 = new lib.stopa_1();
	this.instance_1.setTransform(-24.5,35.5,1,1,0,0,0,26,30);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.5,-65.5,101,131);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ3();
	this.instance.setTransform(37.8,-54.2,1,1,0,0,0,37.8,-54.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.8},8,cjs.Ease.get(-1)).to({rotation:15,y:-54.1},9,cjs.Ease.get(1)).to({rotation:7.3,x:37.9,y:-54.2},9).to({scaleX:1,scaleY:1,rotation:4.3,x:37.7,y:-54.1},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:0,x:37.8,y:-54.2},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.5,-65.5,101,131);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.alpha = 0.559;
	this.instance.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance.cache(-87,-144,174,289);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-89.7,-147.2,182,298);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 2
	this.instance = new lib.Символ19();
	this.instance.setTransform(10.5,-6.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ4_1 = function() {
	this.initialize();

	// Слой 4
	this.green = new lib.Символ4();
	this.green.setTransform(1,-0.4);

	// Символ 2
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(-78,81.5);

	// Слой 3
	this.instance_2 = new lib.Слой3();
	this.instance_2.setTransform(115.5,45.5,1,1,0,0,0,13,41.5);

	// Слой 0 копия 3
	this.instance_3 = new lib.baba_1();
	this.instance_3.setTransform(10.5,0,1,1,0,0,0,108,127);

	// Слой 4 копия 2
	this.instance_4 = new lib.Слой4копия2();
	this.instance_4.setTransform(12,-6,1,1,0,0,0,83.5,141);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.green);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-128.5,-147,257,294);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.girl = new lib.Символ4_1();

	this.timeline.addTween(cjs.Tween.get(this.girl).to({scaleX:0.96,scaleY:0.95,y:-7.8},11,cjs.Ease.get(-1)).to({scaleX:0.92,scaleY:0.89,y:-18},13,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.95,y:-9},13,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:0},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.5,-147,257,294);


// stage content:



(lib._10_baba_640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		var _this = this;
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.btn.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler()
		{
			_this.girl1.girl.green.gotoAndPlay(1);
		}
		
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.btn.addEventListener("mouseout", qwe);
		
		function qwe()
		{
			_this.girl1.girl.green.gotoAndPlay(0);
		}
		
		this.strela.visible = false;
		
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.btn2.addEventListener("mouseover", fl_MouseOverHandler_2);
		
		function fl_MouseOverHandler_2()
		{
			_this.strela.visible = true;
		
		}
		
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.btn2.addEventListener("mouseout", fl_MouseOutHandler);
		
		function fl_MouseOutHandler()
		{
			_this.strela.visible = false;
		}
		
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.bigbutton.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.btn2.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open(clickTAG, "_blank");
		}
		
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.btn.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.btn2 = new lib.Символ24();
	this.btn2.setTransform(86.5,204.5,0.742,0.742,45);

	this.btn = new lib.Символ23();
	this.btn.setTransform(554,211);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn},{t:this.btn2}]}).wait(1));

	// Слой 6
	this.bigbutton = new lib.Символ40();
	this.bigbutton.setTransform(320,152.5);
	new cjs.ButtonHelper(this.bigbutton, 0, 1, 2, false, new lib.Символ40(), 3);

	this.timeline.addTween(cjs.Tween.get(this.bigbutton).wait(1));

	// Слой 1
	this.strela = new lib.Символ28();
	this.strela.setTransform(335,178.9);

	this.timeline.addTween(cjs.Tween.get(this.strela).wait(1));

	// Слой 5
	this.instance = new lib.Символ38();
	this.instance.setTransform(327.8,26.2);

	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(314.5,7.1);
	this.instance_1.alpha = 0.539;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ32();
	this.instance_2.setTransform(557.8,137);

	this.instance_3 = new lib.Символ31();
	this.instance_3.setTransform(101.6,136.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Слой 2
	this.girl1 = new lib.Символ1();
	this.girl1.setTransform(311.5,146);

	this.timeline.addTween(cjs.Tween.get(this.girl1).wait(1));

	// Слой 0 копия 6
	this.instance_4 = new lib.fon_1();
	this.instance_4.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(302,123.6,665.2,334);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;