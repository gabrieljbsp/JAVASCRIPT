function contar() {
    var ini = document.querySelector('input#txtini')
    var fim = document.querySelector('input#txtfim')
    var passo = document.querySelector('input#txtpasso')
    var res = document.querySelector('div#res')
    if (ini.value.length == 0||fim.value.length == 0||passo.value.length == 0){
        //alert('[ERRO] Verrifique os dados digitados!')
        res.innerHTML = `Impossivel contar!`
    } else {
        res.innerHTML = `Contando... <br>`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            alert(`Passo ${p} invalido! Considerando PASSO 1`)
            p = 1
        }
        if (i < f) { 
            //CONTAGEM CRESCENTE      
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //CONTAGEM REGRESSIVA
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }

        }
        res.innerHTML += `\u{1F3C1}`

    }
    
}