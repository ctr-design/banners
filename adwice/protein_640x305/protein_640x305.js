(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/biceps.png", id:"biceps"},
		{src:"images/body1.png", id:"body1"},
		{src:"images/body2.png", id:"body2"},
		{src:"images/brest.png", id:"brest"},
		{src:"images/can.png", id:"can"},
		{src:"images/finger.png", id:"finger"},
		{src:"images/han1_l.png", id:"han1_l"},
		{src:"images/hand11_l.png", id:"hand11_l"},
		{src:"images/hand11_r.png", id:"hand11_r"},
		{src:"images/hand1_r.png", id:"hand1_r"},
		{src:"images/hand2.png", id:"hand2"},
		{src:"images/shadow.png", id:"shadow"},
		{src:"images/Растровоеизображение1.png", id:"Растровоеизображение1"}
	]
};



// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,711,305);


(lib.biceps = function() {
	this.initialize(img.biceps);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,50);


(lib.body1 = function() {
	this.initialize(img.body1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,279,243);


(lib.body2 = function() {
	this.initialize(img.body2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,218,246);


(lib.brest = function() {
	this.initialize(img.brest);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,80);


(lib.can = function() {
	this.initialize(img.can);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,246);


(lib.finger = function() {
	this.initialize(img.finger);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,58);


(lib.han1_l = function() {
	this.initialize(img.han1_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,54);


(lib.hand11_l = function() {
	this.initialize(img.hand11_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,89);


(lib.hand11_r = function() {
	this.initialize(img.hand11_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,79);


(lib.hand1_r = function() {
	this.initialize(img.hand1_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,39);


(lib.hand2 = function() {
	this.initialize(img.hand2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,128);


(lib.shadow = function() {
	this.initialize(img.shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,267,80);


(lib.Растровоеизображение1 = function() {
	this.initialize(img.Растровоеизображение1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,197,68);


(lib.Символ42 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5.2,2,0,3).p("Egx/gX0MBj/AAAMAAAAvpMhj/AAAg");
	this.shape.setTransform(320,152.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.6,-2.6,645.2,310.2);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.471,1],-75.7,0,75.8,0).s().p("Ar0H2IAAvrIXpAAIAAPrg");
	this.shape.setTransform(75.8,50.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,151.5,100.6);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AUKBuQgIgHAAgMQAAgLAIgHQAHgIAMAAQALAAAHAIQAJAHAAALQAAALgIAIQgGAJgNAAQgMAAgHgJgAF/ByQgQgEgMgKQgMgJgIgPQgFgGgBgJQgCgIAAgJIAAhWQAAgTAIgOQAHgOANgKQAMgKAQgEQAQgFARABQAUAAATAEQASAGAOAMIgXAkQgKgJgMgEQgNgDgMAAQgIAAgIACQgIACgGAFQgGAFgEAJQgEAHAAANIAABCQAAALAEAIQAEAIAHAFQAGAFAHADQAIACAIAAQALAAANgDQAMgEAMgKIAWAkQgMAMgUAFQgSAHgVAAQgRAAgQgFgApdB2IgWgGIgVgHQgIgEgHgGIAXgiIANAHIAOAGIAbAEQAXAAALgKQALgIAAgPQAAgIgCgGQgDgFgGgEQgJgIgSAAIggAAIAAgjIAfAAQAHAAAGgCQAHgBAGgFQAEgDAEgGQADgGAAgHQgBgHgDgFQgDgGgFgDQgGgDgHgCIgOgBQgMAAgOAEQgOAFgKAIIgWghQAOgMAUgGQATgGAXABQAQAAAPADQAPADALAHQALAJAHALQAGAMAAATQAAAIgBAHQgDAIgEAGQgJAOgOAHQAQAEAJAOQAJAOAAARQAAATgHAOQgIAOgMAIQgMAKgQAEQgQAEgRAAgARAB1IAAjoIChAAIAAApIhyAAIAAA1IBhAAIAAAoIhhAAIAAA3IByAAIAAArgAN8B1IAAjoICiAAIAAApIhzAAIAAA1IBiAAIAAAoIhiAAIAAA3IBzAAIAAArgAK4B1IAAjoIBoAAQASAAANAGQAMAGAIALQAJALADAMQAFAOAAANQgBAMgEANQgEANgJAIQgJALgNAHQgNAGgQAAIg5AAIAABZgALmgMIAwAAQAIAAAGgCQAGgCAEgFQAJgIAAgNQAAgOgJgJQgIgJgQAAIgwAAgAIzB1IAAi/Ig+AAIAAgpICrAAIAAApIg+AAIAAC/gADvB1IAAjoIAvAAIAADogAArB1IAAjoIAuAAIAABZIA2AAQASAAAOAEQANAGAJAKQAKAHAFANQAFAOABAQQAAANgFANQgEANgIAKQgJAKgOAHQgNAGgUABgABZBKIAxAAQAHAAAHgBQAGgDAFgEQAJgJAAgNQAAgOgJgJQgFgEgHgCQgGgCgHAAIgxAAgAidB1IAAjoICZAAIAAApIhrAAIAAAwIA2AAQARAAAOAEQAOAGAJAKQAIAHAFANQAFAOAAAQQAAANgEANQgEANgHAKQgJAKgNAHQgOAGgUABgAhvBKIAwAAQAHAAAHgBQAHgDAEgEQAKgJAAgNQAAgOgKgJQgEgEgHgCQgGgCgJAAIgvAAgAk9B1IgNgxIhSAAIgPAxIgyAAIBSjoIAwAAIBSDogAlXAdIgchZIgBAAIgbBZIA4AAgArQB1IgOgxIhRAAIgQAxIgyAAIBTjoIAwAAIBRDogArrAdIgchZIgBAAIgbBZIA4AAgAwiB1IAAjoIBoAAQARAAANAGQANAGAIALQAIALAEAMQAEAOAAANQAAAMgFANQgEANgJAIQgIALgOAHQgMAGgRAAIg4AAIAABZgAv0gMIAvAAQAIAAAHgCQAFgCAFgFQAIgIAAgNQAAgOgIgJQgJgJgQAAIgvAAgAzUB1IAAgiIhjAAIAAgjIBLijIAuAAIhICfIAyAAIAAhBIAsAAIAABBIATAAIAAAnIgTAAIAAAigAUKAuIgDikIAqAAIgCCkg");
	this.shape.setTransform(133.6,12);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,267.2,23.9);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ANdB/IAAjGIAoAAIAABLIAuAAQAOAAAMADQALAGAJAJQAIAHAFAMQAEALAAANQAAALgDAMQgEAKgIAJQgHAJgMAGQgMAGgQgBgAOFBbIAoAAQAHAAAGgCIAKgEQAHgJAAgKQAAgNgHgHIgKgFQgGgCgHAAIgoAAgAJSB/IAAjGIAoAAIAACiIA4AAIAAiiIAoAAIAACiIA4AAIAAiiIAoAAIAADGgAGqB/IAAjGICLAAIAAAkIhjAAIAAAsIBUAAIAAAjIhUAAIAAAvIBjAAIAAAkgAEDB/IAAjGIBaAAQAOABALAFQALAGAHAIQAHAKAEALQADALAAALQAAAIgEAMQgEALgIAJQgHAJgLAFQgLAGgOAAIgxAAIAABLgAEqAQIAqAAQAGAAAFgBQAFgCAEgEQAHgHAAgKQAAgMgHgIQgHgHgNAAIgqAAgABcB/IAAjGICKAAIAAAkIhjAAIAAAsIBVAAIAAAjIhVAAIAAAvIBjAAIAAAkgAhPB/IAAjGICBAAIAAAkIhaAAIAAAnIAsAAQAQAAALADQAMAGAIAJQAIAHAFAMQAEALAAANQAAALgEAMQgDAKgHAJQgIAJgMAGQgLAGgRgBgAgoBbIAoAAQAGAAAFgCIAKgEQAIgJAAgKQAAgNgIgHIgKgFQgFgCgGAAIgoAAgAiOB/IgLgpIhGAAIgNApIgrAAIBGjGIApAAIBGDGgAikA1IgYhNIgCAAIgXBNIAxAAgAlTB/IAAhUIhJAAIAABUIgoAAIAAjGIAoAAIAABOIBJAAIAAhOIApAAIAADGgAqiB/IAAjGIAoAAIAADGgAtKB/IAAjGIAoAAIAABLIAuAAQAPAAAMADQALAGAIAJQAJAHAEAMQAFALAAANQAAALgEAMQgEAKgHAJQgHAJgMAGQgMAGgQgBgAsiBbIApAAQAHAAAGgCIAJgEQAIgJAAgKQAAgNgIgHIgKgFQgFgCgHAAIgpAAgAu8B/IAAiiIg1AAIAAgkICTAAIAAAkIg1AAIAACigAIAhdQgGgFAAgJQAAgHAGgGQAGgHAJAAQAIAAAFAHQAGAGAAAHQAAAJgGAFQgFAHgIgBQgJABgGgHgAHIhdQgHgFAAgJQAAgHAHgGQAFgHAIAAQAJAAAFAHQAGAGAAAHQAAAJgGAFQgFAHgJgBQgIABgFgHg");
	this.shape.setTransform(101,12.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,202.1,25.6);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZCRQgVgFgPgNQgQgMgLgSQgFgIgDgLQgBgKAAgNIAAhuQAAgYAJgSQAKgSAQgNQAQgLAUgGQAVgGATAAQAaAAAYAGQAYAHARAQIgdAuQgNgMgQgFQgRgEgOAAQgKAAgIADQgKACgJAHQgHAHgFAKQgFAKAAAQIAABVQAAAOAFALQAFAKAIAGQAIAHAKADQAIADAKAAQAOAAARgFQAPgEAPgNIAcAuQgQAPgYAHQgXAJgcAAQgTAAgUgHgACQCUIAAkpIDDAAIAAA1IiIAAIAAA9IBFAAQAWAAARAGQATAIALAMQANALAGAQQAGARAAAUQAAARgFARQgFAQgLAOQgLAMgSAJQgRAIgZAAgADLBfIA9AAQAKAAAIgDQAIgDAHgFQAMgLAAgRQAAgSgMgLQgHgFgIgDQgIgDgKAAIg9AAgAjGCUIgYhXQgEgMgFgHQgFgJgGgEQgGgEgIgCIgygBIAAB+Ig7AAIAAkpIA7AAIAAB4IAvgBQAHgCAHgEQAGgEAFgHQAGgIADgMIAahSIA9AAIgbBXQgHAXgKAOQgMAPgNAFQAIADAIAEQAHAFAFAHQALAPAHAXIAcBgg");
	this.shape.setTransform(77.1,15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ArRCRQgUgFgRgNQgPgMgLgSQgFgIgCgLQgCgKgBgNIAAhuQAAgYAKgSQAKgSAQgNQARgLAUgGQAUgGAVAAQAaAAAYAGQAYAHARAQIgcAuQgOgMgQgFQgQgEgPAAQgKAAgKADQgKACgIAHQgIAHgFAKQgGAKABAQIAABVQgBAOAGALQAFAKAJAGQAHAHAKADQAKADAKAAQAOAAAQgFQAQgEAQgNIAbAuQgQAPgYAHQgXAJgbAAQgVAAgVgHgAKJCPQgXgIgPgPIAdgtQAOANAOAFQAOAFAPAAIAOgCQAHgCAHgEQAFgFAFgHQAFgHAAgKIAAghQgBgQgGgGQgIgGgMAAIgOAAIgNAGIgVAMIgygSIAAiVICqAAIAAAyIhzAAIAAA7QAMgHAOgFQANgFALAAQARAAAPAHQAOAGAKALQAJAKAFAOQAFANAAARIAAAvQAAAVgIAPQgIAQgNAKQgOAKgRAFQgSAFgSAAQgcAAgWgHgAGhCPQgWgIgRgPIAegtQAOANAOAFQAOAFAPAAIAOgCQAIgCAGgEQAGgFAEgHQAFgHAAgKIAAghQAAgQgIgGQgGgGgNAAIgOAAIgNAGIgVAMIgygSIAAiVICqAAIAAAyIhzAAIAAA7QAMgHAPgFQANgFAKAAQASAAAOAHQAOAGAKALQAJAKAFAOQAEANABARIAAAvQgBAVgHAPQgIAQgNAKQgNAKgSAFQgRAFgUAAQgaAAgXgHg");
	this.shape_1.setTransform(79.5,15.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,159,30.5);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgzeAY6MAAAgxzMBm8AAAMAAAAxzg");
	this.shape.setTransform(329.5,159.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,659,319);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACECaQgVgHgRgMQgRgNgLgTQgFgJgCgLQgDgLAAgNIAAhzQAAgZAKgTQALgTAQgNQARgNAVgGQAVgHAXAAQAbAAAZAHQAaAIASAQIgeAxQgPgNgRgFQgQgFgQAAQgLAAgKAEQgLACgIAHQgIAHgGALQgFALAAAPIAABaQAAAQAFAKQAGALAIAHQAIAGALAEQAKADALAAQAQAAAQgFQAQgEAQgNIAeAwQgSAPgZAIQgZAIgcAAQgWAAgVgGgAF1CVQgKgKAAgQQAAgOAKgLQAKgKAPAAQAQAAAKAKQAKALAAAOQAAAQgJAKQgKALgQAAQgQAAgKgLgAjMCdIAAk4IDXAAIAAA4IiZAAIAABIICEAAIAAA2IiEAAIAABKICZAAIAAA4gAnoCdIAAk4ICNAAQAYAAARAHQARAHALAMQALAMAGAPQAFAQAAARQAAARgJASQgFAJgIAHQgHAHgKAFQAMAGAIAGQAIAJAGAKQAFAJADAKIACAUQAAATgGARQgGAQgLANQgLANgRAHQgRAIgWAAgAmqBlIBDAAQAVAAALgLQAKgLAAgRQAAgSgLgMQgMgLgUAAIhCAAgAmqgeIBAAAQAUAAALgJQALgJAAgPQAAgSgLgJQgKgJgWAAIg/AAgAFxBAIAAgLQAAgRAIgQIAkg5QAIgPAAgSQAAgNgJgLQgKgJgUAAQgOAAgOAFQgOAFgOAMIgcgvQAVgRAYgHQAZgHAaAAQAVAAASAGQARAGANALQANAKAHAPQAGAPAAASQAAAOgEANIgMAWIgdAlIgMAWQgEAKAAANIAAALg");
	this.shape.setTransform(49,16.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,98,32.2);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALBCdIAAk5IA/AAIAAB4IBIAAQAYAAARAHQATAHANANQAMALAHASQAIARAAAWQAAARgHASQgFAQgMAOQgMAOgSAKQgRAJgbAAgAMABlIBBAAQAKAAAIgEQAJgCAGgHQAMgMAAgRQAAgSgMgLQgGgHgJgCQgIgDgLgBIhAAAgAIQCdIAAkBIhTAAIAAg4IDkAAIAAA4IhTAAIAAEBgAFvCdIgThBIhtAAIgVBBIhCAAIBuk5IBAAAIBtE5gAFLAnIglh5IgCAAIgkB5IBLAAgAhUCdIAAk5ICKAAQAXAAARAJQAQAJALAPQAMAOAFARQAGASgBARQABARgHARQgGASgLALQgNAOgQAKQgRAIgXABIhJAAIAAB2gAgWgQIA+AAQAKAAAIgDQAJgCAFgHQALgMAAgRQAAgSgMgNQgLgMgUAAIg+AAgAliCdIAAk5IDNAAIAAA4IiPAAIAABAIBIAAQAWAAATAHQASAHAOANQAMALAHASQAGARABAWQAAARgGASQgFAQgMAOQgMAOgSAKQgSAJgbAAgAkkBlIA/AAQALAAAIgEQAJgCAHgHQANgMgBgRQABgSgNgLQgHgHgJgCQgIgDgLgBIg/AAgAnFCdIgShBIhtAAIgWBBIhCAAIBuk5IBAAAIBtE5gAnpAnIgkh5IgCAAIglB5IBLAAgAr4CdIAAiEIh0AAIAACEIg/AAIAAk5IA/AAIAAB/IB0AAIAAh/IA/AAIAAE5g");
	this.shape.setTransform(94,15.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,188,31.4);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AovCZQgXgGgPgOQgRgNgJgTQgFgKgDgLIgCgYIAAhxIACgYQADgLAFgKQAJgSARgNQASgNAVgGQAWgHAXAAQAYABAVAGQAWAHARANQARANAKATQAKAUAAAYIAABwIgDAYQgCALgFAKQgKATgPANQgRAOgWAGQgWAHgZAAQgZAAgVgHgAoWhiQgLADgHAHQgJAHgFALQgFAKAAAQIAABZQAAAPAFAMQAFALAJAHQAHAGALADQALADAKAAQALAAALgDQAKgDAIgGQAIgHAFgLQAFgMAAgPIAAhZQAAgQgFgKQgFgLgIgHQgIgHgKgDQgLgEgLAAQgKAAgLAEgALzCcIAAk4IA+AAIAAB4IBJAAQAXAAASAHQATAHAMANQANALAHASQAHARAAAVQAAASgGARQgFARgMAOQgMAPgRAIQgTAJgaAAgAMxBlIBBAAQAKgBAJgDQAIgDAHgFQANgMAAgTQAAgRgNgMQgHgFgIgEQgJgCgLAAIhAAAgAFSCcIAAk4IA9AAIAAEBIBZAAIAAkBIA/AAIAAEBIBXAAIAAkBIA/AAIAAE4gABLCcIAAk4IDZAAIAAA5IibAAIAABHICEAAIAAA2IiEAAIAABLICbAAIAAA3gAgbCcIgahbQgDgNgGgIQgFgIgHgFQgGgFgIgBIgogBIAACEIg+AAIAAiEIgnABQgIABgIAFQgGAFgFAIQgGAIgEANIgZBbIhFAAIAfhlQAGgXAMgQQAKgQAUgFQgPgFgLgPQgLgQgIgWIgchdIBAAAIAbBXQAFAMAEAIQAGAHAGAFQAIAEAIACIAkABIAAh+IA+AAIAAB+IAkgBQAIgCAHgEQAHgFAFgHQAFgIAEgMIAchXIA9AAIgcBdQgFAWgLAQQgLAPgPAFQAKADAHAEQAIAFAGAJQAIAQAHAXIAeBlgArrCcIAAinIgCAAIhAB8IgtAAIhBh8IgDAAIAACnIg+AAIAAk4IA6AAIBdC6IADAAIBci6IA5AAIAAE4g");
	this.shape.setTransform(99,16);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,197.9,32);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAmCdIAAk5IDZAAIAAA5IiaAAIAABHICDAAIAAA2IiDAAIAABLICaAAIAAA4gAhMCdIAAiEIh0AAIAACEIg+AAIAAk5IA+AAIAAB/IB0AAIAAh/IA/AAIAAE5g");
	this.shape.setTransform(25.6,15.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,51.2,31.4);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.shadow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,267,80);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.can();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,193,246);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.brest();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,98,80);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.body2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,218,246);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.biceps();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45,50);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hand2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,98,128);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.han1_l();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34,54);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hand1_r();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,50,39);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hand11_l();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76,89);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hand11_r();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,85,79);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.body1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,279,243);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],-282,0,282,0).s().p("EgsDAX0MAAAgvnMBYHAAAMAAAAvng");
	this.shape.setTransform(429,152.5);

	// Слой 1
	this.instance = new lib.bg();

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AwTHzIAAvmMAgoAAAIAAPmg");
	this.shape_1.setTransform(606.5,50);

	this.addChild(this.shape_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,711,305);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.finger();
	this.instance.setTransform(129.5,-137.4,0.693,0.693);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(129.5,-137.4,27.7,40.1);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.setTransform(320,152.5,1,1,0,0,0,320,152.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.4,-3.4,646.9,311.9);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.setTransform(105.9,50.2,1,1.165,0,30.8,0,75.8,50.2);
	this.instance.alpha = 0.488;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,211.6,100.6);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 9
	this.instance = new lib.Символ16();
	this.instance.setTransform(114.1,84.3,0.652,0.652,0,0,0,0,0.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:143.4,regY:-117.4,x:187,y:6.5,alpha:0.294},0).wait(1).to({x:173.9,y:5.8,alpha:0.481},0).wait(1).to({x:165.2,y:5.3,alpha:0.606},0).wait(1).to({x:158.9,y:4.9,alpha:0.695},0).wait(1).to({x:154,y:4.6,alpha:0.766},0).wait(1).to({x:150,y:4.4,alpha:0.822},0).wait(1).to({x:146.8,y:4.2,alpha:0.868},0).wait(1).to({x:144.3,y:4.1,alpha:0.904},0).wait(1).to({x:142.2,y:4,alpha:0.933},0).wait(1).to({x:140.7,y:3.9,alpha:0.956},0).wait(1).to({x:139.5,y:3.8,alpha:0.973},0).wait(1).to({x:138.6,alpha:0.985},0).wait(1).to({x:138,y:3.7,alpha:0.994},0).wait(1).to({x:137.7,alpha:0.998},0).wait(1).to({regX:0,regY:0.1,x:44.1,y:80.3,alpha:1},0).wait(3).to({scaleX:0.57,scaleY:0.57,x:54.7,y:72.4},6,cjs.Ease.get(-1)).to({scaleX:0.65,scaleY:0.65,x:44.1,y:80.3},6,cjs.Ease.get(1)).to({alpha:0},25).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhfBDIAAgZIhFAAIAAAZIgUAAIAAgsIAIAAQADgDADgEQACgDACgGIADgKIADg/IBLAAIAABZIAKAAIAAAsgAiQADIgCALIgFAJIAsAAIAAhGIghAAgAHsAqIAAhsIAWAAIAAAqIAZAAQAJAAAGACQAGADAFAFQAEAEADAGQACAFAAAHQAAAGgBAGQgCAGgFAFQgEAFgGADQgGADgKAAgAICAXIAXAAIAHgBIAEgEQAFgEAAgGQAAgGgFgCIgEgDIgHgBIgXAAgAFaAqIAAhsIAVAAIAABZIAgAAIAAhZIAVAAIAABZIAgAAIAAhZIAVAAIAABsgAEwAqIAAhsIAXAAIAABsgADUAqIAAhsIAWAAIAAAqIAZAAQAJAAAGACQAGADAFAFQAEAEADAGQACAFAAAHQAAAGgBAGQgCAGgFAFQgEAFgGADQgHADgJAAgADqAXIAXAAIAHgBIAEgEQAFgEAAgGQAAgGgFgCIgEgDIgHgBIgXAAgACrAqIAAg5IgBAAIgWAqIgQAAIgXgqIgBAAIAAA5IgVAAIAAhsIAUAAIAhBCIAAAAIAhhCIAUAAIAABsgAAFAqIAAhGIgBAAIgsBGIgUAAIAAhsIAWAAIAABHIAAAAIAthHIAUAAIAABsgAkNAqIAAhsIBNAAIAAAUIg2AAIAAAZIAuAAIAAAUIguAAIAAAYIA2AAIAAATgAlwAqIAAhsIAyAAQAIAAAGACQAGADAEAEQADAEACAGQACAFAAAGQABAGgEAHIgEAFIgGAEIAHAFIAEAHIADAFIACAHQgBAGgCAGQgCAGgDAEQgFAFgFADQgGACgJAAgAlaAXIAXAAQAIAAAEgEQADgEAAgGQAAgHgDgCQgFgDgHAAIgXAAgAlagWIAWAAQAIAAADgDQAEgEAAgFQAAgGgEgDQgDgDgIAAIgWAAgAmTAqIgGgWIgnAAIgHAWIgYAAIAnhsIAXAAIAmBsgAmgABIgMgpIgBAAIgNApIAaAAgAn/AqIAAgsIgoAAIAAAsIgWAAIAAhsIAWAAIAAAsIAoAAIAAgsIAXAAIAABsg");
	this.shape.setTransform(57.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5.4,216.6,26.2);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(133.6,12,1,1,0,0,0,133.6,12);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},6).to({alpha:0},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,267.2,23.9);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ31();
	this.instance.setTransform(122.6,12,1,1,0,0,0,133.6,12);

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhXB1IAAjoIBnAAQASAAANAEQAMAGAJAJQAIAIAEAMQAEAMAAAMQAAANgHAOQgDAGgGAFQgFAGgIADQAJAEAGAFQAGAGAEAIQAEAHACAHIACAPQAAAOgEANQgEANgJAIQgJAKgMAGQgNAFgQABgAgpBKIAwAAQAQABAIgJQAIgHAAgNQAAgOgIgJQgJgIgPAAIgwAAgAgpgXIAuAAQAPABAIgIQAIgGAAgMQAAgNgHgGQgIgHgQAAIguAAg");
	this.shape.setTransform(-31.1,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AUKBuQgIgHAAgMQAAgLAIgHQAHgIALAAQAMAAAHAIQAJAHgBALQABALgIAIQgGAJgOAAQgLAAgHgJgAF/ByQgPgEgNgKQgNgJgHgPQgEgGgDgJQgBgIAAgJIAAhWQAAgTAIgOQAHgOAMgKQANgKAQgEQAQgFARABQAUAAATAEQASAGAOAMIgXAkQgKgJgMgEQgOgDgLAAQgIAAgIACQgHACgHAFQgGAFgEAJQgEAHAAANIAABCQAAALAEAIQAEAIAHAFQAGAFAHADQAIACAIAAQALAAANgDQAMgEAMgKIAWAkQgMAMgUAFQgSAHgVAAQgQAAgRgFgApdB2IgWgGIgUgHQgKgEgGgGIAXgiIANAHIAOAGIAbAEQAXAAALgKQAMgIgBgPQAAgIgDgGQgCgFgGgEQgKgIgRAAIgfAAIAAgjIAdAAQAIAAAHgCQAGgBAGgFQAFgDADgGQACgGAAgHQAAgHgDgFQgEgGgEgDQgGgDgHgCIgOgBQgMAAgOAEQgOAFgKAIIgWghQAOgMAUgGQAUgGAWABQARAAAOADQAPADALAHQALAJAHALQAHAMgBATQAAAIgCAHQgCAIgEAGQgJAOgOAHQAQAEAJAOQAJAOAAARQAAATgHAOQgIAOgLAIQgNAKgPAEQgRAEgRAAgARAB1IAAjoICiAAIAAApIhzAAIAAA1IBiAAIAAAoIhiAAIAAA3IBzAAIAAArgAN8B1IAAjoICiAAIAAApIh0AAIAAA1IBjAAIAAAoIhjAAIAAA3IB0AAIAAArgAK4B1IAAjoIBpAAQARAAAMAGQANAGAIALQAIALAFAMQADAOAAANQAAAMgEANQgEANgKAIQgIALgNAHQgNAGgQAAIg5AAIAABZgALmgMIAwAAQAIAAAGgCQAGgCAEgFQAIgIAAgNQAAgOgIgJQgJgJgPAAIgwAAgAIzB1IAAi/Ig+AAIAAgpICrAAIAAApIg9AAIAAC/gADvB1IAAjoIAvAAIAADogAArB1IAAjoIAvAAIAABZIA2AAQARAAANAEQAOAGAKAKQAJAHAFANQAGAOAAAQQAAANgFANQgEANgJAKQgIAKgOAHQgNAGgUABgABaBKIAvAAQAJAAAGgBQAGgDAFgEQAJgJAAgNQAAgOgJgJQgFgEgGgCQgGgCgJAAIgvAAgAidB1IAAjoICYAAIAAApIhqAAIAAAwIA1AAQASAAAOAEQAOAGAJAKQAIAHAFANQAFAOAAAQQAAANgEANQgEANgHAKQgJAKgNAHQgOAGgUABgAhvBKIAwAAQAIAAAGgBQAGgDAFgEQAKgJAAgNQAAgOgKgJQgFgEgGgCQgHgCgIAAIgvAAgAk9B1IgNgxIhSAAIgPAxIgyAAIBSjoIAwAAIBRDogAmQAdIA5AAIgchZIgBAAgArQB1IgOgxIhRAAIgQAxIgxAAIBSjoIAvAAIBSDogAsjAdIA5AAIgdhZIgBAAgAwiB1IAAjoIBoAAQARAAANAGQAMAGAJALQAIALAEAMQAEAOAAANQAAAMgFANQgEANgJAIQgIALgNAHQgNAGgRAAIg5AAIAABZgAv1gMIAwAAQAIAAAHgCQAFgCAFgFQAIgIAAgNQAAgOgIgJQgJgJgQAAIgwAAgAzVB1IAAgiIhiAAIAAgjIBMijIAuAAIhJCfIAxAAIAAhBIAsAAIAABBIATAAIAAAnIgTAAIAAAigAUKAuIgDikIAqAAIgCCkg");
	this.shape_1.setTransform(122.6,12);

	this.addChild(this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40,0,296.2,23.9);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(329.5,159.5,1,1,0,0,0,329.5,159.5);
	this.instance.alpha = 0.48;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,659,319);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 24
	this.instance = new lib.Символ24();
	this.instance.setTransform(348.7,65,1,1,0,0,0,49,16.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(43).to({x:281},0).wait(1).to({x:249.1},0).wait(1).to({x:232.9},0).wait(1).to({x:223},0).wait(1).to({x:216.4},0).wait(1).to({x:212},0).wait(1).to({x:209.5},0).wait(1).to({x:208.7},0).to({x:228.7},4).wait(22).to({scaleX:1.02,scaleY:1.02,x:231.2,y:56.5},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:232.3,y:52.5},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:232.8,y:50.9},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:232.7,y:53.5},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:232.6,y:57.5},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:232.5,y:63.4},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:232.3,y:71.5},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:232.1,y:82},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:231.9,y:95.2},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:231.6,y:111.1},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:231.3,y:129.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:230.9,y:151},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:230.3,y:179.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:229.6,y:217.3},0).wait(1).to({scaleX:1,scaleY:1,x:228.7,y:265},0).to({_off:true},1).wait(19));

	// Символ 23
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(70.5,100,1,1,0,0,0,94,15.7);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({y:87.1,alpha:0.369},0).wait(1).to({y:79.4,alpha:0.59},0).wait(1).to({y:74.3,alpha:0.733},0).wait(1).to({y:71.1,alpha:0.827},0).wait(1).to({y:68.9,alpha:0.889},0).wait(1).to({y:67.5,alpha:0.93},0).wait(1).to({y:66.5,alpha:0.957},0).wait(1).to({y:65.9,alpha:0.975},0).wait(1).to({y:65.4,alpha:0.989},0).wait(1).to({y:65,alpha:1},0).wait(11).to({x:65},5).to({x:70.5},3).wait(18).to({scaleX:1.02,scaleY:1.02,x:69.2,y:56.6},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:68.5,y:52.6},0).wait(1).to({regY:15.8,scaleX:1.04,scaleY:1.04,x:68.3,y:51.1},0).wait(1).to({regY:15.7,scaleX:1.04,scaleY:1.04,y:53.5},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:57.6},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:68.4,y:63.5},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:68.5,y:71.5},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:68.6,y:82},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:68.7,y:95.2},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:68.9,y:111.2},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:69.1,y:129.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:69.4,y:151},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:69.6,y:179.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:70.1,y:217.3},0).wait(1).to({scaleX:1,scaleY:1,x:70.5,y:265},0).to({_off:true},1).wait(21));

	// Символ 22
	this.instance_2 = new lib.Символ22();
	this.instance_2.setTransform(394.6,17.3,1,1,0,0,0,99,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({x:305.4},0).wait(1).to({x:264.9},0).wait(1).to({x:239.8},0).wait(1).to({x:221.4},0).wait(1).to({x:208.1},0).wait(1).to({x:198.3},0).wait(1).to({x:191},0).wait(1).to({x:185.7},0).wait(1).to({x:182.2},0).wait(1).to({x:180.2},0).wait(1).to({x:179.6},0).wait(45).to({scaleX:1.01,scaleY:1.01,x:180.1,y:13},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:180.5,y:10.2},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:180.7,y:8.2},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:181,y:6.7},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:181.1,y:5.1},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:181.3,y:3.9},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:181.4,y:2.9},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:181.5,y:2.3},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:181.6,y:1.7},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:181.7,y:1.4},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:181.6,y:4},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:8.1},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:181.5,y:14},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:181.4,y:22.1},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:181.3,y:32.7},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:181.2,y:46},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:181,y:62.1},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:180.9,y:80.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:180.7,y:102.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:180.4,y:130.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:180,y:169.2},0).wait(1).to({scaleX:1,scaleY:1,x:179.6,y:217.3},0).to({_off:true},1).wait(16));

	// Символ 21
	this.instance_3 = new lib.Символ21();
	this.instance_3.setTransform(19.3,29.3,0.236,0.236,0,0,0,25.4,15.7);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:25.6,scaleX:1.17,scaleY:1.17,x:43.3,y:14.7,alpha:0.56},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:50.3,y:10.4,alpha:0.725},0).wait(1).to({scaleX:1.61,scaleY:1.61,x:54.6,y:7.8,alpha:0.824},0).wait(1).to({scaleX:1.72,scaleY:1.72,x:57.5,y:6,alpha:0.891},0).wait(1).to({scaleX:1.79,scaleY:1.79,x:59.4,y:4.8,alpha:0.936},0).wait(1).to({scaleX:1.85,scaleY:1.85,x:60.7,y:4,alpha:0.967},0).wait(1).to({scaleX:1.88,scaleY:1.88,x:61.5,y:3.5,alpha:0.986},0).wait(1).to({scaleX:1.89,scaleY:1.89,x:62,y:3.3,alpha:0.997},0).wait(1).to({scaleX:1.9,scaleY:1.9,x:61.9,y:3.1,alpha:1},0).wait(1).to({scaleX:1.93,scaleY:1.93,x:62.6,y:2.7},0).wait(1).to({scaleX:1.94,scaleY:1.94,x:62.9,y:2.4},0).wait(1).to({scaleX:1.95,scaleY:1.95,x:63.1,y:2.3},0).wait(1).to({scaleX:1.95,scaleY:1.95,x:63.2},0).wait(1).to({scaleX:1.95,scaleY:1.95,y:2.2},0).wait(1).to({scaleX:1.96,scaleY:1.96,x:63.3},0).wait(1).to({regX:25.5,x:63.2,y:2.3},0).wait(1).to({regX:25.6,scaleX:1.57,scaleY:1.57,x:53.4,y:8.4},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:49,y:11.1},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:46.2,y:12.9},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:44.1,y:14.1},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:42.5,y:15.2},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:41.3,y:15.9},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:40.5,y:16.4},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:40,y:16.7},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:39.5,y:16.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:39.2,y:17.1},0).wait(1).to({scaleX:1,scaleY:1,x:38.9,y:17.3},0).wait(43).to({scaleX:1.01,scaleY:1.01,x:38,y:12.9},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:37.3,y:10.1},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:36.9,y:8.2},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:36.6,y:6.6},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:36.3,y:5.1},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:36,y:3.9},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:35.7,y:2.9},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:35.6,y:2.3},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:35.5,y:1.7},0).wait(1).to({regY:15.8,scaleX:1.04,scaleY:1.04,x:35.4,y:1.4},0).wait(1).to({regY:15.7,scaleX:1.04,scaleY:1.04,x:35.5,y:3.9},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:8},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:35.6,y:14},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:35.7,y:22},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:35.9,y:32.6},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:36.1,y:45.9},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:36.4,y:62.1},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:36.7,y:80.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:37.1,y:102.2},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:37.5,y:130.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:38.1,y:169.1},0).wait(1).to({scaleX:1,scaleY:1,x:38.9,y:217.3},0).to({_off:true},1).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,1.3,517,114.4);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand2.png
	this.instance = new lib.Символ10();
	this.instance.setTransform(24.9,209,1,1,0,0,0,95.5,116);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6,y:208.9},6,cjs.Ease.get(-1)).to({rotation:7.2,y:209},6,cjs.Ease.get(1)).to({rotation:3.5,y:208.9},6,cjs.Ease.get(-1)).to({rotation:0,y:209},6,cjs.Ease.get(1)).wait(1));

	// brest.png
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(100,119.5,0.949,0.949,0,0,0,49,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:39.9,scaleX:0.97,scaleY:0.97,y:118.5},6,cjs.Ease.get(-1)).to({regY:40,scaleX:1,scaleY:1,y:117.5},6,cjs.Ease.get(1)).to({scaleX:0.97,scaleY:0.97,y:118.5},6,cjs.Ease.get(-1)).to({scaleX:0.95,scaleY:0.95,y:119.5},6,cjs.Ease.get(1)).wait(1));

	// biceps.png
	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(38.5,160,0.911,0.911,0,0,0,22.5,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:22.4,scaleX:0.99,scaleY:0.99,x:38.4},6,cjs.Ease.get(-1)).to({regX:22.5,scaleX:1,scaleY:1,x:38.5},6,cjs.Ease.get(1)).to({scaleX:0.98,scaleY:0.98},6,cjs.Ease.get(-1)).to({scaleX:0.91,scaleY:0.91},6,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ12();
	this.instance_3.setTransform(109,123,1,1,0,0,0,109,123);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,0,288.6,246);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand11_r.png
	this.instance = new lib.Символ5();
	this.instance.setTransform(221.5,47.5,1,1,0,0,0,54.5,76);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-2.3,x:222.5,y:53.3},6,cjs.Ease.get(-1)).to({regX:54.6,rotation:-5,x:223.5,y:58.9},6,cjs.Ease.get(1)).to({rotation:-2.3,x:222.5,y:53.1},6,cjs.Ease.get(-1)).to({regX:54.5,rotation:0,x:221.5,y:47.5},6,cjs.Ease.get(1)).wait(1));

	// hand11_l.png
	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(83.5,22.5,1,1,0,0,0,28,83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:27.9,rotation:6.3,x:77.7,y:29.7},6,cjs.Ease.get(-1)).to({regX:28,rotation:12.8,x:72,y:37},6,cjs.Ease.get(1)).to({regX:27.9,rotation:6.3,x:77.7,y:29.7},6,cjs.Ease.get(-1)).to({regX:28,rotation:0,x:83.5,y:22.5},6,cjs.Ease.get(1)).wait(1));

	// hand1_r.png
	this.instance_2 = new lib.Символ7();
	this.instance_2.setTransform(180,64.5,1,1,0,0,0,4.5,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:7.3},6,cjs.Ease.get(-1)).to({regY:29.9,rotation:15,y:64.4},6,cjs.Ease.get(1)).to({regX:4.4,rotation:7.3},6,cjs.Ease.get(-1)).to({regX:4.5,regY:30,rotation:0,y:64.5},6,cjs.Ease.get(1)).wait(1));

	// han1_l.png
	this.instance_3 = new lib.Символ8();
	this.instance_3.setTransform(106,67,1,1,0,0,0,30,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,rotation:-10.3},6,cjs.Ease.get(-1)).to({regX:30.1,regY:47.6,scaleX:1,scaleY:1,rotation:-21,x:106.1},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-10.3,y:67.1},6,cjs.Ease.get(-1)).to({regX:30,regY:47.5,scaleX:1,scaleY:1,rotation:0,x:106,y:67},6,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_4 = new lib.Символ4();
	this.instance_4.setTransform(139.5,121.5,1,1,0,0,0,139.5,121.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-61,279,304.1);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(31).call(this.frame_31).wait(33));

	// Символ 29
	this.instance = new lib.Символ29();
	this.instance.setTransform(881.1,92.9,1,1,0,0,0,148.1,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:108.1,regY:11.9,x:841.1,y:92.8},0).wait(18).to({regX:148.1,regY:12,x:881.1,y:92.9},0).wait(1).to({regX:108.1,regY:11.9,x:716.1,y:92.8},0).wait(1).to({x:641.4},0).wait(1).to({x:590.6},0).wait(1).to({x:552},0).wait(1).to({x:520.4},0).wait(1).to({x:495.8},0).wait(1).to({x:477.4},0).wait(1).to({x:463.7},0).wait(1).to({x:453.2},0).wait(1).to({x:444.8},0).wait(1).to({x:437.6},0).wait(1).to({regX:148.1,regY:12,x:471.1,y:92.9},0).wait(4).to({x:881.1},9).wait(20));

	// Символ 28
	this.instance_1 = new lib.Символ28();
	this.instance_1.setTransform(928.1,55.7,1,1,0,0,0,101,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({x:803.1},0).wait(1).to({x:728.4},0).wait(1).to({x:677.6},0).wait(1).to({x:639},0).wait(1).to({x:607.4},0).wait(1).to({x:582.8},0).wait(1).to({x:564.4},0).wait(1).to({x:550.7},0).wait(1).to({x:540.2},0).wait(1).to({x:531.8},0).wait(1).to({x:524.6},0).wait(1).to({x:518.1},0).wait(8).to({x:928.1},11).wait(17));

	// Символ 27
	this.instance_2 = new lib.Символ27();
	this.instance_2.setTransform(736,53.6,1,1,0,0,0,79.5,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({x:611},0).wait(1).to({x:536.3},0).wait(1).to({x:485.5},0).wait(1).to({x:446.9},0).wait(1).to({x:415.3},0).wait(1).to({x:390.7},0).wait(1).to({x:372.3},0).wait(1).to({x:358.6},0).wait(1).to({x:348.1},0).wait(1).to({x:339.7},0).wait(1).to({x:332.5},0).wait(1).to({x:326},0).wait(12).to({x:736},13).wait(14));

	// Слой 6
	this.instance_3 = new lib.Символ20();
	this.instance_3.setTransform(490.9,151.1,1,1,0,0,0,139.2,36.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({regX:232,regY:126.2,x:583.7,y:240.5,alpha:0.598},0).wait(1).to({alpha:0.401},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.168},0).wait(1).to({alpha:0.099},0).wait(1).to({alpha:0.054},0).wait(1).to({alpha:0.022},0).wait(1).to({regX:139.2,regY:36.8,x:490.9,y:151.1,alpha:0},0).wait(27).to({alpha:1},10).wait(14));

	// Слой 4
	this.instance_4 = new lib.Символ15();
	this.instance_4.setTransform(221,-129,1,1,0,0,0,96.5,123);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({y:-122.4},0).wait(1).to({y:-112.6},0).wait(1).to({y:-99.1},0).wait(1).to({y:-81.3},0).wait(1).to({y:-57.8},0).wait(1).to({y:-26.3},0).wait(1).to({y:14.4},0).wait(1).to({y:73.7},0).wait(1).to({y:163},0).to({scaleY:0.97,y:167},2).to({scaleY:1,y:163},2).wait(1).to({x:189.6},0).wait(1).to({x:173.2},0).wait(1).to({x:161.8},0).wait(1).to({x:152.9},0).wait(1).to({x:146},0).wait(1).to({x:140.9},0).wait(1).to({x:137.2},0).wait(1).to({x:134.5},0).wait(1).to({x:132.5},0).wait(1).to({x:131},0).wait(17).to({x:221},10).to({scaleY:0.97,y:167},2).to({scaleY:1,y:163},2).to({y:-129},9).wait(1));

	// Слой 5
	this.instance_5 = new lib.Символ19();
	this.instance_5.setTransform(228,278,0.476,0.476,0,0,0,133.5,40.1);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regY:40,scaleX:0.49,scaleY:0.49,alpha:0.022},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.056},0).wait(1).to({scaleX:0.53,scaleY:0.53,y:278.1,alpha:0.102},0).wait(1).to({scaleX:0.56,scaleY:0.56,alpha:0.163},0).wait(1).to({scaleX:0.6,scaleY:0.6,y:278.2,alpha:0.244},0).wait(1).to({scaleX:0.66,scaleY:0.66,y:278.3,alpha:0.351},0).wait(1).to({scaleX:0.73,scaleY:0.73,y:278.4,alpha:0.491},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:278.7,alpha:0.694},0).wait(1).to({scaleX:1,scaleY:1,y:279,alpha:1},0).wait(5).to({x:200.1},0).wait(1).to({x:185.6},0).wait(1).to({x:175.4},0).wait(1).to({x:167.5},0).wait(1).to({x:161.4},0).wait(1).to({x:156.9},0).wait(1).to({x:153.6},0).wait(1).to({x:151.2},0).wait(1).to({x:149.4},0).wait(1).to({x:148},0).wait(17).to({x:228},10).wait(4).to({regY:40.1,scaleX:0.48,scaleY:0.48,y:278,alpha:0},9).wait(1));

	// Слой 3
	this.instance_6 = new lib.Символ9();
	this.instance_6.setTransform(823,182,1,1,0,0,0,109,123);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({regX:73.3,scaleX:0.94,scaleY:0.94,x:678,y:189.7},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:620.9,y:193.7},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:581,y:196.4},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:550.2,y:198.6},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:526.1,y:200.3},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:508.4,y:201.6},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:495.5,y:202.5},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:486.1,y:203.1},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:479,y:203.6},0).wait(1).to({regX:109.1,scaleX:0.82,scaleY:0.82,x:503,y:204},0).wait(17).to({regX:109,scaleX:1,scaleY:1,x:823,y:182},10).wait(14));

	// Слой 12
	this.instance_7 = new lib.Символ32();
	this.instance_7.setTransform(532.4,284.3,1,1,0,0,0,57.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:0},9).to({_off:true},1).wait(44).to({_off:false},0).to({alpha:1},9).wait(1));

	// Слой 2
	this.instance_8 = new lib.Символ3();
	this.instance_8.setTransform(216,220.4,1,1,0,0,0,139.5,121.5);

	this.instance_9 = new lib.Символ26();
	this.instance_9.setTransform(318.5,152.5,1,1,0,0,0,329.5,159.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_8}]},8).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_9}]},10).to({state:[{t:this.instance_9}]},8).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},8).to({state:[{t:this.instance_9}]},10).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).wait(4).to({alpha:1},10).wait(17).to({alpha:0},10).wait(4).to({_off:true},1).wait(9));

	// Слой 1
	this.instance_10 = new lib.Символ1();
	this.instance_10.setTransform(355.5,152.5,1,1,0,0,0,355.5,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(14).to({x:331.2},0).wait(1).to({x:318.4},0).wait(1).to({x:309.5},0).wait(1).to({x:302.7},0).wait(1).to({x:297.3},0).wait(1).to({x:293.3},0).wait(1).to({x:290.4},0).wait(1).to({x:288.3},0).wait(1).to({x:286.8},0).wait(1).to({x:285.5},0).wait(17).to({x:355.5},10).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-252,1029.2,593.9);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(105.8,50.2,1,1,0,0,0,105.8,50.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:538.9},19).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,211.6,100.6);


