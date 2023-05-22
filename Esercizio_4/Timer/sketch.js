
function setup(){
	createCanvas(windowWidth, windowHeight)
	let p = filter(INVERT)
}

function draw(){
	let h = hour();
	let m = minute();
	let s = second();

	//sfondo
	const r = ((h/24)*255)
	const g = ((m/60)*255)
	const b = ((s/60)*255)
	background (r, g, b)

    //timer
	const d = ((h/24)*245+10)
	const d1 = ((m/60)*245+10)
	const d2 = ((s/60)*245+10)

	//:
	fill(255, 255, 255, 255)
	text(":     :",width/4 * 2, height/2)
	
	if(h < 10) h = "0" + h
	if(m < 10) m = "0" + m
	if(s < 10) s = "0" + s
	textSize(windowWidth/5)
	textFont('times')
	textAlign(CENTER, CENTER)

    //hour
	fill(255, 255, 255, d)
	text(h, width/5 * 1, height/2)

	//min
	fill(255, 255, 255, d1)
	text(m, width/4 * 2, height/2)
	
	//sec
	fill(255, 255, 255, d2)
	text(s, width/5 * 4, height/2)
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
	background(0)
}
function mousePressed() {
	filter(INVERT) //non va?
}