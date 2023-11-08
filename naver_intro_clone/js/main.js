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
//list 아이템즈가 정확히 주가됐는지 확인가넝.
console.log(paginationItems);




//여기서부터 모르겠다.
nextBtn.addEventListener("click",() => {
    currentSlide++;

    if(currentSlide ==maxSlide){
        const offset = slideTotalWidth * (currentSlide - 1);
        slideItems.forEach((i) => {
            i.setAttribute("style", `left: ${-offset}px`);
          });
            paginationItems.forEach((i) => i.classList.remove("active"));
            paginationItems[currentSlide - 1].classList.add("active");
    } else {
        currentSlide--;
      }
});

// 버튼 엘리먼트에 클릭 이벤트 추가하기
prevBtn.addEventListener("click", () => {
    // 이전 버튼 누를 경우 현재 슬라이드를 변경
    currentSlide--;
    // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
    if (currentSlide > 0) {
      // 슬라이드를 이동시키기 위한 offset 계산
      const offset = slideWidth * (currentSlide - 1);
      // 각 슬라이드 아이템의 left에 offset 적용
      slideItems.forEach((i) => {
        i.setAttribute("style", `left: ${-offset}px`);
      });
      // 슬라이드 이동 시 현재 활성화된 pagination 변경
      paginationItems.forEach((i) => i.classList.remove("active"));
      paginationItems[currentSlide - 1].classList.add("active");
    } else {
      currentSlide++;
    }
  });
  
  // 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
  window.addEventListener("resize", () => {
    slideTotalWidth = slide.clientWidth;
  });



});




