(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/ded1.png", id:"ded1"},
		{src:"images/fon01.jpg", id:"fon01"},
		{src:"images/kran_02.png", id:"kran_02"},
		{src:"images/kran_05.png", id:"kran_05"},
		{src:"images/kran_08.png", id:"kran_08"},
		{src:"images/train.png", id:"train"}
	]
};



// symbols:



(lib.ded1 = function() {
	this.initialize(img.ded1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,211,309);


(lib.fon01 = function() {
	this.initialize(img.fon01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1079,357);


(lib.kran_02 = function() {
	this.initialize(img.kran_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,64);


(lib.kran_05 = function() {
	this.initialize(img.kran_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,42);


(lib.kran_08 = function() {
	this.initialize(img.kran_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,40);


(lib.train = function() {
	this.initialize(img.train);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,330,135);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AEmAkIAbhGIANAAIgcBGgADKAfQgJgFgEgHQgEgIABgQQgBgLACgJQACgFAEgEIA/AAIADADQAFAHAAAVQAAAOgEAHQgDAIgJAFQgIAFgQAAQgOAAgIgFgADcgXQgCACAAAIIAAAPQAAAIACADQABACADAAQAEAAACgCQABgDAAgIIAAgPQAAgHgCgDQgCgCgDAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABgABxAfQgIgEgEgIQgFgJAAgKIAhAAIABAKQAAAAAAABQAAAAAAABQAAABABAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAABAAQAAAAABAAQAAgBABAAIABgEIAAgdQgCAGgFACQgFADgHAAQgJAAgHgFQgHgFgCgGIgBgKIAhAAIABADQABABAAAAQABABAAAAQABAAAAAAQABAAAAAAQAEAAACgCIABgDIAhAAIAAApQgBAIgFAGQgFAIgIADQgJAEgMAAQgNAAgJgFgAgFAeQgLgFgDgKQgDgJAAgSIAAgWIAgAAIAAAiQAAAIACADQABADADgBQAEABACgDQABgDAAgJIAAgQIAiAAIAAAEQAAATgDAIQgDAJgKAHQgJAFgPABQgPgBgHgFgAhcAgQgIgDgEgHQgGgHgBgIIgBgbIAAgOIAiAAIAAAhQAAAJABADQABADADgBQAEAAABgCQABgDAAgKIAAggIAiAAIAAAOIgBAbQgBAIgEAGQgGAIgIADQgJAEgLAAQgKAAgJgEgAkWAeQgIgFgDgHQgDgIAAgRIAAgKIAgAAIAAATQAAAJACACQABACADAAQADAAACgDQACgDAAgKIAAgJQAAgIgDgDQgBgEgDAAQgEgBgKAAIAAgIIAuAAIAEADQADAGAAAVQAAAOgDAIQgEAJgIAEQgKAFgOAAQgOgBgKgFgAFVAfQgFgDgCgEQgCgEAAgJIAAgWQAAgJADgEQABgFAGgDIAHgCIAOAAIAIACQAGADABAFQADAFAAAIIAAAWQAAAIgCAEQgCAFgFADQgGADgJABQgKgBgGgDgAFigWIgBAlIABAGQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAQABAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBIABgGIgBglQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAABgAieAhIAAg1IgLAAIAAA1IghAAIAAhDIBNAAIAABDgAlMAhIAAg5IgSA5IgeAAIAAhDIBMAAIAABDgAEZgeQgEgCgCgCIApAAIgFADQgFAEgKAAQgKAAgFgDg");
	this.shape.setTransform(38.1,10.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3333").s().p("AFmAgIAHgBIAHABgAFKAgIAYg+IANAAIgZA+gAEcAgIgCgDQgCgEAAgJIAAgVQAAgKACgFQACgEAGgDQAGgDAIAAQAJAAAGADQAGADACAFQABAEAAAKIAAAUIgBANIgCAEgAEtgRIAAAGIAAAmQABAAAAAAQAAABAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAIABgGIAAgmQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQAAAAgBABgADKAgIAGgFQgGgDgDgGQgEgHAAgKQAAgOAKgJQAJgIATAAQAVAAAJAJQAIAJAAAOQAAALgDAFQgCAEgJAFQAEACAEADgADlgIIgBAIIAAAJQAAAGABACQABABAAAAQAAABABAAQAAAAABAAQAAAAABAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAABgBIABgJIAAgIQAAgGgBgCQgCgCgDAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAABAAAAgACXAgIAAgGIAAgYQAAgHgBgCQgCgDgDAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBABAAAAQgDACAAAHIAAAZIAAAGIggAAIgBgJIAAgKQAAgNACgGQAAgHAFgFQAFgGAIgDQAIgDAKAAQANAAAJADQAIAEAFAHQAEAHABAHIABAbIAAAHgAgNAgIAAgPQAAgPABgFQABgHAFgGQAFgHAGgEQAJgEALAAQAPAAAJAHQAKAFAEAJQADAJAAAQIAAAMIgiAAIAAgWQAAgJgCgCQgBgCgEAAQgDAAgCADQgBADAAAIIAAAagAg6AgIAAgcQAAgHgBgDQgCgCgDAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBABQgBACAAAIIAAAcIgiAAIAAgHIABgaQABgJAFgGQAEgHAJgEQAIgEALAAQALAAAIAEQAIADAGAHQAFAHABAIIABAbIAAAHgAjCAgIAAg7IAiAAIAAAsIAKAAIAAgsIAiAAIAAA7gAkDAgIAAgLQAMAAADgBQACgBACgDQABgDAAgGIAAgHQAAgGgBgCQgCgCgDAAQgDAAgBACQgCADAAAFIAAALIggAAIAAgLQAAgRAIgHQAJgGASAAQAYAAAIAJQAIAJAAAOQAAALgDAFQgDAFgHAEQAFACADADgAlzAgIAAg8IAdAAIAAA5IATg5IAcAAIAAA8g");
	this.shape_1.setTransform(37.2,3.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76.2,13.7);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AidBeQg4g1gBgDIABgOIAGgBQAEgCAHAAQAPAAADAIQACAHABAAQALAAANgCIAAgPQAAgaABgJQADgZALgIQAGAFADAEQACAFAAAJQgBALgEAtQAggIAtgSQBdgkASgEQAYgOgCgzQgCgtAWABIAABSIACABIAzAAIgBgaQgBgSAMgFQAPAPAJAkQAIAnAUAWQgZATkhB+QgCAAg4g0gABqgIIgBABQgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAABIgCABIAdgGQgRgGgGgBg");
	this.shape.setTransform(21.5,14.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,43,29.4);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AiVCMIgKgGIAAAAQgIgDgCgPIAAgTIAAgPIgGgPIgPhEQAAgTAHgOQAYgGAhgMQBHgZAqgTQAygXA4gQIAJgEQAJAGANAAIAJgBQAfAoAaBgIgHADIACADIADgBIACAAQABAAAAAIQAAAMj+BiIACAEIgEALgAhpB3IACAAIAMgJIgOAJgAiVB3IACAAIgCgCgACjAPIACgBIAAAAIgCABg");
	this.shape.setTransform(19.2,14);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38.3,28.1);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.kran_02();
	this.instance.setTransform(0,88.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAHeIAAu7");
	this.shape.setTransform(16,47.8);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1,32,153.2);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AErAyIAAgOIgkAAIAAAOIgPAAIAAggIAEAAQAEgKADgPQACgSAAgUIAAgDIAxAAIAABCIAEAAIAAAggAEZgeQAAAZgFAXIAMAAIAAgxIgHAAgAByAiQgGgEgCgGQgCgGAAgMIAAgXIAAgOQABgFADgEQADgEAGgDQAFgCAHAAQAKAAAGADQAHAEACAGQACAGAAALIAAAJIgWAAIAAgPIgBgIQAAgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABgBAAIAAAJIAAAlIAAAIQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIABgIIAAgLIAWAAIAAADQAAANgCAGQgCAFgGAEQgGAEgKAAQgJAAgHgDgAjJAjQgFgCgDgEQgEgFAAgFIgBgSIAAgNIABgSQAAgGAEgEQADgEAFgDQAGgCAHAAQAGAAAGACQAGACADAFQADAEABAFIABATIAAANIgBASQgBAFgDAEQgDAFgGACQgFACgHAAQgHAAgGgCgAi/giIAAAIIAAAmIAAAJQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABgBIAAgJIAAgmIAAgHQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgDABgADOAjQgFgCgDgDQgEgDgBgEIgBgIIAAgPIgGAAIAAAkIgWAAIAAhUIAWAAIAAAfIAGAAQAAgLABgFQABgFADgDQAEgDAFgCQAEgBAIAAQAHAAAFABQAFACADADQADAEABAGIABATIAAANIgBATQgBAFgDAEQgDAEgFACQgFABgHAAQgHAAgFgBgADXghQgBABAAAGIAAAqIABAFQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIABgHIAAgpIgBgHQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAAAABgAFdAkIgBgQIgIAAIgBAQIgXAAIALhUIAgAAIANBUgAFcAGIgEgjIgEAjIAIAAIAAAAgAgkAkIAAhUIAXAAIAABUgAhfAkIAAhUIAWAAIAAAeIAEAAQAKAAAGABQAFABACAEQADAFAAAHIAAAQQAAAJgDAFQgCAEgFABIgQABgAhJAVIAGgBQACgBAAgGIAAgMQAAgDgBgCQgCgBgFAAgAh+AkIAAgkIgGAAIAAAkIgWAAIAAhUIAWAAIAAAfIAGAAIAAgfIAXAAIAABUgAkBAkIAAhUIAmAAIAAARIgQAAIAABDgAkcAkIgBgQIgIAAIgBAQIgXAAIALhUIAgAAIANBUgAkdAGIgEgjQgEAZAAAKIAIAAIAAAAgAlzAkIAAhUIAWAAQAKAAAFACQAGACADAFQADAFAAALQAAAHgCADQgCADgHACQAIABACAFQADACAAAIIAAAIQAAAJgCAEQgCAEgEABQgEACgOAAgAldAVIAGgBQABgCAAgFIAAgIQAAgFgBAAIgGgBgAldgOIACAAQABAAAAAAQABAAABgBQAAAAAAAAQABAAAAgBQABgBAAgIIgBgFIgCgCIgEgBg");
	this.shape.setTransform(42,5.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.8,0.9,74.6,10.2);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Aa4U4Qh2h3AAioQAAhTAdhIIh2AAQAdBIAABTQAACoh3B3Qh2B2ioAAQioAAh3h2Qh2h3AAioQAAhTAdhII1gAAQAdBIAABTQAACoh2B3Qh3B2ioAAQioAAh2h2Qh3h3AAioQAAhTAehIIh3AAQAdBIAABTQAACoh2B3Qh3B2ioAAQioAAh2h2Qh3h3AAioQAAhTAehIIpYAAQgUAAAAgUIAAhaInCAAQgUAAAAgUIAAiMQAAgUAUAAIHCAAIAA/1QAAgUAUAAMBbiAAAQAUAAAAAUIAAfhIEJAAQAUAAAAAUIAACwQAAAUgUAAIkJAAIAABKQAAAUgUAAIp/AAQAdBIAABTQAACoh3B3Qh2B2ioAAQioAAh3h2g");
	this.shape.setTransform(285.7,145.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47,0,665.5,291);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF66").s().p("AJ3AlIgEhGIAqAAIgEBGgAI/AlIAAhHIAnAAIAABHgAHXAlIAAhHIAnAAIAAAyIAGAAQASAAAKACQAJACAFAIIADAHIAAACgAFuAlIAAhGIAnAAIAAAzIAMAAIAAgzIAnAAIAABGgAE5AlIAAghQAAgJgBgDQgCgDgDAAQgDAAgCACQgCADAAAKIAAAhIgnAAIAAgKQAAgXACgHQABgJAFgIQAGgIAJgEQAKgEANgBQAMAAAJAEQAKAFAGAIQAGAHABAKIABAeIAAAKgAC5AlIAAhHIBDAAIAAAfIgcAAIAAAogACFAlIAAgCIgEgjIgFAjIAAACIgiAAIAKhGIA4AAIALBGgAgOAlIAAhGIAlAAQASAAAKADQAJACAGAJQAGAJAAARQAAANgEAGQgEAFgMADIAEABIAGACgAAXAYIAEAAQAGAAABgDQACgDAAgNIgBgIQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBgBIgIgBgAiVAlIAAhHIAgAAIAABDIAWhDIAhAAIAABHgAj+AlIAAhGIAnAAIAAAzIALAAIAAgzIAnAAIAABGgAlNAlIAAhGIBBAAIAAAeIgaAAIAAAbIAZAAIAAANgAl/AlIAAgXIgDAXIguAAIgDgVIAAAVIgiAAIAAhGIAzAAIAKBEIAJhEIAzAAIAABGgAoJAlIAAgCIgDgjIgFAjIAAACIgiAAIAJhGIA5AAIAKBGgAp/AlIAAgOQANAAADgBQADgBACgEQABgEAAgGIAAgHQAAgIgBgCQgCgDgDAAQgEAAgCADQgBACAAAIIAAAMIgmAAIAAgMQAAgVAKgHQAKgIAVAAQAbAAAKAKQAJALAAAQQAAANgDAFQgEAHgIAEQAFACAEADIACACg");
	this.shape.setTransform(66.9,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AEeAkQgJgEgGgIQgGgIgBgJQgBgHAAgYIAAgPIAnAAIAAAkQAAALABADQABADAEAAQAEAAABgDQABgEAAgLIAAgjIAnAAIAAAPIgBAfQgBAJgFAIQgGAIgKAEQgJAEgNAAQgMAAgKgEgAqKAiQgKgGgDgJQgDgJAAgTIAAgMIAlAAIAAAWQAAAKACADQABADAEAAQAEAAABgEQACgDAAgMIAAgLQAAgIgCgEQgCgEgEgBQgEgCgLAAIAAgHIA3AAIABACQAEAHAAAYQAAAQgEAJQgEAKgKAGQgKAFgQAAQgRAAgLgGgAJ4AlIAAgeIAjAAIAAAegAJBAlIAAhMIAnAAIAABMgAHZAlIAAhMIBaAAIABANIAAAcQAAAQgFAIQgEAHgJACQgJACgTAAgAIAALQAHAAADgCQACgCAAgIIAAgWQAAgJgBgCQgCgCgJAAgAGiAlIAAg9IgLAAIAAA9IgnAAIAAhMIBZAAIAABMgAC6AlIAAhMIAnAAIAABMgACMAlIgCgbIgOAAIgCAbIgpAAIALhMIAiAAIgDAYIAOAAIgDgYIAiAAIAMBMgAgMAlIAAhMIBMAAQAFADADAEQAEAHAAAPIAAALQAAAQgDAHQgDAHgIADQgIADgXAAgAAZALQAIAAACgDQACgCAAgHIAAgOQAAgKgCgCQgCgCgIAAgAhdAlIAAhDIgVBDIgiAAIAAhMIBXAAIAABMgAjKAlIAAg9IgMAAIAAA9IgnAAIAAhMIBaAAIAABMgAlLAlIAAhMIA/AAIAAAPIgYAAIAAAfIAcAAIAAAegAl9AlIAAhMIAiAAIAABMgAmjAlIgLhMIAuAAIgLBMgAnTAlIAAhMIAiAAIAABMgAoCAlIgCgbIgOAAIgCAbIgoAAIAKhMIAiAAIgCAYIANAAIgCgYIAiAAIALBMgAJ7AAIgCgnIAhAAIgCAng");
	this.shape_1.setTransform(66.8,11.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,133.9,15.7);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AiVCMIgKgGIAAAAQgIgDgCgPIAAgTIAAgPIgGgPIgPhEQAAgTAHgOQAYgGAhgMQBHgZAqgTQAygXA4gQIAJgEQAJAGANAAIAJgBQAfAoAaBgIgHADIACADIADgBIACAAQABAAAAAIQAAAMj+BiIACAEIgEALgAhpB3IACAAIAMgJIgOAJgAiVB3IACAAIgCgCgACjAPIACgBIAAAAIgCABg");
	this.shape.setTransform(19.2,14);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38.3,28.1);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AidBeQg4g1gBgDIABgOIAGgBQAEgCAHAAQAPAAADAIQACAHABAAQALAAANgCIAAgPQAAgaABgJQADgZALgIQAGAFADAEQACAFAAAJQgBALgEAtQAggIAtgSQBdgkASgEQAYgOgCgzQgCgtAWABIAABSIACABIAzAAIgBgaQgBgSAMgFQAPAPAJAkQAIAnAUAWQgZATkhB+QgCAAg4g0gABqgIIgBABQgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAABIgCABIAdgGQgRgGgGgBg");
	this.shape.setTransform(21.5,14.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,43,29.4);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ah0BwQgxguAAhCQAAhBAxguQAwgvBEAAQBFAAAwAvQAxAuAABBQAABCgxAuQgwAvhFAAQhEAAgwgvg");
	this.shape.setTransform(16.6,16);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,33.2,31.9);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AovDlQgUAAAAgTIAAkyIgEgBIgEgCIihAtICpiZIAAgCQAAgTAUgBIUIAAQAUABAAATIAAGjQAAATgUAAg");
	this.shape.setTransform(74.1,23);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.8,0,149.9,46);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.kran_05();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38,42);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.kran_08();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38,40);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.fon01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1079,357);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.train();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,330,135);


(lib.Анимация13 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AEmAkIAbhGIANAAIgcBGgADKAfQgJgFgEgHQgEgIABgQQgBgLACgJQACgFAEgEIA/AAIADADQAFAHAAAVQAAAOgEAHQgDAIgJAFQgIAFgQAAQgOAAgIgFgADcgXQgCACAAAIIAAAPQAAAIACADQABACADAAQAEAAACgCQABgDAAgIIAAgPQAAgHgCgDQgCgCgDAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABgABxAfQgIgEgEgIQgFgJAAgKIAhAAIABAKQAAAAAAABQAAAAAAABQAAABABAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAABAAQAAAAABAAQAAgBABAAIABgEIAAgdQgCAGgFACQgFADgHAAQgJAAgHgFQgHgFgCgGIgBgKIAhAAIABADQABABAAAAQABABAAAAQABAAAAAAQABAAAAAAQAEAAACgCIABgDIAhAAIAAApQgBAIgFAGQgFAIgIADQgJAEgMAAQgNAAgJgFgAgFAeQgLgFgDgKQgDgJAAgSIAAgWIAgAAIAAAiQAAAIACADQABADADgBQAEABACgDQABgDAAgJIAAgQIAiAAIAAAEQAAATgDAIQgDAJgKAHQgJAFgPABQgPgBgHgFgAhcAgQgIgDgEgHQgGgHgBgIIgBgbIAAgOIAiAAIAAAhQAAAJABADQABADADgBQAEAAABgCQABgDAAgKIAAggIAiAAIAAAOIgBAbQgBAIgEAGQgGAIgIADQgJAEgLAAQgKAAgJgEgAkWAeQgIgFgDgHQgDgIAAgRIAAgKIAgAAIAAATQAAAJACACQABACADAAQADAAACgDQACgDAAgKIAAgJQAAgIgDgDQgBgEgDAAQgEgBgKAAIAAgIIAuAAIAEADQADAGAAAVQAAAOgDAIQgEAJgIAEQgKAFgOAAQgOgBgKgFgAFVAfQgFgDgCgEQgCgEAAgJIAAgWQAAgJADgEQABgFAGgDIAHgCIAOAAIAIACQAGADABAFQADAFAAAIIAAAWQAAAIgCAEQgCAFgFADQgGADgJABQgKgBgGgDgAFigWIgBAlIABAGQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAQABAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBIABgGIgBglQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAABgAieAhIAAg1IgLAAIAAA1IghAAIAAhDIBNAAIAABDgAlMAhIAAg5IgSA5IgeAAIAAhDIBMAAIAABDgAEZgeQgEgCgCgCIApAAIgFADQgFAEgKAAQgKAAgFgDg");
	this.shape.setTransform(0,3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3333").s().p("AFmAgIAHgBIAHABgAFKAgIAYg+IANAAIgZA+gAEcAgIgCgDQgCgEAAgJIAAgVQAAgKACgFQACgEAGgDQAGgDAIAAQAJAAAGADQAGADACAFQABAEAAAKIAAAUIgBANIgCAEgAEtgRIAAAGIAAAmQABAAAAAAQAAABAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAIABgGIAAgmQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQAAAAgBABgADKAgIAGgFQgGgDgDgGQgEgHAAgKQAAgOAKgJQAJgIATAAQAVAAAJAJQAIAJAAAOQAAALgDAFQgCAEgJAFQAEACAEADgADlgIIgBAIIAAAJQAAAGABACQABABAAAAQAAABABAAQAAAAABAAQAAAAABAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAABgBIABgJIAAgIQAAgGgBgCQgCgCgDAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAABAAAAgACXAgIAAgGIAAgYQAAgHgBgCQgCgDgDAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBABAAAAQgDACAAAHIAAAZIAAAGIggAAIgBgJIAAgKQAAgNACgGQAAgHAFgFQAFgGAIgDQAIgDAKAAQANAAAJADQAIAEAFAHQAEAHABAHIABAbIAAAHgAgNAgIAAgPQAAgPABgFQABgHAFgGQAFgHAGgEQAJgEALAAQAPAAAJAHQAKAFAEAJQADAJAAAQIAAAMIgiAAIAAgWQAAgJgCgCQgBgCgEAAQgDAAgCADQgBADAAAIIAAAagAg6AgIAAgcQAAgHgBgDQgCgCgDAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBABQgBACAAAIIAAAcIgiAAIAAgHIABgaQABgJAFgGQAEgHAJgEQAIgEALAAQALAAAIAEQAIADAGAHQAFAHABAIIABAbIAAAHgAjCAgIAAg7IAiAAIAAAsIAKAAIAAgsIAiAAIAAA7gAkDAgIAAgLQAMAAADgBQACgBACgDQABgDAAgGIAAgHQAAgGgBgCQgCgCgDAAQgDAAgBACQgCADAAAFIAAALIggAAIAAgLQAAgRAIgHQAJgGASAAQAYAAAIAJQAIAJAAAOQAAALgDAFQgDAFgHAEQAFACADADgAlzAgIAAg8IAdAAIAAA5IATg5IAcAAIAAA8g");
	this.shape_1.setTransform(-0.9,-3.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.1,-6.8,76.2,13.7);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация13("synched",0);
	this.instance.setTransform(38.1,6.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76.2,13.7);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация13("synched",0);
	this.instance.setTransform(38.1,6.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76.2,13.7);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ22();
	this.instance.setTransform(55.3,8.8,1.134,1.134,0,0,0,45,6.1);

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoWBTIAAilIQtAAIAAClg");
	this.shape.setTransform(53.5,8.3);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,107,16.7);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.setTransform(38.1,6.8,1,1,0,0,0,38.1,6.8);

	this.instance_1 = new lib.Символ30();
	this.instance_1.setTransform(38.1,6.8,1,1,0,0,0,38.1,6.8);
	this.instance_1.alpha = 0.27;
	this.instance_1._off = true;

	this.instance_2 = new lib.Символ32();
	this.instance_2.setTransform(38.1,6.8,1,1,0,0,0,38.1,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_2}]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,alpha:0.27},19).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},19).to({_off:true,alpha:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76.2,13.7);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(48.7,7.4,1.18,1.18,0,0,0,38.1,6.8);

	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(46.7,26.4,0.679,0.679,0,0,0,66.8,7.8);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.3,-0.6,92.4,32.4);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(19.2,14,1,1,0,0,0,19.2,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.461},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.3,28.1);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(21.5,14.7,1,1,0,0,0,21.5,14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.461},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43,29.4);


