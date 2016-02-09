(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/tel.png", id:"tel"},
		{src:"images/tel2.png", id:"tel2"},
		{src:"images/telo3.png", id:"telo3"},
		{src:"images/uprajnenya_jivot.jpg", id:"uprajnenya_jivot"}
	]
};



// symbols:



(lib.tel = function() {
	this.initialize(img.tel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,265,121);


(lib.tel2 = function() {
	this.initialize(img.tel2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,279,165);


(lib.telo3 = function() {
	this.initialize(img.telo3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,389,273);


(lib.uprajnenya_jivot = function() {
	this.initialize(img.uprajnenya_jivot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,880,441);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666600").s().p("AQlFsIgKgBIgRABMgjtAAAIAAqHIBSgxIAAgBIABAAIADgCIAAACMAlxgAfIguKfIg/A5g");
	this.shape.setTransform(6.4,-4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118.8,-40.5,250.5,73);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ap4B5QgQgFgIgJQgKgJgEgPQgEgOAAgTIAAgEIAxAAIABASQABAIADAFQAEAGAFAEQAHADAJAAQAPAAAIgJQAIgJAAgUQAAgKgCgHQgCgIgFgEQgHgJgTAAIgPABIAAglIAJABQAJAAAIgDQAHgCAFgEQADgEACgIQADgHAAgKQAAgQgHgGQgHgHgMAAQgLAAgIAFQgHAFgCALIgBANIgxAAIAAgCQABgRAFgNQAFgNAJgIQALgJAOgEQAPgEATAAQAjAAATAQQATARAAAfQAAAIgCAJQgCAJgFAIQgFAHgGAGQgHAFgJADQAUAEALAMQAMAOAAAYQgBAngVASQgLAKgQAEQgPAFgTAAQgWAAgOgEgAsyB7IgEgBIgFAAIgIgBIAAglIAPABQAMAAAFgGQAFgGAFgLIACgGIhCivIA2AAIAkB3IAih3IAzAAIhGDMQgGAOgIAIQgHAIgMAEQgLAEgRAAgAMjB5IgxhjIgSAbIAABIIgyAAIAAjwIAyAAIAABhIAAAAIA+hhIA1AAIhCBnIBJCJgAJrB5IgLgzIhBAAIgMAzIhjAAIgyhjIgSAbIAABIIgxAAIAAjwIAxAAIAABhIABAAIA9hhIA1AAIhCBnIBGCBIA+joIA8AAIBADwgAJXAeIgYhrIAAAAIgYBrIAwAAgAA4B5IAAjwIAxAAIAABbIAaAAQASAAAPAEQAPAEAJAJQAKAJAGAMQAEAOAAAVQAAAUgEAPQgGAPgKAJQgKAJgPAEQgOAEgSAAgABpBUIANAAQAMAAAHgCQAIgCAFgEQAEgEACgIQADgIAAgLQAAgLgDgHQgDgIgEgEQgFgEgHgCIgRgCIgPAAgAhBB5IAAjIIg1AAIAAgoICZAAIAAAoIgzAAIAADIgAitB5IgLgzIhBAAIgLAzIgzAAIBAjwIA9AAIBADwgAjBAeIgXhrIgBAAIgYBrIAwAAgAl5B5IAAhrIg5AAIAABrIgxAAIAAjwIAxAAIAABcIA5AAIAAhcIAxAAIAADwg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-85.9,-12.6,171.8,25.2);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-31.2,-48,0,-31.2,-48,75).s().p("AYrLAQrHo5tPhhQtNhgpTh4QpTh5AAi0QAAi0Hzh/QHziALBAAQK/AAHyCAQHzB/HDPFQEcJhixAAQhoAAkIjTg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-201.5,-91.5,403.1,183.1);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AgUCYQgKgDgJgEQgQgJgJgQQgIgRgDgXQgCgXgBgcQABgcACgVQADgXAIgRQAJgRAQgJQAQgJAaAAQAcAAAQAJQAQAJAJARQAIARADAXQADAVAAAcQAAAcgDAXQgDAXgIARQgJAQgQAJQgJAEgLADQgLACgNAAQgMAAgLgCgAgNg2QgGAFgEAKQgDALgBARIAABSQABARADAKQAEALAGAFQAHAFAJAAQALAAAGgFQAHgFADgLQAFgKAAgRIAAhSQAAgRgFgLQgDgKgHgFQgGgFgLAAQgJAAgHAFgAkfCWIAAgqIAEABIAEAAIAKgBQAFgBAEgFQADgGAEgMQACgMACgXIAFiLICJAAIAADwIgwAAIAAjIIgrAAIgBBIQgCAggDAXQgDAXgEAPQgFAOgIAIQgHAJgLADQgKADgOAAgAJTCWIAAiZIg7CZIg1AAIAAjwIAvAAIAACZIA7iZIA1AAIAADwgAGTCWIAAiZIg8CZIg1AAIAAjwIAwAAIAACZIA7iZIA1AAIAADwgABzCWIAAjwIBVAAQATAAANAGQANAGAHAKQAIAKADAOQAEANAAANQAAASgGANQgGAOgKAJQgJAIgPAFQgOAEgSAAIgaAAIAABhgACjARIAWAAQAPAAAJgJQAEgEADgFQACgHAAgJQAAgSgIgKQgEgFgHgCQgGgCgJAAIgVAAgAlSCWIgLgzIhAAAIgLAzIhkAAIgyhjIgSAbIAABIIgxAAIAAjwIAxAAIAABfIAAAAIA+hfIA2AAIhCBlIBFCDIA9joIA+AAIA/DwgAmVA7IAwAAIgXhrIgCAAgAISh2QgFgHgEgIQgDgJAAgLIAWAAQABAKAHAGQAHAFAKAAQAKAAAHgFQAHgGABgKIAWAAQAAALgDAJQgEAIgFAHQgNAMgWAAQgWAAgNgMg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.2,-15.4,128.5,31);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("ApoB4IAAgqIAFAAIACABIALgBQAFgBAEgGQADgFADgMQAEgNACgWIADiMICKAAIAADxIgwAAIAAjJIgsAAIgBBLQgBAegCAXQgEAWgEAPQgFAPgIAIQgHAIgLAEQgKADgNAAgAIxB4IgihTIgjBTIg2AAIA8h5Ig3h4IA2AAIAfBPIAfhPIA1AAIg4B4IA9B5gAF0B4IAAiaIg7CaIg0AAIAAjxIAuAAIAACaIA8iaIA1AAIAADxgACyB4IAAhsIg6AAIAABsIgxAAIAAjxIAxAAIAABdIA6AAIAAhdIAwAAIAADxgAjRB4IAAjxIAxAAIAADJIAzAAIAAjJIAxAAIAADJIAzAAIAAjJIAvAAIAADxgAkhB4IAAiaIg8CaIg1AAIAAjxIAvAAIAACaIA8iaIA1AAIAADxg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-61.7,-12.2,123.4,24.5);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AhtB7QgLgDgIgEQgQgJgJgQQgIgRgDgXQgDgXAAgcQAAgaADgXQADgXAIgRQAJgRAQgJQAQgJAcAAQAcAAAQAJQAQAJAJARQAIARADAXQADAXAAAaQAAAcgDAXQgDAXgIARQgJAQgQAJQgJAEgLADQgLACgNAAQgOAAgLgCgAhlhTQgHAFgEAKQgDALgBARIAABSQABARADAKQAEALAHAFQAGAFALAAQALAAAGgFQAHgFAEgLQADgKABgRIAAhSQgBgRgDgLQgEgKgHgFQgGgFgLAAQgLAAgGAFgABBB5IAAjIIg1AAIAAgoICcAAIAAAoIg1AAIAADIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.8,-12.5,33.6,25.2);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#993300").s().p("AkdB7QgKgDgJgEQgQgJgJgQQgIgRgDgXQgCgXAAgcQAAgaACgXQADgXAIgRQAJgRAQgJQARgJAbAAQANAAALACQAKACAIAEQAPAJAHANQAIANACAPIABAcIgxAAQAAgagGgMQgDgGgGgDQgFgDgJAAQgJAAgGAFQgGAFgDALQgEALgBASIgBApQAAAcACARQABARAEAJQAEAKAGADQAGADAIAAQAGAAAGgCQAGgCAEgHQAEgHACgMQACgMAAgUIAxAAQAAAVgDARQgDASgIANQgIANgPAHQgQAIgYAAQgOAAgLgCgAEnB5IAAhdIgSAAIguBdIg2AAIA0hjQgKgEgIgGQgIgGgFgGQgLgRAAgcQAAgUAFgOQAGgOAJgJQALgJAOgEQAOgEARAAIBQAAIAADwgAD2hLQgFAFgCAHQgCAHAAALQAAAWAJAIQAEAFAHACQAIACAJAAIAVAAIAAhNIgTAAQgVAAgJAIgAAHB5IAAjwICNAAIAAAoIhcAAIAAA1IAeAAQASAAAOAEQAPADAKAJQAKAIAFANQAFAOAAAUQAAAVgFAOQgGAPgKAJQgLAJgPAEQgPAEgTAAgAA4BUIAjgCQAHgCAFgEQAFgEADgIQACgHAAgMQAAgVgKgHQgJgIgUAAIgSAAgAibB5IAAjwICIAAIAAAoIhXAAIAAA5IBSAAIAAAmIhSAAIAABBIBaAAIAAAog");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.4,-12.6,68.8,25.2);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AANCTIAAgwIjhAAIAAjwIAxAAIAADIIAzAAIAAjIIAxAAIAADIIAzAAIAAjIIAvAAIAADIIAXAAIAABYgAomBjQgPgFgJgJQgKgJgEgPQgEgOAAgTIAAgEIAxAAIABASQABAIAEAFQADAGAGAEQAGADAJAAQAQAAAHgJQAIgJAAgUQAAgKgCgHQgCgIgEgEQgIgHgTAAIgPABIAAgnIAJABQAKAAAHgDQAHgCAFgEQAEgEACgIQACgHAAgKQAAgQgHgGQgHgHgMAAQgLAAgIAFQgHAFgCALIgBANIgwAAIAAgCQAAgRAFgNQAFgNAKgIQAKgJAPgEQAOgEATAAQAjAAATAQQATARAAAfQAAAIgCAJQgCAJgFAIQgEAHgHAGQgHAFgJADQAUAEALAOQAMAMAAAYQAAAngWASQgLAKgPAEQgPAFgUAAQgWAAgOgEgAIiBjIAAiZIg8CZIg0AAIAAjwIAvAAIAACZIA7iZIA1AAIAADwgAE3BjIAAjIIg1AAIAAgoICbAAIAAAoIg1AAIAADIgAC+BjIAAiZIg7CZIg1AAIAAjwIAvAAIAACZIA8iZIA0AAIAADwgAkYBjIgLgzIhAAAIgMAzIgzAAIBAjwIA9AAIBADwgAkrAIIgYhrIgBAAIgXBrIAwAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.3,-14.8,118.7,29.6);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("ACCAAQAAA2gmAmQgmAmg2AAQg1AAgmgmQgmgmAAg2QAAg1AmgmQAmgmA1AAQA2AAAmAmQAmAmAAA1g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14,-14,28,28);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#D40000","#990000"],[0,1],-3.7,5,0,-3.7,5,20.6).s().p("AiPCQQg9g7AAhVQAAhUA9g7QA7g9BUAAQBVAAA7A9QA9A7AABUQAABVg9A7Qg7A9hVAAQhUAAg7g9g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.5,-20.5,41,41);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.tel();
	this.instance.setTransform(-132.5,-60.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-132.5,-60.5,265,121);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.tel2();
	this.instance.setTransform(-139.5,-82.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-139.5,-82.5,279,165);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.telo3();
	this.instance.setTransform(-194.5,-136.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-194.5,-136.5,389,273);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.uprajnenya_jivot();
	this.instance.setTransform(-440,-220.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-440,-220.5,880,441);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1xF7IAAr1MArjAAAIAAL1g");

	// Слой 3
	this.instance = new lib.Символ21();
	this.instance.setTransform(33.5,-1.4);
	this.instance.alpha = 0.27;
	this.instance.compositeOperation = "lighter";

	this.instance.mask = mask;

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#D40000","#990000"],[0,1],0,0,0,0,0,144.6).s().p("A1xF7IAAr1MArjAAAIAAL1g");

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-139.5,-37.9,279,76);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.488},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.9,-12.6,171.8,25.2);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 17
	this.instance = new lib.Символ17();
	this.instance.setTransform(705.4,-109.7,2.03,2.03);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({x:386.8},14,cjs.Ease.get(1)).to({x:403.1},5,cjs.Ease.get(1)).wait(51).to({x:734},10,cjs.Ease.get(-1)).wait(11));

	// Символ 16
	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(404.6,-293,1.57,1.57);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({y:-157.3},14,cjs.Ease.get(1)).to({y:-165.5},5,cjs.Ease.get(1)).wait(55).to({y:-331.3},10,cjs.Ease.get(-1)).wait(16));

	// Символ 15
	this.instance_2 = new lib.Символ15();
	this.instance_2.setTransform(267,-293.2,1.57,1.57);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({y:-157.6},14,cjs.Ease.get(1)).to({y:-165.7},5,cjs.Ease.get(1)).wait(58).to({y:-331.6},10,cjs.Ease.get(-1)).wait(21));

	// Символ 14
	this.instance_3 = new lib.Символ14();
	this.instance_3.setTransform(616.2,-220.7,1.31,1.31,0,0,0,-0.1,-0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({x:425.1},14,cjs.Ease.get(1)).to({x:431.5},5,cjs.Ease.get(1)).wait(62).to({y:-343.3},10,cjs.Ease.get(-1)).wait(27));

	// Символ 13
	this.instance_4 = new lib.Символ13();
	this.instance_4.setTransform(55,-217.7,1.31,1.31);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:300},14,cjs.Ease.get(1)).to({x:293.6},5,cjs.Ease.get(1)).wait(60).to({y:-340.3},10,cjs.Ease.get(-1)).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-237.1,155.4,38.7);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 11
	this.instance = new lib.Символ9();
	this.instance.setTransform(104.9,50.5,0.707,0.707);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({x:314.9,y:86.5,alpha:1},14).to({x:31.4,y:324.5},10).wait(1));

	// Слой 13
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(314.9,86.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(53).to({_off:false},0).to({scaleX:1.42,scaleY:1.42,alpha:0},5).wait(6));

	// Слой 10
	this.instance_2 = new lib.Символ9();
	this.instance_2.setTransform(596.8,77.5,0.707,0.707,-168.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({_off:false},0).to({x:398.5,y:-0.4,alpha:1},14).to({x:724.4,y:-175.8},10).to({_off:true},1).wait(12));

	// Слой 9
	this.instance_3 = new lib.Символ11();
	this.instance_3.setTransform(398.5,-0.4,1,1,-168.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(41).to({_off:false},0).to({scaleX:1.42,scaleY:1.42,alpha:0},5).to({_off:true},6).wait(12));

	// Слой 8
	this.instance_4 = new lib.Символ9();
	this.instance_4.setTransform(192.2,-162.5,0.707,0.707,42.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21).to({_off:false},0).to({x:322.8,y:5.9,alpha:1},14).to({x:-47,y:-10},10).to({_off:true},1).wait(18));

	// Слой 7
	this.instance_5 = new lib.Символ11();
	this.instance_5.setTransform(322.8,5.9,1,1,42.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35).to({_off:false},0).to({scaleX:1.42,scaleY:1.42,alpha:0},5).to({_off:true},6).wait(18));

	// Слой 6
	this.instance_6 = new lib.Символ9();
	this.instance_6.setTransform(645,14.5,0.732,0.707,0,0,180);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({_off:false},0).to({x:427.7,y:50.5,alpha:1},14).to({x:721,y:288.5},10).to({_off:true},1).wait(23));

	// Слой 5
	this.instance_7 = new lib.Символ11();
	this.instance_7.setTransform(427.7,50.5,1.035,1,0,0,180);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(30).to({_off:false},0).to({scaleX:1.47,scaleY:1.42,alpha:0},5).to({_off:true},6).wait(23));

	// Слой 4
	this.instance_8 = new lib.Символ9();
	this.instance_8.setTransform(159.9,151.2,0.707,0.707,-30.7);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).to({x:358.8,y:74.8,alpha:1},14).to({x:236.6,y:424.2},10).to({_off:true},1).wait(30));

	// Слой 3
	this.instance_9 = new lib.Символ11();
	this.instance_9.setTransform(358.8,74.8,1,1,-30.7);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(23).to({_off:false},0).to({scaleX:1.42,scaleY:1.42,alpha:0},5).to({_off:true},6).wait(30));

	// Слой 1
	this.instance_10 = new lib.Символ9();
	this.instance_10.setTransform(88,10,0.707,0.707);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:298,y:46,alpha:1},14).to({x:14.5,y:284},10).to({_off:true},1).wait(39));

	// Слой 2
	this.instance_11 = new lib.Символ11();
	this.instance_11.setTransform(298,46);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(14).to({_off:false},0).to({scaleX:1.42,scaleY:1.42,alpha:0},5).to({_off:true},6).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(73.5,-4.5,29,29);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(167,1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(240.5,-3.5,29,29);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 4
	this.instance = new lib.Символ4();
	this.instance.setTransform(-53,-116.5,0.717,0.717);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.71,skewY:0.6,x:-53.5,y:-115.3},14,cjs.Ease.get(-1)).to({scaleX:0.7,skewY:1.5,x:-54,y:-114},15,cjs.Ease.get(1)).to({scaleX:0.71,skewY:0.8,x:-53.5,y:-115.2},15,cjs.Ease.get(-1)).to({scaleX:0.72,skewY:0,x:-53,y:-116.5},15,cjs.Ease.get(1)).wait(1));

	// Символ 3
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(-28.7,-26.1,0.717,0.717);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.71,scaleY:0.72,skewX:2,skewY:0.3,x:-31.9,y:-25.4},14,cjs.Ease.get(-1)).to({regX:-0.1,scaleX:0.7,scaleY:0.72,skewX:4.3,skewY:0.9,x:-35.3,y:-24.6},15,cjs.Ease.get(1)).to({scaleX:0.71,scaleY:0.72,skewX:2,skewY:0.3,x:-31.9,y:-25.4},15,cjs.Ease.get(-1)).to({regX:0,scaleX:0.72,scaleY:0.72,skewX:0,skewY:0,x:-28.7,y:-26.1},15,cjs.Ease.get(1)).wait(1));

	// Символ 2
	this.instance_2 = new lib.Символ2();
	this.instance_2.setTransform(8.6,62,0.717,0.717);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.72,skewX:-1.9,x:5.3,y:62.5},14,cjs.Ease.get(-1)).to({scaleX:0.73,scaleY:0.72,skewX:-3.5,skewY:0.8,x:2.7,y:64},15,cjs.Ease.get(1)).to({scaleX:0.72,scaleY:0.72,skewX:-1.9,skewY:0,x:5.3,y:62.5},15,cjs.Ease.get(-1)).to({scaleX:0.72,skewX:0,x:8.6,y:62},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148,-159.8,296,319.7);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-440,-220.5,880,441);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-19.8},49,cjs.Ease.get(-0.92)).to({x:-40},50,cjs.Ease.get(1)).to({x:-20},50,cjs.Ease.get(-0.92)).to({x:0},50,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-440,-220.5,880,441);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(-53.7,213.2,0.979,0.979);

	// Слой 2
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(-53.9,216.4,0.979,0.979);
	this.instance_1.alpha = 0.238;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76.2,-18.9,152.3,41.1);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ19();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-85.9,-12.6,171.8,25.2);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(3,-2.1);

	this.instance_1 = new lib.Символ20();

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AhClJICFheIgyMJIhJBGg");
	this.shape.setTransform(145.2,-4.5);

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("A23AvIBpg6MAsGgAjIiRBdg");
	this.shape_1.setTransform(6.5,-42.2);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-168,-92.9,403.1,183.1);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ25();
	this.instance.setTransform(-6.4,4.1);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(-5.5,3.9,0.859,0.859);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.8,-76,346.2,157.3);


// stage content:



(lib.kalor_640305 = function(mode,startPosition,loop) {
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

	// Слой 5
	this.instance = new lib.Символ24();
	this.instance.setTransform(517.6,261.3,1,1,0,0,0,23.2,2.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(-354.2,107.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 7
	this.instance_2 = new lib.Символ7();
	this.instance_2.setTransform(190.2,150.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 4
	this.instance_3 = new lib.Символ26();
	this.instance_3.setTransform(144.3,140,1,1,0,0,0,0,97.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Символ 5
	this.instance_4 = new lib.Символ5();
	this.instance_4.setTransform(371,154.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(206.2,86.5,924.8,441);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;