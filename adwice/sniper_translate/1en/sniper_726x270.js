(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 726,
	height: 270,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/_2.jpg", id:"_2"},
		{src:"images/_3.jpg", id:"_3"},
		{src:"images/shoot.png", id:"shoot"}
	]
};



// symbols:



(lib._2 = function() {
	this.initialize(img._2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,331);


(lib._3 = function() {
	this.initialize(img._3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1118,313);


(lib.shoot = function() {
	this.initialize(img.shoot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,315,168);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib._2();
	this.instance.setTransform(0.4,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.4,0,640,331);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ANWDzQgJgIAAgLQAAgMAJgIQAIgHAMAAQAMAAAIAHQAJAIAAAMQAAALgJAIQgIAHgMAAQgMAAgIgHgAFOD4QgMgCgKgEQgJgEgKgGQgIgGgHgHQgIgIgFgIQgGgJgDgKQgEgJgCgKQgCgLAAgLQAAgLACgLQACgLAEgJQADgKAGgIQAFgJAIgHQAHgHAIgGQAKgGAJgEQAKgFAMgCQALgCAMAAQAMAAALACQAMACAKAFQAJAEAJAGQAJAGAHAHQAHAHAFAJQAGAIAEAKQAEAJACALQACALAAALQAAALgCALQgCAKgEAJQgEAKgGAJQgFAIgHAIQgHAHgJAGQgJAGgJAEQgKAEgMACQgLACgMAAQgMAAgLgCgAFPBRQgLAFgIAJQgIAIgEAMQgFANAAAPQAAAPAFAMQAEAMAIAJQAIAIALAFQAKAEAMAAQAMAAAKgEQAKgFAIgIQAIgJAEgMQAFgMAAgPQAAgPgFgNQgEgMgIgIQgIgJgKgFQgKgEgMAAQgMAAgKAEgAthD2QgQgEgNgIQgCgFAAgUQAAgTACgEQATAMANAFQAQAFANAAQANAAAHgFQAGgFAAgJQAAgJgIgFQgHgDgXgIIgTgHQgLgGgIgHQgJgHgFgKQgFgMAAgOQAAgNAFgMQAEgMAKgJQAKgKANgEQAPgGARAAQARAAAPAFQAOAEALAHQACAGAAATQABAUgDADQgSgLgNgFQgOgGgLAAQgLAAgGAFQgHAFAAAJQAAAJAJAFQAGAEAWAHIAUAHQALAGAIAGQAJAIAFAKQAFAMAAAPQAAAQgGAMQgFANgLAIQgKAIgOAEQgNAEgQAAQgRAAgRgEgAKpD2IAAjOICPAAQACAKAAALQAAAKgCALIhdAAIAAApIBSAAQACALAAAKQAAAKgCALIhSAAIAABRQgLACgOAAQgPAAgKgCgAH2D2IAAjOICQAAQACAKAAALQAAAKgCALIhdAAIAAApIBSAAQACALAAAKQAAAKgCALIhSAAIAABRQgLACgOAAQgPAAgLgCgABaD2IguhGIgUAAIAABGQgKACgOAAQgNAAgLgCIAAjOIBQAAQARAAAPAFQAOAFAKAJQALAJAFAMQAGANAAAPQAAAKgDAKQgDAJgFAIQgFAHgHAHQgIAGgIADIAxBOQgKACgRAAQgRAAgKgCgAAYCGIAgAAQALAAAHgGQAIgIAAgMQAAgNgIgHQgHgGgLAAIggAAgAmND2IAAjOIBRAAQARAAAPAFQANAFALAJQALAJAFANQAGAMAAAQQAAAPgGANQgFANgLAJQgLAJgNAFQgPAFgRAAIgeAAIAABEQgLACgOAAQgPAAgLgCgAlaCIIAeAAQALAAAHgGQAIgIAAgNQAAgOgIgGQgHgHgLAAIgeAAgAnsD2IAAjOQALgCAPAAQAOAAALACIAADOQgLACgOAAQgPAAgLgCgAo/D2Ihfh5IAAB5QgMACgNAAQgPAAgLgCIAAjOIAUgCIATACIBhB5IAAh5QAKgCAPAAQAOAAALACIAADOIgUACgAjKD2IAAjOICPAAQACAKAAALQAAAKgCALIhdAAIAAAmIBTAAQACAMAAAJQAAALgCALIhTAAIAAAoIBdAAQACAMAAAKQAAAJgCAMgANcCrIgLhgIAAgjQALgCAOAAQAOAAAMACIAAAjIgLBgIgPACIgOgCgAE8gpIAAhTIhVAAIAABTQgLACgOAAQgPAAgKgCIAAjOQAKgCAPAAQAOAAALACIAABQIBVAAIAAhQQALgCAPAAQAOAAALACIAADOQgLACgOAAQgPAAgLgCgAAogpIAAikIg2AAQgCgLAAgKQAAgKACgLICgAAQACALAAAKQAAAKgCALIg3AAIAACkQgLACgPAAQgOAAgLgCgAlhgpIhHhjIAABjQgLACgOAAQgPAAgKgCIAAjOQAKgCAPAAQAOAAALACIAABdIBEhdQAMgCASAAQATAAALACIhKBkIBNBqQgLACgTAAQgTAAgLgCgAovgpIgOgnIhMAAIgPAnQgKACgPAAQgQAAgLgCIBUjOIAVgCIAVACIBTDOQgKACgPAAQgQAAgLgCgApNh7IgWg7IgWA7IAsAAgAtMgpIAAikIg4AAQgCgLAAgKQAAgKACgLICiAAQACALAAAKQAAAKgCALIg3AAIAACkQgLACgPAAQgOAAgLgCgAGbgpIAAjOICPAAQACALAAAKQAAAKgCALIhdAAIAAAmIBSAAQACAMAAAKQAAAKgCALIhSAAIAAApIBdAAQACALAAAKQAAAKgCALgAkFgpIAAjOICPAAQACALAAAKQAAAKgCALIhdAAIAAAmIBTAAQACAMAAAKQAAAKgCALIhTAAIAAApIBdAAQACALAAAKQAAAKgCALg");
	this.shape.setTransform(90.3,25.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,180.7,50.2);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("EiOvBRwMAAAijfMEdeAAAMAAACjfgArGtXQjFDGAAEXQAAEYDFDDQDHDHEXgBQEWABDFjHQDGjDAAkYQAAkXjGjGQjFjGkWAAQkXAAjHDGg");
	this.shape.setTransform(913.6,523.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1827.2,1046.4);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgRDPIAQmdIADAAIAQGdg");
	this.shape.setTransform(1.9,20.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,3.8,41.5);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjOACIAAgDIGdgQIAAAjg");
	this.shape.setTransform(20.8,1.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41.5,3.8);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjOgRIGdAQIAAADImdAQg");
	this.shape.setTransform(20.8,1.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41.5,3.8);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ANWDzQgJgIAAgLQAAgMAJgIQAIgHAMAAQAMAAAIAHQAJAIAAAMQAAALgJAIQgIAHgMAAQgMAAgIgHgAFOD4QgMgCgKgEQgJgEgKgGQgIgGgHgHQgIgIgFgIQgGgJgDgKQgEgJgCgKQgCgLAAgLQAAgLACgLQACgLAEgJQADgKAGgIQAFgJAIgHQAHgHAIgGQAKgGAJgEQAKgFAMgCQALgCAMAAQAMAAALACQAMACAKAFQAJAEAJAGQAJAGAHAHQAHAHAFAJQAGAIAEAKQAEAJACALQACALAAALQAAALgCALQgCAKgEAJQgEAKgGAJQgFAIgHAIQgHAHgJAGQgJAGgJAEQgKAEgMACQgLACgMAAQgMAAgLgCgAFPBRQgLAFgIAJQgIAIgEAMQgFANAAAPQAAAPAFAMQAEAMAIAJQAIAIALAFQAKAEAMAAQAMAAAKgEQAKgFAIgIQAIgJAEgMQAFgMAAgPQAAgPgFgNQgEgMgIgIQgIgJgKgFQgKgEgMAAQgMAAgKAEgAthD2QgQgEgNgIQgCgFAAgUQAAgTACgEQATAMANAFQAQAFANAAQANAAAHgFQAGgFAAgJQAAgJgIgFQgHgDgXgIIgTgHQgLgGgIgHQgJgHgFgKQgFgMAAgOQAAgNAFgMQAEgMAKgJQAKgKANgEQAPgGARAAQARAAAPAFQAOAEALAHQACAGAAATQABAUgDADQgSgLgNgFQgOgGgLAAQgLAAgGAFQgHAFAAAJQAAAJAJAFQAGAEAWAHIAUAHQALAGAIAGQAJAIAFAKQAFAMAAAPQAAAQgGAMQgFANgLAIQgKAIgOAEQgNAEgQAAQgRAAgRgEgAKpD2IAAjOICPAAQACAKAAALQAAAKgCALIhdAAIAAApIBSAAQACALAAAKQAAAKgCALIhSAAIAABRQgLACgOAAQgPAAgKgCgAH2D2IAAjOICQAAQACAKAAALQAAAKgCALIhdAAIAAApIBSAAQACALAAAKQAAAKgCALIhSAAIAABRQgLACgOAAQgPAAgLgCgABaD2IguhGIgUAAIAABGQgKACgOAAQgNAAgLgCIAAjOIBQAAQARAAAPAFQAOAFAKAJQALAJAFAMQAGANAAAPQAAAKgDAKQgDAJgFAIQgFAHgHAHQgIAGgIADIAxBOQgKACgRAAQgRAAgKgCgAAYCGIAgAAQALAAAHgGQAIgIAAgMQAAgNgIgHQgHgGgLAAIggAAgAmND2IAAjOIBRAAQARAAAPAFQANAFALAJQALAJAFANQAGAMAAAQQAAAPgGANQgFANgLAJQgLAJgNAFQgPAFgRAAIgeAAIAABEQgLACgOAAQgPAAgLgCgAlaCIIAeAAQALAAAHgGQAIgIAAgNQAAgOgIgGQgHgHgLAAIgeAAgAnsD2IAAjOQALgCAPAAQAOAAALACIAADOQgLACgOAAQgPAAgLgCgAo/D2Ihfh5IAAB5QgMACgNAAQgPAAgLgCIAAjOIAUgCIATACIBhB5IAAh5QAKgCAPAAQAOAAALACIAADOIgUACgAjKD2IAAjOICPAAQACAKAAALQAAAKgCALIhdAAIAAAmIBTAAQACAMAAAJQAAALgCALIhTAAIAAAoIBdAAQACAMAAAKQAAAJgCAMgANcCrIgLhgIAAgjQALgCAOAAQAOAAAMACIAAAjIgLBgIgPACIgOgCgAE8gpIAAhTIhVAAIAABTQgLACgOAAQgPAAgKgCIAAjOQAKgCAPAAQAOAAALACIAABQIBVAAIAAhQQALgCAPAAQAOAAALACIAADOQgLACgOAAQgPAAgLgCgAAogpIAAikIg2AAQgCgLAAgKQAAgKACgLICgAAQACALAAAKQAAAKgCALIg3AAIAACkQgLACgPAAQgOAAgLgCgAlhgpIhHhjIAABjQgLACgOAAQgPAAgKgCIAAjOQAKgCAPAAQAOAAALACIAABdIBEhdQAMgCASAAQATAAALACIhKBkIBNBqQgLACgTAAQgTAAgLgCgAovgpIgOgnIhMAAIgPAnQgKACgPAAQgQAAgLgCIBUjOIAVgCIAVACIBTDOQgKACgPAAQgQAAgLgCgApNh7IgWg7IgWA7IAsAAgAtMgpIAAikIg4AAQgCgLAAgKQAAgKACgLICiAAQACALAAAKQAAAKgCALIg3AAIAACkQgLACgPAAQgOAAgLgCgAGbgpIAAjOICPAAQACALAAAKQAAAKgCALIhdAAIAAAmIBSAAQACAMAAAKQAAAKgCALIhSAAIAAApIBdAAQACALAAAKQAAAKgCALgAkFgpIAAjOICPAAQACALAAAKQAAAKgCALIhdAAIAAAmIBTAAQACAMAAAKQAAAKgCALIhTAAIAAApIBdAAQACALAAAKQAAAKgCALg");
	this.shape.setTransform(90.3,-2.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-27.8,180.7,50.2);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("At9BKIAAiTIb7AAIAACTg");
	var mask_graphics_9 = new cjs.Graphics().p("At9BKIAAiTIb7AAIAACTg");
	var mask_graphics_39 = new cjs.Graphics().p("At9BKIAAiTIb7AAIAACTg");
	var mask_graphics_44 = new cjs.Graphics().p("AvaBKIAAiTIb8AAIAACTg");
	var mask_graphics_84 = new cjs.Graphics().p("Aw+BKIAAiTIb8AAIAACTg");
	var mask_graphics_114 = new cjs.Graphics().p("Ax/BKIAAiTIb8AAIAACTg");
	var mask_graphics_119 = new cjs.Graphics().p("AzjBKIAAiTIb8AAIAACTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:0}).wait(9).to({graphics:mask_graphics_9,x:-38,y:0}).wait(30).to({graphics:mask_graphics_39,x:-68,y:0}).wait(5).to({graphics:mask_graphics_44,x:-98.7,y:0}).wait(40).to({graphics:mask_graphics_84,x:-108.7,y:0}).wait(30).to({graphics:mask_graphics_114,x:-115.2,y:0}).wait(5).to({graphics:mask_graphics_119,x:-125.2,y:0}).wait(31));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CC00").s().p("At9BKIAAiTIb7AAIAACTg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("At9BKIAAiTIb7AAIAACTg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("At9BKIAAiTIb7AAIAACTg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3300").s().p("At9BKIAAiTIb7AAIAACTg");
	this.shape_3._off = true;

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},30).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape_3}]},40).to({state:[{t:this.shape_3}]},30).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape}]},30).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(44).to({_off:false},0).wait(75).to({_off:true},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.4,-7.5,179,15);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AmvBYQAOhXgOhaQCfgRCVADQCLADCFAVIAACdQiEAXiKADIgoAAQiDAAiLgQgAnDA9QgEgaAAgjQAAgjAEgaQADgZAFAAQAFAAAEAZQADAaAAAjQAAAjgDAaQgEAagFAAQgFAAgDgagACZBMIAAiZQAWgCAUABQCRAEB0BGIAAAGQh3BGiDAEIgVAAIggAAg");
	this.shape.setTransform(45.6,10.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,91.3,21);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMBHIAAiOIBHAAQAMABALAEQALAFAIAKQAGAGADAJQADAJAAAJQAAALgFAIQgEAJgHAHQgIAHgJAFQgKADgLAAIgsAAIAAAngAAnAKIAsAAQAGAAAGgDQAGgDADgEIAFgIQACgEAAgGQAAgMgHgIQgEgEgGgDQgFgCgHAAIgrAAgAgiBHIAAhBIhNAAIAABBIgZAAIAAiOIAZAAIAAA4IBNAAIAAg4IAZAAIAACOg");
	this.shape.setTransform(18.2,8.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.4,1.3,27.5,14.4);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("AAWqiIgrVF");
	this.shape.setTransform(2.3,67.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,6.5,137.1);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.498)").s().p("Eg8wAWWMAAAgsrMB5hAAAMAAAAsrg");
	this.shape.setTransform(322,135);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67,-8,778,286);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.71)","rgba(255,255,255,0.612)","rgba(255,255,255,0.694)","rgba(255,255,255,0)"],[0,0.196,0.49,0.8,1],-33.9,0,34,0).s().p("Am0FEIDDqIIKlAAIjCKIg");
	this.shape.setTransform(43.7,32.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,87.4,65);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgBDPIgQmdIAjAAIgQGdg");
	this.shape.setTransform(1.9,20.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,3.8,41.5);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,2,0,3).p("AKjAAQAAEXjGDGQjGDGkXAAQkWAAjGjGQjGjGAAkXQAAkWDGjGQDGjGEWAAQEXAADGDGQDGDGAAEWg");
	this.shape.setTransform(67.5,67.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,137,137);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(6.3,2,0,3).p("AKjgDQAAACAAABQAAEXjGDGQjEDEkUACAqhgNQAFkODAjBQDBjAEOgF");
	this.shape.setTransform(67.4,67.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.1,-3.1,141.2,141.3);


