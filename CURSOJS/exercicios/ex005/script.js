var lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')
var valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
} 

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    var num = document.querySelector('input#fnum')
    var numero = Number(num.value)

    if (isNumero(numero) && !inLista(numero, valores)) {
        valores.push(numero)
        console.log(valores)

        lista.innerHTML = ''

        for (let i = 0; i < valores.length; i++) {
            let item = document.createElement('option')
            item.text = `Valor ${valores[i]} adicionado.`
            lista.appendChild(item)
        }

    } else {
        window.alert('Valor invalido ou ja encontrado na lista.')
        
    }
    num.value = '' // Limpa o campo de entrada
    num.focus() // Coloca o cursor no campo de entrada
}

function finalizar() {
    // Mostra o total de numeros cadastrados no array
    res.innerHTML = `<br> Ao todo, temos ${valores.length} numeros cadastrados`

    // Mostra i maior numero do array
    let maior = valores[0]
    for (let i = 1; i < valores.length; i++) {
        if(valores[i] > maior) {
            maior = valores[i]
        }
    }
    res.innerHTML += `<br><br> O maior valor informado foi ${maior}.`
}







/* let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

num = Number(num)

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        window.alert('Tudo ok!')
    } else {
        window.alert('[ERROR] Valor invalido ou já está na lista!')
    }
} */