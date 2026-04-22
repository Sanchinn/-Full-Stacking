let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// Quadrado 1
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "blue";
ctx.fillRect(0,0,80,80);
ctx.closePath();

// Quadrado 2
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "red";
ctx.fillRect(420,0,80,80);
ctx.closePath();

// Quadrado 3
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "black";
ctx.fillRect(420,450,150,50);
ctx.closePath();

// Quadrado 4
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "yellow";
ctx.fillRect(0,450,80,50);
ctx.closePath();

// Quadrado 5 (centro)
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "red";
ctx.fillRect(185,250,65,65);
ctx.closePath();

// Quadrado 6 (centro esquerda)
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "cyan";
ctx.fillRect(0,210,50,80);
ctx.closePath();

// Quadrado 7 (centro direita)
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "cyan";
ctx.fillRect(460,215,40,70);
ctx.closePath();

// Texto
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.font = "35px Arial"
ctx.textAlign = "center";
ctx.fillText("Canvas",250,65);
ctx.closePath();

// Linha horizontal (verde)
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.moveTo(0, 250);
ctx.lineTo(500, 250);
ctx.stroke();
ctx.closePath();

// Diagonal 1 (azul)
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue';
ctx.moveTo(0, 0);
ctx.lineTo(500, 500);
ctx.stroke();
ctx.closePath();

// Diagonal 2 (vermelha)
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.moveTo(0, 500);
ctx.lineTo(500, 0);
ctx.stroke();
ctx.closePath();

// Arco Esquerdo
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(120,380,25,0.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// Arco Direito
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(380,380,25,0.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// Arco Esquerdo
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'cyan';
ctx.strokeStyle = 'blue';
ctx.arc(250,190,25,0.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();