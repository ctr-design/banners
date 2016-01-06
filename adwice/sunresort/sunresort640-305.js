(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/sunnyresort.jpg", id:"sunnyresort"},
		{src:"images/sunnyresort_02.png", id:"sunnyresort_02"},
		{src:"images/sunnyresort_04.png", id:"sunnyresort_04"},
		{src:"images/sunnyresort_06.png", id:"sunnyresort_06"},
		{src:"images/sunnyresort_08.png", id:"sunnyresort_08"},
		{src:"images/sunnyresort_10.png", id:"sunnyresort_10"},
		{src:"images/sunnyresort_12.png", id:"sunnyresort_12"},
		{src:"images/sunnyresort_15.png", id:"sunnyresort_15"},
		{src:"images/sunnyresort_28.png", id:"sunnyresort_28"},
		{src:"images/sunnyresort_31.png", id:"sunnyresort_31"},
		{src:"images/tek.png", id:"tek"}
	]
};



// symbols:



(lib.sunnyresort = function() {
	this.initialize(img.sunnyresort);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,600);


(lib.sunnyresort_02 = function() {
	this.initialize(img.sunnyresort_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,76);


(lib.sunnyresort_04 = function() {
	this.initialize(img.sunnyresort_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,76);


(lib.sunnyresort_06 = function() {
	this.initialize(img.sunnyresort_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,91);


(lib.sunnyresort_08 = function() {
	this.initialize(img.sunnyresort_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,64);


(lib.sunnyresort_10 = function() {
	this.initialize(img.sunnyresort_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,64);


(lib.sunnyresort_12 = function() {
	this.initialize(img.sunnyresort_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,91);


(lib.sunnyresort_15 = function() {
	this.initialize(img.sunnyresort_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,111);


(lib.sunnyresort_28 = function() {
	this.initialize(img.sunnyresort_28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,255,306);


(lib.sunnyresort_31 = function() {
	this.initialize(img.sunnyresort_31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,317,163);


(lib.tek = function() {
	this.initialize(img.tek);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,296,24);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.58)"],[0.639,1],0,0,0,0,0,212.3).s().p("EhWOAywMAAAhlfMCsdAAAMAAABlfg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-552,-324.8,1104,649.7);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("Eg9/AiQMAAAhEfMB7/AAAMAAABEfg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.tek();
	this.instance.setTransform(-123,-10,0.831,0.831);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-123,-10,246,20);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AwYESIGSjFIsel6IQHn5IdCOMIszGVIAEACIpUEqg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-144.5,-80.7,289,161.6);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.sunnyresort_31();
	this.instance.setTransform(-158.5,-81.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-158.5,-81.5,317,163);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.sunnyresort_31();
	this.instance.setTransform(-158.5,-81.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-158.5,-81.5,317,163);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.sunnyresort_28();
	this.instance.setTransform(-127.5,-153);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-127.5,-153,255,306);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.sunnyresort_08();
	this.instance.setTransform(-7.5,-32);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.5,-32,15,64);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.sunnyresort_02();
	this.instance.setTransform(-29,-38);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29,-38,58,76);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.sunnyresort_04();
	this.instance.setTransform(-22.5,-38);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.5,-38,45,76);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.sunnyresort_06();
	this.instance.setTransform(-20,-45.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20,-45.5,40,91);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.sunnyresort_10();
	this.instance.setTransform(-12,-32);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12,-32,24,64);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.sunnyresort_15();
	this.instance.setTransform(-84,-55.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84,-55.5,168,111);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.sunnyresort();
	this.instance.setTransform(-326,-244.5,0.815,0.815);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-326,-244.5,652.1,489.1);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.sunnyresort_12();
	this.instance.setTransform(-41.5,-45.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.5,-45.5,83,91);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.27},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123,-10,246,20);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.alpha = 0.238;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.441},9).to({alpha:0.238},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.5,-81.5,317,163);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.setTransform(-39.9,-8.7);

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcARI0GAAQiVAAAAiTIAAi1QAAiWCVAAMApFAAAQCVAAAACWIAAC1QAACTiVAAIvCAAQg+BZoKFkQDwjfgljeg");
	this.shape.setTransform(-39,16.6);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-185.4,-29.6,293,92.5);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(0,0,0.992,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:5},13,cjs.Ease.get(-1)).to({y:10},13,cjs.Ease.get(1)).to({y:5.4},13,cjs.Ease.get(-1)).to({y:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.5,-153,253,306);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12,-32,24,64);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:255,y:-132},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-32,24,64);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(-68,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:110,y:25},73).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-101,58,76);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20,-45.5,40,91);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ8();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.5,-32,15,64);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(-61,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:341,y:-208},143).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.5,0,45,76);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-326,-244.5,652.1,489.1);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.5,-45.5,83,91);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ31();
	this.instance.setTransform(-12.9,0.3);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ28();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.5,-81.5,317,163);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:-3.8,x:-3},30).to({scaleY:1,skewX:0,x:0},28).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-45.5,83,91);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:-2.5,x:-2},37).to({scaleY:1,skewX:0,x:0},27).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-45.5,83,91);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:3.1,x:2.5},18).to({scaleY:1,skewX:0,x:0},21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-45.5,83,91);


