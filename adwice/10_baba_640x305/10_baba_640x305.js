(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/hands1.png", id:"hands1"},
		{src:"images/huhyu777.jpg", id:"huhyu777"},
		{src:"images/icecream.png", id:"icecream"},
		{src:"images/Слой0копия3.png", id:"Слой0копия3"},
		{src:"images/Слой1.png", id:"Слой1"},
		{src:"images/Слой2.png", id:"Слой2"},
		{src:"images/Слой3.png", id:"Слой3"},
		{src:"images/Слой4копия2.png", id:"Слой4копия2"}
	]
};



// symbols:



(lib.hands1 = function() {
	this.initialize(img.hands1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,93);


(lib.huhyu777 = function() {
	this.initialize(img.huhyu777);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.icecream = function() {
	this.initialize(img.icecream);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,198);


(lib.Слой0копия3 = function() {
	this.initialize(img.Слой0копия3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,254);


(lib.Слой1 = function() {
	this.initialize(img.Слой1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,60);


(lib.Слой2 = function() {
	this.initialize(img.Слой2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,83);


(lib.Слой3 = function() {
	this.initialize(img.Слой3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,83);


(lib.Слой4копия2 = function() {
	this.initialize(img.Слой4копия2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,282);


(lib.Символ51 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hands1();
	this.instance.setTransform(-55.5,-21.5,0.872,0.872,-21.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.5,-53.7,111,107.5);


(lib.Символ47 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.icecream();
	this.instance.setTransform(-25.3,-55.6,0.562,0.562);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.3,-55.6,50.6,111.3);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egx/AX0MAAAgvnMBj/AAAMAAAAvng");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ37 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egz8AFoIAArPMBn5AAAIAALPg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-332.5,-36,665.2,72);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AcYBKIAAh4Ig3AAIAAB4IgjAAIAAiTIB9AAIAACTgA86BKIAAiTIAjAAIAAAxIAUAAQAbAAAQAOQAQAMAAAWQAAAWgQAOQgQAOgbAAgA8XAwIAUAAQALAAAHgHQAGgHAAgKQAAgKgGgHQgHgGgLAAIgUAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-185.1,-7.5,370.3,15);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AdXA7QgSgSAAgcIAAgZQAAgbASgSQARgSAcAAQAcAAASASQASASAAAbIAAAZQAAAcgSASQgRARgcAAQgdAAgRgRgAdvgmQgIAKAAAQIAAAZQAAAQAIAKQAIALAOAAQANAAAIgLQAHgKAAgQIAAgZQAAgQgHgKQgIgLgOAAQgOAAgHALgA+cBKIAAh4IgnAAIAAgbIBxAAIAAAbIgnAAIAAB4g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-198.8,-7.7,397.7,15.4);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAglABKIgig8IgKAAIAAA8IgiAAIAAiTIAiAAIAAA6IAHAAIAig6IAsAAIgvBEIAyBOIAAABgA/2BKIAAhaIAAAAIg3BaIgjAAIAAiTIAjAAIAABaIABAAIA2haIAjAAIAACTg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-212.9,-7.5,425.9,15);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("Ai2AxICZgxIiZgyIAAhEIFtB2IltB3g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.4,-11.9,36.8,23.9);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAivABKIgJgdIgsAAIgJAdIgkAAIAAgBIAAAAIAwiSIAmAAIAuCNIAAAGgEAieAATIgOgtIAAAAIgOAtIAcAAgEgiqABKIAAh4IgmAAIAAgbIBxAAIAAAbIgoAAIAAB4g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-225.8,-7.5,451.6,15);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egk6AA7QgRgQAAgcIAAgdQAAgbARgRQAQgRAaAAQAdAAAPANQAQANgBAZIAAABIgiAAQAAgOgGgGQgFgGgOAAQgLAAgHAKQgGAJAAAQIAAAdQAAAQAHAJQAHAKANAAQALAAAGgGQAFgGAAgOIAiAAIAAABQAAAZgOANQgPANgbAAQgcAAgRgRgEAkBABKIAAh4IgmAAIAAgbIBxAAIAAAbIgoAAIAAB4g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-238,-7.7,476.1,15.4);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgnFAA7QgSgSAAgcIAAgZQAAgbASgSQARgSAcAAQAcAAASASQARASAAAbIAAAZQAAAcgRASQgSARgcAAQgcAAgRgRgEgmtgAmQgIAKAAAQIAAAZQAAAQAIAKQAIALANAAQAOAAAHgLQAIgKAAgQIAAgZQAAgQgIgKQgHgLgOAAQgOAAgHALgEAm0ABKIgJgdIgsAAIgJAdIgkAAIAxiTIAlAAIAwCTgEAmjAATIgNgtIgBAAIgOAtIAcAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-252.1,-7.7,504.2,15.4);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAoBABKIAAh4IgnAAIAAgbIBxAAIAAAbIgoAAIAAB4gEgpKABKIAAiTIBkAAIAAAbIhCAAIAAB4g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-263.5,-7.5,527.1,15);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egq4ABKIgMgDIAEgZIAIACIAHABQAIAAAEgDQAEgEADgHIABgEIg2hpIAlAAIAgBBIABADIAAAAIAdhEIAkAAIg3B1QgHAPgKAJQgJAIgRAAgEApiABJIAAiTIAjAAIAAAxIAVAAQAaAAAQAOQAQAMAAAWQAAAWgQAOQgQAOgaAAgEAqFAAvIAVAAQAKAAAHgHQAGgHAAgKQAAgKgGgHQgHgGgKAAIgVAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-277.2,-7.6,554.5,15.2);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Слой3();
	this.instance.setTransform(-13,-41.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13,-41.5,26,83);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AgcDEIAAmHIA5AAIAAGHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3,-19.6,6,39.3);


(lib.Path_3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F28738","#D30A23","#6D0A09"],[0,0.533,1],34.1,-56.8,0,34.1,-56.8,222.6).s().p("ApiWnQkah3jZjZQjajah4kaQh7kkAAk/QAAk+B7kkQB4kaDajZQDZjaEah4QEkh7E+AAQE/AAEkB7QEaB4DaDaQDZDZB3EaQB8EjAAE/QAAFAh8EjQh3EajZDaQjaDZkaB3QkjB8lAAAQk/AAkjh8g");
	this.shape.setTransform(157.2,157.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,314.3,314.3);


(lib.Group_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AKoIvIgLg6QgNg9gVhJIgYhMIgPgnIgQgnIglhRIgVgpIgWgpQg0hXg4hJQg+hRhFhFQhEhDhShBQhKg3hWg0IgpgWQgYgNgRgIIhRglQgUgJgTgHIgngPIhMgYQhBgUhGgOIh/gVIhJgIIA3gEICWAEQAVACAuAGQALABAZAFIAmAHIBQASIApAMQAXAHAUAHIBsArIAWAKIAsAWQA+AiAYAPIArAcIArAeQBSA8BOBMQBMBOA8BSIAeArIAcArQALASAnBEIAVAsIAKAWIArBsIAaBUIATBQIAHAmIAFAkIAIBDIAEA8IgECRg");
	this.shape.setTransform(70.2,70.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,140.5,140.5);


(lib.Group_0 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AHxK6IhDgIIgkgGIgmgHIhPgSIgqgNQgYgGgSgHIgrgQIiFg7QhHgpgOgJIgrgbIgqgeQhTg9hOhMQhOhQg6hQIgegqIgbgsQgJgNgqhIIg7iEIgPgrIgOgqIgMgqIgShPIgOhKQgFgugCgWIgEg7IADiRIATCPIALA5QAOBDATBEIAZBLIAPAnIAQAoIAmBRQAIATAjA/QAzBWA3BJQBBBTBDBEQBCBCBUBBQBKA3BWA0IApAXIApAVIBRAlIAnAQIAoAPIBLAYQBKAWA9AMIDIAdIg3ADIgTABg");
	this.shape.setTransform(70.3,70.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,140.5,140.6);


(lib.Group = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AHWLGIgkgCQgMAAgZgDIgogEIgogHIhWgSQgegHgPgFIgtgOIiKg4QhggwhUg7QhbhBhNhMQhNhPhAhYQg8hVgvhfIgnhdIgRguIgahZIgLgsIgHgqQgGggAAgJIgFgnIgDgmIgCgjIgBgiIACg9IAUiTIAGAZQAIAnAIAeIANAwIAQA4QAUBDAYA/IAdBHIARAlQAJAYAIAOIATAmIAVAnIAtBNQA2BUA1BDQA/BOBABBQBEBDBLA8QA+AxBZA7IBNAtICXBKIBIAdQBCAYBBAUIDFAzIhfAPIg0AEIg8ACIgJAAIgZgBg");
	this.shape.setTransform(71.2,71.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,142.3,142.3);


(lib.Анимация11 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("ПОРАДУЙ ДЕВУШКУ!", "bold 26px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 298;
	this.text.setTransform(-2,-19.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-151,-19.1,302.1,38.3);


(lib.Анимация4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Слой1();
	this.instance.setTransform(-26,-30);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26,-30,52,60);


(lib.Анимация3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAADIAAgFIAAAFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,-0.3,0.2,0.6);


(lib.Анимация2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAADIAAgFIAAAFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,-0.3,0.2,0.6);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Слой2();
	this.instance.setTransform(-34,-41.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34,-41.5,68,83);


(lib.Слой4копия2_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Слой4копия2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,167,282);


(lib.fon = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.huhyu777();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.baba = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Слой0копия3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,216,254);


(lib.Path_3_1 = function() {
	this.initialize();

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#F28738","#D30A23","#6D0A09"],[0,0.533,1],34.1,-56.8,0,34.1,-56.8,222.6).s().p("ApiWnQkah3jZjZQjajah4kaQh7kkAAk/QAAk+B7kkQB4kaDajZQDZjaEah4QEkh7E+AAQE/AAEkB7QEaB4DaDaQDZDZB3EaQB8EjAAE/QAAFAh8EjQh3EajZDaQjaDZkaB3QkjB8lAAAQk/AAkjh8g");
	this.shape_1.setTransform(157.2,157.2);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,314.3,314.3);


(lib.Group_1_1 = function() {
	this.initialize();

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AKoIvIgLg6QgNg9gVhJIgYhMIgPgnIgQgnIglhRIgVgpIgWgpQg0hXg4hJQg+hRhFhFQhEhDhShBQhKg3hWg0IgpgWQgYgNgRgIIhRglQgUgJgTgHIgngPIhMgYQhBgUhGgOIh/gVIhJgIIA3gEICWAEQAVACAuAGQALABAZAFIAmAHIBQASIApAMQAXAHAUAHIBsArIAWAKIAsAWQA+AiAYAPIArAcIArAeQBSA8BOBMQBMBOA8BSIAeArIAcArQALASAnBEIAVAsIAKAWIArBsIAaBUIATBQIAHAmIAFAkIAIBDIAEA8IgECRg");
	this.shape_1.setTransform(70.2,70.3);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,140.5,140.5);


(lib.Group_0_1 = function() {
	this.initialize();

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AHxK6IhDgIIgkgGIgmgHIhPgSIgqgNQgYgGgSgHIgrgQIiFg7QhHgpgOgJIgrgbIgqgeQhTg9hOhMQhOhQg6hQIgegqIgbgsQgJgNgqhIIg7iEIgPgrIgOgqIgMgqIgShPIgOhKQgFgugCgWIgEg7IADiRIATCPIALA5QAOBDATBEIAZBLIAPAnIAQAoIAmBRQAIATAjA/QAzBWA3BJQBBBTBDBEQBCBCBUBBQBKA3BWA0IApAXIApAVIBRAlIAnAQIAoAPIBLAYQBKAWA9AMIDIAdIg3ADIgTABg");
	this.shape_1.setTransform(70.3,70.3);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,140.5,140.6);


(lib.Group_2 = function() {
	this.initialize();

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AHWLGIgkgCQgMAAgZgDIgogEIgogHIhWgSQgegHgPgFIgtgOIiKg4QhggwhUg7QhbhBhNhMQhNhPhAhYQg8hVgvhfIgnhdIgRguIgahZIgLgsIgHgqQgGggAAgJIgFgnIgDgmIgCgjIgBgiIACg9IAUiTIAGAZQAIAnAIAeIANAwIAQA4QAUBDAYA/IAdBHIARAlQAJAYAIAOIATAmIAVAnIAtBNQA2BUA1BDQA/BOBABBQBEBDBLA8QA+AxBZA7IBNAtICXBKIBIAdQBCAYBBAUIDFAzIhfAPIg0AEIg8ACIgJAAIgZgBg");
	this.shape_1.setTransform(71.2,71.1);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,142.3,142.3);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:7},19).to({rotation:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.5,-53.7,111,107.5);


(lib.Символ48 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.setTransform(-77,13.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-132.5,-40.5,111,107.5);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.setTransform(0,0,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0.5},14,cjs.Ease.get(-1)).to({rotation:-15},15,cjs.Ease.get(1)).to({rotation:0.8},16,cjs.Ease.get(-1)).to({rotation:15},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.8,-60.2,77.7,120.6);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация11("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-151,-19.1,302.1,38.3);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:8.3},4,cjs.Ease.get(-1)).to({x:16.5},4,cjs.Ease.get(1)).to({x:9.2},4,cjs.Ease.get(-1)).to({x:0},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.4,-11.9,36.8,23.9);


(lib.Символ17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 35
	this.instance = new lib.Символ35();
	this.instance.setTransform(-4.4,-12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({y:-17.6},2).to({y:-12.6},2).wait(17));

	// Символ 34
	this.instance_1 = new lib.Символ34();
	this.instance_1.setTransform(-3.4,-12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({y:-17.6},2).to({y:-12.6},2).wait(19));

	// Символ 33
	this.instance_2 = new lib.Символ33();
	this.instance_2.setTransform(-3.2,-12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({y:-17.6},2).to({y:-12.6},2).wait(21));

	// Символ 22
	this.instance_3 = new lib.Символ22();
	this.instance_3.setTransform(-2.8,-12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({y:-17.6},2).to({y:-12.6},2).wait(23));

	// Символ 21
	this.instance_4 = new lib.Символ21();
	this.instance_4.setTransform(-3.3,-12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({y:-17.6},2).to({y:-12.6},2).wait(25));

	// Символ 20
	this.instance_5 = new lib.Символ20();
	this.instance_5.setTransform(-3.8,-12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({y:-17.6},2).to({y:-12.6},2).wait(27));

	// Символ 19
	this.instance_6 = new lib.Символ19();
	this.instance_6.setTransform(-3.7,-12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({y:-17.6},2).to({y:-12.6},2).wait(29));

	// Символ 18
	this.instance_7 = new lib.Символ18();
	this.instance_7.setTransform(-4.7,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:-17.5},2).to({y:-12.5},2).wait(31));

	// Слой 10
	this.instance_8 = new lib.Анимация2("synched",0);
	this.instance_8.setTransform(223.1,-5.4);

	this.instance_9 = new lib.Анимация3("synched",0);
	this.instance_9.setTransform(223.1,-5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},34).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},34).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-282,-20.3,554.5,15.4);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_1 = new cjs.Graphics().p("A62DbIAAm2MA1tAAAIAAG2g");
	var mask_graphics_2 = new cjs.Graphics().p("A62DcIAAm2MA1tAAAIAAG2g");
	var mask_graphics_3 = new cjs.Graphics().p("A62DbIAAm2MA1tAAAIAAG2g");
	var mask_graphics_4 = new cjs.Graphics().p("A62DcIAAm2MA1tAAAIAAG2g");
	var mask_graphics_5 = new cjs.Graphics().p("A62DbIAAm2MA1tAAAIAAG2g");
	var mask_graphics_6 = new cjs.Graphics().p("A62DcIAAm2MA1tAAAIAAG2g");
	var mask_graphics_7 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_8 = new cjs.Graphics().p("A62DcIAAm3MA1tAAAIAAG3g");
	var mask_graphics_9 = new cjs.Graphics().p("A62DcIAAm2MA1tAAAIAAG2g");
	var mask_graphics_10 = new cjs.Graphics().p("A62DbIAAm2MA1tAAAIAAG2g");
	var mask_graphics_11 = new cjs.Graphics().p("A62DcIAAm2MA1tAAAIAAG2g");
	var mask_graphics_12 = new cjs.Graphics().p("A62DbIAAm2MA1tAAAIAAG2g");
	var mask_graphics_13 = new cjs.Graphics().p("A62DcIAAm2MA1tAAAIAAG2g");
	var mask_graphics_14 = new cjs.Graphics().p("A62DbIAAm2MA1tAAAIAAG2g");
	var mask_graphics_15 = new cjs.Graphics().p("A62DcIAAm3MA1tAAAIAAG3g");
	var mask_graphics_16 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_17 = new cjs.Graphics().p("A62DbIAAm2MA1tAAAIAAG2g");
	var mask_graphics_18 = new cjs.Graphics().p("A62DcIAAm2MA1tAAAIAAG2g");
	var mask_graphics_19 = new cjs.Graphics().p("A62DbIAAm2MA1tAAAIAAG2g");
	var mask_graphics_20 = new cjs.Graphics().p("A62DcIAAm2MA1tAAAIAAG2g");
	var mask_graphics_21 = new cjs.Graphics().p("A62DbIAAm2MA1tAAAIAAG2g");
	var mask_graphics_22 = new cjs.Graphics().p("A62DcIAAm2MA1tAAAIAAG2g");
	var mask_graphics_23 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_24 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_25 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_26 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_27 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_28 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_29 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_30 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_31 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_32 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_33 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_34 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_35 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_36 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_37 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_38 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_39 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_40 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_41 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_42 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_43 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_44 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_45 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_46 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_47 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_48 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_49 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_50 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_51 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_52 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_53 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_54 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_55 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_56 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_57 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_58 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_59 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_60 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_61 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_62 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_63 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_64 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_65 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_66 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_67 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_68 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_69 = new cjs.Graphics().p("A62DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_70 = new cjs.Graphics().p("A46DbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_71 = new cjs.Graphics().p("A2KDbIAAm1MA1uAAAIAAG1g");
	var mask_graphics_72 = new cjs.Graphics().p("AzZDbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_73 = new cjs.Graphics().p("AwpDbIAAm1MA1uAAAIAAG1g");
	var mask_graphics_74 = new cjs.Graphics().p("At4DbIAAm1MA1uAAAIAAG1g");
	var mask_graphics_75 = new cjs.Graphics().p("ArHDbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_76 = new cjs.Graphics().p("AoXDbIAAm1MA1uAAAIAAG1g");
	var mask_graphics_77 = new cjs.Graphics().p("AlmDbIAAm1MA1tAAAIAAG1g");
	var mask_graphics_78 = new cjs.Graphics().p("Ai2DbIAAm1MA1uAAAIAAG1g");
	var mask_graphics_79 = new cjs.Graphics().p("AgFDbIAAm1MA1uAAAIAAG1g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-161.4,y:0}).wait(1).to({graphics:mask_graphics_1,x:-147.3,y:-0.1}).wait(1).to({graphics:mask_graphics_2,x:-133.3,y:-0.2}).wait(1).to({graphics:mask_graphics_3,x:-119.3,y:-0.4}).wait(1).to({graphics:mask_graphics_4,x:-105.2,y:-0.5}).wait(1).to({graphics:mask_graphics_5,x:-91.2,y:-0.6}).wait(1).to({graphics:mask_graphics_6,x:-77.2,y:-0.7}).wait(1).to({graphics:mask_graphics_7,x:-63.1,y:-0.8}).wait(1).to({graphics:mask_graphics_8,x:-49.1,y:-0.9}).wait(1).to({graphics:mask_graphics_9,x:-35.1,y:-1.1}).wait(1).to({graphics:mask_graphics_10,x:-21,y:-1.2}).wait(1).to({graphics:mask_graphics_11,x:-7,y:-1.3}).wait(1).to({graphics:mask_graphics_12,x:7,y:-1.4}).wait(1).to({graphics:mask_graphics_13,x:21.1,y:-1.5}).wait(1).to({graphics:mask_graphics_14,x:35.1,y:-1.6}).wait(1).to({graphics:mask_graphics_15,x:49.1,y:-1.8}).wait(1).to({graphics:mask_graphics_16,x:63.2,y:-1.9}).wait(1).to({graphics:mask_graphics_17,x:77.2,y:-2}).wait(1).to({graphics:mask_graphics_18,x:91.3,y:-2.1}).wait(1).to({graphics:mask_graphics_19,x:105.3,y:-2.2}).wait(1).to({graphics:mask_graphics_20,x:119.3,y:-2.3}).wait(1).to({graphics:mask_graphics_21,x:133.4,y:-2.5}).wait(1).to({graphics:mask_graphics_22,x:147.4,y:-2.6}).wait(1).to({graphics:mask_graphics_23,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_24,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_25,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_26,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_27,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_28,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_29,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_30,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_31,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_32,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_33,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_34,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_35,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_36,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_37,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_38,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_39,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_40,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_41,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_42,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_43,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_44,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_45,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_46,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_47,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_48,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_49,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_50,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_51,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_52,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_53,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_54,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_55,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_56,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_57,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_58,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_59,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_60,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_61,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_62,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_63,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_64,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_65,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_66,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_67,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_68,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_69,x:161.4,y:-2.7}).wait(1).to({graphics:mask_graphics_70,x:184.4,y:-2.7}).wait(1).to({graphics:mask_graphics_71,x:202,y:-2.7}).wait(1).to({graphics:mask_graphics_72,x:219.7,y:-2.7}).wait(1).to({graphics:mask_graphics_73,x:237.3,y:-2.7}).wait(1).to({graphics:mask_graphics_74,x:255,y:-2.7}).wait(1).to({graphics:mask_graphics_75,x:272.7,y:-2.7}).wait(1).to({graphics:mask_graphics_76,x:290.3,y:-2.7}).wait(1).to({graphics:mask_graphics_77,x:308,y:-2.7}).wait(1).to({graphics:mask_graphics_78,x:325.6,y:-2.7}).wait(1).to({graphics:mask_graphics_79,x:343.3,y:-2.7}).wait(1));

	// Символ 38
	this.instance = new lib.Символ38();
	this.instance.setTransform(182.4,0.2);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ18_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(0,133.9,28.25,0.425,0,180,0);

	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(-70.7,-50.8,1,4.589,0,0,0,0,-0.1);

	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(-70.7,103.8,1,1.108);

	this.instance_3 = new lib.Символ17();
	this.instance_3.setTransform(71.5,100.4,1,1.28);

	this.instance_4 = new lib.Символ17();
	this.instance_4.setTransform(71.5,-44.9,1,1.987,0,0,0,0,-0.1);

	this.instance_5 = new lib.Символ17();
	this.instance_5.setTransform(71.5,-122.6);

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.7,-142.2,169.5,284.5);


(lib.Path_2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Group();
	this.instance.setTransform(71.2,71.1,1,1,0,0,0,71.2,71.1);
	this.instance.alpha = 0.199;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,142.3,142.3);


(lib.Path_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Group_0();
	this.instance.setTransform(70.3,70.2,1,1,0,0,0,70.3,70.2);
	this.instance.alpha = 0.199;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,140.5,140.6);


(lib.Path = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Group_1();
	this.instance.setTransform(70.2,70.2,1,1,0,0,0,70.2,70.2);
	this.instance.alpha = 0.398;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,140.5,140.5);


(lib.Слой3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(13,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.86,y:35.7},13,cjs.Ease.get(-0.2)).to({scaleY:0.68,y:28.3},12,cjs.Ease.get(0.2)).wait(12).to({scaleY:1,y:41.5},13,cjs.Ease.get(0.2)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,83);


(lib.Слой2_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(34,41.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68,83);


(lib.stopa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация4("synched",0);
	this.instance.setTransform(46.2,13.5,1,1,0,0,0,20.2,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:20.3,rotation:8.8,x:46.3},8,cjs.Ease.get(-1)).to({regX:20.2,regY:-16.4,rotation:32,x:46.2},9,cjs.Ease.get(1)).to({regY:-16.5,scaleX:1,scaleY:1,rotation:22.3},9).to({scaleX:1,scaleY:1,rotation:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,60);


(lib.Path_2_1 = function() {
	this.initialize();

	// Слой 1
	this.instance_1 = new lib.Group_2();
	this.instance_1.setTransform(71.2,71.1,1,1,0,0,0,71.2,71.1);
	this.instance_1.alpha = 0.199;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,142.3,142.3);


(lib.Path_1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance_1 = new lib.Group_0_1();
	this.instance_1.setTransform(70.3,70.2,1,1,0,0,0,70.3,70.2);
	this.instance_1.alpha = 0.199;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,140.5,140.6);


(lib.Path_4 = function() {
	this.initialize();

	// Слой 1
	this.instance_1 = new lib.Group_1_1();
	this.instance_1.setTransform(70.2,70.2,1,1,0,0,0,70.2,70.2);
	this.instance_1.alpha = 0.398;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,140.5,140.5);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Path_4();
	this.instance.setTransform(36.2,-36.1,0.515,0.515,0,0,0,70.2,70.3);
	this.instance.alpha = 0.398;

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.setTransform(-36.1,36.1,0.515,0.515,0,0,0,70.2,70.1);
	this.instance_1.alpha = 0.199;

	this.instance_2 = new lib.Path_2_1();
	this.instance_2.setTransform(-36.3,36.4,0.515,0.515,0,0,0,71.4,70.7);
	this.instance_2.alpha = 0.199;

	this.instance_3 = new lib.Path_3_1();
	this.instance_3.setTransform(0.1,0.1,0.515,0.515,0,0,0,157.2,157.2);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",0,0,57);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-109.9,-109.9,222,222);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(125.4,0,1,1,180);

	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(-125.3,0);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-143.7,-11.9,287.6,23.9);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:90},19).to({rotation:180},20).to({rotation:270},20).to({rotation:360},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.7,-11.9,287.6,23.9);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Слой2_1();
	this.instance.setTransform(16.5,-24,1,1,0,0,0,34,41.5);

	this.instance_1 = new lib.stopa();
	this.instance_1.setTransform(-24.5,35.5,1,1,0,0,0,26,30);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.5,-65.5,101,131);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ3();
	this.instance.setTransform(37.8,-54.2,1,1,0,0,0,37.8,-54.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.8},8,cjs.Ease.get(-1)).to({rotation:15,y:-54.1},9,cjs.Ease.get(1)).to({rotation:7.3,x:37.9,y:-54.2},9).to({scaleX:1,scaleY:1,rotation:4.3,x:37.7,y:-54.1},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:0,x:37.8,y:-54.2},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.5,-65.5,101,131);


(lib.Символ43_1 = function() {
	this.initialize();

	// Слой 1
	this.instance_4 = new lib.Path();
	this.instance_4.setTransform(36.2,-36.1,0.515,0.515,0,0,0,70.2,70.3);
	this.instance_4.alpha = 0.398;

	this.instance_5 = new lib.Path_1();
	this.instance_5.setTransform(-36.1,36.1,0.515,0.515,0,0,0,70.2,70.1);
	this.instance_5.alpha = 0.199;

	this.instance_6 = new lib.Path_2();
	this.instance_6.setTransform(-36.3,36.4,0.515,0.515,0,0,0,71.4,70.7);
	this.instance_6.alpha = 0.199;

	this.instance_7 = new lib.Path_3();
	this.instance_7.setTransform(0.1,0.1,0.515,0.515,0,0,0,157.2,157.2);
	this.instance_7.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",0,0,57);

	this.addChild(this.instance_7,this.instance_6,this.instance_5,this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-109.9,-109.9,222,222);


(lib.Символ19_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ18_1();
	this.instance.alpha = 0.559;
	this.instance.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance.cache(-87,-144,174,289);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-89.7,-147.2,182,298);


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

	// Слой 2
	this.instance = new lib.Символ19_1();
	this.instance.setTransform(10.5,-6.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Анимация6 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ46();
	this.instance.setTransform(-1.5,0.5);

	// Режим изоляции
	this.instance_1 = new lib.Символ43_1();
	this.instance_1.setTransform(-1.6,-1.5);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(41, 28, -20, 180))];
	this.instance_1.cache(-112,-112,226,226);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-111.5,-111.4,226,226);


(lib.Анимация6_1 = function() {
	this.initialize();

	// Слой 3
	this.instance_2 = new lib.Символ48();
	this.instance_2.setTransform(-38.2,4.6,1,1,0,-15,165);

	this.instance_3 = new lib.Символ48();
	this.instance_3.setTransform(37.5,4.6,1,1,15);

	// Режим изоляции
	this.instance_4 = new lib.Символ43();
	this.instance_4.setTransform(-1.6,-1.5);
	this.instance_4.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(40, 37, 0, 37))];
	this.instance_4.cache(-112,-112,226,226);

	this.addChild(this.instance_4,this.instance_3,this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-111.5,-111.4,226,226);


(lib.Символ23копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Анимация6_1("synched",0);
	this.instance.setTransform(1.2,8.3,0.754,0.754);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:3.7},5,cjs.Ease.get(-1)).to({y:-1.7},6,cjs.Ease.get(1)).to({y:3.3},6,cjs.Ease.get(-1)).to({y:8.3},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-82.9,188,186);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Анимация6_1("synched",0);
	this.instance.setTransform(1.2,8.3,0.754,0.754);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:3.7},5,cjs.Ease.get(-1)).to({y:-1.7},6,cjs.Ease.get(1)).to({y:3.3},6,cjs.Ease.get(-1)).to({y:8.3},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-82.9,188,186);


(lib.Символ4_1 = function() {
	this.initialize();

	// Слой 4
	this.green = new lib.Символ4();
	this.green.setTransform(1,-0.4);

	// Символ 2
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(-78,81.5);

	// Слой 3
	this.instance_2 = new lib.Слой3_1();
	this.instance_2.setTransform(115.5,45.5,1,1,0,0,0,13,41.5);

	// Слой 0 копия 3
	this.instance_3 = new lib.baba();
	this.instance_3.setTransform(10.5,0,1,1,0,0,0,108,127);

	// Слой 4 копия 2
	this.instance_4 = new lib.Слой4копия2_1();
	this.instance_4.setTransform(12,-6,1,1,0,0,0,83.5,141);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.green);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-128.5,-147,257,294);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.girl = new lib.Символ4_1();

	this.timeline.addTween(cjs.Tween.get(this.girl).to({scaleX:0.96,scaleY:0.95,y:-7.8},11,cjs.Ease.get(-1)).to({scaleX:0.92,scaleY:0.89,y:-18},13,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.95,y:-9},13,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:0},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.5,-147,257,294);


(lib.Символ23копия_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance_1 = new lib.Анимация6("synched",0);
	this.instance_1.setTransform(1.2,8.3,0.754,0.754);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:3.7},5,cjs.Ease.get(-1)).to({y:-1.7},6,cjs.Ease.get(1)).to({y:3.3},6,cjs.Ease.get(-1)).to({y:8.3},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-82.9,188,186);


(lib.Символ23_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance_1 = new lib.Анимация6("synched",0);
	this.instance_1.setTransform(1.2,8.3,0.754,0.754);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:3.7},5,cjs.Ease.get(-1)).to({y:-1.7},6,cjs.Ease.get(1)).to({y:3.3},6,cjs.Ease.get(-1)).to({y:8.3},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-82.9,188,186);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(0,-7.1);

	this.instance_1 = new lib.Символ23копия();
	this.instance_1.setTransform(1,-7.1,1.098,1.093);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-90,188,188);


(lib.Символ44_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_2 = new lib.Символ23_1();
	this.instance_2.setTransform(0,-7.1);

	this.instance_3 = new lib.Символ23копия_1();
	this.instance_3.setTransform(1,-7.1,1.098,1.093);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-90,188,188);


// stage content:



(lib._10_baba_640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		var _this = this;
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.btn.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler()
		{
			_this.girl1.girl.green.gotoAndPlay(1);
		}
		
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.btn.addEventListener("mouseout", qwe);
		
		function qwe()
		{
			_this.girl1.girl.green.gotoAndPlay(0);
		}
		
		this.strela.visible = false;
		
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.btn2.addEventListener("mouseover", fl_MouseOverHandler_2);
		
		function fl_MouseOverHandler_2()
		{
			_this.strela.visible = true;
		
		}
		
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.btn2.addEventListener("mouseout", fl_MouseOutHandler);
		
		function fl_MouseOutHandler()
		{
			_this.strela.visible = false;
		}
		
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.bigbutton.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.btn2.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open(clickTAG, "_blank");
		}
		
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.btn.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.btn2 = new lib.Символ44_1();
	this.btn2.setTransform(108,215.5);
	new cjs.ButtonHelper(this.btn2, 0, 1, 2, false, new lib.Символ44_1(), 3);

	this.btn = new lib.Символ44();
	this.btn.setTransform(554,218.1);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.Символ44(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn},{t:this.btn2}]}).wait(1));

	// Слой 6
	this.bigbutton = new lib.Символ40();
	this.bigbutton.setTransform(320,152.5);
	new cjs.ButtonHelper(this.bigbutton, 0, 1, 2, false, new lib.Символ40(), 3);

	this.timeline.addTween(cjs.Tween.get(this.bigbutton).wait(1));

	// Слой 8
	this.instance = new lib.Символ17_1();
	this.instance.setTransform(335,140.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.strela = new lib.Символ28();
	this.strela.setTransform(335,178.9);

	this.timeline.addTween(cjs.Tween.get(this.strela).wait(1));

	// Слой 7
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(145.4,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ37();
	this.instance_2.setTransform(314.5,7.1);
	this.instance_2.alpha = 0.539;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 2
	this.girl1 = new lib.Символ1();
	this.girl1.setTransform(311.5,146);

	this.timeline.addTween(cjs.Tween.get(this.girl1).wait(1));

	// Слой 0 копия 6
	this.instance_3 = new lib.fon();
	this.instance_3.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(132.1,123.6,846.9,351.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;