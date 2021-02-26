let message: string = 'Hello world';
var mionumero : number = 7;
var miavariabile: any;  
console.log(message);

var utente = {nome: "Mario", cognome: "Rossi"};
var ora = new Date().getTime();
document.onload = init;
function init() {
    var elemento = document.getElementById("myDiv");
    elemento.innerHTML = "Test!";
}
var x = 4;
function quadrato(n: number) : number {
    return n*n;
}
var y = quadrato(x);

enum Frutta {Mela, Arancia, Pera, Banana};
var miaFrutta : Frutta = Frutta.Mela;