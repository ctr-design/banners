(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/backgr.jpg", id:"backgr"},
		{src:"images/foot.png", id:"foot"},
		{src:"images/girl.png", id:"girl"},
		{src:"images/hand.png", id:"hand"},
		{src:"images/leg.png", id:"leg"},
		{src:"images/shup1.png", id:"shup1"},
		{src:"images/shup2.png", id:"shup2"},
		{src:"images/trusy.png", id:"trusy"}
	]
};



// symbols:



(lib.backgr = function() {
	this.initialize(img.backgr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.foot = function() {
	this.initialize(img.foot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,51);


(lib.girl = function() {
	this.initialize(img.girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,268);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,19);


(lib.leg = function() {
	this.initialize(img.leg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,34);


(lib.shup1 = function() {
	this.initialize(img.shup1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,52);


(lib.shup2 = function() {
	this.initialize(img.shup2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,45);


(lib.trusy = function() {
	this.initialize(img.trusy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,65);


(lib.Символ53 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADhAfIgBg/IAQABIACATIAWgCQAIABAEAFQADAFAAAGIAAAIQAAALgEAFQgFAGgIAAgAEDAAIgbAAIAAAGIAaACQABAAAAAAQABAAABgBQAAAAAAAAQABAAAAgBQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIgBgDIgCAAIgBAAgAC2gHIgPABIgEgXIA1gDIgBAZIgSABIAAAmIgMABgAB6AgQgKgBgFgEQgFgEAAgJIAAgCQAAgHAGgEIAHgBQADgBAFAAIATABQADAAADAAQAAAAAAAAQABABAAAAQABABAAAAQAAABABAAIAAgDQAAgEgGgBIgnACIABgYIAggBQAKgBAFAGQAEAFABAMIABAbQAAAHABADIgCAAQgIAAgCgEQgCADgDABQgCACgDAAgACUARIADgBIAAgDIAAgDQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgZgBQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIgBAEQAAAEAEAAgAhWgeIAkgCQAJAAAFAGQADAFAAALIABAIQAAAGgEAFQgEAFgHABIgXgCIgCATIgPABgAg2gGIgZABIAAAFIAaABQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAAAIACgCQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgCgBIgCAAgAjGAgQgKgBgFgEQgFgEAAgJIAAgCQABgHAFgEIAGgBQAEgBAFAAIATABQADAAADAAQAAAAAAAAQABABAAAAQABABAAAAQAAABAAAAIABgDQAAgEgGgBIgnACIAAgYIAhgBQALgBAEAGQAFAFAAAMIAAAbQAAAHACADIgCAAQgIAAgCgEQgBADgEABQgBACgEAAgAisARIACgBIABgDIgBgDQAAgBAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgagBIgBABIgBAEQgBAEAFAAgAkVgeIAkgCQAJAAAEAGQAEAFAAALIABAIQAAAGgEAFQgEAFgIABIgWgCIgBATIgRABgAj1gGIgZABIAAAFIAbABIACgBIABgCIgBgDIgDgBIgBAAgAAjAgIAOgPIAegBIABgBIABgDQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAgBAAIgggBIgBgJIAYAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBIgCgBIgBAAIgaABIgJgYIArAAQAIAAADAEIACAFIACAHQgBAMgFACIAEAEQADADAAAEQAAAJgFAFIgGAFQgDACgEAAIgqgBgAibAgIAOgPIAegBIACgBIABgDQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAAAgBAAIgggBIgBgJIAZAAIACAAQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIgBgDIgBgBIgbABIgKgYIArAAQAIAAAEAEIACAFIABAHQAAAMgGACIAFAEQABADAAAEQABAJgFAFIgGAFQgEACgEAAIgpgBgAgCAfQgMgBgFgEQgDgDgCgDQgBgEAAgFIgCgUIAAgDQAAgRAVgBIAQAAQAUAAgBAXQABATgWgBIgQgBIABAGQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAIAegBIgCAPgAgQgEQgBACAAACIAAAAIAAABIAYAAQAFAAgBgCIAAgEIgDgBIgTAAQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBABg");
	this.shape.setTransform(28,3.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,56,6.8);


(lib.Символ52 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWAOIgTAPIACAUIgMAAIgMhdIAigDIABArIAfgtIAfADIgpAuIAkAvIgfAFgAotAOIgTAPIACAUIgPAAIgMhdIAkgDIABArIAggtIAeADIgpAuIAkAvIgfAFgAk0AaIArABIgBgPIgMgBIgHABQgIAAgHgGQgEgDgDgDQgCgDgBgEIgDgsIAaAAIAAAuIAUgDIgDgmIAdACIgGA/IABAGQAAAIgFAHQgEAFgDACQgEACgFAAIgsACgADeAvIgMg7IgPA5IgUACIAdhcIATAAIAPAtIAUgsIAQABIAuBbIglABIgPg6IgKA8gAGxAxIgMhbIAkgEIAEAlIAcAAIAAgkIATABIgIBbIgUADIABgmIgeAAIgDAmgAB0AwQgPgBgIgGQgHgHAAgMIAAgEQABgLAIgGQAEgBAGgBQAFgBAHAAIAdACQAFAAACAAQADACADADIAAgEQAAgHgJgCIg7ADIABgkIAxgCQAQAAAGAIQAIAIAAASIABApQAAAKACAFIgDAAQgLAAgFgHQgCAFgDACQgEADgFAAgACaAaQABAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAIABgFIgBgEQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAgBAAIglgCQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAABIgCAFQAAAHAGgBgAmJAxIgMhbIAkgEIAEAlIAdAAIgBgkIATABIgHBbIgUADIAAgmIgeAAIgDAmgAIJAuIgCheIAXABIAEAcIAggCQAMABAFAIQAHAHAAAKIgBAMQAAAQgHAIQgGAIgNABgAI7AAIgoAAIABAKIAlACQAFAAACgCQACgCgBgDQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgBAAgAiQAuIgCheIAXABIADAcIAhgCQAMABAFAIQAGAHABAKIgBAMQAAAQgGAIQgHAIgNABgAheAAIgoAAIABAKIAlACQAFAAACgCQABgCAAgDQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgBAAgAjRgLIgXABIgFgiIBPgFIgCAnIgbABIAAA5IgSACgAmvAiQgHALgKAAIgZAAQgNAAgGgHQgIgHABgOIAEhAIATgBIgDA6IAoAAIAEg7IAUABIAFBhQgSgFgDgKgAFtAvQgSgBgHgHQgFgEgCgFQgCgGAAgIIgDgeIAAgEQAAgZAggCIAbgBQAcAAAAAjQAAAdgfgBIgcgCQAAAGACADQABADADAAIAvgCIgCAXgAFZgHQgCADAAAEIAAAAIAAACIAngBQAHABgBgFIAAgEQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIghAAQgEAAgCACg");
	this.shape.setTransform(60.2,5.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,120.4,10.6);


(lib.Символ51 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABmAoIg3gDIAAAIIgOgBIACgQIAIgBIAEgwIAAgBQAAgKAEgFQADgGAHAAIAaAAIAGABQALADAAAQIAAABIAFAtIAIAAIAAAWIgPACgAA4AaIAfgCIgDgwIgYAAgAhoAoIg4gDIABAIIgPgBIADgQIAIgBIAEgwIAAgBQAAgKADgFQAEgGAHAAIAaAAIAGABQALADAAAQIAAABIAFAtIAIAAIgBAWIgPACgAiWAaIAfgCIgDgwIgYAAgAhVAUQgEgFgBgKIAAgaQgBgTATgDIAegBQANACACAKIgLATIgEgGIgmgCIACAdIAiAAIAEgEIAMAJQgDAJgLABIgdADQgJAAgFgGgAjWAXQgHAAgFgFQgFgGgCgJIgBgYQABgJAFgFQAFgHAHgBIAeAAQASACgBAVIgBAYQAAAFgCADQgBAEgCACQgCADgDACIgHACgAi9AKIgCgcIggACIgBAaIAjAAgAD1AWIgBhDIARABIACAUIAXgBQAIAAAEAGQAFAFAAAIIgBAHQAAALgEAGQgFAGgJAAgAD8gKIABAIIAaABQAEAAABgBIABgEIgBgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAgADHgSIgQAAIgEgYIA4gDIgBAbIgTABIAAAoIgNABgAAAAXQgKgBgFgEQgGgFAAgJIAAgCQABgGAGgEQACgDAEAAQAEgBAEAAIAUABQADAAACACIAEADIAAgDQAAgGgGgCIgoADIABgaIAggBQALAAAFAFQAFAGABANIAAAcQAAAIACADIgDAAQgIAAgCgFQgCAEgDABQgCACgEAAgAAaAHQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAIABgEIgBgCQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgagCQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAABIgBABQAAAFACAAgAksAWIgChCQAMACACAHQAFgIAHAAIASAAQAJAAAFAFQACADABAEIABAIIgCAuIgOAAIACgoIgcgBIgDAqgACgANQgFAIgHAAIgRAAQgKAAgEgFQgFgFAAgKIADgtIANgBIgCArIAdAAIACgsIAPABIAEBFQgOgEgCgHg");
	this.shape.setTransform(30.3,4.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60.7,9.5);


(lib.Символ50 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABXA6IAFgdIg7ACQgMAAgHgIQgGgJgBgOIABhCIAdABIAABAIAWgCIADg+IAPAAIABBBIAVgBIABg/IAMgBIADBPIAIAAQgDgGAAgJIAEhCIASAAIgCA7IAnAAIAFg9IAUACIAFBhQgSgGgEgKQgHALgKAAIgYAAQgLABgGgFIgbAxgAg3AdQgPgCgIgGQgHgGAAgNIAAgCQABgLAIgGQAEgDAGAAQAFgCAHABIAdABQAFAAACACQADACADAEIAAgFQAAgJgJgCIg7ADIABgkIAxgCQAQAAAGAIQAIAIAAASIAAApQAAALABAEIgBAAQgLAAgFgGQgCAEgDACQgEADgFABgAgRAGQABAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAIABgEIgBgDQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAgBAAIglgCQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAAAABIgCAFQAAAFAGAAgAEzAaIgCheIAYACIADAcIAhgCQALABAGAHQAFAHAAANIAAALQAAAOgHAIQgGAJgNAAgAFlgUIgoABIAAALIAmACQAEAAACgCQACgCAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgBAAgADygeIgXABIgFgjIBPgEIgCAmIgaABIAAA6IgUABgAiTgeIgXABIgEgjIBOgEIgCAmIgbABIAAA6IgTABgAkcAaIgCheIAYACIADAcIAhgCQAMABAFAHQAGAHAAANIgBALQABAOgHAIQgGAJgOAAgAjpgUIgoABIAAALIAmACQAEAAACgCQACgCAAgDQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIAAAAgAjIhCIAXABIgJBbIgNAEgAmDAcIAChbIBAAAQAUAAACATIAAADIAAACQAAARgJAFQAEADAEAEQACAFAAAFIgBAIQgDALgGAFQgHAGgKAAgAluAGIAqgCIABABIABAAQABAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAIABgDQAAAAgBgBQAAgBAAAAQgBgBAAAAQgBAAgBAAIgwAAgAlzgcIABAKIAkABQAIgCAAgEQAAgCgGgEg");
	this.shape.setTransform(38.8,7.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,77.6,14.1);


(lib.Символ49 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEwA6IhOgFIABAMIgUgCIADgXIALAAIAGhFIAAgBQAAgPAFgHQAFgHAKAAIAlgBIAIABQAPAFAAAWIAAACIAIBAIAKgBIAAAgIgVACgADwAmIArgCIgEhGIghAAgABeAlIgTg8IgVA8IgWgBIAehbIAZgFIAlBjgAlBALIArACIgBgOIgNAAIgGAAQgIAAgHgFQgFgDgCgEQgCgEgBgFIgDgrIAagBIgBAuIAVgCIgDgnIAdADIgGA+IABAHQAAAIgFAHQgEAEgEACQgEADgEAAIgsACgACXAiQgKgBgHgHQgHgHgCgOIgCgiQABgMAHgIQAHgKALgBIAqAAQAZACgCAeIgCAjQAAAHgCAFQgBAFgDADQgDAEgEACIgKADgACKgWIgBAlIAxAAIgDgogAmWAiIgMhbIAkgEIAEAmIAdAAIgBglIATABIgIBbIgTADIAAgkIgeABIgDAkgAn3AhIgDheQARADADAKQAHgLAKAAIAZgBQAMAAAHAHQAEAEABAFQACAGAAAHIgDBAIgUAAIACg5IgnAAIgEA8gAiiAgIgChfIAXACIADAcIAhgCQAMABAFAHQAGAHAAANIAAAJQAAAQgHAIQgGAJgNAAgAhwgOIgoABIAAAKIAmACQAEAAACgCQACgCAAgDQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgBAAgAjegZIgXABIgFgiIBPgFIgCAmIgbACIAAA5IgTABgAg1AhIAAgBIAUgUIAogDIABABIABAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBIABgEQAAgBAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAIguAAIgCgNIAlABQABAAACgCQADgBAAgDQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIgDgBIAAgBIgmACIgBgCIgNgiIA+AAQAMAAAFAGQACADABAEQACAFAAAGQAAARgKAGQAFACADAEQADAFAAAEQAAANgHAIQgEAFgFACQgFADgGAAIg7gCgAHhAhIgBgdIgKgBIgSAfIgfgBIAZgbQgeAAgDgVIgBgNQAAghAfABIBAAAIgGBegAGsgQQAAADABACQACACAEABIA5gEIAAgIIg5gCQgHAAAAAGgAFjAgQgRgBgIgHQgFgDgCgGQgCgFAAgIIgDgeIAAgEQAAgaAggBIAbgBQAdAAAAAiQgBAdgfgBIgcgBQAAAFACADQABADADABIAvgCIgCAXgAFPgVQgCACAAAFIABACIAAABIAnAAQAGAAAAgGIgBgFQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIghgBQgEAAgCADg");
	this.shape.setTransform(50.7,6.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,101.5,13.5);


(lib.Символ47 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AhIYeQgeAAgVgVQgVgWAAgdIAAjyQAAgIgOgDQmmg2ktkvQktkvg0mnQgCgNgKAAIj3AAQgdAAgWgVQgUgVgBgeIAAiRQABgdAUgWQAWgVAdAAID5AAQAKAAABgNQAZi8BPirQBPioB8iKQCSikDChoQDFhqDfgeQAWgDAAgOIAAj6QAAgdAVgWQAVgVAeAAICQAAQAeAAAWAVQAUAWAAAdIAAD6QAAAJAJAFIAOADQGhA4EqErQEqErA2GiQABAKAJAAID6AAQAdAAAWAVQAUAWAAAdIAACRQAAAegUAVQgWAVgdAAIj5AAQgJAAAAAJQgzGoktEwQktEwmmA3QgGAAgEADQgHADAAAFIAADyQAAAdgUAWQgWAVgeAAgAvlCWIAAAIQAxFDDmDpQDlDpFBA2QAYAFAAgOIAAgpQAAgdAVgWQAVgVAeAAICQAAQAeAAAWAVQAUAWAAAdIAAApQAAANAVgDQFBg1DnjoQDmjpAylBQADgSgNAAIgkAAQgeAAgVgVQgVgVAAgeIAAiRQAAgdAVgWQAVgVAeAAIAiAAQAJAAABgHQABgEgBgIQg3k9jljjQjljkk8g1QgWgDAAAIIAAAhQAAAegUAVQgWAVgeAAIiQAAQgeAAgVgVQgVgVAAgeIAAghQAAgJgTAEQitAciYBVQiVBThyB/QhgBrg+CBQg/CFgYCRQgBAHAIAAIAmAAQAeAAAWAVQAUAWAAAdIAACRQAAAegUAVQgWAVgeAAIgoAAQgGAAAAAFg");
	this.shape.setTransform(156.6,156.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AmtGuQizizAAj7QAAhvAphpQAohpBLhUQBWhgB3g2QB3g1CAAAQD7AACzCzQCzCzAAD6QAAAbgDAVQgIBygyBnQgyBnhUBOQhVBOhrArQhrAqhzAAQj7AAiyizgAi1mYQhXAnhABIQg4A9gdBNQgdBNgBBSQABC5CDCDQCDCEC4AAQCuAAB/h0QB/h0ASitQACgTAAgYQgBi4iDiDQiDiEi5AAQheAAhXAng");
	this.shape_1.setTransform(156.6,157.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,313.2,313.3);


(lib.Символ45 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D4B4C").s().p("EhpNBERIp3sgQXvq7dstcUAmkgRcAFogCkQnlyBAbwYQAXuiGmscQF0q+KBoTQI7naKfj5QY0pNUXCyQWcDDQ4RnQD9EICbDWQC/EIBmEIQDrJgi5MUQhmGwmMH2QmRH6qUIMQqsIfuCIAQuxIbxbHRUgrhAR+gYZAKjUgjLAPPgS3AJvQk8lsq3tpgEAzXhF2QqOAaqUEBQqREBoHGvQoeHDkWIoQkvJWAxJ3QgRFsBbFYQBbFXC8EaQDCEjEWDFQEkDOFmBTQJ/CVQRoIQJ3k8OSqLQIXl+BhhKQFykZDejsQEXkqBjkWQBylDh4k5QiTl8iykbQjdlekkjvQqUodwnAAQhUAAhXADg");
	this.shape.setTransform(495.7,267.4,0.158,0.169,0,180,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7E7E7").s().p("EiOyAV5Imrm1MEq7gk8MgCkAgsUiW0ALFiIBAAAIi3AAg");
	this.shape_1.setTransform(149.3,174.8,0.158,0.169,0,180,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B4B4B4").s().p("Ehl2AdPUgxigBXgpPgDnIo+pMMErNglDMBOFgIGMAZ5AgBIqMYEQzrAZ93AuMgxoABLUg7hABXgm7AAUQuAAHtSAAUglEAAAgfUgA2g");
	this.shape_2.setTransform(201.9,174.8,0.158,0.169,0,180,0);

	// Слой 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5D4B4C").s().p("EhpNBERIp3sgQXvq7dstcUAmkgRcAFogCkQnlyBAbwYQAXuiGmscQF0q+KBoTQI7naKfj5QY0pNUXCyQWcDDQ4RnQD9EICbDWQC/EIBmEIQDrJgi5MUQhmGwmMH2QmRH6qUIMQqsIfuCIAQuxIbxbHRUgrhAR+gYZAKjUgjLAPPgS3AJvQk8lsq3tpgEAzXhF2QqOAaqUEBQqREBoHGvQoeHDkWIoQkvJWAxJ3QgRFsBbFYQBbFXC8EaQDCEjEWDFQEkDOFmBTQJ/CVQRoIQJ3k8OSqLQIXl+BhhKQFykZDejsQEXkqBjkWQBylDh4k5QiTl8iykbQjdlekkjvQqUodwnAAQhUAAhXADg");
	this.shape_3.setTransform(497.3,88.4,0.158,0.158);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E7E7E7").s().p("EiOyAV5Imrm1MEq7gk8MgCkAgsUiW0ALFiIBAAAIi3AAg");
	this.shape_4.setTransform(150.9,174.9,0.158,0.158);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B4B4B4").s().p("Ehl2AdPUgxigBXgpPgDnIo+pMMErNglDMBOFgIGMAZ5AgBIqMYEQzrAZ93AuMgxoABLUg7hABXgm7AAUQuAAHtSAAUglEAAAgfUgA2g");
	this.shape_5.setTransform(203.5,174.9,0.158,0.158);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.6,0,615,362.2);


(lib.Символ42 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D6D6D").s().p("AkGB9IANgMIA2grIAngZIArgaIAxgXIAygZIAygXIAzgUIC1g5IkVBtIgzAWIgwAYIgtAZIheA/IgUARg");
	this.shape.setTransform(15.1,17.6,0.155,0.155,-135);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6D6D6D").s().p("AhpEWQgJgpgBgnQgCgZACgdQACgoADgUIAGgfIAHggIAKgeIALggQALgcAQggIAQgdIAyhMIASgVIARgUIBBg8IgFAGIgZAZIgfAhIgQAUIgRAWQgPATgRAeIgQAbIgPAcQgQAfgLAdIgLAfIgXBbQgFAZgCAjIgCA1QACAyAFAeIAGAeQgEgLgEgTg");
	this.shape_1.setTransform(14.5,13.3,0.155,0.155,-135,0,0,0.8,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6D6D6D").s().p("AjMEkIAEgoQACgQAHgiIARg7IAYg/QAFgOAKgTIARggIATgfIAqg+IAXgeQAfgmAPgRIAwgwIAugnIAUgSIAUgOIA8grIhhBPIgsApIgvAwIgtA3QgIAJgOAVIgqA9IgTAeIgRAgQgKATgFANIgZA/QgFAMgFARIgIAcIgLAyIgGAnIgDAiQgBgMACgWg");
	this.shape_2.setTransform(15.4,14.2,0.155,0.155,-135);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6D6D6D").s().p("AgwAiIAxgXIAagLIAYgMQAZgPAQgMIAOgLIAKgKIAEgHIABAAIAAgBIATAGIgCAFIgIAJIgMALIgRAMQgQALgcAOIgZAJIgbAMIiQAwg");
	this.shape_3.setTransform(15.6,8.9,0.155,0.155,-135);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6D6D6D").s().p("AhhASIACAAIAGgBIAXgEQAhgGAhgJQAhgJAjgOIAegMIgdAPQgjARgeALQgmAQgcAIIgXAGIgKACg");
	this.shape_4.setTransform(23.1,12.2,0.155,0.155,-135);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#6D6D6D").ss(0.1).p("ABCimQgNASgNATQgcAmgHADQgFADgYABQgbACgKAFQgEABgUALQgMAHgFAAQgHABgMgFQgHgEgGgEQgCgBgDACQgCABgCAEQgFAJAGAKQAHAJAZAFQAUAFALgCQAHgBAEAIQAEAKgEAFQgFAGgQAZQgSAcgCAGQgHANgKAPQgJAOgEADQgFAEAAAFQABAFAFAEQAIAFAIgFQANgJAXgkQAPgXALgTIACgDQABAAABAAQADAAABAGQACAGgDAKQgDAOgLAeQgNAkgIAKQgHAJAGAHQADACAEABQAEABADgCQAGgDAHgLQAIgLAGgOQAEgKAHgaQAHgXACgDQADgFACgBQACgCACABQABACADAKQACALAAAFQgBAUgBARQgCAigDAEQgBACABADQACADAEABQAKAEAEgJQAGgJAEgUQADgRgBgHQgBgGACgOQACgNACgDQABgCAGAEQAHAEADAFQAGAMAJAPQANAXAAAEQABAFAEADQAEAEAEgDQAFgDACgHQACgIgEgHQgDgGgKgRQgJgPgBgDQAAgDgIgPQgIgOAAgCQAAgBAFgEQAEgDAKgHQAWgRAIgNQAJgNABgKQAAgDgDgLQgBgHAVgcQATgaALgJ");
	this.shape_5.setTransform(14.7,16.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2D5B1").s().p("Ag4ShIhhgTQAJhagfjPQghjbglgYQhCgtgLgMQgpgvgchvQgZhjAZitIARhrQAHgqgGgEQgJgGhngfQhogggPgKQgSgMhtgeIiigsQg2gPgagtQgWgnAIgmQAGgfAkgCQAggDAbATQAVAOCgAuQBxAgBSAVQAlAKAvgKQAvgJgDgPQgEgXg0hHQg2hJgfgVQgogbhAhcQhIhogMhHQgNhHA+gcQAYgLAVAFQAVAFAEATQAFAfCPCgICkC0QAUAbA9AlQA7AkAPgCQANgDAAgVQABgMgHgmQgDgThMiJQhWiagZhAQglhagQhTQgQhSAMgmQAHgXAVgRQAVgPAYgBQA8gDAJBOQAIBOBpDgQBXC7AxBTQAiA3AiAYQAgAWANgSQAEgFAEgDQACgDgGgVQgkiLglisQg6kIAThkQANhCA8gKQApgHAaAVQAZAWgFAlQgEAnAVBpQAVBvAgBYQAOApAvDPQAtDEAJA0QAHAuA8ATQA8ATAbgkQAng0BxhLQCIhaBKAMQBMAMATBDQAHAZgFAVQgFAVgNACQgtAHg0ATQhOAcgZAiQgXAegZBTQgqCJgKAcQgYBDhxCBQhyCBgLAfQgRAuAvEtQAXCXAbCNQggATg1AXQhpAshpARQhNAMhJAAQgyAAgygGg");
	this.shape_6.setTransform(14.9,17.1,0.155,0.155,-135);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,31.4,35.6);


(lib.Символ41 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#009966","#00FF99"],[0,1],0,0,0,0,0,14.8).s().p("AhMBoQghgrAAg9QAAg7AhgsQAggrAsAAQAtAAAgArQAhAsgBA7QABA9ghArQggArgtAAQgsAAgggrg");
	this.shape.setTransform(11,14.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22,29.6);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6D6D6D").ss(2).p("AA+ghIh7BD");
	this.shape.setTransform(57.2,92.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6D6D6D").ss(2).p("AgVh0Qg2gEg8AHQh4ANgcA4QgVAqARAhQAOAaAgASQARAJBJgFQBegHAkADQASABCAAWQB4AUAzAA");
	this.shape_1.setTransform(29.6,115);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6D6D6D").ss(2).p("ACKg9Ih2AAQgIAAgXgXQgjghgVgTQhUhLgxAAQhCAAgnAWQgrAZAAAwQAAAoBIArQATALAmAUQAfAPALALQARARBhBHQBeBGAWAWQAQARBwgRQA+gJBygU");
	this.shape_2.setTransform(62.4,113.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#6D6D6D").ss(2).p("AhEljQirB5goB5QgKAfgEAtQgDAigHAFQgaAahvAbQh0AcgZgZQgWgWg/gvIg6gsQg6iBguhKQghg2gygIQgsgHgnAcQgMAIAHA3QAEAmAMAzQAIAgBTCPQBbCeAFAMQAVAxCtA9QC0A/BXgXQBJgSBuhCQB3hGAMgFQAZgJB1hOQB0hNAegLQBLgXD8g0QEtg+B2AA");
	this.shape_3.setTransform(205.3,87.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#6D6D6D").ss(2).p("ACagFQgRAAhNAPQg/AOgIgIQgggVgiggQhBg9hAhaQhLhphOgSQhDgOg6AxQgpAiBcBrQAnAtBXCAQBTB8AGAFQA5A6AbAXQBPBDAoAAQAlAAD2g3QB7gbBygc");
	this.shape_4.setTransform(105,100.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#6D6D6D").ss(2).p("Aq9GEQASgJAXgPQAugfAegeQBChBBPhiQBriDgTgQQgOgPhZAAQicABiQgNQjGgShihkQgngpgOguQgMgrANgiQAPgpAkgRQAngTA6AJQDjAlB4AKQDAASBDgcQBQghCPAAQCigBDKAtQC0AoB6AyQA9AZAYARIAngGQAxgKA4gQQCxg0Cohg");
	this.shape_5.setTransform(153.3,38.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2D5B1").s().p("AtXKXQgUgUhBgwIABABQgzAAh4gUQiCgXgSgBQgkgCheAGQhJAGgRgKQgggSgOgaQgRgjAVgqQAcg3B4gOQA8gGA2AEIAGAEQgGgLAAgMQAAgwArgZQAngWBDAAQAjAAA0AlIB7hEIgRgUQhchrApgiQA2gtA8AIQBHAKBFBUIAMgHQARgJAXgPQAvgfAegeQApgnBChNIADgEQCRiogWgWQgPgPhYAAQicABiQgNQjHgShhhkQgogpgNguQgNgrANgiQAQgpAkgRQAmgTA6AJQDkAlB4AKQDAASBCgcQBRghCOAAQCigBDKAtQC1AoB5AyQA9AZAZARIAmgGQAygKA3gQQCxg0CphgIAZAUQAgAbAgAhQBoBtBHCNQBHCOAwCWQAZBJAKAvQh2AAktA+Qj8A0hLAZQgeAKh0BNQh1BOgbAKQgMAEh3BHQhuBBhJATQhBARh+gjIAKAIQhsAbh1AcQjsA2gnAAQgZAAgogaIANAOQhzAUg9AJQg4AJggAAQghAAgIgJg");
	this.shape_6.setTransform(153.3,67.2);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.5,-9.4,312.2,145.1);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsrGVIj9gOIACAlIhCgFIAMhKIAkgCIAUjmIAAgDQAAgwAQgXQAQgYAfAAIAJAAIBugEQANAAAOAGQAyAQAABFIAAAGIAZDZIAhgDIgBBoIhFAFgAvpBmIgRDuICLgGIgNjpgAJ+DYIg9AxIAGBBIgwgBIgkk1IB0gHIACCJIBliRIBkAIIiECXIB1CgIhlAQgAhwD+ICLAGIgDg0IgpgBQgJACgLAAQgaAAgXgRQgPgLgIgNQgHgNgBgPIgLiMIBTAAIgBCSIBAgGIgKh+IBiAIIgUDSIACAUQgBAbgRAWQgLAPgNAHQgNAIgPAAIiLAGgACTE1QgVgaAAgxIACjeIBfAFIAADQIBIgGIAHjJIAygBIADDTIBFgFIAEjJIAlgFIANE2IkPAHIgCAAQglAAgVgZgAjuFKIjHgDIAFkvIDPAAQBDAAAFA+IAAAOQAAA4gfATQASAHAIAOQAIAOAAAUQAAAPgDAPQgJAkgUARQgVARghAAIgCAAgAlxEAICIgHIADAAIAEAAQAFAAAFgFQAEgGAAgIQAAgMgNAAIibgBgAmCCLIABAgIB2ABQAagDAAgQQAAgHgUgLgAPFFCQg5gDgbgWQgNgLgHgTQgHgSAAgZIgJhpIAAgNQAAhSBogFIBVgEQBgAAgBBxQgBBlhngEIhagEQAAARAGAKQAEAJAKACICZgHIgHBMgAOECPQgGAIAAAPIAAALICAgCQAUACAAgVQgBgLgEgFQgDgEgJAAIhqgCQgNABgGAIgAp0FCQg5gDgagWQgOgLgGgTQgIgSABgZIgJhpIAAgNQAAhSBngFIBWgEQBfAAgBBxQgBBlhmgEIhagEQAAARAFAKQAFAJAJACICZgHIgGBMgAq1CPQgGAIAAAPIABALIB/gCQAUACAAgVQgBgLgEgFQgDgEgIAAIhqgCQgNABgHAIgAF3hwIATkoIDdgaIgUCDIingBIAhDJgACEhvQgigCgWgXQgWgYgJgtIgGh2QAGgnAUgaQAXgeAjgEICJAAQBTAHgFBhIgHB3QgCAWgFARQgFARgIALQgKAMgOAHQgNAHgUACgABZksIgCCAICegBIgLiKgAkvhyIgmjIIg0C/Ig/AGIBgkvIA8AAIAxCQIBAiOIA3ADICSEtIh0AFIg1jDIggDIgAqjhvQgigCgVgXQgWgYgJgtIgGh2QAFgnAUgaQAXgeAjgEICJAAQBTAHgFBhIgHB3QgBAWgFARQgFARgJALQgJAMgOAHQgOAHgTACgArNksIgDCAICfgBIgMiKgAwth0IgKk2QA3AIAKAiQAVgkAggBIBSgBQAqAAAVAYQALALAGASQAFARgBAXIgHDYIhDgBIAHi/Ih+gBIgPDJgANNifQgXAkgfAAIhRABQgqABgWgYQgXgXADgsIAMjYIA+gCIgKDDICCAAIANjHIBBAEIASFBQg8gRgLghg");
	this.shape.setTransform(113,43.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,225.9,87.2);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("ACnDIIgmAAQgJgEAAgEQkdgLhlhEQg8goAAhLQAAgiABgCQAFgMAigdQANgMAQgYQAQgWAIgGIB5gDQATgDBcgkQA+gZAqASQAYAHAXAdQAaAgAQAIQBnA0AVAgQAJANABATIgBAlIACAqQgBAhgLAXQgdBChnAAIgQgBg");
	this.shape.setTransform(32.7,20.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65.5,40.3);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AgfD7IgBgFQACgEAAgCQAAgPgCgIQgDgGgLgUQgFgIgFgQIgHgYQgIgRgBgeQgDgkgDgMIghh1QgHgbAAguQAAgYABgEQADgKAUgUQASgSAHgMQAMgVATgDQAMgBAaAAIAaAAQAIACAAAHQAAAGgJAIQgIAIgNAHQgIAGgGAIQgFAJgEAEQgKAKgDARIgBAaIADAqQAFAlACALQAEARARAaIAbAsQAbA0ALAkQAFAPAbAeQAYAaAAARQAAAJgBACQgCAEgNAIIgdAAIgLgBIgNABIgfAAIgSAKQgLAHgIAAQgKAAgDgFg");
	this.shape.setTransform(12,25.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23.9,51.3);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("ACeByQhxgzgoAAIhDAEIgLALQgJAHgJAAQgSAAgNgkIABgGQACgGAIAAQAHgxhgg5IhEgnQgfgTAAgNQAAgbASAFIAgAQIAoASQAVAJAOAPQAQAQA8AcIBPAnIBJArQAoAWA4AbIBUAkQBCAeAAASQAAAFgDACQgEACgLAAQgKAAhygygAkTiKIACAAIgDgDIgEgCg");
	this.shape.setTransform(30.1,16.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60.2,32.9);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.6)").s().p("ADjBCIABgNIgEgUQgNAFgOAEQgqALhqgMIjJgDIhlgLQgkgFAAgKQAAgHAEgBIgCgEIgBgPQAAgTATgSQALgLAIgEIAAAAQBAgeCbBEQgHAEBIAEQAiACA2gEQgMgUAKgIQAWAJAaAWQAIgXANgFQAigNASAUQAbARAGANIABAAQAEgDAEAKQAHABAAAFQAAACgCAEIgCACIABAUQAAAEgDACIAAAEQAAADgCADQgCAEgFAAQgIAAgDgKIgBgMIABgGQgHAAgCgFIgNAHIADAHQADAKAAARQAAATgKAAQgKAAgBgLg");
	this.shape.setTransform(29.1,7.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,58.2,15.6);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AgPBpIgegZQgfAog2gBIgPAAQgpAJgfgRQgggRgLgaQgDgFgCggIgCgjQAAgxALgTQAdguBeAWQgeAGBigGQBugFAcgKQAbgJAbgFQCCgLAJBTQAJBSgwAhIhCArQgyAWgtAAQgsAAglgWg");
	this.shape.setTransform(26.8,12.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,53.7,25.5);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hand();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,19);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FFCC").s().p("Eg0FAY1MAAAgxpMBoLAAAMAAAAxpg");
	this.shape.setTransform(333.5,159);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,667,318);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.shup2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29,45);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.leg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63,34);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.foot();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65,51);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.backgr();
	this.instance.setTransform(0,0,1.008,1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,645,305);


(lib.Символ28копия = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0.8)").s().p("AgCCCIh/kCIEDAAIh/ECg");
	this.shape.setTransform(22,10.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9,-2.3,26,26);


(lib.frf = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4FA28E").s().p("Ag6AhQgIgLADgNQACgLALgIQA0glAhABQANABAJAKQAJAKgBANQgBAMgKAIQgJAJgNgBQgGABgOAIQgMAHgNAJQgJAGgKAAQgQAAgKgOg");
	this.shape.setTransform(176.9,44.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4FA28E").s().p("AgwAjQgJgKABgNQAAgMAKgJQANgMAQgKQAYgPAVACQANABAJALQAIAKgBANQgBALgKAJQgKAIgNgBQgKACgPAQQgKAJgMAAQgOAAgKgKg");
	this.shape_1.setTransform(188.7,50.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4FA28E").s().p("AgSA7QgNgCgIgMQgHgLACgMQAFgeALgUQARgeAYAAQAOAAAJAKQAJAJAAANQAAAKgFAIQgFAIgJACQgGAMgDATQgCALgJAIQgHAHgMAAg");
	this.shape_2.setTransform(203.1,59.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4FA28E").s().p("AgzAlQgJgJAAgNQABgOAJgHQA2g0AlAQQANAFAFAMQAFAMgFANQgFAIgKAGQgKAFgLgCQgPAHgNAPQgKAIgNAAQgOAAgJgKg");
	this.shape_3.setTransform(216.8,65.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4FA28E").s().p("AABBFQgHgHgCgLQgFgUgJgTQgKgWgKgIQgKgJAAgNQgBgOAIgKQAJgKANAAQAOgBAJAIQAKAJAMATQAUAhAKAqQADANgHAMQgHALgNADIgHABQgLAAgJgHg");
	this.shape_4.setTransform(227.1,70.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4FA28E").s().p("AADBRQgHgIgCgLQgEgbgKgcQgMgdgLgIQgKgIgCgNQgCgOAIgKQAIgLANgBQAOgCAKAIQAZAUATA1QAKAaAGAhQACANgIALQgIALgNACIgFAAQgMAAgJgHg");
	this.shape_5.setTransform(211.5,63.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4FA28E").s().p("AAWBkQgJgGgCgLQgJgngQglQgWgqgUgLQgMgGgEgMQgEgNAGgMQAHgMAMgEQANgEAMAHQAoAWAhBIQASAnAIAlQADANgHALQgGALgNAEIgIAAQgLAAgJgHg");
	this.shape_6.setTransform(197.9,60.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4FA28E").s().p("AgMBlQgJgKAAgNQAAgugEgoQgFgpgFgKQgHgLADgNQACgNALgHQALgIAOADQALADAHALQAYAmAACGQAAANgJAKQgKAJgNAAQgLAAgKgJg");
	this.shape_7.setTransform(185.2,54);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4FA28E").s().p("AhTBDQgLgIgCgNQgDgNAIgLQAbgkAigbQA9gxAzAdQALAGAEANQADANgGAMQgHALgNAEQgNACgLgFQgKgFgSAKQgMAFgKAKQgNAMgOARIgLAPQgJAOgSAAQgJAAgJgGg");
	this.shape_8.setTransform(165.9,43.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4FA28E").s().p("AgKBoQgMgFgGgMQgFgMAEgMQAPgrgJgoIgOgjQgHgLADgNQACgNAMgIQALgHANADQALADAHALIAVA0QAQA8gWA+QgEAKgIAGQgJAGgJAAQgEAAgGgCg");
	this.shape_9.setTransform(172.5,45.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#253D5A").s().p("AgRD6IjHgFQi6gEh2gGQg8gDg3gEIAAgBQAHgEBoh8QBuiCAkggQA5gyCxgWIgBAuQAIAvAqAPQAuAQEThLQEOhJAMgUQAOgXgBgKQgBgTghgSQB4AsAXBUIAEAUIgDAiQgCAoAFAWQAFAVgHAeQgGAZgHAKQgHAIhIAiQhMAkgdAFQh0AahjAVQi6AngwAAIgDAAg");
	this.shape_10.setTransform(235.6,104.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#253D5A").s().p("ACEETQABgQgGgaQgMgzghgxQgjgzgmgQQgPgIgzgFQhBgHmwg6IAAgBQgCgWABgjQAChFAOg/IAFgSQAPgXASgUQAkgoAUAFQAHABAkARQA8AbEKB+QDrBwAfAMQBBAXBVA3QBQA0A1AzQBCBAARA5Qk5gthvAVg");
	this.shape_11.setTransform(63.4,88.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#253D5A").s().p("AhLHKQgtgMh6gXQiSgdiIgUQgRg5hChAQg1gzhQg0QgCAACjiYQCnidAIgLIBlh/QBch0AKgWQAJgWAXgHQALgEAKABQBhA8DdCVQBiBACPA1QBnAnByAcQA8APAnAHIAMAmQAIApgUAUQglAkiHAPIg9AGQixAWg5AyQgkAghuCEQhoB8gHAEIAAABQg6gGgUgFg");
	this.shape_12.setTransform(171.6,80.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#253D5A").s().p("AACCdQgjgxgXgpQgig7AGgbQAKg1AZg1QAdg9AWAAIAHgBQgLAUgOApIgXBSQgJAiBBBOQAhAoAkAhQgdAYgeAXg");
	this.shape_13.setTransform(112.4,20.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D2F46").s().p("Ag1CiQhLgVgrhEQg5hfggguQg3hRgmgGIAZgOQAhgJAgAWQAcAUBEBbQBJBhAQAPQAeAcA4ANQAyALAzgDQBBgFBUguQAqgXAegWIAYAfQh8BfhWAPQg/AMgyAAQguAAgmgLg");
	this.shape_14.setTransform(79.7,34.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#253D5A").s().p("Ag0C7Qg3gBg3ghQhAgpg5hSQgmg2gQgqQgKgagfgcQgcgZgRgEQgIgCg/AXQg6AVgHgJQgIgMAQgSQAOgQALgCIAmgFQAogFAogKQAKgDAIACQAmAGA4BRQAfAuA5BfQArBEBMAVQBMAWB4gXQBWgPB9hfQAegVAdgYQBIg8A0g3QAYgBAmAOQg+AyhjBeQgLALgKAIQhPBFhsAnQhyAqh5AAIgLAAg");
	this.shape_15.setTransform(83.3,37.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4FA28E").s().p("AgjB9QiXgXiRghIgBAAQgYgZABhjQABhiAOACIAJACQGvA8BAAGQAzAGASAHQAmAQAiA0QAiAvALAzQAHAagBAPQgoAPhMAAQhoAAirgbg");
	this.shape_16.setTransform(41,101.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4FA28E").s().p("AC4CMQg2g0gygtQhehWhNgfQgdgMgvALIgpAOQAOgqANgUQAOgTANAAQAyAABnAzQCGBEBMBnIgCAdQgEAdgLAFIgBAAQgDAAgEgDg");
	this.shape_17.setTransform(131.7,14.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B9B8B8").s().p("AstA9Qg4gGgVgTIgJgSIArhwIABgEQCRAhCXAXQEsAsBdggQBvgVE3AuQCIASCSAcQB5AYAuAMQAUAFA8AFQA3AFA7ACIwKAFQpLgdhbgJg");
	this.shape_18.setTransform(93.5,118.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B9B8B8").s().p("AA4C+QhOgVgzgaIlkitQA8AWAgAHQAvAJAUgIQAhgOAlgnQASgTAMgRQA3AiA3AAQB/ADB3gsQBsgoBPhFIAhA6QAeA9gHAPQgJARiEB9QiAB8gOAIQgDADgIAAQgWAAg5gQg");
	this.shape_19.setTransform(84.1,61.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#818080").s().p("Ai4gZQAnhWAjhIQAHAJA6gVQA9gXAIACQARAEAcAZQAfAcAKAaQAQAqAmA4QA5BQBAApQgMAQgSAUQglAmghAQQgUAJgvgLQgggIg8gWIhHgaQglgMgQAAQgkgBgMAaQgHANABAOQgkgRgHgBQgUgFgkAoQgSAUgPAXQAVhJBPiqg");
	this.shape_20.setTransform(38.4,44.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#818080").s().p("AkbCDQgqgPgIgvIABguIA9gGQCHgPAlgiQAUgUgIgrIgMgmIB8ADQCEAEAbAGIAtAKQAnAJAfAMQAhASABATQABAKgOAXQgMATkOBIQjhA+hHAAQgQAAgJgDg");
	this.shape_21.setTransform(254.4,88.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AJQCOQhUgEjTgEIoMgGQlSABikAEIghAAQjbADi1gXQkNghg1hQIAXhBIAJASQAUATA4AGQBbAJJMAbIQKgEQB2AGC6AEIDHAEQAuACDBgmQBjgVB0gaQAdgFBMgkQBIgiAHgJIAGANQAEATgKAeIgCAFQgUAkhwA5QhqA5hFASQg9APidARQinARh7ACIhFgBg");
	this.shape_22.setTransform(149.7,127.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1D1D1B").s().p("Al+CJIghgkIAAgSQB7gCCogRQCagRA+gPQBFgSBpg3QBxg7AUgkIARACQgPAaglAkIAAAQIgXASIgQAAIgNAqIg6AVIhBAIIgNAWIhHgCIgKAjIhLAPIgigKIgrgBIAAALIg6ALIgigNIgOAeIhfAFIg6gYIgKAZg");
	this.shape_23.setTransform(257.5,133.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1D1D1B").s().p("ABdAoIgYguIgQAAIgUAUIgzABIgSgUIgSgCIgPAZIhdAAIgSgnIAAgSQDQAEBVAEIBEABIAAASIgdA0g");
	this.shape_24.setTransform(197.7,144.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1D1D1B").s().p("AiCgKIAAgSIEFAEIAAASIhkACIgXAcIh1AGg");
	this.shape_25.setTransform(166.4,143.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1D1D1B").s().p("AhmAeIgdgqIAAgRIEHABIgBATIhrAAIgbAng");
	this.shape_26.setTransform(140.1,143.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1D1D1B").s().p("AjpAcIgggmIgBgUIAhgBQCkgEFQgBIAAASIhnABIgfApIhdAAIghghIiBADIgUAiQgTAFgVACIgVACQgXAAgHgJg");
	this.shape_27.setTransform(100.1,143.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1D1D1B").s().p("AjKApQhDgXgzgbQgogXgFgJQgEgHAPgwQA1BQENAgQCzAWDbgCIABAUIhjAFIgjAhQgtADgsAAQi5AAihg4g");
	this.shape_28.setTransform(36.7,137.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhIESQgggMjshwQkKh+g8gZQgBgNAGgOQANgaAjABQARABAkAMIBJAaIFlCsQAzAaBPAWQBMAUAMgHQAOgICBh8QCEh9AIgRQAIgPgfg9Iggg6QAKgIALgLQBihgA+gyQArARA4AgIBHAqQgJgBgMAEQgWAHgKAXQgJAVhcB0IhlB9QgIALinCeQijCZABABQhTg4hAgZg");
	this.shape_29.setTransform(89.9,60.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B9B8B8").s().p("AiVBGQhDhOAJgiIAXhRIAqgOQAvgLAcAMQBLAfBhBYQAxArA3A0IgHAMQg4gggqgRQgmgOgYABQgyA3hIA8Qgkghghgog");
	this.shape_30.setTransform(129.2,20.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B9B8B8").s().p("ADPC6QiPg1hghAQjfiThhg8IhIgqIAHgMQAGAEACgBQALgFADgeIADgcIA4AxQA7A4APAfQAQAgFNCqQCpBWCpBRQhygchogng");
	this.shape_31.setTransform(192,47.8);

	this.addChild(this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,299.3,149);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.setTransform(8.5,11,0.054,0.07,0,0,0,157.3,156.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:157.5,scaleX:0.04,scaleY:0.06},9).to({regX:157.3,scaleX:0.05,scaleY:0.07},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.9,22);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.setTransform(13.6,14.3,0.039,0.042,51.9,0,0,308.8,179.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:180.2,rotation:55.9},6,cjs.Ease.get(-1)).to({regX:308.9,regY:179.4,rotation:60.7},7,cjs.Ease.get(1)).to({regX:308.8,regY:179.8,rotation:56.4,x:13.5},7,cjs.Ease.get(-1)).to({regY:179.9,rotation:51.9,x:13.6},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.2,3.7,21.8,24.7);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.frf();
	this.instance.setTransform(8.8,6.6,0.059,0.089,0,0,0,149.6,74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:149.8,regY:74.7,scaleX:0.06,rotation:15},15).to({regX:149.6,regY:74.5,scaleX:0.06,rotation:0},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.5,13.2);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.setTransform(9.7,12.9,0.699,0.699,0,0,0,13.8,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5.2},9).to({rotation:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.7,23.7);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(14.2,5.9,0.093,0.093,0,0,0,151.9,63.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:6.8},7,cjs.Ease.get(-1)).to({y:7.7},7,cjs.Ease.get(1)).to({y:6.8},8,cjs.Ease.get(-1)).to({y:5.9},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.9,29.2,13.6);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 1 - копия
	this.instance = new lib.Символ37();
	this.instance.setTransform(113,43.6,1,1,0,0,0,113,43.6);

	// Слой 1
	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(115,45.6,1,1,0,0,0,113,43.6);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-2,-2,230,91);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,227.9,89.2);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(32.7,20.1,1,1,0,0,0,32.7,20.1);
	this.instance.alpha = 0.531;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},7).to({alpha:0.531},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65.5,40.3);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(12,25.7,1,1,0,0,0,12,25.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.531},12).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.9,51.3);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.setTransform(32.7,20.1,1,1,0,0,0,32.7,20.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65.5,40.3);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(30.1,16.4,1,1,0,0,0,30.1,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.41},12).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.2,32.9);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(29.1,7.8,1,1,0,0,0,29.1,7.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.41},13).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.2,15.6);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(26.8,13.8,1,1,0,0,0,26.8,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.422},12).to({alpha:1},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1.1,53.7,25.5);


(lib.Символ18копия5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ52();
	this.instance.setTransform(-36.8,14.6,0.531,0.531,0,0,0,60.1,5.3);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhMBoQghgrAAg9QAAg7AhgsQAggrAsAAQAtAAAgArQAhAsgBA7QABA9ghArQggArgtAAQgsAAgggrg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:11,y:14.8}).wait(3).to({graphics:null,x:0,y:0}).wait(1));

	// FlashAICB
	this.instance_1 = new lib.Символ48();
	this.instance_1.setTransform(11,14.8,1,1,0,0,0,8.4,11);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({_off:true},1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ41();
	this.instance_2.setTransform(11,14.8,1,1,0,0,0,11,14.8);
	this.instance_2.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 0, -110))];
	this.instance_2.cache(-2,-2,26,34);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhMBoQghgrAAg9QAAg7AhgsQAggrAsAAQAtAAAgArQAhAsgBA7QABA9ghArQggArgtAAQgsAAgggrg");
	this.shape.setTransform(11,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{scaleX:1,scaleY:1,x:11,y:14.8}}]}).to({state:[{t:this.instance_2,p:{scaleX:1.103,scaleY:1.103,x:10.7,y:14.9}}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,33);


(lib.Символ18копия3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.Символ53();
	this.instance.setTransform(-31.6,15.4,1,1,0,0,0,28,3.4);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhMBoQghgrAAg9QAAg7AhgsQAggrAsAAQAtAAAgArQAhAsgBA7QABA9ghArQggArgtAAQgsAAgggrg");
	var mask_graphics_1 = new cjs.Graphics().p("AhMBoQghgrAAg9QAAg7AhgsQAggrAsAAQAtAAAgArQAhAsgBA7QABA9ghArQggArgtAAQgsAAgggrg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:11,y:14.8}).wait(1).to({graphics:mask_graphics_1,x:11,y:14.8}).wait(2).to({graphics:null,x:0,y:0}).wait(1));

	// FlashAICB
	this.instance_1 = new lib.Символ46();
	this.instance_1.setTransform(10.1,14.7,0.892,0.892,0,0,0,13.5,14.2);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},2).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ41();
	this.instance_2.setTransform(11,14.8,1,1,0,0,0,11,14.8);
	this.instance_2.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 0, -143))];
	this.instance_2.cache(-2,-2,26,34);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhMBoQghgrAAg9QAAg7AhgsQAggrAsAAQAtAAAgArQAhAsgBA7QABA9ghArQggArgtAAQgsAAgggrg");
	this.shape.setTransform(11,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{scaleX:1,scaleY:1,x:11}}]}).to({state:[{t:this.instance_2,p:{scaleX:1.121,scaleY:1.121,x:11.2}}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,33);


(lib.Символ18копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ50();
	this.instance.setTransform(-24.8,15,0.556,0.556,0,0,0,38.9,7);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhMBoQghgrAAg9QAAg7AhgsQAggrAsAAQAtAAAgArQAhAsgBA7QABA9ghArQggArgtAAQgsAAgggrg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:11,y:14.8}).wait(3).to({graphics:null,x:0,y:0}).wait(1));

	// OBJECTS
	this.instance_1 = new lib.Символ43();
	this.instance_1.setTransform(12.1,14.7,1,1,0,0,0,9.7,12.8);

	this.instance_2 = new lib.Символ42();
	this.instance_2.setTransform(12,14.8,0.769,0.769,0,0,0,13.8,18.4);

	this.instance_1.mask = this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[]},2).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ41();
	this.instance_3.setTransform(11,14.8,1,1,0,0,0,11,14.8);
	this.instance_3.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 0, -12))];
	this.instance_3.cache(-2,-2,26,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(2).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,33);


(lib.Символ18копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ49();
	this.instance.setTransform(-34.6,17.6,0.622,0.622,0,0,0,50.6,6.7);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhMBoQghgrAAg9QAAg7AhgsQAggrAsAAQAtAAAgArQAhAsgBA7QABA9ghArQggArgtAAQgsAAgggrg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:11,y:14.8}).wait(3).to({graphics:null,x:0,y:0}).wait(1));

	// OBJECTS
	this.instance_1 = new lib.Символ44();
	this.instance_1.setTransform(8.4,14.8,1,1,0,0,0,8.8,6.6);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.26,scaleY:1.26,x:11.1},0).to({_off:true},2).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ41();
	this.instance_2.setTransform(11,14.8,1,1,0,0,0,11,14.8);
	this.instance_2.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 0, 127))];
	this.instance_2.cache(-2,-2,26,34);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhMBoQghgrAAg9QAAg7AhgsQAggrAsAAQAtAAAgArQAhAsgBA7QABA9ghArQggArgtAAQgsAAgggrg");
	this.shape.setTransform(11,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{scaleX:1,scaleY:1,x:11,y:14.8}}]}).to({state:[{t:this.instance_2,p:{scaleX:1.103,scaleY:1.103,x:10.7,y:14.9}}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,33);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ51();
	this.instance.setTransform(-33.3,16.1,1,1,0,0,0,30.3,4.7);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhMBoQghgrAAg9QAAg7AhgsQAggrAsAAQAtAAAgArQAhAsgBA7QABA9ghArQggArgtAAQgsAAgggrg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:11,y:14.8}).wait(3).to({graphics:null,x:0,y:0}).wait(1));

	// OBJECTS
	this.instance_1 = new lib.Символ40();
	this.instance_1.setTransform(14.6,16.2,1,1,0,0,0,14.2,5.9);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.1,scaleY:1.1,y:16.4},0).to({_off:true},2).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ41();
	this.instance_2.setTransform(11,14.8,1,1,0,0,0,11,14.8);
	this.instance_2.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 0, 72))];
	this.instance_2.cache(-2,-2,26,34);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhMBoQghgrAAg9QAAg7AhgsQAggrAsAAQAtAAAgArQAhAsgBA7QABA9ghArQggArgtAAQgsAAgggrg");
	this.shape.setTransform(11,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{scaleX:1,scaleY:1,x:11,y:14.8}}]}).to({state:[{t:this.instance_2,p:{scaleX:1.103,scaleY:1.103,x:10.7,y:14.9}}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,33);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 2
	this.instance = new lib.Символ27();
	this.instance.setTransform(20.5,28.2,1,1,0,0,0,12,25.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.shup1();
	this.instance_1.setTransform(13.5,0,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.4,58.3);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 3
	this.instance = new lib.Символ24();
	this.instance.setTransform(19.6,11,1,1,0,0,0,30.1,16.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.trusy();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61,65);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 3
	this.instance = new lib.Символ20();
	this.instance.setTransform(82.5,104.5,1,1,0,0,0,29.5,13.1);
	this.instance.alpha = 0.801;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.girl();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126,268);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 3
	this.instance = new lib.Символ22();
	this.instance.setTransform(30.1,8.2,1,1,0,0,0,29.1,7.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(30,9.5,1,1,0,0,0,30,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,19);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.oct = new lib.Символ26();
	this.oct.setTransform(166.6,258,1,1,0,0,0,32.7,20.1);

	this.timeline.addTween(cjs.Tween.get(this.oct).wait(35));

	// Слой 1
	this.hand = new lib.Символ4();
	this.hand.setTransform(148.2,62,1,1,0,0,0,30,9.5);

	this.timeline.addTween(cjs.Tween.get(this.hand).to({regY:9.6,scaleX:1,scaleY:1,rotation:14.8,x:147,y:63.1},9,cjs.Ease.get(-1)).to({regX:30.1,regY:9.5,scaleX:1,scaleY:1,rotation:30,x:145.7,y:64.2},9,cjs.Ease.get(0.99)).wait(1).to({regX:30,rotation:10.8,x:147.2,y:62.7},0).wait(1).to({rotation:4.6,x:147.8,y:62.3},0).wait(1).to({rotation:1.5,x:148,y:62.1},0).wait(1).to({rotation:0,x:148.2,y:62},0).to({regX:30.1,rotation:30,x:145.7,y:64.2},8).wait(1).to({regX:30,rotation:6.3,x:147.6,y:62.4},0).wait(1).to({rotation:1.9,x:148,y:62.1},0).wait(1).to({rotation:0.7,x:148.1,y:62},0).wait(1).to({rotation:0,x:148.2},0).wait(1));

	// foot.png
	this.instance = new lib.Символ5();
	this.instance.setTransform(113,132,1,1,0,0,0,32.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.02,skewX:-1.8,x:112.1,y:131.4},9,cjs.Ease.get(-1)).to({scaleY:1.05,skewX:-3.6,x:111.3,y:130.8},9,cjs.Ease.get(0.99)).wait(1).to({scaleY:1.02,skewX:-1.3,x:112.4,y:131.5},0).wait(1).to({scaleY:1.01,skewX:-0.6,x:112.7,y:131.8},0).wait(1).to({scaleY:1,skewX:-0.2,x:112.9,y:131.9},0).wait(1).to({scaleY:1,skewX:0,x:113,y:132},0).to({scaleY:1.05,skewX:-3.6,x:111.3,y:130.8},8).wait(1).to({scaleY:1.01,skewX:-0.8,x:112.6,y:131.7},0).wait(1).to({scaleY:1,skewX:-0.2,x:112.9,y:131.9},0).wait(1).to({scaleY:1,skewX:-0.1,x:113,y:132},0).wait(1).to({scaleY:1,skewX:0},0).wait(1));

	// trusy.png
	this.trus = new lib.Символ8();
	this.trus.setTransform(75,216,1,1,0,0,0,30.5,32.5);

	this.timeline.addTween(cjs.Tween.get(this.trus).to({regX:30.6,scaleX:1.14,scaleY:1,rotation:5.5,x:77.3,y:214.2},9,cjs.Ease.get(-1)).to({regX:30.4,scaleX:1.27,scaleY:1,rotation:11.2,x:79.3,y:212.3},9,cjs.Ease.get(0.99)).wait(1).to({regX:25.2,regY:29.8,scaleX:1.1,scaleY:1,rotation:4,x:71,y:211.6},0).wait(1).to({scaleX:1.04,rotation:1.7,x:70.3,y:212.6},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:0.6,x:69.9,y:213.1},0).wait(1).to({regX:30.5,regY:32.5,scaleX:1,rotation:0,x:75,y:216},0).to({regX:30.4,scaleX:1.27,scaleY:1,rotation:11.2,x:79.3,y:212.3},8).wait(1).to({regX:25.2,regY:29.8,scaleX:1.06,scaleY:1,rotation:2.4,x:70.5},0).wait(1).to({scaleX:1.02,scaleY:1,rotation:0.7,x:70,y:213},0).wait(1).to({scaleX:1.01,rotation:0.2,x:69.8,y:213.2},0).wait(1).to({regX:30.5,regY:32.5,scaleX:1,rotation:0,x:75,y:216},0).wait(1));

	// girl.png
	this.ass = new lib.Символ7();
	this.ass.setTransform(63,134,1,1,0,0,0,63,134);

	this.timeline.addTween(cjs.Tween.get(this.ass).to({x:64.5,y:129},9,cjs.Ease.get(-1)).to({x:66,y:124},9,cjs.Ease.get(0.99)).wait(1).to({x:64.1,y:130.5},0).wait(1).to({x:63.5,y:132.5},0).wait(1).to({x:63.2,y:133.5},0).wait(1).to({x:63,y:134},0).to({x:66,y:124},8).wait(1).to({x:63.6,y:131.9},0).wait(1).to({x:63.2,y:133.4},0).wait(1).to({x:63.1,y:133.8},0).wait(1).to({x:63,y:134},0).wait(1));

	// leg.png
	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(110,105,1,1,0,0,0,31.5,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:7.3,x:109.9,y:101.5},9,cjs.Ease.get(-1)).to({regX:31.4,rotation:15,x:109.6,y:98},9,cjs.Ease.get(0.99)).wait(1).to({regX:31.5,rotation:5.4,x:109.9,y:102.5},0).wait(1).to({rotation:2.3,x:110,y:104},0).wait(1).to({rotation:0.8,y:104.6},0).wait(1).to({rotation:0,y:105},0).to({regX:31.4,rotation:15,x:109.6,y:98},8).wait(1).to({regX:31.5,rotation:3.2,x:109.9,y:103.5},0).wait(1).to({rotation:0.9,x:110,y:104.5},0).wait(1).to({rotation:0.3,y:104.9},0).wait(1).to({rotation:0,y:105},0).wait(1));

	// shup2.png
	this.instance_2 = new lib.Символ9();
	this.instance_2.setTransform(32.5,239,1,1,0,0,0,14.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.94,scaleY:1.08,x:33,y:237.2},9,cjs.Ease.get(-1)).to({scaleX:0.88,scaleY:1.16,x:33.6,y:235.5},9,cjs.Ease.get(0.99)).wait(1).to({scaleX:0.96,scaleY:1.06,x:32.9,y:237.7},0).wait(1).to({scaleX:0.98,scaleY:1.02,x:32.7,y:238.4},0).wait(1).to({scaleX:0.99,scaleY:1.01,x:32.6,y:238.8},0).wait(1).to({scaleX:1,scaleY:1,x:32.5,y:239},0).to({scaleX:0.88,scaleY:1.16,x:33.6,y:235.5},8).wait(1).to({scaleX:0.97,scaleY:1.03,x:32.8,y:238.2},0).wait(1).to({scaleX:0.99,scaleY:1.01,x:32.6,y:238.7},0).wait(1).to({scaleX:1,scaleY:1,y:238.9},0).wait(1).to({scaleX:1,scaleY:1,x:32.5,y:239},0).wait(1));

	// shup1.png
	this.shuo = new lib.Символ10();
	this.shuo.setTransform(96.5,233,1,1,0,0,0,21.7,29.1);

	this.timeline.addTween(cjs.Tween.get(this.shuo).to({regY:29.2,scaleY:1.01,skewX:5.3,x:99.3},9,cjs.Ease.get(-1)).to({regY:29.1,scaleY:1.02,skewX:10.7,x:102},9,cjs.Ease.get(0.99)).wait(1).to({scaleY:1.01,skewX:3.8,x:98.5,y:232.9},0).wait(1).to({scaleY:1,skewX:1.6,x:97.3},0).wait(1).to({scaleY:1,skewX:0.6,x:96.8},0).wait(1).to({scaleY:1,skewX:0,x:96.5,y:233},0).to({scaleY:1.02,skewX:10.7,x:102},8).wait(1).to({scaleY:1,skewX:2.3,x:97.7},0).wait(1).to({scaleY:1,skewX:0.7,x:96.8},0).wait(1).to({scaleY:1,skewX:0.2,x:96.6,y:232.9},0).wait(1).to({skewX:0,x:96.5,y:233},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,199.4,278.2);


(lib.Символ29копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28копия();
	this.instance.setTransform(13,13,1,1,0,0,0,13,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:23},7,cjs.Ease.get(-1)).to({y:33},7,cjs.Ease.get(1)).to({y:22.4},8,cjs.Ease.get(-1)).to({y:13},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,-2.3,26,26);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.setTransform(121.9,47,1.078,1.078,0,0,0,113,43.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.97,scaleY:0.97},5,cjs.Ease.get(-1)).to({scaleX:0.81,scaleY:0.81,x:121.8,y:47.1},7,cjs.Ease.get(1)).to({scaleX:0.95,scaleY:0.95,x:121.9},6,cjs.Ease.get(-1)).to({scaleX:1.08,scaleY:1.08,y:47},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,245.8,96.2);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.ggg = new lib.Символ2();
	this.ggg.setTransform(325.8,152.5,1,1,0,0,0,72.8,134);

	this.instance = new lib.Символ1();
	this.instance.setTransform(322.5,152.5,1,1,0,0,0,322.5,152.5);

	this.addChild(this.instance,this.ggg);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,645,305);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Слой 6
	this.instance = new lib.Символ29копия();
	this.instance.setTransform(635.6,269.5,0.381,0.381,89.5,0,0,21.9,10.7);

	this.instance_1 = new lib.Символ29копия();
	this.instance_1.setTransform(635.6,210.3,0.381,0.381,89.5,0,0,21.9,10.7);

	this.instance_2 = new lib.Символ29копия();
	this.instance_2.setTransform(635.6,151.9,0.381,0.381,89.5,0,0,21.9,10.7);

	this.instance_3 = new lib.Символ29копия();
	this.instance_3.setTransform(635.6,91.9,0.381,0.381,89.5,0,0,21.9,10.7);

	this.instance_4 = new lib.Символ29копия();
	this.instance_4.setTransform(635.6,33.5,0.381,0.381,89.5,0,0,21.9,10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(10));

	// Слой 4
	this.pshupp1 = new lib.Символ18копия5();
	this.pshupp1.setTransform(596.5,212,2.208,1.647,0,0,0,11,14.8);
	new cjs.ButtonHelper(this.pshupp1, 0, 1, 2, false, new lib.Символ18копия5(), 3);

	this.ttrrr = new lib.Символ18копия3();
	this.ttrrr.setTransform(571.7,245.8,2.208,1.647);
	new cjs.ButtonHelper(this.ttrrr, 0, 1, 2, false, new lib.Символ18копия3(), 3);

	this.han1 = new lib.Символ18копия2();
	this.han1.setTransform(596.5,33.6,2.208,1.647,0,0,0,11,14.8);
	new cjs.ButtonHelper(this.han1, 0, 1, 2, false, new lib.Символ18копия2(), 3);

	this.octop = new lib.Символ18копия();
	this.octop.setTransform(596.5,92.1,2.208,1.647,0,0,0,11,14.8);
	new cjs.ButtonHelper(this.octop, 0, 1, 2, false, new lib.Символ18копия(), 3);

	this.ass1 = new lib.Символ18();
	this.ass1.setTransform(596.5,150.4,2.208,1.647,0,0,0,11,14.8);
	new cjs.ButtonHelper(this.ass1, 0, 1, 2, false, new lib.Символ18(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ass1},{t:this.octop},{t:this.han1},{t:this.ttrrr},{t:this.pshupp1}]}).wait(10));

	// Слой 5
	this.instance_5 = new lib.Символ54();
	this.instance_5.setTransform(154.6,74.8,1,1,0,0,0,122.9,48.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// Слой 3
	this.instance_6 = new lib.Символ12();
	this.instance_6.setTransform(323,152.1,1,1,0,0,0,333.4,159);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:0.141,compositeOperation:NaN},9).wait(1));

	// Слой 1
	this.girl = new lib.Символ3();
	this.girl.setTransform(322.5,152.5,1,1,0,0,0,322.5,152.5);

	this.timeline.addTween(cjs.Tween.get(this.girl).to({scaleX:1.07,scaleY:1.07},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,-6.9,667,318);


// stage content:



(lib.girl_crab_640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		{
			_this.qwe.gotoAndPlay(1);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		function fl_MouseOutHandler_2()
		{
			_this.qwe.gotoAndStop(0);
		}
		
		
		this.qwe.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
		stage.canvas.style.cursor = "none";
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.qwe.han1.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler()
		{
			_this.qwe.girl.ggg.hand.gotoAndStop(1);
		}
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.qwe.han1.addEventListener("mouseout", fl_MouseOutHandler);
		
		function fl_MouseOutHandler()
		{
			_this.qwe.girl.ggg.hand.gotoAndStop(0);
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.qwe.ass1.addEventListener("mouseover", fl_MouseOverHandler_3);
		
		function fl_MouseOverHandler_3()
		{
			_this.qwe.girl.ggg.ass.gotoAndStop(1);
		}
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.qwe.ass1.addEventListener("mouseout", fl_MouseOutHandler_3);
		
		function fl_MouseOutHandler_3()
		{
			_this.qwe.girl.ggg.ass.gotoAndStop(0);
		}
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.qwe.ttrrr.addEventListener("mouseout", fl_MouseOutHandler_4);
		
		function fl_MouseOutHandler_4()
		{
			_this.qwe.girl.ggg.trus.gotoAndStop(0);
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.qwe.ttrrr.addEventListener("mouseover", fl_MouseOverHandler_4);
		
		function fl_MouseOverHandler_4()
		{
		_this.qwe.girl.ggg.trus.gotoAndStop(1);
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.qwe.pshupp1.addEventListener("mouseover", fl_MouseOverHandler_9);
		
		function fl_MouseOverHandler_9()
		{
		_this.qwe.girl.ggg.shuo.gotoAndStop(1);
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.qwe.pshupp1.addEventListener("mouseout", fl_MouseOutHandler_9);
		
		function fl_MouseOutHandler_9()
		{
		_this.qwe.girl.ggg.shuo.gotoAndStop(0);
		}
		
		
		/* Событие "Указатель мыши выходит за пределы объекта"
		После прохождения указателя через экземпляр символа выполняется функция, в которую можно добавить собственный код.
		
		Инструкции:
		1. Добавьте ваш пользовательский код в новую строку после строки, в которой указано: "// Введите здесь ваш пользовательский код".
		Данный код выполняется при выходе указателя мыши за пределы экземпляра символа.
		*/
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.qwe.octop.addEventListener("mouseout", fl_MouseOutHandler_6);
		
		function fl_MouseOutHandler_6()
		{
		_this.qwe.girl.ggg.oct.gotoAndStop(0);
		}
		
		/* Событие "Помещен указатель мыши"
		При прохождении указателя через экземпляр символа выполняется функция, в которую можно добавить собственный код.
		
		Инструкции:
		1. Добавьте пользовательский код после строки "// Начало пользовательского кода".
		Данный код выполняется при прохождении указателя мыши через экземпляр символа.
		частота — количество вызовов события.
		*/
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.qwe.octop.addEventListener("mouseover", fl_MouseOverHandler_6);
		
		function fl_MouseOverHandler_6()
		{
		_this.qwe.girl.ggg.oct.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 7
	this.qwe = new lib.Символ11();
	this.qwe.setTransform(322,152.5,1,1,0,0,0,322.5,152.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AjvCkIAAlHIHfAAIAAFHg");
	this.shape.setTransform(575,176.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.qwe}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(309,145.5,667,318);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;