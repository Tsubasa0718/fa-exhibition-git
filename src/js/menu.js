'use strict';
const Menubtn = document.getElementById('js-menubtn');
const Nav = document.getElementById('js-nav');

Menubtn.addEventListener('click', ()=>{
    Menubtn.classList.toggle('active');
    Nav.classList.toggle('active');
})