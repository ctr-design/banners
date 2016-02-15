(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#339900",
	manifest: [
		{src:"images/btt.png", id:"btt"},
		{src:"images/butik.png", id:"butik"},
		{src:"images/fooon.jpg", id:"fooon"},
		{src:"images/golova.png", id:"golova"},
		{src:"images/konf.png", id:"konf"},
		{src:"images/la4.png", id:"la4"},
		{src:"images/mes.png", id:"mes"},
		{src:"images/trelo.png", id:"trelo"}
	]
};



// symbols:



(lib.btt = function() {
	this.initialize(img.btt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,347,116);


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


(lib.konf = function() {
	this.initialize(img.konf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,408);


(lib.la4 = function() {
	this.initialize(img.la4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,152);


(lib.mes = function() {
	this.initialize(img.mes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,338,390);


(lib.trelo = function() {
	this.initialize(img.trelo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,240);


(lib.Символ59 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.mes();
	this.instance.setTransform(-169,-195);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-169,-195,338,390);


(lib.Символ57 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.btt();
	this.instance.setTransform(-143.4,-47.9,0.827,0.827);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-143.4,-47.9,286.9,95.9);


(lib.Символ54 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.konf();
	this.instance.setTransform(-400,-204);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-400,-204,800,408);


(lib.Символ53 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099CC").s().p("Eg3IAJiIAAzDMBuRAAAIAATDg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-353,-61,706,122);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak7E7QiCiDAAi4QAAi3CCiDQCEiEC3AAQC5AACCCEQCDCDAAC3QAAC4iDCDQiCCEi5AAQi3AAiEiEg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.6,-44.7,89.4,89.4);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.467,0.976],-69.6,-27.1,69.6,-27.1).s().p("EgJVAsbQhh1lAA7EQAA14A/yVITvAAQA/SVAAV4QAAbEhhVlg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69.6,-284.4,139.2,568.8);


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


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.butik();
	this.instance.setTransform(-94,-27.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-94,-27.5,188,55);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("ATeF8IgBAQMgoCAAAIAArxIBJgmMAnxAAAIAOAGIADLMIhIBFg");
	this.shape.setTransform(3.6,-1.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-128.2,-41.5,263.7,79.3);


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


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ59();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:4.9},14,cjs.Ease.get(-1)).to({y:10},15,cjs.Ease.get(1)).to({y:5},15,cjs.Ease.get(-1)).to({y:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169,-195,338,390);


(lib.Символ56 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.setTransform(0,-206.5);

	this.instance_1 = new lib.Символ54();
	this.instance_1.setTransform(0,206.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-400,-410.5,800,821);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.setTransform(0,-206.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:205.5},89).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-616.9,800,821);


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


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ27();
	this.instance.setTransform(512,-16,1.23,1.527,0,24.6,0);
	this.instance.alpha = 0.441;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.58,skewX:28.1,x:476,y:-15.9},15,cjs.Ease.get(-1)).to({scaleY:1.65,skewX:32.7,x:430.5,y:-16},19,cjs.Ease.get(1)).to({scaleY:1.54,skewX:24.6,x:503.8,y:-15.9},20,cjs.Ease.get(-1)).to({scaleY:1.47,skewX:18.8,x:558.8,y:-16},15,cjs.Ease.get(1)).to({scaleY:1.49,skewX:21.6,x:536.1,y:-15.9},17,cjs.Ease.get(-1)).to({scaleY:1.53,skewX:24.6,x:512,y:-16},18,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(267.2,70.4,1.23,1.512,0,-9.9,0);
	this.instance_1.alpha = 0.441;
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1.45,skewX:1.3,x:251.2,y:24.1},15,cjs.Ease.get(-1)).to({scaleY:1.38,skewX:15.7,x:230.7,y:-34.4},19,cjs.Ease.get(1)).to({scaleY:1.57,skewX:-10,x:345.8,y:25.5},20,cjs.Ease.get(-1)).to({scaleY:1.71,skewX:-29.4,x:432.2,y:70.4},15,cjs.Ease.get(1)).to({scaleY:1.61,skewX:-19.8,x:352.2,y:70.5},17,cjs.Ease.get(-1)).to({scaleY:1.51,skewX:-9.9,x:267.2,y:70.4},18,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ27();
	this.instance_2.setTransform(72,-4.8,1.23,1.273,0,-22,16.2);
	this.instance_2.alpha = 0.441;
	this.instance_2.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.23,scaleY:1.27,skewX:-25.8,skewY:12.1,x:95.7,y:-21.8},15,cjs.Ease.get(-1)).to({scaleX:1.23,scaleY:1.27,skewX:-31,skewY:7.2,x:125.5,y:-43.2},19,cjs.Ease.get(1)).to({scaleX:1.23,scaleY:1.23,skewX:-23.1,skewY:12.3,x:74.7,y:-27.2},20,cjs.Ease.get(-1)).to({scaleX:1.23,scaleY:1.2,skewX:-17.2,skewY:16.2,x:36.7,y:-15},15,cjs.Ease.get(1)).to({scaleX:1.23,scaleY:1.23,skewX:-19.5,skewY:16.1,x:53.9,y:-10},17,cjs.Ease.get(-1)).to({scaleX:1.23,scaleY:1.27,skewX:-22,skewY:16.2,x:72,y:-4.8},18,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145.9,-410.8,924.7,904.8);


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

	// Слой 2
	this.instance = new lib.Символ19();
	this.instance.setTransform(0.8,-1.6,1,1,0,0,0,3.6,-1.9);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Слой 1
	this.instance_1 = new lib.Символ57();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.4,-47.9,286.9,95.9);


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


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(5,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.89,y:1},9,cjs.Ease.get(-1)).to({scaleY:1,y:-31.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-96.8,116,130.6);


(lib.Символ52 = function() {
	this.initialize();

	// Слой 4
	this.instance = new lib.Символ55();
	this.instance.setTransform(404.4,-102.9);

	// Слой 2
	this.instance_1 = new lib.Символ53();
	this.instance_1.setTransform(382.5,0,1.14,2.682);
	this.instance_1.alpha = 0.238;
	this.instance_1.compositeOperation = "lighter";

	// Слой 3
	this.instance_2 = new lib.Символ51();
	this.instance_2.setTransform(286.6,-49.1,1,1,0,0,0,21.2,-23);

	// Слой 1
	this.instance_3 = new lib.fooon();
	this.instance_3.setTransform(-19.8,-163.5,1.006,0.818);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.8,-719.8,824.2,883.4);


// stage content:
(lib.messi640305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		this.fara.alpha=0
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 10;
		
		}
		
		
		document.addEventListener("mouseover", fl_over.bind(this));
		
		function fl_over() {
		
		this.fara.alpha=1
		
		}
		
		document.addEventListener("mouseout", fl_out.bind(this));
		
		function fl_out() {
		
		this.fara.alpha=0
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Символ 20
	this.instance = new lib.Символ20();
	this.instance.setTransform(310,163.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 19
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(310,221);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ17(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 23
	this.instance_2 = new lib.Символ23();
	this.instance_2.setTransform(75.1,270.6,0.828,0.828);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 14
	this.instance_3 = new lib.Символ14();
	this.instance_3.setTransform(310,281.8,0.838,0.838,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Символ 17
	this.instance_4 = new lib.Символ58();
	this.instance_4.setTransform(559.2,233.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Символ 13
	this.instance_5 = new lib.Символ13();
	this.instance_5.setTransform(323,58.1,0.994,0.994);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 4
	this.fara = new lib.Символ28();
	this.fara.setTransform(32.9,144.2);

	this.timeline.addTween(cjs.Tween.get(this.fara).wait(1));

	// Слой 3
	this.fon = new lib.Символ52();
	this.fon.setTransform(19.8,154.5);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(206.9,-412.8,937.3,1203.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;