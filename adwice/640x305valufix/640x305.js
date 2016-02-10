(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/adf.png", id:"adf"},
		{src:"images/qwe.png", id:"qwe"},
		{src:"images/xcv.jpg", id:"xcv"}
	]
};



// symbols:



(lib.adf = function() {
	this.initialize(img.adf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,111);


(lib.qwe = function() {
	this.initialize(img.qwe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,639,309);


(lib.xcv = function() {
	this.initialize(img.xcv);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,282);


(lib.Символ78 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AryDzQgxAAgCgxIAAmBQAAgzAzAAIXkAAQA0AAAAAzIAAGBQgCAxgyAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.6,-24.3,161.2,48.7);


(lib.Символ70 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.adf();
	this.instance.setTransform(-76,-55.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76,-55.5,152,111);


(lib.Символ67 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("ABBBeQgXgWABgpIAAg9QgBgoAXgXQAPgQAYgFQAKgCALAAQALAAAKACQAXAFARAQQAWAXAAAoIAAA9QAAApgWAWQgYAXglAAQgmAAgWgXgABghEQgKAMAAAZIAAA+QAAAaAKAMQAKANATAAQATAAAKgNQAKgMAAgaIAAg+QAAgYgKgNQgKgNgTAAQgTAAgKANgAIlBxIAAgnIAsAAIAAAngAGKBxIAAjhIB/AAIAAAiIhTAAIAAA6IBFAAIAAAhIhFAAIAABCIBTAAIAAAigADuBxIAAjhICCAAIAAAiIhWAAIAAC/gAgeBxIAAhfIhKAAIAABfIgsAAIAAjhIAsAAIAABiIBKAAIAAhiIAqAAIAADhgAkaBxIgNgxIg5AAIgNAxIguAAIBBjhIAtAAIBBDhgAkwAdIgThGIgBAAIgTBGIAnAAgAnbBxIAAhfIhJAAIAABfIgsAAIAAjhIAsAAIAABiIBJAAIAAhiIAsAAIAADhgAIlAjIAAiTIAsAAIAACTg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.3,-11.7,118.7,23.5);


(lib.Символ66 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AI+BzIgPgFIAFggIAKADIAJABQALAAAFgFQAGgGADgMIACgIIhFijIAvAAIAmBoIACAFIABAAIAmhtIAuAAIhGC2QgJAWgMAMQgNANgVAAgAAJBeQgUgWAAgpIAAg9QAAgoAUgXQAXgXAmAAQAlAAAXAXQAXAXAAAoIAAA9QAAApgXAWQgXAXglAAQgmAAgXgXgAAphEQgLAMAAAZIAAA+QAAAaALAMQAJANAUAAQASAAAKgNQALgMgBgaIAAg+QABgYgLgNQgKgNgSAAQgUAAgJANgAlEBfQgWgWAAgoIAAhBQAAgoAVgWQAUgWAkAAQAmAAATATQAVASgCAkIAAABIgqAAQAAgVgIgJQgIgJgSAAQgRAAgIAMQgIAMAAAZIAABBQAAAZAJAMQAIAMASAAQARAAAHgIQAIgJAAgWIAqAAIAAABQABAkgTASQgUATgkAAQgkAAgVgWgAoDBeQgXgWAAgpIAAg9QAAgoAXgXQAVgXAmAAQAmAAAXAXQAWAXAAAoIAAA9QAAApgWAWQgXAXgmAAQglAAgWgXgAnlhEQgKAMABAZIAAA+QgBAaAKAMQAKANATAAQAUAAAJgNQALgMAAgaIAAg+QAAgYgLgNQgJgNgUAAQgTAAgKANgAHiBxIgxhfIgLAAIAABfIgtAAIAAjhIAtAAIAABdIAJAAIAwhdIA2AAIhBBoIBHB5gAEqBxIAAhYIgSADIgSABQglAAgUgSQgVgQABgmIAAhFIArAAIAABFQABAWAHAJQAIAJASAAIASgBIASgEIAAhoIAsAAIAADhgAh+BxIAAi/Ig0AAIAAgiICWAAIAAAiIg1AAIAAC/gApgBxIgwhfIgMAAIAABfIgsAAIAAjhIAsAAIAABdIAJAAIAwhdIA3AAIhBBoIBGB5g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.3,-11.7,142.7,23.5);


(lib.Символ65 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AJHBxIAAjhIAtAAIAABQIAdAAQAjAAAUAVQAVASAAAhQAAAggVAVQgUAUgjAAgAJ0BPIAdAAQAPAAAJgMQAIgLAAgRQAAgQgIgLQgJgLgPAAIgdAAgAHRBxIAAi/Ig0AAIAAgiICWAAIAAAiIg2AAIAAC/gAFcBxIAAiNIgBAAIhJCNIgrAAIAAjhIArAAIAACNIABABIBJiOIAsAAIAADhgACZBxIAAhYIgSADIgTABQgkAAgVgSQgUgQAAgmIAAhFIAsAAIAABFQAAAWAIAJQAIAJARAAIATgBIASgEIAAhoIAsAAIAADhgAh0BxIAAjhIB9AAIAAAiIhQAAIAAA6IBFAAIAAAhIhFAAIAABCIBRAAIAAAigAjCBxIAAi/IgyAAIABBEQAABBgSAdQgTAdglAAIgwAAIAAjhIAsAAIAAC/IAEAAQASAAAGgTQAFgTABgzIgBhmICKAAIAADhgAorBxIAAjhIAtAAIAABQIAeAAQAiAAAVAVQAVASAAAhQAAAggVAVQgUAUgjAAgAn+BPIAeAAQAPAAAIgMQAIgLAAgRQAAgQgIgLQgIgLgPAAIgeAAgArcBxIAAjhIBBAAQAkAAAUAPQATAQAAAfQABAQgIANQgHAMgOAGQATADAJANQAJAPAAATQAAAhgTARQgSAQgkAAgAqwBPIAgAAQAOAAAIgIQAHgIAAgQQABgQgIgJQgGgJgPgBIghAAgAqwgQIAXAAQAPAAAHgIQAHgIAAgOQABgQgJgIQgHgIgQAAIgVAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-73.3,-11.4,146.7,22.8);


(lib.Символ64 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AorCEQgWgQABggIABgBIAqAAQAAANAJAKQAKAJANAAQASAAAKgJQAKgKAAgOQAAgTgJgIQgJgIgRAAIgbAAIAAgiIAbAAQAQAAAIgIQAIgHAAgQQAAgNgJgJQgJgIgRAAQgNAAgIAIQgIAIAAAOIgrAAIgBgBQgBgdAWgRQAVgSAfAAQAlAAAVARQAVARAAAfQAAAQgJALQgJANgQAHQASAHAJANQAKAOAAATQAAAggWARQgXASglAAQgeAAgYgRgAraCTIgPgFIAFggIAKAEIAJABQALAAAFgGQAFgGADgLIADgIIhFikIAvAAIAmBmIACAGIABAAIAmhsIAuAAIhGC2QgJAWgMANQgNAMgVAAgALECSIgxhgIgMAAIAABgIgsAAIAAjiIAsAAIAABbIAJAAIAwhbIA3AAIhCBmIBHB8gAIbCSIgNgxIg5AAIgMAxIguAAIBAjiIAuAAIBADigAIFA+IgThGIgBAAIgTBGIAnAAgAFfCSIgwhgIgMAAIAABgIgsAAIAAjiIAsAAIAABbIAJAAIAxhbIA2AAIhBBmIBGB8gABiCSIAAiQIAAAAIhJCQIgqAAIAAjiIAqAAIAACOIABAAIBIiOIAtAAIAADigAhPCSIgNgxIg5AAIgMAxIguAAIBAjiIAtAAIBBDigAhlA+IgThGIgBAAIgTBGIAnAAgAkPCSIAAhfIhKAAIAABfIgsAAIAAjiIAsAAIAABhIBKAAIAAhhIAsAAIAADigAAahzQgOgMAAgUIABgBIAgAAQAAAIAEAGQAEAFAJAAQAJAAADgFQAFgGAAgIIAgAAIAAABQABATgOANQgOANgWAAQgXAAgNgNg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76.4,-15,152.9,30);


(lib.Символ61 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0.392,1],-206.4,0,206.5,0).s().p("EggPAXwMAAAgvfMBAfAAAMAAAAvfg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-206.4,-152,413,304);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#448BC2").s().p("Ah3BzIgPgFIAEggIALADIAJABQAKAAAFgFQAGgGADgMIADgIIhFijIAvAAIAlBoIACAFIABAAIAnhtIArAAIhEC2QgIAWgMAMQgNANgWAAgAnlBeQgXgWAAgpIAAg9QAAgoAXgXQAWgXAmAAQAlAAAXAXQAWAXABAoIAAA9QgBApgWAWQgXAXglAAQgmAAgWgXgAnHhEQgJAMgBAZIAAA+QABAaAJAMQAKANAUAAQASAAALgNQAKgMAAgaIAAg+QAAgYgKgNQgLgNgSAAQgUAAgKANgAGgBxIAAgmIArAAIAAAmgADXBxIAAjhIAtAAIAABQIAdAAQAjAAAUAVQAVASAAAhQAAAggVAVQgUAUgjAAgAEEBPIAdAAQAPAAAJgMQAIgLAAgRQAAgQgIgLQgJgLgPAAIgdAAgAAlBxIAAjhIBBAAQAlAAATAPQAUAQAAAfQAAAQgHANQgIAMgOAGQAUADAJANQAJAPAAATQAAAhgTARQgTAQgjAAgABRBPIAhAAQAOAAAHgIQAIgIAAgQQAAgQgHgJQgHgJgOgBIgiAAgABRgQIAYAAQAOAAAHgIQAIgIAAgOQAAgQgIgIQgHgIgRAAIgVAAgAk5BxIAAjhICDAAIAAAiIhWAAIAAAuIAeAAQAiAAAVAVQAVASAAAhQAAAggVAVQgVAUgiAAgAkMBPIAeAAQAPAAAIgMQAJgLAAgRQAAgQgJgLQgIgLgPAAIgeAAgAGgAxQAAgWAGgKQAGgKASgMQAIgJAFgLQAGgKAAgOQAAgPgGgIQgGgJgLAAQgJAAgGAIQgGAHgBAOIgrAAIAAgBQAAgfASgQQARgQAeAAQAfAAASASQASASAAAfQAAATgKARQgKAPgPALQgIAIgEAHQgCAIAAANg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.9,-11.7,101.9,23.5);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#448BC2").s().p("AJYBeQgWgWgBgpIAAgNIgYAAIAABfIgsAAIAAjhIAsAAIAABiIAYAAIAAgQQABgoAWgXQAWgXAmAAQAlAAAXAXQAXAXAAAoIAAA9QAAApgXAWQgXAXglAAQglAAgXgXgAJ3hEQgKAMAAAZIAAA+QAAAaAKAMQAJANAUAAQATAAAKgNQAKgMAAgaIAAg+QAAgYgKgNQgKgNgTAAQgUAAgJANgAFcBzIgQgFIAGggIAKADIAJABQAKAAAFgFQAGgGADgMIADgIIhFijIAvAAIAlBoIACAFIABAAIAmhtIAuAAIhGC2QgIAWgNAMQgMANgWAAgAm5BeQgXgWAAgpIAAgNIgYAAIAABfIgsAAIAAjhIAsAAIAABiIAYAAIAAgQQAAgoAXgXQAWgXAlAAQAmAAAXAXQAWAXABAoIAAA9QgBApgWAWQgXAXgmAAQglAAgWgXgAmbhEQgKAMAAAZIAAA+QAAAaAKAMQAKANATAAQAUAAAKgNQAJgMABgaIAAg+QgBgYgJgNQgKgNgUAAQgTAAgKANgAD7BxIAAiNIAAAAIgqCNIgdAAIgpiMIgBAAIAACMIgsAAIAAjhIA6AAIAqCnIABAAIAqinIA6AAIAADhgAARBxIAAiNIgBAAIhGCNIgsAAIAAjhIAsAAIAACNIABABIBGiOIAsAAIAADhgAkPBxIAAjhICCAAIAAAiIhVAAIAAAuIAdAAQAjAAAUAVQAVASAAAhQAAAggVAVQgUAUgjAAgAjiBPIAdAAQAPAAAJgMQAIgLAAgRQAAgQgIgLQgJgLgPAAIgdAAgAplBxIAAi/IgzAAIABBEQABBBgTAdQgTAdglAAIgFAAIAAgiIAFAAQATAAAGgTQAFgTAAgzIgBhmICLAAIAADhg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74.3,-11.7,148.7,23.5);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#448BC2").s().p("Ah+BfQgVgWgBgoIAAhBQABgoAUgWQAVgWAjAAQAmAAAUATQASASgBAkIAAABIgpAAQAAgVgHgJQgJgJgSAAQgQAAgJAMQgHAMgBAZIAABBQABAZAIAMQAJAMASAAQAQAAAIgIQAHgJAAgWIAoAAIABABQABAkgSASQgTATgkAAQgkAAgWgWgAk9BeQgXgWAAgpIAAg9QAAgoAXgXQAWgXAmAAQAmAAAWAXQAXAXAAAoIAAA9QAAApgXAWQgWAXgmAAQglAAgXgXgAkehEQgKAMAAAZIAAA+QAAAaAKAMQAJANAUAAQATAAAKgNQAKgMAAgaIAAg+QAAgYgKgNQgKgNgTAAQgUAAgJANgAF/BxIAAjhIAsAAIAABQIAeAAQAiAAAVAVQAVASgBAhQABAggVAVQgUAUgjAAgAGrBPIAeAAQAPAAAIgMQAJgLgBgRQABgQgJgLQgIgLgPAAIgeAAgAEIBxIAAi/Ig0AAIAAgiICWAAIAAAiIg2AAIAAC/gACTBxIAAiNIgBAAIhJCNIgrAAIAAjhIArAAIAACNIABABIBJiOIAsAAIAADhgAmeBxIAAhfIhJAAIAABfIgsAAIAAjhIAsAAIAABiIBJAAIAAhiIAsAAIAADhg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.3,-11.7,106.6,23.5);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#448BC2").s().p("AivBeQgWgWAAgpIAAg9QAAgoAWgXQAWgXAmAAQAmAAAXAXQAWAXAAAoIAAA9QAAApgWAWQgXAXgmAAQglAAgXgXgAiQhEQgKAMAAAZIAAA+QAAAaAKAMQAKANATAAQATAAAKgNQAKgMAAgaIAAg+QAAgYgKgNQgKgNgTAAQgTAAgKANgAK8BxIAAjhIAsAAIAABQIAeAAQAiAAAVAVQAVASAAAhQAAAggVAVQgUAUgjAAgALoBPIAeAAQAPAAAIgMQAJgLAAgRQAAgQgJgLQgIgLgPAAIgeAAgAGbBxIAAjhIAsAAIAAC/IA+AAIAAi/IAsAAIAAC/IA9AAIAAi/IAsAAIAADhgAEBBxIAAjhIB/AAIAAAiIhTAAIAAA6IBFAAIAAAhIhFAAIAABCIBTAAIAAAigAC3BxIgnhfIgMAAIAABfIgsAAIAAhfIgNAAIgoBfIg1AAIA7h6Ig4hnIA1AAIApBdIAJAAIAAhdIAsAAIAABdIAJAAIAohdIA2AAIg4BnIA7B6gAkPBxIAAiNIgBAAIgpCNIgeAAIgoiMIgBAAIAACMIgsAAIAAjhIA5AAIArCnIAAAAIArinIA6AAIAADhgAqNBxIAAjhIB/AAIAAAiIhTAAIAAA6IBGAAIAAAhIhGAAIAABCIBUAAIAAAigArbBxIAAhfIhKAAIAABfIgsAAIAAjhIAsAAIAABiIBKAAIAAhiIAsAAIAADhg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-85,-11.7,170.1,23.5);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(4,1,1).p("ADSAAQAABXg+A9Qg9A+hXAAQhWAAg9g+Qg+g9AAhXQAAhWA+g9QA9g+BWAAQBXAAA9A+QA+A9AABWg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23,-23,46,46);


(lib.Анимация5 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.478,1],-85,0,85,0).s().p("AtRKGIAA0LIajAAIAAULg");
	this.shape.setTransform(59.9,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.1,-64.6,170,129.3);


(lib.Анимация3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.qwe();
	this.instance.setTransform(-319.5,-154.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-319.5,-154.5,639,309);


(lib.Анимация2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.qwe();
	this.instance.setTransform(-319.5,-154.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-319.5,-154.5,639,309);


(lib.Символ76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация5("synched",0);
	this.instance.setTransform(-118,0);
	this.instance.alpha = 0.379;

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.478,1],-15.2,0,15.3,0).s().p("AiXKGIAA0LIEvAAIAAULg");
	this.shape.setTransform(240.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},12).to({state:[{t:this.instance}]},16).to({state:[{t:this.shape}]},34).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:35.8},12).to({x:240.9},16).to({_off:true},34).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.1,-64.6,170,129.3);


(lib.Символ75 = function() {
	this.initialize();

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AryD9QgzAAAAg0IAAAAIAAgRIAAmBQAAgzAzAAIAAAAIXkAAQA0AAAAAzIAAAAIAAGBIAAARQAAA0g0AAIAAAAg");

	// Слой 2
	this.instance = new lib.Символ76();
	this.instance.setTransform(-121.4,5.2);

	this.instance.mask = mask;

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#004C00","#009600","#004B00"],[0,0.478,1],0,-22.2,0,22.3).s().p("AryDzQgxAAgCgxIAAmBQAAgzAzAAIXkAAQA0AAAAAzIAAGBQgCAxgyAAg");
	this.shape.setTransform(0,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003300").s().p("AryAiQgzAAAAgyIAAgRQACAvAxAAIXkAAQAyAAACgvIAAARQAAAyg0AAg");
	this.shape_1.setTransform(0,21.9);

	this.addChild(this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.6,-25.3,161.2,50.7);


(lib.Символ74 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABZAsQgLgLAAgTIAAgbQAAgTALgLQAKgKASAAQASAAAKAKQALALAAATIAAAbQAAATgLALQgKAKgSAAQgRAAgLgKgABogfQgFAGAAALIAAAcQAAAMAFAGQAEAGAJAAQAJAAAFgGQAFgGAAgMIAAgcQAAgLgFgGQgFgGgJAAQgJAAgEAGgAm5AuQgKgHAAgPIAAgBIAUAAQAAAHAEAEQAFAEAGAAQAJAAAEgEQAFgEAAgHQAAgJgEgEQgEgEgIAAIgNAAIAAgOIANAAQAHAAAEgDQAEgEAAgIQAAgGgFgEQgEgEgIAAQgGAAgEAEQgEAEAAAGIgTAAIgBgBQAAgNAKgIQAKgIAOAAQARAAAKAHQAKAIAAAPQAAAHgEAHQgEAGgHADQAIABAEAHQAFAGAAAJQAAAPgLAIQgKAIgSAAQgOAAgLgIgAoLA2IgHgDIACgPIAFACIAEAAQAFAAADgCQACgDACgGIABgDIgghMIAWAAIASAxIAAADIABAAIASg0IAVAAIghBUQgEALgFAGQgGAFgKAAgAHfA1IAAhpIA8AAIAAAQIgnAAIAAAcIAhAAIAAAOIghAAIAAAfIAnAAIAAAQgAFYA1IAAhpIAVAAIAABZIAdAAIAAhZIAUAAIAABZIAdAAIAAhZIAVAAIAABpgAEGA1IAAhpIAVAAIAAAmIAOAAQAQAAAKAJQAKAIAAAPQAAAPgKAKQgKAKgQAAgAEbAlIAOAAQAHAAAEgGQAEgFAAgIQAAgHgEgGQgEgFgHAAIgOAAgADhA1IAAhZIgXAAIAAAgQABAdgJAOQgJAOgRAAIgDAAIAAgQIADAAQAIAAADgJQADgJAAgXIgBgwIBBAAIAABpgAAAA1IAAhpIA8AAIAAAQIgoAAIAAAWIAOAAQAQAAAJAJQAKAIAAAPQAAAPgKAKQgJAKgQAAgAAUAlIAOAAQAHAAAEgGQADgFAAgIQAAgHgDgGQgEgFgHAAIgOAAgAhyA1IAAhpIAVAAIAAAmIAOAAQAQAAAJAJQAKAIAAAPQAAAPgKAKQgJAKgQAAgAhdAlIAOAAQAHAAAEgGQADgFAAgIQAAgHgDgGQgEgFgHAAIgOAAgAiqA1IAAhZIgYAAIAAgQIBGAAIAAAQIgZAAIAABZgAjaA1IgGgXIgbAAIgGAXIgVAAIAehpIAVAAIAeBpgAjkANIgJgfIgBAAIgJAfIATAAgAk1A1IAAgtIgiAAIAAAtIgVAAIAAhpIAVAAIAAAuIAiAAIAAguIAVAAIAABpg");
	this.shape.setTransform(34.8,2.9);

	// Слой 1 - копия
	this.instance = new lib.Символ75();
	this.instance.setTransform(35.1,2.8);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-229.5,-56.7,345.2,129.3);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия
	this.instance = new lib.Символ3();
	this.instance.setTransform(0,0,0.286,0.286);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({scaleX:0.6,scaleY:0.6,alpha:0.449},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,alpha:1},5,cjs.Ease.get(1)).to({scaleX:1.64,scaleY:1.64,alpha:0},15).wait(1));

	// Слой 1 - копия: 2
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(0,0,0.286,0.286);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({scaleX:0.6,scaleY:0.6,alpha:0.449},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,alpha:1},5,cjs.Ease.get(1)).to({scaleX:1.64,scaleY:1.64,alpha:0},15).to({_off:true},1).wait(2));

	// Слой 1 - копия
	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(0,0,0.286,0.286);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({scaleX:0.6,scaleY:0.6,alpha:0.449},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,alpha:1},5,cjs.Ease.get(1)).to({scaleX:1.64,scaleY:1.64,alpha:0},15).to({_off:true},1).wait(5));

	// Слой 1
	this.instance_3 = new lib.Символ3();
	this.instance_3.setTransform(0,0,0.286,0.286);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.6,scaleY:0.6,alpha:0.449},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,alpha:1},5,cjs.Ease.get(1)).to({scaleX:1.64,scaleY:1.64,alpha:0},15).to({_off:true},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.6,-6.6,13.2,13.2);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ70();
	this.instance.setTransform(-56.9,20.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

	// Слой 1
	this.instance_1 = new lib.xcv();
	this.instance_1.setTransform(-162.2,-152.5,1.082,1.082);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.2,-152.5,324.5,305);


