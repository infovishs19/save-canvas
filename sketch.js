/// <reference path="./libraries/p5.global-mode.d.ts" />

function setup () {
	createCanvas(4 * 1920, 1080);

	//HSB mode Hue, Saturation, Brightness
	colorMode(HSB);

	frameRate(30);
	noLoop();
}

function draw () {

	background(0);
	randomSeed(0);

	for (var i = 0; i < 100; i++) {
		var radius = random(3, 200);
		var x = random(0, width);
		var y = random(0, height);
		var h = random(100, 255);
		var s = random(100, 255);
		var b = map(radius, 1, 200, 255, 0);

		noStroke();
		fill(h, s, b);
		ellipse(x, y, radius, radius);

	}

}

function keyTyped () {
	console.log('saving canvas');
	saveCanvas('myCanvas');
	console.log('done');
}


