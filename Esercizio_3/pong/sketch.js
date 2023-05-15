let posizioneY
let posizioneX
let velX
let velY

function setup(){
	createCanvas(windowWidth, windowHeight)
	posizioneX = random(width)
	posizioneY = random(height)
	velX = random(-10, 10)
	velY = random(-10, 10)
	background(0)
}

function draw(){
	noStroke()
	//fill(map(posizioneX, 0, width, 0, 255), map(posizioneY, 0, width, 0, 255), 0)

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
}
//chiedere come si fa mette il centro il centro del quadrato 

function keyPressed(){
	if (key == 's') save("pong.png") 
}