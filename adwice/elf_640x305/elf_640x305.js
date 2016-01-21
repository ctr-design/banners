(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#666666",
	manifest: [
		{src:"images/aрбалет.png", id:"aрбалет"},
		{src:"images/body.png", id:"body"},
		{src:"images/fon.jpg", id:"fon"},
		{src:"images/foot.png", id:"foot"},
		{src:"images/foot2.png", id:"foot2"},
		{src:"images/hand.png", id:"hand"},
		{src:"images/hand2.png", id:"hand2"},
		{src:"images/head.png", id:"head"},
		{src:"images/tits.png", id:"tits"},
		{src:"images/облака_.png", id:"облака"}
	]
};



// symbols:



(lib.aрбалет = function() {
	this.initialize(img.aрбалет);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,85);


(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,113);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,754,300);


(lib.foot = function() {
	this.initialize(img.foot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,80);


(lib.foot2 = function() {
	this.initialize(img.foot2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,51);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,63);


(lib.hand2 = function() {
	this.initialize(img.hand2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,64);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,97);


(lib.tits = function() {
	this.initialize(img.tits);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,38);


(lib.облака = function() {
	this.initialize(img.облака);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,686,215);


(lib.Символ44 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkbEcQh1h2AAimQAAilB1h2QB2h1ClAAQCmAAB2B1QB1B2AAClQAACmh1B2Qh2B1imAAQilAAh2h1g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.1,-40.1,80.3,80.4);


(lib.Символ42 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgyAzQgVgWAAgdQAAgdAVgVQAVgVAdAAQAdAAAWAVQAVAVAAAdQAAAdgVAWQgWAVgdAAQgdAAgVgVg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.2,-7.2,14.5,14.5);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.aрбалет();
	this.instance.setTransform(-103,-50);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-103,-50,250,85);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.fon();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,754,300);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.облака();
	this.instance.setTransform(-343,-107.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-343,-107.5,686,215);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("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");
	this.shape.setTransform(175.4,16.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,350.8,33.2);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(175.4,16.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,350.8,33.2);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hand2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,26,64);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.482,1],-18.6,32.2,18.6,-32.2).s().p("AHBG2QnciqjvhjQjvhiighxQiehzAdh6QAeh5C/hNQC/hOCuBfQCtBfExENQEzELCwDbQBiB7hsAAQhUAAjShLg");
	this.shape.setTransform(80,51.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,102.7);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.head();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,97);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.tits();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57,38);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hand();
	this.instance.setTransform(1,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,18,63);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.body();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,56,113);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.foot2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19,51);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.foot();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,80);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.55,scaleY:0.55},9).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-7.2,14.5,14.5);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:8,y:8},19).to({x:-1.5,y:8.5},20).to({x:0,y:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-50,250,85);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(-326.9,9,0.414,0.414);

	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(-106.8,0,0.414,0.414,0,15,-165);

	this.instance_2 = new lib.Символ20();
	this.instance_2.setTransform(-573,9,0.414,0.414);

	this.instance_3 = new lib.Символ20();
	this.instance_3.setTransform(346.3,9,0.414,0.414);

	this.instance_4 = new lib.Символ20();
	this.instance_4.setTransform(566.3,0,0.414,0.414,0,15,-165);

	this.instance_5 = new lib.Символ20();
	this.instance_5.setTransform(100.2,9,0.414,0.414);

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-715,-79.7,1430,159.5);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(-336.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:335.6},399).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1051.5,-79.7,1429.9,159.5);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(341.2,150,1,1,0,0,0,0,150);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(341.2,0,754,300);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(175.4,16.6,1,1,0,0,0,175.4,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.527},9,cjs.Ease.get(-1)).to({alpha:0},10,cjs.Ease.get(1)).to({alpha:0.5},10,cjs.Ease.get(-1)).to({alpha:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350.8,33.2);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1 - копия
	this.instance = new lib.Символ21();
	this.instance.setTransform(176.5,20.8,1,1,0,0,0,175.4,16.6);

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AOJClIAFggQglgEgOgEQgKgDgJgFQgIgFgGgGQgFgGgEgIQgEgIgBgKQgDgMADgiQADgSAJgZQAFgKAFgHQAHgIAHgGQAIgGAJgEIAUgIQAQgEAmgDIAEgfIA4AAIgFAgQAUABAfAHQAJADAJAFQAHAFAGAGQAHAGADAIQAEAIACAJQACAbgCASQgHAhgFAMQgFAKgGAHQgFAIgIAGIgRAKIgUAHQghAHgVABIgFAfgAOJgYQgMAEgHAHQgHAHgFAKQgEALgCASQgDAQACALQABALAFAHQAGAGAKAEQALADASABIASh5QgTABgMAEgAPIBcQASgCAMgDQAMgEAIgHQAHgHAEgMQAEgLADgSQACgQgBgLQgCgJgFgHQgFgGgLgEQgLgDgRgBgAXECbQgKgDgGgFQgIgFgFgGQgFgHgEgIQgDgJgCgLQgCgPACgnIguAAIgPBtIg3AAIAjj3IA3AAIgPBiIAuAAQAFgSAKgeIAKgSQAFgIAIgGQAGgGAHgFIASgGQARgFAZAAIAZABQAMACAJADQAKAEAIAFQAHAGAGAHQAGAIAEAKQADAKACANQACANAAANIgDAiQgIAtgGAQQgFANgFAJQgGAKgHAHQgHAHgJAFQgIAFgKAEQgeAFgUAAQgggBgLgEgAX0gvQgJAEgIAKQgGAKgFAQQgEAOgEAbQgDAZAAAPQAAAQAEAJQADAJAIAEQAIAEANAAQAPAAAJgEQALgEAGgKQAHgJAGgRQADgQAEgbQAEgZAAgNQAAgQgEgJQgEgJgIgEQgIgEgOAAQgOAAgKAEgAgoCeQgMgCgJgDQgKgEgHgGQgIgFgGgIQgFgIgDgKQgDgKgCgNQgBgQAEgsQADgYAKgiQAEgMAGgKQAGgKAGgHQAIgHAIgFQAJgGAKgDQANgEAigCQAZAAARACQAPACARAFIgHAoQgegBgnAAQgNAAgJADQgJADgHAJQgHAJgFAQQgFAOgEAbQgDAYAAAOQAAAQAEAIQAEAJAIAEQAIAEANAAQAhAAApgEIACApQgSAGgSACQgRACgYAAgA2tCaQgKgDgHgGQgIgFgFgIQgGgHgEgKQgDgKgCgNQgCgRAEguQADgYALgiQAEgMAGgKQAGgKAGgHQAIgHAIgGQAJgFAKgDQAOgEAjgCIAaABQAMACAKADQAKAEAHAFQAIAFAFAIQAHAIADAKQADAKACAMQACANgBAOIgCAiQgIAtgHAQQgEAMgGAKQgGAKgGAHQgIAHgIAFQgJAFgKAEQgeAFgSAAQgjgBgOgFgA16gvQgKAEgGAKQgIAJgEARQgEAOgEAbQgEAZAAAPQAAAQAEAJQADAJAJAEQAJAEAOAAQAOAAAKgEQAKgEAHgKQAGgJAFgRQAFgQAEgbQAEgZAAgOQAAgQgFgJQgDgJgJgEQgIgDgPAAQgOAAgKAEgAEuCcIAjj3QAngCAvAAQAiAAAxACIgLArIhtAAIgIA4IAkAAQAZAAARAEQARAEAKAJQAKAJADAPQACAOgCAWQgEAWgFAOQgHAPgKAIQgLAIgQAEQgOADgXAAQgwAAg4gDgAFrB1IA2gCQAIgBAFgEQAEgEADgIQADgGACgNIABgQQgBgHgDgEQgDgDgHgCIg5gBgAR5CZQgLgFgIgIQgGgHgDgLQgCgLACgOIATiMQABgLAFgJQAFgJAHgGQAIgHAKgDQAKgEANAAIA8ABQAgABAWACIgGApIhdAAQgLAAgEAEQgEAEgCALIgGAjIBiAAIgFAnIhhAAIgHAwQgCAKAEAEQAEAFAKAAIBcAAIgBAoQgVADggAAIg3ABQgPAAgLgEgAIuCZQgLgFgHgIQgHgHgCgLQgDgLACgOIAUiMQABgLAEgJQAGgJAHgGQAHgHALgDQAKgEANAAIA8ABQAgABAWACIgHApIhcAAQgLAAgFAEQgEAEgBALIgGAjIBiAAIgFAnIhiAAIgGAwQgCAKAEAEQAEAFAJAAIBdAAIgBAoQgWADgfAAIg3ABQgQAAgLgEgACCCZQgLgFgHgIQgHgHgCgLQgDgLACgOIAUiMQACgLAEgJQAFgJAHgGQAHgHALgDQAKgEAOAAIA7ABQAhABAVACIgGApIhdAAQgKAAgFAEQgEAEgCALIgGAjIBiAAIgEAnIhiAAIgHAwQgBAKADAEQAEAFAKAAIBcAAIgBAoQgWADgfAAIg3ABQgPAAgMgEgAaYCcQgLAAgEgFQgEgFABgKIACgRQACgJAEgFQAFgEAKAAIALAAQAKAAAFAFQAFAFgCAKIgCARQgCAJgEAEQgFAFgKAAgAkkCcIATiPQAEgSAFgTIgCAAQgMAYgGAHIhoCVIg5AAIAjj3IA1AAIgTCLQgDASgIAXIADAAQAIgRAMgRIBniSIA4AAIgjD3gAoMCcIgJhBIhVAAIgbBBIg5AAIBojpQADgHAFgDQAGgEAGAAIA0AAQAHAAAFAFQAFAEABAHIAmDngAoaAvIgMhhIgKAAIgoBhIA+AAgAsHCcIAWjMIgGAAIg8CZQgCAJgGAEQgFADgJAAIgkAAQgKAAgFgEQgGgFAAgJIgRiXIgHAAIgkDMIg0AAIAqjjQABgKAGgFQAEgFAKAAIA0AAQAJAAAFAFQAEAFABAJIARCdIAEAAIA7ifQACgJAHgEQAFgDAJgBIA1AAQAKAAAFAGQAFAGgBAKIgWDhgAxUCcIAUiPQADgSAGgTIgDAAQgMAYgGAHIhnCVIg6AAIAjj3IA1AAIgTCLQgCASgIAXIACAAQAJgRALgRIBoiSIA3AAIgjD3gA5LCcIAejPIhXAAIgdDPIg3AAIAjj3IDEAAIgiD3gAaTBNIAEhKIAOhfIA0AAIgNBfIgQBKgAlJhxQgLgEgIgIQgHgHgDgKQgCgLADgLIAkAAQgEAQAGAHQAFAGANAAQAMAAAHgHQAHgHABgPIAjAAQgBAMgEAKQgFAKgIAHQgJAIgKAEQgMAEgOAAQgPAAgMgEgAx5hxQgLgEgIgIQgHgHgCgKQgCgLACgLIAkAAQgEAQAGAHQAGAGANAAQAMAAAGgHQAIgHAAgPIAjAAQAAAMgEAKQgFAKgJAHQgIAIgLAEQgMAEgOAAQgPAAgMgEg");
	this.shape.setTransform(176.5,20.7);

	// Слой 1
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(178.5,22.8,1,1,0,0,0,175.4,16.6);

	this.addChild(this.instance_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.1,4.2,352.8,35.2);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(377,150,1,1,0,0,0,377,150);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(341.2,0,754,300);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(80,51.4,1,1,0,0,0,80,51.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:9.3,x:90.4,y:40},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:18.7,x:100.8,y:28.5},2,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:11.1,x:92.5,y:37.6},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:80,y:51.4},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,102.7);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(13,32,1,1,0,0,0,13,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6.3,x:9.8},6,cjs.Ease.get(-1)).to({rotation:15,x:5.5},8,cjs.Ease.get(1)).to({rotation:6.8,x:9.6},8,cjs.Ease.get(-1)).to({rotation:0,x:13},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,64);


