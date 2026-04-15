let retangulo_1 = {
    w: 100,
    h: 100,
    color: "blue",
};

let retangulo_2 = {
    w: 50,
    h: 50,
    color: "blue",
};

var canvas = document.getElementById("canvas");
var ctx = canvas.GetContext("2d");

function desenha_retangulo(ret){
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.fillStyle = ret.color;
    ctx.fillRect(ret.x, ret.y, ret.w, ret.h);
    ctx.closePath();
}

desenha_retangulo(retangulo_1)
desenha_retangulo(retangulo_2)
