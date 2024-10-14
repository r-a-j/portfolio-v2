$(document).ready(function () {

    $('#openModalBtn').on('click', function (e) {
        e.preventDefault();
        $('#pdfModal').fadeIn();
    });

    $('.close-btn').on('click', function () {
        $('#pdfModal').fadeOut();
    });

    $(window).on('click', function (e) {
        if ($(e.target).is('#pdfModal')) {
            $('#pdfModal').fadeOut();
        }
    });

    const menuItems = document.querySelectorAll('.menu_nav .nav-item');

    function removeActiveClasses() {
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
    }

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            removeActiveClasses();
            this.classList.add('active');
        });
    });

    const contactLink = document.querySelector('.nav-item a[href="#footer"]');
    const socialImages = document.querySelectorAll('.footer_social img');

    function glowImages() {
        socialImages.forEach(image => {
            image.classList.add('glow');
        });

        setTimeout(() => {
            socialImages.forEach(image => {
                image.classList.remove('glow');
            });
        }, 1000);
    }

    contactLink.addEventListener('click', function () {
        glowImages();
    });

    document.getElementById('gmail-link').addEventListener('click', function (event) {
        event.preventDefault();

        const userConfirmed = confirm("Do you want to send an email to er.rajpawar@gmail.com?");
        if (userConfirmed) {
            window.location.href = "mailto:er.rajpawar@gmail.com";
        }
    });
});