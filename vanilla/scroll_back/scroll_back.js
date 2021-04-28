(function () {
    var goToTopButton = document.querySelector('.go-to-navigation');

    goToTopButton.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.onscroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            goToTopButton.classList.remove('hidden');
        } else {
            goToTopButton.classList.add('hidden');
        }
    };

})();