(lib.Символ11_1 = function() {
	this.initialize();

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,0,0,0.498)").s().p("Eg8wAWWMAAAgsrMB5hAAAMAAAAsrg");
	this.shape_1.setTransform(372,135);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17,-8,778,286);


(lib.Символ8копия = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFCC00","#FFFF00"],[0,0.478,1],0,0,0,0,0,4.7).s().p("AAAAuIgCgkIgdAXIAYgdIgmgEIAkgDIgWgcIAdAXIACglIAAAAIAFAlIAbgXIABAAIgXAdIAkACIAAAAIglAEIAXAcIAAABIgcgXIgEAkg");
	this.shape.setTransform(2.7,2.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-1.9,9.3,9.3);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFCC00","#FFFF00"],[0,0.478,1],0,0,0,0,0,4.7).s().p("AAAAuIgCgkIgdAXIAYgdIgmgEIAkgDIgWgcIAdAXIACglIAAAAIAFAlIAbgXIABAAIgXAdIAkACIAAAAIglAEIAXAcIAAABIgcgXIgEAkg");
	this.shape.setTransform(2.7,2.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-1.9,9.3,9.3);


(lib.Символ100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ11_1();
	this.instance.setTransform(318.3,151.2,1,1,0,0,0,320.5,153);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:0},11).wait(19).to({alpha:1},0).to({alpha:0},14).wait(22));

	// Слой 1
	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(322,161.6,1.611,1.611,0,0,0,2.7,2.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({alpha:0},4).to({_off:true},1).wait(25).to({_off:false,alpha:1},0).to({_off:true},1).wait(4).to({_off:false},0).to({alpha:0},4).to({_off:true},1).wait(26));

	// Слой 1
	this.instance_2 = new lib.Символ37();
	this.instance_2.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({y:136.5},0).to({y:152.5},2).wait(28).to({y:136.5},0).to({y:152.5},2).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.4,0,640,331);


