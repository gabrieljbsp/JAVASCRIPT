function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()    
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#d5e6f6'
        //BOM DIA!
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fotodia.jpg'
        document.body.style.background = '#f1bf73'
        //BOA TARDE!
    } else {
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#111720'
        //BOA NOITE!
    }
}

