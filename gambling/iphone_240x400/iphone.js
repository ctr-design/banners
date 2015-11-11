(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/logo.png", id:"logo"},
		{src:"images/market.jpg", id:"market"},
		{src:"images/w2.png", id:"w2"},
		{src:"images/y6.png", id:"y6"}
	]
};



// symbols:



(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,20);


(lib.market = function() {
	this.initialize(img.market);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,666,80);


(lib.w2 = function() {
	this.initialize(img.w2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,164);


(lib.y6 = function() {
	this.initialize(img.y6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,159);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.y6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,114,159);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(113.1,38.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CC66").s().p("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");
	this.shape_1.setTransform(113.2,38);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,226.4,76);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.logo();
	this.instance.setTransform(-91,-10);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-91,-10,182,20);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.market();
	this.instance.setTransform(2.3,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AgCAEIgCgCIAAgEQAEgCAEADIABgBIAAACIAAADQAAABgFAAIgCAAg");
	this.shape.setTransform(91.2,30.3);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.3,0,666,80);


(lib.sprite117 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.w2();
	this.instance.setTransform(13.4,0,0.79,1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(13.4,0,72.7,164);


(lib.shape154 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,0,2).p("AhxENQEhjnhbk9");
	this.shape.setTransform(-39.7,61);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.2,31,26.2,59);


(lib.shape153 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,0,2).p("AjEDxQB2k7Ecib");
	this.shape.setTransform(31.9,-24.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(10.2,-49.4,44.3,51.2);


(lib.shape152 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,0,2).p("AiXitQHwAZlvFI");
	this.shape.setTransform(62.6,50.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(45.3,31,32.7,39.5);


(lib.shape150 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,0,2).p("ACUERQAQmBlEiP");
	this.shape.setTransform(-15.1,62.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.2,35,35.1,57);


(lib.shape149 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,0,2).p("AB7EFQjiingLly");
	this.shape.setTransform(63.3,-16.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(49.8,-46.6,27.9,57.9);


(lib.shape148 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,0,2).p("AAdjjQEmFYneBo");
	this.shape.setTransform(44.4,59.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(26.8,35,33.7,49);


(lib.shape146 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,0,2).p("ADuFGQiGn5liiF");
	this.shape.setTransform(-6.1,62.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.2,29,53,68);


(lib.shape145 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,0,2).p("ADBC9QkHhbhukq");
	this.shape.setTransform(69.8,-27.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(49.7,-49.4,41.5,43.2);


(lib.shape144 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,0,2).p("ACgiyQBuGLnUg+");
	this.shape.setTransform(31.2,48.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9.3,29,42.1,38.3);


(lib.shape136 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,0,2).p("AC3CvQEFmSrKBK");
	this.shape.setTransform(-4,48.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.2,29.9,56.5,38.2);


(lib.shape135 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,0,2).p("ADKC7QlTiAgzkD");
	this.shape.setTransform(70.5,-27);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(49.6,-49.1,43.2,42.9);


(lib.shape134 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,0,2).p("ADKkXQArFUnNDL");
	this.shape.setTransform(27.1,61);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.3,31,46.4,58.5);


(lib.shape132 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACTIdQhngsgghSQgehThQhtQhRhsiWgpQiVgogyg8QhBhVAIh0QAIiDBhhdQBUhPBqgMQF8hvCNEoIBgGHQAuC9BmA5QAWANAZAKQBjA+g0BsQgzBHhpAZQgrAEgnAAQhsAAhMggg");
	this.shape.setTransform(56.8,58.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,0.7,117.6,114.8);


(lib.shape130 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,0,2).p("AiSDjQIqjjobji");
	this.shape.setTransform(-17.9,59.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.6,35,32.2,49.5);


(lib.shape129 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,0,2).p("AAHEWQhLlGBgji");
	this.shape.setTransform(49,-17.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(44.3,-46.6,9.5,59.4);


(lib.shape128 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,0,2).p("ACEkcQCOFLnCDj");
	this.shape.setTransform(34,65.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(14.3,35,38.4,60);


(lib.shape126 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,0,2).p("AjEC+QFtgDAImL");
	this.shape.setTransform(-48.9,52);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.6,29,41.5,44);


(lib.shape125 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,0,2).p("AjDD7QB4mKEchd");
	this.shape.setTransform(30.9,-23.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9.2,-49.6,44.6,52.9);


(lib.shape124 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,0,2).p("AhalGQCUDuAeGp");
	this.shape.setTransform(56.5,63.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(45.3,29,22,70.5);


(lib.shape118 = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AjTAkQA2gsBJgaIAMAOQhMAJg9A9gAA4ggIAPgRQBNANBAAlIgDATQg2g0hjAAg");
	this.shape.setTransform(19,-6.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjdgQIBagnIAvA5QhJAag2AugABIgLIA5g+IBdAaIgKBWQhAgnhMgLg");
	this.shape_1.setTransform(19,-10.1);

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AizBHQgbgbAAgmQAAgkAbgbQAbgbAnAAQAlAAAcAbQAbAbAAAkQAAAmgbAbQgcAbglAAQgnAAgbgbgAikgrQgWAVABAcQgBAeAWAVQAUAVAfAAQAeAAAUgVQAWgVAAgeQAAgcgWgVQgUgVgeAAQgfAAgUAVgABDApQgZgYAAggQAAgiAZgYQAYgYAhAAQAiAAAZAYQAXAYAAAiQAAAggXAYIAAABQgZAXgiAAQghAAgYgYgABQg7QgSASAAAaQAAAYASASQATASAZAAQAaAAASgSQASgSAAgYQAAgagSgSIAAABQgSgTgaAAQgZAAgTASg");
	this.shape_2.setTransform(18.8,-2.9);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,0,0,3).p("AhpAQQBpguBsAY");
	this.shape_3.setTransform(21.5,9.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AhjASQgBgDABgDQgFgTBogQQBkgCABAQQgDAJgJADIhFAAQgyAGgwAOIgJABQgKAAgCgGg");
	this.shape_4.setTransform(22.1,11.4);

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AiJAbQgKgJABgOQgBgLAKgJQAJgJANAAQANAAAKAJQAJAJAAALQAAAOgJAJQgKAJgNAAQgNAAgJgJgABlAKQgIgIAAgKQAAgLAIgIQAHgIANAAQALAAAIAIQAHAIABALQgBAKgHAIQgIAIgLAAQgNAAgHgIg");
	this.shape_5.setTransform(22.4,-3.3);

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFFFFF","#D29E9C"],[0.31,0.89],0.8,-0.2,0,0.8,-0.2,8.7).s().p("AgsAtQgSgTAAgaQAAgZASgTQAUgSAYAAQAaAAATASQASATABAZQgBAagSATQgTASgaAAQgYAAgUgSg");
	this.shape_6.setTransform(31.3,-4.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFFFFF","#CB9996"],[0.31,0.867],2.1,-0.2,0,2.1,-0.2,10.5).s().p("AgzA0QgWgWAAgeQAAgdAWgWQAWgWAdAAQAeAAAVAWQAXAWAAAdQAAAegXAWQgVAWgegBQgdABgWgWg");
	this.shape_7.setTransform(7.1,-2.5);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.3,-17.5,44.6,31.5);


(lib.shape113 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjuEDQh1hHARiaIAThGIADgVQgFhhgpg7QABhfBSApQA2AkAbBAIAJAVQAOAOAgAOIA0ADQArgCA5gPIAAgBICrhpQAwgkAgAeQAOAegsAoIiVB+IgFAEIgJAIQgIAaAVAIIAAAAIDShLIAggCQAVACAQANQAEALgBAKQgCAWgeAVIjUBcIgHAEIgKAFQgGAPASAPIAFAEICngFQAsgHAPAeQAPAsgxASIiyAVIgvAIQiGAkhWAAQhCAAglgVg");
	this.shape.setTransform(27,-17);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.3,-45,72.6,56.2);


(lib.shape110 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AFLFhQmahbjPApQjPAphHgDQhHgDhMhMQhMhMAAhsQAAhWAzhDIBPhqQAlgxArgtQAtguA8gXQCDgtC4AxQD4BjD1CsIAjAZQA0AoA5AeQBTAvBdAUIBAANQBKAQgHBOQghBdh2AyQhSAYhXAAQhCAAhGgOg");
	this.shape.setTransform(78.9,36.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,157.7,73.5);


(lib.shape108 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424C64").s().p("Au1C1IFhkuICLifQCxlGGsA2QgPA8AOAuIGtA3IACgBIF0A+QhRMfquBSQhoAKhfAAQpIAAldl8g");
	this.shape.setTransform(-194,241.2);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(170,135,101,0.502)").s().p("AtAEvIg5gwQgrgoAAgRQAAgbAzAwIA/A+IBYA8IAHAFIgEACQgQAGgJAHgANkh3IAEgvQABgOAJgKIAGg+QADggAKgnQADgTAMgSIAOACIADgBIAAAHQAAANgNBSQgLBRgDBRIgDAAQgXAHgOAIQADgXgBgQg");
	this.shape_1.setTransform(-191.1,245.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-289.1,185.1,191.4,112.3);


(lib.shape107 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BD9C7E").s().p("AioDfQjbiSjuhhIhagkIBagmIAHgEQBJgeCAACIBzAAQBrABBogVIB2gdIAogNQBiggBagzQBcg1BrADIBlAIIADAAQAsAIArAMIADACQAeAMAeAPQAEAQACAQQAXDCkRCtIgFAEIgUAMIgCABIgiATIAABKIguAWQhyA3hxAAQiVAAiVhjg");
	this.shape.setTransform(-144.9,84);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BD9C7E").s().p("AjgDUQj3hXkQg0IhogSIBtgmIAIgCQBYgcCXgMICHgLQB9gJB8gaICOghIAwgOQB2giBtguQBwgxB+gIIB2gEIAEAAIBkAHIAEAAIBEAPQAEAMABALQAOCPlPCbIgGAEIgYALIgCABIgqASIgGA3Ig3AVQivBCilAAQiMAAiHgwg");
	this.shape_1.setTransform(-145.5,94.9);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE3A3").s().p("AipB2Qh4grhogEQhngEhVgBQBRgPBJAEQCTAGBtAZQB4AbCOgeQB7gbBVg1IChhfIBXgzIAjBDIkqCgQg8AchpATQhGANg8AAQhXAAhHgag");
	this.shape_2.setTransform(-152.4,64.7);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F3748").s().p("AvAAsIUlEOQlJCgkLAAQm6AAkXmugAOunZQB2KPplB/g");
	this.shape_3.setTransform(-192.7,255.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-288.8,50.3,228.2,252.5);


(lib.shape106 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424C64").s().p("AumE8IERnPQCbmNHnBSIgDAfQBEAFCJAYQClAdChAkIBDARQC9AzCpBAQj2IVoqB3QjTAei2AAQmlAAj+ihg");
	this.shape.setTransform(-178.3,260.2);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(170,135,101,0.502)").s().p("ArlExQiIhFgmgiQgUgOAAgGQAAgPAJgBQAHgJAXASIANALIAhAcQBpAyAeAGIArAMIA0ALIA0AEIgRANIg/AogAJgBDIBLhMQBXhZAng2QAWgeArhRQAMgWAMgiQAHgQAKgOIAVAFQgDAihtC0QgXAkg/BHQgRAUgpAiIgiAYIgiAWQgEgDAAgHg");
	this.shape_1.setTransform(-177.6,274.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-271.8,212.5,187.9,97);


(lib.shape105 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424C64").s().p("Ap3IHQAXjAhOmwQgQl7G2gmQgCAoALAhIDbAaQB8AQBuAiIHqD3Qi/HWofB5Qm/A6hqAAQgdAAgDgEg");
	this.shape.setTransform(-155.6,274.2);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(170,135,101,0.502)").s().p("ApZFOIgFgNIgCgGQANgPBHgNIBfgNIBggRIBPACQAAAOhGAMIhgANIixAkgAGPgwQBDhUAXghIBLh6QAthHAAAlQhiCtg+BaQgcAWggAcQgXAOgWASQABgGA2hCg");
	this.shape_1.setTransform(-146.7,295.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-224.4,221.9,138.7,106.9);


(lib.shape104 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424C64").s().p("ArBGGQCPkKgPkGQg5lXGFg+QAEAoAPAgIADABQBLAICCAgQBZAZBSAkIAAAAIIpFiQiIGfoZB7QiUAVh7AAQlKAAiJiag");
	this.shape.setTransform(-159.2,284.3);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(170,135,101,0.502)").s().p("AjDDaQARgLAcgMQABgMArgTIgBgFQAAgFAmgaIAqgbIAlgoIAMgIQA9hEAfgxQAYgmAVg4QAMgkAAgLIABgPIALAKIANAOQgEBEhdCCQhFBiggAaIgBAAIAOgFIgBABIggAQIh/A6IgpAZg");
	this.shape_1.setTransform(-107.9,304.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-229.8,229.9,141.6,108.9);


(lib.shape103 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BD9475","#FFE3A3"],[0,1],-57.6,-17.4,62.4,-23).s().p("AGdBmIiYg+QiNg3hyggQlzhmj0CMQAkgpBxgmQBxgmCpATQCpARByAkQAnAMCLAyQBfAjA6AJQBPAMBMgWIATAzIg3AQQgbAFgcAAQgrAAgsgMg");
	this.shape.setTransform(-158.9,105.6);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#BD9475","#FFE3A3"],[0,1],-64.4,-26.1,69.8,-26.1).s().p("AHOCTIiqhWQiehQh/guQmfiYkRCjQAogyB/gpQB+gpC9AhQC9AgB/A0QAsASCbBIQBrAyBAAOQBZAVBVgYIAVBBIg+ASQgWAEgWAAQg5AAg5gWg");
	this.shape_1.setTransform(-171.9,103.3);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFEBBF","#FFE3A3","#FFE3A3","#FFF0D0","#FFE3A3"],[0.059,0.231,0.42,0.537,0.765],17.2,-27.1,0,17.2,-27.1,131.6).s().p("AHtEPQAtg/AXhLQAchdgngWQgbgQh8ADQg3AChFgVQgugOhegpQjohmiggoQjSgzjhAvQhIAPg2ATQAqgpA/gaQCHg4DlAKIBkANIA8AKQCFAbCFAUIDIAHIBKgGIBUgIIBUgCIB1AHIBlARIAEABQAjALAiAPQAFASACARQAcDPk+DMIgHAEIgZAQIgVAMg");
	this.shape_2.setTransform(-156.2,111.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFE3A3","#F0BC97"],[0,1],4.8,-31.1,-8.5,19).s().p("AguB9QjbkWk/hWQg4gQg8gJIALgKQA2gUBIgPQDhgvDSA0QCeAnDqBmQBeApAuAPQBFAWA3gBQB8gDAbAQQAnAWgcBaQgXBLgtBAIgTAZIgTAKIAABQIg8AdQg9AKg6AAQkLAAi4jPg");
	this.shape_3.setTransform(-169.1,120.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-240.1,81.5,166,72.3);


(lib.shape102 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424C64").s().p("AsDFRQCnhwBsktQAynUFegZQAIC9DDA4QEnECFyBOQiSGwnUBxQhhANhcAAQmQAAlUjpg");
	this.shape.setTransform(-170.6,268.1);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(170,135,101,0.502)").s().p("Ai/BwIgCgIQAAgCAOgFQAAgKALAAQAHAAADADIAYgGQBAgQA3gYIAAgEQAlgiAngZIAZgQIAHgJQANgRAkggIAfgYIAPATIAGAHIgdASIgpAmIAKAUQgZAWhTAsQh8BChJAAQgQAAgEgFg");
	this.shape_1.setTransform(-127.3,309.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-247.8,211.1,154.5,114);


(lib.shape101 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424C64").s().p("AsvC6QETAyBYj3QAKgugKg0IAAgDIgFgaQgom1HtgKQAsCsCyB1QDrEDFrBiQjBG0n0BWQgtADgsAAQpHAAkKmQg");
	this.shape.setTransform(-177.2,250.5);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(170,135,101,0.502)").s().p("AlOCkIgXgkIgSgaQAFgDAKgBIAqADIATAEIANADQAFAAAMgJQALgKANABIAPgBQADgMAOgFQAQgGALAOQAEAEACAHQAIgEAFACIBNgCIAIgBIgDgIQAAgHAbgVQAagWAAAZIgBAFIAGgGQAHgHAFAAIAGBNQggALg4ALQhyAZg2AAgABaBEQglgRgVgBIACgCQAPgKAYgJIAdgUQAagOAQgBQALABB0hWIAxgiIgJgTQAAgMAWgLIAEgBIATAhIACAEIACAEIACADIAOAUIhdBLQhuBSg/AYg");
	this.shape_1.setTransform(-148.1,298.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-258.9,191.9,163.3,123.4);


(lib.shape100 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424C64").s().p("AuRBYQEHAjC+kLIA9iJIABgFQBvlAGLASQACDBDkAoIB4BAQDeB5DqAQQjoKyqGA2IgFAAQqoAAkIn2g");
	this.shape.setTransform(-188.4,242.8);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(170,135,101,0.502)").s().p("Ao/FFQh3gggTgcIAJgSQAPgkAAgOIAAAAIAFgPIAiAHIBsAhIBRASQA+ARAAAKQAAAFgGAHIACAAIgEAJQgcAcgaAjgAIzgwIgpgEIAlg/IA4haIAYgrQAOgaACgRQABgQATgiIAGgJIAOAKIATASQgNA/gmBlQgdBNgWApg");
	this.shape_1.setTransform(-170.7,271.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-279.8,183.8,182.9,123.1);


(lib.shape99 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BD9475","#FFE3A3"],[0,1],-62,1.8,58,-3.8).s().p("ApoA0QBAAVB7ALQD1AZDUheQDahfDGgZIBzgIIAoACIASAsIhYACQhpAGhaAUQgxALiXAwQiRAwhdAUQh6AahqAAQihAAh7g+g");
	this.shape.setTransform(-154.4,86.3);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#BD9475","#FFE3A3"],[0,1],-69.4,-2.1,64.8,-2.1).s().p("AqxAVQBIAfCJAWQESAuDuhrQDzhrDdgUQBGgHA7AEIAtAEIAUA5IhigDQh2AChlAUQg2ALipA0QiiA0hpAUQhtAVhiAAQjSAAibhig");
	this.shape_1.setTransform(-166.8,79.3);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFEBBF","#FFE3A3","#FFE3A3","#FFF0D0","#FFE3A3"],[0.059,0.231,0.42,0.537,0.765],14.7,12.9,0,14.7,12.9,131.6).s().p("AImCaQArhcgbg6QgOgdg0gQQg3gQhVAHQjMAQkQCHQj6B9kXhBQhpgYhMglIBYAJQExAXDJiBQCGhVBdgxQBpg5BzgkIA3gRIB4gXIDfgIQBNAJBMAbQAaAJAaALQAFASACARQAbDPk+DMIgGAEIhBAnQAvgfAohYg");
	this.shape_2.setTransform(-153.7,71.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFE3A3","#F0BC97"],[0,1],7.5,-35.3,-4.8,10.6).s().p("AFnDWIjKgOIhMgLICegIQhTgFh0AAQnTA7i3igQhAg3gdhQIAEgCQBNAmBoAYQEYA+D3h6QETiJDLgRQBVgGA4AQQAzAPAPAgQAaA6gqBbQgpBWgvAfIAABQIgIAEQgdAMglAFIgJABQgqAGgqAAQggAAgggDg");
	this.shape_3.setTransform(-166.4,87.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE3A3").s().p("AgBAAIADAAIgCABg");
	this.shape_4.setTransform(-236.7,81.1);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-237,43.8,166.1,65.4);


(lib.shape98 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BD9C7E").s().p("ADKElIitgVIhAgOQA/AEBHgEIipgNQmTAjieibQg3g2gZhLIgBgCIAFACIBMAKQEGAiCthuQBzhKBPgpQBagwBkgdIAvgNQAzgLA0gGQBggLBfAOQBDAKBBAdQAWAJAXAMQAEAQABAQQAYDCkRCsIgGAFIg4AhIAABJIgHADQgYALggACIgIABg");
	this.shape.setTransform(-144.3,76.6);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BD9C7E").s().p("Ar3C1Qg9gjgXg3IgBgBIAFAAIBZACQExAADThiQCNhDBfgmQBwgtB2gfIA5gPIB7gWQBxgRBwgBQBNADBKAOIAzAMQAEAMABAMQAOCOlOCbIgHADIhEAfIgFA3IgJADQgeAKglAFIgKACIiVAJIjLABIhJgEICdgOIjGAIQi7AaiMAAQjaAAhqg+g");
	this.shape_1.setTransform(-144.4,89.5);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE3A3").s().p("ApGAxQA9AcBzASQDoAlDJh0QDNhzC8gcIBsgHIAnACIAQA5IhTAAQhjAGhVAYQgvANiOA5QiKA6hXAYQhsAchdAAQiiAAh5hWg");
	this.shape_2.setTransform(-151.9,61.3);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F3748").s().p("AuRh3IQuG8Qi7AmidAAQozAAijnigAEdEDIJ1ptQgyJuoeAAIglgBg");
	this.shape_3.setTransform(-188.4,263.7);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-279.8,46.8,220,253.3);


(lib.shape97 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424C64").s().p("AuWAXQEngIEHkxQBPhdAPgbQDmjHDfAuQgFC0CDBBIAJABIAHABIACABIAVAAIAZgHIAKgCIC2hPIFeB9QjOM4pjAYQgrACgqAAQq1AAjyolg");
	this.shape.setTransform(-196.1,234.8);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(170,135,101,0.502)").s().p("AsNE5QgwgtgmgsIgNgRIAogkIANgMIABAAQAJAAAZAZIAhAgIAlAWQAVAJANANIA8A2QAPAPAJAMIgxATIg4AQgALpg/IAIgnQAEgTANgIIAGgCIAEgSQACgRAIgRQAGgPAJABIAZhmQAPgxAQgbIAUAFIgXBTQgdBfgHAiIgRB3IgLABQgjADgVAIg");
	this.shape_1.setTransform(-190.8,244.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-288.1,177.5,185.5,114.6);


(lib.shape96 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BD9C7E").s().p("ADPEvIh2gHIgxgFIgZgGIAAgBIAYgCIAegIIAggMIi8AMQiuAhjDhWQhbguhJhGQg5g3guhCIgCgEIAFABIBkAPQDOASC5g/QDOhtDrhZIAAAAQCXg/CkAHQBgAKBgAyIAFAhQAYDCkRCsIgGAEIgVANIgjAUIAABJIghARIgRAIIgzANIhOABg");
	this.shape.setTransform(-145.4,74.5);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BD9C7E").s().p("AoyDpQhngahQgtQhAgkgxgvIgCgCIAGAAIB1ABQDwgEDfhDQD5hjEchaIABgBQC2g+DAgKQBwgBBtAbQAEAMABAMQANCPlOCcIgGADIgaALIgrATIgFA3IgpAPIgUAIIg9APIhbAIIggACIiLAGIg5AAIgbgBIAAgBIAagEIAkgJIAmgMQhpAJh1ASQhjAUhoAAQhwAAh0gXg");
	this.shape_1.setTransform(-145.5,88.4);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE3A3").s().p("Ao2ArQBHApBoAZQDSA0CphKQBSgkBfgzICOhSQCShQBoALIAKBNIgxgDQhAABhIAcIiJBGQh5BAhmAfQh1AkhuAAQjCAAinhug");
	this.shape_2.setTransform(-153.9,59);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F3748").s().p("AuKiYISBITQjfA7i0AAQpBAAitpOgAOGm1QA+KmpdA3g");
	this.shape_3.setTransform(-197.3,252.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-288.1,43.6,228.7,252.7);


(lib.shape95 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424C64").s().p("AuRgiQDRgcDQh/QBpg+BRhZQCoi6D3gaIB+gKQAmBjCABtQAdAMAOABIAZAAIALgCIAPgCQBUggCUgtIC/A3QgSLzqQChQhbAOhXAAQo6AAmVpVg");
	this.shape.setTransform(-201.9,232.9);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(170,135,101,0.502)").s().p("ArNFcIhLhLIg/hGIgeglIAlgdIAYgNIAhAhIAjAiIBHBEQA3A3ADAKIhWAbgAMuAIIACgPQADgQAPAGIgChcIACgSIAAgDQgBgaACgRQAFgaAMAKIAChSQAFghAAgRQAAgYAOgFQAOgEAAAVIgGA3QgEA3AAA1QAABQAJBUIAAAFIgKABQgiAGgbALg");
	this.shape_1.setTransform(-198.7,231.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-293.3,176.6,183.4,112.7);


(lib.shape94 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424C64").s().p("Au3C1QCDhSCWiHIA6hDQApgtAXgQIBPhgQBIiPB0hKQCohsEEAhQgKApADAiQAIByCVAoIABAAIA9gGIEdhdIE0BVQhUMmquBSQhoAKhfAAQpIAAlel8g");
	this.shape.setTransform(-193.6,241.7);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(170,135,101,0.502)").s().p("AtKE5Ig+hEQgrgxABgDIAAgCIgCgCIAPgPQAKAGAPAPIBMBPIADADQAKgEAZARQAVAOAgAZIAWAMIgCABQgiAOgcAQgANphvQAGgUAAgbQACgeALAMIAGAGIADglIALhaQABgVAFgYQAEgSAMgLQAHAGAIADIAAADIgKA+IgNBRIgKCPIAAABQgfAHgWAIQADgdAHgZg");
	this.shape_1.setTransform(-191.9,245.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-288.8,185.6,191.9,112.3);


(lib.shape93 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BD9475","#FFE3A3"],[0,1],-61.5,-0.6,58.5,-6.2).s().p("AizBlQh+gghvgCIjGAAQBVgNBNABQCbADBzARQCAAUCWgbQCCgXBbgsQBCgeBogvIBcgpIAkAzQkiB7gZAJQg/AXhvARQhRAMhFAAQhVAAhGgRg");
	this.shape.setTransform(-154.9,88.8);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#BD9475","#FFE3A3"],[0,1],-68.8,-6.2,65.4,-6.2).s().p("AjIBkQiOgwh7gIIjegMIC2gGQCtANCBAdQCOAgCogZQCSgVBlgyIC/hZIBmguIApBDQlFCKgcAKQhGAah8APQhCAHg8AAQh3AAhgggg");
	this.shape_1.setTransform(-167.4,83.4);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFEBBF","#FFE3A3","#FFE3A3","#FFF0D0","#FFE3A3"],[0.059,0.231,0.42,0.537,0.765],15.8,9.5,0,15.8,9.5,131.5).s().p("AI6BiQAqiiiFAlQgtANhOAmIh2A/QiEBBh9ATQi1AbjSg2QjEgziXgEQgsgBgfACIBpguIAIgDQBUglCWgEICFgFQB9gEB5gcQBGgRBEgVIAvgQQBxgpBpg8QBrg+B9gCQA6gCA7AFIAEABIBlARIAEABQAiALAjAPQAFASACARQAbDPk+DMIgGAEIgXAOIgCABQAmhIAXhXg");
	this.shape_2.setTransform(-154.8,74.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFE3A3","#F0BC97"],[0,1],1.1,-23.9,-3.8,19.1).s().p("AhGCaQj+iSkUhdQg0gSg1gRQAegCAsABQCXAEDEAzQDSA2C0gbQB+gTCEhBIB3g/QBNgoAugNQCEglgqCkQgWBXgmBGIgpAYIAABPIg1AbQiSBIiPAAQikAAifhdg");
	this.shape_3.setTransform(-167.4,95.7);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-238.1,48.8,166.6,71.7);


(lib.shape92 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BD9C7E").s().p("AioDfQjbiSjuhhIhagkIBagmIAHgEQBJgeCAACIBzAAQBrABBogVIB2gdIAogNQBiggBagzQBcg1BrADIBlAIIADAAQAsAIArAMIADACQAeAMAeAPQAEAQACAQQAXDCkRCtIgFAEIgUAMIgCABIgiATIAABKIguAWQhyA3hxAAQiVAAiVhjg");
	this.shape.setTransform(-144.9,84);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BD9C7E").s().p("AjgDUQj3hXkQg0IhogSIBtgmIAIgCQBYgcCXgMICHgLQB9gJB8gaICOghIAwgOQB2giBtguQBwgxB+gIIB2gEIAEAAIBkAHIAEAAIBEAPQAEAMABALQAOCPlPCbIgGAEIgYALIgCABIgqASIgGA3Ig3AVQivBCilAAQiMAAiHgwg");
	this.shape_1.setTransform(-145.5,94.9);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE3A3").s().p("AipB2Qh4grhogEQhngEhVgBQBRgPBJAEQCTAGBtAZQB4AbCOgeQB7gbBVg1IChhfIBXgzIAjBDIkqCgQg8AchpATQhGANg8AAQhXAAhHgag");
	this.shape_2.setTransform(-152.4,64.7);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F3748").s().p("AvBAlIUlEOQlaCukRAAQm4AAkCm8gAOtngQB9KfpsBvg");
	this.shape_3.setTransform(-192.6,256.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-288.8,50.3,228.2,253.9);


(lib.shape91 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424C64").s().p("AumE8IEknKQCImSHnBSQghCjDCBAIALACIA6gBIAQgDIEahkQDZAzDRBTQj7IYomByQjUAei1AAQmmAAj9ihg");
	this.shape.setTransform(-178.3,260.2);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(170,135,101,0.502)").s().p("AsLEdQiphQAAgiQABgbBSA1IAbASQATgCA5AaIBaAtIBVAYIgHAEIguAiQg5gVhSgogAIdB2IBdhUQBrhdA3hHQAUgZAZgnIAog9QAOgVASgqIANgbIAXAJQgLAlg1BVQgsBEgeAoIg8BIIgOAJQgqAdg8A3IhbBFQgDgEAAgGg");
	this.shape_1.setTransform(-177.3,274.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-272.2,212.5,189.8,96.9);


(lib.shape90 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BD9475","#FFE3A3"],[0,1],-59.8,-12.7,60.2,-18.3).s().p("AC5BZQikgIhnhEQhrhDiHgRQiCgQiOAzQAbgXBdgSQBdgTBhAKQBiAKA8AYQAfAMBFAiQA5AcAoAMQA7ASBEABQBvgBB4gqIBNgYQAlgKAZAEIAfArIgfgDQgvAEhPAgQhWAjh3AAIgygCg");
	this.shape.setTransform(-156.6,100.8);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#BD9475","#FFE3A3"],[0,1],-66.9,-19.3,67.3,-19.3).s().p("ADPCAQi4gVhyhbQh4hdiXgdQiSgcieA4QAegbBogSQBngSBuASQBsATBEAhIBwBBQBAAnAsARQBCAbBNAEQB8AHCGguIBVgdQAqgLAcAHIAiA7IgigFQg0AChZAkQhRAghsAAQguAAgygFg");
	this.shape_1.setTransform(-169.3,96.5);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFEBBF","#FFE3A3","#FFE3A3","#FFF0D0","#FFE3A3"],[0.059,0.231,0.42,0.537,0.765],15.6,-17.5,0,15.6,-17.5,131.6).s().p("AIgCFQAXhvg1giQg5gniPAzQiNAyiGgcQhwgWjZhsQiqhWjcARQhFAGg4AMQAjgcApgTQBYgtBygKIBwgGQB2AABuAoIArAQIAUAGQCkA3CughQB/gnCEgPQBJgEBJAGIAEABIBlAQIAEACQAiAKAjAQQAFASACARQAbDPk+DLIgGAFIgMAIIgBAAQAig8AQhLg");
	this.shape_2.setTransform(-154.6,101.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFE3A3","#F0BC97"],[0,1],4.1,-29.4,-8,16.6).s().p("AhIBFQijj1lphMIhXgQIALgJQA4gMBFgFQDcgRCqBVQDXBtByAXQCGAcCNgzQCPgzA5AnQA1AkgXBsQgQBLgiA8Ig0AfIAABPIg3AcQhHAKhAAAQk1AAiUjlg");
	this.shape_3.setTransform(-167.9,113.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-236.3,74.7,162.4,68.4);


(lib.shape89 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BD9C7E").s().p("AirBjQiMjpk2hVIhLgSIAKgIQAegZAjgQQBMglBigEQA0gDAsACQBlAFBfApIAkARIASAGQCMA5CWgXQBtgfBxgHIB+AIIADAAQAsAIArAMIAEABQAdALAeAQIAFAgQAYDAkRCvIgGAEIgKAGIAAAAIguAaIAABKIguAXQgrAFgnAAQkhAAiKjng");
	this.shape.setTransform(-145.3,104.7);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BD9C7E").s().p("AjfBkQiUiglmgiIhXgGIAMgHQAlgUArgQQBbgjB0gNIBxgKQB3gHBsAXIAqAIIAUAEQCiAcCygfQCCgiCGgRICTgHIAEAAIBkAHIAEABIBEAOQAEAMABAMQAOCPlOCaIgHAEIgNAGIAAAAIg3AYIgGA3Ig4AWQhqAPhaAAQkIAAh7iHg");
	this.shape_1.setTransform(-146.9,112.3);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE3A3").s().p("ACwB2QidgOhghXQhlhZiAgYQh7gXiGA9QAagcBXgVQBYgWBcAPQBbAPA7AfQAdAQBAAtQA2AkAnAQQA3AZBAABQBpADBygzQBAgbAIgCQAkgNAXAGIAdA4IgdgEQgsADhLAnQhNAohpAAQgcAAgegDg");
	this.shape_2.setTransform(-154,79.2);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F3748").s().p("AunB/ITFAjQnQDmktAAQlDAAiFkJgAOmmHQAPCni1D5ImhB4g");
	this.shape_3.setTransform(-178.2,279.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-271.8,67.1,206.7,251.3);


(lib.shape88 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424C64").s().p("Ap/IHQAhjUhYmcQgPl7G2gmQgJCsDbA1IAygHIAVgCIC1hDIH5DoQjPHlofB5Qm/A6hpAAQgeAAgDgEg");
	this.shape.setTransform(-154.8,274.2);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(170,135,101,0.502)").s().p("ApgFYIgCgJQgCgIgFgRIABgBIgBAAIgBgFIgHgVIAUAAICrgWIBDgQIAggEIAsgBQAMAAADAGIAAAGIgBAEIgCACIACAAIgHAkQgaANg1ANQguALhZANgAHoiOQArhDAVgrQAbg3AUgbIAJgJIARAKIh2DSQgiAbgpAog");
	this.shape_1.setTransform(-147.1,296);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-224.4,221.9,139.9,108.7);


(lib.shape87 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BD9475","#FFE3A3"],[0,1],-60.7,-14.6,59.3,-20.2).s().p("ACCA2IjohGQiPgrhegLQiBgPiQA2QBmgtBmgIQDKgRDDBLQDBBIDggQICIgSIAygMIAVA9IgyAMQhNAMiBADIgIAAQhcAAh/gig");
	this.shape.setTransform(-155.8,102.8);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#BD9475","#FFE3A3"],[0,1],-67.8,-22.2,66.4,-22.2).s().p("AGQCEQhrgEiUg0IkDhmQighAhpgUQiQgbiiA9QBzgzBygFQDigIDaBpQDYBoD7gHQBOgCBJgNIA4gMIAYBOIg5AMQg8AIhbAAIhOgBg");
	this.shape_1.setTransform(-168.4,99.4);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFEBBF","#FFE3A3","#FFE3A3","#FFF0D0","#FFE3A3"],[0.059,0.231,0.42,0.537,0.765],16.3,-22.1,0,16.3,-22.1,131.5).s().p("AH8EFQAyhSAThYQAVhbhEgTQgtgNhbAUQhdATiLgPQi9gZjAheQi1hZj5AVQhaAHhGARQArgYAsgSQEGhtEgBQQDkA+DbgaIAggHQBJgPBLgEIA3gBIB1AHIBlARIAEABQAjALAiAPQAFASACARQAcDPk+DMIgHAEIgMAIg");
	this.shape_2.setTransform(-155.3,106.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFE3A3","#F0BC97"],[0,1],9.2,-35.9,-11.1,12.5).s().p("AhJBTIgjgrQg9hMhLg+QimiFi/giIhkgMIAMgGQBHgRBagIQD5gUC1BZQC9BeDAAYQCLARBcgUQBbgVAtANQBEATgUBdQgUBWgyBTIgJAPIgIAFIgsAZIAABQIg4AcQg/ALg7AAQkLAAjDjmg");
	this.shape_3.setTransform(-167.3,117.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-237.6,78.5,163.4,70.3);


(lib.shape86 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BD9C7E").s().p("AigBqIgfgoQg0hJhBg9QiOiBilgnIhVgPIAKgGQAlgUAmgPQDihZD3BVQDEBDC8gPIAbgFQA/gMBBABIAvABIBlALQArAIArAMIAEABQAdALAeAQQAEAQACAQQAYDAkRCuIgGAFIgLAGIgHAFIgmAWIAABJIgwAXQgpAGgnAAQj1AAiwjog");
	this.shape.setTransform(-145.9,109);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BD9C7E").s().p("AjUBkIgggcQg4gzhIglQifhTi+gNIhkgDIANgFQAtgTAugPQEPhYEdAnQDiAfDegdIAhgHQBLgOBMgHIA3gDQA7gDA7ABIBkAGIAEABIBEAPQAEAMABAMQAOCOlPCcIgGADIgOAGQgEACgEACIguAUIgGA3QgdALgdAKQhZAQhRAAQjsAAioiHg");
	this.shape_1.setTransform(-147.9,116.2);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE3A3").s().p("AB7BIIjbhdQiHg6hZgRQh6gWiJBCQBhg3BggIQDAgQC4BiQC3BgDTgQQBDgEA9gQIAwgOIAUBNIgwAOQhIAOh6ABQhaAAh9gvg");
	this.shape_2.setTransform(-153.2,81.8);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F3748").s().p("AnHBUIOPjvQjeE3lRAAQiiAAi+hIg");
	this.shape_3.setTransform(-173.2,317.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-230.1,69.9,164.4,263.5);


(lib.shape85 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424C64").s().p("ArBGGQCPkKgPkGQg5lXGFg+QASCwDjAqIARgDIAYgBIALgCIAGgBIBdgmQEoCkEDC/QiIGfoZB7QiUAVh7AAQlKAAiJiag");
	this.shape.setTransform(-159.2,284.3);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(170,135,101,0.502)").s().p("AijDgIgbgKIgJgDQAMgPA6gkIBKgtIBBg5IAPgOIAGAKIAeguQA7hWASglQAag1AMg0IADgOQAIAJANAEIgJAhQgVBFgPAbQhHB8gjAvIACABIAGAIIgVAUIgqAjIghAYQg+AxgpATg");
	this.shape_1.setTransform(-109.1,305.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-229.8,229.9,141.3,108.9);


(lib.shape84 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BD9475","#FFE3A3"],[0,1],-57.6,-17.4,62.4,-23).s().p("AGdBmIiYg+QiNg3hyggQlzhmj0CMQAkgpBxgmQBxgmCpATQCpARByAkQAnAMCLAyQBfAjA6AJQBPAMBMgWIATAzIg3AQQgbAFgcAAQgrAAgsgMg");
	this.shape.setTransform(-158.9,105.6);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#BD9475","#FFE3A3"],[0,1],-64.4,-26.1,69.8,-26.1).s().p("AHOCTIiqhWQiehQh/guQmfiYkRCjQAogyB/gpQB+gpC9AhQC9AgB/A0QAsASCbBIQBrAyBAAOQBZAVBVgYIAVBBIg+ASQgWAEgWAAQg5AAg5gWg");
	this.shape_1.setTransform(-171.9,103.3);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFEBBF","#FFE3A3","#FFE3A3","#FFF0D0","#FFE3A3"],[0.059,0.231,0.42,0.537,0.765],19.2,-15.1,0,19.2,-15.1,101.3).s().p("AHtEPQAtg/AXhLQAchdgngWQgbgQh8ADQg3AChFgVQgugOhegpQjohmiggoQjSgzjhAvQhIAPg2ATQAqgpA/gaQCHg4DlAKIBkANIA8AKQCFAbCFAUIDIAHIBKgGIBUgIIBUgCIB1AHIBlARIAEABQAjALAiAPQAFASACARQAcDPk+DMIgHAEIgZAQIgVAMg");
	this.shape_2.setTransform(-156.2,111.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFE3A3","#F0BC97"],[0,1],4.8,-31.1,-8.5,19).s().p("AguB9QjbkWk/hWQg4gQg8gJIALgKQA2gUBIgPQDhgvDSA0QCeAnDqBmQBeApAuAPQBFAWA3gBQB8gDAbAQQAnAWgcBaQgXBLgtBAIgTAZIgTAKIAABQIg8AdQg9AKg6AAQkLAAi4jPg");
	this.shape_3.setTransform(-169.1,120.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-240.1,81.5,166,72.3);


(lib.shape83 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BD9C7E").s().p("AiSCKQi8kKkShcQgwgRgzgLIAJgIQAkglA2gVQB1gvDFAUIBVAQIA0ALQByAeByAYQBWAQBWAAIBAgDIBIgEIBIACIBlALQArAIArAMIAEABQAdAMAeAPQAEAQACAQQAYDAkRCvIgGAEIgWANIgSAKIgQAKIAABJIgzAZQgmAEglAAQj4AAiojSg");
	this.shape.setTransform(-146.6,112.6);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BD9C7E").s().p("AjDBzQjKi0k8grIh0gKIAMgIQAtgfBCgVQCMguDmgFIBjADIA9AEIEJATIDJgGIBLgIIBVgKIBVgGQA6gCA7ABIBlAHIAEAAQAiAGAiAJQAEAMAAALQAOCPlOCcIgHADIgaAMIgWAKIgUAIIgFA2Ig+AYQhbAOhSAAQjpAAich4g");
	this.shape_1.setTransform(-149.1,119.6);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE3A3").s().p("AGHCHIiQhQQiGhKhsgqQleiKjnCsQAigzBrgtQBrguCgAbQCgAaBrAvQAmARCCBCQBbAuA2ANQBLARBIgbIASBBIg0AUQgYAFgXAAQgrAAgsgSg");
	this.shape_2.setTransform(-156.2,85.5);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F3748").s().p("ArBBrIWDmWQg6H8oNgHQkcBijAAAQkNAAhTjBg");
	this.shape_3.setTransform(-159.2,312.6);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-232.1,70.2,166.1,272.5);


(lib.shape82 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424C64").s().p("AsNFFQC7hkBsktQAynTFegZQAIC8DDA5QEnECFyBNQiSGwnUBxQheAMhZAAQmXAAlnj0g");
	this.shape.setTransform(-171.6,268.1);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(170,135,101,0.502)").s().p("AheB4QgPgHgLgEIgGgEIA9gmIBIgxIgBgFIAeggIAmgvIAMgVIAVAbIANAWIgqA6QgdAdg8AvQgkAcgTANQgOgKgOgHgABuiCIAEgEQALgIABAVIgBADg");
	this.shape_1.setTransform(-117.7,303.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-249.8,211.1,156.5,114);


(lib.shape81 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BD9475","#FFE3A3"],[0,1],-57.5,-9.4,62.5,-15).s().p("AptBiIBggFQCHgYDBhfQDBhhFFAYQBnAIBnASIBTASIAMAyIhAgQQhRgThSgLQkGgkiuA2IlpBtQhtAdg+AAQgeAAgSgHg");
	this.shape.setTransform(-159,97.5);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#BD9475","#FFE3A3"],[0,1],-64.3,-14.1,69.9,-14.1).s().p("Aq3BkQAhAKBLgLQCXgXDYhtQDYhvFrAyQBzAQBzAdIBdAbIAOA+IhIgZQhbgahbgTQklg8jDA5ImUB1QhtAbhDAAQgrAAgagLg");
	this.shape_1.setTransform(-172,91.3);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFEBBF","#FFE3A3","#FFE3A3","#FFF0D0","#FFE3A3"],[0.059,0.231,0.42,0.537,0.765],18,-10.2,0,18,-10.2,131.6).s().p("AI8A6QgEhfhEgVQing3iCgMQkfgbklByQjQBOizAcIhIAJQBAgPBDgVQCtg2C7hmQE5ioFLANIAlgBIBQAAIAUACIBBAAIAVADIA+AAIAnAGQAQADAIAEQBBAJBAAYIAaAKIAaAKQAFASACARQAbDPk+DMIgGAEIgYAPIgMAHQBLhzgFhjg");
	this.shape_2.setTransform(-156.9,94.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFE3A3","#F0BC97"],[0,1],9.3,-38.1,-4.3,12.5).s().p("AGuDtQi8gBhfgaIgBgBIBOgCIlSgRQkfgDishxQhNg0g2hIIABAAIBHgJQCzgcDRhQQEihxEiAaQCBAMCoA3QBEAWAEBgQAEBhhLBzIgdARIAABPQgYANgaAIIgMgBIgPABg");
	this.shape_3.setTransform(-170.2,107.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-241.6,67,168.4,66.2);


(lib.shape80 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BD9C7E").s().p("AFhE0IgNAAIhUgZQiigJhRgcIgBgBIBDABQiBgUiigKQj2gOiUhwQhCgzgvhEIABAAIBwgbQCWgtCghWQENiPEcAbIAgAAIBFAEIARADIA4ACIASAEIA1ACIAiAHQANADAHAFQA4ALA3AYQALAEALAGIAWALQAFARACAQQAXDAkRCuIgGAEIgUAMIgKAHIgZAOIAABJQgVALgWAFg");
	this.shape.setTransform(-146.8,98.1);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BD9C7E").s().p("AESDcQi+AKhcgNIgBgBIBNgGQiXgDi9AJQkhAOilhGQhLgfgxgxIABAAICFgfQCzgwDDhOQFHiEFNgJIAlgDIBRgEIAUABIBBgEIAVABIA+gDIAoACIAXADQBBADA/ANIAZAGIAaAFQAEAMAAAMQAOCPlOCbIgHAEIgYALQgHACgGAEIgfANIgFA3Ig0AQIgMABIgPABg");
	this.shape_1.setTransform(-149,105.1);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE3A3").s().p("ApLB0QAbAJBAgOQB/gcC3h1QC3h2EzAlQBgANBiAZIBOAYIAMA9Ig9gUQhMgahOgPQj3gyilBAIlWCCQhjAig6AAQgeAAgTgJg");
	this.shape_2.setTransform(-156.3,74.7);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F3748").s().p("AsNgJIRcCKIG/nCQAPI0p4gUQjSBji1AAQlKAAjhlLg");
	this.shape_3.setTransform(-171.6,301.6);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-249.8,62.2,186,271.7);


(lib.shape79 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424C64").s().p("AsvC6QETAxBXj1QALg2gGgdIgJgtQgom1HtgKQAsCsCyB1QDrEDFrBiQjBG0n0BWQgtADgsAAQpHAAkKmQg");
	this.shape.setTransform(-177.2,250.5);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(170,135,101,0.502)").s().p("AknCfIgwgJIgCgBIgOgSQgNgdgFgLIgEgFIAUgBIAGgEQAFgCACAAQAqAQAfAAIAQgDQAIgDACgBIAHADIAHADIAGgDIAGgDQAHAAAEAEQAEAEAEAAQBJgTAUAAQAcgQAjgCIALABIAFAjIAGAfIADAYIABABIiFAIgABIA9QgqgQgVACQAGgLAegRQAigSAQAAIAvgcQAxgeANAAIALgHQAKgIAIAAQAOAAAhgaIAtgnQAIgIAVgNIAcAqIgpAwQg9A4hbA2QgpAZghAQg");
	this.shape_1.setTransform(-148.6,299.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-258.9,191.9,163.3,123.4);


(lib.shape78 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BD9475","#FFE3A3"],[0,1],-60.5,-0.4,59.5,-6).s().p("Am1B0QhhgIg5gtQAgAXBUAHQC/ASDnhvQDlhxDhgDICFALIAvALIALA4IglgNQgygOg+gDQjHgIj5BjQjmBeijAAIgngBg");
	this.shape.setTransform(-155.9,88.5);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#BD9475","#FFE3A3"],[0,1],-67.7,-4.2,66.5,-4.2).s().p("AnpB4QhsgPhAg9QAkAfBeAOQDVAhECh/QEBiBD8ALQBPADBFARIA1ARIAMBHIgpgSQg4gUhGgHQjegXkXBvQjsBhitAAQgnAAgjgFg");
	this.shape_1.setTransform(-168.5,81.4);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFEBBF","#FFE3A3","#FFE3A3","#FFF0D0","#FFE3A3"],[0.059,0.231,0.42,0.537,0.765],14.7,7.1,0,14.7,7.1,131.6).s().p("AIwCeQBAifhfgbQkJhMj/BBQhdAXhyAvIi7BUQiXBDjDg/Qg1gSgtgVQAvANAsAHQCRATB/g9QCshRByg8QBzg8CSgoQCTgoBqgTQBqgTBoAAQBzAABtAnQAaAJAaAMQAFARACASQAcDPk+DLIgHAFIgVANQAgg3ATgxg");
	this.shape_2.setTransform(-153.7,76.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFE3A3","#F0BC97"],[0,1],8.4,-39.4,-4.5,8.5).s().p("AGWDTIgGgDIgPgCIiNgVIhmgFIgxAAIABgCIB6gVIhFgGIgygBIjyANQh4AGiIgZQiJgZg7grIgMgJQgygngUgmIgihJIANAEQAsAVA2ASQDDA9CWhBIC8hUQBwgxBegXQEAhBEJBMQBeAbg/ChQgUAvggA3IgEACIgnAXIAABQQgeAPgfAIIgBAAQgKACgNAAQgnAAhAgUg");
	this.shape_3.setTransform(-166.5,93);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-238,50.6,167.3,65.6);


(lib.shape77 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BD9C7E").s().p("AD0ETIgFgCIgNgEIh5gZIhYgIIgngDIAAgBIBngOIg7gJIgqgDIjRADQhnAAh1gdQh1gdg0gqIgKgIQgrgngRglIgdhDIALADQAoAPAmAIQB8AWBtgyQCUhFBigzQBjgyB9gfQB/gfBbgNIC0gIQBjAFBeAoIAtAVIAFAhQAYDCkRCsIgGAEIgSAMIgEABIgiAUIAABJQgZANgaAGIgCAAIgNABQgjAAg8gXg");
	this.shape.setTransform(-144.6,83.4);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BD9C7E").s().p("AEEDfIgGgCIgPAAIiOgHQgvgBg0ACIgyADIABgBIB6gVQgigBgjABIgwABIj3AWQh6AKiHgKQiIgLg5gZIgLgGQgwgZgRgaIgegxIANADIBaAIQCQAGCFgxIEqhwQB3gvCWgjQCXgjBsgTQBsgTBpgFQB0gGBsAVIAzALQADAMABANQAOCOlOCbIgHADIgWALIgFACIgpASIgFA3QgfAMggAHIgBAAg");
	this.shape_1.setTransform(-145.2,93.2);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE3A3").s().p("AmdCJQhcgMg2g6QAfAeBPAKQC1AaDaiIQDYiKDVACQBDABA7APIAtAOIAKBHIgjgRQgvgSg7gEQi8gQjsB5QjTBwiYAAQgXAAgWgDg");
	this.shape_2.setTransform(-153.4,63.9);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F3748").s().p("AsviXIM1EqIEVAlQj9BdjKAAQm2AAjNmsgAEvCpIIBm9QgiG9nHAAIgYAAg");
	this.shape_3.setTransform(-177.2,284.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-258.9,49.9,198.7,262.3);


(lib.shape76 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424C64").s().p("At4BYQEcAmDElBQBTmFGpAMQAHDCC7A6IBzA8QDiBxD+ACQjiKbp0AzIgEAAQqXAAkAnlg");
	this.shape.setTransform(-188.4,240.5);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(170,135,101,0.502)").s().p("ApVETQhOghghgZIAAgBIAEgnIABABIAAgHQABgTAGgIQAJgLATAPIAOAQQAOABAWAGIBIAbQA3ANAqANQAiALASAKIgOATIgCACIgmApIgKANIAAAAIgBABIgBABQg3gNhPgigAn4EJIACgBIgLgDgAHhAhIAKgBIgGAEgAICgZIgkACQAPgaAmgwIANgPIAqhOQAkg9AOgFIAJgXIAQgqIASADIAEAEQANAKANAFQgHBNhbCSIgkA3g");
	this.shape_1.setTransform(-171.2,271.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-277.3,183.1,178,120.3);


(lib.shape75 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BD9475","#FFE3A3"],[0,1],-62,1.8,58,-3.8).s().p("ApoA0QBAAVB7ALQD1AZDUheQDahfDGgZIBzgIIAoACIASAsIhYACQhpAGhaAUQgxALiXAwQiRAwhdAUQh6AahqAAQihAAh7g+g");
	this.shape.setTransform(-154.4,86.3);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#BD9475","#FFE3A3"],[0,1],-69.4,-2.1,64.8,-2.1).s().p("AqxAVQBIAfCJAWQESAuDuhrQDzhrDdgUQBGgHA7AEIAtAEIAUA5IhigDQh2AChlAUQg2ALipA0QiiA0hpAUQhtAVhiAAQjSAAibhig");
	this.shape_1.setTransform(-166.8,79.3);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFEBBF","#FFE3A3","#FFE3A3","#FFF0D0","#FFE3A3"],[0.059,0.231,0.42,0.537,0.765],14.7,12.9,0,14.7,12.9,131.6).s().p("AImCaQArhcgbg6QgOgdg0gQQg3gQhVAHQjMAQkQCHQj6B9kXhBQhpgYhMglIBYAJQExAXDJiBQCGhVBdgxQBpg5BzgkIA3gRIB4gXIDfgIQBNAJBMAbQAaAJAaALQAFASACARQAbDPk+DMIgGAEIhBAnQAvgfAohYg");
	this.shape_2.setTransform(-153.7,71.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFE3A3","#F0BC97"],[0,1],7.5,-35.3,-4.8,10.6).s().p("AFnDWIjKgOIhMgLICegIQhTgFh0AAQnTA7i3igQhAg3gdhQIAEgCQBNAmBoAYQEYA+D3h6QETiJDLgRQBVgGA4AQQAzAPAPAgQAaA6gqBbQgpBWgvAfIAABQIgIAEQgdAMglAFIgJABQgqAGgqAAQggAAgggDg");
	this.shape_3.setTransform(-166.4,87.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE3A3").s().p("AgBAAIADAAIgCABg");
	this.shape_4.setTransform(-236.7,81.1);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-237,43.8,166.1,65.4);


(lib.shape74 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BD9C7E").s().p("ADKElIitgVIhAgOQA/AEBHgEIipgNQmTAjieibQg3g2gZhLIgBgCIAFACIBMAKQEGAiCthuQBzhKBPgpQBagwBkgdIAvgNQAzgLA0gGQBggLBfAOQBDAKBBAdQAWAJAXAMQAEAQABAQQAYDCkRCsIgGAFIg4AhIAABJIgHADQgYALggACIgIABg");
	this.shape.setTransform(-144.3,76.6);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BD9C7E").s().p("Ar3C1Qg9gjgXg3IgBgBIAFAAIBZACQExAADThiQCNhDBfgmQBwgtB2gfIA5gPIB7gWQBxgRBwgBQBNADBKAOIAzAMQAEAMABAMQAOCOlOCbIgHADIhEAfIgFA3IgJADQgeAKglAFIgKACIiVAJIjLABIhJgEICdgOIjGAIQi7AaiMAAQjaAAhqg+g");
	this.shape_1.setTransform(-144.4,89.5);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE3A3").s().p("ApGAxQA9AcBzASQDoAlDJh0QDNhzC8gcIBsgHIAnACIAQA5IhTAAQhjAGhVAYQgvANiOA5QiKA6hXAYQhsAchdAAQiiAAh5hWg");
	this.shape_2.setTransform(-151.9,61.3);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F3748").s().p("At4iGIQVHTQi2AliYAAQo3AAiQn4gAEdELIJcp8QgaJ8oeAAIgkAAg");
	this.shape_3.setTransform(-188.4,262.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-277.3,46.8,217.5,253.2);


(lib.shape73 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424C64").s().p("AuHAZQEcgLCsjFIDEjhQDljHDWAnQAIBiAfA+IAiAUIAMAJIAZAGIAIADICaAUQDhAhDXA7QiwMmpjAZQgrACgqAAQq1AAjyomg");
	this.shape.setTransform(-197.6,234.5);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(170,135,101,0.502)").s().p("AsAEEIhShhIAEgEIASgOIAMAOQAaAaAnAvIAVATQAeAYAlAYIAcAXIgbAMIgVAJQgkgdgxg2gALZA9IABgBIgBABgALxg6IAMg6IAHgfQAGgPALADIADABIAdhkIAPg3QAIgXAHgFIgCATIgDAtIgEArIgFAOIgfBrIgOBYIgNAAIgjAIg");
	this.shape_1.setTransform(-192.1,243.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-288.1,177,181.1,115.1);


(lib.shape72 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BD9475","#FFE3A3"],[0,1],-60,3.7,60,-1.9).s().p("ApXAuQBLAfBvATQDdAlC0g9QBXgeBkgqQBogvAtgUQCbhCBvAHIAKA+Ig0gDQhEAChLAYIiSA6QiAAzhsAbQiEAhh8AAQjDAAirhSg");
	this.shape.setTransform(-156.5,84.4);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#BD9475","#FFE3A3"],[0,1],-67.1,0,67.1,0).s().p("AqeANQBUArB8AeQD3A8DJhCQBhghBwgwICohLQCshLB8AQIAMBNIg7gFQhLgBhVAZIijBAQiOA7h5AbQh5AchzAAQj3AAjVh+g");
	this.shape_1.setTransform(-169.1,77.2);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFEBBF","#FFE3A3","#FFE3A3","#FFF0D0","#FFE3A3"],[0.059,0.231,0.42,0.537,0.765],16,17.9,0,16,17.9,131.6).s().p("AJFCQQAYhfgYglQglg4ifAeQhKAOhRAhIiOBEQi8BdiuAYQjGAcjdhKQhWgcg+gfIB0AKQDwALDXhQQDvh/EThtIAAgBQCwhLC/gCQBvAHBvAxQAFARACASQAcDPk+DMIgHAEIgYAPQAjgtAbhIg");
	this.shape_2.setTransform(-155,66.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFE3A3","#F0BC97"],[0,1],7.8,-38.1,-5.7,12.9).s().p("AFtDcIiKgBIg5gEIgdgFIAAgBIAbgEIAjgKIAmgOQhrAEhyATQjJAtjjhTQhqguhUhIQhDg2g1hIIADgDQA+AgBXAcQDdBHDGgbQCrgXC+hcICPhFQBQgiBLgOQCegfAmA7QAXAlgXBfQgbBGgkAtIgoAXIAABQIgoAUIgTAJQgTAIgpAJIhaAGg");
	this.shape_3.setTransform(-167.6,85.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE3A3").s().p("AgCAAIAFAAIgDABg");
	this.shape_4.setTransform(-239.5,77.5);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-239.8,40,169.1,67.8);


(lib.shape71 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BD9C7E").s().p("ADPEvIh2gHIgxgFIgZgGIAAgBIAYgCIAegIIAggMIi8AMQiuAhjDhWQhbguhJhGQg5g3guhCIgCgEIAFABIBkAPQDOASC5g/QDOhtDrhZIAAAAQCXg/CkAHQBgAKBgAyIAFAhQAYDCkRCsIgGAEIgVANIgjAUIAABJIghARIgRAIIgzANIhOABg");
	this.shape.setTransform(-145.4,74.5);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BD9C7E").s().p("AoyDpQhngahQgtQhAgkgxgvIgCgCIAGAAIB1ABQDwgEDfhDQD5hjEchaIABgBQC2g+DAgKQBwgBBtAbQAEAMABAMQANCPlOCcIgGADIgaALIgrATIgFA3IgpAPIgUAIIg9APIhbAIIggACIiLAGIg5AAIgbgBIAAgBIAagEIAkgJIAmgMQhpAJh1ASQhjAUhoAAQhwAAh0gXg");
	this.shape_1.setTransform(-145.5,88.4);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE3A3").s().p("Ao2ArQBHApBoAZQDSA0CphKQBSgkBfgzICOhSQCShQBoALIAKBNIgxgDQhAABhIAcIiJBGQh5BAhmAfQh1AkhuAAQjCAAinhug");
	this.shape_2.setTransform(-153.9,59);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F3748").s().p("AuKiYISBITQjfA7i0AAQpBAAitpOgAOGm1QA+KmpdA3g");
	this.shape_3.setTransform(-197.3,252.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-288.1,43.6,228.7,252.7);


(lib.shape70 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424C64").s().p("AuQggQDpgeDoibQAvglAqgpIARgWQALgPB3hzQB3h0ElALIAjgMQA4BnBEAtIALAEIAfAEIATADQDXAKEVA6QgQLYqQCgQhbAOhXAAQo5AAmWpVg");
	this.shape.setTransform(-202,232.7);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(170,135,101,0.502)").s().p("ArgE1Ig8g5IgrguQgVgZgGgOIASgRIABgBIAOgLIARAPIA/BBIA/A4QAmAiAKAMIgHADIgVAJIgVAJQgTgKgagWgAM7h4IAIhBIAEgmIABguIgEgjQgBgVAMgLQAGgHAFAGQAFgCACAJQACAHAAAbIgCAcQgBArgMCrIgCApIgBABQgYAHgVAIQARhFAGg2g");
	this.shape_1.setTransform(-196.3,232.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-293.3,176.1,183.9,113.2);


(lib.shape68 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CD8C9F").s().p("AingZIAbgYIAfASQA7AfA7AAQA8AAAzgeQAXgNAZgXIgCATIgMAYQgmBFhfATIgaACQhxAAgxhcg");
	this.shape.setTransform(16.9,43.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#EEA2B7","#D793A6"],[0,0.714],5.3,-5.6,0,5.3,-5.6,18.8).s().p("Ah7BpIgegSQBvhmAdhzQAkgSAtAxQArAwATAnQARAkADAQIAEAeQgZAXgXANQgyAeg6AAQg9AAg8gfg");
	this.shape_1.setTransform(18.2,29.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,16.3,33.7,34.2);


(lib.shape66 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CD8C9F","#D793A6"],[0,1],-1.2,2.1,22.9,-4.2).s().p("AnIESIKnjiQC2hjApjXIAHgvIADAzQAHElkiBtIkJBbIhXAkQhiAvhHAAQhBAAgrgog");
	this.shape.setTransform(50.4,54.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#424C64").s().p("AAIBXQhmhWgkh8IAfgNQA7CrCrA3IgHAvQg8gJg4gpg");
	this.shape_1.setTransform(82.5,14);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#CD8C9F","#D793A6"],[0,0.553],-20.6,10.7,0,-20.6,10.7,64.1).s().p("Am0GEQhVh9BbhXQAwgVAngLIAIgCQBKgTBPguQBIgqA/hdIBgi0QgCgCASghQASgiAngjQAggdBEgdQAkB9BoBWQA4AqA8AIQgoDVi2BlIqnDig");
	this.shape_2.setTransform(47.1,41.8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,0.3,96.8,85.6);


(lib.shape64 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F3748").s().p("AgSEfQhPimiUg4QiAhFhtgQQgJi/Cph8IAHACQCwAtC2E/IAYAnQAVAgAZAcQAZAeAkAMQBKAZBYg0QBJADAzAxIAIAIQAWArgIAqIg1AOQh/AghnAAQh/AAhagxgAEoC+QgeAOAAAcQAAALAJARQAMAUAQAAQAlAAArgSQAwgUAAgaQAAgSgegMQgVgIgMAAQgtAAgbAMg");
	this.shape.setTransform(48.4,33.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#67779C").s().p("AgZAPQgFgGAAgFQAAgMAegLQAfgLAAAdQAAAMgPAHIgcAFQgHAAgGgIg");
	this.shape_1.setTransform(82.7,54.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3D475D").s().p("AhIAeQgJgQAAgMQAAgZAfgOQAagNAsAAQAMAAAUAJQAeAMAAASQAAAXgwAVQgoASgmAAQgQAAgMgVgAgEgnQggALgBAOQABAFAFAHQAFAFAIAAIAcgDQAPgHAAgNQAAgWgRAAQgGAAgGADg");
	this.shape_2.setTransform(83.3,56.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F2431").s().p("AAsDvQgWh1gnhWQCkBZEbhIIA1gPIgEANIhBC8IgoAMQhQAWhKAAQhdAAhTgigAllEDQgZlShjjBQBtARCABHQhLC8AoD8QgPAQgUAAQgTAAgYgNg");
	this.shape_3.setTransform(48.4,58.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("ACkEgQgkgNgZgdQgZgdgVgfIgYgoQi2k/iwgtQAQgIAQgHIAdgMQAtgQAlgdIAEgDIAHgBQAsgKA7B6QA6B6AJAbQAIAdAOAZQARAgAWAfIAdAqQBGB3CnAQQg7Ajg1AAQgaAAgYgIg");
	this.shape_4.setTransform(49.4,22.1);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-7.5,96.9,93.7);


(lib.shape62 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("ADzGNQiCici5htQi7htg0jOQgpikBPg3QAtgVAmAkIAQATQETFIDNFgQAiAvgWAmQgTAOgSAAQgTAAgTgOg");
	this.shape.setTransform(32.6,42.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,1.4,65.4,82.3);


(lib.shape60 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("Aq2BVQgphNAfhUQBujXFlAiQG/AqG4BYQBXApgYBRIgzBcQhUgdjIA9QjIA9kxBJQhUAKhIAAQk5AAhiiyg");
	this.shape.setTransform(71.9,26.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,143.8,52.7);


(lib.shape58 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BD9771").s().p("AgUAFQgCgFAFgBQAFgEAJgBIAPgCQAIgBABAEQACAEgFACQgGAFgKACIgOABQgHgBgBgDg");
	this.shape.setTransform(6.1,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D4AA7F").s().p("AANgXQgXAdARASQgrgWAxgZg");
	this.shape_1.setTransform(2.3,2);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5C492").s().p("AgJASQgNgPAHgaIABAAQAOASATADIgBAAIAAAAQgSANAHAMIgGABQgGAAgEgGg");
	this.shape_2.setTransform(2.7,5.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5B789").s().p("AgUAbQgVgDgOgSIACAAIAqgEQAngCAcgaQgBAageANIgfALIgOADg");
	this.shape_3.setTransform(6.8,2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.8,-0.7,11.6,8.2);


(lib.shape56 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00375D").s().p("AgQACQAOgMAKACQAJACAFAIIgjAFIgIACg");
	this.shape.setTransform(17.3,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#5BBCFF","#004B7E"],[0,1],-1,4.7,0.8,-4.8).s().p("AgPAxQgMgCgFgTQgEgSAHgVIAGgRIAIgOIAJgBIAjgGIADAJIACAIQABAPgFARQgHAXgOAOQgJANgKAAIgFgBgAAAgfIAAAKIACAHQgCADAAAFQgCAIABAHQABAIAEABQAFABAFgGQAGgFADgIQADgKgCgHQgCgHgGgCIgFABIgCgHg");
	this.shape_1.setTransform(16.6,10.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#52B0F2").s().p("AgBAGIgDgGIgBgJIAJgBIACAHIAAAFIAAAFIgFAEQgBgBgBgEg");
	this.shape_2.setTransform(17.1,8.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003356").s().p("AgFAWQgFgBgCgIQgBgHACgIQABgFADgDQABAFADAAIADgDIAAgGIAAgHIAFgBQAGACACAHQACAHgDAIQgDAKgGAFQgDAGgEAAIgBgBg");
	this.shape_3.setTransform(17.7,10.4);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A9C2D2").s().p("AhRAoQAnhLB0gFIAGATIACAMQguAGgrANQgrAOgeARg");
	this.shape_4.setTransform(11.7,6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","#A4C6DE"],[0.392,0.906],5,-1.9,0,5,-1.9,14.7).s().p("AhRAAQAegRArgOQArgPAugGQAFA0gqAyIAAAAQgRADgQAAQhCAAgag1g");
	this.shape_5.setTransform(11.8,10.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhfAkIgPgSQBYhfBkgCIAhgEQgFAVgVAXIgFgTQh1AFgnBLIABABQAgBDBdgPIgDADQgVAGgUAAQg1AAgwgwg");
	this.shape_6.setTransform(11.2,8.4);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.3,16.9);


(lib.shape54 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9F1F7").s().p("AgRAKIgFgLQAAgXAWACQAXADAAAXQAAATgPAAQgSAAgHgNg");
	this.shape.setTransform(13.5,18.8);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D4AA7F").s().p("AAMAuQgFgJANgRQgQg9gigOQgQAjAIAxQgMg3ANgtQA0AIAWBSQgLAMgBAOQAFAVAOAGQgSgEgOgWg");
	this.shape_1.setTransform(7.5,10.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AAeBlIg9gnQgrgXgChWQAGhTA6AcQAuAmAQBAQAPBAAMAgQgFAOgOAAQgLAAgRgJgAASAOQgOAQAFAKQAPAWASAEQgPgHgEgVQAAgOALgMQgWhRgzgIQgNAtAMA2QgJgwAQgjQAjAOAQA9g");
	this.shape_2.setTransform(7.8,11);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CDA47B").s().p("AAcBnIAAAAIg8gmIAAAAQgtgXgChYIAAAAQADgsASgOQARgPAgAPIABAAIANANIAMARIATAiIATA9IACAGIgCANIAQAeIgDAHIADAHIAAADQAAADAHAKIADAEQgKAJgNAAQgOAAgQgKgAATAsIgBgGIAAgBQAAgOALgNQgUhGgrgKIgCAIQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABgBIADAAQAkAOAQA/IAAACIgBADQgKAMADAHIAFAIg");
	this.shape_3.setTransform(7.4,11.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,0,16.6,22.6);


(lib.shape53 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BD9475","#FFE3A3"],[0,1],-62.7,5.4,57.3,-0.2).s().p("ApvAoQBVAhB+AVQD6AqDLg8QByghBrguQAwgVBpg2QBJgmAlgLIBfgCIAEAzIgLgDIghgDQg+AEhVArQjMBnjNAoQh2AYhyAAQjdAAjChag");
	this.shape.setTransform(-153.7,82.7);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#BD9475","#FFE3A3"],[0,1],-70.2,2.3,64,2.3).s().p("Aq5AGQBfAvCNAiQEYBEDihAQCBgjB3g2QA2gXB1g9QBSgsApgMQA5gPAxATIAFBAIgNgFIglgEQhFAAhfAyQjlB2jkAnQhmARhjAAQkYAAjziLg");
	this.shape_1.setTransform(-166,74.9);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFEBBF","#FFE3A3","#FFE3A3","#FFF0D0","#FFE3A3"],[0.059,0.231,0.42,0.537,0.765],16.7,19,0,16.7,19,131.5).s().p("AJUB0QARg4ABgpQAAgrgUgHQhAgZhQAbQgwAQh0A+Qh9BEhSAfQiFA0iLAMQkGAWj5hSQhNgZg4gbIgQgSICHAMQDAAGDCgyIAUgGIAjgKIAtgPQDehNDShpQDJhlDdgCQBwAHBvAxQAFASACARQAbDPk+DMIgGAEIgsAbQAzgmAihxg");
	this.shape_2.setTransform(-155.6,65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFE3A3","#F0BC97"],[0,1],7,-39.5,-7.3,13.8).s().p("ABmDzQBVgFAvgjQn3BLlRkUQg/gxg4g/QA4AbBNAZQD6BQEFgWQCJgLCHgzQBSgfB9hEQB0hAAwgQQBQgbBBAZQATAHAAAsQgBAqgQA3QgjBvgzAmIgVAMIAABQQjTBuivAAQg7AAg3gNg");
	this.shape_3.setTransform(-166.8,86.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-241.1,38.3,170.9,73.6);


(lib.shape51 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDEE7").s().p("AgcBAQAAgHANAFQAMAEAAALQABAHgGAAQgNAAgHgUgAADhIIAAgDQAAgEAHgEIARgBIACAFIgCAFQgEAEgIAAg");
	this.shape.setTransform(8.5,9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9C6565").s().p("AAAAbIgCgCIgCgCIgZgXIAOgNIAEADIAKAKQgBgGgHgNIAGgGIACgBQAHACAKAMQAMANACAUQgIAGgRAAg");
	this.shape_1.setTransform(3.1,10.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9A9A9A").s().p("AgIAPIgNgHIAGAAQAPAAAIgGIAAgBQAFgCAAgGQAAgDgIgJIAJAIQAIAIAAAIQAAAIgLAFIgGACg");
	this.shape_2.setTransform(5.3,12.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AA7E8A").s().p("AgUBXIgDgBIgPgSIAAAAQATAQAQAAQAbAAAFgbIAAAKIgCAMIgHAIQgGAGgLAAQgIAAgPgGgAgSAwIgMgFIgFgDIgFgCIABgBIAPAFIAKABIAHAAIAIgDIAAABIAGAFQAEAHABAKIAAACIAAADQgKgKgUgKgAhOgGIAGgHIAGgHQAWgXAegQIAGgEQAIgGAVgCIAhgEQAWgDAHgOIgBAIQgIASgRAGIgpABQgjAHgjAcIgCACIgGAGIgGAFIgOANg");
	this.shape_3.setTransform(8.4,10.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#69544E").s().p("AgJA0IgJgBIAGgCQALgFAAgJQAAgJgIgIIgJgIQAJAIAAAEQAAAGgGAEIAAABQgCgVgMgNQgKgLgJgDQAjgcAjgHIApgBIgFABQg6ALgTAdQAlAqgKAQIgBABIgIADgAg6AAIgEgCIAGgFQAHAKABAGg");
	this.shape_4.setTransform(7.8,9.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFBDCF").s().p("AgmBQIAAABIgBgCIgFgHIgVgfIgBgCIgCgDIgMgUIgCgCIAZAYIACACIAEACIAMAHIgBABIAFADIAFACIAMAGQAUAJAKAKIAAgDIAAgCQgBgJgEgIIgGgFIAAAAIABgCQAKgPglgqIAcAUIAHAGQAUAWgBAcQgFAbgbAAQgQAAgTgRgAgbBGQAHAUANAAQAGAAgBgIQAAgLgMgEIgIgCQgFAAAAAFgAhKgCIAGgKQAMgUARgPQAYgUAigTQAFgEARgEQAQgFARAJQAJADAAAHQgHAOgWAEIghADQgVADgIAGIgGADQgeARgWAWIgGAHIgGAFgAALhOQgHAEAAAEIAAADIAMACQAIAAAEgDIACgGIgCgEg");
	this.shape_5.setTransform(8.4,9.2);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.5,16.7,20.4);


(lib.shape49 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D8AD82","rgba(216,173,130,0)"],[0,1],-11.8,-13.5,6.2,-4.9).s().p("AhCBPIgPhJIgIg6IBjhRQAXgRA5gjIgpAsQgMAPgCAXQgEAWgGAKQgFAHgJACQgjAIAAA2IAEApIAFAgQABAKgLAOQgMAOAAAYIADAlIACAOg");
	this.shape.setTransform(-6.5,29.6);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AD8A67").s().p("ABYg+IACAUIAEgWIAJABIgDAgQiAAWhKBKQAUg7CqhEg");
	this.shape_1.setTransform(10.3,6.6);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E7B98A","#B18E6B"],[0,1],10.5,-9.5,-3.1,9.3).s().p("AhZB3QBJhMAXg6IAjhHIAZg3IALghIAFgLIAKADIAIADIAMAHQAWALANALIAKAJIAAAHQgBAsgVA3QgWA0gZAUIgtAiIgxAkIhCAeQgvAVgmAcg");
	this.shape_2.setTransform(3.6,2.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.5,-16.5,36.2,64.8);


(lib.shape47 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFBA96","#FFCC99"],[0,0.796],-2.6,-6.2,0,-2.6,-6.2,20.3).s().p("ABJDKQg6gNgpgmIgUgVQggglgQgsIgchOIgchVQASjJDwDwQAXBLgIA1IgSAeIAAAAQAIAdAKAXQAKAaASAJQABAkgrAAQgPAAgVgEg");
	this.shape.setTransform(15.1,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B6916D").s().p("AgOAXQgJgXgIgaIAAgBIARgeQASAdAcAWIgNAPQgKAQACAWIABALQgPgJgLgag");
	this.shape_1.setTransform(29,28.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-3.7,32.2,41.4);


(lib.shape45 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#AD8B6A","#FFCC99"],[0,0.988],19.1,-1.2,0,19.1,-1.2,22.7).s().p("AhfC3IgKgVQgYgngzgOIgSgEQh7gggahqQgujCCbhOQDXhVCtBAQAiANAiATIADACQBpBQgaCVIgaBKQgGA2BCAmQAkAUgQAcQgbAggvAEQgaATAXARQAaAVgoAKQgQADgnAYQgXAPgJAUIgEAJQgIARgPAHIgkAFIgHAAQhyAAhXirg");
	this.shape.setTransform(35.9,35.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,71.8,71);


(lib.shape42 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#483A2B").s().p("AguA+QgSgogOgmIgogZQgngbgfgcIBGg5IAZgUQBGg3BDgvQAtBVA6BVIApA7Qg4BsglB4QgRA4gJAlQhDhhgwh0g");
	this.shape.setTransform(12.8,31.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.1,3.7,37.8,55.2);


(lib.shape40 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFCC99","#E4B688"],[0,1],4.9,1.9,-13.5,-6.2).s().p("ABNEkIgJgBQjCgrgYjGIgCgRQAAgkAcgWIADgCQBchHgFiXIAAgPQADgUAbgGQBZgQA8BZQANAZgKAgIgJAVQhBCfAjDbIAAAAIADASQADAkgdAAIgJgBg");
	this.shape.setTransform(15.3,29.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30.7,58.8);


(lib.shape38 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("ABiDlIiDg9IgCgBQgPgJgTgDQiFgUgdhAQgUg7AvgoIAqhAQArgygNguQgNgiAXgIQAWgKAYBAQAHAcgLAoQgGAlAuALIBDAHICpgFQAYANgUAPIioAbIAAATIDAAUQAOACAAAQQgBALgNABIjHAAIgDAQICeArQAOAJgEALQgGAPgMgDIilghIgGAOIB0BHQANAHgHALQgDAFgIAAQgGAAgIgDg");
	this.shape.setTransform(23.6,23.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,0.6,47.7,46.6);


(lib.shape36 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AmdA6QglglAUgwQA2hJB0AEID5AYQCmATC2gbQBMgGAYA7QAMA/hjgKQjtALicAnQh7AVhVAAQhzAAgvgng");
	this.shape.setTransform(43.9,9.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,87.8,19.6);


(lib.shape34 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CD8B9E","#D793A6"],[0,1],18.8,0.6,-21.5,0.6).s().p("AheBCQhtgagGhaQABgMADgKQBeBKB4ATIDGAMIADAeIieAHIgvADg");
	this.shape.setTransform(21.1,15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0C090").s().p("AC+ASQjmgbkNAHIgDgeIDxAIQB0ACB0AVICYAiQg1gChGgNg");
	this.shape_1.setTransform(73.2,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#EEA2B7","#D793A6"],[0,0.714],-2.4,-4.5,0,-2.4,-4.5,25.8).s().p("AAHBSQh4gThfhKQAch0DFAwQBQAaBwAQQgIA/AEBEg");
	this.shape_2.setTransform(21.3,9.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("ADtBjIiYgjQhygVh2gCIjwgIQgFhCAJhCQCUAVDMABIDygMQCmgHANBvQgCBViJAAIgOgBg");
	this.shape_3.setTransform(80.7,15.6);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,119.8,25.6);


(lib.shape32 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFE3A3","#F0BC97"],[0,0.765],-5.9,-18.4,-13.3,9.6).s().p("AAFBNQCHhhgfh/QAUAegHA8QgJBJg5ArQg1AqhJAdIg1ASQBEgYA8gvg");
	this.shape.setTransform(21.2,39.1,1,1,0,0,0,-0.6,0.2);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFE3A3","#F0BC97"],[0,0.765],-1.4,-5.1,-8.7,22.8).s().p("AirkEQFJBMAODNQAJCakuBWg");
	this.shape_1.setTransform(17.3,25.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.6,34.6,54.7);


(lib.shape31 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BD9C7E").s().p("AgHE4QBIgCAogeQmxAwkhkMQg1gygxg6IgOgRIB0AQQClANCngmIARgEIAegIIAngMQC/hACzhYQCuhUC+AHQBfALBgAyQAEARACAQQAXDCkRCsIgFADIgmAXIgSAKIAABKQipBWiNAAQg+AAg4gRg");
	this.shape.setTransform(-145.7,75.2);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BD9C7E").s().p("AgpEIQBUgIAygbQoBBOlBisQg7ggg1gpIgPgMQBEAEBDgCQDCgHDGgsIAVgDIAkgJIAvgNQDlhBDahVQDRhPDggNQBwgCBsAdQAEALABAMQAOCPlOCbIgHAEIguAUIgWAJIgGA3Qj4Bii/AAQgjAAgigEg");
	this.shape_1.setTransform(-145.7,88.3);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE3A3").s().p("ApNAmQBQAsB3AdQDtA7C/hIQBtgoBkg6ICRhaQBGgvAigNQAwgRAqARIAEBAIgKgEIgggEQg6ADhRA2QjBB9jBAvQhnAZhkAAQjaAAi/h6g");
	this.shape_2.setTransform(-151.3,56.5);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F3748").s().p("ApwEgQj5i8gwjtIE7AmIJ2IYQg8AHg8AAQkjAAjticgAOKm7QA6FNiSDZQiEDEknBKg");
	this.shape_3.setTransform(-201.1,243.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-293.3,40.5,234.6,247.2);


(lib.shape29 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,59.3).s().p("AmcGeQisisAAjyQAAjxCsirQCrisDxAAQDyAACsCsQCrCrAADxQAADyirCsQisCrjyAAQjxAAirirg");
	this.shape.setTransform(58.6,58.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,117.1,117.1);


(lib.shape1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D7AC81").s().p("EhNAANCIAA6DMCaBAAAIAAaDg");
	this.shape.setTransform(493,544.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,461,985.9,167);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(57,79.5,1,1,0,0,0,57,79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:397.8},29).wait(94));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114,159);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtnEkIAApIIbPAAIAAJIg");
	mask.setTransform(87.3,29.3);

	// Слой 3
	this.instance = new lib.Символ9();
	this.instance.setTransform(-112.6,23.9,1,1,0,0,0,57,79.5);

	this.instance.mask = mask;

	// Слой 1
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(87.3,29.3,0.771,0.771,0,0,0,113.2,38);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,174.6,58.6);


(lib.sprite133 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape132("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,0.7,117.6,114.8);


(lib.sprite119 = function() {
	this.initialize();

	// Layer 5
	this.instance = new lib.shape118("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.3,-17.5,44.6,31.5);


(lib.sprite114 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape113("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.3,-45,72.6,56.2);


(lib.sprite111 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape110("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,157.7,73.5);


(lib.sprite69 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape68("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,16.3,33.7,34.2);


(lib.sprite67 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape66("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,0.3,96.8,85.6);


(lib.sprite65 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape64("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-7.5,96.9,93.7);


(lib.sprite63 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape62("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,1.4,65.4,82.3);


(lib.sprite61 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape60("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,143.8,52.7);


(lib.sprite59 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.shape58("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.8,-0.7,11.6,8.2);


(lib.sprite57 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.shape56("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.3,16.9);


(lib.sprite55 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.shape54("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,0,16.6,22.6);


(lib.sprite52 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape51("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.5,16.7,20.4);


(lib.sprite50 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.shape49("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.5,-16.5,36.2,64.8);


(lib.sprite48 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape47("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-3.7,32.2,41.4);


(lib.sprite46 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape45("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,71.8,71);


(lib.sprite43 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape42("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.1,3.7,37.8,55.2);


(lib.sprite39 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape38("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,0.6,47.7,46.6);


(lib.sprite37 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape36("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,87.8,19.6);


(lib.sprite35 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape34("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,119.8,25.6);


(lib.sprite33 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.shape32("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.6,34.6,54.7);


(lib.sprite30 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape29("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,117.1,117.1);


(lib.sprite27 = function() {
	this.initialize();

	// Layer 19
	this.instance = new lib.Символ2();
	this.instance.setTransform(997.5,40,1,1,0,0,0,333,40);

	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(333,40,1,1,0,0,0,333,40);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.3,0,1330.5,80);


(lib.sprite2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape1("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,461,985.9,167);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(87.2,29.3,1,1,0,0,0,87.2,29.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#71E171").s().p("AtnEkIAApIIbPAAIAAJIgAkOC7IAOABQAJAAAJgDQAIgDAIgFQAPgKALgZIA4h8IghAAIgoBfIgBAAIgmhfIgjAAIA3B8QgDAKgIAFQgIAFgJAAIgKAAgAISC7IB8AAIAAgZIheAAIAAgyIBVAAIAAgYIhVAAIAAgsIBcAAIAAgaIh6AAgAF1C7IAeAAIAAhBIAtAAIAQgBQAHgBAGgDQALgFAGgIQAGgHADgJQACgKAAgIQAAgIgCgIQgDgKgGgHQgGgJgLgEQgGgDgHgBQgIgCgIAAIhLAAgAE0C7IAeAAIAAipIgjAAIhIB+IAAh+IgdAAIAACpIAiAAIBIh/gACJBvIAABMIAeAAIAAipIgeAAIAABDIhMAAIAAhDIgeAAIAACpIAeAAIAAhMgAh8C7IAeAAIAAhBIAtAAIAQgBQAIgBAFgDQAMgFAGgIQAEgHACgJQADgKAAgIQAAgIgDgIQgDgKgDgHQgGgJgMgEQgFgDgIgBQgHgCgJAAIhLAAgAmoAsIA1AAIAACPIAdAAIAAiPIA2AAIAAgaIiIAAgAqAC7IBOAAQAQAAAMgDQALgFAIgFQAIgHADgJQAEgIAAgKQAAgIgCgIQgCgHgEgFQgIgMgQgEQAMgFAGgJIAFgKIABgNQAAgKgDgIQgEgHgHgFQgNgLgXAAIhSAAgABgi1QgLAGgIAJQgIAJgEAMQgEANAAANQAAAOAEAMQACAGADAFQADAGAEAEQAEAFAFADIAKAGIAMAEQAGACAIAAQAHAAAGgCIAMgEQAGgCAFgEQAFgDAEgFIAHgKIAFgLIADgMQABgHAAgHQAAgHgBgGIgDgNQgFgMgHgJQgIgJgMgGQgLgFgOAAQgPAAgLAFgAkHi1QgLAGgIAJQgIAJgEAMQgEANAAANQAAAOAEAMIAFALIAHAKIAJAIQAEAEAGACIAMAEQAHACAHAAQALAAAKgEQAKgEAHgHQAHgHAFgJQAEgKAAgLIgWAAQAAAHgCAGQgDAGgEAFQgEAEgGADQgFADgIAAQgFAAgEgCIgJgDQgHgDgFgHQgEgIgDgIQgCgJAAgJQAAgJACgJQADgIAEgIQAFgGAHgFIAJgCIAJgBQAHgBAFACQAGACAEAEIAGAHIAEALIAWAAQAAgHgFgMQgFgIgHgGQgHgFgKgDQgJgDgLAAQgOAAgMAFgAqBg3IAKAAQAHAAAHgCQAGgBAGgFQALgIAJgSIAqheIgZAAIgeBHIgehHIgaAAIAqBeQgCAHgHAEQgFAEgHAAIgIgBgAIqg3IA4AAIANgBIAKgDQAIgEAFgFQAFgHABgHIACgMIgCgOQgCgHgEgFQgFgGgIgEQgFgCgFAAQgGgCgHAAIgiAAIAAgxIgWAAgAG0ikIAoAAIAABtIAWAAIAAhtIApAAIAAgTIhnAAgAG0g3IgxiAIgYAAIgxCAIAXAAIAMgiIAzAAIAMAiIAYAAgADLg3IA7AAQAMAAAJgDQAJgDAGgEQAGgFACgGQADgIAAgHIgBgMQgCgFgDgEQgGgJgMgDQAJgDAFgIIADgHIABgJQAAgJgCgFQgDgGgFgEQgLgIgRAAIg+AAgAg4g3IA4AAQANAAAJgDQAJgDAFgEQAGgFADgGQACgIAAgHQAAgGgBgGQgCgFgDgEQgGgJgMgDQAJgDAFgIQACgDABgEQACgFAAgEQAAgJgDgFQgCgGgGgEQgKgIgRAAIg8AAgAivikIApAAIAABtIAWAAIAAhtIApAAIAAgTIhoAAgAkvg3IgxiAIgYAAIgxCAIAXAAIAMgiIAzAAIAMAiIAYAAgAnMg3IAXAAIAAiAIgXAAIAAA1IgEAEIgGAEIgIACIgHAAIgMAAIgIgEQgGgGAAgKIAAgrIgWAAIAAAvQAAAJADAGQADAGAFADQAGAFAIACQAIABAJAAIASgBIAHgDIAGgDgApjCjIAAg1IA0AAQAOAAAIAHQAHAGAAANQAAAHgCAEQgCAFgDAEQgIAHgOAAgAGTBiIAAg4IA2ABQAGACAEADQAEADACAGQACAFAAAIQAAAIgCAGQgDAFgEADIgKAFIgKABgAheBiIAAg4IA3ABQAFACAEADQAEADADAGQACAFAAAIQAAAIgDAGQgDAFgEADIgKAFIgKABgApjBZIAAgvIAxAAQAMABAGAFQAHAEAAAOQAAALgHAGQgIAGgKAAgABxhIIgJgDQgHgDgFgHQgFgIgCgIQgCgJAAgJQAAgJACgJQACgIAFgIQAFgGAHgFIAJgCIAJgBQAKAAAHADQAIAFAEAGQAFAIACAIQADAJAAAJQAAAJgDAJQgCAIgFAIQgEAHgIADIgIADQgEACgFAAQgGAAgDgCgAJAhzIAhAAIAIABQAEAAADADIAGAHQABADAAAHQAAAFgBAFQgCAEgDACQgDADgEABIgqAAgADihKIAAgnIAnAAQAKgBAGAGQAFAEAAAKIgBAJQgBADgDAEQgGAEgKAAgAgihKIAAgnIAlAAQALgBAGAGQAFAEAAAKQAAAFgCAEIgDAHQgGAEgLAAgAFjhpIAUg4IAAAAIATA4gAmAhpIATg4IABAAIATA4gADiiCIAAgjIAkAAQAJABAFADQAFAEAAAKQAAAIgFAFQgGAEgIAAgAgiiCIAAgjIAiAAQAKABAEADQAFAEAAAKQAAAIgFAFQgGAEgIAAg");
	this.shape.setTransform(87.3,29.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(87.2,29.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AtnEkIAApIIbPAAIAAJIg");
	this.shape_2.setTransform(87.3,29.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.6,-55.6,344.2,159);


(lib.sprite156 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 22
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,0,3).p("Aj9iOQCUE+Fngk");
	this.shape.setTransform(12.5,-35.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4,1,0,3).p("AjVjHQB2EAE1CP");
	this.shape_1.setTransform(8.5,-27.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4,1,0,3).p("Aj7B2QCekeFZA/");
	this.shape_2.setTransform(-38,-39.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(4,1,0,3).p("AjxC+QCekZFFhi");
	this.shape_3.setTransform(-37,-29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},1).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape_3}]},1).to({state:[]},1).wait(3));

	// Layer 20
	this.instance = new lib.sprite114();
	this.instance.setTransform(31.7,-21.6,0.307,0.307,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:19.8,x:30.1,y:-17.9},1).to({rotation:34,x:25.4,y:-7.1},1).to({rotation:75,x:1.6,y:10.1},1).to({rotation:105,x:-54.9,y:-0.5},1).to({rotation:150,x:-67.3,y:-27.1},1).to({rotation:153.7,x:-66.5,y:-22.8},1).to({rotation:164.2,x:-62.9,y:-10.7},1).to({rotation:150,x:-36.2,y:5.3},1).to({rotation:55.3,x:15.7,y:-5.1},1).wait(1));

	// Layer 19
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(4,1,0,3).p("AkPAVQF1C7Cqks");
	this.shape_4.setTransform(-36.4,36.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(4,1,0,3).p("Ai6DIQFtgDAImM");
	this.shape_5.setTransform(-27.9,51);

	this.instance_1 = new lib.shape126("synched",0);
	this.instance_1.setTransform(22,0);

	this.instance_2 = new lib.shape130("synched",0);
	this.instance_2.setTransform(22,0);

	this.instance_3 = new lib.shape136("synched",0);
	this.instance_3.setTransform(22,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(4,1,0,3).p("AlsiIQHlhCD0Fd");
	this.shape_6.setTransform(27.3,40.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(4,1,0,3).p("Aj0k/QFjCFCGH6");
	this.shape_7.setTransform(15.3,63);

	this.instance_4 = new lib.shape146("synched",0);
	this.instance_4.setTransform(22,0);

	this.instance_5 = new lib.shape150("synched",0);
	this.instance_5.setTransform(22,0);

	this.instance_6 = new lib.shape154("synched",0);
	this.instance_6.setTransform(22,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

	// Layer 17
	this.instance_7 = new lib.sprite111();
	this.instance_7.setTransform(-58.4,36.2,0.153,0.153,135);

	this.instance_8 = new lib.sprite133();
	this.instance_8.setTransform(-39.2,84.1,0.153,0.153,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:135.9,x:-54.6,y:44.1},1).to({rotation:138.2,x:-41.5,y:66.4},1).to({rotation:126.2,x:-8.9,y:79.2},1).to({rotation:64.3,x:31.6,y:56.6},1).to({rotation:-47,x:56.8,y:59.2},1).to({rotation:-46.9,x:50.5,y:68.1},1).to({rotation:-47,x:31.3,y:95.2},1).to({rotation:-0.2,x:13.3,y:90.6},1).to({_off:true},1).wait(1));

	// Layer 11
	this.instance_9 = new lib.sprite119();
	this.instance_9.setTransform(-6.5,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:-79.9},3).to({y:-89.9},2).to({y:-79.9},3).to({y:-83.9},1).wait(1));

	// Layer 9
	this.instance_10 = new lib.sprite117();
	this.instance_10.setTransform(-37.3,-132.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:-122.8},3).to({y:-132.8},2).to({y:-122.8},3).to({y:-126.8},1).wait(1));

	// Layer 8
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(4,1,0,3).p("AkmCZQCqlOGjAg");
	this.shape_8.setTransform(9,-34.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(4,1,0,3).p("AjKD0QB4mKEchd");
	this.shape_9.setTransform(18.3,-23.2);

	this.instance_11 = new lib.shape125("synched",0);
	this.instance_11.setTransform(-13.2,0);

	this.instance_12 = new lib.shape129("synched",0);
	this.instance_12.setTransform(-13.2,0);

	this.instance_13 = new lib.shape135("synched",0);
	this.instance_13.setTransform(-13.2,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(4,1,0,3).p("AjuiFQBtFAFwg/");
	this.shape_10.setTransform(62.5,-36.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(4,1,0,3).p("Ai6jCQBuEqEHBb");
	this.shape_11.setTransform(57.2,-27.8);

	this.instance_14 = new lib.shape145("synched",0);
	this.instance_14.setTransform(-13.2,0);

	this.instance_15 = new lib.shape149("synched",0);
	this.instance_15.setTransform(-13.2,0);

	this.instance_16 = new lib.shape153("synched",0);
	this.instance_16.setTransform(-13.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).wait(1));

	// Layer 6
	this.instance_17 = new lib.sprite114();
	this.instance_17.setTransform(-19.3,-21.6,0.307,0.307,143.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({rotation:138.6,x:-14.6,y:-16.3},1).to({rotation:122.8,x:-1.1,y:-1.1},1).to({rotation:71.3,x:36.2,y:10.7},1).to({rotation:48.4,x:76.3,y:-8.5},1).to({rotation:10,x:86.7,y:-24.1},1).to({rotation:18.3,x:83.8,y:-19.8},1).to({rotation:43.4,x:74.7,y:-7.4},1).to({rotation:62,x:58.2,y:5.3},1).to({rotation:112.9,x:-1.1,y:-1.1},1).wait(1));

	// Layer 5
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(4,1,0,3).p("AkAhYQFhhXCgEd");
	this.shape_12.setTransform(58.3,36);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(4,1,0,3).p("AhZlLQCVDvAeGo");
	this.shape_13.setTransform(41.6,64.3);

	this.instance_18 = new lib.shape124("synched",0);
	this.instance_18.setTransform(-14.7,0);

	this.instance_19 = new lib.shape128("synched",0);
	this.instance_19.setTransform(-14.7,0);

	this.instance_20 = new lib.shape134("synched",0);
	this.instance_20.setTransform(-14.7,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(4,1,0,3).p("AkKCLQHMAZBJkv");
	this.shape_14.setTransform(5.8,41.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(4,1,0,3).p("Ai9CjQHUA+humL");
	this.shape_15.setTransform(15.6,48.2);

	this.instance_21 = new lib.shape144("synched",0);
	this.instance_21.setTransform(-14.7,0);

	this.instance_22 = new lib.shape148("synched",0);
	this.instance_22.setTransform(-14.7,0);

	this.instance_23 = new lib.shape152("synched",0);
	this.instance_23.setTransform(-14.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).wait(1));

	// Layer 3
	this.instance_24 = new lib.sprite111();
	this.instance_24.setTransform(74.7,44.3,0.153,0.153,-30);

	this.instance_25 = new lib.sprite133();
	this.instance_25.setTransform(-18.4,85.4,0.153,0.153,-1.2);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({rotation:-33.1,x:67.2,y:56.9},1).to({rotation:-42.3,x:44.8,y:94.6},1).to({rotation:-1.2,x:-3.4,y:90.9},1).to({_off:true},1).wait(3).to({_off:false,rotation:101,x:0.9,y:59.5},0).to({rotation:124.3,x:19.3,y:78.4},1).to({rotation:84.9,x:46.8,y:63},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(4).to({_off:false},0).to({rotation:69.3,x:-19.8,y:46.6},1).to({rotation:77.2,x:-14.5,y:49.4},1).to({_off:true},1).wait(3));

	// Layer 1
	this.instance_26 = new lib.sprite30();
	this.instance_26.setTransform(-76.7,79.7,1.438,0.364);
	this.instance_26.alpha = 0.109;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.4,-132.8,184.6,255.2);


(lib.sprite44 = function() {
	this.initialize();

	// Mask Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABNEkIgJgBQjCgrgYjGIgCgRQAAgkAcgWIADgCQBchHgFiXIAAgPQADgUAbgGQBZgQA8BZQANAZgKAgIgJAVQhBCfAjDbIAAAAIADASQADAkgdAAIgJgBg");
	mask.setTransform(15.3,29.4);

	// Masked Layer 3 - 2
	this.instance = new lib.sprite43();
	this.instance.setTransform(11.8,-15.7);
	this.instance.alpha = 0.148;

	this.instance.mask = mask;

	// Layer 1
	this.instance_1 = new lib.shape40("synched",0);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30.7,58.8);


(lib.sprite28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite27();
	this.instance.setTransform(0,0,5.401,5.401);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-3533.9},55).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.2,0,7185.5,432.1);


(lib.sprite109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 68
	this.instance = new lib.shape70("synched",0);

	this.instance_1 = new lib.shape73("synched",0);

	this.instance_2 = new lib.shape76("synched",0);

	this.instance_3 = new lib.shape79("synched",0);

	this.instance_4 = new lib.shape82("synched",0);

	this.instance_5 = new lib.shape85("synched",0);

	this.instance_6 = new lib.shape88("synched",0);

	this.instance_7 = new lib.shape91("synched",0);

	this.instance_8 = new lib.shape94("synched",0);

	this.instance_9 = new lib.shape95("synched",0);

	this.instance_10 = new lib.shape97("synched",0);

	this.instance_11 = new lib.shape100("synched",0);

	this.instance_12 = new lib.shape101("synched",0);

	this.instance_13 = new lib.shape102("synched",0);

	this.instance_14 = new lib.shape104("synched",0);

	this.instance_15 = new lib.shape105("synched",0);

	this.instance_16 = new lib.shape106("synched",0);

	this.instance_17 = new lib.shape108("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).wait(1));

	// Layer 65
	this.instance_18 = new lib.sprite39();
	this.instance_18.setTransform(53.6,177.9,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({scaleX:1,scaleY:1,rotation:16,x:48.3,y:171.8},2).to({scaleX:1,scaleY:1,rotation:-1.3,x:43.1,y:167},1).to({rotation:-3.3,x:27.6,y:205.1},2).to({rotation:13.6,x:37.9,y:198.5},2).to({scaleX:1,scaleY:1,rotation:23.8,x:47.8,y:185.2},1).to({scaleX:1,scaleY:1,rotation:27.2,x:50,y:180.7},1).to({scaleX:1,scaleY:1,rotation:18.8,x:49.3,y:172.7},2).to({scaleX:1,scaleY:1,rotation:8.7,x:45.6,y:164.8},1).to({rotation:-3,x:28,y:201.5},2).to({rotation:13.6,x:37.9,y:198.5},2).to({scaleX:1,scaleY:1,rotation:25.7,x:49.6,y:182.8},1).wait(1));

	// Layer 63
	this.instance_19 = new lib.sprite37();
	this.instance_19.setTransform(-31.4,169.4,1,1,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({scaleX:1,scaleY:1,rotation:19.3,x:-31.7,y:170.3},1).to({scaleX:1,scaleY:1,rotation:8,x:-33.7,y:176.7},2).to({rotation:8.5,x:-46.8,y:215.5},2).to({rotation:12.9,x:-43.3,y:202.8},2).to({scaleX:1,scaleY:1,rotation:20.5,x:-34.2,y:178.2},1).to({scaleX:1,scaleY:1,rotation:23.1,x:-31.2,y:170.1},1).to({scaleX:1,scaleY:1,rotation:21.3,x:-31.8,y:170.8},1).to({scaleX:1,scaleY:1,rotation:7.9,x:-34.9,y:176.1},2).to({rotation:6,x:-47.2,y:215.2},2).to({rotation:12.9,x:-43.3,y:202.8},2).to({rotation:18.7,x:-34.5,y:177.8},1).wait(1));

	// Layer 61
	this.instance_20 = new lib.sprite35();
	this.instance_20.setTransform(-114.1,140.7,1,1,16.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({scaleX:1,scaleY:1,rotation:12.6,x:-116.6,y:148.3},2).to({scaleX:1,scaleY:1,rotation:8.5,x:-119.5,y:157.5},1).to({rotation:10.9,x:-130.3,y:192.6},2).to({rotation:12.9,x:-126.4,y:177.5},2).to({scaleX:1,scaleY:1,rotation:15.6,x:-116.9,y:149.8},1).to({scaleX:1,scaleY:1,rotation:16.6,x:-113.6,y:140.3},1).to({scaleX:1,scaleY:1,rotation:12.8,x:-116.5,y:148.1},2).to({scaleX:1,scaleY:1,rotation:7.9,x:-119.8,y:158.2},1).to({rotation:10.4,x:-130.4,y:192.5},2).to({rotation:12.9,x:-126.4,y:177.5},2).to({rotation:15.2,x:-117.3,y:150},1).wait(1));

	// Layer 59
	this.instance_21 = new lib.sprite69();
	this.instance_21.setTransform(-118.4,144.6,1.004,0.997,0,-1,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:-117.1,y:144.4},1).to({scaleX:1.02,skewX:-1.1,skewY:-1.8,x:-118,y:145.7},1).to({scaleX:1.07,scaleY:1,skewX:-4.8,skewY:-7,x:-121.3,y:153.5},1).to({scaleX:1.23,scaleY:1,skewX:-13.8,skewY:-18,x:-130.1,y:192.3},2).to({scaleX:1.31,scaleY:1.01,skewX:-16.6,skewY:-20.4,x:-133.6,y:185.8},1).to({scaleX:1.23,scaleY:0.97,skewX:-11.3,skewY:-17.8,x:-128.5,y:179.9},1).to({scaleX:1.15,scaleY:0.93,skewX:-5.9,skewY:-15.6,x:-123.6,y:154.2},1).to({scaleX:1,scaleY:1,skewX:-1,skewY:-2.8,x:-118.4,y:144.6},1).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:-117.1,y:144.4},1).to({scaleX:1.02,skewX:-1.1,skewY:-1.8,x:-118,y:145.7},1).to({scaleX:1.07,scaleY:1,skewX:-4.8,skewY:-7,x:-121.3,y:153.5},1).to({scaleX:1.23,scaleY:1,skewX:-13.8,skewY:-18,x:-130.1,y:192.3},2).to({scaleX:1.31,scaleY:1.01,skewX:-16.6,skewY:-20.4,x:-133.6,y:185.8},1).to({scaleX:1.23,scaleY:0.97,skewX:-11.3,skewY:-17.8,x:-128.5,y:179.9},1).to({scaleX:1.15,scaleY:0.93,skewX:-5.9,skewY:-15.6,x:-123.6,y:154.2},1).wait(1));

	// Layer 57
	this.instance_22 = new lib.sprite67();
	this.instance_22.setTransform(-190.6,119.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({y:126.9},2).to({y:135.8},1).to({x:-193.6,y:172.8},2).to({y:157.8},2).to({x:-191.3,y:129.3},1).to({x:-190.6,y:119.8},1).to({y:126.9},2).to({y:135.8},1).to({x:-193.6,y:172.8},2).to({y:157.8},2).to({x:-191.3,y:129.3},1).wait(1));

	// Layer 55
	this.instance_23 = new lib.sprite65();
	this.instance_23.setTransform(-30.1,300.9,0.546,0.546,-69.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({rotation:-65.2,x:-34,y:311.9},1).to({rotation:-51.4,x:-45.6,y:346.8},1).to({rotation:-28.5,x:-68.8,y:399.7},1).to({rotation:0.8,x:-178.9,y:390.7},2).to({rotation:47,x:-352.5,y:369.7},2).to({rotation:117.9,x:-353.6,y:254.6},1).to({rotation:167.5,x:-354.5,y:224.6},1).to({rotation:166.5,x:-345.9,y:243.6},1).to({rotation:163.2,x:-303.7,y:283.3},1).to({rotation:157.9,x:-240.3,y:309.4},1).to({rotation:139.2,x:-195.9,y:320.5},1).to({rotation:120.5,x:-169.2,y:316.8},1).to({rotation:68.5,x:-143.8,y:306.7},2).to({rotation:-35.1,x:-67.3,y:317.2},1).wait(1));

	// Layer 53
	this.instance_24 = new lib.sprite63();
	this.instance_24.setTransform(-84.5,207.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({skewX:1.9,skewY:0.6,x:-85,y:219.2},1).to({rotation:5.7,skewX:0,skewY:0,x:-91,y:249.1},1).to({rotation:6.7,x:-105.9,y:306.3},1).to({scaleX:1.03,scaleY:0.84,rotation:0,skewX:49.6,skewY:52.6,x:-98.1,y:310.7},1).to({scaleX:1,scaleY:1,rotation:81.7,skewX:0,skewY:0,x:-95.7,y:322},1).to({scaleY:0.83,rotation:0,skewX:108.2,skewY:101.7,x:-178.6,y:348.1},1).to({scaleY:1,rotation:85.7,skewX:0,skewY:0,x:-268,y:313.8},1).to({scaleX:1,scaleY:1,rotation:134.4,x:-274.9,y:280.3},1).to({scaleX:1,scaleY:1,rotation:150.5,x:-277.8,y:268.1},1).to({scaleX:1,scaleY:1,rotation:149.4,x:-268.5,y:285.5},1).to({scaleX:1,scaleY:1,rotation:146.2,x:-224.3,y:320.8},1).to({scaleX:1,scaleY:1,rotation:140.8,x:-157.4,y:339.5},1).to({scaleX:1,scaleY:1,rotation:124.8,x:-111.6,y:329.1},1).to({scaleX:1,scaleY:1,rotation:108.9,x:-86.4,y:298.6},1).to({rotation:77.5,x:-78.5,y:246.2},2).to({scaleX:1,scaleY:1,rotation:19.3,x:-82.9,y:216.1},1).wait(1));

	// Layer 51
	this.instance_25 = new lib.sprite61();
	this.instance_25.setTransform(-216.1,191.2,1.005,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({scaleX:1,rotation:4.5,x:-213,y:192.6},1).to({scaleX:1,scaleY:1,rotation:18,x:-203.5,y:197.9},1).to({scaleX:1,scaleY:1,rotation:40.7,x:-187.3,y:210.7},1).to({rotation:42.3,x:-188.6,y:222},2).to({scaleX:0.92,rotation:89.7,x:-169,y:230.4},1).to({scaleX:1,rotation:137.1,x:-166.5,y:248.4},1).to({scaleX:1,scaleY:1,rotation:149.7,x:-160.2,y:229.8},1).to({scaleX:1,scaleY:1,rotation:144.9,x:-157.4,y:221.5},2).to({scaleX:0.94,scaleY:1,rotation:0,skewX:118.1,skewY:118,x:-155.7,y:215.3},1).to({scaleX:0.98,scaleY:1,rotation:73.6,skewX:0,skewY:0,x:-170.5,y:209.2},1).to({scaleX:0.98,rotation:24.3,x:-198.2,y:222.5},2).to({rotation:7.9,x:-208.8,y:209.6},2).to({scaleX:0.99,rotation:1.8,x:-214.6,y:195.8},1).wait(1));

	// Layer 49
	this.instance_26 = new lib.sprite65();
	this.instance_26.setTransform(-349.5,226,0.546,0.546,165.1);
	this.instance_26.filters = [new cjs.ColorFilter(0.94921875, 0.94921875, 0.94921875, 1, 0, 0, 0, 0)];
	this.instance_26.cache(-2,-9,101,98);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).to({rotation:164.2,x:-341.8,y:238},1).to({rotation:151.2,x:-304.8,y:272.1},1).to({rotation:156.6,x:-237.5,y:309.6},1).to({rotation:134.2,x:-200.9,y:321},1).to({rotation:122.9,x:-168.2,y:318.9},1).to({rotation:69.2,x:-143.2,y:304.4},2).to({rotation:-25.8,x:-68.7,y:312.7},1).to({rotation:-57.5,x:-39.3,y:300},1).to({rotation:-54.4,x:-42.4,y:310.2},1).to({rotation:-45.4,x:-51.3,y:342.7},1).to({rotation:-30.3,x:-69.8,y:400.4},1).to({rotation:-1.3,x:-180.2,y:391},2).to({rotation:46.6,x:-352.8,y:369.7},2).to({rotation:135.4,x:-345.7,y:259.8},1).wait(1));

	// Layer 47
	this.instance_27 = new lib.sprite63();
	this.instance_27.setTransform(-271.5,268.3,1,1,149.5);
	this.instance_27.filters = [new cjs.ColorFilter(0.94921875, 0.94921875, 0.94921875, 1, 0, 0, 0, 0)];
	this.instance_27.cache(-2,-1,69,86);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).to({scaleX:1,scaleY:1,rotation:148.7,x:-263.8,y:279.5},1).to({scaleX:1,scaleY:1,rotation:150.1,x:-226.5,y:316.1},1).to({scaleX:1,scaleY:1.02,rotation:0,skewX:140.1,skewY:141.1,x:-151.9,y:340.5},1).to({scaleX:1,scaleY:1,rotation:124.1,skewX:0,skewY:0,x:-114.9,y:327.4},1).to({scaleX:1,scaleY:1,rotation:107.4,x:-83.7,y:297.2},1).to({scaleX:1,scaleY:1,rotation:24.3,x:-77.2,y:215.7},3).to({scaleX:1,scaleY:1,rotation:6.8,x:-78.5,y:207.9},1).to({rotation:6.8,x:-81.1,y:217.8},1).to({x:-89.3,y:249.8},1).to({scaleY:1.02,x:-106.4,y:304.9},1).to({scaleY:1,rotation:80.8,x:-96.2,y:319.7},2).to({scaleY:0.89,rotation:0,skewX:103.1,skewY:97.9,x:-175.9,y:344.3},1).to({scaleX:1.01,scaleY:1,skewX:86.7,skewY:86,x:-268.7,y:315.4},1).to({scaleX:1,scaleY:1,rotation:133.6,skewX:0,skewY:0,x:-269.9,y:279.3},1).wait(1));

	// Layer 45
	this.instance_28 = new lib.sprite61();
	this.instance_28.setTransform(-160.5,216.9,0.958,1,149.5);
	this.instance_28.filters = [new cjs.ColorFilter(0.94921875, 0.94921875, 0.94921875, 1, 0, 0, 0, 0)];
	this.instance_28.cache(-2,-2,148,57);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).to({scaleX:0.94,scaleY:1,rotation:0,skewX:144.1,skewY:143.5,x:-160.6,y:217.7},1).to({scaleX:0.92,scaleY:1,rotation:117.8,skewX:0,skewY:0,x:-159.1,y:213},1).to({scaleX:0.96,scaleY:1,rotation:75.1,x:-170.4,y:207},1).to({rotation:24,x:-194.4,y:223.7},2).to({rotation:7.5,x:-204.1,y:211.3},2).to({scaleX:0.96,rotation:6.8,x:-201.8,y:187.4},1).to({scaleX:0.96,rotation:6.7,x:-198.7,y:179.6},1).to({scaleX:0.96,scaleY:1,rotation:10.5,x:-197.3,y:182.5},1).to({scaleX:0.96,rotation:22.1,x:-192.8,y:191.9},1).to({scaleX:0.96,scaleY:1,rotation:41.5,x:-184.9,y:210.3},1).to({rotation:41,x:-187.7,y:226.3},2).to({scaleX:0.89,rotation:88,x:-171,y:231.8},1).to({scaleX:0.96,rotation:134.8,x:-170.5,y:246.8},1).to({scaleX:0.96,scaleY:1,rotation:145.9,x:-162.9,y:224.5},1).wait(1));

	// Layer 42
	this.instance_29 = new lib.sprite59();
	this.instance_29.setTransform(-69.2,95.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).to({y:101.5},2).to({y:108.7},1).to({x:-72.2,y:144.7},2).to({y:133.7},2).to({x:-70,y:105.2},1).to({x:-69.2,y:95.7},1).to({y:101.5},2).to({y:108.7},1).to({x:-72.2,y:143.7},2).to({y:133.7},2).to({x:-70,y:105.2},1).wait(1));

	// Layer 39
	this.instance_30 = new lib.sprite57();
	this.instance_30.setTransform(-86,76.4,0.802,0.802);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).to({y:82.2},2).to({y:89.4},1).to({x:-89,y:125.4},2).to({y:114.4},2).to({x:-86.7,y:85.9},1).to({x:-86,y:76.4},1).to({y:82.2},2).to({y:89.4},1).to({x:-89,y:124.4},2).to({y:114.4},2).to({x:-86.7,y:85.9},1).wait(1));

	// Layer 35
	this.instance_31 = new lib.sprite55();
	this.instance_31.setTransform(-116.1,83.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).to({y:89},2).to({y:96.2},1).to({x:-119.1,y:132.2},2).to({y:121.2},2).to({x:-116.9,y:92.7},1).to({x:-116.1,y:83.2},1).to({y:89},2).to({y:96.2},1).to({x:-119.1,y:131.2},2).to({y:121.2},2).to({x:-116.9,y:92.7},1).wait(1));

	// Layer 34
	this.instance_32 = new lib.shape53("synched",0);

	this.instance_33 = new lib.shape72("synched",0);

	this.instance_34 = new lib.shape75("synched",0);

	this.instance_35 = new lib.shape78("synched",0);

	this.instance_36 = new lib.shape81("synched",0);

	this.instance_37 = new lib.shape84("synched",0);

	this.instance_38 = new lib.shape87("synched",0);

	this.instance_39 = new lib.shape90("synched",0);

	this.instance_40 = new lib.shape93("synched",0);

	this.instance_41 = new lib.shape99("synched",0);

	this.instance_42 = new lib.shape103("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_32}]}).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).wait(1));

	// Layer 30
	this.instance_43 = new lib.sprite52();
	this.instance_43.setTransform(-78.7,104.7,1,1.184);

	this.timeline.addTween(cjs.Tween.get(this.instance_43).to({scaleY:0.97,x:-78.8,y:110.5},2).to({scaleY:0.7,x:-79,y:117.9},1).to({scaleY:0.62,skewX:-4.6,x:-81.7,y:154.1},2).to({scaleY:0.82,skewX:0,y:142.5},2).to({scaleY:1.07,x:-79.5,y:114.1},1).to({scaleY:1.16,x:-78.7,y:104.7},1).to({scaleY:1.02,y:110.4},2).to({scaleY:0.85,y:117.5},1).to({scaleY:0.76,skewX:-3.5,x:-81.7,y:152.4},2).to({scaleY:0.91,skewX:0,y:142.5},2).to({scaleY:0.98,x:-79.5,y:114.1},1).wait(1));

	// Layer 26
	this.instance_44 = new lib.sprite50();
	this.instance_44.setTransform(-87.9,66.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_44).to({y:72.2},2).to({y:79.4},1).to({x:-90.9,y:115.4},2).to({y:104.4},2).to({x:-88.6,y:75.9},1).to({x:-87.9,y:66.4},1).to({y:72.2},2).to({y:79.4},1).to({x:-90.9,y:114.4},2).to({y:104.4},2).to({x:-88.6,y:75.9},1).wait(1));

	// Layer 24
	this.instance_45 = new lib.sprite48();
	this.instance_45.setTransform(-102.6,92.7,1,1.085);

	this.timeline.addTween(cjs.Tween.get(this.instance_45).to({scaleY:0.98,skewX:1.3,x:-102.7,y:97.8},2).to({scaleY:0.85,skewX:3.2,x:-102.8,y:104.3},1).to({scaleX:1.04,scaleY:0.84,skewX:3.3,x:-105.8,y:139.8},2).to({scaleX:1,scaleY:0.91,skewX:1.2,y:129.3},2).to({scaleY:1.02,skewX:0.3,x:-103.4,y:101.8},1).to({scaleY:1.05,skewX:0,x:-102.6,y:92.6},1).to({scaleY:0.99,skewX:1,y:98.2},2).to({scaleY:0.91,skewX:2.4,x:-102.7,y:105.1},1).to({scaleY:0.85,skewX:2.5,x:-105.7,y:139.9},2).to({scaleY:0.95,skewX:2.3,y:130.2},2).to({scaleY:0.99,skewX:0.5,x:-103.4,y:101.8},1).wait(1));

	// Layer 22
	this.instance_46 = new lib.sprite46();
	this.instance_46.setTransform(-128.5,46.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_46).to({y:52},2).to({y:59.2},1).to({x:-131.5,y:95.2},2).to({y:84.2},2).to({x:-129.3,y:55.7},1).to({x:-128.5,y:46.2},1).to({y:52},2).to({y:59.2},1).to({x:-131.5,y:94.2},2).to({y:84.2},2).to({x:-129.3,y:55.7},1).wait(1));

	// Layer 16
	this.instance_47 = new lib.sprite44();
	this.instance_47.setTransform(-120.7,93.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_47).to({y:100.9},2).to({y:109.8},1).to({x:-123.7,y:146.8},2).to({y:131.8},2).to({x:-121.4,y:103.3},1).to({x:-120.7,y:93.8},1).to({y:100.9},2).to({y:109.8},1).to({x:-123.7,y:146.8},2).to({y:131.8},2).to({x:-121.4,y:103.3},1).wait(1));

	// Layer 14
	this.instance_48 = new lib.sprite39();
	this.instance_48.setTransform(41.7,164.9,0.975,1,0,15.7,15.9);
	this.instance_48.filters = [new cjs.ColorFilter(0.94140625, 0.94140625, 0.94140625, 1, 4, 3, 1, 0)];
	this.instance_48.cache(-2,-1,52,51);

	this.timeline.addTween(cjs.Tween.get(this.instance_48).to({scaleX:0.98,scaleY:1,skewX:2.5,skewY:2,x:36.9,y:157.7},2).to({scaleX:0.98,scaleY:1,skewX:-13.9,skewY:-15,x:31.3,y:152.2},1).to({scaleX:0.98,scaleY:0.99,skewX:-18.8,skewY:-20.1,x:16.4,y:192.6},2).to({scaleX:0.98,scaleY:1,skewX:-0.6,skewY:-1.2,x:27.2,y:182.5},2).to({scaleX:0.98,scaleY:1,skewX:18.8,skewY:19.3,x:41.2,y:173},1).to({scaleX:0.98,skewX:25.4,skewY:26.1,x:43.4,y:169.6},1).to({scaleX:0.98,scaleY:1,skewX:22.3,skewY:22.8,y:167.5},1).to({scaleX:0.98,scaleY:1,skewX:-1.3,skewY:-1.9,x:34.6,y:153.2},2).to({scaleX:0.98,scaleY:1,skewX:-9.7,skewY:-10.7,x:20.6,y:188.6},2).to({scaleX:0.98,scaleY:1,rotation:12.1,skewX:0,skewY:0,x:32.7,y:187.8},2).to({rotation:0,skewX:14.6,skewY:14.8,x:39.3,y:170.6},1).wait(1));

	// Layer 12
	this.instance_49 = new lib.sprite37();
	this.instance_49.setTransform(-35.6,160.9,0.975,1,0,19.1,19.5);
	this.instance_49.filters = [new cjs.ColorFilter(0.94140625, 0.94140625, 0.94140625, 1, 4, 3, 1, 0)];
	this.instance_49.cache(-2,-2,92,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_49).to({scaleY:1,skewX:17.1,skewY:17.3,x:-36.1,y:162},1).to({scaleX:0.98,skewX:1.8,skewY:1.3,x:-38.7,y:169.8},2).to({skewX:3.2,skewY:2.8,x:-50.2,y:208.6},2).to({scaleX:0.98,scaleY:1,skewX:6.8,skewY:6.5,x:-47.3,y:195.9},2).to({scaleY:1,skewX:17.6,skewY:17.8,x:-38.7,y:170.1},1).to({scaleX:0.98,scaleY:1,skewX:21.3,skewY:21.8,x:-35.4,y:161.6},1).to({scaleX:0.98,scaleY:1,skewX:19.3,skewY:19.6,x:-36.1,y:162.4},1).to({scaleX:0.98,scaleY:1,skewX:3.1,skewY:2.7,x:-39.5,y:169},2).to({skewX:1.7,skewY:1.3,x:-50.5,y:208.1},2).to({scaleX:0.98,scaleY:1,rotation:11.4,skewX:0,skewY:0,x:-46.5,y:194.6},2).to({scaleY:1,rotation:0,skewX:17.1,skewY:17.3,x:-38.4,y:169.4},1).wait(1));

	// Layer 10
	this.instance_50 = new lib.sprite35();
	this.instance_50.setTransform(-116.9,134.8,0.975,1,0,14.5,14.7);
	this.instance_50.filters = [new cjs.ColorFilter(0.94140625, 0.94140625, 0.94140625, 1, 4, 3, 1, 0)];
	this.instance_50.cache(-2,-2,124,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_50).to({scaleY:1,rotation:11.1,skewX:0,skewY:0,x:-118.9,y:142.4},2).to({scaleY:1,rotation:0,skewX:7,skewY:6.8,x:-121.7,y:151.8},1).to({skewX:9.5,skewY:9.4,x:-130.8,y:185.5},2).to({rotation:11.4,skewX:0,skewY:0,x:-128.1,y:172},2).to({scaleX:0.97,scaleY:1,rotation:0,skewX:14,skewY:14.3,x:-119.3,y:143.8},1).to({scaleX:0.98,scaleY:1,skewX:15,skewY:15.2,x:-116.9,y:134.8},1).to({scaleY:1,skewX:11.3,skewY:11.1,x:-119,y:142.6},2).to({scaleY:1,skewX:6.5,skewY:6.3,x:-121.9,y:152.4},1).to({skewX:9,skewY:8.9,x:-130.8,y:185.5},2).to({rotation:11.4,skewX:0,skewY:0,x:-128.1,y:172},2).to({rotation:0,skewX:13.6,skewY:13.7,x:-119.7,y:144.2},1).wait(1));

	// Layer 7
	this.instance_51 = new lib.sprite33();
	this.instance_51.setTransform(-78.3,42.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_51).to({scaleY:0.93,y:48.4},2).to({scaleY:0.84,y:55.5},1).to({scaleY:0.71,x:-81.3,y:91.7},2).to({scaleY:0.85,x:-81.6,y:80.5},2).to({scaleY:0.96,x:-79.3,y:52.1},1).to({scaleY:1,x:-78.6,y:42.6},1).to({scaleY:0.93,y:48.5},2).to({scaleY:0.85,y:55.8},1).to({scaleY:0.75,x:-81.6,y:90.7},2).to({scaleY:0.85,x:-81.3,y:80.8},2).to({scaleY:0.95,x:-79.1,y:52.1},1).wait(1));

	// Layer 6
	this.instance_52 = new lib.shape31("synched",0);

	this.instance_53 = new lib.shape71("synched",0);

	this.instance_54 = new lib.shape74("synched",0);

	this.instance_55 = new lib.shape77("synched",0);

	this.instance_56 = new lib.shape80("synched",0);

	this.instance_57 = new lib.shape83("synched",0);

	this.instance_58 = new lib.shape86("synched",0);

	this.instance_59 = new lib.shape89("synched",0);

	this.instance_60 = new lib.shape92("synched",0);

	this.instance_61 = new lib.shape96("synched",0);

	this.instance_62 = new lib.shape98("synched",0);

	this.instance_63 = new lib.shape107("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_52}]}).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_63}]},1).wait(1));

	// Layer 1
	this.instance_64 = new lib.sprite30();
	this.instance_64.setTransform(-338.5,411.4,2.836,0.471);
	this.instance_64.alpha = 0.129;

	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-412.8,38.3,507.2,428.3);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 4
	this.instance = new lib.Символ6();
	this.instance.setTransform(-1356,150.7,1,1,0,0,0,87.2,29.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ6(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-1356.1,-95.2);

	// Слой 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#418441").s().p("AtpEyIAApiIbSAAIAAJig");
	this.shape_1.setTransform(-1355.7,154.1);

	// Слой 2
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(-1351.2,-166.8,1.065,1.065);

	// Слой 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#464646","rgba(46,46,46,0)"],[0,1],0,-78.4,0,78.5).s().p("Az+M3IAA5tMAn9AAAIAAZtg");
	this.shape_2.setTransform(-1351.5,-123.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#464646","rgba(46,46,46,0)"],[0,1],0,45,0,-44.9).s().p("Az+HXIAAuuMAn9AAAIAAOug");
	this.shape_3.setTransform(-1351.5,153.8);

	// Слой 1
	this.s1 = new lib.sprite156();
	this.s1.setTransform(-1282.5,82.5,0.372,0.372);

	this.instance_2 = new lib.sprite109();
	this.instance_2.setTransform(-1354.5,-44.7,0.407,0.407);

	this.instance_3 = new lib.sprite28();
	this.instance_3.setTransform(-1578.5,-223.9,0.64,0.739);

	this.instance_4 = new lib.sprite2();
	this.instance_4.setTransform(-1563.9,-200.9,0.64,0.64);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.s1,this.shape_3,this.shape_2,this.instance_1,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1612.8,-223.9,4641.4,448.7);


// stage content:
(lib.iphone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		
		//this.qwe.addEventListener("click", fl_ClickToGoToWebPage);
		
		//function fl_ClickToGoToWebPage() {
		//	window.open(clickTAG, "_blank");
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(1469.9,201,1,1,0,0,0,-1.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.3,177,4641.4,448.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;