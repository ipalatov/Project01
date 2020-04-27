function modal() {
    let moreBtn = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        closeBtn = document.querySelector('.popup-close');

    moreBtn.addEventListener('click', function (e) {
        openOverlay(e);
    });

    function openOverlay(event) {
        overlay.style.display = 'block';
        moreBtn.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }

    closeBtn.addEventListener('click', function () {
        overlay.style.display = 'none';
        moreBtn.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    let descriptionBtn = document.querySelectorAll('.description-btn'),
        description = document.querySelectorAll('.description');

    for (let i = 0; i < descriptionBtn.length; i++) {
        descriptionBtn[i].addEventListener('click', function (e) {
            openOverlay(e);
        });
    }
}

module.exports = modal;
