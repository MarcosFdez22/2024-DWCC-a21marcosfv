//1. Crea unha variable que almacene un día da semana de luns a domingo. En función do valor da variable mostra unha mensaxe indicando se o día é laborable ou non.
'use strict'
let dia = "sabado"

if(dia=="lunes" | dia=="martes") {
    console.log("labo")
}else if(dia=="sabado"){
    console.log("no")
}

//3. Escribe os números pares do 0 ao 30, incluídos.
let b = 0
while (b!=31) {
    if (b%2==0) {
        console.log(b)
    }
    b+=1
}

//4. Escribe as potencias de 2, dende 2⁰ ata 2 20 . Para cada potencia debe saír un texto similar a “2 elevado a 0 = 1”
let resultado = 1
for (let index = 0; index !=21; index++) {
    resultado *=2
    console.log("Dos elevado a " + index + " es " + resultado)
}