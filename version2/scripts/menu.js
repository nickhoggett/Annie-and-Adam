const menuIcon = document.querySelector('#menu-open i');
const menuMob = document.querySelector('.menu-mobile');
const crossIcon = document.querySelector('#menu-close');
const exitMenu = document.querySelectorAll('a.exitClick');

function openClose(){
    menuIcon.classList.toggle('closed');
    menuMob.classList.toggle('closed');
}

menuIcon.addEventListener('click', openClose);
crossIcon.addEventListener('click', openClose);

exitMenu.forEach(function(exit){
    exit.addEventListener('click', openClose);
});

