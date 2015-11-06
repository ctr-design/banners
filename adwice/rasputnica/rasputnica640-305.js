(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/fon.jpg", id:"fon"},
		{src:"images/h1.png", id:"h1"},
		{src:"images/h2.png", id:"h2"},
		{src:"images/hand.png", id:"hand"},
		{src:"images/head.png", id:"head"},
		{src:"images/leg.png", id:"leg"},
		{src:"images/m1.png", id:"m1"},
		{src:"images/m2.png", id:"m2"},
		{src:"images/m3.png", id:"m3"},
		{src:"images/shold1.png", id:"shold1"},
		{src:"images/shold2.png", id:"shold2"},
		{src:"images/tel.png", id:"tel"},
		{src:"images/toos.png", id:"toos"},
		{src:"images/tsus.png", id:"tsus"}
	]
};



// symbols:



(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,438);


(lib.h1 = function() {
	this.initialize(img.h1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,183);


(lib.h2 = function() {
	this.initialize(img.h2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,189);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,155);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,82);


(lib.leg = function() {
	this.initialize(img.leg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,270);


(lib.m1 = function() {
	this.initialize(img.m1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,349);


(lib.m2 = function() {
	this.initialize(img.m2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,194);


(lib.m3 = function() {
	this.initialize(img.m3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,50);


(lib.shold1 = function() {
	this.initialize(img.shold1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,51);


(lib.shold2 = function() {
	this.initialize(img.shold2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,41);


(lib.tel = function() {
	this.initialize(img.tel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,226);


(lib.toos = function() {
	this.initialize(img.toos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,109);


(lib.tsus = function() {
	this.initialize(img.tsus);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,305,253);


(lib.Символ58 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKIG2IAAg+IikAAIgFA+IhNAAIAAiJIAbAAIAOgqQAGgXAEgZQAEgaACghIAChUIDqAAIAADpIAjAAIgKCJgAIfCSQgDA+gEAaQgFAggMAjIBbAAIAAieIhDAAgAkoG2IAAg+IikAAIgFA+IhNAAIAAiJIAbAAIAOgqQAGgXAEgZQAEgaACghIAChUIDqAAIAADpIAjAAIgKCJgAmRCSQgDA+gEAaQgFAggMAjIBbAAIAAieIhDAAgAPwF8IgagHQgggPgNgLQgUgQgNgXQgJgOgLgjIgjAAIAAB1IhVAAIAAk0IBVAAIAAB0IAkAAQAGgaAOgXQANgWAUgQQAOgLAfgPIAbgGIAcgDQARAAAQADIAJACQALADAKAFQAOAGANAIQAMAJALALQAKALAIANQAIAMAGAPQAFAOADAQQADAQAAAQQAAARgDAPQgDAQgFAOQgGAPgIANQgIAMgLALQgKALgNAJQgMAJgOAGQgPAGgPADIgOACIgUABgAPxCRQgNAGgJAMQgJALgFAPQgFAQAAARQAAARAFAQQAFAPAJALQAKAMANAGQANAHAPAAIALgBQAJgCAJgEQAMgGAKgLQAJgMAFgPQAFgPAAgSQAAgRgFgPQgGgPgJgMQgKgLgMgHIgGgCQgLgEgMAAQgPAAgNAGgACEF4IAAk0ID4AAIAABJIikAAIAAAuICUAAIAABEIiUAAIAAAxICmAAIAABIgAi0F4IAAk0ICdAAQAbAAAVAHQAVAHANAOQAKAKAFAMQAFANAAAQQAAAMgDAMQgEAKgGAJQgGAIgJAHIgTAKQAOAFALAGQAMAHAHAJQAJAJAEAMQAEANAAAPQAAAUgIAQQgIAQgPALQgPALgVAFQgWAGgaAAgAhhE0IBCAAQATAAALgIQAJgHAAgPQAAgMgJgHQgKgIgVAAIhBAAgAhhC/IA1AAQAUAAAKgHQALgHAAgOQAAgMgKgHQgKgHgTAAIg3AAgAssF4IAAk0ID4AAIAABJIikAAIAAAuICUAAIAABEIiUAAIAAAxICmAAIAABIgAu3F4IAAixIhPB5IgBAAIhPh4IAACwIhTAAIAAk0IBaAAIBJB3IBKh3IBaAAIAAE0gAg/g9IAAg+IikAAIgFA+IhNAAIAAiJIAbAAIAOgqQAGgXAEgZQAEgaACghIAChUIDqAAIAADpIAhAAIgKCJgAiolhQgDA+gEAaQgFAggMAjIBbAAIAAieIhDAAgAs1h4QgQgDgQgGQgOgGgOgJQgNgIgLgLQgLgLgJgNQgJgNgGgOQgGgPgDgPQgDgQAAgRQAAgQADgQQADgPAHgPQAGgOAJgNQAIgNALgLQAMgLANgJQANgIAPgGQAPgGARgEQARgDARAAQASAAARADQAQADAPAHQAPAGANAIQAOAJALALQALALAIAMQAJANAGAOQAGAPAEAQQADAQAAAQQAAARgDAPQgEAQgGAPQgGAOgJANQgJANgLAKQgLALgNAJQgOAJgPAGQgPAGgQADQgRADgSAAQgRAAgRgDgAsylhQgPAGgKAMQgKALgGAPQgGAPAAARQAAARAGAPQAGAPAKALQALAMAOAHQAPAGARAAQARAAAPgGQAOgHALgLQAKgMAGgPQAGgPAAgRQAAgQgGgQQgGgOgKgMQgLgMgOgGQgPgHgSAAQgRAAgOAHgAKyh7IAAk0IBVAAIAABhIAvAAQAcAAAXAHQAYAGARANQARAOAKATQAEAKADALQACAMAAANQAAAYgJAUQgIAUgRAOQgQAOgWAHQgYAHgcAAgAMHjDIAtAAQAVAAAMgJQAMgJAAgSQAAgRgMgJQgMgKgVAAIgtAAgAHbh7IAAjpIhcAAIAAhLIEOAAIAABLIhcAAIAADpgAEXh7IgXg3Ih2AAIgWA3IhaAAICDk2IBSAAICDE2gADoj0IgjhYIgiBYIBFAAgAn1h7IAAjpIhcAAIAAhLIEOAAIAABLIhcAAIAADpg");
	this.shape.setTransform(119.5,43.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,239,87.7);


(lib.Символ57 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAqBRIAAgbIhGAAIgDAbIghAAIAAg7IAMAAIAGgTIAEgSQACgMAAgOIACglIBkAAIAABkIAPAAIgFA7gAgCgsIgEAmQgCANgFAPIAmAAIAAhDIgbAAgAiRA3QgJgBgHgDIgOgHIgLgKIATgYQAHAHAJAEIAKAEIAMABQAKAAAFgEQAGgDAAgHQgBgFgFgDQgGgDgKAAIgOAAIAAgaIANAAQAKAAAFgDQAFgDgBgGQABgFgFgEQgFgDgHAAQgJAAgKAEQgJAEgHAFIgSgWIALgJIAMgHIAPgFQAIgBAKAAQALAAAJACQAJADAHAFQAHAFADAGQAEAHAAAIQAAAGgCAFIgDAIIgHAGIgIAFIAJAFIAIAGIAFAHQABAFABAGQgBAJgDAIQgEAIgHAFQgHAGgKADQgJADgNAAQgLAAgJgCgAFZA2IAAiEIAmAAIAAArIAUAAQAMAAAKACQALADAHAGQAHAGAFAIIADAJIAAAJQAAALgDAIQgEAJgHAGQgHAGgKADQgKADgMAAgAF/AXIATAAQAJAAAFgEQAFgEABgIQgBgHgFgCQgFgEgJAAIgTAAgAD8A2IAAhjIgoAAIAAghIB2AAIAAAhIgpAAIAABjgABbA2IAAiEIBsAAIAAAgIhHAAIAAAUIBAAAIAAAcIhAAAIAAAVIBIAAIAAAfgAjmA2IgJgXIg0AAIgKAXIgnAAIA5iFIAkAAIA6CFgAj6ACIgPglIgPAlIAeAAgAnKA2IAAiEIA5AAQAOAAAKAEQAKADAIAGQAHAGADAJQAEAMABAIIgCALIgDAKIgFAIIgGAFQgJAGgKADQgLADgMAAIgTAAIAAAmgAmlgLIASAAIAJgBQAEgBADgDQADgCABgDQABgEAAgEQAAgEgBgDQgBgEgDgCQgDgCgEgBQgEgCgFAAIgSAAg");
	this.shape.setTransform(45.9,8.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,91.8,16.4);


(lib.Символ55 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.m3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38,50);


(lib.Символ52 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.m1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,231,349);


(lib.Символ51 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.m2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,185,194);


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


(lib.Символ47 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AGbBzIgQgFIATAzAGbBzIAOAEIBegKAGbBzIASAzAHxCSIAgA3AHGCHIAVAzAHtCMIAfASAHeCNIAVAiAHtCMIBRgBAHVB+IBMgKAHUCOIAiBNAGPBsIAtgKAGwByIAzgWAGpB3IBEAVAGtB7IAYA8An6jUQgFABgFACIAPgJIgFAGIgZAYIAIAAIAIAAIAagcQgJACgIACgAoii9IAPABIgQAOIAAABIAAABQAHgCABAGIAAABIAAgBIAQgUIgYAPIgDACQACgBABAAIABADIAHABIAAAAAobjEQgEADgDAEQgCAAgBACQgBABgBACQgCACgBADQgCADgCADIAIACQgCgIABgFQABgEABgCIAAADIACANIgDADIAAAAIAAAAIgHAUIASAfIABACIAJARIAAgwQgHgMgDgGQgFgBgCgBQgEAAAAgCAo9iyIAPAFQgDAFgCAHIAGAKAo9iyIAKARAoiipIAAAAIAHAxIAAABQAAAAABABAoli+IADABAomirIAEACAo9iyIAigSIAXgNAoqizIAFgLAobh4IgLgzAobinIAAAv");
	this.shape.setTransform(57.4,21.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#663300").ss(1,1,1).p("AnSiKIOlEV");
	this.shape_1.setTransform(50.2,19);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,116.9,45.8);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AijGhQgugMhhhYQhehUhjh0Qhqh5hBhlQhJh0AAg4IABgQQABgDANAAQAUAAAEAPQACAHgBALIEAgBIAJgCIFFAAQAGACAsACIA2AEQA2AAC3gdQBcgPBegRQANgOAegBQARgBAZABQDWhGAVgMQAJALABAaQAABIgeBzQgmCOhAB2Qi0FQkpANg");
	mask.setTransform(77.5,62.3);

	// Слой 1
	this.instance = new lib.tsus();
	this.instance.setTransform(0,14.8,0.516,0.438,0,0,-5.4);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3,20.5,148.9,83.5);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnkHkQjJjJAAkbQAAkbDJjJQDJjJEbAAQEbAADJDJQDJDJAAEbQAAEbjJDJQjJDJkbAAQkbAAjJjJg");
	this.shape.setTransform(68.6,68.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,137.2,137.2);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC3333").ss(6.6,1,1).p("AKuAAQAAEcjJDJQjJDJkcAAQkaAAjJjJQjKjJAAkcQAAkaDKjJQDJjKEaAAQEcAADJDKQDJDJAAEag");
	this.shape.setTransform(68.6,68.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.2,-3.2,143.7,143.7);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hand();
	this.instance.setTransform(0,0,0.705,0.705);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,95.9,109.3);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66CC00").s().p("AA+CtQgEgcgaggQgZgfghgjQgjgjghgRQg/ghgpghQhLg/gBgfQAAgPAKgGQAEgDAEAAQAXARBBBAQBABAANAEQANADBDgiIAggRIAoANIBngBQAHgDANgHIAVAXIBFBGQgFAXhJBCQhJBCgcAUQgMAIgHAAQgLAAgDgRg");
	this.shape.setTransform(27.5,19);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,55,38);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("ADTH4IgUgsQgkhFhEgaIg7AAQgqAEgfAQQgRAJgZARIgqAbQgkAWgGAAQgFAAgbgnIglg1QgkgpgmgaQgcgTgBgCIASgcQAXgiAOgjIAOg3QAGgaAIgIIACgXQgBhQg8gwIgrgeQgSgPgBgPQABgSAQgoQALgcAOgZQAOgaAFgdQACgNADgHQACgJABgHIACgLQgFgEAAgCQAAgMAPAAQAOAACSA/QBPAdAhAdIgMgdQgcgpgIgYIgCgGIg0hVIAAgEQgWgcgBgEQAAgMAHAAIgEgHQgBgUAHgCQgJgPAAgGQAAgSAPAKQANAJAGALIAMARQAKANAEAJIAKAXQAIADAJAJQAkAgAbA7QAPAYAcArIAJAPIAjgaQAugkAZgbQAqg0AXgaQAngqAEATQAHACAOATQARAWAjA0QAfAxAFAKQAKAVAAAgQAAAcgLAaQgFAMgYAsQgLATgmAsIgVAXQgEAMgBANIgCAsIAOASQAFAFAQAXQAQAVAOAAIAFgDQAEgDACAAQAJAAAHAQIAIAVQAMAVAAARQAAARgMAZQgRAjgeAAQgQAAgRgPIACATQAFAcAPALQANAJgBARQAAAMgkBeQgIAVgKAvQgKAjgYAAQgKAAgKgSg");
	this.shape.setTransform(38.2,52.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76.4,104.6);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AjmE3QgZgGAAgSIABgGIgEgJIgFgVIAAgBQgKgDgDgIIgDgOQAAgFAGgHQAIgJAEgJQAEgHgCgIIgEgPQAAgFAHgZIAFgYQAAgPANgSQAMgSAAgJQAAgFgKgQQgKgQAAgVQgGghgOgFQgNgEAAgQQAAgHANgQIALgOQABgEgHgNQgFgMAAgGQAAgHAIgVQAHgVAAgGQABgcgVgJQgTgKgBgbQABgiAOgDQAFgCAGADIAHgBICTgCQBJgOAYAVQALALgDAOQgBANgDAIQgFANgRAIIAAABQAGgBAHADQARgEATgDQBXgMgBAhQAAAKgJAHQADAGgCAHQABARgdAKIABALQAAAKgKAMQgJAMABACQAAAJAaA7QgBALgKAJQgOAKgXACQAAAQAFALQAHAKAAAMQgBAHgOAoIAGATQAEASAAAGQADgCAEABQAMABAUAXQAcAjALAeQANADAUAKQAXAMAWARIAFAEIBHAAQAZAHAAASQgBAIgGAHQgHAIgLAAg");
	this.shape.setTransform(29.2,31.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,58.4,62.4);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,129.3).s().p("AyJXPQnhpoAAtnQAAtmHhppQHipoKnAAQKoAAHhJoQHiJpAANmQAANnniJoQnhJpqoAAQqnAAnippg");
	this.shape.setTransform(164.4,210.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,328.7,420.9);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Aq/CjQgSgDgQgFQgPgGgNgJQgNgIgMgLQgLgLgHgNQgJgNgGgQQgFgPgEgRQgCgSgBgSQABgSADgSQADgRAGgPQAFgPAKgOQAIgNAKgLQALgKANgJQANgIAOgGQAOgGAPgDQAQgCARAAQAYAAApAIQANAFANAGQAMAGAJAJQALAIAHAKQAIAKAGAMIAKAaIAFAdIhjAAQgBgMgEgKQgFgKgHgGQgHgHgKgEQgKgDgMAAQgNAAgMAGQgKAGgIALQgIAMgDARQgEASAAAUQAAATACAOQADAQAGALQAHANAMAGQANAIATAAQAMAAAKgFQAJgDAHgIQAGgHAEgKQAEgJABgMIBkAAIgFAdIgKAaQgHAMgIAKQgIALgKAIIgVAPIgZALQglAJgUAAQgUAAgRgDgAInCeIAAk7IBpAAIAABvIAxAAQAeAAAYAGQAZAHARANQAQANAKASQAEAKACALIADAZIgCAXQgDALgEAKQgKATgQANQgRAMgZAHQgZAGgfAAgAKQBUIAmAAQAVAAALgGQAGgDAEgGQADgGAAgIQAAgKgEgGQgFgGgIgDQgLgFgdAAIgaAAgAE2CeIAAjxIhdAAIAAhKIEiAAIAABKIhdAAIAADxgABFCeIAAhvIgfAAIguBvIhvAAIBBh9QgLgFgLgJQgLgKgIgLQgIgMgFgOQgFgPAAgNQAAgXAIgSQAIgTARgNQAQgOAagHQARgFApgCICZAAIAAE7gAgChLQgMAJAAAQQAAAQANAHQAJAHAaAAIAjAAIAAg/IgrAAQgTAAgJAIgAkNCeIAAiFIhiAAIAACFIhpAAIAAk7IBpAAIAABvIBiAAIAAhvIBnAAIAAE7g");
	this.shape.setTransform(83.6,16.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,167.2,33.4);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlnCjQg2ABgngnQgngnAAg2IAAg/QAAg2AngnQAngnA2AAILPAAQA2AAAnAnQAmAnAAA2IAAA/QAAA2gmAnQgnAng2gBg");
	this.shape.setTransform(49.2,16.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,98.4,32.8);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAAIAxgyIAABkg");
	this.shape.setTransform(2.6,5.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,5.1,10.2);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AjmE3QgZgGAAgSIABgGIgEgJIgFgVIAAgBQgKgDgDgIIgDgOQAAgFAGgHQAIgJAEgJQAEgHgCgIIgEgPQAAgFAHgZIAFgYQAAgPANgSQAMgSAAgJQAAgFgKgQQgKgQAAgVQgGghgOgFQgNgEAAgQQAAgHANgQIALgOQABgEgHgNQgFgMAAgGQAAgHAIgVQAHgVAAgGQABgcgVgJQgTgKgBgbQABgiAOgDQAFgCAGADIAHgBICTgCQBJgOAYAVQALALgDAOQgBANgDAIQgFANgRAIIAAABQAGgBAHADQARgEATgDQBXgMgBAhQAAAKgJAHQADAGgCAHQABARgdAKIABALQAAAKgKAMQgJAMABACQAAAJAaA7QgBALgKAJQgOAKgXACQAAAQAFALQAHAKAAAMQgBAHgOAoIAGATQAEASAAAGQADgCAEABQAMABAUAXQAcAjALAeQANADAUAKQAXAMAWARIAFAEIBHAAQAZAHAAASQgBAIgGAHQgHAIgLAAg");
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
	this.shape.graphics.f("#FF9900").s().p("ADTH4IgUgsQgkhFhEgaIg7AAQgqAEgfAQQgRAJgZARIgqAbQgkAWgGAAQgFAAgbgnIglg1QgkgpgmgaQgcgTgBgCIASgcQAXgiAOgjIAOg3QAGgaAIgIIACgXQgBhQg8gwIgrgeQgSgPgBgPQABgSAQgoQALgcAOgZQAOgaAFgdQACgNADgHQACgJABgHIACgLQgFgEAAgCQAAgMAPAAQAOAACSA/QBPAdAhAdIgMgdQgcgpgIgYIgCgGIg0hVIAAgEQgWgcgBgEQAAgMAHAAIgEgHQgBgUAHgCQgJgPAAgGQAAgSAPAKQANAJAGALIAMARQAKANAEAJIAKAXQAIADAJAJQAkAgAbA7QAPAYAcArIAJAPIAjgaQAugkAZgbQAqg0AXgaQAngqAEATQAHACAOATQARAWAjA0QAfAxAFAKQAKAVAAAgQAAAcgLAaQgFAMgYAsQgLATgmAsIgVAXQgEAMgBANIgCAsIAOASQAFAFAQAXQAQAVAOAAIAFgDQAEgDACAAQAJAAAHAQIAIAVQAMAVAAARQAAARgMAZQgRAjgeAAQgQAAgRgPIACATQAFAcAPALQANAJgBARQAAAMgkBeQgIAVgKAvQgKAjgYAAQgKAAgKgSg");
	this.shape.setTransform(38.2,52.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76.4,104.6);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.tel();
	this.instance.setTransform(0,0,0.651,0.651);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76.9,147.2);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A7aE6Igyg8IhaApIgyhHIhGAeIg8AAQgFgJgHgIQgDgCgEABIgMAGQgJACgKAAQgKAGgEgEQgLgGgHgOQgIgRgNgKQgHgFgKABIg8AUIgegeQgyAYg0ASQhoAmhygLIgKAKQgYAZgfAQIgFgKIgKgUQAAgGgCgCQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABIgHARQgCAFgGAEQgEACgFAAIgKAAQgKgBgDgEQgHgKAAgQQgcAJgEgSIgRhGIgLgzQgPAFgOAHQhuA+hlBNIgyAAQgUgBgQgHQgEgCAAgLQgYgOgnAPQgaAJgegEQgSgBgNgZQgFgEgFAAQgKgBgHAIQgIAIgGAIQgJAMgLAHQgEADgFAAIgehQIgeAxIgKi+QgRAbgLAiQgaBThBA4IhQgKIgogxQgFAAgEABQgfAXghAVQgRAKgUAEQgKgFgEgHQgLgcgIgdQgCgLgFgKIhaBGIgUhQIgKABQgdAMgZAXQgQAOgVAIQgJACgKAAQgFAPgLAIIgOALIAAo8MB/TAAAIAAIiQivgGivgVQguAwhKABQghAEgbgYIhkAAQgKAAgFgEQgFgGAAgJIAAgKQAAgLgFgFQgFgEgKAAIh4AeQgBgsg9ARQjXA6itgfIiqAAIgKhRQgvACgiAlQghAmgugGQgKgBgDgEQgHgKAAgQQAAgPgGgKQgEgEgKgBQgPALgQAHQg+AfhDAFQgbACAHgaQgCgVgjARQghAPggAPQgSAKgUAFIgKAAQgFgBgCgCQgIgHgGgKIgHgLQgCgEAAgGIgKAAQgFAAgCgCIgFgFIgPgPQgDgDAAgFQg2ADglAvQhDBXhIgvIgUhQQgoAPgeAbQh6Boh2g4IhaAfQAIgygmAQQg4AXhAAAIgegeQgZAKgaAGQgYAEgZAAIgKAAIgogxQAEhKhcBJQg0AogegxIgUgpQgUAGgRAKQgrAZgoAdIgyAKIg8iBQgYAhglAYQhAAphLgIIgogVQg5ATg4AlQhnBDhKhJIgLAJQgYAQgbALQgNAEgPAAIgUgxIhiAJQgPgJgQgIIgSgGQgGgCgEgFIgLgUQgTgthIA/QgjAfgsgIIgKgzIhkBaQgPABgNgFQgMgFgHgMQgDgEAAgFQAIhAhLAwQhrBFgugrIgKAAQg3ABg3gGQg4gGg2ABIBGgnIAKgpQgFgEgBAAQgOAKgKAOQkTCPkdhTIgyAeIhQgKIgyAKIg8A8g");
	this.shape.setTransform(407.5,27.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-3.6,815,63);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.h1();
	this.instance.setTransform(0,0,0.651,0.651);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,28.7,119.2);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.shold2();
	this.instance.setTransform(0,0,0.651,0.651);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.3,26.7);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.head();
	this.instance.setTransform(0,0,0.651,0.651);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,50.2,53.4);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.shold1();
	this.instance.setTransform(0,0,0.651,0.651);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.8,33.2);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.h2();
	this.instance.setTransform(0,0,0.651,0.651);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.2,123.1);


(lib.Символ60 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.setTransform(202.8,110.6,1,1,0,0,0,78.4,62.7);

	// Символ 33
	this.instance_1 = new lib.Символ33();
	this.instance_1.setTransform(202.5,73.1,1,1,0,0,0,68.6,68.6);

	// Символ 57
	this.instance_2 = new lib.Символ57();
	this.instance_2.setTransform(202.6,63.5,1.149,1.149,-5,0,0,45.9,8.2);

	// Символ 34
	this.instance_3 = new lib.Символ34();
	this.instance_3.setTransform(202.5,70.8,1,1,0,0,0,68.6,68.6);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(124.4,1.3,156.8,172.1);


(lib.Символ59 = function() {
	this.initialize();

	// Слой 4
	this.instance = new lib.Символ33();
	this.instance.setTransform(60,55,1,1,0,0,0,68.6,68.6);

	// Слой 2
	this.instance_1 = new lib.toos();
	this.instance_1.setTransform(99.4,130.2,0.578,0.405,180);

	this.instance_2 = new lib.toos();
	this.instance_2.setTransform(21.2,-16.5,0.578,0.488);

	// Слой 1
	this.instance_3 = new lib.Символ58();
	this.instance_3.setTransform(61,55.1,0.469,0.469,0,0,0,119.5,39.4);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnkHkQjJjJAAkbQAAkbDJjIQDJjJEbgBQEbABDJDJQDJDIAAEbQAAEbjJDJQjJDKkbAAQkbAAjJjKg");
	this.shape.setTransform(60.5,57.1);

	this.addChild(this.shape,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.8,-16.9,143.7,147.1);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ55();
	this.instance.setTransform(19,25,1,1,0,0,0,19,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:24.9,scaleY:0.93,skewX:-8.3,x:15.6,y:26.9},9).to({regY:25,scaleY:1,skewX:0,x:19,y:25},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38,50);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 47
	this.instance = new lib.Символ47();
	this.instance.setTransform(-56.2,-152.5,1,1,0,0,0,57.4,21.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:-15.6,x:-701.7,y:-184.8},9).to({regX:57.5,scaleX:1,scaleY:1,rotation:-33,x:-1415.2,y:-86.1},9).wait(7).to({regX:57.4,rotation:0,x:-56.2,y:-152.5},0).to({scaleX:1,scaleY:1,rotation:-15.6,x:-701.7,y:-184.8},9).to({regX:57.5,scaleX:1,scaleY:1,rotation:-33,x:-1415.2,y:-86.1},9).wait(25));

	// Символ 47
	this.instance_1 = new lib.Символ47();
	this.instance_1.setTransform(276.6,-59.7,1,1,0,0,0,57.4,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:-15.6,x:-370.4,y:-185.2},9).to({scaleX:1,scaleY:1,rotation:-33,x:-1085.5,y:-189.3},9).wait(31).to({rotation:0,x:276.6,y:-59.7},0).to({scaleX:1,scaleY:1,rotation:-15.6,x:-370.4,y:-185.2},9).to({scaleX:1,scaleY:1,rotation:-33,x:-1085.5,y:-189.3},9).wait(14));

	// Символ 47
	this.instance_2 = new lib.Символ47();
	this.instance_2.setTransform(140.6,-34.1,1,1,0,0,0,57.4,21.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:-15.6,x:-489.4,y:-126.5},9).to({scaleX:1,scaleY:1,rotation:-33,x:-1185.7,y:-93.8},9).to({_off:true},18).wait(13).to({_off:false,rotation:0,x:140.6,y:-34.1},0).to({scaleX:1,scaleY:1,rotation:-15.6,x:-489.4,y:-126.5},9).to({scaleX:1,scaleY:1,rotation:-33,x:-1185.7,y:-93.8},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(218.7,-82.1,115.9,44.8);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ59();
	this.instance.setTransform(70.4,78.4,1,1,0,0,0,61.8,61.8);

	this.instance_1 = new lib.Символ33();
	this.instance_1.setTransform(68.6,71.5,1.105,1.105,0,0,0,68.6,68.6);

	this.instance_2 = new lib.toos();
	this.instance_2.setTransform(112.1,155.2,0.639,0.711,180);

	this.instance_3 = new lib.toos();
	this.instance_3.setTransform(25.7,-12.5,0.639,0.725);

	this.instance_4 = new lib.Символ58();
	this.instance_4.setTransform(69.7,71.8,0.518,0.367,0,0,0,119.5,39.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoXIYQjejfAAk5QAAk5DejeQDfjeE4AAQE6AADeDeQDeDeAAE5QAAE5jeDfQjeDek6AAQk4AAjfjeg");
	this.shape.setTransform(69.1,73.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,-0.3,143.7,147);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ60();
	this.instance.setTransform(-65.5,59.7,1,1,0,0,0,61.8,61.8);

	this.instance_1 = new lib.Символ35();
	this.instance_1.setTransform(78,128.9,0.945,0.626,0,0,0,78.4,62.8);

	this.instance_2 = new lib.Символ33();
	this.instance_2.setTransform(75,70.7,1.067,1.067,0,0,0,68.5,68.6);

	this.instance_3 = new lib.Символ57();
	this.instance_3.setTransform(75.3,71.1,1.226,1.226,-5,0,0,45.9,8.2);

	this.instance_4 = new lib.Символ34();
	this.instance_4.setTransform(75,68.2,1.067,1.067,0,0,0,68.5,68.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-0.9,156.8,172.1);


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
	this.shape.graphics.f().s("#CC3333").ss(2,1,1).p("ABjAAQAAApgdAdQgdAdgpAAQgoAAgdgdQgdgdAAgpQAAgoAdgdQAdgdAoAAQApAAAdAdQAdAdAAAog");
	this.shape.setTransform(49.4,53.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(11));

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.setTransform(123.2,117,1,1,0,0,0,48,54.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.88,scaleY:0.88},4).to({scaleX:1,scaleY:1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(38.4,42.1,132.7,129.6);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(164.3,210.4,1,1,0,0,0,164.3,210.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:663,y:-1083.9},54).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,328.7,420.9);


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


(lib.Символ56 = function() {
	this.initialize();

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(427.8,18.1);

	// Слой 3
	this.instance = new lib.Символ22();
	this.instance.setTransform(-223.4,-30,1,1,70.5,0,0,164.3,210.4);

	this.instance.mask = mask;

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF3B12","#FF826E","#FFCEB5","#FF6666","#FFFFFF","#FFFFFF"],[0,0.514,0.545,1,1,1],0,20.9,0,-20.9).s().p("EhEmADRIAAmhMCJNAAAIAAGhg");
	this.shape.setTransform(426.6,17.6);

	this.shape.mask = mask;

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-2.4,855.7,40.9);


(lib.Символ54 = function() {
	this.initialize();

	// Символ 50
	this.instance = new lib.Символ50();
	this.instance.setTransform(166.3,39.7,1,1,0,0,0,19,25);

	// Символ 51
	this.instance_1 = new lib.Символ51();
	this.instance_1.setTransform(92.5,97,1,1,0,0,0,92.5,97);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,185.3,194);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 54
	this.instance = new lib.Символ54();
	this.instance.setTransform(155.3,155.3,1.068,1.068,0,0,0,93,97);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:93.1,scaleX:1.03,scaleY:1.05,rotation:1.5,x:156.4,y:156.8},14,cjs.Ease.get(-1)).to({regX:93,scaleX:1,scaleY:1.04,rotation:3.5,x:157.6,y:158.5},15,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.05,rotation:1.6,x:156.5,y:156.9},15,cjs.Ease.get(-1)).to({scaleX:1.06,scaleY:1.07,rotation:0,x:155.4,y:155.6},10,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07,x:155.3,y:155.3},5).wait(1));

	// Символ 52
	this.instance_1 = new lib.Символ52();
	this.instance_1.setTransform(114.5,174.5,1,1,0,0,0,115.5,174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:0.6,x:116.7},14,cjs.Ease.get(-1)).to({skewX:1.5,x:119},15,cjs.Ease.get(1)).to({skewX:0.6,x:116.8},15,cjs.Ease.get(-1)).to({skewX:0,x:114.5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,254.8,349);


(lib.Символ40 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.setTransform(60.5,64.6,0.882,0.882,0,0,0,68.5,73.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.6,-11,140.3,148);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.setTransform(38.9,75.2,0.882,0.882,0,0,0,44.1,85.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.6,-5.2,138.4,156.3);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ25();
	this.instance.setTransform(110.9,21.3,0.349,0.349,0,0,0,83.6,16.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.Символ24();
	this.instance_1.setTransform(109.7,21.8,1,1,0,0,0,49.2,16.4);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.Символ23();
	this.instance_2.setTransform(58.2,21.4,2.412,1,0,0,0,2.6,5.1);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(3));

	// Слой 1
	this.instance_3 = new lib.Символ17();
	this.instance_3.setTransform(29.2,31.2,1,1,0,0,0,29.2,31.2);
	this.instance_3.alpha = 0.738;

	this.instance_4 = new lib.Символ27();
	this.instance_4.setTransform(29.2,31.2,1,1,0,0,0,29.2,31.2);
	this.instance_4.alpha = 0.211;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.4,62.4);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ25();
	this.instance.setTransform(135.8,22.9,0.349,0.349,0,0,0,83.6,16.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.Символ24();
	this.instance_1.setTransform(134.6,23.5,1,1,0,0,0,49.2,16.4);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.Символ23();
	this.instance_2.setTransform(83.1,23,2.412,1,0,0,0,2.6,5.1);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[]},1).wait(2));

	// Слой 1
	this.instance_3 = new lib.Символ15();
	this.instance_3.setTransform(32.2,19.2,1,1,0,0,0,32.2,19.2);
	this.instance_3.alpha = 0.738;

	this.instance_4 = new lib.Символ29();
	this.instance_4.setTransform(28.1,19.1,1,1,0,0,0,28.1,19.1);
	this.instance_4.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56.3,38.2);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ25();
	this.instance.setTransform(135.4,51.3,0.349,0.349,0,0,0,83.6,16.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.Символ24();
	this.instance_1.setTransform(134.2,51.8,1,1,0,0,0,49.2,16.4);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.Символ23();
	this.instance_2.setTransform(82.7,51.4,2.412,1,0,0,0,2.6,5.1);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[]},1).wait(2));

	// Слой 1
	this.instance_3 = new lib.Символ13();
	this.instance_3.setTransform(38.2,52.2,1,1,0,0,0,38.2,52.2);
	this.instance_3.alpha = 0.738;

	this.instance_4 = new lib.Символ28();
	this.instance_4.setTransform(38.2,52.2,1,1,0,0,0,38.2,52.2);
	this.instance_4.alpha = 0.211;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76.4,104.6);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ20();
	this.instance.setTransform(30.5,20.1,1,1,0,0,0,28.1,19.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ20(), 3);

	// Слой 3
	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(41.2,146.1,1,1,0,0,0,29.2,31.2);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ21(), 3);

	// Слой 1
	this.instance_2 = new lib.leg();
	this.instance_2.setTransform(0,0,0.651,0.651);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,186.2,177.2);


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
p.nominalBounds = new cjs.Rectangle(0,0,183.6,147.2);


