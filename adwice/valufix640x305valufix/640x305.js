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
		{src:"images/ert.jpg", id:"ert"},
		{src:"images/qwe.png", id:"qwe"}
	]
};



// symbols:



(lib.adf = function() {
	this.initialize(img.adf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,111);


(lib.ert = function() {
	this.initialize(img.ert);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,282);


(lib.qwe = function() {
	this.initialize(img.qwe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,639,309);


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


(lib.Символ61 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0.392,1],-206.4,0,206.5,0).s().p("EggPAXwMAAAgvfMBAfAAAMAAAAvfg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-206.4,-152,413,304);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0003BD","#00AEFF","#0003BD"],[0,0.478,1],0,-28.7,0,28.8).s().rr(-95.1,-28.75,190.2,57.5,6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-95.1,-28.7,190.2,57.5);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABZAsQgLgLAAgTIAAgbQAAgTALgLQAKgKASAAQASAAAKAKQALALAAATIAAAbQAAATgLALQgKAKgSAAQgRAAgLgKgABogfQgFAGAAALIAAAcQAAAMAFAGQAEAGAJAAQAJAAAFgGQAFgGAAgMIAAgcQAAgLgFgGQgFgGgJAAQgJAAgEAGgAm5AuQgKgHAAgPIAAgBIAUAAQAAAHAEAEQAFAEAGAAQAJAAAEgEQAFgEAAgHQAAgJgEgEQgEgEgIAAIgNAAIAAgOIANAAQAHAAAEgDQAEgEAAgIQAAgGgFgEQgEgEgIAAQgGAAgEAEQgEAEAAAGIgTAAIgBgBQAAgNAKgIQAKgIAOAAQARAAAKAHQAKAIAAAPQAAAHgEAHQgEAGgHADQAIABAEAHQAFAGAAAJQAAAPgLAIQgKAIgSAAQgOAAgLgIgAoLA2IgHgDIACgPIAFACIAEAAQAFAAADgCQACgDACgGIABgDIgghMIAWAAIASAxIAAADIABAAIASg0IAVAAIghBUQgEALgFAGQgGAFgKAAgAHfA1IAAhpIA8AAIAAAQIgnAAIAAAcIAhAAIAAAOIghAAIAAAfIAnAAIAAAQgAFYA1IAAhpIAVAAIAABZIAdAAIAAhZIAUAAIAABZIAdAAIAAhZIAVAAIAABpgAEGA1IAAhpIAVAAIAAAmIAOAAQAQAAAKAJQAKAIAAAPQAAAPgKAKQgKAKgQAAgAEbAlIAOAAQAHAAAEgGQAEgFAAgIQAAgHgEgGQgEgFgHAAIgOAAgADhA1IAAhZIgXAAIAAAgQABAdgJAOQgJAOgRAAIgDAAIAAgQIADAAQAIAAADgJQADgJAAgXIgBgwIBBAAIAABpgAAAA1IAAhpIA8AAIAAAQIgoAAIAAAWIAOAAQAQAAAJAJQAKAIAAAPQAAAPgKAKQgJAKgQAAgAAUAlIAOAAQAHAAAEgGQADgFAAgIQAAgHgDgGQgEgFgHAAIgOAAgAhyA1IAAhpIAVAAIAAAmIAOAAQAQAAAJAJQAKAIAAAPQAAAPgKAKQgJAKgQAAgAhdAlIAOAAQAHAAAEgGQADgFAAgIQAAgHgDgGQgEgFgHAAIgOAAgAiqA1IAAhZIgYAAIAAgQIBGAAIAAAQIgZAAIAABZgAjaA1IgGgXIgbAAIgGAXIgVAAIAehpIAVAAIAeBpgAjkANIgJgfIgBAAIgJAfIATAAgAk1A1IAAgtIgiAAIAAAtIgVAAIAAhpIAVAAIAAAuIAiAAIAAguIAVAAIAABpg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.9,-5.4,108,11);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("НАВЕДИ МЫШЬ", "32px 'Roboto'");
	this.text.lineHeight = 34;
	this.text.lineWidth = 314;
	this.text.setTransform(-72.8,-36.7,0.458,0.458);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.7,-36.7,145.6,73.4);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.qwe();
	this.instance.setTransform(-319.5,-154.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-319.5,-154.5,639,309);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("ABlBeQgXgWABgpIAAg9QgBgoAXgXQAWgXAmAAQAlAAAYAXQAWAXAAAoIAAA9QAAApgWAWQgYAXglAAQgmAAgWgXgACEhEQgKAMAAAZIAAA+QAAAaAKAMQAKANATAAQATAAAKgNQAKgMAAgaIAAg+QAAgYgKgNQgKgNgTAAQgTAAgKANgAGuBxIAAjhIB/AAIAAAiIhTAAIAAA6IBFAAIAAAhIhFAAIAABCIBTAAIAAAigAESBxIAAjhICCAAIAAAiIhWAAIAAC/gAAEBxIAAhfIhIAAIAABfIgsAAIAAjhIAsAAIAABiIBIAAIAAhiIAsAAIAADhgAj2BxIgNgxIg5AAIgNAxIguAAIBBjhIAtAAIBBDhgAkMAdIgThGIgBAAIgTBGIAnAAgAm3BxIAAhfIhJAAIAABfIgsAAIAAjhIAsAAIAABiIBJAAIAAhiIAsAAIAADhg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.7,-11.7,111.5,23.5);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AI+BzIgPgFIAFggIAKADIAJABQALAAAFgFQAGgGADgMIACgIIhFijIAvAAIAmBoIACAFIABAAIAmhtIAuAAIhGC2QgJAWgMAMQgNANgVAAgAAJBeQgUgWAAgpIAAg9QAAgoAUgXQAXgXAmAAQAlAAAXAXQAXAXAAAoIAAA9QAAApgXAWQgXAXglAAQgmAAgXgXgAAphEQgLAMAAAZIAAA+QAAAaALAMQAJANAUAAQASAAAKgNQALgMgBgaIAAg+QABgYgLgNQgKgNgSAAQgUAAgJANgAlEBfQgWgWAAgoIAAhBQAAgoAVgWQAUgWAkAAQAmAAATATQAVASgCAkIAAABIgqAAQAAgVgIgJQgIgJgSAAQgRAAgIAMQgIAMAAAZIAABBQAAAZAJAMQAIAMASAAQARAAAHgIQAIgJAAgWIAqAAIAAABQABAkgTASQgUATgkAAQgkAAgVgWgAoDBeQgXgWAAgpIAAg9QAAgoAXgXQAVgXAmAAQAmAAAXAXQAWAXAAAoIAAA9QAAApgWAWQgXAXgmAAQglAAgWgXgAnlhEQgKAMABAZIAAA+QgBAaAKAMQAKANATAAQAUAAAJgNQALgMAAgaIAAg+QAAgYgLgNQgJgNgUAAQgTAAgKANgAHiBxIgxhfIgLAAIAABfIgtAAIAAjhIAtAAIAABdIAJAAIAwhdIA2AAIhBBoIBHB5gAEqBxIAAhYIgSADIgSABQglAAgUgSQgVgQABgmIAAhFIArAAIAABFQABAWAHAJQAIAJASAAIASgBIASgEIAAhoIAsAAIAADhgAh+BxIAAi/Ig0AAIAAgiICWAAIAAAiIg1AAIAAC/gApgBxIgwhfIgMAAIAABfIgsAAIAAjhIAsAAIAABdIAJAAIAwhdIA3AAIhBBoIBGB5g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.3,-11.7,142.7,23.5);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AJHBxIAAjhIAtAAIAABQIAdAAQAjAAAUAVQAVASAAAhQAAAggVAVQgUAUgjAAgAJ0BPIAdAAQAPAAAJgMQAIgLAAgRQAAgQgIgLQgJgLgPAAIgdAAgAHRBxIAAi/Ig0AAIAAgiICWAAIAAAiIg2AAIAAC/gAFcBxIAAiNIgBAAIhJCNIgrAAIAAjhIArAAIAACNIABABIBJiOIAsAAIAADhgACZBxIAAhYIgSADIgTABQgkAAgVgSQgUgQAAgmIAAhFIAsAAIAABFQAAAWAIAJQAIAJARAAIATgBIASgEIAAhoIAsAAIAADhgAh0BxIAAjhIB9AAIAAAiIhQAAIAAA6IBFAAIAAAhIhFAAIAABCIBRAAIAAAigAjCBxIAAi/IgyAAIABBEQAABBgSAdQgTAdglAAIgwAAIAAjhIAsAAIAAC/IAEAAQASAAAGgTQAFgTABgzIgBhmICKAAIAADhgAorBxIAAjhIAtAAIAABQIAeAAQAiAAAVAVQAVASAAAhQAAAggVAVQgUAUgjAAgAn+BPIAeAAQAPAAAIgMQAIgLAAgRQAAgQgIgLQgIgLgPAAIgeAAgArcBxIAAjhIBBAAQAkAAAUAPQATAQAAAfQABAQgIANQgHAMgOAGQATADAJANQAJAPAAATQAAAhgTARQgSAQgkAAgAqwBPIAgAAQAOAAAIgIQAHgIAAgQQABgQgIgJQgGgJgPgBIghAAgAqwgQIAXAAQAPAAAHgIQAHgIAAgOQABgQgJgIQgHgIgQAAIgVAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-73.3,-11.3,146.7,22.8);


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


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AorCEQgWgQABggIABgBIAqAAQAAANAJAKQAKAJANAAQASAAAKgJQAKgKAAgOQAAgTgJgIQgJgIgRAAIgbAAIAAgiIAbAAQAQAAAIgIQAIgHAAgQQAAgNgJgJQgJgIgRAAQgNAAgIAIQgIAIAAAOIgrAAIgBgBQgBgdAWgRQAVgSAfAAQAlAAAVARQAVARAAAfQAAAQgJALQgJANgQAHQASAHAJANQAKAOAAATQAAAggWARQgXASglAAQgeAAgYgRgAraCTIgPgFIAFggIAKAEIAJABQALAAAFgGQAFgGADgLIADgIIhFikIAvAAIAmBmIACAGIABAAIAmhsIAuAAIhGC2QgJAWgMANQgNAMgVAAgALECSIgxhgIgMAAIAABgIgsAAIAAjiIAsAAIAABbIAJAAIAwhbIA3AAIhCBmIBHB8gAIbCSIgNgxIg5AAIgMAxIguAAIBAjiIAuAAIBADigAIFA+IgThGIgBAAIgTBGIAnAAgAFfCSIgwhgIgMAAIAABgIgsAAIAAjiIAsAAIAABbIAJAAIAxhbIA2AAIhBBmIBGB8gABiCSIAAiQIAAAAIhJCQIgqAAIAAjiIAqAAIAACOIABAAIBIiOIAtAAIAADigAhPCSIgNgxIg5AAIgMAxIguAAIBAjiIAtAAIBBDigAhlA+IgThGIgBAAIgTBGIAnAAgAkPCSIAAhfIhKAAIAABfIgsAAIAAjiIAsAAIAABhIBKAAIAAhhIAsAAIAADigAAahzQgOgMAAgUIABgBIAgAAQAAAIAEAGQAEAFAJAAQAJAAADgFQAFgGAAgIIAgAAIAAABQABATgOANQgOANgWAAQgXAAgNgNg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76.4,-14.9,152.9,30);


(lib.Анимация7 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-80.5,0,80.5,0).s().p("AskSaMAAAgkzIZJAAMAAAAkzg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.5,-117.8,161.1,235.7);


(lib.Анимация6 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-80.5,0,80.5,0).s().p("AskSaMAAAgkzIZJAAMAAAAkzg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.5,-117.8,161.1,235.7);


(lib.Анимация5 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AA7AAQAAAYgSARQgRASgYAAQgXAAgSgSQgRgRAAgYQAAgXARgSQASgRAXAAQAYAAARARQASASAAAXg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.9,-6.9,13.8,13.8);


(lib.Анимация4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AA7AAQAAAYgSARQgRASgYAAQgXAAgSgSQgRgRAAgYQAAgXARgSQASgRAXAAQAYAAARARQASASAAAXg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.9,-6.9,13.8,13.8);


(lib.Символ76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Анимация6("synched",0);
	this.instance.setTransform(-135.9,2.1);

	this.instance_1 = new lib.Анимация7("synched",0);
	this.instance_1.setTransform(310.8,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},34).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:310.8},34).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216.5,-115.7,161.1,235.7);