(lib.Символ45 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ41();

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("ABLhLQAHAGAGAJQAUAbAAAhQAAAughAeQgfAggsAAQgrAAghggQgcgcgDgqQAAgCAAgEQAAgrAfggQAhgfArAAQAsAAAfAfgADIjHQBUBTAAB0QAAB1hUBUQhTBTh1AAQh0AAhUhTQhThUAAh1QAAh0BThTQBUhUB0AAQB1AABTBUg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#930000").s().p("AkPEPQhwhwgBifQABieBwhxIACgDQBxhuCcAAQCdAABwBuIACADIAUAVQBeBqAACQQAACRheBqIgUAUQhwByifAAQieAAhxhygAi7kSQgYASgWAWQhiBiAACIQAACJBiBhQBhBiCIAAQCJAABhhiQAjghAWgoQAphIAAhZQAAhYgphIQgWgngjgjQgWgWgYgSQhTg5hpAAQhpAAhSA5g");

	this.addChild(this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.5,-38.5,77,77);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ45();

	this.instance_1 = new lib.Символ44();
	this.instance_1.setTransform(0,0,0.909,0.909);
	this.instance_1.alpha = 0.469;

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.6)"],[0.553,1],0,0,0,0,0,39).s().p("AkPEPQhwhwgBifQABieBwhxQBxhwCegBQCfABBwBwQByBxAACeQAACfhyBwQhwByifAAQieAAhxhyg");

	this.addChild(this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.5,-38.5,77,77);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ9();
	this.instance.setTransform(70,70.4,1,1,-15,0,0,80,51.4);

	// Слой 1
	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(109.5,105.8,0.551,0.535,0,-149.5,29.5,80,51.4);

	this.instance_2 = new lib.Символ9();
	this.instance_2.setTransform(115,128,0.552,0.534,0,180,0,80,51.4);

	this.instance_3 = new lib.Символ9();
	this.instance_3.setTransform(80,51.4,1,1,0,0,0,80,51.4);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.5,0,182.4,155.5);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tits
	this.instance = new lib.Символ7();
	this.instance.setTransform(62.5,91,1,1,0,0,0,28.5,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:90.5},20,cjs.Ease.get(-1)).to({y:90},19,cjs.Ease.get(1)).to({y:90.5},20,cjs.Ease.get(-1)).to({y:91},20,cjs.Ease.get(1)).wait(1));

	// foot2
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(45.5,231.5,1,1,0,0,0,9.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.83,y:227.2},20,cjs.Ease.get(-1)).to({scaleY:0.67,y:223},19,cjs.Ease.get(1)).to({scaleY:0.83,y:227.3},20,cjs.Ease.get(-1)).to({scaleY:1,y:231.5},20,cjs.Ease.get(1)).wait(1));

	// foot
	this.instance_2 = new lib.Символ2();
	this.instance_2.setTransform(66.5,248,1,1,0,0,0,10.5,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:40.1,scaleY:0.82,y:240.9},20,cjs.Ease.get(-1)).to({regY:40,scaleY:0.65,y:234},19,cjs.Ease.get(1)).to({scaleY:0.83,y:241},20,cjs.Ease.get(-1)).to({scaleY:1,y:248},20,cjs.Ease.get(1)).wait(1));

	// hand2
	this.instance_3 = new lib.Символ5();
	this.instance_3.setTransform(93,126,1,1,0,0,0,13,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(80));

	// hand
	this.instance_4 = new lib.Символ6();
	this.instance_4.setTransform(24,138.5,1,1,0,0,0,9,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,rotation:-15.3,x:30.9,y:135.7},20,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-30,x:37.5,y:133},19,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-14.8,x:30.8,y:135.7},20,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:24,y:138.5},20,cjs.Ease.get(1)).wait(1));

	// body
	this.instance_5 = new lib.Символ4();
	this.instance_5.setTransform(60,160.5,1,1,0,0,0,28,56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(80));

	// head
	this.instance_6 = new lib.Символ8();
	this.instance_6.setTransform(52,64.5,1,1,0,0,0,35,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(80));

	// Слой 10
	this.instance_7 = new lib.Символ12();
	this.instance_7.setTransform(-32.8,51.4,1,1,0,0,0,80,51.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.3,0,239.4,288);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(168.4,25,1,1,0,0,0,35,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:242.1},50,cjs.Ease.get(-1)).to({x:308.4},30,cjs.Ease.get(1)).to({x:238.4},60,cjs.Ease.get(-1)).to({x:168.4},59,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,239.4,288);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(119.7,144,1,1,0,0,0,119.7,144);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:154.6},19,cjs.Ease.get(-1)).to({y:164},20,cjs.Ease.get(1)).to({y:154},20,cjs.Ease.get(-1)).to({y:144},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,239.4,288);


