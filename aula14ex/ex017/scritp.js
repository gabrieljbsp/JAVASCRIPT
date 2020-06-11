function gerar() {
    var num = document.querySelector('input#txtn')
    var tab = document.querySelector('select#seltab')
    
    if (num.value.length == 0) {
        alert('Digite um numero!')
        
    } else {
        var n = num.value
        var c = 1
        tab.innerHTML =''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n* c}`
            tab.appendChild(item)
            c++
        }
    }
}