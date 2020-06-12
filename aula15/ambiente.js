let num = [2,3,1,5,4]

//num.push(5,4)// acresebta numero 4 e 5 nas ultimas posiçoes do vetor
//num[3] = 4 // acresenta numero 4 na indice/chave/key 3
//num.sort()
//console.log(num)
//console.log(num.length)
//console.log(`Nosso vertor e: ${num}`)
//console.log(`O primeiro valor do vetor é:: ${num[0]}`)
//num.sort()
//for (pos = 0;pos < num.length;pos++) {
//for(let pos in num){ // para cada posição em num
    //console.log(`O valor da chave: ${pos} possui o elemento: ${num[pos]}`)    
//}
let pos = num.indexOf(5)
if (pos == -1) {
    console.log(`O Valor nao foi encontrado!`)
} else {
    console.log(`O valor esta na posição: ${pos}`)
}
