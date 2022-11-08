/*Juego rompecabezas*/

let tablero = document.querySelector('.tablero');
let pieza = document.querySelector('.pieza');
let reinicio = document.querySelector('.boton-reinicio');
let imagen1 = document.querySelector('.imagen1');
let imagen2 = document.querySelector('.imagen2');
let imagen3 = document.querySelector('.imagen3');

/*intento llamar a cada espacio del rompecabezas como una sola clase o cada uno con etiquetas diferentes pero sigue sin resultar*/


pieza.addEventListener('dragstart', (evento)=>{
    evento.dataTransfer.setData('Text',evento.target.src)
});

tablero.addEventListener('dragover',(evento)=>{
    evento.preventDefault();
});

tablero.addEventListener('drop',(evento)=>{
    let infoImagen = evento.dataTransfer.getData('Text');
    tablero.innerHTML=`<img src="${infoImagen}">`
});

/*botón de reinicio pero no logro hacerlo funcionar*/

reinicio.addEventListener('click',()=>{
    imagen1.innerHTML= `<img src="./assets/imagenes/rompe2.png" alt="imagen-rompecabezas2" class="pieza">`
    imagen1.innerHTML= `<img src="./assets/imagenes/rompe1.png" alt="imagen-rompecabezas1" class="pieza">`
    imagen1.innerHTML= `<img src="./assets/imagenes/rompe3.png" alt="imagen-rompecabezas3" class="pieza">`
})