var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

let retangulo_1 = {
    x: 0,
    y: 0,
    w: 100,
    h: 100,
    color: "red",
};

let retangulo_2 = {
    x: 0,
    y: 0,
    w: 100,
    h: 100,
    color: "red",
};

function desenha_retangulo(ret){
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.fillStyle = ret.color;
    ctx.fillRect(ret.x, ret.y, ret.w, ret.h);
    ctx.closePath();
}

let mov = 1
function desenhar(){
    ctx.clearRect(0,0,400,400)

    if(retangulo_1.x == 400-retangulo_1.w) {mov = -1}
    if(retangulo_1.x == 0) {mov = 1}

    retangulo_1.x = retangulo_1.x + mov

    desenha_retangulo(retangulo_1)
    desenha_retangulo(retangulo_2)

    requestAnimationFrame(desenhar)
}

desenhar()

document.addEventListener("keydown",function(evento){
    var tecla = evento.key;
    console.log(tecla);

    var vel = 5;

    if(tecla == "ArrowUp") {retangulo_2.y -= vel}
    if(tecla == "ArrowDown") {retangulo_2.y += vel}
    if(tecla == "ArrowLeft") {retangulo_2.x -= vel}
    if(tecla == "ArrowRight") {retangulo_2.x += vel}
});