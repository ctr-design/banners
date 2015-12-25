(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#000000",
	manifest: [
		{src:"images/gun.png", id:"gun"},
		{src:"images/kruh.png", id:"kruh"},
		{src:"images/men_from_the_planet_earth_by_markkarvond3eznv5.png", id:"men_from_the_planet_earth_by_markkarvond3eznv5"},
		{src:"images/soldier_01.png", id:"soldier_01"},
		{src:"images/soldier_04.png", id:"soldier_04"},
		{src:"images/soldier_06.png", id:"soldier_06"},
		{src:"images/soldier_08.png", id:"soldier_08"},
		{src:"images/soldier_11.png", id:"soldier_11"},
		{src:"images/soldier_15.png", id:"soldier_15"},
		{src:"images/soldier_18.png", id:"soldier_18"},
		{src:"images/soldier_21.png", id:"soldier_21"},
		{src:"images/soldier_26.png", id:"soldier_26"},
		{src:"images/space.jpg", id:"space"}
	]
};



// symbols:



(lib.gun = function() {
	this.initialize(img.gun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,119);


(lib.kruh = function() {
	this.initialize(img.kruh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8,8);


(lib.men_from_the_planet_earth_by_markkarvond3eznv5 = function() {
	this.initialize(img.men_from_the_planet_earth_by_markkarvond3eznv5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,102);


(lib.soldier_01 = function() {
	this.initialize(img.soldier_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,145);


(lib.soldier_04 = function() {
	this.initialize(img.soldier_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,67);


(lib.soldier_06 = function() {
	this.initialize(img.soldier_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,135);


(lib.soldier_08 = function() {
	this.initialize(img.soldier_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,232);


(lib.soldier_11 = function() {
	this.initialize(img.soldier_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,102);


(lib.soldier_15 = function() {
	this.initialize(img.soldier_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,249);


(lib.soldier_18 = function() {
	this.initialize(img.soldier_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,190);


(lib.soldier_21 = function() {
	this.initialize(img.soldier_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,256);


(lib.soldier_26 = function() {
	this.initialize(img.soldier_26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,68);


(lib.space = function() {
	this.initialize(img.space);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1056,398);


(lib.Символ58 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-0.1,78.1,-0.1,-78).s().p("EgxYAMMIAA4XMBixAAAIAAYXg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-316.2,-78,632.4,156.1);


(lib.Символ57 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAcBAIAgAAIAAAgIggAggEAmhABgIAAggIAgAAIAAAggEAlqABgIAAgwIhQAAIAAAwIggAAIAAhvIAwgwIBgAAIAACfgEAkaAAAIAAAQIBQAAIAAgvIgwAAgEAjIABgIAAggIggggIgxAAIAABAIggAAIAAifIAgAAIAAA/IAxAAIAggfIAAggIAgAAIAAAwIggAfIAgAgIAAAwgAfvBgIAAh/Ig4AAIAAggICQAAIAAAgIg4AAIAAB/gAeHBgIAAgwIhQAAIAAAwIghAAIAAhvIAxgwIBgAAIAACfgAc3AAIAAAQIBQAAIAAgvIgwAAgAbiBgIAAhAIhZAAIgQgQIAAhPIAgAAIAAA/IBJAAIAAg/IAgAAIAACfgAXUBgIAAifICBAAIAQARIAAAuIgQAQIAQAQIAAAwIgQAQgAX0BAIBRAAIAAggIhRAAgAX0AAIBRAAIAAgfIhRAAgAWeBgIAAifIAgAAIAACfgAT9BgIAAifIAgAAIAAAwIBgAAIAQAPIAABQIgQAQgAUdBAIBQAAIAAgwIhQAAgARYBgIAAifICAAAIAQARIAABOIgQAQIhgAAIAAAwgAR4AQIBQAAIAAgvIhQAAgAPBBgIgQgQIAAggIAgAAIAAAQIBQAAIAAggIgwAAIAAggIAwAAIAAgfIhQAAIAAAQIggAAIAAgfIAQgRIBwAAIAQARIAAAuIgQAQIAQAQIAAAwIgQAQgAMOBgIAAifICBAAIAQARIAAAuIgQAQIAQAQIAAAwIgQAQgAMuBAIBRAAIAAggIhRAAgAMuAAIBRAAIAAgfIhRAAgAJ7BgIAAhqIgqA7IgbAAIgrg7IAABqIggAAIAAifIAgAAIA5BMIA5hMIAfAAIAACfgAG0BgIAAgwIhQAAIAAAwIggAAIAAhvIAwgwIBgAAIAACfgAFkAAIAAAQIBQAAIAAgvIgwAAgADeBgIAAh/Ig4AAIAAggICQAAIAAAgIg4AAIAAB/gAgUBgIAAggIggggIgxAAIAABAIggAAIAAifIAgAAIAAA/IAxAAIAggfIAAggIAeAAIAAAwIgeAfIAeAgIAAAwgAi8BgIAAgwIhQAAIAAAwIggAAIAAhvIAwgwIBgAAIAACfgAkMAAIAAAQIBQAAIAAgvIgwAAgAnBBgIgQgQIAAggIAgAAIAAAQIBRAAIAAggIgxAAIAAggIAxAAIAAgfIhRAAIAAAQIggAAIAAgfIAQgRIBxAAIAQARIAAAuIgQAQIAQAQIAAAwIgQAQgAoBBgIAAggIggggIgwAAIAABAIggAAIAAifIAgAAIAAA/IAwAAIAggfIAAggIAgAAIAAAwIggAfIAgAgIAAAwgAr4BgIgRgQIAAgwIggAAIAABAIggAAIAAifIAgAAIAAA/IAgAAIAAguIARgRIBgAAIAQARIAAB+IgQAQgAroBAIBAAAIAAhfIhAAAgAvuBgIAAifICBAAIAQARIAABOIgQAQIhhAAIAAAwgAvOAQIBRAAIAAgvIhRAAgAzxBgIAAifICBAAIAQARIAAAuIgQAQIAQAQIAAAwIgQAQgAzRBAIBRAAIAAggIhRAAgAzRAAIBRAAIAAgfIhRAAgA2DBgIAAhpIhRBpIggAAIAAifIAgAAIAABpIBRhpIAgAAIAACfgA4qBgIAAgwIgxAAIggAgIAAAQIggAAIAAggIAQgQIgQgQIAAhOIAQgRICBAAIAACfgA57AQIBRAAIAAgvIhRAAgA7SBgIAAh/IgwAAIggAfIAABgIggAAIAAhvIAwgwIBgAAIAACfgA/dBgIAAifICJAAIAAAgIhpAAIAAAfIBhAAIAAAgIhhAAIAAAgIBpAAIAAAggEgiCABgIAAifICBAAIAQARIAABOIgQAQIhhAAIAAAwgEghiAAQIBRAAIAAgvIhRAAgEgjqABgIAAh/Ig4AAIAAggICQAAIAAAgIg4AAIAAB/gEgmwABgIgQgQIAAh+IAQgRIBwAAIAQARIAAAfIggAAIAAgQIhQAAIAABfIBQAAIAAgQIAgAAIAAAgIgQAQgEAmhAAwIAAhvIAgAAIAABvgA3UhPIgQgQIAAggIAgAAIAAAVIAxAAIAAgVIAgAAIAAAgIgQAQg");
	this.shape.setTransform(-12.2,-13.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-261.9,-26.4,499.6,25.7);


(lib.Символ54 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ABDQRQgtgJgkgKQgPAAgpAPQgqAPgPAAQg/AAAAgkIgnhNQgnhOAAgSQAAgVgTg2QgUg1AAgEQAAiUgrh1QgZhDgFgTQgOgyAAg6IgnmWQAAgjgdgxQgdgyAAgOQAAhDAVhXQAVhYAAg3QAAgihSg9QhSg8AAgKQAAgeAggKQAYgHBFAAQADAACkh8ICkh9QBwAAAHALIADAPQAEAMAUAMQgDgNACgMQACgLAGgGQBFArA0CJIArBzQAbBCAcAqIBpAeQAIgCA+giIAGgDIgHAaIBwCAIAEA1QAKBsAAAPQAAAQAIA7QAKBBABAYIgqCcQAjBCAqAQQAWAIAOgEQAAAFgvClQAAAUAVApQAVApAAAMQAACjAHCAQAHCBAAAtQAAA4gMAsQgRBCgoAIQitABg1AeQghASgFACQgbAJg4AAQgqAAhZgUgAlQtTIhAAzQALAFAWAEIA/AMIAdhuQgQACgtAkg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-61.4,-106.1,122.9,212.3);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FF00").ss(1,1,1).p("EhK2gqLMCVtAAAMAAABUXMiVtAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("EhK1AqMMAAAhUXMCVrAAAMAAABUXg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ44 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.soldier_06();
	this.instance.setTransform(-52,56.7,0.991,0.991,-107.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.3,-56.7,150.6,113.5);


(lib.Символ42 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.soldier_01();
	this.instance.setTransform(-89.8,-56.1,0.991,0.991,-10.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-89.8,-85.1,179.6,170.1);


(lib.Символ41 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.soldier_08();
	this.instance.setTransform(-109.8,66.7,0.991,0.991,-94.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-119.2,-66.7,238.6,133.5);


(lib.Символ40 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.soldier_18();
	this.instance.setTransform(-106.3,38.8,0.991,0.991,-76.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106.3,-83.4,212.8,166.9);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.soldier_26();
	this.instance.setTransform(-14.1,75.4,0.991,0.991,-105.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.8,-75.3,101.7,150.7);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.soldier_08();
	this.instance.setTransform(95.8,-85.7,0.991,0.991,74.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126,-85.7,252.1,171.4);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.soldier_18();
	this.instance.setTransform(74.3,-85.4,0.991,0.991,74.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-107.3,-85.4,214.8,170.9);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.soldier_21();
	this.instance.setTransform(-98.1,-110.5,0.991,0.991,-10.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-98.1,-138.7,196.3,277.5);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.soldier_04();
	this.instance.setTransform(-36.8,-43.8,0.991,0.991,14.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.4,-43.8,106.8,87.6);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.soldier_06();
	this.instance.setTransform(-20.2,-74.3,0.991,0.991,14.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.6,-74.3,107.3,148.6);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.soldier_11();
	this.instance.setTransform(-62.7,-68.3,0.991,0.991,14.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87.9,-68.3,175.9,136.7);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.soldier_26();
	this.instance.setTransform(14.4,-75.3,0.991,0.991,74.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.6,-75.3,101.3,150.6);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.soldier_11();
	this.instance.setTransform(-44.4,-51);

	this.instance_1 = new lib.soldier_04();
	this.instance_1.setTransform(-112.5,-16);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112.5,-51,225.1,102);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AmnAnQgRAAgMgMQgMgLAAgQQAAgPAMgMQAMgMARABINPAAQARgBALAMQANAMAAAPQAAAQgNALQgLAMgRAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.5,-4,93,8);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.kruh();
	this.instance.setTransform(-3.9,-3.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.9,-3.9,8,8);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.gun();
	this.instance.setTransform(-100,-59.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-100,-59.5,200,119);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg55ACMIAAkXMBzzAAAIAAEXg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-370.6,-14,741.2,28);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhCCWIAAkrICFAAIAAErg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.8,-15,13.6,30.1);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FFFF").s().p("APUCKIgqgmIDkAAIAAjtIAxAAIAADtIgqAmgALoCKIAAjtIiMAAIApgmID1AAIApAmIiLAAIAADtgAE3CKIAAkTIDpAAIAmAmIjeAAIAADHIDeAAIgmAmgACtCKIAAkTIAxAAIAAETgAhFCKIAAkTIAxAAIAAB6IC9AAIgmAkIiXAAIAAB1gAi9CKIiCjsIhRCXICeAAIgqAmIiIAAIgaAvIgyAAICUkTIBDAAICWETgApjCKIhyjsIhvDsIgzAAICFkTIBCAAICGETgAvUCKIAAjtIi6AAIAADtIgwAAIAAkTIEbAAIAAETgAPPAnIgpgmIAAiKIAwAAIAACKIC0AAIgoAmgAGVAVIgqgkIDAAAIAAAkg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-121.5,-13.8,243.1,27.8);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FFFF").s().p("AMNCKIgpgmIAAhRIhVAAIAAB3IgxAAIAAkTIAxAAIAAB4IBVAAIAAhSIApgmIDCAAIAmAmIAADHIgmAmgAMVBkIC0AAIAAjHIi0AAgAFPCKIgqgmIDjAAIAAjtIAxAAIAADtIgpAmgAAdCKIAAkTIAxAAIAAAAICcAAIAmAmIjCAAIAADtgAjwCKIgqgmIDjAAIAAjtIAxAAIAADtIgpAmgAotCKIAAkTIDcAAIApAmIAABxIgpAmIisAAIAABWgAn9AOICkAAIAAhxIikAAgAv0CKIAAgmIAnAAICAjtIBCAAICCDtIAqAAIAAAmgArDBkIhtjGIhrDGIDYAAgAFJAnIgpgmIAAiKIAxAAIAACKIC0AAIgpAmgAj2AnIgpgmIAAiKIAxAAIAACKIC0AAIgpAmg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101.3,-13.8,202.8,27.8);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FFFF").s().p("AE5CKIiCjsIhRCXICeAAIgrAmIiIAAIgZAvIgyAAICUkTIBDAAICVETgAh9CKIAAkTIAwAAIAAETgAlxCKIAAkTIAwAAIAAB6IC/AAIgmAkIiZAAIAAB1g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.1,-13.8,74.2,27.8);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FFFF").s().p("ALVBhIkdAAIAAkUIAxAAIAADuIDNAAIAAjuIAyAAIAADuIAdAAIAABPIgwAqgAR9BhIiCjsIhRCWICeAAIgrAmIiIAAIgZAwIgyAAICUkUIBCAAICWEUgAB1BhIAAkUIDpAAIAmAmIjeAAIAADHIDeABIgmAmgAgBBhIhyjsIhuDsIgzAAICFkUIBCAAICEEUgAodBhIAAkTIAwAAIAAgBICcAAIAnAmIjDAAIAADugAtlBhIAAkUIDpAAIAmAmIjeAAIAADHIDeABIgmAmgAxXBhIgpgmICvAAIAAhRIi0AAIAAB3IgwAAIAAkTIDogBIApAmIjhAAIAABRIC7AAIAqAmIAABRIgqAmgADUgTIgqgmIC/AAIAAAmgAsGgTIgqgmIC/AAIAAAmg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-120.7,-18,241.4,36.1);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FFFF").s().p("AOUCKIAAkTIAxAAIAADtICkAAIAAhqIh3AAIgpgmICgAAIAAABIAxAqIAABiIgxApgAJOCKIAAkTIDqAAIAmAmIAABLIgZAYIAZAYIAABMIgmAmgAJ/BkICuAAIAAhRIiuAAgAJ/gRICuAAIAAhSIiuAAgAHjCKIiCjsIhRCXICeAAIgqAmIiIAAIgaAvIgyAAICUkTIBDAAICWETgAh/CKIAAkTIDaAAIApAmIAABxIgpAmIiqAAIAABWgAhPAOICiAAIAAhxIiiAAgAj5CKIAAjtIi6AAIAADtIgwAAIAAkTIEbAAIAAETgArFCKIAAjtIiLAAIApgmID1AAIApAmIiLAAIAADtgAxwCKIgpgmIAAjHIApgmIDgAAIAqAmIAADHIgqAmgAxoBkIDRAAIAAjHIjRAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117.8,-13.8,235.8,27.8);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.space();
	this.instance.setTransform(1602.6,-199);

	this.instance_1 = new lib.space();
	this.instance_1.setTransform(1604.6,-199,1.023,1,0,0,180);

	this.instance_2 = new lib.space();
	this.instance_2.setTransform(-528,-199);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-528,-199,3186.6,398);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.men_from_the_planet_earth_by_markkarvond3eznv5();
	this.instance.setTransform(-400,-51);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-400,-51,800,102);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ57();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.531},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-261.9,-26.4,499.6,25.7);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ54();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:0.531},0).wait(4).to({alpha:1},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.4,-106.1,122.9,212.3);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(0,0,0.991,0.991,-107.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82.1,-121.6,164.2,232.6);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ53();
	this.instance.setTransform(-1.8,-7.4);
	this.instance.alpha = 0.531;
	this.instance.compositeOperation = "lighter";

	// Слой 1
	this.instance_1 = new lib.soldier_15();
	this.instance_1.setTransform(-90.1,-108.4,0.991,0.991,-10.7);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-90.1,-133.9,180.4,267.9);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// soldier_26.png
	this.instance = new lib.Символ31();
	this.instance.setTransform(610.6,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-81.7,x:971.2,y:277.5},4).to({rotation:-174.8,x:1282.7,y:-118.3},5,cjs.Ease.get(1)).to({rotation:-81.7,x:971.2,y:277.5},5,cjs.Ease.get(-1)).to({rotation:0,x:610.6,y:-8.1},5).wait(1));

	// soldier_11.png
	this.instance_1 = new lib.Символ32();
	this.instance_1.setTransform(802.9,-167.3,0.999,1.001,0,-14.8,-14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:-63.7,skewX:0,skewY:0,x:944.6,y:-142.3},4).to({rotation:-175.7,x:986.9,y:-291.5},5,cjs.Ease.get(1)).to({rotation:-71.9,x:934.5,y:-137.5},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,skewX:-14.8,skewY:-14.3,x:802.9,y:-167.3},5).wait(1));

	// soldier_06.png
	this.instance_2 = new lib.Символ33();
	this.instance_2.setTransform(861.2,-225,0.999,1.001,0,-14.8,-14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,rotation:-63.7,skewX:0,skewY:0,x:938.8,y:-224.5},4).to({rotation:-139,x:892.5,y:-290},5,cjs.Ease.get(1)).to({rotation:-71.9,x:917,y:-218.1},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,skewX:-14.8,skewY:-14.3,x:861.2,y:-225},5).wait(1));

	// soldier_04.png
	this.instance_3 = new lib.Символ34();
	this.instance_3.setTransform(704.3,-150.2,0.999,1.001,0,-14.8,-14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,rotation:-59.7,skewX:0,skewY:0,x:897.5,y:-65.5},4).to({rotation:-197.4,x:1084.3,y:-286.6},5,cjs.Ease.get(1)).to({rotation:-59.7,x:907.6,y:-80.8},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,skewX:-14.8,skewY:-14.3,x:704.3,y:-150.2},5).wait(1));

	// soldier_21.png
	this.instance_4 = new lib.Символ35();
	this.instance_4.setTransform(870.8,-200.5,0.999,1.001,0,-14.8,-14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,rotation:-4,skewX:0,skewY:0,x:911.5,y:-184.2},4).to({rotation:-12.2,x:874.8,y:-209.1},5,cjs.Ease.get(1)).to({x:895.8,y:-174.4},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,skewX:-14.8,skewY:-14.3,x:870.8,y:-200.5},5).wait(1));

	// soldier_18.png
	this.instance_5 = new lib.Символ36();
	this.instance_5.setTransform(902.5,-82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-81.7,x:939.6,y:-22},4).to({rotation:-154.2,x:984,y:-98.4},5,cjs.Ease.get(1)).to({rotation:-81.7,x:939.6,y:-22},5,cjs.Ease.get(-1)).to({rotation:0,x:902.5,y:-82.5},5).wait(1));

	// soldier_15.png
	this.instance_6 = new lib.Символ37();
	this.instance_6.setTransform(970.4,-252,0.999,1.001,0,-14.8,-14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1,rotation:-6.9,skewX:0,skewY:0,x:1002.7,y:-236.6},4).to({rotation:-12.2,x:976.7,y:-257.2},5,cjs.Ease.get(1)).to({rotation:-15.1,x:978.5,y:-239.2},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,skewX:-14.8,skewY:-14.3,x:970.4,y:-252},5).wait(1));

	// soldier_08.png
	this.instance_7 = new lib.Символ38();
	this.instance_7.setTransform(736.3,-25.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-81.7,x:972.2,y:150.7},4).to({rotation:-174.8,x:1156,y:-112.6},5,cjs.Ease.get(1)).to({rotation:-81.7,x:972.2,y:150.7},5,cjs.Ease.get(-1)).to({rotation:0,x:736.3,y:-25.4},5).wait(1));

	// soldier_26.png
	this.instance_8 = new lib.Символ39();
	this.instance_8.setTransform(1315.3,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:117.2,x:983.2,y:232.3},4).to({rotation:165.3,x:604,y:-68.8},5,cjs.Ease.get(1)).to({rotation:117.2,x:983.2,y:232.3},5,cjs.Ease.get(-1)).to({rotation:0,x:1315.3,y:-68},5).wait(1));

	// soldier_18.png
	this.instance_9 = new lib.Символ40();
	this.instance_9.setTransform(1037.8,-73.4,1,1,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:77.2,x:942.7,y:-18.4},4).to({rotation:165.3,x:877.3,y:-141.5},5,cjs.Ease.get(1)).to({rotation:77.2,x:942.7,y:-18.4},5,cjs.Ease.get(-1)).to({rotation:3.5,x:1037.8,y:-73.4},5).wait(1));

	// soldier_08.png
	this.instance_10 = new lib.Символ41();
	this.instance_10.setTransform(1188.7,-67.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:77.2,x:977.9,y:133.8},4).to({rotation:165.3,x:726.3,y:-101.2},5,cjs.Ease.get(1)).to({rotation:77.2,x:977.9,y:133.8},5,cjs.Ease.get(-1)).to({rotation:0,x:1188.7,y:-67.8},5).wait(1));

	// soldier_01.png
	this.instance_11 = new lib.Символ42();
	this.instance_11.setTransform(801.4,-352.8,0.999,1.001,0,-14.8,-14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:1,scaleY:1,rotation:-4,skewX:0,skewY:0,x:872,y:-346.6},4).to({rotation:-12.2,x:812.5,y:-364.1},5,cjs.Ease.get(1)).to({x:833.4,y:-329.4},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,skewX:-14.8,skewY:-14.3,x:801.4,y:-352.8},5).wait(1));

	// Символ 30
	this.instance_12 = new lib.Символ43();
	this.instance_12.setTransform(995.7,-234.4,0.999,1.001,0,-14.8,-14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleX:1,scaleY:1,rotation:72.2,skewX:0,skewY:0,x:882.3,y:-147.8},4).to({rotation:134.8,x:707.3,y:-228.4},5,cjs.Ease.get(1)).to({rotation:64,x:875.7,y:-108.8},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,skewX:-14.8,skewY:-14.3,x:995.7,y:-234.4},5).wait(1));

	// soldier_06.png
	this.instance_13 = new lib.Символ44();
	this.instance_13.setTransform(887.5,-279.1,0.999,1.001,0,-14.8,-14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({scaleX:1,scaleY:1,rotation:72.2,skewX:0,skewY:0,x:920.3,y:-232.5},4).to({rotation:134.8,x:822.7,y:-245.2},5,cjs.Ease.get(1)).to({rotation:64,x:897.6,y:-223.4},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,skewX:-14.8,skewY:-14.3,x:887.5,y:-279.1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(560,-457.3,806.2,524.5);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(-32,-238.4,0.269,0.653);

	this.instance_1 = new lib.Символ28();
	this.instance_1.setTransform(-32,-230.6,0.269,0.653);

	this.instance_2 = new lib.Символ28();
	this.instance_2.setTransform(-32,-222.7,0.269,0.653);

	this.instance_3 = new lib.Символ28();
	this.instance_3.setTransform(-32,-214.9,0.269,0.653);

	this.instance_4 = new lib.Символ28();
	this.instance_4.setTransform(-32,-207.1,0.269,0.653);

	this.instance_5 = new lib.Символ28();
	this.instance_5.setTransform(-32,-199.2,0.269,0.653);

	this.instance_6 = new lib.Символ28();
	this.instance_6.setTransform(-32,-191.4,0.269,0.653);

	this.instance_7 = new lib.Символ28();
	this.instance_7.setTransform(-32,-183.6,0.269,0.653);

	this.instance_8 = new lib.Символ28();
	this.instance_8.setTransform(-32,-175.7,0.269,0.653);

	this.instance_9 = new lib.Символ28();
	this.instance_9.setTransform(-32,-167.9,0.269,0.653);

	this.instance_10 = new lib.Символ28();
	this.instance_10.setTransform(-32,-160,0.269,0.653);

	this.instance_11 = new lib.Символ28();
	this.instance_11.setTransform(-32,-152.2,0.269,0.653);

	this.instance_12 = new lib.Символ28();
	this.instance_12.setTransform(-32,-144.4,0.269,0.653);

	this.instance_13 = new lib.Символ28();
	this.instance_13.setTransform(-32,-136.5,0.269,0.653);

	this.instance_14 = new lib.Символ28();
	this.instance_14.setTransform(-32,-128.7,0.269,0.653);

	this.instance_15 = new lib.Символ28();
	this.instance_15.setTransform(-32,-120.2,0.269,0.653);

	this.instance_16 = new lib.Символ28();
	this.instance_16.setTransform(-32,-112.3,0.269,0.653);

	this.instance_17 = new lib.Символ28();
	this.instance_17.setTransform(-32,-104.5,0.269,0.653);

	this.instance_18 = new lib.Символ28();
	this.instance_18.setTransform(-32,-96.6,0.269,0.653);

	this.instance_19 = new lib.Символ28();
	this.instance_19.setTransform(-32,-88.8,0.269,0.653);

	this.instance_20 = new lib.Символ28();
	this.instance_20.setTransform(-32,-81,0.269,0.653);

	this.instance_21 = new lib.Символ28();
	this.instance_21.setTransform(-32,-73.1,0.269,0.653);

	this.instance_22 = new lib.Символ28();
	this.instance_22.setTransform(-32,-65.3,0.269,0.653);

	this.instance_23 = new lib.Символ28();
	this.instance_23.setTransform(-32,-57.5,0.269,0.653);

	this.instance_24 = new lib.Символ28();
	this.instance_24.setTransform(-32,-49.6,0.269,0.653);

	this.instance_25 = new lib.Символ28();
	this.instance_25.setTransform(-32,-41.8,0.269,0.653);

	this.instance_26 = new lib.Символ28();
	this.instance_26.setTransform(-32,-33.9,0.269,0.653);

	this.instance_27 = new lib.Символ28();
	this.instance_27.setTransform(-32,-26.1,0.269,0.653);

	this.instance_28 = new lib.Символ28();
	this.instance_28.setTransform(-32,-18.3,0.269,0.653);

	this.instance_29 = new lib.Символ28();
	this.instance_29.setTransform(-32,-10.4,0.269,0.653);

	this.instance_30 = new lib.Символ28();
	this.instance_30.setTransform(-32,-2.6,0.269,0.653);

	this.addChild(this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.5,-241,25,241.1);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 23
	this.instance = new lib.Символ23();
	this.instance.setTransform(-0.6,167.2,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.25},5).to({alpha:1},4).wait(14));

	// Символ 23
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(-0.6,161.3,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0.25},5).to({alpha:1},4).wait(13));

	// Символ 23
	this.instance_2 = new lib.Символ23();
	this.instance_2.setTransform(-0.6,155.3,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({alpha:0.25},5).to({alpha:1},4).wait(12));

	// Символ 23
	this.instance_3 = new lib.Символ23();
	this.instance_3.setTransform(-0.6,149.4,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({alpha:0.25},5).to({alpha:1},4).wait(11));

	// Символ 23
	this.instance_4 = new lib.Символ23();
	this.instance_4.setTransform(-0.6,143.5,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({alpha:0.25},5).to({alpha:1},4).wait(10));

	// Символ 23
	this.instance_5 = new lib.Символ23();
	this.instance_5.setTransform(-0.6,137.6,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({alpha:0.25},5).to({alpha:1},4).wait(9));

	// Символ 23
	this.instance_6 = new lib.Символ23();
	this.instance_6.setTransform(-0.6,131.7,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({alpha:0.25},5).to({alpha:1},4).wait(8));

	// Символ 23
	this.instance_7 = new lib.Символ23();
	this.instance_7.setTransform(-0.6,125.8,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({alpha:0.25},5).to({alpha:1},4).wait(7));

	// Символ 23
	this.instance_8 = new lib.Символ23();
	this.instance_8.setTransform(-0.6,119.9,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({alpha:0.25},5).to({alpha:1},4).wait(6));

	// Символ 23
	this.instance_9 = new lib.Символ23();
	this.instance_9.setTransform(-0.6,113.9,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({alpha:0.25},5).to({alpha:1},4).wait(5));

	// Символ 23
	this.instance_10 = new lib.Символ23();
	this.instance_10.setTransform(-0.6,108,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10).to({alpha:0.25},5).to({alpha:1},4).wait(4));

	// Символ 23
	this.instance_11 = new lib.Символ23();
	this.instance_11.setTransform(-0.6,102.1,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(11).to({alpha:0.25},5).to({alpha:1},4).wait(3));

	// Символ 23
	this.instance_12 = new lib.Символ23();
	this.instance_12.setTransform(-0.6,96.2,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(12).to({alpha:0.25},5).to({alpha:1},4).wait(2));

	// Символ 23
	this.instance_13 = new lib.Символ23();
	this.instance_13.setTransform(-0.6,90.3,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(13).to({alpha:0.25},5).to({alpha:1},4).wait(1));

	// Символ 23
	this.instance_14 = new lib.Символ23();
	this.instance_14.setTransform(-0.6,61.2,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(13).to({alpha:0.25},5).to({alpha:1},4).wait(1));

	// Символ 23
	this.instance_15 = new lib.Символ23();
	this.instance_15.setTransform(-0.6,55.3,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(12).to({alpha:0.25},5).to({alpha:1},4).wait(2));

	// Символ 23
	this.instance_16 = new lib.Символ23();
	this.instance_16.setTransform(-0.6,49.3,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(11).to({alpha:0.25},5).to({alpha:1},4).wait(3));

	// Символ 23
	this.instance_17 = new lib.Символ23();
	this.instance_17.setTransform(-0.6,43.4,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10).to({alpha:0.25},5).to({alpha:1},4).wait(4));

	// Символ 23
	this.instance_18 = new lib.Символ23();
	this.instance_18.setTransform(-0.6,37.5,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(9).to({alpha:0.25},5).to({alpha:1},4).wait(5));

	// Символ 23
	this.instance_19 = new lib.Символ23();
	this.instance_19.setTransform(-0.6,31.6,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(8).to({alpha:0.25},5).to({alpha:1},4).wait(6));

	// Символ 23
	this.instance_20 = new lib.Символ23();
	this.instance_20.setTransform(-0.6,25.7,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(7).to({alpha:0.25},5).to({alpha:1},4).wait(7));

	// Символ 23
	this.instance_21 = new lib.Символ23();
	this.instance_21.setTransform(-0.6,19.8,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(6).to({alpha:0.25},5).to({alpha:1},4).wait(8));

	// Символ 23
	this.instance_22 = new lib.Символ23();
	this.instance_22.setTransform(-0.6,13.9,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(5).to({alpha:0.25},5).to({alpha:1},4).wait(9));

	// Символ 23
	this.instance_23 = new lib.Символ23();
	this.instance_23.setTransform(-0.6,7.9,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(4).to({alpha:0.25},5).to({alpha:1},4).wait(10));

	// Символ 23
	this.instance_24 = new lib.Символ23();
	this.instance_24.setTransform(-0.6,2,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(3).to({alpha:0.25},5).to({alpha:1},4).wait(11));

	// Символ 23
	this.instance_25 = new lib.Символ23();
	this.instance_25.setTransform(-0.6,-3.9,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(2).to({alpha:0.25},5).to({alpha:1},4).wait(12));

	// Символ 23
	this.instance_26 = new lib.Символ23();
	this.instance_26.setTransform(-0.6,-9.8,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1).to({alpha:0.25},5).to({alpha:1},4).wait(13));

	// Символ 23
	this.instance_27 = new lib.Символ23();
	this.instance_27.setTransform(-0.6,-15.7,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).to({alpha:0.25},5).to({alpha:1},4).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-18.3,5.3,188.2);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1.8,y:4.5},9,cjs.Ease.get(-1)).to({rotation:4.4,y:10},11,cjs.Ease.get(1)).to({rotation:2.3,y:5.5},9,cjs.Ease.get(-1)).to({rotation:0,y:0},11,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-59.5,200,119);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(116,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(16,-59.5,200,119);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:0.699},0).wait(5).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-15,13.6,30.1);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 12
	this.instance = new lib.Символ12();
	this.instance.setTransform(-473.6,-516.5,0.517,0.517);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({alpha:0.699},9).to({alpha:1},10).wait(1));

	// Символ 11
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(-610.8,-515.5,0.517,0.517);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({alpha:0.699},9).to({alpha:1},10).wait(8));

	// Символ 10
	this.instance_2 = new lib.Символ10();
	this.instance_2.setTransform(-705,-515.5,0.517,0.517);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({alpha:0.699},9).to({alpha:1},10).wait(13));

	// Символ 9
	this.instance_3 = new lib.Символ9();
	this.instance_3.setTransform(-810.4,-513.4,0.517,0.517);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({alpha:0.699},9).to({alpha:1},10).wait(17));

	// Символ 8
	this.instance_4 = new lib.Символ8();
	this.instance_4.setTransform(-958.7,-515.5,0.517,0.517);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:0.699},9).to({alpha:1},10).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1019.6,-523.7,609,19.7);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(-1065.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-3199.8},549).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1593.3,-199,3186.6,398);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(1662.9,0);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(832,0,1.085,1,0,0,180);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.Символ1();
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-400,-51,2462.9,102);


