const navbarBtn = document.querySelector('.navbarBtn');
const sideContainer = document.querySelector('.sidemenu-container');
const sidePTags = document.querySelectorAll('.sidemenu-item p');
const subscribeFont = document.querySelector('.sidemenu__subscribe > h1')
const mainSize = document.querySelector('.main')

// 초기값 설정
sideContainer.style.width = "185px";
mainSize.style.marginLeft = "224px";

navbarBtn.addEventListener('click', () => {
    console.log('Button clicked');
    console.log(getComputedStyle(sideContainer).width);
    sideContainer.style.width = (sideContainer.style.width === "185px") ? "42px" : "185px";
    // 각 p 태그에 대해 display 속성 변경
    sidePTags.forEach(p => {
        p.style.display = (sideContainer.style.width === "185px") ? "" : "none";
    });
    // 구독 폰트 변경
    subscribeFont.style.fontSize = (sideContainer.style.width === "185px") ? "1vw" : "0.6vw";
    // .main 사이즈 변경
    mainSize.style.marginLeft = (sideContainer.style.width === "185px") ? "224px" : "70px";
});