let posizioneY
let posizioneX
let velX
let velY


function setup(){
	createCanvas(windowWidth, windowHeight)
	rectMode(CENTER)
	posizioneX = random(width)
	posizioneY = random(height)
	velX = random(-10, 10)
	velY = random(-10, 10)
	background(0)
}


function draw(){
	noStroke()

	const r = (sin(frameCount * 0.031) + 1) * 150
	const g = (cos(frameCount * 0.050)) * 150
	const b = (sin(frameCount * 0.032) + 2) * 150
	fill(r, g, b)

	console.log(b)
	const d = random(10, 100)

	rect(posizioneX, posizioneY, d, d)
	rect(width - posizioneX, posizioneY, d, d)
	
	posizioneX = posizioneX + velX
	posizioneY = posizioneY + velY
	if (posizioneX >= width || posizioneX <= 0) velX = -velX
	if (posizioneY >= height || posizioneY <= 0) velY = -velY
	if (velY == 0) velY = velY + 10 
	if (velX == 0) velX = velX + 10
}


function keyPressed(){
	if (key == 's') save("pong.png") 
	if (key == ' ') background(0)
}


function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
	background(0)
}


function mousePressed() {
	posizioneX = random(width)
	posizioneY = random(height)
	velX = random(-10, 10)
	velY = random(-10, 10)
	
	posizioneX = posizioneX + velX
	posizioneY = posizioneY + velY
	if (posizioneX >= width || posizioneX <= 0) velX = -velX
	if (posizioneY >= height || posizioneY <= 0) velY = -velY
	if (velY == 0) velY = velY + 10
	if (velX == 0) velX = velX + 10
	rect(posizioneX, posizioneY, d, d)
}

//realizzato trammite l'esercizio svolto in atelier e poi sviluppato