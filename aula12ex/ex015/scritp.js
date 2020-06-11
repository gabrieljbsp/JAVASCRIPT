function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#anonasc')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                img.setAttribute('src','img/foto-bebe-m.png')
                //CRIANÇA
            } else if (idade < 21) {
                img.setAttribute('src','img/foto-jovem-m.png')
                //JOVEM
            } else if(idade < 50) {
                img.setAttribute('src','img/foto-adulto-m.png')
                //ADULTO
            } else
                img.setAttribute('src','img/foto-idoso-m.png') 
                //IDOSO
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                img.setAttribute('src','img/foto-bebe-f.png')
                //CRIANÇA
            } else if (idade < 21) {
                img.setAttribute('src','img/foto-jovem-f.png')
                //JOVEM
            } else if(idade < 50) {
                img.setAttribute('src','img/foto-adulto-f.png')
                //ADULTO
            } else
                img.setAttribute('src','img/foto-idoso-f.png') 
                //IDOSO
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}