(lib.Символ75 = function() {
	this.initialize();

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AryD9QgzAAAAg0IAAAAIAAgRIAAmBQAAgzAzAAIAAAAIXkAAQA0AAAAAzIAAAAIAAGBIAAARQAAA0g0AAIAAAAg");

	// Слой 2
	this.instance = new lib.Символ76();
	this.instance.setTransform(-121.4,5.2);
	this.instance.alpha = 0.309;

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
	this.instance = new lib.Символ30();
	this.instance.setTransform(34.8,2.9);

	// Слой 1 - копия
	this.instance_1 = new lib.Символ75();
	this.instance_1.setTransform(35.1,2.8);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-302.9,-107.8,418.6,235.7);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABpA0QgNgNAAgWIAAghQAAgWANgNQAMgMAVAAQAVAAAMAMQANANAAAWIAAAhQAAAWgNANQgMAMgVAAQgUAAgNgMgAB6glQgFAHAAAOIAAAhQAAAOAFAHQAGAHAKAAQALAAAFgHQAGgHAAgOIAAghQAAgOgGgHQgFgHgLAAQgKAAgGAHgAoIA3QgNgJABgSIAAAAIAXAAQAAAHAFAFQAFAFAIAAQAKAAAFgFQAGgFAAgIQAAgKgFgFQgFgEgJAAIgPAAIAAgRIAPAAQAJAAAEgEQAFgFAAgJQAAgIgGgEQgEgFgKAAQgHAAgFAFQgEAEAAAHIgXAAIgBAAQgBgQAMgKQAMgJARAAQAUAAAMAJQAMAJAAARQAAAJgFAIQgFAHgJAEQAKACAFAHQAGAHAAAMQAAARgNAKQgMAJgVAAQgRAAgMgJgAppBAIgIgDIACgSIAGACIAFAAQAFAAADgDQADgDACgHIABgEIglhZIAaAAIAVA5IAAADIABAAIAVg8IAaAAIgnBjQgFANgHAHQgHAGgLAAgAI1A+IAAh7IBHAAIAAATIguAAIAAAgIAmAAIAAARIgmAAIAAAkIAuAAIAAATgAGWA+IAAh7IAYAAIAABoIAiAAIAAhoIAZAAIAABoIAiAAIAAhoIAYAAIAAB7gAE1A+IAAh7IAZAAIAAAsIARAAQATAAALALQAMAKAAASQAAARgMAMQgLALgTAAgAFOArIARAAQAIAAAFgGQAEgGAAgJQAAgJgEgHQgFgGgIAAIgRAAgAEKA+IAAhoIgbAAIAAAlQAAAjgKAQQgKAQgVAAIgDAAIAAgTIADAAQAKAAADgKQADgKAAgcIAAg4IBMAAIAAB7gAAAA+IAAh7IBGAAIAAATIgvAAIAAAZIARAAQATAAALALQAMAKAAASQAAARgMAMQgLALgTAAgAAXArIARAAQAIAAAFgGQAEgGAAgJQAAgJgEgHQgFgGgIAAIgRAAgAiHA+IAAh7IAZAAIAAAsIAQAAQATAAALALQAMAKAAASQAAARgMAMQgLALgTAAgAhuArIAQAAQAIAAAFgGQAEgGAAgJQAAgJgEgHQgFgGgIAAIgQAAgAjJA+IAAhoIgdAAIAAgTIBUAAIAAATIgeAAIAABogAkCA+IgHgbIgfAAIgHAbIgaAAIAkh7IAZAAIAjB7gAkOAQIgKgmIgBAAIgLAmIAWAAgAltA+IAAg0IgoAAIAAA0IgZAAIAAh7IAZAAIAAA2IAoAAIAAg2IAZAAIAAB7g");
	this.shape.setTransform(0.1,1.5);

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.setTransform(0.2,0);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-94.9,-28.7,190.2,57.5);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.7,-36.7,145.6,73.4);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 3
	this.instance = new lib.Символ29();
	this.instance.setTransform(23.7,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-38.3,145.6,73.4);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ70();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76,-55.5,152,111);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},7,cjs.Ease.get(-1)).to({alpha:0},7,cjs.Ease.get(1)).to({alpha:0.535},8,cjs.Ease.get(-1)).to({alpha:1},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-55.5,152,111);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2
	this.instance = new lib.Анимация4("synched",0);
	this.instance._off = true;

	this.instance_1 = new lib.Анимация5("synched",0);
	this.instance_1.setTransform(0,0,2.483,2.483);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},18).to({state:[{t:this.instance}]},13).to({state:[{t:this.instance_1}]},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).to({scaleX:2.02,scaleY:2.02},13).to({_off:true,scaleX:2.48,scaleY:2.48,alpha:0},6).wait(1));

	// Слой 1 - копия: 2
	this.instance_2 = new lib.Анимация4("synched",0);
	this.instance_2._off = true;

	this.instance_3 = new lib.Анимация5("synched",0);
	this.instance_3.setTransform(0,0,2.483,2.483);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},12).to({state:[{t:this.instance_2}]},13).to({state:[{t:this.instance_3}]},6).to({state:[]},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({scaleX:2.02,scaleY:2.02},13).to({_off:true,scaleX:2.48,scaleY:2.48,alpha:0},6).wait(7));

	// Слой 1 - копия
	this.instance_4 = new lib.Анимация4("synched",0);
	this.instance_4._off = true;

	this.instance_5 = new lib.Анимация5("synched",0);
	this.instance_5.setTransform(0,0,2.483,2.483);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.instance_4}]},13).to({state:[{t:this.instance_5}]},6).to({state:[]},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({scaleX:2.02,scaleY:2.02},13).to({_off:true,scaleX:2.48,scaleY:2.48,alpha:0},6).wait(13));

	// Слой 1
	this.instance_6 = new lib.Анимация4("synched",0);

	this.instance_7 = new lib.Анимация5("synched",0);
	this.instance_7.setTransform(0,0,2.483,2.483);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},13).to({state:[{t:this.instance_7}]},6).to({state:[]},1).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:2.02,scaleY:2.02},13).to({_off:true,scaleX:2.48,scaleY:2.48,alpha:0},6).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-6.9,13.8,13.8);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 11
	this.instance = new lib.Символ11();
	this.instance.setTransform(190.3,402.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({scaleX:1.12,scaleY:1.12,x:188.1,y:409.6},8).to({scaleX:1,scaleY:1,x:190.3,y:402.2},5).wait(7).to({scaleX:1.12,scaleY:1.12,x:188.1,y:409.6},5).to({scaleX:1,scaleY:1,x:190.3,y:402.2},8).wait(14));

	// Символ 10
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(205.9,362.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({scaleX:1.12,scaleY:1.12,x:205.5,y:365.4},8).to({scaleX:1,scaleY:1,x:205.9,y:362.7},5).wait(15).to({scaleX:1.12,scaleY:1.12,x:205.5,y:365.4},5).to({scaleX:1,scaleY:1,x:205.9,y:362.7},8).wait(10));

	// Символ 9
	this.instance_2 = new lib.Символ9();
	this.instance_2.setTransform(207.9,323.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({scaleX:1.12,scaleY:1.12,x:207.7,y:321.2},8).to({scaleX:1,scaleY:1,x:207.9,y:323.2},5).wait(23).to({scaleX:1.12,scaleY:1.12,x:207.7,y:321.2},5).to({scaleX:1,scaleY:1,x:207.9,y:323.2},8).wait(6));

	// Символ 4
	this.instance_3 = new lib.Символ4();
	this.instance_3.setTransform(209.6,280.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:1.12,scaleY:1.12,y:273.4},8).to({scaleX:1,scaleY:1,y:280.4},5).wait(31).to({scaleX:1.12,scaleY:1.12,y:273.4},5).to({scaleX:1,scaleY:1,y:280.4},8).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(133.1,265.5,152.9,148.5);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 8
	this.instance = new lib.Символ8();
	this.instance.setTransform(172.1,59.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({scaleX:1.22,scaleY:1.22,x:164.6,y:72.4},6).to({scaleX:1,scaleY:1,x:172.1,y:59.3},6).wait(7).to({scaleX:1.22,scaleY:1.22,x:164.6,y:72.4},6).to({scaleX:1,scaleY:1,x:172.1,y:59.3},6).wait(14));

	// Символ 7
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(194.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({scaleX:1.22,scaleY:1.22,x:192.3,y:24.2},6).to({scaleX:1,scaleY:1,x:194.8,y:19.8},6).wait(15).to({scaleX:1.22,scaleY:1.22,x:192.3,y:24.2},6).to({scaleX:1,scaleY:1,x:194.8,y:19.8},6).wait(10));

	// Символ 6
	this.instance_2 = new lib.Символ6();
	this.instance_2.setTransform(174.9,-19.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({regY:-0.1,scaleX:1.22,scaleY:1.22,x:167.9,y:-24.1},6).to({regY:0,scaleX:1,scaleY:1,x:174.9,y:-19.7},6).wait(23).to({regY:-0.1,scaleX:1.22,scaleY:1.22,x:167.9,y:-24.1},6).to({regY:0,scaleX:1,scaleY:1,x:174.9,y:-19.7},6).wait(6));

	// Символ 5
	this.instance_3 = new lib.Символ5();
	this.instance_3.setTransform(206.6,-59.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:1.22,scaleY:1.22,x:206.7,y:-72.3},6).to({scaleX:1,scaleY:1,x:206.6,y:-59.2},6).wait(31).to({scaleX:1.22,scaleY:1.22,x:206.7,y:-72.3},6).to({scaleX:1,scaleY:1,x:206.6,y:-59.2},6).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(120.5,-70.9,171.2,142);


