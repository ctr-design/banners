(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/arrow.png", id:"arrow"},
		{src:"images/b1.png", id:"b1"},
		{src:"images/b2.png", id:"b2"},
		{src:"images/b3.png", id:"b3"},
		{src:"images/bg.png", id:"bg"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/logo_white.png", id:"logo_white"},
		{src:"images/money.png", id:"money"}
	]
};



// symbols:



(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,23);


(lib.b1 = function() {
	this.initialize(img.b1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,554,249);


(lib.b2 = function() {
	this.initialize(img.b2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,554,249);


(lib.b3 = function() {
	this.initialize(img.b3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,1134);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,290,66);


(lib.logo_white = function() {
	this.initialize(img.logo_white);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,290,66);


(lib.money = function() {
	this.initialize(img.money);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,315,120);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#07507C").ss(2,1,1).p("AgjhIIBHBIIhHBJ");
	this.shape.setTransform(3.7,7.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,9.4,16.7);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.b3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,1134);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#08507C").s().p("AGDAzIABgTIg6AAIgDATIgJAAIAEgbIAIAAQAOgXAGgiQADgPAPAAIAfAAIgKBIIAKAAIgEAbgAFpgfQgIAkgMATIAlAAIAJhAIgQAAQgJAAgBAJgAmEAzIACgTIg6AAIgEATIgIAAIAEgbIAHAAQAOgWAHgjQADgPAPAAIAfAAIgLBIIAKAAIgDAbgAmegfQgHAkgMATIAlAAIAJhAIgRAAQgIAAgCAJgAg3AZQgHgKAEgWQADgYAIgJQAJgKASAAQARAAAFAKQAGAKgDAXQgDAWgHAKQgIAJgSAAQgRAAgHgJgAgnghQgGAHgCATQgDARAEAIQADAHAMAAQANAAAFgIQAGgHADgRQADgUgEgGQgDgHgNAAQgMAAgGAHgAkeAZQgHgKADgWQAEgYAIgJQAJgKASAAQARAAAGAKQAHAKgDAXQgEAWgIAKQgIAJgSAAQgSAAgGgJgAkOghQgGAHgDATQgCARADAIQAEAHAMAAQAMAAAGgIQAGgHADgRQACgUgDgGQgEgHgMAAQgNAAgFAHgAoFAZQgHgKADgWQAEgYAIgJQAJgKASAAQARAAAGAKQAHAKgDAXQgEAWgIAKQgIAJgSAAQgSAAgGgJgAn1ghQgGAHgDATQgCARADAIQAEAHAMAAQANAAAFgIQAGgHADgRQACgUgDgGQgEgHgMAAQgMAAgGAHgAHjAYQgGgKADgVQAEgYAIgJQAIgKASAAQALAAAMADIgCAIIgVgBQgNAAgFAHQgGAHgDATQgCARADAHQAEAHALABQAOAAAKgCIABAIQgKADgPAAQgSAAgGgKgAAXAYQgHgKAEgVQADgYAIgJQAJgKARAAQAMAAALADIgCAIIgVgBQgMAAgGAHQgGAHgCATQgDARADAHQAEAHAMABQANAAAKgCIABAIQgJADgPAAQgSAAgGgKgAjVAgIAMhQIAzAAIgCAJIgoAAIgDAaIARAAQAPAAAFAGQAGAFgCAMQgCAOgGAFQgHAFgOAAQgPAAgPgCgAjJAYIARAAQAKAAAEgDQAEgDABgJQABgJgCgBQgDgDgKAAIgRAAgAIhAgIAMhQIALAAIgFAhIARAAQAPAAAGAGQAFAGgCAMQgCAOgGAFQgGAFgOAAIgfgBgAItAYIARAAQAKAAAEgDQAEgDABgKQACgIgDgDQgDgDgKAAIgRAAgAECAfIABgIIAZACQAKAAAEgDQAFgDABgJQABgKgDgBQgDgDgKAAIgPAAIABgJIAOAAQAJAAAEgDQAEgDABgIQABgIgDgDQgDgDgKAAIgWACIAAgIQAKgCANAAQAOAAAGAEQAGAFgBANQgDARgOABIAAABQAQACgDASQgCANgGAEQgGAEgOAAQgSAAgKgCgAGdAQIAHgyQACgOAQAAIAjAAIgBAJIghAAQgHAAgCAIIgCASIAkAAIgCAIIgjAAIgDAVQgCAIAIAAIAhAAIgBAIIghABQgTAAADgRgADNAgIALhDIgBAAIgFAJIgtA6IgMAAIAMhQIAKAAIgIA3IgCAMIAAAAIAGgJIAtg6IALAAIgMBQgABnAgIALhHIgbAAIABgJIBAAAIgBAJIgbAAIgKBHgAhcAgIAFglIgmAAIgFAlIgLAAIAMhQIAKAAIgFAiIAnAAIAEgiIALAAIgMBQgAlrAgIAMhQIAcgBQAOAAAGAGQAFAGgCAOQgCAPgGAGQgGACgPAAIgTAAIgEAggAlbgHIARAAQAKAAAEgDQAEgEACgKQABgKgDgDQgDgDgJAAIgSAAgAorAgIALhIIgmAAIgLBIIgLAAIAMhQIA8AAIgMBQg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.5,-5.1,121.1,10.3);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#08507C").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56,-18.8,112.1,37.7);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhvAyIACgSIg7AAIgDASIgIAAIADgbIAIAAQALgRAGgZIAEgPQADgPAPAAIAeAAIgKBIIAKAAIgEAbgAiJggIgDANQgGAZgKARIAkAAIAKhAIgRAAQgIABgCAIgAkHARIAGgqIAKAAIgGAoQgBAJAIABQAIAAAQgOIAFgkIAKAAIgIA5IgIAAIABgNQgPAPgMAAQgRAAADgRgAA7AgIALhRIALAAIgFAhIARAAQAPABAGAFQAFAGgCAMQgCAOgGAFQgGAFgOABIgegBgABGAYIARAAQAKAAAEgEQAEgDACgKQABgHgDgEQgCgDgKAAIgSAAgAhVAQIAIgzQABgOAQAAIAkAAIgCAJIghAAQgHAAgBAIIgDASIAkAAIgBAIIgkAAIgDAVQgBAIAIAAIAgAAIAAAIIgiABQgSAAACgQgADzAgIALhEIgBAAIgyBEIgMAAIAMhRIAKAAIgIA4IgCALIAAAAIAzhDIALAAIgMBRgACBAgIAKhCQACgPAOAAIAjAAIgBAJIgeAAQgJAAgBAIIgJBAgAAcAgIAFgmIgkAAIgGAmIgKAAIALhRIAJAAIgDAiIAkAAIAFgiIALAAIgMBRg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.5,-5,53.1,10.1);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0,-8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.1,-19.4,78.3,22.8);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.money();
	this.instance.setTransform(-157.4,-60);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-157.4,-60,315,120);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKEbIBKo1IABAAIBKI1g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.5,-28.4,15.1,56.8);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#08507C").s().p("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");
	this.shape.setTransform(-8.1,-2.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.1,-12.7,108.2,20.3);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#08507C").s().p("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");
	this.shape.setTransform(0,-5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117.3,-26.3,234.7,42.6);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#08507C").s().p("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");
	this.shape.setTransform(0,-5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112.1,-26.2,224.3,42.5);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.b1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,554,249);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.b2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,554,249);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#08507C").s().p("AgaFIIANgzIAEgRQAJgpAFgbQAEgSAIgKQAJgJAUgFQA5gQAgg1QAfg0gMg6QgLg6gwglQgxglg5AFQg+AFgrAuQgqAvACA9QAAAOgMAFIiSBGQgPgwACgxQADh0BHhWQBHhWBxgbIARgCQAJgCAHgDIBHAAIAwALQBxAeBFBfQBFBfgHBzQgGB0hRBYQhPBWh0AQQgRACggABg");
	this.shape.setTransform(32.9,32.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65.7,65.7);


(lib.Символ6копия = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.logo_white();
	this.instance.setTransform(-145,-32.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-145,-32.8,290,66);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.logo();
	this.instance.setTransform(-145,-32.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-145,-32.8,290,66);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#08507C").s().p("ADwEBIA7k6QAPhTBTgGQApgDAhAFQAbAEAPAUQAPATgFAbQgKA/gPBDQgIAlgaAVQgaAWgnABQggABgggBQgbAAgFAaIgNA8QgFAbgHAFQgFADgOAAIgTgBgAFxhjQgSAGgEAaIgUBlQgLAwAJAIQAFAFAuAAIAkgBQAfgBAHgaQAThKAIhGQABgJgDgGQgEgHgIgCQgagFgWAAQgZAAgVAHgAqhCKQgTgBgRgFQgXgGgNgTQgMgTAEgXQALg9AQhKQAHggAVgTQALgKAOgGQANgFAQgCQAagDAzAAQAfABAFgfIAIgsQAEgZAKgHQAJgGAcADIg8E7QgNBBhCAKQgbAFgXAAIgMgBgAqhhbQgFAGgCAJQgMA5gPBSQgCAPAHAIQAIAIAPAAIAGABIAzAAQAmgBAHglIAVhnQAJgsgGgIQgGgHguAAIgkAAQgWABgKANgAKCCIQgggCgRgWQgPgVAFghIAYh7QAHgiAXgVQAXgUAigFQAmgEAuAFQAZAEAPATQAOATgCAaQgGA5ggAZQgfAbg2gEIgZAAQgQABgJgBQgUgDgFAMQgCAEgCAWQgBAOAHAIQAIAIAOAAIBSABQAUABAIAJQAHAKgFAVIg/ABIgOAAQgcAAgVgBgAKQhOQgMAjAAAhIBKAAQAjAAAPgPQAPgOABgjQABgfgdAAIg+AAQgdAAgJAbgAmECJIhBgBQABgZAIgIQAHgIAYAAIBRAAQAmgBAJgmIAJgtQAGghgmgCQgmABgTgBQgigBgRgUQgRgVADgiQAJhJAbgcQAggfBNAEIBKAAQgDAdgGAGQgGAGgaAAIhLABQgWABgLAJQgLAJgFAWIgJArQgFAiAjACIAkAAQAWAAANADQA6ALgFA2QgEAogJAcQgJAdgUARQgVARgcACQgWACgfAAIgNAAgAwrB2QAJgaAIgqIAKg3IACgMIAZiDQAGghAXgVQAXgUAigEQAhgEAuAEQAdADAQATQAPAUgEAdIg4EhQgaAFgHgHQgIgGAEgZIAKg6QAFgbgaABIhPAAQgYAAgGAZIgJAvQgGAjgGAGQgEADgKACIgbACgAvHiWIgSBWQgFAaAGAHQAGAHAcAAIA+AAQAaAAAGgbIAThiQAGgkglgCIg1AAQgnABgHAkgAB7CIIAvj4QAEgXALgGQAKgHAaAEIgvD0QgFAbgHAFQgFAEgTAAIgPAAgANrCHQgBgNAEgRIAGgeQAVhrAIglQAIgkAZgUQAagUAlgBIA7AAQgEAYgJAIQgDADgFACQgIADgNABIgWAAQgVAAgLAKQgMAJgEAVIghCnQgFAagHAFQgEADgOAAIgSgBgAizCHIAmjJQAHghAXgVQAWgUAigFQAfgEAkAEQAjAEAPAUQAQAUgFAhIgoDLQgbADgGgJQgIgIAFgZIAbiSQAHgigJgLQgIgKggAAIgbAAQgXAAgNALQgMAKgEAXIggCjQgFAZgIAFQgFAEgQAAIgQgBgADAjKQABgXAVgCQAKgBAGAGQAFAGAAAJQAAAZgWACIgDAAQgRAAgBgWg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106.8,-25.8,213.7,51.7);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.arrow();
	this.instance.setTransform(-10.7,-11.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.7,-11.5,22,23);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(101.8,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,scaleY:1.02},4,cjs.Ease.get(-1)).to({scaleX:1.04,scaleY:1.04},5,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02,y:10},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:9.9},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41.3,4.8,121.1,10.3);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// Слой 4
	this.instance = new lib.Символ24();
	this.instance.setTransform(6.7,27.7,1,1,0,0,0,3.6,7.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:3.7,x:86.8},0).wait(1).to({x:116.9},0).wait(1).to({x:134.9},0).wait(1).to({x:146.8},0).wait(1).to({x:154.2},0).wait(1).to({x:158.9},0).wait(1).to({x:161.9},0).wait(1).to({x:163.8},0).wait(1).to({x:165.3},0).wait(1).to({regX:3.6,x:166.5},0).wait(1));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AttCvIAAiTIbaAAIAACTg");
	var mask_graphics_1 = new cjs.Graphics().p("AtsCvIAAiTIbZAAIAACTg");
	var mask_graphics_2 = new cjs.Graphics().p("AttCvIAAiTIbaAAIAACTg");
	var mask_graphics_3 = new cjs.Graphics().p("AttCvIAAiTIbaAAIAACTg");
	var mask_graphics_4 = new cjs.Graphics().p("AtsCvIAAiTIbZAAIAACTg");
	var mask_graphics_5 = new cjs.Graphics().p("AttCvIAAiTIbaAAIAACTg");
	var mask_graphics_6 = new cjs.Graphics().p("AtmCvIAAiTIbaAAIAACTg");
	var mask_graphics_7 = new cjs.Graphics().p("AtVCvIAAiTIbaAAIAACTg");
	var mask_graphics_8 = new cjs.Graphics().p("AtKCvIAAiTIbaAAIAACTg");
	var mask_graphics_9 = new cjs.Graphics().p("AtCCvIAAiTIbaAAIAACTg");
	var mask_graphics_10 = new cjs.Graphics().p("As7CvIAAiTIbaAAIAACTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-84.7,y:17.5}).wait(1).to({graphics:mask_graphics_1,x:6.7,y:17.5}).wait(1).to({graphics:mask_graphics_2,x:41,y:17.5}).wait(1).to({graphics:mask_graphics_3,x:61.6,y:17.5}).wait(1).to({graphics:mask_graphics_4,x:75.2,y:17.5}).wait(1).to({graphics:mask_graphics_5,x:83.7,y:17.5}).wait(1).to({graphics:mask_graphics_6,x:88.4,y:17.5}).wait(1).to({graphics:mask_graphics_7,x:90.1,y:17.5}).wait(1).to({graphics:mask_graphics_8,x:91.3,y:17.5}).wait(1).to({graphics:mask_graphics_9,x:92.1,y:17.5}).wait(1).to({graphics:mask_graphics_10,x:92.8,y:17.5}).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(96,29,1,1,0,0,0,101,10.5);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.1,19.4,9.4,16.7);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18).wait(1));

	// Слой 3
	this.instance = new lib.Символ16();
	this.instance.setTransform(829.1,228.3,0.518,0.518,90,0,0,157.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,y:146.7},0).wait(8).to({regX:157.5,y:228.3},0).wait(1).to({regX:0,rotation:89,x:827.7,y:146.7},0).wait(1).to({rotation:86.1,x:823.5,y:146.9},0).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:81.3,x:816.7,y:147.7},0).wait(1).to({regX:157.5,regY:-0.1,rotation:74.4,x:829.1,y:228.3},0).wait(1).to({regX:0,regY:0,rotation:67.4,x:797.7,y:153},0).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:61.9,x:790.6,y:156.4},0).wait(1).to({rotation:57.9,x:785.7,y:159.2},0).wait(1).to({rotation:55.6,x:782.9,y:161},0).wait(1).to({regX:157.4,rotation:54.8,x:829.1,y:228.2},0).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(829.1,228.3,0.518,0.518,90,0,0,157.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,y:146.7},0).wait(8).to({regX:157.5,y:228.3},0).wait(1).to({regX:0,rotation:89.6,x:828.4,y:146.7},0).wait(1).to({rotation:88.3,x:826.6},0).wait(1).to({rotation:86.2,x:823.6,y:146.9},0).wait(1).to({regX:157.5,regY:-0.1,scaleX:0.52,scaleY:0.52,rotation:83.2,x:829.1,y:228.3},0).wait(1).to({regX:0,regY:0,scaleX:0.52,scaleY:0.52,rotation:80.1,x:815,y:147.9},0).wait(1).to({rotation:77.7,x:811.6,y:148.6},0).wait(1).to({rotation:75.9,x:809.2,y:149.1},0).wait(1).to({rotation:74.9,x:807.7,y:149.5},0).wait(1).to({regX:157.2,regY:-0.1,rotation:74.5,x:829.1,y:228.2},0).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ16();
	this.instance_2.setTransform(829.1,228.3,0.518,0.518,90,0,0,157.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:0,y:146.7},0).wait(8).to({regX:157.5,y:228.3},0).wait(1).to({regX:0,rotation:90.2,x:829.3,y:146.7},0).wait(1).to({rotation:90.8,x:830.1},0).wait(1).to({rotation:91.7,x:831.5},0).wait(1).to({regX:157.5,rotation:93,x:829.1,y:228.2},0).wait(1).to({regX:0,rotation:94.4,x:835.4,y:146.9},0).wait(1).to({rotation:95.5,x:836.9,y:147},0).wait(1).to({rotation:96.3,x:838,y:147.2},0).wait(1).to({rotation:96.8,x:838.7},0).wait(1).to({regX:157.4,regY:-0.1,rotation:97,x:829.1,y:228.2},0).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ16();
	this.instance_3.setTransform(829.1,228.3,0.518,0.518,90,0,0,157.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:0,y:146.7},0).wait(8).to({regX:157.5,y:228.3},0).wait(1).to({regX:0,rotation:90.8,x:830.2,y:146.7},0).wait(1).to({rotation:93.3,x:833.8,y:146.8},0).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:97.5,x:839.6,y:147.4},0).wait(1).to({regX:157.5,regY:-0.1,rotation:103.3,x:829.1,y:228.2},0).wait(1).to({regX:0,regY:0,rotation:109.3,x:856,y:151.3},0).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:114,x:862.2,y:153.7},0).wait(1).to({rotation:117.3,x:866.4,y:155.8},0).wait(1).to({rotation:119.3,x:869,y:157.1},0).wait(1).to({regX:157.5,rotation:120,x:829.1,y:228.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(798,65.2,62.1,163.1);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ14();
	this.instance.setTransform(-0.2,0.4,1,1,0,0,0,0,28.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},94).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2A2QgWgWAAggQAAgfAWgWQAXgXAfAAQAgAAAWAXQAXAWAAAfQAAAggXAWQgWAXggAAQgfAAgXgXg");
	this.shape.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(95));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAqeQEWAADEDFQDFDEAAEVQAAEWjFDEQgpAqgtAgQgHAFgGAFQilBxjSAAQkVAAjEjFQjFjEAAkWQAAkVDFjEQDEjFEVAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.1,-68.1,136.3,136.3);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(1));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ah6BHQAEhyBHhWQARgWAVgSICEBxQgTAMgQARQgqAtABA/QABANgMAGIiQBGQgPgwABgzg");
	var mask_graphics_14 = new cjs.Graphics().p("AlHBvQADhyBHhWQBHhWBxgbIARgCQAJgCAHgDIBHAAIAwALQBxAeBFBfQBFBdgHB1IAAAEIitAMQAHgggHgiQgLg6gwgjQgxglg5AFQg+AFgrAsQgqAvACA/QAAAOgMAFIiSBGQgPgvACg0g");
	var mask_graphics_15 = new cjs.Graphics().p("AlHBvQADhyBHhWQBHhWBxgbIARgCQAJgCAHgDIBHAAIAwALQBxAeBFBfQBFBdgHB1QgBAcgGAaIijhDQABgSgEgTQgLg6gwgjQgxglg5AFQg+AFgrAsQgqAvACA/QAAAOgMAFIiSBGQgPgvACg0g");
	var mask_graphics_16 = new cjs.Graphics().p("AAMCxIAFgJQAJgKAUgFQA5gPAgg1QAfg0gMg6QgLg6gwglQgxglg5AFQg+AFgrAuQgqAvACA9QAAANgMAGIiSBGQgPgwACgxQADh0BHhWQBHhWBxgbIARgCQAJgCAHgDIBHAAIAwALQBxAeBFBfQBFBfgHBzQgGB0hRBXQhGBNhkAVg");
	var mask_graphics_17 = new cjs.Graphics().p("AgaFIIANg0IAEgQQAJgpAFgbQAEgSAIgKQAJgJAUgFQA5gQAgg1QAfg0gMg6QgLg6gwglQgxglg5AFQg+AFgrAuQgqAvACA9QAAAOgMAFIiSBGQgPgvACgyQADh0BHhWQBHhWBxgbIARgCQAJgCAHgDIBHAAIAwALQBxAeBFBfQBFBfgHBzQgGB0hRBYQhPBWh0AQQgRACggABg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-20.5,y:-7.8}).wait(14).to({graphics:mask_graphics_14,x:0,y:-11.8}).wait(1).to({graphics:mask_graphics_15,x:0,y:-11.8}).wait(1).to({graphics:mask_graphics_16,x:0,y:-0.4}).wait(1).to({graphics:mask_graphics_17,x:0,y:0}).wait(12));

	// Слой 2
	this.instance = new lib.Символ7();
	this.instance.setTransform(0,0.1,1,1,65.7,0,0,32.9,32.9);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:67.1},0).wait(1).to({rotation:69},0).wait(1).to({rotation:71.6},0).wait(1).to({rotation:74.9},0).wait(1).to({rotation:78.9,y:0.2},0).wait(1).to({rotation:83.8,y:0.1},0).wait(1).to({rotation:89.6},0).wait(1).to({rotation:96.6},0).wait(1).to({rotation:104.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:114.7,x:-0.1},0).wait(1).to({rotation:125.8},0).wait(1).to({rotation:141.3,y:0},0).wait(1).to({rotation:166.6},0).wait(1).to({rotation:202.6,y:-0.1},0).wait(1).to({rotation:249.1,x:0},0).wait(1).to({rotation:277,x:0.1},0).wait(1).to({rotation:295.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:308.9},0).wait(1).to({rotation:320.2,y:0},0).wait(1).to({rotation:329.5,y:0.1},0).wait(1).to({rotation:337},0).wait(1).to({rotation:342.9},0).wait(1).to({rotation:347.7},0).wait(1).to({rotation:351.5},0).wait(1).to({rotation:354.4},0).wait(1).to({rotation:356.8},0).wait(1).to({rotation:358.6},0).wait(1).to({rotation:360},0).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#08507C").s().p("AguAvQgQgPgDgTIgBgGIgBgFIAAgCIAAAAQABgQAHgOQAFgJAIgIQAUgTAaAAQAcAAAUAUQAUATAAAbQAAAcgUAUQgUATgcAAIAAAAQgaAAgUgUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.8,-24.7,39.7,34);


