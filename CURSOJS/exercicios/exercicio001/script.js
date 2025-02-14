function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 10
    //var hora = data.getHours()
    msg.innerHTML = `Agora são exatamente ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = './images/manha.png'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        img.src = './images/tarde.png'
    } else {
        // Boa noite!
        img.src = "./images/noite.png"
    }
}
