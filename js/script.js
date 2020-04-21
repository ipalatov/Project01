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
    let deadline = '2020-04-21 19:50';

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
            hours.textContent = (t.hours) < 10 ? '0' + t.hours : t.hours;
            minutes.textContent = (t.minutes) < 10 ? '0' + t.minutes : t.minutes;
            seconds.textContent = (t.seconds) < 10 ? '0' + t.seconds : t.seconds;

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




});