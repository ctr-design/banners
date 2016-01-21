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
		{src:"images/g1.png", id:"g1"},
		{src:"images/g2.png", id:"g2"}
	]
};



// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,469);


(lib.g1 = function() {
	this.initialize(img.g1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,204,472);


(lib.g2 = function() {
	this.initialize(img.g2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,202,469);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003399").s().p("AgqGOQgFABAAgGIAAhfQAAgEAFAAIAWAAQAFAAAAAEIAAAbIAXAAQAJAAAOADQAGACAJAFIAGAGIADAGQADAHAAAHQAAAJgDAHIgDAGIgGAFQgJAGgGABQgOADgJAAgAgPF3IAXAAIAHgBIAFgDQAEgDAAgHQAAgFgEgEIgFgCIgHgBIgXAAgAgJDiQgFAAAAgFIAAhLIggAAQgFAAAAgEIAAgQQAAgFAFAAIBeAAQAGAAAAAFIAAAQQAAAEgGAAIgfAAIAABLQAAAFgGAAgAAaA2QgGgBAAgFIAAgcIgUAAIgTAcQgFAFgFABIgZAAQgBAAAAgBQgBAAgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBIAbgjIAAgCQgWgEAAgVQAAgHADgGQADgIAGgEIAHgFIAJgCQAGgCAQgCIAzAAQAFABAAAFIAABcQAAAFgFABgAgOgWQgEADAAAFQAAAGAEADQAEAEAHAAIAXAAIAAgZIgXAAQgHABgEADgAAbh1QgFAAAAgGIAAghIgqAAIAAAhQAAAGgFAAIgWAAQgFAAAAgGIAAheQAAgFAFAAIAWAAQAFAAAAAFIAAAkIAqAAIAAgkQAAgFAFAAIAXAAQAFAAAAAFIAABeQAAAGgFAAgAgIkfIgMgDIgLgFIgJgHIgHgIQgDgEgBgFIgDgLQgCgGAAgGQAAgHACgFIADgLQABgFADgFIAHgIIAJgGIALgFIAMgCIAMgBQAJAAAOACQAHADAKAGQAHAFAEAGQADAHAAAHQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgTAAQgDAAgCgBIgEgEQgDgGgEgCIgGgDIgHgBQgEAAgFACQgFACgEAEQgDAEgCAFQgCAHAAAHQAAAIACAFQACAGADAEQAEAEAFACQAFACAEgBIAIgBQADAAADgCQAEgDAEgGIADgFQADgBADAAIATAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAAAHgEAGQgGAJgFAEQgKAGgHACQgPADgJAAIgMAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6,-39.9,12.1,79.8);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003399").ss(1,1,1).p("AhIooICQAAQBcAAACBZIAAObQAABdheAAIiQAAQhdAAAAhdQAAgCAAgDIAAuWQAChZBbAAg");
	this.shape.setTransform(-8,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9AE8F4").s().p("AhIIpQhbAAgChZIAAgEIAAuXQAChZBbAAICQAAQBcAAACBZIAAObQgCBZhcAAgABIokIiQAAQhbAAgCBZQAAhdBdAAICQAAQBeAAAABdQgChZhcAAg");
	this.shape_1.setTransform(-8,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.6,-55.9,35.3,112.8);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AhuCgQgSgLgGgWQgDgZgFgOQgEgNgSgYIgdgnQgLgOgUgSQgSgSgXgOQgWgOgygPQgbgJAAgVQAAgKAGgCIA1AAQBBAAAVACIADgBIAyAAQAzABADABIDvADIAmgCIAbgDQALgGARgCIAEgBIAqgHQARgGAJgHQAMgFA7gDQACgBAAAIQAAAagjAVQgiAVg5AKQgyAIgcAVQgRAMgcAaQgpAcg0A2IhRBVg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.5,-16,73.1,32.1);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AE0KHIgBgBQANgqgig3QgcgqgwgnQgvgnghguIg+haQgYgegbg1IgohaQgEgLgXgjQgSgegEgOQgDgLgggaQgPgNgJgJIAAACIAAAAQgDAjgdBvQgVBNgLAjQgIAdgMAeQgpBphAAzIAFAKIgIAHIgFAEIgSgsIAAi9QgigUggg4Qgfg2ABgoQAAgVAJgXQAIgUAAgRIgGhyIAAhOQACgrAMgrQAKgiA3gzQAmgkAUgKIAFgIIAEACQABABAAAEIAAACIgBADQgLA3AAAQQAABQBHBuQA/BVAWAhIABgDQAAgFACgBIABgBIAAAAIABAAQASAEAdAXQApAfAPAJQA+AmAwAiIAyAlQAiAXAdAOQBKAhA0APQBAATA1gCQAJAJAAApQAAApgWAvQghBBgLAkQgJBDgIApQgQBLgdAAIgHAAgAFOgQQgEgBgagBIgDAAQgFgDgZgDQgTgDgHgFQiRgOgKgOIAAgEQhEghgXgTQg0gmAGgsQADgVgShHQgRhKgBgEQABgFABgEIgEgCQAshFBBhGQATgUAlgyQArgrBIgPIAFABQABABABAFQgBAIgaAjQgbAlgBAGQgFAdAAA8QAABOAdA4QASAkAuAzQAvAzARAhQAJAQAFASIAdAhQAnAvAAAQIAAAIQgCADgGACgAigkZQgSgSgDgLQgCgEAAgVQAAgcADgGQAGgNAbgWIACABQABABAAAEQAAAEgEABQgDABAAAEIAPAZQAOAaAAAcIAAANQgBAIgIAHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.4,-64.7,88.8,129.5);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgqGOQgFABAAgGIAAhfQAAgEAFAAIAWAAQAFAAAAAEIAAAbIAXAAQAJAAAOADQAGACAJAFIAGAGIADAGQADAHAAAHQAAAJgDAHIgDAGIgGAFQgJAGgGABQgOADgJAAgAgPF3IAXAAIAHgBIAFgDQAEgDAAgHQAAgFgEgEIgFgCIgHgBIgXAAgAgJDiQgFAAAAgFIAAhLIggAAQgFAAAAgEIAAgQQAAgFAFAAIBeAAQAGAAAAAFIAAAQQAAAEgGAAIgfAAIAABLQAAAFgGAAgAAaA2QgGgBAAgFIAAgcIgUAAIgTAcQgFAFgFABIgZAAQgBAAAAgBQgBAAgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBIAbgjIAAgCQgWgEAAgVQAAgHADgGQADgIAGgEIAHgFIAJgCQAGgCAQgCIAzAAQAFABAAAFIAABcQAAAFgFABgAgOgWQgEADAAAFQAAAGAEADQAEAEAHAAIAXAAIAAgZIgXAAQgHABgEADgAAbh1QgFAAAAgGIAAghIgqAAIAAAhQAAAGgFAAIgWAAQgFAAAAgGIAAheQAAgFAFAAIAWAAQAFAAAAAFIAAAkIAqAAIAAgkQAAgFAFAAIAXAAQAFAAAAAFIAABeQAAAGgFAAgAgIkfIgMgDIgLgFIgJgHIgHgIQgDgEgBgFIgDgLQgCgGAAgGQAAgHACgFIADgLQABgFADgFIAHgIIAJgGIALgFIAMgCIAMgBQAJAAAOACQAHADAKAGQAHAFAEAGQADAHAAAHQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgTAAQgDAAgCgBIgEgEQgDgGgEgCIgGgDIgHgBQgEAAgFACQgFACgEAEQgDAEgCAFQgCAHAAAHQAAAIACAFQACAGADAEQAEAEAFACQAFACAEgBIAIgBQADAAADgCQAEgDAEgGIADgFQADgBADAAIATAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAAAHgEAGQgGAJgFAEQgKAGgHACQgPADgJAAIgMAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6,-39.9,12.1,79.8);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CF0C00").ss(1,1,1).p("AhIooICRAAQBdAAAABdIAAOXQAABdhdAAIiRAAQhdAAAAhdIAAuXQAAhdBdAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4E4D7").s().p("AhHIpQheAAAAhdIAAuXQAAhdBeAAICPAAQBeAAAABdIAAOXQAABdheAAg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.6,-56.4,35.3,112.8);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.788)").s().p("AB5BeQgMAAh9grQh+grAAgDQAAgOAggJQAWgGBWgTQAmgKAKgQQANgWAEgCQAOAKAXAXIAgABQALALAAAuQAAARgEAYQgEAbgCAcg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.3,-9.4,28.7,18.9);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.788)").s().p("AD4DUIhxAAQhBgKgkgQIgNgFIgDABIgSAAQgGgCAAgEIgVAAQgGgFAAgOQAAg3AWghQA4hUAMgXQAKgRAigcQAnghAKgMQAJgLAYgiQAXgfARgHQAOgCASAqQASApAJAfQAjAsAJATQALAYAHBAQAIBBgNAwQgNAvhJAAIgFAAgAgUCkIADAAIgDgBgAijCwIhqAAQgLgFgfgVQgjgYAAgIQAAgFAmgcQAngcAAgeQAAgNANgOIASgTQAKgSAFgHQAJgOAMgJQAUgQApBZQAmBVAAAgQAAAZgEAJQgJAVgcAAQgJAAgKgCg");
	this.shape.setTransform(0.7,-0.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34,-21.5,69.6,42.5);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A8MbfMAAAg29MA4ZAAAMAAAA29g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.g2();
	this.instance.setTransform(-101,-234.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101,-234.5,202,469);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.g1();
	this.instance.setTransform(-102,-236);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-102,-236,204,472);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.back();
	this.instance.setTransform(-400,-234.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-400,-234.5,800,469);


