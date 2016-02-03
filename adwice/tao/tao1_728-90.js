(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#CCCCCC",
	manifest: [
		{src:"images/ffikonn.jpg", id:"ffikonn"},
		{src:"images/lena.png", id:"lena"}
	]
};



// symbols:



(lib.ffikonn = function() {
	this.initialize(img.ffikonn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,578);


(lib.lena = function() {
	this.initialize(img.lena);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,296);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#336600").s().p("AD+BXQgKgEgGgKQgGgIgCgOQgDgNAAgSQAAgRADgMQACgNAHgJQAGgJAKgFQALgEAOAAQAQAAAKAEQAKAEAHAJQAFAKADANQADALgBASQABARgDAOQgDANgGAJQgHAJgJAEQgLAFgPAAQgPAAgLgEgAEOgWQgDADgDAHQgBAGgBAHIAAAmQABAJABAGQADAHADADQAEAEAGAAQAFAAAEgDQADgDADgFQADgIAAgdIAAgUQgBgJgCgGQgEgKgLAAQgGAAgEADgAkOBXQgHgDgDgGQgFgFgBgHQgCgHAAgGQAAgKACgHQACgHAEgFQAEgFAHgDIAQgGIATgFQAIgCADgDQADgCAAgHQAAgIgEgEQgEgEgIAAQgIAAgFAEQgDAFAAAIIAAAEIggAAIAAgEQAAgLAEgIQAEgIAGgFQAHgFAJgCQAIgCAKAAQAPAAAKADQAKADAFAFQAFAGACAIQACAHAAAJIABBUIADAMIghAAIgEgOIgBAAQgGAKgHADQgJAEgMAAQgKAAgFgEgAjjAYIgIADQgLACgEAFQgFAGABAJQAAAIADAFQACAGAHAAIAIgBQADgBAEgDIAFgHQACgEAAgFIAAgbgAlxBZQgHgCgGgDQgKgGgFgKQgFgLgCgNIAAgZQAAgOABgKQACgNAGgKQAFgKALgGQALgFARAAQAPAAAKAFQAJAFAGAIQAFAKADAMQABALAAAPIAAAIIhEAAIABAXIADAKQACAEADADQADADAFAAQAJAAAEgHQAEgGACgNIAfAAQgBAYgLAMQgMANgZAAQgKAAgHgCgAlpgXQgDACgCAEIgDAJIgBANIAkAAIgBgMQgBgGgCgEQgCgEgDgDQgEgBgFAAQgGAAgDACgAG/BYIgRhfIgBAAIgRBfIgpAAIgdiGIAjAAIAQBeIABAAIAQheIAmAAIASBeIABAAIAQheIAhAAIgeCGgACtBYIAAhcQABgKgEgEQgEgEgHAAQgTAAAAAWIAABYIgiAAIAAiyIAiAAIAAA6IABAAQAKgRAWAAQARAAAJAJQAFAEACAIQADAHgBAKIAABjgAgKBYIAAhcQAAgKgFgEQgCgEgJAAQgSAAAAAWIAABYIgjAAIAAiGIAiAAIAAAQIAAAAQAGgKAIgFQAJgEAMAAQAOAAAJAJQAEAEADAIQACAHAAAKIAABjgAiiBYIAAiGIAhAAIAAASIABAAQAFgJAHgGQAIgGAKAAIAHAAIAAAiIgLgBIgJABQgEABgEADQgFADgBAFQgCADAAAGIAABSgAoDBYIAAiyIAlAAIAACUIBAAAIAAAeg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.6,-9.1,103.3,18.3);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg8vAwPMAAAhgdMB5eAAAMAAABgdg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-388.8,-308.8,777.6,617.6);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ffikonn();
	this.instance.setTransform(-364,-289);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-364,-289,728,578);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AD+BXQgKgEgGgKQgGgIgCgOQgDgNAAgSQAAgRADgMQACgNAHgJQAGgJAKgFQALgEAOAAQAQAAAKAEQAKAEAHAJQAFAKADANQADALgBASQABARgDAOQgDANgGAJQgHAJgJAEQgLAFgPAAQgPAAgLgEgAEOgWQgDADgDAHQgBAGgBAHIAAAmQABAJABAGQADAHADADQAEAEAGAAQAFAAAEgDQADgDADgFQADgIAAgdIAAgUQgBgJgCgGQgEgKgLAAQgGAAgEADgAkOBXQgHgDgDgGQgFgFgBgHQgCgHAAgGQAAgKACgHQACgHAEgFQAEgFAHgDIAQgGIATgFQAIgCADgDQADgCAAgHQAAgIgEgEQgEgEgIAAQgIAAgFAEQgDAFAAAIIAAAEIggAAIAAgEQAAgLAEgIQAEgIAGgFQAHgFAJgCQAIgCAKAAQAPAAAKADQAKADAFAFQAFAGACAIQACAHAAAJIABBUIADAMIghAAIgEgOIgBAAQgGAKgHADQgJAEgMAAQgKAAgFgEgAjjAYIgIADQgLACgEAFQgFAGABAJQAAAIADAFQACAGAHAAIAIgBQADgBAEgDIAFgHQACgEAAgFIAAgbgAlxBZQgHgCgGgDQgKgGgFgKQgFgLgCgNIAAgZQAAgOABgKQACgNAGgKQAFgKALgGQALgFARAAQAPAAAKAFQAJAFAGAIQAFAKADAMQABALAAAPIAAAIIhEAAIABAXIADAKQACAEADADQADADAFAAQAJAAAEgHQAEgGACgNIAfAAQgBAYgLAMQgMANgZAAQgKAAgHgCgAlpgXQgDACgCAEIgDAJIgBANIAkAAIgBgMQgBgGgCgEQgCgEgDgDQgEgBgFAAQgGAAgDACgAG/BYIgRhfIgBAAIgRBfIgpAAIgdiGIAjAAIAQBeIABAAIAQheIAmAAIASBeIABAAIAQheIAhAAIgeCGgACtBYIAAhcQABgKgEgEQgEgEgHAAQgTAAAAAWIAABYIgiAAIAAiyIAiAAIAAA6IABAAQAKgRAWAAQARAAAJAJQAFAEACAIQADAHgBAKIAABjgAgKBYIAAhcQAAgKgFgEQgCgEgJAAQgSAAAAAWIAABYIgjAAIAAiGIAiAAIAAAQIAAAAQAGgKAIgFQAJgEAMAAQAOAAAJAJQAEAEADAIQACAHAAAKIAABjgAiiBYIAAiGIAhAAIAAASIABAAQAFgJAHgGQAIgGAKAAIAHAAIAAAiIgLgBIgJABQgEABgEADQgFADgBAFQgCADAAAGIAABSgAoDBYIAAiyIAlAAIAACUIBAAAIAAAeg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.6,-9.1,103.3,18.3);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("Ah0j6IDoEKIAAAGIjoDlg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.7,-25.1,23.4,50.3);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFXB1QgOgFgHgNQgJgLgDgTQgDgSgBgYQAAgXAFgQQADgSAJgMQAIgMAOgHQAOgGATAAQAWAAANAGQAOAGAJAMQAIAMADASQADAQAAAYQAAAYgDASQgDASgKAMQgIAMgNAGQgOAGgVAAQgUAAgPgGgAFtgeQgFAEgCAJQgDAJgBAJIAAA0QABAMADAJQACAIAFAFQAFAFAIAAQAIAAAEgEQAGgEACgHQAEgKACgoIgBgbQgCgNgDgHQgFgPgPAAQgIAAgFAFgAluB2QgJgEgEgIQgFgHgDgJQgCgKAAgJQAAgNADgJQACgJAGgHQAFgHAJgEQAJgFAMgDIAbgHQAKgDAEgEQAEgDAAgKQAAgKgFgGQgFgGgMAAQgLAAgFAHQgFAGAAALIAAAFIgrAAIAAgFQAAgQAGgKQAEgLAJgHQAJgGAMgDQALgDANAAQAWAAAMAEQAOAEAGAIQAIAHACALQADAKAAAMIABByIAEAQIgtAAIgFgTIAAAAQgJAOgKAEQgMAFgQAAQgNAAgIgFgAk0AhIgKADQgOAEgHAHQgFAHAAAMQAAALADAHQAEAIAKAAIAKgCQAFgBAFgEQADgDADgGQADgFAAgIIAAgkgAnzB4QgKgCgHgEQgPgJgGgNQgHgOgCgSIgBgiQAAgTACgPQADgRAHgNQAIgNAPgIQAOgIAXAAQAVAAANAHQANAGAHAMQAIANADARQADAPAAAVIAAAKIhdAAIABAfIAEANQADAGAEAEQAEAEAHAAQAMAAAGgJQAEgIADgSIAqAAQgBAggQARQgQARghAAQgNAAgKgDgAnoggQgEAEgDAFIgEALIgBATIAwAAIgCgRQgBgIgCgGQgDgFgFgDQgEgDgHAAQgIAAgEADgAJcB3IgYiAIgBAAIgWCAIg3AAIgoi1IAwAAIAUCAIABAAIAXiAIAzAAIAZCAIAAAAIAWiAIAtAAIgoC1gADqB3IAAh8QAAgPgEgFQgFgGgKAAQgaAAAAAeIAAB4IguAAIAAjxIAuAAIAABPIABAAQAOgYAeAAQAXAAANAMQAFAGADAKQADAKAAAOIAACGgAgPB3IAAh8QAAgPgFgFQgEgGgLAAQgZAAAAAeIAAB4IgvAAIAAi1IAtAAIAAAVIABAAQAHgNAMgHQAMgGAPAAQAUAAANAMQAGAGADAKQADAKAAAOIAACGgAjcB3IAAi1IAtAAIAAAYIABAAQAHgNAKgIQALgIAOAAIAIABIAAAtIgOgBIgNACQgFABgGAEQgFAEgDAGQgDAFAAAJIAABugAq4B3IAAjxIAxAAIAADJIBXAAIAAAog");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69.7,-12.3,139.5,24.7);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZB6IAAgtIAtAAIAAAtgAgXA3IAAgNQAAgRAFgMQAFgMALgLIALgOQAHgIADgJQADgJAAgKQAAgNgGgIQgFgIgLAAQgMAAgFAKQgGALAAAQIAAAJIgtAAIAAgIQAAgQAEgMQAFgNAIgKQAIgJANgFQANgFAQAAQAQAAAOAEQANAFAJAJQAJAJAFAMQAEAMAAAOQAAAPgEAMQgFAMgMAOIgOAOQgJAKgEAIQgEAIAAANIAAAFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.9,-12.2,13.9,24.6);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB/B0QgKgCgHgEQgOgJgGgNQgIgOgBgSIgBgiQgBgSADgPQACgSAIgNQAHgNAPgIQAPgHAXgBQAVABANAGQANAHAHAMQAIAMACARQADAQAAAUIAAAKIhdAAIABAfIAFANQACAHAEADQAFAEAHAAQAMAAAFgIQAFgJACgRIAqAAQgBAfgQARQgPARgiAAQgNAAgKgDgACKgjQgEADgCAFIgFALIgBATIAwAAIgBgRQgBgIgCgFQgDgGgFgDQgFgCgGAAQgIAAgFADgAgbB0QgLgCgGgEQgPgJgGgNQgIgOgBgSIgCgiQAAgSADgPQACgSAIgNQAIgNAOgIQAOgHAYgBQATABAMAGQANAHAIAMQAHAMAEARQACAQAAAUIAAAKIhaAAIABAfIADANQADAHAEADQAFAEAGAAQAKAAAGgIQAFgJACgRIArAAQgCAfgPARQgQARggAAQgNAAgJgDgAgRgjQgEADgDAFIgDALIgBATIAtAAIgBgRQgBgIgDgFQgCgGgFgDQgEgCgGAAQgHAAgFADgAETByQgJgCgFgFQgEgGgCgJQgBgJgBgOIAAhnIgXAAIAAggIAXAAIAAg0IAvAAIAAA0IAbAAIAAAgIgbAAIAABhQAAALAEAFQACAEALAAIAKgBIAAAhIgeABQgOAAgIgCgAiTBzIAAh+QAAgMgEgFQgFgHgJAAQgMABgGAHQgGAIAAAPIAAB3IgvAAIAAh+QAAgMgFgFQgEgHgKAAQgLABgHAHQgGAIAAAPIAAB3IgvAAIAAi1IAtAAIAAATIABAAQAIgNALgFQALgGAQAAQAPABAMAHQALAIADANIABAAQAFgOANgHQAMgIARAAQALABAJADQAJADAFAIQAFAHADAJQADALAAANIAACDg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.8,-11.9,65.6,23.9);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AASByQgOgGgFgMQgJgMgDgTQgDgSgBgXQAAgYAEgQQAEgSAJgMQAGgMAOgGQAOgHAUAAQAVAAAOAGQANAGAJAMQAIANADARQADARAAAYQAAAXgDASQgDASgKAMQgIAMgNAGQgPAGgTAAQgWAAgOgFgAAogiQgFAEgCAKQgDAIgBAMIAAAyQABALADAJQACAIAFAFQAFAFAJAAQAHAAAEgEQAGgDACgIQAEgKACgnIgBgcQgCgNgDgHQgFgOgOAAQgJgBgFAFgAhQByQgIgCgEgFQgGgGgBgJQgBgJAAgOIAAhnIgZAAIAAggIAZAAIAAg0IAuAAIAAA0IAcAAIAAAgIgcAAIAABhQAAALADAFQADAEALAAIALgBIAAAhIgfABQgNAAgKgCg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.6,-11.9,25.2,23.9);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhLB1QgOgFgIgNQgIgLgDgTQgEgSAAgYQAAgXAEgQQAEgSAIgMQAJgMAOgHQANgGAUAAQAVAAAOAGQAMAGAJAMQAIAMADASQADAQAAAYQAAAYgDASQgEASgJAMQgIAMgMAGQgOAGgUAAQgVAAgOgGgAg1geQgFAEgDAJQgCAJgBAJIAAA0QABAMACAJQADAIAFAFQAFAFAIAAQAIAAAEgEQAFgEADgHQAEgKABgoIgBgbQgBgNgDgHQgFgPgPAAQgIAAgFAFgAC4B3IgYiAIgBAAIgXCAIg2AAIgoi1IAvAAIAVCAIABAAIAXiAIAzAAIAYCAIABAAIAWiAIAtAAIgoC1gAi4B3IAAh8QAAgPgFgFQgEgGgLAAQgZAAAAAeIAAB4IgvAAIAAjxIAvAAIAABPIABAAQAOgYAeAAQAXAAAMAMQAGAGADAKQADAKAAAOIAACGg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.7,-12.3,55.5,24.7);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHB1QgMgFgIgNQgIgLgDgTQgEgSAAgYQAAgXAEgQQAEgSAIgMQAJgMAMgHQANgGAUAAQAVAAAOAGQAOAGAJAMQAIAMADASQADAQAAAYQAAAYgDASQgEASgJAMQgIAMgOAGQgOAGgUAAQgVAAgOgGgAAdgeQgFAEgDAJQgCAJgBAJIAAA0QABAMACAJQADAIAFAFQAFAFAIAAQAIAAAEgEQAFgEADgHQAEgKABgoIgBgbQgBgNgDgHQgFgPgPAAQgIAAgFAFgAEMB3IgYiAIgBAAIgXCAIg2AAIgoi1IAvAAIAVCAIABAAIAXiAIAzAAIAYCAIABAAIAWiAIAtAAIgoC1gAhkB3IAAh8QAAgPgFgFQgEgGgLAAQgZAAAAAeIAAB4IgvAAIAAi1IAtAAIAAAVIABAAQAHgNAMgHQAMgGAPAAQAXAAAMAMQAGAGADAKQADAKAAAOIAACGgAkBB3IgnhLIgRAVIAAA2IgvAAIAAjxIAvAAIAAB+IABAAIAvhCIA0AAIg1BGIA8Bvg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.1,-12.3,72.3,24.7);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah9B1QgOgFgIgNQgIgLgDgTQgEgSAAgYQAAgXAEgQQAEgSAIgMQAJgMAOgHQANgGAUAAQAVAAAOAGQAOAGAJAMQAIAMADASQADAQAAAYQAAAYgDASQgEASgJAMQgIAMgOAGQgOAGgUAAQgVAAgOgGgAhngeQgFAEgDAJQgCAJgBAJIAAA0QABAMACAJQADAIAFAFQAFAFAIAAQAIAAAEgEQAFgEADgHQAEgKABgoIgBgbQgBgNgDgHQgFgPgPAAQgIAAgFAFgAEnB2QgJgCgEgGQgFgFgCgJQgBgJAAgPIAAhmIgYAAIAAggIAYAAIAAg0IAuAAIAAA0IAcAAIAAAgIgcAAIAABhQAAALAEAEQADAFAKAAIALgBIAAAhIgfABQgNAAgJgCgABhB3IAAh8QAAgPgFgFQgEgGgLAAQgZAAAAAeIAAB4IgvAAIAAi1IAtAAIAAAVIABAAQAHgNAMgHQAMgGAPAAQAXAAAMAMQAGAGADAKQADAKAAAOIAACGgAlbB3IAAjxIBQAAQAaAAAQAIQAHAEAGAGQAGAGAFAIQAJAQADAVQADAWAAAbQAAAegEAYIgGAVQgDAKgFAIQgFAHgGAGQgGAFgIAEQgIAEgKACQgLACgMAAgAkqBTIAWAAQANAAAIgFQAHgEAFgKQAFgKABgRIAAhMQgBgQgEgKQgFgKgIgGQgIgFgOAAIgVAAgAC1glQAJgBAFgIQAEgIAAgKIAAgFIgSAAIAAg1IAtAAIAAAsQAAAOgCALQgBAMgFAIQgGAIgIAFQgJAGgOABg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.8,-12.3,69.7,24.7);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.lena();
	this.instance.setTransform(-77.5,-148);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-77.5,-148,155,296);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-11.9},49,cjs.Ease.get(-1)).to({y:-24},50,cjs.Ease.get(1)).to({y:-12},50,cjs.Ease.get(-1)).to({y:0},50,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364,-289,728,578);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(0,0,0.735,0.735);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.79,scaleY:0.79},19,cjs.Ease.get(-1)).to({scaleX:0.84,scaleY:0.84},20,cjs.Ease.get(1)).to({scaleX:0.79,scaleY:0.79},20,cjs.Ease.get(-1)).to({scaleX:0.74,scaleY:0.74},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-108.8,114,217.7);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:4},4).to({x:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,-25.1,23.4,50.3);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(69.5,-4.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9901").s().p("AruD+IAAn7IXdAAIAAH7g");
	this.shape.setTransform(-19.4,-3.9);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-94.6,-29.3,175.8,50.8);


(lib.Символ12 = function() {
	this.initialize();

	// Символ 11
	this.instance = new lib.Символ11();
	this.instance.setTransform(-16.6,-35.8,0.74,0.74);

	// Слой 1
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(-16,-34.1);

	// Символ 13
	this.instance_2 = new lib.Символ13();
	this.instance_2.setTransform(0,-30.4);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-94.6,-59.7,175.8,50.8);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.59},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-12.2,13.9,24.6);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 8
	this.instance = new lib.Символ8();
	this.instance.setTransform(85.4,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({scaleX:1.01,scaleY:1.01,x:86.5,y:-0.9},4,cjs.Ease.get(-1)).to({scaleX:1.06,scaleY:1.06,x:91,y:-5.7},5,cjs.Ease.get(1)).to({scaleX:1.04,scaleY:1.04,x:89.6,y:-4.2},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:85.4,y:0.3},5,cjs.Ease.get(1)).wait(1));

	// Символ 7
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(44.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({scaleX:1.02,scaleY:1.02,y:-0.1},4,cjs.Ease.get(-1)).to({scaleX:1.1,scaleY:1.1,y:-4.9},5,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07,y:-3.4},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:1.1},5,cjs.Ease.get(1)).wait(10));

	// Символ 6
	this.instance_2 = new lib.Символ6();
	this.instance_2.setTransform(-11.7,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({scaleX:1.03,scaleY:1.03,y:-0.1},4,cjs.Ease.get(-1)).to({scaleX:1.16,scaleY:1.16,y:-4.9},5,cjs.Ease.get(1)).to({scaleX:1.12,scaleY:1.12,y:-3.5},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:1.1},5,cjs.Ease.get(1)).wait(19));

	// Символ 5
	this.instance_3 = new lib.Символ5();
	this.instance_3.setTransform(-60.5,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({scaleX:1.02,scaleY:1.02,y:-0.5},4,cjs.Ease.get(-1)).to({scaleX:1.1,scaleY:1.1,y:-5.3},5,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07,y:-3.9},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:0.7},5,cjs.Ease.get(1)).wait(28));

	// Символ 4
	this.instance_4 = new lib.Символ4();
	this.instance_4.setTransform(-134.3,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({scaleX:1.02,scaleY:1.02,y:-0.5},4,cjs.Ease.get(-1)).to({scaleX:1.1,scaleY:1.1,y:-5.3},5,cjs.Ease.get(1)).to({scaleX:1.08,scaleY:1.08,x:-134.2,y:-3.9},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:-134.3,y:0.7},5,cjs.Ease.get(1)).wait(37));

	// Символ 3
	this.instance_5 = new lib.Символ3();
	this.instance_5.setTransform(-215.2,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.03,scaleY:1.03,y:-0.5},4,cjs.Ease.get(-1)).to({scaleX:1.15,scaleY:1.15,y:-5.3},5,cjs.Ease.get(1)).to({scaleX:1.11,scaleY:1.11,y:-3.9},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:0.7},5,cjs.Ease.get(1)).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250,-11.9,342.4,25);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(6.7,34.6,1,1,0,0,0,0,0.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87.9,-25.4,175.8,50.8);


