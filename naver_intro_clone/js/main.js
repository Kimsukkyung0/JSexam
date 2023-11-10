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
let currSlide = 1;
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
//무한슬라이드를 위해 start/end 슬라이드 복사
 //슬라이드 아이템 collection내부의 첫번째 아이템.
const startSlide = slideItems[0];
const endSlide = slideItems[slideItems.length-1];

const startElem = document.createElement("div");
const endElem = document.createElement("div");//가상의 div요소 생성

endSlide.classList.forEach((c) => endElem.classList.add(c));
endElem.innerHTML = endSlide.innerHTML;


startSlide.classList.forEach((c) => startElem.classList.add(c));
startElem.innerHTML = startSlide.innerHTML;


//복사================================================================




// 각 복제한 엘리먼트 추가하기
slideItems[0].before(endElem);
slideItems[slideItems.length - 1].after(startElem);

let offset = slideWidth + currSlide;
slideItems.forEach((i) => {
  i.setAttribute("style", `left: ${-offset}px`);
});

function nextMove() {
  currSlide++;
  // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
  if (currSlide <= maxSlide) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * currSlide;
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
    currSlide = 0;
    let offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide++;
    offset = slideWidth * currSlide;
    // 각 슬라이드 아이템의 left에 offset 적용
    setTimeout(() => {
      // 각 슬라이드 아이템의 left에 offset 적용
      slideItems.forEach((i) => {
        // i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);
    // // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}
function prevMove() {
  currSlide--;
  // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
  if (currSlide > 0) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * currSlide;
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
    currSlide = maxSlide + 1;
    let offset = slideWidth * currSlide;
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide--;
    offset = slideWidth * currSlide;
    setTimeout(() => {
      // 각 슬라이드 아이템의 left에 offset 적용
      slideItems.forEach((i) => {
        // i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}

// 버튼 엘리먼트에 클릭 이벤트 추가하기
nextBtn.addEventListener("click", () => {
  // 이후 버튼 누를 경우 현재 슬라이드를 변경
  nextMove();
});
// 버튼 엘리먼트에 클릭 이벤트 추가하기
prevBtn.addEventListener("click", () => {
  // 이전 버튼 누를 경우 현재 슬라이드를 변경
  prevMove();
});

// 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
window.addEventListener("resize", () => {
  slideWidth = slide.clientWidth;
});

// 각 페이지네이션 클릭 시 해당 슬라이드로 이동하기
for (let i = 0; i < maxSlide; i++) {
  // 각 페이지네이션마다 클릭 이벤트 추가하기
  paginationItems[i].addEventListener("click", () => {
    // 클릭한 페이지네이션에 따라 현재 슬라이드 변경해주기(currSlide는 시작 위치가 1이기 때문에 + 1)
    currSlide = i + 1;
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * currSlide;
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  });
}

// 드래그(스와이프) 이벤트를 위한 변수 초기화
let startPoint = 0;
let endPoint = 0;

// PC 클릭 이벤트 (드래그)
slide.addEventListener("mousedown", (e) => {
  startPoint = e.pageX; // 마우스 드래그 시작 위치 저장
});

slide.addEventListener("mouseup", (e) => {
  endPoint = e.pageX; // 마우스 드래그 끝 위치 저장
  if (startPoint < endPoint) {
    // 마우스가 오른쪽으로 드래그 된 경우
    prevMove();
  } else if (startPoint > endPoint) {
    // 마우스가 왼쪽으로 드래그 된 경우
    nextMove();
  }
});




// //여기서부터 모르겠다.
// nextBtn.addEventListener("click",() => {
//     currentSlide++;

//     if(currentSlide ==maxSlide){
//         const offset = slideTotalWidth * (currentSlide - 1);
//         slideItems.forEach((i) => {
//             i.setAttribute("style", `left: ${-offset}px`);
//           });
//             paginationItems.forEach((i) => i.classList.remove("active"));
//             paginationItems[currentSlide - 1].classList.add("active");
//     } else {
//         currentSlide--;
//       }
// });

// // 버튼 엘리먼트에 클릭 이벤트 추가하기
// prevBtn.addEventListener("click", () => {
//     // 이전 버튼 누를 경우 현재 슬라이드를 변경
//     currentSlide--;
//     // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
//     if (currentSlide > 0) {
//       // 슬라이드를 이동시키기 위한 offset 계산
//       const offset = slideWidth * (currentSlide - 1);
//       // 각 슬라이드 아이템의 left에 offset 적용
//       slideItems.forEach((i) => {
//         i.setAttribute("style", `left: ${-offset}px`);
//       });
//       // 슬라이드 이동 시 현재 활성화된 pagination 변경
//       paginationItems.forEach((i) => i.classList.remove("active"));
//       paginationItems[currentSlide - 1].classList.add("active");
//     } else {
//       currentSlide++;
//     }
//   });
  
//   // 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
//   window.addEventListener("resize", () => {
//     slideTotalWidth = slide.clientWidth;
//   });



// });




