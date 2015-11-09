(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/a1.png", id:"a1"},
		{src:"images/a2.png", id:"a2"},
		{src:"images/a3.png", id:"a3"},
		{src:"images/a4.png", id:"a4"},
		{src:"images/a5.png", id:"a5"},
		{src:"images/a6.png", id:"a6"},
		{src:"images/a7.png", id:"a7"},
		{src:"images/fon.jpg", id:"fon"},
		{src:"images/h1.png", id:"h1"},
		{src:"images/h2.png", id:"h2"},
		{src:"images/hand.png", id:"hand"},
		{src:"images/hed.png", id:"hed"},
		{src:"images/kam.png", id:"kam"},
		{src:"images/kam2.png", id:"kam2"},
		{src:"images/kam3.png", id:"kam3"},
		{src:"images/leg.png", id:"leg"},
		{src:"images/trree.png", id:"trree"},
		{src:"images/vetki.png", id:"vetki"}
	]
};



// symbols:



(lib.a1 = function() {
	this.initialize(img.a1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,270);


(lib.a2 = function() {
	this.initialize(img.a2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,41);


(lib.a3 = function() {
	this.initialize(img.a3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,183);


(lib.a4 = function() {
	this.initialize(img.a4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,51);


(lib.a5 = function() {
	this.initialize(img.a5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,189);


(lib.a6 = function() {
	this.initialize(img.a6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,226);


(lib.a7 = function() {
	this.initialize(img.a7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,82);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,500);


(lib.h1 = function() {
	this.initialize(img.h1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,67);


(lib.h2 = function() {
	this.initialize(img.h2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,113);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,155);


(lib.hed = function() {
	this.initialize(img.hed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,90);


(lib.kam = function() {
	this.initialize(img.kam);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,81);


(lib.kam2 = function() {
	this.initialize(img.kam2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,78);


(lib.kam3 = function() {
	this.initialize(img.kam3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,78);


(lib.leg = function() {
	this.initialize(img.leg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,204);


(lib.trree = function() {
	this.initialize(img.trree);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,437);


(lib.vetki = function() {
	this.initialize(img.vetki);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,166);


(lib.Символ71 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AU4MuIkSAAIgxgEI2ZgBIgbgEIifgBIhfgFQhSgEgygKInqAAQgLAEgbAAQhDAAgBgbQAMgigJgOQgOgXgDgQQgCgLgBgYQAAgfACgFQACgHAYglQgVgUgFgKQgCgFAAgUIABgUQAEgLAPAAQALAAAFALIAEARIAAAAQAxgVAUgnQAPgdgEgkQgDggAVgkQAXgnAAgPQgBgGgPgKQgPgKAAgGQAAgIAPgeQAPgdABgWQAAgGgGgFQgEgFAAgGQAAgVBfh1QBniAAsAAQAJAAATAsIAeBKQBMg6A8hdQA9hrAegyQAig4ARgUQAkgtA2ghQBJgvAag2QAJgTAIgFQAKgHAXgBIAPggQAYguAJAAQAMAAAIAOQADAIAEALQAhghAUAAQALAAAJARIAJAQQAUgJALgIQAFgGABgGQALgnADgEQAHgRAdgVQAigagBAlQAAACgKAPQAKAFAKALIAXAVIArgFIAgAAQAHgFAbghQAigeArAAQATAAAMAIIAOAIQAPAAAJgRQAIgRANgBQAVgCAHAOQADAHAEAQIAZgTQAMgHAKAAQAHAAAdBCQAiBTAPAYQBLAHAbAWQAPAOAAAXQAAAQgiBJIAAAgQAaACAeAgQAaAcADATQAMgBAdgKIAdgKQARAAAMARQALAQAMAAQAEAAArgTQAqgTAmAAQAKAABGAWQBXAVBjAAQAUAAAggLQAggMAYAAQAaAAAEALQAFAPAFACIAuACQAWAPAOAXIAVAoQAHAKAoAdQAmAbAFAMQAGAPgBAYIgDAoQAAAdAPANQAPANABAUQAAAHgGAQQgEAOAAAGQAAAhAdAnQAeAnAAA0QAAAQgRA2QBTCbAAACQAAAUgZBAIgaA+QAAAGAGAhQAEAhAAAGQAAAfgZAhQgZAhABAFQAAACARASQARASAAAKQAAAQgDAFQgKAPgiAAIgIAAg");
	this.shape.setTransform(144.7,81.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,289.4,163);


(lib.Символ67 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.vetki();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,166);


(lib.Символ65 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC3399").s().p("AgTBDIgHgvIACgCIAVgDQAGgCAFgDQAFgDADgDQACgEAAgDQAAgHgGgEQgFgEgIAAQgKAAgKAEQgLAGgKAIIgcgkQAHgHAHgFQAIgGAJgEQAJgEAKgCQALgCAKAAQAPAAANAEQANAFAJAHQAJAIAFAKQAGALAAAOQAAALgFALQgEAIgHAIQgHAGgKAFQgKAFgMACIgDASg");
	this.shape.setTransform(12.1,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660066").s().p("AgaAXIAAgtIA1AAIAAAtg");
	this.shape_1.setTransform(11.7,17.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5,0,14.3,19.9);


(lib.Символ59 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AgqAlIAAhJIBVAAIAABJg");
	this.shape.setTransform(10.5,27.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AgfBqIgLhKIADgDIAhgFQALgDAIgFQAIgEAEgGQAEgGAAgFQAAgLgJgHQgIgGgOAAQgQAAgRAHQgQAIgPAOIgtg6QALgLALgIQANgJANgFQAPgHAQgDQARgEARAAQAXAAAVAHQAUAGAOAMQAQANAHARQAJARAAAWQAAASgIAQQgFAOgNAMQgLAKgQAHQgOAHgUAFIgEAcg");
	this.shape_1.setTransform(11.2,10.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.4,31.3);


(lib.Символ58 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("AwlCcQgQgCgOgHQgOgFgNgIQgNgJgLgKQgKgMgIgMQgKgNgGgOQgFgPgEgQQgCgQgBgRQABgPACgQQAEgQAFgOQAHgOAIgNQAIgOALgKQAMgLANgIQAMgKAPgGQAPgFAPgEQARgCARgBQAXABAVAEQASAFARAIQAPAJANAMQAMALALAPIg/AxQgOgRgPgJQgRgKgVAAQgQAAgOAGQgOAHgJALQgKAMgGAOQgFAQAAAPQAAARAFAPQAGAOAKAMQAJAMAOAFQAOAHAQAAQAMgBAJgCQAKgDAIgEQAOgJAQgSIBBAtQgMAQgNAMQgOANgPAJQgRAKgUAFQgVAEgZABQgQgBgQgDgARQCaIAAiwIhPB3IgBAAIhPh2IAACvIhTAAIAAkyIBaAAIBJB3IBJh3IBaAAIAAEygAI4CaIAAkyID4AAIAABIIijAAIAAAvICTAAIAABBIiTAAIAAAxIClAAIAABJgAG/CaIgXg3Ih2AAIgWA3IhaAAICDk1IBSAAICEE1gAGQAgIgihVIgjBVIBFAAgAgkCaIAAkyIDbAAIAABKIiJAAIAADogAiwCaIAAisIh3CsIhPAAIAAkyIBUAAIAACrIB3irIBQAAIAAEygAn0CaIhGh1IgeAjIAABSIhVAAIAAhSIgdgjIhHB1IhlAAIBxixIhtiBIBjAAIBiB9IAAh9IBVAAIAAB9IBhh9IBkAAIhtCBIByCxg");
	this.shape.setTransform(118.9,16);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,237.8,32);


(lib.Символ57 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0099").s().p("AiqCVIAGhCIAUACQALAAAGgFQAJgHAGgSQAHgVAEgkQACgcAChSIAAgrIDqAAIAAEyIhVAAIAAjnIhGAAIAAAMQgCBSgFAeQgEAXgFARQgFARgHAMQgGAMgJAJQgHAIgKAFQgJAEgKADIgWACQgWAAgdgHgAGGCXIAAirIh3CrIhPAAIAAkyIBUAAIAACsIB3isIBQAAIAAEygAkTCXIAAirIh3CrIhQAAIAAkyIBUAAIAACsIB4isIBPAAIAAEyg");
	this.shape.setTransform(47.5,15.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,95.1,31.3);


(lib.Символ56 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660066").s().p("AkOC7IAAg9IikAAIgFA9IhNAAIAAiIIAbAAIAOgrQAGgUAEgZQAEgbACggIAChUIDqAAIAADnIAjAAIgKCIgAl3hmQgDA+gEAZQgFAfgMAjIBbAAIAAicIhDAAgAq/CAQgTgEgSgHQgQgGgOgKIgbgVIAsg5QASASAUAJQALAFAMACQANADANAAQAXAAANgJQALgIAAgOQAAgNgMgGQgMgIgZAAIggAAIAAg9IAfAAQAWAAAMgIQAKgHAAgNQAAgMgLgIQgKgHgSAAQgUAAgWAIQgXAJgOANIgqgyQALgMANgJQAOgJAPgHQARgIASgDQATgEAVAAQAaAAAVAGQAVAGAQALQAPALAIAPQAJAQAAASQAAANgEALQgDALgGAJQgGAIgJAGIgTAMQANAEAJAGQAKAGAHAJQAIAIAEAKQAEAMAAAOQAAAVgJARQgIASgQAMQgQANgXAHQgXAIgcAAQgZAAgWgEgAU4B+IAAivIhPB2IgBAAIhPh1IAACuIhTAAIAAkyIBaAAIBJB3IBKh3IBaAAIAAEygAMhB+IAAkyID3AAIAABIIijAAIAAAvICUAAIAABBIiUAAIAAAxIClAAIAABJgAKnB+IgWg3Ih3AAIgWA3IhaAAICEk0IBSAAICDE0gAJ4AEIgihVIgjBVIBFAAgACJB+IAAkyICdAAQAdAAAVAHQAVAHANANQAKAKAFAMQAFANAAAQQAAANgDALQgEALgGAIQgGAIgJAHIgTALQAOAFALAGQAMAHAHAIQAJAIAEAMQAEAMAAAQQAAATgIAQQgIAQgPALQgPALgVAGQgWAGgcAAgADcA5IBCAAQATAAALgHQALgIAAgOQAAgNgLgHQgKgIgVAAIhBAAgADcg5IA1AAQAUAAAKgHQALgHAAgOQAAgNgKgHQgKgHgTAAIg3AAgAiaB+IAAkyID1AAIAABIIihAAIAAAvICSAAIAABBIiSAAIAAAxICjAAIAABJgAuAB+IgWg3Ih3AAIgWA3IhaAAICEk0IBSAAICDE0gAuvAEIgihVIgjBVIBFAAgA2MB+IAAkyICEAAQAdAAAYAHQAXAHARAOQARAPAJAUQAJAdAAARQAAANgDANQgCALgFALQgFAKgHAJIgPAOQgSANgYAIQgZAHgcAAIgrAAIAABYgA03gbIApAAQALAAAJgDQAJgDAHgFQAGgFADgIQAEgIAAgJQAAgKgEgIQgDgHgGgFQgHgFgJgDQgJgDgLAAIgpAAg");
	this.shape.setTransform(142.1,18.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,284.3,37.6);


(lib.Символ55 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.h1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42,67);


(lib.Символ54 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.leg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,114,204);


(lib.Символ53 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hed();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,69,90);


(lib.Символ49 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("AFUk1ICbAAIgDBpAHeDDIgEBzIibAAAndjMIAEhpICgAAAlOE2IigAAIAEhz");
	this.shape.setTransform(49.6,31);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,102.1,65);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s().p("Eg6PAc/MAAAg5+MB0eAAAMAAAA5+g");
	this.shape.setTransform(372.8,185.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hand();
	this.instance.setTransform(0,0,0.705,0.705);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,95.9,109.3);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.kam();
	this.instance.setTransform(0,11.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,11.1,79,81);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.kam3();
	this.instance.setTransform(9.3,2.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9.3,2.4,77,78);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjmE3QgZgGAAgSIABgGIgEgJIgFgVIAAgBQgKgDgDgIIgDgOQAAgFAGgHQAIgJAEgJQAEgHgCgIIgEgPQAAgFAHgZIAFgYQAAgPANgSQAMgSAAgJQAAgFgKgQQgKgQAAgVQgGghgOgFQgNgEAAgQQAAgHANgQIALgOQABgEgHgNQgFgMAAgGQAAgHAIgVQAHgVAAgGQABgcgVgJQgTgKgBgbQABgiAOgDQAFgCAGADIAHgBICTgCQBJgOAYAVQALALgDAOQgBANgDAIQgFANgRAIIAAABQAGgBAHADQARgEATgDQBXgMgBAhQAAAKgJAHQADAGgCAHQABARgdAKIABALQAAAKgKAMQgJAMABACQAAAJAaA7QgBALgKAJQgOAKgXACQAAAQAFALQAHAKAAAMQgBAHgOAoIAGATQAEASAAAGQADgCAEABQAMABAUAXQAcAjALAeQANADAUAKQAXAMAWARIAFAEIBHAAQAZAHAAASQgBAIgGAHQgHAIgLAAg");
	this.shape.setTransform(29.2,31.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,58.4,62.4);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAnCfQgUgsgLgOQgJgOgjgdIg4guQhHgygpgiQhMg+AAggQAAgOAKgHQAEgCAEgBQAXASBABAQBBBAANADQAMADBEgiIAfgRIApANIBmgBQAIgCANgHIAVAWQBFBGANAGIhZBXQhHBFggASQgJAFgIAAQgUAAgNggg");
	this.shape.setTransform(28.1,19.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,56.3,38.2);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ADTH4IgUgsQgkhFhEgaIg7AAQgqAEgfAQQgRAJgZARIgqAbQgkAWgGAAQgFAAgbgnIglg1QgkgpgmgaQgcgTgBgCIASgcQAXgiAOgjIAOg3QAGgaAIgIIACgXQgBhQg8gwIgrgeQgSgPgBgPQABgSAQgoQALgcAOgZQAOgaAFgdQACgNADgHQACgJABgHIACgLQgFgEAAgCQAAgMAPAAQAOAACSA/QBPAdAhAdIgMgdQgcgpgIgYIgCgGIg0hVIAAgEQgWgcgBgEQAAgMAHAAIgEgHQgBgUAHgCQgJgPAAgGQAAgSAPAKQANAJAGALIAMARQAKANAEAJIAKAXQAIADAJAJQAkAgAbA7QAPAYAcArIAJAPIAjgaQAugkAZgbQAqg0AXgaQAngqAEATQAHACAOATQARAWAjA0QAfAxAFAKQAKAVAAAgQAAAcgLAaQgFAMgYAsQgLATgmAsIgVAXQgEAMgBANIgCAsIAOASQAFAFAQAXQAQAVAOAAIAFgDQAEgDACAAQAJAAAHAQIAIAVQAMAVAAARQAAARgMAZQgRAjgeAAQgQAAgRgPIACATQAFAcAPALQANAJgBARQAAAMgkBeQgIAVgKAvQgKAjgYAAQgKAAgKgSg");
	this.shape.setTransform(38.2,52.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76.4,104.6);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.a6();
	this.instance.setTransform(0,0,0.651,0.651);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76.9,147.2);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.a3();
	this.instance.setTransform(0,0,0.651,0.651);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,28.7,119.2);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.a2();
	this.instance.setTransform(0,0,0.651,0.651);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.3,26.7);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.a7();
	this.instance.setTransform(0,0,0.651,0.651);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,50.2,53.4);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.a4();
	this.instance.setTransform(0,0,0.651,0.651);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.8,33.2);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.a5();
	this.instance.setTransform(0,0,0.651,0.651);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.2,123.1);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.kam2();
	this.instance.setTransform(8.5,10.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(8.5,10.5,78,78);


(lib.shape34 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF18").s().p("AA+CSIgggFIh1AIIgQgDQAJgfACghIACgzQADgWAMgIQAOgIAjAAQAYAAAJAWQAFAJADAOIAMBHIAQgkQAHgNAHAAQAJAAANAbIARAnQADgJAAgSQAAgJgEgRIgFgZIgqgLQgegJgFgQQgHgOgSgVQgYgYgQAAIgTAFIgPAGIgXAAIgEgYIgDgNIAEAAIADgBIADgCQAOgtAugeQgBASATANQAVAQAFALQAMAnAFAJQAMAPAXAAQAYAAAfgWQAigZABghIAMAOQAEAFAAAIQAAAhggANQgfAMAAAkIADAJQAEAFAHAAIAYgIQAKAUAEAdIAEAfIgBARIABAAQgdAmggAAgAiQAXQgLgHAAgLQAAgFAGgNQAGgOAGAAQADAAAGAFIAIAGIADAIQAFAIAAAHQAAAFgGAIQgFAIgGAAQgFAAgKgFg");
	this.shape.setTransform(-47.5,76.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E78A0E").s().p("AmLFaQgPgOAAgfQAAgdAKgZQALgbADg7QACg3AigHIAagEQANgEAFgPIADgcQADgUAJgHQACgCAXgHQAUgFAAgGQACgYAYgTQAYgSAAgZQgBgpALgVQASgfAvAAQArAAAIAIQAJAJAAAuIAAAIIgDASQgEAWgIAHIAAgDQAEgZgHgUQgIgYgSAAQgtAAgDAdQgGAxgUAWIg0A2QgTAXgZAlIAAAtIgDAAIACANIAEAYIAXAAIAQgGIATgFQAQAAAXAYQAVAVAGAQQAGAQAdAJIArALIAEAZQAEARABAJQAAASgEAJIgQgnQgNgbgKAAQgHAAgGANIgQAkIgNhHQgCgOgFgJQgMgYgXAAQgjAAgPAKQgMAIgCAWIgDAzQgCAhgJAfIgBAFIgBAAIhPAHQghAAgPgOgAk4C7QgFAOgBAGQAAALAMAHQAJAFAFAAQAGAAAGgIQAFgIAAgFQAAgJgEgIIgEgIIgIgGQgFgFgEAAQgFAAgHAOgADIEmIgmgYQgYgRgVAGQAKgQAHgDIAZgBQAxAAAVA0IgDABIAAACgAGFCjIgCgNIgRADIgPADQgEAAgWgKQgXgLgCgFQAJgFALgMQAIgJAIAAIAnAGQAgAHgBAHQAAAPgUAogADhCsIgIgCIADgRIAbAAIAAAKQAAAKgNAAgAD3BvIACgEQADgDAHgBIACgBIAFgBIAJAAQAEACAAAIQAAAIgEACIgMADQgQAAAAgNgADXhYQgUgVgfAAIgoAHIgZAHQgGAAgMgVQgNgVAAgHIASAIQARAHAGAAQAHAAARgLQARgMAQAAIAmADQAYABANgCQAagEAggaQAlgdACgeIAEAAQABAJAEAGQAGAHAIgBIACgDIABgGIgIglIgJgpQAgAPAJAMQAHAMABAdQgBAPgGAbIgHAcIgCAFIgCADQgSASgvAhQg8AqgPAAgAEklaQAAgKADgDQAJAAADADQgHABAHABIALABQACAIgEAGQgEAGgKAAQgKAAAAgNg");
	this.shape_1.setTransform(-31.2,56.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.3,20.2,82.2,72.1);


(lib.shape33 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF18").s().p("AB+BLQgXgKg9AAIhKAGIg5AFIgXgRQgegaAAgcIADgPIACgVIAVAAQAGAIANAZQAFgNAcgdIAngoQgGARAXAkQAXAmAgAAIAigIIAggFIAVACIABApQACAdAGALg");
	this.shape.setTransform(-52.5,82.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E78A0E").s().p("AhrFyQgFgLgCgdIgBgqIgVgDIggAHIgjAIQgfAAgagoQgWgkAGgRIgnAoQgdAdgEAPQgNgbgHgIIgUAAIgCAVIgDARQAAAcAeAaIgDASQgegCgggPQgogVAAgeQAAgbAjgyIA2hKIABAjQACARANAAQA1AAAgg0IAZgvQAQgdAPgQIAEADIAAAvQgHAhAAAPQAAAYASAhQAVAmAWAAQAVAAATgTIApghIACADIAHAeQAFATAAANIgDAeQACAcAQAAQAnAABSg/IAXgRQAPgHATAFQAXAFArgoIAAAaIgYAaIgYAWIAAAAIgBAAIgBAAQgBAAgBAAQgBABAAAAQAAAAAAAAQAAABAAAAIhqAzQhcAtgMAAgAGHD4IgJgHIgDgDQABgGAGgEQAIgFAMgBIAQAJIgCARgAGpDNQAEgSAHgHQAFgHANAAIADAAIAMADIAAAUIgLAJIgHACgADeCpQgMgQgNAAIgoAGQgXAAgdgXQAjgGAmgxQAigtAmAAQAVAAAOArQALAjAAAoQABAQgUAJIgVAFQgYAAgKgPgAg2CmQgGgFgPgiIAAgiIADAAQAMAdAoABIAWAEQAKAFAAASQAAAIgCADIAAACQgMAKgSAAQgbAAgHgHgAi7AbIAdgbQAOgMAMAAQAFAAAMAIIAPAFIAGgBQAEAYgYAAIgegEQgJAAgiAVgABfgDIA0g6IA5g5QAYgegBgqIgBgTQgDgbgPgXQgNgUgegcIAKgMQAPAAAlAXIAhAXIAIgBIADgCIAAgRIgfhHIABAAQAzAMAVArQAPAgAAA5QAAA8hUBFQgnAhhqA8gADxjiIABAPIACAKQAFALALAAQAOAAACgGQgBgMAEgKIAGAFIgDgGIgDABIAAAAIgRgPQgKgKgEgKQgHAGAAAVgAGtkwQgDgEgBgRIABgOQADgMAOAAQAKAAAEAHIAFAIIABADIAAAOQgBANgIAEIgIABgAAsljIgDgBQgCgRAOAAIAcADIAAAGIgKAGIgTAFg");
	this.shape_1.setTransform(-27.3,53.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74.3,16.5,93.9,74.9);


(lib.shape32 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF18").s().p("AhCCcQgUgOgMAAIABgHIAFAAIAlgGQAbgHAFgHIAAgTIgygIQgmgIAAgZQAAgaBNgdQBAgZAWgBIACAFQgqAKgaARIgKAHQgbAUAAAWQAAAPAJACIAVAAQA0AAAwgoQArgjAAghQAAgLgLgCIgVAAIgiADIBQg0QAwgcAkAAQALgBAFAVQADAMAAAMQAAATg8AyQhJA5gKAPQgVAbhwBUQgKAAgTgOgAjuhhQAAgiA3geIAQgIIAdALIAgAIQgFALgKAHIgLADQgSAFgaAOQgtAZgOACQgDgDAAgLg");
	this.shape.setTransform(-29.4,78.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E18403").s().p("AnVEwQAAgKAGgSIAFgTIAIAAQAIAEARAWQANAQAMAAQAJAAAxgxIA1g1IASAAQAAAQAGAiQAJAsALAAQAKAAASgMQAWgOAJgRQABATAIAqIAOA2QgHAJgKACIgdAAIhPgGQgVAAgiAMQgjAMgUAAQhHAAAAhYgAFTDxQgFgFgBgOQgBgKgIgFQgIgFgBgIIAagDQAaAAAIAPIAGgEIAJAAIAAAaQgEAHgOAHIgQAGQgNAAgEgHgAhdCeIAFgRIADgPQAAgNgXgJQgQgGgMAAIgHABQAKgHAFgLIgggIIgdgLQAlgSAeAAQAYAAATARQAUATAAAYQAAAWgNAUIgdAtQAAgKAIgXgACMAdQBLhRAAhEQAAhmghg7Qgeg1hBghIAEgJQBmAEAtAtQAuAuAABnQAADJjbBQQApgkAigmgAgdgYQgGgVgVgSIgjgaIgfgdQAHgMAQgEIAUgBQAXAAAdARQAhAVAAAbQAAARgGAWQgHAbgMAEIADAEQgHgGgGgWgAGpgdQgKgEAAgOQAAgZAcACQAbADAAAUIgCAMQgGAJgVAAgAGVjVQgBgGABgFQACgJANAAQAVAAgJAWQgHAUgPAEgAGTkbQgMgRgVgCIAEgOIApgGIAgACQAKAEAGAYQgPAZgTAAQgMAAgOgQgAiglQIAAgFIAcgNIAbgMIAAABQALAAAKAGQgDANgNAFIgZAFgAgblmIgLgBIAAgRQAEgBANgHQALgHAJAAIAGACIAFABIgCAKQgBALgCAEQgFAHgPAAg");
	this.shape_1.setTransform(-27.2,54.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74.3,15.6,94.1,79.6);


(lib.shape31 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF18").s().p("Ag4EmQgPgKAAgIQAAgOANgRQATgYAEgIQgFAIgNAGQgMAGgHAAIgIgDQgGgDAAgHIAEgLQAFgIAAgFQAAgLgXgHQgYgIAAgPIADgPIAEgKIAFgEQAqgqAYgmQArhAAAhEQAAhLgWgwIgHgMIAAgVIAAgZIAJgTQAKgQAJAAIAQAEIASANQBfBIAABMQAABQg9BPQgwA/hMA5IAAAWIA3AAIAdgDQgNASgRAqQgSApgOASIAAATIAJADIgFABQgKAAgMgJg");
	this.shape.setTransform(-16.5,49.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E78A0E").s().p("AktDQQBaiMBPAAQAYAAAKAIQAOALAAAcQAAAqgLAZQgSAogLAwIBCgmQAagNAUgQQAQgPgBgmQgCgmAOgNIANgMIgFAKIgCAQQgBAOAYAIQAXAHAAALQAAAFgFAIIgEALQAAAHAGADIAJADQAGAAAMgFQANgHAGgIQgFAIgTAZQgNAQAAAOQAAAIAPAKQARAMAKgEIASAAQgFASgZAMQgqATgMAIQgYAchbAwQAXgOAegxQAZgtAAgNIAAgJIgEADQgkAXg8AtQgoAgg+AUIgfAAIATgxQAPgkAAgUIgDgeQgFgcgLAAQg5AAgWBSIgMA4QgGAagHgBIgQgCIgQgDQgMAAgMAGIgeALQAghbA/higAi5CVQgIAJAAARQAAAMAGAEIATADQASgBAMgMQAOgNAAgVIgCgQIgeAAQgVAGgIAMgAEBEJQgRgbgjABIAAgXIAcgMIAXgFQAfABAJAHQAMAKAAAcQAAA4glAQQgCgggMgUgAD6B8IAAgUQAHgFAIAAQAJAIACAPIgIACgAEtBOIgKgCIAAgGQAEgJAPgFIAPAFQABAUgNAAgAFigHQAAgLAFgIQAFgFAGgCIACAHIAOALQALAKAAAFIgDAJQgDAJgKAAQgcAAABgZgAivgfQgXgJAAgWQAAgYAggJIAzAAIAIAcQABAJgGAIQgIAJgBAHIgNAEIgMAEgAExiWQgFgGAAgJQgBgIAMgOQAMgNAIgEIgGgKQgDgDAAgHIABgIQACgGAJgDIAAgaQgQAFgUgRQgWgTgOAAIAAgDIAoAAQAyAEAMAwIAHApIAEAVQgQAggGAHQgJAHgVAAQgKAAgIgJgAkgj0QA0hDBJgpQBPgtBSAAQBGAABLAvIgDAGQgJgBgKARIgJASIAAAZIgOAAQgug5hkAAQgrAAhCAaQhJAdg4Atg");
	this.shape_1.setTransform(-31.1,54.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.8,14.4,79.5,79.6);


(lib.shape30 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFBAA").s().p("AhLCFQgMgaAAgUQAAgnCvjOIgyBbQg1BkAAAMQAAANAGAOQAGANAAANQAAAGgGAYIgFAWIgBAFQgIAFgGABIgUABQgNAAgNgdgAhRhvQgGgKAAgRIADgOQAFgJAIAAIAIABIADAAQADADgCAPIAEAIQAGALAAAEIAAAKQgCAJgLAAQgMAAgHgLg");
	this.shape.setTransform(-24.5,49);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5A90A").s().p("Ah9CcIgOgBIgIgRIgFgYQAAgLADgJIACgDQAIgSAVgKQAjgRAAgJIgDggQABgcAQAAQARAAAAAXQAAALgKAEQgKAEAAATIAAAAQAAAcAOAKQAMAIAgAAIADAAIABAAQAXgCBOgZIAWgIQgCAGgLAKIgBABIgEADQgPANgKAFQgZAKgcAEIgZgBIAAgBIAAgBIgDAAIgEAAIgngBQgRgDgMgNIgDADIgaAAIgTAOIgBAVIACAQQAEAKAJALgABohlIAAgRQAFgFADgOIADgQQgCAMAMAKQAMAJAQgBIgaAWgAB0ibIgBACIABgCg");
	this.shape_1.setTransform(-49.8,76.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFDF18").s().p("Ai9FjIgCgQIACgVIATgPIAZAAIAEgCQALANASADIAnABIAEAAIACAAIAAABIABABIAbABQAcgEAWgLQAKgEAQgNIAEgDIABgBQALgLABgFIgVAHQhMAagaABIAAAAIgEAAQgfABgMgJQgPgKAAgbIAAAAQAAgTALgEQAKgEAAgOQAAgWgRAAQgRAAAAAeIACAgQAAAJgiARQgWAJgIATIgBADQgEAJAAALIAFAXIAJASIgwgJQgpgLAAgSQAAgfBChhQBDhiAYAAQAZAAAHAWQAEAMACAmQACAjAHAOQAMAXAfAAQAWAAAWgOQAdgRAAgZQAAgTgSgRQgRgRgXADIAAgEQAjgDADgnQgEgvAEgUQADgPAdgqQAZgnAAgZQAAhMgagvQghg8hFAAQhAAAgmAXQgrAZAAAxIADAcIACAhIgdgnQgCgGAAgnQAAgzA0g9QA8hFBLAAQARAABBAQQBCAQAKAGQARAJAIAJQANANAAAXQAAAKAIAWQAJAaAIAAQAWAAARgPQAQgOANAAQAnAAAAAfIgFAJQiwDPAAAmQAAAUALAaQANAcANABIAUgBQAGgBAJgGIAZARIAGAGQgzAHgRANQgPAMgEAZIgCAVIACAIIABAHQAGgYAIgJQAHgGAPAAQAJAAAHALQAFALAAAKQAAAYgNAMQgNAMgVAAQgHAAgLgNIgMgQIgKASQgHARAAAJIAEAaQAFAOAAAMQAAAWgNALIgOALIgZgHIgugMQgXAAhAAOIhVAPQgKgLgEgKgAA1BRQgDAOgFAEIAAASIAXAAIAbgWQgRABgMgJQgLgKACgMIAAgCIAAACgABtjQIgDAOQAAARAGAJQAGAMAMAAQALAAACgJIAAgKQAAgFgGgKIgDgJQACgOgEgDIgDgBIgHAAQgJAAgEAJg");
	this.shape_2.setTransform(-43.9,54.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E18403").s().p("AisELIAOgLQANgLAAgWQgBgMgEgOIgEgaQgBgJAIgRIAKgSIAMAQQAKANAIAAQAUAAAOgMQANgMAAgYQAAgKgFgLQgHgLgJAAQgPAAgHAGQgIAJgGAYIgBgHIgCgIIACgVQAEgZAPgMQAQgNA0gHIACABQASAPADAOQAIAegGAXQABAHAnABIAjgCQAMgDAdgVQAAAfgxAVQg5ATgOAJQgIAEgfAnQgXAcgiAOIADAHQgPAPgYAAgABRAxIgCgDQAAgOAHgKQAHgOAOAEIAAADIgEAUQgEAOgMABgACdgNQAAgkgbgSQgcgTAAgiIADgYQAFgOAQAAQAJAAATAoQATArAAAeQAAARgEASgABBjVQgYgOABgSQAAgOAIgIQAHgFAMAAQAbAAAAAtIgDAoQgCgJgagRg");
	this.shape_3.setTransform(-19.7,64.6);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.6,17.1,70.4,75.2);


(lib.shape29 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFBAA").s().p("AhbFIQgGgOAAgTQAAgSADgGQAMAAAQAPIAXgIIAigDQAJgBAOgQQAQgTAJgaIAIAMQABAFAAAPQAAAVgGAYQgFAWgHALIgFAAIhGAIgAAMkBIgYg1IgCgFQAAgNAIgCIALAAQANAAAlASIArAXQgZABgPAPQgOAOAAARQAAAPAGAdIAAADQgIgHgeg3g");
	this.shape.setTransform(-42.6,60.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDF18").s().p("Ai2FgIAAgEQgCgsgUgXQgVgZAAgHQAAgNAKAAQAMAAAjAYQAjAZALAAQAkAABJg1IAggaIAhgaIBHg1IANAEIAOAEQAKAAALgMQALgNAOAAIALAAQAHABADACIAEAAQAFAFAAAKQAAARgeAHIhCAKQgwAIgYASQgYATAAAeIAGAxQAAAZgSAlIgHABIgBABIgCAAIgBAAIgXAFQAHgMAFgVQAEgZAAgUQAAgQgCgEIgFgNQgJAbgQASQgPARgLAAIghADIgXAJQgQgPgMAAQgDAGAAASQAAATAGANgABvBRQgLgCAAgLIADgKIADgMQgPgDgRgSQgSgVAAgQIAGgZIAHgYQAHANAfAeIAeAaQAAAHgFAGQgHAGAAAGIAhAHQAVAGABAMQgGAKgSAHIgdAGgAgli6IgghYIAAAAIgKgeIgaAAIgHAHIgCAKQABAIAFASIAAAOQgIgEgKgUQgLgTABgIQgBgMAPgXQARgZAQAAQAFAAB5A8QAvAWAdAYQAVASALATIABADIgBAAIgegHIgjgEQgUAAgUARQgXASgBAaIAAABQAAARAMAvQgigUgfhFgAg7kcIADAGIAaA1QAdA3AHAHIAAgDQgGgdAAgPQAAgRAOgOQAOgPAZgBIgrgXQgigSgNAAIgNAAQgJACAAAMg");
	this.shape_1.setTransform(-38.1,57.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E18403").s().p("Ak8FsIAAhIQADgdAjgbQAggZAWAAQAIAAAjAPQAjAPAJAAQAcAAAlgPQAxgUAAgeQAAgJgGgHQgHgJgOAAQgJAAgaAJIghAJQgfAAgagMQgigQAAgdIAFgjQAGgdAAgNIgBgWQgDgLgNgPIADAAIAoARQAaAPAIAVQAFANAEAoQAFAgAUAAQANAAATgIQAUgKAAgKQAAgSgLgYIgOghQgEgQgXgGQgVgHgCgUQgDgngqgvQgogrgXAAIgGAAIgDACQAGAYADAcIAHA5IgVgeIgYgkQgogzAAgWQAAheBRg2QBIgxBuAAQBuAAAuAyQAdAhA1BoQALASAIAwQAJAwALASIAzAtQAnAfAAAZQAAAcgTAXIgTAVIAFARQAEARAAAKQAAA4gPAUQgRAWg/AWQguAQgnAbIhGAxIABAFIgnAIQASglAAgYIgGgxQAAgeAYgTQAYgTAwgHIBCgKQAegHAAgRQAAgKgFgGIgDAAQgEgCgHAAIgLgBQgOAAgKANQgLANgLAAIgOgEIgNgEIhHA1IgfAaIgiAaQhJA0gkAAQgLAAgjgYQgjgZgLAAQgLAAAAANQAAAHAWAaQATAWACAsIgQACgAApgEIgGAXQAAASASAUQAQATAPADIgDALIgDALQAAALALABIAQAAIAdgFQATgHAFgKQAAgNgWgFIgggIQAAgFAGgGQAGgGAAgIIgegcQgggcgHgMgABoh1QgRAOAAAXQAAAlA+ApIBUAsQABgRgLgeQgKgdgMgUQgRglgJgOQgPgYgWAAQgUAAgOAMgAAGhBQgJguAAgRIAAgBQAAgaAVgTQAUgRAUAAIAjAFIAeAGIACAAIgCgCQgLgUgVgSQgdgYgvgWQh5g8gFAAQgQAAgQAaQgPAWAAAMQAAAIAKATQAKAVAJAEIAAgOQgGgSAAgIIABgKIAHgIIAaAAIALAeIAAABIAfBXQAfBFAiAUIAAAAg");
	this.shape_2.setTransform(-36,54.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.7,16.2,63.5,77.8);


(lib.shape28 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFBAA").s().p("AheEjIgCACIgTgCIAsgXIASgJIAAAAIAHgEIAAAAQAggQAIAAQAFAAABADIAEAFIAAAMQAAANgKAPIgFAFIhTACgAAZDyIgFgEIgBgEIATgYQAMgQAAgLIgDgVIgBgDIgCgNIgCgQQAAgRAcgBQANAAARAaQAQAZAAARQAAAXgZAZQgYAWgRABQgNAAgMgJgAgwjDQgrglAAgRQAAgNAogQQAkgPAPAAQANAAAkAOIAYAJQgjABgaAgQgcAnARArIAAAFg");
	this.shape.setTransform(-40.1,62);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDF18").s().p("AgZE1QAMgPAAgNIAAgMIgEgFQgDgDgFAAQgIAAggAQIAAAAIgHAEIAAAAIgSAJIgsAXQgWgBgugBIAAAAQBFgVA1gYIAIgDQArgVAWgTQAVgTAAgSIgDgOIgHgaQgHgcACgGQA8gKAlAfQAhAdAAAxQAAAVgMAXIgMAZIgwAfIg7ACIgcABgAAXCYIACAQIACANIABADIADAVQAAALgMAQIgTAYIABAEIAFAEQAMAJANAAQARgBAYgWQAZgZAAgXQAAgRgQgZQgRgagNAAQgcABAAARgACNBDQgmggAAgNIADgWQAEgHAOAAQAQAAAaAYQAdAdAAAXIgBANQgBAHgHAIIgIAIQgLgOgagYgAgBhPQgegjgZgSQglgbgrAAQgqAAgMAbQgHANgFA/QgFgDgLgfQgKgeAMg2QAMg4BNgqQBMgqBLAAQAXAAAZAMIAwAUQAYAIAQAbIARAfIAEALIAAAuQgLgQgRgNQgRgMgHADQgDgFgegHQgcgHgSAAQgdAAgJAgQgGASAAApIABAmIAPAwQgOgbgJgNgAhGkAQgoAQAAANQAAARArAlIAzAtIAAgFQgTgrAegnQAYggAjgBIgYgJQgigOgOAAQgQAAgkAPgACjhWQAAgOAfgHQAZgFAEATIABAIIAAAMQgDAGgPAAQgrAAAAgTg");
	this.shape_1.setTransform(-38.2,59.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E18403").s().p("AlCFLQAPgSCBguQB2gqAAgcQAAgSgagQQgngXgMgNIAAgOIAngGQgCgahEhDQhDg/AAgkQAAhvA6g+QBEhLCSAAQBIAAAXAJQAfANAiAyQAFAIADAeQACANAFAJIANAOQAHAFAHAdQAGAcAAARIgDAkQAaAFAZAYQAeAcAAAfQAAA9gKAiQgPAxgpAkIhUBFIgyAkIAMgZQAMgXAAgVQAAgxghgdQgkgfg/AKQgCAGAJAcIAIAaIACAOQAAASgXATQgUATgrAVIgIADQg1AYhEAVIgCAAIgPABIh6ABgAB8AVIgCAWQAAANAlAgQAaAYAMAOIAIgIQAHgIABgHIAAgNQAAgXgcgdQgbgagPAAQgOAAgFAJgAiEgbQAAAcAqA2QAgAoAaAHIAAgEQAQgBAKghQAGgYAAgZQAAgSglgfQgjgdgRAAQgrAAAAAkgADFAAQAAATAqAfIA0AeQgJgugIgUQgPgfglgBQgZABAAARgAAogSIgPgwIgBgmQAAgpAGgSQAKggAcAAQASAAAdAHQAdAHADAFQAHgDASAMQAQANAMAQIAAguIgFgLIgQgfQgRgbgXgIIgxgUQgYgMgXAAQhMAAhMAqQhMAqgMA4QgNA2ALAeQAKAfAFADQAGg/AGgNQANgbApAAQArAAAmAbQAZASAcAjQALANANAbgADUhWQgeAHAAAOQAAATArAAQAPAAACgGIAAgMIAAgIQgDgPgQAAIgLABg");
	this.shape_2.setTransform(-40,57.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.3,24.3,64.6,67.2);


(lib.shape27 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF18").s().p("AkJEIIgFAAQgHgJAAgFIAKgWQAKgVgBgEQACAJAKALQALAMAIAAQAhAAARgdQALgSAGgkQgaADgWgRQgWgSgCgXQAJgEANgDIATgEQAUAAAcAXQAfAZAyAGIAAgDQgagNAAglQAAgGAGgMQAFgLgCgGIAOAAQASADAKATQAMAVAAAjQAAAWgNAoQgNAlgQAMIgYAEIAGACIABAAIglAGIiAALgAACB3QAAgJAMgMIANgLIAIAEIAMAGQAHADAAADQAAAKgJAIQgJAIgRAAQgRgFAAgFgAB+BEIgSgKQgJgFAAgMQAAgRAJgMQAKgNAQAAIAMABQAJAEgBAHQAAAOgGAUQgJAXgMAAIgBAAgAjIgHQgagQAAgVQAAgSAMgNQANgPAVAAQAIAAARAPQARAQAKASQAcAug2AAQgWAAgYgMgAAFg7IgxgtQgjgeAAgmQAAgkA6gdQAwgaAxAAQAUAAAVAYIAXAYIgGAFIgkgDQhdAAAABdQAAAVALAcIACAGIAPAmgAC6ieIAAgVQAAgUAGgJQAIgLAUAAQAbAAAOALQAMAJAFAUQgNgEgEAIQgGAKgFAAIgMgDIgOgDQgQAAgDAIIgIAeg");
	this.shape.setTransform(-29.5,66.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E18403").s().p("AkoFgIhSgDQAPgdAvgWQAkgQAAgmQAAgoAQgmQAUgwAkgSIgGgSQgGgPAAgIQAAghAOgjQAVgyAiAGQgOgiAggjQAbgeAkgKQAPgEADgXQAEgdAGgHQATgVASgFIAhACIAAgRQgHgNgSgLQgSgNgQAAQgXAAgTANQgMAIgGALQgIALgCAOIgEAAIAAglQANglAHgLQAPgXAeAAQAmAAAYAXIAgAoIAAAfIAQgEQAIgFAJAAQALAAAgAKQAgAKAPAAIAyACQAeAGAKAYQARAnAvAoQAiAcAAA+QgBASgJAIQgLAJAAAPQALABAMANQALANAAAMQABAZgUAQQgOANgeALIgMAoIgHAVQgFALgFAFQgUAVg2APQg6APgugIQAOAmg4AiQgiAVg7ANQARgMAKgkQAOgoAAgWQAAgjgMgVQgJgUgSgDIgNAAQACAGgGALQgFAMAAAHQAAAkAaAOIAAADQgygHgfgZQgcgWgVAAIgTADQgNADgIAFQACAXAVARQAWASAbgDQgHAkgKASQgRAdgiAAQgIAAgLgMQgKgMgBgIQAAAEgJAVIgKAVQgBAGAIAIgAA2C9QgMAMAAAKQABAFARAEQAQAAAKgIQAJgHAAgLQAAgCgIgEIgLgFIgIgEgACVBnQgJANAAARQAAALAJAFIASALQAMABAJgZQAHgTAAgOQAAgHgJgFIgLgDQgRAAgJAPgAitAOQgNANAAASQAAAVAaAQQAYAPAWAAQA3AAgdgxQgJgSgSgQQgQgOgIAAQgVAAgNAOgAARiRQg4AdABAjQAAAmAjAfIAwAqIAdAgIgPgmIgCgFQgMgbAAgVQAAhdBeAAIAkADIAFgEIgWgZQgVgXgVAAQgwAAgzAagADoh1QgFAJgBAUIABAWIALAYIAIgeQADgHAQAAIANADIANADQAEAAAHgLQAEgIANAEQgFgTgMgJQgOgMgcAAQgUAAgIALg");
	this.shape_1.setTransform(-33.5,57.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.4,21.7,75.8,71.1);


(lib.shape26 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFBAA").s().p("AhgA2IgHABQAHgTASgVIAognQAZgXANgEIAzgFIAVACIAdABIABABIACACQg8ATgYAUQgdAXgFAtg");
	this.shape.setTransform(-47.7,85.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDF18").s().p("AjXDvQAEgsAggaQAXgTA8gUIgCgBIAAgCIgdgBIgWgBIg1AEQgMAEgaAXIgoAqQgRAVgIASIghADIAEgJQARguARgOQAngjAygWQAWgLAigBIA1gBQA3gEAAhAQAAgHgOgfQgPggAAgPIADADIAnAlQARAOAHAQIAKAfQAHAMATAAQAUAAAPgHQATgLALgcIAAAYQABARgQARQgKALgaASQgVAPgagDQgLgCgDAMQgEARgFAEIhCA2IgzAugAAWC8QANgTAUgVQAYgXAMAAIAZAAIAEgBIAPgCQAJAggrAPQg5AMgZAKgAAphnQgPgWAAghQgBgYAUgNQAMgJApgOIANAAQgfAsAABDIAAAmQgcgUgLgOgAEdjTQgRgMghAAIghABQgXACgSAIIgHAAQAXgRAlgIIA/gHQAjAAAMAJQAPAKAAAaIAAATQgDAKgJAEQggglgKgIg");
	this.shape_1.setTransform(-27.5,67.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E78A0E").s().p("AhfErIgtgEIAzguIBCg2QAFgEAEgRQADgMALABQAaADAVgOQAagSAKgLQAQgRgBgRIAAgYQgLAcgTAKQgPAIgUAAQgTAAgHgMIgKgfQgHgQgRgQIgngkIgDgCQAAANAPAgQAOAhAAAGQAABBg3AEIg1ABQgiABgWAKQgyAXgnAiQgRAOgRAvIgEAJIhtAIQAKgJA5gnQAigXAJggQAIgcAtgfQAsgfAiABIAyAFQARAAARgWQARgYAAgZQAAgRgOgeQgSglgTAAQgaAAgXAOQgaARAAAaQABAIAFARQAGARgBANIgDAAQgHgNgUgSQgHgIAAgdQAAguAdgeQAcgcAogBQAWABApAQQArATABAQQALhXAegqIASgYQAIgKAAgLQAAgsg5AAQgUAAgoAMQg1APgFAVIAAgCQAAgsAYgUQAXgUAtAAQAwAAAmAnIAZAbQAMAMAGgBQAJABAvgUQAwgUA9AAQBMAABAAwQBEA1AABJQABBLgsAvQgtAzhIAAQgkAAgWgNQgcgSAAgmIABgZQADgNANgUIAAADQgDAZARAOQAQALAcAAQAeAAAAgiQAAgfgWgQQgUgPgiAAQgYAAgRAPQgSAQAAAeQAAASAXBjQAAAkgIAOQgMASglgEIAAAEQAXAAAKAFQAKAHAQgBIAcgBQAGgDAKgQIAAAfQgcAxhHAaQh6AsgbAQgAA+DGQgUAVgNASIgDAEQAZgLA5gMQArgOgJggIgPACIgEAAIgZAAQgMABgYAXgAA0iRQgUANABAYQAAAhAPAWQALAOAcAUIAAgnQAAhCAfgsIgNAAQgpAOgMAJgAEkihQAKAHAgAmQAJgFADgJIAAgUQAAgagPgJQgMgJgjAAIg/AHQglAHgXASIAHAAQASgJAXgBIAhgCQAhAAARANg");
	this.shape_2.setTransform(-28.2,62.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.3,31.5,88.2,62);


(lib.shape25 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFBAA").s().p("AgMASQgMgDAAgNQAAgHAHgGQAKgIASACQAWAKgNARQgKAIgKAAg");
	this.shape.setTransform(-50,87.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDF18").s().p("AmbDhIAAgSQAqhDAYgdQAogvBBgBQA7AAAigQQgKAVgiAZIgzAiIgDAAQBRAEBBg1QA+hBAcgTIAAASQgHAVgfAxQgbAtgHAgQAbgHAqgcQAigYAIgKQgIAQgSAVIghAkQgYAdgHAbIgSgDIg8gGIiJAJIhyAJgAjOCoQgGAGAAAJQAAANALACIANAAQAMABAKgJQAMgSgVgKIgIAAQgPAAgIAGgABMBRQAAgRAYgKIAMgFIAAAEIAJgIIALgIIAHgGQAQgNABgQIgFgMIgEgTQAKAIAVAJQASAKAAAOQAAAbgjAXQghAWglAAgACThcIgEgiIgEgcQAAgjAwgVQApgRA0AAQA8AAAeAfQAPAQAbA7IAAACQAAgFgDADQgNgNg/geQg7gdgGAAQgcAAgvApQguAoADAUgAhEiFQghgXgcgDIAAgCIASgGIAUgFQASAAAVAOQAYAPgBARQAAALAHAUg");
	this.shape_1.setTransform(-31.1,69.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E18403").s().p("AkBECQAHgbAYgdIAjgkQATgVAHgQQgIAKgjAYQgqAcgbAHQAGggAcgtQAegxAHgVIAAgUQgcAVg+BBQhBA1hQgEIADAAIAygiQAigZAKgVIABgBQAxgXAAg9QAAgfgOgXQgTgdgmAAIgeAGQgXAIAAAKQAAATAHAVIABACQgQgZAAgZQAAglAighQAkgjArAAQA2AAAiAgQAqAnAABRQAAAWgEAVQgEARgDAFIADAAIAfgnQAWgbAEgcQAUhpAAgLQAAgPgWgMQgXgLggAAIgjAGIgcAFQgBgqA3gBQAoAAAZANQAWALAaAeQAdgYArgSQArgRAlAAQApAAAoARQAnARAVAZQANAQATANIAeASQAeAVAAAtQAABAgsAlQgsAnhSAMIgrAAIAAgCQAUgLArgOQAjgPAAgfQAAgggUgQQgTgPgoABIgvAFQguAKAAAQIAPAXQAOAXAAAZQAAA6hYA4Ii9BfgAgrAbIAEAOQAAAQgRANIgHAGIgLAIIgIAEIgNAFQgXAKgBARIAPADQAlAAAigWQAhgXAAgbQAAgQgQgKQgWgJgKgIgAgtg1QgCgUAtgoQAtgpAcAAQAGAAA7AdQA/AeANANQADgDAAAFIAAgCQgbg7gPgQQgegfg8AAQgzAAgnARQgxAVAAAjIAEAcIAEAiIADAAIAAAAgAk0iAIgSAGIAAACQAcADAhAXIAuAmQgGgUAAgLQAAgRgYgPQgVgOgRAAgAGci4IgLgXQgWgghFAAIAAgEQAlgRAdAAQAlAAARAUQAOARgDAfQgFAGgCAGQgBAHgMgBQgFAAgEgKg");
	this.shape_2.setTransform(-11.4,65.3);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.3,39.2,105.2,52.9);


(lib.shape24 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E18403").s().p("AjkCrQgDgoAaghQAKgNAvgrQAIgGBmgjQBtgjAeAAQASAAAYAIQAhAJAQARIgDgwIgEgWIAEABQAKAFAGALIANAWIAaApQAUAlAAANQAAAqgJASQgMAagkARQgNhSgOgTQgIgNgxgOQgsgOgPAAQgdAAgbAQIguAiQgMAGgWAjQgZAogNANIguAsQgWAUgTAFIg0AOIgOADQAlgjgCgtgADVi7Qg+gbgOgSQAFgNAPgDIAZgCIAgACIAbAZQAJAJAFAWQAGAbADAFQgOgLglgQg");
	this.shape.setTransform(-13.2,67.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBFD9B").s().p("AiuBtIgVhCQAAgNAXgIQASgGASAAQATAAACAdQABAQAAAeIADABIAHABQAIAAAJgRQAIgRAJAAQAFAAAFAIIgIAHIgJALIAGAWQAFAOAAAKQAAATgRANQgQALgYAAQgaAAgZhBgAimhGQAAgMAIgJQAJgJALAAQAJAAAMAGIAAAaIgJAPQgEAFgNAAQgXAAAAgWgABBhYQgJgEAAgJQAAgIADgEIAUgSIAUAMQgEAIgDATQgBAHgOAAgACOh8IgUgEQAAgcAMgLQAGgFALgBQAJABARAIQATAKAAAKQAAAIgIAIQgJAJgMAAg");
	this.shape_1.setTransform(-32.6,74);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFDF18").s().p("AkpDgIgwgMIgrgMQgJgHAAgiQAAg1A8gjQBBgbAKgHQAagQAfhJQAehIAAgjQAAgPgIgXQgGgUgGgLIACAAQAtAKAiAbIAwApQAMgOAGgYQADgMAWAAQALAAAiAWIAjAWIAlgWQAlgWAwAAQBHAAAtAVQAtAVARAnQAFAMAOAFIAOAFIAEAVIAEAxQgRgSghgJQgXgIgSAAQgfAAhvAmQhmAggHAGQgwAsgIAMQgZAhACAoQADAtgmAjIhBADQgrAAghACIg7ABgAihA8QgXAIAAANIAVBCQAaBBAZAAQAYAAAQgLQASgNgBgTQABgKgGgOIgGgWIAJgLIAIgHQgFgIgEAAQgKAAgIARQgJARgIAAIgHgBIgDgBQAAgeAAgQQgDgdgSAAQgTAAgSAGgAiTg1QgIAJAAAMQAAAWAXAAQANAAAFgFIAIgPIAAgaQgMgGgJAAQgLAAgJAJgABGhLQgDAEAAAIQAAAJAJAEIAMADQAOAAABgHQADgTAEgIIgUgMgACRiBQgMALAAAcIAUAEIAZAFQAMAAAJgJQAJgIAAgIQgBgKgTgKQgQgIgKgBQgLABgGAFg");
	this.shape_2.setTransform(-33.7,70.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-73.5,42.3,86.8,50.9);


(lib.shape23 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF18").s().p("AktCOQAAgTANgOQAMgOAAgNQAAgWgUgKQgUgLAAgKQAAgyB7gyIAAACIgcARQgRAKAAAPQAAAbARAkQATArAVAAQAmAAARgRQALgLAGgcQAGgfAFgLQAMgXAcgJIAsgOQAbgLAOgPIAZgjQARgUAYAAIAYABIAZAPQgUAHgQAPIgnAfIhPApQgQAIgTAdQgTAfACASQAEAoghAsIgDAFIgtgDIhVgDQgVAAg0AOgACqh6IAAgJQACgGAJAAQAPAAAjAWQAiAVAMAAIAngLQAEAKgSAMQgRAMgUAAQhfgeAAgVg");
	this.shape.setTransform(-30.2,79.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E18403").s().p("AmODsQgRgPAAgYQAAgoATg+QAZhTAngJQA/gMAfgoQAfgngHg6QAqAHAAA8QAAAdAEAKQAHARAYAAQAoAAA7g1QA5g2AuAAQAZAAAUAMIAkAaQAyAlBIAAQAnAAAugSQAsgSAQgYIADAxQAAA0gaAdQggAohGAAQgsAAgbgKQgbgKgiAAQhHAAgkAfQgZAVgPAvQgRA5gHALQgUAfgrAAIgfgDIADgFQAhgsgEgoQgCgSATgfQATgfAQgIIBPgpIAngdQAQgPAUgHIgZgPIgYgBQgYAAgRAUIgZAjQgOANgbALIgsAOQgcAJgMAXQgFALgGAhQgGAcgLALQgRARgmAAQgVAAgTgrQgRgmAAgbQAAgPARgKIAcgRIAAgCQh7AyAAA0QAAAKAUALQAUAKAAAWQAAANgMAOQgNAOAAATIACAFIgBAAIgxANQgUAAgQgPgACdgoIAAAJQAAAVBfAcQAUAAARgMQASgKgEgKIgnALQgMAAgigVQgjgWgPAAQgJAAgCAGgADji4QgXgMgkgIIgygPQgfgIgZAAQgsAAgXAaQgZAZgEAAQgHAAgBgIIAAgNQAAgaBRgPQA9gMAzAAQAzAAAXAJQAhAMAIAZQAPARAAAXQAAAPgDAFQgDAAgDADQgSgbgbgQg");
	this.shape_1.setTransform(-28.9,70.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.5,45,83.3,50.3);


(lib.shape22 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E18403").s().p("AmdDrQhlgOAAgcQAAhRA/hGQBAhHBkgYIAAACQgUAXgEANIgCAkIADAhQAFAOAWAAQAVAAAWgVIAqgtQA9hABQAAQAiAAAuAXQAvAXAkAAQAWAAAZgPQAggSAAgaQAAgZgNgUIgRgbQAWAJAZAZQAjAmAAAkQAAAqg/AxQhAAwg3AAQgOAAgWgRQgUgRgcAAQgSAAgWALQgUALAAAJQAAAJAGALQAFAMAAAGQAABBhTAaIgnAKIADgDQAOgQAIgfQADgLgBghQAAgfAHgRQAHgPASgRQAQgPATgLQANgHAhACIArADIAAgRQgJgMgOgDQgyAEgpAPQg0ATgVAiQgKARg2A0Qg+A6gUAAQgIAAgDgGIgDgLIAIgZQAJgUAAgJQAAgIgJgFIgKgDQgNAAgJAMQgIALAAAQIAEAZIAEAVQAAAbgCAHIgDAEgAndC3IASAAQAIgLAAgKQAAgKgGgCIgUgCgAl7AfIAAAOIAGABIAKACQAKAAAIgGQAHgFgBgGQgEgFgIgEIgHgDIgMAAgAAJAFQgIAEAAAPQAAAVBVAAQAiAAAhgTQAdgRARgWIg9AUIgjABIhEgGgAjOiXQgPgIAAgWQAAgaArgPQAngPA2AAQBEAAA3AMQA0AKAaAQQgzAAhpAbQhrAbgWAAQgaAAgLgGgAHBi3QAAgLAIgIQAKgJAPAAQANAAgDgDQAKgCAGAEQAHAFAAALQAAAeglAAQgdABAAgSg");
	this.shape.setTransform(-17.6,68.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDF18").s().p("Aj+B7IADgFQADgHAAgbIgFgVIgDgZQgBgQAJgLQAIgLANAAIAKACQAJAFAAAIQAAAJgJAUIgIAaIADAKQADAGAIAAQAVAAA9g6QA2gyAKgRQAVghAygUQApgPAygEQAOADAJAMIAAARIgrgDQghgBgNAHQgTAKgOAPQgSARgHAQQgHAQABAdQAAAhgDALQgIAfgOAQIgCADIhlAIgAlRBEIAAgiIATABQAHACAAAKQgBAKgHALgAjqhCIgGgCIAAgNIAJgMIAMAAIAIADQAHADAEAGQABAFgHAFQgIAGgKAAgACMhZQAAgOAIgFIAbgDIBDAGIAjgBIA9gWQgRAYgdARQghATgiAAQhUAAgBgVg");
	this.shape_1.setTransform(-31.5,80.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69.1,45,103.1,48.2);


(lib.shape21 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF18").s().p("ABHBDQgMgEAAgIQAAgIAPgXQAOgYAAgJQAAgQgHgFIgZgNQABAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIAVgDIAYgDIAhAEIAdALQABApgRAdQgWAlgrAAgAiUAsQgRgSAAgdIABgeQAEgSARgGIAHAiQAHARATAAQAZAAArgbQAwggAQgEIAdAAIgoAgQgeAYgCANQgEASgYAWQgaAYgYAAQgfAAgSgUg");
	this.shape.setTransform(-47.9,81);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E78A0E").s().p("AiFETQgmgNggAAIhfAIIhLAHQhNAAAAhJQAAg0BDhtQAwhLAdgiIADAAIgSA7QgIAaAAATQAAAfAJATQALAXAXAAQAbAAAvgjQA1goAUgGQAEAiAXAMQARAIAoAAIAWAAIAfgLIANAAIAAAxQgKAOgDAeIgDATIgDARIgCAJQgKAigNASQgUAZgjAAgAhxB0IgVADQAAABAAAAQAAABgBAAQAAAAAAABQgBAAgBAAIAZAMQAHAGAAAQQAAALgOAYQgPAXAAAIQAAAIAMAEIAOADQArAAAWglQARgdgBgrIgdgLIghgEgAlnCEIgBAeQAAAeARATQASAUAfAAQAYAAAagYQAYgWAEgUQACgNAggYIAoggIgdAAQgQAEgyAgQgrAbgZAAQgTAAgHgSIgHghQgRAGgEASgABbh6QAAhlhuAAQgzAAgrATQgyAWgZApQAphVAkgbQAsgiBcAAQA7AAAZArQATAjAABEQAAArgIANIg5A/QAcgqAAg6gAE2hNIAAgaIAIgIIALgBIgBAJIABAKIgCAQgAFyhxQAAgKAJgLQAJgMAJAAIAbADQgEAKASACQANACAAAOQAAAQgJAIQgKAIgWAAQgoAAAAgeg");
	this.shape_1.setTransform(-28.4,64.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-73.5,35.4,90.3,57.8);


(lib.shape20 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF18").s().p("AitDUIAAgmQADgsAwAAIABAEIABAIIgCAQIgDAQIAfAcIAJAJIAAAAQgjAAgoAbIgQAKQAEgMgBgYgAANBzQgIgSAAgUIAIgZIgCAAQgGANgXAMQgYANgVAAQgiAAABgRQAAgYAoghQAXgQAUgKQAJAUAPABQAQABAcgdQAcgfALggQALggAGgnQAGgnAAgRQAAgWgEgSQAeAUAPAcQATAjAAAyIgCAXIgTAqIgRAlQgdARgKAMQgGAFgRAnIgPAzQgJAYgUAAQgKAAgKgVg");
	this.shape.setTransform(-43.6,66.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E78A0E").s().p("AhgEVQgNgXgnACQgSABgcgIQgdgJgRAAIgJgKIgfgcIADgPIACgQIgBgIIgBgEQgwAAgDArIAAAnQABAYgEAMQgaARgKAAQgTAAgagRQgdgTAAgTQAAgIAMgdIABgDQgGg1AvhBQAdgqBchgQgGAPg/BfIAAARQARABAzgwIBMhIIAEADIAOAzIAFAMQgUALgXARQgoAgAAAZQgBARAiAAQAVAAAYgNQAZgMAGgNIACAAIgIAZQAAATAIATQAKAVAKAAQAUAAAJgZIAPgyQARgnAGgFQAKgMAdgUQgZA+AAAvQAAARAPBoQAAARgLASQgNAVgPAAQgUAAgNgXgAB7C8QgGgEAAgIQAAgIADgDIALgDQAKAAADADQACADAAAKIAAAKQgCADgNAAgAGVB1QgMgFAAgNQAAgMAFgIQAHgJALAAQAIAAAGAGQAAAJAGAGQAGAFAAAGQAAAHgGAFQgFAFgIAAgAE2BJIgMgFQgFgGgBgFIABgIIAIgKIAOAKIALAKIAAAOgAAWhWQAAgxgTgjQgNgcgegVIgDgOQgHgWghgNQgggNg+A+Qg9A+gBBEQgXgvAmhJQAlhKA+gNQA8gOA3A3QA1A4AAAyQAAAggXA3gABZhbIAAgSIALgIQAKgGADAAQADAAAEAJQADAGAAADIAAALQgCAGgLAAgADliPQAAgIAOgHIAGgDIAmAEQAlAAAcgdQAbgbAAgfIAAgLIgGgJIAAgOQANASADAJIABAaQAAA2gmAhQggAdgqAAQgxAAAAgig");
	this.shape_1.setTransform(-28.1,63.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.3,33.6,88.5,60.1);


(lib.shape17 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("ADrhDIAogCAj+gEQCCgZA0AIQAeAEAqAgIAGgMQALgOAWgMQBAglCEgHQiOAVgsAuQgcAfARAgIhBAHQgIgdgjgXQhBgqh3AUIgQADIgDAB");
	this.shape.setTransform(29.3,8.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag8ARQhBgqh3AUQCBgZA1AIQAeAEAqAgIAGgMQALgOAWgMQA/gkCFgIQiOAWgsAuQgdAfASAfIhCAHQgHgdgjgXg");
	this.shape_1.setTransform(28.3,8.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.8,0.2,57,16.1);


(lib.shape16 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AEGg/IANAAAkBAAIgBAAQCJgaAzAFQAiADAkAcIAJgKQAPgKAYgLQBLgiCLgIQiQAVg3AqQgoAeAPAbIhBAIQgIgbgggXQgegTgygDIhuAHIgQAC");
	this.shape.setTransform(29.3,8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhFAPQgegTgygDIhuAHIAAAAQCIgaAzAEQAiAEAmAcIAHgKQAPgKAYgLQBLgiCLgJQiQAWg3AqQgoAeAPAbIhBAIQgIgbgggXg");
	this.shape_1.setTransform(29.5,8.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.8,1.2,57,15);


(lib.shape15 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AEJg9IANAAAkEAFIgBAAQCPgaAvACQAnAAAhAZIAEgGQAIgLAVgJQBCgfClgKQiRAWg3AnQgoAcAOAaIhCAHQgHgagggXQgdgSg2ABIhvAKIgRAE");
	this.shape.setTransform(29.2,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhEAMQgdgSg1AAIhwAMIAAAAQCOgaAvABQAnABAiAZIADgHQAIgKAVgKQBDgfCkgKQiQAXg4AmQgoAcAOAaIhBAIQgIgbgggXg");
	this.shape_1.setTransform(29.4,9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.4,1.8,57.6,14.4);


(lib.shape14 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AELg3IAMAAAkGANIAAAAQCFglA1AAQAqgBAiAaIAEgFQAJgIAVgIQBEgZClgKQiSAWg4AhQgpAYAOAZIhCAHQgHgagggXQgcgRg3AGIhwARIgQAD");
	this.shape.setTransform(29.4,9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhFAHQgcgSg3AGIhvASIgBAAQCFglA1AAQAqgBAjAaIADgFQAJgIAVgIQBEgZClgKQiSAWg4AhQgpAYAOAYIhCAIQgHgbgggWg");
	this.shape_1.setTransform(29.5,9.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.4,2.7,57.9,13.3);


(lib.shape13 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AESgxIAMAAAkNAaIgMAAQCPgyA9gDQAygDAhAcIAFgJQAJgJAWgIQBEgZCkAEQiUAWg2AbQgoAUANAXIhCAIQgIgbgfgXQgagQhAAOQhJAMguAPIgQAD");
	this.shape.setTransform(28.7,10.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag5ABQgZgQhAAOQhJAMguAPIgMAAQCQgyA8gDQAygDAhAcIAFgJQAJgJAVgIQBFgZCkAEQiUAWg3AbQgoAUANAXIhBAIQgHgbghgXg");
	this.shape_1.setTransform(28.3,10.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,4,59.3,12.3);


(lib.shape12 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AESgoIAMAAAESgoQiWAJg2AbQgnASANAYIhBAIQgIgbgfgVQgbgSg/AOQgdAGglANIg1AWIgMAAIB0gzQA2gYAiAIIAtAIQAZAFANAMIAEgIQAKgJAVgHQBEgVClAMgAkNAjIgQAD");
	this.shape.setTransform(28.6,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag5gCQgZgShAAOQgdAGglANIg1AWIgLAAIB0gzQA1gYAiAIIAuAIQAYAFANAMIAEgIQAKgJAVgHQBDgVCmAMQiVAJg3AbQgnASANAYIhBAIQgHgbghgVg");
	this.shape_1.setTransform(28.2,10.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.1,4.9,59.3,11.3);


(lib.shape11 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AEQgoIANAAAjBgFIAZgPQA5ghAgAIIAuAIQAZAFANAMIAEgGQAJgHAWgFQBDgOClAMQiXAKg1AUQglANAMAXIhBAHQgIgagggWQgagShAAOQgTAEgWAKIguAXIAAAAIgiAVIgLAIAjBgFQgNAFgNAGIgUAM");
	this.shape.setTransform(28.4,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhlgIQgagSg/AOQgUAEgWAIIAagNQA4ghAhAIIAtAIQAZAFAOAMIAFgGQAJgHATgFQBEgOClAMQiXAKg1AUQgkANALAXIhBAHQgIgagggWg");
	this.shape_1.setTransform(32.3,11.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.1,6,59,11.6);


(lib.shape10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AETgmIANAAAi+gDIAagPQA4ggAgAHIAuAJQAZAFANALIAEgGQAJgGAWgFQBDgPClAMQiXAKg0AUQgmANAMAXIhBAIQgIgbgggVQgagSg/AOQgUAEgWAJIgtAXIgBABIgiAVIgRADAi+gDQgNADgNAIIgTAM");
	this.shape.setTransform(28.1,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhlgIQgagSg/AOQgUAEgWAIIAagNQA4ghAhAIIAtAIQAZAFAOAMIAFgGQAJgHATgFQBEgOClAMQiXAKg1AUQgkANALAXIhBAHQgIgagggWg");
	this.shape_1.setTransform(32.3,11.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.7,6.1,59.6,11.1);


(lib.shape9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AESgpIAMAAAkNAjIgMAAIB0gzQA2gZAiAIIAtAJQAZAFANALIAEgIQAKgJAVgHQBEgVClAMQiWAKg2AbQgnASANAYIhBAIQgIgbgfgVQgbgSg/AOQgdAFglAOIg1AWIgQAD");
	this.shape.setTransform(28.1,10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag4gCQgagShAAOQgdAFglAOIg0AWIgNAAIB0gzQA2gZAiAIIAtAJQAaAFAMALIAFgIQAJgJAVgHQBEgVCkAMQiVAKg2AbQgnASAOAYIhCAIQgIgbgfgVg");
	this.shape_1.setTransform(27.7,10.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.6,4.6,59.3,11.3);


(lib.shape8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AESgxIAMAAAkNAaIgMAAIApgOQBvgkA0gDQAxgCAiAbIAFgIQAJgKAVgIQBEgZClAEQiUAWg2AbQgMAGgGAGQgTAPAJARIhBAHQgGgVgVgSIgMgKQgbgQg/AOIhDAMIg0AOIgQAD");
	this.shape.setTransform(28.1,9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgsAMIgMgKQgagQhAAOIhDAMIgzAOIgNAAIAqgOQBvgkAzgDQAxgCAiAbIAFgIQAJgKAVgIQBEgZCkAEQiTAWg2AbQgMAGgGAGQgTAPAKARIhCAHQgGgVgVgSg");
	this.shape_1.setTransform(27.7,9.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.6,3.4,59.3,12.3);


(lib.shape7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AELg3IAMAAAELg3QiTAWg4AhIgLAHQgbAVAMAVIhCAHQgIgagggXQgbgRg3AGIhJALIgnAGIAAAAIAWgGQBzgfAxAAQApgBAjAaIADgFQAJgIAWgIQBEgaClgJgAkGANIgQAD");
	this.shape.setTransform(28.7,9.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhFAHQgcgRg3AGIhIALIgnAGIgBAAIAXgGQBzgfAwAAQAqgBAjAaIADgFQAJgIAVgIQBEgaClgJQiSAWg4AhIgLAHQgcAVAMAVIhCAHQgHgagggXg");
	this.shape_1.setTransform(28.8,9.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.3,2.6,57.9,13.4);


(lib.shape6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AEJg9IANAAAEJg9QiRAXg3AmIgFACQgiAcANAYIhCAIQgHgbgggXQgIgGgLgEQgagIgmABIhZAHIgWAEIgBAAIASgEQCAgWAsABQAkABAfAUIAFAFIAEgHQAIgKAVgKQBCgfClgKgAkEAGIgRAD");
	this.shape.setTransform(28.7,8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhEAMQgIgGgLgEQgZgIgmABIhZAHIgXAEIAAAAIASgEQB/gWAsABQAkABAgAUIAFAFIADgHQAIgKAVgKQBDgfCkgKQiQAXg4AmIgEACQgjAcANAYIhBAIQgIgbgggXg");
	this.shape_1.setTransform(28.9,8.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,1.7,57.6,14.5);


(lib.shape5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AEGhAIANAAAEGhAQiQAWg3AqIgHAFQgfAcANAYIhBAIQgIgbgggXIgRgKQgbgKgkgCIhuAHIgBAAQCJgaAzAFQAfADAjAXIAEAFIAJgKQAPgKAYgLQBLgiCLgJgAkBAAIgQAC");
	this.shape.setTransform(28.8,8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhFAPIgRgKQgbgKgkgCIhuAHIAAAAQCIgaAzAFQAfADAjAXIAGAFIAHgKQAPgKAYgLQBLgiCLgJQiQAWg3AqIgHAFQgfAcANAYIhBAIQgIgbgggXg");
	this.shape_1.setTransform(29,8.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,1.4,57,15.1);


(lib.shape4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("ADrhDIAogCADrhDQiOAVgsAuIgIALQgRAaAOAaIhBAHQgIgdgjgXIgMgHQg/ghhtASQCCgZA0AIQAcAEAoAcIAEAEIAGgMQALgNAWgNQBAglCEgHgAj+gEIgQADIgDAB");
	this.shape.setTransform(29.3,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag8ARIgMgHQg/ghhtASQCBgZA1AIQAcAEAmAcIAGAEIAGgMQALgNAWgNQA/glCFgHQiOAVgsAvIgIAKQgSAaAPAaIhCAHQgHgdgjgXg");
	this.shape_1.setTransform(28.3,8.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.8,0.4,57,16.2);


(lib.shape3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AEUhMQABgBACAAADphHIArgFIAAABQhHALhBAXIgWAJQg5AXgSAaQgRAZAQAcIhCAIQgFgcgjgZIgMgIQgfgRgtgHQgsgHg3AFAEUhLQhgALg/ARIgFACIgIACIgqAPIgEACIgDABIgBABQgtATgGAWIgBAEAADAXIgBgCIgCgEQgignh2ADIgCAAIhhAKIgbAD");
	this.shape.setTransform(29,7.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhNAYIgMgIQgggRgsgGQgsgHg3AFIBggKIADAAQB1gDAjAmIADAFIABACIABgHQAHgVArgUIADgBIAEgCIApgPIAIgCIAGgBQA+gRBggMQhgAMg+ARIgGABIAHgCQBCgRAxgHIAqgFIAAABQhGALhBAXIgWAIQg5AYgSAZQgSAaARAbIhCAJQgFgdgjgZgAEKhNIgEABIAEgBg");
	this.shape_1.setTransform(30.4,7.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,-1,57.9,17.7);


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ71();
	this.instance.setTransform(144.7,81.5,1,1,0,0,0,144.7,81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.262},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,289.4,163);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ70();
	this.instance.setTransform(150.2,84.5,1,1,0,0,0,144.7,81.5);
	this.instance.alpha = 0.469;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ67();
	this.instance_1.setTransform(150,83,1,1,0,0,0,150,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,166);


(lib.Символ66 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ68();
	this.instance.setTransform(150,83,1,1,0,0,0,150,83);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,166);


(lib.Символ63 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ59();
	this.instance.setTransform(7.1,9.9,0.635,0.635,0,0,0,11.2,15.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.3,19.9);


(lib.Символ62 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ58();
	this.instance.setTransform(75.6,10.2,0.635,0.635,0,0,0,119,16);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,151.1,20.4);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 65
	this.instance = new lib.Символ65();
	this.instance.setTransform(191,41.5,1,1,0,0,0,7.1,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({scaleX:1.52,scaleY:1.52,y:41.6},9).to({scaleX:1,scaleY:1,y:41.5},10).wait(2));

	// Символ 56
	this.instance_1 = new lib.Символ56();
	this.instance_1.setTransform(90.3,43.5,0.635,0.635,0,0,0,142.1,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({scaleX:0.7,scaleY:0.7},9).to({scaleX:0.64,scaleY:0.64},10).wait(12));

	// Символ 57
	this.instance_2 = new lib.Символ57();
	this.instance_2.setTransform(92.3,9.9,0.635,0.635,0,0,0,47.6,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:47.5,scaleX:0.77,scaleY:0.77},9).to({regX:47.6,scaleX:0.64,scaleY:0.64},10).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,203.2,55.4);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 63
	this.instance = new lib.Символ63();
	this.instance.setTransform(168.1,10,1,1,0,0,0,7.1,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.25,scaleY:1.25},9).to({scaleX:1,scaleY:1},10).wait(1));

	// Символ 62
	this.instance_1 = new lib.Символ62();
	this.instance_1.setTransform(75.5,10.8,1.065,1.065,0,0,0,75.5,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1},9).to({scaleX:1.07,scaleY:1.07},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,-0.1,180.2,21.7);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.setTransform(48,54.6,1,1,0,0,0,48,54.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,95.9,109.3);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhmB+QgBABAAgGQAAgDAMgNIgEgBQgBAAAAgGQAAgKBMhYIgCAAQgZgWgmgrQgngqAAgGQAAgTAYAVQAGgFAZAbQAIgEATAPQAbAVAQAfIAQgSIAAgBQAAgKAkgjQAkgjAKABIACABIABAFQAKgGAKgDIABACIABAFQAAACgvAvIg6BLIArAkQAtAmAAAHQAAAHgEADIAJAIIgBAFQgCACgGAAQgFAAgzgvIgrgnQhPBogUAAg");
	this.shape.setTransform(44.8,62.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(11));

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.setTransform(123.2,117,1,1,0,0,0,48,54.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.88,scaleY:0.88},4).to({scaleX:1,scaleY:1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(32.3,49.6,138.9,122.1);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 24
	this.instance = new lib.Символ24();
	this.instance.setTransform(367.9,-381.9,1,1,-1.4,0,0,45,46);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-82.1,alpha:0},1,cjs.Ease.get(-1)).to({y:206.2,alpha:1},8,cjs.Ease.get(-1)).to({rotation:-5.7,x:368,y:202.1},3).to({rotation:-1.4,x:367.9,y:205.2},2).to({rotation:-1.4},40).wait(75).to({regY:46.1,rotation:25.8,y:389.2},10,cjs.Ease.get(-1)).to({_off:true},1).wait(25));

	// Символ 21
	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(281,-80.5,1,1,0,0,0,44.5,46);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({y:207.8,alpha:1},9,cjs.Ease.get(-1)).to({regX:44.4,rotation:3,x:280.9,y:203.8},3).to({regX:44.5,rotation:0,x:281,y:206.8},2).wait(113).to({rotation:-30,y:414.8},9,cjs.Ease.get(-1)).to({_off:true},1).wait(25));

	// Символ 24
	this.instance_2 = new lib.Символ24();
	this.instance_2.setTransform(210.9,-82.1,1,1,-1.4,0,0,45,46);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({y:206.2,alpha:1},9,cjs.Ease.get(-1)).to({regY:46.1,rotation:-5.2,y:202.2},3).to({regY:46,rotation:-1.4,y:205.2},2).wait(113).to({rotation:-33.2,y:389.2},10,cjs.Ease.get(-1)).to({_off:true},1).wait(22));

	// Символ 22
	this.instance_3 = new lib.Символ22();
	this.instance_3.setTransform(44.5,-72.4,1,1,0,0,0,44.5,46.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({y:215.8,alpha:1},9,cjs.Ease.get(-1)).to({rotation:-6.2,y:211.7},3).to({rotation:0,y:214.8},2).wait(118).to({regY:46.4,rotation:24.9,y:398.8},10,cjs.Ease.get(-1)).to({_off:true},1).wait(20));

	// Символ 21
	this.instance_4 = new lib.Символ21();
	this.instance_4.setTransform(124,-80.5,1,1,0,0,0,44.5,46);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({y:207.8,alpha:1},9,cjs.Ease.get(-1)).to({regY:46.1,rotation:5.5,y:203.9},3).to({regY:46,rotation:0,y:206.8},2).wait(112).to({rotation:-11.2,y:390.8},10,cjs.Ease.get(-1)).to({_off:true},1).wait(24));

	// Символ 24
	this.instance_5 = new lib.Символ24();
	this.instance_5.setTransform(367.9,-81.1,1,1,-1.4,0,0,45,46);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({y:127.9,alpha:1},9,cjs.Ease.get(-1)).to({rotation:2.8,y:124},3).to({rotation:-1.4,y:126.9},2).wait(109).to({regX:45.1,rotation:25.8,x:361,y:369},10,cjs.Ease.get(-1)).to({_off:true},1).wait(16));

	// Символ 24
	this.instance_6 = new lib.Символ24();
	this.instance_6.setTransform(53.2,-82.1,1,1,-1.4,0,0,45,46);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20).to({_off:false},0).to({y:126.9,alpha:1},9,cjs.Ease.get(-1)).to({rotation:1,y:122.9},3).to({rotation:-1.4,y:125.9},2).wait(107).to({rotation:30.5,x:46.2,y:368},10,cjs.Ease.get(-1)).to({_off:true},1).wait(13));

	// Символ 24
	this.instance_7 = new lib.Символ21();
	this.instance_7.setTransform(281.3,-80,1,1,0,0,0,44.5,46);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(18).to({_off:false},0).to({y:129,alpha:1},9,cjs.Ease.get(-1)).to({rotation:-3.7,y:125},3).to({rotation:0,y:128},2).wait(102).to({rotation:24.7,x:280.9,y:363.1},9,cjs.Ease.get(-1)).to({_off:true},1).wait(21));

	// Символ 21
	this.instance_8 = new lib.Символ22();
	this.instance_8.setTransform(122.8,-71.9,1,1,0,0,0,44.5,46.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(22).to({_off:false},0).to({y:137.1,alpha:1},9,cjs.Ease.get(-1)).to({rotation:-3.7,y:133.1},3).to({rotation:0,y:136.1},2).wait(104).to({rotation:-18.7,x:115.8,y:378.1},10,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Символ 22
	this.instance_9 = new lib.Символ21();
	this.instance_9.setTransform(202.2,-80,1,1,0,0,0,44.5,46);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(14).to({_off:false},0).to({y:129,alpha:1},9,cjs.Ease.get(-1)).to({rotation:4.7,y:125.1},3).to({rotation:0,y:128},2).wait(115).to({rotation:-33.7,x:195.2,y:370.1},10,cjs.Ease.get(-1)).to({_off:true},1).wait(11));

	// Символ 24
	this.instance_10 = new lib.Символ24();
	this.instance_10.setTransform(367.9,-84.8,1,1,-1.4,0,0,45,46);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(34).to({_off:false},0).to({y:48.2,alpha:1},9,cjs.Ease.get(-1)).to({regX:45.1,rotation:-4.4,x:368,y:44.1},3).to({regX:45,rotation:-1.4,x:367.9,y:47.2},2).wait(99).to({regY:46.1,rotation:35.5,y:361.3},10,cjs.Ease.get(-1)).to({_off:true},1).wait(7));

	// Символ 21
	this.instance_11 = new lib.Символ21();
	this.instance_11.setTransform(281,-83.2,1,1,0,0,0,44.5,46);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(29).to({_off:false},0).to({y:49.8,alpha:1},9,cjs.Ease.get(-1)).to({rotation:3.5,x:280.9,y:45.7},3).to({rotation:0,x:281,y:48.8},2).wait(96).to({rotation:-23,x:280.9,y:258.8},11,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Символ 24
	this.instance_12 = new lib.Символ24();
	this.instance_12.setTransform(210.9,-84.8,1,1,-1.4,0,0,45,46);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(33).to({_off:false},0).to({y:48.2,alpha:1},9,cjs.Ease.get(-1)).to({rotation:-6.4,y:44.1},3).to({rotation:-1.4,y:47.2},2).to({rotation:-1.4},7).wait(95).to({regY:46.1,rotation:-53.7,y:361.3},10,cjs.Ease.get(-1)).to({_off:true},1).wait(5));

	// Символ 22
	this.instance_13 = new lib.Символ22();
	this.instance_13.setTransform(44.5,-75.2,1,1,0,0,0,44.5,46.5);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(36).to({_off:false},0).to({y:57.8,alpha:1},9,cjs.Ease.get(-1)).to({regX:44.4,rotation:-3.7,y:53.8},3).to({regX:44.5,rotation:0,y:56.8},2).wait(101).to({rotation:35.2,y:370.9},10,cjs.Ease.get(-1)).to({_off:true},1).wait(3));

	// Символ 21
	this.instance_14 = new lib.Символ21();
	this.instance_14.setTransform(124,-83.2,1,1,0,0,0,44.5,46);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(30).to({_off:false},0).to({y:49.8,alpha:1},9,cjs.Ease.get(-1)).to({rotation:3,y:45.8},3).to({rotation:0,y:48.8},2).wait(110).to({rotation:-31,y:362.9},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(322.1,-417.7,81,82.9);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.setTransform(29.2,31.2,1,1,0,0,0,29.2,31.2);
	this.instance.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.352},17).to({alpha:0.148},21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.4,62.4);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(32.2,19.2,1,1,0,0,0,32.2,19.2);
	this.instance.alpha = 0.48;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.148},17).to({alpha:0.48},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,56.3,38.2);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(38.2,52.2,1,1,0,0,0,38.2,52.2);
	this.instance.alpha = 0.211;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.48},14).to({alpha:0.211},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76.4,104.6);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 6
	this.instance = new lib.Символ6();
	this.instance.setTransform(21.6,83.3,1,1,2.2,0,0,14.3,59.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1,x:23.1,y:82.9},14,cjs.Ease.get(-1)).to({rotation:0,x:24.8,y:82.4},15,cjs.Ease.get(1)).to({rotation:0.5,x:24,y:82.7},15,cjs.Ease.get(-1)).to({rotation:2.2,x:21.6,y:83.3},15,cjs.Ease.get(1)).wait(1));

	// Символ 5
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(13.5,14.7,1,1,5.2,0,0,14.7,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:2.5,x:14.1,y:14},14,cjs.Ease.get(-1)).to({regY:13.3,rotation:0,x:14.7,y:13.3},15,cjs.Ease.get(1)).to({rotation:1.3,x:14.4,y:13.7},15,cjs.Ease.get(-1)).to({regY:13.4,rotation:5.2,x:13.5,y:14.7},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,0,40.6,143.4);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 3
	this.instance = new lib.Символ3();
	this.instance.setTransform(12.3,16.6,1,1,0,0,0,12.3,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.8,x:12.6,y:17.4},9,cjs.Ease.get(-1)).to({rotation:8,x:12.9,y:18.2},10,cjs.Ease.get(1)).to({rotation:3.8,x:12.6,y:17.5},10,cjs.Ease.get(-1)).to({rotation:0,x:12.3,y:16.6},10,cjs.Ease.get(1)).wait(1));

	// Символ 2
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(18.3,83.1,1,1,0,0,0,11.1,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-0.8,x:19.3,y:82.9},9,cjs.Ease.get(-1)).to({rotation:-2,x:20.4,y:82.6},10,cjs.Ease.get(1)).to({rotation:-0.8,x:19.3,y:82.9},10,cjs.Ease.get(-1)).to({rotation:0,x:18.3,y:83.1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.3,144.6);


(lib.sprite35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape20("synched",0);
	this.instance.setTransform(28.9,-55.1);

	this.instance_1 = new lib.shape21("synched",0);
	this.instance_1.setTransform(28.9,-55.1);

	this.instance_2 = new lib.shape22("synched",0);
	this.instance_2.setTransform(28.9,-55.1);

	this.instance_3 = new lib.shape23("synched",0);
	this.instance_3.setTransform(28.9,-55.1);

	this.instance_4 = new lib.shape24("synched",0);
	this.instance_4.setTransform(28.9,-55.1);

	this.instance_5 = new lib.shape25("synched",0);
	this.instance_5.setTransform(28.9,-55.1);

	this.instance_6 = new lib.shape26("synched",0);
	this.instance_6.setTransform(28.9,-55.1);

	this.instance_7 = new lib.shape27("synched",0);
	this.instance_7.setTransform(28.9,-55.1);

	this.instance_8 = new lib.shape28("synched",0);
	this.instance_8.setTransform(28.9,-55.1);

	this.instance_9 = new lib.shape29("synched",0);
	this.instance_9.setTransform(28.9,-55.1);

	this.instance_10 = new lib.shape30("synched",0);
	this.instance_10.setTransform(28.9,-55.1);

	this.instance_11 = new lib.shape31("synched",0);
	this.instance_11.setTransform(28.9,-55.1);

	this.instance_12 = new lib.shape32("synched",0);
	this.instance_12.setTransform(28.9,-55.1);

	this.instance_13 = new lib.shape33("synched",0);
	this.instance_13.setTransform(28.9,-55.1);

	this.instance_14 = new lib.shape34("synched",0);
	this.instance_14.setTransform(28.9,-55.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.4,-21.5,88.5,60.1);


(lib.sprite18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape3("synched",0);

	this.instance_1 = new lib.shape4("synched",0);

	this.instance_2 = new lib.shape5("synched",0);

	this.instance_3 = new lib.shape6("synched",0);

	this.instance_4 = new lib.shape7("synched",0);

	this.instance_5 = new lib.shape8("synched",0);

	this.instance_6 = new lib.shape9("synched",0);

	this.instance_7 = new lib.shape10("synched",0);

	this.instance_8 = new lib.shape11("synched",0);

	this.instance_9 = new lib.shape12("synched",0);

	this.instance_10 = new lib.shape13("synched",0);

	this.instance_11 = new lib.shape14("synched",0);

	this.instance_12 = new lib.shape15("synched",0);

	this.instance_13 = new lib.shape16("synched",0);

	this.instance_14 = new lib.shape17("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-1,57.9,17.7);


(lib.Символ52 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.sprite35();
	this.instance.setTransform(6.2,-0.2,0.457,0.686,0,-12.8,161.1);

	this.instance_1 = new lib.sprite35();
	this.instance_1.setTransform(23,-21.5,0.479,0.686,0,-12.8,-18.9);

	// Слой 1
	this.instance_2 = new lib.h2();

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.5,-42.9,67.6,155.9);


(lib.Символ51 = function() {
	this.initialize();

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgJyAgPIAAgoQAAgqAliWIAOg2QgNgDgSgIQgagMgMgMIiAgKQhagGhpgGQgQAKgNAAQgQgBgFgDIgOgJIgDgLQgCgIAAgPQAAgYBgiLQBvigANgaIArhUQAbg2AMgiIAMgbQg2AMhaANQg3AHgdASQgPAJgXAZQgpAvhuAIQgmA9gXAhQgrA+ghAAQgdgBgIgXIgDgbQAAgXAmg4QAqg9AHgYQAIgcAAgzQgBg6ADgVIAAgFQjCBIiNDOQggAugxBXQggA5gJAAQgcAAgJgXQgSALgZAMQhrAxiFAAIgBAAQgQAVghgBQgdAAgIgVQgDgIAAgRQAAgMAKgQQAKgQAAgMQAAgUhaiNQheiTgpgbQgTAngJBRQgFAwgIBhQgIBTgPAnQgVAzgogBQgoAAgIhdIgGhMQgEgqgLgSQgXgqhHhWQgmgvAAg6QAAgLAIgLQAFgHAHgEQgIgugChcIAAi6QAAlUgFjeQgHlCgSjqQgKh2g1nCQglk6AAjpQAAiHAGgbQANgwA8gaQAggOC5g3QDehADahPQB9gtF8g0QDcgfHgg5IAAgDIPcAAQCzAJDUAFQC0AJEZAZIRVACQBWCXArDZQAMA7ATB/QATB5AOBBQATBgAuEMQApDuAdCGIBIFFQA0DpAfCaQBhHoAAEPQAAAKAEAeQADAdgGARQgRA3hjAAQhhAAiThcQgbgQgZgSIgdATIibBmQjhCYAAA9QAAANAJAaQAKAcABANQAUgBAZgJQAXgHAMgBIAegeQA2g2A4gqQCgh4AABpQAAAFgEAHQApADADAoQADAdgNBBQAABaAPAlQAPAkAAAIQAAATgBAFQgFAKgTAGQgpALizABQgOAAgLgCIgCAOQgIAbgeAAQgaAAgGgMIgFgaQgFgmhaACIhdAAQgLAOgPANQgTARgKABIgKgBQgUAVgegBQgZAAgKgTQgFgLAAgMQAAgGAZgtIAHgNQgLgSgLgcQgUhGAAADQAAgNADgIQgbgXgogcQg1gmh8hMQAABQAeAdQARASADAGQAKARAAAeIAAA9QgGAtgiAAQgygng4goQhxhQgpgGIhnAAQAUATAbAWQAQARAAAYQAAAJgzAlQg2AohBAmQi1BohKgUQgMANgWAPQgZAQgLABQgggBgIgPQgCgDgDgdQgFgwhaAAQgbAAgkAwQglAvgoABQgNAAgygLQg5gMgZgCQAuAkAIAKQAQASAAAfQAAAcghAfQglAjgIAwQgBAIAIAcQAGAZgHAOQgXAri5AFIgWA7QgSApgmAZIhQAAQg0hHgIhzIgFhlQgEg/gJgtQgGgggtipQgOg2gIguQgcAfgtAtIgnBEQhBB/gMBmQgOBxgXBdQgjCJgmgBQghAAgHgkg");
	mask.setTransform(819.9,259);

	// Слой 2
	this.instance = new lib.Символ25();
	this.instance.setTransform(793.9,364.4,0.841,0.841,0,0,0,207.1,130.7);

	this.instance.mask = mask;

	// Слой 1
	this.instance_1 = new lib.fon();
	this.instance_1.setTransform(231,101,1.019,0.834);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(231,101,815.2,417);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 55
	this.instance = new lib.Символ55();
	this.instance.setTransform(21,94.5,1,1,0,0,0,21,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:21.1,rotation:8.8,x:25.7,y:100.3},9,cjs.Ease.get(-1)).to({rotation:19,x:30.8,y:106.7},10,cjs.Ease.get(1)).to({regX:21,scaleX:1,scaleY:1,rotation:9.3,x:25.9,y:100.7},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:21,y:94.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 54
	this.instance_1 = new lib.Символ54();
	this.instance_1.setTransform(80,176,1,1,0,0,0,57,102);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.99,y:176.9},9,cjs.Ease.get(-1)).to({scaleY:0.98,y:177.8},10,cjs.Ease.get(1)).to({scaleY:0.99,y:176.9},10,cjs.Ease.get(-1)).to({scaleY:1,y:176},10,cjs.Ease.get(1)).wait(1));

	// Символ 53
	this.instance_2 = new lib.Символ53();
	this.instance_2.setTransform(68.5,45,1,1,0,0,0,34.5,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-3.3,x:67.6,y:47.6},9,cjs.Ease.get(-1)).to({rotation:-7.2,x:66.5,y:50.5},10,cjs.Ease.get(1)).to({rotation:-3.5,x:67.6,y:47.7},10,cjs.Ease.get(-1)).to({rotation:0,x:68.5,y:45},10,cjs.Ease.get(1)).wait(1));

	// Символ 52
	this.instance_3 = new lib.Символ52();
	this.instance_3.setTransform(130.5,87.5,1,1,0,0,0,25.5,56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:7,x:133.4,y:91.4},9,cjs.Ease.get(-1)).to({rotation:15,x:136.7,y:95.8},10,cjs.Ease.get(1)).to({regY:56.6,rotation:7.3,x:133.6,y:91.7},10,cjs.Ease.get(-1)).to({regY:56.5,rotation:0,x:130.5,y:87.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-11.9,156,289.9);


(lib.Символ21_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("AD6lBICbAAIgDBpAGEDNIgEBzIibAAAj0FCIigAAIAEhzAmCjYIAEhpICgAA");
	this.shape.setTransform(24.9,26.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Слой 1
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(29.2,31.2,1,1,0,0,0,29.2,31.2);
	this.instance_1.alpha = 0.738;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AASE6IgHgCIggAAQgjgBgCgBIiVgBQggACgHgXQgBgDAAgfQgRggAAgGQAAgKAOgSQAOgSAAgUQAAgJgDgXIgDgeIADg9QAAgKgPgRIgPgVIASh7IgJgvQAAgDADgGQACgFAAgEQAAgEgXgVIgYgVQAAgRAQgFQAPgGAAgIQAAgEgDgBQAAgBgBAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAJgHAiABIA5ADQAzAAATgIQAMgFAQADQAQADAAAGQAKAEBIgCQAFACAGAMQAGAKAAACQAAAOgEADQgNAGgTAMIgDADIBXAKQAXACAAAJQAAARgQAJQgPAKACAYQAAAJgKA2IAJAJQAKAKAAAGQAAAYgQAJQgPAJgCAaIgDBEIADA4QAAAFAaAcIAeAjQAMARAaAPIA3AiQA1gBAcALQATAIAAAHQAAAMgDAEQgEAIgSAHgAgMjfQAAAAAAABQAAAAAAABQABAAAAABQAAABAAABQAAAEgHAEQgKAHgEAEIgBAVQAAAKANASQANASAAACQAAARgSAWQgRAVACAbQACAXgJAbIgLAfQAAACAFAJQAEAJAAAIQAAAKAPARQAOASAAAGQAAAFgFASQgFARAAALQAAAIgJATQgKASAAACQAAAFAIAaQAIAbAAAIQAAAMgCAIIArABIAIABIEHAAIAKgFQABgBAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAgLgMgFQgOgDgEgDQgvALg/gpQg3gkgLgdQgDgJgVgOQgSgNAAgOIgBgcIgCgaIADhFQAAgNAQgTQAQgSAAgOQAAgGgJgLQgJgLAAgDQAAgMAEgdQAFgdAAgHQAAgMAKgHQANgJAGgTIgtAAQgbgBgQgKIgSACIgFAAIgBgBQABgUAUgMQAVgMAAgFQAAgEgDgFQgDgFgEgCIg8ABQgJAAgNgGIgQgJQgPgBgNAHQgOAHgkAAIg+gFIgkABIgKASQgHAMgQACQACADAXAVQAWASAAAGIgDAMQgDAIAAADQAAAGAFARQAEARAAAHQAAAJgFAWQgFAXAAATQAAAIgDALQgEALAAAMQAAAQAQAOQAPAMgDAbQgDAZAAAyIAEAQQADANAAAGQAAAXgOAUQgOAUAAAFQAAAMALANQAJAKgFAkIAAAFIAfAFQCXABADABIAEAAIADgFQADgDAAgEIgQg8QAAgIAPguQAPgvAAgJIgNgQQgNgRAAgKIgMgkQAAgFAJgiQAJglAAgJQABgUAOgaQAQgeACgJQgIgCgJgSQgJgRAAgJQAAgTADgHQAGgPASgGIAEABgAEFEqQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAgBQAAgGANgFIADAAQAAAAABAAQAAAAAAABQAAABAAAAQAAABAAABQAAAMgMABIgDgBgAC0EnQgBgBAAgEQAAgGALgDIAcgHIACAFIgkASIgEgCgAgJEjIBAgnQAtgbAUgCIACAEQgfAWgZAPQgwAegSAAQgGAAgDgDgAimEeQAAgKAsgOQAtgNAMAFQg+AQggATIgFAAIgBABQgBAAAAAAQAAAAAAgBQAAgBAAAAQAAgBAAgBgABoEeQAFgIAXgLQARgJAMgEQAEACAAADQgJAKgVAKQgRAIgJACgAjaDuQgBAAAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgKBEgdQBTgjAEgDQAFABAAAEQgSAZg6AXIhPAdIgDgBgAgiDaQAHgOAsgOQAmgMANAAIAAgBIABAFQAAAIgxAQIgxAQIgFgEgAjQCcIgBgDQADgMA1gWQAzgVAhgFIACAEQgaAPg0AWQgzAXgIAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAgAgHCPIgCgCQADgEAQgIQATgIAJgCIAEADQgFAKgQAHQgOAFgJAAQgEAAgBgBgAjbBMIgCgDQAggRA2gUQAmgOAfgJIACAEQgPAMg8AYQg7AYgQAAQgEAAgBgBgAgtBIIgCgEQAYgPALgFQAZgMAWAGQgmANgdARgAjegEIAAgBIgCgCQAlgUAwgVQA4gYAcgGIABAAIAAAEQAAAMhMAeQhJAcgOAAIgFAAgAgjgPQAHgJAogTQAqgSAKABIACAEQgPALghAQQgiASgLAAQgGAAgCgEgAjvhIQAVgXA8gaIBugqIACABIABAEQAAAIg6AXQhWAjgtAXIgFgDgAgEhhIgBgDQADgFAYgLQAagKAGABIABAAIABAEQAAAEgWAKQgYALgKAAQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAAAAAAAgAjoiVIgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQAAgZBagaQAugNA5gLIABAAQAAAAAAAAQAAAAAAABQABABAAAAQAAABAAABQgjAJgpAOQhRAcgfAYgAgLifIAAgBQgBAAAAAAQAAAAAAAAQgBgBAAgBQAAgBAAgBQAAgGAegRQAggRAJADQgHAVg6AVIgEAAgAjhjcQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAgBQAAgOBEgYQBEgYAMANIhYAdQgqAOgNAMIgDgBg");
	this.shape_1.setTransform(28.7,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.4,62.4);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ49();
	this.instance.setTransform(32.2,17.2,0.763,0.763,0,0,0,49.5,31);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Слой 1
	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(32.2,19.2,1,1,0,0,0,32.2,19.2);
	this.instance_1.alpha = 0.738;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ABFC7QAMgMAngeQAkgbARgTIAsgxQAZgeASgRIhDhWIAAgGQAVAJAYAlQAeArAIAIIgBAFQgBADgEAAIgDgFQgFAKgdAeQgsAugHAJQgQATgjAZIg5ApgAA/CkIAAgNQAAgugmglQgZgYg/gmQhPgsgggZQg6gsgjg0IgDAEIgDgBQgBAAAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgrAmAUIBAAwIAkA1QAdAqAQAAQAOAAAUgLIAlgXQAygeA4AQIBFAAIAfgKQAFgCAFAAQACAAABAAQABAAAAAAQABAAAAABQAAAAgBAAIACAEQgHAFgHADIgkAKIhBAAIgZgDIgbgBQgJAAg1AbQg3AbgJAAQgUAAghgvIgdgwQAAgEgpgbIgSgMQgMgIgCgHIgNABIABAGIgGALQAlAwA8ArQAYARBaA2QA/AlAaAcQAmAoAAAyIgBAaIgFACQgEgOAAgFgABRB9IgCgDQAHgKAngKQAmgLAKAFQgTAQhEAOQgEAAgBgBgAA/A+QgCgCAAgEQA0gIA5gbQAtgVAZADIhKAjQg9AZghAAgAAIAeQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBAAgBQAAgLAlgNIA/gTQAUgIAkgRQAdgNAOAFQgUAShDAaIhrAlIgDgBgAgogLQALgPAmgQIA/gYIABAEIhsA3IgFgEgAiqhLIAAgBQgBAAAAAAQAAAAAAAAQgBgBAAgBQAAgBAAgBQAAgDAFgDQAGgDAGADIABAEIgBAFIgFABIgGABIgEAAgAjMhqQAEgRAZACIABAEQgHAHgSAIIgFgEgAjuiKIgCgDQABgFAJgFQAHgEADAAIAFADQgCAPgRAAQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAg");
	this.shape.setTransform(27.7,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56.3,38.2);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("AEunbIByACIAJCuAHDE5IAICpIhzgBAnCkzIgIiuIB9ACAkiHcIh+gCIgIip");
	this.shape.setTransform(39.9,51.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Слой 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ACzFUIgBgGQACgCATgBQAUgRA7ggIAEABQAAAAAAAAQABAAAAABQAAAAAAABQAAABAAABQAAAFgqAZQgqAZgIAAQgKAAgCgCgAiuEmIgBgFQApgVDOhcQCXhCAtguQAFACAAAEQg7BAiRA5QhFAcijBOQgIAAgDgDgABJEWIgBgCQBZgdAkgKQAcgHAlgWQAigUAHAAIABgBIAAAFQAAAUhgAfQg9AUg4ANIgDAEQgCACgEAAQgGAAgDgEgAj1DiQAbgYBSghQB4gwAVgMQA5gcBDgpQAngYBAgoIAEADIABAAIAAADQAAAHhhA4QhaA2gjARQieBOhhAkgAjyBsIAAgDQAAgGA7gOQBHgRAigYICFhYQArgbBZg8QBSg0BFgbIABAAIAAAEQiQBViLBaQhWA7gsAZQhKAqhZARgAjkAGQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgPCGhGQBFgkBQgpQDIhzA1hCIAEABQABAAAAAAQAAABAAAAQAAABAAABQAAABAAABQAAAsjkCAIixBjQhgA0ggAVIgGgDgAj3hhIgDgCQAKgNA9giQBJgqASgNIBGg3QAsgkAcgTIAEABQAAAAAAAAQABABAAAAQAAABAAABQAAABAAAAQAAAMiLBiQiOBkgUAAIgFgBgAktiTQASgaBDgzQBPg8APgOIADAAQABAAAAAAQAAABAAAAQABABAAABQAAAAAAABQAAAJgoAgQgUAQgbAUIgzArIgmAeQgFAAgDgDgAlRivIgBgGQAAgMA8hCQAzg5AUgRIADABQABAAAAAAQAAAAAAABQABAAAAABQAAABAAABQAAAIgkAfQgnAkgEAEIgZAoQgQAYgKAOIgFgEg");
	this.shape_1.setTransform(38.1,57.3);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(3));

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(38.2,52.2,1,1,0,0,0,38.2,52.2);
	this.instance.alpha = 0.738;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("ADQH2IAAgFIAFgBIAEABIgBgFQgHgUgHgGQgGgGgSgOIgagVQgNgNgpgaQgqgbgHgHIACgEQA5ARA3AxQAhAeAlAwIAAAKIAJABQADgOAUgmQAQggAAgTQAAgaAMgeQAOgjAWgNIgagZQgEgGAAgQIAYgcQAYgbAAgCIAHgMQAHgMAAgHQAAgSg3hFIg3hCIABgEQAPAAA3BOQAEAIASAPQASAPAEAHQAGANAAAgQAAAKgfAlQgfAkAAACQAAAIAPAMQAOAMAAAIQAAAEgVAbQgWAgAAAfQAAAHgKAXQgKAXAAADQAAACgKAQQgLAQAAAFQAAAJgDAJQgDAOgJAAQgbgMgFgEgAjIGpQgWgpgLgLQgZgfgNgPQgZgagwgNIgGgDIACgEIADgDQA1APAWAWQANAOAaAgQAMALAWAoIAVAmQAKAAATgPQAWgRANgFQAUgHATgKQASgHAvgFQAEgCAAgDQADgCAXAAQAFgGAAgHQAAgEAFgEIAMgFIAEAAIABABIAAAEQAAACgHANQgJAOgFADQhNAJhBAbIgbAUQgVARgMAAQgHAAgTgkgAldEKIgCgGQAWgcAWgmQArhMAAgzQAAglgGgQQgEgMgfgxQgIgOgWgNQgagRgGgGQgHgHgFgUQgFgRAAgMIACgKIACgKQAMgTAMgWQAYgtAAgSQAAgSAQgXQAXgiAlAQQAiAMAhAZQAnAVBeALQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBAAIgIABQhJAAhEgkIgqgZQgUgMgKAAQgNAAgdBAQgPAhgMAgQAAADgNASQgNATAAAPQAAAGAEAZQAAAJASAPQASAQATAFQAHACAOATQALASAFALQASAsACAKQAFARAAAgQAAAlgiBDQgdA3gdAkIgEgHgAD2gIQAAgFAIgUQAHgTAAgYQAAgKALgHQAMgHAAgGQAAgJAtgfQAugeAAgdQAAgxg/hXQhAhNAAgEIABgFIACgDQAjAcAvBMQA0BSAAApQAAAVgTAVQgIAJgiAcQg9AyAAA0QAAADgCAEQgCAEAAADIgBAGIgEACIgIgIgAhOkyQgLgrgFgMQgIgVgZgcQgUgWAAgTQAAgRADgpQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAJgFQAEAFAdA3QAWAoAbATQBPA6AuA0IAXgBQAagYA8guQAwgpACgoIAHgCIAEABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAJgHALQgIALAAAJQAAATg+AyQghAbgjAYIgeAAIgygxQgjgjgcgSQgbgRgZgjQgYgngNgQQADAPgDAHQgEAIAAAHQAAASAgAjQAfAkAAAZQAAANAIAOQANAVAEAMIgBAEQgBABgEAAQgMAAgLgkg");
	this.shape_2.setTransform(38.6,53.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.instance}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76.4,104.6);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ20();
	this.instance.setTransform(30.5,20.1,1,1,0,0,0,28.1,19.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ20(), 3);

	// Слой 3
	this.instance_1 = new lib.Символ21_1();
	this.instance_1.setTransform(41.2,146.1,1,1,0,0,0,29.2,31.2);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ21_1(), 3);

	// Слой 1
	this.instance_2 = new lib.a1();
	this.instance_2.setTransform(0,0,0.651,0.651);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.1,-6.7,84.2,183.9);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ19();
	this.instance.setTransform(38.4,94.7,1,1,0,0,0,38.2,52.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ19(), 3);

	// Слой 1
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(38.4,73.5,1,1,0,0,0,38.4,73.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.4,0,94.9,147.5);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 4
	this.instance = new lib.Символ4();
	this.instance.setTransform(47.9,26.7,1,1,0,0,0,25.1,26.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:26.8,rotation:2.5,x:49.1,y:27.9},14,cjs.Ease.get(-1)).to({rotation:4,x:50.9,y:28.7},15,cjs.Ease.get(1)).to({rotation:2.5,x:49.1,y:27.9},15,cjs.Ease.get(-1)).to({regY:26.7,rotation:0,x:47.9,y:26.7},15,cjs.Ease.get(1)).wait(1));

	// Символ 8
	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(50.7,231.8,1,1.001,0,-1.9,0,35.5,87.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:35.6,scaleY:1,skewX:-0.3,x:53.3},14,cjs.Ease.get(-1)).to({regX:35.5,skewX:1.4,x:56},15,cjs.Ease.get(1)).to({skewX:-0.3,x:53.4},15,cjs.Ease.get(-1)).to({scaleY:1,skewX:-1.9,x:50.7},15,cjs.Ease.get(1)).wait(1));

	// Символ 7
	this.instance_2 = new lib.Символ7();
	this.instance_2.setTransform(51.5,95,1,1.001,0,2.5,0,38.4,73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({skewX:0.3,x:54.2},14,cjs.Ease.get(-1)).to({skewX:-1.9,x:57.1},15,cjs.Ease.get(1)).to({skewX:0.3,x:54.3},15,cjs.Ease.get(-1)).to({skewX:2.5,x:51.5},15,cjs.Ease.get(1)).wait(1));

	// Символ 6
	this.instance_3 = new lib.Символ10();
	this.instance_3.setTransform(75.7,120.6,1,1,14.7,0,0,19.6,71);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,rotation:14.6,x:74.9},14,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:14.7,x:77.7},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:14.6,x:74.9},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:14.7,x:75.7},15,cjs.Ease.get(1)).wait(1));

	// Символ 3
	this.instance_4 = new lib.Символ9();
	this.instance_4.setTransform(22.4,125,1,1,-7,0,0,14.7,72.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-6.8,x:23.2,y:125.1},14,cjs.Ease.get(-1)).to({rotation:-7,x:23.6,y:125},15,cjs.Ease.get(1)).to({rotation:-6.8,x:23.2,y:125.1},15,cjs.Ease.get(-1)).to({rotation:-7,x:22.4,y:125},15,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_5 = new lib.Символ66();
	this.instance_5.setTransform(41.5,251.6,1,1,0,0,0,150,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.5,0,300,334.6);


(lib.sprite19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite18();
	this.instance.setTransform(-5.8,-5.5,0.236,0.236);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.75,scaleY:0.75,x:-631.9,y:-219.1},124).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-5.5,13.2,3.7);


(lib.Символ72 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.sprite19();
	this.instance.setTransform(5.7,50.9,0.8,0.805,0,-6.1,0);

	this.instance_1 = new lib.sprite19();
	this.instance_1.setTransform(37.3,2.8,0.5,0.503,0,-6.1,0);

	this.instance_2 = new lib.sprite19();
	this.instance_2.setTransform(23.5,23.8,0.5,0.503,0,-6.1,0);

	this.instance_3 = new lib.sprite19();
	this.instance_3.setTransform(49.2,28.4,1,1.006,0,-6.1,0);

	this.instance_4 = new lib.sprite19();
	this.instance_4.setTransform(6.2,82.9,1,1.006,0,-6.1,0);

	this.instance_5 = new lib.sprite19();
	this.instance_5.setTransform(6.6,111.6,0.95,0.955,0,-6.1,0);

	this.instance_6 = new lib.sprite19();
	this.instance_6.setTransform(47.2,62.9,1,1.006,0,-6.1,0);

	this.addChild(this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,56.6,109.9);


// stage content:



(lib.amazonka640305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		this.addEventListener("tick", fl_CustomMouseCursor1.bind(this));
		
		function fl_CustomMouseCursor1() {
		
		this.fon.x =  stage.mouseX / 10;
		
		}
		
		this.cursor = "none";
		this.pric.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.pric.x = stage.mouseX;
			this.pric.y = stage.mouseY;
		}
		
		
		this.button.addEventListener("mousedown", fl_button);
		
		function fl_button() {
			window.open(clickTAG, "_blank");
		}
		
		
		this.girl.addEventListener("mousedown", fl_girl);
		
		function fl_girl() {
			window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 18
	this.pric = new lib.Символ30();
	this.pric.setTransform(462.6,169.3,1,1,0,0,0,48,54.6);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

	// Слой 2
	this.girl = new lib.Символ1();
	this.girl.setTransform(318,163.1,1,1,0,0,0,56,159.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgEABQAAgDAEgBQADABABACQgCADgCACQgCgCgCgCg");
	this.shape.setTransform(318.5,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.girl}]}).wait(1));

	// Слой 23
	this.button = new lib.Символ48();
	this.button.setTransform(332.9,162,1.099,1.145,0,0,0,372.8,185.6);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.Символ48(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Слой 9
	this.instance = new lib.Символ72();
	this.instance.setTransform(671.4,113.8,1,1,0,0,0,28.2,55.8);
	this.instance.alpha = 0.469;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ50();
	this.instance_1.setTransform(131.4,215.1,1,1,0,0,0,78,139);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 22
	this.instance_2 = new lib.Символ61();
	this.instance_2.setTransform(512.3,43.6,1,1,0,0,0,99,27.7);

	this.instance_3 = new lib.Символ60();
	this.instance_3.setTransform(131.3,34.9,1,1,0,0,0,85.1,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Слой 1
	this.instance_4 = new lib.trree();
	this.instance_4.setTransform(259,-73.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 8
	this.fon = new lib.Символ51();
	this.fon.setTransform(35.1,44.6,1,1,0,0,0,333.6,208.5);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(243.1,-108.1,872.1,635.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;