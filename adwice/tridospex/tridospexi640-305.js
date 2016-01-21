(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/burn.jpg", id:"burn"},
		{src:"images/hunter05_03.png", id:"hunter05_03"},
		{src:"images/hunter05_06.png", id:"hunter05_06"},
		{src:"images/hunter05_09.png", id:"hunter05_09"},
		{src:"images/hunter05_11.png", id:"hunter05_11"},
		{src:"images/hunter05_14.png", id:"hunter05_14"},
		{src:"images/hunter05_18.png", id:"hunter05_18"},
		{src:"images/hunter05_21.png", id:"hunter05_21"},
		{src:"images/hunter05_24.png", id:"hunter05_24"},
		{src:"images/hunter05_27.png", id:"hunter05_27"},
		{src:"images/hunter05_31.png", id:"hunter05_31"},
		{src:"images/ogon.png", id:"ogon"},
		{src:"images/trap.png", id:"trap"}
	]
};



// symbols:



(lib.burn = function() {
	this.initialize(img.burn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,398);


(lib.hunter05_03 = function() {
	this.initialize(img.hunter05_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,144);


(lib.hunter05_06 = function() {
	this.initialize(img.hunter05_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,265);


(lib.hunter05_09 = function() {
	this.initialize(img.hunter05_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,150);


(lib.hunter05_11 = function() {
	this.initialize(img.hunter05_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,69);


(lib.hunter05_14 = function() {
	this.initialize(img.hunter05_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,52);


(lib.hunter05_18 = function() {
	this.initialize(img.hunter05_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,87);


(lib.hunter05_21 = function() {
	this.initialize(img.hunter05_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,84);


(lib.hunter05_24 = function() {
	this.initialize(img.hunter05_24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,123);


(lib.hunter05_27 = function() {
	this.initialize(img.hunter05_27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,109);


(lib.hunter05_31 = function() {
	this.initialize(img.hunter05_31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,81);


(lib.ogon = function() {
	this.initialize(img.ogon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,143);


(lib.trap = function() {
	this.initialize(img.trap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,112);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FF00").ss(6.4,1,1).p("ABggvIhgBfIhfhf");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.8,-8,25.6,16);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AMmBBIgNgFQgGgDgFgEIgIgJIgHgMQgCgIgBgHQgCgIABgJQgBgIACgIQABgHACgIIAHgMIAIgJQAFgEAGgDIANgFQAJgDAWgBIASABIAOADIANAFIALAHIAIAJIAHAMQACAIABAHQABAIAAAIQAAAJgBAIQgBAHgCAIIgHAMIgIAJIgLAHIgNAFIgOADIgSABQgWgCgJgCgAMzgoQgHADgFAFQgFAGgCAJQgCAHAAAKQAAALACAHQACAJAFAGQAFAFAHADQAIADAKAAQALAAAIgDQAHgDAFgFQAFgGACgJQACgHABgLQgBgKgCgHQgCgJgFgGQgFgFgHgDQgIgDgLAAQgKAAgIADgArWBBIgMgFQgGgDgEgEIgJgJIgHgMQgCgIgBgHQgCgIAAgJQAAgIACgIQABgHACgIIAHgMIAJgJQAEgEAGgDIAMgFQAKgDAXgBIARABIAOADIAOAFIAKAHIAJAJIAGAMQACAIABAHQACAIgBAIQABAJgCAIQgBAHgCAIIgGAMIgJAJIgKAHIgOAFIgOADIgRABQgXgCgKgCgArHgoQgIADgFAFQgEAGgDAJQgDAHAAAKQAAALADAHQADAJAEAGQAFAFAIADQAHADALAAQAKAAAIgDQAHgDAFgFQAFgGACgJQACgHAAgLQAAgKgCgHQgCgJgFgGQgFgFgHgDQgIgDgKAAQgLAAgHADgALOBCQgFAAgCgDQgDgBABgFIAAgvIhAAAIAAAvQAAAFgDABQgCADgEAAIgRAAQgFAAgCgDQgDgCABgEIAAhxQgBgEADgCQACgDAFAAIARAAQAEAAACADQADACAAAEIAAApIBAAAIAAgpQgBgEADgCQACgDAFAAIARAAQAEAAACADQADACAAAEIAABxQAAAEgDACQgCADgEAAgAG3BCQgEAAgDgDQgCgCAAgEIAAgJQAAgDACgCQADgDAEAAIAHAAIARhEQADgIAGgLQAFgGAJgFQAIgEAKgBQAIgCAMAAIAyAAQAEAAACADQADABAAAFIAABxQAAAFgDABQgCADgEAAgAIAglQgEAAgDADQgGAFgCAJIgPA8IBCAAIAAhPIgcAAQgEAAgEACgAGIBCQgEAAgCgDQgDgCAAgEIAAhUIgxBUQgCAEgDACQgFADgDAAIgfAAQgEAAgCgDQgDgCAAgEIAAhxQAAgEADgCQACgDAEAAIAQAAQAEAAADADQACABAAAFIAABbIA1hbQACgEAEgCQADgDADAAIAcAAQAEAAACADQADACAAAEIAABxQAAAEgDACQgDADgDAAgACFBCQgEAAgDgDQgCgCAAgEIAAhxQAAgEACgCQADgDAEAAIBLAAQAKAAAIACQAJACAHAFQAGAEAEAHQADAEAAAEQACAFAAAFQAAAHgDAFQgDAHgHAFIAIAEIAGAHQACAEABAFIABAJQABAKgFAIQgEAHgGAFQgIAFgIACQgKADgJAAgACfApIA2AAQAHAAAEgEQADgFAAgHQAAgHgDgEQgEgFgHAAIg2AAgACfgOIAyAAQAGABADgEQAEgDAAgHQAAgGgEgDQgDgEgGAAIgyAAgAhJBCQgEAAgDgDQgCgCAAgEIAAhxQAAgFACgBQADgDAEAAIBpAAQAEAAACADQADACAAAEIAAAJQAAADgDACQgCADgEAAIhPAAIAAAbIBDAAQAEAAADADQACADAAADIAAAGQAAAEgCADQgDACgEAAIhDAAIAAAcIBPAAQADAAACADQADACAAADIAAAJQAAAEgDACQgCADgDAAgAkfBCQgEAAgDgDQgCgCAAgEIAAhxQAAgEACgCQADgDAEAAIASAAQADAAADADQADABAAAFIAABgIAoAAIAAhgQAAgFADgBQACgDADAAIASAAQAEAAACADQADACAAAEIAABgIApAAIAAhgQAAgFACgBQADgDAEAAIASAAQACAAADADQADACAAAEIAABxQAAAEgDACQgDADgCAAgAm0BCQgDAAgDgDQgCgCgBgEIAAhxQAAgEADgCQACgDAEAAIARAAQAEAAADADQACACAAAEIAAAkIAuAAQALAAAJADQAKADAGAGQAIAFADAGQAEAMAAAIIgBAKIgDAIQgDAIgIAGQgGAFgKADQgJADgLAAgAmaAoIAuAAQAIAAAFgFQADgEAAgIQAAgKgDgEQgFgFgIABIguAAgAnxBCQgEAAgCgDQgDgCAAgEIAAhgIgXAAIgJACQgDAAgDADIgGAGQgCADgBAFIgWBNQgBAFgDABQgDADgEAAIgSAAQgEAAgCgCQgBgDAAgCIAYhYIAEgKIAFgIQAGgHAIgFQAJgDAKgBQAIgCAMAAIAvAAQADAAACADQACACAAAEIAABxQAAAFgDABQgCADgDAAgAuHBCQgDAAgDgDQgCgBAAgFIAAhxQAAgEACgCQADgDAEAAIBoAAQADAAAEADQACACAAAEIAAAJQAAADgCACQgEADgDAAIhPAAIAAAWIAvAAQAKABAKACQAJADAHAEQAGAGAFAGQADAMAAAHIgBAKIgCAJQgFAIgGAFQgHAFgJACQgKADgKAAgAttAoIAvAAQAHAAAEgEQAEgEAAgIQAAgIgEgEQgEgEgHAAIgvAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-91.3,-6.9,182.6,13.9);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ArQBRIgNgFQgGgDgFgEIgIgJIgHgNQgCgGgBgIIgBgRIABgQQABgHACgIIAHgLIAIgKQAFgEAGgDIANgFQAJgDAWgBIARABIAPADIANAFIALAHIAIAKIAGALQADAIABAHQABAGAAAKQAAAIgBAJQgBAIgDAGIgGANIgIAJIgLAHIgNAFIgPADIgRABQgWgBgJgDgArDgYQgHADgFAFQgFAGgCAJQgCAFAAAMQAAAKACAJQACAIAFAFQAFAGAHADQAIADAKAAQALAAAIgDQAHgDAFgGQAFgFACgIQACgJAAgKQAAgMgCgFQgCgJgFgGQgFgFgHgDQgIgDgLAAQgKAAgIADgAMRBSQgEAAgCgCQgDgDAAgEIAAhyQAAgDADgCQACgDAEAAIARAAQAEAAADADQACACAAADIAAAlIAuAAQALAAAJADQAJABAHAGQAHAFAEAIQAEAMAAAHIgBAKIgDAJQgEAIgHAGQgHAGgJADQgJACgLAAgAMrA4IAuAAQAIAAAEgEQAEgGAAgIQAAgIgEgFQgEgFgIAAIguAAgAI8BSQgEAAgDgCQgCgDAAgEIAAhyQAAgDACgCQADgDAEAAIARAAQAEAAACADQADACAAADIAABhIApAAIAAhhQAAgDACgCQADgDADAAIASAAQAEAAACADQADACAAADIAABhIApAAIAAhhQAAgDACgCQADgDADAAIASAAQADAAADADQADACAAADIAAByQAAAEgDADQgDACgDAAgAGuBSQgEAAgCgCQgDgDAAgEIAAhyQAAgDADgCQACgDAEAAIBrAAQAEAAACADQADACAAADIAAAJQAAAEgDACQgCADgEAAIhRAAIAAAZIBGAAQAEAAACADQADADAAADIAAAIQAAAFgDACQgCADgEgBIhGAAIAAAcIBRAAQAEAAACADQACACAAADIAAAJQAAAEgCADQgCACgEAAgAEVBSQgEAAgCgCQgDgDAAgEIAAhyQAAgDADgCQACgDAEAAIBHAAQAOAAAKADIAJADIAIAGIAHAIIAFAJIACAKIABAKIgBANIgCALIgFAJQgDAEgEADIgIAFIgJAFQgKADgOAAIgsAAIAAAUQAAAEgDADQgDACgDAAgAEwAaIAhAAIANAAQAGgCAEgDQAEgDADgEQACgFAAgJQAAgFgCgFQgDgGgEgCQgEgDgGgBIgNgBIghAAgACwBSQgDAAgDgCQgCgCAAgFIAAhgIgqAAQgEAAgCgDQgDgCAAgEIAAgJQAAgDADgCQACgDAEAAIB2AAQAEAAADADQACACAAADIAAAJQAAAEgCACQgDADgEAAIgpAAIAABgQAAAFgDACQgCACgEAAgAhFBSQgDAAgDgCQgDgDAAgEIAAhyQAAgDADgCQADgDADAAIBpAAQAEAAADADQACACAAADIAAAJQAAAEgCACQgDADgEAAIhOAAIAAAZIBDAAQAEAAADADQACADAAADIAAAIQAAAFgCACQgDADgEgBIhDAAIAAAcIBOAAQAEAAACADQADACAAADIAAAJQAAAEgDADQgCACgEAAgAkaBSQgEAAgCgCQgDgDAAgEIAAhyQAAgDADgCQACgDAEAAIARAAQAEAAADADQACACAAADIAABhIApAAIAAhhQAAgDACgCQADgDAEAAIARAAQAEAAACADQADACAAADIAABhIApAAIAAhhQAAgDACgCQADgDAEAAIARAAQAEAAACADQADACAAADIAAByQAAAEgDADQgCACgEAAgAmvBSQgEAAgCgCQgDgDAAgEIAAhyQAAgDADgCQACgDAEAAIASAAQADAAADADQACACAAADIAAAlIAuAAQALAAAJADQAJABAHAGQAHAFAEAIQAEAMAAAHIgBAKIgDAJQgEAIgHAGQgHAGgJADQgJACgLAAgAmVA4IAuAAQAIAAAEgEQAEgGAAgIQAAgIgEgFQgEgFgIAAIguAAgAnsBSQgEAAgDgCQgCgDAAgEIAAhgIgXAAQgEAAgEABQgEACgDACIgGAGIgDAIIgWBNQgBAFgDACQgDACgEAAIgTAAQgDAAgCgCQgCgCABgEIAYhXIAEgKIAFgIQAGgHAJgFQAHgDALgBQAIgCAMAAIAuAAQADAAADADQACACAAADIAAByQAAAFgDACQgCACgEAAgAuCBSQgEAAgCgCQgDgCAAgFIAAhyQAAgDADgCQADgDADAAIBpAAQAEAAACADQADACAAADIAAAJQAAAEgDACQgCADgEAAIhOAAIAAAXIAtAAQALgBAJABQAKADAGAFQAIAFADAIQAEALAAAIIgBAKIgDAJQgDAIgIAFQgGAGgKACQgJACgLAAgAtnA4IAtAAQAIAAAEgEQAEgEAAgIQAAgIgEgEQgEgEgIAAIgtAAgAH2g7QgFAAgDgDQgDgDAAgFIAAgDQAAgFADgDQADgDAFAAIAJAAQAFAAADADQADADAAAFIAAADQAAAFgDADQgDADgFAAgAHHg7QgFAAgDgDQgDgDAAgFIAAgDQAAgFADgDQADgDAFAAIAJAAQAFAAADADQADADAAAFIAAADQAAAFgDADQgDADgFAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-90.8,-8.5,181.6,17.1);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAjgABxQgMgDgKgFQgLgGgIgHQgIgIgHgJQgGgJgEgMQgFgLgCgOQgCgOAAgPQAAgOACgOQACgOAFgLQAEgMAGgJQAHgJAIgIQAIgHALgGQAKgFAMgDQAQgFAngCIAdACQAOACAMADQAMADAKAFQAKAGAJAHQAIAIAGAJQAHAJAEAMQAEALACAOQADAOAAAOQAAAPgDAOQgCAOgEALQgEAMgHAJQgGAJgIAIQgJAHgKAGQgKAFgMADQgMADgOACIgdACQgngDgQgEgEAj3gBHQgNAFgIALQgIAJgEAOQgEAPAAARQAAASAEAPQAEAOAIAJQAIALANAEQANAFATABQASgBAOgFQAMgEAJgLQAIgJAEgOQAEgPAAgSQAAgRgEgPQgEgOgIgJQgJgLgMgFQgOgEgSgBQgTABgNAEgAOxBxQgMgDgKgFQgKgGgIgHQgJgIgGgJQgGgJgFgMQgEgLgCgOQgCgOAAgPQAAgOACgOQACgOAEgLQAFgMAGgJQAGgJAJgIQAIgHAKgGQAKgFAMgDQAQgFAngCIAeACQANACAMADQAMADALAFQAKAGAIAHQAJAIAGAJQAGAJAEAMQAFALACAOQACAOAAAOQAAAPgCAOQgCAOgFALQgEAMgGAJQgGAJgJAIQgIAHgKAGQgLAFgMADQgMADgNACIgeACQgngDgQgEgAPJhHQgNAFgJALQgIAJgEAOQgEAPAAARQAAASAEAPQAEAOAIAJQAJALANAEQANAFASABQATgBANgFQANgEAIgLQAJgJAEgOQADgPAAgSQAAgRgDgPQgEgOgJgJQgIgLgNgFQgNgEgTgBQgSABgNAEgAn3BxQgMgDgKgFQgLgGgIgHQgIgIgHgJQgGgJgEgMQgFgLgCgOQgCgOAAgPQAAgOACgOQACgOAFgLQADgKAFgHIACgEQAHgJAIgIQAIgHALgGQAJgEAKgDIADgBQAQgFAngCIAdACQAOACAMADIAOAFIAIADQAKAGAJAHQAIAIAGAJQAHAJAEAMQAEALACAOQADAOAAAOQAAAPgDAOQgCAOgEALQgEAMgHAJQgGAJgIAIQgJAHgKAGQgKAFgMADQgMADgOACIgdACQgngDgQgEgAnghHQgNAFgIALIgFAGQgEAIgDAJQgEAPAAARQAAASAEAPQAEAOAIAJQAIALANAEQANAFATABQASgBAOgFQAMgEAJgLQAIgJAEgOQAEgPAAgSQAAgRgEgPIAAgBQgEgOgIgIQgJgLgMgFQgJgCgKgBIgNgCQgTABgNAEgEghFABxQgMgDgKgFQgKgGgIgHQgJgIgGgJQgGgJgFgMQgEgLgCgOQgCgOAAgPQAAgOACgOIACgKQABgJADgGQAFgMAGgJQAGgJAJgIIAFgEIANgJQAKgFAMgDQAMgDAYgCIATgCIAeACIAHABIASAEQAMADALAFQAKAGAIAHQAJAIAGAJQAGAJAEAMQAFALACAOQACAOAAAOQAAAPgCAOQgCAOgFALQgEAMgGAJQgGAJgJAIQgIAHgKAGQgLAFgMADQgMADgNACIgeACQgngDgQgEgEgghgBJIgMACQgNAFgJALQgIAJgEAOQgEAPAAARQAAASAEAPQAEAOAIAJQAJALANAEQANAFASABQATgBANgFQANgEAIgLQAJgJAEgOQADgPAAgSQAAgRgDgPQgEgOgJgJQgHgIgJgGIgFgCQgNgEgTgBQgKABgJACgATZBzQgNgCgLgEQgLgDgJgGQgKgFgHgHQgIgHgFgKQgGgIgEgLQgEgMgBgNQgCgNAAgOQAAgNACgNQABgNAEgMQAEgLAGgJQAFgJAIgHQAHgHAKgFQAJgGALgDQALgEANgCIBAgCQARABAQAEQARAFANAIQAOAKAIANQAEAGACAIQACAIAAAJQAAAKgHAEQgEADgGABIgTAAQgHAAgFgFQgGgDgFgKQgGgMgJgHQgKgHgPAAIgcAAQgSAAgMAEQgLADgHAJQgHAIgDANQgDANAAAUQAAAVADANQADANAHAIQAHAJALADQAMAEASAAIAgAAQAOAAAKgHQAKgHAFgMQAFgKAGgDQAFgFAHAAIAUAAQAQADAAAPQAAAJgCAIQgCAIgEAGQgIANgNAJQgNAJgRAFQgQAEgSAAgAjPBzQgNgCgLgEQgMgDgJgGQgJgFgIgHQgHgHgGgKQgFgIgEgLQgEgMgCgNQgCgNAAgOQAAgNACgNIACgJIAEgQQAEgLAFgJIAIgKIAFgGQAIgHAJgFQAJgGAMgDQALgEANgCIBAgCQAQABAQAEIABAAQARAFANAIQAKAIAHAJIAEAGQAEAGACAIQACAIAAAJQAAAKgGAEQgFADgFABIgTAAQgIAAgFgFIgCgBQgEgEgEgIQgGgMgKgHIgKgFQ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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-272.9,-12,545.8,24.1);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AyB6EMAkDAAAMAAAA0JMgkDAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AyBaFMAAAg0JMAkDAAAMAAAA0Jg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-116.4,-168,233,336);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.trap();
	this.instance.setTransform(-68.3,-31.1,1,1,-23.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68.3,-71.4,136.6,142.8);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.burn();
	this.instance.setTransform(-367.5,-141,0.855,0.855);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-367.5,-141,684.1,340.3);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AwBDOQgWgGgSgKQgTgKgPgMQgPgOgLgRQgMgRgIgVQgHgUgFgZQgDgaAAgcQAAgcADgZQAFgYAHgVQAIgWAMgQQALgRAPgOQAPgMATgKQASgKAWgGQAdgJBHgDIA1ACQAaADAVAHQAXAGASAKQATAKAOAMQAQAOALARQALAQAIAWQAIAVAEAYQAEAZAAAcQAAAcgEAaQgEAZgIAUQgIAVgLARQgLARgQAOQgOAMgTAKQgSAKgXAGQgVAGgaAEIg1ACQhHgDgdgJgAvWiBQgYAJgPARQgPATgHAZQgHAaAAAhQAAAiAHAZQAHAbAPARQAPASAYAJQAYAJAhAAQAhAAAZgJQAYgJAPgSQAOgRAIgbQAGgZAAgiQAAghgGgaQgIgZgOgTQgPgRgYgJQgZgKghAAQghAAgYAKgAnmDQQgYgDgUgGQgVgGgQgKQgRgKgOgMQgOgNgKgRQgLgRgGgUQgHgUgDgXQgEgZAAgaQAAgaAEgYQADgXAHgUQAGgUALgRQAKgQAOgOQAOgMARgKQAQgKAVgGQAUgGAYgDIB0gEQAfAAAdAIQAfAIAXAQQAaARAOAYQAGANAEANQAFAOgBAQQAAASgMAJQgIAFgKAAIgjAAQgNAAgJgGQgMgIgHgSQgLgWgRgMQgTgMgZAAIg1AAQghAAgUAGQgWAHgMAPQgMAOgGAaQgEAXAAAlQAAAlAEAYQAGAZAMAPQAMAPAWAHQAUAGAhAAIA6AAQAaAAATgNQARgLAKgWQAJgSAKgIQAKgGAOAAIAjAAQAdAFAAAbQAAAPgDAPQgFANgHANQgNAYgaARQgXAPgfAJQgdAIggAAgAZXDRQgLAAgJgIQgHgIgBgLIAAkOIiZEOQgGAMgNAHQgMAIgLAAIhhAAQgMAAgIgIQgIgHAAgMIAAlrQAAgMAIgHQAIgIAMAAIA0AAQAKAAAJAIQAIAHAAAMIAAEjICmkjQAHgLALgIQANgJAKABIBWAAQAMAAAHAIQAJAIgBALIAAFrQAAALgIAIQgIAIgMAAgAR9DRQgRABgOgJQgKgHgLgMIhZhyIhaByQgKAMgKAHQgOAJgRgBIg9AAQgMABgEgJQgEgIAJgLICUi7IiMiwQgIgLADgIQAEgJALABIA/AAQARgBAOAJQALAHAJAMIBRBmIBRhmQAJgMALgHQAOgJARABIA/AAQAMgBADAJQADAIgIALIiMCwICUC7QAJALgEAIQgEAJgLgBgAGVDRQgLAAgIgIQgIgIAAgMIAAlqQAAgMAIgHQAIgIALAAIFTAAQAKAAAJAIQAIAHAAAMIAAAcQAAALgIAIQgJAJgKAAIkAAAIAABUIDcAAQALAAAJAJQAHAIABALIAAAZQgBAMgHAJQgJAHgLAAIjcAAIAABWID/AAQALAAAIAJQAIAIAAALIAAAcQAAAMgIAHQgIAIgMAAgADUDRQgMAAgJgIQgHgIgBgLIAAkzIjTAAIAAEzQAAALgJAIQgIAIgLAAIg4AAQgLAAgIgIQgIgHAAgMIAAlrQAAgMAIgHQAHgIAMAAIF7AAQALAAAIAIQAIAHAAAMIAAFrQAAALgIAIQgIAIgMAAgA6KDRQgLAAgIgIQgJgIABgLIAAgcQgBgLAJgIQAIgJALAAIAXAAIA2jbQAGgYAWgiQARgVAbgOQAYgMAggGQAcgEAjAAICeAAQAMAAAHAIQAJAHgBAMIAAFrQABAMgJAHQgHAIgMAAgA2kh6QgLAEgKAIQgSAPgGAbIgxDCIDPAAIAAj7IhXAAQgOAAgMADg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-170.3,-21.9,340.6,43.8);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ARJDRQgLAAgIgIQgJgIABgLIAAkOIiZEOQgHAMgMAHQgMAIgNAAIhhAAQgLAAgIgIQgIgHAAgMIAAlrQAAgMAIgHQAIgIALAAIA0AAQAMAAAHAIQAJAHAAAMIAAEjICnkjQAGgLAMgIQALgJAKABIBXAAQALAAAJAIQAHAIABALIAAFrQAAALgJAIQgIAIgLAAgAEnDRQgLAAgIgIQgJgIABgLIAAlrQgBgMAJgHQAHgIAMAAIDfAAQAqAAAhAJIAeAMQAOAIALAKQAMAKAJANQAJANAGAPQAFAPADASIADAoIgDAnQgDAQgFAQQgGAPgJANQgJAMgMALQgLAJgOAIIgeANQghAJgqAAIiMAAIAABCQAAAMgIAHQgIAIgMAAgAF6AhIBrAAQAXAAAQgDQAUgDANgJQAOgJAGgNQAIgQAAgZQAAgZgIgRQgGgPgOgJQgNgJgUgDQgQgDgXABIhrAAgAgTDRQgLAAgJgIQgIgHAAgMIAAkzIiDAAQgMAAgHgJQgJgIAAgLIAAgcQAAgMAJgHQAHgIAMAAIFyAAQALAAAJAIQAIAHAAAMIAAAcQAAALgIAIQgJAJgLAAIiCAAIAAEzQAAAMgJAHQgIAIgLAAgAlQDRQgLAAgJgIQgHgHgBgMIAAhKIjQAAIgUBKQgDAMgJAHQgKAIgMAAIg6AAQgMAAgFgIQgHgHAEgMIBKkVQAEgRAHgOQAIgOAJgMQASgVAcgOQAYgLAhgGQAcgEAjAAICeAAQAKAAAIAIQAHAHAAAMIAAFrQAAAMgIAHQgIAIgMAAgAnah6QgMAFgKAHQgLAIgGALQgIALgDANIgaBcIC6AAIAAiWIhTAAQgOAAgNADgAtEDRQgLAAgIgIQgJgHABgMIAAiWIjKAAIAACWQAAAMgIAHQgJAIgLAAIg2AAQgMAAgIgIQgJgIAAgLIAAlrQAAgMAJgHQAIgIAMAAIA2AAQALAAAJAIQAIAHAAAMIAACEIDKAAIAAiEQgBgMAJgHQAIgIALAAIA2AAQANAAAHAIQAJAHAAAMIAAFrQAAALgJAIQgHAIgNAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117.7,-21,235.4,42);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#990000","#FF3300","#990000"],[0,0.435,1],0.2,-31.3,0.2,12.2).s().p("AlmCJIAAkRILNAAIAAERg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.9,-13.7,71.8,27.5);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hunter05_31();
	this.instance.setTransform(-14.5,-40.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.5,-40.5,29,81);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hunter05_18();
	this.instance.setTransform(-28.5,-43.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.5,-43.5,57,87);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hunter05_24();
	this.instance.setTransform(-28.5,-61.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.5,-61.5,57,123);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hunter05_14();
	this.instance.setTransform(-17.5,-26);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.5,-26,35,52);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hunter05_11();
	this.instance.setTransform(-30,-34.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30,-34.5,60,69);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hunter05_27();
	this.instance.setTransform(-56.5,-59.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56.5,-59.6,114,109);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hunter05_09();
	this.instance.setTransform(-68,-75);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68,-75,136,150);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hunter05_21();
	this.instance.setTransform(-32.5,-42);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.5,-42,65,84);


(lib.Анимация4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ogon();
	this.instance.setTransform(-36.3,-57.1,0.6,0.623,0,2.7,18.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.5,-57.1,81.2,114.3);


(lib.Анимация3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ogon();
	this.instance.setTransform(-36.3,-57.1,0.6,0.623,0,2.7,18.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.5,-57.1,81.2,114.3);


(lib.Анимация2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ogon();
	this.instance.setTransform(-36.3,-57.1,0.6,0.623,0,2.7,18.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.5,-57.1,81.2,114.3);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ogon();
	this.instance.setTransform(-36.3,-57.1,0.6,0.623,0,2.7,18.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.5,-57.1,81.2,114.3);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(0.1,0,1,1,-92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:4.5},4,cjs.Ease.get(-1)).to({x:10.1},5,cjs.Ease.get(1)).to({x:5.1},5,cjs.Ease.get(-1)).to({x:0.1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-13.1,17.1,26.3);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.setTransform(296.8,-13.4,1,1,6.5);

	this.instance_1 = new lib.Символ36();
	this.instance_1.setTransform(-89.2,-17,1,1,-4.2);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-180.5,-32.2,568.8,36);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.setTransform(-329,-145.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-509.5,-178.2,568.8,36);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(0.8,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[1,-12.4,5.4,-11.9,8.4,-8.6,12.3,-4.7,12.3,0.7,12.3,6.1,8.4,10,4.7,13.9,-0.8,13.9,-1.1,13.9,-1.4,13.9]}},10).to({guide:{path:[-1.7,13.8,-2.7,13.8,-3.7,13.6]}},1).to({guide:{path:[-3.9,13.6,-7.3,12.8,-10.2,10,-14.1,6.1,-14.1,0.6,-14.1,-4.7,-10.2,-8.6,-6.5,-12.5,-1,-12.5,-0.1,-12.5,0.8,-12.4]}},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-83.9,136.6,142.8);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ29();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.5,-83.9,136.6,142.8);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.alpha = 0.191;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},48).to({alpha:0.191},53).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ26();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(102));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-367.5,-141,684.1,340.3);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(8,6,0.803,0.803,8.7);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.setTransform(8,1,1.087,1.087,-8.7);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04,scaleY:1.04,rotation:-4.3,y:3.5,alpha:0.5},9).to({_off:true,scaleX:1.09,scaleY:1.09,rotation:-8.7,y:1,alpha:0},9).wait(1));

	// Слой 2
	this.instance_2 = new lib.Анимация3("synched",0);
	this.instance_2.setTransform(8,6);

	this.instance_3 = new lib.Анимация4("synched",0);
	this.instance_3.setTransform(8,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},18).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-51.1,81.2,114.3);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.86,x:-4.9},9,cjs.Ease.get(-1)).to({scaleX:0.73,x:-9.8},9,cjs.Ease.get(1)).to({scaleX:0.87,x:-4.6},10,cjs.Ease.get(-1)).to({scaleX:1,x:0},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.9,-13.7,71.8,27.5);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ20();
	this.instance.setTransform(-220.7,0);

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#333333","#666666","#333333"],[0,0.435,1],1.5,-31.3,1.5,12.2).s().p("EgoFACJIAAkRMBQLAAAIAAERg");

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-256.6,-13.7,513.3,27.5);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.setTransform(-21,1.5,0.823,0.823);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-245.6,-8.4,449.1,19.8);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ18();
	this.instance.setTransform(-3.7,-0.4,0.509,0.509,0,0,0,-0.1,0);

	// Слой 1
	this.instance_1 = new lib.Символ19();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-256.6,-13.7,513.3,27.5);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(0,0,1.081,1.081,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04,scaleY:1.04,rotation:-1.8},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0},10,cjs.Ease.get(1)).to({scaleX:1.04,scaleY:1.04,rotation:-1.6},10,cjs.Ease.get(-1)).to({scaleX:1.08,scaleY:1.08,rotation:-3.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185.2,-34.8,370.4,69.7);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(5.3,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:1.05,rotation:1.8},9,cjs.Ease.get(-1)).to({scaleX:1.1,scaleY:1.1,rotation:4.2},10,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05,rotation:2,x:5.2,y:-1.5},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:5.3,y:-1.4},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.4,-22.4,235.4,42);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 10
	this.instance = new lib.Символ10();
	this.instance.setTransform(-13.5,52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.96,rotation:-7,x:-4.1,y:54.1},6,cjs.Ease.get(-1)).to({scaleX:0.91,rotation:-16.7,x:8.4,y:56.1},8,cjs.Ease.get(1)).to({scaleX:0.96,rotation:-8.3,x:-2.6,y:54.3},10,cjs.Ease.get(-1)).to({scaleX:1,rotation:0,x:-13.5,y:52.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 9
	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(13.5,-34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-1.8,x:15.6,y:-33.6},6,cjs.Ease.get(-1)).to({rotation:-4.4,x:18.4,y:-32.4},8,cjs.Ease.get(1)).to({rotation:-2.1,x:16,y:-33.4},10,cjs.Ease.get(-1)).to({rotation:0,x:13.5,y:-34.4},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-95.9,84,192);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(20));

	// Символ 8
	this.instance = new lib.Символ8();
	this.instance.setTransform(-70,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},18).to({_off:true},1).wait(1).to({_off:false},0).to({alpha:1},18).wait(1));

	// Символ 7
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(-119.9,16.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},18).wait(2).to({alpha:0},18).wait(1));

	// Символ 5
	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(-120.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.5,-75,136,150);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.setTransform(-15,24.4,1,1,42.3);
	this.instance.compositeOperation = "lighter";

	// Слой 1
	this.instance_1 = new lib.hunter05_03();
	this.instance_1.setTransform(-71.6,-23.7);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-81.6,-35.3,136.9,155.6);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.setTransform(78,20.1,1.223,1.18,0,-35.9,144.1);
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.Символ24();
	this.instance_1.setTransform(-92.4,-94,0.515,0.515,-165.8,0,0,4.2,-3.9);
	this.instance_1.compositeOperation = "lighter";

	this.instance_2 = new lib.Символ24();
	this.instance_2.setTransform(-63.3,-71.6,0.515,0.515,153.2,0,0,4.2,-4);
	this.instance_2.compositeOperation = "lighter";

	this.instance_3 = new lib.Символ24();
	this.instance_3.setTransform(-47.4,-60.6,0.515,0.515,-27.5,0,0,4.2,-4);
	this.instance_3.compositeOperation = "lighter";

	this.instance_4 = new lib.Символ24();
	this.instance_4.setTransform(-23.4,-38.6,0.515,0.515,-27.5,0,0,4.2,-4);
	this.instance_4.compositeOperation = "lighter";

	this.instance_5 = new lib.Символ24();
	this.instance_5.setTransform(17.1,-5.4,0.515,0.515);
	this.instance_5.compositeOperation = "lighter";

	this.instance_6 = new lib.Символ24();
	this.instance_6.setTransform(-2.3,-20,0.515,0.515,-27.5,0,0,4.2,-4);
	this.instance_6.compositeOperation = "lighter";

	this.instance_7 = new lib.Символ24();
	this.instance_7.setTransform(-38.1,-109.4,1,1,-27.5,0,0,4.2,-4);
	this.instance_7.compositeOperation = "lighter";

	this.instance_8 = new lib.Символ24();
	this.instance_8.setTransform(40.5,-45);
	this.instance_8.compositeOperation = "lighter";

	this.instance_9 = new lib.Символ24();
	this.instance_9.setTransform(2.9,-73.4,1,1,-27.5,0,0,4.2,-4);
	this.instance_9.compositeOperation = "lighter";

	// Слой 1
	this.instance_10 = new lib.hunter05_06();
	this.instance_10.setTransform(-117,-122.9,1,1,-1.5);

	this.addChild(this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-120.5,-171.7,274.5,313.7);