(lib.Символ7 = function() {
	this.initialize();

	// kran_02.png
	this.instance = new lib.Символ24();
	this.instance.setTransform(16,139.6,1,1,0,0,0,16,75.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgpAkQgRgPAAgVQAAgUARgQQASgOAXAAQAYAAARAOQASAQAAAUQAAAVgSAPQgRAPgYAAQgXAAgSgPg");
	this.shape.setTransform(17.2,255.6);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,63.2,32,197.6);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kran_08.png
	this.instance = new lib.Символ8();
	this.instance.setTransform(19,76.4,1,1,0,0,0,19,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-3.1,x:19.8,y:76.9},1).to({regX:19.1,scaleX:1,scaleY:1,rotation:-16,x:23.1,y:79},4).to({regX:19,scaleX:1,scaleY:1,rotation:-19.3,x:23.8,y:79.5},1,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-45,x:30.3,y:83.6},8,cjs.Ease.get(1)).to({rotation:0,x:19,y:76.4},15).wait(1));

	// kran_05.png
	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(57.8,77.4,1,1,0,0,0,19,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:21.1,scaleX:1,scaleY:1,rotation:3.1,x:57.1,y:77.8},1).to({regX:18.9,regY:21,scaleX:1,scaleY:1,rotation:16,x:54.1,y:78.8},4).to({scaleX:1,scaleY:1,rotation:19.3,x:53.3,y:79.1},1,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:45,x:47.4,y:81.4},8,cjs.Ease.get(1)).to({regX:19,rotation:0,x:57.8,y:77.4},15).wait(1));

	// kran_02.png
	this.instance_2 = new lib.Символ7();
	this.instance_2.setTransform(38.8,-25.8,1,1,0,0,0,16,107.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-70.3,76.8,197.6);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(-14.3,106.8,1,1,90,0,0,74.5,23);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(88.1,22.7,1,1,0,0,0,47.9,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance},{t:this.instance_1}]},5).to({state:[{t:this.instance}]},60).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:27.5,x:64.1,y:87.1,alpha:0.5},4).to({rotation:0,x:79.7,y:23.3,alpha:1},5).wait(60).to({alpha:0.68},0).to({alpha:0.289},10).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.3,31.4,46,149.9);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ12();
	this.instance.setTransform(142.5,42.2,1,1,0,0,0,16.6,16);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({alpha:0.691},59).to({alpha:0.301},10).to({alpha:0},10).wait(1));

	// Слой 1
	this.instance_1 = new lib.ded1();
	this.instance_1.setTransform(-17.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.2,0,211,309);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(21.5,14.7,1,1,0,0,0,21.5,14.7);
	this.instance.alpha = 0.461;

	this.instance_1 = new lib.Символ29();
	this.instance_1.setTransform(21.5,14.7,1,1,0,0,0,21.5,14.7);
	this.instance_1.alpha = 0.461;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43,29.4);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(19.2,14,1,1,0,0,0,19.2,14);
	this.instance.alpha = 0.461;

	this.instance_1 = new lib.Символ28();
	this.instance_1.setTransform(19.2,14,1,1,0,0,0,19.2,14);
	this.instance_1.alpha = 0.461;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.3,28.1);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(248.3,13.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.Символ26();
	this.instance_1.setTransform(167,66.8,1,1,0,0,0,19.2,14);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(165,67.5,1,1,0,0,0,165,67.5);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,330,135);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdAwQgGgEAAgNIAAgGQABgKADgDQACgEAMgEQANgEABgBQAAgCAAgFQAAgHAAgCQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAIgBAJIAAAIIgYAAIAAgFQABgKACgFQACgFAHgEQAGgFAMAAQALAAAGAFQAHAFABAGQABAHABATIAAAqIgYAAIAAgHQgCAEgEACQgDADgGAAQgGAAgGgEgAgKASIgBAJQAAAGABACQABAAAAABQAAAAAAAAQABABAAAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBIAAgHIAAgSQgFAFgCADgABjAyIAAg4IgBgLQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAABQgBACAAAJIAAA3IgZAAIAAhSIAaAAIgBAIQADgFAEgCQAEgDAFAAQAHAAAEAEQAEADABAEIABAQIAAA5gAAeAyIAAhSIAbAAIAABSgAhQAyIAAhSIAZAAIgBALQAHgMAKgBIAAAeQgHAAgDACQgEACgBABQgBAEAAAMIAAAhgAheAyIgNAAQgEgBgDgDQgDgCgBgEIAAgQIAAgpIgFAAIAAgNIAFAAIAAgNIAZAAIAAANIAIAAIAAANIgIAAIAAArQAAAJABABQABABAHAAIAAANgAAeglIAAgOIAbAAIAAAOg");
	this.shape.setTransform(-59.4,-71.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AlEDcIAAm2IKIAAIAAG2gABBhBQABACAAAHQAAAFgBACQAAACgNAFQgMAEgDAEQgDAEAAAJIAAAHQAAANAGABQAFAEAHAAQAFAAAEgCQAEgCACgDIAAAGIAZAAIAAgpQAAgVgCgGQgBgHgHgEQgGgGgNAAQgLABgHAEQgHAEgCAFQgCAGAAAJIAAAGIAYAAIAAgJIABgJQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAgACphBIAAALIAAA5IAaAAIAAg6IgBgQQgBgEgFgDQgDgDgHgBQgGABgDACQgEACgEAFIABgIIgaAAIAABTIAZAAIAAg4QAAgJABgCQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAgABkADIAbAAIAAhTIgbAAgAgJADIAXAAIAAggQAAgMABgEQABgDADgBQAEgCAGgBIAAgeQgKACgGAMIABgMIgXAAgAg1hBIAGAAIAAAsIAAAQQABADACACQAEABAEABIAMABIAKAAIAAgMQgGAAgBgBQgBgBAAgJIAAgtIAHAAIAAgMIgHAAIAAgOIgZAAIAAAOIgGAAgABkhVIAbAAIAAgOIgbAAgAA7gLQgBgCAAgGIABgJQABgDAGgFIAAASIgBAHQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAg");
	this.shape_1.setTransform(-66.5,-66.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},70).wait(10));

	// Слой 3
	this.instance = new lib.Символ23();
	this.instance.setTransform(329,8.5,1,1,0,0,0,165,67.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:154,y:75.5},10,cjs.Ease.get(1)).wait(55).to({x:-341.9,y:259.5},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-88.3,65,44);


