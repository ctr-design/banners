(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/ball.png", id:"ball"},
		{src:"images/btn.png", id:"btn"},
		{src:"images/girl111.png", id:"girl111"},
		{src:"images/girl232.png", id:"girl232"},
		{src:"images/stud.jpg", id:"stud"},
		{src:"images/svs.png", id:"svs"},
		{src:"images/table.png", id:"table"}
	]
};



// symbols:



(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,86);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,75);


(lib.girl111 = function() {
	this.initialize(img.girl111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,200);


(lib.girl232 = function() {
	this.initialize(img.girl232);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,200);


(lib.stud = function() {
	this.initialize(img.stud);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,229);


(lib.svs = function() {
	this.initialize(img.svs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,200);


(lib.table = function() {
	this.initialize(img.table);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,130);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.stud();
	this.instance.setTransform(395.6,0,1.956,1.427);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(395.6,0,880.1,326.9);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHhGIAngLIAoBLIgXhRIAjgLIA0CpIgkAKIgshPIAYBWIgjALg");
	this.shape.setTransform(49.3,16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcBQQgKgBgHgEQgJgFgFgHIg9g7QgQgOAAgRQAAgRARgSQARgRASAAQARAAAOAPIA8A8QAHAFAFAJQAFAJABAIQABAJgEAJQgEAJgJAKQgJAJgKAEQgHADgHAAIgEAAgAgjgnIgDACIgCADQgBABAAAAQAAABAAAAQAAAAAAABQAAAAABABIABADIAFAHIADACIAAABIAyAxIACADIAEACIADADIAEABQABAAAAAAQAAABABAAQAAAAABgBQABAAAAAAIAEgCIACgDIAAgEIgCgDIgFgHIgCgCIgBgBIgxgwIgCgCIgHgGIgCgCIgDgBIgCAAg");
	this.shape_1.setTransform(28.1,28.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhaANIAWhJIAhAJIgKAmIAbAHIAKgkIAfAKIgKAhIBOAWIgLAmg");
	this.shape_2.setTransform(15,47.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0045B3").s().p("AhKBpIgBgWQAAhlA4hWIBfBHQghA0gBBAQABALABALg");
	this.shape_3.setTransform(34.8,56);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0045B3").s().p("AhigZQBPguBbAAIAbABIAAB2QgNgCgOAAQg3AAgwAag");
	this.shape_4.setTransform(54.4,37);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0045B3").s().p("AiRCzIgBgRQAAhdAchXQAbhWAyhLIC8CJQg+BcABBwIAAARg");
	this.shape_5.setTransform(15.5,48);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0045B3").s().p("AisgyQCShbCrAAIAcABIAADnIgcgBQhlAAhWA0g");
	this.shape_6.setTransform(47.1,17.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AFAFAF").s().p("AlBiDIArhCQA+hOBcg4IG+KXg");
	this.shape_7.setTransform(32.3,33.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUDaQgQgEgJgGQgJgGgEgIQgFgIgCgJQgBgHAAgKIAAjpIgVAAIAAhEIAVAAIAAhQICBAAIAABQIAZAAIAABEIgZAAIAADRIABAIIABAFQACAEADABQADABAFAAIAKgBIAAA9QgcAHgtAAQgVAAgOgEg");
	this.shape_8.setTransform(254.1,32.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgqDBQgSgEgNgHQgNgHgIgKQgKgMgFgKQgGgLgCgNQgEgOgBgMIgBi0QAAg1AigcQAhgcA6AAQB6AAAABtIAAAcIgBBGIiRAAIAABIIABAQIADANQACAHAFADQAFAEAGAAQAIAAAGgGQAEgEADgLQACgLAAgGIABgUQAAgWgBgCIBlAAIAAAVQAAAjgGAUQgFAYgOARQgNASgaAJQgZAJgkAAQgWAAgTgEgAgKh7QgFADgDAIIgEAPIAAA0IAtAAIAAgoQAAgqgWAAQgGAAgFAEg");
	this.shape_9.setTransform(231,35.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgVC0IAAAoIhoAAIAAm8IBoAAIAABWQAXgXAfAAIAXABIANADIAOAGQAJAEAEAEQAHAHAEAGQAHAIADAKQAEAJACAOQADAQAAAOIAAC1QAAASgEASQgFASgFAIQgGAKgJAJQgJAIgIAEQgLAFgGABIgPADIgMABQgnAAgSgtgAgOhSQgHAIAAAXIAACcQAAAcAGALQAHAKAKAAQANAAAEgKQAEgKAAgdIAAibQAAgYgFgIQgFgIgLAAQgJAAgHAIg");
	this.shape_10.setTransform(201.4,31.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAYC+IAAkXQAAgLgFgKQgFgJgMAAQgGAAgFAEQgFAEgCAEIgEAMIgCAMIAAERIhlAAIAAl3IBlAAIAAAsQAGgZAQgLQAQgMAYAAQAoAAAWAWQAWAXAAAuIAAEgg");
	this.shape_11.setTransform(170.7,34.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah9BMIAAiXQAAg2AiggQAiggA5AAQA5AAAjAgQAiAgAAA2IAACXQAAA8ggAdQggAdg+AAQh9AAAAh2gAgWhZIAAC4QAAAPAGAHQAHAHAJAAQAKAAAGgHQAHgHAAgPIAAi4QAAghgXAAQgWAAAAAhg");
	this.shape_12.setTransform(141.6,35.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhiDgIAAm/IDFAAIAABYIhjAAIAABHIBeAAIAABVIheAAIAADLg");
	this.shape_13.setTransform(116.4,31.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0045B3").s().p("AxmFHIAAqNMAjNAAAIAAKNg");
	this.shape_14.setTransform(181.9,34.3);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,294.7,67);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().rr(-102.05,-37.4,204.1,74.8,14.9);
	this.shape.setTransform(102.1,37.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,204.1,74.8);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.girl111();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,142,200);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.girl232();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,200);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.btn();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,75);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.svs();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,213,200);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.table();
	this.instance.setTransform(650,0,1.127,1,0,0,180);

	this.instance_1 = new lib.table();
	this.instance_1.setTransform(0,0,1.232,1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,650,130);


(lib.Символ55копия2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#876F54").s().p("AkmgJIJJgoIAEA7IpJAog");
	this.shape.setTransform(-1.1,-15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#876F54").s().p("AkmgJIJJgoIAEA7IpJAog");
	this.shape_1.setTransform(0.6,10.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0D8BF").s().p("AktiHIJGgoIAVE4IpFAng");
	this.shape_2.setTransform(-0.3,-2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CEC7B2").s().p("AkviJIJJgoIAWE7IpJAog");
	this.shape_3.setTransform(-0.1,-2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#878550").s().p("AgIAHIgEgGIgGgCIAAgDIAkgDIABAFIgcACIADACIADAFg");
	this.shape_4.setTransform(14.7,27.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#878550").s().p("AgPAJQgDgDAAgFQgBgDADgEQADgEAEAAIAFABIAEADIAMAKIACABIgBgRIAFAAIABAYIgDgBIgFgCIgHgGIgGgGQgEgCgCAAQgBAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgCADABABQAAADACACQACACAEAAIAAAFQgGAAgDgEg");
	this.shape_5.setTransform(14.9,30.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#878550").s().p("AgPAJQgDgDAAgEIABgEQAAgDADgCIAFgBIAFABIADADQAAgDABgCQADgCADAAQAFgBAEAEQADADABAFQAAAFgCACQgDAEgFABIgBgFQAFgBABgCQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgDgDgBQgCgDgDABQgDAAgDACQgBADAAABIAAADIgCAAIAAgBIgCgDQgCgDgDABQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAABAAABQAAAAAAABQABAAAAABQAAAAABABQACACADAAIgBAFQgFgBgCgDg");
	this.shape_6.setTransform(15.1,33.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#878550").s().p("AgNAJQgFgEAAgFQgBgCADgEQACgDAEgBIABAFIgEACQgCACABABIABAEQADACACABIAIAAIgDgDIgCgEQAAgEADgEQACgEAFAAIAHABIAFAEIACAGQAAAFgEADQgDAEgLABIgCABQgIAAgEgEgAAGgHQgFAAgBADQgBACABACQAAADAAABQACACAEAAQADAAACgBQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAIABgCQAAgDgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgCAAg");
	this.shape_7.setTransform(15.3,36.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#878550").s().p("AgQAMIgCgXIAEAAIAKAGIAMAFIALAAIAAAEQgDABgIgCQgGAAgFgDIgKgFIABARg");
	this.shape_8.setTransform(15.5,39.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#878550").s().p("AgOAKQgDgDgBgGQAAgCABgDQACgDAEgCQAFgCAGAAIAJAAQAFACACADQADADAAADQAAAEgCADQgBACgGACIAAgFIAEgDIABgDIgBgDIgDgCIgEgCIgHAAIAEAEIACADQAAAFgDADQgDAEgEAAIgCAAQgEAAgEgCgAgMgDQgCACAAABQAAAEADACQACACAEAAQAEgBABgCQABgCAAgDQAAgCgBgCQgCgCgEAAQgEAAgCADg");
	this.shape_9.setTransform(15.7,42.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#878550").s().p("AACAKIgCgFQgBADgCACIgEACQgEAAgEgDQgCgCgBgGQAAgDACgDQAEgEADAAIAFABIADAEQABgCABgDQACgCAEAAQAEgBAEADQADADABAGQAAAFgDADQgDAEgFAAIgBAAQgDAAgCgCgAACgEQgCACAAACQAAADACACQACACAEAAIAEgBIADgDIAAgDQAAgCgCgDQgCgCgEAAQgEABgBACgAgNgCIgBADQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIACgFQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBgBAAQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_10.setTransform(15.9,45.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#878550").s().p("AgSgBIAAgEIAXgCIAAgFIAEAAIAAAFIAKgBIAAAFIgJABIABAPIgEAAgAgKgBIAQAJIgBgKg");
	this.shape_11.setTransform(16.1,48.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#878550").s().p("AAJAHQADAAACgDQACgBgBgDQAAgCgDgCQgCgCgFAAIgFADQgBACAAACQAAAAAAABQAAABABAAQAAABAAAAQAAAAAAABIABADIAAAEIgSgCIgBgSIAEAAIABAOIALABIgDgHQAAgDADgEQACgDAFgBQAFAAAEACQAFAEAAAFQABAEgDAEQgDAEgFAAg");
	this.shape_12.setTransform(16.3,51.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#878550").s().p("AgIAIIgEgHIgGgCIAAgDIAlgDIAAAFIgcACIAEACIACAGg");
	this.shape_13.setTransform(8.7,-60.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#878550").s().p("AgPAJQgDgDAAgFQgBgDADgEQAEgEAEAAIAEABIAEADIAMAKIACABIgBgRIAFAAIABAYIgDgBIgFgCIgHgGIgGgGQgDgCgDAAQgEABgBABQgCADABABQAAADACACQACACAEAAIAAAFQgFAAgEgEg");
	this.shape_14.setTransform(8.9,-57.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#878550").s().p("AgPAJQgDgDAAgEIABgEQAAgDADgCIAFgBQACgBADACIADADQABgDAAgCQACgCAEAAQAGgBADAEQADACABAGQAAAEgCADQgDAEgFABIgBgFQAFgBABgCQABgCAAgCQAAgCgCgDQgEgCgCABQgDAAgDACQgBADAAABIAAADIgCAAIAAgBIgCgDQgBgDgEAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAABAAAAQAAABAAABQAAAAABABQAAAAABABQACACADAAIAAAFQgFgBgDgDg");
	this.shape_15.setTransform(9.1,-54.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#878550").s().p("AgNAJQgFgEAAgFQgBgDADgDQABgCAGgCIAAAFIgEACQgCADABAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQACACADACQAFABADgBIgDgDIgCgEQAAgFADgDQACgEAFAAQADAAAEABQADACACACIACAGQAAAFgEADQgEAFgKAAIgCABQgIAAgEgEgAAAgEQgBACABACQAAACAAACQACACAFAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBIABgCQAAgEgDgBQgCgCgEAAIgGADg");
	this.shape_16.setTransform(9.3,-51.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#878550").s().p("AgRAMIgBgXIADAAIALAGIAMAFIALAAIAAAEIgLgBQgIgCgDgBIgKgFIABARg");
	this.shape_17.setTransform(9.5,-48.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#878550").s().p("AgOAKQgDgDgBgGQAAgCABgDQACgDAEgCQAFgCAGAAQAGgBAEABQAEACADADQACADAAADQABADgDAEQgCADgEAAIgBgEQADgBABgCQABAAAAAAQAAgBAAAAQABgBAAAAQgBgBAAAAIgBgDIgDgCIgEgCIgHAAIAEAEIACADQAAAFgDADQgDAEgEAAIgCAAQgEAAgEgCgAgMgDQgCACAAABQAAAEADACQADACAEgBQADAAABgCQABgCAAgDQAAgCgBgCQgBgCgFAAQgEAAgCADg");
	this.shape_18.setTransform(9.7,-45.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#878550").s().p("AACALQgCgCAAgDQAAADgDABIgEACQgEAAgEgCQgCgDgBgFQAAgEACgDQAEgDADAAQABAAABAAQABAAAAAAQABAAAAAAQAAAAABABIADAEQABgDABgDQABgBAFgBQAFAAADADQAEAEAAAEQABAEgDAEQgEAEgFAAIgBAAQgDAAgCgBgAACgEQgCADAAABQAAADACADQACACAEAAIAEgCQAAAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBIAAgDQAAgDgCgBQgCgCgEAAQgDAAgCACgAgIgDQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBABIgBACQAAABAAAAQAAABAAABQAAAAABABQAAAAABABIAEABQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQACgCAAgDQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBQgBAAAAgBQAAAAAAAAQgBAAAAAAQgBgBAAAAIgBABg");
	this.shape_19.setTransform(9.9,-42.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#878550").s().p("AgSgBIAAgEIAXgCIgBgFIAFAAIAAAFIAKgBIAAAFIgJABIABAPIgFAAgAgKgBIAQAJIgBgKg");
	this.shape_20.setTransform(10.1,-39.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#878550").s().p("AAJAHQADAAACgDQACgCAAgCQgBgCgCgCQgDgCgEAAQgFABgBACQgBACAAACQAAAAAAABQAAABABAAQAAABAAAAQAAAAAAABIACADIgBAEIgSgCIgBgSIAEAAIABAOIALABQgDgDAAgEQAAgDADgEQACgDAFgBQAGAAADACQAFAEAAAFQABAEgDAEQgDAEgEAAg");
	this.shape_21.setTransform(10.3,-36.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#878550").s().p("AgxAbQgGgGgDgNIgGAAIAAgIIAGAAQABgKAFgGQAGgKAMgCIADANQgIADgDADQgEAEgBAFIAlgBQACgKACgDQACgGADgFQADgEAEgCIALgDQANgBAKAIQAJAIACANIAOAAIAAAGIgNAAQgBALgDAFQgBAGgIAFQgFAFgMACIgDgNQALgDAEgEQAHgFAAgIIgpADQAAAJgEAHQgCAHgHAEQgFAEgIAAIgEAAQgLAAgIgIgAgvAHQACAHAFAEQAEAEAIAAQAGAAAFgEQAEgFACgIgAATgVQgHABgEADQgEAEgDALIAngDQgBgHgGgFQgGgEgHAAIgBAAg");
	this.shape_22.setTransform(-7.8,-47.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#878550").ss(1.5).p("AgEhIQApgDAgATQAhAUACAfQACAcgdAYQgeAXgrADQgpADgggTQgggUgCgeQgCgdAdgXQAdgYArgDg");
	this.shape_23.setTransform(-6.7,-47.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#878550").s().p("AgxAbQgGgHgCgMIgHAAIAAgIIAHAAQAAgJAEgHQAIgKAMgCIADANQgJADgDADQgDAEgCAFIAlgBIAEgNQACgHADgEQACgEAFgCQAFgDAGAAQANgBALAIQAJAJABAMIAOAAIAAAGIgNAAQgBAKgCAGQgEAHgFAEQgHAFgLACIgCgNQAJgCAFgFQAHgFAAgIIgpADQAAAHgDAJQgDAHgGAEQgHAEgHAAIgDAAQgLAAgJgIgAgvAHQACAHAGAEQAEAEAHAAQAIAAADgEQAEgFACgIgAATgVQgIABgDADQgEADgDAMIAogDQgCgHgGgFQgFgEgGAAIgDAAg");
	this.shape_24.setTransform(-1.7,42.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#878550").ss(1.5).p("ABNAvQgdAXgrADQgqADgggTQgggUgCgeQgCgdAdgXQAdgYArgDQAqgDAgATQAgAUACAfQACAcgdAYg");
	this.shape_25.setTransform(-0.6,42.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#878550").ss(2.5).p("AgNjMQBKgFA6A5QA6A4AGBVQAGBTgyBAQgyBAhMAFQhJAFg6g4Qg6g5gGhVQgGhTAyhAQAxg/BMgGg");
	this.shape_26.setTransform(-3.7,-2.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BCB895").s().p("Ag8LFQgCgigagWQgagXgiACIgJACIhVzgQAFABAEgBQAigBAWgaQAWgYgBgiIDggPQAEAhAZAVQAZAXAigDIACgBIBVTfIgCAAQgiACgXAaQgWAZACAjIABAGIjhAQg");
	this.shape_27.setTransform(-3.7,-2.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#878550").s().p("AkYrYIHLgfIBmXQInMAfg");
	this.shape_28.setTransform(-3.7,-2.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EDE6CC").s().p("AkurvIH0gjIBpYDIn0Aig");
	this.shape_29.setTransform(-3.7,-2.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E0D8BF").s().p("AkurvIH0gjIBpYCIn0Ajg");
	this.shape_30.setTransform(-2.4,-1.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EDE6CC").s().p("AkurvIH0gjIBpYCIn0Ajg");
	this.shape_31.setTransform(-1.2,-0.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E0D8BF").s().p("AkurvIH0gjIBpYCIn1Ajg");
	this.shape_32.setTransform(0,0.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EDE6CC").s().p("AkurvIH0gjIBpYCIn1Ajg");
	this.shape_33.setTransform(0.9,0.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E0D8BF").s().p("AkurvIH0gjIBpYCIn1Ajg");
	this.shape_34.setTransform(1.8,1.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EDE6CC").s().p("AkvrvIH2gjIBpYCIn1Ajg");
	this.shape_35.setTransform(2.8,1.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E0D8BF").s().p("AkurvIH0gjIBpYCIn0Ajg");
	this.shape_36.setTransform(3.7,2.4);

	this.addChild(this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34,-81.1,68.2,162.2);


(lib.Символ55копия = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#876F54").s().p("AkmgJIJJgoIAEA7IpJAog");
	this.shape.setTransform(-1.1,-15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#876F54").s().p("AkmgJIJJgoIAEA7IpJAog");
	this.shape_1.setTransform(0.6,10.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0D8BF").s().p("AktiHIJGgoIAVE4IpFAng");
	this.shape_2.setTransform(-0.3,-2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CEC7B2").s().p("AkviJIJJgoIAWE7IpJAog");
	this.shape_3.setTransform(-0.1,-2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#878550").s().p("AgIAHIgEgGIgGgCIAAgDIAkgDIABAFIgcACIADACIADAFg");
	this.shape_4.setTransform(14.7,27.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#878550").s().p("AgPAJQgDgDAAgFQgBgDADgEQADgEAEAAIAFABIAEADIAMAKIACABIgBgRIAFAAIABAYIgDgBIgFgCIgHgGIgGgGQgEgCgCAAQgBAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgCADABABQAAADACACQACACAEAAIAAAFQgGAAgDgEg");
	this.shape_5.setTransform(14.9,30.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#878550").s().p("AgPAJQgDgDAAgEIABgEQAAgDADgCIAFgBIAFABIADADQAAgDABgCQADgCADAAQAFgBAEAEQADADABAFQAAAFgCACQgDAEgFABIgBgFQAFgBABgCQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgDgDgBQgCgDgDABQgDAAgDACQgBADAAABIAAADIgCAAIAAgBIgCgDQgCgDgDABQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAABAAABQAAAAAAABQABAAAAABQAAAAABABQACACADAAIgBAFQgFgBgCgDg");
	this.shape_6.setTransform(15.1,33.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#878550").s().p("AgNAJQgFgEAAgFQgBgCADgEQACgDAEgBIABAFIgEACQgCACABABIABAEQADACACABIAIAAIgDgDIgCgEQAAgEADgEQACgEAFAAIAHABIAFAEIACAGQAAAFgEADQgDAEgLABIgCABQgIAAgEgEgAAGgHQgFAAgBADQgBACABACQAAADAAABQACACAEAAQADAAACgBQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAIABgCQAAgDgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgCAAg");
	this.shape_7.setTransform(15.3,36.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#878550").s().p("AgQAMIgCgXIAEAAIAKAGIAMAFIALAAIAAAEQgDABgIgCQgGAAgFgDIgKgFIABARg");
	this.shape_8.setTransform(15.5,39.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#878550").s().p("AgOAKQgDgDgBgGQAAgCABgDQACgDAEgCQAFgCAGAAIAJAAQAFACACADQADADAAADQAAAEgCADQgBACgGACIAAgFIAEgDIABgDIgBgDIgDgCIgEgCIgHAAIAEAEIACADQAAAFgDADQgDAEgEAAIgCAAQgEAAgEgCgAgMgDQgCACAAABQAAAEADACQACACAEAAQAEgBABgCQABgCAAgDQAAgCgBgCQgCgCgEAAQgEAAgCADg");
	this.shape_9.setTransform(15.7,42.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#878550").s().p("AACAKIgCgFQgBADgCACIgEACQgEAAgEgDQgCgCgBgGQAAgDACgDQAEgEADAAIAFABIADAEQABgCABgDQACgCAEAAQAEgBAEADQADADABAGQAAAFgDADQgDAEgFAAIgBAAQgDAAgCgCgAACgEQgCACAAACQAAADACACQACACAEAAIAEgBIADgDIAAgDQAAgCgCgDQgCgCgEAAQgEABgBACgAgNgCIgBADQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIACgFQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBgBAAQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_10.setTransform(15.9,45.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#878550").s().p("AgSgBIAAgEIAXgCIAAgFIAEAAIAAAFIAKgBIAAAFIgJABIABAPIgEAAgAgKgBIAQAJIgBgKg");
	this.shape_11.setTransform(16.1,48.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#878550").s().p("AAJAHQADAAACgDQACgBgBgDQAAgCgDgCQgCgCgFAAIgFADQgBACAAACQAAAAAAABQAAABABAAQAAABAAAAQAAAAAAABIABADIAAAEIgSgCIgBgSIAEAAIABAOIALABIgDgHQAAgDADgEQACgDAFgBQAFAAAEACQAFAEAAAFQABAEgDAEQgDAEgFAAg");
	this.shape_12.setTransform(16.3,51.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#878550").s().p("AgIAIIgEgHIgGgCIAAgDIAlgDIAAAFIgcACIAEACIACAGg");
	this.shape_13.setTransform(8.7,-60.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#878550").s().p("AgPAJQgDgDAAgFQgBgDADgEQAEgEAEAAIAEABIAEADIAMAKIACABIgBgRIAFAAIABAYIgDgBIgFgCIgHgGIgGgGQgDgCgDAAQgEABgBABQgCADABABQAAADACACQACACAEAAIAAAFQgFAAgEgEg");
	this.shape_14.setTransform(8.9,-57.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#878550").s().p("AgPAJQgDgDAAgEIABgEQAAgDADgCIAFgBQACgBADACIADADQABgDAAgCQACgCAEAAQAGgBADAEQADACABAGQAAAEgCADQgDAEgFABIgBgFQAFgBABgCQABgCAAgCQAAgCgCgDQgEgCgCABQgDAAgDACQgBADAAABIAAADIgCAAIAAgBIgCgDQgBgDgEAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAABAAAAQAAABAAABQAAAAABABQAAAAABABQACACADAAIAAAFQgFgBgDgDg");
	this.shape_15.setTransform(9.1,-54.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#878550").s().p("AgNAJQgFgEAAgFQgBgDADgDQABgCAGgCIAAAFIgEACQgCADABAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQACACADACQAFABADgBIgDgDIgCgEQAAgFADgDQACgEAFAAQADAAAEABQADACACACIACAGQAAAFgEADQgEAFgKAAIgCABQgIAAgEgEgAAAgEQgBACABACQAAACAAACQACACAFAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBIABgCQAAgEgDgBQgCgCgEAAIgGADg");
	this.shape_16.setTransform(9.3,-51.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#878550").s().p("AgRAMIgBgXIADAAIALAGIAMAFIALAAIAAAEIgLgBQgIgCgDgBIgKgFIABARg");
	this.shape_17.setTransform(9.5,-48.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#878550").s().p("AgOAKQgDgDgBgGQAAgCABgDQACgDAEgCQAFgCAGAAQAGgBAEABQAEACADADQACADAAADQABADgDAEQgCADgEAAIgBgEQADgBABgCQABAAAAAAQAAgBAAAAQABgBAAAAQgBgBAAAAIgBgDIgDgCIgEgCIgHAAIAEAEIACADQAAAFgDADQgDAEgEAAIgCAAQgEAAgEgCgAgMgDQgCACAAABQAAAEADACQADACAEgBQADAAABgCQABgCAAgDQAAgCgBgCQgBgCgFAAQgEAAgCADg");
	this.shape_18.setTransform(9.7,-45.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#878550").s().p("AACALQgCgCAAgDQAAADgDABIgEACQgEAAgEgCQgCgDgBgFQAAgEACgDQAEgDADAAQABAAABAAQABAAAAAAQABAAAAAAQAAAAABABIADAEQABgDABgDQABgBAFgBQAFAAADADQAEAEAAAEQABAEgDAEQgEAEgFAAIgBAAQgDAAgCgBgAACgEQgCADAAABQAAADACADQACACAEAAIAEgCQAAAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBIAAgDQAAgDgCgBQgCgCgEAAQgDAAgCACgAgIgDQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBABIgBACQAAABAAAAQAAABAAABQAAAAABABQAAAAABABIAEABQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQACgCAAgDQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBQgBAAAAgBQAAAAAAAAQgBAAAAAAQgBgBAAAAIgBABg");
	this.shape_19.setTransform(9.9,-42.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#878550").s().p("AgSgBIAAgEIAXgCIgBgFIAFAAIAAAFIAKgBIAAAFIgJABIABAPIgFAAgAgKgBIAQAJIgBgKg");
	this.shape_20.setTransform(10.1,-39.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#878550").s().p("AAJAHQADAAACgDQACgCAAgCQgBgCgCgCQgDgCgEAAQgFABgBACQgBACAAACQAAAAAAABQAAABABAAQAAABAAAAQAAAAAAABIACADIgBAEIgSgCIgBgSIAEAAIABAOIALABQgDgDAAgEQAAgDADgEQACgDAFgBQAGAAADACQAFAEAAAFQABAEgDAEQgDAEgEAAg");
	this.shape_21.setTransform(10.3,-36.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#878550").s().p("AgxAbQgGgGgDgNIgGAAIAAgIIAGAAQABgKAFgGQAGgKAMgCIADANQgIADgDADQgEAEgBAFIAlgBQACgKACgDQACgGADgFQADgEAEgCIALgDQANgBAKAIQAJAIACANIAOAAIAAAGIgNAAQgBALgDAFQgBAGgIAFQgFAFgMACIgDgNQALgDAEgEQAHgFAAgIIgpADQAAAJgEAHQgCAHgHAEQgFAEgIAAIgEAAQgLAAgIgIgAgvAHQACAHAFAEQAEAEAIAAQAGAAAFgEQAEgFACgIgAATgVQgHABgEADQgEAEgDALIAngDQgBgHgGgFQgGgEgHAAIgBAAg");
	this.shape_22.setTransform(-7.8,-47.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#878550").ss(1.5).p("AgEhIQApgDAgATQAhAUACAfQACAcgdAYQgeAXgrADQgpADgggTQgggUgCgeQgCgdAdgXQAdgYArgDg");
	this.shape_23.setTransform(-6.7,-47.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#878550").s().p("AgxAbQgGgHgCgMIgHAAIAAgIIAHAAQAAgJAEgHQAIgKAMgCIADANQgJADgDADQgDAEgCAFIAlgBIAEgNQACgHADgEQACgEAFgCQAFgDAGAAQANgBALAIQAJAJABAMIAOAAIAAAGIgNAAQgBAKgCAGQgEAHgFAEQgHAFgLACIgCgNQAJgCAFgFQAHgFAAgIIgpADQAAAHgDAJQgDAHgGAEQgHAEgHAAIgDAAQgLAAgJgIgAgvAHQACAHAGAEQAEAEAHAAQAIAAADgEQAEgFACgIgAATgVQgIABgDADQgEADgDAMIAogDQgCgHgGgFQgFgEgGAAIgDAAg");
	this.shape_24.setTransform(-1.7,42.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#878550").ss(1.5).p("ABNAvQgdAXgrADQgqADgggTQgggUgCgeQgCgdAdgXQAdgYArgDQAqgDAgATQAgAUACAfQACAcgdAYg");
	this.shape_25.setTransform(-0.6,42.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#878550").ss(2.5).p("AgNjMQBKgFA6A5QA6A4AGBVQAGBTgyBAQgyBAhMAFQhJAFg6g4Qg6g5gGhVQgGhTAyhAQAxg/BMgGg");
	this.shape_26.setTransform(-3.7,-2.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BCB895").s().p("Ag8LFQgCgigagWQgagXgiACIgJACIhVzgQAFABAEgBQAigBAWgaQAWgYgBgiIDggPQAEAhAZAVQAZAXAigDIACgBIBVTfIgCAAQgiACgXAaQgWAZACAjIABAGIjhAQg");
	this.shape_27.setTransform(-3.7,-2.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#878550").s().p("AkYrYIHLgfIBmXQInMAfg");
	this.shape_28.setTransform(-3.7,-2.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EDE6CC").s().p("AkurvIH0gjIBpYDIn0Aig");
	this.shape_29.setTransform(-3.7,-2.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E0D8BF").s().p("AkurvIH0gjIBpYCIn0Ajg");
	this.shape_30.setTransform(-2.4,-1.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EDE6CC").s().p("AkurvIH0gjIBpYCIn0Ajg");
	this.shape_31.setTransform(-1.2,-0.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E0D8BF").s().p("AkurvIH0gjIBpYCIn1Ajg");
	this.shape_32.setTransform(0,0.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EDE6CC").s().p("AkurvIH0gjIBpYCIn1Ajg");
	this.shape_33.setTransform(0.9,0.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E0D8BF").s().p("AkurvIH0gjIBpYCIn1Ajg");
	this.shape_34.setTransform(1.8,1.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EDE6CC").s().p("AkvrvIH2gjIBpYCIn1Ajg");
	this.shape_35.setTransform(2.8,1.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E0D8BF").s().p("AkurvIH0gjIBpYCIn0Ajg");
	this.shape_36.setTransform(3.7,2.4);

	this.addChild(this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34,-81.1,68.2,162.2);


(lib.копияshape1092копия2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkWhhIItAAIkeDCg");
	this.shape.setTransform(0,16.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28,6.7,56,19.6);


(lib.копияshape1092копия = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkWhhIItAAIkeDCg");
	this.shape.setTransform(0,16.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28,6.7,56,19.6);


(lib.копияPath_9копия3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlnT0Qj4hHjLieQjSijiCjrQiDjqgdkIQgbj+BGj4QBHj4CejLQCjjSDriCQDqiDEJgdQD9gbD4BGQD5BHDKCeQDSCjCCDrQCDDqAdEJQAbD9hGD4QhHD5ieDKQijDSjrCCQjqCDkIAdQhIAHhHAAQi0AAizgyg");
	this.shape.setTransform(131.9,131.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,263.8,263.8);


(lib.копияPath_9копия2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#EFEFEF","#A8A8A8","#6C6C6C","#3D3D3D","#1C1C1C","#070707","#000000","#181919","#555657","#818285","#9C9EA1","#A6A8AB"],[0,0.027,0.149,0.267,0.373,0.467,0.545,0.596,0.643,0.765,0.871,0.953,1],27.1,-52.9,0,27.1,-52.9,243.7).s().p("AlnT0Qj4hHjLieQjSijiCjrQiDjqgdkIQgbj+BGj4QBHj4CejLQCjjSDriCQDqiDEJgdQD9gbD4BGQD5BHDKCeQDSCjCCDrQCDDqAdEJQAbD9hGD4QhHD5ieDKQijDSjrCCQjqCDkIAdQhIAHhHAAQi0AAizgyg");
	this.shape.setTransform(131.9,131.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,263.8,263.8);


(lib.копияPath_9копия = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#EFEFEF","#A8A8A8","#6C6C6C","#3D3D3D","#1C1C1C","#070707","#000000","#181919","#555657","#818285","#9C9EA1","#A6A8AB"],[0,0.027,0.149,0.267,0.373,0.467,0.545,0.596,0.643,0.765,0.871,0.953,1],27.1,-52.9,0,27.1,-52.9,243.7).s().p("AlnT0Qj4hHjLieQjSijiCjrQiDjqgdkIQgbj+BGj4QBHj4CejLQCjjSDriCQDqiDEJgdQD9gbD4BGQD5BHDKCeQDSCjCCDrQCDDqAdEJQAbD9hGD4QhHD5ieDKQijDSjrCCQjqCDkIAdQhIAHhHAAQi0AAizgyg");
	this.shape.setTransform(131.9,131.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,263.8,263.8);


(lib.копияPath_8копия2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","rgba(2,2,2,0)","#020202","#0A0A0B","#181819","#2B2C2C","#444546","#636466","#86888A","#A6A8AB"],[0,0.702,0.702,0.765,0.816,0.863,0.902,0.941,0.973,1],27.1,-52.9,0,27.1,-52.9,243.7).s().p("AlnT0Qj4hHjLieQjSijiCjrQiDjqgdkIQgbj+BGj4QBHj4CejLQCjjSDriCQDqiDEJgdQD9gbD4BGQD5BHDKCeQDSCjCCDrQCDDqAdEJQAbD9hGD4QhHD5ieDKQijDSjrCCQjqCDkIAdQhIAHhHAAQi0AAizgyg");
	this.shape.setTransform(131.9,131.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#F6F6F6","#C8C8C8","#9D9D9D","#777777","#575757","#3B3B3B","#252525","#141414","#090909","#020202","#000000","#020202","rgba(2,2,2,0)","rgba(0,0,0,0)"],[0,0.004,0.027,0.055,0.082,0.114,0.149,0.188,0.235,0.29,0.369,0.588,0.702,0.702,1],27.1,-52.9,0,27.1,-52.9,243.7).s().p("AlnT0Qj4hHjLieQjSijiCjrQiDjqgdkIQgbj+BGj4QBHj4CejLQCjjSDriCQDqiDEJgdQD9gbD4BGQD5BHDKCeQDSCjCCDrQCDDqAdEJQAbD9hGD4QhHD5ieDKQijDSjrCCQjqCDkIAdQhIAHhHAAQi0AAizgyg");
	this.shape_1.setTransform(131.9,131.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,263.8,263.8);


(lib.копияPath_8копия = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","rgba(2,2,2,0)","#020202","#0A0A0B","#181819","#2B2C2C","#444546","#636466","#86888A","#A6A8AB"],[0,0.702,0.702,0.765,0.816,0.863,0.902,0.941,0.973,1],27.1,-52.9,0,27.1,-52.9,243.7).s().p("AlnT0Qj4hHjLieQjSijiCjrQiDjqgdkIQgbj+BGj4QBHj4CejLQCjjSDriCQDqiDEJgdQD9gbD4BGQD5BHDKCeQDSCjCCDrQCDDqAdEJQAbD9hGD4QhHD5ieDKQijDSjrCCQjqCDkIAdQhIAHhHAAQi0AAizgyg");
	this.shape.setTransform(131.9,131.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#F6F6F6","#C8C8C8","#9D9D9D","#777777","#575757","#3B3B3B","#252525","#141414","#090909","#020202","#000000","#020202","rgba(2,2,2,0)","rgba(0,0,0,0)"],[0,0.004,0.027,0.055,0.082,0.114,0.149,0.188,0.235,0.29,0.369,0.588,0.702,0.702,1],27.1,-52.9,0,27.1,-52.9,243.7).s().p("AlnT0Qj4hHjLieQjSijiCjrQiDjqgdkIQgbj+BGj4QBHj4CejLQCjjSDriCQDqiDEJgdQD9gbD4BGQD5BHDKCeQDSCjCCDrQCDDqAdEJQAbD9hGD4QhHD5ieDKQijDSjrCCQjqCDkIAdQhIAHhHAAQi0AAizgyg");
	this.shape_1.setTransform(131.9,131.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,263.8,263.8);


(lib.копияPath_7копия2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#231F20"],[0,1],35.3,40.1,-31.7,-24.1).s().p("Ai5F6QlcgIkqiyIAng2QCVjLBShtQCXAtCdAAQC8AACvhBQCrg/CPh0IAWgEICCBkQCXB3BpBdQiVCnjFBuQksCmlQAAIgjAAg");
	this.shape.setTransform(83.3,37.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,166.6,75.8);


(lib.копияPath_7копия = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#231F20"],[0,1],35.3,40.1,-31.7,-24.1).s().p("Ai5F6QlcgIkqiyIAng2QCVjLBShtQCXAtCdAAQC8AACvhBQCrg/CPh0IAWgEICCBkQCXB3BpBdQiVCnjFBuQksCmlQAAIgjAAg");
	this.shape.setTransform(83.3,37.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,166.6,75.8);


(lib.копияPath_6копия2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#F8F8F8","#E4E4E4","#C4C4C4","#979797","#5E5E5E","#191919","#000000"],[0,0.086,0.216,0.369,0.545,0.733,0.933,1],13.5,14.9,0,13.5,14.9,44.1).s().p("AooL+QiKgNhAhFQg7g/BPgoQAugZDAgvQDZg2B5gwQDFhOB2hxQE7kuBUm1IAVh9QALg9AJgYQALgfAUgDQAVgDAlAbQBHA1ASCAQARB7gkChQglCkhTCdQhZCrh8CAQiOCSi4BoQinBhixAtQiFAjhvAAQgfAAgegDg");
	this.shape.setTransform(78.2,76.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,156.2,153.9);


(lib.копияPath_6копия = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#F8F8F8","#E4E4E4","#C4C4C4","#979797","#5E5E5E","#191919","#000000"],[0,0.086,0.216,0.369,0.545,0.733,0.933,1],13.5,14.9,0,13.5,14.9,44.1).s().p("AooL+QiKgNhAhFQg7g/BPgoQAugZDAgvQDZg2B5gwQDFhOB2hxQE7kuBUm1IAVh9QALg9AJgYQALgfAUgDQAVgDAlAbQBHA1ASCAQARB7gkChQglCkhTCdQhZCrh8CAQiOCSi4BoQinBhixAtQiFAjhvAAQgfAAgegDg");
	this.shape.setTransform(78.2,76.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,156.2,153.9);


(lib.копияPath_5копия2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#F8F8F8","#E4E4E4","#C4C4C4","#979797","#5E5E5E","#191919","#000000"],[0,0.086,0.216,0.369,0.545,0.733,0.933,1],-10,-12.2,0,-10,-12.2,35.6).s().p("AprIjQg1gxgDhoQgDhlArh+QAsiBBQh2QBXiBBuhcQB/hpCdhEQCOg/CSgVQCMgVBrAWQBuAWAtA9QAqA4hCAZQgoAQieAWQizAYhlAcQilAthoBRQkXDXhpFXIgdBjQgNAwgJASQgMAXgTAAQgSAAgYgWg");
	this.shape.setTransform(67.7,57);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,135.3,114);


(lib.копияPath_5копия = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#F8F8F8","#E4E4E4","#C4C4C4","#979797","#5E5E5E","#191919","#000000"],[0,0.086,0.216,0.369,0.545,0.733,0.933,1],-10,-12.2,0,-10,-12.2,35.6).s().p("AprIjQg1gxgDhoQgDhlArh+QAsiBBQh2QBXiBBuhcQB/hpCdhEQCOg/CSgVQCMgVBrAWQBuAWAtA9QAqA4hCAZQgoAQieAWQizAYhlAcQilAthoBRQkXDXhpFXIgdBjQgNAwgJASQgMAXgTAAQgSAAgYgWg");
	this.shape.setTransform(67.7,57);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,135.3,114);


(lib.копияPath_4копия2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#DBDBDB","#A1A1A1","#707070","#484848","#282828","#121212","#050505","#000000"],[0,0.067,0.176,0.29,0.4,0.51,0.616,0.714,0.804],24.9,2.4,0,24.9,2.4,61.3).s().p("AnfHrQAUlNCLljQBmkHCSjYQCKjQCdiCQA1BHAoBJQCCDqAdEJQAcD/hHD2QhGD5ieDKQikDSjoCCQhjA3htAnQhijHATlFg");
	this.shape.setTransform(48.3,101.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,96.7,203.1);


(lib.копияPath_4копия = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#DBDBDB","#A1A1A1","#707070","#484848","#282828","#121212","#050505","#000000"],[0,0.067,0.176,0.29,0.4,0.51,0.616,0.714,0.804],24.9,2.4,0,24.9,2.4,61.3).s().p("AnfHrQAUlNCLljQBmkHCSjYQCKjQCdiCQA1BHAoBJQCCDqAdEJQAcD/hHD2QhGD5ieDKQikDSjoCCQhjA3htAnQhijHATlFg");
	this.shape.setTransform(48.3,101.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,96.7,203.1);


(lib.копияPath_3копия2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#EAEAEA","#878787","#3E3E3E","#111111","#000000"],[0,0.071,0.42,0.698,0.898,1],-16.3,28,0,-16.3,28,60.8).s().p("ABEKIQjhhSixioQixinhkjiQhnjpgFkIQgDhwARhxQDTgFEICaQENCdDvESQCvDIB1DdQBwDVAnDDQhTARhPAGQguADgtAAQjPAAjBhGg");
	this.shape.setTransform(72.1,71.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,144.3,143.7);


(lib.копияPath_3копия = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#EAEAEA","#878787","#3E3E3E","#111111","#000000"],[0,0.071,0.42,0.698,0.898,1],-16.3,28,0,-16.3,28,60.8).s().p("ABEKIQjhhSixioQixinhkjiQhnjpgFkIQgDhwARhxQDTgFEICaQENCdDvESQCvDIB1DdQBwDVAnDDQhTARhPAGQguADgtAAQjPAAjBhGg");
	this.shape.setTransform(72.1,71.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,144.3,143.7);


(lib.копияPath_2копия2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#DBDBDB","#A1A1A1","#707070","#484848","#282828","#121212","#050505","#000000"],[0,0.067,0.176,0.29,0.4,0.51,0.616,0.714,0.804],-1.2,-13.6,0,-1.2,-13.6,53.6).s().p("AkwEkQgmglghhlQghhlgKhrQgLh4AYhOQAdhbBGgPQBjgVB6AbQBqAZBlA3QB5BBBfBtQB1CEguBTQgaAxhXA7QhaA+hqAmQhzArhcAAQh5AAhMhMg");
	this.shape.setTransform(42.3,36.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,84.5,73.7);


(lib.копияPath_2копия = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#DBDBDB","#A1A1A1","#707070","#484848","#282828","#121212","#050505","#000000"],[0,0.067,0.176,0.29,0.4,0.51,0.616,0.714,0.804],-1.2,-13.6,0,-1.2,-13.6,53.6).s().p("AkwEkQgmglghhlQghhlgKhrQgLh4AYhOQAdhbBGgPQBjgVB6AbQBqAZBlA3QB5BBBfBtQB1CEguBTQgaAxhXA7QhaA+hqAmQhzArhcAAQh5AAhMhMg");
	this.shape.setTransform(42.3,36.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,84.5,73.7);


(lib.копияPath_1копия2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#DBDBDB","#A1A1A1","#707070","#484848","#282828","#121212","#050505","#000000"],[0,0.067,0.176,0.29,0.4,0.51,0.616,0.714,0.804],1.9,11.8,0,1.9,11.8,53.6).s().p("AB0FoQh/gsh6hLQiRhah1iEQiQifAyhRQAdguBkgxQBogyB7gXQCLgaB2AVQCJAYBVBUQAuAvAsBwQAsBxAQByQASCCgZBPQgdBbhTAEIgYABQhqAAiDgtg");
	this.shape.setTransform(50.3,40.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100.7,81.1);


(lib.копияPath_1копия = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#DBDBDB","#A1A1A1","#707070","#484848","#282828","#121212","#050505","#000000"],[0,0.067,0.176,0.29,0.4,0.51,0.616,0.714,0.804],1.9,11.8,0,1.9,11.8,53.6).s().p("AB0FoQh/gsh6hLQiRhah1iEQiQifAyhRQAdguBkgxQBogyB7gXQCLgaB2AVQCJAYBVBUQAuAvAsBwQAsBxAQByQASCCgZBPQgdBbhTAEIgYABQhqAAiDgtg");
	this.shape.setTransform(50.3,40.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100.7,81.1);


(lib.копияPath_0копия2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyCFQhlg7AIhKQAFgyBKhJQBNhOAsAjQAfAZAXAtQAUAoAJAtQAKA0gJA6QgMBGglAHQgJACgJAAQgzAAhJgtg");
	this.shape.setTransform(14.5,17.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.1,29.1,35.7);


(lib.копияPath_0копия = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyCFQhlg7AIhKQAFgyBKhJQBNhOAsAjQAfAZAXAtQAUAoAJAtQAKA0gJA6QgMBGglAHQgJACgJAAQgzAAhJgtg");
	this.shape.setTransform(14.5,17.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.1,29.1,35.7);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.копияPath_9копия3();
	this.instance.setTransform(131.8,131.8,1,1,0,0,0,131.8,131.8);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,0.427)",0,0,32);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16,-16,299,299);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ13();
	this.instance.setTransform(100.8,37,1,1,0,0,0,102,37.4);
	this.instance.alpha = 0.199;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Слой 1
	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(100,37.5,1,1,0,0,0,100,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,75);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(76,110,1,1,0,0,0,76,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:105.3},8,cjs.Ease.get(-1)).to({y:100},9,cjs.Ease.get(1)).to({y:105.3},9,cjs.Ease.get(-1)).to({y:110},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,10,152,200);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(71,100,1,1,0,0,0,71,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:105},9,cjs.Ease.get(-1)).to({y:110},9,cjs.Ease.get(1)).to({y:104.7},9,cjs.Ease.get(-1)).to({y:100},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142,200);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(106.5,100,1,1,0,0,0,106.5,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:98.7},0).wait(1).to({y:100},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,213,200);


(lib.Символ56копия2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ55копия2();
	this.instance.setTransform(-0.1,4.9,0.817,0.817);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.9,-61.3,55.7,132.4);


(lib.Символ56копия = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ55копия();
	this.instance.setTransform(-0.1,4.9,0.817,0.817);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.9,-61.3,55.7,132.4);


(lib.копияСимвол4копия3 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.ball();
	this.instance.setTransform(-103.2,-201.5,3.256,3.256);

	// Слой 1
	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(31.8,-69.7,1,1,0,0,0,131.8,131.8);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-116,-217.5,299,299);


(lib.копияСимвол4копия2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.копияPath_0копия2();
	this.instance.setTransform(129.2,-96.6,1,1,0,0,0,14.6,17.7);
	this.instance.alpha = 0.48;

	this.instance_1 = new lib.копияPath_1копия2();
	this.instance_1.setTransform(-23.7,16.3,1,1,0,0,0,50.3,40.5);

	this.instance_2 = new lib.копияPath_2копия2();
	this.instance_2.setTransform(77,-142.7,1,1,0,0,0,42.2,36.9);

	this.instance_3 = new lib.копияPath_3копия2();
	this.instance_3.setTransform(-19.7,-18.7,1,1,0,0,0,72.1,71.9);
	this.instance_3.alpha = 0.609;

	this.instance_4 = new lib.копияPath_4копия2();
	this.instance_4.setTransform(115.4,-46.7,1,1,0,0,0,48.3,101.5);
	this.instance_4.alpha = 0.609;

	this.instance_5 = new lib.копияPath_5копия2();
	this.instance_5.setTransform(-15.5,-137.1,1,1,0,0,0,67.7,57);
	this.instance_5.alpha = 0.609;

	this.instance_6 = new lib.копияPath_6копия2();
	this.instance_6.setTransform(81.6,-16.4,1,1,0,0,0,78.2,76.9);
	this.instance_6.alpha = 0.359;

	this.instance_7 = new lib.копияPath_7копия2();
	this.instance_7.setTransform(47.4,24.3,1,1,0,0,0,83.2,37.9);
	this.instance_7.alpha = 0.461;

	this.instance_8 = new lib.копияPath_8копия2();
	this.instance_8.setTransform(31.8,-69.7,1,1,0,0,0,131.8,131.8);
	this.instance_8.shadow = new cjs.Shadow("rgba(255,255,255,0.427)",0,0,32);

	this.instance_9 = new lib.копияPath_9копия2();
	this.instance_9.setTransform(31.8,-69.7,1,1,0,0,0,131.8,131.8);
	this.instance_9.shadow = new cjs.Shadow("rgba(255,255,255,0.427)",0,0,32);

	this.addChild(this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-116,-217.5,299,299);


(lib.копияСимвол4копия = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.копияPath_0копия();
	this.instance.setTransform(129.2,-96.6,1,1,0,0,0,14.6,17.7);
	this.instance.alpha = 0.48;

	this.instance_1 = new lib.копияPath_1копия();
	this.instance_1.setTransform(-23.7,16.3,1,1,0,0,0,50.3,40.5);

	this.instance_2 = new lib.копияPath_2копия();
	this.instance_2.setTransform(77,-142.7,1,1,0,0,0,42.2,36.9);

	this.instance_3 = new lib.копияPath_3копия();
	this.instance_3.setTransform(-19.7,-18.7,1,1,0,0,0,72.1,71.9);
	this.instance_3.alpha = 0.609;

	this.instance_4 = new lib.копияPath_4копия();
	this.instance_4.setTransform(115.4,-46.7,1,1,0,0,0,48.3,101.5);
	this.instance_4.alpha = 0.609;

	this.instance_5 = new lib.копияPath_5копия();
	this.instance_5.setTransform(-15.5,-137.1,1,1,0,0,0,67.7,57);
	this.instance_5.alpha = 0.609;

	this.instance_6 = new lib.копияPath_6копия();
	this.instance_6.setTransform(81.6,-16.4,1,1,0,0,0,78.2,76.9);
	this.instance_6.alpha = 0.359;

	this.instance_7 = new lib.копияPath_7копия();
	this.instance_7.setTransform(47.4,24.3,1,1,0,0,0,83.2,37.9);
	this.instance_7.alpha = 0.461;

	this.instance_8 = new lib.копияPath_8копия();
	this.instance_8.setTransform(31.8,-69.7,1,1,0,0,0,131.8,131.8);
	this.instance_8.shadow = new cjs.Shadow("rgba(255,255,255,0.427)",0,0,32);

	this.instance_9 = new lib.копияPath_9копия();
	this.instance_9.setTransform(31.8,-69.7,1,1,0,0,0,131.8,131.8);
	this.instance_9.shadow = new cjs.Shadow("rgba(255,255,255,0.427)",0,0,32);

	this.addChild(this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-116,-217.5,299,299);


(lib.копияsprite1102копия2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.копияshape1092копия2("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28,6.7,56,19.6);


(lib.копияsprite1102копия = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.копияshape1092копия("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28,6.7,56,19.6);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(106.5,100,1,1,0,0,0,106.5,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:105.2},0).wait(1).to({x:106.5},0).wait(3).to({x:107.8},0).wait(1).to({x:106.5},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,213,200);


(lib.копияСимвол26копия3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 12
	this.instance = new lib.копияСимвол4копия3();
	this.instance.setTransform(-12.3,53.3,0.714,0.714);
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.7,-106.6,223,223);


(lib.копияСимвол6копия3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.копияСимвол26копия3();
	this.instance.setTransform(-3.5,5.4,0.535,0.535,-75);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-78,-77.2,159,159);


(lib.копияsprite1112копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.копияsprite1102копия2();
	this.instance.setTransform(0.2,-26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,scaleY:1.01,y:-28.5},2).to({scaleX:0.93,scaleY:1.08,y:-29.4},2).to({scaleX:0.83,scaleY:1.18,y:-35.5},2).to({scaleX:0.94,scaleY:1.07,x:0.1,y:-43.2},2).to({scaleX:0.97,scaleY:1.03,x:0.2,y:-45.3},1).to({scaleX:1,scaleY:1,y:-47.5},3).to({scaleX:1,scaleY:1,y:-47.2},1).to({scaleX:0.99,scaleY:1.01,y:-46.2},1).to({scaleX:0.94,scaleY:1.06,y:-41.2},2).to({scaleX:0.89,scaleY:1.1,y:-36.8},1).to({scaleX:0.79,scaleY:1.2,y:-32},2).to({scaleX:1,scaleY:1,y:-26.9},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.8,-20.2,56,19.6);


(lib.копияsprite1112копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.копияsprite1102копия();
	this.instance.setTransform(0.2,-26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,scaleY:1.01,y:-28.5},2).to({scaleX:0.93,scaleY:1.08,y:-29.4},2).to({scaleX:0.83,scaleY:1.18,y:-35.5},2).to({scaleX:0.94,scaleY:1.07,x:0.1,y:-43.2},2).to({scaleX:0.97,scaleY:1.03,x:0.2,y:-45.3},1).to({scaleX:1,scaleY:1,y:-47.5},3).to({scaleX:1,scaleY:1,y:-47.2},1).to({scaleX:0.99,scaleY:1.01,y:-46.2},1).to({scaleX:0.94,scaleY:1.06,y:-41.2},2).to({scaleX:0.89,scaleY:1.1,y:-36.8},1).to({scaleX:0.79,scaleY:1.2,y:-32},2).to({scaleX:1,scaleY:1,y:-26.9},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.8,-20.2,56,19.6);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(339.6,100,1,1,0,0,0,106.5,100);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(233.1,0,213,200);


(lib.копияСимвол26копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* if (!_first)
		{
		    _first = true;
		    gotoAndPlay(Math.floor(Math.random() * _totalframes));
		} */
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40));

	// Слой 9
	this.arow = new lib.копияsprite1112копия2();
	this.arow.setTransform(-46.7,12.2,0.586,0.814,-105);
	this.arow.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.arow).wait(40));

	// Слой 1
	this.instance = new lib.Символ56копия2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-0.1,regY:4.9,rotation:0.1,x:-0.1,y:4.9},0).wait(1).to({rotation:0.3},0).wait(1).to({rotation:0.8},0).wait(1).to({rotation:1.4,x:-0.2},0).wait(1).to({rotation:2.2,x:-0.3},0).wait(1).to({rotation:3.1},0).wait(1).to({rotation:4.3,x:-0.4},0).wait(1).to({rotation:5.6,x:-0.5},0).wait(1).to({regX:0,regY:0,rotation:7,x:0,y:0},0).wait(1).to({regX:-0.1,regY:4.9,rotation:8.5,x:-0.8,y:4.9},0).wait(1).to({rotation:9.9,x:-0.9},0).wait(1).to({rotation:11.1,x:-1,y:4.8},0).wait(1).to({rotation:12.1,x:-1.1},0).wait(1).to({rotation:13,x:-1.2},0).wait(1).to({rotation:13.7},0).wait(1).to({rotation:14.3,x:-1.3},0).wait(1).to({rotation:14.7,y:4.7},0).wait(1).to({rotation:14.9},0).wait(1).to({regX:0,regY:0,rotation:15,x:0,y:0},0).wait(1).to({regX:-0.1,regY:4.9,rotation:14.9,x:-1.3,y:4.7},0).wait(1).to({rotation:14.7},0).wait(1).to({rotation:14.3,y:4.8},0).wait(1).to({rotation:13.8,x:-1.2},0).wait(1).to({rotation:13.1},0).wait(1).to({rotation:12.2,x:-1.1},0).wait(1).to({rotation:11.2,x:-1},0).wait(1).to({rotation:10.1,x:-0.9},0).wait(1).to({rotation:8.8,x:-0.8,y:4.9},0).wait(1).to({regX:0,regY:0,rotation:7.3,x:0,y:0},0).wait(1).to({regX:-0.1,regY:4.9,rotation:5.9,x:-0.6,y:4.9},0).wait(1).to({rotation:4.7,x:-0.5},0).wait(1).to({rotation:3.6,x:-0.4},0).wait(1).to({rotation:2.6,x:-0.3},0).wait(1).to({rotation:1.8,x:-0.2},0).wait(1).to({rotation:1.2},0).wait(1).to({rotation:0.7,x:-0.1},0).wait(1).to({rotation:0.3},0).wait(1).to({rotation:0.1},0).wait(1).to({regX:0,regY:0,rotation:0,x:0,y:0},0).wait(1));

	// Слой 12
	this.instance_1 = new lib.копияСимвол4копия2();
	this.instance_1.setTransform(-12.3,53.3,0.714,0.714);
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.7,-106.6,223,223);


(lib.копияСимвол26копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* if (!_first)
		{
		    _first = true;
		    gotoAndPlay(Math.floor(Math.random() * _totalframes));
		} */
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40));

	// Слой 9
	this.arow = new lib.копияsprite1112копия();
	this.arow.setTransform(-46.7,12.2,0.586,0.814,-105);
	this.arow.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.arow).wait(40));

	// Слой 1
	this.instance = new lib.Символ56копия();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-0.1,regY:4.9,rotation:0.1,x:-0.1,y:4.9},0).wait(1).to({rotation:0.3},0).wait(1).to({rotation:0.8},0).wait(1).to({rotation:1.4,x:-0.2},0).wait(1).to({rotation:2.2,x:-0.3},0).wait(1).to({rotation:3.1},0).wait(1).to({rotation:4.3,x:-0.4},0).wait(1).to({rotation:5.6,x:-0.5},0).wait(1).to({regX:0,regY:0,rotation:7,x:0,y:0},0).wait(1).to({regX:-0.1,regY:4.9,rotation:8.5,x:-0.8,y:4.9},0).wait(1).to({rotation:9.9,x:-0.9},0).wait(1).to({rotation:11.1,x:-1,y:4.8},0).wait(1).to({rotation:12.1,x:-1.1},0).wait(1).to({rotation:13,x:-1.2},0).wait(1).to({rotation:13.7},0).wait(1).to({rotation:14.3,x:-1.3},0).wait(1).to({rotation:14.7,y:4.7},0).wait(1).to({rotation:14.9},0).wait(1).to({regX:0,regY:0,rotation:15,x:0,y:0},0).wait(1).to({regX:-0.1,regY:4.9,rotation:14.9,x:-1.3,y:4.7},0).wait(1).to({rotation:14.7},0).wait(1).to({rotation:14.3,y:4.8},0).wait(1).to({rotation:13.8,x:-1.2},0).wait(1).to({rotation:13.1},0).wait(1).to({rotation:12.2,x:-1.1},0).wait(1).to({rotation:11.2,x:-1},0).wait(1).to({rotation:10.1,x:-0.9},0).wait(1).to({rotation:8.8,x:-0.8,y:4.9},0).wait(1).to({regX:0,regY:0,rotation:7.3,x:0,y:0},0).wait(1).to({regX:-0.1,regY:4.9,rotation:5.9,x:-0.6,y:4.9},0).wait(1).to({rotation:4.7,x:-0.5},0).wait(1).to({rotation:3.6,x:-0.4},0).wait(1).to({rotation:2.6,x:-0.3},0).wait(1).to({rotation:1.8,x:-0.2},0).wait(1).to({rotation:1.2},0).wait(1).to({rotation:0.7,x:-0.1},0).wait(1).to({rotation:0.3},0).wait(1).to({rotation:0.1},0).wait(1).to({regX:0,regY:0,rotation:0,x:0,y:0},0).wait(1));

	// Слой 12
	this.instance_1 = new lib.копияСимвол4копия();
	this.instance_1.setTransform(-12.3,53.3,0.714,0.714);
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.7,-106.6,223,223);


(lib.копияСимвол7копия3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.копияСимвол6копия3();
	this.instance.setTransform(-25.3,-24.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-103.3,-101.8,159,158);


(lib.копияСимвол6копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* if (!_first)
		{
		    _first = true;
		    gotoAndPlay(Math.floor(Math.random() * _totalframes));
		} */
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// Слой 1
	this.instance = new lib.копияСимвол26копия2();
	this.instance.setTransform(-3.5,5.3,0.58,0.58,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:10.4,regY:3.5,scaleX:0.58,scaleY:0.58,x:0,y:0},0).wait(1).to({scaleX:0.57,scaleY:0.57},0).wait(1).to({scaleX:0.57,scaleY:0.57,y:0.1},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:-0.1,y:0.2},0).wait(1).to({scaleX:0.55,scaleY:0.55,y:0.3},0).wait(1).to({regX:0,regY:0,scaleX:0.54,scaleY:0.54,x:-3.5,y:5.4},0).wait(1).to({regX:10.4,regY:3.5,scaleX:0.52,scaleY:0.52,x:-0.3,y:0.5},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:-0.4,y:0.7},0).wait(1).to({scaleX:0.5,scaleY:0.5,y:0.8},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:-0.5},0).wait(1).to({scaleX:0.49,scaleY:0.49,y:0.9},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:-0.6,y:1},0).wait(1).to({scaleX:0.48,scaleY:0.48},0).wait(1).to({regX:0,regY:0,scaleX:0.48,scaleY:0.48,x:-3.5,y:5.3},0).wait(1).to({regX:10.4,regY:3.5,scaleX:0.48,scaleY:0.48,x:-0.6,y:1},0).wait(1).to({scaleX:0.48,scaleY:0.48},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:-0.5,y:0.9},0).wait(1).to({scaleX:0.49,scaleY:0.49,y:0.8},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-0.4,y:0.7},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:-0.3,y:0.6},0).wait(1).to({regX:0,regY:0,scaleX:0.52,scaleY:0.52,x:-3.5,y:5.3},0).wait(1).to({regX:10.4,regY:3.5,scaleX:0.54,scaleY:0.54,x:-0.2,y:0.4},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:-0.1,y:0.3},0).wait(1).to({scaleX:0.56,scaleY:0.56,y:0.2},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:0,y:0.1},0).wait(1).to({scaleX:0.57,scaleY:0.57},0).wait(1).to({scaleX:0.58,scaleY:0.58,y:0},0).wait(1).to({scaleX:0.58,scaleY:0.58,y:0.1},0).wait(1).to({regX:0,regY:0,scaleX:0.58,scaleY:0.58,x:-3.5,y:5.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.8,-82.9,168,168);


(lib.копияСимвол6копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.копияСимвол26копия();
	this.instance.setTransform(-3.5,5.4,0.535,0.535,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:10.4,regY:3.5,scaleX:0.52,scaleY:0.52,x:-0.3,y:0.5},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:-0.4,y:0.7},0).wait(1).to({scaleX:0.5,scaleY:0.5,y:0.8},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:-0.5},0).wait(1).to({scaleX:0.49,scaleY:0.49,y:0.9},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:-0.6,y:1},0).wait(1).to({scaleX:0.48,scaleY:0.48},0).wait(1).to({regX:0,regY:0,scaleX:0.48,scaleY:0.48,x:-3.5,y:5.3},0).wait(1).to({regX:10.4,regY:3.5,scaleX:0.48,scaleY:0.48,x:-0.6,y:1},0).wait(1).to({scaleX:0.48,scaleY:0.48},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:-0.5,y:0.9},0).wait(1).to({scaleX:0.49,scaleY:0.49,y:0.8},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-0.4,y:0.7},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:-0.3,y:0.6},0).wait(1).to({regX:0,regY:0,scaleX:0.52,scaleY:0.52,x:-3.5,y:5.3},0).wait(1).to({regX:10.4,regY:3.5,scaleX:0.54,scaleY:0.54,x:-0.2,y:0.4},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:-0.1,y:0.3},0).wait(1).to({scaleX:0.56,scaleY:0.56,y:0.2},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:0,y:0.1},0).wait(1).to({scaleX:0.57,scaleY:0.57},0).wait(1).to({scaleX:0.58,scaleY:0.58,y:0},0).wait(1).to({scaleX:0.58,scaleY:0.58,y:0.1},0).wait(1).to({regX:0,regY:0,scaleX:0.58,scaleY:0.58,x:-3.5,y:5.3},0).wait(2).to({regX:10.4,regY:3.5,scaleX:0.58,scaleY:0.58,x:0.1,y:0},0).wait(1).to({scaleX:0.57,scaleY:0.57,y:0.1},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:0},0).wait(1).to({scaleX:0.56,scaleY:0.56,y:0.2},0).wait(1).to({regX:0,regY:0,scaleX:0.55,scaleY:0.55,x:-3.4,y:5.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-77.2,159,159);


(lib.копияСимвол8копия3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.копияСимвол7копия3();
	this.instance.setTransform(168.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:87.7},11,cjs.Ease.get(-1)).to({x:0},12,cjs.Ease.get(1)).to({x:84.3},12,cjs.Ease.get(-1)).to({x:168.6},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65.3,-101.8,159,158);


(lib.копияСимвол7копия2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.копияСимвол6копия2();
	this.instance.setTransform(-25.3,-24.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-108.2,-107.5,169,169);


(lib.копияСимвол7копия = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.копияСимвол6копия();
	this.instance.setTransform(-25.3,-24.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-103.3,-101.8,159,158);


(lib.копияСимвол54копия3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.копияСимвол8копия3();
	this.instance.setTransform(28.9,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({x:-47.6,y:1014.3},49).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(94.1,-75.8,159,158);


(lib.копияСимвол8копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.копияСимвол7копия2();
	this.instance.setTransform(168.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:87.7},6,cjs.Ease.get(-1)).to({x:0},7,cjs.Ease.get(1)).to({x:84.3},7,cjs.Ease.get(-1)).to({x:168.6},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(60.4,-107.5,170,169);


(lib.копияСимвол8копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.копияСимвол7копия();
	this.instance.setTransform(84.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:168.6},12,cjs.Ease.get(1)).to({x:87.7},12,cjs.Ease.get(-1)).to({x:0},13,cjs.Ease.get(1)).to({x:70.9},11,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-101.8,159,158);


(lib.копияСимвол54копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.копияСимвол8копия2();
	this.instance.setTransform(28.9,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({x:-47.6,y:1014.3},49).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(89.3,-81.5,170,169);


(lib.копияСимвол54копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.копияСимвол8копия();
	this.instance.setTransform(28.9,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(72).to({x:-47.6,y:1014.3},36).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.8,-75.8,160,158);


// stage content:



(lib.office_640x305 = function(mode,startPosition,loop) {
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
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 10;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(123.6,261.6,0.691,0.691,0,0,0,147.2,33.5);

	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(333.7,260.4,1,1,0,0,0,100,37.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ11(), 3);

	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(325,253.1,1,1,0,0,0,325,65);

	this.instance_3 = new lib.Символ5();
	this.instance_3.setTransform(320.4,173.7,1,1,0,0,0,325,145.3);

	this.instance_4 = new lib.копияСимвол54копия3();
	this.instance_4.setTransform(23.3,-102.5,0.67,0.67,13.5);

	this.instance_5 = new lib.копияСимвол54копия3();
	this.instance_5.setTransform(238.1,-218.7,0.67,0.67,13.5);

	this.instance_6 = new lib.копияСимвол54копия3();
	this.instance_6.setTransform(462,-116.9,0.67,0.67,13.5);

	this.instance_7 = new lib.копияСимвол54копия();
	this.instance_7.setTransform(284.7,-121.2,0.434,0.434,13.5,0,0,-0.1,0.1);

	this.instance_8 = new lib.копияСимвол54копия2();
	this.instance_8.setTransform(-53.9,-78.6,0.482,0.482,13.5);

	this.instance_9 = new lib.копияСимвол54копия2();
	this.instance_9.setTransform(307.5,-148.3,0.67,0.67,13.5);

	this.instance_10 = new lib.Символ10();
	this.instance_10.setTransform(425,133.5,1,1,0,0,0,76,100);

	this.instance_11 = new lib.Символ8();
	this.instance_11.setTransform(245,136.4,1,1,0,0,0,71,100);

	this.fon = new lib.Символ15();
	this.fon.setTransform(319.9,113.5,1,1,0,0,0,440,163.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("Eg3cAfQMAAAg+fMBu5AAAMAAAA+fg");
	this.shape.setTransform(315,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.fon},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(280,-99.9,1195.6,592.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;