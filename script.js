const menuList = $('.menu-list');
const burger = $('.menu-toggle');

burger.on('click', function() {
    menuList.toggleClass('show');
})

$('nav ul li a').on('click', function(e) {
    e.preventDefault();
    menuList.toggleClass('show');
    const goToSection = $(this).attr('href');
    console.log(goToSection);
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
    
})