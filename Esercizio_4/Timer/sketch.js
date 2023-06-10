let filterActive = false;
let W = 255

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  let h = hour();
  let m = minute();
  let s = second();

  //sfondo
  const r = ((h / 24) * 255);
  const g = ((m / 60) * 255);
  const b = ((s / 60) * 255);
  background(r, g, b);

  //timer
  const d = ((h / 24) * 245 + 20);
  const d1 = ((m / 60) * 245 + 20);
  const d2 = ((s / 60) * 245 + 20);
   
  //filtro
  if (filterActive) {
    filter(INVERT);
  }

  //:
  fill(W, W, W, 200)
  text(":     :", width / 4 * 2, height / 2);

  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;
  textSize(windowWidth / 5);
  textFont('times');
  textAlign(CENTER, CENTER);

  //hour
  fill(W, W, W, d);
  text(h, width / 5 * 1, height / 2);

  //min
  fill(W, W, W, d1);
  text(m, width / 4 * 2, height / 2);

  //sec
  fill(W, W, W, d2);
  text(s, width / 5 * 4, height / 2);

  if (h > 18 || h < 6) W = 0

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}

function keyPressed() {
  if (key === ' ') {
    filterActive = !filterActive;
  }
}

function mousePressed() {
	text(0)
}