// Creazione del canvas
var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");

// Impostazione delle dimensioni del canvas
canvas.width = 1728;
canvas.height = 1000;

// Definizione dei caratteri da utilizzare nella pioggia
var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_-+=";
characters = characters.split("");

// Impostazione del numero di colonne e righe della pioggia
var columns = canvas.width / 16;
var drops = [];

// Creazione degli oggetti Drop
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

// Funzione per l'animazione della pioggia
function draw() {
  // Impostazione dello sfondo nero
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, 1728, 1000);

  // Impostazione del colore verde per i caratteri
  ctx.fillStyle = "#0F0";
  ctx.font = "18px monospace";

  // Ciclo per la generazione e il disegno dei caratteri
  for (var i = 0; i < drops.length; i++) {
    // Selezione di un carattere casuale
    var text = characters[Math.floor(Math.random() * characters.length)];

    // Posizionamento del carattere sulla colonna corrispondente
    ctx.fillText(text, i * 17, drops[i] * 17);

    // Aggiornamento della posizione del carattere
    if (drops[i] * 17 > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

// Esecuzione della funzione di animazione ad intervalli regolari
setInterval(draw, 50);