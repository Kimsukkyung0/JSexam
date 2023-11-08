//슬라이드 전체너비 구하기
const slide = document.querySelector(".slide_ctnt_list");
let slideTotalWidth = slide.clientWidth;

//버튼요소 선택
const prevBtn = document.querySelector(".btn_prev");
const nextBtn = document.querySelector(".btn_next");

//슬라이드 전체 선택
const slideItems = document.querySelectorAll(".slide_ctnt");

//슬라이드 인덱스
let currentSlide = 1;
//슬라이드 최댓값
const maxPage = slideItems.length;
console.log(maxPage);

//페이지네이션이라는 개념(index에 ul태그 추가후 html 소스 주입방식인듯)
const pagination = document.querySelector("slide_pagination");



//   //JQUERY 로 작성된 네이버 공홈 문법
var mainSwiper = new Swiper('.slide_container', {
//         initialSlide: startIdx,
//         effect: 'slide', // 'slide'(default), 'fade'
//         autoplay: {
//             delay: 5000,
//             disableOnInteraction: false, //사용자 상호 작용 후 자동 재생이 중지되지 않으며 매회 다시 시작
//         },
//         speed: 1000,
//         fadeEffect: {
//             crossFade: true, //이펙트가 'fade'일 경우
//         },
//         loop: true,
//         setWrapperSize: true, //모든 슬라이드의 총 너비/높이 설정
//         navigation: {
//             prevEl: '.btn_prev',
//             nextEl: '.btn_next',
//         },
//         threshold: 300, // 임계값이 300이상일 때만 스와이퍼 작동
//     });

//     showSlideInfo(startIdx);
//     mainSwiper.autoplay.start(); //자동 재생 시작
