var agora = new Date()
var hora = agora.getHours()
console.log(`São ${hora} Horas, e é:`)
if (hora < 6) {
    console.log('Madrugada')
} else if (hora < 12){
    console.log('Manha')
}else if(hora < 18) {
    console.log('Tarde')
}else if (hora <= 24){
    console.log('Noite')
}


