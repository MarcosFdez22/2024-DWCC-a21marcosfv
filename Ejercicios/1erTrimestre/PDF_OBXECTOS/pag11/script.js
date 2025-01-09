//1. Crea unha función que reciba un elemento e un array como parámetros. A función debe devolver un novo array que conteña os índices onde aparece ese elemento no
//array.

const numeros = [1, 3, 5, 1, 4, 1, 6, 8, 10, 1,4];


function indices(num,array) {
  let contador=0
  const copia = []
  for (const element of array) {
    if (element==num) {
        copia.push(contador)
      
    }
    contador += 1
  }
  return copia

}
console.log(indices(4,numeros))


//2. Dado o array froitas (const froitas = ['peras', 'mazás', 'kiwis', 'plátanos',
//'mandarinas'];) , fai os seguintes apartados co método splice:
//a. Elimina as mazás.
//b. Engade laranxas e sandía detrás dos plátanos,.
//c. Quita os kiwis e pon no seu lugar cereixas e nésperas.



const froitas = ['peras', 'mazás', 'kiwis', 'plátanos','mandarinas'];

//a
froitas.splice(4,1)
console.log(froitas)

//b
froitas.splice(4,0,'laranxas','sandias')
console.log(froitas)

//c
froitas.splice(2,1,'cere','nespe')
console.log(froitas)



//3. Crea unha función á que se lle pase unha frase con varias palabras e devolva a
//mesma frase coa primeira letra de cada palabra en maiúsculas e o resto de letras en
//minúsculas.

const frase = 'hola que tal, muuuy buenas tardes'

const conver = frase.split('')
//let primera = conver[0]
//primera = primera.toUpperCase()

const nova = []
for (let index = 0; index < frase.length; index++) {
 
  if (index==0) {
    let primera = conver[0]
    primera = primera.toUpperCase()
    nova.push(primera)
  }else{
    nova.push(frase[index])
  }
  
}
let avero = nova.join('')

console.log(avero)





