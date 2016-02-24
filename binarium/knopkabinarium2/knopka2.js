(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 480,
	height: 60,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/KNOPKA.png", id:"KNOPKA"},
		{src:"images/KNOPKA15.png", id:"KNOPKA15"}
	]
};



// symbols:



(lib.KNOPKA = function() {
	this.initialize(img.KNOPKA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.KNOPKA15 = function() {
	this.initialize(img.KNOPKA15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.KNOPKA();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Анимация8 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AJf8PIKPF6MgdMAylIqPl6g");
	this.shape.setTransform(68.3,-51);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(68,68,68,0)"],[0,0.51,1],-32.7,-18.9,32.8,18.9).s().p("AztWWMAdMgylIKPF6MgdMAylg");
	this.shape_1.setTransform(68.3,-51);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.9,-232.8,254.5,363.7);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация8("synched",0);
	this.instance.setTransform(-100.4,136);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:487.5},39).to({x:486.5},61).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.4,-96.8,254.5,363.7);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(27.5,135.9,1,1,0,0,0,27.5,135.9);
	this.instance.alpha = 0.43;
	this.instance.compositeOperation = "lighter";

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-158.9,-96.3,253.5,362.7);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(234,30,1,1,0,0,0,234,30);

	this.instance_1 = new lib.KNOPKA15();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 2
	this.instance = new lib.Символ2();
	this.instance.setTransform(-0.5,-1,1,1,0,0,0,234,30);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({x:0},0).to({x:6},7).to({x:0},2,cjs.Ease.get(1)).to({x:5.5},2,cjs.Ease.get(-1)).to({x:0},8,cjs.Ease.get(1)).wait(20).to({x:5.5},7).to({x:0},2,cjs.Ease.get(1)).to({x:5.5},2,cjs.Ease.get(-1)).to({x:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-234.5,-31,468,60);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAl4QCWAABpBqQBrBqAACWIAAAdQAACWhrBpQhpBriWAAQiVAAhqhrQhqhpAAiWIAAgdQAAiWBqhqQBqhqCVAAg");
	this.shape.setTransform(101.2,-184.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99CC66").s().p("Aj/EOQhqhqAAiVIAAgdQAAiWBqhqQBrhqCUAAQCVAABqBqQBrBqAACWIAAAdQAACVhrBqQhqBriVAAQiUAAhrhrg");
	this.shape_1.setTransform(101.2,-184.4);

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EggEAEDQhuABhPhNQhOhMAAhrQAAhqBOhMQBPhNBuAAMBAIAAAQBuAABOBNQBPBMAABqQAABrhPBMQhOBNhugBg");
	mask.setTransform(385.4,236.8);

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(319.4,22.3,1,1,0,0,0,27.5,135.9);

	this.instance.mask = mask;

	this.addChild(this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(63.9,-223.1,74.5,77.5);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(234,30,1,1,0,0,0,234,30);

	this.instance_1 = new lib.KNOPKA15();
	this.instance_1.setTransform(-234.5,-31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-234.5,-31,468,60);


// stage content:
(lib.knopka2 = function() {
	this.initialize();

	// Символ 6
	this.instance = new lib.Символ6();
	this.instance.setTransform(-26.2,-26,1,1,0,0,0,126.2,180.8);

	// Слой 4
	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(473.5,61,1,1,0,0,0,234,30);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(152,-399.4,561,489.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;