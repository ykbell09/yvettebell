$(function () {

    // const $nav = $('nav');
    // console.log($nav.html());

    const $navButton = $('#mobile-nav-button');
    $navButton.attr('src', 'images/icon_navopen.png');

    $navButton.on('click', function () {

        const $menu = $('#default-menu');
        $menu.slideToggle();

        // $navButton.attr('src', 'images/icon_navclose.png');
    });

    
});