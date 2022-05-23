let dino = document.querySelector('#dino');
let cacto = document.querySelector('#quadrado');
var jump = false;
function jump1(){
    if(dino.classList != 'jump') {
        dino.classList.add('jump')
        jump = true;
    }
    setTimeout(function(){
        dino.classList.remove('jump')
        jump = false;
    }, 500)
}
    
function dead(){
    var leftCacto = parseInt(window.getComputedStyle(cacto).getPropertyValue('left'))

    if(leftCacto > -100 && jump == false){
        cacto.style.animation = 'none'
        cacto.style.display = 'none'
        document.write("Você perdeu! Pressione f5 para voltar!")
    }
}


