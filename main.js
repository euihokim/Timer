const hrs = document.querySelector(".hrs");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

hrs.addEventListener("click", () => {
    let inputHrs = prompt("시간을 입력해 주세요.");
    if (!inputHrs) {
        hrs.innerText = 00;
    }
    hrs.innerText = inputHrs;
});

min.addEventListener("click", () => {
    let inputMin = prompt("분을 입력해 주세요.");
    if (!inputMin) {
        min.innerText = 00;
    }
    min.innerText = inputMin;
});

sec.addEventListener("click", () => {
    let inputSec = prompt("초를 입력해 주세요.");
    if (!inputSec) {
        sec.innerText = 00;
    }
    sec.innerText = inputSec;
});
