(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"bady.png", id:"bady"},
		{src:"choth.png", id:"choth"},
		{src:"fon1.jpg", id:"fon1"},
		{src:"hand.png", id:"hand"},
		{src:"hand2.png", id:"hand2"},
		{src:"q11.png", id:"q11"},
		{src:"q22.png", id:"q22"},
		{src:"q33.png", id:"q33"},
		{src:"q44.png", id:"q44"},
		{src:"q55.png", id:"q55"},
		{src:"q66.png", id:"q66"}
	]
};



// symbols:



(lib.bady = function() {
	this.initialize(img.bady);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,524);


(lib.choth = function() {
	this.initialize(img.choth);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,129);


(lib.fon1 = function() {
	this.initialize(img.fon1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,81);


(lib.hand2 = function() {
	this.initialize(img.hand2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,277);


(lib.q11 = function() {
	this.initialize(img.q11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,67);


(lib.q22 = function() {
	this.initialize(img.q22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8,8);


(lib.q33 = function() {
	this.initialize(img.q33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,33);


(lib.q44 = function() {
	this.initialize(img.q44);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,16);


(lib.q55 = function() {
	this.initialize(img.q55);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,12);


(lib.q66 = function() {
	this.initialize(img.q66);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,10);


(lib.Символ61 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.q33();
	this.instance.setTransform(-5.9,-21.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.9,-21.5,20,33);


(lib.Символ59 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.q44();
	this.instance.setTransform(-6,-6.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6,-6.3,15,16);


(lib.Символ58 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.q66();
	this.instance.setTransform(-4.3,-6.3,1,1,15);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.9,-6.3,13.3,12.5);


(lib.Символ57 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.q55();
	this.instance.setTransform(-6.2,-6.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.2,-6.3,15,12);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AqnFMQgLgBgIgDQgKgDgHgEQgIgFgHgGQgGgFgFgIQgEgGgEgJQgDgIgBgJQgBgJAAgKQAAgKABgKQABgJADgIQAEgJAEgGQAFgIAGgFQAHgGAIgFQAHgEAKgDQAIgDALgBQALgCALAAQANAAAKACQAKABAKADQAJADAIAEQAHAFAHAGQAGAFAFAIQAEAGAEAJQADAIABAJQACAKAAAKQAAAKgCAJQgBAJgDAIQgEAJgEAGQgFAIgGAFQgHAGgHAFQgIAEgJADQgKADgKABQgKACgNAAQgLAAgLgCgAqiDHQgIAEgGAGQgGAGgDAJQgCAJAAANQAAALACAKQADAJAGAHQAGAFAIAEQAIADAJAAQALAAAHgDQAJgEAFgFQAGgHADgJQADgKAAgLQAAgNgDgJQgDgJgGgGQgFgGgJgEQgHgDgLAAQgJAAgIADgAGxFKQgIAAAAgJIAAgaQAAgJAIAAIALAAIARACIACAAQAHABAFgEQAEgEACgEIABgEIgFAAQgQAAgLgEQgLgDgJgHQgIgHgHgKQgHgKgFgNIgVgxQgBgEACgCQACgCAFgBIAkAAQAFABADACQADACABAEIAVAxQACAHAEAEQAGADAHAAIATAAIAYg/QABgEADgCQADgCAFgBIAjAAQAEABACACQACACgBAEIgoBrQgFANgFAIQgHAKgJAHQgIAHgMAEQgLADgPABgACmFKQgIAAAAgJIAAgYQAAgJAIAAIAOAAIAPhAQAEgPAGgLQAHgMAJgIQAHgFARgHQAJgDAXgCIBFAAQAJAAAAAJIAAB2IAQAAQAIAAAAAJIAAAYQAAAJgIAAgAEKDMIgIAEQgGAFgDALIgPBAIBEAAIAAhVIgZAAQgGgBgFACgABvFKQgHgBgDgCQgDgBgDgFIgYgsQgDgGgEgDQgFgEgKABIgLAAIAAA4QAAAJgJAAIgiAAQgIAAAAgJIAAg4IgMAAQgKgBgEAEQgEADgEAGIgYAsQgCAFgDABQgEACgGABIglAAQgFAAgBgDQgCgDACgDIAYgsQAPgdAQgFIAAgDQgPgEgNgYIgXgqQgBgDABgCQACgEAEAAIAlAAQAHABADACQADACADAEIAXAqQADAGAEADQAFADAJAAIAJAAIAAg2QAAgJAIAAIAiAAQAJAAAAAJIAAA2IAIAAQAJAAAFgDQAEgDADgGIAYgqQACgEACgCQAFgCAGgBIAlAAQAEAAACAEQACACgCADIgWAqQgNAYgRAEIAAADQARAFAQAdIAYAsQABADgBADQgCADgEAAgAkpFKQgJAAAAgJIAAiXQAAgJAJAAICTAAQAHAAABAJIAAAYQgBAJgHAAIhnAAIAAAVIBMAAQAJAAAAAIIAAAZQAAAHgJABIhMAAIAAAXIBnAAQAHAAABAJIAAAYQgBAJgHAAgAobFKQgJAAABgJIAAgYQgBgJAJAAIANAAIAQhAQADgPAHgLQAGgMAKgIQAHgFAQgHQAKgDAXgCIBFAAQAJAAgBAJIAAB2IAQAAQAIAAAAAJIAAAYQAAAJgIAAgAm3DMIgIAEQgHAFgCALIgQBAIBFAAIAAhVIgZAAQgHgBgEACgAKSFBQgEAAgEgDQgEgEAAgEIAAgRQAAgFAEgDQAEgEAEgBIAYAAQAEABAEAEQAEADAAAFIAAARQAAAEgEAEQgEADgEAAgAKOELQgIAAAAgIQAAgHADgEQACgGADgDQAHgHAMgGIASgKIAHgGQACgDAAgEQAAgHgGgDQgHgEgOgBQgKAAgHAFQgFADgDAGQgEAEgCACQgEADgFAAIgeAAQgEAAgDgDQgCgCAAgEQgBgKAFgKQAGgJAJgIQAHgFATgHQAKgCAYgCQAOAAAWAEQALAEAPAJQAKAHAFAKQAGAKAAAKQAAAHgDAHQgBAHgEAEQgHAIgLAGQgcAKgDAHQgFAIgFAAgADJBUQgIAAAAgJIAAhVIgCAAIg9BVQgHAJgGAAIgpAAQgIAAAAgJIAAiVQAAgIAIAAIAkAAQAJAAAAAIIAABWIACAAIA8hWIAGgGQADgCAEAAIApAAQAJAAAAAIIAACVQAAAJgJAAgAgKBUQgJAAAAgJIAAh1IgdAAQgFAAgFACIgIAEQgHAGgCAKIgYBfQgCAJgIAAIgkAAQgEAAgCgDQgDgCABgEIAYhfQADgPAHgLQAGgMALgHQAGgGARgHQAJgDAWgBIBIAAQAIAAAAAIIAACVQAAAJgIAAgAjcBUQgJAAAAgJIAAhVIgCAAIg8BVQgIAJgFAAIgpAAQgJAAAAgJIAAiVQAAgIAJAAIAkAAQAIAAAAAIIAABWIACAAIA9hWIAFgGQAEgCAEAAIApAAQAIAAAAAIIAACVQAAAJgIAAgAB4idQgLgCgIgDQgKgDgHgFQgIgEgHgGQgGgGgFgGQgEgIgEgIQgDgIgBgJQgBgJAAgKQAAgLABgJQABgJADgIQAEgIAEgIQAFgGAGgGQAHgGAIgEQAHgFAKgDQAIgDALgCQALgCALAAQANAAAKACQAKACAKADQAJADAIAFQAHAEAHAGQAGAGAFAGQAEAIAEAIQADAIABAJQACAJAAALQAAAKgCAJQgBAJgDAIQgEAIgEAIQgFAGgGAGQgHAGgHAEQgIAFgJADQgKADgKACQgKACgNAAQgLAAgLgCgAB9kiQgIADgGAGQgGAGgCAJQgDAKAAAMQAAAMADAJQACAJAGAGQAGAGAIADQAIADAJAAQALAAAHgDQAJgDAFgGQAGgGADgJQADgJAAgMQAAgMgDgKQgDgJgGgGQgFgGgJgDQgHgDgLgBQgJABgIADgAGQihQgIAAAAgIIAAg2IhGAAIAAA2QABAIgJAAIgkAAQgJAAABgIIAAiXQgBgJAJABIAkAAQAJgBgBAJIAAA5IBGAAIAAg5QAAgJAIABIAkAAQAJgBgBAJIAACXQABAIgJAAgAgbihQgIAAAAgIIAAh3IgdAAQgGABgFABIgIAEQgGAGgDAKIgXBhQgDAIgHAAIgkAAQgEABgDgDQgDgDACgDIAXhhQAEgPAGgLQAHgMAKgIQAHgFARgHQAIgDAXgBIBHAAQAIgBAAAJIAACXQAAAIgIAAgAk/ihQgIAAAAgIIAAgbQAAgHAIgBIALAAIARADIACAAQAHAAAFgEQAEgDACgGIABgDIgFAAQgPAAgMgDQgLgEgIgHQgJgHgHgKQgGgKgGgNIgVgxQgBgDACgDQADgCAEAAIAkAAQAFAAACACQADACACAEIAVAxQACAHAFADQAEAEAIABIASAAIAZhAQABgEADgCQAEgCAEAAIAjAAQAEAAACACQACADgBADIgoBqQgFANgGAKQgGAKgJAGQgIAHgMAEQgMAEgOgBgAmiihQgGABgEgDQgDgCgCgEIgYgtQgDgFgEgDQgFgDgKAAIgVAAIAAA4QAAAIgIAAIgkAAQgJAAAAgIIAAiXQAAgJAJABIAkAAQAIgBAAAJIAAA2IASAAQAJAAAFgEQAEgCADgGIAXgqQACgEADgCQAEgCAHAAIAlAAQAEAAACADQACACgCADIgXAqQgNAYgPAEIAAADQAQAFAQAcIAYAtQABADgBADQgCACgEAAg");
	this.shape.setTransform(71.6,33.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4,0,151.2,67);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AlrLGQAUh8AAgQQAAgEgDgIIgBgCIgHABQiHAAhKhYQgagdgPgkQgLgbAAgOQABk6CJlNQAghOA/iAQArhXAAgSQgBgEgTgTQgUgRAAgGQAAgaARANIAGgDIAlgCQgHggACgMQADgXAxgCIAAACQABACAAAFQAAAGgDAEQAUASAvA7IB4CTQAeBAA1A5QBnBwCOABQBVAAAfg8QAOgdAFgLQAGgJAGgFQACgMAJAGIACACIACAAQAHgBABACIACADIACgBQABAAAAAGQAAAJgFAJQDMIfABAVQAAACgBACQAAACAAAAQAAABAAgBQAAAAAAgCIgDAFIgDABIgJAgQgLAmgBAVIgBA3IgBA3QgDAkgvBJQg4BXg0AAIhAgFQgpABgsgTIgzgXIhngCQhUgmgogcQgpgcgRgeQgbABgTADIgYAEQhPAAgngQIgHgEIABAHQAVBWAAAlQAAAnglAsQghAog1AfQgKgKAAgJg");
	this.shape.setTransform(61.6,72.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,123.2,145.8);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(97,27.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,194,55.1);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AgJK+IAAAAQgegBgRgGIgHgDIg2AAIgggJIgEABQgbAAg8guQgggagOgMIgDAAQgLAAgCgaIAAgbQAAgaAFg2IAAh5IABgFIAAhtQAIgLAIgVQAGgSAAgFQABgPgUg1QgSg0gBhGQAAgOAFgHQgYgFgUg6IgRhBQAAgQAhhsQAfhsAAhYQAAgEADgCIgBgCQABgOAgACQAbACAFAJIACABIAAAtIAFAgIAFAfIADAgQAGBRAHAuIAVB8QAOBMAEAeQAJAUAGAlQADAXAMA7IARBRQAKAwAGAkQAEAfAPAzIAZBTQAOA5ALAaIAQAmIAKAYQAKgTASgdIAthAIAig9IAAgBQgBgDAWgpIAMgXIAAgBQAAgJAcg6QAVgtAKgRQAGgLAJgWIAOggIAMggIAPhMIAIgiIAIgrQAMg+gBgVQABhVgHhIQgCgZgTg8QgSg1gBgQQgDgDgCgGIgBgNQABgaAgAMQAfALALARQAFAKAQATIAZAeQALAPAKAoQAJAlgBAYQABAygNAgQgNAggBASIAFBaQACAYgEAMIACAIQAAAJgLBBQgJBBgFARIgJAoQgGAYgGAOQgEAIgIAKIgTAVIgDAJQAHATABAYQgBAYhFCVQgrBcgfAiQghAlguAAQgRAAgOgHIgEACQgCABgEAAIgQAFIAEABIgIAAgAkOogIgHAAQghAAgDgNQACgQgCgHQgRgfAAgFQABgMAKAAQADAAADADQAEACADAAQArgdAMgPQATgYAIgHQAGgFADACQAGgEAAASQAAADgMAfIgOAoIgNApQgJAegGAAQgFAAgCgCg");
	this.shape.setTransform(36.9,70.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,73.8,140.6);


(lib.Символ18копия = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("ABUOyIgDgEIgBgFIAAAAQgTgvg1irIABgFQgJgUgOgsQgWhAgRhAQggh5gNhZIghjIQgfi5AAghQgBgdACgSIABgEQgLgEgKgqIgPhFQgihhAAgQIAAgBQgTgughiuQgWh1gSh1QAAgJAIgBQAJgGAbAVQAhAZAbAhQADAFAmAqQAWAYAHALQAEABAFADIAGAEQBrhdAaABQAIgIAZgJIAvgSQA1gkAagNQA+ggAagRQAHgFAXgcQATgUAAAXIAAAEQAEAHAAAJIAEAnQAIA3ACAXQAIB1AAAnQABAxgDAsQgFBUgPAFIgDAkIgJBkQgHA7gOArQgDAIgHAuQgEAcgGAKIADBYIgEBbQgFA9gJAUIAAABQAAAkggDKQgLBRgMBCQgIAxgHAWIAAADIgkC3QgFAcgLBTQgGAqgGARIACAJQAAAEgCADQgDADgFAAQgBAAgFgJg");
	this.shape.setTransform(10.9,73.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.4,-21.7,64.6,191.2);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AgJK+IAAAAQgegBgRgGIgHgDIg2AAIgggJIgEABQgbAAg8guQgggagOgMIgDAAQgLAAgCgaIAAgbQAAgaAFg2IAAh5IABgFIAAhtQAIgLAIgVQAGgSAAgFQABgPgUg1QgSg0gBhGQAAgOAFgHQgYgFgUg6IgRhBQAAgQAhhsQAfhsAAhYQAAgEADgCIgBgCQABgOAgACQAbACAFAJIACABIAAAtIAFAgIAFAfIADAgQAGBRAHAuIAVB8QAOBMAEAeQAJAUAGAlQADAXAMA7IARBRQAKAwAGAkQAEAfAPAzIAZBTQAOA5ALAaIAQAmIAKAYQAKgTASgdIAthAIAig9IAAgBQgBgDAWgpIAMgXIAAgBQAAgJAcg6QAVgtAKgRQAGgLAJgWIAOggIAMggIAPhMIAIgiIAIgrQAMg+gBgVQABhVgHhIQgCgZgTg8QgSg1gBgQQgDgDgCgGIgBgNQABgaAgAMQAfALALARQAFAKAQATIAZAeQALAPAKAoQAJAlgBAYQABAygNAgQgNAggBASIAFBaQACAYgEAMIACAIQAAAJgLBBQgJBBgFARIgJAoQgGAYgGAOQgEAIgIAKIgTAVIgDAJQAHATABAYQgBAYhFCVQgrBcgfAiQghAlguAAQgRAAgOgHIgEACQgCABgEAAIgQAFIAEABIgIAAgAkOogIgHAAQghAAgDgNQACgQgCgHQgRgfAAgFQABgMAKAAQADAAADADQAEACADAAQArgdAMgPQATgYAIgHQAGgFADACQAGgEAAASQAAADgMAfIgOAoIgNApQgJAegGAAQgFAAgCgCg");
	this.shape.setTransform(36.9,70.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,73.8,140.6);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.fon1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.q22();
	this.instance.setTransform(3.3,3.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.3,3.3,8,8);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF33").s().p("AgoArIAAgOQAAgVAbgfQAXghAMAAQANAAAEAEQABADAAAFQAAAYgdAmQgbAngOAAQgHAAgDgOg");
	this.shape.setTransform(4.1,5.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,8.2,11.4);


(lib.Анимация3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hand();
	this.instance.setTransform(-18,-40.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18,-40.5,36,81);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.choth();
	this.instance.setTransform(-29.5,-64.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.5,-64.5,59,129);


(lib.Symbol = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AlrLGQAUh8AAgQQAAgEgDgIIgBgCIgHABQiHAAhKhYQgagdgPgkQgLgbAAgOQABk6CJlNQAghOA/iAQArhXAAgSQgBgEgTgTQgUgRAAgGQAAgaARANIAGgDIAlgCQgHggACgMQADgXAxgCIAAACQABACAAAFQAAAGgDAEQAUASAvA7IB4CTQAeBAA1A5QBnBwCOABQBVAAAfg8QAOgdAFgLQAGgJAGgFQACgMAJAGIACACIACAAQAHgBABACIACADIACgBQABAAAAAGQAAAJgFAJQDMIfABAVQAAACgBACQAAACAAAAQAAABAAgBQAAAAAAgCIgDAFIgDABIgJAgQgLAmgBAVIgBA3IgBA3QgDAkgvBJQg4BXg0AAIhAgFQgpABgsgTIgzgXIhngCQhUgmgogcQgpgcgRgeQgbABgTADIgYAEQhPAAgngQIgHgEIABAHQAVBWAAAlQAAAnglAsQghAog1AfQgKgKAAgJg");
	this.shape.setTransform(61.6,72.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,123.2,145.8);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ27();
	this.instance.setTransform(95.1,26,1,1,0,0,0,66.6,33.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({alpha:1},8).wait(44).to({alpha:0},8).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(97,27.6,1,1,0,0,0,97,27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({alpha:0},10).wait(43).to({alpha:1},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,194,55.1);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Symbol();
	this.instance.setTransform(61.6,72.9,1,1,0,0,0,61.6,72.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({alpha:0.52},16).to({alpha:0},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123.2,145.8);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(61.6,72.9,1,1,0,0,0,61.6,72.9);

	this.instance_1 = new lib.Symbol();
	this.instance_1.setTransform(61.6,72.9,1,1,0,0,0,61.6,72.9);
	this.instance_1.alpha = 0.512;

	this.instance_2 = new lib.Символ24();
	this.instance_2.setTransform(61.6,72.9,1,1,0,0,0,61.6,72.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123.2,145.8);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18копия();
	this.instance.setTransform(58.3,92,1,1,0,0,0,36.9,70.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).to({alpha:0.422},18).to({alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ19копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(10.9,73.8,1,1,0,0,0,32.3,95.5);

	this.instance_1 = new lib.Символ18копия();
	this.instance_1.setTransform(36.9,70.2,1,1,0,0,0,36.9,70.2);
	this.instance_1.alpha = 0.422;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.setTransform(36.9,70.2,1,1,0,0,0,36.9,70.2);
	this.instance.alpha = 0.422;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},10,cjs.Ease.get(-1)).to({alpha:0},9,cjs.Ease.get(1)).wait(30).to({alpha:0.211},10,cjs.Ease.get(-1)).to({alpha:0.422},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73.8,140.6);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(300,150,1,1,0,0,0,300,150);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.Символ14копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(7,7,1.719,1.719,0,0,0,7.3,7.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.516},4,cjs.Ease.get(-1)).to({alpha:0},6,cjs.Ease.get(1)).to({alpha:0.25},4,cjs.Ease.get(-1)).to({alpha:1},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.8,13.8);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(7,7,1.719,1.719,0,0,0,7.3,7.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.527},9,cjs.Ease.get(-1)).to({alpha:0},10,cjs.Ease.get(1)).to({alpha:0.5},10,cjs.Ease.get(-1)).to({alpha:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.8,13.8);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(4.1,5.7,1,1,0,0,0,4.1,5.7);
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},14).to({alpha:0.801},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.2,11.4);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.setTransform(18,40.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36,81);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(29.5,64.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,59,129);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(18,40.5,1,1,0,0,0,18,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:1.8,x:16.6},12,cjs.Ease.get(-1)).to({scaleY:1,skewX:4,x:15.2},12,cjs.Ease.get(1)).to({scaleY:1,skewX:1.8,x:16.7},13,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:18},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36,81);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ26();
	this.instance.setTransform(142.9,58.9,1,1,0,0,0,97,27.6);

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AUqAZQAADUlkCVQlkCVn3AAQn2AAlkiVQljiVAAjUQAAg4CGiYQlKi1gTiqIJfCWQJHhjDuAAQH3AAFkCVQFkCWAADRg");
	this.shape.setTransform(132.2,53.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ArvGCQljiVAAjUQAAg4CGiYQlKi0gTirIJfCWQJHhjDuAAQH3AAFkCVQFkCWAADRQAADUlkCVQlkCVn3AAQn2AAlkiVg");
	this.shape_1.setTransform(132.2,53.6);

	this.addChild(this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,266.5,109.1);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ14();
	this.instance.setTransform(568.2,2.4,2.165,2.165,0,0,0,6.9,6.9);

	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(543.8,3.2,2.165,2.165,0,0,0,6.9,6.9);

	this.instance_2 = new lib.Символ14копия();
	this.instance_2.setTransform(529,3.2,2.165,2.165,0,0,0,6.9,6.9);

	this.instance_3 = new lib.Символ14();
	this.instance_3.setTransform(277,84.1,1,1,0,0,0,6.9,6.9);

	this.instance_4 = new lib.Символ14();
	this.instance_4.setTransform(143.8,83.7,1,1,0,0,0,6.9,6.9);

	this.instance_5 = new lib.Символ14копия();
	this.instance_5.setTransform(137,83.7,1,1,0,0,0,6.9,6.9);

	this.instance_6 = new lib.Символ14();
	this.instance_6.setTransform(209.4,84.9,1,1,0,0,0,6.9,6.9);

	this.instance_7 = new lib.Символ14копия();
	this.instance_7.setTransform(202.5,84.9,1,1,0,0,0,6.9,6.9);

	this.instance_8 = new lib.Символ14();
	this.instance_8.setTransform(386.8,84.9,1,1,0,0,0,6.9,6.9);

	this.instance_9 = new lib.Символ14копия();
	this.instance_9.setTransform(379.9,84.9,1,1,0,0,0,6.9,6.9);

	this.instance_10 = new lib.Символ14();
	this.instance_10.setTransform(394.3,28.2,1,1,0,0,0,6.9,6.9);

	this.instance_11 = new lib.Символ14копия();
	this.instance_11.setTransform(357.4,26.4,1,1,0,0,0,6.9,6.9);

	this.instance_12 = new lib.Символ14();
	this.instance_12.setTransform(350.5,26.4,1,1,0,0,0,6.9,6.9);

	this.instance_13 = new lib.Символ14копия();
	this.instance_13.setTransform(386.8,26.4,1,1,0,0,0,6.9,6.9);

	this.instance_14 = new lib.Символ14();
	this.instance_14.setTransform(379.9,26.4,1,1,0,0,0,6.9,6.9);

	this.instance_15 = new lib.Символ14копия();
	this.instance_15.setTransform(373.1,26.4,1,1,0,0,0,6.9,6.9);

	this.instance_16 = new lib.Символ14();
	this.instance_16.setTransform(366.2,26.4,1,1,0,0,0,6.9,6.9);

	// Слой 1
	this.instance_17 = new lib.Символ15();
	this.instance_17.setTransform(300,150,1,1,0,0,0,300,150);

	this.addChild(this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-12.5,600,312.6);


(lib.Анимация5 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ22();
	this.instance.setTransform(0.2,66.1,1,1,0,0,0,61.6,72.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ22(), 3);

	// Слой 1
	this.instance_1 = new lib.hand2();
	this.instance_1.setTransform(-62,-138.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62,-138.5,124,277.5);


(lib.shape105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ57();
	this.instance.setTransform(17.7,32.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:9.3,x:18.5,y:32.2},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:22.1,x:19.5,y:31.6},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:10.3,x:18.6,y:32.1},6,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:17.7,y:32.7},5,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ59();
	this.instance_1.setTransform(24.2,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:6.3,x:25.1},4,cjs.Ease.get(-1)).to({rotation:15,x:26.4},6,cjs.Ease.get(1)).to({rotation:6.8,x:25.2,y:21.9},6,cjs.Ease.get(-1)).to({rotation:0,x:24.2,y:22},5,cjs.Ease.get(1)).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ58();
	this.instance_2.setTransform(37.9,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:6.3,x:38.2,y:22.2},4,cjs.Ease.get(-1)).to({rotation:15,x:38.5,y:22.9},6,cjs.Ease.get(1)).to({rotation:6.8,x:38.1,y:22.3},6,cjs.Ease.get(-1)).to({rotation:0,x:37.9,y:21.6},5,cjs.Ease.get(1)).wait(1));

	// Слой 6
	this.instance_3 = new lib.Символ61();
	this.instance_3.setTransform(15.1,63.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-3.3,x:15.8,y:64.4},4,cjs.Ease.get(-1)).to({rotation:-8.5,x:16.9,y:66.3},6,cjs.Ease.get(1)).to({rotation:-3.8,x:15.9,y:64.6},6,cjs.Ease.get(-1)).to({rotation:0,x:15.1,y:63.2},5,cjs.Ease.get(1)).wait(1));

	// Layer 1
	this.instance_4 = new lib.q11();
	this.instance_4.setTransform(3.6,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.6,15.2,58,70.1);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(36.9,70.2,1,1,0,0,0,36.9,70.2);

	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(36.9,70.2,1,1,0,0,0,36.9,70.2);
	this.instance_1.alpha = 0.59;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AgJK+IAAAAQgegBgRgGIgHgDIg2AAIgggJIgEABQgbAAg8guQgggagOgMIgDAAQgLAAgCgaIAAgbQAAgaAFg2IAAh5IABgFIAAhtQAIgLAIgVQAGgSAAgFQABgPgUg1QgSg0gBhGQAAgOAFgHQgYgFgUg6IgRhBQAAgQAhhsQAfhsAAhYQAAgEADgCIgBgCQABgOAgACQAbACAFAJIACABIAAAtIAFAgIAFAfIADAgQAGBRAHAuIAVB8QAOBMAEAeQAJAUAGAlQADAXAMA7IARBRQAKAwAGAkQAEAfAPAzIAZBTQAOA5ALAaIAQAmIAKAYQAKgTASgdIAthAIAig9IAAgBQgBgDAWgpIAMgXIAAgBQAAgJAcg6QAVgtAKgRQAGgLAJgWIAOggIAMggIAPhMIAIgiIAIgrQAMg+gBgVQABhVgHhIQgCgZgTg8QgSg1gBgQQgDgDgCgGIgBgNQABgaAgAMQAfALALARQAFAKAQATIAZAeQALAPAKAoQAJAlgBAYQABAygNAgQgNAggBASIAFBaQACAYgEAMIACAIQAAAJgLBBQgJBBgFARIgJAoQgGAYgGAOQgEAIgIAKIgTAVIgDAJQAHATABAYQgBAYhFCVQgrBcgfAiQghAlguAAQgRAAgOgHIgEACQgCABgEAAIgQAFIAEABIgIAAgAkOogIgHAAQghAAgDgNQACgQgCgHQgRgfAAgFQABgMAKAAQADAAADADQAEACADAAQArgdAMgPQATgYAIgHQAGgFADACQAGgEAAASQAAADgMAfIgOAoIgNApQgJAegGAAQgFAAgCgCg");
	this.shape.setTransform(36.9,70.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73.8,140.6);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация5("synched",0);
	this.instance.setTransform(62,138.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,124,277.5);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ11();
	this.instance.setTransform(55.5,103.7,1,1,0,0,0,4.1,5.7);

	// Слой 3
	this.instance_1 = new lib.Символ19копия();
	this.instance_1.setTransform(94.3,303.3,1,1,0,0,0,36.9,70.2);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ19копия(), 3);

	this.instance_2 = new lib.Символ19();
	this.instance_2.setTransform(62.3,146.5,1,1,0,0,0,36.9,70.2);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Символ19(), 3);

	// Слой 1
	this.instance_3 = new lib.bady();

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,112,524);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ8();
	this.instance.setTransform(235.5,398.5,1,1,0,0,0,29.5,64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.99,x:235.3,y:397.7},9,cjs.Ease.get(-1)).to({scaleY:0.96,x:234.3,y:394.9},10,cjs.Ease.get(1)).to({scaleY:0.98,x:234.9,y:396.7},10).to({scaleY:1,x:235.5,y:398.5},10,cjs.Ease.get(1)).wait(1));

	// Слой 7
	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(238,151.5,1,1,0,0,0,18,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	// Слой 4
	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(184,279,1,1,0,0,0,56,262);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));

	// Слой 5
	this.instance_3 = new lib.Символ7();
	this.instance_3.setTransform(93,257.5,1,1,0,0,0,62,138.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-0.5,x:94.5},9,cjs.Ease.get(-1)).to({rotation:-2.5,x:99.4,y:257.3},10,cjs.Ease.get(1)).to({rotation:-1.1,x:96.2,y:257.4},10).to({rotation:0,x:93,y:257.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31,17,234,524);


(lib.sprite106 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape105();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.6,15.2,58,70.1);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(-13.8,0.2,1,1,0,0,0,17.2,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:4.1},14,cjs.Ease.get(-1)).to({y:8.2},15,cjs.Ease.get(1)).to({y:4.2},15,cjs.Ease.get(-1)).to({y:0.2},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,234,524);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.main1 = new lib.sprite106();
	this.main1.setTransform(34,40.8,0.85,0.85,15,0,0,40,48);

	this.timeline.addTween(cjs.Tween.get(this.main1).to({rotation:0,y:40.9},29).to({rotation:15,y:40.8},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,8.5,62.4,67.8);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(700.6,166.7,1,1,0,0,0,132.2,53.6);

	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(434.9,262,1,1,0,0,0,110.1,262);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(324.8,0,508.6,524);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cursor = "none";
		//Чтобы восстановить курсор мыши по умолчанию, раскомментируйте следующие строки:
		//this.removeEventListener("tick", fl_CustomMouseCursor.bind(this));
		//stage.removeChild(pric);
		//stage.canvas.style.cursor = "default";
		
		
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 10;
		}
		/* Пользовательский курсор мыши
		Заменяет курсор мыши по умолчанию на указанный экземпляр символа.
		*/
		stage.canvas.style.cursor = "none";
		this.pric.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pric.x = stage.mouseX;
			this.pric.y = stage.mouseY;
		}
		//Чтобы восстановить курсор мыши по умолчанию, раскомментируйте следующие строки:
		//this.removeEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		//stage.removeChild(pric);
		//stage.canvas.style.cursor = "default";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 2
	this.pric = new lib.Symbol4();
	this.pric.setTransform(331.6,165.9,0.601,0.601,-15,0,0,33.9,40.8);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

	// Слой 10
	this.fon = new lib.Символ12();
	this.fon.setTransform(351.4,267,1,1,0,0,0,247.4,262);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(320,152.5,1.067,1.067,0,0,0,300,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,131.6,937.3,550);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;