(lib.Анимация2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(0,-58.9,1,1,0,0,0,249.9,566.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-249.9,-625.8,500,1134);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(0,-58.9,1,1,0,0,0,249.9,566.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#004F7E").ss(1,1,1).p("EgnCha5MBOFAAAMAAAC1zMhOFAAAg");
	this.shape.setTransform(0,44.1);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-250.9,-625.8,501.9,1252.8);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Режим изоляции - копия
	this.instance = new lib.Символ8();
	this.instance.setTransform(23.3,606.8,1,1,0,0,0,276.8,124.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:277,regY:124.5,x:23.5,y:545.8},0).wait(1).to({y:507.2},0).wait(1).to({y:483.6},0).wait(1).to({y:466.8},0).wait(1).to({y:452.6},0).wait(1).to({y:441},0).wait(1).to({y:431.8},0).wait(1).to({y:424.8},0).wait(1).to({y:419.4},0).wait(1).to({y:415.4},0).wait(1).to({y:412.6},0).wait(1).to({y:410.7},0).wait(1).to({y:409.7},0).wait(1).to({regX:276.8,regY:124.2,x:23.3,y:409.1},0).wait(44).to({regX:277,regY:124.5,x:23.5,y:410.7},0).wait(1).to({y:412.9},0).wait(1).to({y:416.1},0).wait(1).to({y:420.9},0).wait(1).to({y:427.7},0).wait(1).to({y:437.1},0).wait(1).to({y:449.8},0).wait(1).to({y:466},0).wait(1).to({y:485.3},0).wait(1).to({y:509.9},0).wait(1).to({y:544.9},0).wait(1).to({regX:276.8,regY:124.2,x:23.3,y:606.8},0).wait(191).to({regX:277,regY:124.5,x:23.5,y:553.6},0).wait(1).to({y:517.2},0).wait(1).to({y:493},0).wait(1).to({y:475.5},0).wait(1).to({y:461.5},0).wait(1).to({y:450.3},0).wait(1).to({y:441.5},0).wait(1).to({y:434.3},0).wait(1).to({y:428.2},0).wait(1).to({y:423.2},0).wait(1).to({y:419},0).wait(1).to({y:415.5},0).wait(1).to({y:412.8},0).wait(1).to({y:410.7},0).wait(1).to({regX:276.8,regY:124.2,x:23.3,y:409.1},0).wait(67).to({regX:277,regY:124.5,x:23.5,y:396.2},0).wait(1).to({y:392},0).wait(1).to({y:390.3},0).wait(1).to({regX:276.8,regY:124.2,x:23.3,y:389.3},0).wait(1).to({regX:277,regY:124.5,x:23.5,y:393.6},0).wait(1).to({y:399.3},0).wait(1).to({y:407.3},0).wait(1).to({y:418.8},0).wait(1).to({y:434.9},0).wait(1).to({y:457.2},0).wait(1).to({y:487.3},0).wait(1).to({y:533.7},0).wait(1).to({regX:276.8,regY:124.2,x:23.3,y:606.8},0).to({_off:true},1).wait(20));

	// Режим изоляции
	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(23.3,-537.2,1,1,0,0,0,276.8,124.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:277,regY:124.5,x:23.5,y:-475.6},0).wait(1).to({y:-437},0).wait(1).to({y:-413.4},0).wait(1).to({y:-396.6},0).wait(1).to({y:-382.4},0).wait(1).to({y:-370.8},0).wait(1).to({y:-361.6},0).wait(1).to({y:-354.6},0).wait(1).to({y:-349.2},0).wait(1).to({y:-345.2},0).wait(1).to({y:-342.4},0).wait(1).to({y:-340.5},0).wait(1).to({y:-339.5},0).wait(1).to({regX:276.8,regY:124.2,x:23.3},0).wait(44).to({regX:277,regY:124.5,x:23.5,y:-340.5},0).wait(1).to({y:-342.7},0).wait(1).to({y:-345.9},0).wait(1).to({y:-350.7},0).wait(1).to({y:-357.5},0).wait(1).to({y:-366.9},0).wait(1).to({y:-379.6},0).wait(1).to({y:-395.8},0).wait(1).to({y:-415.1},0).wait(1).to({y:-439.7},0).wait(1).to({y:-474.7},0).wait(1).to({regX:276.8,regY:124.2,x:23.3,y:-537.2},0).wait(191).to({regX:277,regY:124.5,x:23.5,y:-479.1},0).wait(1).to({y:-439.8},0).wait(1).to({y:-413.7},0).wait(1).to({y:-394.8},0).wait(1).to({y:-379.6},0).wait(1).to({y:-367.6},0).wait(1).to({y:-358.1},0).wait(1).to({y:-350.3},0).wait(1).to({y:-343.7},0).wait(1).to({y:-338.3},0).wait(1).to({y:-333.7},0).wait(1).to({y:-330},0).wait(1).to({y:-327},0).wait(1).to({y:-324.8},0).wait(1).to({regX:276.8,regY:124.2,x:23.3,y:-323.7},0).wait(67).to({regX:277,regY:124.5,x:23.5,y:-312.8},0).wait(1).to({y:-309.4},0).wait(1).to({y:-308.1},0).wait(1).to({regX:276.8,regY:124.2,x:23.3,y:-307.9},0).wait(1).to({regX:277,regY:124.5,x:23.5,y:-311.5},0).wait(1).to({y:-317.1},0).wait(1).to({y:-325},0).wait(1).to({y:-336.2},0).wait(1).to({y:-352},0).wait(1).to({y:-373.9},0).wait(1).to({y:-403.5},0).wait(1).to({y:-449.1},0).wait(1).to({regX:276.8,regY:124.2,x:23.3,y:-521.4},0).to({_off:true},1).wait(20));

	// Режим изоляции
	this.instance_2 = new lib.Символ6();
	this.instance_2._off = true;

	this.instance_3 = new lib.Символ6копия();
	this.instance_3.setTransform(0,-168.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},53).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},90).to({state:[{t:this.instance_2}]},90).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},89).to({state:[{t:this.instance_2}]},5).to({state:[]},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(53).to({_off:false},0).wait(5).to({regX:-0.1,regY:0.1,x:-0.1,y:-46.3},0).wait(1).to({y:-81.3},0).wait(1).to({y:-104.7},0).wait(1).to({y:-121.2},0).wait(1).to({y:-134.1},0).wait(1).to({y:-144.1},0).wait(1).to({y:-151.4},0).wait(1).to({y:-156.8},0).wait(1).to({y:-160.8},0).wait(1).to({y:-163.8},0).wait(1).to({y:-166.1},0).wait(1).to({regX:0,regY:0,x:0,y:-168.3},0).to({_off:true},90).wait(90).to({_off:false},0).wait(1).to({y:-115.6},4,cjs.Ease.get(-1)).to({y:-49.8},5,cjs.Ease.get(1)).wait(89).to({alpha:0},5).to({_off:true},1).wait(20));

	// Слой 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_37 = new cjs.Graphics().p("AyLEsIAApXMAkWAAAIAAJXg");
	var mask_graphics_53 = new cjs.Graphics().p("AyLEsIAApXMAkWAAAIAAJXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(37).to({graphics:mask_graphics_37,x:37.1,y:-2.8}).wait(16).to({graphics:mask_graphics_53,x:37.1,y:-2.8}).wait(321));

	// Символ 5
	this.instance_4 = new lib.Символ5();
	this.instance_4.setTransform(-189.5,1.4);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(37).to({_off:false},0).wait(1).to({x:-113.2},0).wait(1).to({x:-72.6},0).wait(1).to({x:-49.1},0).wait(1).to({x:-32.6},0).wait(1).to({x:-18.2},0).wait(1).to({x:-4.8},0).wait(1).to({x:5.6},0).wait(1).to({x:13.6},0).wait(1).to({x:19.8},0).wait(1).to({x:24.6},0).wait(1).to({x:28.4},0).wait(1).to({x:31.4},0).wait(1).to({x:33.7},0).wait(1).to({x:35.5},0).wait(1).to({x:37},0).wait(1).to({x:38.2},0).to({_off:true},1).wait(320));

	// Слой 29
	this.instance_5 = new lib.Символ22();
	this.instance_5.setTransform(12.7,197.2,1.743,1.743,0,0,0,102.5,14);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(268).to({_off:false},0).wait(80).to({alpha:0},5).to({_off:true},1).wait(20));

	// Слой 27
	this.instance_6 = new lib.Символ19();
	this.instance_6.setTransform(5.8,67.5,4.755,4.755,15);
	this.instance_6.alpha = 0.172;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(259).to({_off:false},0).to({scaleX:3.56,scaleY:3.56,rotation:7.3,alpha:0.59},3,cjs.Ease.get(-1)).to({scaleX:2.19,scaleY:2.19,rotation:0,alpha:1},3,cjs.Ease.get(1)).to({scaleX:2.36,scaleY:2.36},3,cjs.Ease.get(1)).wait(80).to({alpha:0},5).to({_off:true},1).wait(20));

	// Слой 23
	this.instance_7 = new lib.Символ15();
	this.instance_7.setTransform(-820.7,403);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(181).to({_off:false},0).wait(1).to({regX:823.6,regY:154.2,x:2.9,y:480.4},0).wait(1).to({y:448.1},0).wait(1).to({y:430.4},0).wait(1).to({y:420.5},0).wait(1).to({y:414.5},0).wait(1).to({y:411},0).wait(1).to({regX:0,regY:0,x:-820.7,y:254.7},0).wait(50).to({regX:823.6,regY:154.2,x:2.9,y:411.8},0).wait(1).to({y:416.7},0).wait(1).to({y:424},0).wait(1).to({y:433.9},0).wait(1).to({y:447.9},0).wait(1).to({y:468.4},0).wait(1).to({y:501.2},0).wait(1).to({regX:0,regY:0,x:-820.7,y:412.7},0).to({_off:true},1).wait(128));

	// Слой 24
	this.instance_8 = new lib.Символ18();
	this.instance_8.setTransform(8,488,2.475,2.475);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(178).to({_off:false},0).wait(1).to({y:366.9,alpha:0.557},0).wait(1).to({y:323.1,alpha:0.759},0).wait(1).to({y:299.7,alpha:0.866},0).wait(1).to({y:285.9,alpha:0.93},0).wait(1).to({y:277,alpha:0.971},0).wait(1).to({y:270.7,alpha:1},0).wait(54).to({y:272.5,alpha:0.982},0).wait(1).to({y:275.6,alpha:0.95},0).wait(1).to({y:280.1,alpha:0.905},0).wait(1).to({y:286.3,alpha:0.842},0).wait(1).to({y:295.1,alpha:0.753},0).wait(1).to({y:307.9,alpha:0.623},0).wait(1).to({y:328.4,alpha:0.416},0).wait(1).to({y:369.5,alpha:0},0).to({_off:true},1).wait(128));

	// Слой 22
	this.instance_9 = new lib.Символ13();
	this.instance_9.setTransform(8.4,118,0.217,0.217,-90);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(171).to({_off:false},0).wait(1).to({scaleX:0.56,scaleY:0.56,rotation:-58.5,alpha:0.35},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-41.3,alpha:0.541},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:-30.6,alpha:0.66},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-22.5,alpha:0.75},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:-16.2,alpha:0.82},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:-11.8,alpha:0.869},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:-8.5,alpha:0.905},0).wait(1).to({scaleX:1.14,scaleY:1.14,rotation:-6,alpha:0.933},0).wait(1).to({scaleX:1.16,scaleY:1.16,rotation:-4.1,alpha:0.954},0).wait(1).to({scaleX:1.18,scaleY:1.18,rotation:-2.5,alpha:0.972},0).wait(1).to({scaleX:1.19,scaleY:1.19,rotation:-1.2,alpha:0.987},0).wait(1).to({regX:-0.1,scaleX:1.21,scaleY:1.21,rotation:0,alpha:1},0).to({regX:0,scaleX:1.76,scaleY:1.76,rotation:65.7,x:8.5,y:118.1},54).wait(1).to({scaleX:1.73,scaleY:1.73,rotation:67.4,x:8.4,y:118,alpha:0.982},0).wait(1).to({scaleX:1.68,scaleY:1.68,rotation:70.2,alpha:0.95},0).wait(1).to({scaleX:1.61,scaleY:1.61,rotation:74.3,alpha:0.905},0).wait(1).to({scaleX:1.51,scaleY:1.51,rotation:80,alpha:0.842},0).wait(1).to({scaleX:1.38,scaleY:1.38,rotation:88,alpha:0.753},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:99.6,x:8.3,alpha:0.623},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:118.3,alpha:0.416},0).wait(1).to({scaleX:0.21,scaleY:0.21,rotation:155.7,alpha:0},0).to({_off:true},1).wait(128));

	// Слой 26
	this.instance_10 = new lib.Символ17();
	this.instance_10.setTransform(7.8,13,2.763,2.763);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(165).to({_off:false},0).to({x:7.9,y:-16.7,alpha:0.5},3,cjs.Ease.get(-1)).to({x:7.8,y:-46.3,alpha:1},3,cjs.Ease.get(1)).wait(66).to({alpha:0},8).to({_off:true},1).wait(128));

	// Слой 3
	this.instance_11 = new lib.Анимация1("synched",0);
	this.instance_11.setTransform(10.3,1108.8);
	this.instance_11._off = true;

	this.instance_12 = new lib.Анимация2("synched",0);
	this.instance_12.setTransform(10.3,88.7);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(156).to({_off:false},0).wait(1).to({regY:0.3,y:753.9},0).wait(1).to({y:523.2},0).wait(1).to({y:411.7},0).wait(1).to({y:327.1},0).wait(1).to({y:257.6},0).wait(1).to({y:206.2},0).wait(1).to({y:167.3},0).wait(1).to({y:137.7},0).wait(1).to({y:116},0).wait(1).to({y:100.9},0).wait(1).to({y:92},0).to({_off:true},1).wait(206));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(168).to({_off:false},0).wait(74).to({startPosition:0},0).wait(1).to({regX:0.1,regY:-58.9,x:10.4,y:45.5},0).wait(1).to({y:68.1},0).wait(1).to({y:100.4},0).wait(1).to({y:146.3},0).wait(1).to({y:212},0).wait(1).to({y:309.2},0).wait(1).to({y:447.5},0).wait(1).to({y:670.6},0).wait(1).to({regX:0,regY:0,x:10.3,y:1108.5},0).to({_off:true},119).wait(4));

	// Слой 21
	this.instance_13 = new lib.Символ12();
	this.instance_13.setTransform(40.4,239.8,2.35,2.35);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(103).to({_off:false},0).wait(1).to({regX:-8.1,regY:-2.6,x:21.4,y:222.7,alpha:0.554},0).wait(1).to({y:218.7,alpha:0.756},0).wait(1).to({y:216,alpha:0.893},0).wait(1).to({y:214.8,alpha:0.95},0).wait(1).to({y:214.3,alpha:0.979},0).wait(1).to({regX:0,regY:0,x:40.4,y:220,alpha:1},0).wait(42).to({y:200.2,alpha:0.602},3,cjs.Ease.get(-1)).to({y:170.5,alpha:0},2,cjs.Ease.get(1)).to({_off:true},1).wait(217));

	// Слой 19
	this.instance_14 = new lib.Символ11();
	this.instance_14.setTransform(10.9,146.2);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(87).to({_off:false},0).wait(1).to({regY:-5,y:117.6,alpha:0.554},0).wait(1).to({y:109.1,alpha:0.756},0).wait(1).to({y:103.2,alpha:0.893},0).wait(1).to({y:100.8,alpha:0.95},0).wait(1).to({y:99.6,alpha:0.979},0).wait(1).to({regY:0,y:103.7,alpha:1},0).wait(53).to({y:74,alpha:0.398},3,cjs.Ease.get(-1)).to({y:54.2,alpha:0},2,cjs.Ease.get(1)).to({_off:true},1).wait(222));

	// Слой 16
	this.instance_15 = new lib.Символ10();
	this.instance_15.setTransform(21.4,14.1,1.139,1.139);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(75).to({_off:false},0).wait(1).to({regY:-5,y:-9.6,alpha:0.606},0).wait(1).to({y:-16,alpha:0.821},0).wait(1).to({y:-19.3,alpha:0.933},0).wait(1).to({y:-20.6,alpha:0.974},0).wait(1).to({regY:0,y:-15.7,alpha:1},0).wait(61).to({y:-35.5,alpha:0.602},3,cjs.Ease.get(-1)).to({y:-65.2,alpha:0},2,cjs.Ease.get(1)).to({_off:true},1).wait(227));

	// Слой 15
	this.instance_16 = new lib.Символ4();
	this.instance_16.setTransform(-129.3,-149);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(69).to({_off:false},0).wait(1).to({regX:0.2,x:-129.1,y:-101.1},0).wait(1).to({y:-76.2},0).wait(1).to({y:-61.2},0).wait(1).to({y:-49.8},0).wait(1).to({y:-42},0).wait(1).to({y:-37},0).wait(1).to({y:-33.9},0).wait(1).to({y:-31.9},0).wait(1).to({regX:0,x:-129.3,y:-30.5},0).wait(63).to({y:-50.3,alpha:0.602},3,cjs.Ease.get(-1)).to({y:-80,alpha:0},2,cjs.Ease.get(1)).to({_off:true},1).wait(227));

	// Слой 14
	this.instance_17 = new lib.Символ4();
	this.instance_17.setTransform(-129.3,-30.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(83).to({_off:false},0).wait(1).to({regX:0.2,x:-129.1,y:17.3},0).wait(1).to({y:42.2},0).wait(1).to({y:57.2},0).wait(1).to({y:68.6},0).wait(1).to({y:76.5},0).wait(1).to({y:81.4},0).wait(1).to({y:84.5},0).wait(1).to({y:86.5},0).wait(1).to({regX:0,x:-129.3,y:88},0).wait(54).to({y:68.2,alpha:0.602},2,cjs.Ease.get(-1)).to({y:38.5,alpha:0},3,cjs.Ease.get(1)).to({_off:true},1).wait(222));

	// Слой 13
	this.instance_18 = new lib.Символ4();
	this.instance_18.setTransform(-129.3,88);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(97).to({_off:false},0).wait(1).to({regX:0.2,x:-129.1,y:135},0).wait(1).to({y:159.5},0).wait(1).to({y:174.3},0).wait(1).to({y:185.5},0).wait(1).to({y:193.2},0).wait(1).to({y:198},0).wait(1).to({y:201.1},0).wait(1).to({y:203.1},0).wait(1).to({regX:0,x:-129.3,y:204.5},0).wait(45).to({y:184.7,alpha:0.602},2,cjs.Ease.get(-1)).to({y:155,alpha:0},3,cjs.Ease.get(1)).to({_off:true},1).wait(217));

	// Символ 4
	this.instance_19 = new lib.Символ4();
	this.instance_19.setTransform(-208.3,98.2);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(37).to({_off:false},0).wait(1).to({regX:0.2,x:-170.8,y:61},0).wait(1).to({x:-154.2,y:44.3},0).wait(1).to({x:-145.6,y:35.7},0).wait(1).to({x:-140.1,y:30.2},0).wait(1).to({x:-136.5,y:26.6},0).wait(1).to({x:-134,y:24.2},0).wait(1).to({x:-132.3,y:22.5},0).wait(1).to({x:-131,y:21.2},0).wait(1).to({x:-130,y:20.1},0).wait(1).to({regX:0,x:-129.3,y:19.2},0).wait(6).to({_off:true},1).wait(320));

	// Символ 2
	this.instance_20 = new lib.Символ2();
	this.instance_20.setTransform(6.2,39.5,0.834,0.834);
	this.instance_20.alpha = 0;
	this.instance_20.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({scaleX:1.6,scaleY:1.6,alpha:0.355},0).wait(1).to({scaleX:2.03,scaleY:2.03,alpha:0.558},0).wait(1).to({scaleX:2.27,scaleY:2.27,alpha:0.671},0).wait(1).to({scaleX:2.46,scaleY:2.46,alpha:0.757},0).wait(1).to({scaleX:2.61,scaleY:2.61,alpha:0.826},0).wait(1).to({scaleX:2.72,scaleY:2.72,alpha:0.879},0).wait(1).to({scaleX:2.8,scaleY:2.8,alpha:0.919},0).wait(1).to({scaleX:2.87,scaleY:2.87,alpha:0.95},0).wait(1).to({scaleX:2.92,scaleY:2.92,alpha:0.972},0).wait(1).to({scaleX:2.95,scaleY:2.95,alpha:0.988},0).wait(1).to({scaleX:2.97,scaleY:2.97,alpha:0.997},0).wait(1).to({scaleX:2.98,scaleY:2.98,alpha:1},0).wait(26).to({scaleX:2.05,scaleY:2.05,x:-49.6,y:20.9},0).wait(1).to({scaleX:1.63,scaleY:1.63,x:-74.6,y:12.6},0).wait(1).to({scaleX:1.41,scaleY:1.41,x:-87.5,y:8.3},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:-95.7,y:5.5},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:-101.1,y:3.7},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:-104.8,y:2.5},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-107.4,y:1.6},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:-109.3,y:1},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-110.8,y:0.5},0).wait(1).to({scaleX:1,scaleY:1,x:-112.2,y:0},0).wait(6).to({_off:true},1).wait(320));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-253.5,-661.4,554,1393.1);


// stage content:



(lib.adsniper_300x600 = function(mode,startPosition,loop) {
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
		    _this.main.gotoAndStop(339);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(340);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#004F7E").ss(1,1,1).p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 3
	this.main = new lib.Символ1();
	this.main.setTransform(145.7,272,0.708,0.708);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(116.1,103.5,392.4,986.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;