(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/arrow.png", id:"arrow"},
		{src:"images/bab1.png", id:"bab1"},
		{src:"images/bab2.png", id:"bab2"},
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/btn.png", id:"btn"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/pole.png", id:"pole"},
		{src:"images/SUDYA.png", id:"SUDYA"}
	]
};



// symbols:



(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,59);


(lib.bab1 = function() {
	this.initialize(img.bab1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,247);


(lib.bab2 = function() {
	this.initialize(img.bab2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,209,252);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,786,305);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,68);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,169,38);


(lib.pole = function() {
	this.initialize(img.pole);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,394,75);


(lib.SUDYA = function() {
	this.initialize(img.SUDYA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,237);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhtJhIAAzBIDaAAIAATBg");
	this.shape.setTransform(11,61,4.527,1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.8,0,99.6,122);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.arrow();
	this.instance.setTransform(59,0,1,1,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,59,59);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.arrow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,59,59);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AQXB7QgHAAgCgEQgCgCABgHIAGgeIhnAAIgFAeQgCAHgDACQgDAEgGAAIgfAAQgHAAgCgEQgCgCABgHIAMhEQABgHADgCQADgDAHAAIAGAAQAHgFAFgGQAGgGAEgJQAEgGADgMIAShcQABgGADgDQADgCAHAAIB6AAQAHAAACACQACADgBAGIgYCIIANAAQAHAAACADQACACgBAHIgMBEQgBAHgEACQgDAEgGAAgAPpgqQgEAYgHASQgGARgJANIAyAAIAShjIglAAgACKBPQgIgDgGgEIgLgKQgEgGgDgGQgEgHgBgHIgCgQIABgRIAJgxQADgMAJgUIAJgNIALgLQAJgHAVgHQALgEAagCIATACIAQAEIAOAHQAGAFAFAFQAFAGADAGQADAHACAHQABAIAAAHIgBASIgJAxQgGAWgFAKIgKANIgLAKQgSAMgLADQgYAFgOgBQgZgBgKgDgAC7hHQgGACgFAEQgEADgDAEQgDAFgBAIIgKA1QgBAHABAEQABAFAEAEQADADAFACQAGABAHABQAfgBAEgaIAKg1QABgHgBgGQgBgEgDgDQgEgEgFgCQgFgCgHABQgIgBgGACgAR8BQQgGAAgBgDQgBgEAEgFIAdgxIglh9QgDgMAMABIAhAAQALAAADABQAEADABAGIARA/IAkg/QAEgGAEgDQAEgBAJAAIAjAAQAGAAABACQABAEgEAFIhpCvQgEAHgEACQgEACgJAAgAM3BQQgHgBgCgCQgCgDABgGIALhBIg2AAIgLBBQgBAGgEADQgDACgGABIggAAQgHgBgCgCQgCgDABgGIAfiuQACgGADgDQADgDAGABIAgAAQAHgBACADQACADgBAGIgLA/IA2AAIALg/QABgGADgDQADgDAHABIAgAAQAGgBACADQACADgBAGIgeCuQgCAGgDADQgDACgHABgAKOBQQgKgBgEgCQgEgDgBgGIgDgVIg8AAIgKAVQgEAGgEADQgFACgKABIgeAAQgGAAgCgDQgBgDADgGIBgivQADgHADgCQAEgBAGAAIAgAAQAGgBADADQADACABAFIAhCwQABAGgCADQgDADgGAAgAJzADIgEgeQgCgTACgPIABgGIgDAAQgHAbgGANIgQAeIAjAAgAG2BQQgHgBgCgCQgCgCABgHIAHgoQACgPAHgRQAGgRAKgWIgDAAQgLAXgQAVIgVAgQgGAHgJABIgSAAQgGAAgCgCQgDgBgBgFIgLggQgEgJgFgjIgDAAQACAXAAASQgBAQgCAOIgHAoQgBAHgEACQgDACgGABIgeAAQgHgBgCgCQgCgCABgHIAfiuQABgHADgCQAEgDAGABIAaAAQAIgBADACQADACABAFIAeBcIA/hbQADgGAEgCQADgCAHABIAcAAQAHgBACADQACACgBAHIgfCuQgBAHgDACQgDACgHABgAAhBQQgMAAgEgCQgFgDgCgHIgOgyQgCgIgEgDQgDgEgIAAIgEAAIgMBBQgBAGgDADQgDACgGABIggAAQgHgBgCgCQgCgDABgGIAfiuQABgGADgDQADgCAHAAIAgAAQAGAAACACQADADgCAGIgLA/IAGAAIAyhAQAFgGAEgDQAFgBAKAAIAgAAQAHgBABAEQABADgEAGIhCBSQAEAEAEAEQADAGADAHIAZBEQACAGgDADQgDAFgGAAgAjYBQQgHgBgCgCQgCgDABgGIARhRIAOgiIgCAAQgYApgNAOIgyBCQgEAFgJABIghAAQgHgBgCgCQgCgDABgGIAfiuQABgGADgDQADgCAHAAIAfAAQAHAAACACQACADgBAGIgIAwQgEAWgEANQgDALgMAVIACAAIAUggIBDhZQAFgGAIABIAhAAQAHgBACADQACADgBAGIgfCuQgBAGgDADQgDACgHABgAn/BQQgHgBgCgCQgCgDABgGIAfiuQABgGADgDQADgCAHAAIBNAAQAhgBAQAVQAIAKACAOQADANgDARQgDAQgHAMQgHANgKAFQgLAJgOAEQgOAEgRAAIgiAAIgJAwQgBAGgDADQgDACgGABgAnAgbIAbAAQAKAAAGgGQAHgGACgIQABgKgEgFQgFgHgKAAIgbAAgAqkBQQgGgBgDgCQgCgDABgGIAfiuQACgGADgDQADgCAGAAIB2AAQAGAAADACQACADgBAGIgFAaQgBAGgDADQgDADgHgBIhKAAIgEAaIA7AAQAHgBACADQACADgBAGIgFAZQgBAHgDABQgDACgHAAIg7AAIgFAbIBNAAQAGAAACADQACACgBAIIgEAZQgBAGgDADQgDACgHABgAtXBQQgHgBgCgCQgCgDABgFIAfivQACgGADgDQADgDAGABIB8AAQAGgBACADQACADgBAGIgDAXQgBAGgDADQgDACgHAAIhQAAIgFAZIAlAAQAPAAALAEQAMAFAIAKQAIAJACAMQADAKgDAPQgCAPgHALQgGAMgKAHQgJAJgNADQgNAFgPAAgAsjAiIAcAAQAKAAAGgFQAGgFACgJQABgJgEgFQgEgCgKAAIgdAAgAurBQQgGgBgCgCQgCgDABgFIAfivQABgHADgCQADgDAGABIAhAAQAHAAACACQACACgCAHIgfCvQgBAFgDADQgCACgHABgAxdBQQgHgBgCgCQgCgDABgGIAfiuQABgGADgDQADgCAHAAIAfAAQAHAAACACQACADgBAGIgIAwIAgAAQAQAAANAFQAMAFAJAKQAQAUgFAfQgDAQgHANQgHAMgLAJQgKAIgOAEQgOAFgQAAgAwpAeIAbAAQAKABAHgGQAHgGABgJQACgKgFgDQgFgFgJAAIgcAAgA0VBQQgHgBgCgCQgCgDABgGIAfiuQABgGADgDQADgDAHABIBSAAQAOAAALADQALAEAHAHQAHAIACAKQADAKgDANQgCAOgHAIQgGAJgMAIIAAABQAZAMgGAkQgCAOgHAKQgGAJgLAHQgKAGgNAEQgNADgPABgAziAiIAhAAQAJAAAFgEQAFgEACgIQABgJgDgDQgEgFgJAAIghAAgAzUgqIAbAAQAJAAAFgDQAEgEACgIQABgHgDgFQgEgDgJAAIgbAAg");
	this.shape.setTransform(142.7,15.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11.4,3,262.7,24.6);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AxVFsQnLiXgBjVQABjUHLiXQHMiXKJAAQKKAAHMCXQHMCXAADUQAADVnMCXQnMCWqKAAQqJAAnMiWg");
	this.shape.setTransform(157,51.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,314,103);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AygTIMAAAgmQMAlBAAAMAAAAmQg");
	this.shape.setTransform(118.5,122.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALLA/QgJgDgGgHQgGgGgCgKQgCgJADgMIAGgiQACgMAFgJQAFgJAIgGQAHgGALgDQALgDANAAQALAAAIADQAIACAFAEQAGAEAEAGQADAGABAIQACAHgHACIgHADQgHACgBgGQgCgLgHgFQgHgFgNAAQgIAAgGACQgGACgFADQgFAEgDAFQgDAGgBAHIgHAjQgBAHABAGQABAFADAEQAEAEAGABQAFACAIAAQAZAAALgVQADgGAGACIAJADQAFACgDAGQgEAJgGAGQgGAGgIAEQgHAFgJACQgJACgKAAQgNAAgKgEgAGVA/QgKgDgGgHQgFgGgCgKQgCgJACgMIAGgiQADgMAEgJQAFgJAIgGQAIgGALgDQAKgDAOAAQAKAAAIADQAIACAGAEQAGAEADAGQAEAGABAIQABAHgGACIgIADQgGACgBgGQgCgLgIgFQgHgFgMAAQgIAAgHACQgGACgFADQgEAEgDAFQgDAGgCAHIgGAjQgCAHACAGQABAFADAEQADAEAGABQAGACAIAAQAZAAALgVQADgGAGACIAIADQAGACgDAGQgFAJgGAGQgGAGgHAEQgIAFgIACQgJACgKAAQgNAAgKgEgABGBAQgKgEgGgGQgGgGgCgJQgCgIACgLIACgLIgcAAIgJAwQgBAGgGAAIgIAAQgGAAABgGIAThxQABgGAGAAIAKAAQAGAAgBAGIgJAvIAcAAIACgLQACgLAFgJQAFgIAIgGQAIgGAKgDQALgDANAAQAMAAAKAEQAJADAGAHQAGAGADAJQACAJgCALIgHAnQgCALgFAIQgFAJgIAFQgIAGgKADQgLADgNAAQgMAAgKgDgABigsQgGACgFAEQgFADgDAFQgDAFgBAHIgHAmQgBAHABAFQABAFAEADQADADAGACQAGACAHAAQAHAAAHgCQAGgCAFgDQAEgEADgFQADgFACgGIAHgnQABgGgBgFQgBgFgEgEQgDgDgGgCQgGgCgHAAQgIAAgGACgAhxA/QgJgDgFgHQgGgHgBgKQgCgKACgLIAGghQADgNAEgJQAFgJAIgFQAIgGAKgDQALgDAOAAQANAAAKACQALACAIAEQAFADABACQACADgBAGIgSBhQgBAFgGACIgZAFQgNACgNAAQgMAAgJgEgAhSgsQgHACgFAEQgFADgDAGQgDAGgBAIIgGAfQgBAIABAFQABAGADAEQADAEAGACQAFACAHAAQAMAAAVgFIAOhPQABgDgEgCQgLgDgNAAQgJAAgGABgAl/A/QgJgDgFgGQgFgHgBgJQgCgKACgMIANhIQABgGAGAAIALAAQAFAAgBAGIgNBJQgBAIABAFQABAGADADQADAEAGACQAFACAIAAQAOAAAOgEQAEgCABgEIARhdQABgGAGAAIAKAAQAGAAgBAGIgSBlQgBAGgDACQgCADgGADQgMAEgMACQgMACgNAAQgMAAgJgEgAqCA/QgJgDgFgHQgGgHgBgKQgCgKACgLIAGghQADgNAEgJQAFgJAIgFQAIgGAKgDQALgDAOAAQANAAAKACQALACAIAEQAFADABACQACADgBAGIgSBhQgBAFgGACIgZAFQgNACgNAAQgMAAgJgEgApjgsQgHACgFAEQgFADgDAGQgDAGgBAIIgGAfQgBAIABAFQABAGADAEQADAEAGACQAFACAHAAQAMAAAVgFIAOhPQABgDgEgCQgLgDgNAAQgJAAgGABgAJGA/QgGAAABgGIAHgmIggAAIgfAnQgEAFgIAAIgJAAQgFAAgBgBQgBgCAEgEIAhgoQgGgCgEgDQgEgEgDgFQgCgDgBgHQgBgGACgIQABgJAFgIQAEgHAGgFQAGgGAJgCQAIgDAKAAIA3AAQAFAAAAAGIgUBxQgCAGgFAAgAIegkQgHAGgCAKQgCAKAFAGQAFAEAKAAIAkAAIAIgqIgkAAQgKAAgHAGgAFJA/QgGAAABgGIAOhKIAAgMQgBgGgCgDQgDgEgFgCQgFgBgHAAQgOAAgQAGQACAJgCAMIgOBLQgBAGgGAAIgKAAQgGAAABgGIAOhKQABgHgBgGQAAgFgDgEQgDgDgFgCQgFgBgHAAQgNAAgLAEQgEACAAADIgRBdQgBAGgGAAIgKAAQgGAAABgGIAShkQABgGADgDQACgDAGgCQAKgFALgCQALgCALAAQAKAAAIADQAHACAFAFQAMgFALgCQAMgDALAAQALAAAIAEQAJADAEAGQAFAHABAJQACAJgDAMIgNBJQgBAGgGAAgAi7A/QgGAAABgGIAIgwIg+AAIgJAwQgBAGgGAAIgKAAQgGAAABgGIAVhxQABgGAGAAIAKAAQAGAAgBAGIgIAuIA+AAIAIguQABgGAGAAIAKAAQAGAAgBAGIgUBxQgBAGgGAAgAnFA/QgFAAAAgGIAIgqQgJAEgWAAQgyAAAIgvIAFgcQABgGAGAAIAKAAQAGAAgBAGIgGAeQgBAHABAFQABAFADADQADAEAGABQAFABAJAAQAPAAAOgEIAJg0QABgGAGAAIAKAAQAGAAgBAGIgUBxQgBAGgGAAgArNA/QgGAAABgGIAJgwIg+AAIgJAwQgBAGgGAAIgKAAQgGAAABgGIAUhxQABgGAGAAIAKAAQAGAAgBAGIgIAuIA/AAIAHguQABgGAHAAIAKAAQAFAAAAAGIgVBxQgBAGgGAAg");
	this.shape.setTransform(80.8,6.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,161.6,13.5);


(lib.Символ6 = function() {
	this.initialize();

	// начинаются с
	this.instance = new lib.logo();
	this.instance.setTransform(236.5,-76);

	// Слой 3 - копия (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1PEhICnpBMAn4AAAIinJBg");
	mask.setTransform(343.1,-56.1);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0047AC","#0047AC"],[0,0.514],-153.6,0,75.1,0).s().p("A1PEhICnpBMAn4AAAIinJBg");
	this.shape.setTransform(343.1,-56.1);

	this.shape.mask = mask;

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(207,-85,272.2,57.9);


(lib.Символ4 = function() {
	this.initialize();

	// СТАВКИ
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApgB1QgJgEgIgFQgHgEgFgHQgGgHgEgIQgEgHgCgJQgCgJAAgKIANhQQACgPALgXIALgQIAOgMQAKgIAZgJQANgEAggCQASAAAOAEQAOADALAIQAKAHAHALQAGALADAPQACAIgDAEQgCAEgIACIgjAMQgIACgDgBQgEgCgBgIQgDgLgHgFQgHgGgOAAQgKAAgHACQgHACgFAFQgGAEgDAHQgDAGgCAJIgLA7QgBAJABAGQABAHAEAEQADAFAHACQAGACAKAAQANAAAKgGQAKgFAGgLQAEgIAEgCQAEgCAHADIAjANQAHADABAEQABAFgDAGQgIAPgLALQgLALgNAHQgNAHgRAEQgQADgTAAQgegCgMgEgAI0B2QgIAAgCgDQgDgDABgIIAPhQIAWg6IgCAAQgdAwgOATIg8BPQgGAGgKAAIgoAAQgIAAgDgDQgCgDABgIIAljPQACgIADgDQAEgDAIAAIAmAAQAIAAACADQADADgBAIIgKA5QgFAZgFARQgEAKgOAdIADAAIAYgnIBPhrQAGgGAJAAIApAAQAIAAACADQADADgCAIIglDPQgBAIgEADQgDADgIAAgAFdB2QgNAAgFgCQgGgDgDgJIgTg8QgCgJgFgDQgEgEgJAAIgFAAIgOBMQgBAIgEADQgEADgHAAIgmAAQgIAAgDgDQgDgDACgIIAljPQACgIADgDQAEgDAIAAIAlAAQAIAAADADQADADgCAIIgNBKIAHAAIA+hMQAGgIAFgCQAFgCAMAAIAnAAQAIAAABAEQACAEgFAHIhPBiQAFAEAEAEQAFAGADAIIAdBUQACAHgDAFQgDAEgIAAgAgIB2QgIAAgDgDQgDgDACgIIAjjPQACgIADgDQAEgDAIAAIBiAAQARAAANAEQANAFAIAIQAIAJADAMQADAMgDAPQgDARgHALQgIAKgOAJIgBABQAfANgIAuQgDAPgHAMQgIAMgMAIQgMAIgQAEQgPAEgTAAgAAzBAIAnAAQALAAAGgFQAGgFACgKQACgJgFgFQgEgFgLAAIgnAAgABEgbIAgAAQAKAAAGgEQAGgFABgJQACgJgEgFQgFgFgKAAIggAAgAhPB2QgNAAgEgDQgFgDgBgIIgDgYIhJAAIgLAYQgEAIgGADQgFADgMAAIglAAQgHAAgBgDQgCgEAEgGIByjSQAEgHAEgDQAEgCAHAAIAmAAQAIAAADACQAEADABAGIAoDTQABAGgDAEQgDADgIAAgAhvAcIgFgmQgCgWACgRIABgHIgEAAQgIAfgHAPIgTAmIAqAAgAmFB2QgIAAgDgDQgCgDABgIIAdijIgxAAQgIAAgDgDQgCgDABgIIAFgeQACgIADgDQAEgDAIAAIClAAQAIAAADADQADADgCAIIgFAeQgCAIgDADQgEADgIAAIgyAAIgdCjQgBAIgEADQgDADgIAAg");
	this.shape.setTransform(115.4,29.7);

	// Слой 3 - копия (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwyEhIAApBMAhlAAAIinJBg");
	mask.setTransform(107.6,28.9);

	// Слой 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#0047AC","#0047AC","#0047AC"],[0,0.514,1],-107.6,0,121.1,0).s().p("AwyEhIAApBMAhlAAAIinJBg");
	this.shape_1.setTransform(107.6,28.9);

	this.shape_1.mask = mask;

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,215.2,57.9);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,786,305);


(lib.Анимация7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.SUDYA();
	this.instance.setTransform(-71,-118.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71,-118.5,142,237);


(lib.Анимация4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bab1();
	this.instance.setTransform(-111.5,-123.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-111.5,-123.5,223,247);


(lib.Анимация3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bab1();
	this.instance.setTransform(-111.5,-123.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-111.5,-123.5,223,247);


(lib.Анимация2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bab2();
	this.instance.setTransform(-104.5,-126);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-104.5,-126,209,252);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bab2();
	this.instance.setTransform(-104.5,-126);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-104.5,-126,209,252);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.setTransform(-7.8,71.2,1,2.585,-23,0,0,11.1,61);
	this.instance.alpha = 0.469;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(94, 94, 1)];
	this.instance.cache(-41,-2,104,126);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-162.3,-140.3,312,426);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(-136,61,1,1,0,0,0,11,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:428,y:46},19).wait(25).to({x:-159,y:61},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-309.3,-140.3,313,426);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtVFUQhlAAABhlIAAneQgBhjBlgBIasAAQBjABABBjIAAHeQgBBlhjAAg");
	mask.setTransform(102.5,34);

	// Слой 3
	this.instance = new lib.Символ29();
	this.instance.setTransform(-26,39.6,1,1,0,0,0,11,61);

	this.instance.mask = mask;

	// Слой 1
	this.instance_1 = new lib.btn();

	this.instance_1.mask = mask;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7,0,191,68);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(29.5,29.5,1,1,0,0,0,29.5,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:39.5,y:19.5},4,cjs.Ease.get(1)).to({x:29.5,y:29.5},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59,59);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(29.5,29.5,1,1,0,0,0,29.5,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:19.5,y:19.5},4,cjs.Ease.get(1)).to({x:29.5,y:29.5},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59,59);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(157,51.5,1,1,0,0,0,157,51.5);
	this.instance.alpha = 0.68;
	this.instance.filters = [new cjs.BlurFilter(61, 39, 3)];
	this.instance.cache(-2,-2,318,107);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83,-53,484,213);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(142.5,24.7,1,1,0,0,0,141.5,24.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(12.4,3,262.7,24.6);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация7("synched",0);
	this.instance.setTransform(71,118.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,142,237);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(97,34,1,1,0,0,0,103,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:24},9,cjs.Ease.get(1)).to({y:34},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-352.3,-161.7,552.3,426);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(15).call(this.frame_24).wait(1));

	// text
	this.instance = new lib.Символ20();
	this.instance.setTransform(95.5,128.4,1,1,0,0,0,141.5,24.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:94.5,y:59.4},9,cjs.Ease.get(1)).to({x:95.5,y:128.4},15,cjs.Ease.get(-1)).wait(1));

	// Слой 6
	this.instance_1 = new lib.Символ26();
	this.instance_1.setTransform(92.5,117.7,1,1,0,0,0,29.5,29.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:212.5,y:-2.3,alpha:1},9,cjs.Ease.get(1)).to({x:482.5,alpha:0},15,cjs.Ease.get(1)).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ24();
	this.instance_2.setTransform(98.5,117.7,1,1,0,0,0,29.5,29.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-21.5,y:-2.3,alpha:1},9,cjs.Ease.get(1)).to({x:-271.5,alpha:0},15,cjs.Ease.get(1)).wait(1));

	// shadow
	this.instance_3 = new lib.Символ21();
	this.instance_3.setTransform(95.5,59.4,1,1,0,0,0,157,51.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},9,cjs.Ease.get(1)).to({alpha:0},15,cjs.Ease.get(-1)).wait(1));

	// btn
	this.instance_4 = new lib.Символ18();
	this.instance_4.setTransform(103,34,1,1,0,0,0,103,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:134},9,cjs.Ease.get(-1)).to({y:24},10,cjs.Ease.get(-1)).to({y:34},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-352.3,-161.7,690.8,426);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(1));

	// SUDYA.png
	this.instance = new lib.Символ19();
	this.instance.setTransform(272,133.1,1,1,0,0,180,71,118.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:203},9,cjs.Ease.get(1)).to({x:272},10,cjs.Ease.get(1)).to({skewY:0,x:273},1,cjs.Ease.get(1)).to({x:369.3},9,cjs.Ease.get(1)).to({x:283},10).wait(1));

	// bab2.png
	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.setTransform(467.5,126);

	this.instance_2 = new lib.Анимация1("synched",0);
	this.instance_2.setTransform(467.5,116);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.607},0).wait(1).to({alpha:0.54},0).wait(1).to({alpha:0.517},0).wait(1).to({alpha:0.505},0).wait(1).to({alpha:0.499},0).wait(1).to({alpha:0.496},0).wait(1).to({alpha:0.493},0).wait(1).to({alpha:0.488},0).wait(1).to({alpha:0.696},0).wait(1).to({alpha:0.859},0).wait(1).to({alpha:0.936},0).wait(1).to({alpha:0.964},0).wait(1).to({alpha:0.979},0).wait(1).to({alpha:0.986},0).wait(1).to({alpha:0.99},0).wait(1).to({alpha:0.993},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:1},0).to({y:122.2},1).wait(1).to({y:119.7},0).wait(1).to({y:118.4},0).wait(1).to({y:117.6},0).wait(1).to({y:117},0).wait(1).to({y:116.6},0).wait(1).to({y:116.4},0).wait(1).to({y:116.2},0).wait(1).to({y:116.1},0).to({_off:true},1).wait(10).to({_off:false,y:126},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).wait(1).to({y:119.8},0).wait(1).to({y:122.3},0).wait(1).to({y:123.6},0).wait(1).to({y:124.4},0).wait(1).to({y:125},0).wait(1).to({y:125.4},0).wait(1).to({y:125.6},0).wait(1).to({y:125.8},0).wait(1).to({y:125.9},0).to({_off:true},1).wait(1));

	// bab1.png
	this.instance_3 = new lib.Анимация4("synched",0);
	this.instance_3.setTransform(111.5,128.5);

	this.instance_4 = new lib.Анимация3("synched",0);
	this.instance_4.setTransform(111.5,118.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({y:124.3},0).wait(1).to({y:121.9},0).wait(1).to({y:120.6},0).wait(1).to({y:119.8},0).wait(1).to({y:119.3},0).wait(1).to({y:118.9},0).wait(1).to({y:118.7},0).wait(1).to({y:118.6},0).to({_off:true},1).wait(10).to({_off:false,y:128.5},0).to({alpha:0.949},1).to({alpha:0.488},9).to({alpha:1},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(1).to({y:122.3},0).wait(1).to({y:124.8},0).wait(1).to({y:126.1},0).wait(1).to({y:126.9},0).wait(1).to({y:127.5},0).wait(1).to({y:127.9},0).wait(1).to({y:128.1},0).wait(1).to({y:128.3},0).wait(1).to({y:128.4},0).to({_off:true},1).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,572,252);


(lib.Символ5 = function() {
	this.initialize();

	// начинаются с
	this.instance = new lib.Символ7();
	this.instance.setTransform(98.2,29.7,1,1,0,0,0,80.8,6.7);

	// Слой 3 - копия (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyHEhICnpBMAhoAAAIinJBg");
	mask.setTransform(98.6,28.9);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0047AC","#0047AC","#0047AC"],[0,0.514,1],-133.6,0,95.1,0).s().p("AyHEhICnpBMAhoAAAIinJBg");
	this.shape.setTransform(98.6,28.9);

	this.shape.mask = mask;

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.4,0,232.2,57.9);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.gotoAndPlay(39);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(-150.7,21,1,1,0,0,0,107.5,28.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:89.3,alpha:1},9,cjs.Ease.get(1)).to({x:79.3},6,cjs.Ease.get(1)).wait(24).to({regX:107.6,scaleX:0.05,x:79.4},5,cjs.Ease.get(-1)).to({regX:107.5,scaleX:1,x:79.3},5,cjs.Ease.get(1)).wait(31));

	// 2
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(209.9,21,1,1,0,0,0,107.5,28.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({x:309.9,alpha:1},9,cjs.Ease.get(1)).to({x:299.9},5,cjs.Ease.get(1)).wait(25).to({regX:108.5,scaleX:0.04,x:300},5,cjs.Ease.get(-1)).to({regX:107.5,scaleX:1,x:299.9},6,cjs.Ease.get(1)).wait(25));

	// 3
	this.instance_2 = new lib.Символ6();
	this.instance_2.setTransform(268.6,106,1,1,0,0,0,131.6,28.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({x:328.6,alpha:1},10,cjs.Ease.get(1)).to({x:318.6},5,cjs.Ease.get(1)).wait(25).to({regX:343.1,regY:-56.1,x:530.1,y:21},0).to({regX:342.8,scaleX:0.05,x:530},6,cjs.Ease.get(-1)).to({regX:343.1,scaleX:1,x:530.1},5,cjs.Ease.get(1)).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-336,-33.9,293,122);


