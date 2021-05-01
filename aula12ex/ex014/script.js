function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   // var hora = data.toLocaleTimeString()
   msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0  && hora < 12) {
        //bom dia
        img.src = 'fotomanha.png'
        document.body.style.background ='#c9b70f'
    } else if (hora >= 12 && hora <= 18 ) {
        //boa tarde
        img.src = 'fototarde.png'
        document.body.style.background ='#d4977e'
    }else  {
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.background ='#0f2739'
    }
}

var relogio = setInterval(() => {carregar()},1000);