// stage content:



(lib.rail_nation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.style.cursor = "none";
		this.movieClip_1.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.movieClip_1.x = stage.mouseX;
			this.movieClip_1.y = stage.mouseY;
		}
		
		
		this.cursor = "none";
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

	// Слой 4
	this.instance = new lib.Символ5();
	this.instance.setTransform(205.1,38.5,1.505,1.505,0,0,0,74.5,22.9);

	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(61,60.6,0.455,0.455,0,0,0,105.6,154.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// kran
	this.movieClip_1 = new lib.Символ6();
	this.movieClip_1.setTransform(404.4,-26.4,0.673,0.673,0,0,0,38.4,114.9);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ21();
	this.instance_2.setTransform(665.5,78.8,1,1.32,0,0,0,53.5,6.2);

	this.instance_3 = new lib.Символ20();
	this.instance_3.setTransform(635,60.8,0.067,0.067,0,0,0,295.2,145.4);
	this.instance_3.alpha = 0.488;

	this.instance_4 = new lib.Символ20();
	this.instance_4.setTransform(696,60.8,0.067,0.067,0,0,0,295.2,145.4);
	this.instance_4.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// train.png
	this.instance_5 = new lib.Символ3();
	this.instance_5.setTransform(367,-25.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// fon01.jpg
	this.instance_6 = new lib.Символ4();
	this.instance_6.setTransform(388.8,162.5,0.965,0.965,0,0,0,539.5,178.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(232.3,-106.1,1041,485.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;