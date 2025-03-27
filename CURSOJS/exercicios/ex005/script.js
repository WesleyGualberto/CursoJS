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
        window.alert('[ERROR] Valor invalido ou ja encontrado na lista.')
        
    }
    num.value = '' // Limpa o campo de entrada
    num.focus() // Coloca o cursor no campo de entrada
}

function finalizar() {
    if (valores.length >= 2) {
    // Mostra o total de numeros cadastrados no array
    res.innerHTML = `<br> Ao todo, temos ${valores.length} numeros cadastrados.`

    // Mostra o maior valor do array
    let maior = valores[0]
    for (let i = 1; i < valores.length; i++) {
        if(valores[i] > maior) {
            maior = valores[i]
        }
    }
    res.innerHTML += `<br><br> O maior valor informado foi ${maior}.`

    // Mostra o menor valor do array
    let menor = valores[0]
    for (let i = 1; i < valores.length; i++) {
        if (valores[i] < menor) {
            menor = valores[i]
        }
    }
    res.innerHTML += `<br><br> O menor valor informado foi ${menor}.`

    // Soma todos os valores dentro do array
    let soma = 0
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i]
    }
    res.innerHTML += `<br><br> Somando todos os valores, temos ${soma}.`

    // Pegando media dos valores do array
    let somaMedia = 0
    for (let i = 0; i < valores.length; i++) {
        somaMedia += valores[i]
    }
      let media = somaMedia / valores.length
    res.innerHTML += `<br><br> A media dos valores digitados e ${media}.`
} else {
    window.alert('[ERROR] Adicione dois ou mais valores antes de finalisar!')
}
}