$(function () {
    // opens nav menu on mobile when user clicks on hamburger button
    $('.hamburger').on('click', () => {
        $('.header .nav').slideDown();
    });
    // closes nav menu when user clicks on close button
    $('.close-button').on('click', () => {
        $('.header .nav').slideUp();
    });
});