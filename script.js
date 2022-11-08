let video = document.querySelector('#video-historia')

let inicio = document.querySelector('.start')

let pausa = document.querySelector('.pause')

inicio.addEventListener('click',()=>{
    video.play()
});

pausa.addEventListener('click',()=>{
    video.pause()
});