(lib.Символ40 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(97.8,4.1,0.389,0.389,0,0,0,45.6,10.6);
	this.instance.alpha = 0.57;

	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(97.8,15.5,0.389,0.389,0,0,0,45.6,10.6);
	this.instance_1.alpha = 0.57;

	this.instance_2 = new lib.Символ16();
	this.instance_2.setTransform(97.8,26.8,0.389,0.389,0,0,0,45.6,10.6);
	this.instance_2.alpha = 0.57;

	this.instance_3 = new lib.Символ16();
	this.instance_3.setTransform(56.3,4.1,0.389,0.389,0,0,0,45.6,10.6);
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];
	this.instance_3.cache(-2,-2,95,25);

	this.instance_4 = new lib.Символ16();
	this.instance_4.setTransform(56.3,15.5,0.389,0.389,0,0,0,45.6,10.6);
	this.instance_4.alpha = 0.57;

	this.instance_5 = new lib.Символ16();
	this.instance_5.setTransform(56.3,26.8,0.389,0.389,0,0,0,45.6,10.6);
	this.instance_5.alpha = 0.57;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABUBMIAAh5IgWAIIgJgTIApgTIAPAAIAACXgAAIBMIgpg+IgrA+IggAAIA5hNIg3hKIAiAAIAoA5IAkg5IAgAAIgyBJIA4BOg");
	this.shape.setTransform(10.9,14.4);

	this.addChild(this.shape,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,115.5,30.9);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.setTransform(90.3,25.1,1,1,0,0,0,90.3,25.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180.7,50.2);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(0,0,1,1,0,0,0,17.8,8.4);
	this.instance.shadow = new cjs.Shadow("rgba(102,102,102,1)",0,0,5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.4,-10.1,37,24);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8},6,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-10.1,37,24);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ20();
	this.instance.setTransform(18.5,-5.7);

	// Слой 2
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(-95.1,-5.6);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-111.5,-15.7,219.5,23);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(2.2,27.5,1,0.622,0,0,0,2.2,67.5);
	this.instance.alpha = 0.352;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-15.8,11,89);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoqGZIAAsyIRVAAIAAMyg");
	this.shape.setTransform(-844.2,-111.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(75));

	// Слой 3
	this.instance = new lib.Символ14();
	this.instance.setTransform(3.1,88.8,1,1,0,0,0,2.2,67.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:0},4).wait(26).to({alpha:1},0).to({alpha:0},4).wait(1).to({alpha:1},0).to({alpha:0},4).wait(27));

	// Слой 1
	this.instance_1 = new lib.Символ8копия();
	this.instance_1.setTransform(4.4,4.4,1.611,1.611,0,0,0,2.7,2.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({alpha:0},4).to({_off:true},1).wait(25).to({_off:false,alpha:1},0).to({_off:true},1).wait(4).to({_off:false},0).to({alpha:0},4).to({_off:true},1).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-899.7,-152.2,111,82);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ9();
	this.instance.setTransform(621.2,40.7,1,1,0,0,0,4.4,4.4);

	// Слой 3
	this.instance_1 = new lib._3();
	this.instance_1.setTransform(0,0.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-282.9,-116,1401,429.5);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(43.7,32.5,1,1,0,0,0,43.7,32.5);
	this.instance.alpha = 0.488;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,87.4,65);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhwB1QgvgxAAhEQAAhDAvgxQAvgxBBAAQBCAAAuAxQAwAxAABDQAABEgwAxQguAxhCAAQhBAAgvgxg");
	mask.setTransform(210.9,41);

	// Слой 3
	this.instance = new lib.Символ4();
	this.instance.setTransform(152.7,7.7,1,1,30,0,0,43.7,32.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:171.2,y:17.7},0).wait(1).to({x:188.1,y:26.9},0).wait(1).to({x:203.4,y:35.2},0).wait(1).to({x:217.1,y:42.6},0).wait(1).to({x:229.2,y:49.2},0).wait(1).to({x:239.7,y:54.8},0).wait(1).to({x:248.6,y:59.6},0).wait(1).to({x:255.8,y:63.6},0).wait(1).to({x:261.4,y:66.6},0).wait(1).to({x:265.5,y:68.8},0).wait(1).to({x:267.9,y:70.1},0).wait(1).to({x:268.7,y:70.6},0).wait(38));

	// Слой 1
	this.instance_1 = new lib.shoot();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,315,168);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(559,152.5,1,1,0,0,0,559,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:679},149).to({x:429},150).to({x:559},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-282.9,-116,1401,429.5);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 7
	this.instance = new lib.Символ29();
	this.instance.setTransform(5.3,1.9,0.266,0.948,0,0,0,20.9,1.9);

	// Слой 5
	this.instance_1 = new lib.Символ28();
	this.instance_1.setTransform(-5.3,1.8,0.26,0.769,0,0,0,20.6,1.8);

	// Слой 4
	this.instance_2 = new lib.Символ30();
	this.instance_2.setTransform(0.1,6.9,0.923,0.241,0,0,0,1.8,20.8);

	// Слой 3
	this.instance_3 = new lib.Символ26();
	this.instance_3.setTransform(0.2,-3.3,0.923,0.249,0,0,0,1.8,20.7);

	// Слой 2
	this.instance_4 = new lib.Символ23();
	this.instance_4.setTransform(-0.5,1.5,0.837,0.837,0,0,0,67.5,67.5);

	// Слой 1 - копия
	this.instance_5 = new lib.Символ22();
	this.instance_5.setTransform(-0.5,1.5,1,1,0,0,0,67.5,67.5);

	// Слой 1
	this.instance_6 = new lib.Символ23();
	this.instance_6.setTransform(-0.5,1.5,1,1,0,0,0,67.5,67.5);

	// Слой 9
	this.instance_7 = new lib.Символ31();
	this.instance_7.setTransform(0,1.5,1,1,0,0,0,890.8,485.3);
	this.instance_7.alpha = 0.781;

	this.addChild(this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-890.8,-483.8,1827.2,1046.4);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 3 - копия: 2 - копия
	this.instance = new lib.Символ32();
	this.instance.setTransform(92.1,-1.8,1,1,0,0,0,90.3,25.1);

	// Слой 3 - копия: 2
	this.instance_1 = new lib.Символ24();
	this.instance_1.setTransform(129.6,9.1,1,1,0,0,0,127.8,8.2);

	// Слой 3 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ANWDzQgJgIAAgLQAAgMAJgIQAIgHAMAAQAMAAAIAHQAJAIAAAMQAAALgJAIQgIAHgMAAQgMAAgIgHgAFOD4QgMgCgKgEQgJgEgKgGQgIgGgHgHQgIgIgFgIQgGgJgDgKQgEgJgCgKQgCgLAAgLQAAgLACgLQACgLAEgJQADgKAGgIQAFgJAIgHQAHgHAIgGQAKgGAJgEQAKgFAMgCQALgCAMAAQAMAAALACQAMACAKAFQAJAEAJAGQAJAGAHAHQAHAHAFAJQAGAIAEAKQAEAJACALQACALAAALQAAALgCALQgCAKgEAJQgEAKgGAJQgFAIgHAIQgHAHgJAGQgJAGgJAEQgKAEgMACQgLACgMAAQgMAAgLgCgAFPBRQgLAFgIAJQgIAIgEAMQgFANAAAPQAAAPAFAMQAEAMAIAJQAIAIALAFQAKAEAMAAQAMAAAKgEQAKgFAIgIQAIgJAEgMQAFgMAAgPQAAgPgFgNQgEgMgIgIQgIgJgKgFQgKgEgMAAQgMAAgKAEgAthD2QgQgEgNgIQgCgFAAgUQAAgTACgEQATAMANAFQAQAFANAAQANAAAHgFQAGgFAAgJQAAgJgIgFQgHgDgXgIIgTgHQgLgGgIgHQgJgHgFgKQgFgMAAgOQAAgNAFgMQAEgMAKgJQAKgKANgEQAPgGARAAQARAAAPAFQAOAEALAHQACAGAAATQABAUgDADQgSgLgNgFQgOgGgLAAQgLAAgGAFQgHAFAAAJQAAAJAJAFQAGAEAWAHIAUAHQALAGAIAGQAJAIAFAKQAFAMAAAPQAAAQgGAMQgFANgLAIQgKAIgOAEQgNAEgQAAQgRAAgRgEgAKpD2IAAjOICPAAQACAKAAALQAAAKgCALIhdAAIAAApIBSAAQACALAAAKQAAAKgCALIhSAAIAABRQgLACgOAAQgPAAgKgCgAH2D2IAAjOICQAAQACAKAAALQAAAKgCALIhdAAIAAApIBSAAQACALAAAKQAAAKgCALIhSAAIAABRQgLACgOAAQgPAAgLgCgABaD2IguhGIgUAAIAABGQgKACgOAAQgNAAgLgCIAAjOIBQAAQARAAAPAFQAOAFAKAJQALAJAFAMQAGANAAAPQAAAKgDAKQgDAJgFAIQgFAHgHAHQgIAGgIADIAxBOQgKACgRAAQgRAAgKgCgAAYCGIAgAAQALAAAHgGQAIgIAAgMQAAgNgIgHQgHgGgLAAIggAAgAmND2IAAjOIBRAAQARAAAPAFQANAFALAJQALAJAFANQAGAMAAAQQAAAPgGANQgFANgLAJQgLAJgNAFQgPAFgRAAIgeAAIAABEQgLACgOAAQgPAAgLgCgAlaCIIAeAAQALAAAHgGQAIgIAAgNQAAgOgIgGQgHgHgLAAIgeAAgAnsD2IAAjOQALgCAPAAQAOAAALACIAADOQgLACgOAAQgPAAgLgCgAo/D2Ihfh5IAAB5QgMACgNAAQgPAAgLgCIAAjOIAUgCIATACIBhB5IAAh5QAKgCAPAAQAOAAALACIAADOIgUACgAjKD2IAAjOICPAAQACAKAAALQAAAKgCALIhdAAIAAAmIBTAAQACAMAAAJQAAALgCALIhTAAIAAAoIBdAAQACAMAAAKQAAAJgCAMgANcCrIgLhgIAAgjQALgCAOAAQAOAAAMACIAAAjIgLBgIgPACIgOgCgAE8gpIAAhTIhVAAIAABTQgLACgOAAQgPAAgKgCIAAjOQAKgCAPAAQAOAAALACIAABQIBVAAIAAhQQALgCAPAAQAOAAALACIAADOQgLACgOAAQgPAAgLgCgAAogpIAAikIg2AAQgCgLAAgKQAAgKACgLICgAAQACALAAAKQAAAKgCALIg3AAIAACkQgLACgPAAQgOAAgLgCgAlhgpIhHhjIAABjQgLACgOAAQgPAAgKgCIAAjOQAKgCAPAAQAOAAALACIAABdIBEhdQAMgCASAAQATAAALACIhKBkIBNBqQgLACgTAAQgTAAgLgCgAovgpIgOgnIhMAAIgPAnQgKACgPAAQgQAAgLgCIBUjOIAVgCIAVACIBTDOQgKACgPAAQgQAAgLgCgApNh7IgWg7IgWA7IAsAAgAtMgpIAAikIg4AAQgCgLAAgKQAAgKACgLICiAAQACALAAAKQAAAKgCALIg3AAIAACkQgLACgPAAQgOAAgLgCgAGbgpIAAjOICPAAQACALAAAKQAAAKgCALIhdAAIAAAmIBSAAQACAMAAAKQAAAKgCALIhSAAIAAApIBdAAQACALAAAKQAAAKgCALgAkFgpIAAjOICPAAQACALAAAKQAAAKgCALIhdAAIAAAmIBTAAQACAMAAAKQAAAKgCALIhTAAIAAApIBdAAQACALAAAKQAAAKgCALg");
	this.shape.setTransform(92.1,-1);

	this.addChild(this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.8,-26.9,180.6,51.1);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.setTransform(110.2,13.4,1,1,0,0,0,107.5,9.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.5,-23.4,180.7,51.1);


