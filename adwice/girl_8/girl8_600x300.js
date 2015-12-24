(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/fon.jpg", id:"fon"},
		{src:"images/foot.png", id:"foot"},
		{src:"images/g4f4.png", id:"g4f4"},
		{src:"images/h22.png", id:"h22"},
		{src:"images/landish15.png", id:"landish15"},
		{src:"images/pion.png", id:"pion"},
		{src:"images/stocks1.png", id:"stocks1"}
	]
};



// symbols:



(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.foot = function() {
	this.initialize(img.foot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,66);


(lib.g4f4 = function() {
	this.initialize(img.g4f4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);


(lib.h22 = function() {
	this.initialize(img.h22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,86);


(lib.landish15 = function() {
	this.initialize(img.landish15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,150);


(lib.pion = function() {
	this.initialize(img.pion);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,150);


(lib.stocks1 = function() {
	this.initialize(img.stocks1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,150);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pion();
	this.instance.setTransform(0,0,0.577,0.577);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.6,86.6);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.foot();
	this.instance.setTransform(-0.1,-1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,-1,52,66);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.h22();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,26,86);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.g4f4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARMCZIAEg2Ii0AAIAjj3IA3AAIgdDPIBTAAIAdjPIA3AAIgdDPIAfAAIgMBegAqXCZIADg2IihAAIgMA2IgpAAIANheIAZAAQAOgaATgyQAKgaANg3QACgMAGgJQAFgJAIgHQAHgGALgDQALgEAMAAIBqAAIgeDPIAhAAIgOBegArPhnQgHAGgCAMQgMAzgHAYQgSAvgMAWIBQAAIAZinIgdAAQgMAAgGAFgA6yCZIAEg2IiiAAIgMA2IgpAAIANheIAZAAQAOgaAUgyQAIgaANg3QAEgMAFgJQAFgJAIgHQAIgGAKgDQALgEAMAAIBqAAIgdDPIAfAAIgMBegA7qhnQgHAGgCAMQgMAzgHAYQgSAvgLAWIBPAAIAZinIgdAAQgMAAgGAFgAdbBhQgLgDgHgGQgIgFgFgIQgGgHgEgKQgDgKgCgNQgCgRAEgsQADgYALgkQAEgMAGgKQAGgKAGgHQAIgHAIgGQAJgFAKgDQAOgEAjgCIAaABQAMACAKADQAKAEAHAFQAIAFAFAIQAHAIADAKQADAKACAMQACANAAAPIgDAjQgIArgHAQQgEAMgGAKQgGAKgGAHQgIAHgIAFQgJAFgKAEQgeAFgSAAQgjgBgNgFgAeNhoQgKAEgGAKQgIAJgEARQgEAQgEAbQgEAXAAAPQAAAQAEAJQADAJAJAEQAJAEAOAAQAOAAAKgEQAKgEAHgKQAGgJAFgRQAFgPAEgaQAEgZAAgQQAAgQgFgJQgDgJgJgEQgIgDgPAAQgOAAgKAEgEggrABhQgJgDgIgGQgIgFgFgIQgGgHgEgKQgDgKgCgNQgCgRAEgsQADgYAKgkQAFgMAFgKQAHgKAHgHQAGgHAJgGQAJgFAKgDQAOgEAjgCIAaABQAMACAJADQALAEAHAFQAIAFAGAIQAGAIADAKQADAKACAMQACANgBAPIgDAjQgIArgGAQQgEAMgGAKQgGAKgGAHQgIAHgJAFQgIAFgKAEQgeAFgSAAQgjgBgOgFgA/4hoQgKAEgHAKQgGAJgFARQgFAQgDAbQgEAXAAAPQAAAQAEAJQAEAJAIAEQAJAEAOAAQAOAAAKgEQAKgEAHgKQAGgJAGgRQAEgPAEgaQADgZAAgQQAAgQgDgJQgFgJgIgEQgIgDgOAAQgPAAgKAEgAhyBlIgcgEIAIgnIAbABQAKgBAHgCQAGgCAFgFQAFgEAFgKIADgHIgLAAQgNAAgHgHQgGgGgCgMIgeiXIA2AAIAVCDQAAAFAGAAIAJAAIA7iIIA7AAIhVC3QgSAlgLALQgJAJgJAEQgKAFgNABIgJABIgXgCgASdBjIAjj3QAcgCA/AAQAYAAAPADQASADAJAHQAKAIADANQAEANgDATQgCAOgEAJQgDAKgGAHQgGAGgIAEQgJAEgMABIgBACQAPABAJAFQAJAGAFAIQAFAHABAMQABAMgCAPQgDATgGAMQgHAMgKAHQgLAHgQADQgPADgWAAQgyAAg6gDgATZA8IA6gCQAIgBAGgEQAEgEAEgHQACgHABgLQACgLgBgGQgBgHgDgCQgDgEgIgCIg7gBgATogvIA3gBQAHgCAFgDQAEgEAEgHQACgGABgKQADgSgGgFQgHgGgTAAIgoAAgAl4BjIAjj3QAcgCA/AAQAYAAAPADQARADAJAHQAKAIAEANQADANgCATQgCAOgEAJQgEAKgFAHQgGAGgJAEQgJAEgMABIAAACQAOABAKAFQAIAGAFAIQAGAHABAMQABAMgCAPQgDATgGAMQgHAMgKAHQgLAHgQADQgPADgWAAQgyAAg6gDgAk9A8IA7gCQAIgBAFgEQAFgEADgHQACgHACgLQABgLAAgGQgBgHgEgCQgDgEgHgCIg7gBgAkugvIA3gBQAIgCAEgDQAFgEADgHQACgGACgKQADgSgHgFQgGgGgTAAIgpAAgAWlBgQgLgFgIgIQgGgHgDgLQgCgLACgOIATiMQACgLAEgJQAFgJAHgGQAIgHAKgDQALgEANAAIA8ABQAgABAWACIgGApIhdAAQgLAAgFAEQgEAEgCALIgFAlIBiAAIgFAnIhiAAIgHAuQgBAKAEAEQADAFAKAAIBcAAIgBAoQgVADggAAIg3ABQgOAAgMgEgAKiBgQgLgFgHgIQgHgHgCgLQgDgLACgOIAUiMQABgLAEgJQAFgJAIgGQAHgHALgDQAKgEANAAIA7ABQAhABAWACIgHApIhdAAQgKAAgFAEQgEAEgBALIgGAlIBiAAIgFAnIhhAAIgHAuQgCAKAEAEQADAFALAAIBcAAIgBAoQgWADgfAAIg3ABQgPAAgMgEgAojBgQgLgFgIgIQgHgHgCgLQgCgLACgOIATiMQABgLAFgJQAFgJAHgGQAIgHAKgDQAKgEANAAIA8ABQAgABAWACIgGApIhdAAQgLAAgEAEQgEAEgCALIgGAlIBjAAIgGAnIhhAAIgHAuQgCAKAEAEQAEAFAKAAIBcAAIgBAoQgVADggAAIg3ABQgPAAgLgEgEAkWABjQgLAAgEgFQgEgFABgKIADgRQABgJAEgFQAGgEAJAAIALAAQAKAAAFAFQAFAFgCAKIgCARQgCAJgEAEQgFAFgKAAgEAinABjIgJg1QgEgWgEgMQgFgMgJgDQgIgGgPAAIgSAAQAAAKgBANIgNBVIg3AAIAjj3IA3AAIgKBIQgDARgDALIAQAAQAOAAAKgGQAJgFAJgNQAMgQAZg8IA4AAQgdBFgNATQgKAOgMAHQgNAIgRACIgBACQASACAKAIQAKAHAHANQAGAMAFAZIAKA7gAaGBjIAdjKIhKAAIAGgtIDLAAIgGAtIhKAAIgcDKgAIoBjIgJg1QgEgWgEgMQgFgMgIgDQgJgGgOAAIgTAAQABAKgCANIgMBVIg3AAIAjj3IA3AAIgKBIQgDARgDALIAQAAQANAAAKgGQAKgFAJgNQALgQAZg8IA5AAQgdBFgNATQgLAOgMAHQgMAIgSACIgBACQASACAKAIQALAHAGANQAGAMAFAZIAKA7gABABjIAjj3IA2AAIgdDPIBDAAIAejPIA1AAIgdDPIBFAAIAdjPIA2AAIgkD3gAwFBjIAViNQACgUAHgTIgDAAQgNAYgFAJIhoCTIg5AAIAjj3IA1AAIgTCNQgDAQgHAXIACAAQAIgRALgPIBoiUIA3AAIgiD3gA15BjIAkj3QAdgCA+gBQAZAAARAEQARAFAKAJQAJAKADAQQADAQgDAXQgDAZgHAPQgGAQgLAIQgLAHgRADQgPADgXAAQgZAAgVgDIgOBdgA0lhsIgKBNIAlAAQAMAAAGgBQAIgCAFgEQAEgFAEgIQACgIACgNQACgLgCgHQAAgHgDgEQgEgEgGgCQgGgCgJAAgA3IBjIgIhBIhVAAIgbBBIg6AAIBpjpQADgHAFgDQAFgEAGAAIA1AAQAHAAAEAFQAGAEAAAHIAnDngA3VgIIgNhjIgKAAIgnBjIA+AAgEgjJABjIAejPIhXAAIgdDPIg4AAIAkj3IDEAAIgiD3gEAkRAAUIAEhIIAOhhIA1AAIgOBhIgQBIg");
	this.shape.setTransform(239.2,15.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,478.4,30.8);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.fon();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("AgCCCIh/kCIEDAAIh/ECg");
	this.shape.setTransform(22,10.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9,-2.3,26,26);


(lib.Path_6 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#939393","#939393","#BBBBBB","#D6D6D6","#939598"],[0,0.129,0.29,0.639,0.804,1],-117.5,0,117.5,0).s().p("AtZSXQiEAAhchcQhchcAAiDIAA6yQAAiEBcheQBdhdCDAAIaxAAQCEAABdBdQBeBfAACDIAAayQAACDheBcQhdBciEAAgAwBv/QhEBHAABiIAAayQAABjBEBDQBFBEBjABIaxAAQBkgBBFhEQBGhDAAhjIAA6yQAAhihGhHQhGhGhjAAI6xAAQhjAAhFBGg");
	this.shape.setTransform(150.5,150.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F074AC","#EB008B","#CD118C"],[0,0.498,1],-70.5,122.1,70.5,-122).s().p("AtYRHQhjAAhGhFQhFhGAAhjIAA6xQAAhjBFhGQBGhFBjAAIaxAAQBjAABGBFQBFBGAABjIAAaxQAABjhFBGQhGBFhjAAg");
	this.shape_1.setTransform(150.4,150.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(33,33,235,235);


(lib.Path_5 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtTD/Qg6AAgpgiQgoghAAgwIAAkXQAAgwAoghQApgiA6AAIanAAQA6AAApAiQAoAhAAAwIAAEXQAAAwgoAhQgpAig6AAg");
	this.shape.setTransform(135.6,61.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(36.4,36.4,198.4,51.1);


(lib.Path_4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvDlmQgBgeATgfQAmg+BnABIZtABQAcACAXANQBJAoAAB2IAAD8QhVgCiJAGQkQANkBAmQs1CAlkFhg");
	this.shape.setTransform(96.5,48.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,193,96.4);


(lib.Path_3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqwEQQN/gaFCjrQB5hWAXhsQAEgPABgPIgFg7QAJAZgEAiQAFA1ACA5QAKC0gQBDQgPBDhGAmQgWAMgZAHIgUAFg");
	this.shape.setTransform(106.4,27.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(37.4,0,137.9,54.7);


(lib.Path_2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxQADQGCggHVgRQOpgiGiBTQj7AemSAPQjmAIjhAAQozAAobg1g");
	this.shape.setTransform(147.1,42.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(36.5,36.6,221.2,11.4);


(lib.Path_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguD6QgiupBTmhQAeD6APGSQAeMhhLL0QggmCgRnVg");
	this.shape.setTransform(41.8,147.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(36.1,36.7,11.4,221.2);


(lib.Path = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguD6QgiupBTmiQAeD7APGRQAeMihLL1QggmDgRnVg");
	this.shape.setTransform(42.7,147.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(37,36.9,11.4,221.2);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(170.7,10.9,0.714,0.714,0,0,0,239.2,15.3);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.73},9,cjs.Ease.get(-1)).to({alpha:0.43},10,cjs.Ease.get(1)).to({alpha:0.715},10,cjs.Ease.get(-1)).to({alpha:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-22,393,73);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Path();
	this.instance.setTransform(98.1,50.8,0.432,0.432,0,0,0,42.9,147.6);
	this.instance.alpha = 0.699;

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(3.9,55,0.432,0.432,0,0,0,42.1,147.3);
	this.instance_1.alpha = 0.699;

	this.instance_2 = new lib.Path_2();
	this.instance_2.setTransform(49.4,97.3,0.432,0.432,0,0,0,147.3,42.1);
	this.instance_2.alpha = 0.699;

	this.instance_3 = new lib.Path_3();
	this.instance_3.setTransform(62.6,80.2,0.432,0.432,0,0,0,106.2,27.4);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.Path_4();
	this.instance_4.setTransform(50.1,29.5,0.432,0.432,0,0,0,96.6,48.2);
	this.instance_4.alpha = 0.199;

	this.instance_5 = new lib.Path_5();
	this.instance_5.setTransform(50.1,80.3,0.432,0.432,0,0,0,135.7,61.8);
	this.instance_5.alpha = 0.199;

	this.instance_6 = new lib.Path_6();
	this.instance_6.setTransform(50.9,50.8,0.432,0.432,0,0,0,150.8,150.7);
	this.instance_6.shadow = new cjs.Shadow("rgba(175,0,121,0.8)",0,0,33);

	this.addChild(this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17,-17,139,139);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 10
	this.instance = new lib.Символ10();
	this.instance.setTransform(96,43,1,1,0,0,0,13,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.01,skewX:4.5,x:92.5},19,cjs.Ease.get(-1)).to({scaleY:1.01,skewX:9.7,x:88.7},20,cjs.Ease.get(1)).to({scaleY:1.01,skewX:4.8,x:92.4},20,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:96},20,cjs.Ease.get(1)).wait(1));

	// Символ 7
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(50,74,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:43.9},19,cjs.Ease.get(-1)).to({x:37},20,cjs.Ease.get(1)).to({x:43.5},20,cjs.Ease.get(-1)).to({x:50},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109,86);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(26,33,1,1,0,0,0,26,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.6,x:24.1},14,cjs.Ease.get(-1)).to({rotation:7.7,x:22},15,cjs.Ease.get(1)).to({regX:25.9,rotation:3.8,x:24,y:32.9},15,cjs.Ease.get(-1)).to({regX:26,rotation:0,x:26,y:33},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-1,52,66);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(300,150,1,1,0,0,0,300,150);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(414.5,112,1,1,0,0,0,54.5,43);

	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(317,255,1,1,0,0,0,26,33);

	// Слой 2
	this.instance_2 = new lib.Символ8();
	this.instance_2.setTransform(300,150,1,1,0,0,0,300,150);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.Символ29копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(13,33,1,1,0,0,0,13,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:22.4},8,cjs.Ease.get(-1)).to({y:13},7,cjs.Ease.get(1)).to({y:23},7,cjs.Ease.get(-1)).to({y:32.8},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,17.7,26,26);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(13,13,1,1,0,0,0,13,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:23},7,cjs.Ease.get(-1)).to({y:33},7,cjs.Ease.get(1)).to({y:22.4},8,cjs.Ease.get(-1)).to({y:13},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,-2.3,26,26);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(50,50.7,0.985,0.985,0,0,0,50.7,51.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17,-17,137,137);


(lib.э = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(50,53.2,1,1,0,0,0,32.3,43.2);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,22);

	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(50,50.6,1,1,0,0,0,50,50.6);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 0, -131))];
	this.instance_1.cache(-19,-19,141,141);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17,-17,141,141);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.э();
	this.instance.setTransform(50,50.6,1,1,0,0,0,50,50.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17,-17,141,141);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.landish15();
	this.instance.setTransform(0,7,0.577,0.577);

	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(50.5,50.6,1,1,0,0,0,50,50.6);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.5,-17,137,137);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.stocks1();
	this.instance.setTransform(17,10,0.577,0.577);

	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(50,50.6,1,1,0,0,0,50,50.6);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 0, 135))];
	this.instance_1.cache(-19,-19,141,141);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17,-17,141,141);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(147.6,114.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(41.6,42.1,0.831,0.831,0,0,0,50,50.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmeGkIAAtHIM9AAIAANHg");
	this.shape_1.setTransform(41.5,42.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.831,scaleY:0.831}}]}).to({state:[{t:this.instance,p:{scaleX:0.97,scaleY:0.97}}]},1).to({state:[{t:this.shape_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-17,125,125);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJiB7IACgkIhqAAIgIAkIgbAAIAJg+IAQAAQAJgRANgjQAGgPAIgjQADgIADgGQADgGAGgEQAEgFAIgBQAGgDAJAAIBFAAIgTCHIAVAAIgIA+gAI8gsQgEADgBAIIgNAwQgLAfgIAPIA1AAIAQhtIgTAAQgIAAgFAEgAKXBXIAXihIAkAAIgJA8IAXAAQAQAAALAEQALACAHAGQAGAFABAKQADAKgDAPQgCAPgDAKQgFAKgGAGQgHAFgKADQgJACgQAAQgfAAgkgCgAK/A9IAigBQAFgBADgDQADgCACgFIACgNIACgMQgBgGgCgDQgBgCgEgCQgFgBgIgBIgXAAgAmdBXIAWihIAkAAIgIA8IAXAAQAQAAALAEQALACAGAGQAGAFACAKQACAKgCAPQgCAPgEAKQgEAKgHAGQgGAFgKADQgKACgPAAQggAAgjgCgAl2A9IAjgBQAFgBADgDQACgCACgFIADgNIABgMQAAgGgCgDQgBgCgFgCQgEgBgIgBIgXAAgAADBYIgBgdIAOgEQAHgFAFgJQAFgIAIgXIANg0IAEgOQAEgGAFgDQAFgEAHgDQAHgCAIAAIBGAAIgXChIgkAAIATiHIgTAAQgIAAgEAEQgEACgCAJQgIAjgFAPQgHAagGALQgFAKgHAHQgGAHgHAEQgIAEgIACIgIAAIgJAAgAt6BYQgJgBgIgCQgHgDgGgFQgEgFgBgIQgCgGACgKIAMhbQABgHADgGQADgGAFgDQAFgGAHgBQAHgCAJAAIAnAAIAjACIgEAbIg9AAQgHgBgDADQgDADgBAHIgDAZIBAAAIgEAXIhAAAIgEAfQgBAIACACQADADAGAAIA9AAIgBAbIgiACgANrBXIAWihIAjAAIgTCHIAtAAIATiHIAjAAIgTCHIAtAAIATiHIAjAAIgWChgAMlBXIAXihIAkAAIgXChgAGjBXIALhIIg5AAIgKBIIgkAAIAXihIAkAAIgIA/IA4AAIAIg/IAlAAIgYChgAETBXIgFgqIg4AAIgSAqIgmAAIBFiYQABgEAEgCQADgDAEAAIAiAAQAGAAACADQAEADAAAFIAZCWgAEKAQIgIg/IgGAAIgbA/IApAAgAhnBXIAOhcIAFgaIgBAAIgLAXIhFBfIgmAAIAYihIAjAAIgOBbQgBALgFAPIACAAQAFgLAHgLIBFhfIAkAAIgXChgAkQBXIAXihIAkAAIgXChgAnjBXIAKhIIg4AAIgKBIIgkAAIAWihIAkAAIgIA/IA4AAIAJg/IAkAAIgXChgAp5BXIgGgiQgDgQgDgHQgDgIgEgDQgFgEgHAAIgLAAQABAIgBAJIgIA3IgjAAIAIg5IAEgPIgLAAQgHAAgFAEQgFADgHAIIgMAXIgQAiIgmAAIASgoQAIgQAHgIQAGgKAIgEQAJgFAKgCIABgBQgLgBgFgEQgGgEgFgJQgFgMgHgtIAjAAQAHAnADALQADAIAFADQAFAFAGAAIANAAQgBgKACgKIAGguIAiAAIgHAvQgBAJgDAKIAJAAQAHAAAGgFQAGgDAGgIQAHgLARgnIAmAAQgUAtgJAMQgGAKgIAFQgIADgLABIgBABQALABAGAFQAGAFAEAKQAEAIADAQIAIAngAvnBXIAKhIIg4AAIgLBIIgkAAIAXihIAlAAIgJA/IA4AAIAJg/IAkAAIgXChgAh+hZQgIgCgFgFQgEgFgCgGQgCgIADgHIAWAAQgBALADAEQAEAEAJAAQAHAAAEgEQAFgFABgKIAXAAQAAAIgDAHQgDAGgGAFQgGAFgHACQgIADgJAAQgKAAgHgDg");
	this.shape.setTransform(40.8,110.3);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(43.4,42.1,0.831,0.831,0,0,0,52.2,50.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmeGkIAAtHIM9AAIAANHg");
	this.shape_1.setTransform(41.5,42.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.831,scaleY:0.831}}]}).to({state:[{t:this.instance,p:{scaleX:0.893,scaleY:0.893}}]},1).to({state:[{t:this.instance,p:{scaleX:0.831,scaleY:0.831}}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.6,-17,120,121);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-6.3,111.6,0.654,0.654);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(41.6,42.1,0.831,0.831,0,0,0,50,50.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmeGkIAAtHIM9AAIAANHg");
	this.shape_1.setTransform(41.5,42.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.831,scaleY:0.831}}]}).to({state:[{t:this.instance,p:{scaleX:0.97,scaleY:0.97}}]},1).to({state:[{t:this.instance,p:{scaleX:0.97,scaleY:0.97}}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-17,125,125);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.setTransform(315,90.5,0.6,0.6,0,0,0,13,13);

	this.instance_1 = new lib.Символ29копия();
	this.instance_1.setTransform(178.2,82.7,0.6,0.6);

	this.instance_2 = new lib.Символ29();
	this.instance_2.setTransform(60,90.5,0.6,0.6,0,0,0,13,13);

	this.instance_3 = new lib.Символ21();
	this.instance_3.setTransform(192.3,170.1,1,1,0,0,0,43.4,42.1);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.Символ21(), 3);

	this.instance_4 = new lib.Символ20();
	this.instance_4.setTransform(318.5,170.1,1,1,0,0,0,41.5,42.1);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.Символ20(), 3);

	this.instance_5 = new lib.Символ22();
	this.instance_5.setTransform(66,170.1,1,1,0,0,0,41.5,42.1);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.Символ22(), 3);

	this.instance_6 = new lib.Символ18();
	this.instance_6.setTransform(192,51,1,1,0,0,0,170.7,11);

	this.instance_7 = new lib.Символ2();
	this.instance_7.setTransform(300,150,1,1,0,0,0,300,150);

	this.addChild(this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(7));

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(300,150,1,1,0,0,0,300,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:1.07,x:310},6).to({scaleX:1,scaleY:1,x:300},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


// stage content:



(lib.girl8_600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		this.main.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
		var _this = this;
		//Событие MOUSE_OVER
		
		//2) Создаем функцию onmouseover
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		//3) Обрабатываем событие
		
		  function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(1);
		}
		//Событие MOUSE_OUT
		
		//4) Создаем функцию onmouseout
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		//5) Обрабатываем событие
		
		  function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(7);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// FlashAICB
	this.main = new lib.Символ23();
	this.main.setTransform(300,150,1,1,0,0,0,300,150);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,150,600,300);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;