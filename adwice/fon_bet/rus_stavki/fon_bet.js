(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/b4.png", id:"b4"},
		{src:"images/b5.png", id:"b5"},
		{src:"images/b6.png", id:"b6"},
		{src:"images/b7.png", id:"b7"},
		{src:"images/b8.png", id:"b8"},
		{src:"images/b9.png", id:"b9"},
		{src:"images/ball.png", id:"ball"},
		{src:"images/Bitmap1.jpg", id:"Bitmap1"}
	]
};



// symbols:



(lib.b4 = function() {
	this.initialize(img.b4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,281);


(lib.b5 = function() {
	this.initialize(img.b5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,38);


(lib.b6 = function() {
	this.initialize(img.b6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,95);


(lib.b7 = function() {
	this.initialize(img.b7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,42);


(lib.b8 = function() {
	this.initialize(img.b8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,68);


(lib.b9 = function() {
	this.initialize(img.b9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,68);


(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,86);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,56.8).s().p("AneBcQjGgngBg1QABg1DGgmQDHgmEXAAQEYAADHAmQDHAmAAA1QAAA1jHAnQjHAlkYABQkXgBjHglg");
	this.shape.setTransform(67.8,13);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,135.6,26);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.b5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,33,38);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.b7();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34,42);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.b6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,127,95);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AENCiIAJgmQgYgCgZgHIAHgvIBQACQAUAAAHgEQAHgDACgLQABgIgDgEQgDgEgJgDIgtgVQgOgHgKgGQgIgIgFgJQgFgJgBgLQgBgKABgNQADgUAGgNQAHgNALgHQALgIARgEQAPgDAWAAIAJggIAxAAIgJAiQAWADAWAGIgHAsIhRgBQgQAAgGADQgGADgCALQgBAIADAEQADAEAMAFIApATQAPAGAJAIQAKAFAEAJQAFAJABALQABALgBAOQgDAVgGANQgGAOgLAIQgKAIgRAEQgQADgYAAIgJAkgAA2B4QgKgEgHgFQgHgGgGgHQgFgIgDgKQgEgKgBgNQgCgRAEgrQAEgYAKgkIAJgWQAGgKAGgHQAHgIAIgFQAJgFAKgDQANgFAhgCIAaACQAMACAJADQAKAEAHAFQAHAGAGAIQAFAIADAKQADAKABAMQABAmgDAWQgIAsgGAQIgJAWQgGAKgHAHQgGAIgIAFQgJAFgJADQgKAEgMABIgaACQghgCgMgFgABrhLQgIADgEAIQgFAIgEAQIgLBOQAAAPACAIQACAIAHADQAFADALAAQAMAAAHgDQAHgDAFgIQAFgIAEgQIAKhNQABgQgDgIQgCgIgGgDQgGgDgLAAQgLAAgHADgAivB4QgKgEgHgFQgHgGgGgHQgFgIgDgKQgEgKgBgNQgCgRAEgrQAEgYAKgkIAJgWQAGgKAGgHQAHgIAIgFQAJgFAKgDQANgFAhgCIAaACQAMACAJADQAKAEAHAFQAHAGAGAIQAFAIADAKQADAKABAMQABAmgDAWQgIAsgGAQIgJAWQgGAKgHAHQgGAIgIAFQgJAFgJADQgKAEgMABIgaACQghgCgMgFgAh6hLQgIADgEAIQgFAIgEAQIgLBOQAAAPACAIQACAIAHADQAFADALAAQAMAAAHgDQAHgDAFgIQAFgIAEgQIAKhNQABgQgDgIQgCgIgGgDQgGgDgLAAQgLAAgHADgAmHB9IgrgGIAJgzQAYADAlAAIAUgDQAJgCAFgEQAGgEAEgGQAEgGABgJQACgNgHgFQgHgFgXgCIgmgFQgKgCgGgFQgFgIACgKIAVhrICZAAIgKAyIhgAAIgIAlIAdADQAWADAPAIQAOAHAIALQAHAIADANQACAMgCAOQgCASgGAOQgHAPgLALQgNAMgSAHQgbAHgSABIgKABQgOAAgQgCg");
	this.shape.setTransform(43.5,16.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,87.1,32.6);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(173.3,11.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,-1.4,356.7,25.8);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Bitmap1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.Анимация3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.b9();
	this.instance.setTransform(-22,-34);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22,-34,44,68);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.b8();
	this.instance.setTransform(-20.5,-34);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.5,-34,41,68);


(lib.sprite28 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.shape167 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ball();
	this.instance.setTransform(-40.1,-43);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.1,-43,82,86);


(lib.shape158 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhtjgIi9AAIEqhyIErBuIjJAAIDXIvIpxAHg");
	this.shape.setTransform(0.6,-33.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.8,-67,62.8,67.8);


(lib.shape22Hit = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(2,0,0,3).p("A6TosMA0nAAAIAARZMg0nAAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-169.4,-56.7,339,113.5);


(lib.shape20Hit = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("A6TItIAAxZMA0nAAAIAARZg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-168.4,-55.7,337,111.5);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(20.5,34);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41,68);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.setTransform(22,34);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,44,68);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// b5
	this.instance = new lib.Символ12();
	this.instance.setTransform(120.5,133.9,1,1,0,0,0,16.5,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:18.9,rotation:15,y:133.8},9).to({regY:19,rotation:0,y:133.9},10).wait(1));

	// b7
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(51,168.9,1,1,0,0,0,17,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:16.9,rotation:-15,x:52.3,y:166.2},4).to({regX:17,rotation:0,x:51,y:168.9},5).to({regX:16.9,rotation:-15,x:52.3,y:166.2},5).to({regX:17,rotation:0,x:51,y:168.9},5).wait(1));

	// b6
	this.instance_2 = new lib.Символ10();
	this.instance_2.setTransform(92.5,156.4,1,1,0,0,0,63.5,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:63.6,rotation:-5.4,x:93.2,y:151.5},9).to({regX:63.5,rotation:0,x:92.5,y:156.4},10).wait(1));

	// Слой 1
	this.instance_3 = new lib.b4();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156,281);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(197.3,12.7,1.106,1.106,0,0,0,173.3,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},10).to({scaleX:0.91,scaleY:0.91},9).to({scaleX:1.01,scaleY:1.01},10).to({scaleX:1.11,scaleY:1.11},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.5,394.6,28.5);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(319.4,236.8,1,1,0,0,0,320,240);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.6,-3.2,640,480);


(lib.sprite164 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape158("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.8,-67,62.8,67.8);


(lib.sprite29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite28();
	this.instance.shadow = new cjs.Shadow("#000000",0,0,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-0.5},1).to({y:0.5},1).to({x:-0.5,y:0},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,12,12);


(lib.sprite21 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape20Hit("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-168.4,-55.7,337,111.5);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(78,140.5,1,1,0,0,0,78,140.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,156,281);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 11
	this.instance = new lib.Символ16();
	this.instance.setTransform(106.5,297,1,1,0,0,0,20.5,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-15,x:112.6,y:292.2},9).to({rotation:0,x:106.5,y:297},10).wait(1));

	// Слой 12
	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(52,297,1,1,0,0,0,22,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:15,x:47.8,y:290.7},9).to({rotation:0,x:52,y:297},10).wait(1));

	// Слой 6
	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(92,140.5,1,1,0,0,0,78,140.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14,0,156,331);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.inside = new lib.sprite164();
	this.inside.setTransform(15.2,33.1,0.493,0.493);

	this.timeline.addTween(cjs.Tween.get(this.inside).to({scaleY:0.56,y:33},9,cjs.Ease.get(-1)).to({scaleY:0.63},10,cjs.Ease.get(1)).to({scaleY:0.56,y:33.1},10,cjs.Ease.get(-1)).to({scaleY:0.49},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,33.5);


(lib.sprite168 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape167("synched",0);

	// Слой 2
	this.ball = new lib.Symbol6();
	this.ball.setTransform(0.1,-42.8,1.948,1.948,0,0,0,15.6,16.8);

	this.addChild(this.ball,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.1,-75.5,82,118.5);


(lib.sprite23Up = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.shape22Hit("synched",0);

	// Layer 1
	this.instance_1 = new lib.sprite21();
	this.instance_1.alpha = 0.352;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-169.4,-56.7,339,113.5);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(11,29.9,1,1,0,0,0,25,29.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:10.2,y:15.7},4).to({x:11,y:29.9},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156,331);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sprite23Up();
	this.instance.setTransform(0,0,0.5,0.507);
	this.instance.alpha = 0.199;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.48},4).to({alpha:0.199},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.7,-28.7,169.5,57.5);


