let W = 255;


function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  let h = hour();
  let m = minute();
  let s = second();

  // sfondo
  const r = (h / 24) * 255;
  const g = (m / 60) * 255;
  const b = (s / 60) * 255;
  background(r, g, b)
  if (key == 'r') background(r, g, b);
  if (key == 'g') background(g, b, r);
  if (key == 'b') background(b, r, g);

  // timer
  const d = (h / 24) * 235 + 20;
  const d1 = (m / 60) * 235 + 20;
  const d2 = (s / 60) * 235 + 20;

  // ":"
  fill(W, W, W, 200);
  textSize(windowWidth / 5);
  textFont('times');
  textAlign(CENTER, CENTER);
  text(":     :", width / 4 * 2, height / 2);

  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;

  // hour
  fill(W, W, W, d);
  text(h, width / 5 * 1, height / 2);

  // min
  fill(W, W, W, d1);
  text(m, width / 4 * 2, height / 2);

  // sec
  fill(W, W, W, d2);
  text(s, width / 5 * 4, height / 2);

  if (h > 18 || h < 6) W = 0;
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}

//progetto realizzato trammite la spiegazione svolta durante il corso e sperimentazione del programma con l'utilizzo di p5*js