(lib.Анимация3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ15();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-319.5,-154.5,639,309);


(lib.Символ77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 2
	this.instance = new lib.Символ78();
	this.instance.setTransform(0,-0.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.099},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.152},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.188},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.218},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.239},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.256},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.269},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.28},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.289},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.22},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.169},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.129},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.097},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.072},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.052},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.036},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.022},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.01},0).wait(1).to({scaleX:1,scaleY:1,alpha:0},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ74();
	this.instance_1.setTransform(0.1,0.1,1,1,0,0,0,35.1,2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:35,regY:2.7,scaleX:1.03,scaleY:1.03,x:0,y:0},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({regX:35.1,regY:2.8,scaleX:1.08,scaleY:1.08,x:0.1,y:0.1},0).wait(1).to({regX:35,regY:2.7,scaleX:1.06,scaleY:1.06,x:0,y:0},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:35.1,regY:2.8,scaleX:1,scaleY:1,x:0.1,y:0.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-337.9,-110.6,418.6,235.7);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 1
	this.instance = new lib.Символ31();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.9,-28.7,190.2,57.5);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(12));

	// Слой 1
	this.btngrn = new lib.Символ77();
	this.btngrn.setTransform(-108.5,-116.8,1.18,1.18,0,0,0,-92,5.2);

	this.timeline.addTween(cjs.Tween.get(this.btngrn).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-398.7,-253.5,493.9,278.1);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ17();
	this.instance.setTransform(6.3,68.7,1.89,1.89);

	// Слой 1
	this.instance_1 = new lib.Анимация3("synched",0);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-319.5,-154.5,639,309);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(9).call(this.frame_18).wait(11));

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(120.5,-70.9,171.2,142);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 1
	this.instance = new lib.Символ16();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319.5,-154.5,639,309);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 1
	this.instance = new lib.Символ2();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(120.5,-70.9,171.2,142);


