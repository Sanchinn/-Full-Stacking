let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// Quadrado 1
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "red";
ctx.fillRect(0,0,50,50);
ctx.closePath();

// Quadrado 2
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "green";
ctx.fillRect(450,450,50,50);
ctx.closePath();

// Quadrado 3
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "yellow";
ctx.fillRect(0,450,50,50);
ctx.closePath();

// Quadrado 4 
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "blue";
ctx.fillRect(450,0,50,50);
ctx.closePath();

// Texto
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.font = "37px Arial"
ctx.textAlign = "center";
ctx.fillText("Desenvolvimento Web",250,65);
ctx.closePath();

// Arco Esquerdo
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(60,150,25,0.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// Arco Direito
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(440,150,25,0.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// Arco Central
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'white';
ctx.strokeStyle = 'green';
ctx.arc(250,250,90,0.0*Math.PI,1.0*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// Diagonal 1 (vermelha)
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.moveTo(0, 0);
ctx.lineTo(500, 500);
ctx.stroke();
ctx.closePath();

// Diagonal 2 (azul)
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue';
ctx.moveTo(0, 500);
ctx.lineTo(500, 0);
ctx.stroke();
ctx.closePath();

// Linha horizontal (verde)
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.moveTo(0, 250);
ctx.lineTo(500, 250);
ctx.stroke();
ctx.closePath();