(lib.Символ27 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ21();
	this.instance.setTransform(64.4,65.3,1,1,0,0,0,67.2,67.2);
	this.instance.shadow = new cjs.Shadow("rgba(51,51,51,1)",0,0,5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ11();
	this.instance.setTransform(841.5,268,1,1,0,0,0,320.5,153);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:0},11).wait(19).to({alpha:1},0).to({alpha:0},14).wait(22));

	// Слой 1
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(603,268.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({y:264.5},0).wait(2).to({y:268.5},0).wait(28).to({y:264.5},0).wait(2).to({y:268.5},0).wait(3).to({y:264.5},0).wait(2).to({y:268.5},0).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1401,429.5);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(157.5,84,1,1,0,0,0,157.5,84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({rotation:-0.1,x:157.6,y:84.1},0).wait(1).to({y:84.3},0).wait(1).to({rotation:-0.2,y:84.6},0).wait(1).to({rotation:-0.4,x:157.5,y:84.9},0).wait(1).to({rotation:-0.5,x:157.6,y:85.3},0).wait(1).to({rotation:-0.7,y:85.7},0).wait(1).to({rotation:-0.9,x:157.5,y:86.3},0).wait(1).to({rotation:-1.1,y:86.8},0).wait(1).to({rotation:-1.4,y:87.5},0).wait(1).to({rotation:-1.7,y:88.2},0).wait(1).to({rotation:-2,y:89},0).wait(1).to({rotation:-2.4,x:157.6,y:89.8},0).wait(1).to({rotation:-2.7,x:157.5,y:90.5},0).wait(1).to({rotation:-3,y:91.1},0).wait(1).to({rotation:-3.2,x:157.6,y:91.7},0).wait(1).to({rotation:-3.5,x:157.5,y:92.3},0).wait(1).to({rotation:-3.7,y:92.7},0).wait(1).to({rotation:-3.8,y:93.1},0).wait(1).to({rotation:-4,x:157.6,y:93.4},0).wait(1).to({rotation:-4.1,x:157.5,y:93.7},0).wait(1).to({y:93.8},0).wait(1).to({rotation:-4.2,x:157.6,y:93.9},0).wait(1).to({x:157.5,y:94},0).wait(1).to({x:157.6},0).wait(1).to({rotation:-4.1,x:157.5,y:93.9},0).wait(1).to({y:93.7},0).wait(1).to({rotation:-4,x:157.6,y:93.5},0).wait(1).to({rotation:-3.8,x:157.5,y:93.1},0).wait(1).to({rotation:-3.7,y:92.8},0).wait(1).to({rotation:-3.5,y:92.3},0).wait(1).to({rotation:-3.2,x:157.6,y:91.7},0).wait(1).to({rotation:-3,x:157.5,y:91.2},0).wait(1).to({rotation:-2.7,y:90.5},0).wait(1).to({rotation:-2.4,x:157.6,y:89.8},0).wait(1).to({rotation:-2,x:157.5,y:89.1},0).wait(1).to({rotation:-1.7,y:88.2},0).wait(1).to({rotation:-1.4,y:87.5},0).wait(1).to({rotation:-1.1,y:86.8},0).wait(1).to({rotation:-0.9,y:86.2},0).wait(1).to({rotation:-0.7,x:157.6,y:85.7},0).wait(1).to({rotation:-0.5,y:85.3},0).wait(1).to({rotation:-0.4,x:157.5,y:84.9},0).wait(1).to({rotation:-0.2,x:157.6,y:84.6},0).wait(1).to({rotation:-0.1,y:84.4},0).wait(1).to({y:84.2},0).wait(1).to({rotation:0,x:157.5,y:84.1},0).wait(1).to({y:84},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-42.3,315,210.4);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(157.5,84,1,1,0,0,0,157.5,84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:94,rotation:0.1,y:94.2},0).wait(1).to({rotation:0.2,y:94.6},0).wait(1).to({rotation:0.5,x:157.4,y:95.4},0).wait(1).to({rotation:0.9,x:157.3,y:96.5},0).wait(1).to({rotation:1.4,y:97.9},0).wait(1).to({rotation:2,x:157.2,y:99.7},0).wait(1).to({rotation:2.7,x:157,y:101.8},0).wait(1).to({rotation:3.6,x:156.9,y:104.1},0).wait(1).to({regY:84,rotation:4.5,x:157.5,y:96.8},0).wait(1).to({regY:94,rotation:5.5,x:156.6,y:109.5},0).wait(1).to({rotation:6.4,x:156.4,y:111.8},0).wait(1).to({rotation:7.2,x:156.3,y:114},0).wait(1).to({rotation:7.9,x:156.2,y:115.8},0).wait(1).to({rotation:8.4,x:156.1,y:117.4},0).wait(1).to({rotation:8.9,x:156,y:118.6},0).wait(1).to({rotation:9.3,y:119.6},0).wait(1).to({rotation:9.5,x:155.9,y:120.3},0).wait(1).to({rotation:9.7,y:120.7},0).wait(1).to({regX:157.6,regY:84,x:157.6,y:111},0).wait(31).to({regX:157.5,regY:94,x:155.8,y:120.7},0).wait(1).to({rotation:9.5,y:120.2},0).wait(1).to({rotation:9.2,x:155.9,y:119.5},0).wait(1).to({rotation:8.9,y:118.5},0).wait(1).to({rotation:8.4,x:156,y:117.2},0).wait(1).to({rotation:7.8,x:156.1,y:115.5},0).wait(1).to({rotation:7,x:156.3,y:113.6},0).wait(1).to({rotation:6.2,x:156.4,y:111.4},0).wait(1).to({regX:157.6,regY:84,rotation:5.3,x:157.6,y:98.9},0).wait(1).to({regX:157.5,regY:94,rotation:4.4,x:156.7,y:106.2},0).wait(1).to({rotation:3.5,x:156.8,y:103.9},0).wait(1).to({rotation:2.8,x:157,y:101.8},0).wait(1).to({rotation:2.1,x:157.1,y:99.9},0).wait(1).to({rotation:1.6,x:157.2,y:98.4},0).wait(1).to({rotation:1.1,y:97.1},0).wait(1).to({rotation:0.7,x:157.3,y:95.9},0).wait(1).to({rotation:0.4,x:157.4,y:95.1},0).wait(1).to({rotation:0.2,y:94.5},0).wait(1).to({rotation:0,x:157.5,y:94.1},0).wait(1).to({regY:84,y:84},0).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-42.3,315,210.4);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(157.5,62.8,1,1,0,0,0,157.5,62.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({y:72.8},0).to({y:62.8},4).wait(26).to({y:72.8},0).to({y:62.8},4).wait(1).to({y:72.8},0).to({y:62.8},4).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-42.3,315,210.4);