(lib.button24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Символ8();
	this.instance.setTransform(0.9,-0.6,1,1,0,0,0,43.5,16.2);
	this.instance.alpha = 0.609;

	this.instance_1 = new lib.shape22Hit("synched",0);
	this.instance_1.setTransform(0,0,0.5,0.507);
	this.instance_1.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// Layer 1
	this.instance_2 = new lib.Символ2();

	this.instance_3 = new lib.sprite23Up();
	this.instance_3.setTransform(0,0,0.5,0.507);
	this.instance_3.compositeOperation = "lighter";

	this.instance_4 = new lib.shape20Hit("synched",0);
	this.instance_4.setTransform(0,0,0.5,0.507);
	this.instance_4.alpha = 0.211;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3,p:{alpha:1}}]},1).to({state:[{t:this.instance_3,p:{alpha:0.602}}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.7,-28.7,169.5,57.5);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(78,165.5,1,1,0,0,0,78,165.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6.2},4).to({rotation:0},5).to({rotation:-6},5).to({rotation:-1},4).to({rotation:0},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156,331);


(lib.Symbol29 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ14();
	this.instance.setTransform(1107.2,86.8,0.769,0.769,0,0,0,78,165.5);

	// Слой 4
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(1093.2,207.8,1.575,0.972,0,0,0,67.8,13.2);
	this.instance_1.alpha = 0.762;

	// Layer 1
	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(-147.5,182.7,1.955,1.779,0,0.2,0,320.1,240);

	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(2338.6,182.7,1.955,1.779,0,0.2,0,320.1,240);

	this.instance_4 = new lib.sprite29();
	this.instance_4.setTransform(1071.2,135.8,2.111,1.62,0,0.3,0);
	this.instance_4.alpha = 0.578;
	this.instance_4.shadow = new cjs.Shadow("rgba(0,51,0,1)",0,0,5);

	this.instance_5 = new lib.button24();
	this.instance_5.setTransform(1211.2,132.7,1.407,1.655,0,0.2,0);
	this.instance_5.alpha = 0.75;
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.button24(), 3);

	this.instance_6 = new lib.button24();
	this.instance_6.setTransform(974.3,132.7,1.407,1.655,0,0.2,0);
	this.instance_6.alpha = 0.75;
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2, false, new lib.button24(), 3);

	this.instance_7 = new lib.button24();
	this.instance_7.setTransform(1211.6,49.7,1.407,1.28,0,0.2,0);
	this.instance_7.alpha = 0.75;
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2, false, new lib.button24(), 3);

	this.instance_8 = new lib.button24();
	this.instance_8.setTransform(974,49.7,1.407,1.28,0,0.2,0);
	this.instance_8.alpha = 0.75;
	new cjs.ButtonHelper(this.instance_8, 0, 1, 2, false, new lib.button24(), 3);

	this.instance_9 = new lib.Symbol1();
	this.instance_9.setTransform(1095.6,182.7,1.955,1.779,0,0.2,0,320.1,240);

	this.addChild(this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-776.1,-250,3740.7,854);


// stage content:
(lib.fon_bet = function(mode,startPosition,loop) {
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
		
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 10;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 2
	this.instance = new lib.sprite168();
	this.instance.setTransform(314,288,0.622,0.622);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(290.5,43.5,1,1,0,0,0,167.8,33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.fon = new lib.Symbol29();
	this.fon.setTransform(455,243.5,0.591,0.591,0,0,0,500.9,282.7);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.8,80.9,2212.3,505.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;