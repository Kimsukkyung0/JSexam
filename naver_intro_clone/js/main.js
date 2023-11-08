window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOMContentLoaded");

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
const pagination = document.querySelector(".slide_pagination");

for(let i=0; i<maxPage; i++){
    if(i===0){
        pagination.innerHTML += `<li class="active"></li>`;
    }else{
        pagination.innerHTML +=`<li></li>`;
    }
}
//페이지네이션내부 아이템 선택자

const paginationItems = document.querySelectorAll(".slide_pagination > li");
});


