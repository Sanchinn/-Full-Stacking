let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// Quadrado / retângulo
function desenharRetangulo(ctx, x, y, largura, altura, cor) {
  ctx.beginPath();
  ctx.fillStyle = cor;
  ctx.fillRect(x, y, largura, altura);
  ctx.closePath();
}

// Círculo / arco
function desenharArco(ctx, x, y, raio, anguloInicial, anguloFinal, corPreenchimento, corBorda) {
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.fillStyle = corPreenchimento;
  ctx.strokeStyle = corBorda;

  ctx.arc(x, y, raio, anguloInicial, anguloFinal);

  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

// Linha
function desenharLinha(ctx, x1, y1, x2, y2, cor) {
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = cor;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
}

// Fundo (céu)
desenhar_Retangulo(ctx, 0, 0, 500, 500, "#98FBCC");

// Sol
desenhar_Arco(ctx, 420, 80, 40, 0, Math.PI * 2, "yellow", "yellow");

// Chão
desenhar_Retangulo(ctx, 0, 300, 500, 200, "gray");

// Casa (corpo)
desenhar_Retangulo(ctx, 200, 220, 100, 100, "#8B4513");

// Janelas
desenhar_Retangulo(ctx, 215, 240, 25, 25, "deepskyblue");
desenhar_Retangulo(ctx, 260, 240, 25, 25, "deepskyblue");
// Telhado
ctx.beginPath();
ctx.fillStyle = "tomato";
ctx.moveTo(200, 220);
ctx.lineTo(250, 170);
ctx.lineTo(300, 220);
ctx.closePath();
ctx.fill();


// Árvore esquerda
desenhar_Retangulo(ctx, 70, 260, 15, 60, "#8B4513");
desenhar_Arco(ctx, 78, 240, 25, 0, Math.PI * 2, "green", "green");


//  Árvore direita
desenhar_Retangulo(ctx, 430, 280, 15, 40, "#8B4513");
desenhar_Arco(ctx, 438, 260, 22, 0, Math.PI * 2, "green", "green");


//  Água (curva)
ctx.beginPath();
ctx.fillStyle = "dodgerblue";
ctx.moveTo(0, 380);
ctx.quadraticCurveTo(80, 300, 160, 380);
ctx.lineTo(160, 500);
ctx.lineTo(0, 500);

ctx.closePath();
ctx.fill();

//Porta