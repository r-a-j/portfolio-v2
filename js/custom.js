document.addEventListener('DOMContentLoaded', function () {
    const pdfModal = document.getElementById('pdfModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.querySelector('.close-btn');
    const menuItems = document.querySelectorAll('.menu_nav .nav-item');
    const contactLink = document.querySelector('.nav-item a[href="#footer"]');
    const socialImages = document.querySelectorAll('.footer_social img');
    const gmailLink = document.getElementById('gmail-link');

    if (openModalBtn && pdfModal) {
        openModalBtn.addEventListener('click', function (e) {
            e.preventDefault();
            pdfModal.style.display = 'block';
        });

        closeModalBtn?.addEventListener('click', function () {
            pdfModal.style.display = 'none';
        });

        window.addEventListener('click', function (e) {
            if (e.target === pdfModal) {
                pdfModal.style.display = 'none';
            }
        });
    }

    function removeActiveClasses() {
        menuItems.forEach(item => item.classList.remove('active'));
    }

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            removeActiveClasses();
            this.classList.add('active');
        });
    });

    function glowImages() {
        socialImages.forEach(image => image.classList.add('glow'));
        setTimeout(() => {
            socialImages.forEach(image => image.classList.remove('glow'));
        }, 1000);
    }

    contactLink?.addEventListener('click', glowImages);

    gmailLink?.addEventListener('click', function (event) {
        event.preventDefault();
        if (confirm('Do you want to send an email to er.rajpawar@gmail.com?')) {
            window.location.href = 'mailto:er.rajpawar@gmail.com';
        }
    });
});
