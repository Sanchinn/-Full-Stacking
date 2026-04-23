let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let retangulo = {
    x: 0,
    y: 0,
    altura: 50,
    largura: 50,
    cor: "red",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }
}

function animacao(){
   ctx.clearRect(0,0,500,500);
    retangulo.x = retangulo.x + 1;
    retangulo.desenha();
    requestAnimationFrame(animacao)
}
animacao();