(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/_4tt4.png", id:"_4tt4"},
		{src:"images/cloud.png", id:"cloud"},
		{src:"images/f4f4r.png", id:"f4f4r"},
		{src:"images/g4g.png", id:"g4g"},
		{src:"images/t4t.png", id:"t4t"}
	]
};



// symbols:



(lib._4tt4 = function() {
	this.initialize(img._4tt4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.cloud = function() {
	this.initialize(img.cloud);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,143);


(lib.f4f4r = function() {
	this.initialize(img.f4f4r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,44);


(lib.g4g = function() {
	this.initialize(img.g4g);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,85);


(lib.t4t = function() {
	this.initialize(img.t4t);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,193);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgjlAFOIAAqbMBHLAAAIAAKbg");
	this.shape.setTransform(227.9,33.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,455.8,67);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgzZAZjMAAAgzFMBmzAAAMAAAAzFg");
	this.shape.setTransform(329.1,163.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("EgzZAZjMAAAgzFMBmzAAAMAAAAzFg");
	this.shape_1.setTransform(329.1,163.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,658.2,327.1);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A9B4B8").s().p("AhLBjIANgXQgVgPgGgTQgDgJADgKQABgKAHgMIAEgEIAsAYIgDAGQgGAKACAHQABAGAHAFQAHAEAHgCQAGgDAEgGQAFgJgCgIQgCgIgGgJIgNgPQgHgJgFgKQgEgLAAgMQABgGACgIQACgGAFgIQAOgXASgGQASgHAZAKIAIgOIAWAOIgIANQAMAKAGAIQAHAJABAKQAEATgPAZIgrgaIACgDQAFgHAAgIQABgHgHgEQgHgEgHACQgGADgEAGQgFAIADAIQACAIAHAIIANASQAIAHAEALQAFALAAANQAAANgKAQQgHAMgJAIQgJAGgKADQgIACgMgCQgMgCgOgHIgNAWg");
	this.shape.setTransform(48.8,41.5);

	// Слой 3
	this.instance = new lib.t4t();
	this.instance.setTransform(28.4,0);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(28.4,0,150,193);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.f4f4r();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,78,44);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.g4g();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,84,85);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AgJhnIBRA2IiQCZg");
	this.shape.setTransform(18.8,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AgHhpIBRA2IiTCdg");
	this.shape_1.setTransform(18.6,12.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AgFhrIBRA2IiXChg");
	this.shape_2.setTransform(18.4,12.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AgDhtIBRA2IibClg");
	this.shape_3.setTransform(18.2,13);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AgBhwIBRA2IifCrg");
	this.shape_4.setTransform(18,13.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AAAhyIBSA2IijCvg");
	this.shape_5.setTransform(17.8,13.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AABh0IBTA2IinCzg");
	this.shape_6.setTransform(17.6,13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6600").s().p("AADh2IBTA2IirC3g");
	this.shape_7.setTransform(17.4,13.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6600").s().p("AAFh4IBTA2IivC8g");
	this.shape_8.setTransform(17.2,14.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6600").s().p("AAGh6IBUA2IizC/g");
	this.shape_9.setTransform(17,14.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6600").s().p("AAIh9IBUA2Ii3DFg");
	this.shape_10.setTransform(16.8,14.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6600").s().p("AAKh/IBUA2Ii7DJg");
	this.shape_11.setTransform(16.6,14.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF6600").s().p("AAMiBIBUA2Ii/DNg");
	this.shape_12.setTransform(16.4,14.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF6600").s().p("AAOiDIBTA2IjBDRg");
	this.shape_13.setTransform(16.3,15.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF6600").s().p("AAQiFIBTA2IjGDWg");
	this.shape_14.setTransform(16.1,15.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF6600").s().p("AAOiDIBUA2IjDDRg");
	this.shape_15.setTransform(16.2,15.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF6600").s().p("AANiBIBTA2Ii/DOg");
	this.shape_16.setTransform(16.4,15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF6600").s().p("AALh/IBTA2Ii7DJg");
	this.shape_17.setTransform(16.6,14.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF6600").s().p("AAJh9IBTA2Ii3DFg");
	this.shape_18.setTransform(16.8,14.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF6600").s().p("AAHh7IBTA2Ii0DBg");
	this.shape_19.setTransform(17,14.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF6600").s().p("AAFh5IBUA2IixC9g");
	this.shape_20.setTransform(17.1,14.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF6600").s().p("AAEh3IBTA2IitC5g");
	this.shape_21.setTransform(17.3,13.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF6600").s().p("AACh1IBTA2IipC1g");
	this.shape_22.setTransform(17.5,13.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF6600").s().p("AAAhzIBTA2IilCxg");
	this.shape_23.setTransform(17.7,13.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF6600").s().p("AAAhxIBRA2IiiCtg");
	this.shape_24.setTransform(17.9,13.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF6600").s().p("AgChvIBSA2IifCpg");
	this.shape_25.setTransform(18,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{y:13}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_3,p:{y:12.9}}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Слой 2
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFF33").s().p("AgSjFICdBmIkVElg");
	this.shape_26.setTransform(15.3,19.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFF33").s().p("AgQjIICdBnIkZEqg");
	this.shape_27.setTransform(15.1,19.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFF33").s().p("AgNjKICdBnIkfEug");
	this.shape_28.setTransform(14.8,19.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFF33").s().p("AgLjNICdBnIkjE0g");
	this.shape_29.setTransform(14.6,20);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFF33").s().p("AgJjPICeBnIkoE4g");
	this.shape_30.setTransform(14.4,20.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFF33").s().p("AgGjRICdBmIktE+g");
	this.shape_31.setTransform(14.1,20.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFF33").s().p("AgEjUICeBnIkyFCg");
	this.shape_32.setTransform(13.9,20.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFF33").s().p("AgBjWICdBnIk3FGg");
	this.shape_33.setTransform(13.6,20.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFF33").s().p("AAAjZICeBnIk7FMg");
	this.shape_34.setTransform(13.4,21.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFF33").s().p("AACjbICfBnIlBFQg");
	this.shape_35.setTransform(13.1,21.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFF33").s().p("AAEjdICfBmIlFFVg");
	this.shape_36.setTransform(12.9,21.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFF33").s().p("AAHjgICfBnIlLFag");
	this.shape_37.setTransform(12.6,21.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFF33").s().p("AAJjiICfBnIlPFeg");
	this.shape_38.setTransform(12.4,22.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFF33").s().p("AALjkICgBmIlVFkg");
	this.shape_39.setTransform(12.2,22.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFF33").s().p("AAOjnICfBnIlZFog");
	this.shape_40.setTransform(11.9,22.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFF33").s().p("AAMjlICfBnIlVFkg");
	this.shape_41.setTransform(12.1,22.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFF33").s().p("AAJjiICgBmIlRFfg");
	this.shape_42.setTransform(12.4,22.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFF33").s().p("AAFjeICfBnIlHFWg");
	this.shape_43.setTransform(12.8,21.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFF33").s().p("AACjcICgBnIlDFSg");
	this.shape_44.setTransform(13.1,21.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFF33").s().p("AAAjZICfBmIk9FNg");
	this.shape_45.setTransform(13.3,21.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFF33").s().p("AAAjXICdBnIk5FIg");
	this.shape_46.setTransform(13.5,21);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFF33").s().p("AgCjVICdBnIk1FEg");
	this.shape_47.setTransform(13.7,20.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFF33").s().p("AgFjTICeBnIkxFAg");
	this.shape_48.setTransform(14,20.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFF33").s().p("AgHjRICdBnIkrE8g");
	this.shape_49.setTransform(14.2,20.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFF33").s().p("AgJjOICdBmIknE4g");
	this.shape_50.setTransform(14.4,20.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFF33").s().p("AgMjMICeBnIkiEyg");
	this.shape_51.setTransform(14.7,19.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFF33").s().p("AgOjKICdBnIkdEug");
	this.shape_52.setTransform(14.9,19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26}]}).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_26}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.4,-0.6,27.9,39.8);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#15AFBF").s().p("EgyYAYhMAAAgxBMBkxAAAMAAAAxBg");
	this.shape.setTransform(322.5,157);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,645,314);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.cloud();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,276,143);


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


(lib.Символ55 = function() {
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


(lib.Символ19_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib._4tt4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


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


(lib.копияshape1092 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkWhhIItAAIkeDCg");
	this.shape.setTransform(0,16.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28,6.7,56,19.6);


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


(lib.копияPath_9 = function() {
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


(lib.копияPath_8 = function() {
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


(lib.копияPath_7 = function() {
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


(lib.копияPath_6 = function() {
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


(lib.копияPath_5 = function() {
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


(lib.копияPath_4 = function() {
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


(lib.копияPath_3 = function() {
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


(lib.копияPath_2 = function() {
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


(lib.копияPath_1 = function() {
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


(lib.копияPath_0 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyCFQhlg7AIhKQAFgyBKhJQBNhOAsAjQAfAZAXAtQAUAoAJAtQAKA0gJA6QgMBGglAHQgJACgJAAQgzAAhJgtg");
	this.shape.setTransform(14.5,17.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.1,29.1,35.7);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgkB4QgQgFgLgPQgEgHgFgJIgFgWQgGgYAAgmQAAgkAGgYQAEgYAKgOQALgPAQgFQAQgHAUABQAVgBAQAHQAQAFALAPQAKAOAEAYQAGAlAAAXQgCAugEAQIgFAWQgFAJgEAHQgLAPgQAFQgQAFgVABQgUgBgQgFgAgNhLQgFAKAAAaIAABQQAAAbAFAIQAFAKAIAAQAJAAAFgKQAFgIAAgbIAAhQQAAgagFgKQgFgIgJgBQgIABgFAIg");
	this.shape.setTransform(254.2,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AosCkIAAj4IA8AAIAAAaIABAAQAGgQAKgHQALgIAQAAQAQAAALAGQALAHAGANQANAZAAAzQAAAbgFASQgDASgIALQgHALgLAFQgLAEgNAAQgNAAgLgFQgLgFgEgPIgBAAIAABSgAnkgoQgEADgCAGIgCAQIAAAxIACAQQACAGAEADQADACAFAAQAGAAADgCQAEgDABgGIAEgQIAAgxIgEgQQgBgGgEgDQgDgCgGAAQgFAAgDACgA9lCQIAAgpIhUAAIAAApIg5AAIAAhXIAOAAIAJgVIAGgVIACgWIABhNICSAAIAACNIAVAAIAABXgA+WgYQAAAYgFAWQgEAVgFAOIAnAAIAAhgIgZAAgAeJCLIAAggQgggDgSgQQgJgHgEgMQgEgMAAgRIAAgKIA/AAIAAAHQAAAQAGAGQAGAGAKAAQAKAAAGgHQAEgHAAgJQABgMgIgHQgIgHgLgFIgYgKQgNgDgMgIQgLgJgIgNQgEgHgCgIQgCgJAAgLQABggAQgTQAQgTAfgGIAAgUIAhAAIAAAUQASACAMAFQAMAGAIAJQAQARAAAkIg9AAIAAgFQABgKgFgIQgFgIgJAAQgLAAgEAHQgGAHAAAIQAAAMAJAHQAHAHAMAFIAaAKQAOAEAMAJQALAIAIAOQAIALAAAXQAAASgFANQgFANgIAJQgKAJgOAFQgNAFgSACIAAAggAbBBmQgQgFgKgPQgFgHgEgJIgHgWQgFgYAAgkQAAgmAFgYQAFgZALgOQAKgOAQgGQAQgGAWAAQAVAAAQAGQAQAGAKAOQALAOAFAZQAFAlAAAZQgCAsgDAQIgHAWQgEAJgFAHQgKAPgQAFQgQAFgVAAQgXAAgPgFgAbXhdQgDAKAAAaIAABQQAAAaADAJQAGAKAKAAQAKAAAEgKQAEgJAAgaIAAhQQAAgagEgKQgEgJgKAAQgKAAgGAJgAYLBmQgQgFgKgPQgGgHgDgJIgHgWQgFgYAAgkQAAgmAFgYQAFgZALgOQAKgOAQgGQAQgGAWAAQAVAAAQAGQAQAGALAOQAKAOAFAZQAFAlAAAZQgCAsgDAQIgGAWQgEAJgFAHQgLAPgQAFQgQAFgVAAQgXAAgPgFgAYhhdQgDAKAAAaIAABQQAAAaADAJQAFAKALAAQAKAAAEgKQAEgJABgaIAAhQQgBgagEgKQgEgJgKAAQgLAAgFAJgAVVBmQgQgFgLgPQgEgHgFgJIgFgWQgGgYAAgkQAAgmAGgYQAEgZAKgOQALgOAQgGQAQgGAWAAQAVAAAQAGQAQAGALAOQAKAOAEAZQAGAlAAAZQgCAsgEAQIgFAWQgFAJgEAHQgLAPgQAFQgQAFgVAAQgXAAgPgFgAVshdQgEAKgBAaIAABQQABAaAEAJQAEAKALAAQAJAAAFgKQAFgJAAgaIAAhQQAAgagFgKQgFgJgJAAQgLAAgEAJgAOCBcQgKgIgEgMQgFgMAAgRIA5AAIAAABQgBANAFAGQAFAGAJAAQAHAAAFgHQAFgGAAgKIgBgKQgBgFgDgCQgCgDgFgBIgXgBIAAgjIAKAAQALAAAHgFQAFgEAAgQQABgKgGgCQgFgDgFAAQgIAAgEAFQgEAGAAAKIAAACIg3AAQAAgSAFgMQAGgLAKgHQAKgHAOgDQANgDAQAAQAlAAASAMQAIAGAFAJQAEAKAAANQAAAOgIANQgFAGgGAEQgFACgHACQAQADAKALQAFAFACAIQADAIAAAKQAAAQgGALQgGAMgLAHQgKAIgPADQgOADgRAAQgmAAgTgPgAAeBpQgLgCgIgEQgOgHgJgOQgHgNgDgSQgCgSAAgVQAAgQACgSQAEgSAHgOQAFgHAGgFQAEgGAIgEQAQgJAbAAQAbAAARAIQAQAIAHANQAJAOACASQACASAAATQAAATgDARQgCASgJAOQgIANgQAJQgQAIgaAAQgOAAgLgCgAAuguQgEADgCAGQgCAHAAALIAAA5QAAALACAHQACAHAEACQADADAGAAQAFAAADgDQAEgCABgHIADgSIAAg5IgDgSQgBgGgEgDQgDgCgFAAQgGAAgDACgAljBnQgKgDgHgIQgLgPAAgZQAAgMACgKQADgKAGgHQAGgIAKgFQALgDAPgDIAYgGQALgDADgFQAFgEAAgJQAAgJgFgEQgDgEgIAAQgJAAgFAFQgEAFAAAPIg2AAIABgTQACgIAEgGQAHgNALgHQALgGAMgDQANgCALAAQAQAAAOADQAOACAKAHQAKAHAFAMQAFAMAAASIABByQABAKAFAHIg9AAIgDgKIgBgLIgBAAQgFANgLAGQgMAGgOAAQgPAAgKgEgAkoARIgNAEQgIADgDAGQgCAGAAAJQAAAKAEAFQAEAGAHAAQALAAAEgIQAFgIAAgPIAAgXIgBAAQgDAEgFABgAq5BkQgOgGgKgNQgIgNgEgRQgCgSAAgVIABg9QABgSAIgbQAGgTAPgLQAOgLAagDIAdgFIAGgCIADgFIAuAAQgBAQgDAKQgDAJgIAGQgHAGgNAEQgNADgUACQgaAEgPAMQgOAMgCAaIABAAQAIgUAPgLQAHgFAJgDQAJgDALAAQATAAANAGQANAHAJAMQAHALADASQAEARAAAVQAAAXgEASQgEASgIANQgKAMgPAHQgPAGgZAAQgYAAgPgHgAqXgqQgDACgDAGIgDARIAAA6IACASQADAGADACQADACAEAAQAEAAADgCQAEgDACgGIADgRIAAg6IgDgRQgCgGgEgCQgCgCgEAAgAtaBpQgKgCgIgEQgRgHgIgOQgHgNgDgSQgCgSAAgVQAAgQACgSQAEgSAIgOQAEgHAGgFQAGgGAIgEQAQgJAbAAQAbAAARAIQAPAIAJANQAHAOADASQACASAAATQAAATgCARQgEASgIAOQgIANgQAJQgQAIgaAAQgOAAgMgCgAtJguQgDADgDAGQgBAHgBALIAAA5QABALABAHQADAHADACQADADAGAAQAFAAADgDQAEgCACgHIACgSIAAg5IgCgSQgCgGgEgDQgDgCgFAAQgGAAgDACgAwIBoQgPgDgLgLQgLgKgGgTQgEgMgCglQAAggAGgUQAIgUAKgLQAMgLAPgDQAQgEASAAQAVAAAOAGQAOAGAHAKQAJAKADAPQADAOABASIg5AAIgCgTIgDgLQgDgIgLAAQgFAAgEACQgDADgCAHIgDASIAAA4IADASQACAGADADQAEADAFAAQAJAAAFgHQAFgHAAgSIAAgMIA5AAQAAAXgFAPQgDAQgJAKQgKAKgOAEQgOAFgVAAQgRAAgPgDgA2aBmQgPgFgKgMQgKgLgDgTQgEgTgBgbQAAgaAFgSQAFgTAKgMQAJgMAPgGQAPgFAWAAQATAAAOAFQAOAEAKALQAKALAEARQAFARAAAYIAAATIheAAIAAAZQABAQAEAFQAGAFAGAAQAJAAAFgHQAFgHgBgTIA5AAQgBAjgQARQgSASgnAAQgXAAgPgFgA2CgrQgEAHAAAPIAAAIIAjAAIAAgIQAAgPgDgHQgEgHgLAAQgJAAgEAHgA74BmQgPgFgKgMQgKgLgEgTQgDgTAAgbQgBgaAFgSQAEgTALgMQAJgMAPgGQAQgFAVAAQATAAAOAFQAOAEAKALQAKALAEARQAFARAAAYIAAATIhdAAIAAAZQAAAQAEAFQAGAFAGAAQAJAAAFgHQAFgHgBgTIA5AAQgBAjgQARQgSASgnAAQgXAAgPgFgA7ggrQgDAHAAAPIAAAIIAiAAIAAgIQAAgPgEgHQgDgHgLAAQgJAAgEAHgASpBnIAAimIgvAAIAAgpQAPAAAMgCQALgCAHgEQAHgFAFgHQAGgIACgLIAwAAIAAD2gAMkBnIAAhnIgjBnIhEAAIAAi7IA7AAIAABiIAjhiIBFAAIAAC7gAD5BnIAAhFIA7AAIAABFgAhqBnIAAhKIggAAIAABKIg/AAIAAi7IA/AAIAABCIAgAAIAAhCIA/AAIAAC7gA0VBnIAAi7IB7AAIAAAuIg8AAIAACNgA4XBnIAAhKIgfAAIAABKIg/AAIAAi7IA/AAIAABCIAfAAIAAhCIA/AAIAAC7gAD5gPIAAhFIA7AAIAABFg");
	this.shape_1.setTransform(203.6,19.3);

	// Слой 2
	this.instance = new lib.Символ19();
	this.instance.setTransform(200,16.2,0.99,0.981,0,0,0,227.8,33.4);
	this.instance.alpha = 0.25;

	this.addChild(this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.5,-16.6,451.2,65.7);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGqFxIAAhfIjOAAIAABfIh3AAIAAjIIAhAAQAPgeAKgeQAKgfAGghQAGgfACgjIACjIIE8AAIAAGGIAsAAIAADIgAEwAAIgWB9IgNAsIBnAAIAAkfIhCAAgEggvAEMQgRgHgNgLQgOgLgLgPQgLgQgHgTIgMgsQgJgxAAhHQAAgsAJhIIAMgtQAHgTALgQQAVgfAigOQARgHAVgEIAtgEIAtAEQAVAEATAHQAQAHAOALQANAMALAPQAVAeAJAyQAJBIAAAsQgDBXgGAhQgJAxgVAeQgLAPgNALQgOALgQAHQgkAOgxAAQgxAAgigOgA/ziIQgJAIgEAUQgFATgBAhIAAClQABAhAFAUQAEATAJAIQAJAHAOAAQAOAAAKgHQAJgIADgTQAGgUAAghIAAilQAAghgGgTQgDgUgJgIQgKgHgOAAQgOAAgJAHgEAmYAESIAAhuIB1AAIAABugEAjJAESIAAkmIhUEmIiPAAIAAnvIB9AAIAAEVIBTkVICQAAIAAHvgAaxESIAAnvIEXAAIAABqIiUAAIAAGFgAUsESIAAnvICCAAIAACyIAyAAQArAAAfALQAeAKAUAVQAnAngBBKIgCArQgEAUgHAQQgPAegZATQgWATgeAHQgdAIgeAAgAWuC1IAQAAQAkAAAOgQQAOgRAAgjQAAgngSgOQgQgNgeAAIgQAAgARuESIAAjNIhPAAIAADNIiBAAIAAnvICBAAIAAC2IBPAAIAAi2ICBAAIAAHvgAJBESIAAnvIEnAAIAABqIilAAIAABVICbAAIAABjIibAAIAABkICrAAIAABpgAjpESIAAkmIhUEmIiPAAIAAnvIB8AAIAAEVIBUkVICRAAIAAHvgAprESIgOhWIhnAAIgMBWIiJAAIB4nvICjAAIB4HvgArQBZIBIAAIgkjRIgBAAgAwAESIAAlxIgCAAIhFFxIhdAAIhFlxIgBAAIAAFxIh5AAIAAnvIC5AAIA0EkIABAAIA1kkIC6AAIAAHvgA4YESIAAkmIhVEmIiPAAIAAnvIB9AAIAAEVIBTkVICRAAIAAHvgEgk8AESIAAmFIhQAAIAAGFIiBAAIAAnvIFSAAIAAHvgEAmhACCIgMi5IAAimIB5AAIAACmIgPC5gAltkeQgbgegCg0IA8AAQADAYANANQANAMAVAAQAYAAANgMQANgNAEgYIA8AAQgCA0gcAeQgbAeg4AAQg2AAgcgegA6ckeQgcgegCg0IA9AAQACAYANANQANAMAXAAQAYAAANgMQAMgNAEgYIA8AAQgCA0gcAeQgcAeg3AAQg2AAgcgeg");
	this.shape.setTransform(257.4,37);

	// Слой 2
	this.instance = new lib.Символ19();
	this.instance.setTransform(258.4,40.9,1.211,1.531,0,0,0,227.8,33.5);
	this.instance.alpha = 0.25;

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.5,-10.3,551.9,102.6);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(4.9,22.4,1,1,0,0,0,4.9,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:8.3},15,cjs.Ease.get(-1)).to({regX:4.8,rotation:16.2},14,cjs.Ease.get(1)).to({regX:4.9,rotation:7.5},16,cjs.Ease.get(-1)).to({rotation:0},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78,44);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(73.1,43.3,1,1,0,0,0,42,42.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(31.1,0.8,84,85);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(15,21.5,1,1,0,0,0,15,21.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.4,-0.6,27.9,39.8);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(932.5,-544.3,0.172,0.181,0,0,180,138.1,71.5);

	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(1073,-506.3,0.172,0.181,0,0,180,138.1,71.5);

	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(604.1,-307.1,0.196,0.181,0,0,180,137.8,71.5);

	this.instance_3 = new lib.Символ1();
	this.instance_3.setTransform(601.1,-495.1,0.196,0.181,0,0,180,137.8,71.5);

	this.instance_4 = new lib.Символ1();
	this.instance_4.setTransform(1075,-314.1,0.181,0.181,0,0,0,138,71.5);

	this.instance_5 = new lib.Символ1();
	this.instance_5.setTransform(927,-276.1,0.181,0.181,0,0,0,138,71.5);

	this.instance_6 = new lib.Символ1();
	this.instance_6.setTransform(1070,-411.6,0.384,0.384,0,0,0,138,71.5);

	this.instance_7 = new lib.Символ1();
	this.instance_7.setTransform(684,-440.6,0.384,0.384,0,0,0,138,71.5);

	this.instance_8 = new lib.Символ1();
	this.instance_8.setTransform(803.7,-29.1,0.186,0.181,0,0,0,137.8,71.5);

	this.instance_9 = new lib.Символ1();
	this.instance_9.setTransform(806.5,-217.1,0.186,0.181,0,0,0,137.8,71.5);

	this.instance_10 = new lib.Символ1();
	this.instance_10.setTransform(356.5,-36.1,0.172,0.181,0,0,180,138.1,71.5);

	this.instance_11 = new lib.Символ1();
	this.instance_11.setTransform(497,1.9,0.172,0.181,0,0,180,138.1,71.5);

	this.instance_12 = new lib.Символ1();
	this.instance_12.setTransform(361.3,-133.6,0.365,0.384,0,0,180,138,71.5);

	this.instance_13 = new lib.Символ1();
	this.instance_13.setTransform(727.8,-162.6,0.365,0.384,0,0,180,138,71.5);

	this.instance_14 = new lib.Символ1();
	this.instance_14.setTransform(30.1,201,0.196,0.181,0,0,180,137.8,71.5);

	this.instance_15 = new lib.Символ1();
	this.instance_15.setTransform(27.1,13,0.196,0.181,0,0,180,137.8,71.5);

	this.instance_16 = new lib.Символ1();
	this.instance_16.setTransform(501,194,0.181,0.181,0,0,0,138,71.5);

	this.instance_17 = new lib.Символ1();
	this.instance_17.setTransform(353,232,0.181,0.181,0,0,0,138,71.5);

	this.instance_18 = new lib.Символ1();
	this.instance_18.setTransform(496,96.5,0.384,0.384,0,0,0,138,71.5);

	this.instance_19 = new lib.Символ1();
	this.instance_19.setTransform(110,67.5,0.384,0.384,0,0,0,138,71.5);

	this.addChild(this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-557.2,1123,802.2);


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


(lib.Символ56 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ55();
	this.instance.setTransform(-0.1,4.9,0.817,0.817);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.9,-61.3,55.7,132.4);


(lib.Символ18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19_1();
	this.instance.setTransform(48.5,48.5,1,1,0,0,0,48.5,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},51).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


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


(lib.копияСимвол4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.копияPath_0();
	this.instance.setTransform(129.2,-96.6,1,1,0,0,0,14.6,17.7);
	this.instance.alpha = 0.48;

	this.instance_1 = new lib.копияPath_1();
	this.instance_1.setTransform(-23.7,16.3,1,1,0,0,0,50.3,40.5);

	this.instance_2 = new lib.копияPath_2();
	this.instance_2.setTransform(77,-142.7,1,1,0,0,0,42.2,36.9);

	this.instance_3 = new lib.копияPath_3();
	this.instance_3.setTransform(-19.7,-18.7,1,1,0,0,0,72.1,71.9);
	this.instance_3.alpha = 0.609;

	this.instance_4 = new lib.копияPath_4();
	this.instance_4.setTransform(115.4,-46.7,1,1,0,0,0,48.3,101.5);
	this.instance_4.alpha = 0.609;

	this.instance_5 = new lib.копияPath_5();
	this.instance_5.setTransform(-15.5,-137.1,1,1,0,0,0,67.7,57);
	this.instance_5.alpha = 0.609;

	this.instance_6 = new lib.копияPath_6();
	this.instance_6.setTransform(81.6,-16.4,1,1,0,0,0,78.2,76.9);
	this.instance_6.alpha = 0.359;

	this.instance_7 = new lib.копияPath_7();
	this.instance_7.setTransform(47.4,24.3,1,1,0,0,0,83.2,37.9);
	this.instance_7.alpha = 0.461;

	this.instance_8 = new lib.копияPath_8();
	this.instance_8.setTransform(31.8,-69.7,1,1,0,0,0,131.8,131.8);
	this.instance_8.shadow = new cjs.Shadow("rgba(255,255,255,0.427)",0,0,32);

	this.instance_9 = new lib.копияPath_9();
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


(lib.копияsprite1102 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.копияshape1092("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28,6.7,56,19.6);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ9();
	this.instance.setTransform(117.9,43,1,1,0,0,0,64.1,43);

	// Слой 1
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(48,154.5,1,1,0,0,0,74.9,96.7);

	// Слой 3
	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(137.9,93,1,1,0,0,0,39,22.1);

	// Слой 5
	this.instance_3 = new lib.Символ6();
	this.instance_3.setTransform(15,158.6,1,1,0,0,0,15,21.5);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.4,0.8,175.5,250);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(274.5,630.6,1,1,0,0,0,274.5,122.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-279.3,y:1120},66).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-49.1,1123,802.2);


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


(lib.копияsprite1112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.копияsprite1102();
	this.instance.setTransform(0.2,-26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,scaleY:1.01,y:-28.5},2).to({scaleX:0.93,scaleY:1.08,y:-29.4},2).to({scaleX:0.83,scaleY:1.18,y:-35.5},2).to({scaleX:0.94,scaleY:1.07,x:0.1,y:-43.2},2).to({scaleX:0.97,scaleY:1.03,x:0.2,y:-45.3},1).to({scaleX:1,scaleY:1,y:-47.5},3).to({scaleX:1,scaleY:1,y:-47.2},1).to({scaleX:0.99,scaleY:1.01,y:-46.2},1).to({scaleX:0.94,scaleY:1.06,y:-41.2},2).to({scaleX:0.89,scaleY:1.1,y:-36.8},1).to({scaleX:0.79,scaleY:1.2,y:-32},2).to({scaleX:1,scaleY:1,y:-26.9},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.8,-20.2,56,19.6);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(91.4,124.2,1,1,0,0,0,91,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:92.3,y:132.6},10,cjs.Ease.get(-1)).to({x:93,y:140.2},9,cjs.Ease.get(1)).to({x:92.1,y:131.4},11,cjs.Ease.get(-1)).to({x:91.4,y:124.2},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.8,0,175.5,250);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ18_1();
	this.instance.setTransform(105.9,123.2,0.609,0.609,0,0,0,48.5,48.5);

	// Слой 1
	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(2.1,183.9,1,1,0,0,0,86.1,124.4);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82.2,59.5,217.7,250);


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


(lib.копияСимвол26 = function(mode,startPosition,loop) {
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
	this.arow = new lib.копияsprite1112();
	this.arow.setTransform(-46.7,12.2,0.586,0.814,-105);
	this.arow.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.arow).wait(40));

	// Слой 1
	this.instance = new lib.Символ56();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-0.1,regY:4.9,rotation:0.1,x:-0.1,y:4.9},0).wait(1).to({rotation:0.3},0).wait(1).to({rotation:0.8},0).wait(1).to({rotation:1.4,x:-0.2},0).wait(1).to({rotation:2.2,x:-0.3},0).wait(1).to({rotation:3.1},0).wait(1).to({rotation:4.3,x:-0.4},0).wait(1).to({rotation:5.6,x:-0.5},0).wait(1).to({regX:0,regY:0,rotation:7,x:0,y:0},0).wait(1).to({regX:-0.1,regY:4.9,rotation:8.5,x:-0.8,y:4.9},0).wait(1).to({rotation:9.9,x:-0.9},0).wait(1).to({rotation:11.1,x:-1,y:4.8},0).wait(1).to({rotation:12.1,x:-1.1},0).wait(1).to({rotation:13,x:-1.2},0).wait(1).to({rotation:13.7},0).wait(1).to({rotation:14.3,x:-1.3},0).wait(1).to({rotation:14.7,y:4.7},0).wait(1).to({rotation:14.9},0).wait(1).to({regX:0,regY:0,rotation:15,x:0,y:0},0).wait(1).to({regX:-0.1,regY:4.9,rotation:14.9,x:-1.3,y:4.7},0).wait(1).to({rotation:14.7},0).wait(1).to({rotation:14.3,y:4.8},0).wait(1).to({rotation:13.8,x:-1.2},0).wait(1).to({rotation:13.1},0).wait(1).to({rotation:12.2,x:-1.1},0).wait(1).to({rotation:11.2,x:-1},0).wait(1).to({rotation:10.1,x:-0.9},0).wait(1).to({rotation:8.8,x:-0.8,y:4.9},0).wait(1).to({regX:0,regY:0,rotation:7.3,x:0,y:0},0).wait(1).to({regX:-0.1,regY:4.9,rotation:5.9,x:-0.6,y:4.9},0).wait(1).to({rotation:4.7,x:-0.5},0).wait(1).to({rotation:3.6,x:-0.4},0).wait(1).to({rotation:2.6,x:-0.3},0).wait(1).to({rotation:1.8,x:-0.2},0).wait(1).to({rotation:1.2},0).wait(1).to({rotation:0.7,x:-0.1},0).wait(1).to({rotation:0.3},0).wait(1).to({rotation:0.1},0).wait(1).to({regX:0,regY:0,rotation:0,x:0,y:0},0).wait(1));

	// Слой 12
	this.instance_1 = new lib.копияСимвол4();
	this.instance_1.setTransform(-12.3,53.3,0.714,0.714);
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.7,-106.6,223,223);


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


(lib.копияСимвол6 = function(mode,startPosition,loop) {
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
	this.instance = new lib.копияСимвол26();
	this.instance.setTransform(-3.5,5.3,0.58,0.58,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:10.4,regY:3.5,scaleX:0.58,scaleY:0.58,x:0,y:0},0).wait(1).to({scaleX:0.57,scaleY:0.57},0).wait(1).to({scaleX:0.57,scaleY:0.57,y:0.1},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:-0.1,y:0.2},0).wait(1).to({scaleX:0.55,scaleY:0.55,y:0.3},0).wait(1).to({regX:0,regY:0,scaleX:0.54,scaleY:0.54,x:-3.5,y:5.4},0).wait(1).to({regX:10.4,regY:3.5,scaleX:0.52,scaleY:0.52,x:-0.3,y:0.5},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:-0.4,y:0.7},0).wait(1).to({scaleX:0.5,scaleY:0.5,y:0.8},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:-0.5},0).wait(1).to({scaleX:0.49,scaleY:0.49,y:0.9},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:-0.6,y:1},0).wait(1).to({scaleX:0.48,scaleY:0.48},0).wait(1).to({regX:0,regY:0,scaleX:0.48,scaleY:0.48,x:-3.5,y:5.3},0).wait(1).to({regX:10.4,regY:3.5,scaleX:0.48,scaleY:0.48,x:-0.6,y:1},0).wait(1).to({scaleX:0.48,scaleY:0.48},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:-0.5,y:0.9},0).wait(1).to({scaleX:0.49,scaleY:0.49,y:0.8},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-0.4,y:0.7},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:-0.3,y:0.6},0).wait(1).to({regX:0,regY:0,scaleX:0.52,scaleY:0.52,x:-3.5,y:5.3},0).wait(1).to({regX:10.4,regY:3.5,scaleX:0.54,scaleY:0.54,x:-0.2,y:0.4},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:-0.1,y:0.3},0).wait(1).to({scaleX:0.56,scaleY:0.56,y:0.2},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:0,y:0.1},0).wait(1).to({scaleX:0.57,scaleY:0.57},0).wait(1).to({scaleX:0.58,scaleY:0.58,y:0},0).wait(1).to({scaleX:0.58,scaleY:0.58,y:0.1},0).wait(1).to({regX:0,regY:0,scaleX:0.58,scaleY:0.58,x:-3.5,y:5.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.8,-82.9,168,168);


(lib.Символ17копия = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ2();
	this.instance.setTransform(63.4,142.7,1,1,5.7,0,0,91,125);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ17 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ2();
	this.instance.setTransform(63.4,142.7,1,1,5.7,0,0,91,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.4,68.5,238.1,255.4);


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


(lib.копияСимвол7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.копияСимвол6();
	this.instance.setTransform(-25.3,-24.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-108.2,-107.5,169,169);


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


(lib.копияСимвол8 = function(mode,startPosition,loop) {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50));

	// Слой 1
	this.instance = new lib.копияСимвол7();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:84.3},12,cjs.Ease.get(-1)).to({x:168.6},12,cjs.Ease.get(1)).to({x:87.7},12,cjs.Ease.get(-1)).to({x:0},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.2,-107.5,169,169);


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


(lib.копияСимвол54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.копияСимвол8();
	this.instance.setTransform(28.9,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-47.6,y:1014.3},49).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.3,-81.5,169,169);


// stage content:



(lib.dollars_600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		
		stage.canvas.style.cursor = "none";
		this.pricel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_4.bind(this));
		
		function fl_CustomMouseCursor_4() {
			this.pricel.x = stage.mouseX;
			this.pricel.y = stage.mouseY;
		}
		
		
		this.button_4.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
		var _this = this;
		
		
		
		
		
		this.button_4.addEventListener("mouseover", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			  _this.pricel.gotoAndStop(1);
		    _this.gun.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 9
	this.button_4 = new lib.Символ18();
	this.button_4.setTransform(300,150.1,0.912,0.917,0,0,0,329.1,163.6);
	new cjs.ButtonHelper(this.button_4, 0, 1, 2, false, new lib.Символ18(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_4).wait(1));

	// Слой 8
	this.instance = new lib.Символ15();
	this.instance.setTransform(134.4,15.1,0.597,0.597,0,0,0,203.6,16.4);

	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(427.7,266.8,0.619,0.619,0,0,0,257.4,36.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 5
	this.instance_2 = new lib.копияСимвол54копия();
	this.instance_2.setTransform(448.7,-86.3,0.434,0.434,25.4,0,0,-0.1,0.1);

	this.instance_3 = new lib.копияСимвол54копия();
	this.instance_3.setTransform(206.7,-93,0.67,0.67,25.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Слой 6
	this.instance_4 = new lib.копияСимвол54копия2();
	this.instance_4.setTransform(666.6,-7.1,0.67,0.67,25.4);

	this.instance_5 = new lib.копияСимвол54копия2();
	this.instance_5.setTransform(108.6,-115,0.482,0.482,25.4);

	this.instance_6 = new lib.копияСимвол54копия2();
	this.instance_6.setTransform(476.6,-108.1,0.67,0.67,25.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Слой 4
	this.instance_7 = new lib.копияСимвол54();
	this.instance_7.setTransform(528.7,-133.2,0.67,0.67,25.4);

	this.instance_8 = new lib.копияСимвол54();
	this.instance_8.setTransform(409.2,-118,0.67,0.67,25.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(1));

	// Слой 1
	this.gun = new lib.Символ17();
	this.gun.setTransform(417.8,114.9,1,1,0,0,0,98.1,132.3);

	this.pricel = new lib.Символ17копия();
	this.pricel.setTransform(314.8,153.1,1,1,0,0,0,98.1,132.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pricel},{t:this.gun}]}).wait(1));

	// cloud
	this.instance_9 = new lib.Символ5();
	this.instance_9.setTransform(590.5,-90.6,1,1,0,0,0,561.5,376.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 3
	this.instance_10 = new lib.Символ3();
	this.instance_10.setTransform(321.5,152,1,1,0,0,0,322.5,157);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(297.6,-366.2,1154.5,825.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;