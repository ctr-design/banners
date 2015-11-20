(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.e3 = function() {
	this.spriteSheet = ss["teach_300x600_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fon = function() {
	this.spriteSheet = ss["teach_300x600_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.girl1 = function() {
	this.spriteSheet = ss["teach_300x600_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.image104 = function() {
	this.spriteSheet = ss["teach_300x600_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.key_PNG1176 = function() {
	this.spriteSheet = ss["teach_300x600_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.old_padlock_by_darkadathead4q0idd = function() {
	this.spriteSheet = ss["teach_300x600_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.q1 = function() {
	this.spriteSheet = ss["teach_300x600_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.r4 = function() {
	this.spriteSheet = ss["teach_300x600_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.w2 = function() {
	this.spriteSheet = ss["teach_300x600_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AH9D6IAAgmIiMAAIAAisIA1AAIAACCIA6AAIAAiCIA1AAIAACFIASAAIAABNgAv/DPQgSgIgMgVQgNgUAAggQAAgrAWgXQAXgWApAAQAhAAATANQASANAJAbIgvAKIgFgLQgEgGgHgDQgGgEgIAAQgSAAgKAPQgHALAAAXQAAAcAIALQAJAKAQAAQAPAAAIgIQAIgJADgQIAvAOQgFAUgKANQgKANgPAHQgPAGgXAAQgcAAgSgIgApkDTIAAgjIAIAAQALAAAFgEQAEgFAAgNIAAhyICUAAIAACsIg1AAIAAiBIgqAAIAAA0QAAAhgDAPQgEAQgMAHQgNAHgdAAIgUgCgAPPDUIAAgqIAwAAIAAAqgANeDUIAAheIhABeIgzAAIAAisIAyAAIAABfIBBhfIAyAAIAACsgAI+DUIAAisICOAAIAAAlIhZAAIAAAbIBTAAIAAAjIhTAAIAAAiIBcAAIAAAngAEbDUIAAheIhABeIgyAAIAAisIAyAAIAABfIBBhfIAxAAIAACsgABRDUIAAhFIg6AAIAABFIgzAAIAAisIAzAAIAAA9IA6AAIAAg9IA1AAIAACsgAh1DUIAAhFIg6AAIAABFIg1AAIAAisIA1AAIAAA9IA6AAIAAg9IA1AAIAACsgAmRDUIAAisICOAAIAAAlIhZAAIAAAbIBTAAIAAAjIhTAAIAAAiIBcAAIAAAngAqqDUIAAiBIg6AAIAACBIg1AAIAAisICkAAIAACsgAPRCeIAAgEQAAgLACgIQADgHAFgGIAXgUQAJgIAAgGQAAgHgDgDQgEgEgIAAQgIAAgGAGQgFAFgCAOIgtgGQACgZAQgPQAQgPAhAAQAZAAAQAKQAVAPAAAYQAAAKgFAJQgGAJgRANQgMAKgDAGQgDAFAAAJgAMjAWQgMgJgDgNIAVAAQAFANAQAAQASAAAEgNIAVAAQgDANgLAJQgMAJgQAAQgRAAgLgJgAgLglIAAglIhtAAIAAAlIgrAAIAAhNIASAAQAPgpAAg1IAAgmICOAAIAACEIASAAIAABNgAhSjKQAAAkgMA0IA2AAIAAhaIgqAAgAkphPQgSgJgNgUQgNgVAAgfQAAgrAXgXQAWgXAqAAQAgAAATANQATANAJAbIgvALIgFgMQgFgGgGgDQgHgDgIAAQgSAAgJAOQgIALAAAXQAAAdAJAKQAJALAPAAQAQAAAHgJQAIgIAEgRIAuAPQgEATgLANQgKANgOAHQgPAHgYAAQgcAAgRgIgApChRQgTgJgMgUQgMgUAAgeQAAgqAYgYQAXgXAqAAQArAAAXAXQAXAXAAAqQAAAegKATQgKATgTALQgTALgdAAQgdAAgTgKgAoujFQgKALAAAaQAAAaAKAMQAKALAQAAQARAAAKgLQAJgLAAgdQAAgYgKgMQgJgLgRAAQgQAAgKAMgADOhLIAAgjIAIAAQALAAAFgFQAEgFAAgMIAAhyICUAAIAACsIg1AAIAAiCIgqAAIAAA1QAAAhgDAPQgEAPgMAHQgNAHgdAAIgUgBgAMJhKIAAisIA1AAIAABCIAcAAQAnAAATAOQATAOAAAdQAAAYgSAMQgRANggAAgAM+hvIAbAAQAZAAAAgSQAAgQgZAAIgbAAgAKFhKIAAiCIg2AAIAAgqICiAAIAAAqIg3AAIAACCgAIThKIgJgdIg8AAIgIAdIg2AAIBAisIA6AAIBBCsgAH/iMIgSg+IgTA+IAlAAgAAzhKIAAisICOAAIAAAlIhZAAIAAAbIBTAAIAAAjIhTAAIAAAiIBcAAIAAAngArphKIAAiCIg2AAIAAgqIChAAIAAAqIg2AAIAACCgAtrhKIAAhAQgZANgWAAQgaAAgRgPQgRgQAAgbIAAg/IA1AAIAAA1QAAAMAGAHQAGAHALAAQAVAAAKgNIAAhCIA1AAIAACsg");
	this.shape.setTransform(-109.1,16.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-215.8,-8.5,213.6,50.1);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqBeQgVgKgPgYQgPgYAAgkQAAgxAagaQAagbAvAAQAmAAAWAPQAWAQAKAfIg3AMQgDgJgDgEQgFgHgIgEQgHgEgKAAQgSAAgLARQgJANAAAaQAAAgAKAMQAKANAQAAQASAAAJgKQAJgKAFgTIA2AQQgGAXgLAPQgMAQgRAHQgSAIgbAAQgfAAgUgJgAkTBkIAAgpIAXABQAVAAAFgQIhCiPIBCAAIAcBTIAbhTIA/AAIhBCZQgIATgGAJQgGAJgMAGQgMAGgVAAQgLAAgagDgAuEBcQgWgKgOgYQgOgXAAgjQAAgvAcgcQAbgbAwAAQAzAAAbAbQAbAbAAAwQAAAhgMAXQgMAWgWANQgWAMgiAAQghAAgXgLgAttgqQgLANAAAdQAAAeALAOQALANAUAAQAUAAALgNQALgNAAggQAAgcgLgNQgMgNgUAAQgSAAgMANgAL/BkIAAjHIA+AAIAABOIAgAAQAuAAAWAQQAWAOAAAiQAAAbgUAPQgUAPgmAAgAM9A5IAfAAQAdAAAAgVQAAgTgdAAIgfAAgAJmBkIAAiVIg/AAIAAgyIC8AAIAAAyIg/AAIAACVgAHRBkIAAhsIhLBsIg7AAIAAjHIA7AAIAABtIBLhtIA7AAIAADHgACyBkIAAiVIg/AAIAAgyIC8AAIAAAyIg/AAIAACVgAl5BkIAAiVIhEAAIAACVIg+AAIAAjHIDAAAIAADHgAqUBkIAAiVIg/AAIAAgyIC8AAIAAAyIg/AAIAACVg");
	this.shape.setTransform(-22.9,1.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118,-8.5,190.3,20.8);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AjtBgQgJgiAAgzQAAgZABgNQgBgIAFgLIAMgWQADgGAHgnQAFghAJAAQAWARAQAKQAIABAJAAIAmAAIAIAAIAIAAIA5AAIACACIAIAAIAJgDIAMgCIABgBIAAAAQAXgEA2gDQBUgJAIgIQAEgGACgMQAGgLAKARIgEARQAAABAcAVQAeAXAJAQIAAAMQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAQgLgKgPgHIgLAAIgLAFIAAADIgKABQgdANgQAEIgIAGQgRALgIAEIgrAAIgEgCIgOAFIgMAAIgHACQgcAHgDAAQgGAAgFgDQgEgEgGAAQgGAAgNgHIhGgCQgyAIgWAdQgWAbgEAbQgDAbAWAhQAWAhAPAQIgBAGQgCADgFAAQg4AAgThJg");
	this.shape.setTransform(-3.2,-7.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.9,-24.7,49.6,34);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.q1();
	this.instance.setTransform(-61,-22);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-61,-22,122,44);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AgeC+IAAgBIgnAAQgzgBgLgQQgFgJABgVIgFgeQgDgTgGgNQguhfAAgaQAAgEAcgVQAfgWAHgdIAOgoQAHgYgCgRQAJACAHAQQAHAPAMAEIAaALQASAIAfADIAnAAIAJABQA3AAAagdQAEgGAKgPQAGgJAFAAQACAAAIAHQAHAHAEABIAPAEQAGACAAADQgKAZAAAKQAAAIAEAPQADAPAAAHIgIAfQgHAfgCALQgBAOAAAaIAAAcQgBAkACARIAGAcQACAMAAALQAAARgVAJQgRAIgxAJIgCABIgmAAQgJADgKAAIhEgJg");
	this.shape.setTransform(-4.3,-13.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24,-33.1,39.3,39.9);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.r4();
	this.instance.setTransform(-22,-23.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22,-23.5,44,47);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.key_PNG1176();
	this.instance.setTransform(-40,-17);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40,-17,80,34);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.fon();
	this.instance.setTransform(-301.5,-152.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAUA0QgiAAgggjQgbgcgBgTIABgQQACgBADgGQAQAAAxAjQA7ApATAJQgmATgLADIgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape.setTransform(-161.5,43.7);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-301.5,-152.5,603,305);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA3B7IAAgrIh+AAIAAArIgyAAIAAhZIAVAAQARgvAAg9IAAgtICmAAIAACZIAWAAIAABZgAgbhDQAAAqgOA7IA+AAIAAhnIgwAAgAk1AYIA7gEQAFAVAXAAQANAAAGgHQAHgGAAgMQAAgLgIgFQgJgHgOAAIgRAAIAAgkIANAAQAMAAAHgGQAHgGAAgLQAAgQgVAAQgVAAgDASIg4gGQAOg0BDAAQAmAAAVAOQAVAPAAAYQAAAegaAMQAkAJAAAiQAAAegWASQgXATgpAAQhHAAgRg7gAIVBQIAAjHIA+AAIAABOIAhAAQAtAAAWAQQAWAQAAAgQAAAbgUAPQgUAPgmAAgAJTAlIAgAAQAdAAAAgVQAAgRgdAAIggAAgAF8BQIAAiVIg/AAIAAgyIC8AAIAAAyIg/AAIAACVgACBBQIAAjHICmAAIAAArIhoAAIAAAgIBgAAIAAApIhgAAIAAAlIBrAAIAAAugAl8BQIgLghIhGAAIgKAhIg/AAIBLjHIBEAAIBLDHgAmTADIgWhGIgWBGIAsAAgArMBQIAAjHIBnAAQAiAAAQAQQARAQAAAeQAAAegSARQgSAPgmAAIgiAAIAABLgAqOghIAPAAQASAAAIgGQAHgHAAgJQAAgKgHgGQgGgHgRAAIgSAAg");
	this.shape.setTransform(-19.8,3.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-91.6,-8.5,143.6,24.8);


(lib.Символ1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.old_padlock_by_darkadathead4q0idd();
	this.instance.setTransform(-32,-28.1,0.703,0.703);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32,-28.1,64,56.3);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(212,212,212,0.498)").s().p("Aj2D3QhnhmAAiRQAAiPBnhnQBnhnCPAAQCRAABmBnQBnBnAACPQAACRhnBmQhmBniRAAQiPAAhnhng");
	this.shape.setTransform(35.1,35.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70.1,70.1);


(lib.shape149 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkDhaIIHAAIkEC1g");
	this.shape.setTransform(0,17.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26,8.1,52.2,18.3);


(lib.shape105 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["teach_300x600_atlas_"],3), null, new cjs.Matrix2D(1,0,0,1,-40,-48)).s().p("AmPHgIAAu/IMfAAIAAO/g");
	this.shape.setTransform(40,48);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,96);


(lib.Symbol6_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(212,212,212,0.498)").s().p("Aj2D3QhnhmAAiRQAAiPBnhnQBnhnCPAAQCRAABmBnQBnBnAACPQAACRhnBmQhmBniRAAQiPAAhnhng");
	this.shape_1.setTransform(35.1,35.1);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70.1,70.1);


(lib.Слой8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.e3();
	this.instance.setTransform(-12.5,-23);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-23,25,46);


(lib.Слой7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.w2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,95,231);


(lib.shape105_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["teach_300x600_atlas_"],3), null, new cjs.Matrix2D(1,0,0,1,-40,-48)).s().p("AmPHgIAAu/IMfAAIAAO/g");
	this.shape_1.setTransform(40,48);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,96);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(5.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04,x:6.2},10,cjs.Ease.get(-1)).to({scaleX:1.08,x:7.1},9,cjs.Ease.get(1)).to({scaleX:1.04,x:6.1},10,cjs.Ease.get(-1)).to({scaleX:1,x:5.2},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.8,-8.5,190.3,20.8);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ18();
	this.instance.shadow = new cjs.Shadow("#00FE00",0,0,5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

	// Слой 1
	this.instance_1 = new lib.Символ18();
	this.instance_1.alpha = 0.309;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(9.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.09,x:10.9},9,cjs.Ease.get(-1)).to({scaleX:1.19,x:12.9},10,cjs.Ease.get(1)).to({scaleX:1.09,x:10.8},11,cjs.Ease.get(-1)).to({scaleX:1,x:9.1},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-8.5,143.6,24.8);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ14();
	this.instance.shadow = new cjs.Shadow("#00FE00",0,0,6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ14();
	this.instance_1.alpha = 0.309;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.8,-8.5,213.6,50.1);


(lib.копияsprite106 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ1_1();
	this.instance.setTransform(38.2,48.3);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(29, 33, 0, 0))];
	this.instance.cache(-34,-30,68,60);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(6.2,20.2,68,60);


(lib.Symbol9 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AofKSIAA0jIRAAAIAAUjgAjLj2QhnBnAACPQAACRBnBmQBnBnCPAAQCRAABmhnQBohmAAiRQAAiPhohnQhmhniRAAQiPAAhnBng");
	mask.setTransform(30.7,35);

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.setTransform(35.1,35.1,1,1,0,0,0,35.1,35.1);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,10);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6,-6,86,86);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.main1 = new lib.копияsprite106();
	this.main1.setTransform(34,40.8,0.85,0.85,0,0,0,40,48);

	this.timeline.addTween(cjs.Tween.get(this.main1).to({rotation:-15},15).to({rotation:0},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.3,17.1,58,51);


(lib.sprite106 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape105("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,96);


(lib.Symbol9_1 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AofKSIAA0jIRAAAIAAUjgAjLj2QhnBnAACPQAACRBnBmQBnBnCPAAQCRAABmhnQBohmAAiRQAAiPhohnQhmhniRAAQiPAAhnBng");
	mask_1.setTransform(30.7,35);

	// Layer 1
	this.instance_1 = new lib.Symbol6_1();
	this.instance_1.setTransform(35.1,35.1,1,1,0,0,0,35.1,35.1);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,10);

	this.instance_1.mask = mask_1;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6,-6,86,86);


(lib.sprite150 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape149("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26,8.1,52.2,18.3);


(lib.sprite106_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.shape105_1("synched",0);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,96);


(lib.Слой9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(22,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-2},14,cjs.Ease.get(-1)).to({rotation:-4.2},15,cjs.Ease.get(1)).to({rotation:-2},15,cjs.Ease.get(-1)).to({rotation:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44,47);


(lib.Слой5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(117.9,1.1,1,1,0,0,0,56.9,-20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:56.8,rotation:26.4,y:1.2},18).to({regY:-20.8,rotation:-6.4},4).to({regX:56.9,regY:-20.9,rotation:0,y:1.1},2).to({rotation:1.5},8,cjs.Ease.get(-1)).to({regY:-20.8,rotation:3.5,y:1.2},10,cjs.Ease.get(1)).to({regX:57,regY:-20.9,rotation:1.8,y:1.1},8,cjs.Ease.get(-1)).to({regX:56.9,rotation:0},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,122,44);


(lib.shape75 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ10();
	this.instance.setTransform(35.6,25.4,2.614,2.614,0,34,-146);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.9,-69.9,223.1,190.6);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(0.2,0,0.909,0.909);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.84,scaleY:0.84,x:-8,y:1.3},9,cjs.Ease.get(-1)).to({scaleX:0.75,scaleY:0.75,x:-17,y:2.7},10,cjs.Ease.get(1)).to({scaleX:0.83,scaleY:0.83,x:-8.4,y:1.4},10,cjs.Ease.get(-1)).to({scaleX:0.91,scaleY:0.91,x:0.2,y:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196.1,-7.7,194.2,45.5);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 5
	this.instance = new lib.Слой5();
	this.instance.setTransform(69,116,1,1,0,0,0,61,22);

	// Слой 8
	this.instance_1 = new lib.Слой8();
	this.instance_1.setTransform(117.5,75);

	// Слой 9
	this.instance_2 = new lib.Слой9();
	this.instance_2.setTransform(77,30.5,1,1,0,0,0,22,23.5);

	// Слой 7
	this.instance_3 = new lib.Слой7();
	this.instance_3.setTransform(95.5,159.5,1,1,0,0,0,47.5,115.5);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(8,7,135,268);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj2D3QhnhmAAiRQAAiPBnhnQBnhnCPAAQCRAABmBnQBnBnAACPQAACRhnBmQhmBniRAAQiPAAhnhng");
	mask.setTransform(35.1,35.1);

	// Layer 2
	this.instance = new lib.Symbol4();
	this.instance.setTransform(35,34.8,1,1,0,0,0,34,40.8);

	this.instance.mask = mask;

	// Layer 1
	this.instance_1 = new lib.Symbol6();
	this.instance_1.setTransform(35.1,35.1,1,1,0,0,0,35.1,35.1);
	this.instance_1.alpha = 0.629;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70.1,70.1);


(lib.Symbol4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.main1_1 = new lib.sprite106_1();
	this.main1_1.setTransform(34,40.8,0.85,0.85,0,0,0,40,48);

	this.timeline.addTween(cjs.Tween.get(this.main1_1).to({rotation:-15},15).to({rotation:0},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,81.6);


(lib.sprite152 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.sprite150();
	this.instance.setTransform(0.2,-40.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,scaleY:1.01,y:-42.5},2).to({scaleX:0.93,scaleY:1.08,y:-49.4},2).to({scaleX:0.83,scaleY:1.18,y:-60.8},2).to({scaleX:0.89,scaleY:1.11,x:0.1,y:-65.4},1).to({scaleX:0.94,scaleY:1.07,y:-68.6},1).to({scaleX:0.97,scaleY:1.03,x:0.2,y:-70.7},1).to({scaleX:1,scaleY:1,y:-72.6},2).to({scaleX:1,scaleY:1,y:-72.8},1).to({scaleX:1,scaleY:1,y:-72.5},1).to({scaleX:0.99,scaleY:1.01,y:-71.5},1).to({scaleX:0.97,scaleY:1.03,y:-69.6},1).to({scaleX:0.94,scaleY:1.06,y:-66.5},1).to({scaleX:0.89,scaleY:1.1,y:-62.2},1).to({scaleX:0.79,scaleY:1.2,y:-51.9},2).to({scaleX:1,scaleY:1,y:-40.8},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.9,-32.8,52.2,18.2);


(lib.sprite93UpOverDown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shape75("synched",0);
	this.instance.setTransform(-14.2,-16.1,0.384,0.384);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:9.7},14).to({rotation:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.4,-43,85.7,73.2);


(lib._599 = function() {
	this.initialize();

	// Layer 1
	this.arrow = new lib.sprite152();
	this.arrow.setTransform(7.4,20.4,0.127,0.191);
	this.arrow.shadow = new cjs.Shadow("#FF9900",0,0,11);

	this.addChild(this.arrow);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,8.2,22,19);


(lib.Символ25 = function(mode,startPosition,loop) {
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
	this.instance = new lib._599();
	this.instance.setTransform(-222.1,12.9,1.622,1.622,0,89.7,-90.3,6.4,11.5);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 24, -28))];
	this.instance.cache(-4,6,26,23);

	this.instance_1 = new lib._599();
	this.instance_1.setTransform(-290.2,22.4,1.622,1.622,-95.9,0,0,6.4,11.4);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 24, -28))];
	this.instance_1.cache(-4,6,26,23);

	this.instance_2 = new lib._599();
	this.instance_2.setTransform(-209.2,63.9,1.622,1.622,0,95.9,-84.1,6.4,11.4);
	this.instance_2.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 24, -28))];
	this.instance_2.cache(-4,6,26,23);

	this.instance_3 = new lib._599();
	this.instance_3.setTransform(-290.2,71.4,1.622,1.622,-95.9,0,0,6.4,11.4);
	this.instance_3.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 24, -28))];
	this.instance_3.cache(-4,6,26,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ3 = function() {
	this.initialize();

	// Слой 4
	this.instance = new lib.Символ13();
	this.instance.setTransform(-0.9,-26.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ13(), 3);

	// Слой 3
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(3.2,15.7);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ17(), 3);

	// Слой 2
	this.arr = new lib.Символ25();
	this.arr.setTransform(251.8,-59.7,1,1,0,0,0,0.2,1.8);

	// Слой 1
	this.instance_2 = new lib.girl1();
	this.instance_2.setTransform(-46.5,-110);

	this.addChild(this.instance_2,this.arr,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.5,-110,93,220);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ4();
	this.instance.setTransform(-89.9,-59.4,0.572,0.572);

	this.girl = new lib.Символ3();
	this.girl.setTransform(-93.5,27.1,0.572,0.572);

	// Слой 1
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(-76.6,3.7,0.73,0.73);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egk/Ak/MAAAhJ9MBJ/AAAMAAABJ9g");
	this.shape.setTransform(-28.7,54.4);

	this.addChild(this.shape,this.instance_1,this.girl,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-296.6,-182.3,504.8,473.5);


(lib.копияSymbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(35.1,35.1,1,1,0,0,0,35.1,35.1);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A1kEUIAAonMArJAAAIAAIng");
	this.shape.setTransform(133.8,34.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol9();
	this.instance_1.setTransform(35.1,35.1,1,1,0,0,0,35.1,35.1);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,78,78);


(lib.shape75_1 = function() {
	this.initialize();

	// Слой 2
	this.instance_1 = new lib.sprite93UpOverDown();
	this.instance_1.setTransform(-44,-29.3,1.558,1.558,0,78.5,-101.5);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.3,-93.2,126.6,125.7);


(lib.Symbol5_1 = function() {
	this.initialize();

	// Layer 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Aj2D3QhnhmAAiRQAAiPBnhnQBnhnCPAAQCRAABmBnQBnBnAACPQAACRhnBmQhmBniRAAQiPAAhnhng");
	mask_1.setTransform(35.1,35.1);

	// Layer 2
	this.instance_2 = new lib.Symbol4_1();
	this.instance_2.setTransform(35,34.8,1,1,0,0,0,34,40.8);

	this.instance_2.mask = mask_1;

	// Layer 1
	this.instance_3 = new lib.Symbol6_1();
	this.instance_3.setTransform(35.1,35.1,1,1,0,0,0,35.1,35.1);
	this.instance_3.alpha = 0.629;

	this.addChild(this.instance_3,this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70.1,70.1);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(248.8,454.2,0.349,0.349);

	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(247.7,387.4,0.349,0.349);

	this.instance_2 = new lib.Символ23();
	this.instance_2.setTransform(244.1,110.1,0.783,0.783,0,0,0,-97.9,15);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,2);

	// Слой 2
	this.fon = new lib.Символ2();
	this.fon.setTransform(303.9,214.9,0.961,0.961);

	this.addChild(this.fon,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(18.7,39.6,485.3,455.3);


(lib.sprite93UpOverDown_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance_1 = new lib.shape75_1("synched",0);
	this.instance_1.setTransform(-14.2,-16.1,0.384,0.384);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:9.7},14).to({rotation:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.6,-52,48.6,48.3);


(lib.Symbol12 = function(mode,startPosition,loop) {
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

	// Layer 1
	this.main1 = new lib.sprite106();
	this.main1.setTransform(30.5,30.6,0.85,0.85,0,0,0,40,48);
	this.main1.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,5);

	this.instance = new lib.sprite93UpOverDown_1();
	this.instance.setTransform(65.8,68.6,1.721,1.721);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.main1}]}).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-13.2,77,91);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5_1();
	this.instance.setTransform(35.1,35.1,1,1,0,0,0,35.1,35.1);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A1EEuIAApbMAqJAAAIAAJbg");
	this.shape.setTransform(133.1,37.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol9_1();
	this.instance_1.setTransform(35.1,35.1,1,1,0,0,0,35.1,35.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-8,78,89);


// stage content:



(lib.teach_300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		this.cursor = "none";
		
		/* Пользовательский курсор мыши
		Заменяет курсор мыши по умолчанию на указанный экземпляр символа.
		*/
		stage.canvas.style.cursor = "none";
		
		this.pricel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		function fl_CustomMouseCursor() {
			this.pricel.x = stage.mouseX;
			this.pricel.y = stage.mouseY;
		}
		//Чтобы восстановить курсор мыши по умолчанию, раскомментируйте следующие строки:
		//this.removeEventListener("tick", fl_CustomMouseCursor.bind(this));
		//stage.removeChild(pricel);
		//stage.canvas.style.cursor = "default";
		
		/* Событие "Помещен указатель мыши"
		При прохождении указателя через экземпляр символа выполняется функция, в которую можно добавить собственный код.
		
		Инструкции:
		1. Добавьте пользовательский код после строки "// Начало пользовательского кода".
		Данный код выполняется при прохождении указателя мыши через экземпляр символа.
		частота — количество вызовов события.
		*/
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.hand.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.pricel.gotoAndStop(0);
		}
		
		/* Событие "Помещен указатель мыши"
		При прохождении указателя через экземпляр символа выполняется функция, в которую можно добавить собственный код.
		
		Инструкции:
		1. Добавьте пользовательский код после строки "// Начало пользовательского кода".
		Данный код выполняется при прохождении указателя мыши через экземпляр символа.
		частота — количество вызовов события.
		*/
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.zam.addEventListener("mouseover", fl_MouseOverHandler_2.bind(this));
		
		function fl_MouseOverHandler_2()
		{
			this.pricel.gotoAndStop(1);
		}
		
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		
		
		this.qwe.addEventListener("click", fl_ClickToGoToWebPage);
		this.qwe.addEventListener("touchend", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open('http://google.com', "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.pricel = new lib.Symbol12();
	this.pricel.setTransform(631.5,28.3,0.516,0.516);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// Слой 4
	this.zam = new lib.копияSymbol7();
	this.zam.setTransform(143.2,532.4,0.89,0.89,0,0,0,35,34.9);
	new cjs.ButtonHelper(this.zam, 0, 1, 2, false, new lib.копияSymbol7(), 3);

	this.hand = new lib.Symbol7();
	this.hand.setTransform(139.8,421.7,0.89,0.89,0,0,0,35.1,34.6);
	new cjs.ButtonHelper(this.hand, 0, 1, 2, false, new lib.Symbol7(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hand},{t:this.zam}]}).wait(1));

	// Слой 2
	this.qwe = new lib.Символ6();
	this.qwe.setTransform(254.9,173.4,1.557,1.557,0,0,0,312.1,194.6);

	this.timeline.addTween(cjs.Tween.get(this.qwe).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.1,231.9,873.7,708.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;