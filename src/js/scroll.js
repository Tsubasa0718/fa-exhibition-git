'use strict';
// header
const Header = document.querySelector('.l-header');
window.addEventListener('scroll', ()=> {
    if(window.scrollY > 200){
     Header.classList.add('header--active');
     }else{
     Header.classList.remove('header--active');

    }
    })
// side-btn
const SideBtn = document.querySelector('.c-sidebtn-box');
const accessSection = document.querySelector('#access');

window.addEventListener('scroll', () => {
    const accessPosition = accessSection.getBoundingClientRect().top + window.scrollY - window.innerHeight;

    if (window.scrollY > 600 && window.scrollY < accessPosition) {
        SideBtn.classList.add('sidebtn--active');
    } else {
        SideBtn.classList.remove('sidebtn--active');
    }
});

// access

    let observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0
    };

    let observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelector('.l-bg').classList.add('show-bg');
            } else {
                document.querySelector('.l-bg').classList.remove('show-bg');
            }
        });
    }, observerOptions);

    let target = document.querySelector('#access');
    observer.observe(target);

