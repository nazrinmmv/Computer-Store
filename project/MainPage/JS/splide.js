document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide', {
        type: 'carousel',
        rewind: true,
        pagination: false,
        arrows: true,
    }).mount();
});