document.addEventListener('DOMContentLoaded', function () {
    var slideCount = 6;
    var startIdx = Math.floor(Math.random() * slideCount);
    // var currentSlide = document.querySelector('.slide_ctnt_list .slide_ctnt');
    currentSlide.textContent = startIdx + 1;

    var mainSwiper = new Swiper('.slide_container', {
        initialSlide: startIdx,
        effect: 'slide', // 'slide'(default), 'fade'
        autoplay: {
            delay: 5000,
            disableOnInteraction: false, //사용자 상호 작용 후 자동 재생이 중지되지 않으며 매회 다시 시작
        },
        speed: 1000,
        fadeEffect: {
            crossFade: true, //이펙트가 'fade'일 경우
        },
        loop: true,
        setWrapperSize: true, //모든 슬라이드의 총 너비/높이 설정
        navigation: {
            prevEl: '.btn_prev',
            nextEl: '.btn_next',
        },
        threshold: 300, // 임계값이 300이상일 때만 스와이퍼 작동
    });

    showSlideInfo(startIdx);
    mainSwiper.autoplay.start(); //자동 재생 시작

    // //현재 슬라이드에 맞춰 .slide_info_container 변화
    // mainSwiper.on('slideChangeTransitionStart', function () {
    //     var targetIdx = parseInt(document.querySelector('.swiper-slide-active').getAttribute('data-index'));
    //     showSlideInfo(targetIdx);
    // });
});