(lib.Символ45 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.setTransform(10.6,23.8,0.317,0.312,0,0,180,929.7,-119);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-127.6,-81.9,255.4,163.9);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(54.3,-25.3,0.778,0.778,65.7);

	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(-22.9,-54.5,0.778,0.778,-24.3);

	this.instance_2 = new lib.Символ22();
	this.instance_2.setTransform(56,20.1,0.778,0.778,110.7);

	this.instance_3 = new lib.Символ22();
	this.instance_3.setTransform(21.6,-55.2,0.778,0.778,20.7);

	this.instance_4 = new lib.Символ22();
	this.instance_4.setTransform(53.5,-54.5,1,1,45);

	this.instance_5 = new lib.Символ22();
	this.instance_5.setTransform(-52.6,-54.5,1,1,-45);

	this.instance_6 = new lib.Символ22();
	this.instance_6.setTransform(76.2,-0.7,1,1,90);

	this.instance_7 = new lib.Символ22();
	this.instance_7.setTransform(0.6,-75.7);

	this.addChild(this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-93.7,-94,188.2,188.2);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ14();
	this.instance.setTransform(-311.1,-2);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:342.7},39).wait(60).to({x:-311.1},10).wait(1));

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A7xDeIAAm7IGfAAIAAG7g");
	var mask_graphics_1 = new cjs.Graphics().p("A7xDeIAAm7IJIAAIAAG7g");
	var mask_graphics_2 = new cjs.Graphics().p("A7wDeIAAm7ILwAAIAAG7g");
	var mask_graphics_3 = new cjs.Graphics().p("A7wDeIAAm7IOZAAIAAG7g");
	var mask_graphics_4 = new cjs.Graphics().p("A7vDeIAAm7IRBAAIAAG7g");
	var mask_graphics_5 = new cjs.Graphics().p("A7vDeIAAm7ITqAAIAAG7g");
	var mask_graphics_6 = new cjs.Graphics().p("A7uDeIAAm7IWSAAIAAG7g");
	var mask_graphics_7 = new cjs.Graphics().p("A7uDeIAAm7IY7AAIAAG7g");
	var mask_graphics_8 = new cjs.Graphics().p("A7tDeIAAm7IbjAAIAAG7g");
	var mask_graphics_9 = new cjs.Graphics().p("A7tDeIAAm7IeKAAIAAG7g");
	var mask_graphics_10 = new cjs.Graphics().p("A7sDeIAAm7MAgyAAAIAAG7g");
	var mask_graphics_11 = new cjs.Graphics().p("A7sDeIAAm7MAjbAAAIAAG7g");
	var mask_graphics_12 = new cjs.Graphics().p("A7rDeIAAm7MAmDAAAIAAG7g");
	var mask_graphics_13 = new cjs.Graphics().p("A7rDeIAAm7MAosAAAIAAG7g");
	var mask_graphics_14 = new cjs.Graphics().p("A7qDeIAAm7MArVAAAIAAG7g");
	var mask_graphics_15 = new cjs.Graphics().p("A7pDeIAAm7MAt9AAAIAAG7g");
	var mask_graphics_16 = new cjs.Graphics().p("A7pDeIAAm7MAwmAAAIAAG7g");
	var mask_graphics_17 = new cjs.Graphics().p("A7oDeIAAm7MAzOAAAIAAG7g");
	var mask_graphics_18 = new cjs.Graphics().p("A7oDeIAAm7MA13AAAIAAG7g");
	var mask_graphics_19 = new cjs.Graphics().p("A8PDeIAAm7MA4fAAAIAAG7g");
	var mask_graphics_20 = new cjs.Graphics().p("A9jDeIAAm7MA7HAAAIAAG7g");
	var mask_graphics_21 = new cjs.Graphics().p("A+3DeIAAm7MA9wAAAIAAG7g");
	var mask_graphics_22 = new cjs.Graphics().p("EggMADeIAAm7MBAZAAAIAAG7g");
	var mask_graphics_23 = new cjs.Graphics().p("EghgADeIAAm7MBDBAAAIAAG7g");
	var mask_graphics_24 = new cjs.Graphics().p("Egi0ADeIAAm7MBFpAAAIAAG7g");
	var mask_graphics_25 = new cjs.Graphics().p("EgkJADeIAAm7MBITAAAIAAG7g");
	var mask_graphics_26 = new cjs.Graphics().p("EgldADeIAAm7MBK7AAAIAAG7g");
	var mask_graphics_27 = new cjs.Graphics().p("EgmxADeIAAm7MBNjAAAIAAG7g");
	var mask_graphics_28 = new cjs.Graphics().p("EgoFADeIAAm7MBQLAAAIAAG7g");
	var mask_graphics_29 = new cjs.Graphics().p("EgpaADeIAAm7MBS0AAAIAAG7g");
	var mask_graphics_30 = new cjs.Graphics().p("EgquADeIAAm7MBVdAAAIAAG7g");
	var mask_graphics_31 = new cjs.Graphics().p("EgsCADeIAAm7MBYFAAAIAAG7g");
	var mask_graphics_32 = new cjs.Graphics().p("EgtWADeIAAm7MBatAAAIAAG7g");
	var mask_graphics_33 = new cjs.Graphics().p("EguqADeIAAm7MBdWAAAIAAG7g");
	var mask_graphics_34 = new cjs.Graphics().p("Egv/ADeIAAm7MBf/AAAIAAG7g");
	var mask_graphics_35 = new cjs.Graphics().p("EgxTADeIAAm7MBinAAAIAAG7g");
	var mask_graphics_36 = new cjs.Graphics().p("EgynADeIAAm7MBlPAAAIAAG7g");
	var mask_graphics_37 = new cjs.Graphics().p("Egz7ADeIAAm7MBn4AAAIAAG7g");
	var mask_graphics_38 = new cjs.Graphics().p("Eg1QADeIAAm7MBqhAAAIAAG7g");
	var mask_graphics_39 = new cjs.Graphics().p("Eg2kADeIAAm7MBtJAAAIAAG7g");
	var mask_graphics_99 = new cjs.Graphics().p("Eg2kADeIAAm7MBtJAAAIAAG7g");
	var mask_graphics_100 = new cjs.Graphics().p("EgxbADeIAAm7MBi3AAAIAAG7g");
	var mask_graphics_101 = new cjs.Graphics().p("EgsTADeIAAm7MBYnAAAIAAG7g");
	var mask_graphics_102 = new cjs.Graphics().p("EgnKADeIAAm7MBOVAAAIAAG7g");
	var mask_graphics_103 = new cjs.Graphics().p("EgiCADeIAAm7MBEFAAAIAAG7g");
	var mask_graphics_104 = new cjs.Graphics().p("A85DeIAAm7MA5zAAAIAAG7g");
	var mask_graphics_105 = new cjs.Graphics().p("A7yDeIAAm7MAviAAAIAAG7g");
	var mask_graphics_106 = new cjs.Graphics().p("A7yDeIAAm7MAlRAAAIAAG7g");
	var mask_graphics_107 = new cjs.Graphics().p("A7zDeIAAm7IbCAAIAAG7g");
	var mask_graphics_108 = new cjs.Graphics().p("A7zDeIAAm7IQxAAIAAG7g");
	var mask_graphics_109 = new cjs.Graphics().p("A7xDeIAAm7IGfAAIAAG7g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-177.9,y:-2}).wait(1).to({graphics:mask_graphics_1,x:-177.8,y:-2}).wait(1).to({graphics:mask_graphics_2,x:-177.8,y:-2}).wait(1).to({graphics:mask_graphics_3,x:-177.7,y:-2}).wait(1).to({graphics:mask_graphics_4,x:-177.7,y:-2}).wait(1).to({graphics:mask_graphics_5,x:-177.6,y:-2}).wait(1).to({graphics:mask_graphics_6,x:-177.6,y:-2}).wait(1).to({graphics:mask_graphics_7,x:-177.5,y:-2}).wait(1).to({graphics:mask_graphics_8,x:-177.5,y:-2}).wait(1).to({graphics:mask_graphics_9,x:-177.4,y:-2}).wait(1).to({graphics:mask_graphics_10,x:-177.4,y:-2}).wait(1).to({graphics:mask_graphics_11,x:-177.3,y:-2}).wait(1).to({graphics:mask_graphics_12,x:-177.3,y:-2}).wait(1).to({graphics:mask_graphics_13,x:-177.2,y:-2}).wait(1).to({graphics:mask_graphics_14,x:-177.1,y:-2}).wait(1).to({graphics:mask_graphics_15,x:-177.1,y:-2}).wait(1).to({graphics:mask_graphics_16,x:-177,y:-2}).wait(1).to({graphics:mask_graphics_17,x:-177,y:-2}).wait(1).to({graphics:mask_graphics_18,x:-176.9,y:-2}).wait(1).to({graphics:mask_graphics_19,x:-172.9,y:-2}).wait(1).to({graphics:mask_graphics_20,x:-164.4,y:-2}).wait(1).to({graphics:mask_graphics_21,x:-155.8,y:-2}).wait(1).to({graphics:mask_graphics_22,x:-147.3,y:-2}).wait(1).to({graphics:mask_graphics_23,x:-138.8,y:-2}).wait(1).to({graphics:mask_graphics_24,x:-130.3,y:-2}).wait(1).to({graphics:mask_graphics_25,x:-121.7,y:-2}).wait(1).to({graphics:mask_graphics_26,x:-113.2,y:-2}).wait(1).to({graphics:mask_graphics_27,x:-104.7,y:-2}).wait(1).to({graphics:mask_graphics_28,x:-96.1,y:-2}).wait(1).to({graphics:mask_graphics_29,x:-87.6,y:-2}).wait(1).to({graphics:mask_graphics_30,x:-79.1,y:-2}).wait(1).to({graphics:mask_graphics_31,x:-70.5,y:-2}).wait(1).to({graphics:mask_graphics_32,x:-62,y:-2}).wait(1).to({graphics:mask_graphics_33,x:-53.5,y:-2}).wait(1).to({graphics:mask_graphics_34,x:-44.9,y:-2}).wait(1).to({graphics:mask_graphics_35,x:-36.4,y:-2}).wait(1).to({graphics:mask_graphics_36,x:-27.9,y:-2}).wait(1).to({graphics:mask_graphics_37,x:-19.3,y:-2}).wait(1).to({graphics:mask_graphics_38,x:-10.8,y:-2}).wait(1).to({graphics:mask_graphics_39,x:-6.5,y:-2}).wait(60).to({graphics:mask_graphics_99,x:-6.5,y:-2}).wait(1).to({graphics:mask_graphics_100,x:-39.4,y:-2}).wait(1).to({graphics:mask_graphics_101,x:-72.2,y:-2}).wait(1).to({graphics:mask_graphics_102,x:-105.1,y:-2}).wait(1).to({graphics:mask_graphics_103,x:-138,y:-2}).wait(1).to({graphics:mask_graphics_104,x:-170.9,y:-2}).wait(1).to({graphics:mask_graphics_105,x:-178,y:-2}).wait(1).to({graphics:mask_graphics_106,x:-178,y:-2}).wait(1).to({graphics:mask_graphics_107,x:-178,y:-2}).wait(1).to({graphics:mask_graphics_108,x:-178,y:-2}).wait(1).to({graphics:mask_graphics_109,x:-177.9,y:-2}).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(715.2,513.9);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(110));

	// Слой 4
	this.instance_2 = new lib.Символ18();
	this.instance_2.setTransform(-14.8,-2.2);
	this.instance_2.alpha = 0.469;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-385.4,-17,741.2,30.1);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ehw+ALkIAA23QA6AIBmAAQCagHCAACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAxgNQArgKBLAAQBVAACZAYQCMAYAMAAQAkAAAzgPIBHgWIDGgBQAZALAaAJQAyASArAAQAlAAA4gTQA5gTAuAAQCBAAAjAJQASALAUADIDOAAQBlgLAzgCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKASgGIBBAAIAFADQAbAQBiAAQA4AAAngIIBKAPQCmAhBiAAQAzAAAVgHQAbgLAigEICigDIAagDIDkgCQAQgCALgIQALAFARAAQALAADugYIBNAAQAdATBNAAQAxAAAYgGIAGADQAcAPAbADICWAAQAlgGAGAJQAIAMAuAAQAdAABMgdIAhgLIAdAPIC6AAIAHgBIAAgHIANACIADgCIAKADQA2AFBOAAQCcgHB/ACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAygNQArgKBKAAQBUAACaAYQCMAYAMAAQAkAAA0gPIBFgWIDGgBQAZALAaAJQAzASAsAAQAjAAA5gTQA5gTAtAAQCCAAAkAJQARALAUADIDOAAQBmgLAxgCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKAUgGIBAAAIAEADQAdAQBhAAQA3AAAogIIBJAPQCmAhBiAAQA1AAATgHQAcgLAigEIChgDIAagDIDmgCQAPgCALgIQALAFARAAQAMAADsgYIBOAAQAdATBOAAQAwAAAYgGIAFADQAcAPAbADICWAAQAngGAFAJQAIAMAuAAQAdAABNgdIAfgLIAfAPIC4AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_1 = new cjs.Graphics().p("Ehw+ALkIAA23QA6AIBlAAQCcgHB/ACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAygNQArgKBKAAQBUAACaAYQCMAYAMAAQAkAAA0gPIBGgWIDGgBQAYALAaAJQA0ASArAAQAjAAA5gTQA5gTAtAAQCCAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKASgGIBBAAIAFADQAcAQBhAAQA3AAAogIIBJAPQCmAhBjAAQA0AAAUgHQAbgLAigEIChgDIAagDIDmgCQAPgCALgIQALAFARAAQAMAADsgYIBOAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICVAAQAmgGAGAJQAIAMAuAAQAdAABNgdIAfgLIAfAPIC4AAIAIgBIAAgHIANACIADgCIAKADQA2AFBOAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAbAHAQAAIFyAAIAxgNQAsgKBKAAQBUAACaAYQCMAYANAAQAjAAAzgPIBGgWIDGgBQAaALAaAJQAzASAqAAQAlAAA4gTQA5gTAuAAQCBAAAjAJQASALAUADIDOAAQBmgLAxgCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKAUgGIBBAAIADADQAcAQBiAAQA4AAAogIIBJAPQClAhBiAAQA1AAATgHQAcgLAigEICigDIAagDIDkgCQAQgCALgIQALAFARAAQALAADugYIBNAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICXAAQAmgGAFAJQAIAMAuAAQAdAABMgdIAhgLIAdAPIC6AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_2 = new cjs.Graphics().p("Ehw/ALkIAA23QA7AIBlAAQCcgHB/ACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAygNQArgKBKAAQBUAACaAYQCMAYAMAAQAkAAA0gPIBGgWIDFgBQAZALAaAJQAzASAsAAQAjAAA5gTQA5gTAtAAQCCAAAkAJQARALAUADIDOAAQBmgLAxgCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKAUgGIBAAAIAEADQAdAQBhAAQA3AAAogIIBJAPQCmAhBiAAQA1AAATgHQAcgLAigEIChgDIAagDIDmgCQAPgCALgIQALAFARAAQAMAADsgYIBOAAQAdATBOAAQAwAAAYgGIAFADQAcAPAbADICWAAQAngGAFAJQAIAMAuAAQAdAABNgdIAfgLIAfAPIC4AAIAIgBIAAgHIANACIADgCIAKADQA2AFBPAAQCagHCAACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAxgNQArgKBLAAQBVAACZAYQCMAYANAAQAjAAAzgPIBHgWIDFgBQAaALAaAJQAyASArAAQAlAAA4gTQA5gTAuAAQCBAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKASgGIBCAAIAEADQAbAQBiAAQA4AAAogIIBJAPQCmAhBiAAQAzAAAVgHQAbgLAigEICigDIAagDIDkgCQAQgCALgIQALAFARAAQALAADugYIBNAAQAdATBNAAQAxAAAYgGIAGADQAcAPAbADICWAAQAlgGAGAJQAIAMAuAAQAdAABMgdIAhgLIAdAPIC6AAQANgBAKgHIAXAHQBBAVAaAAQAbAAAYgEIAAWfg");
	var mask_graphics_3 = new cjs.Graphics().p("Ehw/ALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICoAAQAIAIAbAIQAbAHAQAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYANAAQAjAAAzgPIBGgWIDGgBQAaALAaAJQAzASAqAAQAlAAA4gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKAUgGIBBAAIADADQAcAQBiAAQA4AAAogIIBJAPQClAhBiAAQA1AAATgHQAcgLAigEICigDIAagDIDkgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICXAAQAmgGAFAJQAIAMAuAAQAdAABMgdIAhgLIAdAPIC6AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBPAAQCagHCAACICMAAIAxgIICoAAQAIAIAcAIQAZAHARAAIFyAAIAygNQArgKBKAAQBUAACaAYQCMAYAMAAQAkAAA0gPIBGgWIDGgBQAYALAaAJQA0ASArAAQAjAAA5gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKASgGIBBAAIAFADQAcAQBhAAQA3AAAogIIBJAPQCmAhBjAAQAzAAAVgHQAbgLAigEICigDIAZgDIDmgCQAPgCALgIQALAFARAAQALAADugYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICVAAQAmgGAGAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC4AAQAOgBAKgHIAXAHQBBAVAaAAQAcAAAWgEIAAWfg");
	var mask_graphics_4 = new cjs.Graphics().p("Ehw/ALkIAA23QA7AIBmAAQCagHCAACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAxgNQArgKBLAAQBVAACZAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAaALAaAJQAyASArAAQAlAAA4gTQA5gTAuAAQCBAAAjAJQASALAUADIDOAAQBlgLAzgCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKASgGIBBAAIAFADQAbAQBiAAQA4AAAngIIBKAPQCmAhBhAAQA0AAAVgHQAbgLAigEICigDIAagDIDkgCQAQgCALgIQALAFARAAQALAADugYIBNAAQAdATBNAAQAxAAAYgGIAGADQAcAPAaADICXAAQAlgGAGAJQAIAMAuAAQAdAABMgdIAhgLIAdAPIC6AAIAHgBIAAgHIANACIADgCIAKADQA2AFBOAAQCcgHB/ACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAygNQArgKBKAAQBUAACaAYQCMAYAMAAQAkAAA0gPIBFgWIDGgBQAZALAaAJQAzASAsAAQAjAAA5gTQA5gTAtAAQCCAAAkAJQARALAUADIDOAAQBmgLAxgCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKAUgGIBAAAIAEADQAdAQBhAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDmgCQAPgCALgIQALAFARAAQAMAADsgYIBOAAQAdATBOAAQAwAAAYgGIAFADQAcAPAbADICWAAQAngGAFAJQAIAMAuAAQAdAABNgdIAfgLIAfAPIC4AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_5 = new cjs.Graphics().p("Ehw+ALkIAA23QA6AIBlAAQCcgHB/ACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAygNQArgKBKAAQBUAACaAYQCMAYAMAAQAkAAA0gPIBGgWIDGgBQAYALAaAJQA0ASArAAQAjAAA5gTQA5gTAtAAQCCAAAkAJQARALAUADIDOAAQBlgLAzgCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKASgGIBBAAIAFADQAcAQBhAAQA3AAAogIIBJAPQCmAhBjAAQAzAAAVgHQAbgLAigEIChgDIAagDIDmgCQAPgCALgIQALAFARAAQAMAADsgYIBOAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICVAAQAmgGAGAJQAIAMAuAAQAdAABNgdIAfgLIAfAPIC4AAIAIgBIAAgHIANACIADgCIAKADQA2AFBOAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAbAHAQAAIFyAAIAxgNQAsgKBKAAQBUAACaAYQCMAYANAAQAjAAAzgPIBGgWIDGgBQAZALAbAJQAzASAqAAQAlAAA4gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBmgLAxgCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKAUgGIBBAAIADADQAcAQBiAAQA4AAAogIIBJAPQClAhBiAAQA1AAATgHQAcgLAigEIChgDIAbgDIDkgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICXAAQAmgGAFAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC6AAQANgBAKgHIAWAHQBCAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_6 = new cjs.Graphics().p("Ehw/ALkIAA23QA7AIBlAAQCcgHB/ACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAygNQArgKBKAAQBUAACaAYQCMAYAMAAQAkAAA0gPIBGgWIDFgBQAZALAaAJQAzASAsAAQAjAAA5gTQA5gTAtAAQCCAAAkAJQARALAUADIDOAAQBmgLAxgCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKAUgGIBAAAIAEADQAdAQBhAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDmgCQAPgCALgIQALAFARAAQAMAADsgYIBOAAQAdATBOAAQAwAAAYgGIAFADQAcAPAbADICWAAQAngGAFAJQAIAMAuAAQAdAABNgdIAfgLIAfAPIC4AAIAIgBIAAgHIANACIADgCIAKADQA2AFBPAAQCagHCAACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAxgNQArgKBLAAQBVAACZAYQCMAYANAAQAjAAAzgPIBGgWIDGgBQAaALAaAJQAyASArAAQAlAAA4gTQA5gTAuAAQCBAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKASgGIBCAAIADADQAcAQBiAAQA4AAAogIIBJAPQCmAhBhAAQA1AAATgHQAcgLAigEICigDIAagDIDkgCQAQgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBNAAQAxAAAYgGIAGADQAbAPAbADICXAAQAlgGAGAJQAIAMAuAAQAdAABMgdIAhgLIAdAPIC6AAQANgBAKgHIAXAHQBBAVAaAAQAbAAAYgEIAAWfg");
	var mask_graphics_7 = new cjs.Graphics().p("Ehw/ALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYANAAQAjAAAzgPIBGgWIDGgBQAZALAbAJQAzASAqAAQAlAAA4gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKAUgGIBBAAIADADQAcAQBiAAQA4AAAogIIBJAPQClAhBiAAQA1AAATgHQAcgLAigEIChgDIAbgDIDkgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICXAAQAmgGAFAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC6AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBPAAQCagHCAACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYAMAAQAkAAAzgPIBHgWIDGgBQAZALAZAJQA0ASArAAQAjAAA5gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKASgGIBBAAIAFADQAcAQBhAAQA3AAAogIIBJAPQCnAhBiAAQAzAAAVgHQAbgLAigEICigDIAZgDIDmgCQAPgCALgIQALAFARAAQALAADugYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICVAAQAmgGAGAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC4AAQAOgBAKgHIAXAHQBBAVAaAAQAcAAAWgEIAAWfg");
	var mask_graphics_8 = new cjs.Graphics().p("Ehw/ALkIAA23QA7AIBmAAQCagHCAACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAxgNQArgKBLAAQBVAACZAYQCMAYANAAQAjAAAzgPIBGgWIDGgBQAaALAaAJQAzASAqAAQAlAAA4gTQA5gTAuAAQCBAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAXgKASgGIBCAAIADADQAcAQBiAAQA4AAAogIIBJAPQCmAhBhAAQA1AAATgHQAcgLAigEICigDIAagDIDkgCQAQgCALgIQALAFARAAQALAADugYIBNAAQAdATBNAAQAxAAAYgGIAGADQAbAPAbADICXAAQAlgGAGAJQAIAMAuAAQAdAABMgdIAhgLIAdAPIC6AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBOAAQCcgHB/ACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAygNQArgKBKAAQBUAACaAYQCMAYAMAAQAkAAA0gPIBGgWIDGgBQAYALAaAJQAzASAsAAQAjAAA5gTQA5gTAtAAQCCAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKAUgGIBAAAIAFADQAcAQBhAAQA3AAAogIIBJAPQCnAhBiAAQAzAAAVgHQAbgLAigEIChgDIAagDIDmgCQAPgCALgIQALAFARAAQAMAADsgYIBOAAQAdATBOAAQAwAAAYgGIAFADQAcAPAcADICVAAQAmgGAGAJQAIAMAuAAQAdAABNgdIAfgLIAfAPIC4AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_9 = new cjs.Graphics().p("Ehw+ALkIAA23QA6AIBlAAQCcgHB/ACICMAAIAxgIICoAAQAIAIAbAIQAaAHARAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYAMAAQAkAAAzgPIBHgWIDGgBQAYALAaAJQA0ASArAAQAjAAA5gTQA5gTAtAAQCCAAAkAJQARALAUADIDOAAQBlgLAzgCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKASgGIBBAAIAFADQAcAQBhAAQA3AAAogIIBJAPQCmAhBjAAQAzAAAVgHQAbgLAigEICigDIAZgDIDmgCQAPgCALgIQALAFARAAQALAADugYIBNAAQAdATBNAAQAxAAAYgGIAGADQAcAPAbADICVAAQAmgGAGAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC4AAIAIgBIAAgHIANACIADgCIAKADQA2AFBOAAQCcgHB/ACICMAAIAxgIICnAAQAJAIAbAIQAbAHAQAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYANAAQAjAAA0gPIBFgWIDGgBQAZALAbAJQAzASAqAAQAlAAA4gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKAUgGIBBAAIADADQAdAQBhAAQA4AAAogIIBJAPQClAhBiAAQA1AAATgHQAcgLAigEIChgDIAbgDIDkgCQAQgCALgIQALAFARAAQAMAADsgYIBOAAQAdATBOAAQAwAAAYgGIAFADQAcAPAbADICXAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAfgLIAeAPIC6AAQANgBAKgHIAWAHQBCAVAaAAQAbAAAYgEIAAWfg");
	var mask_graphics_10 = new cjs.Graphics().p("Ehw+ALkIAA23QA6AIBlAAQCcgHB/ACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAygNQArgKBKAAQBUAACaAYQCMAYAMAAQAkAAA0gPIBGgWIDGgBQAYALAaAJQAzASAsAAQAjAAA5gTQA5gTAtAAQCCAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKAUgGIBAAAIAEADQAdAQBhAAQA3AAAogIIBJAPQCmAhBjAAQAzAAAUgHQAcgLAigEIChgDIAagDIDmgCQAPgCALgIQALAFARAAQAMAADsgYIBOAAQAdATBOAAQAwAAAYgGIAFADQAcAPAcADICVAAQAmgGAGAJQAIAMAuAAQAdAABNgdIAfgLIAfAPIC4AAIAIgBIAAgHIANACIADgCIAKADQA2AFBPAAQCagHCAACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAxgNQArgKBLAAQBVAACZAYQCMAYANAAQAjAAAzgPIBGgWIDGgBQAaALAaAJQAzASAqAAQAlAAA4gTQA5gTAuAAQCBAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAXgKASgGIBCAAIADADQAcAQBiAAQA4AAAogIIBJAPQCmAhBhAAQA1AAATgHQAcgLAigEICigDIAagDIDkgCQAQgCALgIQALAFARAAQALAADugYIBNAAQAdATBNAAQAxAAAYgGIAGADQAbAPAbADICXAAQAmgGAFAJQAIAMAuAAQAdAABMgdIAhgLIAdAPIC6AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_11 = new cjs.Graphics().p("Ehw/ALkIAA23QA7AIBlAAQCcgHB/ACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYANAAQAjAAA0gPIBFgWIDGgBQAZALAbAJQAzASAqAAQAlAAA4gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKAUgGIBBAAIADADQAdAQBhAAQA4AAAogIIBIAPQCmAhBiAAQA1AAATgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQAMAADsgYIBOAAQAdATBOAAQAwAAAYgGIAFADQAcAPAbADICXAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAfgLIAeAPIC6AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBPAAQCagHCAACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQAqgKBLAAQBVAACZAYQCMAYAMAAQAkAAAzgPIBHgWIDGgBQAZALAaAJQAyASAsAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBlgLAzgCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKASgGIBBAAIAFADQAcAQBhAAQA3AAAogIIBJAPQCnAhBiAAQAzAAAVgHQAbgLAigEICigDIAZgDIDmgCQAPgCALgIQALAFARAAQALAADugYIBNAAQAdATBNAAQAxAAAYgGIAGADQAcAPAbADICVAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAhgLIAeAPIC4AAQAOgBAKgHIAXAHQBBAVAaAAQAcAAAWgEIAAWfg");
	var mask_graphics_12 = new cjs.Graphics().p("Ehw/ALkIAA23QA7AIBmAAQCagHCAACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAxgNQArgKBLAAQBVAACZAYQCMAYANAAQAjAAAzgPIBGgWIDGgBQAaALAaAJQAzASAqAAQAlAAA4gTQA5gTAuAAQCBAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKASgGIBCAAIADADQAcAQBiAAQA4AAAogIIBJAPQCmAhBhAAQA1AAATgHQAcgLAigEICigDIAagDIDkgCQAQgCALgIQALAFARAAQALAADugYIBNAAQAdATBNAAQAxAAAYgGIAGADQAbAPAbADICXAAQAmgGAFAJQAIAMAuAAQAdAABMgdIAhgLIAdAPIC6AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBOAAQCcgHB/ACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAygNQArgKBKAAQBUAACaAYQCMAYAMAAQAkAAA0gPIBGgWIDGgBQAYALAaAJQA0ASArAAQAjAAA5gTQA5gTAtAAQCCAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKAUgGIBAAAIAFADQAcAQBhAAQA3AAAogIIBJAPQCnAhBiAAQAzAAAVgHQAbgLAigEIChgDIAagDIDmgCQAPgCALgIQALAFARAAQAMAADsgYIBOAAQAdATBOAAQAwAAAYgGIAFADQAdAPAbADICVAAQAmgGAGAJQAIAMAuAAQAdAABNgdIAfgLIAfAPIC4AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_13 = new cjs.Graphics().p("Ehw+ALkIAA23QA6AIBmAAQCagHCAACICMAAIAxgIICoAAQAIAIAcAIQAZAHARAAIFyAAIAxgNQAsgKBKAAQBVAACZAYQCMAYAMAAQAkAAAzgPIBHgWIDGgBQAYALAaAJQAzASAsAAQAjAAA5gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBlgLAzgCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKASgGIBBAAIAFADQAcAQBhAAQA3AAAogIIBJAPQCnAhBiAAQAzAAAVgHQAbgLAigEICigDIAZgDIDmgCQAPgCALgIQALAFARAAQALAADugYIBNAAQAdATBNAAQAxAAAYgGIAGADQAcAPAbADICVAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAhgLIAeAPIC4AAIAIgBIAAgHIANACIADgCIAKADQA2AFBOAAQCcgHB/ACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYANAAQAjAAA0gPIBFgWIDGgBQAZALAaAJQA0ASAqAAQAlAAA4gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBmgLAxgCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKAUgGIBBAAIADADQAdAQBhAAQA4AAAogIIBIAPQCmAhBiAAQA1AAATgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQAMAADsgYIBOAAQAdATBOAAQAwAAAYgGIAFADQAcAPAbADICWAAQAngGAFAJQAIAMAuAAQAdAABNgdIAfgLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAYgEIAAWfg");
	var mask_graphics_14 = new cjs.Graphics().p("Ehw+ALkIAA23QA6AIBlAAQCcgHB/ACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAygNQArgKBKAAQBUAACaAYQCMAYAMAAQAkAAA0gPIBGgWIDGgBQAYALAaAJQAzASAsAAQAjAAA5gTQA5gTAtAAQCCAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKAUgGIBAAAIAFADQAcAQBhAAQA3AAAogIIBJAPQCnAhBiAAQAzAAAVgHQAbgLAigEIChgDIAagDIDmgCQAPgCALgIQALAFARAAQAMAADsgYIBOAAQAdATBOAAQAwAAAYgGIAFADQAdAPAbADICVAAQAmgGAGAJQAIAMAuAAQAdAABNgdIAfgLIAfAPIC4AAIAIgBIAAgHIANACIADgCIAKADQA2AFBPAAQCagHCAACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAxgNQArgKBLAAQBVAACZAYQCMAYANAAQAjAAAzgPIBGgWIDGgBQAaALAaAJQAzASAqAAQAlAAA4gTQA5gTAuAAQCBAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAXgKASgGIBCAAIADADQAcAQBiAAQA4AAAogIIBJAPQCmAhBhAAQA1AAATgHQAcgLAigEICigDIAagDIDkgCQAQgCALgIQALAFARAAQALAADugYIBNAAQAdATBNAAQAxAAAYgGIAGADQAbAPAbADICXAAQAmgGAFAJQAIAMAuAAQAdAABMgdIAhgLIAdAPIC6AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_15 = new cjs.Graphics().p("Ehw/ALkIAA23QA7AIBlAAQCcgHB/ACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYANAAQAjAAA0gPIBFgWIDGgBQAZALAaAJQA0ASAqAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBmgLAxgCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKAUgGIBBAAIADADQAdAQBhAAQA3AAApgIIBIAPQCmAhBiAAQA1AAATgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQAMAADsgYIBOAAQAdATBOAAQAwAAAYgGIAFADQAcAPAbADICWAAQAngGAFAJQAIAMAuAAQAdAABNgdIAfgLIAeAPIC5AAIAJgBIAAgHIAMACIADgCIAKADQA2AFBPAAQCagHCAACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAxgNQArgKBLAAQBVAACZAYQCMAYAMAAQAkAAAzgPIBHgWIDGgBQAZALAaAJQAyASAsAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBlgLAzgCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKASgGIBBAAIAFADQAcAQBhAAQA3AAAogIIBKAPQCmAhBiAAQAzAAAVgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQALAADugYIBNAAQAdATBNAAQAxAAAYgGIAGADQAcAPAbADICWAAQAlgGAGAJQAIAMAuAAQAdAABMgdIAhgLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAWgEIAAWfg");
	var mask_graphics_16 = new cjs.Graphics().p("Ehw/ALkIAA23QA7AIBmAAQCagHCAACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAxgNQArgKBLAAQBVAACZAYQCMAYANAAQAjAAAzgPIBGgWIDGgBQAaALAaAJQAzASAqAAQAlAAA4gTQA5gTAuAAQCBAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAXgKASgGIBCAAIADADQAcAQBiAAQA4AAAogIIBJAPQCmAhBhAAQA1AAATgHQAcgLAigEICigDIAagDIDkgCQAQgCALgIQALAFARAAQALAADugYIBNAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICXAAQAmgGAFAJQAIAMAuAAQAdAABMgdIAhgLIAdAPIC6AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBOAAQCcgHB/ACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYAMAAQAkAAA0gPIBGgWIDGgBQAYALAaAJQA0ASArAAQAjAAA5gTQA5gTAtAAQCCAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAXgKATgGIBAAAIAFADQAcAQBhAAQA3AAAogIIBJAPQCnAhBiAAQAzAAAVgHQAbgLAigEIChgDIAagDIDmgCQAPgCALgIQALAFARAAQAMAADsgYIBOAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICVAAQAmgGAGAJQAIAMAuAAQAdAABNgdIAfgLIAfAPIC4AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_17 = new cjs.Graphics().p("Ehw+ALkIAA23QA6AIBmAAQCagHCAACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAxgNQArgKBLAAQBVAACZAYQCMAYAMAAQAkAAAzgPIBHgWIDGgBQAZALAaAJQAyASAsAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBlgLAzgCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKASgGIBBAAIAFADQAbAQBiAAQA3AAAogIIBKAPQCmAhBiAAQAzAAAVgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQALAADugYIBNAAQAdATBNAAQAxAAAYgGIAGADQAcAPAbADICVAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAhgLIAeAPIC4AAIAIgBIAAgHIANACIADgCIAKADQA2AFBOAAQCcgHB/ACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQAsgKBKAAQBUAACaAYQCMAYANAAQAjAAA0gPIBFgWIDGgBQAZALAaAJQA0ASAqAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBmgLAxgCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKAUgGIBBAAIADADQAcAQBiAAQA3AAApgIIBIAPQCmAhBiAAQA1AAATgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQAMAADsgYIBOAAQAdATBOAAQAwAAAYgGIAFADQAcAPAbADICWAAQAngGAFAJQAIAMAuAAQAdAABNgdIAfgLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAYgEIAAWfg");
	var mask_graphics_18 = new cjs.Graphics().p("Ehw+ALkIAA23QA6AIBlAAQCcgHB/ACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAygNQArgKBKAAQBUAACaAYQCMAYAMAAQAkAAA0gPIBGgWIDGgBQAYALAaAJQA0ASArAAQAjAAA5gTQA5gTAtAAQCCAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAWgKAUgGIBAAAIAFADQAcAQBhAAQA3AAAogIIBJAPQCnAhBiAAQA0AAAUgHQAbgLAigEIChgDIAagDIDmgCQAPgCALgIQALAFARAAQAMAADsgYIBOAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICVAAQAmgGAGAJQAIAMAuAAQAdAABNgdIAfgLIAfAPIC4AAIAIgBIAAgHIANACIADgCIAKADQA2AFBPAAQCagHCAACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYANAAQAjAAAzgPIBGgWIDGgBQAaALAaAJQAzASAqAAQAlAAA4gTQA5gTAuAAQCBAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAXgKASgGIBCAAIADADQAcAQBiAAQA4AAAogIIBJAPQClAhBiAAQA1AAATgHQAcgLAigEICigDIAagDIDkgCQAQgCALgIQALAFARAAQALAADugYIBNAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICXAAQAmgGAFAJQAIAMAuAAQAdAABMgdIAhgLIAdAPIC6AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_19 = new cjs.Graphics().p("EhxqALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIANACIADgCIAKADQA1AFBPAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_20 = new cjs.Graphics().p("EhyXALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIANACIADgCIAKADQA1AFBRAAQCZgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_21 = new cjs.Graphics().p("EhzEALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIAEgCIAJADQA2AFBRAAQCZgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_22 = new cjs.Graphics().p("EhzxALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIAEgCIAJADQA2AFBRAAQCZgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_23 = new cjs.Graphics().p("Eh0eALkIAA23QA6AIBmAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBRAAQCZgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_24 = new cjs.Graphics().p("Eh1LALkIAA23QA6AIBmAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBRAAQCbgHB9ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_25 = new cjs.Graphics().p("Eh14ALkIAA23QA6AIBmAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBRAAQCbgHB9ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_26 = new cjs.Graphics().p("Eh2mALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIANACIADgCIAKADQA1AFBRAAQCbgHCAACICKAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_27 = new cjs.Graphics().p("Eh3TALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIANACIADgCIAKADQA1AFBRAAQCbgHCAACICKAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_28 = new cjs.Graphics().p("Eh4AALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIAEgCIAJADQA2AFBRAAQCbgHCAACICKAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_29 = new cjs.Graphics().p("Eh4tALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIAEgCIAJADQA2AFBRAAQCbgHCAACICMAAIAvgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_30 = new cjs.Graphics().p("Eh5aALkIAA23QA6AIBmAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBRAAQCbgHB/ACICMAAIAvgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_31 = new cjs.Graphics().p("Eh6HALkIAA23QA6AIBmAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBRAAQCbgHB/ACICMAAIAxgIICmAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_32 = new cjs.Graphics().p("Eh60ALkIAA23QA6AIBmAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBRAAQCbgHB/ACICMAAIAxgIICmAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_33 = new cjs.Graphics().p("Eh7hALkIAA23QA6AIBmAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBRAAQCbgHB/ACICMAAIAxgIICmAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_34 = new cjs.Graphics().p("Eh8PALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIANACIADgCIAKADQA1AFBRAAQCbgHCAACICMAAIAxgIICnAAQAJAIAZAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_35 = new cjs.Graphics().p("Eh88ALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIAEgCIAJADQA2AFBRAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAYAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_36 = new cjs.Graphics().p("Eh9pALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIAEgCIAJADQA2AFBRAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFwAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_37 = new cjs.Graphics().p("Eh+WALkIAA23QA6AIBmAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBRAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFwAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_38 = new cjs.Graphics().p("Eh/DALkIAA23QA6AIBmAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBRAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFwAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_39 = new cjs.Graphics().p("Eh/wALkIAA23QA6AIBmAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBRAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFwAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_40 = new cjs.Graphics().p("EiAdALkIAA23QA6AIBmAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBRAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFwAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_41 = new cjs.Graphics().p("EiBLALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIANACIADgCIAKADQA1AFBRAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFwAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_42 = new cjs.Graphics().p("EiB4ALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIANACIADgCIAKADQA1AFBRAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFwAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_43 = new cjs.Graphics().p("EiClALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIAEgCIAJADQA2AFBRAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFwAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_44 = new cjs.Graphics().p("EiDSALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIAEgCIAJADQA2AFBRAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAvgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_45 = new cjs.Graphics().p("EiD/ALkIAA23QA6AIBmAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBRAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQApgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_46 = new cjs.Graphics().p("EiEsALkIAA23QA6AIBmAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBRAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBIAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_47 = new cjs.Graphics().p("EiFZALkIAA23QA6AIBmAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBRAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBIAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_48 = new cjs.Graphics().p("EiGHALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIANACIADgCIAKADQA1AFBRAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBSAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_49 = new cjs.Graphics().p("EiG0ALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIANACIADgCIAKADQA1AFBRAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBSAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_50 = new cjs.Graphics().p("EiHhALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIAEgCIAJADQA2AFBRAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACYAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_51 = new cjs.Graphics().p("EiIOALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIAEgCIAJADQA2AFBRAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACYAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_52 = new cjs.Graphics().p("EiI7ALkIAA23QA6AIBmAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBRAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACXAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_53 = new cjs.Graphics().p("EiJoALkIAA23QA6AIBmAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBRAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCKAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_54 = new cjs.Graphics().p("EiKVALkIAA23QA6AIBmAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBRAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCKAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_55 = new cjs.Graphics().p("EiLCALkIAA23QA6AIBmAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBRAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCKAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_56 = new cjs.Graphics().p("EiLwALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIANACIADgCIAKADQA1AFBRAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAKAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_57 = new cjs.Graphics().p("EiMdALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIAEgCIAJADQA2AFBRAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAxgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_58 = new cjs.Graphics().p("EiNKALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIAEgCIAJADQA2AFBRAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBEgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_59 = new cjs.Graphics().p("EiN3ALkIAA23QA6AIBmAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBRAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBEgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_60 = new cjs.Graphics().p("EiOkALkIAA23QA6AIBmAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBRAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDEgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_61 = new cjs.Graphics().p("EiPRALkIAA23QA6AIBmAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBRAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDEgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_62 = new cjs.Graphics().p("EiP+ALkIAA23QA6AIBmAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBRAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDEgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_63 = new cjs.Graphics().p("EiQsALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIANACIADgCIAKADQA1AFBRAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDEgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_64 = new cjs.Graphics().p("EiRZALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIANACIADgCIAKADQA1AFBRAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAXALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_65 = new cjs.Graphics().p("EiSGALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIAEgCIAJADQA2AFBRAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAYAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_66 = new cjs.Graphics().p("EiSzALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIAEgCIAJADQA2AFBRAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAxASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_67 = new cjs.Graphics().p("EiTgALkIAA23QA6AIBmAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBRAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASApAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_68 = new cjs.Graphics().p("EiUNALkIAA23QA6AIBmAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBRAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA2gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_69 = new cjs.Graphics().p("EiU6ALkIAA23QA6AIBmAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBRAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA2gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_70 = new cjs.Graphics().p("EiVoALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIANACIADgCIAKADQA2AFBQAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA3gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_71 = new cjs.Graphics().p("EiWVALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIANACIADgCIAKADQA1AFBRAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTArAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_72 = new cjs.Graphics().p("EiXCALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIAEgCIAJADQA2AFBRAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCAAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_73 = new cjs.Graphics().p("EiXvALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIAEgCIAJADQA2AFBRAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCAAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_74 = new cjs.Graphics().p("EiYcALkIAA23QA6AIBmAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBRAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQB/AAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_75 = new cjs.Graphics().p("EiZJALkIAA23QA6AIBmAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBRAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAiAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_76 = new cjs.Graphics().p("EiZ2ALkIAA23QA6AIBmAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBRAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDMAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_77 = new cjs.Graphics().p("EiajALkIAA23QA6AIBmAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDOAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAIAIgBIAAgHIAMACIADgCIAKADQA2AFBRAAQCbgHB/ACICMAAIAxgIICoAAQAIAIAcAIQAaAHAQAAIFyAAIAygNQArgKBKAAQBVAACZAYQCMAYANAAQAjAAA0gPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA4gTQA5gTAuAAQCBAAAkAJQARALAUADIDMAAQBmgLAygCQBOgEA9gFIEXgBQAbAGBOAMIQGAAQAbAAA3gXQAXgKATgGIBBAAIAEADQAcAQBhAAQA4AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAbgLAigEICigDIAagDIDlgCQAPgCALgIQALAFARAAQAMAADtgYIBNAAQAdATBOAAQAwAAAYgGIAGADQAcAPAbADICWAAQAmgGAFAJQAIAMAuAAQAdAABNgdIAggLIAeAPIC5AAQANgBAKgHIAXAHQBBAVAaAAQAcAAAXgEIAAWfg");
	var mask_graphics_78 = new cjs.Graphics().p("EibRALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIANACIADgCIAKADQA1AFBRAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDMAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");
	var mask_graphics_79 = new cjs.Graphics().p("Eib+ALkIAA23QA7AIBlAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDOAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAIAIgBIAAgHIANACIADgCIAJADQA2AFBRAAQCbgHCAACICMAAIAxgIICnAAQAJAIAbAIQAaAHARAAIFyAAIAxgNQArgKBLAAQBUAACaAYQCMAYAMAAQAkAAAzgPIBGgWIDGgBQAZALAaAJQAzASArAAQAkAAA5gTQA5gTAtAAQCCAAAjAJQASALAUADIDMAAQBlgLAygCQBPgEA9gFIEXgBQAaAGBPAMIQGAAQAbAAA3gXQAWgKATgGIBBAAIAEADQAcAQBiAAQA3AAAogIIBJAPQCmAhBiAAQA0AAAUgHQAcgLAigEIChgDIAagDIDlgCQAQgCALgIQALAFARAAQALAADtgYIBOAAQAdATBNAAQAxAAAYgGIAFADQAcAPAbADICWAAQAmgGAGAJQAIAMAuAAQAdAABMgdIAggLIAeAPIC5AAQAOgBAKgHIAWAHQBCAVAaAAQAbAAAXgEIAAWfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-560.3,y:29.1}).wait(1).to({graphics:mask_graphics_1,x:-569.3,y:29.1}).wait(1).to({graphics:mask_graphics_2,x:-578.4,y:29.1}).wait(1).to({graphics:mask_graphics_3,x:-587.4,y:29.1}).wait(1).to({graphics:mask_graphics_4,x:-596.4,y:29.1}).wait(1).to({graphics:mask_graphics_5,x:-605.4,y:29.1}).wait(1).to({graphics:mask_graphics_6,x:-614.5,y:29.1}).wait(1).to({graphics:mask_graphics_7,x:-623.5,y:29.1}).wait(1).to({graphics:mask_graphics_8,x:-632.5,y:29.1}).wait(1).to({graphics:mask_graphics_9,x:-641.5,y:29.1}).wait(1).to({graphics:mask_graphics_10,x:-650.6,y:29.1}).wait(1).to({graphics:mask_graphics_11,x:-659.6,y:29.1}).wait(1).to({graphics:mask_graphics_12,x:-668.6,y:29.1}).wait(1).to({graphics:mask_graphics_13,x:-677.7,y:29.1}).wait(1).to({graphics:mask_graphics_14,x:-686.7,y:29.1}).wait(1).to({graphics:mask_graphics_15,x:-695.7,y:29.1}).wait(1).to({graphics:mask_graphics_16,x:-704.7,y:29.1}).wait(1).to({graphics:mask_graphics_17,x:-713.8,y:29.1}).wait(1).to({graphics:mask_graphics_18,x:-722.8,y:29.1}).wait(1).to({graphics:mask_graphics_19,x:-727.5,y:29.1}).wait(1).to({graphics:mask_graphics_20,x:-732,y:29.1}).wait(1).to({graphics:mask_graphics_21,x:-736.5,y:29.1}).wait(1).to({graphics:mask_graphics_22,x:-741,y:29.1}).wait(1).to({graphics:mask_graphics_23,x:-745.6,y:29.1}).wait(1).to({graphics:mask_graphics_24,x:-750.1,y:29.1}).wait(1).to({graphics:mask_graphics_25,x:-754.6,y:29.1}).wait(1).to({graphics:mask_graphics_26,x:-759.1,y:29.1}).wait(1).to({graphics:mask_graphics_27,x:-763.6,y:29.1}).wait(1).to({graphics:mask_graphics_28,x:-768.1,y:29.1}).wait(1).to({graphics:mask_graphics_29,x:-772.6,y:29.1}).wait(1).to({graphics:mask_graphics_30,x:-777.2,y:29.1}).wait(1).to({graphics:mask_graphics_31,x:-781.7,y:29.1}).wait(1).to({graphics:mask_graphics_32,x:-786.2,y:29.1}).wait(1).to({graphics:mask_graphics_33,x:-790.7,y:29.1}).wait(1).to({graphics:mask_graphics_34,x:-795.2,y:29.1}).wait(1).to({graphics:mask_graphics_35,x:-799.7,y:29.1}).wait(1).to({graphics:mask_graphics_36,x:-804.2,y:29.1}).wait(1).to({graphics:mask_graphics_37,x:-808.8,y:29.1}).wait(1).to({graphics:mask_graphics_38,x:-813.3,y:29.1}).wait(1).to({graphics:mask_graphics_39,x:-817.8,y:29.1}).wait(1).to({graphics:mask_graphics_40,x:-822.3,y:29.1}).wait(1).to({graphics:mask_graphics_41,x:-826.8,y:29.1}).wait(1).to({graphics:mask_graphics_42,x:-831.3,y:29.1}).wait(1).to({graphics:mask_graphics_43,x:-835.8,y:29.1}).wait(1).to({graphics:mask_graphics_44,x:-840.3,y:29.1}).wait(1).to({graphics:mask_graphics_45,x:-844.9,y:29.1}).wait(1).to({graphics:mask_graphics_46,x:-849.4,y:29.1}).wait(1).to({graphics:mask_graphics_47,x:-853.9,y:29.1}).wait(1).to({graphics:mask_graphics_48,x:-858.4,y:29.1}).wait(1).to({graphics:mask_graphics_49,x:-862.9,y:29.1}).wait(1).to({graphics:mask_graphics_50,x:-867.4,y:29.1}).wait(1).to({graphics:mask_graphics_51,x:-871.9,y:29.1}).wait(1).to({graphics:mask_graphics_52,x:-876.5,y:29.1}).wait(1).to({graphics:mask_graphics_53,x:-881,y:29.1}).wait(1).to({graphics:mask_graphics_54,x:-885.5,y:29.1}).wait(1).to({graphics:mask_graphics_55,x:-890,y:29.1}).wait(1).to({graphics:mask_graphics_56,x:-894.5,y:29.1}).wait(1).to({graphics:mask_graphics_57,x:-899,y:29.1}).wait(1).to({graphics:mask_graphics_58,x:-903.5,y:29.1}).wait(1).to({graphics:mask_graphics_59,x:-908.1,y:29.1}).wait(1).to({graphics:mask_graphics_60,x:-912.6,y:29.1}).wait(1).to({graphics:mask_graphics_61,x:-917.1,y:29.1}).wait(1).to({graphics:mask_graphics_62,x:-921.6,y:29.1}).wait(1).to({graphics:mask_graphics_63,x:-926.1,y:29.1}).wait(1).to({graphics:mask_graphics_64,x:-930.6,y:29.1}).wait(1).to({graphics:mask_graphics_65,x:-935.1,y:29.1}).wait(1).to({graphics:mask_graphics_66,x:-939.6,y:29.1}).wait(1).to({graphics:mask_graphics_67,x:-944.2,y:29.1}).wait(1).to({graphics:mask_graphics_68,x:-948.7,y:29.1}).wait(1).to({graphics:mask_graphics_69,x:-953.2,y:29.1}).wait(1).to({graphics:mask_graphics_70,x:-957.7,y:29.1}).wait(1).to({graphics:mask_graphics_71,x:-962.2,y:29.1}).wait(1).to({graphics:mask_graphics_72,x:-966.7,y:29.1}).wait(1).to({graphics:mask_graphics_73,x:-971.2,y:29.1}).wait(1).to({graphics:mask_graphics_74,x:-975.8,y:29.1}).wait(1).to({graphics:mask_graphics_75,x:-980.3,y:29.1}).wait(1).to({graphics:mask_graphics_76,x:-984.8,y:29.1}).wait(1).to({graphics:mask_graphics_77,x:-989.3,y:29.1}).wait(1).to({graphics:mask_graphics_78,x:-993.8,y:29.1}).wait(1).to({graphics:mask_graphics_79,x:-998.3,y:29.1}).wait(1));

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(-871.4,0);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-2535.8},79).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1271.4,-44.9,1434.4,95.9);


(lib.Символ55 = function(mode,startPosition,loop) {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(1));

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(554.3,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:41},9,cjs.Ease.get(-1)).to({y:-3},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-729.2,-54,2475,154.1);


(lib.Символ46 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ45();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-127.6,-81.9,255.4,163.9);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(-0.2,0,0.689,0.689);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},129).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.8,-64.8,129.6,129.6);


(lib.Символ47 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ46();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-127.6,-81.9,255.4,163.9);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:158.1},29).to({x:0},43).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.6,-81.9,255.4,163.9);


(lib.Анимация53 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.setTransform(21,-27);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ51(), 3);

	this.instance_1 = new lib.Символ48();
	this.instance_1.setTransform(-72.9,-16);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-459.1,-298.1,960.2,542.2);


(lib.Символ52 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация53("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-459.1,-298.1,960.2,542.2);


(lib.Символ50 = function(mode,startPosition,loop) {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(1));

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.setTransform(72.9,16.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.33,scaleY:1.33,x:66.9,y:50.1},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:72.9,y:16.1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.6,-81.9,255.4,163.9);


// stage content:



(lib.cosmomen640305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		this.pri.alpha=0;
		
		
		//----------------------прицел
		
		stage.canvas.style.cursor = "none";
		this.gun.mouseEnabled = false;
		this.addEventListener("tick", fl_noj.bind(this));
		
		function fl_noj() {
			this.gun.x = stage.mouseX;
			this.pri.y = stage.mouseY;
			this.pri.x = stage.mouseX;
		}
		
		
		//----------------------переход
		
		
		this.man.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
		
		
		
		//----------------------
		
		
		this.man.addEventListener("mouseover", fl_man.bind(this));
		
		function fl_man()
		{
			this.man.gotoAndPlay(1);
			this.moon.gotoAndPlay(1);
			this.pri.alpha=1;
		}
		
		
		this.man.addEventListener("mouseout", fl_man1.bind(this));
		
		function fl_man1()
		{
			this.man.gotoAndPlay(11);
			this.moon.gotoAndPlay(11);
			this.pri.alpha=0;
		}
		
		//----------------------
		
		
		
		
		
		//----------------------
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.instance = new lib.Символ27();
	this.instance.setTransform(644.7,297.3);

	this.pri = new lib.Символ25();
	this.pri.setTransform(240.7,145.7,0.915,0.915);

	this.gun = new lib.Символ19();
	this.gun.setTransform(418.1,246.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.gun},{t:this.pri},{t:this.instance}]}).wait(1));

	// Слой 6
	this.man = new lib.Символ50();
	this.man.setTransform(253.2,107.9);

	this.timeline.addTween(cjs.Tween.get(this.man).wait(1));

	// Слой 8
	this.instance_1 = new lib.Символ56();
	this.instance_1.setTransform(136.2,48.8,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ15();
	this.instance_2.setTransform(525.7,273.3,1,1,0,0,0,205.3,252.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 9
	this.instance_3 = new lib.Символ58();
	this.instance_3.setTransform(310.3,272.6,1.114,0.725);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 1
	this.moon = new lib.Символ55();
	this.moon.setTransform(1187.4,287,1,1,0,0,0,508.2,23);

	this.timeline.addTween(cjs.Tween.get(this.moon).wait(1));

	// Слой 2
	this.instance_4 = new lib.Символ7();
	this.instance_4.setTransform(1551.4,82);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(255,35.5,3209.8,481.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;