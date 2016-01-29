(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#339900",
	manifest: [
		{src:"images/butik.png", id:"butik"},
		{src:"images/fooon.jpg", id:"fooon"},
		{src:"images/golova.png", id:"golova"},
		{src:"images/la4.png", id:"la4"},
		{src:"images/log.png", id:"log"},
		{src:"images/messia.png", id:"messia"},
		{src:"images/rubby.png", id:"rubby"},
		{src:"images/trelo.png", id:"trelo"}
	]
};



// symbols:



(lib.butik = function() {
	this.initialize(img.butik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,55);


(lib.fooon = function() {
	this.initialize(img.fooon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,400);


(lib.golova = function() {
	this.initialize(img.golova);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,241);


(lib.la4 = function() {
	this.initialize(img.la4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,152);


(lib.log = function() {
	this.initialize(img.log);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,68);


(lib.messia = function() {
	this.initialize(img.messia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,290,514);


(lib.rubby = function() {
	this.initialize(img.rubby);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,166);


(lib.trelo = function() {
	this.initialize(img.trelo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,240);


(lib.Символ44 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF66").s().p("ARMFHIu9AAIzaAAIgIAAQiIAAhghgQhghgAAiHQAAiGBghgQBghgCIAAIAIAAIO9ABIAAgBITaAAIAIAAQCIAABgBgQBgBgAACGQAACHhgBgQhgBgiIAAIgIAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-143.6,-32.7,287.2,65.5);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARMFHIu9AAIzaAAIgIAAQiIAAhghgQhghgAAiHQAAiGBghgQBghgCIAAIAIAAIO9ABIAAgBITaAAIAIAAQCIAABgBgQBgBgAACGQAACHhgBgQhgBgiIAAIgIAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-143.6,-32.7,287.2,65.5);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak7E7QiCiDAAi4QAAi3CCiDQCEiEC3AAQC5AACCCEQCDCDAAC3QAAC4iDCDQiCCEi5AAQi3AAiEiEg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.6,-44.7,89.4,89.4);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.rubby();
	this.instance.setTransform(-67,-73.2,0.882,0.882);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67,-73.2,134.1,146.4);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.rubby();
	this.instance.setTransform(-28,-30.5,0.369,0.369);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28,-30.5,56,61.2);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.rubby();
	this.instance.setTransform(-40,-43.7,0.526,0.526);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40,-43.7,80,87.4);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.rubby();
	this.instance.setTransform(-67,-73.2,0.882,0.882);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67,-73.2,134.1,146.4);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.rubby();
	this.instance.setTransform(-28,-30.5,0.369,0.369);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28,-30.5,56,61.2);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.trelo();
	this.instance.setTransform(-100.5,-120);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-100.5,-120,201,240);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgnGASaMAAAgkzMBONAAAMAAAAkzg");
	mask.setTransform(37.5,-67.1);

	// Слой 1
	this.instance = new lib.golova();
	this.instance.setTransform(-118.5,-120.5);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118.5,-120.5,237,171.3);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.log();
	this.instance.setTransform(-144,-34);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-144,-34,288,68);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.butik();
	this.instance.setTransform(-94,-27.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-94,-27.5,188,55);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.messia();
	this.instance.setTransform(-122.5,-217.1,0.845,0.845);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-122.5,-217.1,245,434.3);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A9cEFIAAoJMA65AAAIAAIJg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-188.5,-26.1,377.1,52.3);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiCCaQgNgFgJgLQgJgKgFgOQgEgPAAgSIAAihQAAgSAEgPQAFgPAJgJQAJgLANgFQAOgGASAAQARAAAOAGQAOAFAJALQAJAJAFAPQAEAPAAASIAAChQAAASgEAPQgFAOgJAKQgJALgOAFQgOAGgRAAQgSAAgOgGgAh+hzQgKALABAWIAACkQgBAXAKALQAKAMASAAQASAAAKgMQAJgLAAgXIAAikQAAgWgJgLQgKgMgSAAQgSAAgKAMgAE8CdIgLhAIhQAAIgMBAIghAAIA9k5IAyAAIA9E5gAEsA/IgkizIgiCzIBGAAgAB+CdIhDiJIgSAgIAABpIgjAAIAAk5IAjAAIAACYIBUiYIAjAAIhQCPIBSCqgAjvCdIAAkZIhNAAIAAEZIgjAAIAAk5ICTAAIAAE5g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.2,-16,70.5,32.1);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHCdIAAk5IBHAAQAQAAANAEQANAFAJAIQAIAJADANQAEANAAASIAAAPQAAAagIAOQgEAIgHAGQgHAFgLADQAMADAIAGQAIAEAFAJQAFAJACALIADAyQAAASgFAOQgEANgJAKQgJAKgNAEQgOAFgSAAgAgkB9IAkAAQATAAAJgKQAJgKAAgXIAAgcQAAgNgDgJQgCgJgGgFQgFgGgIgCQgIgDgKABIgfAAgAgkgXIAbAAQAUABAKgJQAFgEADgJQADgIAAgMIAAgSQAAgWgIgKQgIgKgRAAIgjAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.2,-15.7,14.5,31.5);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnQCaQgNgFgJgLQgJgKgEgOQgEgPAAgSIAAihQAAgSAEgPQAEgOAJgKQAJgLANgFQANgGASAAQASAAAOAGQANAFAJALQAJAKAEAOQAEAPAAASIAAAcIghAAIAAgeQAAgWgJgLQgJgMgTAAQgSAAgKAMQgJALAAAWIAACkQAAAXAJALQAKAMASAAQATAAAJgMQAJgLAAgXIAAgoIAhAAIAAAnQAAASgEAPQgEAOgJAKQgJALgNAFQgOAGgSAAQgSAAgNgGgAF3CdIAAk5ICBAAIAAAgIheAAIAABrIBNAAIAAAeIhNAAIAABwIBeAAIAAAggAEwCdIAAiNIhOAAIAACNIgjAAIAAk5IAjAAIAACOIBOAAIAAiOIAjAAIAAE5gACBCdIgMhAIhQAAIgMBAIgeAAIA6k5IAzAAIA8E5gABwA/IgkizIgiCzIBGAAgAijCdIAAk5IBFAAQASAAAOAFQANAFAJALQAIAKAFANQAEAPAAASIAAAmQAAASgFAPQgEAMgJAKQgJAJgOAFQgOAFgTAAIgfAAIAAB8gAiAABIAfAAQAUAAAKgIQAJgKAAgWIAAgqQAAgWgIgKQgJgLgTAAIgiAAgAkaCdIAAkZIg6AAIAAggICYAAIAAAgIg6AAIAAEZg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.5,-16,101,32.1);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGdCaQgNgFgJgLQgJgKgEgOQgEgPAAgSIAAihQAAgSAEgPQAEgOAJgKQAJgLANgFQANgGASAAQASAAAOAGQANAFAJALQAJAKAEAOQAEAPAAASIAAAcIghAAIAAgeQAAgWgJgLQgJgMgTAAQgSAAgKAMQgJALAAAWIAACkQAAAXAJALQAKAMASAAQATAAAJgMQAJgLAAgXIAAgoIAhAAIAAAnQAAASgEAPQgEAOgJAKQgJALgNAFQgOAGgSAAQgSAAgNgGgAA4CaQgNgFgJgLQgJgKgEgOQgEgPAAgSIAAgeIAgAAIAAAfQAAAXAJALQAKAMASAAQATAAAJgMQAJgMAAgYIAAgZQAAgWgKgNQgFgFgIgEQgHgDgKAAIgPAAIAAgdIAQAAQASAAALgMQAKgLAAgUIAAgPQAAgYgJgMQgJgMgTAAQgSAAgKAMQgJALAAAWIAAAVIggAAIAAgTQAAgSAEgPQAEgOAJgLQAJgKANgFQANgGASAAQASAAAOAGQANAFAJALQAIAKAFAOQAEAPAAASIAAAIIgCAWQgDALgEAIQgFAIgIAHQgHAGgJADQAJADAIAFQAHAGAFAJQAJAQAAAYIAAAZQAAASgEAPQgFAOgIAKQgJALgNAFQgOAGgSAAQgSAAgNgGgAE1CdIAAj4IhQD4IglAAIAAk5IAfAAIAADpIBPjpIAnAAIAAE5gAgvCdIAAj4IhQD4IglAAIAAk5IAfAAIAADpIBPjpIAnAAIAAE5gAlKCdIAAk5IBFAAQASAAAOAFQANAFAJALQAIAKAEANQAEAPAAASIAAAmQAAASgEAPQgFAMgJAKQgJAJgOAFQgNAFgTAAIgfAAIAAB8gAknABIAfAAQAUAAAJgIQAKgKAAgWIAAgqQAAgWgJgKQgJgLgSAAIgiAAgAmJCdIhEiJIgSAgIAABpIgjAAIAAk5IAjAAIAACYIBUiYIAjAAIhQCPIBTCqg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.5,-16,103.2,32.1);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEmCdIAAiGIgYAAQgMAAgIACQgJACgFAGQgGAFgDAJQgDAJAAAOIAAAxQAAAZgGANIgkAAQAHgMAAgaIAChIQACgLAFgIQAEgJAIgFQAHgHALgCQgKgEgHgDQgIgGgEgIQgFgJgCgKIgDgxQAAgSAEgNQAEgOAJgIQAIgKAOgFQANgEASAAIBHAAIAAE5gADohxQgIALAAAVIAAAeQAAANADAJQADAIAGAEQAKAKAWgBIAaAAIAAh0IgiAAQgTAAgJALgAAJCdIAAk5ICEAAIAAAgIhiAAIAABiIAlAAQATAAAOAEQANAFAKAJQAJAIAFANQAFAOAAATIAAAiQAAATgFAOQgEAOgJAKQgJAKgOAFQgNAFgTAAgAArB9IAnAAQATAAAJgKQAJgKAAgXIAAgmQAAgWgKgKQgJgJgUAAIglAAgAiYCdIAAk5ICCAAIAAAgIhfAAIAABrIBNAAIAAAeIhNAAIAABwIBfAAIAAAggAkPCdIAAkZIg6AAIAAggICYAAIAAAgIg6AAIAAEZg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33,-15.7,66.1,31.5);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACJCdIgMhAIhQAAIgLBAIghAAIA8k5IAzAAIA8E5gAB4A/IgkizIgiCzIBGAAgAg7CdIAAiNIhNAAIAACNIgjAAIAAk5IAjAAIAACOIBNAAIAAiOIAjAAIAAE5g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.3,-15.7,34.6,31.5);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhuCaQgOgFgJgLQgJgKgEgOQgEgPgBgSIAAihQABgSAEgPQAEgPAJgJQAJgLAOgFQANgGASAAQASAAAOAGQANAFAJALQAJAJAGAPQADAPAAASIAAChQAAASgDAPQgGAOgJAKQgJALgNAFQgOAGgSAAQgSAAgNgGgAhrhzQgJALAAAWIAACkQAAAXAJALQAKAMASAAQATAAAJgMQAKgLgBgXIAAikQABgWgKgLQgJgMgTAAQgSAAgKAMgAJQCdIAAkZIg7AAIAAggICYAAIAAAgIg6AAIAAEZgAF9CdIAAk5ICCAAIAAAgIhfAAIAABrIBOAAIAAAeIhOAAIAABwIBfAAIAAAggAE/CdIgMhAIhQAAIgLBAIghAAIA8k5IAzAAIA8E5gAEvA/IgkizIgjCzIBHAAgABJCdIAAkZIg6AAIAAggICYAAIAAAgIg7AAIAAEZgAlICdIAAk5ICFAAIAAAgIhiAAIAABiIAlAAQASAAAOAEQAOAFAKAJQAJAIAEANQAFAOABATIAAAiQAAATgFAOQgFAOgIAKQgJAKgOAFQgOAFgSAAgAklB9IAnAAQATAAAJgKQAJgKAAgXIAAgmQAAgWgKgKQgJgJgUAAIglAAgAmHCdIgMhAIhPAAIgMBAIghAAIA8k5IA0AAIA8E5gAmXA/IgkizIgiCzIBGAAgAqsCdIAAk5IBFAAQASAAAOAFQANAFAJALQAIAKAFANQADAPAAASIAAAmQABASgFAPQgEAMgKAKQgIAJgOAFQgOAFgTAAIgfAAIAAB8gAqJABIAfAAQAUAAAJgIQAKgKAAgWIAAgqQAAgWgIgKQgKgLgSAAIgiAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68.5,-16,137.1,32.1);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AChCaQgNgFgKgLQgIgKgFgOQgDgPAAgSIAAihQAAgSADgPQAFgOAIgKQAKgLANgFQANgGASAAQASAAAOAGQANAFAIALQAJAKAFAOQAEAPAAASIAAAcIghAAIAAgeQAAgWgJgLQgKgMgSAAQgSAAgKAMQgJALAAAWIAACkQAAAXAJALQAKAMASAAQASAAAKgMQAJgLAAgXIAAgoIAhAAIAAAnQAAASgEAPQgFAOgJAKQgIALgNAFQgOAGgSAAQgSAAgNgGgAgICaQgNgFgKgLQgIgKgFgOQgDgPAAgSIAAihQAAgSADgPQAFgOAIgKQAKgLANgFQALgGASAAQASAAAOAGQANAFAIALQAJAKAFAOQAEAPAAASIAAAcIghAAIAAgeQAAgWgJgLQgKgMgSAAQgSAAgIAMQgJALAAAWIAACkQAAAXAJALQAIAMASAAQASAAAKgMQAJgLAAgXIAAgoIAhAAIAAAnQAAASgEAPQgFAOgJAKQgIALgNAFQgOAGgSAAQgSAAgLgGgAGcCdIAAj4IhQD4IglAAIAAk5IAfAAIAADpIBPjpIAmAAIAAE5gAjPCdIAAk5ICBAAIAAAgIheAAIAABrIBNAAIAAAeIhNAAIAABwIBeAAIAAAggAkUCdIAAj8IgyD7IghAAIg1j4IAAD5IgeAAIAAk5IAwAAIA1D5IAxj5IAyAAIAAE5g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.4,-16,88.8,32.1);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvFC5QgNgFgJgLQgIgKgFgPQgEgOAAgSIAAgfIAhAAIAAAgQAAAWAJAMQAJAMATAAQATAAAJgMQAJgMAAgYIAAgZQAAgXgLgMQgFgGgHgDQgIgDgKAAIgPAAIAAgfIARAAQASAAAKgKQALgLAAgUIAAgPQAAgYgJgMQgJgNgTAAQgTAAgJANQgJALAAAWIAAAVIghAAIAAgUQAAgSAFgOQAEgPAIgKQAJgKANgGQAOgFASAAQASAAANAFQANAGAJAKQAJALAEAOQAFAPAAASIAAAIIgDAWQgCALgFAIQgFAGgHAHQgHAGgKADQAKADAHAHQAHAGAFAIQAKARAAAYIAAAZQAAASgFAOQgEAPgJAKQgJALgNAFQgNAGgSAAQgSAAgOgGgAPNC8IAAj5IhQD5IglAAIAAk5IAfAAIAADpIBPjpIAnAAIAAE5gAMaC8IgMhAIhQAAIgMBAIggAAIA8k5IAzAAIA8E5gAMJBeIgki0IgiC0IBGAAgAHrC8IAAk5IBGAAQATAAANAEQANAEAIAJQAIAJAEANQAEANAAASIAAAOQAAAagIAPQgFAGgHAFQgHAGgKADQALADAIAGQAIAGAFAJQAGAIACALIACAzQAAASgEANQgFAOgIAKQgJAJgOAFQgNAFgTAAgAIOCcIAlAAQATAAAJgLQAKgKAAgWIAAgcQAAgNgDgJQgDgJgFgFQgFgGgJgCQgIgDgMAAIgeAAgAIOAGIAbAAQAWAAAJgGQAGgFADgIQACgIAAgMIAAgTQAAgVgIgKQgIgKgTAAIgiAAgAGlC8IAAk5IAiAAIAAE5gAD8C8IAAk5IAjAAIAAB8IAfAAQATAAANADQAOAFAJAJQAJAKAFAOQAEAOAAATIAAAmQAAASgEAOQgEAOgJAKQgIAKgOAFQgNAGgSAAgAEfCcIAiAAQASAAAJgLQAJgKAAgWIAAgqQAAgXgKgKQgJgKgUAAIgfAAgACFC8IAAkZIg6AAIAAggICXAAIAAAgIg6AAIAAEZgAAWC8IgMhAIhNAAIgMBAIghAAIA8k5IAzAAIA7E5gAAGBeIgii0IgjC0IBFAAgAkaC8IAAk5ICEAAIAAAgIhiAAIAABgIAlAAQATAAAOAEQANAFAKAJQAJAJAFAOQAFAOAAATIAAAiQAAATgFAOQgEAOgJAKQgJAKgOAFQgNAFgTAAgAj4CcIAnAAQATAAAJgKQAJgLAAgWIAAgnQAAgWgKgJQgJgJgUAAIglAAgAlZC8IgMhAIhQAAIgMBAIggAAIA8k5IAzAAIA8E5gAlqBeIgki0IgiC0IBGAAgAp/C8IAAk5IBFAAQASAAAOAFQANAFAJAKQAIAKAFAOQAEAPAAASIAAAmQAAAQgFAPQgEAOgJAJQgJAKgOAFQgOAFgTAAIgfAAIAAB8gApcAgIAfAAQAUAAAKgKQAJgKAAgUIAAgqQAAgWgIgKQgJgLgTAAIgiAAgAq9C8IgMhAIhQAAIgMBAIggAAIA8k5IAzAAIA8E5gArOBeIgki0IgiC0IBGAAgAOQiVQgJgDgGgGQgGgFgEgIQgDgJAAgKIAWAAQABAMAHAGQAGAFAMAAQAMAAAHgFQAHgGABgMIAWAAQAAAKgDAJQgEAIgGAFQgGAGgJADQgKADgLAAQgLAAgJgDg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-100.5,-19.1,201.1,38.3);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACJCdIgMhAIhQAAIgLBAIghAAIA8k5IAzAAIA8E5gAB4A/IgkizIgiCzIBGAAgAg7CdIAAiNIhNAAIAACNIgjAAIAAk5IAjAAIAACOIBNAAIAAiOIAjAAIAAE5g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.3,-15.7,34.6,31.5);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhlCaQgOgFgJgLQgJgKgEgOQgEgPgBgSIAAihQABgSAEgPQAEgPAJgJQAJgLAOgFQANgGASAAQASAAAOAGQANAFAJALQAJAJAGAPQABAPAAASIAAChQAAASgBAPQgGAOgJAKQgJALgNAFQgOAGgSAAQgSAAgNgGgAhihzQgJALAAAWIAACkQAAAXAJALQAKAMASAAQATAAAJgMQAKgLgBgXIAAikQABgWgKgLQgJgMgTAAQgSAAgKAMgAnJCaQgNgFgJgLQgJgKgEgOQgEgPAAgSIAAihQAAgSAEgPQAEgOAJgKQAJgLANgFQANgGATAAQASAAANAGQANAFAJALQAJAKAEAOQAFAPgBASIAAAcIghAAIAAgeQAAgWgIgLQgKgMgSAAQgTAAgJAMQgJALAAAWIAACkQAAAXAJALQAJAMATAAQASAAAKgMQAIgLAAgXIAAgoIAhAAIAAAnQABASgFAPQgEAOgJAKQgJALgNAFQgNAGgSAAQgTAAgNgGgAFwCdIAAk5ICBAAIAAAgIheAAIAABrIBMAAIAAAeIhMAAIAABwIBeAAIAAAggAD5CdIAAkZIg7AAIAAggICYAAIAAAgIg6AAIAAEZgAAiCdIAAk5IBFAAQASAAAOAFQANAFAJALQAIAKAFANQADAPAAASIAAAmQABASgFAPQgEAMgKAKQgIAJgOAFQgOAFgTAAIgfAAIAAB8gABFABIAfAAQAUAAAJgIQAKgKAAgWIAAgqQAAgWgIgKQgKgLgSAAIgiAAgAjSCdIAAkZIhNAAIAAEZIgkAAIAAk5ICUAAIAAE5g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.7,-16,99.5,32.1);