// stage content:



(lib.elf_640x305 = function(mode,startPosition,loop) {
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
		
		
		
		this.addEventListener("tick", fl_CustomMouseCursor1.bind(this));
		
		function fl_CustomMouseCursor1() {
		
		 this.fon.x = - stage.mouseX / 10;
		}
		/* Пользовательский курсор мыши
		Заменяет курсор мыши по умолчанию на указанный экземпляр символа.
		*/
		stage.canvas.style.cursor = "none";
		this.pricel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.pricel.x = stage.mouseX;
			this.pricel.y = stage.mouseY;
		}
		//Чтобы восстановить курсор мыши по умолчанию, раскомментируйте следующие строки:
		//this.removeEventListener("tick", fl_CustomMouseCursor.bind(this));
		//stage.removeChild(pricel);
		//stage.canvas.style.cursor = "default";
		
		/* Пользовательский курсор мыши
		Заменяет курсор мыши по умолчанию на указанный экземпляр символа.
		*/
		stage.canvas.style.cursor = "none";
		this.movieClip_1.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.movieClip_1.x = stage.mouseX;
		}
		//Чтобы восстановить курсор мыши по умолчанию, раскомментируйте следующие строки:
		//this.removeEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		//stage.removeChild(movieClip_1);
		//stage.canvas.style.cursor = "default";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.movieClip_1 = new lib.Символ32();
	this.movieClip_1.setTransform(346.2,277.5,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1));

	// Слой 4
	this.pricel = new lib.Символ43();
	this.pricel.setTransform(-220,230,0.753,0.753);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// Слой 8
	this.instance = new lib.Символ16();
	this.instance.setTransform(495.1,26.1,0.853,0.853,0,0,0,194.5,23.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(79.4,146,1,1,0,0,0,119.7,144);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ29();
	this.instance_2.setTransform(508.6,23.6);
	this.instance_2.alpha = 0.238;
	this.instance_2.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 2
	this.fon = new lib.Символ11();
	this.fon.setTransform(10.8,153,1.095,1.095,0,0,0,377,150);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-223,96.4,1430,373.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;