(lib.Символ13 = function() {
	this.initialize();

	// Символ 2
	this.instance = new lib.Символ20();
	this.instance.setTransform(143,85);

	// Символ 2
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(-53,-118);

	// Символ 8
	this.instance_2 = new lib.Символ15();
	this.instance_2.setTransform(-102,-77.5);

	// Символ 7
	this.instance_3 = new lib.Символ17();
	this.instance_3.setTransform(250.5,-153.5);

	// Символ 6
	this.instance_4 = new lib.Символ14();
	this.instance_4.setTransform(-303.5,-110.5);

	// Символ 5
	this.instance_5 = new lib.Символ16();
	this.instance_5.setTransform(47.5,-137);

	// Символ 3
	this.instance_6 = new lib.Символ3();
	this.instance_6.setTransform(141.5,-165);

	// Символ 2
	this.instance_7 = new lib.Символ19();
	this.instance_7.setTransform(221,54);

	// Символ 4
	this.instance_8 = new lib.Символ18();
	this.instance_8.setTransform(219.5,11.5);

	// Символ 12
	this.instance_9 = new lib.Символ12();

	this.addChild(this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-387,-254.5,713.1,499.1);


// stage content:
(lib.sunresort640305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		this.cursor = "none";
		this.cur.alpha = 0
		this.hall.alpha = 0
		
		//--------------------------------
		
		stage.canvas.style.cursor = "none";
		this.cur.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.cur.x = stage.mouseX;
			this.cur.y = stage.mouseY;
		}
		
		//--------------------------------
		
		
		this.bt1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
		
		this.bt2.addEventListener("click", fl_ClickToGoToWebPage2);
		
		function fl_ClickToGoToWebPage2() {
			window.open(clickTAG, "_blank");
		}
		
		//--------------------------------
		
		this.bt1.addEventListener("mouseover", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.cur.alpha = 1
			this.hall.alpha = 1
		}
		
		this.bt1.addEventListener("mouseout", fl_ClickToGoToAndStopAtFrame1.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame1()
		{
			this.cur.alpha = 0
			this.hall.alpha = 0
		}
		
		//---------------------------------
		
		this.bt2.addEventListener("mouseover", fl_ClickToGoToAndStopAtFrame2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame2()
		{
			this.cur.alpha = 1
			this.hall.alpha = 1
		}
		
		this.bt2.addEventListener("mouseout", fl_ClickToGoToAndStopAtFrame3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame3()
		{
			this.cur.alpha = 1
			this.hall.alpha = 1
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Символ 11
	this.cur = new lib.Символ11();
	this.cur.setTransform(810,78.5);

	this.timeline.addTween(cjs.Tween.get(this.cur).wait(1));

	// Символ 28
	this.bt2 = new lib.Символ30();
	this.bt2.setTransform(355,200.5);
	new cjs.ButtonHelper(this.bt2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.bt2).wait(1));

	// Слой 12
	this.bt1 = new lib.Символ34();
	this.bt1.setTransform(327.8,177.2);
	new cjs.ButtonHelper(this.bt1, 0, 1, 2, false, new lib.Символ34(), 3);

	this.timeline.addTween(cjs.Tween.get(this.bt1).wait(1));

	// Слой 14
	this.hall = new lib.Символ35();
	this.hall.setTransform(334.4,168,0.637,0.637,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.hall).wait(1));

	// Символ 24
	this.instance = new lib.Символ24();
	this.instance.setTransform(174.5,38.7,0.865,0.865);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 23
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(122,223);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 13
	this.instance_2 = new lib.Символ13();
	this.instance_2.setTransform(318,212.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(251,110.5,1037.5,499.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;