(lib.Символ61 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ49();
	this.instance.setTransform(739.6,428.5,0.76,0.76,0,0,0,124.5,174.7);

	// Слой 1
	this.instance_1 = new lib.fon();
	this.instance_1.setTransform(346.1,93.1,1.068,1.068);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(346.1,93.1,747.9,468);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.setTransform(60.5,62.9,1.165,1.165,0,0,0,60.5,62.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.08,scaleY:1.08,y:63},12,cjs.Ease.get(-1)).to({regY:63,scaleX:1,scaleY:1},12,cjs.Ease.get(1)).to({scaleX:1.09,scaleY:1.09},13,cjs.Ease.get(-1)).to({regY:62.9,scaleX:1.17,scaleY:1.17,y:62.9},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-10.8,147.8,151.3);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(65.7,66,1,1,0,0,0,65.7,66);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.08,scaleY:1.08},11,cjs.Ease.get(-1)).to({regX:65.8,regY:66.1,scaleX:1.17,scaleY:1.17,x:65.8,y:66.1},13,cjs.Ease.get(1)).to({scaleX:1.09,scaleY:1.09},12,cjs.Ease.get(-1)).to({regX:65.7,regY:66,scaleX:1,scaleY:1,x:65.7,y:66},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.6,-0.8,138.4,151.9);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ41();
	this.instance.setTransform(245.8,82,0.782,0.782,0,0,0,60.5,63);

	this.instance_1 = new lib.Символ39();
	this.instance_1.setTransform(-83.9,89.8,0.782,0.782,0,0,0,39,73);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(60));

	// Символ 4
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(47.9,26.7,1,1,0,0,0,25.1,26.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:49.1},29,cjs.Ease.get(-1)).to({x:47.9},30).wait(1));

	// Символ 8
	this.instance_3 = new lib.Символ8();
	this.instance_3.setTransform(50.7,231.8,1,1.001,0,-1.9,0,35.5,87.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:35.6,scaleY:1,skewX:-0.3,x:53.3},14,cjs.Ease.get(-1)).to({regX:35.5,skewX:1.4,x:56},15,cjs.Ease.get(1)).to({skewX:-0.3,x:53.4},15,cjs.Ease.get(-1)).to({scaleY:1,skewX:-1.9,x:50.7},15,cjs.Ease.get(1)).wait(1));

	// Символ 7
	this.instance_4 = new lib.Символ7();
	this.instance_4.setTransform(51.5,95,1,1.001,0,2.5,0,38.4,73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({skewX:0.3,x:54.2},14,cjs.Ease.get(-1)).to({skewX:-1.9,x:57.1},15,cjs.Ease.get(1)).to({skewX:0.3,x:54.3},15,cjs.Ease.get(-1)).to({skewX:2.5,x:51.5},15,cjs.Ease.get(1)).wait(1));

	// Символ 6
	this.instance_5 = new lib.Символ10();
	this.instance_5.setTransform(86.2,123,1,1,-0.3,0,0,19.6,71);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1,rotation:-0.4,x:86.5,y:123.2},14,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-0.3,x:89.2,y:122.5},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-0.4,x:86.5,y:123.2},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-0.3,x:86.2,y:123},15,cjs.Ease.get(1)).wait(1));

	// Символ 3
	this.instance_6 = new lib.Символ9();
	this.instance_6.setTransform(11.3,125.1,1,1,1,0,0,14.6,72.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:14.7,regY:72.2,rotation:1.1,x:15.2},14,cjs.Ease.get(-1)).to({regX:14.6,rotation:1,x:19.5,y:126.2},15,cjs.Ease.get(1)).to({regX:14.7,rotation:1.1,x:15.2,y:125.1},15,cjs.Ease.get(-1)).to({regX:14.6,regY:72.3,rotation:1,x:11.3},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.5,0,420.2,321.1);


