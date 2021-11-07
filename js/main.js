$(function(){


    let audio = new Audio();
    let minutes = 0;
    let hours = 4;
    audio.preload = 'auto';
    audio.src = 'audio/audio.mp3';

$('.sound').on('click', function () {
    audio.play();
    audio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    $('.sun').addClass('active')
    $('.sound__inner').addClass('closed')
    setInterval(function () {
        minutes = (minutes + 1) > 59 ? 0 : (minutes + 1);
        if (minutes < 10) {
            $(".clock__timer-minutes").text("0" + minutes);
        } else {
            $(".clock__timer-minutes").text(minutes);
        }

        if (minutes === 0) {
            hours++;
            if (hours === 24) {
                hours = 0
            }
            if (hours < 10) {
                $(".clock__timer-hours").text("0" + hours);
            } else {
                $(".clock__timer-hours").text(hours);
            }
            if (hours === 4) {
                $('.sun__img').attr({
                    src: 'img/sun.png'
                });
                $('.flowers__box-item__img--1').attr({
                    src: 'img/1-1.jpg'
                });
                $('.flowers__box-item__img--8').attr({
                    src: 'img/8-2.jpg'
                });
                $('.flowers__box-item__img--9').attr({
                    src: 'img/9-2.jpg'
                });
                $('.flowers__box-item__img--10').attr({
                    src: 'img/10-2.jpg'
                });
                $('.sun__inner').css('backgroundImage', 'url("img/morning-bg.jpg")');

            }
            if (hours === 5) {
                $('.flowers__box-item__img--2').attr({
                    src: 'img/2-1.jpg'
                });
                $('.flowers__box-item__img--3').attr({
                    src: 'img/3-1.jpg'
                });
            }
            if (hours === 6) {
                $('.flowers__box-item__img--4').attr({
                    src: 'img/4-1.jpg'
                });
                $('.sun__inner').css('backgroundImage', 'url("img/day-bg.jpg")');
            }
            if (hours === 7) {
                $('.flowers__box-item__img--5').attr({
                    src: 'img/5-1.jpg'
                });
            }
            if (hours === 8) {
                $('.flowers__box-item__img--6').attr({
                    src: 'img/6-1.jpg'
                });
            }
            if (hours === 9) {
                $('.flowers__box-item__img--7').attr({
                    src: 'img/7-1.jpg'
                });
                $('.flowers__box-item__img--1').attr({
                    src: 'img/1-2.jpg'
                });
            }
            if (hours === 10) {
                $('.flowers__box-item__img--2').attr({
                    src: 'img/2-2.jpg'
                });
            }
            if (hours === 13) {
                $('.flowers__box-item__img--7').attr({
                    src: 'img/7-2.jpg'
                });
            }
            if (hours === 14) {
                $('.flowers__box-item__img--5').attr({
                    src: 'img/5-2.jpg'
                });
            }
            if (hours === 16) {
                $('.flowers__box-item__img--6').attr({
                    src: 'img/6-2.jpg'
                });
            }
            if (hours === 17) {
                $('.flowers__box-item__img--4').attr({
                    src: 'img/4-2.jpg'
                });
            }
            if (hours === 19) {
                $('.flowers__box-item__img--3').attr({
                    src: 'img/3-2.jpg'
                });
                // $('.sun__inner').css('backgroundImage', 'url("img/evening-bg.jpg")');
            }
            if (hours === 20) {
                $('.flowers__box-item__img--8').attr({
                    src: 'img/8-1.jpg'
                });
                $('.flowers__box-item__img--9').attr({
                    src: 'img/9-1.jpg'
                });
                $('.sun__inner').css('backgroundImage', 'url("img/evening-bg.jpg")');
            }
            if (hours === 21) {
                $('.flowers__box-item__img--10').attr({
                    src: 'img/10-1.jpg'
                });
                $('.sun__img').attr({
                    src: 'img/moon.png'
                });
            }
            if (hours === 22) {
                $('.sun__inner').css('backgroundImage', 'url("img/night-bg.jpg")');
            }
        }
    }, 100);
})






  
});