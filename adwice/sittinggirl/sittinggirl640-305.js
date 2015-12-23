(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bra.png", id:"bra"},
		{src:"images/fon.jpg", id:"fon"},
		{src:"images/foot.png", id:"foot"},
		{src:"images/hed.png", id:"hed"},
		{src:"images/leg.png", id:"leg"},
		{src:"images/okay_guy.png", id:"okay_guy"},
		{src:"images/plet.png", id:"plet"},
		{src:"images/rose.png", id:"rose"},
		{src:"images/See.png", id:"See"},
		{src:"images/telo.png", id:"telo"},
		{src:"images/ten.png", id:"ten"},
		{src:"images/war.png", id:"war"}
	]
};



// symbols:



(lib.bra = function() {
	this.initialize(img.bra);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,63);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,433);


(lib.foot = function() {
	this.initialize(img.foot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,65);


(lib.hed = function() {
	this.initialize(img.hed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,89);


(lib.leg = function() {
	this.initialize(img.leg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,156);


(lib.okay_guy = function() {
	this.initialize(img.okay_guy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,449);


(lib.plet = function() {
	this.initialize(img.plet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,113);


(lib.rose = function() {
	this.initialize(img.rose);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,196);


(lib.See = function() {
	this.initialize(img.See);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,275);


(lib.telo = function() {
	this.initialize(img.telo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,159,356);


(lib.ten = function() {
	this.initialize(img.ten);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,39);


(lib.war = function() {
	this.initialize(img.war);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.Символ49 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.okay_guy();
	this.instance.setTransform(150.1,49,0.454,0.479,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(14,49,136.1,215);


(lib.Символ48 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.See();
	this.instance.setTransform(135.7,9.5,0.566,0.585,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34,9.5,169.7,161);


(lib.Символ47 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.714,1],168.7,0,-318.8,0).s().p("EgqKAg4MgPPhBvMBtQAAAMAFjBBvg");
	this.shape.setTransform(367.5,182.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-28.3,734.9,421);


(lib.Символ42 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AtWE7IAAp1IatAAIAAJ1g");
	this.shape.setTransform(85.5,31.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,171,63);


(lib.Символ41 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnECbQgSgDgPgGQgPgHgHgLIAAAAQgMgKgIgPQgHgRgEgSQgDgUgBgVQAAgUACgSQACgUAFgSQAFgSAGgOQASgoAkgOQASgIAVgDQAVgCATAAIAcgCIAmgHIAPBlIgiAAIgOg0IgYAAIgpAIIABAAQgSAFgLALQgMAKgFARQgKAegBAgQgBAhAKAgQAFAQAMALQAMAKAQAEQAPAFASABIAiABIARg5IAgAAIgNBUIgWAGIhIAHQgUAAgSgDgARICWIAAgbIAYgIIAAjeIgYgEIAAgnIBRAIIABBdIA3ACQAOACANAEQANAFALAKQANAMAHARQAGASgBAVQAAAVgHASQgHAUgNAOQgPAOgSAHQgSAJgTADQgUAEgVAAgASZBcIAYgBIAQgDQAJgDAHgFQAHgFAFgJQAFgJAAgNQAAgKgEgGQgFgHgHgDQgIgEgJgCIgggGQgGgBgCgDgANxCWIAAgbIAYgIIAAjZIhEgHIgQA6IghgBIAOhgIAAgBIBZAIICwgBIANBaIggAAIgRg5IhFAGIAADaIAZAIIAAAbgAKcCWIAAgbIAYgIIABiTIhbCUIAZAHIgBAbIhpAAIAAgbIAZgIIAAjeIgZgEIAAgnIBRAIIAAB/IADgEIBUh7IA8AAIAAEBIAYAIIAAAbgAGRCWIAAgcIAZgHIAAjTIhigHIAADaIAZAHIAAAcIhqAAIAAgcIAYgHIABjeIgZgEIAAgnIBZAIICTAAIAAEBIAYAHIAAAcgABfCWIAAgbIAYgIIAThfIgVgBQgJAAgIgDQgIgCgHgGQgHgGgHgJIghhkIgXgEIAAgmIBJAHIAhB7IAfAAIARh8IBBgGIgBAmIgXADIgjDfIAaAIIAAAbgAjGCWIABgbIAYgIIAAjZIhFgHIgQA6IghgBIAPhgIAAgBIBYAIICwgBIAMBaIgfAAIgQg5IhFAGIAADaIAYAIIAAAbgAqVCWIAAgbIAYgIIABiTIhbCUIAZAHIgBAbIhpAAIAAgbIAZgIIAAjeIgZgEIAAgnIBRAIIAAB/IADgEIBUh7IA8AAIAAEBIAYAIIAAAbgAwKCWIAAgbIAYgIIAAjeIgYgEIAAgnIBYAIQAbACAWAIQAWAIAQAOQAQAOAJATQAKATACAXQABAPgCANQgCALgFAKQgJATgSALQgSALgYAEQgZACgdgCIAAA4IAZAHIAAAcgAu5ASQAVACAQgEIAOgFQAGgDAFgGQAFgDADgIQAEgIAAgKQgBgPgFgKQgGgJgIgFQgIgGgJgCIgSgDIgTAAgAyCCWIAAgcIAYgHIAAjTIhigHIABDaIAYAHIAAAcIhqAAIAAgcIAZgHIAAjeIgZgEIAAgnIBZAIICTAAIAAEBIAYAHIAAAcg");
	this.shape.setTransform(131,15.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,262,31.7);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(8.1,1,1).p("EghVgmQMBCrAAAMAAABMhMhCrAAAg");
	this.shape.setTransform(213.5,245);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EghVAmRMAAAhMhMBCrAAAMAAABMhg");
	this.shape_1.setTransform(213.5,245);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ37 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF01").s().p("AtbCeQgJAAgCgDIAAghIAWgEIA6juIgeACIgCgeICHAHIAyECIAXAFIAAAaIheAAIABgaIAagFIgQhIIhVAAIgRBIIAZAFIABAdIhAAIIgJABgAsJgKIAAAYIBKgBIAAgZIgOhYIgmAAgALYCZQgSgCgPgHQgPgGgHgMIAAABQgMgLgIgPQgHgQgEgTQgDgTgBgVQAAgVACgSQACgTAFgTQAFgSAGgOQASgoAkgOQASgIAVgDQAVgCATAAIAxgEIARgFIAPBlIgiAAIgOg0IgYABIgpAHIABAAQgSAFgLALQgMAKgFARQgKAegBAgQgBAhAKAgQAFARAMAKQAMAKAQAEQAPAFASABIAiABIARg4IAgAAIgNBTIgWAGIhIAHQgUAAgSgDgAkECZQgSgCgPgHQgPgGgHgMIAAABQgMgLgIgPQgHgQgEgTQgDgTgBgVQAAgVACgSQACgTAFgTQAFgSAGgOQASgoAkgOQASgIAVgDQAVgCATAAIAcgBIAmgIIAPBlIgiAAIgOg0IgsADIgVAFIABAAQgSAFgLALQgMAKgFARQgKAegBAgQgBAhAKAgQAFARAMAKQAMAKAQAEQAPAFASABIAiABIARg4IAgAAIgNBTIgWAGIhIAHQgUAAgSgDgAn+CZQgSgCgPgHQgPgGgIgMIAAABQgMgLgHgPQgHgQgEgTQgEgTAAgVQAAgVACgSQACgTAEgTQAFgSAGgOQATgoAkgOQASgIAUgDQAVgCATAAIAcgBIAngIIAPBlIgiAAIgOg0IgsADIgVAFIAAAAQgSAFgLALQgLAKgGARQgKAegBAgQgBAhAKAgQAGARAMAKQAMAKAPAEQAQAFASABIAiABIAQg4IAhAAIgNBTIgXAGIhHAHQgUAAgSgDgAPoASIgeAAIAABgIAYAHIAAAbIhpAAIAAgbIAYgHIAAjeIgYgFIAAgmIBRAIIAAB7IAegBIAjh6IBIgHIAAAlIgWAEIgiBoIAiB3IAXAHIAAAbIhKABgAzuASIgeAAIAABgIAYAHIAAAbIhpAAIAAgbIAYgHIAAjeIgYgFIAAgmIBRAIIAAB7IAegBIAjh6IBIgHIAAAlIgWAEIgiBoIAiB3IAXAHIAAAbIhKABgAT1CUIAAgbIAYgHIABiTIhbCTIAZAHIgBAbIhpAAIAAgbIAZgIIAAjdIgZgFIAAgmIBRAHIAACAIADgFIBUh6IA8AAIAAEBIAYAHIAAAbgAGNCUIAAgbIAYgHIAAjfIgYgEIAAgmIBYAIIB8AAIAPBZIgiAAIgRg5IhfAJIAABZIBSAAIABAfIhTAAIAABYIBgAKIAQg5IAhAAIgOBZgAEVCUIAAgbIAZgHIAAhhIhKABQgTgBgJgKQgJgIgDgPQgDgQABgRIAEg7IgZgFIAAglIBGAGIAGB4IA9ADIAAh6IA4AAIABEBIAYAHIAAAbgAAtCUIAAgbIAYgHIABiTIhYCTIAWAHIAAAbIhoAAIAAgbIAZgIIAAjdIgZgFIAAgmIBRAHIAACAIADgFIBSh6IA9AAIgBEBIAZAHIgBAbgAvRCUIAAgbIAagIIgVhwIAAgQIgVhXIgeAAIgXBZIgBAPIgHAvIABgBIgPBBIAZAIIAAAbIhhAAIAAgbIAWgHIA7jtIgfACIgBgeICHAHIAxECIAXAHIAAAbg");
	this.shape.setTransform(137.5,16);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,275,32.1);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AslBpIALgEIgGhmIgMgCIgBgSIAmACIAEAzIAtgDIgDgzIAagCIAIB3IALADIABAMIgxADIgBgMIALgFIgDgwIgtADIADAwIALADIABAMIgxADgAqlBhIALgEIgGhnIgMgBIgBgRIBjgDIAJAnIgPABIgKgYIgsAHIADAnIAmgCIABAPIgmADIACApIAtACIAGgbIAPgBIgEAqIhiAGgAi4BoIgGgjIAAgCIAKgDIAWhvIgOABIgCgNIBWgCIALB3IAMACIgBAnIgVADIgEgYIhHAEIgDAXIgTACgAiLglIgKBXIAAANIAygEIgLhkgAoJBYIALgFIgGhkIgggBIgGAZIgQABIAFgrIAAgBIB7gEIAJAoIgPABIgKgZIggAFIAHBkIALAEIABAMIgxADgAmlBSIALgFIgGhmIgMgBIgBgSIAqABQAMAAALADQAKADAIAGQAIAGAFAJQAFAJABAJIABAMQgBAGgCAFQgEAJgIAGQgIAGgLACQgLACgOAAIACAZIALADIABANIgxADgAmFgNIADAsQAJAAAIgCIAGgDQADgCACgDQADgCABgEQABgEAAgFQgBgGgDgDQgCgEgEgCQgEgDgFAAIgIgBgAk2BcQgEAAgBgBIgBgPIAKgDIAVhvIgOACIgCgPIA/AAIAfB2IALABIAAAMIgrADIgBgMIAMgDIgJghIgoACIgGAjIAMABIABANIgiAGgAkMgeIgIAoIABAMIAigCIAAgNIgJgmgACrBTIgFgVIhoAHIABgRIALgFIgGhmIgMgBIgBgSIAmACIAIB2IApgCIgHh3IAbgCIAHB6IATgCIgBApIgQABIAAgCgAg7A8IAMgFIgHhmIgMgBIgBgSIAmABIAEA7IABgCIAig7IAcgCIAHB3IAMACIAAANIgxADIgBgNIAMgEIgEhDIgkBGIALADIABAMIgxADgADCAsIAMgEIgHhmIgMgCIgBgSIAmACIAEA7IABgCIAkg8IAcgBIAHB2IAMADIAAAMIgxADIgBgMIAMgEIgEhEIgmBHIALACIABANIgxACgAFuAxIgMgDQgLgEgJgHIgIgIIgFgKQgGgKgBgKQgCgJACgSQABgOAGgOQADgKAHgGQAGgHAHgEIAQgGQAIgCAHAAQAKAAAJADQAKAEAJAGQAHAGAFAJQAFAIACAKQADAKgBALQABALgDAKQgCAJgFAKQgEAKgHAHQgGAIgJAFIgJAEIgKABIgHAAIgHAAgAFzhGQgGABgGAEQgFAEgEAIQgDAHgCAJQgCAJABAJQAAAKACAJQACAGAEAHQADAHAHAEQAGADAIAAQAIgBAFgEQAFgFAEgHQADgHACgHQABgJgBgJIgDgSQgDgJgEgHQgEgHgFgDQgFgEgGAAIgCAAgAG6AdIALgEIgGhmIgLgCIgBgSIAmACIADA1IAtgDIgDg1IAagCIAIB3IALADIABAMIgxADIgBgMIALgFIgDguIgtADIADAuIALADIABAMIgxADgAI6AVIALgEIgGhmIgMgCIgBgRIAmABIADA1IAugDIgDg1IAagCIAIB3IALADIABAMIgxADIgBgMIALgEIgDgvIguADIAEAuIALADIABANIgxADgALqAaIgMgDQgMgEgIgHIgIgIIgGgIQgFgKgCgNQgBgIABgSQACgOAGgOQADgKAGgGQAGgHAIgEIAPgGQAIgCAIAAQAKAAAJADQAKAEAIAGQAHAGAFAIQAFAJADAKQACAKAAALQAAALgCAKQgDALgFAKQgEAIgGAHQgHAIgIAEIgKAFIgJABIgFAAIgJAAgALvhdQgHABgFAEQgFAEgEAIQgEAHgBAJQgCAJAAAJQAAAKACAJQACAIAEAHQAEAHAGACQAGADAJAAQAIgBAFgDQAFgEAEgHQADgHABgJQABgJAAgKQgBgJgDgIQgCgJgEgHQgEgHgGgEQgFgDgGAAIgBAAg");
	this.shape.setTransform(81.4,11.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,162.9,23.6);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.war();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.plet();
	this.instance.setTransform(0,137,1,1,-66);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,164.3,183);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(8.1,1,1).p("AKAAAQAAEJi8C7Qi7C8kJAAQkIAAi7i8Qi8i7AAkJQAAkIC8i7QC7i8EIAAQEJAAC7C8QC8C7AAEIg");
	this.shape.setTransform(64,64);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AnDHEQi8i7AAkJQAAkIC8i7QC7i8EIAAQEJAAC7C8QC8C7gBEIQABEJi8C7Qi7C8kJgBQkIABi7i8g");
	this.shape_1.setTransform(64,64);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4,-4,136.1,136.1);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ah0CaQgIAAgDgDIAAghIAWgEIA7juIgfACIgCgeICGAHIAyECIAXAFIgBAaIhdAAIAAgaIAagFIgQhIIhTAAIgRBIIAaAFIAAAdIhJAJgAghgOIgBAYIBJgBIAAgZIgOhYIgkAAgAD9AOIgeAAIgBBgIAZAHIAAAbIhqAAIAAgbIAZgHIAAjeIgZgFIAAgmIBRAIIAAB7IAfgBIAjh6IBIgHIgBAlIgWAEIgiBoIAjB3IAXAHIAAAbIhKABgAj4AOIgeAAIgBBgIAZAHIAAAbIhqAAIAAgbIAZgHIAAjeIgZgFIAAgmIBRAIIAAB7IAfgBIAjh6IBIgHIgBAlIgWAEIgiBoIAjB3IAXAHIAAAbIhKABg");
	this.shape.setTransform(36.1,15.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,72.3,31.3);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("APMChIgChFIBOAEIgBBBgAqACfQgJAAgCgDIAAghIAWgEIA6juIgeACIgCgeICHAHIAyECIAXAFIAAAaIheAAIABgaIAagFIgQhIIhVAAIgRBIIAZAFIABAdIhJAJgAougJIAAAYIBKgBIAAgZIgOhYIgmAAgAgdCbQgOgDgMgEQgYgKgRgRQgJgIgHgKQgGgKgFgMQgKgXgCgbQgCgSAFgkQAGgeAOgdQAJgUANgOQAOgNASgIQAPgGARgEQASgEAOABQAWACATAIQAUAIARAPQAQANAJATQAKATADAWQAEAVgCAXQgBAWgHAXQgGAWgLAVQgLAUgPAPQgPAQgTAJQgJAEgLADIgTACQgPAAgOgCgAgehcQgLAJgJAPQgIAPgFATQgFATgBASQgBAUADATQADATAIAPQAHAPANAJQAMAJASAAQAPAAAMgJQAMgJAIgPQAIgPAEgTQADgTAAgUQAAgSgEgTQgEgTgIgPQgIgPgLgJQgMgJgNAAQgOAAgMAJgAkjCaQgSgCgPgHQgPgGgIgMIAAABQgMgLgHgPQgHgQgEgTQgEgTAAgVQAAgVACgSQACgTAEgTQAFgSAGgOQATgoAkgOQASgIAUgDQAVgCATAAIAxgEIASgFIAPBlIgiAAIgOg0IgsADIgVAFIAAAAQgSAFgLALQgLAKgGARQgKAegBAgQgBAhAKAgQAGARAMAKQAMAKAPAEQAQAFASABIAiABIAQg4IAhAAIgNBTIgXAGIhHAHQgUAAgSgDgAIqATIgeAAIgBBgIAZAHIAAAbIhqAAIAAgbIAZgHIAAjeIgZgFIAAgmIBRAIIAAB7IAfgBIAjh6IBIgHIgBAlIgWAEIgiBoIAjB3IAXAHIAAAbIhKABgAvnATIgeAAIgBBgIAZAHIAAAbIhqAAIAAgbIAZgHIAAjeIgZgFIAAgmIBRAIIAAB7IAfgBIAjh6IBIgHIgBAlIgWAEIgiBoIAjB3IAXAHIAAAbIhKABgALzCVIAAgbIAYgIIAUhfIgVAAQgJgBgIgCQgIgDgIgGQgHgFgHgJIghhlIgWgEIAAglIBIAHIAiB6IAeAAIASh8IBAgGIAAAmIgXAEIgjDeIAZAIIAAAbgADjCVIABgbIAYgIIAAjZIhFgHIgQA6IghAAIAPhhIAAgBIBYAIICwAAIAOBaIghAAIgQg6IhFAGIAADaIAYAIIAAAbgAttCVIAAgbIAYgIIAAjeIgYgEIAAgmIBYAIQAbACAWAHQAWAIAQAOQAQAOAJATQAKATACAYQABAPgCAMQgCALgFAKQgJATgSALQgSALgYAEQgZADgdgDIAAA4IAZAHIAAAcgAscASQAVACAQgEIAOgFQAGgEAFgFQAFgEADgIQAEgIAAgKQgBgPgFgJQgGgKgIgFQgIgFgJgDIgSgDIgTAAgAPPBUIAAgRIAAhaQAVgBAcgHQAbgIgBgbQAAgMgFgHQgFgIgIgFQgIgEgJgBIgSgDIgeADIgOAxIguAAIAQhfQBQgWAxAXQAyAXAJA3QAEAagLAgQgLAdgbAGIgEACIgMACIgBAAIgFA9g");
	this.shape.setTransform(111.2,16.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,222.5,32.3);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AlgCBIiZAAIgIAwIgqACIgBgDIAAgDIgGhMIAAgDIAWgHIA+jtIgeACIgDgeIC4AIIAJEBIAXAHIgHBTIgtADgAm4h/IgiC+IAAAaIBrgBIgKjbgAg2CxIgBgDIgCgPIAAAAIgFgeIjfAAIAEgkIAZgIIAAjdIgZgFIAAgmIBRAIIABEBIBZABIABkDIA4AAIgBEIIApgCIgHBXgAkkCBIAHAAIAAAAgAkdCBgArXB+QgOgCgMgFQgYgJgRgRQgIgJgIgKQgGgKgFgLQgKgXgCgbQgBgQAFgnQAFgdAOgeQAJgUAOgNQANgOASgHQAPgHASgEQARgDAQAAQAWACAUAIQATAJARAPQAQANAKATQAJASADAWQAFAWgCAXQgCAYgGAUQgHAXgLAUQgLAVgOAPQgPAPgUAJQgJAFgKACIgVADQgQAAgOgDgArYh4QgLAJgJAPQgIAOgFAUQgFATgBAUQgBAUADARQADATAIAPQAHAOANAKQANAJASAAQAQAAAMgJQANgKAHgOQAJgPADgTQADgSAAgTQABgUgEgTQgFgUgIgOQgIgPgLgJQgMgJgPAAQgOAAgMAJgAMLB4IAAgaIAXgEIAPjiIgZgFIAAgmIBXAIIAUAOIAoCKIAniKIAUgOIA/AAIATEAIAYAIIAAAbIhqAAIAAgbIAagIIgjibIgYBVIgbADIgZgEIgZhUIgcCbIAYAIIABAbgAKVB4IAAgbIAYgHIABiTIhbCUIAZAHIgBAaIhpAAIAAgaIAZgIIAAjeIgZgEIAAgnIBRAIIAAB/IADgFIBUh6IA9AAIgBEBIAYAIIAAAagAGKB4IAAgbIAZgHIAAjTIhigHIAADZIAZAIIAAAbIhqAAIAAgbIAZgHIAAjeIgZgFIAAgmIBZAIICTAAIAAEBIAYAHIAAAbgAAAB4IAAgbIAYgHIAAjeIgYgFIAAgmIBXAIIB9AAIAOBZIghAAIgRg5IhgAKIAABYIBSAAIABAhIhTAAIAABXIBgAJIARg5IAgAAIgOBZgAu0B4IAAgbIAYgHIAAjTIhigHIABDZIAYAIIAAAbIhqAAIAAgbIAYgHIABjeIgZgFIAAgmIBZAIICTAAIAAEBIAYAHIAAAbg");
	this.shape.setTransform(110.5,18);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,220.9,36.1);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ten();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,170,39);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-110.4,0,110.4,0).s().p("AxPL9IAA35MAifAAAIAAX5g");
	this.shape.setTransform(110.4,76.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-110.4,0,110.4,0).s().p("AxPL9IAA35MAifAAAIAAX5g");
	this.shape_1.setTransform(370.4,76.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-110.4,0,110.4,0).s().p("AxPL9IAA35MAifAAAIAAX5g");
	this.shape_2.setTransform(614.4,76.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,724.9,153);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah0ABICog9IBBAlIAAAfIhsA1g");
	this.shape.setTransform(11.8,6.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23.6,12.4);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0.1,-7.8,0.1,10.9).s().p("AjJBxIAyjDIDmgeIB7Dhg");
	this.shape.setTransform(20.3,11.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40.5,22.8);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.fon();
	this.instance.setTransform(0,0,0.857,0.857);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,685.5,371);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.telo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,159,356);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.leg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,83,156);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hed();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,84,89);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.foot();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,65);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bra();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,89,63);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.setTransform(66.5,8,0.508,0.508,0,0,0,131,15.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,133,16.1);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.setTransform(90.8,21.9,0.527,0.527,3.7,0,0,137.4,16.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AubB0IAVlYIciBuIAAFbg");
	this.shape.setTransform(92.4,22.9);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,184.9,45.8);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.setTransform(81.4,11.8,1,1,0,0,0,81.4,11.8);

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Au+hXIdliOIAYE9I9lCOg");
	this.shape.setTransform(81.9,12.5);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14,-10.6,191.9,46.1);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 28
	this.instance = new lib.Символ28();
	this.instance.setTransform(30.3,13.2,0.84,0.84,0,0,0,36.1,15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.52},9).to({alpha:1},10).wait(21));

	// Символ 27
	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(503.2,13.5,0.836,0.836,0,0,0,111.3,16.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({alpha:0.52},9).to({alpha:1},10).wait(12));

	// Символ 26
	this.instance_2 = new lib.Символ26();
	this.instance_2.setTransform(173.6,15.2,0.836,0.836,0,0,0,110.5,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({alpha:0.52},9).to({alpha:1},10).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,596.2,30.2);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(42,44.5,1,1,0,0,0,42,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:42.1,skewX:0.5,skewY:0.8,x:41.6,y:45.1},8,cjs.Ease.get(-1)).to({regX:42,skewX:1.3,skewY:1.7,x:41,y:45.8},8,cjs.Ease.get(1)).to({skewX:0.5,skewY:0.8,x:41.5,y:45.2},10,cjs.Ease.get(-1)).to({skewX:0,skewY:0,x:42,y:44.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,89);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(44.5,31.5,1,1,0,0,0,44.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04,scaleY:1.06,x:44.4,y:32.6},22,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:44.5,y:31.5},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89,63);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 2
	this.instance = new lib.Символ2();
	this.instance.setTransform(80.5,172.1,1,1,0,0,0,32,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,skewX:5.5,skewY:5,x:72.9,y:170.4},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewX:11.7,skewY:10.8,x:64.2,y:168.7},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,skewX:5.8,skewY:5.3,x:72.4,y:170.5},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:80.5,y:172.1},10,cjs.Ease.get(1)).wait(1));

	// Символ 4
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(41.5,78,1,1,0,0,0,41.5,78);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1,skewX:1.8,x:39.1},9,cjs.Ease.get(-1)).to({scaleY:1,skewX:3.8,x:36.4},10,cjs.Ease.get(1)).to({regX:41.6,scaleY:1,skewX:1.8,x:39.1},10,cjs.Ease.get(-1)).to({regX:41.5,scaleY:1,skewX:0,x:41.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.5,204.6);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(206.1,76.5,0.569,1.457,0,0,0,362.4,76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1.43,x:-832.5,y:49.5},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-34.9,412.2,222.9);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A+5J5IAA0hQAAhuByAbIOADPQBzAaAABuIAARUQgKAdhQgFIuZA6QhygbAAhugAo8J1IAAv/QAAhWBAAVIINB+QAiATAAB7IAANfQgGAWgsgEIn9AuQhAgVAAhWgAPQiJIB/ApQAIAOAABYIAAJ6QgCAQgKgDIh7AFgASGhcIBHAaQACAZAABSIAAJMQgBAPgGgDIhCAEgAUqKBIhCAAIAArDIBEAZQAEgMAABTIAAJWQgBANgEAAIgBAAgAaTArIB/AeQAIAKAAA/IAAHBQgBAMgKgCIh8ADgAdbBYIBeAZIABBYIAAGAQgBAKgHgCIhXACg");
	mask.setTransform(197.9,77);

	// Слой 2
	this.instance = new lib.Символ18();
	this.instance.setTransform(776.9,107.4,1,1,0,0,0,362.4,76.5);
	this.instance.alpha = 0.238;

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(20.2,15.1,1,1,0,0,0,20.2,11.3);
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(16.5,6.2,1,1,0,0,0,11.8,6.2);
	this.instance_1.compositeOperation = "lighter";

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40.5,26.5);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(20.2,13.2,1,1,0,0,0,20.2,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},7).wait(1).to({_off:false},0).to({_off:true},6).wait(1).to({_off:false},0).to({_off:true},3).wait(1).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.5,26.5);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ15();
	this.instance.setTransform(15.6,13.2,1,1,0,0,0,20.2,13.2);
	this.instance.alpha = 0.238;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.6,0,40.5,26.5);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ17();
	this.instance.setTransform(234,156.7,1,1,0,0,0,197.8,77);

	// Слой 1
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(342.7,185.5,1,1,0,0,0,342.7,185.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,862.9,371);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ12();
	this.instance.setTransform(474.9,132.2,1,1,0,0,0,11.8,6.2);

	// Слой 1
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(343.7,185.5,1,1,0,0,0,342.7,185.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,862.9,371);


