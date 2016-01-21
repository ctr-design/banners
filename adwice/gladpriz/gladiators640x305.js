(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bedro.png", id:"bedro"},
		{src:"images/gladiator_by_belzaphd7xdki4.jpg", id:"gladiator_by_belzaphd7xdki4"},
		{src:"images/golova1.png", id:"golova1"},
		{src:"images/golova2.png", id:"golova2"},
		{src:"images/mech.png", id:"mech"},
		{src:"images/noga.png", id:"noga"},
		{src:"images/noga2.png", id:"noga2"},
		{src:"images/noga3.png", id:"noga3"},
		{src:"images/noga4.png", id:"noga4"},
		{src:"images/pika.png", id:"pika"},
		{src:"images/plecho.png", id:"plecho"},
		{src:"images/ruka1.png", id:"ruka1"},
		{src:"images/smoke2.png", id:"smoke2"},
		{src:"images/stats.png", id:"stats"},
		{src:"images/sword.png", id:"sword"},
		{src:"images/telo1.png", id:"telo1"},
		{src:"images/telo2.png", id:"telo2"},
		{src:"images/web_flag04.png", id:"web_flag04"},
		{src:"images/web_tourney_reward_gold_right.png", id:"web_tourney_reward_gold_right"}
	]
};



// symbols:



(lib.bedro = function() {
	this.initialize(img.bedro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,88);


(lib.gladiator_by_belzaphd7xdki4 = function() {
	this.initialize(img.gladiator_by_belzaphd7xdki4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,463);


(lib.golova1 = function() {
	this.initialize(img.golova1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,78);


(lib.golova2 = function() {
	this.initialize(img.golova2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,27);


(lib.mech = function() {
	this.initialize(img.mech);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,231);


(lib.noga = function() {
	this.initialize(img.noga);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,86);


(lib.noga2 = function() {
	this.initialize(img.noga2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,89);


(lib.noga3 = function() {
	this.initialize(img.noga3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,93);


(lib.noga4 = function() {
	this.initialize(img.noga4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,93);


(lib.pika = function() {
	this.initialize(img.pika);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,123);


(lib.plecho = function() {
	this.initialize(img.plecho);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,33);


(lib.ruka1 = function() {
	this.initialize(img.ruka1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,54);


(lib.smoke2 = function() {
	this.initialize(img.smoke2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,136);


(lib.stats = function() {
	this.initialize(img.stats);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,93);


(lib.sword = function() {
	this.initialize(img.sword);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,110);


(lib.telo1 = function() {
	this.initialize(img.telo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,166);


(lib.telo2 = function() {
	this.initialize(img.telo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,87);


(lib.web_flag04 = function() {
	this.initialize(img.web_flag04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,289,349);


(lib.web_tourney_reward_gold_right = function() {
	this.initialize(img.web_tourney_reward_gold_right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,48);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.smoke2();
	this.instance.setTransform(-250,-68);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-250,-68,500,136);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.sword();
	this.instance.setTransform(-23.9,-26.3,0.479,0.479);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.9,-26.3,47.9,52.7);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.gladiator_by_belzaphd7xdki4();
	this.instance.setTransform(0,0,1.116,1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,781.3,463);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AtrCBQgTgYgagJQgVgGgRAJIAAinQAMgCAcgRIAWAAQATAAANgZQAMgUAAgKIgBgLIALgTIAKgRIaoAAIgEAHQgCAJAAAZQgBAUALAOQAUAZAwAAQAIAAAGgEIAACyQgOgGgTAHQgZAKgRAaQgUAcAAAgIAAAGI6uAAIgIACQAAgigUgbg");
	this.shape.setTransform(95.9,20);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.9,191.8,38.1);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#454545").s().p("AEyAAIAAAAIBCAAIgSAAgADoAAIAAAAIApAAIAAAAgAANAAIAAAAIAqAAIAAAAgAhfAAIAAAAIBBAAIgRAAgAiXAAIAAAAIApAAIAAAAgAkFAAIAAAAIBBAAIgRAAgAlzAAIAAAAIBBAAIgRAAg");
	this.shape.setTransform(37.3,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACWBPIAAgBIgCgcIgOAAIgDAcIAAABIgqAAIAAgBIAVicIA7AAIAYCcIAAABgACKgSIgEAcIgBAMIAOAAIgBgMIgDgcIgCgYIgDAYgAEjBOIAAicIAqAAIAAA3IAGAAQATgBAKACQAEACAEACQAEADACADQAFAIAAAOIAAAAIAAAfQAAASgEAIQgFAHgJACIgMACgAFNA0QAHgBADgCQADgBAAgLIAAgXIAAgEQAAgHgCgCQgCgBgJAAgADZBOIAAh8IgZAAIAAggIBaAAIAAAgIgYAAIAAB8gAAABOIAAicIAnAAQARABAJACQAJADAFAEQAEAFACAIQACAHAAAPIAAANIAAACQAAAOgEAFQgCAFgGAEIgDABQgIAEgOAAIgLAAIAAA/gAAngLIADABQAGAAACgDIACgFIAAgGIAAgOQAAgHgCgDQgDgCgIAAgAhuBOIAAicIBRAAIAAAcIgoAAIAAAbIAHAAQATgBAJACQAFACADACQAEADADADQAFAIAAAOIAAAAIAAAfQAAASgFAIQgEAHgKACIgMACgAhFA0QAIgBADgCQADgBAAgLIAAgXIAAgEQgBgHgBgCQgCgBgKAAgAimBOIAAicIApAAIAACcgAkUBOIAAicIApAAIAAA3IAHAAQATgBAJACQAFACAEACQADADADADQAFAIAAAOIAAAAIAAAfQAAASgFAIQgEAHgKACIgMACgAjrA0QAIgBADgCQADgBAAgLIAAgXIAAgEQgBgHgBgCQgCgBgKAAgAmCBOIAAicIApAAQATABAKACQAKAEAHAJQAGAJAAAUQAAAKgCAFIgDAFQgEAFgNADQAPADAFAGIADAGQACAGAAALIAAAOQAAARgEAHQgEAIgIACQgEACgLABgAlZA0QAJgBACgDQADgBAAgKIAAgPQAAgKgDgCQgCgCgJgBgAlZgPIAEAAQAGgBABgCIABAAQACgEAAgNQAAgIgCgDQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBIgJAAg");
	this.shape_1.setTransform(38.8,7.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,77.6,15.8);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0.039,0.498,1],-105.5,0,105.6,0).s().p("Awee/MAAAg99MAg9AAAMAAAA99g");
	this.shape.setTransform(105.6,198.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,211.1,396.8);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0.039,0.498,1],-90.8,0,90.9,0).s().p("AuLZgMAAAgy/IcXAAMAAAAy/g");
	this.shape.setTransform(90.9,163.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,181.8,326.4);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjZDxIAAgNIhAAAIAAhQIAVAAIAAA/IAGAAIAAg/IAUAAIAAA/IAHAAIAAg/IAUAAIAAA/IAEAAIAAAegAFVDiQgFgDgCgFQgBgEAAgMIAAgGIATAAIAAANQAAAFABACQAAAAABAAQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAIAAgJIAAgFIgBgHQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAIgHAAIAAgMIAIAAIADgDIAAgFIAAgFIAAgFQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABIgBAFIAAAHIgTAAIAAgHQAAgLAFgEQAFgEALAAQAOAAAFAGQAFAFAAAJQAAAIgBACQgCAEgFACQAFABACAEQACADAAANQAAAJgCAFQgCAFgFAEQgGACgIAAQgJAAgGgDgAl5DiQgFgDgCgFQgBgEAAgMIAAgGIATAAIAAANQAAAFABACQAAAAABAAQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAIAAgJIAAgFIgBgHQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAIgHAAIAAgMIAIAAIADgDIAAgFIAAgFIAAgFQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABIgBAFIAAAHIgTAAIAAgHQAAgLAFgEQAFgEALAAQAOAAAFAGQAFAFAAAJQAAAIgBACQgCAEgFACQAFABACAEQACADAAANQAAAJgCAFQgCAFgFAEQgGACgIAAQgJAAgGgDgAEaDkIAAgMQAUggADgHQAEgIAAgEIgBgEQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABAAAGIAAAHIgSAAIAAgCIABgLQABgEACgDQADgEAEgCQAFgCAGAAQALAAAHAGQAGAGAAAIQAAAIgEAHQgDAHgRAZIAWAAIAAAOgAhHDkIgBgPIgHAAIgCAPIgVAAIALhQIAdAAIAMBQgAhIDIIgEgiIgEAiIAIAAIAAAAgAiHDkIAAhAIgMAAIAAgQIAtAAIAAAQIgMAAIAABAgAioDkIAAglIgLAlIgSAAIAAhQIARAAIAAAkIAMgkIARAAIAABQgAkxDkIgBgPIgHAAIgCAPIgVAAIALhQIAdAAIAMBQgAkyDIIgEgiIgEAiIAIAAIAAAAgAFgAkQgFgCgDgEIgEgHIgBgMIAAgaIABgJIABgHQACgGAGgDQAFgDAIAAQAHAAAFACQAFADACADQADADABAEIAAAEIABAJIAAAZIgBAMQgBAFgDADQgDAEgFACQgEABgFAAQgHAAgFgBgAFogdIgBAFIAAACIAAAlQAAAHABABQAAABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQABgBAAgHIAAglIAAgCIgBgGQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABAAAAgAEgAkIAAgMIAKgPIANgWQAEgIAAgDIgBgGQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABgBAAIgBAFIAAACIAAAIIgSAAIAAgDIABgHIAAgEQABgEACgDQADgEAEgCQAFgCAGAAQALAAAHAGQAFAFABAIIAAACQAAAHgEAHIgLARIgJANIAWAAIAAAOgAiYAkIgBgPIgIAAIgBAPIgoAAQgDgEAAgIIAAgPQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAgBAAQgBAAAAAAIgBAiIgUAAIAAhNIAUAAIABAhQAFgBABgFIAAgQQAAgJADgCIATAAQgDADABAIIAAAOQAAAMgOACQANACABAJIAAABIAAAMQgBAJADAEIAKhMIAeAAIAMBNgAiaAIIgDggIgEAgIAHAAIAAAAgAkAAkIgBgPIgIAAIgBAPIgVAAIAKhNIAeAAIAMBNgAkCAIIgDggIgEAgIAHAAIAAAAgAlAAkIAAg9IgMAAIAAgQIAtAAIAAAQIgMAAIAAA9gAlhAkIgBgPIgHAAIgCAPIgVAAIALhNIAdAAIAMBNgAliAIIgEggIgEAgIAIAAIAAAAgAkfh5IAAgNIghAAIAAANIgOAAIAAgeIAEAAQAEgJACgQQACgQAAgTIAAgCIAtAAIAAA+IAFAAIAAAegAkvjFQAAAWgFAYIALAAIAAgvIgGAAgAFgiGQgEgDgDgCIgEgIIgBgMIAAgcQAAgLACgFQACgFAFgEQAEgCAEAAIAMAAIAFABQAFADADACQACAEABAEIABANIAAAbIgBAMQgBAFgDAEQgDADgEACQgEABgGAAQgHAAgFgBgAFojJQgBACAAAGIAAAmQAAAHABABQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQABgBAAgHIAAgmIgBgJQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBABAAAAgAEoiIQgFgDgCgEQgDgEAAgLQAAgIACgFQABgFAFgDQgDgCgCgEQgCgEAAgFQAAgLAGgFQAEgEAGAAIAOAAQAHABAEADQAFAGAAAKQAAAGgCADQgCADgFADQAFABACAEQACADAAANQAAAKgBAFQgCAEgGADQgFADgJAAQgJAAgFgDgAEzipIgBAFIAAALQAAAFABABQABABAAAAQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQABgBAAgGIAAgKIgBgFQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABgAEzjKIAAAGIAAAFIAAAGQABAAAAAAQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIAAgGIAAgFIAAgGQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAgAiWiHQgFgCgDgEQgDgEgBgFIAAgRIAAgOIAAgQQABgGADgDQADgFAFgCIAFgBIANAAIAFABQAFACADAEQADAEABAFIAAARIAAAOIAAARQgBAEgDAFQgDAEgFACQgFACgGAAQgHAAgFgCgAiNjJQgBABAAAHIAAAkIABAJQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBIABgJIAAgkIgBgIQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAgAj+iHQgFgCgDgEQgEgEAAgFIgBgRIAAgOIABgQQAAgGADgDQADgFAFgCIAGgBIAMAAIAFABQAGACADAEQADAEAAAFIABARIAAAOIgBARQAAAEgDAFQgDAEgFACQgFACgHAAQgGAAgFgCgAj1jJQgBABAAAHIAAAkIAAAJQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBIAAgJIAAgkIAAgIQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAgAl5iIQgFgDgCgFQgBgEAAgLIAAgHIATAAIAAANQAAAFABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBIAAgJIAAgFIgBgHQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAIgHgBIAAgLIAIgBIADgCIAAgGIAAgEIAAgGQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAIgBAHIAAAGIgTAAIAAgHQAAgLAFgEQADgDAGAAIAPAAQAIABADADQAFAGAAAKQAAAGgBAEQgCACgFADQAFABACADQACAEAAANQAAAJgCAGQgCAEgFADQgGADgIAAQgJAAgGgDgAABiGIAAhPIAiAAIAAAQIgOAAIAAAOIANAAIAAAQIgNAAIAAARIAPAAIAAAQgAg0iGIAAhPIAUAAIAAAbIAEAAIAOABQAFAAACAEQADAFAAAIIAAAPQAAAJgDAEQgCADgEABIgPACgAggiUIAGgBQABgBAAgGIAAgLQAAgFgBgBQgBgBgFAAgAhriGIAAhPIAUAAQAKgBAFACQAFACADAEQADAEAAALQAAAHgCACQgCAEgHABQAIABACAEQADAEAAAIIAAAHQAAAIgCAEQgCAEgEABQgEACgMAAgAhXiUQAFAAABgBQABgBAAgGIAAgHQAAgFgBgBIgGgBgAhXi3IACAAQABAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABgCAAgHIgBgEIgBgDIgFAAgAjUiGIAAhPIAVAAQAIgBAFACQAEABADACQACADABADIABALIAAAIQAAAHgCADQgBAEgFACQgEABgHAAIgFAAIAAAhgAi/i0IABAAIAEgBIABgGIAAgGIgBgGIgFgBgAFbjvIAGgBIAGABgAEljvIAHgBIAHABgAibjvIAHgBIAFABgAkDjvIAGgBIAGABgAl9jvIAHgBIAIABg");
	this.shape.setTransform(40,27.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.4,3,77.4,48.3);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AECCYQgWgNgGgTQgHgSAAgtIAAgZIBPAAIAAAzQAAAVACAFQADAGAJAAQAIAAADgHQADgHAAgeIAAgWQAAgSgDgJQgFgHgIgDQgIgDgXAAIAAgsQAdAAAGgDQAHgBACgIQADgHAAgPIAAgSQABgRgEgFQgEgFgGAAQgJAAgCAGQgEAFAAASIAAAaIhPAAIAAgbQAAgtAVgQQAVgQAtAAQA4AAAVAWQATAWABAoQAAAagIALQgHANgSAJQASAHAIANQAKAMgBAzQAAAlgIAVQgJAVgVALQgVALghAAQglAAgWgMgAB/CdIAAiQIgrCQIhIAAIAAk6IBFAAIAACPIAuiPIBEAAIAAE6gAi6CdIAAk6IBSAAQAiAAASAGQASAFAJAKQAJAKADAOQADAOAAAeIAAAbQAAAegFAMQgHAPgRAGQgQAIgcAAIgVAAIAAB/gAhogWIAFAAQAMAAAEgFQAFgGAAgRIAAgbQAAgQgGgEQgEgGgQAAgAkuCdIAAj7IgYAAIAAD7IhTAAIAAk6IC9AAIAAE6g");
	this.shape.setTransform(41,16.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,32.9);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGvB4IAAhaIgaBaIgtAAIAAjEIAqAAIAABXIAdhXIArAAIAADEgAErB4IgDgkIgSAAIgDAkIg2AAIAbjEIBKAAIAdDEgAEnAxQgEghgEgwQgIA3gCAaIASAAIAAAAgABsB4IAAjEIA0AAQAVAAALADQALAEAGAGQAGAGACAJQACAJAAASIAAASQAAARgEAIQgEAJgKAFQgLAEgRAAIgOAAIAABQgACfAGIAEAAQAHAAADgDQADgDAAgKIAAgQQAAgKgDgDQgEgDgKAAgAAFB4IAAjEIBZAAIAAAoIglAAIAACcgAg4B4IAAhaIgbBaIgtAAIAAjEIArAAIAABXIAdhXIArAAIAADEgAjGB4IAAjEIAzAAIAADEgAlPB4IAAjEIAzAAIAABEIAIAAQAYAAAMADQAMACAGAIQAGAKAAAUIAAAmQAAAXgFAJQgGAKgMACQgMADgZAAgAkcBWQAKAAADgDQAEgCAAgNIAAgdQAAgNgDgCQgCgDgMAAgAnZB4IAAjEIAzAAQAYAAANAEQAMAEAIALQAHAMAAAZQAAASgFAFQgFAGgQAEQARAEAHAJQAGAKAAATIAAASQAAAUgEAKQgFAKgKADQgKAEgfAAgAmmBWQALAAADgDQADgEAAgLIAAgTQAAgNgDgCQgDgDgLAAgAmmAAIAFAAQAIAAACgCQACgEAAgRQAAgKgCgDQgCgEgCgBIgLgBgAGIhcQgJgKgBgRIAVAAQABARANAAQAMAAACgRIAUAAQAAARgJAKQgJAKgQAAQgQAAgJgKg");
	this.shape.setTransform(47.5,12);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,95,24.1);


(lib.Символ14 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFjBcIAAgbIhLAAIAAicIApAAIAAB9IAMAAIAAh9IAqAAIAAB9IAIAAIAAA6gADFBBIAAicIBFAAIAAAfIgcAAIAAAeIAaAAIAAAeIgaAAIAAAiIAeAAIAAAfgACSBBIAAhGIgVBGIgkAAIAAicIAiAAIAABHIAXhHIAjAAIAACcgAArBBQgHgGAAgRIAAgfQAAgGgDgEQgEgBgGAAIAABBIgnAAIAAicIAnAAIAABDQAMgBAAgNIABgeQABgRAGgGIAmAAQgGAFAAASIABAcQAAAYgcAEQAcADAAAXIgBAZQAAATAGAHgAhBBBIgCgcIgPAAIgCAcIgrAAIAVicIA8AAIAXCcgAhEAJIgGhBQgHAtgBAUIAOAAIAAAAgAjaBBIAAicIAqAAQARAAAJADQAJACAEAFQAFAFABAHQACAIAAAOIAAAOQAAAPgDAHQgDAHgJAEQgIACgNgBIgLAAIAABAgAiwgYIADAAQAFAAADgCQACgEAAgIIAAgNQAAgIgDgCQgCgDgIAAgAlGBBIAAgaIgHAAQgcAAgLgMQgGgHgCgKQgCgHAAgOIAAgCQAAgPACgHQACgKAGgHQALgMAcAAIAHgBIAAgaIApAAIAAAaIAHABQAdAAAKAMQAHAHACAKQABAHAAAPIAAACQAAAOgBAHQgCAKgHAHQgKAMgdAAIgHAAIAAAagAkdAOIAEAAQAFAAADgEQADgFAAgHIAAgUQAAgIgDgFQgDgFgFAAIgEAAgAlRgjQgEAFAAAIIAAAUQAAAHAEAFQADAEAEAAIAEAAIAAg2IgEAAQgEAAgDAFg");
	this.shape.setTransform(38.3,9.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76.7,18.5);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#330000").s().p("ApUEiQAAgOgLAAIAAonQALAAAAgOISpAAQAAAOALAAIAAInQgLAAAAAOg");
	this.shape.setTransform(66.2,23.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5.4,-5.3,121.6,58.1);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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IgBAGIALAAIAAgvIgGAAgAFKiXQgGgCgCgGQgCgEgBgJIAAgDIAAgEIAUAAIAAAFIAAACIABAJQAAAAAAABQABABAAAAQABABAAAAQABAAABAAIACgBIABgCIAAgZIgBgGQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAIgCABIgCACIAAAEIgTAAIAAgnIArAAIAAAMIgZAAIAAAOQAFgGAIAAQAHAAAFAEIABACQADAFAAALIAAAMIAAACIgBAKQgBAEgDADQgCAEgFABQgEACgHAAQgIAAgGgDgAh5iWQgFgCgDgEQgDgEAAgFIgBgHIAAgKIAAgOIABgQIAAgBQAAgEADgFQADgEAFgCQAFgCAHAAQAGAAAFACQAGACADAEQACAEABAFIAAABIAAAQIAAAOIAAAKIAAAHQgBAEgCAFQgEAEgEACQgGACgGAAQgHAAgFgCgAhwjYIAAAEIAAAEIAAAkIAAAJQAAAAAAABQABAAAAABQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABAAQAAgBAAAAQAAgBABAAIAAgJIAAgkIAAgEIAAgEQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAgBAAgAjhiWQgFgCgDgEQgDgEgBgFIgBgHIAAgKIAAgOIABgQIAAgBQAAgEAEgFQADgEAEgCQAGgCAHAAQAGAAAFACQAFACADAEQADAEAAAFIAAABIABAQIAAAOIAAAKIgBAHQAAAEgDAFQgDAEgFACQgFACgGAAQgHAAgFgCgAjYjYIgBAEIAAAEIAAAkIAAAJQABAAAAABQAAAAAAABQABAAAAAAQAAAAABAAQABAAAAAAQABAAAAAAQAAgBABAAQAAgBAAAAIAAgJIAAgkIAAgEIAAgEQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAgAlbiXQgFgDgDgFQgBgFAAgKIAAgHIATAAIAAANQAAAFABABQABABAAAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIABgJIAAgGIgBgGQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgHgBIAAgLIAJgBIACgCIABgGIAAgEIAAgBIgBgEQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAAAgBABIgBAEIAAACIAAAGIgTAAIAAgHQAAgLAFgEQAGgEAKAAQAOAAAFAFQAFAFAAAIIAAADQAAAGgBAEQgCACgFACQAFACADADQABAEAAANIAAABQAAAIgBAFQgDAGgFACQgGADgHAAQgKAAgFgDgAEbiWIAPhBIgUAAIAAgNIAmAAIAAARIgNA9gAAeiWIAAhOIAjAAIAAAPIgPAAIAAAPIAOAAIAAAQIgOAAIAAARIAPAAIAAAPgAgXiWIAAhOIAUAAIAAAbIADAAIANABQAFABACADQADAFAAAIIAAAPQAAAJgDAEQgCADgEABIgOABgAgDijIAEgBQABgBAAgGIAAgLQABgFgBgBQgBgBgEAAgAhOiWIAAhOIAUAAQAKAAAGABQAEACAEAEQACADAAAGIABAGQAAAHgCACQgDADgGACQAHACADADQACAEAAAIIAAAHQAAAIgCAEQgBADgFACQgDABgNAAgAg6ijQAFAAABgBQABgCABgFIAAgHQAAgFgBgBIgHgBgAg6jGIACAAQABAAABAAQABAAAAAAQABAAAAAAQAAgBABAAQABgBAAgIIgBgEIAAgBIgCgCIgFAAgAi3iWIAAhOIAWAAQAHAAAFABQAFABACACQACADABAEIABAFIAAAFIAAAIQAAAHgCADQgBAEgFACQgDABgIABIgFAAIAAAfgAiijDIACAAIADgBIABgGIAAgGIAAgEIgBgCIgFgBg");
	this.shape.setTransform(37.5,23.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,75,46.3);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACnCJIAAgiIhdAAIAAjEIA0AAIAACcIAOAAIAAicIA0AAIAACcIAKAAIAABKgAimBmQgNgFgHgLQgJgKAAgMQgCgNAAgeIAAggQAAgeACgMQABgNAHgKQAIgKAMgGQAMgFARAAQAQAAANAFQANAFAHALQAIAKABAMQABANABAeIAAAgIgBAqQgCAMgHALQgIAKgNAFQgMAGgRAAQgQAAgMgFgAiPg8QgDADAAAPIAABaQAAARABAEQACAEAFAAQAFAAACgEQACgFgBgRIAAhZQABgOgCgEQgCgEgFAAQgDAAgCAEgAEZBnIgCgkIgSAAIgEAkIg1AAIAajEIBLAAIAdDEgAEWAgQgFgggDgxQgJA3gBAaIASAAIAAAAgAALBnIAAhaIgZBaIgtAAIAAjEIArAAIAABZIAbhZIArAAIAADEgAlNBnIAAjEIBlAAIAAAiIgyAAIAAAiIAIAAQAYAAAMADQAMACAGAKQAHAKAAASIAAAmQgBAXgFAJQgGAKgMACQgMADgZAAgAkaBFQAKAAAEgDQADgCAAgNIAAgdQAAgNgCgCQgDgDgMAAgAgbhtQgJgKgBgRIAVAAQABARANAAQALAAABgRIAUAAQAAARgJAKQgJAKgOAAQgQAAgJgKg");
	this.shape.setTransform(33.5,13.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66.9,27.5);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHBB4IAAhaIgbBaIgtAAIAAjEIAqAAIAABXIAehXIAqAAIAADEgAE8B4IgDgkIgSAAIgDAkIg2AAIAbjEIBKAAIAeDEgAE4AxQgEghgEgwQgIA3gCAaIASAAIAAAAgAB+B4IAAjEIAzAAQAVAAALADQALAEAHAGQAFAGACAJQACAJAAASIAAASQAAARgEAIQgEAJgKAFQgKAEgRAAIgPAAIAABQgACwAGIAFAAQAGAAAEgDQACgDAAgKIAAgQQAAgKgDgDQgDgDgLAAgAA+B4IAAhaIgaBaIgrAAIAAjEIAoAAIAABXIAdhXIArAAIAADEgAiRB4IAAjEIBlAAIAAAiIgyAAIAAAiIAIAAQAYAAAMADQANACAFAIQAGAKABAUIAAAmQAAAXgGAJQgGAKgMACQgMADgZAAgAheBWQAKAAAEgDQADgCAAgNIAAgdQAAgNgCgCQgDgDgMAAgAjXB4IAAjEIAzAAIAADEgAlhB4IAAjEIA0AAIAABEIAIAAQAYAAAMADQAMACAGAIQAGAKAAAUIAAAmQAAAXgGAJQgGAKgLACQgMADgZAAgAktBWQAJAAAEgDQADgCABgNIAAgdQgBgNgCgCQgDgDgLAAgAnrB4IAAjEIA0AAQAYAAANAEQAMAEAIALQAHAMAAAZQAAASgFAFQgGAGgPAEQARAEAHAJQAGAKAAATIAAASQAAAUgEAKQgGAKgKADQgKAEgeAAgAm3BWQAKAAADgDQADgEABgLIAAgTQAAgNgDgCQgDgDgLAAgAm3AAIAFAAQAHAAACgCQACgEABgRQAAgKgCgDQgCgEgCgBIgLgBgAGZhcQgJgKgBgRIAVAAQACARAMAAQAMAAACgRIAVAAQgBARgJAKQgJAKgQAAQgQAAgJgKg");
	this.shape.setTransform(49.2,12);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,98.4,24.1);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFlBgIAAhIIgVBIIgkAAIAAicIAiAAIAABFIAXhFIAjAAIAACcgAD5BgIAAhIIgVBIIgkAAIAAicIAiAAIAABFIAXhFIAjAAIAACcgABcBgIAAicIApAAQARAAAJACQAJADAFAFQAEAFACAHQACAHAAAPIAAAOQAAANgEAHQgDAHgIADQgIAEgOAAIgLAAIAABAgACFAFIADAAQAGAAACgDQACgCAAgHIAAgNQAAgIgCgDQgDgCgIAAgAArBgIgCgdIgPAAIgCAdIgpAAIATicIA8AAIAXCcgAAoAnIgGhAQgHArgBAVIAOAAIAAAAgAg6BgIAAhIIgWBIIgkAAIAAicIAjAAIAABFIAXhFIAiAAIAACcgAi+BgIAAh9IgZAAIAAgfIBaAAIAAAfIgYAAIAAB9gAkjBgIAAicIBFAAIAAAfIgbAAIAAAdIAZAAIAAAdIgZAAIAAAjIAeAAIAAAggAmHBgIAAicIAqAAQARAAAJACQAJADAEAFQAFAFABAHQACAHAAAPIAAAOQAAANgDAHQgDAHgJADQgIAEgNAAIgLAAIAABAgAldAFIADAAQAFAAADgDQACgCAAgHIAAgNQAAgIgDgDQgCgCgIAAgAFGhJQgHgJgBgNIARAAQABAOAKAAQAKAAABgOIAQAAQAAANgHAJQgIAIgMAAQgNAAgHgIg");
	this.shape.setTransform(39.2,9.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,78.5,19.3);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.web_flag04();
	this.instance.setTransform(0,0,0.92,0.92);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,265.8,321);


(lib.Анимация25 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.golova2();
	this.instance.setTransform(-20,-13.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20,-13.5,40,27);


(lib.Анимация23 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ruka1();
	this.instance.setTransform(-14.5,-27);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.5,-27,29,54);


(lib.Анимация21 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.telo2();
	this.instance.setTransform(-51.5,-43.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.5,-43.5,103,87);


(lib.Анимация19 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.plecho();
	this.instance.setTransform(-19.5,-16.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.5,-16.5,39,33);


(lib.Анимация17 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bedro();
	this.instance.setTransform(-45,-44);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45,-44,90,88);


(lib.Анимация15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pika();
	this.instance.setTransform(-20.5,-61.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.5,-61.5,41,123);


(lib.Анимация13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.noga();
	this.instance.setTransform(-26,-43);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26,-43,52,86);


(lib.Анимация11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.noga2();
	this.instance.setTransform(-33,-44.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33,-44.5,66,89);


(lib.Анимация9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.telo1();
	this.instance.setTransform(-62.5,-83);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.5,-83,125,166);


(lib.Анимация7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.mech();
	this.instance.setTransform(-47,-115.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47,-115.5,94,231);


(lib.Анимация5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.noga3();
	this.instance.setTransform(-25,-46.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-46.5,50,93);


(lib.Анимация3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.noga4();
	this.instance.setTransform(-25.5,-46.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.5,-46.5,51,93);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.golova1();
	this.instance.setTransform(-23,-39);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23,-39,46,78);


(lib.Символ44 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(-548,0,1.304,1.304);
	this.instance.alpha = 0.25;
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.Символ43();
	this.instance_1.setTransform(0,0,1.304,1.304);
	this.instance_1.alpha = 0.25;
	this.instance_1.compositeOperation = "lighter";

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-874,-88.6,1200.1,177.3);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.setTransform(327.7,231.5,1,1,0,0,0,390.7,231.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:351},36,cjs.Ease.get(-1)).to({x:372.5},33,cjs.Ease.get(1)).to({x:349.8},36,cjs.Ease.get(-1)).to({x:327.7},35,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,0,781.3,463);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 16
	this.instance = new lib.Символ16();
	this.instance.setTransform(50.3,-27.9,1.155,1.155,0,0,0,41,16.4);
	this.instance.alpha = 0.988;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:63.1},14).to({x:51,y:141},15,cjs.Ease.get(1)).wait(95).to({alpha:0},5).wait(1));

	// Символ 15
	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(50.2,-62.6,1,1,0,0,0,47.5,12);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({y:22.3},14).to({x:51,y:96.4},15,cjs.Ease.get(1)).wait(83).to({alpha:0},5).to({_off:true},1).wait(3));

	// Символ 10
	this.instance_2 = new lib.Символ10();
	this.instance_2.setTransform(48.4,-94.7,1.471,1.471,0,0,0,33.4,13.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},0).to({y:-9.8},14).to({x:49.2,y:59.8},15,cjs.Ease.get(1)).wait(73).to({alpha:0},5).to({_off:true},1).wait(6));

	// Символ 9
	this.instance_3 = new lib.Символ9();
	this.instance_3.setTransform(49.2,-127.1,1,1,0,0,0,49.2,12);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).to({y:-42.2},14).to({y:20.5},15,cjs.Ease.get(1)).wait(60).to({alpha:0},5).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.9,-46.8,94.8,38);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(98.2,26.9,1.378,1.378,0,0,0,38.4,9.2);

	this.instance_1 = new lib.web_tourney_reward_gold_right();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,48);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(47.1,9.2,1.455,1.455,0,0,0,39.2,9.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.9,-4.8,114.2,28);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 2glad_03.png
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(71,139,1,1,0,0,0,0,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,rotation:-15,x:72.9,y:142.1},14).to({regX:0,rotation:0,x:71,y:139},15).wait(1));

	// 2glad_34.png
	this.instance_1 = new lib.Анимация3("synched",0);
	this.instance_1.setTransform(117.5,309.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.01,skewY:6,x:118.5,y:309.4},14).to({scaleX:1,skewY:0,x:117.5,y:309.5},15).wait(1));

	// 2glad_32.png
	this.instance_2 = new lib.Анимация5("synched",0);
	this.instance_2.setTransform(25,302.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.01,skewY:-8.2,x:26,y:302.4},14).to({scaleX:1,skewY:0,x:25,y:302.5},15).wait(1));

	// 2glad_19.png
	this.instance_3 = new lib.Анимация7("synched",0);
	this.instance_3.setTransform(51,173.5,1,1,0,0,0,0,54);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-0.1,rotation:-4.2,x:49.9,y:174.9},14).to({regX:0,rotation:0,x:51,y:173.5},15).wait(1));

	// 2glad_10.png
	this.instance_4 = new lib.Анимация9("synched",0);
	this.instance_4.setTransform(66.5,214);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:67.5,y:216},14).to({x:66.5,y:214},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,4,143,352);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 2glad_29.png
	this.instance = new lib.Анимация11("synched",0);
	this.instance.setTransform(107,216.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,skewY:2.9,x:105.7,y:213.7},19).to({scaleX:1,skewY:0,x:107,y:216.5},20).wait(1));

	// 2glad_27.png
	this.instance_1 = new lib.Анимация13("synched",0);
	this.instance_1.setTransform(52,218);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,skewY:-5.6,x:51.1,y:219.9},19).to({scaleX:1,skewY:0,x:52,y:218},20).wait(1));

	// 2glad_24.png
	this.instance_2 = new lib.Анимация15("synched",0);
	this.instance_2.setTransform(20.5,155.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-15,x:32.9,y:156.5},19).to({rotation:0,x:20.5,y:155.5},20).wait(1));

	// 2glad_23.png
	this.instance_3 = new lib.Анимация17("synched",0);
	this.instance_3.setTransform(75,147);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,skewY:-5.4,x:74.1,y:146.1},19).to({scaleX:1,skewY:0,x:75,y:147},20).wait(1));

	// 2glad_17.png
	this.instance_4 = new lib.Анимация19("synched",0);
	this.instance_4.setTransform(118.6,49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-30,x:116.7,y:42.2},19).to({rotation:0,x:119.5,y:49.5},20).wait(1));

	// 2glad_14.png
	this.instance_5 = new lib.Анимация21("synched",0);
	this.instance_5.setTransform(64.5,73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,skewY:-3.8},19).to({scaleX:1,skewY:0},20).wait(1));

	// 2glad_07.png
	this.instance_6 = new lib.Анимация23("synched",0);
	this.instance_6.setTransform(135.4,27.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:128,y:16.6},19).to({x:136.3,y:28.2},20).wait(1));

	// 2glad_05.png
	this.instance_7 = new lib.Анимация25("synched",0);
	this.instance_7.setTransform(65.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-15,x:63.6},19).to({rotation:0,x:64.5,y:33.5},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.7,149.9,260.3);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.setTransform(13,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:560},200).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-861,-88.6,1200.1,177.3);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(99.8,24.6,0.924,0.924,0,0,0,46.1,12.3);

	this.instance_1 = new lib.web_tourney_reward_gold_right();

	this.instance_2 = new lib.Символ26();
	this.instance_2.setTransform(102.8,24.5,1,1,0,0,0,38.8,7.9);

	this.instance_3 = new lib.Символ27();
	this.instance_3.setTransform(99.9,24.3,1,1,0,0,0,95.9,20.3);
	this.instance_3.alpha = 0.328;
	this.instance_3.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance_3},{t:this.instance_2,p:{x:102.8}}]},1).to({state:[{t:this.instance_1},{t:this.instance_3},{t:this.instance_2,p:{x:96.1}}]},1).to({state:[]},1).wait(1));

	// Слой 2
	this.instance_4 = new lib.Символ23();
	this.instance_4.setTransform(105.5,-176.1,1,1,0,0,0,105.5,198.3);
	this.instance_4.alpha = 0.801;
	this.instance_4.compositeOperation = "lighter";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ax2GpIAAtRMAjtAAAIAANRg");
	this.shape.setTransform(114.4,18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,48);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ26();
	this.instance.setTransform(98.4,24.7,1,1,0,0,0,38.8,7.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({x:96.4},0).to({_off:true},1).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(100.2,24.5,1,1,0,0,0,95.9,20.3);
	this.instance_1.alpha = 0.328;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ7();
	this.instance_2.setTransform(100,24,1,1,0,0,0,100,24);

	this.instance_3 = new lib.web_tourney_reward_gold_right();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

	// Слой 5
	this.instance_4 = new lib.Символ22();
	this.instance_4.setTransform(107.6,-159.1,1.312,1.078,0,0,0,90.9,163.2);
	this.instance_4.alpha = 0.801;
	this.instance_4.compositeOperation = "lighter";

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0.039,0.498,1],-0.4,0,0.5,0).s().p("AgDA/IAAh9IAHAAIAAB9g");
	this.shape.setTransform(107,47.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ax2GaIAAszMAjtAAAIAAMzg");
	this.shape_1.setTransform(114.4,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance_4}]},1).to({state:[{t:this.shape_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,48);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ45();
	this.instance.setTransform(404.7,251.7);

	// Слой 1
	this.instance_1 = new lib.Символ28();
	this.instance_1.setTransform(350,231.5,1,1,0,0,0,350,231.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-456.4,0,1200.1,463);


// stage content:
(lib.gladiators640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Пользовательский курсор мыши
		Заменяет курсор мыши по умолчанию на указанный экземпляр символа.
		*/
		stage.canvas.style.cursor = "none";
		this.movieClip_1.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.movieClip_1.x = stage.mouseX;
			this.movieClip_1.y = stage.mouseY;
		}
		//Чтобы восстановить курсор мыши по умолчанию, раскомментируйте следующие строки:
		//this.removeEventListener("tick", fl_CustomMouseCursor.bind(this));
		//stage.removeChild(movieClip_1);
		//stage.canvas.style.cursor = "default";
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		this.cursor = "none";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 7
	this.movieClip_1 = new lib.Символ30();
	this.movieClip_1.setTransform(324.2,212.7);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1));

	// Слой 9
	this.instance = new lib.Символ18();
	this.instance.setTransform(529.8,192.4,1,1,0,0,0,38.9,18.9);

	this.instance_1 = new lib.stats();
	this.instance_1.setTransform(456.5,170.6,0.72,0.72);

	this.instance_2 = new lib.Символ12();
	this.instance_2.setTransform(526,202,1.077,1.181,0,0,0,70.4,23.9);
	this.instance_2.alpha = 0.84;

	this.instance_3 = new lib.Символ11();
	this.instance_3.setTransform(106.2,201.1,1,1,0,0,0,37.5,18.9);

	this.instance_4 = new lib.stats();
	this.instance_4.setTransform(33.5,175.1,0.72,0.72);

	this.instance_5 = new lib.Символ14();
	this.instance_5.setTransform(110,203.4,1.107,1.107,0,0,0,39.4,18.3);

	this.instance_6 = new lib.Символ12();
	this.instance_6.setTransform(102.6,205.1,1.077,1.181,0,0,0,70.4,23.9);
	this.instance_6.alpha = 0.84;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Символ 4
	this.instance_7 = new lib.Символ4();
	this.instance_7.setTransform(107,100,0.846,0.846,0,0,0,71.5,177.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Символ 3
	this.instance_8 = new lib.Символ3();
	this.instance_8.setTransform(530,132.1,0.901,0.901,0,0,0,76,130.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 3
	this.instance_9 = new lib.Символ25();
	this.instance_9.setTransform(531,272.4,1,1,0,0,0,100,24);
	new cjs.ButtonHelper(this.instance_9, 0, 1, 2, false, new lib.Символ25(), 3);

	this.instance_10 = new lib.Символ24();
	this.instance_10.setTransform(109.2,273,1,1,0,0,0,100,24);
	new cjs.ButtonHelper(this.instance_10, 0, 1, 2, false, new lib.Символ24(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// Слой 8
	this.instance_11 = new lib.Символ17();
	this.instance_11.setTransform(320,85.2,1,1,0,0,0,49.2,75.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 2
	this.instance_12 = new lib.Символ2();
	this.instance_12.setTransform(319.9,120.3,0.781,0.781,0,0,0,132.8,160.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 1
	this.instance_13 = new lib.Символ1();
	this.instance_13.setTransform(319.1,87.4,0.937,0.937,0,0,0,350,231.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.7,22.8,1124.8,434);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;