// stage content:



(lib._640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		{
		    _this.text1.gotoAndPlay(0);
			_this.text2.gotoAndPlay(9);
			_this.fon.gotoAndPlay(0);
			_this.btn.gotoAndPlay(1);
			_this.mish.gotoAndPlay(0);
				_this.btnblue.gotoAndPlay(1);
			
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_21;
		
		 function fl_MouseOutHandler_21()
		{
		    _this.text1.gotoAndPlay(9);
			_this.text2.gotoAndPlay(18);
			_this.fon.gotoAndPlay(9);
			_this.btn.gotoAndPlay(12);
			_this.mish.gotoAndPlay(10);
			_this.btnblue.gotoAndPlay(12);	
		}
		
		
		
		
		var frequency = 20;
		stage.enableMouseOver(frequency);
		this.btn.addEventListener("mouseover", fl_MouseOverHandler_2);
		
		function fl_MouseOverHandler_2()
		{
			_this.btn.btngrn.gotoAndPlay(1);
		
		}
		
		
		
		
		
		var frequency = 20;
		stage.enableMouseOver(frequency);
		this.btn.addEventListener("mouseout", fl_MouseOutHandler);
		
		function fl_MouseOutHandler()
		{
			_this.btn.btngrn.gotoAndPlay(10);
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 14
	this.btnblue = new lib.Символ32();
	this.btnblue.setTransform(119.7,255.4);

	this.timeline.addTween(cjs.Tween.get(this.btnblue).wait(1));

	// Слой 12
	this.btn = new lib.Символ19();
	this.btn.setTransform(22.2,379.6,1,1,0,0,0,-97.5,0);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Символ 64
	this.text2 = new lib.Символ14();
	this.text2.setTransform(-108.3,-224.8);

	this.timeline.addTween(cjs.Tween.get(this.text2).wait(1));

	// Символ 3
	this.text1 = new lib.Символ3();
	this.text1.setTransform(-95.8,118.1);

	this.timeline.addTween(cjs.Tween.get(this.text1).wait(1));

	// Слой 13
	this.mish = new lib.Символ24();
	this.mish.setTransform(557.4,309.1);

	this.timeline.addTween(cjs.Tween.get(this.mish).wait(1));

	// Символ 61
	this.instance = new lib.Символ61();
	this.instance.setTransform(201,153,1,1.151);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Анимация 3
	this.fon = new lib.Символ18();
	this.fon.setTransform(320,154.5);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

	// Слой 11
	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(408.1,179.5);

	this.instance_2 = new lib.ert();
	this.instance_2.setTransform(295.8,-6.5,1.156,1.156);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40.9,130.5,932.9,426.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;