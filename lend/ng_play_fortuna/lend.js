(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/baraban.png", id:"baraban"},
		{src:"images/ddd3.png", id:"ddd3"},
		{src:"images/play_fortuna_xmass.jpg", id:"play_fortuna_xmass"},
		{src:"images/sf12.png", id:"sf12"},
		{src:"images/ss5.png", id:"ss5"},
		{src:"images/star.png", id:"star"},
		{src:"images/star2.png", id:"star2"},
		{src:"images/yy87.png", id:"yy87"}
	]
};



// symbols:



(lib.baraban = function() {
	this.initialize(img.baraban);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,575,400);


(lib.ddd3 = function() {
	this.initialize(img.ddd3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,76);


(lib.play_fortuna_xmass = function() {
	this.initialize(img.play_fortuna_xmass);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.sf12 = function() {
	this.initialize(img.sf12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,76);


(lib.ss5 = function() {
	this.initialize(img.ss5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,76);


(lib.star = function() {
	this.initialize(img.star);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,150);


(lib.star2 = function() {
	this.initialize(img.star2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,150);


(lib.yy87 = function() {
	this.initialize(img.yy87);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,76);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AByDVQglgWgUgEQgTgFgYgPQgJgIgCgDQgFAGg9AhQhKAnAIgGQgIgeAIgoIANg5QAEgSgZgeQgZgdgdgYQgXgTgGgNQgGgOgBAAIADgBIAigHIA6gOIA3gOQAOgbANgUQANgUANgYIAPgcIAJgWQALgSAdBPQAjBDAVAKQAWAKAfADQAgADAyAHQAeADgfAhQgfAeg1BBQgBA8AJBoIgBAAQgFAAgigUgAP8DVQglgWgTgEQgUgFgYgPQgJgIgBgCQgIAFg9AhQhKAnAIgGQgIgeAJgoIAMg5QAEgSgZgdQgZgegdgYQgXgTgGgNQgFgOgCAAIADAAIAigIIA6gOIA3gOQAOgbANgUQAOgUANgYIAOgcIAMgWQAKgSAdBPQAjBDAWAKQAVAKAgADQAfADAyAHQAeADgeAhQgfAeg2BBQgBA9AJBnIgBAAQgFAAgigUgAsoDPQglgWgTgEQgUgFgYgPQgJgIgBgCQgIAFg9AhQhKAnAIgGQgIgeAJgoIAMg5QAEgSgZgdQgZgegdgXQgXgUgGgNQgFgOgCAAIADAAIAigIIA6gOIA3gOQAOgbANgUQAOgUANgYIAOgcIAMgWQAKgSAdBPQAjBDAWAKQAVAKAgADQAfADAyAHQAeADgeAhQgfAgg2A/QgBA9AJBnIgBAAQgFAAgigUg");
	this.shape.setTransform(23.3,24.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-91.9,1.5,230.5,46.8);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("A03JvQgPgKAEgWIAKgmIAFgRQgGgfgOAJQgXgbgrglQhMhQgWgTQgTgRgPgIQgLgUhAhKQhahngRgZQgagogPgSQgfgigngUQgRgJgVgSIgfgdQgPgMggADQgVADgWAHIgLAFIAAl0QAAhXA+g9QA8g9BXAAMA4XAAAQBWAAA+A9QA8A9AABXIAANdQAABXg8A9Qg+A9hWAAg");
	this.shape.setTransform(201.3,64);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,402.6,128.1);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.baraban();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,575,400);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.star();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(21));

	// Слой 1
	this.instance_1 = new lib.star2();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:true},2).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,150);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.ddd3();
	this.instance.setTransform(-39.3,-38);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.3,-38,80,76);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.ss5();
	this.instance.setTransform(-39.2,-38);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.2,-38,80,76);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.sf12();
	this.instance.setTransform(-35.4,-38);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.4,-38,80,76);


(lib.RITH_Symbol_05 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.yy87();
	this.instance.setTransform(-168.5,-157.7,4.184,4.184);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-168.5,-157.7,334.8,318);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(201.3,64,1,1,0,0,0,201.3,64);
	this.instance.alpha = 0.27;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({alpha:0.09},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ26 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.RITH_Symbol_05();
	this.instance.setTransform(-2.2,-1.1,0.25,0.25);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-32, 0, 71, 90))];
	this.instance.cache(-170,-160,339,322);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.3,-40.5,87,82);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(0.7,-337.5,0.926,0.926);

	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(0.7,-475.3,0.926,0.926);

	this.instance_2 = new lib.Символ26();
	this.instance_2.setTransform(0,-408.7,0.926,0.926);

	this.instance_3 = new lib.Символ27();
	this.instance_3.setTransform(0.7,-134.3,0.926,0.926);

	this.instance_4 = new lib.Символ27();
	this.instance_4.setTransform(0.7,-272.1,0.926,0.926);

	this.instance_5 = new lib.Символ26();
	this.instance_5.setTransform(0,-205.5,0.926,0.926);

	this.instance_6 = new lib.Символ27();
	this.instance_6.setTransform(0.7,68.9,0.926,0.926);

	this.instance_7 = new lib.Символ27();
	this.instance_7.setTransform(0.7,-68.9,0.926,0.926);

	this.instance_8 = new lib.Символ26();
	this.instance_8.setTransform(0,-2.3,0.926,0.926);

	this.addChild(this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41,-510.5,81,614.6);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.setTransform(0,-343.9,0.926,0.926);

	this.instance_1 = new lib.Символ29();
	this.instance_1.setTransform(0,-481.7,0.926,0.926);

	this.instance_2 = new lib.Символ26();
	this.instance_2.setTransform(-1.1,-417,0.926,0.926);

	this.instance_3 = new lib.Символ29();
	this.instance_3.setTransform(0,-135.9,0.926,0.926);

	this.instance_4 = new lib.Символ29();
	this.instance_4.setTransform(0,-273.7,0.926,0.926);

	this.instance_5 = new lib.Символ26();
	this.instance_5.setTransform(-1.1,-209,0.926,0.926);

	this.instance_6 = new lib.Символ29();
	this.instance_6.setTransform(0,68.9,0.926,0.926);

	this.instance_7 = new lib.Символ29();
	this.instance_7.setTransform(0,-68.9,0.926,0.926);

	this.instance_8 = new lib.Символ26();
	this.instance_8.setTransform(-1.1,-4.2,0.926,0.926);

	this.addChild(this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.1,-516.9,81,621);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(0.1,-411.8,0.926,0.926);

	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(-1.5,-343.1,0.926,0.926);

	this.instance_2 = new lib.Символ25();
	this.instance_2.setTransform(-1.5,-480.9,0.926,0.926);

	this.instance_3 = new lib.Символ26();
	this.instance_3.setTransform(0.1,-205.4,0.926,0.926);

	this.instance_4 = new lib.Символ25();
	this.instance_4.setTransform(-1.5,-136.7,0.926,0.926);

	this.instance_5 = new lib.Символ25();
	this.instance_5.setTransform(-1.5,-274.5,0.926,0.926);

	this.instance_6 = new lib.Символ26();
	this.instance_6.setTransform(0.1,0.2,0.926,0.926);

	this.instance_7 = new lib.Символ25();
	this.instance_7.setTransform(-1.5,68.9,0.926,0.926);

	this.instance_8 = new lib.Символ25();
	this.instance_8.setTransform(-1.5,-68.9,0.926,0.926);

	this.addChild(this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41,-516.2,81,620.3);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ6();
	this.instance.setTransform(-4.9,-29.1,1,1,0,0,0,24.7,25.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(91).to({_off:false},0).to({alpha:0.391},9).to({alpha:0},9).to({alpha:0.391},9).to({alpha:0},9).wait(34));

	// Символ 34
	this.instance_1 = new lib.Символ34();
	this.instance_1.setTransform(-2.6,389.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({y:-23.4},0).wait(1).to({regX:-2.2,regY:-206.4,x:-4.8,y:-229.3},0).wait(1).to({y:-228.9},0).wait(1).to({y:-228.4},0).wait(1).to({y:-227.9},0).wait(1).to({y:-227.4},0).wait(1).to({y:-226.8},0).wait(1).to({y:-226.1},0).wait(1).to({y:-225.4},0).wait(1).to({y:-224.6},0).wait(1).to({y:-223.6},0).wait(1).to({y:-222.5},0).wait(1).to({y:-221.1},0).wait(1).to({y:-219.5},0).wait(1).to({y:-217.6},0).wait(1).to({y:-215.3},0).wait(1).to({y:-212.6},0).wait(1).to({y:-209.4},0).wait(1).to({y:-205.7},0).wait(1).to({y:-201},0).wait(1).to({y:-194.7},0).wait(1).to({y:-184.9},0).wait(1).to({regX:0,regY:0,x:-2.6,y:42.2},0).to({y:179.8},5).to({y:389.4},5).wait(1).to({y:42.2},0).to({y:179.8},5).to({y:389.4},5).wait(1).to({y:42.2},0).to({y:179.8},5).to({y:389.4},6).wait(1).to({y:42.2},0).wait(1).to({regX:-2.2,regY:-206.4,x:-4.8,y:-97.1},0).wait(1).to({y:-49},0).wait(1).to({y:-11.4},0).wait(1).to({y:19.1},0).wait(1).to({y:44.5},0).wait(1).to({y:65.8},0).wait(1).to({y:83.8},0).wait(1).to({y:99},0).wait(1).to({y:111.6},0).wait(1).to({y:121.1},0).wait(1).to({y:129},0).wait(1).to({y:135.9},0).wait(1).to({y:142},0).wait(1).to({y:147.5},0).wait(1).to({y:152.6},0).wait(1).to({y:157.1},0).wait(1).to({y:161.3},0).wait(1).to({y:165},0).wait(1).to({y:168.4},0).wait(1).to({y:171.4},0).wait(1).to({y:174.1},0).wait(1).to({y:176.4},0).wait(1).to({y:178.4},0).wait(1).to({y:180},0).wait(1).to({y:181.3},0).wait(1).to({y:182.2},0).wait(1).to({y:182.8},0).wait(1).to({regX:0,regY:0,x:-2.6,y:389.4},0).wait(73));

	// Символ 27
	this.instance_2 = new lib.Символ35();
	this.instance_2.setTransform(87,381.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({y:-25.3},0).wait(1).to({regX:-1.3,regY:-203.2,x:85.7,y:-227.9},0).wait(1).to({y:-227.4},0).wait(1).to({y:-226.8},0).wait(1).to({y:-226.1},0).wait(1).to({y:-225.4},0).wait(1).to({y:-224.6},0).wait(1).to({y:-223.7},0).wait(1).to({y:-222.5},0).wait(1).to({y:-221.2},0).wait(1).to({y:-219.5},0).wait(1).to({y:-217.4},0).wait(1).to({y:-214.8},0).wait(1).to({y:-211.6},0).wait(1).to({y:-207.7},0).wait(1).to({y:-203},0).wait(1).to({y:-196.5},0).wait(1).to({y:-186.2},0).wait(1).to({regX:0,regY:0,x:87,y:40.3},0).to({y:177.9},5).to({y:387.5},5).wait(1).to({y:40.3},0).to({y:177.9},5).to({y:387.5},5).wait(1).to({y:40.3},0).to({y:177.9},5).to({y:387.5},6).wait(1).to({y:40.3},0).wait(1).to({regX:-1.3,regY:-203.2,x:85.7,y:-97.1},0).wait(1).to({y:-49.8},0).wait(1).to({y:-12.9},0).wait(1).to({y:17},0).wait(1).to({y:41.9},0).wait(1).to({y:62.8},0).wait(1).to({y:80.5},0).wait(1).to({y:95.5},0).wait(1).to({y:107.8},0).wait(1).to({y:117.2},0).wait(1).to({y:124.9},0).wait(1).to({y:131.7},0).wait(1).to({y:137.7},0).wait(1).to({y:143.1},0).wait(1).to({y:148},0).wait(1).to({y:152.5},0).wait(1).to({y:156.6},0).wait(1).to({y:160.3},0).wait(1).to({y:163.6},0).wait(1).to({y:166.6},0).wait(1).to({y:169.2},0).wait(1).to({y:171.5},0).wait(1).to({y:173.4},0).wait(1).to({y:175},0).wait(1).to({y:176.3},0).wait(1).to({y:177.2},0).wait(1).to({y:177.7},0).wait(1).to({regX:0,regY:0,x:87,y:381.1},0).wait(79));

	// Символ 26
	this.instance_3 = new lib.Символ33();
	this.instance_3.setTransform(-96.3,383.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-29.6},15).to({y:175.4},5).to({y:385},5).wait(1).to({y:37.8},0).to({y:175.4},5).to({y:385},5).wait(1).to({y:37.8},0).to({y:175.4},5).to({y:385},6).wait(1).to({y:37.8},0).wait(1).to({regX:-0.6,regY:-206.1,x:-96.9,y:-101.5},0).wait(1).to({y:-53.6},0).wait(1).to({y:-16.2},0).wait(1).to({y:14.2},0).wait(1).to({y:39.4},0).wait(1).to({y:60.7},0).wait(1).to({y:78.6},0).wait(1).to({y:93.7},0).wait(1).to({y:106.3},0).wait(1).to({y:115.8},0).wait(1).to({y:123.6},0).wait(1).to({y:130.4},0).wait(1).to({y:136.5},0).wait(1).to({y:142.1},0).wait(1).to({y:147},0).wait(1).to({y:151.6},0).wait(1).to({y:155.7},0).wait(1).to({y:159.5},0).wait(1).to({y:162.8},0).wait(1).to({y:165.8},0).wait(1).to({y:168.5},0).wait(1).to({y:170.8},0).wait(1).to({y:172.8},0).wait(1).to({y:174.4},0).wait(1).to({y:175.7},0).wait(1).to({y:176.6},0).wait(1).to({y:177.2},0).wait(1).to({regX:0,regY:0,x:-96.3,y:383.4},0).wait(84));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.3,-134.8,272.3,632.3);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgiwAb9QgKg0gFgBQgHgDAAgVQgagpAOgdUgKwgN9AE/ghdUAhHgLvAwlAKhQFmckqCWXg");
	mask.setTransform(289.3,194.1);

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,72.9,0,-72.9).s().p("Egs4AL/IAA39MBZxAAAIAAX9g");
	this.shape.setTransform(287.3,344.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,-72.8,0,73).s().p("Egs4AL/IAA39MBZxAAAIAAX9g");
	this.shape_1.setTransform(287.3,24.3);

	this.shape.mask = this.shape_1.mask = mask;

	// Слой 3
	this.instance = new lib.Символ23();
	this.instance.setTransform(301.9,241.3,1.944,1.944);

	this.instance.mask = mask;

	// Слой 1
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(287.5,200,1,1,0,0,0,287.5,200);

	this.instance_1.mask = mask;

	this.addChild(this.instance_1,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(16.4,15.2,545.9,357.9);


// stage content:
(lib.lend = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.instance = new lib.Символ4();
	this.instance.setTransform(968,689.7,1,1,0,0,0,201.3,64);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ4(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(968.1,514.3,0.677,0.647,0,0,0,287.7,200.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(966.8,177.3,0.619,0.619,0,0,0,77.5,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.instance_3 = new lib.play_fortuna_xmass();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,1920,1167.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;