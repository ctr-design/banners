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
		{src:"images/girl1.png", id:"girl1"},
		{src:"images/girl2.png", id:"girl2"},
		{src:"images/logoblues.png", id:"logoblues"},
		{src:"images/r1.png", id:"r1"},
		{src:"images/slot1.jpg", id:"slot1"},
		{src:"images/slot2.jpg", id:"slot2"},
		{src:"images/slot5.jpg", id:"slot5"}
	]
};



// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,649,405);


(lib.girl1 = function() {
	this.initialize(img.girl1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,422);


(lib.girl2 = function() {
	this.initialize(img.girl2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,285);


(lib.logoblues = function() {
	this.initialize(img.logoblues);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,98);


(lib.r1 = function() {
	this.initialize(img.r1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,96);


(lib.slot1 = function() {
	this.initialize(img.slot1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,216);


(lib.slot2 = function() {
	this.initialize(img.slot2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,216);


(lib.slot5 = function() {
	this.initialize(img.slot5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,216);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A73600","#A73600","#CB3F06","#D74E09","#C13402","#6A3402","#BF3501","#E06D02","#E37506"],[0,0.059,0.086,0.094,0.137,0.157,0.345,0.678,1],-320,0,320,0).s().p("EgtkAX0QkbABAAiNMAAAgrPQAAiMEbAAMBbIAAAQEcAAAACMMAAAArPQAACNkcgBg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhIAvIgKgBQgHgCgGAAIAAgIIAHgBIAAhCIgDgBIgEgBIAAgLIBAACIAEAbIgLgCIgEgPIgTAAIgKADIAAAVIAPgCIAIABQALABAIAGQAFACAAALQAAALgDAHQgDAHgGAFQgFAEgHABQgHACgHAAIgKgBgAhGABIgBAiIAGAAIADgBIADAAQAHAAAGgGQAFgFAAgIIAAgEIAAgDIAAABQgBgDgCgCIgFgDIgHgBIgNAAIAAAAIgBAAgAEmAvIgDgBIAAgKIAHgBIAShGIgKAAIAAgJIApACIAPBNIAHABIAAAIIgdAAIAAgEIABgEIAHgBIgEgWIgaAAIgFAWIAHABIAAAJIgTACgAE/gCIAAAFIAXAAIAAgGIgEgZIgMAAgAmRAvIgDgBIAAgKIAGgBIAShGIgJAAIgBgJIApACIAPBNIAHABIAAAIIgcAAIAAgEIAAgEIAIgBIgFgWIgaAAIgFAWIAIABIAAAJIgFABIgOABgAl4gCIAAAFIAWAAIAAgGIgEgZIgLAAgAI9AsQgIgDgFgGQgFgEgDgHQgDgHgBgJQAAgIACgHQABgJAEgJQAGgMALgEIAKgDQAFgCAFABQANABALAJQAEAEADAFIAEANQABAGAAAHIgDAMIgFAOIgIAKQgEAFgGADIgGACIgHAAQgJAAgHgCgAJEgcQgDADgDAEIgEALIgCAKIABAMIADALQADAEADACQAEAEAGAAQAFAAADgEQAEgCACgEIAEgLIABgMQAAgFgBgFQgBgGgDgFQgCgEgEgDQgDgDgFAAQgEAAgEADgABNAuIgJgDQgFgCgCgDQgEgDgCgFIgDgLQgBgFAAgHIAAgKIACgMIAEgKQAFgMALgEQAFgDAHAAIALgBIAJAAIAMgCIAEAeIgKAAIgEgRIgDABIgFAAIgMACQgLADgDALQgDAJAAAIQgBAKADAKQACAFAEADQADADAFACIAKACIALAAIAFgSIAJAAIgDAaIgHACIgWABIgMAAgAjmAsIAAgIIAIgCIAAhDIgIgBIAAgLIAZACIAAAcIARAAIAIACQAEACADADQAFAEABAEQACAFAAAGIgCANQgCAFgEAFQgFAEgFACQgFACgGACIgNABgAjNAbIAHAAIAFgBIAFgDIAEgFQABgCAAgFQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIgEgDIgFgCIgKgCIgCAAgAIBAsIAAgIIAHgCIAAggIgdAAIAAAgIAIACIAAAIIghAAIAAgIIAIgCIAAhDIgIgBIAAgLIAZACIAAAjIAdAAIAAgjIARAAIAABNIAIACIAAAIgAGRAsIAAgIIAIgCIAAhBIgVgCIgFARIgKAAIAFgdIBQACIAEAbIgKAAIgFgRIgVACIAABBIAHACIAAAIgAEDAsIAAgIIAIgCIgGgiIAAgEIgHgbIgJAAIgHAbIAAAEIAAAAIgCAOIAAAAIgFAUIAIACIAAAIIgdAAIAAgIIAHgCIARhGIgJAAIgBgJIApACIAPBNIAEABIADABIAAAIgACtAsIAAgIIAHgCIAAg/IgdgCIAABBIAIACIAAAIIghAAIAAgIIAIgCIAAhDIgIgBIAAgLIBHACIAABNIAIACIAAAIgAgVAsIAAgIIAIgCIAAhDIgIgBIAAgLIA/ACIAEAbIgKAAIgFgSIgdADIAAAbIAZAAIAAAJIgZAAIAAAbIAdADIAFgSIAKAAIgEAbgAknAsIAAgIIAIgCIAAhBIgVgCIgFARIgKAAIAFgdIBQACIAEAbIgKAAIgFgRIgVACIAABBIAHACIAAAIgAnZAsIAAgIIAIgCIAAhDIgIgBIAAgLIAbACQAIABAHACQAGADAFADQAFAFADAFQADAHABAHQAAAIgDAEQgDAHgFADQgFADgIABQgIABgIgBIAAASIAHACIAAAIgAnAAFQAGAAAFgCIAEgBIAEgCIACgCIABgGQAAgFgCgDQgBgDgDgBIgFgDIgGgBIgFAAgAoiAsIAAgIIAIgBIAAhDIgIgBIAAgLIBAACIAEAaIgKAAIgEgRIgeACIAABBIACAAIACABIAEABIAAAIgApGAsIAAgIIAHgCIABgsIgcAsIAIACIgBAEIAAAEIggAAIAAgIIAIgCIAAhCIgIgCIAAgLIAZACIAAAnIABgCIAYgjIABgCIATAAIAABNIAHACIAAAIgAoAAkIgBAAIgBAAIAAgCIACACg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.8,-4.9,125.7,9.8);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A73600","#A73600","#CB3F06","#D74E09","#C13402","#6A3402","#BF3501","#E06D02","#E37506"],[0,0.059,0.086,0.094,0.137,0.157,0.345,0.678,1],0,14.7,0,-14.7).s().p("ArzCQQgvAAABguIAAjDQgBguAvAAIXnAAQAvAAgBAuIAADDQABAugvAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.3,-14.4,160.6,28.9);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#1C3E00","#214D00","#338501","#469018","#183E00","#398407","#00CC33","#4AA80C"],[0,0.039,0.075,0.106,0.161,0.345,0.678,1],0,18.6,0,-18.6).s().p("Au7C2Qg6AAAAg6IAAj3QAAg6A6AAId3AAQA6AAAAA6IAAD3QAAA6g6AAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101.4,-18.2,202.9,36.5);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.logoblues();
	this.instance.setTransform(-38.4,-34.9,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.4,-34.9,76.9,69.8);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A8745A").s().p("AB3AUQgXgHAAgNQAAgKAXgIQAYgIAiAAQAhAAAYAIQAYAIAAAKQAAANgYAHQgYAJghAAQgiAAgYgJgAjpASQgYgHAAgLQAAgLAYgJQAYgIAhAAQAiAAAXAIQAYAJAAALQAAALgYAHQgXAJgiAAQghAAgYgJg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.8,-2.9,51.7,5.9);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.girl2, null, new cjs.Matrix2D(1,0,0,1,-210.6,-122.2)).s().p("ADnTGQgPgHgIgJQgugwgug7QgngxgLgVIg/gfIAGgVQgngegrgHQgrgGADgQQADgPgQgIIABAGIgBgGIgDgBIABgGIAAAAIgGgZQBnAXhyhxQgMgMgJgMQgfgqgOg+QgPhHgDhNQgdgwgVg4QgZhFgihAIAAgaIgTgZIgDg0QgCgXgOgVIgCgaQgDgegIgeQgHgVgSgUIgHhZIgNgUQADidgRidQgbkDCJjXIgZANIATgnIATgGQCMiyDJhkIFaAAQAxAqAqAuIAAPyIgagWQgrgHgUgrIgHgQQAKhtgfhjQgHgXgUgNIgsgDIgGAGIgKAJIgDAEIgsACQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQgGABgDAFQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgQAXADAgQAEAjgEAhIgGAGQACAPgGANQgEAJgCAMIgFABIgBACIgBABIgBACIgKAIIgEAHQgFAIgFAEIgCACIAAAFQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAIgHAEIgFAIIgDAAIgCABIgBABIgCABIAAACQgJABgHADIgQAHIgKANQgEAAgCACIgEAGIgBAFIgKAIIAAAIIgFAIIACCEIAFAHQAGAyAPAwIAAACIAAANIAIAIIAAAIQAJAOAHAPIADAIIASASIAAALIAiAdIAFABIALAHICtAAQBEg8A3hFIAAQhIgEAHQgWAFgTAJQgXAKgNAVg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.3,-122.2,90.8,244.5);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.girl2, null, new cjs.Matrix2D(1,0,0,1,-235,-111.4)).s().p("AhVFeIgLgHIgFgBIgigdIAAgKIgSgTIgDgHQgHgPgJgOIAAgIIgIgIIAAgNIAAgDQgPgvgGgyIgFgIIgCiEIAFgIIAAgIIAKgHIABgFIAEgHQACgCAEAAIAKgNIAQgHQAHgCAJgBIAAgCIACgBIABgBIACgBIADAAIAFgIIAHgEQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBIAAgFIACgCQAFgDAFgIIAEgIIAKgIIABgCIABgBIABgBIAFgBQACgMAEgKQAGgMgCgQIAGgFQAEghgEgjQgDghAQgXQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQADgFAGgCQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABAAIAqgDIADgEIAKgJIAGgFIAsADQAUANAHAWQAfBkgKBtIAHAQQAUArArAGIAaAWIAADsQg3BGhEA7g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.9,-35.1,42,70.2);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#8F8899","#95798E","#9E6D87","#AB7090","#726B85","#40394E"],[0,0.29,0.329,0.467,0.565,1],-4,1.3,4.1,-1.3).s().p("AgqARQAAgHAKgKQAMgKATgHQAPgIANAAQAOABACAHQAAAIgKAJQgNALgRAHQgPAHgPABQgNAAgCgJg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.3,-2.6,8.6,5.2);


(lib.Анимация15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.r1();
	this.instance.setTransform(-52,-48);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52,-48,104,96);


(lib.Анимация14 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.r1();
	this.instance.setTransform(-52,-48);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52,-48,104,96);


(lib.Анимация10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.slot1();
	this.instance.setTransform(-192,-108);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-192,-108,384,216);


(lib.Анимация7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.slot5();
	this.instance.setTransform(-192,-108);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-192,-108,384,216);


(lib.Анимация5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.slot2();
	this.instance.setTransform(-192,-108);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-192,-108,384,216);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.back();
	this.instance.setTransform(-324.5,-202.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-324.5,-202.5,649,405);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ26();
	this.instance.setTransform(0.7,0.3);

	// Слой 1
	this.instance_1 = new lib.Символ25();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.3,-14.4,160.6,28.9);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.3,-14.4,160.6,28.9);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHjBQIgDAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAAAgBIAAgOIAJgCIAZhkIgNAAIgBgNIA6AEIAWBtIAKACIAAALIgpAAIABgLIALgCIgHgfIgkAAIgIAfIALACIAAANIgbADgAIEAHIAAALIAggBIAAgLIgGgjIgRAAgAl0BQQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAAAgBIAAgOIAJgCIAZhkIgNAAIgBgNIA6AEIAWBtIAKACIAAALIgpAAIABgLIALgCIgHgfIgkAAIgIAfIALACIAAANIgiADgAlQAHIAAALIAggBIAAgLIgGgjIgRAAgAJ2BOQgIgBgGgDQgGgDgEgFIAAABQgFgFgDgHQgDgHgBgIIgCgRIABgRIADgPIAEgNQAIgSAPgGQAIgDAJgBIARgBIAMgBIAOgCIACgBIAHArIgPAAIgGgXIgDAAIgIAAIgIABIgJADIAAAAQgPAEgEAOQgFANAAANQgBAOAFAOQACAHAFAFQAFAEAHACQAHACAHABIAPAAIAHgYIAOAAIgGAjIgXAFIgRABIgQgBgABaBOQgHgBgHgDQgGgDgDgFIAAABQgFgFgDgHQgDgHgCgIIgCgRIABgRIADgPIAFgNQAHgSAQgGQAHgDAJgBIARgBIAMgBIAPgCIACgBIAGArIgPAAIgFgXIgEAAIgHAAIgIABIgKADIABAAQgPAEgFAOQgEANgBANQAAAOAEAOQACAHAGAFQAFAEAGACQAHACAIABIAPAAIAHgYIANAAIgFAjIgYAFIgQABIgRgBgAiABLIAAgLIALgEIAAheIgLgCIAAgQIAjADIAAAoIAYABQAGAAAFACQAGADAFADQAFAEADAIQADAIAAAJQgBAJgDAIQgDAIgFAGQgHAHgHADQgIADgIACQgJABgJAAgAhdAyIAKAAIAHgBQAEgBADgDIAFgGQACgEAAgFQAAgEgCgDIgFgFIgHgCIgOgCIgDgCgAGpBLIAAgLIALgDIAAgqIggAAQgIAAgEgEQgEgFgBgGQgBgFAAgHIACgZIgLgDIAAgQIAeADIADAxIAaABIAAgyIAYAAIAABuIALADIAAALgAFFBLIAAgLIALgDIAAg+IgnA+IALADIAAALIguAAIAAgLIALgDIAAheIgLgCIAAgRIAjADIAAA1IACgEIAggtIAEgEIAZAAIAABuIAFABIAGACIAAADIAAADIAAACIAAADgACfBLIAAgLIAMgDIAAhfIgMgCIAAgQIBcADIAGAnIgOAAIgHgaIgqAEIAAAlIAkAAIAAAOIgkAAIAAAmIAqAFIAHgZIAOAAIgGAmgAjdBLIABgLIALgEIAAhbIgegEIgHAZIgOAAIAGgpIAAgBIBxADIAGAnIgOAAIgHgZIgeADIAABcIALAEIAAALgAnaBLIAAgLIAMgEIAAheIgMgCIAAgQIAnADQALABAKAEQAJADAHAGQAHAGAEAIQAEAIABAKQABALgEAJQgEAIgIAFQgIAEgKACQgLABgNgBIAAAYIALAEIAAALgAm3gVIAAAoQAJABAHgCIAGgCIAFgEIAEgGQABgDAAgDQAAgGgDgEQgCgEgDgCQgEgDgEgBIgNgBgApBBLIAAgLIALgDIAAheIgLgBIAAgRIBbAEIAGAlIgOAAIgHgYIgqADIABBcIACAAIADABIACABIADABIAAAGIAAADIAAACgAp0BLIAAgLIALgDIAAg+IgnA+IALADIAAALIguAAIAAgLIALgDIAAheIgLgCIAAgRIAjADIAAA1IABgCIAjgwIACgDIAZAAIAABuIALADIAAALgAoRBAIgBAAIgBAAIAAgDIACADgAEig+IAEgRIA0AJIgDAKg");
	this.shape.setTransform(0.6,-1.5);

	// Слой 1
	this.instance = new lib.Символ22();

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101.4,-18.2,202.9,36.5);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.4,-18.2,202.9,36.5);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39));

	// Слой 2
	this.instance_1 = new lib.Анимация14("synched",0);
	this.instance_1.setTransform(0.7,1.8);
	this.instance_1.alpha = 0;

	this.instance_2 = new lib.Анимация15("synched",0);
	this.instance_2.setTransform(0.7,1.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,alpha:1},19).to({_off:false,alpha:0},19).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},19).to({_off:true,alpha:0},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.3,-46.2,104,96);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация7("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-192,-108,384,216);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация10("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-192,-108,384,216);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация5("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-192,-108,384,216);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ17();
	this.instance.setTransform(-28,-45.8);

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.girl2, null, new cjs.Matrix2D(1,0,0,1,-128,-142.5)).s().p("Az+WQMAAAgsfMAhJAAAQjMBkiLCxIgUAGIgTAnIAZgNQiJDXAcEEQAQCcgDCeIAOATIAGBaQASAVAHAWQAIAdAEAeIACAaQAOAVACAXIACAyIATAaIAAAZQAiBBAZBEQAVA4AdAxQADBMAPBHQAOA+AfAqQAJAMAMAMIANAVQAEAGACAMQACAOALALIAHAGQABAdANASQASAZAgARQAWAMAdACIAGAUIAzAfQANA1AoAyQAtA6AuAxQAJAIAOAHICNAAQAOgVAWgJQATgKAWgFIAEgGIAAHIg");

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-128,-142.5,256,285);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 12
	this.instance = new lib.Символ12();
	this.instance.setTransform(10.3,108.2,1,1,0,0,0,10.3,108.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4},19).to({rotation:0},20).wait(1));

	// Символ 11
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(19.2,-39.6,1,1,0,0,0,-5.2,-28.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-17.7,x:27.7},19).to({rotation:0,x:19.2},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.3,-122.2,90.8,244.5);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ10();

	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(82.6,-20.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.girl2, null, new cjs.Matrix2D(1,0,0,1,-251.4,-4.4)).s().p("AgsgqIBZAAIAABVQgpgsgwgpg");
	this.shape.setTransform(123.4,-138.1);

	this.addChild(this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-128,-142.5,256,285);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(-9.4,3.6,0.734,0.711,0,-50.7,129.3,-0.1,-0.1);

	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(7.8,-4.3,1.163,1.154);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},54).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ4 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ7();
	this.instance.setTransform(-37.5,-90.2);

	// Слой 1
	this.instance_1 = new lib.girl1();
	this.instance_1.setTransform(-175,-211);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-175,-211,350,422);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-324.5,-202.5,649,405);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-70},79).to({y:0},80).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-324.5,-202.5,649,405);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// slot1.jpg
	this.instance = new lib.Символ14();
	this.instance.setTransform(-89.7,-370);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},89).to({x:-92.7,y:-75,alpha:1},10).wait(40).to({y:225,alpha:0},10).wait(1));

	// slot5.jpg
	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(-92.9,-370);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},39).to({y:-74,alpha:1},10).wait(40).to({y:226,alpha:0},10).to({_off:true},1).wait(50));

	// slot2.jpg
	this.instance_2 = new lib.Символ13();
	this.instance_2.setTransform(-92.9,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({y:236,alpha:0},10).to({x:-87.9,y:-369.6,alpha:1},1).to({alpha:0},89).to({x:-92.9,y:-74,alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-284.9,-478,387.3,512);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.buton2.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("http://www.adobe.com", "_blank");
		}
		
		
		
		this.buton3.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("http://www.adobe.com", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50));

	// Символ 23
	this.buton2 = new lib.Символ23();
	this.buton2.setTransform(0,-22.6);
	new cjs.ButtonHelper(this.buton2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.buton2).to({scaleX:1.26,scaleY:1.26},24).to({scaleX:1,scaleY:1},25).wait(1));

	// Символ 20
	this.buton3 = new lib.Символ20();
	this.buton3.setTransform(0,18.8);
	new cjs.ButtonHelper(this.buton3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.buton3).to({scaleX:0.78,scaleY:0.78},24).to({scaleX:1,scaleY:1},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.8,-38.2,223.7,77.1);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-6.5},24).to({y:0},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-211,350,422);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.button_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(320,254.6,1,1,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 6
	this.button_1 = new lib.Символ28();
	this.button_1.setTransform(320,152.5,1.103,1.089);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.Символ28(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(1));

	// Символ 5
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(603,191);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ18();
	this.instance_2.setTransform(65.3,37.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ8();
	this.instance_3.setTransform(95,197);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 3
	this.instance_4 = new lib.Символ1();
	this.instance_4.setTransform(420,224.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 4
	this.instance_5 = new lib.Символ2();
	this.instance_5.setTransform(320.5,182.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(287,-101.1,811,655.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;