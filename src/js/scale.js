'use strict';
document.addEventListener('DOMContentLoaded', function() {

    window.addEventListener('scroll', () => {
        let scroll = window.scrollY;
        FvScale(scroll);
    });

    window.addEventListener('load', () => {
        let scroll = window.scrollY;
        FvScale(scroll);
    });

    window.addEventListener('resize', () => {
        let scroll = window.scrollY;
        FvScale(scroll);
    });

    // 画像の縮小
    const FvScale = (scroll) => {
        let FirstImages = document.querySelectorAll('.p-fv img');

        FirstImages.forEach((img) => {
            if (window.innerWidth > 900) {
                img.style.width = (100 / 3 + scroll / 10) + '%';
            } else {
                img.style.width = (100 - scroll / 10) + '%';
            }
        });
    };
})