// stage content:



(lib.office_640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn1.addEventListener("mouseover", fl_MouseOverHandler1);
		
		function fl_MouseOverHandler1()
		{
		 _this.babi.gotoAndPlay(1);
		}
		
		
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn1.addEventListener("mouseout", fl_MouseOutHandler2);
		
		function fl_MouseOutHandler2()
		{
		 _this.babi.gotoAndPlay(9);	
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn2.addEventListener("mouseover", fl_MouseOverHandler_24);
		
		function fl_MouseOverHandler_24()
		{
		 _this.babi.gotoAndPlay(20);
		}
		
		
		
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn2.addEventListener("mouseout", fl_MouseOutHandler_25);
		
		function fl_MouseOutHandler_25()
		{
		 _this.babi.gotoAndPlay(30);
		}
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		var _this = this;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 10;
		}
		
		
		this.addEventListener("tick", fl_CustomMouseCursor1.bind(this));
		
		function fl_CustomMouseCursor1() {
		
		this.babi.x = - stage.mouseX / 50;
		}
		
		
		
		
		stage.canvas.onmouseover = qwe;
		
		  function qwe()
		{
		    _this.bigbtn.gotoAndPlay(1);
		}
		
		stage.canvas.onmouseout = qwe2;
		
		  function qwe2()
		{
		    _this.bigbtn.gotoAndPlay(10);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// ramka
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1536B4").ss(1,1,1).p("Egx/gX0MBj/AAAMAAAAvpMhj/AAAg");
	this.shape.setTransform(320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// btn.png
	this.bigbtn = new lib.Символ17();
	this.bigbtn.setTransform(327,259.4,1,1,0,0,0,103,34);

	this.timeline.addTween(cjs.Tween.get(this.bigbtn).wait(1));

	// pole.png
	this.instance = new lib.pole();
	this.instance.setTransform(124,230.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// btn1
	this.btn1 = new lib.Символ16();
	this.btn1.setTransform(118.5,182.5,1.481,1.49,0,0,0,118.5,122.5);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.Символ16(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(1));

	// btn2
	this.btn2 = new lib.Символ16();
	this.btn2.setTransform(493.6,182.5,1.684,1.49,0,0,0,118.5,122.5);
	new cjs.ButtonHelper(this.btn2, 0, 1, 2, false, new lib.Символ16(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn2).wait(1));

	// babi
	this.babi = new lib.Символ14();
	this.babi.setTransform(0,189.5,1,1,0,0,0,-47,126);

	this.timeline.addTween(cjs.Tween.get(this.babi).wait(1));

	// text
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(101.7,42.5,1,1,0,0,0,77.2,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg.jpg
	this.fon = new lib.Символ1();
	this.fon.setTransform(-62,152.6,1,1,0,0,0,26,152.1);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.5,140.1,1009.5,503.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;