(lib.Символ40 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.setTransform(-4.9,1.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.4,-12.1,17.1,26.3);


(lib.Символ16 = function() {
	this.initialize();

	// Символ 15
	this.instance = new lib.Символ15();
	this.instance.setTransform(137.1,-298.1,0.616,0.616,4.4);
	this.instance.alpha = 0.18;
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(137.1,-301.2,0.616,0.616,4.4);

	// Символ 14
	this.instance_2 = new lib.Символ14();
	this.instance_2.setTransform(-272.1,-274.1,0.616,0.616,-6);
	this.instance_2.alpha = 0.199;
	this.instance_2.compositeOperation = "lighter";

	this.instance_3 = new lib.Символ14();
	this.instance_3.setTransform(-272.1,-277.1,0.616,0.616,-6);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-342.5,-317.7,593.3,62.8);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({rotation:126.3,x:224,y:-76},0).wait(20).to({rotation:192,x:238,y:2.5},0).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-12.1,17.1,26.3);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ41();
	this.instance.setTransform(7.5,-11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// Слой 2
	this.instance_1 = new lib.Символ31();
	this.instance_1.setTransform(141,-34.9);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ31(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	// Символ 6
	this.instance_2 = new lib.Символ6();
	this.instance_2.setTransform(169.8,62.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:2.3,x:168,y:61.2},9,cjs.Ease.get(-1)).to({rotation:5.2,x:165.9,y:60.1},10,cjs.Ease.get(0.98)).to({rotation:2.5,x:167.9,y:61.2},10,cjs.Ease.get(-1)).to({rotation:0,x:169.8,y:62.3},10,cjs.Ease.get(0.98)).wait(1));

	// Символ 10
	this.instance_3 = new lib.Символ13();
	this.instance_3.setTransform(76.8,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-2.1,x:80.6,y:20.3},9,cjs.Ease.get(-1)).to({rotation:-4.7,x:84.8,y:21},10,cjs.Ease.get(0.98)).to({rotation:-2.3,x:80.8,y:20.4},10,cjs.Ease.get(-1)).to({rotation:0,x:76.8,y:18.8},10,cjs.Ease.get(0.98)).wait(1));

	// Символ 8
	this.sisi = new lib.Символ12();
	this.sisi.setTransform(281.3,-39.1);

	this.timeline.addTween(cjs.Tween.get(this.sisi).to({rotation:-1.8,x:282.2,y:-42.8},9,cjs.Ease.get(-1)).to({rotation:-3.7,x:283.3,y:-46.9},10,cjs.Ease.get(0.98)).to({rotation:-1.8,x:282.3,y:-43},10,cjs.Ease.get(-1)).to({rotation:0,x:281.3,y:-39.1},10,cjs.Ease.get(0.98)).wait(1));

	// Символ 4
	this.instance_4 = new lib.Символ4();
	this.instance_4.setTransform(163.3,-141.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-3,x:160.9,y:-140.6},9,cjs.Ease.get(-1)).to({rotation:-6.7,x:158.1,y:-139.9},10,cjs.Ease.get(0.98)).to({rotation:-3.3,x:160.8,y:-140.5},10,cjs.Ease.get(-1)).to({rotation:0,x:163.3,y:-141.2},10,cjs.Ease.get(0.98)).wait(1));

	// Символ 3
	this.instance_5 = new lib.Символ3();
	this.instance_5.setTransform(216.3,-160.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:1.8,x:215,y:-156.7},9,cjs.Ease.get(-1)).to({rotation:8.2,x:210.5,y:-144.6},10,cjs.Ease.get(1)).to({rotation:6,x:211.9,y:-148.5},10,cjs.Ease.get(-1)).to({rotation:0,x:216.3,y:-160.2},10,cjs.Ease.get(1)).wait(1));

	// Символ 2
	this.instance_6 = new lib.Символ2();
	this.instance_6.setTransform(-4.7,-113.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-2.8,x:-2.3,y:-108.8},9,cjs.Ease.get(-1)).to({rotation:-5.9,x:0.3,y:-103.4},10,cjs.Ease.get(0.98)).to({rotation:-2.8,x:-2.2,y:-108.6},10,cjs.Ease.get(-1)).to({rotation:0,x:-4.7,y:-113.7},10,cjs.Ease.get(0.98)).wait(1));

	// Символ 11
	this.instance_7 = new lib.Символ11();
	this.instance_7.setTransform(117.3,27.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-4,x:120.4,y:27},9,cjs.Ease.get(-1)).to({rotation:-8.5,x:123.8,y:26.7},10,cjs.Ease.get(0.98)).to({rotation:-4.1,x:120.6,y:27},10,cjs.Ease.get(-1)).to({rotation:0,x:117.3,y:27.3},10,cjs.Ease.get(0.98)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.2,-285.4,396.9,418.5);