// stage content:



(lib.rasputnica640305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		
		
		
		
		this.cursor = "none";
		this.pric.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.pric.x = stage.mouseX;
			this.pric.y = stage.mouseY;
		}
		
		
		this.button.addEventListener("click", fl_button);
		
		function fl_button() {
			window.open(clickTAG, "_blank");
		}
		
		
		this.girl.addEventListener("click", fl_girl);
		
		function fl_girl() {
			window.open(clickTAG, "_blank");
		}
		
		this.addEventListener("tick", fl_ezda.bind(this));
		
		function fl_ezda() {
		
		this.fon.x = - stage.mouseX / 10;
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 18
	this.pric = new lib.Символ30();
	this.pric.setTransform(-408.3,-41.6,1,1,0,0,0,48,54.6);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

	// Слой 8
	this.instance = new lib.Символ56();
	this.instance.setTransform(321.8,20.9,0.651,0.651,0,0,0,427.9,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.girl = new lib.Символ1();
	this.girl.setTransform(272.9,252.4,1.304,1.304,0,0,0,56,159.8);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Слой 23
	this.button = new lib.Символ48();
	this.button.setTransform(335.9,140,1,1,0,0,0,372.8,185.6);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.Символ48(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(346,28.3,0.928,0.928,0,0,0,407.4,31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 20
	this.fon = new lib.Символ61();
	this.fon.setTransform(-33,-4.9,1,1,0,0,0,350,219);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

	// Слой 22
	this.instance_2 = new lib.Символ46();
	this.instance_2.setTransform(111.3,234,0.743,0.706,0,-7,173,57.5,21.9);

	this.instance_3 = new lib.Символ46();
	this.instance_3.setTransform(1017.4,312.3,1,1,0,0,0,57.4,21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.9,-6.2,1712.5,621.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;