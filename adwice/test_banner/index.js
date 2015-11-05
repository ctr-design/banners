(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/back.jpg", id:"back"},
		{src:"images/woodenaxerend1.png", id:"woodenaxerend1"},
		{src:"images/zombi.png", id:"zombi"}
	]
};



// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,646,387);


(lib.woodenaxerend1 = function() {
	this.initialize(img.woodenaxerend1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,121);


(lib.zombi = function() {
	this.initialize(img.zombi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,563,524);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AgOAbQgHgGAAgDQAAgZAVgVQAWgUAAA/QAAAIgSALQgJAAgJgHg");
	this.shape.setTransform(2.3,3.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.6,6.9);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.zombi, null, new cjs.Matrix2D(1,0,0,1,-281.5,-268.5)).s().p("Egr+An7MAAAgsUQA6gbA+gkQDUh5DtjLIA3gxQgEA7gIA6QgFArgMArQgvC+AdC7IAtAaQB4DAgLDmQABADABACIAJAPQADAFAAAHQAGADADAFQAIAPAPAOQAKAIgEAMIAmAUIAHAGQBUhVBQgbQAIACAKAAQAOAAALgFIASAAQACgEAFgBQAKgEAGgGQAIgIAOgDIAZgNQAAgGACgGIAEgCIAOgEQACgBAEAAQAAgHACgGQAEgKAIgIQAFgEAAgKQADAAACgCIAIgDIADgDQAPgCAKgLIB3gLIAUgTIBGAAQgEARARAAQAWgEAXgBIAMAAIAUgMIAEgPIAmACQAFAABIAWQAzAQAfAEIAEAJIAGACQAHABAGAEQAHAEAGAIIAtAAIAgggQAIhaAEhaIABg3IAzAaQAAAEACACIAEAEIAEAFQACAFAFABQAHADAIAAIAIAeIAEACQgEAJAAANIAAAHIANA6QATA6AdAAQAMAAAJgFQASgBALgMQAMgLAAgRQgBgSgHgKQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIAEADIANAGIADADIAEAEQACAGAAAIIBRBQIAIARQAEAAACACIAEAEQACACAEAAQAEAAACACIAEAEIAEAEIAEAEIAEAEQACACAAAEIAQAAIAIAAQAEAAACACIAEAEQACACAEAAIAIAAIAIAAIAIAAIAIAAIAIAAIAIAAIARAAIAQAAIAPAAQAAAbApgIQAUgDATAAIAIAAIAIAAQAJAAACgEQAHgMAWgCIAhgDQAkgGAkgFIAggQIAQgRQAAgEACgDQACgFAFgBIAOgGIADgCQAGgDAIAAIARgQIAfAAIBIgwIAIgYQAFgEAEgCIAHgEQAEgCADgEIAJgHIAHgBQAEAAADgCQAFgCACgEIAEgFQAGgDAIAAQAEAAADgBQAJgDAGgGQAGgGAEgIIAJgHIAHgBQAEAAACgCQAKgGAGgJIAEgFIAEgEIAEgEIADgEQADgEAAgIQAEAAACgCQACgCAAgEQAAgEABgBIAOgGIADgDIAEgEIAEgDQAHgDAHAAQAFgEAEgCIAFgEIAGgNIADgDIADgEIAEgEIAFgNQACgBAEAAQADAAADgCIAEgEIAFgEQAEgCAFgEQADAEAAAEIgBACQgCACAAAEIAAAIQgBAEgCACIgDAEIgFAEIgDAEIgEAEIgEADIgFAOIgDAKIgFANQgCACgEAAQABATgKASIgFAKIgEAFIgEAEQgGACAAAEQAAARgBAEQgKAZgDATQgHAwABAvIAAAQQARAZAhAIQBiAQBlAIQG9AYDZluQEFm5Ben+QA9lKgLlNQgDhQgShLIBHgRQAtgNAugOQF2h5AEl+QABhcgZhQQC3BPEOBNQDAA2DGAqMAAAAkUQpqAepngiIgpAhIAAAQQABAUACATQACAPgCALQgBAUgNADIAkAAQkLCFiDD5QgEAHgIAEIhgAIIgIAoIgYAoQAAAEgCACQgGAGgJAEQgHAEgFAHQgDAFgEACQgNAHgHAHIgQDpQgBAEgBACIgNAMQgFAGgFAIQgEAIgBAJQgDALAAAMQAAAIgBAAQgUADgBAVQAAAYgLAOQgSAVgFAeQgDAAgCACQgHAGgEAIQgEAIgGACQgPADgIANQgKARADAVIgYAQIgYBAQgUAIgJAOQgUAigMArQgIAggbAGIAACIIgRAYIAAEhIARAYQB4GCEIEhg");
	this.shape.setTransform(281.5,255.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,563,511.1);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AgsCIQghgaAAgKQAAgmBEhsQA3hbAQgQIAKBXQAGA3AAALQAAA1gMAmQgNAtgoAMQgJAGgIAAQgSAAgWgSg");
	this.shape.setTransform(-204.8,49.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-212.7,33.9,15.8,30.8);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.zombi, null, new cjs.Matrix2D(1,0,0,1,-301,-151.2)).s().p("AqhWgIgQAAIgQAAIgRAAIgIAAIgIAAIgIAAIgIAAIgIAAIgIAAQgEAAgCgCIgEgEQgCgCgEAAIgIAAIgQAAQAAgEgCgCIgEgEIgEgEIgEgEIgEgEQgCgCgEAAQgEAAgCgCIgEgEQgCgCgEAAIgIgQIhQhQQAAgIgDgHIgDgDIgEgDIgNgGIgDgDQgBgBAAAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQgGgHgJgDIgDgMQgEgNgGgLIAAgCIAAgHIAAgGIAAgLIAAgHQAAglgpgDQgpgCAAAqIAAAFIgBADIgEgCIgIggQgIAAgHgDQgFgBgCgEIgEgGIgEgEQgCgCAAgEIgzgZQADkYgwkXIhAggIBHgtIAZkNQBvjEB4i7IBNgzQgIh4AvhpIAGhNQAHgKABgKQADgYAHgVIABgFIAtAAIAaghIALgHIAIAAQAfAAAmg3QAUgdAIgVIAMgJQAGgQAKgSQAQgeAagaIAggNIAHgTQAGAAAFgDQAEgBACgEQACgCAAgDIAThaQBCh4hvh8Qirh1jMgVQhqgLhzAPIgdgiIA0geQD0gSD0gcIAAABIADASQACAHADAHQBGApBLAoQBfAzBrAcIATATQAJAAAKADQAGAAAHAEIAZANIAHAGIATAZIAUAHIATAgQAJANALAMQAJAKAKAJIAMAHIAHAUIAzAMIAGAGQAAASAGAJQAHAIAXAGQBcAYA2AZQArAVBCAjQA2AdAkAQQAaAMB6BuQBPBJAuASIAYAUQEmAtEhg/QASBLADBQQALFNg9FJQhdH+kFG4QjaFwm9gYQhkgHhjgRQgegHgSgZIAAgQQAAgwAGgvQADgUAKgZQACgEAAgRQAAgEAFgCIAFgEIABgFIAFgJQALgSgBgWQAEAAABgBIAFgOIADgJIAGgOIADgEIAEgEIAEgEIAEgEIAEgEQACgCAAgEIAAgIQAAgEACgCIACgCQAAgEgEgEQgEAEgFACIgFAEIgEAEQgCACgEAAQgEAAgBACIgGANIgDADIgEAEIgDAEIgGANIgEADQgDACgEAEQgIAAgHADIgDADIgFAEIgDADIgNAGQgCABAAAEQAAAEgCACQgCACgEAAQAAAIgDAHIgDADIgEAEIgEAEIgEAFQgGAJgJAGQgDACgEAAIgHABIgJAHQgEAIgGAHQgGAGgIACQgEACgEAAQgIAAgGADIgDAEQgDAFgFACQgDACgEAAIgHABIgJAHQgEAEgFACIgGAEQgFACgEAEIgIAYIhIAwIggAAIgQAQQgIAAgHADIgDACIgOAGQgFABgCAFQgCADAAAEIgQAQIggAQQgkAFgjAHIgiACQgWADgHAMQgCADgIAAIgIAAIgIAAQgUAAgUADQgJACgHAAQgYAAAAgVg");
	this.shape.setTransform(128.4,146.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,256.9,292.4);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AAGJSQgCgDAAgGQADgkgCgZQAKgCAEAIQACAGAAAQIgBAsIgCACIgLAAIgBgEgABCFPQgGgEAAgGQAAgDAFgMQAFgNAAgIIgDgUQgEgPAAgFIAEheIAEgLQADgLAAgLQAAgFADgKIACgPQAAgeAWgUQAfgcACgEQAIgNAMgiQANgmAFgLQADgFAPgJQAPgJACgHIAGgfIAFgcIARg7QAMgtAAgFIAHgUQAEgOAEgRQgLAGgCAAIgFAAQAAgBABAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgQgZIgVAHQgNAEgKgFQgDAIgGAIIgKANIgGABQgFABAAgIQAAgKADgJIAIgaIgHgcQgDgSAUgRIgMgRIgIAGQgEAIgHAIQgLANAAAVIAAAAIAEABIgGA0QAAAFgVAzQgWA0AAAOIAFAMQAGANAAAEQAAAYhIANQgHAAgDgMQgDgIAAgGQAAgIAfg4QAeg5AAgmQAAgMAHgLIAEgVIgHAJQgqAwgSAkQgoBTgMARQgkA4gsAQIgFgCQgBgBAAgHQAAgHAHgbQAGgbAAgoQAAgfAOgTQAFgGAYgVQAmgigMhGIAAgWIgBgEQgJAGgPASIgVAdIgFACQgIgJgBgHIAAgFQAAgLgHgQIgEgHQgEAggbBbQgaBWAAAKQAAAJgNADIgEgDIgRgcQgDgHAAgDIAMgpQgDgUABgFQgJgjg7g6Qg2g0AAgfQAAgOAogVQAkgTAKAAQADAAATgOQATgOAXAAQAaAAAYgNQAZgNAZAAQAFAAAUAJQAVAIAIAAQAFAAAHgDQAKgEAEAAQALAAAdAPQAeAPAMAAQAFAAAJgEQAKgDAEAAQAJAAAcAYQAdAZAYAAIAyAbQAxAhAAAbIgBATQgCARAAAPQAAAGgdAVIgBAEIgIAxIgNAbQgNAegDASQgCATgJAWQgGARAAAWIg3CiQAABBgfB4QgjCFgfAAQgGAAgEgDgAjRCtQgEgEAAgDIgBgJQAAgHgFgNIgFgLQAAgFAEgLQADgLAAgNIAEg5QADgZAAgYQAAgEADgGQAEgFAAgEQgRg+gCgMIADgNIAAgBQAAgCAFAAIAHADQAIAFAHAPQAIAAAGAEQAQAZAAAOIAHgCQAFgDgEgMIABgCQABgCAFAAQAEAAADAFQADAFAEAAQACAAAOgJIAPADQAOAGAAAKQAAAngbAWQgeAXgFAeQgLA8gEANQgPAygbAAIgCAAgAhUCAIAbgwQAcg2AKggQACgGARgXQARgVABgHQACgcAHgOQAHgRARgFIABADIABAHQAAALgdA3IgiBDQgKAWgQA2QgRAqgbABIgBAAQgDAAAAgHgAA9ggQAog2AQgdIAIAAQABAWgUAcQgcAogDAGQgEABgHAAQgDgFAAgJgACijOQAAgPARgYQASgZARADQgGARgMASIgXAgIgGABIgCAAQgDAAAAgHg");
	this.shape.setTransform(229.5,97.5);

	// Слой 1
	this.instance = new lib.woodenaxerend1();
	this.instance.setTransform(0,130.9,1.084,1.101,0,-169.3,10.8);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,263.4,176.2);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,0,0,0.4)","#FF0508"],[0,1],0,0,0,0,0,547.8).s().p("EhNoAkAMAAAhH/MCbRAAAMAAABH/g");
	this.shape.setTransform(497,230.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,993.9,461);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg97Ad1MAAAg7pMB73AAAMAAAA7pg");
	this.shape.setTransform(396.5,191);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,793,382);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.zombi, null, new cjs.Matrix2D(1,0,0,1,-169.4,-58.3)).s().p("ABNI0IhegwIggAAQgPgZgYgFQgNgCgNgFQgLgDgMAAQhAgfg2gfQgfgTgkgQQhEgCg5gbQjAhaiUiZQgdgdgXgfIgRgXIG+AAIAAADQAAAQAKASQARAeAlAAQA8AAAtgxQAGADAJAAIAGgCIABABQAFALAPAAQAgAAAMg0IAMgcQAIgSgCgMQgCgWALgkQANgsABgQIAGg7QAFghAJgYQADgJAag3QAXgvAAgHQAAgbgRAFQgRAFgWAeQgUAcgOAfQgEgZgJgQQgPgagXAGQglAIgaBCIAAjyIAIABIDtgDIAmgFQBSA+BIBYQFQgsEFCzQBRBbgOBZIgKACQACgKgPgSQgUgYgdAAQgLAAgcAVQgZAVgCAAQgRAAgigoQgtgzgTgNQhCgwg/BfIgEgHIgFgKQAAgDAPgbIAQgfQAZAEALgMQAFgGAAgIQAAgegnAJQgoAJgMAlQgFAPgQAcIgNAXQgHgFgJANQgNAVAAASQAAAMgWB5QgXB3AAAXIADA1QAGAqATAIIABAKQALA8A1AAQAOAAASgMQASgMACAAQAyAYADAAQAKAAAPgKQAKgHAIgCIgIAGIgaAgIgtAAIgBAGQgIAVgDAXQgBALgGAKIgHBNQgNAegJAfQh1Adh8AAQhCAAhDgIg");
	this.shape.setTransform(101.3,58.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(15.6,1.1,171.5,114.4);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.zombi, null, new cjs.Matrix2D(1,0,0,1,-135.3,-129.8)).s().p("Ar1NnQALgrAGgrQA3m4g7m3QgLhTgJhUQgjlZAKlbQAChZAGhYQAsgSAUguQAggTAdgVQgkCQA1CTQANAkAbAcIAAAoQAoBbA9BSQAXAfAdAdQCUCZDABaQA5AbBCACQAkAQAfATQA2AfBAAfQAMAAALADQANAFANACQAYAFAPAZIAgAAIBgAwQDCAWCzgrIABAAIgBAFQgVBLAGBTIhNAxQh5C9huDEIgaEOIhGAtIBAAgQAcCkALCkQgshWg9hUIgYgIIhwh4IjhgQQgIgIgHgBIj+gSIiygNIgogZIgkg8IALgMIgggYIAVAkIgdAcQgqB0hOBlIAAAYQhVCZgdCWQgai1Aui3g");
	this.shape.setTransform(79.3,123.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,158.6,247.2);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.zombi, null, new cjs.Matrix2D(1,0,0,1,-120.5,-251.8)).s().p("Al+JKIgngTQAEgNgJgHQgQgPgIgOQgDgGgGgDQAAgGgDgFIgJgQQgBgCAAgDQAKjlh3jCIgtgaIgCgNQAciVBWiYIAAgZQBNhlArhzIAdgdIgVgjIAgAYIgLALIAjA9IAoAYIGvAfQAIABAIAIIDhAQIBwB5IAZAIQA8BTAsBXQAPDngWDqIggAgIgtAAQgGgJgHgEQgGgDgHgCIgGgBIgMgaIgngTQgpADgigOQgUgHgUgCIghAHIgGATIgTANIgNAAQgXAAgVAEQgSABAEgSIhGAAIgUATIiLANQAAAGgCAFIgEADIgIAEQgCABgDAAQAAALgEADQgJAIgEALQgCAGAAAGQgEAAgCACIgOADIgDADQgDAFAAAHIgZAMQgOADgIAIQgGAGgKAEQgEACgDADIgtAAIgHAAQhUAahZBZg");
	this.shape.setTransform(63,59.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,126,118.6);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.zombi, null, new cjs.Matrix2D(1,0,0,1,-454.8,-397.2)).s().p("AqoT0QkJkhh3mCIgRgYIAAkhIARgYIAAiIQAbgGAIggQAMgrAUgiQAIgMAVgIIAYhAIAYgQQgDgVAKgRQAIgNAPgDQAGgCAEgIQAEgIAGgGQADgCADAAQAEgeATgVQALgOABgYQAAgVAUgDQABAAAAgIQAAgMADgLQABgJAEgIQAFgIAFgGIANgMQACgCAAgEIAQjpQAIgHAMgHQAEgCADgFQAFgHAHgEQAJgEAGgGQACgCAAgEIAYgoIAIgoIBggIQAIgEADgHQCEj5ELiFIgkAAQANgDABgUQABgLgBgPQgCgTgBgUIAAgQIAoghQJmAiJpgeMAAAAnjg");
	this.shape.setTransform(108.2,126.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,216.4,253.7);