(lib.Символ6 = function() {
	this.initialize();

	// Символ 3
	this.instance = new lib.Символ25();
	this.instance.setTransform(108.5,44.5,1,1,0,0,0,42,44.5);

	// Символ 1
	this.instance_1 = new lib.Символ24();
	this.instance_1.setTransform(89.5,120.5,1,1,0,0,0,44.5,31.5);

	// Символ 2
	this.instance_2 = new lib.Символ23();
	this.instance_2.setTransform(161.8,274.7,1,1,0,0,0,56.6,102.7);

	// Символ 5
	this.instance_3 = new lib.Символ5();
	this.instance_3.setTransform(79.5,225.1,1,1,0,0,0,79.5,178);

	// Слой 2
	this.instance_4 = new lib.Символ22();
	this.instance_4.setTransform(84.7,251.7,0.653,1,0,0,0,85.2,19.4);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,217.7,403.1);


(lib.Символ46 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(92.4,140,1,1,0,0,0,92.4,22.9);

	this.instance_1 = new lib.rose();
	this.instance_1.setTransform(34.6,25.6,0.658,0.658,-15);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(8.1,1,1).p("AKAAAQAAEIi8C8Qi8C8kIAAQkIAAi7i8Qi8i8AAkIQAAkIC8i7QC7i8EIAAQEIAAC8C8QC8C7AAEIg");
	this.shape.setTransform(96.6,72.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AnDHEQi7i8AAkIQAAkHC7i8QC7i8EIAAQEIAAC8C8QC7C8ABEHQgBEIi7C8Qi8C8kIAAQkIAAi7i8g");
	this.shape_1.setTransform(96.6,72.1);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,184.9,162.9);


(lib.Символ45 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.setTransform(95.5,171.9,1,1,0,0,0,81.4,11.8);

	this.instance_1 = new lib.Символ34();
	this.instance_1.setTransform(104,124.5,1,1,-15,0,0,50,50);

	this.instance_2 = new lib.Символ33();
	this.instance_2.setTransform(92.1,91.5,1,1,0,0,0,82.1,91.5);

	this.instance_3 = new lib.Символ32();
	this.instance_3.setTransform(97,108.5,1,1,0,0,0,64,64);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,191.9,195.6);


(lib.Символ44 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(86.5,29.7,1,1,0,0,0,66.5,8.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.Символ42();
	this.instance_1.setTransform(85.5,31.5,1,1,0,0,0,85.5,31.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,171,63);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.setTransform(499.7,27.9,1,1,0,0,0,298.1,15.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhQmAE2IAAprMChNAAAIAAJrg");
	this.shape.setTransform(516,31);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1031.9,62);


(lib.Символ31 = function(mode,startPosition,loop) {
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

	// Слой 8
	this.instance = new lib.Символ48();
	this.instance.setTransform(515.1,78,1,1,0,0,0,94.9,90);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.48},9).to({alpha:0},10).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ40();
	this.instance_1.setTransform(45.6,45.1,1,1,0,0,0,213.5,245);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ40(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// Слой 7
	this.instance_2 = new lib.Символ47();
	this.instance_2.setTransform(1000.5,34.6,1,1,0,0,0,292.4,210.5);
	this.instance_2.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:467.5},9,cjs.Ease.get(1)).to({x:1000.5},10,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ45();
	this.instance_3.setTransform(63,73.4,1,1,0,0,0,96,97.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:26.4},9,cjs.Ease.get(1)).to({y:73.4},10,cjs.Ease.get(1)).wait(1));

	// Слой 5
	this.instance_4 = new lib.Символ44();
	this.instance_4.setTransform(65.4,92.6,1,1,0,0,0,85.5,31.5);
	this.instance_4.alpha = 0;
	new cjs.ButtonHelper(this.instance_4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:66.4,y:162.6,alpha:1},9,cjs.Ease.get(1)).to({x:65.4,y:92.6,alpha:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172,-204.2,1615,498.4);


(lib.Символ30 = function(mode,startPosition,loop) {
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

	// Слой 6
	this.instance = new lib.Символ49();
	this.instance.setTransform(-354.7,47,1,1,0,0,0,80.7,127.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.461},9).to({alpha:0},10).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ40();
	this.instance_1.setTransform(68.1,46,1,1,0,0,0,213.5,245);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ40(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// Слой 5
	this.instance_2 = new lib.Символ47();
	this.instance_2.setTransform(-817.8,33,0.955,1,0,0,180,292.4,210.5);
	this.instance_2.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-342.9},9,cjs.Ease.get(1)).to({x:-447.2},1,cjs.Ease.get(1)).to({x:-891.8},9).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ46();
	this.instance_3.setTransform(59.9,93.4,1,1,0,0,0,92.4,81.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:53.4},9,cjs.Ease.get(1)).to({y:93.4},10,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_4 = new lib.Символ44();
	this.instance_4.setTransform(62,112,1,1,0,0,0,85.5,31.5);
	this.instance_4.alpha = 0;
	new cjs.ButtonHelper(this.instance_4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:172,alpha:1},9,cjs.Ease.get(1)).to({y:112,alpha:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1240.4,-205.8,1526,500.9);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(92.3,170.3,0.845,0.845,0,0,0,109.3,201.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,183.8,340.4);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(341.7,185.5,1,1,0,0,0,342.7,185.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:343.7},2).to({x:341.7},2).wait(1).to({x:343.7},2).to({x:341.7},2).to({x:339.7},10).to({x:341.7},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,862.9,371);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(92.2,170.2,1,1,0,0,0,92.2,170.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:-1,x:89.2},24).to({skewX:0,x:92.2},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,183.8,340.4);


