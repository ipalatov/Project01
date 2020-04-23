window.addEventListener('DOMContentLoaded', function () {
    'use sctrict';


    // Create TABs - start 

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');


    function HideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    HideTabContent(1);

    function ShowTabContent(b) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }

    info.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (e.target == tab[i]) {
                    HideTabContent(0);
                    ShowTabContent(i);
                    break;
                }
            }
        }
    });
    // Create TABs - end

    // Create timer - start 
    let deadline = '2020-05-21 19:50';

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endTime);
            hours.textContent = (t.hours) < 10 ? `0 ${t.hours}` : t.hours;
            minutes.textContent = (t.minutes) < 10 ? `0 ${t.minutes}` : t.minutes;
            seconds.textContent = (t.seconds) < 10 ? `0 ${t.seconds}` : t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }

        }
    }

    setClock('timer', deadline);
    // Create timer - end 


    // Create modal window - start 
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
    // Create modal window - end 

    // Form main start

    let message = {
        loading: 'Uploading....',
        success: 'Thank you! We will contact you soon.',
        failure: 'Somthing went wrong.'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        //for php request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};

        formData.forEach(function (value, key) {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });
    // Form main end

    // Form contact start

    let contactForm = document.querySelector('form'),
        inputContact = form.querySelectorAll('input');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        contactForm.appendChild(statusMessage);

        let requestContact = new XMLHttpRequest();
        requestContact.open('POST', 'server.php');
        requestContact.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formContact = new FormData(contactForm);
        let obj2 = {};
        formContact.forEach(function (value, key) {
            obj2[key] = value;
        });

        let jsonContact = JSON.stringify(obj2);

        requestContact.send(jsonContact);

        requestContact.addEventListener('readystatechange', function () {
            if (requestContact.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (requestContact.readyState === 4 && requestContact.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i=0; i < inputContact.length; i++) {
            inputContact[i].value = '';
        }
    });
    // Form contact end
    
});