(lib.Символ21 = function(mode,startPosition,loop) {
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
	this.instance.setTransform(15.2,9);
	this.instance.alpha = 0.52;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ19();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364,-289,728,578);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(78.9,-0.1);

	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(78.9,1.9);
	this.instance_1.alpha = 0.539;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-171.1,-12,342.4,27);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(0,4.6,1,1,0,0,0,0,4.6);

	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(-9.5,-0.6,0.74,0.74);

	this.instance_2 = new lib.Символ25();
	this.instance_2.setTransform(-9.3,0.2);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66CC00").s().p("AtuD9IAAn5IXeAAIAAH5gACigrQgKAFgHAJQgFAJgDANQgDAMAAAQQAAATACANQADANAGAJQAGAKAKAEQAKADAQAAQAPABALgFQAJgEAGgKQAHgIADgNQACgOABgSQgBgRgCgMQgCgMgGgKQgHgJgKgFQgLgDgPAAQgOgBgLAFgAk9gTQAEAEAAAHQAAAHgDACQgDAEgIACIgUAEIgPAGQgHAEgEAFQgEAFgCAGQgCAHAAAKQAAAHACAHQABAHAEAFQAEAGAGADQAHAEAJgBQAMABAIgEQAIgDAGgLIABAAIAEAPIAhAAIgDgMIgBhUQAAgJgCgIQgBgHgGgGQgGgFgJgDQgKgDgPAAQgKAAgJACQgIABgHAGQgGAEgEAIQgDAJgBALIAAAEIAfAAIAAgFQABgHAEgFQAEgEAHgBQAKABADAEgAnYgqQgLAGgFAKQgGAKgBAMQgCALAAANIABAaQAAANAGALQAEAKALAGQAFADAIABQAHACAJAAQAaAAALgMQALgMACgYIggAAQgBANgEAGQgEAGgJABQgFgBgDgCQgDgDgCgEIgDgKIgBgXIBEAAIAAgIQAAgQgBgKQgCgMgGgKQgGgJgJgFQgKgEgPAAQgRgBgLAGgAFQgFIASBfIAoAAIAdiGIgiAAIgPBeIgBAAIgSheIgmAAIgRBeIgBAAIgPheIgiAAIAcCGIApAAIARhfgABNgRQADAEAAALIAABcIAkAAIAAhjQgBgKgCgHQgCgIgEgEQgKgJgRAAQgWAAgKARIgBAAIAAg6IgjAAIAACyIAjAAIAAhaQAAgVASABQAJAAADADgAhrgRQADAEAAALIAABcIAjAAIAAhjQAAgKgCgHQgDgIgEgEQgJgJgRAAQgLgBgJAFQgJAFgFAKIgBAAIAAgQIghAAIAACGIAjAAIAAhaQAAgVATABQAHAAAEADgAkABaIAjAAIAAhSQAAgGADgDQACgFADgDQAFgDAEgBIAJgCIALABIAAghIgGAAQgLAAgIAFQgHAHgGAJIAAAAIAAgSIgiAAgApgBaIBkAAIAAgeIhAAAIAAiUIgkAAgAKFj8IDqEJIAAAGIjqDlgACxBCQgEgEgCgGQgCgHAAgIIAAgnQAAgGACgGQACgHAEgDQAEgEAGAAQALAAAEALQACAFABAIIABAVQgCAegCAIQgCAFgEACQgDAEgGAAQgGgBgEgDgAlYBAQgEgGAAgHQABgKAEgFQAEgFALgDIAHgCIAIgFIAAAbQAAAGgCAEIgGAGQgCADgFACIgGABQgIgBgCgFgAnPAHIABgOIADgIQACgEADgDQADgCAGAAQAFABADABQAEADACADQACAEAAAHIABAMg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.9,-25.4,175.8,50.8);


// stage content:



(lib.tao1_72890 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		
		document.addEventListener("mouseover", fl_mouseover.bind(this));
		
		function fl_mouseover()
		{
			this.fon.gotoAndStop(1);
		}
		
		
		document.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout()
		{
			this.fon.gotoAndStop(0);
		}
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTag, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.instance = new lib.Символ24();
	this.instance.setTransform(629.1,48.8,1,1,0,0,0,0,4.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(195.1,41.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 1
	this.instance_2 = new lib.Символ18();
	this.instance_2.setTransform(436,89.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// ffikonn.jpg
	this.fon = new lib.Символ21();
	this.fon.setTransform(364,-72.9);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,-316.9,728,578);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;