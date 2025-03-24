function contar() {
    let inicio = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    let res = document.getElementById("res")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERROR] Faltam dados!')
        res.innerHTML = 'Impossivel Contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('[ERROR] Passo invalido! Considerando passo 1')
            p = 1
        }

        if (i < f) {
            // Contagem crescente
            for(let c = i; c <=f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // Contagem regrassiva
            for(let c = i; c >=f; c -= p)
                res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
}