(lib.Анимация2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.rubby();
	this.instance.setTransform(-40,-43.7,0.526,0.526);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40,-43.7,80,87.4);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.rubby();
	this.instance.setTransform(-40,-43.7,0.526,0.526);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40,-43.7,80,87.4);


(lib.Символ50 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ8();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33,-15.7,66.1,31.5);


(lib.Символ49 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ7();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.3,-15.7,34.6,31.5);


(lib.Символ48 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68.5,-16,137.1,32.1);


(lib.Символ47 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.4,-16,88.8,32.1);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 50
	this.instance = new lib.Символ50();
	this.instance.setTransform(151,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({scaleX:1.18,scaleY:1.18},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

	// Символ 49
	this.instance_1 = new lib.Символ49();
	this.instance_1.setTransform(86.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({scaleX:1.18,scaleY:1.18},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(6));

	// Символ 48
	this.instance_2 = new lib.Символ48();
	this.instance_2.setTransform(-10.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({scaleX:1.16,scaleY:1.16},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(11));

	// Символ 47
	this.instance_3 = new lib.Символ47();
	this.instance_3.setTransform(-139.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(34).to({scaleX:1.13,scaleY:1.13},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184,-16,368.1,32.1);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 12
	this.instance = new lib.Символ12();
	this.instance.setTransform(-134.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.16,scaleY:1.16},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(51));

	// Символ 11
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(-74.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({scaleX:1.18,scaleY:1.18},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(46));

	// Символ 10
	this.instance_2 = new lib.Символ10();
	this.instance_2.setTransform(1.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({scaleX:1.11,scaleY:1.11},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(41));

	// Символ 9
	this.instance_3 = new lib.Символ9();
	this.instance_3.setTransform(118,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({scaleX:1.1,scaleY:1.1},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.6,-16,339.2,32.1);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({alpha:0.309},0).wait(14).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.6,-32.7,287.2,65.5);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ21();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-144,-34,288,68);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.setTransform(0,500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},45).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:500},45).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-43.7,80,87.4);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({y:425},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-30.5,56,61.2);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({y:510},33).wait(1).to({y:0},0).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67,-73.2,134.1,146.4);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({y:476},50).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-43.7,80,87.4);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({y:459},37).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-30.5,56,61.2);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70).to({y:493},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67,-73.2,134.1,146.4);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 25
	this.instance = new lib.Символ25();
	this.instance.setTransform(24.6,31.7,0.541,0.541);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59));

	// Символ 24
	this.instance_1 = new lib.Символ24();
	this.instance_1.setTransform(-14.8,-31.4,0.541,0.541);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.54,scaleY:0.54,rotation:-32.1,x:-12.8,y:-28},14,cjs.Ease.get(-1)).to({scaleX:0.54,scaleY:0.54,rotation:-66.5,x:-10.8,y:-24.4},15,cjs.Ease.get(1)).to({scaleX:0.54,scaleY:0.54,rotation:-32.1,x:-12.9,y:-27.9},15,cjs.Ease.get(-1)).to({scaleX:0.54,scaleY:0.54,rotation:0,x:-14.8,y:-31.4},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130,-131.5,271.1,228.2);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak7E8QiCiDAAi5QAAi4CCiDQCEiCC3AAQC5AACCCCQCDCEAAC3QAAC5iDCDQiCCCi5AAQi3AAiEiCg");
	mask.setTransform(1.9,-7.2);

	// Слой 1
	this.instance = new lib.la4();
	this.instance.setTransform(-58,-65.3,0.859,0.859);

	this.instance.mask = mask;

	// Слой 3
	this.instance_1 = new lib.Символ38();
	this.instance_1.setTransform(1.9,-7.2);

	this.instance_1.mask = mask;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.8,-51.9,89.4,89.4);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:9.3},12,cjs.Ease.get(-1)).to({y:20},14,cjs.Ease.get(1)).to({y:10.6},17,cjs.Ease.get(-1)).to({y:0},17,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.5,-217.1,245,434.3);