(lib.Символ77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Слой 2
	this.instance = new lib.Символ78();
	this.instance.setTransform(0,-0.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.071},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.117},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.149},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.174},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.195},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.214},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.229},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.242},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.253},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.262},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.27},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.277},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.283},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.289},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.241},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.202},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.169},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.142},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.118},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.097},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.079},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.065},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.052},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.041},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.031},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.022},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.014},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.007},0).wait(1).to({scaleX:1,scaleY:1,alpha:0},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ74();
	this.instance_1.setTransform(0.1,0.1,1,1,0,0,0,35.1,2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:35,regY:2.7,scaleX:1.02,scaleY:1.02,x:0,y:0},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({regX:35.1,regY:2.8,scaleX:1.08,scaleY:1.08,x:0.1,y:0.1},0).wait(1).to({regX:35,regY:2.7,scaleX:1.07,scaleY:1.07,x:0,y:0},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:35.1,regY:2.8,scaleX:1,scaleY:1,x:0.1,y:0.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.5,-59.5,345.2,129.3);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 67
	this.instance = new lib.Символ67();
	this.instance.setTransform(-495,26.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109).to({_off:false},0).wait(1).to({x:-449.1},0).wait(1).to({x:-417.9},0).wait(1).to({x:-393.9},0).wait(1).to({x:-374.5},0).wait(1).to({x:-358.2},0).wait(1).to({x:-344.4},0).wait(1).to({x:-333.6},0).wait(1).to({x:-325.2},0).wait(1).to({x:-318.5},0).wait(1).to({x:-313.2},0).wait(1).to({x:-308.8},0).wait(1).to({x:-305.4},0).wait(1).to({x:-302.6},0).wait(1).to({x:-300.5},0).to({x:-310.5},3).wait(28).to({x:-300.5},3).wait(1).to({x:-302.4},0).wait(1).to({x:-305},0).wait(1).to({x:-308.3},0).wait(1).to({x:-312.3},0).wait(1).to({x:-317.2},0).wait(1).to({x:-323.1},0).wait(1).to({x:-330.3},0).wait(1).to({x:-339.2},0).wait(1).to({x:-350.6},0).wait(1).to({x:-365.8},0).wait(1).to({x:-385.8},0).wait(1).to({x:-412.3},0).wait(1).to({x:-447.8},0).wait(1).to({x:-495},0).to({_off:true},13).wait(9));

	// Символ 66
	this.instance_1 = new lib.Символ66();
	this.instance_1.setTransform(-483,-13.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(105).to({_off:false},0).wait(1).to({x:-437.1},0).wait(1).to({x:-405.9},0).wait(1).to({x:-381.9},0).wait(1).to({x:-362.5},0).wait(1).to({x:-346.2},0).wait(1).to({x:-332.4},0).wait(1).to({x:-321.6},0).wait(1).to({x:-313.2},0).wait(1).to({x:-306.5},0).wait(1).to({x:-301.2},0).wait(1).to({x:-296.8},0).wait(1).to({x:-293.4},0).wait(1).to({x:-290.6},0).wait(1).to({x:-288.5},0).to({x:-298.5},3).wait(36).to({x:-288.5},3).wait(1).to({x:-290.4},0).wait(1).to({x:-293},0).wait(1).to({x:-296.3},0).wait(1).to({x:-300.3},0).wait(1).to({x:-305.2},0).wait(1).to({x:-311.1},0).wait(1).to({x:-318.3},0).wait(1).to({x:-327.2},0).wait(1).to({x:-338.6},0).wait(1).to({x:-353.8},0).wait(1).to({x:-373.8},0).wait(1).to({x:-400.3},0).wait(1).to({x:-435.8},0).wait(1).to({x:-483},0).to({_off:true},9).wait(9));

	// Символ 65
	this.instance_2 = new lib.Символ65();
	this.instance_2.setTransform(-481,-52.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(101).to({_off:false},0).wait(1).to({x:-435.1},0).wait(1).to({x:-403.9},0).wait(1).to({x:-379.9},0).wait(1).to({x:-360.5},0).wait(1).to({x:-344.2},0).wait(1).to({x:-330.4},0).wait(1).to({x:-319.6},0).wait(1).to({x:-311.2},0).wait(1).to({x:-304.5},0).wait(1).to({x:-299.2},0).wait(1).to({x:-294.8},0).wait(1).to({x:-291.4},0).wait(1).to({x:-288.6},0).wait(1).to({x:-286.5},0).to({x:-296.5},3).wait(44).to({x:-286.5},3).wait(1).to({x:-288.4},0).wait(1).to({x:-291},0).wait(1).to({x:-294.3},0).wait(1).to({x:-298.3},0).wait(1).to({x:-303.2},0).wait(1).to({x:-309.1},0).wait(1).to({x:-316.3},0).wait(1).to({x:-325.2},0).wait(1).to({x:-336.6},0).wait(1).to({x:-351.8},0).wait(1).to({x:-371.8},0).wait(1).to({x:-398.3},0).wait(1).to({x:-433.8},0).wait(1).to({x:-481},0).to({_off:true},5).wait(9));

	// Символ 64
	this.instance_3 = new lib.Символ64();
	this.instance_3.setTransform(-479.4,-95.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(97).to({_off:false},0).wait(1).to({x:-433.5},0).wait(1).to({x:-402.2},0).wait(1).to({x:-378.2},0).wait(1).to({x:-358.8},0).wait(1).to({x:-342.5},0).wait(1).to({x:-328.7},0).wait(1).to({x:-318},0).wait(1).to({x:-309.6},0).wait(1).to({x:-302.9},0).wait(1).to({x:-297.5},0).wait(1).to({x:-293.2},0).wait(1).to({x:-289.7},0).wait(1).to({x:-287},0).wait(1).to({x:-284.8},0).to({x:-294.8},3).wait(52).to({x:-284.8},3).wait(1).to({x:-286.7},0).wait(1).to({x:-289.3},0).wait(1).to({x:-292.6},0).wait(1).to({x:-296.7},0).wait(1).to({x:-301.6},0).wait(1).to({x:-307.5},0).wait(1).to({x:-314.7},0).wait(1).to({x:-323.5},0).wait(1).to({x:-335},0).wait(1).to({x:-350.2},0).wait(1).to({x:-370.1},0).wait(1).to({x:-396.6},0).wait(1).to({x:-432.1},0).wait(1).to({x:-479.4},0).to({_off:true},1).wait(9));

	// Символ 8
	this.instance_4 = new lib.Символ8();
	this.instance_4.setTransform(-542.3,24.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(31).to({_off:false},0).wait(1).to({x:-491.4},0).wait(1).to({x:-445.3},0).wait(1).to({x:-411.3},0).wait(1).to({x:-387.3},0).wait(1).to({x:-367.7},0).wait(1).to({x:-352.2},0).wait(1).to({x:-340.1},0).wait(1).to({x:-330.5},0).wait(1).to({x:-322.9},0).wait(1).to({x:-317.1},0).wait(1).to({x:-312.8},0).wait(1).to({x:-309.8},0).to({x:-319.8},3).wait(24).to({x:-309.8},3).wait(1).to({x:-312.1},0).wait(1).to({x:-315.8},0).wait(1).to({x:-320.7},0).wait(1).to({x:-326.7},0).wait(1).to({x:-334.1},0).wait(1).to({x:-343.2},0).wait(1).to({x:-354.6},0).wait(1).to({x:-370},0).wait(1).to({x:-392.2},0).wait(1).to({x:-425},0).wait(1).to({x:-475.4},0).wait(1).to({x:-542.3},0).to({_off:true},13).wait(95));

	// Символ 7
	this.instance_5 = new lib.Символ7();
	this.instance_5.setTransform(-519.6,-14.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(27).to({_off:false},0).wait(1).to({x:-468.7},0).wait(1).to({x:-422.6},0).wait(1).to({x:-388.6},0).wait(1).to({x:-364.6},0).wait(1).to({x:-345},0).wait(1).to({x:-329.5},0).wait(1).to({x:-317.4},0).wait(1).to({x:-307.8},0).wait(1).to({x:-300.2},0).wait(1).to({x:-294.4},0).wait(1).to({x:-290.1},0).wait(1).to({x:-287.1},0).to({x:-297.1},3).wait(32).to({x:-287.1},3).wait(1).to({x:-289.4},0).wait(1).to({x:-293.1},0).wait(1).to({x:-298},0).wait(1).to({x:-304},0).wait(1).to({x:-311.4},0).wait(1).to({x:-320.5},0).wait(1).to({x:-331.9},0).wait(1).to({x:-347.3},0).wait(1).to({x:-369.5},0).wait(1).to({x:-402.3},0).wait(1).to({x:-452.7},0).wait(1).to({x:-519.6},0).to({_off:true},9).wait(95));

	// Символ 6
	this.instance_6 = new lib.Символ6();
	this.instance_6.setTransform(-539.6,-54.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(23).to({_off:false},0).wait(1).to({x:-488.6},0).wait(1).to({x:-442.5},0).wait(1).to({x:-408.5},0).wait(1).to({x:-384.6},0).wait(1).to({x:-365},0).wait(1).to({x:-349.5},0).wait(1).to({x:-337.3},0).wait(1).to({x:-327.7},0).wait(1).to({x:-320.2},0).wait(1).to({x:-314.4},0).wait(1).to({x:-310},0).wait(1).to({x:-307},0).to({x:-317},3).wait(40).to({x:-307},3).wait(1).to({x:-309.4},0).wait(1).to({x:-313.1},0).wait(1).to({x:-317.9},0).wait(1).to({x:-323.9},0).wait(1).to({x:-331.3},0).wait(1).to({x:-340.4},0).wait(1).to({x:-351.8},0).wait(1).to({x:-367.2},0).wait(1).to({x:-389.5},0).wait(1).to({x:-422.3},0).wait(1).to({x:-472.6},0).wait(1).to({x:-539.6},0).to({_off:true},5).wait(95));

	// Символ 5
	this.instance_7 = new lib.Символ5();
	this.instance_7.setTransform(-507.8,-93.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({_off:false},0).wait(1).to({x:-456.9},0).wait(1).to({x:-410.8},0).wait(1).to({x:-376.8},0).wait(1).to({x:-352.8},0).wait(1).to({x:-333.2},0).wait(1).to({x:-317.7},0).wait(1).to({x:-305.6},0).wait(1).to({x:-296},0).wait(1).to({x:-288.4},0).wait(1).to({x:-282.6},0).wait(1).to({x:-278.3},0).wait(1).to({x:-275.3},0).to({x:-285.3},3).wait(48).to({x:-275.3},3).wait(1).to({x:-277.6},0).wait(1).to({x:-281.3},0).wait(1).to({x:-286.2},0).wait(1).to({x:-292.2},0).wait(1).to({x:-299.6},0).wait(1).to({x:-308.7},0).wait(1).to({x:-320.1},0).wait(1).to({x:-335.5},0).wait(1).to({x:-357.7},0).wait(1).to({x:-390.5},0).wait(1).to({x:-440.9},0).wait(1).to({x:-507.8},0).to({_off:true},1).wait(95));

	// Слой 4
	this.instance_8 = new lib.Символ4();
	this.instance_8.setTransform(4.4,71.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({_off:false},0).wait(63).to({alpha:0},7).to({_off:true},1).wait(103));

	// Символ 1
	this.instance_9 = new lib.Символ1();
	this.instance_9.setTransform(81.8,0);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(91).to({_off:false},0).to({alpha:1},10).wait(82).to({alpha:0},9).wait(1));

	// Слой 16
	this.instance_10 = new lib.Символ61();
	this.instance_10.setTransform(-190,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},184).wait(9));

	// qwe
	this.instance_11 = new lib.Анимация2("synched",0);
	this.instance_11.setTransform(20,0);
	this.instance_11.alpha = 0;

	this.instance_12 = new lib.Анимация3("synched",0);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:10.6,alpha:1},9).to({_off:true,x:0},10).wait(174));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(9).to({_off:false},10).wait(70).to({startPosition:0},0).to({alpha:0},8).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-396.5,-154.5,736,309);