(lib.Символ20копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("Ag0AUIAdhGIBMAfIgdBGg");
	this.shape.setTransform(101.5,123.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(32));

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(-222.4,23.7,0.195,0.195,0,0,0,-204.8,49.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({regY:49.1,scaleX:0.29,scaleY:0.29,rotation:-15,x:-224.6,y:43.4,alpha:1},14,cjs.Ease.get(1)).wait(3).to({regX:-205,regY:49.2,scaleX:0.21,scaleY:0.21,rotation:0,x:-229.3,y:69.3},4,cjs.Ease.get(-1)).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224,20.7,330.9,108.3);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(-222.4,23.7,0.195,0.195,0,0,0,-204.8,49.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:49.2,scaleX:0.38,scaleY:0.38,x:-228,y:42.8,alpha:1},14,cjs.Ease.get(1)).wait(3).to({x:-236,y:86},4,cjs.Ease.get(1)).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224,20.7,3.1,6);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AqQIJIAAwRIUgAAIAAQRg");
	this.shape.setTransform(-414.1,-194.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(110));

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(496.9,230.5,1,1,0,0,0,496.9,230.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(102).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-479.8,-246.9,131.4,104.3);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(396.4,191,1,1,0,0,0,396.4,191);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,793,382);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AjcA4QgLgVgFgQQgJAQgKAiQgEABgMAAQgDAFAAgOQAAgiALgZQgOABgSAAQgJAAABAHIgBAKIgOAAQgEADAAgLQgGACgEAAQgJAAgEgEIgCgCQgiAPgVAAQgCAAggASQgfATgKAGIgMAAQgEAEABgOQgBgdAtgOQAigLAtAAIAjgcIgBAAIgDADQgFADgKAAQgRAAgIgNQALgJAOgJQAPgKAEAAIAiAGQAUgOAUgJIAQgLQA5gmAxABQAIAGAAAIIgjAMIAAABQAAAKgaAWIAIAAQAgACAIACIACAHIgIAKIAcAHQACgCAHgCIAEgBIAHADQACACAAAIIAAABIACAAIBFAQIAJgMQAGgIAGAEIBJAUQAEADAGAIIBSAYQADACAEAAQACABgBAJQAAAIgDACIgKABIhJgTQAAAKgDgCIgLAAQgJAAgmgKIgjgKQgEAEgMAEQgNAFgKAGQglgLgIgGQgKgJghgKQgHgFgDgFIACgHIgPgDIgEAAIACAIQgHAIgKAUQgLAWAAAGIAMAXQAMAaAEAUQgBAJgIAFQgUgTgXg0gAlLgeIADgCIgBgBIgCADgAFYBvQgCgGAAgLQAAgGAGgdQAIgdgBgHQAAgJgjgfQgkghAAgIIAFgGQAFgHAHgEIATAFQAVAFAGABIgDgFQAbgYAlAdQBCA0AMAFQADACADAAQABABAAAGQAAAOgBgDQAAABgMAAQhXAAgEgIQgBgGgDgHQgDgMgTgMIgSgDQAsA1AMA8QgNAKgTACIADAGQgGASgNAKQgIgHgBgHg");
	this.shape.setTransform(229.6,342.8);

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(281.5,268.5,1,1,0,0,0,281.5,255.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.zombi, null, new cjs.Matrix2D(1,0,0,1,-15.4,-104.3)).s().p("AiZjyQDHhlBkggIAIAYQgwEukDGpg");
	this.shape_1.setTransform(15.4,104.3);

	this.addChild(this.shape_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,13,563,511.1);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(93.5,57.8,1,1,0,0,0,93.5,57.8);

	// Слой 2
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(166.1,38,1,1,0,0,0,131.7,88.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(15.6,-50.1,282.2,176.2);


(lib.Анимация3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(7.8,-6.4,1,1,0,0,0,2.2,3.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5.6,-9.8,4.6,6.9);


(lib.Анимация2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(7.8,-33.5,1,1,0,0,0,2.2,3.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5.6,-36.9,4.6,6.8);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AiqBVIgBgDQgBgCAAgHQAAgOARgJQANgGARAAIgDgCQAXgEA8gmQAwghAQAJQAHgXAigRQAkgQAHgEQACACACABQABAAAAAHIAOABQAzAGAAAxIgBAKIgBAHIgGADQgLgIgCgFIAAgGIgLgMQAAANgCAHQgBAEgDAFIACAIIgEAFQgCABgHAAQgGAAgDgDIgBgBQgGgGABgMIAEgZIgHgLIgGgHIgPAcQgVAjgNAGQgHACAAgLQAKghANgVIg/AoQhmA/gFAAIgHgDIAAADQgBAIgQAAQgKAAgJAIIgNALg");
	this.shape.setTransform(-2.8,63.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(62));

	// Слой 1
	this.instance = new lib.Анимация2("synched",0);
	this.instance.setTransform(-5.6,36.9);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Анимация3("synched",0);
	this.instance_1.setTransform(-14.6,67.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},55).to({state:[{t:this.instance_1}]},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},55,cjs.Ease.get(1)).to({_off:true,x:-14.6,y:67.4},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.1,0,34.7,71.7);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AhYBWIBUjRIBdAmIhUDRg");
	this.shape.setTransform(651.4,-78.2);

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(289.9,-6.1,1,1,0,0,0,7.9,15.4);

	this.instance_1 = new lib.Символ20копия();
	this.instance_1.setTransform(14.9,12.7,1.657,1.205,0,0,0,-222.7,24);

	this.instance_2 = new lib.Символ20();
	this.instance_2.setTransform(231.9,-5.2,1,1,0,0,0,7.9,15.4);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-90.7,660.4,229.9);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(80.9,141.4,1,1,0,0,0,96.5,91.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:91.4,rotation:-9.5,y:141.5},29).to({regY:91.3,rotation:0,y:141.4},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,282.2,176.2);