// stage content:



(lib.tridospexi640305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		  bodyStyle.margin = 0;
		  bodyStyle.padding = 0;
		
		this.cursor = "none";
		 
		stage.canvas.style.cursor = "none";
		this.hand.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor1.bind(this));
		
		function fl_CustomMouseCursor1() {
			this.hand.x = stage.mouseX;
			this.hand.y  = stage.mouseY;
		}
		
		
		this.girl.addEventListener("mouseover", fl_girl1.bind(this));
		
		function fl_girl1()
		{
			this.girl.sisi.gotoAndPlay(1);
		
		}
		
		this.girl.addEventListener("mouseout", fl_girl.bind(this));
		
		function fl_girl()
		{
			this.girl.sisi.gotoAndPlay(20);
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.hand = new lib.Символ28();
	this.hand.setTransform(527.9,233.9,0.872,0.872,10.2);

	this.timeline.addTween(cjs.Tween.get(this.hand).wait(1));

	// Слой 7
	this.instance = new lib.Символ33();
	this.instance.setTransform(540.4,399.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(378.7,426.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(321.6,280.5,1.176,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.girl = new lib.Символ1();
	this.girl.setTransform(156.5,202.9);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Слой 4
	this.instance_3 = new lib.Символ25();
	this.instance_3.setTransform(324.6,139.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(277,70,684.1,421.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;