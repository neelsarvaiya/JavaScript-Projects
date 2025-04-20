window.addEventListener('mousemove', function (details) {
    var rect = document.querySelector('#rectangle');

   let val = gsap.utils.mapRange(
        0, 
        window.innerWidth, 
        100+rect.getBoundingClientRect().width/2,
        window.innerWidth - 200, 
        details.clientX
    );

    gsap.to(rect, {
        left: val,
        ease: Power3
    });

});