(lib.Символ3 = function() {
	this.initialize();

	// Символ 8
	this.instance = new lib.Символ8();
	this.instance.setTransform(17.8,221.1,1,1,0,0,0,79.2,123.5);

	// Символ 7
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(106.5,133.9,1,1,0,0,0,141.1,88.1);

	// Символ 6
	this.instance_2 = new lib.Символ6();
	this.instance_2.setTransform(3.5,339.2,1,1,0,0,0,63,59.2);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-61.4,45.8,309,352.8);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ24();
	this.instance.setTransform(103.5,185.9,1,1,0,0,0,2.2,3.4);

	// Слой 2
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(158.1,257.6,1,1,0,0,0,115.9,0.4);

	// Слой 1
	this.instance_2 = new lib.Символ19();
	this.instance_2.setTransform(128.4,146.2,1,1,0,0,0,128.4,146.2);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,702.6,396.3);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(81,323.2,1,1,-6.9,0,0,19.6,368.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:13.5,x:81.1,y:323.1},59).to({rotation:13.5},20).to({rotation:15.5,y:323.2},6).to({rotation:13.5,y:323.1},6).to({rotation:15.5,y:323.2},5).to({rotation:13.5,y:323.1},5).to({regX:19.4,scaleX:2.07,scaleY:2.07,rotation:-40.2,x:44.4,y:796.8},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.2,-25.1,321.7,387.3);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(71.8,272.8,1,1,0,0,0,71.8,272.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6.7},24).to({rotation:0},26).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,702.6,396.3);


