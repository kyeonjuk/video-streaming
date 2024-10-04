const navbarBtn = document.querySelector('.navbarBtn');
const sideContainer = document.querySelector('.sidemenu-container');

navbarBtn.addEventListener('click', () => {
    sideContainer.style.width = (sideContainer.style.width === "185px") ? "42px" : "185px";
});
