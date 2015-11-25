(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/dama.png", id:"dama"},
		{src:"images/fffon.jpg", id:"fffon"},
		{src:"images/ryka.png", id:"ryka"},
		{src:"images/slot.jpg", id:"slot"},
		{src:"images/vulk.png", id:"vulk"}
	]
};



// symbols:



(lib.dama = function() {
	this.initialize(img.dama);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,310,349);


(lib.fffon = function() {
	this.initialize(img.fffon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,450);


(lib.ryka = function() {
	this.initialize(img.ryka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,115);


(lib.slot = function() {
	this.initialize(img.slot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,1326);


(lib.vulk = function() {
	this.initialize(img.vulk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,136);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("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");
	this.shape.setTransform(227,24.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,454.1,48.2);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B9852C","#FFCC00","#FFFF99"],[0,0.463,1],0,162.1,0,-162.1).s().p("EgtPAMvIAA5eMBafAABIAAZeg");
	this.shape.setTransform(297.1,79.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7.5,-1.7,579.3,163.3);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#666666","#CCCCCC"],[0,1],-7.6,0,7.6,0).s().p("AgBevQgfAAgVgVQgWgVAAgfMAAAg7LQAAgfAWgVQAVgWAfAAIADAAQAeAAAWAWQAWAVAAAfMAAAA7LQAAAfgWAVQgWAVgeAAg");
	this.shape.setTransform(7.6,196.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15.2,393.6);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqJMKQiPAAAAiQIAAzzQAAiPCPgBIUSAAQCQABAACPIAATzQAACQiQAAg");
	this.shape.setTransform(79.4,77.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,158.8,155.6);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ryka();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,116,115);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhaAUQAAgOAagHQAagKAdgOQAbgOAhAUQAgATAHAFQAHAIgxgXQgwgagoAiQgoAfgFACIgBABQgEAAAAgMg");
	this.shape.setTransform(9.2,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhQAhQgKgBAAgOQAAgNAagIQAagJAdgOQAbgOAhATQAgATAIAHQAGAIgsgNQgugPglAXQgmAZgLAAIgBAAg");
	this.shape_1.setTransform(9.2,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhLAiQgQgEAAgNQAAgOAagHQAagKAdgOQAbgOAhAUQAhATAHAHQAIAJgpgEQgqgFgkARQgfAOgQAAIgHgBg");
	this.shape_2.setTransform(9.2,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhGAiQgVgGAAgOQAAgNAagIQAagJAdgOQAbgOAhATQAhATAIAIQAHALgkAGQgmAFgjAJQgVAEgQAAQgNAAgJgDg");
	this.shape_3.setTransform(9.2,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgCAqQglAAgagKQgagJAAgOQAAgLAagKQAagJAdgOQAbgOAhATQAgATAIALQAJAJghARQghAQgjAAIAAAAg");
	this.shape_4.setTransform(9.3,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhFAiQgWgHAAgOQAAgNAagIQAagJAdgOQAbgOAhATQAhATAIAJQAHAKgkAIIhHAOQgTAEgOAAQgQAAgLgEg");
	this.shape_5.setTransform(9.2,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhJAiQgSgFAAgNQAAgOAagHQAagKAdgOQAbgOAhAUQAhATAHAHQAIAKgnAAQgogBgkAOQgcAKgRAAQgGAAgFgCg");
	this.shape_6.setTransform(9.2,1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhNAiQgNgDAAgNQAAgOAagHQAagKAdgOQAbgOAhAUQAgATAIAHQAHAJgrgJQgrgHgkASQgjASgPAAIgDAAg");
	this.shape_7.setTransform(9.2,1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhaATQAAgOAagHQAagKAdgOQAbgOAhAUQAgATAHAGQAHAIgtgPQgvgRglAZQgnAbgKAAQgJgBAAgNg");
	this.shape_8.setTransform(9.2,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,18.4,6.5);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(227,24.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,454.1,48.2);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AsvMsIAA5KIgBgNIZhAAIAAZXg");
	this.shape.setTransform(81.7,81.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,163.4,162.5);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.fffon();
	this.instance.setTransform(0,0,0.787,0.787);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,629.3,354);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.slot();
	this.instance.setTransform(0,-3977.7);

	this.instance_1 = new lib.slot();
	this.instance_1.setTransform(0,-2652);

	this.instance_2 = new lib.slot();
	this.instance_2.setTransform(0,-1326);

	this.instance_3 = new lib.slot();

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-3977.7,164,5303.7);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(84.4,393,0.461,1.317,0,-18.2,161.8,7.6,196.8);

	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(480.4,257,0.461,1.317,0,-18.2,161.8,7.6,196.8);

	this.instance_2 = new lib.Символ27();
	this.instance_2.setTransform(389.2,247.4,0.461,1.317,0,-18.2,161.8,7.6,196.8);

	this.instance_3 = new lib.Символ27();
	this.instance_3.setTransform(307.6,266.6,0.461,1.317,0,-18.2,161.8,7.6,196.8);

	this.instance_4 = new lib.Символ27();
	this.instance_4.setTransform(216.5,263.4,0.461,1.317,0,-18.2,161.8,7.6,196.8);

	this.instance_5 = new lib.Символ27();
	this.instance_5.setTransform(138.9,290.6,0.461,1.317,0,-18.2,161.8,7.6,196.8);

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,564.8,640.4);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(85.6,84.4,1,1,0,0,0,81.7,81.2);
	this.instance.compositeOperation = "lighter";

	// Слой 2
	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(84.9,82.5,1,1,0,0,0,79.4,77.8);
	this.instance_1.alpha = 0.43;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.9,3.2,163.4,162.5);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// Символ 23
	this.instance = new lib.Символ23();
	this.instance.setTransform(84,83.2,1.075,1.075,0,0,0,84,83.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},9).wait(10).to({alpha:0.512},5).to({alpha:1},5).wait(1).to({alpha:0.512},5).to({alpha:1},5).wait(1).to({alpha:0.512},5).to({alpha:1},5).to({alpha:0.512},5).to({alpha:1},5).to({alpha:0},4).to({_off:true},14).wait(1));

	// Символ 23
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(249,83.2,1.075,1.075,0,0,0,84,83.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1},9).wait(11).to({alpha:0.512},5).to({alpha:1},5).wait(1).to({alpha:0.512},5).to({alpha:1},5).wait(1).to({alpha:0.512},5).to({alpha:1},5).to({alpha:0.512},5).to({alpha:1},5).to({alpha:0},4).to({_off:true},11).wait(1));

	// Символ 23
	this.instance_2 = new lib.Символ23();
	this.instance_2.setTransform(411.7,83.2,1.075,1.075,0,0,0,84,83.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1},9).wait(11).to({alpha:0.512},5).to({alpha:1},5).wait(1).to({alpha:0.512},5).to({alpha:1},5).wait(1).to({alpha:0.512},5).to({alpha:1},5).to({alpha:0.512},5).to({alpha:1},5).to({alpha:0},4).to({_off:true},9).wait(1));

	// Символ 23
	this.instance_3 = new lib.Символ23();
	this.instance_3.setTransform(575.9,83.2,1.075,1.075,0,0,0,84,83.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({scaleX:1,scaleY:1},9).wait(11).to({alpha:0.512},5).to({alpha:1},5).wait(1).to({alpha:0.512},5).to({alpha:1},5).wait(1).to({alpha:0.512},5).to({alpha:1},5).to({alpha:0.512},5).to({alpha:1},5).to({alpha:0},3).to({_off:true},8).wait(1));

	// Символ 23
	this.instance_4 = new lib.Символ23();
	this.instance_4.setTransform(738.6,83.2,1.074,1.074,0,0,0,84,83.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({scaleX:1,scaleY:1},9).wait(12).to({alpha:0.512},5).to({alpha:1},5).wait(1).to({alpha:0.512},5).to({alpha:1},5).wait(1).to({alpha:0.512},5).to({alpha:1},5).to({alpha:0.512},5).to({alpha:1},5).to({alpha:0},3).to({_off:true},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,-2.8,175.7,174.7);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ17();
	this.instance.setTransform(153.9,107.4,0.652,0.84,0,-20.7,159.3,9,3.2);

	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(124.6,111.9,1,1,0,0,0,8.9,3.2);

	// Слой 1
	this.instance_2 = new lib.dama();

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,310,349);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.setTransform(300.3,71.1,1,1,0,0,0,227,24.1);

	this.instance_1 = new lib.Символ29();
	this.instance_1.setTransform(293,86.3,1,1,0,0,0,293,86.3);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7.5,-1.7,579.3,163.3);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.setTransform(58,57.2,1,1,0,0,0,58,57.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:57.9,rotation:4.5,x:62.2,y:62.2},19,cjs.Ease.get(-1)).to({regX:58,regY:57.1,rotation:9.5,x:66.7,y:67.5},20,cjs.Ease.get(1)).to({rotation:4.8,x:62.4,y:62.4},20,cjs.Ease.get(-1)).to({regY:57.2,rotation:0,x:58,y:57.2},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116,115);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(169.5,167.6,0.812,0.812,21.7,0,0,155,174.3);

	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(212.9,271.3,0.812,0.812,21.7,0,0,58,57.4);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-10.5,338.9,356.6);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(293,86.3,1,1,0,0,0,293,86.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7.5,-1.7,579.3,163.3);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(293,86.3,1,1,0,0,0,293,86.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewY:-1},3).to({regY:86.2,rotation:2.7,skewY:0,y:86.2},2).to({regY:86.3,rotation:0,skewY:-1,y:86.3},2).to({regY:86.2,rotation:2.7,skewY:0,y:86.2},2).to({regY:86.3,rotation:0,skewY:-1,y:86.3},2).to({regY:86.2,rotation:2.7,skewY:0,y:86.2},2).to({regY:86.3,rotation:0,skewY:-1,y:86.3},2).to({skewY:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.5,-1.7,579.3,163.3);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(293,86.3,1,1,0,0,0,293,86.3);

	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(300.3,71.1,1,1,0,0,0,227,24.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#66CC00","#66FF00"],[0.02,1],-0.1,139,-0.1,-138.9).s().p("Egt5AMKIAA4TMBbzAAAIAAYTg");
	this.shape.setTransform(301.1,83.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.5,-1.7,579.3,163.3);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(293,86.3,1,1,0,0,0,293,86.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7.2,-1.7,587.7,163.3);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(290.4,92.3,1,1,0,0,0,293,86.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.9,4.3,579.3,163.3);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ8();
	this.instance.setTransform(407.1,4084,1,1,0,0,0,293,86.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(150).to({_off:false},0).to({x:407.4,y:3876.4},10,cjs.Ease.get(1)).wait(46).to({y:4066.8},9,cjs.Ease.get(-1)).wait(45));

	// Слой 1
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(409.5,3628.6,1,1,0,0,0,411.4,83.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(126).to({_off:false},0).to({_off:true},81).wait(53));

	// Символ 1
	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(738,4474.7,1,1,0,0,0,82,663);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({y:4462.9},4,cjs.Ease.get(-1)).to({y:5295.5},19).to({y:5279.7},5,cjs.Ease.get(1)).wait(20).to({y:5249.4},5,cjs.Ease.get(-1)).to({y:6067.5},19).to({y:6037.2},5,cjs.Ease.get(1)).wait(10).to({y:4711.1},0).to({y:4649.5},5,cjs.Ease.get(-1)).to({y:5442.6},19).to({y:5368.7},5,cjs.Ease.get(1)).wait(90).to({y:5307.1},5,cjs.Ease.get(-1)).to({y:7144.7},29).to({y:7129},5,cjs.Ease.get(1)).wait(1).to({y:4477.8},0).wait(6));

	// Символ 1
	this.instance_3 = new lib.Символ1();
	this.instance_3.setTransform(574,4142.3,1,1,0,0,0,82,663);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({y:4130.4},4,cjs.Ease.get(-1)).to({y:4963},19).to({y:4947.2},5,cjs.Ease.get(1)).wait(20).to({y:4916.9},5,cjs.Ease.get(-1)).to({y:5735},19).to({y:5704.7},5,cjs.Ease.get(1)).wait(10).to({y:4378.7},0).to({y:4317.1},5,cjs.Ease.get(-1)).to({y:5442.8},19).to({y:5368.9},5,cjs.Ease.get(1)).wait(90).to({y:5307.3},5,cjs.Ease.get(-1)).to({y:6812.8},29).to({y:6797.1},5,cjs.Ease.get(1)).wait(1).to({y:4145.4},0).wait(8));

	// Символ 1
	this.instance_4 = new lib.Символ1();
	this.instance_4.setTransform(410,3977.1,1,1,0,0,0,82,663);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({y:3965.2},4,cjs.Ease.get(-1)).to({y:4797.8},19).to({y:4782},5,cjs.Ease.get(1)).wait(20).to({y:4751.7},5,cjs.Ease.get(-1)).to({y:5569.8},19).to({y:5539.5},5,cjs.Ease.get(1)).wait(10).to({y:4213.5},0).to({y:4151.9},5,cjs.Ease.get(-1)).to({y:5442.4},19).to({y:5368.5},5,cjs.Ease.get(1)).wait(90).to({y:5306.9},5,cjs.Ease.get(-1)).to({y:6646.9},29).to({y:6631.3},5,cjs.Ease.get(1)).wait(1).to({y:3980.2},0).wait(10));

	// Символ 1
	this.instance_5 = new lib.Символ1();
	this.instance_5.setTransform(246,3643.6,1,1,0,0,0,82,663);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({y:3631.7},4,cjs.Ease.get(-1)).to({y:4464.3},19).to({y:4448.5},5,cjs.Ease.get(1)).wait(20).to({y:4418.2},5,cjs.Ease.get(-1)).to({y:5236.3},19).to({y:5206},5,cjs.Ease.get(1)).wait(10).to({y:3880},0).to({y:3818.4},5,cjs.Ease.get(-1)).to({y:5442.5},19).to({y:5368.6},5,cjs.Ease.get(1)).wait(90).to({y:5307},5,cjs.Ease.get(-1)).to({y:7741.4},29).to({y:7619.2},5,cjs.Ease.get(1)).wait(1).to({y:3646.8},0).wait(12));

	// Символ 1
	this.instance_6 = new lib.Символ1();
	this.instance_6.setTransform(82,3315,1,1,0,0,0,82,663);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:3303.2},4,cjs.Ease.get(-1)).to({y:4135.8},19).to({y:4120},5,cjs.Ease.get(1)).wait(20).to({y:4089.7},5,cjs.Ease.get(-1)).to({y:4907.8},19).to({y:4877.5},5,cjs.Ease.get(1)).wait(10).to({y:3551.4},0).to({y:3489.8},5,cjs.Ease.get(-1)).to({y:5444.8},19).to({y:5369.3},5,cjs.Ease.get(1)).wait(90).to({y:5307.7},5,cjs.Ease.get(-1)).to({y:7409.3},29).to({y:7287.1},5,cjs.Ease.get(1)).wait(1).to({y:3315},0).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1325.7,825,6467.7);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(344.6,4383.9,1,1,0,0,0,293,86.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(150).to({x:407.1,y:4084},0).to({x:407.4,y:3876.4},10,cjs.Ease.get(1)).wait(46).to({y:4066.8},9,cjs.Ease.get(-1)).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(56.4,4301.9,579.3,163.3);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ20();
	this.instance.setTransform(-9.9,108.2,0.618,0.618,-18.2,0,0,58.7,64.8);

	// Слой 2
	this.instance_1 = new lib.Символ28();
	this.instance_1.setTransform(915,2207.1,1,1,0,0,0,282.4,320.2);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	// Слой 1
	this.instance_2 = new lib.Символ2();
	this.instance_2.setTransform(470.8,1415.7,0.511,0.511,-18.5,0,0,82,1989);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106.4,-205.6,1451.3,3061.3);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EghSAeRQgYgFgHgKQgEgFAAgMQAAgWBfgvQBfgwAAgEQAAgMgohDIgohCQAAgFBBg1IBBg2QAAg8hBgUIgsgPQgVgJAAgVQAAg3ARgRQAMgKAgACQAoAEASgGQAkgKAagrQAzhSAwg0QglABgUAEIgSAEIiTADQgIAEgaASQgXAPgGAAQgPAAgEgLIgBgMQAAgLAgglQAegnALgEQgDgKgVgSQgLgKgEgIQhOgDgQgbQgFgKACgOQADgOAAgFQAAgPAjjuIAAjlQALgggBg/QgBhAALggIAAjLQAfgPAlgaQAuggAOgVQANgWAOgQQgZgFgbgRIgIgFIgFAAQgNgEgEgGQgDgDAAgIQAAgWAbAFQAYgOAWgJIACgBQgSgPgqAAIhGAlQgMAAgFgKQgDgFAAgGQAAgNAKgLIAAgSQAAgVAIhfQAHhfAAghIgKkmIADgxQAEgqADgaQgSg0A5AiQAMAHANAKIABgMQADgfAXAHQALAFAaATIAnABQADgGAGgCQAUgHANgMQgOgKAAgNQAAgJAIgEQATgKA/ABQAAgCA3gBQAFgFAKAAIBBAAQALAGAHAJQAEAFADAAQA8AAAqgoQAjguANgIIiHgBQgSgDgDgOIABgSQg4AAgSAPIgMANQgIAIgLAEIhBAAQgUgFAAgQQAAgJAHgEQAIgEAOgCIAggZQAwgnALgjQgFAAgJgHQgIgGgOgBIi4gCQgUgJgbgpQgXglAAgJQAAgPBKgoQBKgoACgXIAAgDIgZAAQgKAChKACQgHAIgDAGQgIAEg6AAQgUAAgEgLIgBgMQAAgIAHgLQAHgMABgFQhGgkAGg+QAShFgJggQgcABgIgLQgEgEAAgJQgcABgihrIgchsQAAgZACgHQADgLAOgHQATgLB6gYIIIAAIBeAEICSAAQAxADB+ALQBmAKDAAGIKBABIC6AEIFWAAQMKAYFyAPQHxAVCPAWQBLAMAJBgQAEAxgKA2IAABmQgDBVgPAGQgJAOgmgCQgTAzg8gNQgTgEgVgLIgSgJIgaABQAIAEAeAlQAeAlAAAEQAAAKgPARQATAJAFAOQABAEAAAQQAAAYgHAKQgEAGgiAfIjIACIgDAGQgCAEAAAHQAAAUA0AZQA1AaAAAZQAAAwiCgaIjMAAQAZANAkAZQArAdAiAUIDYABQAUAFAAAQQgCAZgSgBIgKACQBGAHAAAUQAAAVgyAXQgyAYAAAjQAAAGAFAJIABAEIAngIQAHgIAwgZQAWgMANgKIAAgEQAAguAUgBQAGABAEAEIABgCIAJgNQAGgJAGgHQAXgXAAAvIgCAOQAEAIADAMIAIgTQAGgKAQAAQAMAAAFAIIADgFQATgiABBCQAAAVAEAlIAGA+QAEBPgECfIAACQQgCBcgJAdQALAIAAALQAAAXgUAAIgFgBIgKABQgGAAgXgJIgXgKQgQAAgLACIgVAVIgPANIAAACQAtgDAVARQAOAMAAAKQAAANgPAFQgaAJgYAJQAEASAxA0QAaAcALATIAFAAQAUAAAFAZIAAGOIAADVIgBAnQAHANAAAbQgBAfgFA/IAABOQgBAVgCAOQADAHAAALQAAAJgdAXQgdAXAAAGQAAAHAHADQAGADAAAGQAAALgFAEQgFADgTABQhSAJhNARQgQAEgdARQgXAOgQANQASAKAUAZQAYAcAOAMQA8AwCXAOQASAOAHAcQAFARAAAQQAAAZgcAYQgsAnhhgCIgBAGQAKAbAuAhIAsAdQAAARgeAFQhMAPgqAMIgBgBQgBAAAAAIQAAAOA0ALQA1AMAAAVQAAAhgaARQgPAKgqALQgpALgPALQgaARAAAhQAAAZACAHQAHAVAbAHIB8ACQAUAFAAAPQAAAOgJACQgLAEgpABQgDALgQADg");
	mask.setTransform(1181.4,2613.4);

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(1184.3,2053.8,0.986,0.986,18.2,0,0,722.9,1634.2);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(966,2419.6,437.1,387.6);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.vulk();
	this.instance.setTransform(618.4,37.7,0.432,0.432);

	this.instance_1 = new lib.Символ32();
	this.instance_1.setTransform(169.4,207.5,1,1,0,0,0,169.4,178.2);

	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(407.1,-665.7,1,1,0,0,0,1180.7,1753.8);

	this.instance_3 = new lib.Символ4();
	this.instance_3.setTransform(412.5,206.3,1,1,0,0,0,314.6,177);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-2320.3,727.2,3262.4);


// stage content:
(lib.ladysharm600300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		this.bt.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.bt = new lib.Символ35();
	this.bt.setTransform(307.2,-731,1,1,0,0,0,407.1,-690.8);

	this.timeline.addTween(cjs.Tween.get(this.bt).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(200,-2210.6,727.2,3263.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;