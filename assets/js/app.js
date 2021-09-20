document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge: 'right',
    });

    var carouselElems = document.querySelectorAll('.carousel');
    M.Carousel.init(carouselElems, {
        fullwidth: true,
        indicators: true
    });

    setInterval(function () {
        M.Carousel.getInstance(carouselElems[0]).next()
    }, 6000)

    var elemsFloatingbtn = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(elemsFloatingbtn, {
        direction: 'top'
    });
});