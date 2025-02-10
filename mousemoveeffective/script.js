const rect = document.querySelector('#rectangle');

rect.addEventListener("mousemove", function (details) {

    let rectangleLocation = rect.getBoundingClientRect();
    let mouseLocation = details.clientX - rectangleLocation.x;

    if (mouseLocation < rectangleLocation.width / 2) {
        let redcolor = gsap.utils.mapRange(0, rectangleLocation.width / 2, 255, 0, mouseLocation);

        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor},0,0)`,
        });
    }
    else {
        let bluecolor = gsap.utils.mapRange(rectangleLocation.width / 2, rectangleLocation.width, 0, 255, mouseLocation);

        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${bluecolor})`,
        });
        console.log();
    }
});

rect.addEventListener("mouseleave", function () {
    let whitecolor = 255;

    gsap.to(rect, {
        backgroundColor: `rgb(${whitecolor}, 255, 255)`,
    });
});