(lib.Символ41 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ38();
	this.instance.setTransform(-221.3,15.4,1.172,1.172,0,0,0,110.3,16);

	this.instance_1 = new lib.Символ40();
	this.instance_1.setTransform(-287.3,53.6,1,1,0,0,0,57.8,15.4);

	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(-235,92.7);

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-176.4,0.1,176.4,0.1).s().p("A7iNPIAA6dMA3GAAAIAAadg");
	this.shape.setTransform(-270.4,31.7);

	// Слой 3
	this.instance_3 = new lib.Символ12();
	this.instance_3.setTransform(157.5,52.3,1,1,0,0,0,157.5,62.8);

	// Слой 1
	this.instance_4 = new lib.Символ10();
	this.instance_4.setTransform(-141.4,-63,1,1,0,0,0,700.5,210.5);

	this.addChild(this.instance_4,this.instance_3,this.shape,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-841.9,-273.5,1401,431);


(lib.Символ8_1 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ41();

	this.instance_1 = new lib.Символ100();
	this.instance_1.setTransform(0,-35.8,1.134,1.134,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-841.9,-273.5,1401,431);


// stage content:
(lib.sniper_726x270 = function(mode,startPosition,loop) {
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
			_this.pricel.gotoAndStop(1);
			_this.qwe.gotoAndStop(1);
		}
		
		stage.canvas.style.cursor = "none";
		this.pricel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_5.bind(this));
		
		function fl_CustomMouseCursor_5() {
			this.pricel.x = stage.mouseX;
			this.pricel.y = stage.mouseY;
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		function fl_MouseOutHandler_2()
		{
			_this.pricel.gotoAndStop(0);
			_this.qwe.gotoAndStop(0);
		}
		
		
		
		
		this.qwe.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 2
	this.pricel = new lib.Символ27();
	this.pricel.setTransform(438,205);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// Слой 1
	this.qwe = new lib.Символ8_1();
	this.qwe.setTransform(363,157.5);

	this.timeline.addTween(cjs.Tween.get(this.qwe).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.9,19,1401,431);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;