// stage content:



(lib._640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		var _this = this;
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		stage.canvas.onmouseover = fl_MouseOverHandler_52;
		 
		function fl_MouseOverHandler_52()
		{
			_this.main.gotoAndStop(152);
		}
		
		
		stage.canvas.onmouseout = fl_MouseOutHandler_21;
		
		function fl_MouseOutHandler_21()
		{
		   _this.main.gotoAndPlay(153);
		}
		
		
		var frequency = 20;
		stage.enableMouseOver(frequency);
		this.btngrn.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler()
		{
			_this.btngrn.gotoAndPlay(1);
		}
		
		
		
		
		var frequency = 20;
		stage.enableMouseOver(frequency);
		this.btngrn.addEventListener("mouseout", fl_MouseOutHandler);
		
		function fl_MouseOutHandler()
		{
			_this.btngrn.gotoAndPlay(15);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.btngrn = new lib.Символ77();
	this.btngrn.setTransform(16.9,260.5,1.18,1.18,0,0,0,-92,5.2);

	this.timeline.addTween(cjs.Tween.get(this.btngrn).wait(1));

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#299022").ss(1,1,1).p("Egx8gXwMBj5AAAMAAAAvhMhj5AAAg");
	this.shape.setTransform(319.7,152.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 8
	this.main = new lib.Символ2();
	this.main.setTransform(396,152.5);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(133.3,150.5,922.2,338.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;