(lib.Символ16 = function() {
	this.initialize();

	// rubby.png
	this.instance = new lib.Символ33();
	this.instance.setTransform(368,28.6);

	// rubby.png
	this.instance_1 = new lib.Символ34();
	this.instance_1.setTransform(258,11);

	// rubby.png
	this.instance_2 = new lib.Символ36();
	this.instance_2.setTransform(60,35);

	// rubby.png
	this.instance_3 = new lib.Символ32();
	this.instance_3.setTransform(482,-6);

	// rubby.png
	this.instance_4 = new lib.Символ35();
	this.instance_4.setTransform(132,-14);

	// rubby.png
	this.instance_5 = new lib.Символ37();
	this.instance_5.setTransform(-20,0);

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60,-87.2,609.1,154.4);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(-77,0);

	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(51.4,3.1);

	this.instance_2 = new lib.Символ2();
	this.instance_2.setTransform(127.8,3.1);

	// Слой 2
	this.instance_3 = new lib.Символ15();
	this.instance_3.setTransform(-0.1,3.5,1.027,1,0,0,0,-0.1,0);
	this.instance_3.alpha = 0.621;

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-193.7,-22.7,387.4,52.3);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.setTransform(-12,33.9);

	this.instance_1 = new lib.Символ45();
	this.instance_1.setTransform(-13.5,-22.9);

	// Слой 2
	this.instance_2 = new lib.Символ15();
	this.instance_2.setTransform(-13,34.1,1.064,1);
	this.instance_2.alpha = 0.621;

	this.instance_3 = new lib.Символ15();
	this.instance_3.setTransform(-15.6,-22.2);
	this.instance_3.alpha = 0.621;

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-213.6,-48.3,401.2,108.6);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// trelo.png
	this.instance = new lib.Символ25();
	this.instance.setTransform(58.7,63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// golova.png
	this.instance_1 = new lib.Символ24();
	this.instance_1.setTransform(-14,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:-32.3,x:-11.9,y:-43.3},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-61.4,x:-10.1,y:-34},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-27.6,x:-12.3,y:-44.7},11,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:-14,y:-53.5},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226.9,-238.5,500.8,421.5);


