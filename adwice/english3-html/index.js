(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/back.jpg", id:"back"},
		{src:"images/bb1.png", id:"bb1"},
		{src:"images/bb2.png", id:"bb2"},
		{src:"images/bb3.png", id:"bb3"},
		{src:"images/bb4.png", id:"bb4"},
		{src:"images/dcsedf.png", id:"dcsedf"},
		{src:"images/f1.png", id:"f1"},
		{src:"images/f2.png", id:"f2"},
		{src:"images/f3.png", id:"f3"},
		{src:"images/wer.png", id:"wer"},
		{src:"images/werfg.png", id:"werfg"}
	]
};



// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.bb1 = function() {
	this.initialize(img.bb1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,233,209);


(lib.bb2 = function() {
	this.initialize(img.bb2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,144);


(lib.bb3 = function() {
	this.initialize(img.bb3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,241,106);


(lib.bb4 = function() {
	this.initialize(img.bb4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,211,92);


(lib.dcsedf = function() {
	this.initialize(img.dcsedf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,165);


(lib.f1 = function() {
	this.initialize(img.f1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,119);


(lib.f2 = function() {
	this.initialize(img.f2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,126);


(lib.f3 = function() {
	this.initialize(img.f3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,126);


(lib.wer = function() {
	this.initialize(img.wer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,165);


(lib.werfg = function() {
	this.initialize(img.werfg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,165);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Az5D7QAWgtgBgvQAKgBgEjBIADgdQgHAAAAgFQAIgHAHghIADAAQAHAGAEAWIAOgEQBTgCASBFIAAAKQAAAjhKAdQgeABAAAOQgLC0g0AAgAzEg9IADAGIAGBcIAEAAQA+gVgBgYQADgBABgFQgPgvg7AAIgEAAgAgHCPQgsgIAAgKQABgGAFAAQBQAAAAgmQABglg/gbQgWgTgEgeQgBguA8gMIACAAQAjAAAQASQAAAFgGAAIgJAAQg+AAAAAhIAAAGQAAAbA+AdQAYAaAAAVIAAAJQAAAyhEAJgAjnASQgIAAgIgYIAGgCIAOACQAShdAyABIAJAAQA2AAAWBXQgBAzhLAPIgGAAQgaAAgPgJIAAADQAAAeAfA9IgGADQg7gmAAhXgAjFAPQAMAGANAAIAQAAQAoAAAHgkQAAgfgpgZQgvAXAAA/gAOdgBIAAgxQg8gPgIgNIAAgCQABgGAFAAIATAAIAwAGIAAgGQAAgVAIgBQAGAAAJAkQBDAPAAANIAAAGIgNADIg2gGIACBNQgBBpgMAAQgSgHABiHgAmLATQAJhrA5AAQAxAAASBYIACAiQgLBrg2AAQg4AAgOh6gAlrAXIAAARQAABIAmAAIACAAQAggWAAhHIAAgLQAAg3gdgMIgFAAQggAAgGBSgApkCNQgQAAgagYQgZAYgZAAIgGAAQgqAAgFg8IAAgJQAAhiBuhCQALgGANAAIAFAAIAAADQgGALgMAEIAEAkIAAB3IAOgJIADAGQgKAWgEgBQgBAXAzANIAAAJIgPADgArVBPIAAACQAAAeAVAAIAGAAQAJAAAbgOIgGgtQADgsALhGQhHBAAABNgAwwATQAIhrA6AAQAwAAASBYIADAiQgMBrg2AAQg4AAgNh6gAwRAXIAAARQAABIAmAAIADAAQAfgWAAhHIAAgLQAAg3gdgMIgFAAQgfAAgHBSgALLCLQgGAAAAgGQBbgkAAg7QhDgHAAgOQAAgIAfgEIAnAAIAAgFQgMhOhPgBQgKAAAAgFQAPgNAdAAIACAAQBEABAbBrQAYADAAAKIAAADQAAAFgfAGQAAA3hIAoQgNAGgVAAgAoWAuQAAgqANhsIghAEIgNAAQgGAAgBgHIAAgDQABgNA7gUIAKhrIAKAAQAKAfgBAaIAAArIARgDIAeAAQAGABABAFQgEAOgyATQgNB5AABBQAAANAHAYIAKAAQANAAArgdQAHABAAAFQgiA1gqAAQgjAAgFhdgAuAAuQAAgqAOhsIghAEIgNAAQgHAAAAgHIAAgDQAAgNA8gUIAKhrIAJAAQAKAfAAAaIAAArIARgDIAdAAQAHABAAAFQgDAOgyATQgOB5AABBQABANAGAYIAKAAQANAAArgdQAIABgBAFQghA1grAAQgiAAgGhdgAQIAOQAIhsA5AAQAxAAASBaIADAgQgNBrg2AAQg3AAgNh5gAQnARIAAARQAABIAlAAIADAAQAggWAAhGIAAgMQAAg4gdgKIgGAAQgeAAgHBRgASuBPQAAglAjABQApgBAAAlQAAAjgkABQgogBAAgjgAGFgFQh7gEAAgQIAAgEQAAgRBsgEIAHAAQB8AFgBAQIAAAEQAAARhsADgASrh2QgBgkAlAAQAoAAAAAkQAAAjgkABQgogBAAgjg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-127.4,-25.1,254.9,50.2);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.f1();
	this.instance.setTransform(-87.5,-59.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87.5,-59.5,175,119);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.f3();
	this.instance.setTransform(-75.5,-63);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.5,-63,151,126);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.f2();
	this.instance.setTransform(-98,-63);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-98,-63,196,126);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjejBIAIgOQDWDwDWjwIAJAOIjfGRg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.3,-20.9,44.6,41.8);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.f1();
	this.instance.setTransform(-87.5,-59.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87.5,-59.5,175,119);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.f2();
	this.instance.setTransform(-98,-63);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-98,-63,196,126);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.f3();
	this.instance.setTransform(-75.5,-63);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.5,-63,151,126);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-10},19).to({x:0},20).to({x:10},20).to({x:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.4,-25.1,254.9,50.2);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-14.7,-40);

	// Символ 18
	this.instance = new lib.Символ21();
	this.instance.setTransform(-14.2,10.7);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-188.2,-62.1,347,97.9);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87.5,-59.5,175,119);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.5,-63,151,126);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-98,-63,196,126);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(0,0,1.251,1.251);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.67,scaleY:0.67,y:37.1},4,cjs.Ease.get(1)).to({scaleX:1.25,scaleY:1.25,y:0},5,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-26.1,55.8,52.3);


(lib.Символ4копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.7},2).to({rotation:0},2).to({rotation:-2.7},2).to({rotation:0},2).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.5,-59.5,175,119);


(lib.Символ3копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.2},2).to({rotation:0},2).to({rotation:1.2},2).to({rotation:0},2).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98,-63,196,126);


