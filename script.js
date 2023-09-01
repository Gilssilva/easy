function carregar(){
    var t1 = window.document.getElementById('titulo')
    var msg= window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var Data = new Date()
    var hora = Data.getHours()
    msg.innerHTML= `Agora são ${hora}h.`

   if (hora>=0 && hora<12){
       t1.innerHTML ='<h1>Fala tu,Bom Dia</h1>'
       img.src ='fotodia.png'
       document.body.style.background = '#6db1e9'
    } else if (hora>=12 && hora<18){
       t1.innerHTML ='<h1>Fala tu,Boa Tarde</h1>'
       img.src ='fototarde.png'
       document.body.style.background = 'rgba(214, 130, 5, 0.918)'
    } else{
       t1.innerHTML ='<h1>Fala tu,Boa Noite</h1>'
       img.src ='fotonoite.png'
       document.body.style.background ='#4e374dcb'
    }
}