(lib.Анимация21 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("В", "15px 'Days Sans Black'", "#FF0000");
	this.text.lineHeight = 15;
	this.text.setTransform(-8.4,-10.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.4,-10.6,17,21.3);


(lib.Анимация20 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("В", "15px 'Days Sans Black'", "#FF0000");
	this.text.lineHeight = 15;
	this.text.setTransform(-8.4,-10.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.4,-10.6,17,21.3);


(lib.Анимация19 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("В", "15px 'Days Sans Black'", "#FF0000");
	this.text.lineHeight = 15;
	this.text.setTransform(-8.4,-10.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.4,-10.6,17,21.3);


(lib.Анимация18 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("Ы", "15px 'Days Sans Black'", "#FF0000");
	this.text.lineHeight = 15;
	this.text.setTransform(-10.8,-10.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.8,-10.6,21.6,21.3);


(lib.Анимация17 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("Ы", "15px 'Days Sans Black'", "#FF0000");
	this.text.lineHeight = 15;
	this.text.setTransform(-10.8,-10.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.8,-10.6,21.6,21.3);


(lib.Анимация16 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("Ы", "15px 'Days Sans Black'", "#FF0000");
	this.text.lineHeight = 15;
	this.text.setTransform(-10.8,-10.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.8,-10.6,21.6,21.3);


(lib.Анимация15 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("Б", "15px 'Days Sans Black'", "#FF0000");
	this.text.lineHeight = 15;
	this.text.setTransform(-8.3,-10.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.3,-10.6,16.7,21.3);


(lib.Анимация14 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("Б", "15px 'Days Sans Black'", "#FF0000");
	this.text.lineHeight = 15;
	this.text.setTransform(-8.3,-10.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.3,-10.6,16.7,21.3);


(lib.Анимация13 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("Б", "15px 'Days Sans Black'", "#FF0000");
	this.text.lineHeight = 15;
	this.text.setTransform(-8.3,-10.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.3,-10.6,16.7,21.3);


(lib.Анимация12 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("И", "15px 'Days Sans Black'", "#FF0000");
	this.text.lineHeight = 15;
	this.text.setTransform(-8.7,-10.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.7,-10.6,17.6,21.3);


(lib.Анимация11 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("И", "15px 'Days Sans Black'", "#FF0000");
	this.text.lineHeight = 15;
	this.text.setTransform(-8.7,-10.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.7,-10.6,17.6,21.3);


(lib.Анимация10 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("И", "15px 'Days Sans Black'", "#FF0000");
	this.text.lineHeight = 15;
	this.text.setTransform(-8.7,-10.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.7,-10.6,17.6,21.3);


(lib.Анимация9 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("Р", "15px 'Days Sans Black'", "#FF0000");
	this.text.lineHeight = 15;
	this.text.setTransform(-8.3,-10.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.3,-10.6,16.7,21.3);


(lib.Анимация8 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("Р", "15px 'Days Sans Black'", "#FF0000");
	this.text.lineHeight = 15;
	this.text.setTransform(-8.3,-10.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.3,-10.6,16.7,21.3);


(lib.Анимация7 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("Р", "15px 'Days Sans Black'", "#FF0000");
	this.text.lineHeight = 15;
	this.text.setTransform(-8.3,-10.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.3,-10.6,16.7,21.3);


(lib.Анимация6 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("А", "15px 'Days Sans Black'", "#FF0000");
	this.text.lineHeight = 15;
	this.text.setTransform(-8.5,-10.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.5,-10.6,17.1,21.3);


(lib.Анимация5 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("А", "15px 'Days Sans Black'", "#FF0000");
	this.text.lineHeight = 15;
	this.text.setTransform(-8.5,-10.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.5,-10.6,17.1,21.3);


(lib.Анимация4 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("А", "15px 'Days Sans Black'", "#FF0000");
	this.text.lineHeight = 15;
	this.text.setTransform(-8.5,-10.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.5,-10.6,17.1,21.3);


(lib.Анимация3 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("Й", "15px 'Days Sans Black'", "#FF0000");
	this.text.lineHeight = 15;
	this.text.setTransform(-8.7,-10.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.7,-10.6,17.6,21.3);


(lib.Анимация2 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("Й", "15px 'Days Sans Black'", "#FF0000");
	this.text.lineHeight = 15;
	this.text.setTransform(-8.7,-10.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.7,-10.6,17.6,21.3);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("Й", "15px 'Days Sans Black'", "#FF0000");
	this.text.lineHeight = 15;
	this.text.setTransform(-8.7,-10.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.7,-10.6,17.6,21.3);


(lib.Символ29 = function() {
	this.initialize();

	// Символ 30
	this.instance = new lib.Символ30();
	this.instance.setTransform(-7.9,-0.4);

	// Слой 1
	this.instance_1 = new lib.Символ28();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.1,-55.4,34.3,111.8);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},6).to({alpha:1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.5,-16,73.1,32.1);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CF0C00").ss(1,1,1).p("AB9AAQAAAmglAaQgkAbg0AAQgzAAglgbQgkgaAAgmQAAglAkgbQAlgaAzAAQA0AAAkAaQAlAbAAAlg");
	this.shape.setTransform(-10.6,-300.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AhYBAQgkgaAAgmQAAglAkgbQAlgaAzAAQA0AAAkAaQAlAbAAAlQAAAmglAaQgkAbg0AAQgzAAglgbg");
	this.shape_1.setTransform(-10.6,-300.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(13));

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},6).to({alpha:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-310.4,88.8,375.2);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ23();
	this.instance.setTransform(0.3,0.4);

	// Слой 1
	this.instance_1 = new lib.Символ21();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.1,-55.9,34.3,111.8);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},5).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-9.4,28.7,18.9);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("Ah4hYIDwAAIAACxIjwAAg");
	this.shape.setTransform(-294.8,-20.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,255,0,0.788)").s().p("Ah4BZIAAixIDxAAIAACxg");
	this.shape_1.setTransform(-294.8,-20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(11));

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},5).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-307.9,-30.7,343.4,51.7);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Й
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(266.4,-39.9);

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.setTransform(266.4,80);
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация3("synched",0);
	this.instance_2.setTransform(266.4,80);
	this.instance_2._off = true;

	this.text = new cjs.Text("Й", "15px 'Days Sans Black'", "#FF0000");
	this.text.lineHeight = 15;
	this.text.setTransform(257.7,129.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},27).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_2}]},55).to({state:[{t:this.text}]},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},27).to({_off:true,y:80},9).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27).to({_off:false},9).to({_off:true},55).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(36).to({_off:false},55).to({_off:true,x:257.7,y:129.4,text:"Й",font:NaN,color:NaN,textAlign:0,lineHeight:15,lineWidth:14},8).wait(1));

	// А
	this.instance_3 = new lib.Анимация4("synched",0);
	this.instance_3.setTransform(266.3,-57.7);

	this.instance_4 = new lib.Анимация5("synched",0);
	this.instance_4.setTransform(266.3,62.2);
	this.instance_4._off = true;

	this.instance_5 = new lib.Анимация6("synched",0);
	this.instance_5.setTransform(266.3,62.2);
	this.instance_5._off = true;

	this.text_1 = new cjs.Text("А", "15px 'Days Sans Black'", "#FF0000");
	this.text_1.lineHeight = 15;
	this.text_1.setTransform(257.8,111.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},22).to({state:[{t:this.instance_4}]},9).to({state:[{t:this.instance_5}]},55).to({state:[{t:this.text_1}]},8).to({state:[{t:this.text_1}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:0},22).to({_off:true,y:62.2},9).wait(69));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(22).to({_off:false},9).to({_off:true},55).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(31).to({_off:false},55).to({_off:true,x:257.8,y:111.6,text:"А",font:NaN,color:NaN,textAlign:0,lineHeight:15,lineWidth:13},8).wait(6));

	// Р
	this.instance_6 = new lib.Анимация7("synched",0);
	this.instance_6.setTransform(266.9,-61.4);

	this.instance_7 = new lib.Анимация8("synched",0);
	this.instance_7.setTransform(266.9,48.5);
	this.instance_7._off = true;

	this.instance_8 = new lib.Анимация9("synched",0);
	this.instance_8.setTransform(266.9,48.5);
	this.instance_8._off = true;

	this.text_2 = new cjs.Text("Р", "15px 'Days Sans Black'", "#FF0000");
	this.text_2.lineHeight = 15;
	this.text_2.setTransform(258.6,108);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},18).to({state:[{t:this.instance_7}]},9).to({state:[{t:this.instance_8}]},55).to({state:[{t:this.text_2}]},8).to({state:[{t:this.text_2}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({startPosition:0},18).to({_off:true,y:48.5},9).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(18).to({_off:false},9).to({_off:true},55).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(27).to({_off:false},55).to({_off:true,x:258.6,y:108,text:"Р",font:NaN,color:NaN,textAlign:0,lineHeight:15,lineWidth:13},8).wait(10));

	// И
	this.instance_9 = new lib.Анимация10("synched",0);
	this.instance_9.setTransform(266.7,-56.4);

	this.instance_10 = new lib.Анимация11("synched",0);
	this.instance_10.setTransform(266.7,34.8);
	this.instance_10._off = true;

	this.instance_11 = new lib.Анимация12("synched",0);
	this.instance_11.setTransform(266.7,34.8);
	this.instance_11._off = true;

	this.text_3 = new cjs.Text("И", "15px 'Days Sans Black'", "#FF0000");
	this.text_3.lineHeight = 15;
	this.text_3.setTransform(257.9,113);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_9}]},13).to({state:[{t:this.instance_10}]},9).to({state:[{t:this.instance_11}]},55).to({state:[{t:this.text_3}]},8).to({state:[{t:this.text_3}]},14).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({startPosition:0},13).to({_off:true,y:34.8},9).wait(78));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(13).to({_off:false},9).to({_off:true},55).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(22).to({_off:false},55).to({_off:true,x:257.9,y:113,text:"И",font:NaN,color:NaN,textAlign:0,lineHeight:15,lineWidth:14},8).wait(15));

	// Б
	this.instance_12 = new lib.Анимация13("synched",0);
	this.instance_12.setTransform(266.3,-56.4);

	this.instance_13 = new lib.Анимация14("synched",0);
	this.instance_13.setTransform(266.3,21.3);
	this.instance_13._off = true;

	this.instance_14 = new lib.Анимация15("synched",0);
	this.instance_14.setTransform(266.3,21.3);
	this.instance_14._off = true;

	this.text_4 = new cjs.Text("Б", "15px 'Days Sans Black'", "#FF0000");
	this.text_4.lineHeight = 15;
	this.text_4.setTransform(257.9,113);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_12}]},9).to({state:[{t:this.instance_13}]},9).to({state:[{t:this.instance_14}]},55).to({state:[{t:this.text_4}]},8).to({state:[{t:this.text_4}]},18).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({startPosition:0},9).to({_off:true,y:21.3},9).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(9).to({_off:false},9).to({_off:true},55).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(18).to({_off:false},55).to({_off:true,x:257.9,y:113,text:"Б",font:NaN,color:NaN,textAlign:0,lineHeight:15,lineWidth:13},8).wait(19));

	// Ы
	this.instance_15 = new lib.Анимация16("synched",0);
	this.instance_15.setTransform(266,-61.2);

	this.instance_16 = new lib.Анимация17("synched",0);
	this.instance_16.setTransform(266.6,6.8);
	this.instance_16._off = true;

	this.instance_17 = new lib.Анимация18("synched",0);
	this.instance_17.setTransform(266.6,6.8);
	this.instance_17._off = true;

	this.text_5 = new cjs.Text("Ы", "15px 'Days Sans Black'", "#FF0000");
	this.text_5.lineHeight = 15;
	this.text_5.setTransform(255.2,108.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_16}]},9).to({state:[{t:this.instance_17}]},55).to({state:[{t:this.text_5}]},8).to({state:[{t:this.text_5}]},23).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({startPosition:0},4).to({_off:true,x:266.6,y:6.8},9).wait(87));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(4).to({_off:false},9).to({_off:true},55).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(13).to({_off:false},55).to({_off:true,x:255.2,y:108.2,text:"Ы",font:NaN,color:NaN,textAlign:0,lineHeight:15,lineWidth:18},8).wait(24));

	// В
	this.instance_18 = new lib.Анимация19("synched",0);
	this.instance_18.setTransform(266.4,-58.4);

	this.instance_19 = new lib.Анимация20("synched",0);
	this.instance_19.setTransform(266.4,-6.7);
	this.instance_19._off = true;

	this.instance_20 = new lib.Анимация21("synched",0);
	this.instance_20.setTransform(266.4,-6.7);
	this.instance_20._off = true;

	this.text_6 = new cjs.Text("В", "15px 'Days Sans Black'", "#FF0000");
	this.text_6.lineHeight = 15;
	this.text_6.setTransform(257.9,111);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18}]}).to({state:[{t:this.instance_19}]},9).to({state:[{t:this.instance_20}]},55).to({state:[{t:this.text_6}]},8).to({state:[{t:this.text_6}]},27).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({_off:true,y:-6.7},9).wait(91));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({_off:false},9).to({_off:true},55).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(9).to({_off:false},55).to({_off:true,x:257.9,y:111,text:"В",font:NaN,color:NaN,textAlign:0,lineHeight:15,lineWidth:13},8).wait(28));

	// Слой 9
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],-19.6,0,19.7,0).s().p("AjDPXIAA+tIGHAAIAAetg");
	this.shape.setTransform(264.4,35.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(244.8,-72,39.3,206);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(0,0,2.493,2.493);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(610.1,-179.6,98,513.4);


(lib.Символ10копия = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ16();
	this.instance.setTransform(26.1,9.2);

	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(3.7,-91.2);

	// Слой 1
	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(0,10);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-303.7,-224.5,404.7,469);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(0,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0},14).to({y:10},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-224.5,202,469);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 3
	this.instance = new lib.Символ22();
	this.instance.setTransform(-176,-100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-98},9,cjs.Ease.get(1)).to({x:-176},10,cjs.Ease.get(-1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ10();

	this.instance_2 = new lib.Символ10копия();
	this.instance_2.setTransform(0,0,1.143,1.143);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,scaleX:1.14,scaleY:1.14},9).to({_off:false,scaleX:1,scaleY:1},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},9).to({_off:true,scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193.2,-224.5,294.2,469);


(lib.Символ7копия = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ27();
	this.instance.setTransform(-29.5,10.2);

	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(-23.1,-97.4);

	// Слой 1
	this.instance_2 = new lib.Символ8();

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-102,-407.4,204,643.4);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:10},14).to({y:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102,-236,204,472);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 3
	this.instance = new lib.Символ29();
	this.instance.setTransform(157.6,-100.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:88.8},9,cjs.Ease.get(1)).to({x:157.6},10,cjs.Ease.get(-1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ7();

	this.instance_2 = new lib.Символ7копия();
	this.instance_2.setTransform(0,0,1.11,1.11);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,scaleX:1.11,scaleY:1.11},9).to({_off:false,scaleX:1,scaleY:1},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},9).to({_off:true,scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102,-236,268.8,472);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5.7},39).to({rotation:0},40).to({rotation:-7.5},41).to({rotation:0},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-234.5,800,469);


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
		this.but1.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_1.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_1()
		{
		this.girl1.gotoAndPlay(1);
		}
		
		this.but1.addEventListener("mouseout", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
		this.girl1.gotoAndPlay(10);
		}
		
		
		this.but2.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
		this.girl2.gotoAndPlay(1);
		}
		
		this.but2.addEventListener("mouseout", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4()
		{
		this.girl2.gotoAndPlay(10);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 6
	this.but1 = new lib.Символ14();
	this.but1.setTransform(505.5,153);
	new cjs.ButtonHelper(this.but1, 0, 1, 2, false, new lib.Символ14(), 3);

	this.but2 = new lib.Символ14();
	this.but2.setTransform(146.5,153);
	new cjs.ButtonHelper(this.but2, 0, 1, 2, false, new lib.Символ14(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.but2},{t:this.but1}]}).wait(1));

	// Слой 4
	this.instance = new lib.Символ12();
	this.instance.setTransform(-338.9,64.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.girl1 = new lib.Символ6();
	this.girl1.setTransform(523,259);

	this.timeline.addTween(cjs.Tween.get(this.girl1).wait(1));

	// Слой 2
	this.girl2 = new lib.Символ9();
	this.girl2.setTransform(139,260.5);

	this.timeline.addTween(cjs.Tween.get(this.girl2).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(240,37.3,800,620.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;