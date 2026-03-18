document .getElementById("d1").innerHTML = "Prof. Fagner Pimentel";

let nome = prompt("Digite seu nome: ");
let idade = prompt("Digite sua idade: ");
let ano = 2026;

let nasc = ano-idade;

document .getElementById("resp_ex1"). innerHTML = "Olá", nome + ", seu ano de nascimento é: ";
nasc + "!"

function mensagem(){
    alert("Olá!")
}

//mensagem{}
//mensagem{}
//mensagem{"Fagner"};
//mensagem{"Pimentel"};

function soma(a,b){return a + b;}
function soma(a,b){return a - b;}
function soma(a,b){return a * b;}
function soma(a,b){return a / b;}

resp = soma(5,56);
document .getElementById("soma").innerHTML = resp 

function exemplo2(){
    let x = document .getElementById("in_ex2").value;

    for(let i= 1; i < x; i++){
        console.log(x + i);
    }

    document .getElementById("resp_ex2"). innerHTML = x;
        
}

function exemplo3() {
    let a = parseInt(document.getElementById("In_1_ex3").value);
    let b = parseInt(document);
}

function exemplo4(){
    let a = parseInt(document.getElementById("in_1_ex4").value)
    let b = parseInt(document.getElementById("in_2_ex4").value)

    let resp
    
}