(lib.Символ2копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.7},2).to({rotation:0},2).to({rotation:-2.2},2).to({rotation:0},2).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-63,151,126);


(lib.Символ10копия = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ4копия();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87.5,-59.5,175,119);


(lib.Символ9копия = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ2копия();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.5,-63,151,126);


(lib.Символ8копия = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ3копия();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-98,-63,196,126);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(260.9,-25,0.761,0.761);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({x:511.2,y:-24},0).wait(20).to({x:775.8,y:-25},0).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(239.7,-44.9,42.5,39.8);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();

	this.instance_1 = new lib.Символ10копия();
	this.instance_1.setTransform(0,0,1.023,1.023);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Слой 2
	this.instance_2 = new lib.werfg();
	this.instance_2.setTransform(-129.5,-72.3,0.921,0.921);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.5,-59.5,175,119);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();

	this.instance_1 = new lib.Символ9копия();
	this.instance_1.setTransform(0,0,1.032,1.032);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Слой 2
	this.instance_2 = new lib.wer();
	this.instance_2.setTransform(-118.5,-60.4,0.85,0.85);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-63,151,126);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();

	this.instance_1 = new lib.Символ8копия();
	this.instance_1.setTransform(0,0,1.041,1.041);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Слой 2
	this.instance_2 = new lib.dcsedf();
	this.instance_2.setTransform(-151,-71.5,0.986,0.986);

	this.instance_3 = new lib.dcsedf();
	this.instance_3.setTransform(-134,-66.6,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98,-63,196,126);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(-381.3,-1.9,0.753,0.753);

	// f3.png
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(5.5,72);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	// f2.png
	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(-192,72);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	// f1.png
	this.instance_3 = new lib.Символ13();
	this.instance_3.setTransform(200.5,70.5);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-343,-35.7,672.1,198.9);


// stage content:
(lib.index = function(mode,startPosition,loop) {
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.instance = new lib.Символ17();
	this.instance.setTransform(338.2,68.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.bb4();
	this.instance_1.setTransform(162.7,119.8,0.697,0.697,-9.7);

	this.instance_2 = new lib.bb3();
	this.instance_2.setTransform(348.6,57.6,0.71,0.71,15);

	this.instance_3 = new lib.bb2();
	this.instance_3.setTransform(507,-16.6,0.788,0.788,29.5);

	this.instance_4 = new lib.bb1();
	this.instance_4.setTransform(-8.6,42,0.639,0.639,-16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Слой 2
	this.instance_5 = new lib.Символ1();
	this.instance_5.setTransform(320.5,158.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 1
	this.instance_6 = new lib.back();
	this.instance_6.setTransform(0.5,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(311.4,135.9,678.7,322.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;