(lib.Символ33копия = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AInBDQgJgDgHgFQgHgGgGgIIgCgJQgCgFAAgGIAAgxQAAgLAEgJQAFgIAIgGQAGgFAKgDQAKgDAKAAQALAAALADQAMAEAHAHIgMAVQgHgGgIgCQgHgCgHAAQgFAAgEACQgEABgEADQgEADgCAFQgDAEABAHIAAAmQgBAHADAFQACAFAEADQADADAFABIAJABQAHAAAHgCQAHgCAIgFIAMAVQgHAGgLAEQgLAEgMAAQgKAAgKgDgAGTBEIAAiIIBgAAIAAAZIhEAAIAAAgIA5AAIAAAWIg5AAIAAAhIBEAAIAAAYgAEXBEIAAiIIA+AAQAKAAAHADQAIADAFAGQAFAFACAHQADAHAAAHQAAAHgEAJIgGAHIgHAFQAFACAEACIAFAIQADAEABAFIABAIQAAAJgDAHQgCAHgFAGQgFAGgIADQgHADgKAAgAEyAsIAdAAQAKAAAEgFQAFgFAAgIQAAgIgFgEQgFgFgJAAIgdAAgAEygNIAcAAQAJAAAFgEQAFgEgBgGQABgIgFgEQgFgEgJAAIgcAAgABtBEIAAiIIAcAAIAAA1IAgAAQAKAAAIADQAIADAFAGQAGADADAIQADAIAAAJQAAAIgDAIQgBAHgGAGQgFAGgIAEQgIAEgMAAgACJAsIAdAAQAEAAADgCQAEgBADgDQAFgFABgIQgBgIgFgFQgDgCgEgBQgDgCgFAAIgcAAgAAgBEIAAhvIgjAAIAAgZIBjAAIAAAZIglAAIAABvgAglBEIgIgcIgwAAIgJAcIgeAAIAxiIIAcAAIAwCIgAg1ARIgQg0IgBAAIgQA0IAhAAgAjsBEIAAiIIA9AAQAKAAAIAEQAHAEAFAGQAFAHADAHQACAIAAAHQgBAIgCAIQgDAHgFAEQgFAHgIAEQgHADgKAAIghAAIAAA0gAjRgGIAcAAIAJgBQADgCACgCQAFgGAAgHQAAgIgFgGQgFgFgJAAIgcAAgAljBEIAAiIIBaAAIAAAZIg+AAIAAAcIAfAAQALAAAHADQAJADAFAGQAGADADAIQADAIAAAJQAAAIgCAIQgDAHgFAGQgGAGgIAEQgHAEgMAAgAlHAsIAcAAQAEAAAEgCQADgBADgDQAGgFAAgIQAAgIgGgFQgDgCgDgBQgEgCgEAAIgcAAgAmOBEIgIgcIgxAAIgJAcIgdAAIAxiIIAcAAIAwCIgAmeARIgQg0IgBAAIgQA0IAhAAgAoVBEIAAg5IgzAAIAAA5IgcAAIAAiIIAcAAIAAA4IAzAAIAAg4IAcAAIAACIg");
	this.shape.setTransform(61.3,25.1);

	// Слой 1 - копия: 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtCDvQgyAAAAgxIAAl6QAAgzAyAAIaFAAQAyAAAAAzIAAF6QAAAxgyAAg");
	mask.setTransform(60.5,24);

	// Слой 3
	this.instance = new lib.Символ39();
	this.instance.setTransform(-162.2,26.7,1,1,0,0,0,105.8,50.2);

	this.instance.mask = mask;

	// Слой 1 - копия
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF6600","#FF9900","#FF6600"],[0,0.471,1],-88.5,0,88.5,0).s().p("AtCDvQgyAAAAgxIAAl6QAAgzAyAAIaFAAQAyAAAAAzIAAF6QAAAxgyAAg");
	this.shape_1.setTransform(60.5,24);

	// Слой 1 - копия: 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AtCDvQgyABAAgyIAAl6QAAgzAyAAIaFAAQAyAAAAAzIAAF6QAAAygygBg");
	this.shape_2.setTransform(60.5,25);

	// Слой 1
	this.instance_1 = new lib.Растровоеизображение1();
	this.instance_1.setTransform(-36,-7);

	this.addChild(this.instance_1,this.shape_2,this.shape_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36,-7,197,68);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AInBDQgJgDgHgFQgHgGgGgIIgCgJQgCgFAAgGIAAgxQAAgLAEgJQAFgIAIgGQAGgFAKgDQAKgDAKAAQALAAALADQAMAEAHAHIgMAVQgHgGgIgCQgHgCgHAAQgFAAgEACQgEABgEADQgEADgCAFQgDAEABAHIAAAmQgBAHADAFQACAFAEADQADADAFABIAJABQAHAAAHgCQAHgCAIgFIAMAVQgHAGgLAEQgLAEgMAAQgKAAgKgDgAGTBEIAAiIIBgAAIAAAZIhEAAIAAAgIA5AAIAAAWIg5AAIAAAhIBEAAIAAAYgAEXBEIAAiIIA+AAQAKAAAHADQAIADAFAGQAFAFACAHQADAHAAAHQAAAHgEAJIgGAHIgHAFQAFACAEACIAFAIQADAEABAFIABAIQAAAJgDAHQgCAHgFAGQgFAGgIADQgHADgKAAgAEyAsIAdAAQAKAAAEgFQAFgFAAgIQAAgIgFgEQgFgFgJAAIgdAAgAEygNIAcAAQAJAAAFgEQAFgEgBgGQABgIgFgEQgFgEgJAAIgcAAgABtBEIAAiIIAcAAIAAA1IAgAAQAKAAAIADQAIADAFAGQAGADADAIQADAIAAAJQAAAIgDAIQgBAHgGAGQgFAGgIAEQgIAEgMAAgACJAsIAdAAQAEAAADgCQAEgBADgDQAFgFABgIQgBgIgFgFQgDgCgEgBQgDgCgFAAIgcAAgAAgBEIAAhvIgjAAIAAgZIBjAAIAAAZIglAAIAABvgAglBEIgIgcIgwAAIgJAcIgeAAIAxiIIAcAAIAwCIgAg1ARIgQg0IgBAAIgQA0IAhAAgAjsBEIAAiIIA9AAQAKAAAIAEQAHAEAFAGQAFAHADAHQACAIAAAHQgBAIgCAIQgDAHgFAEQgFAHgIAEQgHADgKAAIghAAIAAA0gAjRgGIAcAAIAJgBQADgCACgCQAFgGAAgHQAAgIgFgGQgFgFgJAAIgcAAgAljBEIAAiIIBaAAIAAAZIg+AAIAAAcIAfAAQALAAAHADQAJADAFAGQAGADADAIQADAIAAAJQAAAIgCAIQgDAHgFAGQgGAGgIAEQgHAEgMAAgAlHAsIAcAAQAEAAAEgCQADgBADgDQAGgFAAgIQAAgIgGgFQgDgCgDgBQgEgCgEAAIgcAAgAmOBEIgIgcIgxAAIgJAcIgdAAIAxiIIAcAAIAwCIgAmeARIgQg0IgBAAIgQA0IAhAAgAoVBEIAAg5IgzAAIAAA5IgcAAIAAiIIAcAAIAAA4IAzAAIAAg4IAcAAIAACIg");
	this.shape.setTransform(61.3,25.1);

	// Слой 1 - копия: 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtCDvQgyAAAAgxIAAl6QAAgzAyAAIaFAAQAyAAAAAzIAAF6QAAAxgyAAg");
	mask.setTransform(60.5,24);

	// Слой 3
	this.instance = new lib.Символ39();
	this.instance.setTransform(-162.2,26.7,1,1,0,0,0,105.8,50.2);

	this.instance.mask = mask;

	// Слой 1 - копия
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C10000","#FF0000","#C10000"],[0,0.471,1],-88.5,0,88.5,0).s().p("AtCDvQgyAAAAgxIAAl6QAAgzAyAAIaFAAQAyAAAAAzIAAF6QAAAxgyAAg");
	this.shape_1.setTransform(60.5,24);

	// Слой 1 - копия: 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AtCDvQgyABAAgyIAAl6QAAgzAyAAIaFAAQAyAAAAAzIAAF6QAAAygygBg");
	this.shape_2.setTransform(60.5,25);

	// Слой 1
	this.instance_1 = new lib.Растровоеизображение1();
	this.instance_1.setTransform(-36,-7);

	this.addChild(this.instance_1,this.shape_2,this.shape_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36,-7,197,68);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.setTransform(124.5,31,1,1,0,0,0,88.5,24);

	this.instance_1 = new lib.Символ33копия();
	this.instance_1.setTransform(124.5,31,1,1,0,0,0,88.5,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-232,-16.5,429.1,100.6);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.setTransform(-17.6,123.7,1,1,0,0,0,-17.6,33.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:98.5,regY:34,x:98.5,y:83},0).wait(1).to({y:63},0).wait(1).to({y:50.7},0).wait(1).to({y:42},0).wait(1).to({y:35.5},0).wait(1).to({y:30.9},0).wait(1).to({y:27.6},0).wait(1).to({y:25.3},0).wait(1).to({y:23.8},0).wait(1).to({y:22.7},0).wait(1).to({regX:-17.6,regY:33.7,x:-17.6,y:21.7},0).to({y:31.7},3).wait(1).to({regX:98.5,regY:34,x:98.5,y:28},0).wait(1).to({y:25.9},0).wait(1).to({y:24.5},0).wait(1).to({y:23.5},0).wait(1).to({y:22.8},0).wait(1).to({y:22.4},0).wait(1).to({regX:-17.6,regY:33.7,x:-17.6,y:21.7},0).wait(1).to({regX:98.5,regY:34,x:98.5,y:25.1},0).wait(1).to({y:28.4},0).wait(1).to({y:32.6},0).wait(1).to({y:38.5},0).wait(1).to({y:47.6},0).wait(1).to({y:62},0).wait(1).to({y:86},0).wait(1).to({regX:-17.6,regY:33.7,x:-17.6,y:123.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-232,73.5,429.1,100.6);


// stage content:



(lib.protein_640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0
		var _this = this;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		    function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(1);
			_this.btn.gotoAndPlay(1);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		     function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(32);
			_this.btn.gotoAndPlay(15);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.instance = new lib.Символ43();
	this.instance.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.btn = new lib.Символ41();
	this.btn.setTransform(204.5,268.8,1,1,0,0,0,-17.6,33.7);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Слой 1
	this.main = new lib.Символ2();
	this.main.setTransform(355.5,152.5,1,1,0,0,0,355.5,152.5);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(310,-99.5,1039.2,661.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;