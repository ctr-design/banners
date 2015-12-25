(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg.png", id:"bg"},
		{src:"images/but1.png", id:"but1"},
		{src:"images/but2.png", id:"but2"},
		{src:"images/chain.png", id:"chain"},
		{src:"images/Ebene1copy.png", id:"Ebene1copy"},
		{src:"images/Layer2.png", id:"Layer2"},
		{src:"images/Layer3.png", id:"Layer3"},
		{src:"images/Layer4.png", id:"Layer4"},
		{src:"images/Layer6.png", id:"Layer6"},
		{src:"images/Layer7.png", id:"Layer7"},
		{src:"images/title.png", id:"title"},
		{src:"images/wings.png", id:"wings"}
	]
};



// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.but1 = function() {
	this.initialize(img.but1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,221,95);


(lib.but2 = function() {
	this.initialize(img.but2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,221,109);


(lib.chain = function() {
	this.initialize(img.chain);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,220);


(lib.Ebene1copy = function() {
	this.initialize(img.Ebene1copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,247);


(lib.Layer2 = function() {
	this.initialize(img.Layer2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,159);


(lib.Layer3 = function() {
	this.initialize(img.Layer3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,407,194);


(lib.Layer4 = function() {
	this.initialize(img.Layer4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,115);


(lib.Layer6 = function() {
	this.initialize(img.Layer6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,274);


(lib.Layer7 = function() {
	this.initialize(img.Layer7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,59);


(lib.title = function() {
	this.initialize(img.title);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,65);


(lib.wings = function() {
	this.initialize(img.wings);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,186);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Egx/AX0MAAAgvnMBj/AAAMAAAAvng");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AkFDcIAAg0IiCAAIAAA0Ig6AAIAAhqIAYAAQAHgJAEgMQACgLABgSIAOkXICqAAIAAFJIAZAAIAABqgAlfA/QgBAVgFAMQgEALgHAHIBPAAIAAkSIg0AAgAqzCmQgRgGgLgNQgNgMgFgSQgHgSAAgXIAAjGQAAgXAHgTQAFgSANgMQALgMARgHQARgGAWAAQAXAAARAGQARAHALAMQANAMAFASQAHATAAAXIAADGQAAAXgHASQgFASgNAMQgLANgRAGQgRAHgXAAQgWAAgRgHgAqiicQgJAKAAAUIAADOQAAAUAJAJQAHAJAPAAQAQAAAHgJQAJgJAAgUIAAjOQAAgUgJgKQgHgIgQAAQgPAAgHAIgAAPCpIAAg3QAWAAAHgHQAHgHACgaIAJkhICrAAIAAF/Ig+AAIAAlIIg0AAIgGDnQgCAbgFASQgFATgLALQgKAMgRAFQgQAGgXAAgAQRCoIAAg6IA5AAIAAA6gAK7CoIAAl/IA8AAIAACRIAdAAQAWAAARAGQARAGALAMQAMAMAFASQAGAQAAAXIAAAyQAAAXgGASQgFASgMAMQgLAMgRAGQgRAGgWAAgAL3BxIAdAAQAOAAAIgIQAHgIAAgUIAAg6QAAgTgHgHQgIgIgOAAIgdAAgAIkCoIAAlIIg/AAIAAg3IC8AAIAAA3IhAAAIAAFIgAGeCoIgKhGIhKAAIgLBGIg4AAIA+l/IBZAAIA+F/gAGLAuIgcjBIgdDBIA5AAgAioCoIAAl/IClAAIAAA3IhoAAIAABsIBSAAIAAA0IhSAAIAABxIBoAAIAAA3gAt5CoIAAlIIg/AAIAAg3IC8AAIAAA3IhAAAIAAFIgAwPCoIAAibQgJAKgPAGQgOAGgNAAQgTAAgOgHQgOgGgKgMQgJgKgFgQQgFgQAAgUIAAijIA8AAIAACeQAAATALAKQAJAJAQAAQAPAAAHgKQAJgKAAgUIAAicIA8AAIAAF/gAQTBTQgDgKAAgOQAAgqAggtQAQgYAIgQIAHgaIADggQgBgUgHgKQgHgIgPAAQgQAAgHAIQgIAKAAAUIAAAqIg5AAIAAgmQAAgYAFgSQAHgSAKgMQAMgMAQgHQARgGAWAAQAWAAARAGQARAHALAMQALAMAFASQAGASABAYQAAASgEAPIgIAcQgIATgQAYQgkAsAAAkIACAVg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-116.7,-22,233.4,44.2);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("EgyEAJgIAAkhIgMAAIdaqiMArkgAPIb2KxIg+AAIAAEhgEgyeAA6IaknPICqAPI9TJ0gAX9mVIDXgFIWRFtIAFC3gA4BnsIDPhYMAn/gAbIEsBzg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-323.6,-60.8,647.2,121.8);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AljC9IAAgPQAKABAFgEQAEgDACgIIAEgKIgihsIAQAAIAZBYIAWhYIARAAIgfByIgFAPQgDAGgEAEQgEAFgHACIgMABIgFAAgACMC9IAAiTIAQAAIAAA6IAPAAQAIAAAHACQAGACAEAFQAFAEACAHQACAGAAAJIAAASQAAAIgCAHQgCAHgEAEQgEAFgGACQgHADgIAAgACcCuIAQAAQAJAAAEgFQAEgFAAgKIAAgUQAAgKgFgFQgEgFgJAAIgPAAgABUC9IAAiEIgbAAIAAgPIBHAAIAAAPIgbAAIAACEgAAhC9IgGgeIgjAAIgGAeIgPAAIAciTIAWAAIAcCTgAAZCRIgRhVIgOBVIAfAAgAhmC9IAAiTIAgAAQAIAAAHACQAGADAEAEQAEAFACAHQACAGAAAJIAAARQAAAJgCAHQgCAGgFAFQgEAEgGADQgHACgIAAIgPAAIAAA6gAhWB0IAPAAQAJAAAEgEQAFgFAAgLIAAgTQAAgKgEgFQgEgFgJAAIgQAAgAiFC9IAAh1IgmB1IgRAAIAAiTIAPAAIAABtIAkhtIASAAIAACTgAkQC9IAAiTIA+AAIAAAPIgtAAIAAAtIARAAQAIAAAHADQAGACAFAEQAEAEACAHQACAGAAAJIAAAQQAAAJgCAGQgCAHgEAFQgEAEgGACQgHADgIAAgAj/CuIASAAQAJAAAEgFQAEgFAAgKIAAgSQAAgLgFgEQgEgEgJAAIgRAAgAitgoQgGgDgEgFQgEgFgCgHQgCgGAAgJIAAhMQAAgIACgHQACgHAEgFQAEgEAGgDQAHgDAIAAQAIAAAHADQAGADAEAEQAEAFACAHQACAHAAAIIAAAOIgQAAIAAgPQAAgKgEgFQgEgGgJAAQgIAAgFAGQgEAFAAAKIAABOQAAAKAEAGQAFAFAIAAQAJAAAEgFQAEgGAAgKIAAgTIAQAAIAAASQAAAJgCAGQgCAHgEAFQgEAFgGADQgHACgIAAQgIAAgHgCgAlWgoQgGgDgEgFQgEgFgCgHQgCgGAAgJIAAgOIAPAAIAAAPQAAAKAEAGQAFAFAIAAQAJAAAEgFQAFgGAAgLIAAgMQAAgKgFgGIgGgEQgEgCgEAAIgHAAIAAgOIAIAAQAIAAAFgGQAFgFAAgJIAAgHQAAgMgFgFQgEgGgJAAQgIAAgFAGQgEAFAAAKIAAAKIgPAAIAAgJQAAgJACgGQACgHAEgFQAEgFAGgCQAGgDAJAAQAIAAAHADQAGADAEAEQAEAFACAHQACAHAAAIIAAAEIgBALQgBAEgDAEQgCAEgDADIgIAEQAEACAEADIAGAHQAEAHAAAMIAAALQAAAJgCAGQgCAHgEAFQgEAFgGADQgHACgIAAQgIAAgHgCgAEsgnIAAiTIAQAAIAAA6IAPAAQAIAAAHACQAGACAEAFQAFAEACAHQACAGAAAJIAAASQAAAIgCAHQgCAHgEAEQgEAFgGACQgHADgIAAgAE8g2IAQAAQAJAAAEgFQAEgFAAgKIAAgUQAAgKgFgFQgEgFgJAAIgPAAgAD0gnIAAiEIgbAAIAAgPIBHAAIAAAPIgbAAIAACEgAC/gnIAAh1IgmB1IgRAAIAAiTIAPAAIAABtIAkhtIASAAIAACTgAA2gnIAAiTIAhAAQAJAAAGACQAGACAEAEQADAEACAGQACAGAAAIIAAAHQAAAMgEAHQgCAEgDACQgDADgFABQAFACAEADQAEACACAFIAEAJIABAXQAAAJgCAGQgDAGgEAFQgEAEgGACQgGADgJAAgABHg2IARAAQAJAAAEgFQAEgFAAgKIAAgNIgBgKQgBgFgDgCQgCgDgEgBIgJgBIgOAAgABHh8IAMAAQAKAAAFgEIAEgGIABgJIAAgJQAAgKgEgFQgEgEgIAAIgQAAgAAZgnIgGgeIgjAAIgFAeIgQAAIAdiTIAVAAIAcCTgAARhTIgQhVIgPBVIAfAAgAhYgnIAAiEIgbAAIAAgPIBHAAIAAAPIgbAAIAACEgAjbgnIgGgeIglAAIgFAeIgQAAIAdiTIAXAAIAcCTgAjjhTIgQhVIgRBVIAhAAg");
	this.shape.setTransform(47.4,6.6);

	// Слой 1
	this.instance = new lib.but2();
	this.instance.setTransform(-110.5,-54.5);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-110.5,-54.5,221,109);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACgC7QgGgDgEgFQgFgFgCgGQgCgHAAgJIAAgeIgUAAIAABCIgRAAIAAiTIARAAIAABCIAUAAIAAgeQAAgJACgHQACgHAFgEQAEgFAGgDQAHgCAJAAQAHAAAHACQAGADAFAFQAEAEACAHQACAHAAAJIAABLQAAAJgCAHQgCAGgEAFQgFAFgGADQgHADgHgBQgJABgHgDgACiA8QgEAGAAAKIAABNQAAALAEAFQAEAGAKAAQAIAAAEgGQAFgFAAgLIAAhNQAAgKgFgGQgEgFgIgBQgKABgEAFgAgzC7QgGgDgFgFQgEgFgCgGQgCgHAAgJIAAhLQAAgJACgHQACgHAEgEQAFgFAGgDQAGgCAIAAQAJAAAHACQAGADAEAFQAEAEADAHQACAHAAAJIAABLQAAAJgCAHQgDAGgEAFQgEAFgGADQgHADgJgBQgIABgGgDgAgxA8QgFAGAAAKIAABNQAAALAFAFQAEAGAIAAQAKAAAEgGQAEgFAAgLIAAhNQAAgKgEgGQgEgFgKgBQgIABgEAFgABGC8IAAiEIgcAAIgDBfIgCAQQgBAHgEAEQgDAFgGADQgFACgJAAIgDAAIAAgPQAFAAAEgBQADgBABgDQAEgEAAgMIAEhvIA8AAIAACTgAiXC8IAAiTIAhAAQAJAAAGACQAGACAEAEQADAEACAHQACAGABAHIAAAHQgBANgEAGQgCAEgDADQgDACgFABQAGACADADQAEADACAEIAEAJIABAXQAAAJgCAGQgDAGgDAFQgEAFgHACQgGACgJAAgAiGCtIARAAQAJAAAFgFQAEgFgBgKIAAgNIAAgKQgCgEgDgDQgCgCgEgCIgJgBIgOAAgAiGBoIANAAQAJAAAFgFIAEgFIABgKIAAgJQAAgKgEgEQgDgFgJAAIgQAAgAjUC8IgGgdIglAAIgGAdIgPAAIAdiTIAXAAIAcCTgAjcCQIgQhUIgRBUIAhAAgAkxC8IAAhCIgkAAIAABCIgQAAIAAiTIAQAAIAABCIAkAAIAAhCIARAAIAACTgAgIgpQgFgCgFgFQgEgGgCgHQgCgGAAgIIAAhNQAAgIACgHQACgHAEgFQAFgEAFgDQAHgCAGgBQAJABAGACQAGADAEAEQAEAFACAHQACAHABAIIAAAOIgQAAIAAgPQAAgKgFgFQgDgGgJABQgHgBgFAGQgEAFAAAKIAABPQAAAJAEAGQAFAFAHAAQAJAAADgFQAFgGAAgJIAAgTIAQAAIAAASQgBAIgCAGQgCAHgEAGQgEAFgGACQgGADgJAAQgGAAgHgDgAlUgpQgFgCgFgFQgEgGgDgHQgCgGAAgIIAAhNQAAgIACgHQADgHAEgFQAFgEAFgDQAHgCAIgBQAJABAGACQAGADAFAEQAEAFACAHQACAHAAAIIAABNQAAAIgCAGQgCAHgEAGQgFAFgGACQgGADgJAAQgIAAgHgDgAlSioQgEAFAAAKIAABPQAAAJAEAGQAEAFAJAAQAJAAAEgFQAFgGAAgJIAAhPQAAgKgFgFQgEgGgJABQgJgBgEAGgAhsgoIAAgOQAKAAAFgDQAFgEABgIIAEgKIgihsIARAAIAZBYIAVhYIARAAIgfBzIgFAPQgCAFgFAFQgEAEgHACIgMABIgFAAgAEmgoIAAiTIARAAIAAA6IAOAAQAJAAAGADQAHACAEAEQAEAEADAHQABAHAAAJIAAARQAAAJgBAGQgCAHgFAEQgDAFgHACQgGADgIAAgAE3g3IAQAAQAIAAAEgFQAEgFAAgKIAAgUQABgKgFgFQgEgEgKgBIgOAAgADvgoIAAiEIgbAAIAAgPIBHAAIAAAPIgbAAIAACEgAC6goIAAh1IgmB1IgRAAIAAiTIAOAAIAABtIAlhtIASAAIAACTgABMgoIAAiEIgbAAIAAgPIBGAAIAAAPIgbAAIAACEgAiRgoIAAiEIgkAAIAACEIgRAAIAAiTIBGAAIAACTgAj9goIAAiEIgbAAIAAgPIBHAAIAAAPIgbAAIAACEg");
	this.shape.setTransform(45.2,-0.3);

	// Слой 1
	this.instance = new lib.but1();
	this.instance.setTransform(-110.5,-47.5);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-110.5,-47.5,221,95);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bg();
	this.instance.setTransform(-320,-152.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-152.5,640,305);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Au+CBQmNg1AAhMQAAhLGNg1QGOg2IwAAQIxAAGNA2QGNA1ABBLQgBBMmNA1QmNA2oxAAQowAAmOg2g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-135.6,-18.4,271.2,36.8);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.wings();
	this.instance.setTransform(-88,-93);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-88,-93,176,186);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Layer6();
	this.instance.setTransform(-125,-137);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-125,-137,250,274);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C1B01").s().p("AgxAmQgKgPAHgWQAIgTATgOQAVgQATgCQAXgBAKAPQAMAOgHAVQgIATgVAQQgUAPgTABIgFABQgTAAgKgNg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.6,-5.1,11.2,10.2);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D1B02").s().p("AiVB1IgBAAIAQgTQATgVARgJQARgLACAEQADACgUAMQgUALgQASIgRATgAgNgVQgEgEATgVQAVgVAngUQAmgTAXgJQAXgHAEAAQAFABgYALQgaAKgiASQgiARgYAZQgSAUgGAAIgCgBg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D1B02").s().p("AiPBzIgBAAQAGgJAJgLQAUgVAPgKQAUgHgEAEIgNAJQgHAEgGAGQgMAJgKAMIgKAMIgHAHIAAgFgAgIgZQgFgFAUgUQAUgUAogTQAmgTAXgJQAfgGgYALQgZAKgiARQgiARgYAYQgSAUgGAAIgCgBg");
	this.shape_1.setTransform(-0.5,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2D1B02").s().p("AiPByIgBAAIAQgTQASgVAPgMQASgIgDAEIgMAKIgNAKQgLAKgKALIgKAMIgGAIIgBgFgAgKgcQgFgFAUgTQAVgSAogUQAngSAXgIQAegGgYAKQgYAKgiARQgjARgYAXQgRASgHAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBgBg");
	this.shape_2.setTransform(-0.5,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2D1B02").s().p("AiOBzIgBAAQAFgJAKgLIAfgiQASgKgDAEQgDAEgIAHQgGAEgGAGQgKAKgKAMIgKANIgGAIIgBgEgAgLgeQgFgFAUgSQAWgRAngTQAngTAXgIQAdgFgXAKQgYAKgiAQQgiARgZAWQgRARgHAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_3.setTransform(-0.4,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2D1B02").s().p("AiNBzIAAAAIgBAAQAFgJAJgLIAegkQARgKgDADQgCAFgHAHIgLALQgLAKgJANIgJAMIgHAIIgBgDgAgMggQgFgGAUgQQAWgQAogTQAogTAWgHQAcgFgWAKQgYAJgiAQQgjARgYAWQgRAQgHAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_4.setTransform(-0.4,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2D1B02").s().p("AiMBzIAAAAIgBAAQAFgJAJgMIAcglQAQgMgCAEQgCAFgHAHIgKAMIgTAXIgJANIgGAIIgCgCgAgNgiQgFgHAUgOQAXgPAogTQAogTAWgHQAbgEgWAJQgXAJgiAQQgjAQgYAVQgRAQgIAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_5.setTransform(-0.4,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2D1B02").s().p("AiLBzIgBAAIAAAAQAEgJAJgMQARgVAKgRQAOgNgBAEQgCAEgGAIIgJAMIgSAYIgJANIgGAIIgCgBgAgOgkQgGgHAVgOQAXgNApgTQAogSAWgHQAagEgWAJQgWAIgiAQQgkAQgYAVQgQAOgIAAQgDAAgCgCg");
	this.shape_6.setTransform(-0.4,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2D1B02").s().p("AiKBzIgBAAIAAAAQAEgJAJgMQAQgWAJgSQANgOgBAEQgBAFgFAIIgJANIgSAYIgIANIgGAIIgCAAgAgPgnQgGgHAVgMIBAgfQAogSAXgHQAYgDgUAIQgWAIgjAQQgjAQgZATQgPAOgIAAQgEAAgCgDg");
	this.shape_7.setTransform(-0.3,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2D1B02").s().p("AiKBzQADgJAJgNQAQgVAIgUQAMgQgBAEQAAAGgFAIIgIAOIgRAYIgIAOIgGAIIgCABIgBAAgAgQgpQgHgJAXgKIBAgdQAogTAXgGQAXgCgUAIQgVAHgjAQQgjAPgZATQgQAMgIAAQgEAAgCgCg");
	this.shape_8.setTransform(-0.3,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2D1B02").s().p("AiKBzQADgKAJgNQAPgVAIgVQAKgRAAAEQAAAGgEAIIgHAPIgQAZIgIAOIgGAIIgDABIAAABgAgRgsQgHgJAYgJQAWgJApgSQApgTAXgGQAWgCgUAIIg3AWQgkAQgZASQgPALgIAAQgEAAgDgDg");
	this.shape_9.setTransform(-0.3,0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2D1B02").s().p("AiJBzQADgKAJgNQAOgVAHgXQAJgSAAAEQABAGgDAJIgHAPIgPAZIgIAOIgGAJIgDACIAAABgAgSguQgHgKAYgHQAWgIAqgTQApgSAXgFQAVgCgTAHQgUAHgjAPQgkAPgZARQgPALgJAAQgEAAgDgDg");
	this.shape_10.setTransform(-0.3,0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2D1B02").s().p("AiIBzQADgKAJgOQANgVAGgYQAIgTABAEQABAGgDAJIgGAQIgOAaIgIAOIgFAJIgEADIAAABgAgTgxQgHgKAYgGQAXgGAqgTQAqgSAWgFQAUgBgTAGQgTAHgjAPQglAPgYAQQgPAKgJAAQgFAAgDgEg");
	this.shape_11.setTransform(-0.3,0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2D1B02").s().p("Ah8BbQANgWAEgYQAIgVABAEQACAGgCAKIgGAQIgNAbIgIAOIgGAJIgDAEIgBABQACgKAJgOgAgUgzQgIgLAZgEQAXgGAqgSQAqgSAWgFQATgBgSAHQgTAGgjAOQgkAPgZAQQgOAIgJAAQgGAAgDgDg");
	this.shape_12.setTransform(-0.2,0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2D1B02").s().p("Ah8BaQANgWADgZQAGgXACAFQACAGgBAKIgFAQIgNAcIgHAPIgGAJIgDAEIgBABQACgKAIgOgAgVg2QgIgLAZgEQAXgDArgSQAqgTAWgEQASAAgSAGQgSAFgjAPQglAPgZAOQgNAIgJAAQgHAAgDgEg");
	this.shape_13.setTransform(-0.2,0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2D1B02").s().p("AiABYQALgSACgdQACgdAFALQAFALgHAXQgIAWgLAVQgFAKgFAGQABgLAKgRgAgcg3QgIgLAZgCQAYgDArgSQAqgSAWgEQAWgFgCADQgDACgRAGQgSAFgjAOQglAPgZAOQgMAHgJAAQgIAAgEgFg");
	this.shape_14.setTransform(0.4,0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2D1B02").s().p("Ah2BXQALgSADgdQAMgHgIAXQgHAWgMAVQgFAKgFAFQABgLAKgQgAgSg4QgIgLAZgCQAYgDArgSQAqgSAXgFQgSALgkAPQglAPgZAOQgOAHgHAAQgHAAgFgFg");
	this.shape_15.setTransform(-0.6,0.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2D1B02").s().p("Ah1BXQAKgSADgcQANgHgIAXQgJAVgLAVQgFAJgGAGQACgLALgQgAgQg3QgJgLAZgCQAYgDAqgTQArgSAVgFQgRAMgkAOQgkAPgZAOQgPAIgHAAQgHAAgDgFg");
	this.shape_16.setTransform(-0.6,0.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2D1B02").s().p("Ah1BXQALgSADgcQAMgHgHAXQgJAVgMAVQgFAJgGAGQACgKALgRgAgQg2QgJgMAZgCQAYgDArgTQAqgTAWgEQgSALgjAPQglAQgZAOQgOAIgHAAQgHAAgEgFg");
	this.shape_17.setTransform(-0.7,0.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2D1B02").s().p("Ah1BXQALgRAEgdQAMgGgIAWQgJAWgMAUQgFAJgGAGQACgLALgQgAgPg1QgJgLAYgDQAZgDAqgTQAqgTAWgFQgSAMgjAOQgkAQgZAOQgPAIgHAAQgHAAgDgEg");
	this.shape_18.setTransform(-0.7,0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2D1B02").s().p("Ah1BYQAMgSADgcQANgGgIAWQgJAVgNAVQgGAJgFAFQACgKALgQgAgPg0QgIgLAXgDQAZgDAqgUQAqgTAWgFQgSAMgjAPQgkAQgYAOQgPAIgHAAQgHAAgEgEg");
	this.shape_19.setTransform(-0.7,0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2D1B02").s().p("Ah1BYQAMgRAFgcQAMgHgJAXQgKAUgMAVQgFAJgHAGQADgLALgQgAgOg0QgJgLAXgCQAZgEArgUQApgTAXgGQgSANgjAPQglAQgYAPQgPAIgHAAQgGAAgEgFg");
	this.shape_20.setTransform(-0.8,0.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2D1B02").s().p("Ah1BYQANgRAEgcQAMgGgIAWQgKAVgNAVQgGAIgFAFQACgKALgQgAgNgyQgKgMAYgDQAZgDAqgUQAqgUAVgFQgQAMgkAQQgkAPgYAPQgPAJgHAAQgHAAgDgEg");
	this.shape_21.setTransform(-0.8,0.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2D1B02").s().p("Ah1BYQANgRAFgcQAMgGgJAWQgKAVgNAUQgGAJgGAFQADgKALgQgAgNgyQgJgLAXgEQAagDAqgUQApgUAWgFQgSAMgiAQQgkAQgZAPQgPAIgHAAQgGAAgEgEg");
	this.shape_22.setTransform(-0.9,0.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2D1B02").s().p("Ah0BZQAMgSAGgbQAMgFgJAVQgKAVgOATQgGAJgGAGQADgLAMgPgAgMgxQgJgLAXgDQAZgFAqgUQApgUAWgGQgRANgjAQQgkARgYAPQgPAIgHAAQgHAAgDgEg");
	this.shape_23.setTransform(-0.9,0.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2D1B02").s().p("Ah1BZQANgRAGgcQANgFgKAWQgKAUgOAUQgGAIgGAGQADgLALgPgAgMgwQgJgLAYgEQAZgEApgUQApgVAWgGQgRANgjAQQgjARgYAPQgPAJgHAAQgHAAgEgEg");
	this.shape_24.setTransform(-0.9,0.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2D1B02").s().p("Ah1BZQANgQAHgcQAMgFgKAVQgKAVgOATQgGAJgGAFQADgLALgPgAgLgvQgKgLAYgEQAZgEApgVQAqgVAVgGQgRANgjAQQgjARgYAQQgPAJgHAAQgHAAgDgEg");
	this.shape_25.setTransform(-1,0.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2D1B02").s().p("Ah0BaQANgRAHgbQAMgFgKAVQgLAUgOAUQgGAIgGAFQADgKAMgPgAgLguQgJgLAXgEQAZgEAqgVQApgWAVgGQgQANgjARQgkARgYAQQgOAJgIAAQgGAAgEgEg");
	this.shape_26.setTransform(-1,0.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2D1B02").s().p("Ah0BaQANgRAHgbQANgFgKAVQgLAUgPATQgGAJgGAFQADgLAMgOgAgKguQgKgKAYgFQAZgEApgVQApgWAVgGQgRANgiARQgjARgYAQQgPAJgHAAQgGAAgEgEg");
	this.shape_27.setTransform(-1,0.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2D1B02").s().p("Ah0BaQANgQAIgcQAMgEgKAVQgLAUgPATQgHAIgGAFQADgKANgPgAgJgtQgKgKAXgFQAagEApgWQApgWAVgGQgRANgiARQgkASgYAQQgOAJgIAAQgGAAgDgEg");
	this.shape_28.setTransform(-1.1,0.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2D1B02").s().p("Ah0BbQAOgRAIgbQAMgFgLAVQgLAUgPATQgHAIgGAFQADgLANgNgAgJgsQgJgLAXgEQAZgFApgWQApgWAVgGQgRANgiARQgjATgYAPQgPAKgIAAQgFAAgEgEg");
	this.shape_29.setTransform(-1.1,0.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2D1B02").s().p("Ah0BbQAOgQAIgbQANgFgLAVQgMATgPAUQgHAHgGAFQADgKANgOgAgIgrQgKgLAXgEQAZgFApgWQApgXAVgGQgQANgjASQgjASgXARQgPAJgJAAQgFAAgDgEg");
	this.shape_30.setTransform(-1.2,0.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2D1B02").s().p("Ah0BbQAPgQAIgbQANgEgMAUQgLAUgQATQgHAHgGAFQAEgKAMgOgAgHgqQgKgKAXgFQAZgFApgXQAogWAVgHQgQANgiASQgjASgYARQgPAKgJAAQgEAAgDgEg");
	this.shape_31.setTransform(-1.2,0.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2D1B02").s().p("Ah0BbQAPgPAJgcQAMgEgLAVQgMATgQASQgHAJgHAEQAFgKAMgOgAgHgpQgKgLAXgFQAagFAogXQAogXAVgGQgQANgiASQgjASgXARQgPAKgKAAQgDAAgEgDg");
	this.shape_32.setTransform(-1.2,0.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2D1B02").s().p("AhzBbQAPgPAIgbQANgEgMAUQgMAUgQASIgNAMQADgKAOgOgAgGgpQgKgKAXgFQAZgGApgWQAogXAUgHQgQANghASQgjATgYARQgPAKgJAAQgEAAgDgEg");
	this.shape_33.setTransform(-1.3,0.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2D1B02").s().p("Ah9BeQAQgPAJgbQAJgbACALQACAMgNAUQgMAUgRASQgHAIgGAEQAEgKANgOgAgPglQgKgKAZgGQAXgFAogXQAogYAVgHQAVgHgCADQgCADgQAHQgRAIgiASQgiATgYARQgPALgHAAQgGAAgDgEg");
	this.shape_34.setTransform(-0.4,-0.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2D1B02").s().p("AiJBzQADgJALgLQARgRAJgXIAJgUQAFAHgDAIQgDAIgGAJIgRAXIgNAOQgJAJgDABIAAABgAgKgnQgJgJAWgHQAZgGAogXQAogXAVgHQASgCgQAIQgSAHgiATQgiATgYARQgPALgHAAQgFAAgEgEg");
	this.shape_35.setTransform(-0.9,0.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2D1B02").s().p("AiKB0QAEgJAKgLQARgSAKgWIAKgTQAEAHgEAIIgJARIgRAXIgNANQgJAJgCABIAAABgAgKglQgJgJAWgIQAZgHAogXQAogXAVgHQATgCgRAIQgSAIgiASQgjATgXASQgQALgHAAQgFAAgDgDg");
	this.shape_36.setTransform(-0.8,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2D1B02").s().p("AiLB0QAEgJALgLQARgSALgVIAKgSQADAHgEAIIgKAQIgRAXIgNANQgIAIgDABIAAABgAgKgkQgIgIAWgJQAYgJAogWQAogXAVgHQAUgDgSAJQgSAIgiASQgjATgXASQgQAMgHAAQgFAAgDgDg");
	this.shape_37.setTransform(-0.8,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2D1B02").s().p("AiLB0QAEgJAKgLQASgSALgUIALgRQACAHgFAIQgDAHgHAIIgSAWIgMAOQgIAIgCAAIgBABgAgKgiQgIgJAWgKQAYgJAogWQAngXAWgHQAVgDgTAIQgTAJgiASQgiASgYAUQgQAMgHAAQgEAAgDgCg");
	this.shape_38.setTransform(-0.8,0);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2D1B02").s().p("AiMB0QAFgJAKgLQASgSALgTIAMgQQABAHgFAHIgKAPIgSAWIgNAOQgIAHgCAAIAAABgAgJghQgIgIAVgLQAYgLAogWQAngWAWgHQAWgDgTAIQgUAJgiASQgiASgYAUQgQANgHAAQgEAAgCgCg");
	this.shape_39.setTransform(-0.8,0);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2D1B02").s().p("AiMB0QAFgJAKgLQASgTAMgRIANgQQgBAIgFAHIgLAOIgSAWIgMAOQgIAHgCgBIAAABgAgJggQgIgIAWgMQAXgLAogWQAngWAWgHQAXgEgTAJQgVAJgiASQgiASgYAUQgRAOgGAAQgEAAgCgCg");
	this.shape_40.setTransform(-0.8,0);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2D1B02").s().p("AiNB0QAFgIAKgLQASgTANgRQALgNACgBQgBAIgFAGIgMAOIgTAWIgMANQgHAHgCgBIAAAAgAgJgeQgHgIAVgNIA/giQAngVAWgIQAYgEgUAJQgVAJgiASQgiASgYAVQgSAPgGAAQgDAAgCgCg");
	this.shape_41.setTransform(-0.7,0);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2D1B02").s().p("AiNB1QAFgJAKgLQATgTAMgQQANgNACgBQgDAIgFAHIgNANIgSAWIgMANQgIAGgBgBIgBABgAgJgdQgHgHAWgOQAWgOAogVQAngVAWgIQAZgEgVAJQgVAJgiASQgiASgYAVQgSAQgGAAQgDAAgCgCg");
	this.shape_42.setTransform(-0.7,0);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2D1B02").s().p("Ah/BhQATgTANgPQANgNACAAQgDAIgGAHIgNANIgTAVIgMANQgHAFgBgBIgBABQAFgJAKgLgAgJgcQgGgGAVgPQAWgPAngVQAngVAWgIQAbgFgWAKQgWAJghASQgjASgXAWQgTAQgGAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_43.setTransform(-0.7,0);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2D1B02").s().p("AiPB1QAGgJAKgLIAgghQAOgNACABQgEAIgGAGIgOANIgTAVIgMANQgHAFgBgCIAAABgAgJgbQgGgGAVgQQAWgQAngVQAngUAWgIQAbgFgVAKQgXAJgiASQgiASgYAWQgSARgGAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAgBgBg");
	this.shape_44.setTransform(-0.6,0);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2D1B02").s().p("AiOB0IgBABIAAAAQAGgJAKgLIAhghQAPgLABABQgFAIgGAGIgOAMQgKAJgKAMIgMAMQgEAEgCAAIgBgBgAgIgaQgGgFAUgRQAWgRAngVQAngUAWgIQAcgGgWALQgXAJgiASQgiASgYAWQgTASgFAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_45.setTransform(-0.6,0);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2D1B02").s().p("AiPB0IgBABIAQgUQATgUAPgMQAPgLACABQgGAJgHAGIgOALIgUAUIgMANQgEADgBAAIgCgBgAgIgYQgGgGAUgSQAWgSAngUQAmgUAXgIQAdgGgXAKQgYAKghASQgiARgYAYQgTASgFAAIgDgBg");
	this.shape_46.setTransform(-0.6,0);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2D1B02").s().p("AiPB1IgBAAQAGgJAKgLQATgUAPgLQARgLABACQgHAJgHAFIgPALQgKAJgKALIgMANIgFADIgBgBgAgIgXQgFgFAUgTQAVgTAngVQAmgTAXgJQAegFgXAKQgZAKghASQgiARgYAYQgTATgFAAIgDgBg");
	this.shape_47.setTransform(-0.6,0);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2D1B02").s().p("AiQB1IgBAAIAQgTQAUgVAPgKQARgLACADQgIAJgIAFIgPALQgKAIgKALIgMANIgFACQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAgAgIgWQgFgEAUgVQAVgUAngUQAmgTAXgJQAfgGgYALQgZAKgiASQgiARgYAYQgSAUgGAAIgCgBg");
	this.shape_48.setTransform(-0.5,0);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2D1B02").s().p("AiQByIgBAAIAQgTQATgUARgKIgiAlIgRATgAgIgXQgEgEATgWQAVgVAngUQAmgTAXgIQAggHgYALQgaALgiARQgiARgYAZQgSAVgGAAIgCgBg");
	this.shape_49.setTransform(-0.5,0.2);
	this.shape_49._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_49).wait(50).to({_off:false},0).wait(18).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.2,-12.3,30.4,24.7);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Layer7();
	this.instance.setTransform(-33,-29.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33,-29.5,66,59);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.chain();
	this.instance.setTransform(-25.2,-120.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.2,-120.8,124,220);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Layer2();
	this.instance.setTransform(-21.5,-79.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.5,-79.5,43,159);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Layer4();
	this.instance.setTransform(-17,-57.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17,-57.5,34,115);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Ebene1copy();
	this.instance.setTransform(-124,-123.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-124,-123.5,248,247);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Layer3();
	this.instance.setTransform(-203.5,-97);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-203.5,-97,407,194);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("ApWNwQUKo8jkznIBggBQD1TQ0HKZg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.9,-94.9,120,190);


(lib.sprite27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424242").s().p("AgdG1IgFgLQhMAXhWAHQhQAGhKgeIgBgBQgwAZhAgVQhfBZhtg8IgCgGIAAgGQgyAOgegmQh4Adhjg4IABgGIAEgGIADgDIAcAEQBUgHBSgQIANgyQACgNAGgNQAwgIAtAXQgEhZAqhPQAWgrAvgFQBYAYgZBfIgCAHQBEgQA2AnQABAPgKALIgOASIAuAeIAEAEQBXAAgXBIQgDAIgJAFIAAAAIAlAHQgFgHAAgKIgEgfIADgEQAJgFAJgCQAjg4BHAIQAxg7BNgTQgig7AYgnIgPgNQhLAYg2g+IgCgEQhUgRhhgIIibgRQgDgBgCgGQBggcBogBQgGgYAKgUQAOgdAegMQg8hMgQhfQgLg6A0gXQBjAKAjBdIACAGQAVAJAcAAIAPAEQARAdADAiQACAiAgARQA7gRAzAmIAEAGIABAGIABAFIAAgcIgCgUQgnhzBzgxQAQgGASgBQBUAFAwA9QAMgPASgNQAfgWAmgIIAAgZQAAgNACgMQAKgOAPgHQAggQAmAFQAEgnASgjQAZgzAygDQCSgLAQCDQADAagKAYIgKANIAKAMQAcAEAZANQATAKAIAUQAcAIAeANQAaAKALAZIgBAHIgEAMIgNAUIgDAGQBdBwhtBTIgUAQQAVBPgsBIIAEAMIALATIgBAHIgBAGQAUAkgYAgIgiAlQglAOgngIIgJgFIgMgFQhjAjhhgpIgMAAQg2Adg4gbIgOAfQgHAOgMAJIgFACIgVAFQh1BmiggpQgeAQgYAAQgqAAgYg4gAleGbIAAADIAjAIQASAHgMgPIADgEgAi3FUIgKAHIgDADQAPADAZgNQADgFgHAAQgHAAgQAFgABKBzIABgDIgFgBgANUBgIAEgBIgBgCg");
	this.shape.setTransform(353.6,118.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#424242").s().p("AigIAQgdgSAHghIAEgTQg5ANgmgqQhcA8hvggQgzAhg/gRQhtBDh/gzIgSgNIgMgLQhWAFg+gwIgaABIASgGIgIgHIAOAFIBCgUIAJgEIAAgMIACgNQAkgwA9AXIABgDIABgGIAAgNIAGgGQAIgMAMgIIAHgFIAxgCQgjhOAphMQASgfAcgXIAPgBIAGgCQBdAIADBgIABAGQAxAJAPAwQAFAOgBAPIA0AbIAKARIADAAQAjAFAXAaQANgKAWgEIAygGQAYgtA0gLIAugDIAEgGIAXgYIAogEQgtgqAAgzQgWgBgRgNQg3APgzgdQgegQglABIgogBIgFgGIgBgGIABgBIgBAAQhZgXhggOQBfgeBtgOIAOgMQAVgRAcgFIgGgGIAAgHIAEgsIALgMIgCgBQhLgjgLhOQgNhhBngTQB7gEAWB0IAAAEQAOAFAPAJQAeASAAAjIARAFQAXAIAVAKIAogPQgCghAJgiQAShHBEgVQBpgNAzBWIAEAFQAmgMAfAFQAOgyAvgaQAVgMAZAAQgahZAphOQAUgnAtAAIAeAAQBigFAiBdIAAAEQBcALARBSQACANgDAMQBUAxAFBgIAAAQIADgDQBIA6g0BaIgDAGQAfAjATApQBtABACBuQAAAOgOAGIhDAVIgCAWIgfgBIABgBIAFgGIgBgHIgBAAQhKAShBADIgbgGIgLgEQASAHAQAMQAHAPAEARIABAMIARABIgCALQgEAPAFAQIgaABIgJALIgbAEIgEAGIgEAEIgDACQheAshXgfIhUgRIgGgGQgRADgZAKQgbBchmgBIhLADQg/BqhqhOQg4Ayg8AAQgtAAgugbgAnOGnIABAAIgBgCgApCGlIABAAIAAgEgAl2FcIAAgDIgCgBgAOqBuIADgIIgGgCg");
	this.shape_1.setTransform(371.8,117);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#424242").s().p("AgsI7QgfgLhhAKQgjgOgYgcQgDgQAAgQQAAgKADgJQgogYg9gIIgEgBQhYBCh0gpQhJAPg7AxQgQANgVAAQhkABhVgyQgPgJgSgBIhegNQgDgBgCgGIAHgFIAQgEIgxgCIgQgMIAEgDQAEgBAEAEQA8ACA6gPIAFgLIAGgSIAMgIIALgJQAOgqAxgEIAVgBQgBgeASgYQANgRAUgIQgyhAAbhJQAMggAhgLQBGgWAvAsQATARAPAbIAFAfIABAmQAVAQARAdQAGAKAAANQAjgEAaAXIANAMQAXgDAZAIQAQAFAOAHQAxgvA/AgQAvgeA4ABIACAAIgCgGIAAgHIAHgMIAFgHQhTg9APhOQjDA3jEhJIgFgHIgDgGQBChCBtAaQAugpA9AIIATABQgDgMAHgMQAPgaAdgLQgkgigXgrQgPgcAQgbQg+g+AzhCQAngxA+AGQCfABAICiQABAQgIAPIAEAMIgDAGQgHAJACALIA6AOQgchSA8hNQANgVAagIIAngJQA1ACAfAqIAEAGIADANIAyACIARAEQAZg2A3gDIAFgBIgFgFQAAgOAHgMQAIgPAOgJQhShrBkhWQAxgqBAgBQBfAKAdBdIACAGQBPAeARBPQACANgBANQBDAbAXBCIABAAIAEgDQA5AwgBBXIgDA6IAAgBIAagLQCHAggTCGIgCAHQBkAlgLBuIgFATQh3AciDgEQgRgBgPgGQABAXgJAZQgQAsgtgIQh9CFiihNIgIgFIgNALQgTAQgZgCQhKB8iZgmQgvAyg/AAQgeAAglgNgALjBFIAEgDIgEgDgANygfIAGAIIADAGIAFgIQgFgEgHgDgAFIknIgJADIALABIABAAIACgIg");
	this.shape_2.setTransform(382.2,113.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#78460E").s().p("AgfgCIA/ABQgQAEgQAAQgPAAgQgFg");
	this.shape_3.setTransform(368.1,170.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#424242").s().p("AhYJRIgZgMQhYAyg4hFQgMgPAHgVQgYgMgygGQg5gHgmgdIAAgBQhbAzhtgIQhMAvhWAGQgfACgegCIh1gPQhMgPhLgUIgjgBIAAgKIgCgFIADAAIABgEQBTgYBYgDQA2hBBEAsIACAGIABAGIgBAEQAVgbAggKIAfgLQgEgYAPgUIAVggQhzhiBihiQAPgQASgEQAuADAdAUIALgJIgEgCIAIgBIAAgBQAegSAhAIIAJABICHgMQAzg3BOgEIASgTIAFgGIgRgTIgGgXQgEgTABgTQhegUgQhfQgMhDA/gdQAhgQAhAAQB2AGAKB0IAAAGIgCACQAJAPgCATIgBAGIgEAEQAXAOAHAYIAGgIQAOgYAcgIQgIhVAihMQATgrApgJQCPAEgECMIAAAGIAFAFIATAPIAEAFIAEAEIAZADQgrhsBZgxQAcgQAbANQhRiWCJh0QAoghAtgLQCBALALCAQADAhgRAeQAsAnAIA+QACAXgDAWQA0AAAkAmQArAQAeApIAJAIQApBKgIBEIAPgGQCYAYgOCOIgDARIANgCQB8AgA6BnQAEAIgDAJIgXAXQitAoingpQANAbADAiQABASgSAKQgtAYg0AAQg1AlhLgbQhqBRiEgpQhKBhhzgsIgVgJQg+BAhJAAQgkAAgmgOgAFPHdIAAAAIAAgBgAKDGrIAJgBIgJgHgAnMF1QAxAEAyAXIAGATIACADQAog7BPgJIAOgEIAogPQgCgTADgTIAJgsQgkgWgSgbIiGgDIg6ACQhkANhkgRQAIAYAAAgIAAAGIAUAVQAIAHACAKIACAAQBVAAAfBKgApyCxIAMgCIgQgEgAoYCoIAIAAIAAgDIgEgBgALRCDIABACIACgCg");
	this.shape_4.setTransform(393.3,107.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#424242").s().p("AhIJlIgGgGIgBgHIgBgEIgogLQhKA0g/g6IAAgZQAEgNANgGQg5gRhagPIgFgHIgCgFQAsgVA5gJIAHACIAlgVQAYgQAfABIADgKIACgNQASgWAcgKIAGgDQgFgaATgSIAWgUIgRglQhaAQghgzIk7AaQhVgBhTgTQADAWgNAgQgFAPgRABQhUAEAIhRQADgcAXgQQA2ADASAZQBcg5ByALIBMgDQAJghAdgPQAngTAaAjIAIACQAOgHALgKIAJgyQACgRAMgOIANgUIgWgqQgGgNADgNIACgSQhKgHhCgvQgogHAIg8QAMhdBhgQQCqAIAlChQAHAhgQAeIAEADQAPAGAKAMQAHAKgDAJIgCAGIgEAEIgIAGIgBACIAFgBIAIAAQAUgYAhgIQg2iGBxhaQAHgFAKgBIAbgDQBiAaAOBTQALghAfgZQAqgjA5AWQADgKgBgKIAAgGQicg8AgieQAFgaANgWQARg0BNgVQAigKAggEQC+gJAWC3QADAUgCAUIACgBIAMgCIAAgBQB2A5gqBuIACADIACAAIAPgFIAAgBQByABBMBTIAIAHQA5BZgSBOQAKgGAMgDQB+AEATB9QAJA5gkAtQBOAOA7A5QAXAXgLAeQgeAYgpgDIgEAFIgDACQhGAUhEgVQglgMgnAEQgoAFgjgLIAEAmQABAPgNAJQhMA7hUgRQgcAZg4gQQhLgUhJAIIghAFQgrAKgcgUQgQAZgXAGQgyBUh1ggQg8A8hMAAQgRAAgSgDgAB8IKIADABIACgHgAMjFiIAAgBIAAAAgALaCHIAAAAIAAAAgAybI4QAFgGAGgCQAKgFANgBIAGgFIAFgGQBOgCBLANQAhgZApgNQAvgHAWAoQBAgGAwgsQAHgLgDgOQgEgQACgQIATgZIgbhSQAHgXAfABQAKAAAEgFQAogEAbAeIADAFQAKAJAMgLIASgNQBRALgTBIQgFATgPAMQBCAFAkA9IADAGQg/AxhMglQgRgCgLAMIgOAUQhJAihTgLIgFgHIgBgEIAAgBIgPgDIgKAHIgHAGIABAGIgBAGQhUAZhTAAQhsAAhqgqgAtTI+IAJgDIgEgEg");
	this.shape_5.setTransform(400.1,103.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#424242").s().p("AyYJuIgGgLQgBgDgDgBQAGgXAsgDIAAgBIATACIAOgCQAYgBANATIACAEIARANIAEAFQggARgiAAQggAAgjgPgAyFJeIgGABIAEADIADgFgAucJ2IgCABIgRgBIgDgEIgJgCIgXACIgGgCIAugaQAHgJADgLIAcgGQAKgBACgGIAMAAIAOgGQAkANAEAmIAAAGQgnAQgmAAQgNAAgMgCgAteJZIASgEIgGgMgAkCI+QgGgIABgJQhGgXhPgDQBGgqBaAFQAdgcAogCQAMgxAxgQIADggIgBgMIADgEIgDgEQgUgYABgfIgIgNIgHgFIgIgFIgIAIIlzAPIgEADIgPgCIgOABIACgCIgwADIgJgIIgBgEIiIgMQAwgoBNACICPAMIAJgSQADgKAIgHIAFgBQAcgYApAfIAHAGIA9gRIANgQQgag9A3hIQARgWAVgOIgCgEIgPAIIgIgGIgNgNIgEgFIgCgFIgBgGIgDgEQgUgJgXAEIgIgGIgagbIgCgFIgKAAQgUAQgWAKIgqAQQiIgKAGiCQADhJA/gqQAvgeAygJQBogRA+BNIAHAHIAEAUQAEASgEATQgDAMABANQACAPASAHQAPAGAJAOQA4AIATA0QAKAfgRAZIgPAAIAAABQAjAFAbANIgBgEIAFgMQAFgKAIgIIALgMIgFggQgFgcAAgdIAAgGQiGgyBNh0QARgaAdgCQCbAJAZCUQAFAgALAeIACABQAFglApgiQArgmA9ADQgCgPAEgOIADgNIABgRQgkgGgegUIgKgGIgKAHQhKANg1gkIgCACQhag7A4hoQAohIBXgJQAjg9BGgPIAsgGQCwgHAvCgQASA6ANA6QACAIAHAJQAlAvAYA1QAUgQAYgOQAKgFALgCIAHAGIAggEIAfgNQCJAfAACQIgCAWQA4AaABBCIgBAGQBAAyAaBTQALAjgUAgQA3AoA+AgQBQAqgZBFQiEASiHAEIgEAAIAMAMIAGAZIAAATIgOATIgTAEQhcA2hGg8QhJALg7gjQhiBTh3hVQgpAlg2gBQhPCAiMgqQhHA8hZgkQgrAfglAAQgxAAgng0gAhHI1IABAAIAAgGgABbIiIADAAIAAgFgADoEqIAHAHIgBgNgAhfAZIABABIACgBgArpJIQgFgMgCgNIgBgNQAUgwAygPQgfgtgTgzQgCgFABgGQANgOASABQA6AIAFA5IADAHQARAQAXgXQAOhIBDAsQAGAEACAKQACAJgDAKIgmAyQALATAiATQAzABAWApQhNAdhagmQg/gag7AyQgIAIgKAAIgJgCgAt/EnIgBgBQgMgFgLgMIgCgNIAAgfIAEgGQAHgJAJgDIABgBIAZACQAMAHAHALIAPAUIgDAZIgkAVg");
	this.shape_6.setTransform(408.1,99.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#424242").s().p("AvOKFIgDgTIAEgNQACgLAHgIIAFgDIAIgCIAAgBQAUgCAPANIAFAGQAEAQgIAQQgGAKgLAGQgJAEgIAAQgOAAgLgMgAjwJaIgGgGIgggIIgKgXIh/gNQBmgbBpAPIAbgaIACgGIACgNQAXgZAggKIATgFIACgyQgagUgIgeQgHgbAOgYIgCgBIgBABIgHAJIgFAEIhGgJIimgIIgGgHQgRAEgRAHIgEACIgNgLQA3gJAfgkIgJgFQgWgNgOgPQgogrAdg9QAOgdAfgOIASgKQAMgYAVgPIAHgEIgNgDQgOgOADgXIABgGQgegWgXgiIhOgDQgLgNgIgQQg9BmhogWIgBACQgRgFgOgHIgBAAIgIgFQg1giAIhRQAGg7AvgpQBVhLBxAGQCUANgCCNIgDAGQAJARASAPQAXAVgFAdQBtgNAmBZIAGgPQANgZAVgTQgGgQgQgRQgUgTAAgcQhrANgNhcQgHg4A0gbQAbgPAbgGQAxAEApAeIAHAGQBcAzgUBkIgDAHIAFAFQADACAFABQAshuByAiQASAFAPAKQgCgcALgbQAEgKAGgJQgQgXgngYIgygjQgTAIgTADQhhArhUhaIgEgGQgTh3Bng5QAygeA6ATIAIgCQAWgjAogUQAagNAagGQCtgGA2CoQAIAZADAbIABABIABABIAHgGIADgCIAAgCIADACIAHAkIgRgQIABASIgBAHIgBACIABAAQBTAWA1BQIAFAFQCSgpBJB1QASAeADAlIgBAZQgQBDgwASIAGAGIACAGIgGATIADgBQCJghAiB/QAJAigOAhIgFALIgBABIABAAIAAgBQBFAugBBbQgBAKAIAJQAYAbgOAdIgtAVQhAAOhCgLIAJAeQACAOgMAIQhDAphNgUIgHgGQhAAbgzgXQgeAngyANQgaAHgXANIgMAAQg0AghCgtQgPgKgIgPIAAgNIgJgNIgCgGIADgHIgHgGQgQASgagSIgPADIgGAGIgCAZIhDAzIgLAEIgNgEIAAgNIgCABQhKAkhDAwIgOADIh6gIQgPAQgUAAQgXAAgdgXgAkPIwIABADIAJgFIgKgCgAA1IXIACgBIgCAAgAIgHBIAMAFIgKgHgADCHFIABAAIgBgCgAlHEZIA2gFIAAgGIgUgBgAi5DwIACAAIAAgBgAI6C4IABgCIgLgEgALvghIACgDIgCAAgAp3IoIgHgGIgOgLQguATgpgOQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAAAAAIgIALIgIgCIgFgEQAcg2BLgBQAQgUAHgYIAHgZIATgTIAKgDIAAgBIAgACQALAKACAPIABAZQgHAPgOAKIgSANQADAPAJASQAGALgCANIgFAGIgJAGgAsLG3QgJgdAcgLIALgJIAQAEIAJAFIAFATIABASIgDAGIgHAHIgkACgAsAEyQAzgPA8AAIARgRIANgDIAAgBQA0gHASArIABAGIgEAGIgEAEIgGADQgZACgYAAQhOAAhHgVgAv/EsIgBgHIgBgTIAEgGQAEgJAFgIIACgBIARgDIAYAOIAFAFIAAATIgZAXg");
	this.shape_7.setTransform(417.4,95.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#424242").s().p("AigKgIgNgCIiagFQgqAGgNghQA0ggBAgGQANgPATgJQASgIATgBIARgWQAOgWAagHIgCgGIgHgLQgMgSgRgPIgEgZQgCgfAMgaIgDgFQgUAQgmgLIgIgJIgTAAIgRAEQgVAAgQgMIgDgCIh4gRQBFgNBKgCIAFgGIAEgEIACgCIACgBIAAgCQAsAUArAZIALAGIg0gqIACgEQAFgEAGgBQAmAMAkARIADgGQACgfAMgeIgGgXIAAgCQgTg3g1gqQgLgJgCgQQgKhFBLgEQgBgOAHgMIAHgMIgegqIgCgNQgCgJAJABQAVATASAWQgKgZgRgQIgPgJIgGAAIACgEIgEgGIADgFIAQgGIAHACIABAAIACACQAXAJAOASIADADIAaAuIAEgBIANgFQgjg7Alg7IARgYIAbgbIAfgHIABgBQBCAIAhAkQAagoAkgeIAUgOQgigggJgtQgFgWADgVQgOgMgpgMQgPgFgOgJQgKgHgJAPIgEAFQggAHgZgSIgFAAIgKAHIgHAKIgBACIgBAAQgQAQgeAGIgUACQg2AEg0gNQgTgPgNgRIgLgRQgeg4AmhJQASgiAigUIAZgCIgCAGIgIAHIAJgFQAsgYAxAOIAQACIgCgTIADgGIAFgTQAYgqAugMIAdgHQBJAHA0AnQAkAcAbArQAOAYAHAdIgDAHIgEAGIACAGIAAABQAUAxArAcIAXgDIAAgBQBcAaAQBNQAOgNAcgBIAAgBQCpApgbCpQgMBJhEAiQgdANgfABIgNATIA1AyQBdhQBVBTQAIAHgBALQAgAegKAoQgHAXgNAVQBHAKAyA9QANARgBAVQAFALAJAJIAFAGIAAAZIAmAmQg3Beh6gfIg1gPQg/gTgygbIgIAEIAHAMIADALQAUAJAPARIALAMIACANIgBAMIgBAHQhRAshfgMIgOAaQgNAWgaAJQhLAZhKghQg2gZg7gLIgFAHIiYAHIgCA4IgCANQgiAogwAAQgPAAgQgEgABVIKIAGABIgCgDgAKyD5IABADIAAgDgAB7AGIACgBIgGgFgACKgGIAEgCIgCgEgAlAEKIgFgEIAAgHIACgMIAJgOQAFgLAJgFQAZgCARARIAEAGQgBAtgbAAQgPAAgXgNgAoNEDIgIADQhjhBBPhWQAXgaAngCQAOgkAngRQAUgJARgDQB3AQgEBrIgDAaIg5AkQACBJhYgCIgeABIgIAAQgcAAgbgQgAtlgYQghgTADgmQAOi3CtgxQCBgEAxBXQARAgAHAsQADATgMASQgeArgfgwQgTAKgUgEIgPgEQgagLgXgOQAIAYgFAaIgEATQgLAigcAYQgkAOgiAAQgoAAgkgUgAtTgnIAGAAIAAgFgAndguQgEgJAAgKIAAgMQAKgOALgMIAEgGIALgDIAAgBQAjAJgCAlIgBAHQgPAWgVAAQgNAAgPgIgAjphWQgNgEgGgLIgBgDIgFgHIgCgeIgigKQgvAggrgkIgRAAIgKgHQgUhGAygwQAPgOAWgHIAVgIQAuARAeAmIACAEQA5gBAYAgQAOAUADAfQABAQgHAQIgIAGIgGAZIgcATg");
	this.shape_8.setTransform(432.6,88);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#424242").s().p("AiGK0IhegRIB6gTIAGgGIABgGQAAgEACgDIAKgNIACgEIA3gGIgDgNIgBgZQALgMAOgHIAJgEQgugHgNgqIgBgGQAGgPAWAAIANgBIAQADIANAFQAJAPAEARIACAZIADAFIASAOQAKAUgOASIgPASQgEAKAFAKQAGAMgBANQgwAfg+AAQgcAAgdgGgAEyJNQhygehxAOIgZADIABgGIgBgZQgBgKADgJIAEgFIABgBQAOgPAVAAIAWgKQARgGAMgQIgGgWQgRgDgNgNIgKgKQhCAGg6gOIABABQh7Aph7hAIAFgMIAGgHQBNgYBQADQAKgLADgOIACgGQAvgTAsAuIBQgdQgPgWgSgiIgBgFQg+gEg0grIgGgkQhFAagXhNQgLglARgfIAAgNQBLhVBEBbIALACIAlgIIgCgHIgCgMIAAgGIAEgHQAGgKAJgGQhKgegDhKQgCg/A4gfIAEgNIAJgGIAfgPQBGgIAjA9IADAGQAcgVAiAFIAAAAIAFgHIAQgDIABgCIAOADIgRgHIAJgMQATAIAVACQAShFBEgLQBiAxgdBqQgFASgNAPQAeBThIA2IgHAGIADBFQAAAOgHALQBLAjASBFIAEgDQAfgGAeANQAQhQBOgMIAAgBQBfAUgjBbQgKAZgUASQBKgHAZBCQA4ALAdAtQAHAJgEANQhMBIhxgjQgXgIgYgCQARASgFAgIgBAHQhWAShYgHIgGgCQgeA9hGAAQgYAAgdgHgAHQILIAFgDIgCgEgAGvFuIAEgCIgCgFgAnFEiIhFAGQgrglgDg5QgCgtAfgfIAKgDIAAgBQBlgQAPBZIAAAHIAEABIAqAJQAdA5g9AZQgMAFgLAAQgQAAgPgJgAmTBcIABgGIAGgTIAVgJQAOgEAJgGIAgACIAOANIAPATIABAGIAAAMIgBAHQgeAXgZAAQggAAgZgmgAJKgDQgWgMgLgXIAAggQhehbBZhhQAUgXAZgKQB1AwgDCFQgCBJg9AiQgPAFgOAAQgPAAgOgFgAtgiNQADg9A+gKQAUgDAOgOQACgCADgBIATAIIAEAAIANAAQAVAUgIAfIgFATQAAAKAJAJIAIAGQAEASAAAUIAAATQgaAjgrALQhpgQAFhjgAi6h7IgMgNIgDgGIgCgGIgOgMIgEgHIgBgGQhAAghEgTIgLgbQgHgRABgUIADgFIAFgHQAFgeARgZQAQgXAXgCQA+AEAoAuIAEAFQBsAgg4BcQgKARgRAAQgHAAgIgDgAowiZQgMgFgFgLQhpAPgDhdIABgMIAQgaIAFgMIAdgMIAAgBQCCASgFB7IgBAGQgNAPgRAAQgJAAgLgFgAjIlpQgngRgFgpQgPhzB1gpQAfgLAggGQAxhtB6AEQBHAIAQA/IACAFQCCA7ghCJQgMA1g5gQQgZgIgOgVQhEAAgng1IgHgCIgEACIgCACIgKgCQgfAkgtAGQgaBThFAAQgeAAgngQg");
	this.shape_9.setTransform(428.4,84.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#424242").s().p("AATK/IgIgEIgLgKQAZg0BEAFQAHgIgBgLQgBgKAHgGIARACQAfAbACAqIABANQg7ANhEAAIgKgBgADEJBQgCgNAHgMIAHgNQA4ghAjgxIgLgSIlfAEIgEgHIgBgEIgmgBIgEgDQBMgeBVARIALgMIAIgHQAEgNAIgMIAJgNIAMgEIAAgCQAWAIASATIAEAFIBAgJIAEACIBtgGIAGgGIANAAIgEgJIAFgFIAHgGIAAgBQAbAKAQAdIAEAHQAcBYglBSIgIANQhagFhZAQgAgJIXQAAgNAKgIIAHgGQAWAAARAOIAEAFQgOAfgRAAQgOAAgPgXgAK6HxQhigEhjgBQgPAAgLgMQgDgXAPgSQAPgRAWgJQgfgSgXghQgFgJAAgJQhUgIgbhNIgDgMIAFgFQAGgDAGgBIACgCIAEgMIAFgEIAMgFIAEgCQCBAPAOB+IAAAEQA6AaA6gLQgFg6AMg2QACgIAHgCIArgKIAIAGIALANIgBAZIgBAGIgWAYQgMAMgIAPQgDAOAIAMIASAeQA5gOAiAyIASAiQgtAehCAAIgLgBgAoGDTQgBgNADgMQASgZAdgKIAKgFQAugBAIAvIADAEIBBADQAGAIABAKIACAgQgxAmg5AbQhMgUgIhTgAC+D+IgNgHIgDgNIgGgMQgGgEgHAAIgIACIgCgBQgxAlg4g6QgQgQgJgVQhWAkgzhHQgIgLADgQQAIgtAjggIAGgXQAVgXAhASIARAGQgRg5AZg4QAcg4A7gOQA1AGAsAgIAHAEQAvgcAjAZIAEgBQCNCAhKCzQgnBehaAAQgMAAgOgCgAk+CDIgPgMIAAgTQAJgUATgJIAIgFIAXAJIAJAGIAGAZQgNAcgcAAQgIAAgKgDgAKEgOIgCgHIAAglIAFgGIAagUQghAGgngVQgegQgIgiQgIggATgZIgBgGIAAgGIABgNIAMgNQAPgSAUgFQB5AHgKB6IgEAZQAEANAJANQAQAXgIAbIgFAGIgWAXIggAHIgJABQgVAAgQgOgAsLgqQgVgWgPgcIgEgGQgGg6AzgYIAKgFIAUAGIAKAFQAHAPgGARIgEAMQAaAQAVAWQgBA8gtAAQgSAAgZgKgAGRiNQgEgZATgTIAJgBIAAgBQA8APgGBBIgCAGQgVAPgQAAQgeAAgJg3gAkaiRQg3g7AShIQADgMALgIQAWgQAUgJQB7gPAmBsQAYBAhDgKQgZgDgIgXIgJgOQgJAdgUAWQgUAVgaAAQgKAAgKgDgApmjeQgHgMAAgQIADgGIAFgHIADgGIgBgCQgHgBgHABIgCgKQAAgEABgCIAFgLIAEgCIAGgBIABgCQBlAJAUBVQAEANgKAJQgbAMgWAAQguAAgYgvgAh4ljQgUgBgRgMIgUgOQgIgZgGgZQgEgWAFgXIAvgzIABgGIABgNQA6hEBigBQAShLBOgIIAHgBQBmgQAkBZQAFAOAMAKQApAlAGA3IgEAGIgFAGIgIAFQAEBchWgYQgagHgYgOIgkgWQgIgVgTgMIgWgRIAAgeIgugOIgLgFIgHAIIgDAFQAIAcgLAcQgKAYgVAPQAHBphoAAIgIAAg");
	this.shape_10.setTransform(422.2,80);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#424242").s().p("ALXJ6IgXgLQhDAJg8gRQABgUAJgUQAIgUASgOIAHgCIAGAAIAAgCQAvAIAiAlIAJAIIAEAGIAAAGIAXAFIAFADIgBAHIgLAMIgHAFgABmJGIgEgHIgEgMQAngYBAAFIALgJQALgIAFgJQAxAaA1AWIADAFIgCAFIgEAFIgGADgAGwGbIgFgHIgBgGQAAgOARgFIARgGQA3AFAAA2IgBAGQgXASgSAAQgcAAgNgtgAm4GgQgMgCgKgKIgLgMQgHgfAEggQACgQAGgQIAOgLIACgBIARgCQAPgBAMAHIAJAGIAFAMIADAHQAtgJAZAjIgBALIgBAIQgkA8g4AAQgMAAgNgDgADgEhQhCAdgyg0QhLAThHgWIgGgDIgCAAQgOgGgLgMQgPhDA9gvQATgPAWgHQgMiBCIgTQANgCAEgEQBHANAdA/IADAGIgCAHIAAAFQATAJARAVIAEAEIAIgDIAEgBQBPBOg1BoQgXAugnAAQgWAAgcgPgALoBPIAOgLIAdAKIAJAEQAGAdgYAUIgUAMQg/gWAxgqgAsdAiIADgMIAEgYIACgGIAEgDIAGgEIAAgCQBCAOgMBEIgBAHIgFAGIgIAEQgrgFgQgrgAJhgGIACg/QABgVAUgJIAIAAIABgBQBiAQAFBhIAAAGQgfASgbAAQgrAAgigrgAk3hHQgCgxAUgsQAIgSAOgFIAaACQBDAygdBSQgEANgLAGIgMABQguAAgfgmgApAhrIAAgaQAKgUAYgFIAEgCQBDALgBBBIgBAGQgTAJgSAAQglAAgdgmgAjJiVQgCgKACgJIAAgTQAGgGAIgCIAJgGQA1ANAMA0IAAAGIgHAMIgFAEIgOABQgoAAgWgkgAiylbQghhEBVgSIAagIIADgIIABgFIAAgGQAfgxA8ATIALAMIAMAHIAGgGIARgTQgHhSBLgbIAZgLIACgGIAEgFIAXgGQBWAMgGBVIAAAGQBIArgIBZQgFAxgyAJQguAIgegmQgEgJABgKQACgOAHgLIgGgaQgzATg7gbQgUAMgYAHQgCAagGAYQgGASgQAIQAIA1gdAwQgJAOgQAJQh+AAACh2g");
	this.shape_11.setTransform(418.1,64);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#424242").s().p("AHoJKIAAgTIATgfIANgFQAaAHASAVIAEAGIgDATIgBAGQgGAMgLAHIgZACQgTgKgPgPgApJF4IAAgTQANgWAfAAIAAgBQAZgBALAVIAEAHQgNAsgYAAQgUAAgbgdgAinDGQgHgQgBgTQgDhSBPgdQAAg4ApgqQAZgaAhABQCKgHABB/QAAANgEANQAmAlgEA6QgCAmggAXIgDABIgUABIAJgVIgBAAQg0Ahg+gTIgMgCIgIANIgDAGQglAUgeAAQg1AAgehBgAIogFQg2gDAKg4QACgNAHgKIADgCIAIgBIAAgCQBVANgoA/QgHALgNAAIgBAAgAmUhCQgKgPAAgRIgBgZIAKgNIADgGIAKgFIABgBQBUARg4A8QgKALgMAAQgJAAgKgGgAkpkfQgxhkBNhIQAKgJAPgEIAdgLQAqgLAUAiIADAGIABAHIgDAZIgEANIgTAMQgMAIgJALQAcAlgKAuQgFAYgXALQgQAFgOAAQglAAgYgggACBmiIgFgGQgHgbAOgYIAGgMQAHgOAQACIAAgBQA6AfggA3IgFAHIgmACgAgZnzQgSgDgIgPQgDgeAQgYQAMgTASgPIARgCIAIABQAIABAAgEQAkgFAbAWIAHAGQgHBZhWAAQgLAAgQgCg");
	this.shape_12.setTransform(429.4,62.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#424242").s().p("AjsFtIgEgFQgegFgPgYQgIgOADgSIgJgMQgGguAeggQASgUAaAKIAOAEQAAgXAPgPQAYgaAhgGQBpgJAABbQAAAjgXAcIADAGIAUAUIAEAGIABAGIgBANIALATQgIAfgiAHQgYAFgUgQIgEgGIgDgHQgeAegfAAQgcAAgdgbgAGBC6IgDgHIgBgMIAAgHQAEgLALgGIAOgIIAbAKIAHAFQAFANgFAMQgDAKgKAHQgJAEgJAAQgPAAgNgKgAm+ibQAAgRAHgRQAIgVALgVQAMgWAVgHIATACQAiAZgNAmIgEAMIgIAHIgJAMQAdAfgSAmIgHAUQgMACgKAAQg+AAAChSgAiPlMQgEgMAEgNQAHgVAOgNIAdACIAZATQAJAIAEALIgDAMQgHAQgRAIIgPABQgbAAgTgSg");
	this.shape_13.setTransform(441.6,39.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#424242").s().p("ABYEdIgPgNIgBgGIgBgTIgCABIgbgBQgSgMgEgUIgEgfQAPgbAegKIAVgFIAJgPQALgRAQgEQBdAGgpBPIgMAaIACAGIAIANIABAHIgBAMQgKAPgOAIQgMAHgPACgAizjYQgEgJACgKIACgNIARgTQgCgGADgFIADgIQArAKgMAzIgCAHIgEAFIgIAHIgaACg");
	this.shape_14.setTransform(414.5,44.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(256.7,68.9,193.9,98.8);


(lib.Символ37 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(0,0,1.107,1.107);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:44.4},0).wait(1).to({x:70.1},0).wait(1).to({x:86.1},0).wait(1).to({x:97.5},0).wait(1).to({x:105.6},0).wait(1).to({x:111.2},0).wait(1).to({x:115.2},0).wait(1).to({x:118.4},0).wait(1).to({x:121},0).wait(1).to({x:118.8},0).wait(1).to({x:116},0).wait(1).to({x:112.2},0).wait(1).to({x:106.6},0).wait(1).to({x:97.9},0).wait(1).to({x:86.3},0).wait(1).to({x:73},0).wait(1).to({x:56.2},0).wait(1).to({x:32.9},0).wait(1).to({x:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.2,-60.3,244.5,120.6);


(lib.Символ36 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(0,0,1.107,1.107);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:47.7},0).wait(1).to({x:74.4},0).wait(1).to({x:90.3},0).wait(1).to({x:101.2},0).wait(1).to({x:108.5},0).wait(1).to({x:113.6},0).wait(1).to({x:117.3},0).wait(1).to({x:120.3},0).wait(1).to({x:123},0).wait(1).to({x:120.3},0).wait(1).to({x:116.8},0).wait(1).to({x:112.2},0).wait(1).to({x:106},0).wait(1).to({x:97.7},0).wait(1).to({x:86.9},0).wait(1).to({x:73.5},0).wait(1).to({x:55.5},0).wait(1).to({x:30.4},0).wait(1).to({x:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.2,-52.5,244.5,105.1);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ34();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10).to({alpha:0},9).wait(1));

	// Слой 1
	this.instance_1 = new lib.title();
	this.instance_1.setTransform(-142.7,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.7,-33,285,65);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.alpha = 0.602;
	this.instance.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance.cache(-326,-63,651,126);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-326.6,-63.8,656,130);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(-4.8,-4.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0,y:0},3).to({x:-4.8,y:-4.6},3).wait(1).to({x:0,y:0},3).to({x:-4.8,y:-4.6},3).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,-9.7,11.2,10.2);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ14();
	this.instance.setTransform(-10.8,-11.6);

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah5BpQgEgNAJgPQAJgOAGgCIANgFQAGgCAMAEQAMAEAEAGQADAGgPATQgPASgSAEIgGAAQgNAAgDgKgAAZgqQgEgNAKgPQAKgPATgNQATgNASgDQASgCAGAJQAGAJgJAPQgKAPgVAQQgVARgTADIgGABQgNAAgDgLg");
	mask.setTransform(-7.7,-5.6);

	// Слой 4
	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(-17.5,3);

	this.instance_2 = new lib.Символ15();
	this.instance_2.setTransform(-0.7,-13.7);

	this.instance_1.mask = this.instance_2.mask = mask;

	// Слой 1
	this.instance_3 = new lib.Символ13();

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33,-29.5,66,59);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.3,x:-0.1,y:0.6},7,cjs.Ease.get(-1)).to({rotation:-2.7,x:-0.2,y:1.2},7,cjs.Ease.get(1)).wait(20).to({rotation:-1.3,x:-0.1,y:0.7},7,cjs.Ease.get(-1)).to({rotation:0,x:0,y:0},8,cjs.Ease.get(1)).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-29.5,66,59);


(lib.Символ3копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg3vASzMAbAgrbMBUfAF2MgbAArbg");
	mask.setTransform(-9.5,-8.8);

	// Символ 18
	this.instance = new lib.Символ18();
	this.instance.setTransform(-64,-21);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,x:-72.8},3,cjs.Ease.get(-1)).to({scaleX:0.8,x:-81.6},3,cjs.Ease.get(1)).to({scaleX:0.9,x:-72.8},3,cjs.Ease.get(-1)).to({scaleX:1,x:-64},3,cjs.Ease.get(1)).wait(1).to({scaleX:0.9,x:-72.8},3,cjs.Ease.get(-1)).to({scaleX:0.8,x:-81.6},3,cjs.Ease.get(1)).to({scaleX:0.9,x:-72.8},3,cjs.Ease.get(-1)).to({scaleX:1,x:-64},14,cjs.Ease.get(1)).wait(20));

	// Символ 17
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(27,0);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.91,rotation:4.8,x:1.4,y:11.2},3,cjs.Ease.get(-1)).to({scaleX:0.83,rotation:9.7,x:-24.2,y:22.4},3,cjs.Ease.get(1)).to({scaleX:0.91,rotation:4.8,x:1.4,y:11.2},3,cjs.Ease.get(-1)).to({scaleX:1,rotation:0,x:27,y:0},3,cjs.Ease.get(1)).wait(1).to({scaleX:0.91,rotation:4.8,x:1.4,y:11.2},3,cjs.Ease.get(-1)).to({scaleX:0.83,rotation:9.7,x:-24.2,y:22.4},3,cjs.Ease.get(1)).to({scaleX:0.91,rotation:4.8,x:1.4,y:11.2},3,cjs.Ease.get(-1)).to({scaleX:1,rotation:0,x:27,y:0},14,cjs.Ease.get(1)).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152,-137,304,274);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ADmakIgIggQgbhwgfhxIhQgvIgwAIQgYA3gcA1QgPAZgFAQQBnl1jLi7QjPi8i7gtQi6gsi7A7QraDjrJEcMAAAguoMBJVAAAMAAAA1Gg");
	mask.setTransform(35.6,-12.8);

	// Символ 17
	this.instance = new lib.Символ17();
	this.instance.setTransform(27,0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.91,rotation:4.8,x:1.4,y:11.2},3,cjs.Ease.get(-1)).to({scaleX:0.83,rotation:9.7,x:-24.2,y:22.4},3,cjs.Ease.get(1)).to({scaleX:0.91,rotation:4.8,x:1.4,y:11.2},3,cjs.Ease.get(-1)).to({scaleX:1,rotation:0,x:27,y:0},3,cjs.Ease.get(1)).wait(1).to({scaleX:0.91,rotation:4.8,x:1.4,y:11.2},3,cjs.Ease.get(-1)).to({scaleX:0.83,rotation:9.7,x:-24.2,y:22.4},3,cjs.Ease.get(1)).to({scaleX:0.91,rotation:4.8,x:1.4,y:11.2},3,cjs.Ease.get(-1)).to({scaleX:1,rotation:0,x:27,y:0},14,cjs.Ease.get(1)).wait(20));

	// Символ 18
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(-64,-21);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.9,x:-72.8},3,cjs.Ease.get(-1)).to({scaleX:0.8,x:-81.6},3,cjs.Ease.get(1)).to({scaleX:0.9,x:-72.8},3,cjs.Ease.get(-1)).to({scaleX:1,x:-64},3,cjs.Ease.get(1)).wait(1).to({scaleX:0.9,x:-72.8},3,cjs.Ease.get(-1)).to({scaleX:0.8,x:-81.6},3,cjs.Ease.get(1)).to({scaleX:0.9,x:-72.8},3,cjs.Ease.get(-1)).to({scaleX:1,x:-64},14,cjs.Ease.get(1)).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152,-137,304,274);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.alpha = 0.43;
	this.instance.filters = [new cjs.BlurFilter(8, 8, 1)];
	this.instance.cache(-62,-97,124,194);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.9,-98.9,131,201);


(lib.Символ9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(38.2,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},7).to({alpha:1},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.7,-95.8,131,201);


(lib.Символ35 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.setTransform(0.2,0.5,0.805,0.805);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-0.2,regY:-0.5,x:0.1,y:-1.6},0).wait(1).to({y:-4.2},0).wait(1).to({y:-7.9},0).wait(1).to({y:-12.9},0).wait(1).to({y:-19.6},0).wait(1).to({y:-28.4},0).wait(1).to({y:-40.2},0).wait(1).to({y:-57},0).wait(1).to({regX:0,regY:0,x:0.2,y:-79.5},0).wait(1).to({regX:-0.2,regY:-0.5,x:0.1,y:-55.8},0).wait(1).to({y:-40.6},0).wait(1).to({y:-30.1},0).wait(1).to({y:-21.8},0).wait(1).to({y:-15.3},0).wait(1).to({y:-10.4},0).wait(1).to({y:-6.7},0).wait(1).to({y:-4},0).wait(1).to({y:-1.8},0).wait(1).to({regX:0,regY:0,x:0.2,y:0.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.7,-26.1,229.4,52.3);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-326.6,-63.8,656,130);


(lib.Символ11 = function() {
	this.initialize();

	// Символ 6
	this.instance = new lib.Символ6();
	this.instance.setTransform(-130.5,-47.5);

	// Символ 5
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(-58.5,11.5);

	// Символ 3 - копия
	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(30.5,0);

	// Символ 3
	this.instance_3 = new lib.Символ3копия();
	this.instance_3.setTransform(-70.2,-18.3,0.333,1,-11.7);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-223.6,-204.9,524.5,362.1);


(lib.Символ1копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.instance = new lib.Символ9_1();
	this.instance.setTransform(-226,146.9,1,1,0,0,0,-76,86.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,scaleY:0.98},10,cjs.Ease.get(-1)).to({scaleX:0.99,scaleY:0.95},10,cjs.Ease.get(1)).to({scaleX:0.99,scaleY:0.98,x:-225.9,y:147},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:-226,y:146.9},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.7,-35.3,132,201);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(-226,146.9,1,1,0,0,0,-76,86.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,scaleY:0.98},10,cjs.Ease.get(-1)).to({scaleX:0.99,scaleY:0.95},10,cjs.Ease.get(1)).to({scaleX:0.99,scaleY:0.98,x:-225.9,y:147},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:-226,y:146.9},9,cjs.Ease.get(1)).wait(1));

	// Layer 2
	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(1,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:5.3,x:-8.6,y:77.3},10,cjs.Ease.get(-1)).to({rotation:11,x:-18.2,y:82.2},10,cjs.Ease.get(1)).to({rotation:5.1,x:-8.1,y:77.1},10,cjs.Ease.get(-1)).to({rotation:0,x:1,y:72.5},9,cjs.Ease.get(1)).wait(1));

	// Layer 4
	this.instance_2 = new lib.Символ7();
	this.instance_2.setTransform(-76.5,94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:5.8,x:-84.5,y:98.5},10,cjs.Ease.get(-1)).to({rotation:11.9,x:-92.5,y:102.5},10,cjs.Ease.get(1)).to({rotation:5.5,x:-84.1,y:98.4},10,cjs.Ease.get(-1)).to({rotation:0,x:-76.5,y:94.5},9,cjs.Ease.get(1)).wait(1));

	// Слой 11
	this.instance_3 = new lib.sprite27();
	this.instance_3.setTransform(10.5,95.2,0.381,0.381,0,0,180,-0.1,0);
	this.instance_3.alpha = 0.398;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({_off:true},14).wait(16));

	// Layer 7
	this.instance_4 = new lib.Символ11();
	this.instance_4.setTransform(37,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-1.6,x:33.4,y:-15},10,cjs.Ease.get(-1)).to({rotation:-3.5,x:29.8,y:-13},10,cjs.Ease.get(1)).to({rotation:-1.5,x:33.6,y:-15.1},10,cjs.Ease.get(-1)).to({rotation:0,x:37,y:-17},9,cjs.Ease.get(1)).wait(1));

	// Layer 3
	this.instance_5 = new lib.Символ4();
	this.instance_5.setTransform(29,55);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.6,-221.9,524.5,381.6);


// stage content:



(lib.angel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//Prepare
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		var _this = this;
		this.red.visible = false;
		this.green.visible = false;
		
		//clickTAG
		
		this.knopke.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
		this.btn1.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open(clickTAG, "_blank");
		}
		
		this.btn2.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open(clickTAG, "_blank");
		}
		
		//Stage
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		 function fl_MouseOverHandler_5()
		{
		    _this.tittle.gotoAndPlay(1);
			_this.btn1.gotoAndPlay(1);
			_this.btn2.gotoAndPlay(1);
		}
		
		stage.canvas.onmouseout = qwe;
		
		function qwe()
		{
		    _this.tittle.gotoAndPlay(10);
			_this.btn1.gotoAndPlay(10);
			_this.btn2.gotoAndPlay(10);
		}
		
		//Buttons
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.btn1.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler()
		{
			_this.green.visible = true;
		}
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.btn1.addEventListener("mouseout", rew);
		
		function rew()
		{
			_this.green.visible = false;
		}
		
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.btn2.addEventListener("mouseover", fl_MouseOverHandler_2);
		
		function fl_MouseOverHandler_2()
		{
			_this.red.visible = true;
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.btn2.addEventListener("mouseout", fl_MouseOutHandler_2);
		
		function fl_MouseOutHandler_2()
		{
			_this.red.visible = false;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 2
	this.btn2 = new lib.Символ37();
	this.btn2.setTransform(3,234.2);

	this.timeline.addTween(cjs.Tween.get(this.btn2).wait(1));

	// Слой 1
	this.btn1 = new lib.Символ36();
	this.btn1.setTransform(3,131.1);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(1));

	// Слой 7
	this.knopke = new lib.Символ38();
	this.knopke.setTransform(320,152.5);
	new cjs.ButtonHelper(this.knopke, 0, 1, 2, false, new lib.Символ38(), 3);

	this.timeline.addTween(cjs.Tween.get(this.knopke).wait(1));

	// Слой 6
	this.tittle = new lib.Символ35();
	this.tittle.setTransform(129.7,45.6);

	this.timeline.addTween(cjs.Tween.get(this.tittle).wait(1));

	// Слой 4
	this.green = new lib.Символ1копия();
	this.green.setTransform(474.8,148.4);

	this.timeline.addTween(cjs.Tween.get(this.green).wait(1));

	// Ebene 1
	this.girl = new lib.Символ1();
	this.girl.setTransform(473.3,152.6);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Слой 12
	this.instance = new lib.Символ22();
	this.instance.setTransform(466,292,1.053,1);
	this.instance.alpha = 0.898;
	this.instance.filters = [new cjs.BlurFilter(26, 26, 1)];
	this.instance.cache(-138,-20,275,41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.red = new lib.Символ30();
	this.red.setTransform(322.6,246.1);
	this.red.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.red).wait(1));

	// Слой 11
	this.bg = new lib.Символ23();
	this.bg.setTransform(320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(200.7,83.2,930.5,396.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;