(lib.Символ51 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(-18.9,0.5,1,1,0,0,0,5.5,-17.5);

	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(-170.6,31.2,0.415,0.415);

	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(112.3,-3.2,0.713,0.713);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-264.8,-173.2,572.3,300.4);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ42();
	this.instance.setTransform(0,-0.8);
	this.instance.alpha = 0.309;
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.Символ44();
	this.instance_1.setTransform(0,-0.8);
	this.instance_1.alpha = 0.398;
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ39();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144,-34,288,68);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(5,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.89,y:1},9,cjs.Ease.get(-1)).to({scaleY:1,y:-31.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-96.8,116,130.6);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ40();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-144,-34,288,68);


// stage content:
(lib.messi640305 = function(mode,startPosition,loop) {
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

	// Символ 20
	this.instance = new lib.Символ20();
	this.instance.setTransform(314,163.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 19
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(322,214);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 23
	this.instance_2 = new lib.Символ23();
	this.instance_2.setTransform(543.1,269.6,0.828,0.828);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 14
	this.instance_3 = new lib.Символ14();
	this.instance_3.setTransform(326.4,281.8,0.838,0.838,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Символ 17
	this.instance_4 = new lib.Символ17();
	this.instance_4.setTransform(105.5,215.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Символ 16
	this.instance_5 = new lib.Символ16();
	this.instance_5.setTransform(88.1,-78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Символ 13
	this.instance_6 = new lib.Символ13();
	this.instance_6.setTransform(345.1,58.1,0.994,0.994);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Символ 51
	this.instance_7 = new lib.Символ51();
	this.instance_7.setTransform(465.9,92.9,1,1,0,0,0,21.2,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 3
	this.instance_8 = new lib.fooon();
	this.instance_8.setTransform(-7,-9,0.818,0.818);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(303,-13.2,769.2,598);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;