(lib.Символ7 = function() {
	this.initialize();

	// fon.jpg
	this.instance = new lib.Символ20();
	this.instance.setTransform(432.4,185.5,1.146,1,0,0,0,431.4,185.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-61.8,0,988.5,371);


// stage content:
(lib.sittinggirl640305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.bt2.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
		
		this.bt1.addEventListener("click", fl_ClickToGoToWebPage1);
		
		function fl_ClickToGoToWebPage1() {
			window.open(clickTAG, "_blank");
		}
		
		//--------------
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		//--------------
		
		this.bt2.addEventListener("mouseover", fl_rosaover.bind(this));
		
		function fl_rosaover()
		{
			this.bt2.gotoAndPlay(1);
			this.bt1.alpha = 0;
		}
		
		this.bt2.addEventListener("mouseout", fl_rosaout.bind(this));
		
		function fl_rosaout()
		{
			this.bt2.gotoAndPlay(11);
			this.bt1.alpha = 1;
		}
		
		//---------------
		
		
		this.bt1.addEventListener("mouseover", fl_pletover.bind(this));
		
		function fl_pletover()
		{
			this.bt1.gotoAndPlay(1);
			this.bt2.alpha = 0;
		}
		
		this.bt1.addEventListener("mouseout", fl_pletout.bind(this));
		
		function fl_pletout()
		{
			this.bt1.gotoAndPlay(11);
			this.bt2.alpha = 1;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bt1
	this.bt1 = new lib.Символ31();
	this.bt1.setTransform(110,105.9,1,1,0,0,0,64,64);

	this.timeline.addTween(cjs.Tween.get(this.bt1).wait(1));

	// bt2
	this.bt2 = new lib.Символ30();
	this.bt2.setTransform(519,105,1,1,0,0,0,64,64);

	this.timeline.addTween(cjs.Tween.get(this.bt2).wait(1));

	// Слой 2
	this.instance = new lib.Символ9();
	this.instance.setTransform(322.3,168,0.924,0.924,0,0,0,92.2,170.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ39();
	this.instance_1.setTransform(332,286,1,1,0,0,0,516,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ7();
	this.instance_2.setTransform(338,112.2,1,1,0,0,0,342.7,228.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-465.4,-12.3,2274.4,490.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;