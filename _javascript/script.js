let dino = document.querySelector('#dino');
let cacto = document.querySelector('#cacto');
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