'use strict';

/*controlador de eventos*/
const switcher = document.querySelector('.btn');
/*Evento escucha para el botón*/
switcher.addEventListener('click', function(){
document.body.classList.toggle('light-theme');
document.body.classList.toggle('dark-theme');

const className = document.body.className;
if(className == "light-theme"){
    this.textContent = "Dark";
}else{
    this.textContent = "Light";
}
/*Mensaje en consola*/
console.log('current class name: ' + className);
});