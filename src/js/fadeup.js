'use strict';
const FadeEffect = document.querySelectorAll('.fadeEffect')

FadeEffect.forEach((element) => {
    let observer = new IntersectionObserver((entries)=> {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });
    observer.observe(element);
  });