(lib.Символ2 = function() {
	this.initialize();

	// Символ 4
	this.instance = new lib.Символ4();
	this.instance.setTransform(303.5,161,1,1,0,0,0,128.4,146.2);

	// Символ 10
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(281.5,262,1,1,0,0,0,281.5,262);

	// Символ 5
	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(441,388.6,1,1,0,0,0,108.2,126.8);

	// Символ 3
	this.instance_3 = new lib.Символ12();
	this.instance_3.setTransform(211.2,140.3,1,1,0,0,0,154.5,176.3);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-61.2,877.7,585.2);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(168.9,178.9,0.6,0.6,0,0,0,281.5,262);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:191.4},24).to({y:178.9},25).to({y:191.4},25).to({y:178.9},27).to({regX:281.4,scaleX:0.87,scaleY:0.87,rotation:-15,x:184.8,y:225.8},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-15,526.6,351.1);


// stage content:



(lib.index = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ16();
	this.instance.setTransform(368,164.5,1,1,0,0,0,496.9,230.5);

	// Слой 2
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(343.6,157.2,1,1,0,0,0,168.9,168);

	// Слой 1
	this.instance_2 = new lib.back();
	this.instance_2.setTransform(-2.9,-59);

	this.instance_3 = new lib.Символ14();
	this.instance_3.setTransform(322.5,152,1,1,0,0,0,396.4,191);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-288.8,-160.4,1327.8,655.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;